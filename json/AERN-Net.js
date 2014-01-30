[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of a few universaly useful simple network processes \n    and process templates. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "Definitions of few universaly useful simple network processes and process templates",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:constantChangedProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA generic process with no inputs that answers using a ChTChanges protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (q -\u003e a)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "constantChangedProcess"
      },
      "index": {
        "description": "generic process with no inputs that answers using ChTChanges protocol",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "constantChangedProcess",
        "normalized": "ERProcessName-\u003e(a-\u003eb)-\u003eChannelType-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Changed Process",
        "signature": "ERProcessName-\u003e(q-\u003ea)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:constantProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA generic stateless process with no inputs.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (q -\u003e a)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "constantProcess"
      },
      "index": {
        "description": "generic stateless process with no inputs",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "constantProcess",
        "normalized": "ERProcessName-\u003e(a-\u003eb)-\u003eChannelType-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": "ERProcessName-\u003e(q-\u003ea)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:constantStatefulProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA generic stateful process with no inputs.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (s -\u003e (QueryId, q) -\u003e ((Bool, a), Maybe s))-\u003e s-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "constantStatefulProcess"
      },
      "index": {
        "description": "generic stateful process with no inputs",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "constantStatefulProcess",
        "normalized": "ERProcessName-\u003e(a-\u003e(QueryId,b)-\u003e((Bool,c),Maybe a))-\u003ea-\u003eChannelType-\u003eERProcess d e",
        "package": "AERN-Net",
        "partial": "Stateful Process",
        "signature": "ERProcessName-\u003e(s-\u003e(QueryId,q)-\u003e((Bool,a),Maybe s))-\u003es-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:maybePassThroughProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA simple process that either responds with no further queries \n  or passes on a translated version of the query to another process, \n  and then passing back a translated version of the answer received.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "Bool-\u003e ERProcessName-\u003e (q1 -\u003e Bool)-\u003e (q1 -\u003e a1)-\u003e (q1 -\u003e q2)-\u003e (q1 -\u003e a2 -\u003e a1)-\u003e ChannelType-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "maybePassThroughProcess"
      },
      "index": {
        "description": "simple process that either responds with no further queries or passes on translated version of the query to another process and then passing back translated version of the answer received",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "maybePassThroughProcess",
        "normalized": "Bool-\u003eERProcessName-\u003e(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003ea)-\u003e(a-\u003eb-\u003eb)-\u003eChannelType-\u003eChannelType-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Pass Through Process",
        "signature": "Bool-\u003eERProcessName-\u003e(q-\u003eBool)-\u003e(q-\u003ea)-\u003e(q-\u003eq)-\u003e(q-\u003ea-\u003ea)-\u003eChannelType-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughBinaryProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA simple process that passes on a translated version of each query\n  to another process and translates the answers before passing them back.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "Bool-\u003e ERProcessName-\u003e (q -\u003e (q1, q2))-\u003e (q -\u003e (a1, a2) -\u003e a)-\u003e (ChannelType, ChannelType)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "passThroughBinaryProcess"
      },
      "index": {
        "description": "simple process that passes on translated version of each query to another process and translates the answers before passing them back",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "passThroughBinaryProcess",
        "normalized": "Bool-\u003eERProcessName-\u003e(a-\u003e(a,a))-\u003e(a-\u003e(b,b)-\u003eb)-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Through Binary Process",
        "signature": "Bool-\u003eERProcessName-\u003e(q-\u003e(q,q))-\u003e(q-\u003e(a,a)-\u003ea)-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughBinaryStatefulProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process that passes on a translated version of each query\n  to one or both of another 2 channels.  When the other channel(s) answer, \n  it analyses the answer(s) and decides whether to send other queries or\n  answer its original query.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (s -\u003e (QueryId, q) -\u003e (ERProcessAction s (Maybe q1, Maybe q2) a, Maybe s))-\u003e (s -\u003e (QueryId, q) -\u003e (Maybe a1, Maybe a2) -\u003e (ERProcessAction s (Maybe q1, Maybe q2) a, Maybe s))-\u003e s-\u003e (ChannelType, ChannelType)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "passThroughBinaryStatefulProcess"
      },
      "index": {
        "description": "process that passes on translated version of each query to one or both of another channels When the other channel answer it analyses the answer and decides whether to send other queries or answer its original query",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "passThroughBinaryStatefulProcess",
        "normalized": "ERProcessName-\u003e(a-\u003e(QueryId,b)-\u003e(ERProcessAction a(Maybe b,Maybe b)c,Maybe a))-\u003e(a-\u003e(QueryId,b)-\u003e(Maybe c,Maybe c)-\u003e(ERProcessAction a(Maybe b,Maybe b)c,Maybe a))-\u003ea-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess d e",
        "package": "AERN-Net",
        "partial": "Through Binary Stateful Process",
        "signature": "ERProcessName-\u003e(s-\u003e(QueryId,q)-\u003e(ERProcessAction s(Maybe q,Maybe q)a,Maybe s))-\u003e(s-\u003e(QueryId,q)-\u003e(Maybe a,Maybe a)-\u003e(ERProcessAction s(Maybe q,Maybe q)a,Maybe s))-\u003es-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA simple process that passes on a translated version of each query\n  to another process and translates the answers before passing them back.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "Bool-\u003e ERProcessName-\u003e (q1 -\u003e q2)-\u003e (q1 -\u003e a2 -\u003e a1)-\u003e ChannelType-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "passThroughProcess"
      },
      "index": {
        "description": "simple process that passes on translated version of each query to another process and translates the answers before passing them back",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "passThroughProcess",
        "normalized": "Bool-\u003eERProcessName-\u003e(a-\u003ea)-\u003e(a-\u003eb-\u003eb)-\u003eChannelType-\u003eChannelType-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Through Process",
        "signature": "Bool-\u003eERProcessName-\u003e(q-\u003eq)-\u003e(q-\u003ea-\u003ea)-\u003eChannelType-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughStatefulProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process with one input and one output socket. \n  Upon receiving a query or an answer related to a previously received query, \n  the process uses the provided functions to decide whether to answer\n  the query, make a new query or wait until the state meets a certain condition.\n  When the condition is met, the event (query or answer) in question is processed \n  again using the same function.    \n\u003c/p\u003e\u003cp\u003eSeveral simpler processes are defined as specialisations of this one.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (s -\u003e (QueryId, q1) -\u003e (ERProcessAction s q2 a1, Maybe s))-\u003e (s -\u003e (QueryId, q1) -\u003e (q2, a2) -\u003e (ERProcessAction s q2 a1, Maybe s))-\u003e s-\u003e ChannelType-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "passThroughStatefulProcess"
      },
      "index": {
        "description": "process with one input and one output socket Upon receiving query or an answer related to previously received query the process uses the provided functions to decide whether to answer the query make new query or wait until the state meets certain condition When the condition is met the event query or answer in question is processed again using the same function Several simpler processes are defined as specialisations of this one",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "passThroughStatefulProcess",
        "normalized": "ERProcessName-\u003e(a-\u003e(QueryId,b)-\u003e(ERProcessAction a b c,Maybe a))-\u003e(a-\u003e(QueryId,b)-\u003e(b,c)-\u003e(ERProcessAction a b c,Maybe a))-\u003ea-\u003eChannelType-\u003eChannelType-\u003eERProcess d e",
        "package": "AERN-Net",
        "partial": "Through Stateful Process",
        "signature": "ERProcessName-\u003e(s-\u003e(QueryId,q)-\u003e(ERProcessAction s q a,Maybe s))-\u003e(s-\u003e(QueryId,q)-\u003e(q,a)-\u003e(ERProcessAction s q a,Maybe s))-\u003es-\u003eChannelType-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:precProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA trivial passthrough process that only:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e reduces prec by 1 in all queries\n\u003c/li\u003e\u003cli\u003e ensures that the granularity of all answers is raised to prec\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "Bool-\u003e ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "precProcess"
      },
      "index": {
        "description": "trivial passthrough process that only reduces prec by in all queries ensures that the granularity of all answers is raised to prec",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "precProcess",
        "normalized": "Bool-\u003eERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": "Bool-\u003eERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:rateProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process passing on information without modification, except for improving the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the answer has improved sufficiently since last time one was given \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCurrently supports only single-threaded querying.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (a -\u003e a -\u003e Bool)-\u003e Int-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "rateProcess"
      },
      "index": {
        "description": "process passing on information without modification except for improving the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the answer has improved sufficiently since last time one was given the number of queries made in response to this query has reached the given limit Currently supports only single-threaded querying",
        "hierarchy": "Control ERNet Blocks Basic",
        "module": "Control.ERNet.Blocks.Basic",
        "name": "rateProcess",
        "normalized": "ERProcessName-\u003e(a-\u003ea-\u003eBool)-\u003eInt-\u003eChannelType-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": "ERProcessName-\u003e(a-\u003ea-\u003eBool)-\u003eInt-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of processes whose main purpose is \n    to synchronise other processes and have little\n    semantical value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-Control-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "collection of processes whose main purpose is to synchronise other processes and have little semantical value",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:biasedSplitSyncProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThis process provides two channels (primary, secondary) \n    split off from one source channel. The primary channel\n    is a clean forward of the source channel.  The secondary\n    channel can use a slightly different protocol than the primary channel.\n\u003c/p\u003e\u003cp\u003eAny query on the secondary channel will be blocked until a matching\n    query is received and processed on the primary channel.  (The user must\n    supply a function that decides whether or not the queries are matching.)\n\u003c/p\u003e\u003cp\u003eWhenever a query is being answered on the primary channel, \n    all queries pending on the secondary channel that are\n    matching this one will be replied at the same time \n    using the an answer derived from the answer on the primary channel.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e ChannelType-\u003e ChannelType-\u003e (q2 -\u003e q1 -\u003e Bool)-\u003e (q2 -\u003e a1 -\u003e a2)-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "biasedSplitSyncProcess"
      },
      "index": {
        "description": "This process provides two channels primary secondary split off from one source channel The primary channel is clean forward of the source channel The secondary channel can use slightly different protocol than the primary channel Any query on the secondary channel will be blocked until matching query is received and processed on the primary channel The user must supply function that decides whether or not the queries are matching Whenever query is being answered on the primary channel all queries pending on the secondary channel that are matching this one will be replied at the same time using the an answer derived from the answer on the primary channel",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "biasedSplitSyncProcess",
        "normalized": "ERProcessName-\u003eChannelType-\u003eChannelType-\u003e(a-\u003ea-\u003eBool)-\u003e(a-\u003eb-\u003eb)-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Split Sync Process",
        "signature": "ERProcessName-\u003eChannelType-\u003eChannelType-\u003e(q-\u003eq-\u003eBool)-\u003e(q-\u003ea-\u003ea)-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:improverIxSimpleProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThis process acts as a simple pass-through \n    + it decreases the effort index of each query\n    except for a query with effort index zero\n    it asks a special value provider.\n    It can cope with several queries in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "improverIxSimpleProcess"
      },
      "index": {
        "description": "This process acts as simple pass-through it decreases the effort index of each query except for query with effort index zero it asks special value provider It can cope with several queries in parallel",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "improverIxSimpleProcess",
        "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Ix Simple Process",
        "signature": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:improverNoIxSimpleProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThis process acts as a simple pass-through + it \n    remembers its last answer and provides it on another channel.\n    It initialises its memory from a special value provider.  \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "improverNoIxSimpleProcess"
      },
      "index": {
        "description": "This process acts as simple pass-through it remembers its last answer and provides it on another channel It initialises its memory from special value provider",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "improverNoIxSimpleProcess",
        "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "No Ix Simple Process",
        "signature": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:joinStepValProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThis process joins information from two channels (\u003ca\u003estep\u003c/a\u003e, \u003ca\u003eval\u003c/a\u003e) \n    in such a way that it acts as a splitter of responsibilities \n    for its multi-threaded failure-enabled result channel as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ca\u003estep\u003c/a\u003e channel provides the timing and effort information for responses.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eval\u003c/a\u003e channel provides values without significant blocking.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhile the process is waiting for a response from the step channel,\n    any queries are put on hold until the response comes.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the step channel responds with indication of failure, then\n    all pending queries are answered as failed.\n\u003c/li\u003e\u003cli\u003e If the step channel responds with ok, then all the pending queries\n    are forwarded to the value channel and answered asap.\n    No new queries are accepted during such forwarding stage.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "joinStepValProcess"
      },
      "index": {
        "description": "This process joins information from two channels step val in such way that it acts as splitter of responsibilities for its multi-threaded failure-enabled result channel as follows The step channel provides the timing and effort information for responses The val channel provides values without significant blocking While the process is waiting for response from the step channel any queries are put on hold until the response comes If the step channel responds with indication of failure then all pending queries are answered as failed If the step channel responds with ok then all the pending queries are forwarded to the value channel and answered asap No new queries are accepted during such forwarding stage",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "joinStepValProcess",
        "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Step Val Process",
        "signature": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:splitSyncProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThis process provides multiple copies of one single-threaded channel. \n\u003c/p\u003e\u003cp\u003emerges splits a channel into two channels \n    - primary channel and secondary channel.  The primary channel\n    is a clean forward of the original channel.  The secondary\n    channel can use a slightly different protocol than the primary channel.\n\u003c/p\u003e\u003cp\u003eAny query on the secondary channel will be blocked until a matching\n    query is received and processed on the primary channel.  (The user must\n    supply a function that decides whether or not the queries are matching.)\n\u003c/p\u003e\u003cp\u003eWhenever a query is being answered on the primary channel, \n    all queries pending on the secondary channel that are\n    matching this one will be replied at the same time \n    using the an answer derived from the answer on the primary channel.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e ChannelType-\u003e Int-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "splitSyncProcess"
      },
      "index": {
        "description": "This process provides multiple copies of one single-threaded channel merges splits channel into two channels primary channel and secondary channel The primary channel is clean forward of the original channel The secondary channel can use slightly different protocol than the primary channel Any query on the secondary channel will be blocked until matching query is received and processed on the primary channel The user must supply function that decides whether or not the queries are matching Whenever query is being answered on the primary channel all queries pending on the secondary channel that are matching this one will be replied at the same time using the an answer derived from the answer on the primary channel",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "splitSyncProcess",
        "normalized": "ERProcessName-\u003eChannelType-\u003eInt-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Sync Process",
        "signature": "ERProcessName-\u003eChannelType-\u003eInt-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:switchMultiProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThis process acts as a \u003ca\u003eswitch\u003c/a\u003e for a group of channels, forwarding information\n    from one of two groups of source channels.  The special \u003ca\u003eswitch\u003c/a\u003e channel\n    indicates whether to use one or the other. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Control.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "Bool-\u003e ERProcessName-\u003e [ChannelType]-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "switchMultiProcess"
      },
      "index": {
        "description": "This process acts as switch for group of channels forwarding information from one of two groups of source channels The special switch channel indicates whether to use one or the other",
        "hierarchy": "Control ERNet Blocks Control Basic",
        "module": "Control.ERNet.Blocks.Control.Basic",
        "name": "switchMultiProcess",
        "normalized": "Bool-\u003eERProcessName-\u003e[ChannelType]-\u003eERProcess a b",
        "package": "AERN-Net",
        "partial": "Multi Process",
        "signature": "Bool-\u003eERProcessName-\u003e[ChannelType]-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Basic.html#",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-Real-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real Basic",
        "module": "Control.ERNet.Blocks.Real.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Basic.html#v:rateRProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process passing on information about a real number, trying to improve the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the information about the number has improved by the desired amount since last time \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e Rational-\u003e Int-\u003e ra-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "rateRProcess"
      },
      "index": {
        "description": "process passing on information about real number trying to improve the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the information about the number has improved by the desired amount since last time the number of queries made in response to this query has reached the given limit",
        "hierarchy": "Control ERNet Blocks Real Basic",
        "module": "Control.ERNet.Blocks.Real.Basic",
        "name": "rateRProcess",
        "normalized": "ERProcessName-\u003eRational-\u003eInt-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "RProcess",
        "signature": "ERProcessName-\u003eRational-\u003eInt-\u003era-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Basic.html#v:rateRsProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process passing on information about a list of real numbers, trying to improve the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the information about the tuple has improved by the desired amount since last time \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e Rational-\u003e Int-\u003e ra-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "rateRsProcess"
      },
      "index": {
        "description": "process passing on information about list of real numbers trying to improve the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the information about the tuple has improved by the desired amount since last time the number of queries made in response to this query has reached the given limit",
        "hierarchy": "Control ERNet Blocks Real Basic",
        "module": "Control.ERNet.Blocks.Real.Basic",
        "name": "rateRsProcess",
        "normalized": "ERProcessName-\u003eRational-\u003eInt-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Rs Process",
        "signature": "ERProcessName-\u003eRational-\u003eInt-\u003era-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA protocol for sending a real number using a stream\n    of LFT digits based on the work of Potts and Edalat (1997). \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html",
        "fct-type": "module",
        "title": "LFT"
      },
      "index": {
        "description": "protocol for sending real number using stream of LFT digits based on the work of Potts and Edalat",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:LFTDigit",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "data",
        "title": "LFTDigit"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFTDigit",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFTDigit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:LFTTensor",
      "description": {
        "fct-descr": "\u003cp\u003eA multi-dimensional linear fractional transformation with integer coefficients. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
        "fct-type": "data",
        "title": "LFTTensor"
      },
      "index": {
        "description": "multi-dimensional linear fractional transformation with integer coefficients",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFTTensor",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFTTensor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:QALFTRealA",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealA",
        "fct-type": "data",
        "title": "QALFTRealA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "QALFTRealA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QALFTReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:QALFTRealQ",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealQ",
        "fct-type": "data",
        "title": "QALFTRealQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "QALFTRealQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QALFTReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFTTensor",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
        "fct-type": "function",
        "title": "LFTTensor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFTTensor",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFTTensor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_L",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_L",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_L"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_L",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_M",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_M",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_M"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_M",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_R",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_R",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_R"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_R",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_INF",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_SG_INF",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_SG_INF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_SG_INF",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT SG INF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_NEG",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_SG_NEG",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_SG_NEG"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_SG_NEG",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT SG NEG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_POS",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_SG_POS",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_SG_POS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_SG_POS",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT SG POS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_ZER",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFT_SG_ZER",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
        "fct-type": "function",
        "title": "LFT_SG_ZER"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "LFT_SG_ZER",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "LFT SG ZER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:QALFTRealA",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "QALFTRealA [LFTDigit]",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealA",
        "fct-type": "function",
        "title": "QALFTRealA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "QALFTRealA",
        "normalized": "QALFTRealA[LFTDigit]",
        "package": "AERN-Net",
        "partial": "QALFTReal",
        "signature": "QALFTRealA[LFTDigit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:QALFTRealQ",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "QALFTRealQ Int",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealQ",
        "fct-type": "function",
        "title": "QALFTRealQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "QALFTRealQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QALFTReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:chTLFTReal",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#chTLFTReal",
        "fct-type": "function",
        "title": "chTLFTReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "chTLFTReal",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "TLFTReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftConst",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for a 0-ary LFT with integer coefficients. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "Integer -\u003e Integer -\u003e LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftConst",
        "fct-type": "function",
        "title": "lftConst"
      },
      "index": {
        "description": "Constructor for ary LFT with integer coefficients",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftConst",
        "normalized": "Integer-\u003eInteger-\u003eLFTTensor",
        "package": "AERN-Net",
        "partial": "Const",
        "signature": "Integer-\u003eInteger-\u003eLFTTensor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftDigit2Tensor",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret the LFT digits as LFTs.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFTDigit -\u003e LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftDigit2Tensor",
        "fct-type": "function",
        "title": "lftDigit2Tensor"
      },
      "index": {
        "description": "Interpret the LFT digits as LFTs",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftDigit2Tensor",
        "normalized": "LFTDigit-\u003eLFTTensor",
        "package": "AERN-Net",
        "partial": "Digit Tensor",
        "signature": "LFTDigit-\u003eLFTTensor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for a unary LFT with integer coefficients. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftMatrix",
        "fct-type": "function",
        "title": "lftMatrix"
      },
      "index": {
        "description": "Constructor for unary LFT with integer coefficients",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftMatrix",
        "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor",
        "package": "AERN-Net",
        "partial": "Matrix",
        "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftRealNumberBufferForkProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process that receives a real number incrementally digit by digit\n    and makes it available to multiple clients incrementally or non-incrementally.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName -\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftRealNumberBufferForkProcess",
        "fct-type": "function",
        "title": "lftRealNumberBufferForkProcess"
      },
      "index": {
        "description": "process that receives real number incrementally digit by digit and makes it available to multiple clients incrementally or non-incrementally",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftRealNumberBufferForkProcess",
        "normalized": "ERProcessName-\u003eERProcess a b",
        "package": "AERN-Net",
        "partial": "Real Number Buffer Fork Process",
        "signature": "ERProcessName-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftRealNumberIncremProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process communicating a real number to a single client\n    incrementally digit by digit.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e (EffortIndex -\u003e ra)-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "lftRealNumberIncremProcess"
      },
      "index": {
        "description": "process communicating real number to single client incrementally digit by digit",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftRealNumberIncremProcess",
        "normalized": "ERProcessName-\u003e(EffortIndex-\u003ea)-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Real Number Increm Process",
        "signature": "ERProcessName-\u003e(EffortIndex-\u003era)-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTNScoeffs",
      "description": {
        "fct-descr": "\u003cp\u003ethe first Bool indicates whether or not the term is in the numerator of the LFT\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "Map [Bool] Integer",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
        "fct-type": "function",
        "title": "lftTNScoeffs"
      },
      "index": {
        "description": "the first Bool indicates whether or not the term is in the numerator of the LFT",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTNScoeffs",
        "normalized": "Map[Bool]Integer",
        "package": "AERN-Net",
        "partial": "TNScoeffs",
        "signature": "Map[Bool]Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTNSrank",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "Int",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
        "fct-type": "function",
        "title": "lftTNSrank"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTNSrank",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "TNSrank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorBinary",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for a binary LFT with integer coefficients. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorBinary",
        "fct-type": "function",
        "title": "lftTensorBinary"
      },
      "index": {
        "description": "Constructor for binary LFT with integer coefficients",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTensorBinary",
        "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor",
        "package": "AERN-Net",
        "partial": "Tensor Binary",
        "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorCompose",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two LFTs, ie substituting one into another \n    using one of its variables.  \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFTTensor -\u003e Int -\u003e LFTTensor -\u003e LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorCompose",
        "fct-type": "function",
        "title": "lftTensorCompose"
      },
      "index": {
        "description": "Compose two LFTs ie substituting one into another using one of its variables",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTensorCompose",
        "normalized": "LFTTensor-\u003eInt-\u003eLFTTensor-\u003eLFTTensor",
        "package": "AERN-Net",
        "partial": "Tensor Compose",
        "signature": "LFTTensor-\u003eInt-\u003eLFTTensor-\u003eLFTTensor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorComposeUnary",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two unary LFTs, ie substituting one into the other. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFTTensor -\u003e LFTTensor -\u003e LFTTensor",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorComposeUnary",
        "fct-type": "function",
        "title": "lftTensorComposeUnary"
      },
      "index": {
        "description": "Compose two unary LFTs ie substituting one into the other",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTensorComposeUnary",
        "normalized": "LFTTensor-\u003eLFTTensor-\u003eLFTTensor",
        "package": "AERN-Net",
        "partial": "Tensor Compose Unary",
        "signature": "LFTTensor-\u003eLFTTensor-\u003eLFTTensor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorInfo",
      "description": {
        "fct-descr": "\u003cp\u003eWork out what interval is the image of the lft when all\n    variables are given the value [0,oo].\n    The returned interval may be slightly bigger than the\n    exact image due to rounding but it always contains the\n    whole exact image. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "Granularity -\u003e LFTTensor -\u003e ExtInterval ra",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorInfo",
        "fct-type": "function",
        "title": "lftTensorInfo"
      },
      "index": {
        "description": "Work out what interval is the image of the lft when all variables are given the value oo The returned interval may be slightly bigger than the exact image due to rounding but it always contains the whole exact image",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTensorInfo",
        "normalized": "Granularity-\u003eLFTTensor-\u003eExtInterval a",
        "package": "AERN-Net",
        "partial": "Tensor Info",
        "signature": "Granularity-\u003eLFTTensor-\u003eExtInterval ra"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorIsPositive",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.LFT",
        "fct-package": "AERN-Net",
        "fct-signature": "LFTTensor -\u003e Bool",
        "fct-source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorIsPositive",
        "fct-type": "function",
        "title": "lftTensorIsPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real LFT",
        "module": "Control.ERNet.Blocks.Real.LFT",
        "name": "lftTensorIsPositive",
        "normalized": "LFTTensor-\u003eBool",
        "package": "AERN-Net",
        "partial": "Tensor Is Positive",
        "signature": "LFTTensor-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic protocol for transferring approximations of a single real number\n    using intervals. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html",
        "fct-type": "module",
        "title": "Protocols"
      },
      "index": {
        "description": "Basic protocol for transferring approximations of single real number using intervals",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "Protocols",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Protocols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#t:QARealA",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealA",
        "fct-type": "data",
        "title": "QARealA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "QARealA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#t:QARealQ",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealQ",
        "fct-type": "data",
        "title": "QARealQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "QARealQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:QARealA",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QARealA ra",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealA",
        "fct-type": "function",
        "title": "QARealA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "QARealA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:QARealQ",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QARealQ",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealQ",
        "fct-type": "function",
        "title": "QARealQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "QARealQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:chTReal",
      "description": {
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "ira -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#chTReal",
        "fct-type": "function",
        "title": "chTReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "chTReal",
        "normalized": "a-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TReal",
        "signature": "ira-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerR",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an answer to a query for a real number\n    using the default real number protocol with an effort index.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "(EffortIndex -\u003e ra) -\u003e QAIxQ QARealQ -\u003e QAIxA (QARealA ra)",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerR",
        "fct-type": "function",
        "title": "makeAnswerR"
      },
      "index": {
        "description": "Construct an answer to query for real number using the default real number protocol with an effort index",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "makeAnswerR",
        "normalized": "(EffortIndex-\u003ea)-\u003eQAIxQ QARealQ-\u003eQAIxA(QARealA a)",
        "package": "AERN-Net",
        "partial": "Answer",
        "signature": "(EffortIndex-\u003era)-\u003eQAIxQ QARealQ-\u003eQAIxA(QARealA ra)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerRNoIx",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an answer to a query for a real number\n    using the default real number protocol without any effort index.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "ra -\u003e QARealQ -\u003e QARealA ra",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerRNoIx",
        "fct-type": "function",
        "title": "makeAnswerRNoIx"
      },
      "index": {
        "description": "Construct an answer to query for real number using the default real number protocol without any effort index",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "makeAnswerRNoIx",
        "normalized": "a-\u003eQARealQ-\u003eQARealA a",
        "package": "AERN-Net",
        "partial": "Answer RNo Ix",
        "signature": "ra-\u003eQARealQ-\u003eQARealA ra"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerRs",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an answer to a query for a list a real numbers\n    using the list protocol with an effort index.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "(EffortIndex -\u003e [ra]) -\u003e QAIxQ (QAListQ QARealQ) -\u003e QAIxA (QAListA (QARealA ra))",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerRs",
        "fct-type": "function",
        "title": "makeAnswerRs"
      },
      "index": {
        "description": "Construct an answer to query for list real numbers using the list protocol with an effort index",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "makeAnswerRs",
        "normalized": "(EffortIndex-\u003e[a])-\u003eQAIxQ(QAListQ QARealQ)-\u003eQAIxA(QAListA(QARealA a))",
        "package": "AERN-Net",
        "partial": "Answer Rs",
        "signature": "(EffortIndex-\u003e[ra])-\u003eQAIxQ(QAListQ QARealQ)-\u003eQAIxA(QAListA(QARealA ra))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerRsNoIx",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an answer to a query for a list a real numbers\n    using the list protocol without any effort index.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "[ra] -\u003e QAListQ QARealQ -\u003e QAListA (QARealA ra)",
        "fct-source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerRsNoIx",
        "fct-type": "function",
        "title": "makeAnswerRsNoIx"
      },
      "index": {
        "description": "Construct an answer to query for list real numbers using the list protocol without any effort index",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "makeAnswerRsNoIx",
        "normalized": "[a]-\u003eQAListQ QARealQ-\u003eQAListA(QARealA a)",
        "package": "AERN-Net",
        "partial": "Answer Rs No Ix",
        "signature": "[ra]-\u003eQAListQ QARealQ-\u003eQAListA(QARealA ra)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:querySyncR",
      "description": {
        "fct-descr": "\u003cp\u003eMake a query and wait for answer \n    on a real number input socket with the standard\n    (index -\u003e approx) protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.Real.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "sOut q2 a2-\u003e QueryId-\u003e sIn (QAIxQ QARealQ) (QAIxA (QARealA ira))-\u003e EffortIndex-\u003e IO ira",
        "fct-type": "function",
        "title": "querySyncR"
      },
      "index": {
        "description": "Make query and wait for answer on real number input socket with the standard index approx protocol",
        "hierarchy": "Control ERNet Blocks Real Protocols",
        "module": "Control.ERNet.Blocks.Real.Protocols",
        "name": "querySyncR",
        "normalized": "a b c-\u003eQueryId-\u003ed(QAIxQ QARealQ)(QAIxA(QARealA e))-\u003eEffortIndex-\u003eIO e",
        "package": "AERN-Net",
        "partial": "Sync",
        "signature": "sOut q a-\u003eQueryId-\u003esIn(QAIxQ QARealQ)(QAIxA(QARealA ira))-\u003eEffortIndex-\u003eIO ira"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few processes universally useful when representing (1st-order) real functions\n    as single data entities via \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.   \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "few processes universally useful when representing st-order real functions as single data entities via ERFnDomApprox",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:applyFieldProcess",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function transformer ((R^m-\u003eR^n) -\u003e (R^m-\u003eR^n)) to a function (R^m-\u003eR^n).\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "applyFieldProcess"
      },
      "index": {
        "description": "Apply function transformer to function",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "applyFieldProcess",
        "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Field Process",
        "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:boundingProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA pass-through process for first order real functions with effort index \n    that is almost equal to the identity.\n\u003c/p\u003e\u003cp\u003eIt restricts the function's graph at certain given intervals\n    to the given boxes.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "Bool-\u003e ERProcessName-\u003e ChannelType-\u003e fa-\u003e EffortIndex-\u003e [(domra, ranra)]-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "boundingProcess"
      },
      "index": {
        "description": "pass-through process for first order real functions with effort index that is almost equal to the identity It restricts the function graph at certain given intervals to the given boxes",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "boundingProcess",
        "normalized": "Bool-\u003eERProcessName-\u003eChannelType-\u003ea-\u003eEffortIndex-\u003e[(b,c)]-\u003eERProcess d e",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": "Bool-\u003eERProcessName-\u003eChannelType-\u003efa-\u003eEffortIndex-\u003e[(domra,ranra)]-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:getEndpointValsProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process passing on information about the values of a real function \n    at its domain endpoints.  \n\u003c/p\u003e\u003cp\u003eProtocols are wrapped in \u003ccode\u003eChannelComm.ChTChanges\u003c/code\u003e \n    in order to be able to communicate failure.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "getEndpointValsProcess"
      },
      "index": {
        "description": "process passing on information about the values of real function at its domain endpoints Protocols are wrapped in ChannelComm.ChTChanges in order to be able to communicate failure",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "getEndpointValsProcess",
        "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Endpoint Vals Process",
        "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:integrateFAProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA simple integrator process for first-order linear domain functions \n    with effort index using the default integration \n    of the \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e ChannelType-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "integrateFAProcess"
      },
      "index": {
        "description": "simple integrator process for first-order linear domain functions with effort index using the default integration of the ERFnDomApprox instance",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "integrateFAProcess",
        "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "FAProcess",
        "signature": "ERProcessName-\u003eChannelType-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:integrateIsectMeasureFAProcess",
      "description": {
        "fct-descr": "\u003cp\u003eAn intersecting and improvement measuring stateful integrator process using \n    default intersecting & measuring integration of the \n    \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "integrateIsectMeasureFAProcess"
      },
      "index": {
        "description": "An intersecting and improvement measuring stateful integrator process using default intersecting measuring integration of the ERFnDomApprox instance",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "integrateIsectMeasureFAProcess",
        "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Isect Measure FAProcess",
        "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:joinFADomProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process joining two functions for adjacent domains \n    to one function on the joint domain.\n\u003c/p\u003e\u003cp\u003eEach query is split accordingly to two queries on the\n    two halves of the bisected domain, respectively.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "joinFADomProcess"
      },
      "index": {
        "description": "process joining two functions for adjacent domains to one function on the joint domain Each query is split accordingly to two queries on the two halves of the bisected domain respectively",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "joinFADomProcess",
        "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "FADom Process",
        "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:maxOverDomProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process passing on information about the values of a real function \n    over a fixed domain.\n\u003c/p\u003e\u003cp\u003eProtocols are wrapped in \u003ccode\u003eChannelComm.ChTChanges\u003c/code\u003e \n    in order to be able to communicate failure.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e box-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "maxOverDomProcess"
      },
      "index": {
        "description": "process passing on information about the values of real function over fixed domain Protocols are wrapped in ChannelComm.ChTChanges in order to be able to communicate failure",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "maxOverDomProcess",
        "normalized": "ERProcessName-\u003ea-\u003eb-\u003eERProcess c d",
        "package": "AERN-Net",
        "partial": "Over Dom Process",
        "signature": "ERProcessName-\u003ebox-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:rateFnProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process passing on information about a real function, trying to improve the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the information about the function has improved by the desired amount since last time \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e Rational-\u003e Int-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "rateFnProcess"
      },
      "index": {
        "description": "process passing on information about real function trying to improve the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the information about the function has improved by the desired amount since last time the number of queries made in response to this query has reached the given limit",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "rateFnProcess",
        "normalized": "ERProcessName-\u003eRational-\u003eInt-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "Fn Process",
        "signature": "ERProcessName-\u003eRational-\u003eInt-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:splitFADomProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process splitting a function into two based on a bisection of the domain.\n\u003c/p\u003e\u003cp\u003eA query for either half of the function results in a query for the whole.\n    The whole function is then cached to answer an analogous query for the second half.\n    Only one such result is cached (always the last one).  \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Basic",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "splitFADomProcess"
      },
      "index": {
        "description": "process splitting function into two based on bisection of the domain query for either half of the function results in query for the whole The whole function is then cached to answer an analogous query for the second half Only one such result is cached always the last one",
        "hierarchy": "Control ERNet Blocks RnToRm Basic",
        "module": "Control.ERNet.Blocks.RnToRm.Basic",
        "name": "splitFADomProcess",
        "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
        "package": "AERN-Net",
        "partial": "FADom Process",
        "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic protocols for transferring approximations of real functions. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html",
        "fct-type": "module",
        "title": "Protocols"
      },
      "index": {
        "description": "Basic protocols for transferring approximations of real functions",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "Protocols",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Protocols",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn1A",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1A",
        "fct-type": "data",
        "title": "QAFn1A"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1A",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn1Q",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
        "fct-type": "data",
        "title": "QAFn1Q"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1Q",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn2A",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2A",
        "fct-type": "data",
        "title": "QAFn2A"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn2A",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn2Q",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2Q",
        "fct-type": "data",
        "title": "QAFn2Q"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn2Q",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1A",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn1A fa",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1A",
        "fct-type": "function",
        "title": "QAFn1A"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1A",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1APt",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn1APt [ranra]",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1A",
        "fct-type": "function",
        "title": "QAFn1APt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1APt",
        "normalized": "QAFn APt[a]",
        "package": "AERN-Net",
        "partial": "QAFn APt",
        "signature": "QAFn APt[ranra]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1QAll",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn1QAll",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
        "fct-type": "function",
        "title": "QAFn1QAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1QAll",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn QAll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1QDom",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn1QDom box",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
        "fct-type": "function",
        "title": "QAFn1QDom"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1QDom",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn QDom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1QPt",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn1QPt box",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
        "fct-type": "function",
        "title": "QAFn1QPt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn1QPt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn QPt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn2APt",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn2APt fa",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2A",
        "fct-type": "function",
        "title": "QAFn2APt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn2APt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn APt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn2QPt",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "QAFn2QPt fa",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2Q",
        "fct-type": "function",
        "title": "QAFn2QPt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "QAFn2QPt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAFn QPt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:chTFn1",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "fa -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#chTFn1",
        "fct-type": "function",
        "title": "chTFn1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "chTFn1",
        "normalized": "a-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TFn",
        "signature": "fa-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:chTFn2",
      "description": {
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "fa -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#chTFn2",
        "fct-type": "function",
        "title": "chTFn2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "chTFn2",
        "normalized": "a-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TFn",
        "signature": "fa-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:makeAnswerFn1ByBoxesNoIx",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an answer about a function, given\n    as a Haskell real -\u003e real function.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "(box -\u003e [ranra]) -\u003e QAFn1Q box -\u003e QAFn1A ranra fa",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#makeAnswerFn1ByBoxesNoIx",
        "fct-type": "function",
        "title": "makeAnswerFn1ByBoxesNoIx"
      },
      "index": {
        "description": "Construct an answer about function given as Haskell real real function",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "makeAnswerFn1ByBoxesNoIx",
        "normalized": "(a-\u003e[b])-\u003eQAFn Q a-\u003eQAFn A b c",
        "package": "AERN-Net",
        "partial": "Answer Fn By Boxes No Ix",
        "signature": "(box-\u003e[ranra])-\u003eQAFn Q box-\u003eQAFn A ranra fa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:makeAnswerFn1NoIx",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an answer about a function, assuming\n    they will not ask about a subdomain.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "fct-package": "AERN-Net",
        "fct-signature": "fa -\u003e QAFn1Q box -\u003e QAFn1A ranra fa",
        "fct-source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#makeAnswerFn1NoIx",
        "fct-type": "function",
        "title": "makeAnswerFn1NoIx"
      },
      "index": {
        "description": "Construct an answer about function assuming they will not ask about subdomain",
        "hierarchy": "Control ERNet Blocks RnToRm Protocols",
        "module": "Control.ERNet.Blocks.RnToRm.Protocols",
        "name": "makeAnswerFn1NoIx",
        "normalized": "a-\u003eQAFn Q b-\u003eQAFn A c a",
        "package": "AERN-Net",
        "partial": "Answer Fn No Ix",
        "signature": "fa-\u003eQAFn Q box-\u003eQAFn A ranra fa"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Channel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple channel implementation using STM protected variables.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Deployment.Local.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Deployment-Local-Channel.html",
        "fct-type": "module",
        "title": "Channel"
      },
      "index": {
        "description": "simple channel implementation using STM protected variables",
        "hierarchy": "Control ERNet Deployment Local Channel",
        "module": "Control.ERNet.Deployment.Local.Channel",
        "name": "Channel",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Channel.html#t:ChannelLocal",
      "description": {
        "fct-module": "Control.ERNet.Deployment.Local.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Deployment-Local-Channel.html#ChannelLocal",
        "fct-type": "data",
        "title": "ChannelLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Deployment Local Channel",
        "module": "Control.ERNet.Deployment.Local.Channel",
        "name": "ChannelLocal",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Channel.html#t:ChannelLocalAnyProt",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of channel types over instances of the \u003ccode\u003eChannelComm.QERrotocol\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003e(existential type) \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Deployment.Local.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Deployment-Local-Channel.html#ChannelLocalAnyProt",
        "fct-type": "data",
        "title": "ChannelLocalAnyProt"
      },
      "index": {
        "description": "Union of channel types over instances of the ChannelComm.QERrotocol class existential type",
        "hierarchy": "Control ERNet Deployment Local Channel",
        "module": "Control.ERNet.Deployment.Local.Channel",
        "name": "ChannelLocalAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel Local Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Logger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple logger implementation using an STM channel.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Deployment.Local.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Deployment-Local-Logger.html",
        "fct-type": "module",
        "title": "Logger"
      },
      "index": {
        "description": "simple logger implementation using an STM channel",
        "hierarchy": "Control ERNet Deployment Local Logger",
        "module": "Control.ERNet.Deployment.Local.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Logger.html#t:LoggerLocal",
      "description": {
        "fct-module": "Control.ERNet.Deployment.Local.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Deployment-Local-Logger.html#LoggerLocal",
        "fct-type": "data",
        "title": "LoggerLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Deployment Local Logger",
        "module": "Control.ERNet.Deployment.Local.Logger",
        "name": "LoggerLocal",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Logger Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Manager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of \n    \u003ca\u003eControl.ERNet.Foundations.Manager.Manager\u003c/a\u003e,\n    deploying all processes locally.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Deployment.Local.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Deployment-Local-Manager.html",
        "fct-type": "module",
        "title": "Manager"
      },
      "index": {
        "description": "simple implementation of Control.ERNet.Foundations.Manager.Manager deploying all processes locally",
        "hierarchy": "Control ERNet Deployment Local Manager",
        "module": "Control.ERNet.Deployment.Local.Manager",
        "name": "Manager",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Manager.html#t:ManagerLocal",
      "description": {
        "fct-module": "Control.ERNet.Deployment.Local.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Deployment-Local-Manager.html#ManagerLocal",
        "fct-type": "data",
        "title": "ManagerLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Deployment Local Manager",
        "module": "Control.ERNet.Deployment.Local.Manager",
        "name": "ManagerLocal",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Manager Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of data flow channels and its sockets with associated\n    query-answer protocol for gradual data communication.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the prefix CH.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html",
        "fct-type": "module",
        "title": "Channel"
      },
      "index": {
        "description": "Abstraction of data flow channels and its sockets with associated query-answer protocol for gradual data communication To be imported qualified usually with the prefix CH",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "Channel",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#t:Channel",
      "description": {
        "fct-descr": "\u003cp\u003eA channel type, as it is presented to the processes, \n    consists of an input socket and an output socket types.\n\u003c/p\u003e\u003cp\u003eEach socket type has a unique protocol associated with\n    it.  Whenever the protocol can be determined at\n    compile time, we use the sIn and sOut types, otherwise\n    we use the sInAnyProt and sOutAnyProt types.\n    Elements of sInAnyProt and sOutAnyProt can be dynamically\n    cast to elements of sIn and sOut once the protocol\n    can be deduced by the Haskell type checker. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "class",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#Channel",
        "fct-type": "class",
        "title": "Channel"
      },
      "index": {
        "description": "channel type as it is presented to the processes consists of an input socket and an output socket types Each socket type has unique protocol associated with it Whenever the protocol can be determined at compile time we use the sIn and sOut types otherwise we use the sInAnyProt and sOutAnyProt types Elements of sInAnyProt and sOutAnyProt can be dynamically cast to elements of sIn and sOut once the protocol can be deduced by the Haskell type checker",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "Channel",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#t:ChannelForScheduler",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "class",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#ChannelForScheduler",
        "fct-type": "class",
        "title": "ChannelForScheduler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "ChannelForScheduler",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel For Scheduler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:answerQuery",
      "description": {
        "fct-descr": "\u003cp\u003eSend the provided answer to the given socket as an answer to\n        the query with the given query ID.\n\u003c/p\u003e\u003cp\u003eThis is a version using a statically typed protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "answerQuery",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#answerQuery",
        "fct-type": "method",
        "title": "answerQuery"
      },
      "index": {
        "description": "Send the provided answer to the given socket as an answer to the query with the given query ID This is version using statically typed protocol",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "answerQuery",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:answerQueryAnyProt",
      "description": {
        "fct-descr": "\u003cp\u003eSend the provided answer to the given socket as an answer to\n        the query with the given query ID.\n\u003c/p\u003e\u003cp\u003eThis is a version using a dynamically typed protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "answerQueryAnyProt",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#answerQueryAnyProt",
        "fct-type": "method",
        "title": "answerQueryAnyProt"
      },
      "index": {
        "description": "Send the provided answer to the given socket as an answer to the query with the given query ID This is version using dynamically typed protocol",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "answerQueryAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castIn",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "castIn",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#castIn",
        "fct-type": "method",
        "title": "castIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "castIn",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castInIO",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "castInIO",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#castInIO",
        "fct-type": "method",
        "title": "castInIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "castInIO",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "In IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castOut",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "castOut",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#castOut",
        "fct-type": "method",
        "title": "castOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "castOut",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castOutIO",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "castOutIO",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#castOutIO",
        "fct-type": "method",
        "title": "castOutIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "castOutIO",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Out IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:makeQuery",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a new query on the given socket.  \n        Return the new query's id.\n\u003c/p\u003e\u003cp\u003eThis is a version using a statically typed protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "makeQuery",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#makeQuery",
        "fct-type": "method",
        "title": "makeQuery"
      },
      "index": {
        "description": "Register new query on the given socket Return the new query id This is version using statically typed protocol",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "makeQuery",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:makeQueryAnyProt",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a new query on the given socket.  \n        Return the new query's id.\n\u003c/p\u003e\u003cp\u003eThis is a version using a dynamically typed protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "makeQueryAnyProt",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#makeQueryAnyProt",
        "fct-type": "method",
        "title": "makeQueryAnyProt"
      },
      "index": {
        "description": "Register new query on the given socket Return the new query id This is version using dynamically typed protocol",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "makeQueryAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a new channel that is then given to processes \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "new",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "create new channel that is then given to processes",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "new",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForAnswer",
      "description": {
        "fct-descr": "\u003cp\u003eWait for an answer to a query with the given query ID.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "waitForAnswer",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#waitForAnswer",
        "fct-type": "method",
        "title": "waitForAnswer"
      },
      "index": {
        "description": "Wait for an answer to query with the given query ID",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "waitForAnswer",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "For Answer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForAnswerMulti",
      "description": {
        "fct-descr": "\u003cp\u003eWait for an answer to one of several queries with the given query IDs.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "waitForAnswerMulti",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#waitForAnswerMulti",
        "fct-type": "method",
        "title": "waitForAnswerMulti"
      },
      "index": {
        "description": "Wait for an answer to one of several queries with the given query IDs",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "waitForAnswerMulti",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "For Answer Multi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForQuery",
      "description": {
        "fct-descr": "\u003cp\u003eWait until the given socket has at least one new query.\n        When there is at least one, return the earliest one and set its status to pending.\n\u003c/p\u003e\u003cp\u003eThis function uses a statically typed protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "waitForQuery",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#waitForQuery",
        "fct-type": "method",
        "title": "waitForQuery"
      },
      "index": {
        "description": "Wait until the given socket has at least one new query When there is at least one return the earliest one and set its status to pending This function uses statically typed protocol",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "waitForQuery",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "For Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForQueryMulti",
      "description": {
        "fct-descr": "\u003cp\u003eWait until one of the given sockets has at least one new query.\n        When there is at least one, return the earliest one \n        and set its status to pending.\n\u003c/p\u003e\u003cp\u003eThis is function uses a dynamically typed protocol.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Channel",
        "fct-package": "AERN-Net",
        "fct-signature": "waitForQueryMulti",
        "fct-source": "src/Control-ERNet-Foundations-Channel.html#waitForQueryMulti",
        "fct-type": "method",
        "title": "waitForQueryMulti"
      },
      "index": {
        "description": "Wait until one of the given sockets has at least one new query When there is at least one return the earliest one and set its status to pending This is function uses dynamically typed protocol",
        "hierarchy": "Control ERNet Foundations Channel",
        "module": "Control.ERNet.Foundations.Channel",
        "name": "waitForQueryMulti",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "For Query Multi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-JavaScript.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions that produce a javascipt representation of the\n    message dependence graph contained in a set of network events.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Event.JavaScript",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Event-JavaScript.html",
        "fct-type": "module",
        "title": "JavaScript"
      },
      "index": {
        "description": "Functions that produce javascipt representation of the message dependence graph contained in set of network events",
        "hierarchy": "Control ERNet Foundations Event JavaScript",
        "module": "Control.ERNet.Foundations.Event.JavaScript",
        "name": "JavaScript",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Java Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-JavaScript.html#v:constructJS",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event.JavaScript",
        "fct-package": "AERN-Net",
        "fct-signature": "[ERNetEvent] -\u003e String",
        "fct-source": "src/Control-ERNet-Foundations-Event-JavaScript.html#constructJS",
        "fct-type": "function",
        "title": "constructJS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event JavaScript",
        "module": "Control.ERNet.Foundations.Event.JavaScript",
        "name": "constructJS",
        "normalized": "[ERNetEvent]-\u003eString",
        "package": "AERN-Net",
        "partial": "JS",
        "signature": "[ERNetEvent]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of an event logger in the IO monad.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the prefix LG.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Event.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Event-Logger.html",
        "fct-type": "module",
        "title": "Logger"
      },
      "index": {
        "description": "Abstraction of an event logger in the IO monad To be imported qualified usually with the prefix LG",
        "hierarchy": "Control ERNet Foundations Event Logger",
        "module": "Control.ERNet.Foundations.Event.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#t:Logger",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "class",
        "fct-source": "src/Control-ERNet-Foundations-Event-Logger.html#Logger",
        "fct-type": "class",
        "title": "Logger"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event Logger",
        "module": "Control.ERNet.Foundations.Event.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:addEvent",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "lg -\u003e ERNetEvent -\u003e IO ()",
        "fct-source": "src/Control-ERNet-Foundations-Event-Logger.html#addEvent",
        "fct-type": "method",
        "title": "addEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event Logger",
        "module": "Control.ERNet.Foundations.Event.Logger",
        "name": "addEvent",
        "normalized": "a-\u003eERNetEvent-\u003eIO()",
        "package": "AERN-Net",
        "partial": "Event",
        "signature": "lg-\u003eERNetEvent-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:emptyAndDo",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "lg -\u003e (ERNetEvent -\u003e IO a) -\u003e IO ()",
        "fct-source": "src/Control-ERNet-Foundations-Event-Logger.html#emptyAndDo",
        "fct-type": "method",
        "title": "emptyAndDo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event Logger",
        "module": "Control.ERNet.Foundations.Event.Logger",
        "name": "emptyAndDo",
        "normalized": "a-\u003e(ERNetEvent-\u003eIO b)-\u003eIO()",
        "package": "AERN-Net",
        "partial": "And Do",
        "signature": "lg-\u003e(ERNetEvent-\u003eIO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:emptyAndGetEvents",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "lg -\u003e IO [ERNetEvent]",
        "fct-source": "src/Control-ERNet-Foundations-Event-Logger.html#emptyAndGetEvents",
        "fct-type": "method",
        "title": "emptyAndGetEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event Logger",
        "module": "Control.ERNet.Foundations.Event.Logger",
        "name": "emptyAndGetEvents",
        "normalized": "a-\u003eIO[ERNetEvent]",
        "package": "AERN-Net",
        "partial": "And Get Events",
        "signature": "lg-\u003eIO[ERNetEvent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:new",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event.Logger",
        "fct-package": "AERN-Net",
        "fct-signature": "IO lg",
        "fct-source": "src/Control-ERNet-Foundations-Event-Logger.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event Logger",
        "module": "Control.ERNet.Foundations.Event.Logger",
        "name": "new",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommunication events with various data useful for logging\n    and debugging.  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "Communication events with various data useful for logging and debugging",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "Event",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#t:ERNetEvent",
      "description": {
        "fct-descr": "\u003cp\u003eData to be logged with every query and answer event.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "data",
        "title": "ERNetEvent"
      },
      "index": {
        "description": "Data to be logged with every query and answer event",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ERNetEvent",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERNet Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvAnsMade",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "ERNetEvAnsMade",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ERNetEvAnsMade"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ERNetEvAnsMade",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERNet Ev Ans Made",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvAnsReceived",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "ERNetEvAnsReceived",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ERNetEvAnsReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ERNetEvAnsReceived",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERNet Ev Ans Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvQryMade",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "ERNetEvQryMade",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ERNetEvQryMade"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ERNetEvQryMade",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERNet Ev Qry Made",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvQryReceived",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "ERNetEvQryReceived",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ERNetEvQryReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ERNetEvQryReceived",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERNet Ev Qry Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevAns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "a",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevAns"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevAns",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Ans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevFromId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "String",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevFromId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevFromId",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "From Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevFromQryId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "QueryId",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevFromQryId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevFromQryId",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "From Qry Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevQry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "q",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevQry"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevQry",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Qry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevQryId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "QueryId",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevQryId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevQryId",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Qry Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "UTCTime",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevTime",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevToId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Event",
        "fct-package": "AERN-Net",
        "fct-signature": "String",
        "fct-source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
        "fct-type": "function",
        "title": "ernetevToId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Event",
        "module": "Control.ERNet.Foundations.Event",
        "name": "ernetevToId",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "To Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of a distributed manager for networked ER processes. \n    Its functions comprise:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e initial process deployment\n\u003c/li\u003e\u003cli\u003e expansion of a process into a sub-network\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo be imported qualified, usually with the prefix MAN.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html",
        "fct-type": "module",
        "title": "Manager"
      },
      "index": {
        "description": "Abstraction of distributed manager for networked ER processes Its functions comprise initial process deployment expansion of process into sub-network To be imported qualified usually with the prefix MAN",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "Manager",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#t:Manager",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "class",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html#Manager",
        "fct-type": "class",
        "title": "Manager"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "Manager",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#t:ManagerID",
      "description": {
        "fct-descr": "\u003cp\u003eA globally unique name as a URL. \n\u003c/p\u003e\u003cp\u003eeg ernet:\u003cem/\u003elocalhost:4176/miks-ivp-solver-master\n       ernet-local:/ivp-solver-master\n       ernet-mpi:/ivp-solver-master\n\u003c/p\u003e\u003cp\u003eThe port 4176 was unassigned when checked on\n    http:\u003cem/\u003ewww.iana.org\u003cem\u003eassignments\u003c/em\u003eport-numbers\n    on 2nd November 2008.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "type",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html#ManagerID",
        "fct-type": "type",
        "title": "ManagerID"
      },
      "index": {
        "description": "globally unique name as URL eg ernet localhost miks-ivp-solver-master ernet-local ivp-solver-master ernet-mpi ivp-solver-master The port was unassigned when checked on http www.iana.org assignments port-numbers on nd November",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "ManagerID",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Manager ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#t:ManagerName",
      "description": {
        "fct-descr": "\u003cp\u003eA name given to a ditributed node by a programmer. \n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "type",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html#ManagerName",
        "fct-type": "type",
        "title": "ManagerName"
      },
      "index": {
        "description": "name given to ditributed node by programmer",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "ManagerName",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Manager Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:connectNeighbour",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "man -\u003e ManagerID -\u003e IO Bool",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html#connectNeighbour",
        "fct-type": "method",
        "title": "connectNeighbour"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "connectNeighbour",
        "normalized": "a-\u003eManagerID-\u003eIO Bool",
        "package": "AERN-Net",
        "partial": "Neighbour",
        "signature": "man-\u003eManagerID-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:new",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "ManagerName -\u003e IO (man, ManagerID)",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html#new",
        "fct-type": "method",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "new",
        "normalized": "ManagerName-\u003eIO(a,ManagerID)",
        "package": "AERN-Net",
        "partial": "",
        "signature": "ManagerName-\u003eIO(man,ManagerID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:runDialogue",
      "description": {
        "fct-descr": "\u003cp\u003eRun a process together with some queries on one of its output sockets.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "man-\u003e ERProcess sInAnyProt sOutAnyProt-\u003e Int-\u003e ChannelType-\u003e ((q -\u003e IO a) -\u003e IO ())-\u003e Bool-\u003e IO lg",
        "fct-type": "function",
        "title": "runDialogue"
      },
      "index": {
        "description": "Run process together with some queries on one of its output sockets",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "runDialogue",
        "normalized": "a-\u003eERProcess b c-\u003eInt-\u003eChannelType-\u003e((d-\u003eIO e)-\u003eIO())-\u003eBool-\u003eIO f",
        "package": "AERN-Net",
        "partial": "Dialogue",
        "signature": "man-\u003eERProcess sInAnyProt sOutAnyProt-\u003eInt-\u003eChannelType-\u003e((q-\u003eIO a)-\u003eIO())-\u003eBool-\u003eIO lg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:runProcess",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Manager",
        "fct-package": "AERN-Net",
        "fct-signature": "runProcess",
        "fct-source": "src/Control-ERNet-Foundations-Manager.html#runProcess",
        "fct-type": "method",
        "title": "runProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Manager",
        "module": "Control.ERNet.Foundations.Manager",
        "name": "runProcess",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKahn process networks with channels \n    adapted for arbitrary precision real higher-order data communication.\n    Executed using a number of parallel threads.  \n    Each process started in a dedicated thread \n    and each process typically starts further internal threads.\n    Each channel is a transactional variable (TVar) \n    known to both end processes and allows them to communicate\n    according to its instance of the \u003ccode\u003e\u003ca\u003eQAProtocol\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "Kahn process networks with channels adapted for arbitrary precision real higher-order data communication Executed using number of parallel threads Each process started in dedicated thread and each process typically starts further internal threads Each channel is transactional variable TVar known to both end processes and allows them to communicate according to its instance of the QAProtocol class",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "Process",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcess",
      "description": {
        "fct-descr": "\u003cp\u003eAll data that define a process, including its behaviour.\n    Each executing process is instantiated from one of these descriptions.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
        "fct-type": "data",
        "title": "ERProcess"
      },
      "index": {
        "description": "All data that define process including its behaviour Each executing process is instantiated from one of these descriptions",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcess",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessAction",
      "description": {
        "fct-descr": "\u003cp\u003eExplicit representation of a process' action, able to distinguish\n    between answering and making a query or pausing one internal thread\n    until the internal state (TV) has met some condition.\n\u003c/p\u003e\u003cp\u003eThis is useful for producing highly customisable \u003ccode\u003etemplates\u003c/code\u003e for processes\n    as Haskell functions whose parameters are functions that determine\n    what the process should do as a response to some external or internal events.\n    See for example \u003ccode\u003eControl.ERNet.Blocks.Basic.passThroughStatefulProcess\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
        "fct-type": "data",
        "title": "ERProcessAction"
      },
      "index": {
        "description": "Explicit representation of process action able to distinguish between answering and making query or pausing one internal thread until the internal state TV has met some condition This is useful for producing highly customisable templates for processes as Haskell functions whose parameters are functions that determine what the process should do as response to some external or internal events See for example Control.ERNet.Blocks.Basic.passThroughStatefulProcess",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessAction",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessDeploy",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "type",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessDeploy",
        "fct-type": "type",
        "title": "ERProcessDeploy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessDeploy",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess Deploy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessExpandCallback",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "type",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessExpandCallback",
        "fct-type": "type",
        "title": "ERProcessExpandCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessExpandCallback",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess Expand Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessName",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "type",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessName",
        "fct-type": "type",
        "title": "ERProcessName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessName",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcess",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcess",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
        "fct-type": "function",
        "title": "ERProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcess",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcessActionAnswer",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessActionAnswer Bool a",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
        "fct-type": "function",
        "title": "ERProcessActionAnswer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessActionAnswer",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess Action Answer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcessActionQuery",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessActionQuery q",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
        "fct-type": "function",
        "title": "ERProcessActionQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessActionQuery",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "ERProcess Action Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcessActionRetryWhen",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessActionRetryWhen (s -\u003e Bool)",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
        "fct-type": "function",
        "title": "ERProcessActionRetryWhen"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "ERProcessActionRetryWhen",
        "normalized": "ERProcessActionRetryWhen(a-\u003eBool)",
        "package": "AERN-Net",
        "partial": "ERProcess Action Retry When",
        "signature": "ERProcessActionRetryWhen(s-\u003eBool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocDeploy",
      "description": {
        "fct-descr": "\u003cp\u003eOn deployment, a process either expands itself using\n                the provided callback function and does not use the\n                sockets at all\n\u003c/p\u003e\u003cp\u003eOR it uses the sockets and never calls the expansion\n                callback.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessDeploy sInAnyProt sOutAnyProt",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
        "fct-type": "function",
        "title": "erprocDeploy"
      },
      "index": {
        "description": "On deployment process either expands itself using the provided callback function and does not use the sockets at all OR it uses the sockets and never calls the expansion callback",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "erprocDeploy",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Deploy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocInputTypes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "[ChannelType]",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
        "fct-type": "function",
        "title": "erprocInputTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "erprocInputTypes",
        "normalized": "[ChannelType]",
        "package": "AERN-Net",
        "partial": "Input Types",
        "signature": "[ChannelType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocName",
      "description": {
        "fct-descr": "\u003cp\u003eundeployed process name\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
        "fct-type": "function",
        "title": "erprocName"
      },
      "index": {
        "description": "undeployed process name",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "erprocName",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocOutputTypes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "[ChannelType]",
        "fct-source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
        "fct-type": "function",
        "title": "erprocOutputTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "erprocOutputTypes",
        "normalized": "[ChannelType]",
        "package": "AERN-Net",
        "partial": "Output Types",
        "signature": "[ChannelType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:subnetProcess",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Process",
        "fct-package": "AERN-Net",
        "fct-signature": "ERProcessName-\u003e [(ChannelType, Int)]-\u003e [(ChannelType, Int)]-\u003e [(ERProcess sInAnyProt sOutAnyProt, ([Int], [Int]))]-\u003e ERProcess sInAnyProt sOutAnyProt",
        "fct-type": "function",
        "title": "subnetProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Process",
        "module": "Control.ERNet.Foundations.Process",
        "name": "subnetProcess",
        "normalized": "ERProcessName-\u003e[(ChannelType,Int)]-\u003e[(ChannelType,Int)]-\u003e[(ERProcess a b,([Int],[Int]))]-\u003eERProcess a b",
        "package": "AERN-Net",
        "partial": "Process",
        "signature": "ERProcessName-\u003e[(ChannelType,Int)]-\u003e[(ChannelType,Int)]-\u003e[(ERProcess sInAnyProt sOutAnyProt,([Int],[Int]))]-\u003eERProcess sInAnyProt sOutAnyProt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some basic concrete protocols,\n    namely protocols for transferring a unit and a boolean.\n\u003c/p\u003e\u003cp\u003eSome protocol combinators are provided to form new protocols\n    from old protocols.  Eg one can form a product of\n    two protocols to get a protocol for query-answer dialogues \n    about a pair of values.  Similarly, one can construct \n    protocols for a sum of two types, a maybe type and a list type.  \n\u003c/p\u003e\u003cp\u003eAny protocol can be also extended to include effort indices\n    in queries or to allow incremental computation with non-blocking\n    queries on progress, multiple dialogue thread tracking and the communication\n    of a failure.\n\u003c/p\u003e\u003cp\u003eTODO: add protocols for\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e game-theoretic HO functions\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html",
        "fct-type": "module",
        "title": "StandardCombinators"
      },
      "index": {
        "description": "This module defines some basic concrete protocols namely protocols for transferring unit and boolean Some protocol combinators are provided to form new protocols from old protocols Eg one can form product of two protocols to get protocol for query-answer dialogues about pair of values Similarly one can construct protocols for sum of two types maybe type and list type Any protocol can be also extended to include effort indices in queries or to allow incremental computation with non-blocking queries on progress multiple dialogue thread tracking and the communication of failure TODO add protocols for game-theoretic HO functions",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "StandardCombinators",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Standard Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAChangesA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
        "fct-type": "data",
        "title": "QAChangesA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAChangesQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
        "fct-type": "data",
        "title": "QAChangesQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAIxA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxA",
        "fct-type": "data",
        "title": "QAIxA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAIxA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAIx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAIxQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxQ",
        "fct-type": "data",
        "title": "QAIxQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAIxQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAIx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAListA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
        "fct-type": "data",
        "title": "QAListA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAListQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
        "fct-type": "data",
        "title": "QAListQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAMaybeA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeA",
        "fct-type": "data",
        "title": "QAMaybeA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAMaybeA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAMaybeQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeQ",
        "fct-type": "data",
        "title": "QAMaybeQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAMaybeQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAProdA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
        "fct-type": "data",
        "title": "QAProdA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAProdQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
        "fct-type": "data",
        "title": "QAProdQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesAGivenUp",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAChangesAGivenUp",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
        "fct-type": "function",
        "title": "QAChangesAGivenUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesAGivenUp",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges AGiven Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesANew",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAChangesANew a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
        "fct-type": "function",
        "title": "QAChangesANew"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesANew",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges ANew",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesASame",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAChangesASame",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
        "fct-type": "function",
        "title": "QAChangesASame"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesASame",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges ASame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAChangesQ q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
        "fct-type": "function",
        "title": "QAChangesQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesQIfNew",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAChangesQIfNew QueryId q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
        "fct-type": "function",
        "title": "QAChangesQIfNew"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesQIfNew",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges QIf New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesQWhenNew",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAChangesQWhenNew QueryId q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
        "fct-type": "function",
        "title": "QAChangesQWhenNew"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAChangesQWhenNew",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAChanges QWhen New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAIxA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAIxA a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxA",
        "fct-type": "function",
        "title": "QAIxA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAIxA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAIx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAIxQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAIxQ EffortIndex q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxQ",
        "fct-type": "function",
        "title": "QAIxQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAIxQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAIx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListA [a]",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
        "fct-type": "function",
        "title": "QAListA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListA",
        "normalized": "QAListA[a]",
        "package": "AERN-Net",
        "partial": "QAList",
        "signature": "QAListA[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListALength",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListALength Int",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
        "fct-type": "function",
        "title": "QAListALength"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListALength",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList ALength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListASingle",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListASingle a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
        "fct-type": "function",
        "title": "QAListASingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListASingle",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList ASingle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQAllHomog",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListQAllHomog q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
        "fct-type": "function",
        "title": "QAListQAllHomog"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListQAllHomog",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList QAll Homog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQLength",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListQLength",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
        "fct-type": "function",
        "title": "QAListQLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListQLength",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList QLength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQPrefix",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListQPrefix [q]",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
        "fct-type": "function",
        "title": "QAListQPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListQPrefix",
        "normalized": "QAListQPrefix[a]",
        "package": "AERN-Net",
        "partial": "QAList QPrefix",
        "signature": "QAListQPrefix[q]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQSingle",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAListQSingle Int q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
        "fct-type": "function",
        "title": "QAListQSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAListQSingle",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAList QSingle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAMaybeA (Maybe a)",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeA",
        "fct-type": "function",
        "title": "QAMaybeA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAMaybeA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeAIsNothing",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAMaybeAIsNothing Bool",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeA",
        "fct-type": "function",
        "title": "QAMaybeAIsNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAMaybeAIsNothing",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAMaybe AIs Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAMaybeQ q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeQ",
        "fct-type": "function",
        "title": "QAMaybeQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAMaybeQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeQIsNothing",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAMaybeQIsNothing q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeQ",
        "fct-type": "function",
        "title": "QAMaybeQIsNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAMaybeQIsNothing",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAMaybe QIs Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdABoth",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAProdABoth a1 a2",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
        "fct-type": "function",
        "title": "QAProdABoth"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdABoth",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd ABoth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdAFirst",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAProdAFirst a1",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
        "fct-type": "function",
        "title": "QAProdAFirst"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdAFirst",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd AFirst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdASecond",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAProdASecond a2",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
        "fct-type": "function",
        "title": "QAProdASecond"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdASecond",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd ASecond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdQBoth",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAProdQBoth q1 q2",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
        "fct-type": "function",
        "title": "QAProdQBoth"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdQBoth",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd QBoth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdQFirst",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAProdQFirst q1",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
        "fct-type": "function",
        "title": "QAProdQFirst"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdQFirst",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd QFirst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdQSecond",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "QAProdQSecond q2",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
        "fct-type": "function",
        "title": "QAProdQSecond"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "QAProdQSecond",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProd QSecond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTChanges",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTChanges",
        "fct-type": "function",
        "title": "chTChanges"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "chTChanges",
        "normalized": "ChannelType-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TChanges",
        "signature": "ChannelType-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTIx",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTIx",
        "fct-type": "function",
        "title": "chTIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "chTIx",
        "normalized": "ChannelType-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TIx",
        "signature": "ChannelType-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTList",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTList",
        "fct-type": "function",
        "title": "chTList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "chTList",
        "normalized": "ChannelType-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TList",
        "signature": "ChannelType-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTMaybe",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTMaybe",
        "fct-type": "function",
        "title": "chTMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "chTMaybe",
        "normalized": "ChannelType-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TMaybe",
        "signature": "ChannelType-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTProd",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType -\u003e ChannelType -\u003e ChannelType",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTProd",
        "fct-type": "function",
        "title": "chTProd"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "chTProd",
        "normalized": "ChannelType-\u003eChannelType-\u003eChannelType",
        "package": "AERN-Net",
        "partial": "TProd",
        "signature": "ChannelType-\u003eChannelType-\u003eChannelType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:firstJust",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "[Maybe err] -\u003e Maybe err",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#firstJust",
        "fct-type": "function",
        "title": "firstJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "firstJust",
        "normalized": "[Maybe a]-\u003eMaybe a",
        "package": "AERN-Net",
        "partial": "Just",
        "signature": "[Maybe err]-\u003eMaybe err"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:makeAnswerList",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "[a] -\u003e QAListQ q -\u003e QAListA a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#makeAnswerList",
        "fct-type": "function",
        "title": "makeAnswerList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "makeAnswerList",
        "normalized": "[a]-\u003eQAListQ b-\u003eQAListA a",
        "package": "AERN-Net",
        "partial": "Answer List",
        "signature": "[a]-\u003eQAListQ q-\u003eQAListA a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:makeAnswerMaybe",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "(q -\u003e Maybe a) -\u003e QAMaybeQ q -\u003e QAMaybeA a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#makeAnswerMaybe",
        "fct-type": "function",
        "title": "makeAnswerMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "makeAnswerMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eQAMaybeQ a-\u003eQAMaybeA b",
        "package": "AERN-Net",
        "partial": "Answer Maybe",
        "signature": "(q-\u003eMaybe a)-\u003eQAMaybeQ q-\u003eQAMaybeA a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:makeAnswerProd",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "fct-package": "AERN-Net",
        "fct-signature": "(q1 -\u003e a1) -\u003e (q2 -\u003e a2) -\u003e QAProdQ q1 q2 -\u003e QAProdA a1 a2",
        "fct-source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#makeAnswerProd",
        "fct-type": "function",
        "title": "makeAnswerProd"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
        "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
        "name": "makeAnswerProd",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eQAProdQ a a-\u003eQAProdA b b",
        "package": "AERN-Net",
        "partial": "Answer Prod",
        "signature": "(q-\u003ea)-\u003e(q-\u003ea)-\u003eQAProdQ q q-\u003eQAProdA a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the concept of a protocol \n    for channel communication.\n\u003c/p\u003e\u003cp\u003eThe protocol concept is formalised using the 2-parameter class \n    \u003ccode\u003e\u003ca\u003eQAProtocol\u003c/a\u003e\u003c/code\u003e and the existential types \n    \u003ccode\u003e\u003ca\u003eChannelType\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAnswerAnyProt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eQueryAnyProt\u003c/a\u003e\u003c/code\u003e\n    indexed by instances of \u003ccode\u003e\u003ca\u003eQAProtocol\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "module",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html",
        "fct-type": "module",
        "title": "Protocol"
      },
      "index": {
        "description": "This module defines the concept of protocol for channel communication The protocol concept is formalised using the parameter class QAProtocol and the existential types ChannelType AnswerAnyProt QueryAnyProt indexed by instances of QAProtocol",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "Protocol",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:AnswerAnyProt",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of answers from all protocols.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#AnswerAnyProt",
        "fct-type": "data",
        "title": "AnswerAnyProt"
      },
      "index": {
        "description": "Union of answers from all protocols",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "AnswerAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Answer Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:ChannelType",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is used to identify protocols eg for\n    the creation of new channels or for dynamic type checking.\n    It consists of an example query and an example answer.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#ChannelType",
        "fct-type": "data",
        "title": "ChannelType"
      },
      "index": {
        "description": "This type is used to identify protocols eg for the creation of new channels or for dynamic type checking It consists of an example query and an example answer",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "ChannelType",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QABoolQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QABoolQ",
        "fct-type": "data",
        "title": "QABoolQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QABoolQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QABool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QANatA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QANatA",
        "fct-type": "data",
        "title": "QANatA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QANatA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QANat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QANatQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QANatQ",
        "fct-type": "data",
        "title": "QANatQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QANatQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QANat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QAProtocol",
      "description": {
        "fct-descr": "\u003cp\u003eA class grouping types of queries and answers.\n\u003c/p\u003e\u003cp\u003eEach instance has to define dynamic type checking of answers agains queries.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "class",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QAProtocol",
        "fct-type": "class",
        "title": "QAProtocol"
      },
      "index": {
        "description": "class grouping types of queries and answers Each instance has to define dynamic type checking of answers agains queries",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QAProtocol",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAProtocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QAUnitA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitA",
        "fct-type": "data",
        "title": "QAUnitA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QAUnitA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QAUnitQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitQ",
        "fct-type": "data",
        "title": "QAUnitQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QAUnitQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QueryAnyProt",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of queries from all protocols.\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "data",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QueryAnyProt",
        "fct-type": "data",
        "title": "QueryAnyProt"
      },
      "index": {
        "description": "Union of queries from all protocols",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QueryAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QueryId",
      "description": {
        "fct-descr": "\u003cp\u003eany danger of over 2^29 queries?\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "type",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QueryId",
        "fct-type": "type",
        "title": "QueryId"
      },
      "index": {
        "description": "any danger of over queries",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QueryId",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:AnswerAnyProt",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "AnswerAnyProt a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#AnswerAnyProt",
        "fct-type": "function",
        "title": "AnswerAnyProt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "AnswerAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Answer Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:ChannelType",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "ChannelType q a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#ChannelType",
        "fct-type": "function",
        "title": "ChannelType"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "ChannelType",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Channel Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QABoolQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "QABoolQ",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QABoolQ",
        "fct-type": "function",
        "title": "QABoolQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QABoolQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QABool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QANatA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "QANatA Integer",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QANatA",
        "fct-type": "function",
        "title": "QANatA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QANatA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QANat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QANatQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "QANatQ",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QANatQ",
        "fct-type": "function",
        "title": "QANatQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QANatQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QANat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QAUnitA",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "QAUnitA",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitA",
        "fct-type": "function",
        "title": "QAUnitA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QAUnitA",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QAUnitQ",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "QAUnitQ",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitQ",
        "fct-type": "function",
        "title": "QAUnitQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QAUnitQ",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "QAUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QueryAnyProt",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "QueryAnyProt q",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#QueryAnyProt",
        "fct-type": "function",
        "title": "QueryAnyProt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "QueryAnyProt",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Query Any Prot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:qaMatch",
      "description": {
        "fct-descr": "\u003cp\u003etest whether the answer makes sense for a given query (dynamic type checking)\n\u003c/p\u003e",
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "qaMatch",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#qaMatch",
        "fct-type": "method",
        "title": "qaMatch"
      },
      "index": {
        "description": "test whether the answer makes sense for given query dynamic type checking",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "qaMatch",
        "normalized": "",
        "package": "AERN-Net",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:qaaSetMinGran",
      "description": {
        "fct-module": "Control.ERNet.Foundations.Protocol",
        "fct-package": "AERN-Net",
        "fct-signature": "Granularity -\u003e a -\u003e a",
        "fct-source": "src/Control-ERNet-Foundations-Protocol.html#qaaSetMinGran",
        "fct-type": "method",
        "title": "qaaSetMinGran"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ERNet Foundations Protocol",
        "module": "Control.ERNet.Foundations.Protocol",
        "name": "qaaSetMinGran",
        "normalized": "Granularity-\u003ea-\u003ea",
        "package": "AERN-Net",
        "partial": "Set Min Gran",
        "signature": "Granularity-\u003ea-\u003ea"
      }
    }
  }
]