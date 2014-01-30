[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing action wrappers around channel-ends.\n\u003c/p\u003e\u003cp\u003eIn CHP, there are a variety of channel-ends.  Enrolled Chanin, Shared Chanout,\n plain Chanin, and so on.  The difference between these ends can be important;\n enrolled channel-ends can be resigned from, shared channel-ends need to be claimed\n before use.  But sometimes you just want to ignore those differences and read\n and write from the channel-end regardless of its type.  In particular, you want\n to pass a channel-end to a process without the process worrying about its type.\n\u003c/p\u003e\u003cp\u003eActions allow you to do this.  A send action is like a monadic function (\u003ccode\u003ea\n -\u003e CHP()\u003c/code\u003e) for sending an item, but can be poisoned too.  A recv action is like\n something of type \u003ccode\u003eCHP a\u003c/code\u003e that again can be poisoned.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html",
        "fct-type": "module",
        "title": "Actions"
      },
      "index": {
        "description": "module containing action wrappers around channel-ends In CHP there are variety of channel-ends Enrolled Chanin Shared Chanout plain Chanin and so on The difference between these ends can be important enrolled channel-ends can be resigned from shared channel-ends need to be claimed before use But sometimes you just want to ignore those differences and read and write from the channel-end regardless of its type In particular you want to pass channel-end to process without the process worrying about its type Actions allow you to do this send action is like monadic function CHP for sending an item but can be poisoned too recv action is like something of type CHP that again can be poisoned",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "Actions",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Actions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#t:RecvAction",
      "description": {
        "fct-descr": "\u003cp\u003eA receive action.  See \u003ccode\u003e\u003ca\u003erecvAction\u003c/a\u003e\u003c/code\u003e.  Note that it is poisonable.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#RecvAction",
        "fct-type": "data",
        "title": "RecvAction"
      },
      "index": {
        "description": "receive action See recvAction Note that it is poisonable",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "RecvAction",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Recv Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#t:SendAction",
      "description": {
        "fct-descr": "\u003cp\u003eA send action.  See \u003ccode\u003e\u003ca\u003esendAction\u003c/a\u003e\u003c/code\u003e.  Note that it is poisonable.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#SendAction",
        "fct-type": "data",
        "title": "SendAction"
      },
      "index": {
        "description": "send action See sendAction Note that it is poisonable",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "SendAction",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Send Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:makeCustomRecvAction",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a custom receive operation.  The first parameter should perform the receive,\n the second parameter should poison your communication channel, and the third\n parameter should check whether the communication channel is already poisoned.\n  Generally, you will want to use \u003ccode\u003e\u003ca\u003emakeRecvAction\u003c/a\u003e\u003c/code\u003e instead of this function.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "CHP a -\u003e CHP () -\u003e CHP () -\u003e RecvAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#makeCustomRecvAction",
        "fct-type": "function",
        "title": "makeCustomRecvAction"
      },
      "index": {
        "description": "Creates custom receive operation The first parameter should perform the receive the second parameter should poison your communication channel and the third parameter should check whether the communication channel is already poisoned Generally you will want to use makeRecvAction instead of this function",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "makeCustomRecvAction",
        "normalized": "CHP a-\u003eCHP()-\u003eCHP()-\u003eRecvAction a",
        "package": "chp-plus",
        "partial": "Custom Recv Action",
        "signature": "CHP a-\u003eCHP()-\u003eCHP()-\u003eRecvAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:makeCustomSendAction",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a custom send operation.  The first parameter should perform the send,\n the second parameter should poison your communication channel, and the third\n parameter should check whether the communication channel is already poisoned.\n  Generally, you will want to use \u003ccode\u003e\u003ca\u003emakeSendAction\u003c/a\u003e\u003c/code\u003e instead of this function.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e CHP ()) -\u003e CHP () -\u003e CHP () -\u003e SendAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#makeCustomSendAction",
        "fct-type": "function",
        "title": "makeCustomSendAction"
      },
      "index": {
        "description": "Creates custom send operation The first parameter should perform the send the second parameter should poison your communication channel and the third parameter should check whether the communication channel is already poisoned Generally you will want to use makeSendAction instead of this function",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "makeCustomSendAction",
        "normalized": "(a-\u003eCHP())-\u003eCHP()-\u003eCHP()-\u003eSendAction a",
        "package": "chp-plus",
        "partial": "Custom Send Action",
        "signature": "(a-\u003eCHP())-\u003eCHP()-\u003eCHP()-\u003eSendAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:makeRecvAction",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a reading channel end, gives back the corresponding \u003ccode\u003e\u003ca\u003eRecvAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "r a -\u003e RecvAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#makeRecvAction",
        "fct-type": "function",
        "title": "makeRecvAction"
      },
      "index": {
        "description": "Given reading channel end gives back the corresponding RecvAction",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "makeRecvAction",
        "normalized": "a b-\u003eRecvAction b",
        "package": "chp-plus",
        "partial": "Recv Action",
        "signature": "r a-\u003eRecvAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:makeRecvAction-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emakeRecvAction\u003c/a\u003e\u003c/code\u003e, but always applies the given function after receiving\n an item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "r a -\u003e (a -\u003e b) -\u003e RecvAction b",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#makeRecvAction%27",
        "fct-type": "function",
        "title": "makeRecvAction'"
      },
      "index": {
        "description": "Like makeRecvAction but always applies the given function after receiving an item",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "makeRecvAction'",
        "normalized": "a b-\u003e(b-\u003ec)-\u003eRecvAction c",
        "package": "chp-plus",
        "partial": "Recv Action'",
        "signature": "r a-\u003e(a-\u003eb)-\u003eRecvAction b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:makeSendAction",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a writing channel end, gives back the corresponding \u003ccode\u003e\u003ca\u003eSendAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "w a -\u003e SendAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#makeSendAction",
        "fct-type": "function",
        "title": "makeSendAction"
      },
      "index": {
        "description": "Given writing channel end gives back the corresponding SendAction",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "makeSendAction",
        "normalized": "a b-\u003eSendAction b",
        "package": "chp-plus",
        "partial": "Send Action",
        "signature": "w a-\u003eSendAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:makeSendAction-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emakeSendAction\u003c/a\u003e\u003c/code\u003e, but always applies the given function before sending\n the item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "w b -\u003e (a -\u003e b) -\u003e SendAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#makeSendAction%27",
        "fct-type": "function",
        "title": "makeSendAction'"
      },
      "index": {
        "description": "Like makeSendAction but always applies the given function before sending the item",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "makeSendAction'",
        "normalized": "a b-\u003e(c-\u003eb)-\u003eSendAction c",
        "package": "chp-plus",
        "partial": "Send Action'",
        "signature": "w b-\u003e(a-\u003eb)-\u003eSendAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:nullRecvAction",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a RecvAction, but always gives back the given data item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "a -\u003e RecvAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#nullRecvAction",
        "fct-type": "function",
        "title": "nullRecvAction"
      },
      "index": {
        "description": "Acts like RecvAction but always gives back the given data item",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "nullRecvAction",
        "normalized": "a-\u003eRecvAction a",
        "package": "chp-plus",
        "partial": "Recv Action",
        "signature": "a-\u003eRecvAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:nullSendAction",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a SendAction, but just discards the data.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "SendAction a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#nullSendAction",
        "fct-type": "function",
        "title": "nullSendAction"
      },
      "index": {
        "description": "Acts like SendAction but just discards the data",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "nullSendAction",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Send Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:recvAction",
      "description": {
        "fct-descr": "\u003cp\u003eReceives a data item using the given recvAction.  Whether this operation can\n be used in a choice (see \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e) is entirely dependent on whether the original\n action could be used in an alt.  For all of CHP's channels, this is true, but\n for your own custom receive actions, probably not.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "RecvAction a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#recvAction",
        "fct-type": "function",
        "title": "recvAction"
      },
      "index": {
        "description": "Receives data item using the given recvAction Whether this operation can be used in choice see alt is entirely dependent on whether the original action could be used in an alt For all of CHP channels this is true but for your own custom receive actions probably not",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "recvAction",
        "normalized": "RecvAction a-\u003eCHP a",
        "package": "chp-plus",
        "partial": "Action",
        "signature": "RecvAction a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Actions.html#v:sendAction",
      "description": {
        "fct-descr": "\u003cp\u003eSends a data item using the given sendAction.  Whether this operation can\n be used in a choice (see \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e) is entirely dependent on whether the original\n action could be used in an alt.  For all of CHP's channels, this is true, but\n for your own custom send actions, probably not.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Actions",
        "fct-package": "chp-plus",
        "fct-signature": "SendAction a -\u003e a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Actions.html#sendAction",
        "fct-type": "function",
        "title": "sendAction"
      },
      "index": {
        "description": "Sends data item using the given sendAction Whether this operation can be used in choice see alt is entirely dependent on whether the original action could be used in an alt For all of CHP channels this is true but for your own custom send actions probably not",
        "hierarchy": "Control Concurrent CHP Actions",
        "module": "Control.Concurrent.CHP.Actions",
        "name": "sendAction",
        "normalized": "SendAction a-\u003ea-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Action",
        "signature": "SendAction a-\u003ea-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an instance of Arrow for process pipelines.  As described in\n the original paper on arrows, they can be used to represent stream processing,\n so CHP seemed like a possible fit for an arrow.\n\u003c/p\u003e\u003cp\u003eWhether this is \u003cem\u003eactually\u003c/em\u003e an instance of Arrow depends on technicalities.\n  This can be demonstrated with the arrow law \u003ccode\u003earr id \u003e\u003e\u003e f = f = f \u003e\u003e\u003e arr\n id\u003c/code\u003e.  Whether CHP satisfies this arrow law depends on the definition of\n equality.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If equality means that given the same input value, both arrows produce the\n same corresponding output value, this is an arrow.\n\u003c/li\u003e\u003cli\u003e If equality means you give the arrows the same single input and wait for the single output,\n and the output is the same, this is an arrow.\n\u003c/li\u003e\u003cli\u003e If equality means that you can feed the arrows lots of inputs (one after\n the other) and the behaviour should be the same with regards to communication,\n this is not an arrow.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe problem lies in the buffering inherent in arrows.  Imagine if \u003ccode\u003ef\u003c/code\u003e is\n a single function.  \u003ccode\u003ef\u003c/code\u003e is effectively a buffer of one.  You can feed it\n a single value, but no more than that until you read its output.  However,\n if you have \u003ccode\u003earr id \u003e\u003e\u003e f\u003c/code\u003e, that can accept two inputs (one held by the\n \u003ccode\u003earr id\u003c/code\u003e process and one held by \u003ccode\u003ef\u003c/code\u003e) before you must accept the output.\n\u003c/p\u003e\u003cp\u003eI am fairly confident that the arrow laws are satisfied for the\n definition of equality that given the same single input, they will\n produce the same single output.  If you don't worry too much about the\n behavioural difference, and just take arrows as another way to wire\n together a certain class of process network, you should do fine.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html",
        "fct-type": "module",
        "title": "Arrow"
      },
      "index": {
        "description": "Provides an instance of Arrow for process pipelines As described in the original paper on arrows they can be used to represent stream processing so CHP seemed like possible fit for an arrow Whether this is actually an instance of Arrow depends on technicalities This can be demonstrated with the arrow law arr id arr id Whether CHP satisfies this arrow law depends on the definition of equality If equality means that given the same input value both arrows produce the same corresponding output value this is an arrow If equality means you give the arrows the same single input and wait for the single output and the output is the same this is an arrow If equality means that you can feed the arrows lots of inputs one after the other and the behaviour should be the same with regards to communication this is not an arrow The problem lies in the buffering inherent in arrows Imagine if is single function is effectively buffer of one You can feed it single value but no more than that until you read its output However if you have arr id that can accept two inputs one held by the arr id process and one held by before you must accept the output am fairly confident that the arrow laws are satisfied for the definition of equality that given the same single input they will produce the same single output If you don worry too much about the behavioural difference and just take arrows as another way to wire together certain class of process network you should do fine",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "Arrow",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#t:ProcessPipeline",
      "description": {
        "fct-descr": "\u003cp\u003eThe type that is an instance of \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e for process pipelines.  See \u003ccode\u003e\u003ca\u003erunPipeline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#ProcessPipeline",
        "fct-type": "data",
        "title": "ProcessPipeline"
      },
      "index": {
        "description": "The type that is an instance of Arrow for process pipelines See runPipeline",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "ProcessPipeline",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Process Pipeline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#t:ProcessPipelineLabel",
      "description": {
        "fct-descr": "\u003cp\u003eProcessPipelineLabel is a version of \u003ccode\u003e\u003ca\u003eProcessPipeline\u003c/a\u003e\u003c/code\u003e that allows the processes\n to be labelled, and thus in turn for the channels connecting the processes to\n be automatically labelled.  ProcessPipelineLabel is not an instance of Arrow,\n but it does have a lot of similarly named functions for working with it.  This\n awkwardness is due to the extra Show constraints on the connectors that allow\n the arrow's contents to appear in traces.\n\u003c/p\u003e\u003cp\u003eIf you don't use traces, use \u003ccode\u003e\u003ca\u003eProcessPipeline\u003c/a\u003e\u003c/code\u003e.  If you do use traces, and want\n to have better labels on the process and values used in your arrows, consider\n switching to ProcessPipelineLabel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#ProcessPipelineLabel",
        "fct-type": "data",
        "title": "ProcessPipelineLabel"
      },
      "index": {
        "description": "ProcessPipelineLabel is version of ProcessPipeline that allows the processes to be labelled and thus in turn for the channels connecting the processes to be automatically labelled ProcessPipelineLabel is not an instance of Arrow but it does have lot of similarly named functions for working with it This awkwardness is due to the extra Show constraints on the connectors that allow the arrow contents to appear in traces If you don use traces use ProcessPipeline If you do use traces and want to have better labels on the process and values used in your arrows consider switching to ProcessPipelineLabel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "ProcessPipelineLabel",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Process Pipeline Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:-42--38--38--38--42-",
      "description": {
        "fct-descr": "\u003cp\u003eThe '(&&&)' arrow combinator, for \u003ccode\u003e\u003ca\u003eProcessPipelineLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "ProcessPipelineLabel b c -\u003e ProcessPipelineLabel b c' -\u003e ProcessPipelineLabel b (c, c')",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#%2A%26%26%26%2A",
        "fct-type": "function",
        "title": "(*&&&*)"
      },
      "index": {
        "description": "The arrow combinator for ProcessPipelineLabel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "(*&&&*) *&&&*",
        "normalized": "ProcessPipelineLabel a b-\u003eProcessPipelineLabel a c-\u003eProcessPipelineLabel a(b,c)",
        "package": "chp-plus",
        "partial": "",
        "signature": "ProcessPipelineLabel b c-\u003eProcessPipelineLabel b c'-\u003eProcessPipelineLabel b(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:-42--42--42--42--42-",
      "description": {
        "fct-descr": "\u003cp\u003eThe '(***)' arrow combinator, for \u003ccode\u003e\u003ca\u003eProcessPipelineLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "ProcessPipelineLabel b c -\u003e ProcessPipelineLabel b' c' -\u003e ProcessPipelineLabel (b, b') (c, c')",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#%2A%2A%2A%2A%2A",
        "fct-type": "function",
        "title": "(*****)"
      },
      "index": {
        "description": "The arrow combinator for ProcessPipelineLabel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "(*****) *****",
        "normalized": "ProcessPipelineLabel a b-\u003eProcessPipelineLabel c d-\u003eProcessPipelineLabel(a,c)(b,d)",
        "package": "chp-plus",
        "partial": "",
        "signature": "ProcessPipelineLabel b c-\u003eProcessPipelineLabel b' c'-\u003eProcessPipelineLabel(b,b')(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:-42--60--60--60--42-",
      "description": {
        "fct-descr": "\u003cp\u003eThe '(\u003c\u003c\u003c)' arrow combinator, for \u003ccode\u003e\u003ca\u003eProcessPipelineLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "ProcessPipelineLabel b c -\u003e ProcessPipelineLabel a b -\u003e ProcessPipelineLabel a c",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#%2A%3C%3C%3C%2A",
        "fct-type": "function",
        "title": "(*\u003c\u003c\u003c*)"
      },
      "index": {
        "description": "The arrow combinator for ProcessPipelineLabel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "(*\u003c\u003c\u003c*) *\u003c\u003c\u003c*",
        "normalized": "ProcessPipelineLabel a b-\u003eProcessPipelineLabel c a-\u003eProcessPipelineLabel c b",
        "package": "chp-plus",
        "partial": "",
        "signature": "ProcessPipelineLabel b c-\u003eProcessPipelineLabel a b-\u003eProcessPipelineLabel a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:-42--62--62--62--42-",
      "description": {
        "fct-descr": "\u003cp\u003eThe '(\u003e\u003e\u003e)' arrow combinator, for \u003ccode\u003e\u003ca\u003eProcessPipelineLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "ProcessPipelineLabel a b -\u003e ProcessPipelineLabel b c -\u003e ProcessPipelineLabel a c",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#%2A%3E%3E%3E%2A",
        "fct-type": "function",
        "title": "(*\u003e\u003e\u003e*)"
      },
      "index": {
        "description": "The arrow combinator for ProcessPipelineLabel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "(*\u003e\u003e\u003e*) *\u003e\u003e\u003e*",
        "normalized": "ProcessPipelineLabel a b-\u003eProcessPipelineLabel b c-\u003eProcessPipelineLabel a c",
        "package": "chp-plus",
        "partial": "",
        "signature": "ProcessPipelineLabel a b-\u003eProcessPipelineLabel b c-\u003eProcessPipelineLabel a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:arrLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eProcessPipeline\u003c/a\u003e\u003c/code\u003e, but allows the process to be labelled.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "String -\u003e (a -\u003e b) -\u003e ProcessPipelineLabel a b",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#arrLabel",
        "fct-type": "function",
        "title": "arrLabel"
      },
      "index": {
        "description": "Like arr for ProcessPipeline but allows the process to be labelled",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "arrLabel",
        "normalized": "String-\u003e(a-\u003eb)-\u003eProcessPipelineLabel a b",
        "package": "chp-plus",
        "partial": "Label",
        "signature": "String-\u003e(a-\u003eb)-\u003eProcessPipelineLabel a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:arrStrict",
      "description": {
        "fct-descr": "\u003cp\u003eLike the arr function of the ProcessPipeline arrow instance, but fully evaluates\n the result before sending it.  If you are building process pipelines with arrows to\n try and get some parallel speed-up, you should try this function instead of\n arr itself.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e b) -\u003e ProcessPipeline a b",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#arrStrict",
        "fct-type": "function",
        "title": "arrStrict"
      },
      "index": {
        "description": "Like the arr function of the ProcessPipeline arrow instance but fully evaluates the result before sending it If you are building process pipelines with arrows to try and get some parallel speed-up you should try this function instead of arr itself",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "arrStrict",
        "normalized": "(a-\u003eb)-\u003eProcessPipeline a b",
        "package": "chp-plus",
        "partial": "Strict",
        "signature": "(a-\u003eb)-\u003eProcessPipeline a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:arrStrictLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earrStrict\u003c/a\u003e\u003c/code\u003e, but allows the process to be labelled.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "String -\u003e (a -\u003e b) -\u003e ProcessPipelineLabel a b",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#arrStrictLabel",
        "fct-type": "function",
        "title": "arrStrictLabel"
      },
      "index": {
        "description": "Like arrStrict but allows the process to be labelled",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "arrStrictLabel",
        "normalized": "String-\u003e(a-\u003eb)-\u003eProcessPipelineLabel a b",
        "package": "chp-plus",
        "partial": "Strict Label",
        "signature": "String-\u003e(a-\u003eb)-\u003eProcessPipelineLabel a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:arrowProcess",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a wrapper that forms this process into the right data type to be\n part of an arrow.\n\u003c/p\u003e\u003cp\u003eAny process you apply this to should produce exactly one output per\n input, or else you will find odd behaviour resulting (including deadlock).\n  So for example, \u003cem\u003edon't\u003c/em\u003e use \u003ccode\u003earrowProcess (\u003ccode\u003eControl.Concurrent.CHP.Common.filter\u003c/code\u003e\n ...)\u003c/code\u003e or \u003ccode\u003earrowProcess \u003ccode\u003eControl.Concurrent.CHP.Common.stream\u003c/code\u003e\u003c/code\u003e inside any arrow combinators\n other than \u003e\u003e\u003e and \u003c\u003c\u003c.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "(Chanin a -\u003e Chanout b -\u003e CHP ()) -\u003e ProcessPipeline a b",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#arrowProcess",
        "fct-type": "function",
        "title": "arrowProcess"
      },
      "index": {
        "description": "Adds wrapper that forms this process into the right data type to be part of an arrow Any process you apply this to should produce exactly one output per input or else you will find odd behaviour resulting including deadlock So for example don use arrowProcess Control.Concurrent.CHP.Common.filter or arrowProcess Control.Concurrent.CHP.Common.stream inside any arrow combinators other than and",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "arrowProcess",
        "normalized": "(Chanin a-\u003eChanout b-\u003eCHP())-\u003eProcessPipeline a b",
        "package": "chp-plus",
        "partial": "Process",
        "signature": "(Chanin a-\u003eChanout b-\u003eCHP())-\u003eProcessPipeline a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:arrowProcessLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earrowProcess\u003c/a\u003e\u003c/code\u003e, but allows the process to be labelled.  The same\n warnings as \u003ccode\u003e\u003ca\u003earrowProcess\u003c/a\u003e\u003c/code\u003e apply.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "String -\u003e (Chanin a -\u003e Chanout b -\u003e CHP ()) -\u003e ProcessPipelineLabel a b",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#arrowProcessLabel",
        "fct-type": "function",
        "title": "arrowProcessLabel"
      },
      "index": {
        "description": "Like arrowProcess but allows the process to be labelled The same warnings as arrowProcess apply",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "arrowProcessLabel",
        "normalized": "String-\u003e(Chanin a-\u003eChanout b-\u003eCHP())-\u003eProcessPipelineLabel a b",
        "package": "chp-plus",
        "partial": "Process Label",
        "signature": "String-\u003e(Chanin a-\u003eChanout b-\u003eCHP())-\u003eProcessPipelineLabel a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:runPipeline",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eProcessPipeline\u003c/a\u003e\u003c/code\u003e (formed using its \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e instance) and\n the channels to plug into the ends of the pipeline, returns the process\n representing the pipeline.\n\u003c/p\u003e\u003cp\u003eThe pipeline will run forever (until poisoned) and you must run it in\n parallel to whatever is feeding it the inputs and reading off the outputs.\n  Imagine that you want a process pipeline that takes in a pair of numbers,\n doubles the first and adds one to the second.  You could encode this\n in an arrow using:\n\u003c/p\u003e\u003cpre\u003e runPipeline (arr (*2) *** arr (+1))\n\u003c/pre\u003e\u003cp\u003eArrows are more useful where you already have processes written that\n process data and you want to easily wire them together.  The arrow notation\n is probably easier for doing that than declaring all the channels yourself\n and composing everything in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "ProcessPipeline a b -\u003e Chanin a -\u003e Chanout b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#runPipeline",
        "fct-type": "function",
        "title": "runPipeline"
      },
      "index": {
        "description": "Given ProcessPipeline formed using its Arrow instance and the channels to plug into the ends of the pipeline returns the process representing the pipeline The pipeline will run forever until poisoned and you must run it in parallel to whatever is feeding it the inputs and reading off the outputs Imagine that you want process pipeline that takes in pair of numbers doubles the first and adds one to the second You could encode this in an arrow using runPipeline arr arr Arrows are more useful where you already have processes written that process data and you want to easily wire them together The arrow notation is probably easier for doing that than declaring all the channels yourself and composing everything in parallel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "runPipeline",
        "normalized": "ProcessPipeline a b-\u003eChanin a-\u003eChanout b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Pipeline",
        "signature": "ProcessPipeline a b-\u003eChanin a-\u003eChanout b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Arrow.html#v:runPipelineLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunPipeline\u003c/a\u003e\u003c/code\u003e but for \u003ccode\u003e\u003ca\u003eProcessPipelineLabel\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Arrow",
        "fct-package": "chp-plus",
        "fct-signature": "ProcessPipelineLabel a b -\u003e Chanin a -\u003e Chanout b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Arrow.html#runPipelineLabel",
        "fct-type": "function",
        "title": "runPipelineLabel"
      },
      "index": {
        "description": "Like runPipeline but for ProcessPipelineLabel",
        "hierarchy": "Control Concurrent CHP Arrow",
        "module": "Control.Concurrent.CHP.Arrow",
        "name": "runPipelineLabel",
        "normalized": "ProcessPipelineLabel a b-\u003eChanin a-\u003eChanout b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Pipeline Label",
        "signature": "ProcessPipelineLabel a b-\u003eChanin a-\u003eChanout b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing CHP behaviours.  See \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html",
        "fct-type": "module",
        "title": "Behaviours"
      },
      "index": {
        "description": "module containing CHP behaviours See offer for details",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "Behaviours",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Behaviours",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#t:CHPBehaviour",
      "description": {
        "fct-descr": "\u003cp\u003eThis data represents a behaviour (potentially repeated) that will result in\n returning a value of type \u003ccode\u003ea\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#CHPBehaviour",
        "fct-type": "data",
        "title": "CHPBehaviour"
      },
      "index": {
        "description": "This data represents behaviour potentially repeated that will result in returning value of type See offer for more details",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "CHPBehaviour",
        "normalized": "",
        "package": "chp-plus",
        "partial": "CHPBehaviour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:alongside",
      "description": {
        "fct-descr": "\u003cp\u003eOffers one behaviour alongside another, combining their semantics.  See \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation is semantically associative and commutative.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "CHPBehaviour a -\u003e CHPBehaviour b -\u003e CHPBehaviour (a, b)",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#alongside",
        "fct-type": "function",
        "title": "alongside"
      },
      "index": {
        "description": "Offers one behaviour alongside another combining their semantics See offer This operation is semantically associative and commutative",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "alongside",
        "normalized": "CHPBehaviour a-\u003eCHPBehaviour b-\u003eCHPBehaviour(a,b)",
        "package": "chp-plus",
        "partial": "",
        "signature": "CHPBehaviour a-\u003eCHPBehaviour b-\u003eCHPBehaviour(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:alongside_",
      "description": {
        "fct-descr": "\u003cp\u003eOffers one behaviour alongside another, combining their semantics.  See \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e.\n Unlike \u003ccode\u003e\u003ca\u003ealongside\u003c/a\u003e\u003c/code\u003e, discards the output of the behaviours.\n\u003c/p\u003e\u003cp\u003eThis operation is associative and commutative.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "CHPBehaviour a -\u003e CHPBehaviour b -\u003e CHPBehaviour ()",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#alongside_",
        "fct-type": "function",
        "title": "alongside_"
      },
      "index": {
        "description": "Offers one behaviour alongside another combining their semantics See offer Unlike alongside discards the output of the behaviours This operation is associative and commutative",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "alongside_",
        "normalized": "CHPBehaviour a-\u003eCHPBehaviour b-\u003eCHPBehaviour()",
        "package": "chp-plus",
        "partial": "",
        "signature": "CHPBehaviour a-\u003eCHPBehaviour b-\u003eCHPBehaviour()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:endWhen",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour, and when it occurs, ends the entire call to \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e.\n  Returns Just the result if the behaviour happens, otherwise gives Nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "CHP a -\u003e CHPBehaviour (Maybe a)",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#endWhen",
        "fct-type": "function",
        "title": "endWhen"
      },
      "index": {
        "description": "Offers the given behaviour and when it occurs ends the entire call to offer Returns Just the result if the behaviour happens otherwise gives Nothing",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "endWhen",
        "normalized": "CHP a-\u003eCHPBehaviour(Maybe a)",
        "package": "chp-plus",
        "partial": "When",
        "signature": "CHP a-\u003eCHPBehaviour(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:offer",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour until finished.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e offer $ repeatedly p `alongside` repeatedly q\n\u003c/pre\u003e\u003cp\u003ewill repeatedly offer p and q without ever terminating.  This:\n\u003c/p\u003e\u003cpre\u003e offer $ repeatedly p `alongside` repeatedly q `alongside` endWhen r\n\u003c/pre\u003e\u003cp\u003ewill offer p repeatedly and q repeatedly and r, until r happens, at which point\n the behaviour will end.\n This:\n\u003c/p\u003e\u003cpre\u003e offer $ once p `alongside` endWhen q\n\u003c/pre\u003e\u003cp\u003ewill offer p and q; if p happens first it will wait for q, but if q happens\n first it will finish.  This:\n\u003c/p\u003e\u003cpre\u003e offer $ once p `alongside` endWhen q `alongside` endWhen r\n\u003c/pre\u003e\u003cp\u003epermits p to happen at most once, while either of q or r happening will finish\n the call.\n\u003c/p\u003e\u003cp\u003eAll sorts of combinations are possible, but it is important to note that you\n need at least one \u003ccode\u003e\u003ca\u003eendWhen\u003c/a\u003e\u003c/code\u003e event if you ever intend the call to finish.  Some\n laws involving \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e (ignoring the types and return values) are:\n\u003c/p\u003e\u003cpre\u003e offer (repeatedly p) == forever p\n offer (once p) == p \u003e\u003e stop -- i.e. it does not finish\n offer (endWhen q) == Just \u003c$\u003e q\n offer (endWhen p `alongside` endWhen q) == p \u003c-\u003e q\n offer (once p `alongside` endWhen q) == (p \u003e\u003e q) \u003c-\u003e q\n\u003c/pre\u003e\u003cp\u003eMost other uses of \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ealongside\u003c/a\u003e\u003c/code\u003e do not reduce down to simple CHP\n programs, which is of course their attraction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "CHPBehaviour a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#offer",
        "fct-type": "function",
        "title": "offer"
      },
      "index": {
        "description": "Offers the given behaviour until finished For example offer repeatedly alongside repeatedly will repeatedly offer and without ever terminating This offer repeatedly alongside repeatedly alongside endWhen will offer repeatedly and repeatedly and until happens at which point the behaviour will end This offer once alongside endWhen will offer and if happens first it will wait for but if happens first it will finish This offer once alongside endWhen alongside endWhen permits to happen at most once while either of or happening will finish the call All sorts of combinations are possible but it is important to note that you need at least one endWhen event if you ever intend the call to finish Some laws involving offer ignoring the types and return values are offer repeatedly forever offer once stop i.e it does not finish offer endWhen Just offer endWhen alongside endWhen offer once alongside endWhen Most other uses of offer and alongside do not reduce down to simple CHP programs which is of course their attraction",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "offer",
        "normalized": "CHPBehaviour a-\u003eCHP a",
        "package": "chp-plus",
        "partial": "",
        "signature": "CHPBehaviour a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:offerAll",
      "description": {
        "fct-descr": "\u003cp\u003eOffers all the given behaviours together, and gives back a list of the outcomes.\n\u003c/p\u003e\u003cp\u003eThis is roughly a shorthand for \u003ccode\u003eoffer . foldl1 alongside\u003c/code\u003e, except that if you\n pass the empty list, you simply get the empty list returned (rather than an\n error)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "[CHPBehaviour a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#offerAll",
        "fct-type": "function",
        "title": "offerAll"
      },
      "index": {
        "description": "Offers all the given behaviours together and gives back list of the outcomes This is roughly shorthand for offer foldl1 alongside except that if you pass the empty list you simply get the empty list returned rather than an error",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "offerAll",
        "normalized": "[CHPBehaviour a]-\u003eCHP[a]",
        "package": "chp-plus",
        "partial": "All",
        "signature": "[CHPBehaviour a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour, and when it occurs, does not offer it again.\n Returns Just the result if the behaviour happens, otherwise gives Nothing.\n \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e is different to \u003ccode\u003e\u003ca\u003eendWhen\u003c/a\u003e\u003c/code\u003e because the latter terminates the call to \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e\n regardless of other behaviours, whereas \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e does not terminate the call to \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e,\n it just won't be offered again during the call to \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e.  Thus if you only\n offer some \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e items without any \u003ccode\u003e\u003ca\u003eendWhen\u003c/a\u003e\u003c/code\u003e, then after all the \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e events\n have happened, the process will deadlock.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eonce m\u003c/code\u003e can be thought of as a shortcut for \u003ccode\u003elistToMaybe \u003ca\u003e$\u003c/a\u003e upTo1 m\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "CHP a -\u003e CHPBehaviour (Maybe a)",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Offers the given behaviour and when it occurs does not offer it again Returns Just the result if the behaviour happens otherwise gives Nothing once is different to endWhen because the latter terminates the call to offer regardless of other behaviours whereas once does not terminate the call to offer it just won be offered again during the call to offer Thus if you only offer some once items without any endWhen then after all the once events have happened the process will deadlock once can be thought of as shortcut for listToMaybe upTo1",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "once",
        "normalized": "CHP a-\u003eCHPBehaviour(Maybe a)",
        "package": "chp-plus",
        "partial": "",
        "signature": "CHP a-\u003eCHPBehaviour(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:repeatedly",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly offers the given behaviour until the outer call to \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e is terminated\n by an \u003ccode\u003e\u003ca\u003eendWhen\u003c/a\u003e\u003c/code\u003e event.  A list is returned (in chronological order) of the results\n of each occurrence of the behaviour.  \u003ccode\u003erepeatedly\u003c/code\u003e is like an unbounded \u003ccode\u003eupTo\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  CHP a -\u003e CHPBehaviour [a]",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#repeatedly",
        "fct-type": "function",
        "title": "repeatedly"
      },
      "index": {
        "description": "Repeatedly offers the given behaviour until the outer call to offer is terminated by an endWhen event list is returned in chronological order of the results of each occurrence of the behaviour repeatedly is like an unbounded upTo",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "repeatedly",
        "normalized": "a b CHP c-\u003eCHPBehaviour[c]",
        "package": "chp-plus",
        "partial": "",
        "signature": "forall a. CHP a-\u003eCHPBehaviour[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:repeatedlyRecurse",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatedly\u003c/a\u003e\u003c/code\u003e, but allows some state (of type \u003ccode\u003ea\u003c/code\u003e) to be passed from one\n subsequent call to another, as well as generating the results of type \u003ccode\u003eb\u003c/code\u003e.\n To begin with the function (first parameter) will be called with the initial\n state (second parameter).  If chosen, it will return the new state, and a result\n to be accumulated into the list.  The second call to the function will be passed\n the new state, to then return the even newer state and a second result, and\n so on.\n\u003c/p\u003e\u003cp\u003eIf you want to use this with the StateT monad transformer from the mtl library,\n you can call:\n\u003c/p\u003e\u003cpre\u003e repeatedlyRecurse (runStateT myStateAction) initialState\n   where\n     myStateAction :: StateT s CHP a\n     initialState :: s\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "forall a b.  (a -\u003e CHP (b, a)) -\u003e a -\u003e CHPBehaviour [b]",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#repeatedlyRecurse",
        "fct-type": "function",
        "title": "repeatedlyRecurse"
      },
      "index": {
        "description": "Like repeatedly but allows some state of type to be passed from one subsequent call to another as well as generating the results of type To begin with the function first parameter will be called with the initial state second parameter If chosen it will return the new state and result to be accumulated into the list The second call to the function will be passed the new state to then return the even newer state and second result and so on If you want to use this with the StateT monad transformer from the mtl library you can call repeatedlyRecurse runStateT myStateAction initialState where myStateAction StateT CHP initialState",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "repeatedlyRecurse",
        "normalized": "a b c(b-\u003eCHP(d,b))-\u003eb-\u003eCHPBehaviour[d]",
        "package": "chp-plus",
        "partial": "Recurse",
        "signature": "forall a b.(a-\u003eCHP(b,a))-\u003ea-\u003eCHPBehaviour[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:repeatedlyRecurse_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatedlyRecurse\u003c/a\u003e\u003c/code\u003e, but does not accumulate a list of results.\n\u003c/p\u003e\u003cp\u003eIf you want to use this with the StateT monad transformer from the mtl library,\n you can call:\n\u003c/p\u003e\u003cpre\u003e repeatedlyRecurse (execStateT myStateAction) initialState\n   where\n     myStateAction :: StateT s CHP a\n     initialState :: s\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  (a -\u003e CHP a) -\u003e a -\u003e CHPBehaviour ()",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#repeatedlyRecurse_",
        "fct-type": "function",
        "title": "repeatedlyRecurse_"
      },
      "index": {
        "description": "Like repeatedlyRecurse but does not accumulate list of results If you want to use this with the StateT monad transformer from the mtl library you can call repeatedlyRecurse execStateT myStateAction initialState where myStateAction StateT CHP initialState",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "repeatedlyRecurse_",
        "normalized": "a b(c-\u003eCHP c)-\u003ec-\u003eCHPBehaviour()",
        "package": "chp-plus",
        "partial": "Recurse",
        "signature": "forall a.(a-\u003eCHP a)-\u003ea-\u003eCHPBehaviour()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:repeatedly_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatedly\u003c/a\u003e\u003c/code\u003e, but discards the output.  Useful if the event is likely\n to occur a lot, and you don't need the results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "CHP a -\u003e CHPBehaviour ()",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#repeatedly_",
        "fct-type": "function",
        "title": "repeatedly_"
      },
      "index": {
        "description": "Like repeatedly but discards the output Useful if the event is likely to occur lot and you don need the results",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "repeatedly_",
        "normalized": "CHP a-\u003eCHPBehaviour()",
        "package": "chp-plus",
        "partial": "",
        "signature": "CHP a-\u003eCHPBehaviour()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Behaviours.html#v:upTo",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour up to the given number of times, returning a list\n of the results (in chronological order).  Like \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e, when the limit is reached,\n the call to \u003ccode\u003e\u003ca\u003eoffer\u003c/a\u003e\u003c/code\u003e is not terminated, so you still require an \u003ccode\u003e\u003ca\u003eendWhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Behaviours",
        "fct-package": "chp-plus",
        "fct-signature": "Int -\u003e CHP a -\u003e CHPBehaviour [a]",
        "fct-source": "src/Control-Concurrent-CHP-Behaviours.html#upTo",
        "fct-type": "function",
        "title": "upTo"
      },
      "index": {
        "description": "Offers the given behaviour up to the given number of times returning list of the results in chronological order Like once when the limit is reached the call to offer is not terminated so you still require an endWhen",
        "hierarchy": "Control Concurrent CHP Behaviours",
        "module": "Control.Concurrent.CHP.Behaviours",
        "name": "upTo",
        "normalized": "Int-\u003eCHP a-\u003eCHPBehaviour[a]",
        "package": "chp-plus",
        "partial": "To",
        "signature": "Int-\u003eCHP a-\u003eCHPBehaviour[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Buffers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious processes that act like buffers.  Poisoning either end of a buffer\n process is immediately passed on to the other side, in contrast to C++CSP2\n and JCSP.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Buffers",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Buffers.html",
        "fct-type": "module",
        "title": "Buffers"
      },
      "index": {
        "description": "Various processes that act like buffers Poisoning either end of buffer process is immediately passed on to the other side in contrast to CSP2 and JCSP",
        "hierarchy": "Control Concurrent CHP Buffers",
        "module": "Control.Concurrent.CHP.Buffers",
        "name": "Buffers",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Buffers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Buffers.html#v:accumulatingInfiniteBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a FIFO buffer with unlimited capacity, but accumulates\n sequential inputs into a list which it offers in a single output.  Use with\n caution; make sure you do not let the buffer grow so large that it eats up\n all your memory.  When it is empty, it offers the empty list.  It always\n accepts input.  Once it has sent out a value (or values) it removes them\n from its internal storage.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Buffers",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  Chanin a -\u003e Chanout [a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Buffers.html#accumulatingInfiniteBuffer",
        "fct-type": "function",
        "title": "accumulatingInfiniteBuffer"
      },
      "index": {
        "description": "Acts like FIFO buffer with unlimited capacity but accumulates sequential inputs into list which it offers in single output Use with caution make sure you do not let the buffer grow so large that it eats up all your memory When it is empty it offers the empty list It always accepts input Once it has sent out value or values it removes them from its internal storage",
        "hierarchy": "Control Concurrent CHP Buffers",
        "module": "Control.Concurrent.CHP.Buffers",
        "name": "accumulatingInfiniteBuffer",
        "normalized": "a b Chanin c-\u003eChanout[c]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Infinite Buffer",
        "signature": "forall a. Chanin a-\u003eChanout[a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Buffers.html#v:fifoBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a limited capacity FIFO buffer of the given size.  When it is\n full it accepts no input, and when it is empty it offers no output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Buffers",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  Int -\u003e Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Buffers.html#fifoBuffer",
        "fct-type": "function",
        "title": "fifoBuffer"
      },
      "index": {
        "description": "Acts like limited capacity FIFO buffer of the given size When it is full it accepts no input and when it is empty it offers no output",
        "hierarchy": "Control Concurrent CHP Buffers",
        "module": "Control.Concurrent.CHP.Buffers",
        "name": "fifoBuffer",
        "normalized": "a b Int-\u003eChanin c-\u003eChanout c-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Buffer",
        "signature": "forall a. Int-\u003eChanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Buffers.html#v:infiniteBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a FIFO buffer with unlimited capacity.  Use with caution; make\n sure you do not let the buffer grow so large that it eats up all your memory.\n  When it is empty, it offers no output.  It always accepts input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Buffers",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Buffers.html#infiniteBuffer",
        "fct-type": "function",
        "title": "infiniteBuffer"
      },
      "index": {
        "description": "Acts like FIFO buffer with unlimited capacity Use with caution make sure you do not let the buffer grow so large that it eats up all your memory When it is empty it offers no output It always accepts input",
        "hierarchy": "Control Concurrent CHP Buffers",
        "module": "Control.Concurrent.CHP.Buffers",
        "name": "infiniteBuffer",
        "normalized": "a b Chanin c-\u003eChanout c-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Buffer",
        "signature": "forall a. Chanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Buffers.html#v:overflowingBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a FIFO buffer of limited capacity, except that when it is full,\n it always accepts input and discards it.  When it is empty, it does not offer output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Buffers",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  Int -\u003e Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Buffers.html#overflowingBuffer",
        "fct-type": "function",
        "title": "overflowingBuffer"
      },
      "index": {
        "description": "Acts like FIFO buffer of limited capacity except that when it is full it always accepts input and discards it When it is empty it does not offer output",
        "hierarchy": "Control Concurrent CHP Buffers",
        "module": "Control.Concurrent.CHP.Buffers",
        "name": "overflowingBuffer",
        "normalized": "a b Int-\u003eChanin c-\u003eChanout c-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Buffer",
        "signature": "forall a. Int-\u003eChanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Buffers.html#v:overwritingBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eActs like a FIFO buffer of limited capacity, except that when it is full,\n it always accepts input and pushes out the oldest item in the buffer.  When\n it is empty, it does not offer output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Buffers",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  Int -\u003e Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Buffers.html#overwritingBuffer",
        "fct-type": "function",
        "title": "overwritingBuffer"
      },
      "index": {
        "description": "Acts like FIFO buffer of limited capacity except that when it is full it always accepts input and pushes out the oldest item in the buffer When it is empty it does not offer output",
        "hierarchy": "Control Concurrent CHP Buffers",
        "module": "Control.Concurrent.CHP.Buffers",
        "name": "overwritingBuffer",
        "normalized": "a b Int-\u003eChanin c-\u003eChanout c-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Buffer",
        "signature": "forall a. Int-\u003eChanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of useful common processes that are useful when plumbing\n together a process network.  All the processes here rethrow poison when\n it is encountered, as this gives the user maximum flexibility (they can\n let it propagate it, or ignore it).\n\u003c/p\u003e\u003cp\u003eThe names here overlap with standard Prelude names.  This is\n deliberate, as the processes act in a similar manner to the\n corresponding Prelude versions.  It is expected that you will do\n something like:\n\u003c/p\u003e\u003cpre\u003e import qualified Control.Concurrent.CHP.Common as Common\n\u003c/pre\u003e\u003cp\u003eor:\n\u003c/p\u003e\u003cpre\u003e import qualified Control.Concurrent.CHP.Common as CHP\n\u003c/pre\u003e\u003cp\u003eto circumvent this problem.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "collection of useful common processes that are useful when plumbing together process network All the processes here rethrow poison when it is encountered as this gives the user maximum flexibility they can let it propagate it or ignore it The names here overlap with standard Prelude names This is deliberate as the processes act in similar manner to the corresponding Prelude versions It is expected that you will do something like import qualified Control.Concurrent.CHP.Common as Common or import qualified Control.Concurrent.CHP.Common as CHP to circumvent this problem",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "Common",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:advanceTime",
      "description": {
        "fct-descr": "\u003cp\u003eContinually waits for a specific time on the given clock, each time applying\n the function to work out the next specific time to wait for.  The most common\n thing to pass is Prelude.succ or (+1).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "(t -\u003e t) -\u003e Enrolled c t -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#advanceTime",
        "fct-type": "function",
        "title": "advanceTime"
      },
      "index": {
        "description": "Continually waits for specific time on the given clock each time applying the function to work out the next specific time to wait for The most common thing to pass is Prelude.succ or",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "advanceTime",
        "normalized": "(a-\u003ea)-\u003eEnrolled b a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Time",
        "signature": "(t-\u003et)-\u003eEnrolled c t-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads values from the channel and discards them, until poisoned.\n  Similar to the black-hole processes in some other frameworks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Forever reads values from the channel and discards them until poisoned Similar to the black-hole processes in some other frameworks",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "consume",
        "normalized": "Chanin a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:consumeAlongside",
      "description": {
        "fct-descr": "\u003cp\u003eFor the duration of the given process, acts as a consume process, but stops\n when the given process stops.  Note that there could be a timing issue where\n extra inputs are consumed at the end of the lifetime of the process.\n Note also that while poison from the given process will be propagated on the\n consumption channel, there is no mechanism to propagate poison from the consumption\n channel into the given process.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e CHP b -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#consumeAlongside",
        "fct-type": "function",
        "title": "consumeAlongside"
      },
      "index": {
        "description": "For the duration of the given process acts as consume process but stops when the given process stops Note that there could be timing issue where extra inputs are consumed at the end of the lifetime of the process Note also that while poison from the given process will be propagated on the consumption channel there is no mechanism to propagate poison from the consumption channel into the given process",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "consumeAlongside",
        "normalized": "Chanin a-\u003eCHP b-\u003eCHP b",
        "package": "chp-plus",
        "partial": "Alongside",
        "signature": "Chanin a-\u003eCHP b-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:extId",
      "description": {
        "fct-descr": "\u003cp\u003eForever forwards the value onwards.  This is\n like \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e but does not add any buffering to your network, and its presence\n is indetectable to the process either side.\n\u003c/p\u003e\u003cp\u003eextId is a unit of the associative operator \u003ccode\u003eControl.Concurrent.CHP.Utils.|-\u003e|\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#extId",
        "fct-type": "function",
        "title": "extId"
      },
      "index": {
        "description": "Forever forwards the value onwards This is like id but does not add any buffering to your network and its presence is indetectable to the process either side extId is unit of the associative operator Control.Concurrent.CHP.Utils",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "extId",
        "normalized": "Chanin a-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Id",
        "signature": "Chanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads in a value, and then based on applying the given function\n either discards it (if the function returns False) or sends it on (if\n the function returns True).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e Bool) -\u003e Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Forever reads in value and then based on applying the given function either discards it if the function returns False or sends it on if the function returns True",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eChanin a-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eChanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:id",
      "description": {
        "fct-descr": "\u003cp\u003eForever forwards the value onwards, unchanged.  Adding this to your process\n network effectively adds a single-place buffer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "r a -\u003e w a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#id",
        "fct-type": "function",
        "title": "id"
      },
      "index": {
        "description": "Forever forwards the value onwards unchanged Adding this to your process network effectively adds single-place buffer",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "id",
        "normalized": "a b-\u003ec b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "r a-\u003ew a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads a value from both its input channels in parallel, then joins\n the two values using the given function and sends them out again.  For example,\n \u003ccode\u003ejoin (,) c d\u003c/code\u003e will pair the values read from \u003ccode\u003ec\u003c/code\u003e and \u003ccode\u003ed\u003c/code\u003e and send out the\n pair on the output channel, whereas \u003ccode\u003ejoin (&&)\u003c/code\u003e will send out the conjunction\n of two boolean values, \u003ccode\u003ejoin (==)\u003c/code\u003e will read two values and output whether\n they are equal or not, etc.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Chanin a -\u003e Chanin b -\u003e Chanout c -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Forever reads value from both its input channels in parallel then joins the two values using the given function and sends them out again For example join will pair the values read from and and send out the pair on the output channel whereas join will send out the conjunction of two boolean values join will read two values and output whether they are equal or not etc",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "join",
        "normalized": "(a-\u003eb-\u003ec)-\u003eChanin a-\u003eChanin b-\u003eChanout c-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eChanin a-\u003eChanin b-\u003eChanout c-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:joinList",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads a value from all its input channels in parallel, then joins\n the values into a list in the same order as the channels, and sends them out again.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "[Chanin a] -\u003e Chanout [a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#joinList",
        "fct-type": "function",
        "title": "joinList"
      },
      "index": {
        "description": "Forever reads value from all its input channels in parallel then joins the values into list in the same order as the channels and sends them out again",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "joinList",
        "normalized": "[Chanin a]-\u003eChanout[a]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "List",
        "signature": "[Chanin a]-\u003eChanout[a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:labelMe",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#labelMe",
        "fct-type": "function",
        "title": "labelMe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "labelMe",
        "normalized": "String-\u003ea-\u003ea",
        "package": "chp-plus",
        "partial": "Me",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads in a value, transforms it using the given function, and sends it\n out again.  Note that the transformation is not applied strictly, so don't\n assume that this process will actually perform the computation.  If you\n require a strict transformation, use \u003ccode\u003e\u003ca\u003emap'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e b) -\u003e Chanin a -\u003e Chanout b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Forever reads in value transforms it using the given function and sends it out again Note that the transformation is not applied strictly so don assume that this process will actually perform the computation If you require strict transformation use map",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eChanin a-\u003eChanout b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eChanin a-\u003eChanout b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:map-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but applies the transformation strictly before sending on\n the value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e b) -\u003e Chanin a -\u003e Chanout b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#map%27",
        "fct-type": "function",
        "title": "map'"
      },
      "index": {
        "description": "Like map but applies the transformation strictly before sending on the value",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "map'",
        "normalized": "(a-\u003eb)-\u003eChanin a-\u003eChanout b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eChanin a-\u003eChanout b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:merger",
      "description": {
        "fct-descr": "\u003cp\u003eForever waits for input from one of its many channels and sends it\n out again on the output channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "[Chanin a] -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#merger",
        "fct-type": "function",
        "title": "merger"
      },
      "index": {
        "description": "Forever waits for input from one of its many channels and sends it out again on the output channel",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "merger",
        "normalized": "[Chanin a]-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "[Chanin a]-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:parDelta",
      "description": {
        "fct-descr": "\u003cp\u003eReads in a value, and sends it out in parallel on all the given output\n channels.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e [Chanout a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#parDelta",
        "fct-type": "function",
        "title": "parDelta"
      },
      "index": {
        "description": "Reads in value and sends it out in parallel on all the given output channels",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "parDelta",
        "normalized": "Chanin a-\u003e[Chanout a]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Delta",
        "signature": "Chanin a-\u003e[Chanout a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eSends out a single value first (the prefix) then behaves like id.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "a -\u003e Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "Sends out single value first the prefix then behaves like id",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "prefix",
        "normalized": "a-\u003eChanin a-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "a-\u003eChanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eForever sends out the same value on the given channel, until poisoned.\n  Similar to the white-hole processes in some other frameworks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Forever sends out the same value on the given channel until poisoned Similar to the white-hole processes in some other frameworks",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "repeat",
        "normalized": "a-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eSends out the specified value on the given channel the specified number\n of times, then finishes.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Int -\u003e a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "Sends out the specified value on the given channel the specified number of times then finishes",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Int-\u003ea-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:sorter",
      "description": {
        "fct-descr": "\u003cp\u003eA sorter process.  When it receives its first \u003ccode\u003eJust x\u003c/code\u003e data item, it keeps\n it.  When it receieves a second, it keeps the lowest of the two, and sends\n out the other one.  When it receives Nothing, it sends out its data value,\n then sends Nothing too.  The overall effect when chaining these things together\n is a sorting pump.  You inject all the values with Just, then send in a\n single Nothing to get the results out (in reverse order).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin (Maybe a) -\u003e Chanout (Maybe a) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#sorter",
        "fct-type": "function",
        "title": "sorter"
      },
      "index": {
        "description": "sorter process When it receives its first Just data item it keeps it When it receieves second it keeps the lowest of the two and sends out the other one When it receives Nothing it sends out its data value then sends Nothing too The overall effect when chaining these things together is sorting pump You inject all the values with Just then send in single Nothing to get the results out in reverse order",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "sorter",
        "normalized": "Chanin(Maybe a)-\u003eChanout(Maybe a)-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin(Maybe a)-\u003eChanout(Maybe a)-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:sorter-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike sorter, but with a custom comparison method.  You should pass in\n the equivalent of less-than: (\u003c).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "forall a.  (a -\u003e a -\u003e Bool) -\u003e Chanin (Maybe a) -\u003e Chanout (Maybe a) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#sorter%27",
        "fct-type": "function",
        "title": "sorter'"
      },
      "index": {
        "description": "Like sorter but with custom comparison method You should pass in the equivalent of less-than",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "sorter'",
        "normalized": "a b(c-\u003ec-\u003eBool)-\u003eChanin(Maybe c)-\u003eChanout(Maybe c)-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "forall a.(a-\u003ea-\u003eBool)-\u003eChanin(Maybe a)-\u003eChanout(Maybe a)-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads a pair from its input channel, then in parallel sends out\n the first and second parts of the pair on its output channels.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin (a, b) -\u003e Chanout a -\u003e Chanout b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Forever reads pair from its input channel then in parallel sends out the first and second parts of the pair on its output channels",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "split",
        "normalized": "Chanin(a,b)-\u003eChanout a-\u003eChanout b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin(a,b)-\u003eChanout a-\u003eChanout b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:stream",
      "description": {
        "fct-descr": "\u003cp\u003eStreams all items in a \u003ccode\u003eData.Traversable.Traversable\u003c/code\u003e container out\n in the order given by \u003ccode\u003eData.Traversable.mapM\u003c/code\u003e on the output channel (one at\n a time).  Lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003eData.Set.Set\u003c/code\u003e are all instances\n of \u003ccode\u003eData.Traversable.Traversable\u003c/code\u003e, so this can be used for all of\n those.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin (t a) -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#stream",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "Streams all items in Data.Traversable.Traversable container out in the order given by Data.Traversable.mapM on the output channel one at time Lists Maybe and Data.Set.Set are all instances of Data.Traversable.Traversable so this can be used for all of those",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "stream",
        "normalized": "Chanin(a b)-\u003eChanout b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin(t a)-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:succ",
      "description": {
        "fct-descr": "\u003cp\u003eForever reads in a value, and then sends out its successor (using \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#succ",
        "fct-type": "function",
        "title": "succ"
      },
      "index": {
        "description": "Forever reads in value and then sends out its successor using succ",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "succ",
        "normalized": "Chanin a-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003eDiscards the first value it receives then act likes id.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e Chanout a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Discards the first value it receives then act likes id",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "tail",
        "normalized": "Chanin a-\u003eChanout a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin a-\u003eChanout a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:tap",
      "description": {
        "fct-descr": "\u003cp\u003eA process that waits for an input, then sends it out on \u003cem\u003eall\u003c/em\u003e its output\n channels (in order) during an extended rendezvous.  This is often used to send the\n output on to both the normal recipient (without introducing buffering) and\n also to a listener process that wants to examine the value.  If the listener\n process is first in the list, and does not take the input immediately, the\n value will not be sent to the other recipients until it does.  The name\n of the process derives from the notion of a wire-tap, since the listener\n is hidden from the other processes (it does not visibly change the semantics\n for them -- except when the readers of the channels are offering a choice).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin a -\u003e [Chanout a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#tap",
        "fct-type": "function",
        "title": "tap"
      },
      "index": {
        "description": "process that waits for an input then sends it out on all its output channels in order during an extended rendezvous This is often used to send the output on to both the normal recipient without introducing buffering and also to listener process that wants to examine the value If the listener process is first in the list and does not take the input immediately the value will not be sent to the other recipients until it does The name of the process derives from the notion of wire-tap since the listener is hidden from the other processes it does not visibly change the semantics for them except when the readers of the channels are offering choice",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "tap",
        "normalized": "Chanin a-\u003e[Chanout a]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Chanin a-\u003e[Chanout a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:valueStore",
      "description": {
        "fct-descr": "\u003cp\u003eA shared variable process.  Given an initial value and two channels, it\n continually offers to output its current value or read in a new one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "a -\u003e r a -\u003e w a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#valueStore",
        "fct-type": "function",
        "title": "valueStore"
      },
      "index": {
        "description": "shared variable process Given an initial value and two channels it continually offers to output its current value or read in new one",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "valueStore",
        "normalized": "a-\u003eb a-\u003ec a-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Store",
        "signature": "a-\u003er a-\u003ew a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Common.html#v:valueStore-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA shared variable process.  The same as valueStore, but initially waits\n to read its starting value before then offering to either output its current\n value or read in a new one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Common",
        "fct-package": "chp-plus",
        "fct-signature": "r a -\u003e w a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Common.html#valueStore%27",
        "fct-type": "function",
        "title": "valueStore'"
      },
      "index": {
        "description": "shared variable process The same as valueStore but initially waits to read its starting value before then offering to either output its current value or read in new one",
        "hierarchy": "Control Concurrent CHP Common",
        "module": "Control.Concurrent.CHP.Common",
        "name": "valueStore'",
        "normalized": "a b-\u003ec b-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Store'",
        "signature": "r a-\u003ew a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing a \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e monad can be thought of as an equivalent to functions elsewhere\n in chp-plus (especially the \u003ca\u003eControl.Concurrent.CHP.Connect\u003c/a\u003e module) that support\n partial application of processes when wiring them up.\n\u003c/p\u003e\u003cp\u003eBinding in this monad can be thought of as \"and then wire that like this\".\n  You compose your processes together with a series of monadic actions, feeding\n processes into each function that wires up the next parameter, then taking the\n results of that action and further wiring it up another way.  At the end of\n the monadic block you should return the full list of wired-up processes, to\n be run in parallel using the \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e) functions.\n\u003c/p\u003e\u003cp\u003eHere is a simple example.  You have a list of processes that take an incoming\n and outgoing channel end and a barrier, and you want to wire them into a cycle\n and enroll them all on the barrier:\n\u003c/p\u003e\u003cpre\u003e processes :: [Chanin a -\u003e Chanout a -\u003e EnrolledBarrier -\u003e CHP ()]\n\n runProcesses = do b \u003c- newBarrier\n                   run $ cycleR processes \u003e\u003e= enrollAllR b\n\u003c/pre\u003e\u003cp\u003eThe order of the actions in this monad tends not to matter (it is a commutative\n monad for the most part) so you could equally have written:\n\u003c/p\u003e\u003cpre\u003e processes :: [EnrolledBarrier -\u003e Chanin a -\u003e Chanout a -\u003e CHP ()]\n\n runProcesses = do b \u003c- newBarrier\n                   run $ enrollAllR b processes \u003e\u003e= cycleR\n\u003c/pre\u003e\u003cp\u003eRemember with this monad to return all the processes to be run in parallel;\n if they are not returned, they will not be run and you will likely get deadlock.\n\u003c/p\u003e\u003cp\u003eA little more background on the monad is available in this blog post: \u003ca\u003ehttp://chplib.wordpress.com/2010/01/19/the-process-composition-monad/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html",
        "fct-type": "module",
        "title": "Composed"
      },
      "index": {
        "description": "module containing Composed monad The Composed monad can be thought of as an equivalent to functions elsewhere in chp-plus especially the Control.Concurrent.CHP.Connect module that support partial application of processes when wiring them up Binding in this monad can be thought of as and then wire that like this You compose your processes together with series of monadic actions feeding processes into each function that wires up the next parameter then taking the results of that action and further wiring it up another way At the end of the monadic block you should return the full list of wired-up processes to be run in parallel using the run or run functions Here is simple example You have list of processes that take an incoming and outgoing channel end and barrier and you want to wire them into cycle and enroll them all on the barrier processes Chanin Chanout EnrolledBarrier CHP runProcesses do newBarrier run cycleR processes enrollAllR The order of the actions in this monad tends not to matter it is commutative monad for the most part so you could equally have written processes EnrolledBarrier Chanin Chanout CHP runProcesses do newBarrier run enrollAllR processes cycleR Remember with this monad to return all the processes to be run in parallel if they are not returned they will not be run and you will likely get deadlock little more background on the monad is available in this blog post http chplib.wordpress.com the-process-composition-monad",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "Composed",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Composed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#t:Composed",
      "description": {
        "fct-descr": "\u003cp\u003eA monad for composing together CHP processes in cross-cutting ways; e.g. wiring\n together a list of processes into a pipeline, but also enrolling them all on\n a barrier.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#Composed",
        "fct-type": "data",
        "title": "Composed"
      },
      "index": {
        "description": "monad for composing together CHP processes in cross-cutting ways e.g wiring together list of processes into pipeline but also enrolling them all on barrier",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "Composed",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Composed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:connectR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e but operates in the \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "((l, r) -\u003e a) -\u003e Composed a",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#connectR",
        "fct-type": "function",
        "title": "connectR"
      },
      "index": {
        "description": "Like connect but operates in the Composed monad",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "connectR",
        "normalized": "((a,b)-\u003ec)-\u003eComposed c",
        "package": "chp-plus",
        "partial": "",
        "signature": "((l,r)-\u003ea)-\u003eComposed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:cycleR",
      "description": {
        "fct-descr": "\u003cp\u003eConnects together a list of processes into a cycle.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "[r -\u003e l -\u003e a] -\u003e Composed [a]",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#cycleR",
        "fct-type": "function",
        "title": "cycleR"
      },
      "index": {
        "description": "Connects together list of processes into cycle",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "cycleR",
        "normalized": "[a-\u003eb-\u003ec]-\u003eComposed[c]",
        "package": "chp-plus",
        "partial": "",
        "signature": "[r-\u003el-\u003ea]-\u003eComposed[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:enrollAllR",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eEnrollable\u003c/a\u003e\u003c/code\u003e item (such as a \u003ccode\u003e\u003ca\u003eBarrier\u003c/a\u003e\u003c/code\u003e), and a list of processes,\n composes them by enrolling them all on the given barrier.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "b p -\u003e [Enrolled b p -\u003e a] -\u003e Composed [a]",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#enrollAllR",
        "fct-type": "function",
        "title": "enrollAllR"
      },
      "index": {
        "description": "Given an Enrollable item such as Barrier and list of processes composes them by enrolling them all on the given barrier",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "enrollAllR",
        "normalized": "a b-\u003e[Enrolled a b-\u003ec]-\u003eComposed[c]",
        "package": "chp-plus",
        "partial": "All",
        "signature": "b p-\u003e[Enrolled b p-\u003ea]-\u003eComposed[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:enrollR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eenroll\u003c/a\u003e\u003c/code\u003e, this takes a barrier and a process wanting a barrier, and enrolls\n it for the duration, but operates using the \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "b p -\u003e (Enrolled b p -\u003e a) -\u003e Composed a",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#enrollR",
        "fct-type": "function",
        "title": "enrollR"
      },
      "index": {
        "description": "Like enroll this takes barrier and process wanting barrier and enrolls it for the duration but operates using the Composed monad",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "enrollR",
        "normalized": "a b-\u003e(Enrolled a b-\u003ec)-\u003eComposed c",
        "package": "chp-plus",
        "partial": "",
        "signature": "b p-\u003e(Enrolled b p-\u003ea)-\u003eComposed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:pipelineCompleteR",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "(l -\u003e a) -\u003e [r -\u003e l -\u003e a] -\u003e (r -\u003e a) -\u003e Composed [a]",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#pipelineCompleteR",
        "fct-type": "function",
        "title": "pipelineCompleteR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "pipelineCompleteR",
        "normalized": "(a-\u003eb)-\u003e[c-\u003ea-\u003eb]-\u003e(c-\u003eb)-\u003eComposed[b]",
        "package": "chp-plus",
        "partial": "Complete",
        "signature": "(l-\u003ea)-\u003e[r-\u003el-\u003ea]-\u003e(r-\u003ea)-\u003eComposed[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:pipelineR",
      "description": {
        "fct-descr": "\u003cp\u003eWires a list of processes into a pipeline that takes the two channels for\n the ends of the pipeline and returns the list of wired-up processes.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "[r -\u003e l -\u003e a] -\u003e Composed (r -\u003e l -\u003e [a])",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#pipelineR",
        "fct-type": "function",
        "title": "pipelineR"
      },
      "index": {
        "description": "Wires list of processes into pipeline that takes the two channels for the ends of the pipeline and returns the list of wired-up processes",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "pipelineR",
        "normalized": "[a-\u003eb-\u003ec]-\u003eComposed(a-\u003eb-\u003e[c])",
        "package": "chp-plus",
        "partial": "",
        "signature": "[r-\u003el-\u003ea]-\u003eComposed(r-\u003el-\u003e[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of CHP processes composed using the Composed monad, runs them\n as a parallel bunch of CHP results (with \u003ccode\u003e\u003ca\u003erunParallel\u003c/a\u003e\u003c/code\u003e) and returns the results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "Composed [CHP a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Given list of CHP processes composed using the Composed monad runs them as parallel bunch of CHP results with runParallel and returns the results",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "run",
        "normalized": "Composed[CHP a]-\u003eCHP[a]",
        "package": "chp-plus",
        "partial": "",
        "signature": "Composed[CHP a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:runWith",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "Composed a -\u003e forall b.  (a -\u003e CHP b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#runWith",
        "fct-type": "function",
        "title": "runWith"
      },
      "index": {
        "description": "See run and run",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "runWith",
        "normalized": "Composed a-\u003eb c(a-\u003eCHP d)-\u003eCHP d",
        "package": "chp-plus",
        "partial": "With",
        "signature": "Composed a-\u003eforall b.(a-\u003eCHP b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:run_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e but discards the results (uses \u003ccode\u003e\u003ca\u003erunParallel_\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "Composed [CHP a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#run_",
        "fct-type": "function",
        "title": "run_"
      },
      "index": {
        "description": "Like run but discards the results uses runParallel",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "run_",
        "normalized": "Composed[CHP a]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "Composed[CHP a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Composed.html#v:wrappedGridFourR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003ewrappedGridFour\u003c/code\u003e, but in the \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Composed",
        "fct-package": "chp-plus",
        "fct-signature": "[[FourWay above below left right -\u003e a]] -\u003e Composed [[a]]",
        "fct-source": "src/Control-Concurrent-CHP-Composed.html#wrappedGridFourR",
        "fct-type": "function",
        "title": "wrappedGridFourR"
      },
      "index": {
        "description": "Like wrappedGridFour but in the Composed monad",
        "hierarchy": "Control Concurrent CHP Composed",
        "module": "Control.Concurrent.CHP.Composed",
        "name": "wrappedGridFourR",
        "normalized": "[[FourWay a b c d-\u003ee]]-\u003eComposed[[e]]",
        "package": "chp-plus",
        "partial": "Grid Four",
        "signature": "[[FourWay above below left right-\u003ea]]-\u003eComposed[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains helper functions for wiring up collections of processes\n into a two-dimensional arrangement.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html",
        "fct-type": "module",
        "title": "TwoDim"
      },
      "index": {
        "description": "This module contains helper functions for wiring up collections of processes into two-dimensional arrangement",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "TwoDim",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Two Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#t:EightWay",
      "description": {
        "fct-descr": "\u003cp\u003eEightWay is simply a synonym for a pair of \u003ccode\u003e\u003ca\u003eFourWay\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFourWayDiag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#EightWay",
        "fct-type": "type",
        "title": "EightWay"
      },
      "index": {
        "description": "EightWay is simply synonym for pair of FourWay and FourWayDiag",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "EightWay",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Eight Way",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#t:FourWay",
      "description": {
        "fct-descr": "\u003cp\u003eA data type representing four-way connectivity for a process, with channels\n to the left and right, above and below.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWay",
        "fct-type": "data",
        "title": "FourWay"
      },
      "index": {
        "description": "data type representing four-way connectivity for process with channels to the left and right above and below",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "FourWay",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Four Way",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#t:FourWayDiag",
      "description": {
        "fct-descr": "\u003cp\u003eA data type representing four-way diagonal connectivity for a process, with\n channels above-left, below-right, above-right and below-left.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWayDiag",
        "fct-type": "data",
        "title": "FourWayDiag"
      },
      "index": {
        "description": "data type representing four-way diagonal connectivity for process with channels above-left below-right above-right and below-left",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "FourWayDiag",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Four Way Diag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:FourWay",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "FourWay",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWay",
        "fct-type": "function",
        "title": "FourWay"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "FourWay",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Four Way",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:FourWayDiag",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "FourWayDiag",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWayDiag",
        "fct-type": "function",
        "title": "FourWayDiag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "FourWayDiag",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Four Way Diag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:above",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "above",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWay",
        "fct-type": "function",
        "title": "above"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "above",
        "normalized": "",
        "package": "chp-plus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:aboveLeft",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "aboveLeft",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWayDiag",
        "fct-type": "function",
        "title": "aboveLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "aboveLeft",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:aboveRight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "aboveRight",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWayDiag",
        "fct-type": "function",
        "title": "aboveRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "aboveRight",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:below",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "below",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWay",
        "fct-type": "function",
        "title": "below"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "below",
        "normalized": "",
        "package": "chp-plus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:belowLeft",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "belowLeft",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWayDiag",
        "fct-type": "function",
        "title": "belowLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "belowLeft",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:belowRight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "belowRight",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWayDiag",
        "fct-type": "function",
        "title": "belowRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "belowRight",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:left",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "left",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWay",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "left",
        "normalized": "",
        "package": "chp-plus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:right",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "right",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#FourWay",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "right",
        "normalized": "",
        "package": "chp-plus",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:wrappedGridEight",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewrappedGridFour\u003c/a\u003e\u003c/code\u003e but provides eight-way connectivity.\n\u003c/p\u003e\u003cp\u003eThe note on \u003ccode\u003e\u003ca\u003ewrappedGridFour\u003c/a\u003e\u003c/code\u003e about processes being connected to themselves\n applies here too -- as does the note about processes being connected to\n each other multiple times.  If you have one row, a process's left,\n above-left and below-left channels all connect to the same process.  If you\n have a two-by-two grid, a process's four diagonal channels all connect to\n the same process.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "[[EightWay above below left right aboveLeft belowRight aboveRight belowLeft -\u003e CHP a]] -\u003e CHP [[a]]",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#wrappedGridEight",
        "fct-type": "function",
        "title": "wrappedGridEight"
      },
      "index": {
        "description": "Like wrappedGridFour but provides eight-way connectivity The note on wrappedGridFour about processes being connected to themselves applies here too as does the note about processes being connected to each other multiple times If you have one row process left above-left and below-left channels all connect to the same process If you have two-by-two grid process four diagonal channels all connect to the same process",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "wrappedGridEight",
        "normalized": "[[EightWay a b c d e f g h-\u003eCHP i]]-\u003eCHP[[i]]",
        "package": "chp-plus",
        "partial": "Grid Eight",
        "signature": "[[EightWay above below left right aboveLeft belowRight aboveRight belowLeft-\u003eCHP a]]-\u003eCHP[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:wrappedGridEight_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewrappedGridEight\u003c/a\u003e\u003c/code\u003e but discards the output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "[[EightWay above below left right aboveLeft belowRight aboveRight belowLeft -\u003e CHP a]] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#wrappedGridEight_",
        "fct-type": "function",
        "title": "wrappedGridEight_"
      },
      "index": {
        "description": "Like wrappedGridEight but discards the output",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "wrappedGridEight_",
        "normalized": "[[EightWay a b c d e f g h-\u003eCHP i]]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Grid Eight",
        "signature": "[[EightWay above below left right aboveLeft belowRight aboveRight belowLeft-\u003eCHP a]]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:wrappedGridFour",
      "description": {
        "fct-descr": "\u003cp\u003eWires the given grid of processes (that require four-way connectivity) together\n into a wrapped around grid (a torus) and runs them all in parallel.\n\u003c/p\u003e\u003cp\u003eThe parameter is a list of rows, and should be rectangular (i.e. all the rows\n should be the same length).  If not, an error will result.  The return value\n is guaranteed to be the same shape as the input.\n\u003c/p\u003e\u003cp\u003eIt is worth remembering that if you have only one row or one column (or\n both), processes can be connected to themselves, so make sure that if a\n process is connected to itself (e.g. its left channel connects to its right\n channel), it is coded such that it won't deadlock -- or if needed, checks for this\n possibility using \u003ccode\u003e\u003ca\u003esameChannel\u003c/a\u003e\u003c/code\u003e.  Processes may also be connected to each other\n multiple times -- in a two-wide grid, each process's left channel connects to\n the same process as its right.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "[[FourWay above below left right -\u003e CHP a]] -\u003e CHP [[a]]",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#wrappedGridFour",
        "fct-type": "function",
        "title": "wrappedGridFour"
      },
      "index": {
        "description": "Wires the given grid of processes that require four-way connectivity together into wrapped around grid torus and runs them all in parallel The parameter is list of rows and should be rectangular i.e all the rows should be the same length If not an error will result The return value is guaranteed to be the same shape as the input It is worth remembering that if you have only one row or one column or both processes can be connected to themselves so make sure that if process is connected to itself e.g its left channel connects to its right channel it is coded such that it won deadlock or if needed checks for this possibility using sameChannel Processes may also be connected to each other multiple times in two-wide grid each process left channel connects to the same process as its right",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "wrappedGridFour",
        "normalized": "[[FourWay a b c d-\u003eCHP e]]-\u003eCHP[[e]]",
        "package": "chp-plus",
        "partial": "Grid Four",
        "signature": "[[FourWay above below left right-\u003eCHP a]]-\u003eCHP[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect-TwoDim.html#v:wrappedGridFour_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewrappedGridFour\u003c/a\u003e\u003c/code\u003e but discards the return values.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect.TwoDim",
        "fct-package": "chp-plus",
        "fct-signature": "[[FourWay above below left right -\u003e CHP a]] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect-TwoDim.html#wrappedGridFour_",
        "fct-type": "function",
        "title": "wrappedGridFour_"
      },
      "index": {
        "description": "Like wrappedGridFour but discards the return values",
        "hierarchy": "Control Concurrent CHP Connect TwoDim",
        "module": "Control.Concurrent.CHP.Connect.TwoDim",
        "name": "wrappedGridFour_",
        "normalized": "[[FourWay a b c d-\u003eCHP e]]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Grid Four",
        "signature": "[[FourWay above below left right-\u003eCHP a]]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module of operators for connecting processes together.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html",
        "fct-type": "module",
        "title": "Connect"
      },
      "index": {
        "description": "module of operators for connecting processes together",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "Connect",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#t:ChannelPair",
      "description": {
        "fct-descr": "\u003cp\u003eA pair of channels.  The main use of this type is with the Connectable class,\n as it allows you to wire together two processes that take the exact same channel\n pair, e.g. both are of type \u003ccode\u003eChannelPair (Chanin Int) (Chanout Int) -\u003e CHP ()\u003c/code\u003e.  With the\n normal Connectable pair instances, one would need to be of type \u003ccode\u003e(Chanin Int,\n Chanout Int) -\u003e CHP ()\u003c/code\u003e, and the other of type \u003ccode\u003e(Chanout Int, Chanin Int) -\u003e\n CHP ()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#ChannelPair",
        "fct-type": "data",
        "title": "ChannelPair"
      },
      "index": {
        "description": "pair of channels The main use of this type is with the Connectable class as it allows you to wire together two processes that take the exact same channel pair e.g both are of type ChannelPair Chanin Int Chanout Int CHP With the normal Connectable pair instances one would need to be of type Chanin Int Chanout Int CHP and the other of type Chanout Int Chanin Int CHP",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "ChannelPair",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Channel Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#t:Connectable",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates that its two parameters can be joined together automatically.\n\u003c/p\u003e\u003cp\u003eRather than use \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e directly, you will want to use the operators such\n as '(\u003ca\u003e=\u003c/a\u003e)'.  There are different forms of this operator for in the middle of\n a pipeline (where you still need further parameters to each process), and at\n the ends.  See also \u003ccode\u003e\u003ca\u003epipelineConnect\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epipelineConnectComplete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#Connectable",
        "fct-type": "class",
        "title": "Connectable"
      },
      "index": {
        "description": "Indicates that its two parameters can be joined together automatically Rather than use connect directly you will want to use the operators such as There are different forms of this operator for in the middle of pipeline where you still need further parameters to each process and at the ends See also pipelineConnect and pipelineConnectComplete",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "Connectable",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Connectable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#t:ConnectableExtra",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eConnectable\u003c/a\u003e\u003c/code\u003e, but allows an extra parameter.\n\u003c/p\u003e\u003cp\u003eThe API (and name) for this is still in flux, so do not rely on it just yet.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#ConnectableExtra",
        "fct-type": "class",
        "title": "ConnectableExtra"
      },
      "index": {
        "description": "Like Connectable but allows an extra parameter The API and name for this is still in flux so do not rely on it just yet",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "ConnectableExtra",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Connectable Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:-124--60--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eJoins together the given two processes and runs them in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "(l -\u003e CHP ()) -\u003e (r -\u003e b -\u003e CHP ()) -\u003e b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#%7C%3C%3D%3E",
        "fct-type": "function",
        "title": "(|\u003c=\u003e)"
      },
      "index": {
        "description": "Joins together the given two processes and runs them in parallel",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "(|\u003c=\u003e) |\u003c=\u003e",
        "normalized": "(a-\u003eCHP())-\u003e(b-\u003ec-\u003eCHP())-\u003ec-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(l-\u003eCHP())-\u003e(r-\u003eb-\u003eCHP())-\u003eb-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:-124--60--61--62--124-",
      "description": {
        "fct-descr": "\u003cp\u003eJoins together the given two processes and runs them in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "(l -\u003e CHP ()) -\u003e (r -\u003e CHP ()) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#%7C%3C%3D%3E%7C",
        "fct-type": "function",
        "title": "(|\u003c=\u003e|)"
      },
      "index": {
        "description": "Joins together the given two processes and runs them in parallel",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "(|\u003c=\u003e|) |\u003c=\u003e|",
        "normalized": "(a-\u003eCHP())-\u003e(b-\u003eCHP())-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(l-\u003eCHP())-\u003e(r-\u003eCHP())-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:-60--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eJoins together the given two processes and runs them in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e l -\u003e CHP ()) -\u003e (r -\u003e b -\u003e CHP ()) -\u003e a -\u003e b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#%3C%3D%3E",
        "fct-type": "function",
        "title": "(\u003c=\u003e)"
      },
      "index": {
        "description": "Joins together the given two processes and runs them in parallel",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "(\u003c=\u003e) \u003c=\u003e",
        "normalized": "(a-\u003eb-\u003eCHP())-\u003e(c-\u003ed-\u003eCHP())-\u003ea-\u003ed-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(a-\u003el-\u003eCHP())-\u003e(r-\u003eb-\u003eCHP())-\u003ea-\u003eb-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:-60--61--62--124-",
      "description": {
        "fct-descr": "\u003cp\u003eJoins together the given two processes and runs them in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e l -\u003e CHP ()) -\u003e (r -\u003e CHP ()) -\u003e a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#%3C%3D%3E%7C",
        "fct-type": "function",
        "title": "(\u003c=\u003e|)"
      },
      "index": {
        "description": "Joins together the given two processes and runs them in parallel",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "(\u003c=\u003e|) \u003c=\u003e|",
        "normalized": "(a-\u003eb-\u003eCHP())-\u003e(c-\u003eCHP())-\u003ea-\u003eCHP()",
        "package": "chp-plus",
        "partial": "",
        "signature": "(a-\u003el-\u003eCHP())-\u003e(r-\u003eCHP())-\u003ea-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given code with the two items connected.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "((l, r) -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#connect",
        "fct-type": "method",
        "title": "connect"
      },
      "index": {
        "description": "Runs the given code with the two items connected",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "connect",
        "normalized": "((a,b)-\u003eCHP c)-\u003eCHP c",
        "package": "chp-plus",
        "partial": "",
        "signature": "((l,r)-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:connectExtra",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given code with the two items connected.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "ConnectableParam l r -\u003e ((l, r) -\u003e CHP ()) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#connectExtra",
        "fct-type": "method",
        "title": "connectExtra"
      },
      "index": {
        "description": "Runs the given code with the two items connected",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "connectExtra",
        "normalized": "ConnectableParam a b-\u003e((a,b)-\u003eCHP())-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Extra",
        "signature": "ConnectableParam l r-\u003e((l,r)-\u003eCHP())-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:connectList",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e, but provides the process a list of items of the specified size,\n and runs it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "Int -\u003e ([(l, r)] -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#connectList",
        "fct-type": "function",
        "title": "connectList"
      },
      "index": {
        "description": "Like connect but provides the process list of items of the specified size and runs it",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "connectList",
        "normalized": "Int-\u003e([(a,b)]-\u003eCHP c)-\u003eCHP c",
        "package": "chp-plus",
        "partial": "List",
        "signature": "Int-\u003e([(l,r)]-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:connectList_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnectList\u003c/a\u003e\u003c/code\u003e but ignores the results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "Int -\u003e ([(l, r)] -\u003e CHP a) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#connectList_",
        "fct-type": "function",
        "title": "connectList_"
      },
      "index": {
        "description": "Like connectList but ignores the results",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "connectList_",
        "normalized": "Int-\u003e([(a,b)]-\u003eCHP c)-\u003eCHP()",
        "package": "chp-plus",
        "partial": "List",
        "signature": "Int-\u003e([(l,r)]-\u003eCHP a)-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:connectWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike '(\u003ca\u003e=\u003c/a\u003e)' but with \u003ccode\u003e\u003ca\u003eConnectableExtra\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "ConnectableParam l r -\u003e (a -\u003e l -\u003e CHP ()) -\u003e (r -\u003e b -\u003e CHP ()) -\u003e a -\u003e b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#connectWith",
        "fct-type": "function",
        "title": "connectWith"
      },
      "index": {
        "description": "Like but with ConnectableExtra",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "connectWith",
        "normalized": "ConnectableParam a b-\u003e(c-\u003ea-\u003eCHP())-\u003e(b-\u003ed-\u003eCHP())-\u003ec-\u003ed-\u003eCHP()",
        "package": "chp-plus",
        "partial": "With",
        "signature": "ConnectableParam l r-\u003e(a-\u003el-\u003eCHP())-\u003e(r-\u003eb-\u003eCHP())-\u003ea-\u003eb-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:cycleConnect",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipelineConnect\u003c/a\u003e\u003c/code\u003e but also connects the last process into the first.\n  If the list is empty, it returns immediately.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "[r -\u003e l -\u003e CHP ()] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#cycleConnect",
        "fct-type": "function",
        "title": "cycleConnect"
      },
      "index": {
        "description": "Like pipelineConnect but also connects the last process into the first If the list is empty it returns immediately",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "cycleConnect",
        "normalized": "[a-\u003eb-\u003eCHP()]-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Connect",
        "signature": "[r-\u003el-\u003eCHP()]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:pipelineConnect",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003efoldl1 (\u003ca\u003e=\u003c/a\u003e)\u003c/code\u003e; connects a pipeline of processes together.  If the list\n is empty, it returns a process that ignores both its arguments and returns instantly.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "[r -\u003e l -\u003e CHP ()] -\u003e r -\u003e l -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#pipelineConnect",
        "fct-type": "function",
        "title": "pipelineConnect"
      },
      "index": {
        "description": "Like foldl1 connects pipeline of processes together If the list is empty it returns process that ignores both its arguments and returns instantly",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "pipelineConnect",
        "normalized": "[a-\u003eb-\u003eCHP()]-\u003ea-\u003eb-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Connect",
        "signature": "[r-\u003el-\u003eCHP()]-\u003er-\u003el-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Connect.html#v:pipelineConnectComplete",
      "description": {
        "fct-descr": "\u003cp\u003eConnects the given beginning process, the list of middle processes, and\n the end process into a pipeline and runs them all in parallel.  If the list\n is empty, it connects the beginning directly to the end.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Connect",
        "fct-package": "chp-plus",
        "fct-signature": "(l -\u003e CHP ()) -\u003e [r -\u003e l -\u003e CHP ()] -\u003e (r -\u003e CHP ()) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Connect.html#pipelineConnectComplete",
        "fct-type": "function",
        "title": "pipelineConnectComplete"
      },
      "index": {
        "description": "Connects the given beginning process the list of middle processes and the end process into pipeline and runs them all in parallel If the list is empty it connects the beginning directly to the end",
        "hierarchy": "Control Concurrent CHP Connect",
        "module": "Control.Concurrent.CHP.Connect",
        "name": "pipelineConnectComplete",
        "normalized": "(a-\u003eCHP())-\u003e[b-\u003ea-\u003eCHP()]-\u003e(b-\u003eCHP())-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Connect Complete",
        "signature": "(l-\u003eCHP())-\u003e[r-\u003el-\u003eCHP()]-\u003e(r-\u003eCHP())-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains a process for easily using stdin, stdout and stderr as channels.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Console.html",
        "fct-type": "module",
        "title": "Console"
      },
      "index": {
        "description": "Contains process for easily using stdin stdout and stderr as channels",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "Console",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Console",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#t:ConsoleChans",
      "description": {
        "fct-descr": "\u003cp\u003eA set of channels to be given to the process to run, containing channels\n for stdin, stdout and stderr.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Console.html#ConsoleChans",
        "fct-type": "data",
        "title": "ConsoleChans"
      },
      "index": {
        "description": "set of channels to be given to the process to run containing channels for stdin stdout and stderr",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "ConsoleChans",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Console Chans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#v:ConsoleChans",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "ConsoleChans",
        "fct-source": "src/Control-Concurrent-CHP-Console.html#ConsoleChans",
        "fct-type": "function",
        "title": "ConsoleChans"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "ConsoleChans",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Console Chans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#v:cStderr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "Chanout Char",
        "fct-source": "src/Control-Concurrent-CHP-Console.html#ConsoleChans",
        "fct-type": "function",
        "title": "cStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "cStderr",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Stderr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#v:cStdin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "Chanin Char",
        "fct-source": "src/Control-Concurrent-CHP-Console.html#ConsoleChans",
        "fct-type": "function",
        "title": "cStdin"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "cStdin",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Stdin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#v:cStdout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "Chanout Char",
        "fct-source": "src/Control-Concurrent-CHP-Console.html#ConsoleChans",
        "fct-type": "function",
        "title": "cStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "cStdout",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Stdout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Console.html#v:consoleProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA function for running the given CHP process that wants console channels.\n When your program finishes, the console channels are automatically poisoned,\n but it's good practice to poison them yourself when you finish.  Only ever\n run one of these processes at a time, or undefined behaviour will result.\n\u003c/p\u003e\u003cp\u003eWhen using this process, due to the way that the console handlers are terminated,\n you may sometimes see a notice that a thread was killed.  This is normal behaviour\n (unfortunately).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Console",
        "fct-package": "chp-plus",
        "fct-signature": "(ConsoleChans -\u003e CHP ()) -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHP-Console.html#consoleProcess",
        "fct-type": "function",
        "title": "consoleProcess"
      },
      "index": {
        "description": "function for running the given CHP process that wants console channels When your program finishes the console channels are automatically poisoned but it good practice to poison them yourself when you finish Only ever run one of these processes at time or undefined behaviour will result When using this process due to the way that the console handlers are terminated you may sometimes see notice that thread was killed This is normal behaviour unfortunately",
        "hierarchy": "Control Concurrent CHP Console",
        "module": "Control.Concurrent.CHP.Console",
        "name": "consoleProcess",
        "normalized": "(ConsoleChans-\u003eCHP())-\u003eCHP()",
        "package": "chp-plus",
        "partial": "Process",
        "signature": "(ConsoleChans-\u003eCHP())-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing some useful functions for testing CHP programs, both in\n the QuickCheck 2 framework and using HUnit.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHP-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "module containing some useful functions for testing CHP programs both in the QuickCheck framework and using HUnit",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "Test",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#t:CHPTest",
      "description": {
        "fct-descr": "\u003cp\u003eSee withCheck.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#CHPTest",
        "fct-type": "data",
        "title": "CHPTest"
      },
      "index": {
        "description": "See withCheck",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "CHPTest",
        "normalized": "",
        "package": "chp-plus",
        "partial": "CHPTest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#t:CHPTestResult",
      "description": {
        "fct-descr": "\u003cp\u003eA helper type for describing a more detailed result of a CHP test.  You can\n construct these values manually, or using the '(=*=)' operator.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#CHPTestResult",
        "fct-type": "data",
        "title": "CHPTestResult"
      },
      "index": {
        "description": "helper type for describing more detailed result of CHP test You can construct these values manually or using the operator",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "CHPTestResult",
        "normalized": "",
        "package": "chp-plus",
        "partial": "CHPTest Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#t:QuickCheckCHP",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around the CHP type that supports some QuickCheck \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e instances.\n  See \u003ccode\u003e\u003ca\u003eqcCHP\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eqcCHP'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#QuickCheckCHP",
        "fct-type": "data",
        "title": "QuickCheckCHP"
      },
      "index": {
        "description": "wrapper around the CHP type that supports some QuickCheck Testable instances See qcCHP and qcCHP",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "QuickCheckCHP",
        "normalized": "",
        "package": "chp-plus",
        "partial": "Quick Check CHP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:-61--42--61-",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if two things are equal; passes the test if they are, otherwise fails\n and gives an error that shows the two things in question.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "a -\u003e a -\u003e CHPTestResult",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#%3D%2A%3D",
        "fct-type": "function",
        "title": "(=*=)"
      },
      "index": {
        "description": "Checks if two things are equal passes the test if they are otherwise fails and gives an error that shows the two things in question",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "(=*=) =*=",
        "normalized": "a-\u003ea-\u003eCHPTestResult",
        "package": "chp-plus",
        "partial": "",
        "signature": "a-\u003ea-\u003eCHPTestResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:CHPTestFail",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHPTestFail String",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#CHPTestResult",
        "fct-type": "function",
        "title": "CHPTestFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "CHPTestFail",
        "normalized": "",
        "package": "chp-plus",
        "partial": "CHPTest Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:CHPTestPass",
      "description": {
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHPTestPass",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#CHPTestResult",
        "fct-type": "function",
        "title": "CHPTestPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "CHPTestPass",
        "normalized": "",
        "package": "chp-plus",
        "partial": "CHPTest Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:assertCHP",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the given Bool is True.  If it is, the assertion passes and the\n test continues.  If it is False, the given command is run (which should shut\n down the left-hand side of withCheck) and the test finishes, failing with the\n given String.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHP () -\u003e String -\u003e Bool -\u003e CHPTest ()",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#assertCHP",
        "fct-type": "function",
        "title": "assertCHP"
      },
      "index": {
        "description": "Checks that the given Bool is True If it is the assertion passes and the test continues If it is False the given command is run which should shut down the left-hand side of withCheck and the test finishes failing with the given String",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "assertCHP",
        "normalized": "CHP()-\u003eString-\u003eBool-\u003eCHPTest()",
        "package": "chp-plus",
        "partial": "CHP",
        "signature": "CHP()-\u003eString-\u003eBool-\u003eCHPTest()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:assertCHP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eassertCHP\u003c/a\u003e\u003c/code\u003e but issues no shutdown command.  You should only use this\n function if you are sure that the left-hand side of withCheck has already completed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "String -\u003e Bool -\u003e CHPTest ()",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#assertCHP%27",
        "fct-type": "function",
        "title": "assertCHP'"
      },
      "index": {
        "description": "Like assertCHP but issues no shutdown command You should only use this function if you are sure that the left-hand side of withCheck has already completed",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "assertCHP'",
        "normalized": "String-\u003eBool-\u003eCHPTest()",
        "package": "chp-plus",
        "partial": "CHP'",
        "signature": "String-\u003eBool-\u003eCHPTest()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:assertCHPEqual",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the given values are equal (first is the expected value of the\n test, second is the actual value).  If they are equal, the assertion passes and the\n test continues.  If they are not equal, the given command is run (which should shut\n down the left-hand side of withCheck) and the test finishes, failing with the\n a message formed of the given String, and describing the two values.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHP () -\u003e String -\u003e a -\u003e a -\u003e CHPTest ()",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#assertCHPEqual",
        "fct-type": "function",
        "title": "assertCHPEqual"
      },
      "index": {
        "description": "Checks that the given values are equal first is the expected value of the test second is the actual value If they are equal the assertion passes and the test continues If they are not equal the given command is run which should shut down the left-hand side of withCheck and the test finishes failing with the message formed of the given String and describing the two values",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "assertCHPEqual",
        "normalized": "CHP()-\u003eString-\u003ea-\u003ea-\u003eCHPTest()",
        "package": "chp-plus",
        "partial": "CHPEqual",
        "signature": "CHP()-\u003eString-\u003ea-\u003ea-\u003eCHPTest()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:assertCHPEqual-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eassertCHPEqual\u003c/a\u003e\u003c/code\u003e but issues no shutdown command.  You should only use this\n function if you are sure that the left-hand side of withCheck has already completed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "String -\u003e a -\u003e a -\u003e CHPTest ()",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#assertCHPEqual%27",
        "fct-type": "function",
        "title": "assertCHPEqual'"
      },
      "index": {
        "description": "Like assertCHPEqual but issues no shutdown command You should only use this function if you are sure that the left-hand side of withCheck has already completed",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "assertCHPEqual'",
        "normalized": "String-\u003ea-\u003ea-\u003eCHPTest()",
        "package": "chp-plus",
        "partial": "CHPEqual'",
        "signature": "String-\u003ea-\u003ea-\u003eCHPTest()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:propCHPInOut",
      "description": {
        "fct-descr": "\u003cp\u003eTests a process that takes a single input and produces a single output, using\n QuickCheck.\n\u003c/p\u003e\u003cp\u003eThe first parameter is a pure function that takes the input to the process,\n the output the process gave back, and indicates whether this is okay (True =\n test pass, False = test fail).  The second parameter is the process to test,\n and the third parameter is the thing to use to generate the inputs (passing \u003ccode\u003earbitrary\u003c/code\u003e\n is the simplest thing to do).\n\u003c/p\u003e\u003cp\u003eHere are a couple of example uses:\n\u003c/p\u003e\u003cpre\u003e propCHPInOut (==) Common.id (arbitrary :: Gen Int)\n\u003c/pre\u003e\u003cpre\u003e propCHPInOut (const $ (\u003c 0)) (Common.map (negate . abs)) (arbitrary :: Gen Int)\n\u003c/pre\u003e\u003cp\u003eThe test starts the process afresh each time, and shuts it down after the single\n output has been produced (by poisoning both its channels).  Any poison from\n the process being tested after it has produced its output is consequently ignored,\n but poison instead of producing an output will cause a test failure.\n If the process does not produce an output or poison (for example if you test\n something like the Common.filter process), the test will deadlock.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e (Chanin a -\u003e Chanout b -\u003e CHP ()) -\u003e Gen a -\u003e Property",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#propCHPInOut",
        "fct-type": "function",
        "title": "propCHPInOut"
      },
      "index": {
        "description": "Tests process that takes single input and produces single output using QuickCheck The first parameter is pure function that takes the input to the process the output the process gave back and indicates whether this is okay True test pass False test fail The second parameter is the process to test and the third parameter is the thing to use to generate the inputs passing arbitrary is the simplest thing to do Here are couple of example uses propCHPInOut Common.id arbitrary Gen Int propCHPInOut const Common.map negate abs arbitrary Gen Int The test starts the process afresh each time and shuts it down after the single output has been produced by poisoning both its channels Any poison from the process being tested after it has produced its output is consequently ignored but poison instead of producing an output will cause test failure If the process does not produce an output or poison for example if you test something like the Common.filter process the test will deadlock",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "propCHPInOut",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e(Chanin a-\u003eChanout b-\u003eCHP())-\u003eGen a-\u003eProperty",
        "package": "chp-plus",
        "partial": "CHPIn Out",
        "signature": "(a-\u003eb-\u003eBool)-\u003e(Chanin a-\u003eChanout b-\u003eCHP())-\u003eGen a-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:qcCHP",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a CHP program into a \u003ccode\u003e\u003ca\u003eQuickCheckCHP\u003c/a\u003e\u003c/code\u003e for use with \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003eqcCHP' . runCHP_CSPTrace\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHP a -\u003e QuickCheckCHP a",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#qcCHP",
        "fct-type": "function",
        "title": "qcCHP"
      },
      "index": {
        "description": "Turns CHP program into QuickCheckCHP for use with Testable instances Equivalent to qcCHP runCHP CSPTrace",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "qcCHP",
        "normalized": "CHP a-\u003eQuickCheckCHP a",
        "package": "chp-plus",
        "partial": "CHP",
        "signature": "CHP a-\u003eQuickCheckCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:qcCHP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the command that runs a CHP program and gives back a \u003ccode\u003e\u003ca\u003eQuickCheckCHP\u003c/a\u003e\u003c/code\u003e\n item for use with \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eYou use this function like:\n\u003c/p\u003e\u003cpre\u003e qcCHP' (runCHP_CSPTrace p)\n\u003c/pre\u003e\u003cp\u003eTo test process \u003ccode\u003ep\u003c/code\u003e with a CSP trace if it fails.  To turn off the display of\n tracing when a test fails, use:\n\u003c/p\u003e\u003cpre\u003e qcCHP' (runCHP_TraceOff p)\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "IO (Maybe a, t Unique) -\u003e QuickCheckCHP a",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#qcCHP%27",
        "fct-type": "function",
        "title": "qcCHP'"
      },
      "index": {
        "description": "Takes the command that runs CHP program and gives back QuickCheckCHP item for use with Testable instances You use this function like qcCHP runCHP CSPTrace To test process with CSP trace if it fails To turn off the display of tracing when test fails use qcCHP runCHP TraceOff",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "qcCHP'",
        "normalized": "IO(Maybe a,b Unique)-\u003eQuickCheckCHP a",
        "package": "chp-plus",
        "partial": "CHP'",
        "signature": "IO(Maybe a,t Unique)-\u003eQuickCheckCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:testCHP",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a CHP program that returns a Bool (True = test passed, False = test\n failed) and forms it into an HUnit test.\n\u003c/p\u003e\u003cp\u003eNote that if the program exits with poison, this is counted as a test failure.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHP Bool -\u003e Test",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#testCHP",
        "fct-type": "function",
        "title": "testCHP"
      },
      "index": {
        "description": "Takes CHP program that returns Bool True test passed False test failed and forms it into an HUnit test Note that if the program exits with poison this is counted as test failure",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "testCHP",
        "normalized": "CHP Bool-\u003eTest",
        "package": "chp-plus",
        "partial": "CHP",
        "signature": "CHP Bool-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:testCHP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etestCHP\u003c/a\u003e\u003c/code\u003e but allows you to return the more descriptive \u003ccode\u003e\u003ca\u003eCHPTestResult\u003c/a\u003e\u003c/code\u003e\n type, rather than a plain Bool.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHP CHPTestResult -\u003e Test",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#testCHP%27",
        "fct-type": "function",
        "title": "testCHP'"
      },
      "index": {
        "description": "Like testCHP but allows you to return the more descriptive CHPTestResult type rather than plain Bool",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "testCHP'",
        "normalized": "CHP CHPTestResult-\u003eTest",
        "package": "chp-plus",
        "partial": "CHP'",
        "signature": "CHP CHPTestResult-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:testCHPInOut",
      "description": {
        "fct-descr": "\u003cp\u003eTests a process that takes a single input and produces a single output, using\n HUnit.\n\u003c/p\u003e\u003cp\u003eThe first parameter is a pure function that takes the input to the process,\n the output the process gave back, and indicates whether this is okay (True =\n test pass, False = test fail).  The second parameter is the process to test,\n and the third parameter is the input to send to the process.\n\u003c/p\u003e\u003cp\u003eThe intention is that you will either create several tests with the same first\n two parameters or use a const function as the first parameter.  So for example,\n here is how you might test the identity process with several tests:\n\u003c/p\u003e\u003cpre\u003e let check = testCHPInOut (==) Common.id\n in TestList [check 0, check 3, check undefined]\n\u003c/pre\u003e\u003cp\u003eWhereas here is how you could test a slightly different process:\n\u003c/p\u003e\u003cpre\u003e let check = testCHPInOut (const $ (\u003c 0)) (Common.map (negate . abs))\n in TestList $ map check [-5..5]\n\u003c/pre\u003e\u003cp\u003eThe test starts the process afresh each time, and shuts it down after the single\n output has been produced (by poisoning both its channels).  Any poison from\n the process being tested after it has produced its output is consequently ignored,\n but poison instead of producing an output will cause a test failure.\n If the process does not produce an output or poison (for example if you test\n something like the Common.filter process), the test will deadlock.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e (Chanin a -\u003e Chanout b -\u003e CHP ()) -\u003e a -\u003e Test",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#testCHPInOut",
        "fct-type": "function",
        "title": "testCHPInOut"
      },
      "index": {
        "description": "Tests process that takes single input and produces single output using HUnit The first parameter is pure function that takes the input to the process the output the process gave back and indicates whether this is okay True test pass False test fail The second parameter is the process to test and the third parameter is the input to send to the process The intention is that you will either create several tests with the same first two parameters or use const function as the first parameter So for example here is how you might test the identity process with several tests let check testCHPInOut Common.id in TestList check check check undefined Whereas here is how you could test slightly different process let check testCHPInOut const Common.map negate abs in TestList map check The test starts the process afresh each time and shuts it down after the single output has been produced by poisoning both its channels Any poison from the process being tested after it has produced its output is consequently ignored but poison instead of producing an output will cause test failure If the process does not produce an output or poison for example if you test something like the Common.filter process the test will deadlock",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "testCHPInOut",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e(Chanin a-\u003eChanout b-\u003eCHP())-\u003ea-\u003eTest",
        "package": "chp-plus",
        "partial": "CHPIn Out",
        "signature": "(a-\u003eb-\u003eBool)-\u003e(Chanin a-\u003eChanout b-\u003eCHP())-\u003ea-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-plus/docs/Control-Concurrent-CHP-Test.html#v:withCheck",
      "description": {
        "fct-descr": "\u003cp\u003eA helper function that allows you to create CHP tests in an assertion style, either\n for use with HUnit or QuickCheck 2.\n\u003c/p\u003e\u003cp\u003eAny poison thrown by the first argument (the left-hand side when this function\n is used infix) is trapped and ignored.  Poison thrown by the second argument\n (the right-hand side when used infix) is counted as a test failure.\n\u003c/p\u003e\u003cp\u003eAs an example, imagine that you have a process that should repeatedly\n output the same value (42), called \u003ccode\u003emyProc\u003c/code\u003e.  There are several ways to test\n this, but for the purposes of illustration we will start by testing the\n first two values:\n\u003c/p\u003e\u003cpre\u003e myTest :: Test\n myTest = testCHP' $ do\n   c \u003c- oneToOneChannel\n   myProc (writer c)\n     `withCheck` do x0 \u003c- liftCHP $ readChannel (reader c)\n                    assertCHPEqual (poison (reader c)) \"First value\" 42 x0\n                    x1 \u003c- liftCHP $ readChannel (reader c)\n                    poison (reader c) -- Shutdown myProc\n                    assertCHPEqual' \"Second value\" 42 x1\n\u003c/pre\u003e\u003cp\u003eThis demonstrates the typical pattern: a do block with some initialisation to\n begin with (creating channels, enrolling on barriers), then a withCheck call\n with the thing you want to test on the left-hand side, and the part doing the\n testing with the asserts on the right-hand side.  Most CHP actions must be surrounded\n by \u003ccode\u003e\u003ca\u003eliftCHP\u003c/a\u003e\u003c/code\u003e, and assertions can then be made about the values.\n\u003c/p\u003e\u003cp\u003ePoison is used twice in our example.  The assertCHPEqual function takes as a\n first argument the command to execute if the assertion fails.  The problem\n is that if the assertion fails, the right-hand side will finish.  But it is\n composed in parallel with the left-hand side, which does not know to finish\n (deadlock!).  Thus we must pass a command to execute if the assertion fails\n that will shutdown the right-hand side.  The second assertion doesn't need\n this, because by the time we make the assertion, we have already inserted\n the poison.  Don't forget that you must poison to shut down the left-hand\n side if your test is successful or else you will again get deadlock.\n\u003c/p\u003e\u003cp\u003eA better way to test this process is of course to read in a much larger number\n of samples and check they are all the same, for example:\n\u003c/p\u003e\u003cpre\u003e myTest :: Test\n myTest = testCHP' $ do\n   c \u003c- oneToOneChannel\n   myProc (writer c)\n     `withCheck` do xs \u003c- liftCHP $ replicateM 1000 $ readChannel (reader c)\n                    poison (reader c) -- Shutdown myProc\n                    assertCHPEqual' \"1000 values\" xs (replicate 1000 42)\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.CHP.Test",
        "fct-package": "chp-plus",
        "fct-signature": "CHP a -\u003e CHPTest () -\u003e CHP CHPTestResult",
        "fct-source": "src/Control-Concurrent-CHP-Test.html#withCheck",
        "fct-type": "function",
        "title": "withCheck"
      },
      "index": {
        "description": "helper function that allows you to create CHP tests in an assertion style either for use with HUnit or QuickCheck Any poison thrown by the first argument the left-hand side when this function is used infix is trapped and ignored Poison thrown by the second argument the right-hand side when used infix is counted as test failure As an example imagine that you have process that should repeatedly output the same value called myProc There are several ways to test this but for the purposes of illustration we will start by testing the first two values myTest Test myTest testCHP do oneToOneChannel myProc writer withCheck do x0 liftCHP readChannel reader assertCHPEqual poison reader First value x0 x1 liftCHP readChannel reader poison reader Shutdown myProc assertCHPEqual Second value x1 This demonstrates the typical pattern do block with some initialisation to begin with creating channels enrolling on barriers then withCheck call with the thing you want to test on the left-hand side and the part doing the testing with the asserts on the right-hand side Most CHP actions must be surrounded by liftCHP and assertions can then be made about the values Poison is used twice in our example The assertCHPEqual function takes as first argument the command to execute if the assertion fails The problem is that if the assertion fails the right-hand side will finish But it is composed in parallel with the left-hand side which does not know to finish deadlock Thus we must pass command to execute if the assertion fails that will shutdown the right-hand side The second assertion doesn need this because by the time we make the assertion we have already inserted the poison Don forget that you must poison to shut down the left-hand side if your test is successful or else you will again get deadlock better way to test this process is of course to read in much larger number of samples and check they are all the same for example myTest Test myTest testCHP do oneToOneChannel myProc writer withCheck do xs liftCHP replicateM readChannel reader poison reader Shutdown myProc assertCHPEqual values xs replicate",
        "hierarchy": "Control Concurrent CHP Test",
        "module": "Control.Concurrent.CHP.Test",
        "name": "withCheck",
        "normalized": "CHP a-\u003eCHPTest()-\u003eCHP CHPTestResult",
        "package": "chp-plus",
        "partial": "Check",
        "signature": "CHP a-\u003eCHPTest()-\u003eCHP CHPTestResult"
      }
    }
  }
]