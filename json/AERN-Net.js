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
        "word": "AERN-Net"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of a few universaly useful simple network processes \n    and process templates. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions of few universaly useful simple network processes and process templates",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic process with no inputs that answers using a ChTChanges protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "constantChangedProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (q -\u003e a)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "generic process with no inputs that answers using ChTChanges protocol",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "constantChangedProcess",
          "normalized": "ERProcessName-\u003e(a-\u003eb)-\u003eChannelType-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Changed Process",
          "signature": "ERProcessName-\u003e(q-\u003ea)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:constantChangedProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic stateless process with no inputs.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "constantProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (q -\u003e a)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "generic stateless process with no inputs",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "constantProcess",
          "normalized": "ERProcessName-\u003e(a-\u003eb)-\u003eChannelType-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Process",
          "signature": "ERProcessName-\u003e(q-\u003ea)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:constantProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic stateful process with no inputs.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "constantStatefulProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (s -\u003e (QueryId, q) -\u003e ((Bool, a), Maybe s))-\u003e s-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "generic stateful process with no inputs",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "constantStatefulProcess",
          "normalized": "ERProcessName-\u003e(a-\u003e(QueryId,b)-\u003e((Bool,c),Maybe a))-\u003ea-\u003eChannelType-\u003eERProcess d e",
          "package": "AERN-Net",
          "partial": "Stateful Process",
          "signature": "ERProcessName-\u003e(s-\u003e(QueryId,q)-\u003e((Bool,a),Maybe s))-\u003es-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:constantStatefulProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple process that either responds with no further queries \n  or passes on a translated version of the query to another process, \n  and then passing back a translated version of the answer received.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "maybePassThroughProcess",
          "package": "AERN-Net",
          "signature": "Bool-\u003e ERProcessName-\u003e (q1 -\u003e Bool)-\u003e (q1 -\u003e a1)-\u003e (q1 -\u003e q2)-\u003e (q1 -\u003e a2 -\u003e a1)-\u003e ChannelType-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "simple process that either responds with no further queries or passes on translated version of the query to another process and then passing back translated version of the answer received",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "maybePassThroughProcess",
          "normalized": "Bool-\u003eERProcessName-\u003e(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003ea)-\u003e(a-\u003eb-\u003eb)-\u003eChannelType-\u003eChannelType-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Pass Through Process",
          "signature": "Bool-\u003eERProcessName-\u003e(q-\u003eBool)-\u003e(q-\u003ea)-\u003e(q-\u003eq)-\u003e(q-\u003ea-\u003ea)-\u003eChannelType-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:maybePassThroughProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple process that passes on a translated version of each query\n  to another process and translates the answers before passing them back.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughBinaryProcess",
          "package": "AERN-Net",
          "signature": "Bool-\u003e ERProcessName-\u003e (q -\u003e (q1, q2))-\u003e (q -\u003e (a1, a2) -\u003e a)-\u003e (ChannelType, ChannelType)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "simple process that passes on translated version of each query to another process and translates the answers before passing them back",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughBinaryProcess",
          "normalized": "Bool-\u003eERProcessName-\u003e(a-\u003e(a,a))-\u003e(a-\u003e(b,b)-\u003eb)-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Through Binary Process",
          "signature": "Bool-\u003eERProcessName-\u003e(q-\u003e(q,q))-\u003e(q-\u003e(a,a)-\u003ea)-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughBinaryProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process that passes on a translated version of each query\n  to one or both of another 2 channels.  When the other channel(s) answer, \n  it analyses the answer(s) and decides whether to send other queries or\n  answer its original query.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughBinaryStatefulProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (s -\u003e (QueryId, q) -\u003e (ERProcessAction s (Maybe q1, Maybe q2) a, Maybe s))-\u003e (s -\u003e (QueryId, q) -\u003e (Maybe a1, Maybe a2) -\u003e (ERProcessAction s (Maybe q1, Maybe q2) a, Maybe s))-\u003e s-\u003e (ChannelType, ChannelType)-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process that passes on translated version of each query to one or both of another channels When the other channel answer it analyses the answer and decides whether to send other queries or answer its original query",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughBinaryStatefulProcess",
          "normalized": "ERProcessName-\u003e(a-\u003e(QueryId,b)-\u003e(ERProcessAction a(Maybe b,Maybe b)c,Maybe a))-\u003e(a-\u003e(QueryId,b)-\u003e(Maybe c,Maybe c)-\u003e(ERProcessAction a(Maybe b,Maybe b)c,Maybe a))-\u003ea-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess d e",
          "package": "AERN-Net",
          "partial": "Through Binary Stateful Process",
          "signature": "ERProcessName-\u003e(s-\u003e(QueryId,q)-\u003e(ERProcessAction s(Maybe q,Maybe q)a,Maybe s))-\u003e(s-\u003e(QueryId,q)-\u003e(Maybe a,Maybe a)-\u003e(ERProcessAction s(Maybe q,Maybe q)a,Maybe s))-\u003es-\u003e(ChannelType,ChannelType)-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughBinaryStatefulProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple process that passes on a translated version of each query\n  to another process and translates the answers before passing them back.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughProcess",
          "package": "AERN-Net",
          "signature": "Bool-\u003e ERProcessName-\u003e (q1 -\u003e q2)-\u003e (q1 -\u003e a2 -\u003e a1)-\u003e ChannelType-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "simple process that passes on translated version of each query to another process and translates the answers before passing them back",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughProcess",
          "normalized": "Bool-\u003eERProcessName-\u003e(a-\u003ea)-\u003e(a-\u003eb-\u003eb)-\u003eChannelType-\u003eChannelType-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Through Process",
          "signature": "Bool-\u003eERProcessName-\u003e(q-\u003eq)-\u003e(q-\u003ea-\u003ea)-\u003eChannelType-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process with one input and one output socket. \n  Upon receiving a query or an answer related to a previously received query, \n  the process uses the provided functions to decide whether to answer\n  the query, make a new query or wait until the state meets a certain condition.\n  When the condition is met, the event (query or answer) in question is processed \n  again using the same function.    \n\u003c/p\u003e\u003cp\u003eSeveral simpler processes are defined as specialisations of this one.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughStatefulProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (s -\u003e (QueryId, q1) -\u003e (ERProcessAction s q2 a1, Maybe s))-\u003e (s -\u003e (QueryId, q1) -\u003e (q2, a2) -\u003e (ERProcessAction s q2 a1, Maybe s))-\u003e s-\u003e ChannelType-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process with one input and one output socket Upon receiving query or an answer related to previously received query the process uses the provided functions to decide whether to answer the query make new query or wait until the state meets certain condition When the condition is met the event query or answer in question is processed again using the same function Several simpler processes are defined as specialisations of this one",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "passThroughStatefulProcess",
          "normalized": "ERProcessName-\u003e(a-\u003e(QueryId,b)-\u003e(ERProcessAction a b c,Maybe a))-\u003e(a-\u003e(QueryId,b)-\u003e(b,c)-\u003e(ERProcessAction a b c,Maybe a))-\u003ea-\u003eChannelType-\u003eChannelType-\u003eERProcess d e",
          "package": "AERN-Net",
          "partial": "Through Stateful Process",
          "signature": "ERProcessName-\u003e(s-\u003e(QueryId,q)-\u003e(ERProcessAction s q a,Maybe s))-\u003e(s-\u003e(QueryId,q)-\u003e(q,a)-\u003e(ERProcessAction s q a,Maybe s))-\u003es-\u003eChannelType-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:passThroughStatefulProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trivial passthrough process that only:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e reduces prec by 1 in all queries\n\u003c/li\u003e\u003cli\u003e ensures that the granularity of all answers is raised to prec\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "precProcess",
          "package": "AERN-Net",
          "signature": "Bool-\u003e ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "trivial passthrough process that only reduces prec by in all queries ensures that the granularity of all answers is raised to prec",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "precProcess",
          "normalized": "Bool-\u003eERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Process",
          "signature": "Bool-\u003eERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:precProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process passing on information without modification, except for improving the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the answer has improved sufficiently since last time one was given \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCurrently supports only single-threaded querying.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "rateProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (a -\u003e a -\u003e Bool)-\u003e Int-\u003e ChannelType-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process passing on information without modification except for improving the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the answer has improved sufficiently since last time one was given the number of queries made in response to this query has reached the given limit Currently supports only single-threaded querying",
          "hierarchy": "Control ERNet Blocks Basic",
          "module": "Control.ERNet.Blocks.Basic",
          "name": "rateProcess",
          "normalized": "ERProcessName-\u003e(a-\u003ea-\u003eBool)-\u003eInt-\u003eChannelType-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Process",
          "signature": "ERProcessName-\u003e(a-\u003ea-\u003eBool)-\u003eInt-\u003eChannelType-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Basic.html#v:rateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of processes whose main purpose is \n    to synchronise other processes and have little\n    semantical value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Control-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "collection of processes whose main purpose is to synchronise other processes and have little semantical value",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis process provides two channels (primary, secondary) \n    split off from one source channel. The primary channel\n    is a clean forward of the source channel.  The secondary\n    channel can use a slightly different protocol than the primary channel.\n\u003c/p\u003e\u003cp\u003eAny query on the secondary channel will be blocked until a matching\n    query is received and processed on the primary channel.  (The user must\n    supply a function that decides whether or not the queries are matching.)\n\u003c/p\u003e\u003cp\u003eWhenever a query is being answered on the primary channel, \n    all queries pending on the secondary channel that are\n    matching this one will be replied at the same time \n    using the an answer derived from the answer on the primary channel.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "biasedSplitSyncProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e ChannelType-\u003e ChannelType-\u003e (q2 -\u003e q1 -\u003e Bool)-\u003e (q2 -\u003e a1 -\u003e a2)-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "This process provides two channels primary secondary split off from one source channel The primary channel is clean forward of the source channel The secondary channel can use slightly different protocol than the primary channel Any query on the secondary channel will be blocked until matching query is received and processed on the primary channel The user must supply function that decides whether or not the queries are matching Whenever query is being answered on the primary channel all queries pending on the secondary channel that are matching this one will be replied at the same time using the an answer derived from the answer on the primary channel",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "biasedSplitSyncProcess",
          "normalized": "ERProcessName-\u003eChannelType-\u003eChannelType-\u003e(a-\u003ea-\u003eBool)-\u003e(a-\u003eb-\u003eb)-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Split Sync Process",
          "signature": "ERProcessName-\u003eChannelType-\u003eChannelType-\u003e(q-\u003eq-\u003eBool)-\u003e(q-\u003ea-\u003ea)-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:biasedSplitSyncProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis process acts as a simple pass-through \n    + it decreases the effort index of each query\n    except for a query with effort index zero\n    it asks a special value provider.\n    It can cope with several queries in parallel.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "improverIxSimpleProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "This process acts as simple pass-through it decreases the effort index of each query except for query with effort index zero it asks special value provider It can cope with several queries in parallel",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "improverIxSimpleProcess",
          "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Ix Simple Process",
          "signature": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:improverIxSimpleProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis process acts as a simple pass-through + it \n    remembers its last answer and provides it on another channel.\n    It initialises its memory from a special value provider.  \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "improverNoIxSimpleProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "This process acts as simple pass-through it remembers its last answer and provides it on another channel It initialises its memory from special value provider",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "improverNoIxSimpleProcess",
          "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "No Ix Simple Process",
          "signature": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:improverNoIxSimpleProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis process joins information from two channels (\u003ca\u003estep\u003c/a\u003e, \u003ca\u003eval\u003c/a\u003e) \n    in such a way that it acts as a splitter of responsibilities \n    for its multi-threaded failure-enabled result channel as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ca\u003estep\u003c/a\u003e channel provides the timing and effort information for responses.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eval\u003c/a\u003e channel provides values without significant blocking.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhile the process is waiting for a response from the step channel,\n    any queries are put on hold until the response comes.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the step channel responds with indication of failure, then\n    all pending queries are answered as failed.\n\u003c/li\u003e\u003cli\u003e If the step channel responds with ok, then all the pending queries\n    are forwarded to the value channel and answered asap.\n    No new queries are accepted during such forwarding stage.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "joinStepValProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e ChannelType-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "This process joins information from two channels step val in such way that it acts as splitter of responsibilities for its multi-threaded failure-enabled result channel as follows The step channel provides the timing and effort information for responses The val channel provides values without significant blocking While the process is waiting for response from the step channel any queries are put on hold until the response comes If the step channel responds with indication of failure then all pending queries are answered as failed If the step channel responds with ok then all the pending queries are forwarded to the value channel and answered asap No new queries are accepted during such forwarding stage",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "joinStepValProcess",
          "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Step Val Process",
          "signature": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:joinStepValProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis process provides multiple copies of one single-threaded channel. \n\u003c/p\u003e\u003cp\u003emerges splits a channel into two channels \n    - primary channel and secondary channel.  The primary channel\n    is a clean forward of the original channel.  The secondary\n    channel can use a slightly different protocol than the primary channel.\n\u003c/p\u003e\u003cp\u003eAny query on the secondary channel will be blocked until a matching\n    query is received and processed on the primary channel.  (The user must\n    supply a function that decides whether or not the queries are matching.)\n\u003c/p\u003e\u003cp\u003eWhenever a query is being answered on the primary channel, \n    all queries pending on the secondary channel that are\n    matching this one will be replied at the same time \n    using the an answer derived from the answer on the primary channel.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "splitSyncProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e ChannelType-\u003e Int-\u003e a-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "This process provides multiple copies of one single-threaded channel merges splits channel into two channels primary channel and secondary channel The primary channel is clean forward of the original channel The secondary channel can use slightly different protocol than the primary channel Any query on the secondary channel will be blocked until matching query is received and processed on the primary channel The user must supply function that decides whether or not the queries are matching Whenever query is being answered on the primary channel all queries pending on the secondary channel that are matching this one will be replied at the same time using the an answer derived from the answer on the primary channel",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "splitSyncProcess",
          "normalized": "ERProcessName-\u003eChannelType-\u003eInt-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Sync Process",
          "signature": "ERProcessName-\u003eChannelType-\u003eInt-\u003ea-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:splitSyncProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis process acts as a \u003ca\u003eswitch\u003c/a\u003e for a group of channels, forwarding information\n    from one of two groups of source channels.  The special \u003ca\u003eswitch\u003c/a\u003e channel\n    indicates whether to use one or the other. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "switchMultiProcess",
          "package": "AERN-Net",
          "signature": "Bool-\u003e ERProcessName-\u003e [ChannelType]-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "This process acts as switch for group of channels forwarding information from one of two groups of source channels The special switch channel indicates whether to use one or the other",
          "hierarchy": "Control ERNet Blocks Control Basic",
          "module": "Control.ERNet.Blocks.Control.Basic",
          "name": "switchMultiProcess",
          "normalized": "Bool-\u003eERProcessName-\u003e[ChannelType]-\u003eERProcess a b",
          "package": "AERN-Net",
          "partial": "Multi Process",
          "signature": "Bool-\u003eERProcessName-\u003e[ChannelType]-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Control-Basic.html#v:switchMultiProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-Basic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real Basic",
          "module": "Control.ERNet.Blocks.Real.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process passing on information about a real number, trying to improve the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the information about the number has improved by the desired amount since last time \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ERNet.Blocks.Real.Basic",
          "name": "rateRProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e Rational-\u003e Int-\u003e ra-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process passing on information about real number trying to improve the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the information about the number has improved by the desired amount since last time the number of queries made in response to this query has reached the given limit",
          "hierarchy": "Control ERNet Blocks Real Basic",
          "module": "Control.ERNet.Blocks.Real.Basic",
          "name": "rateRProcess",
          "normalized": "ERProcessName-\u003eRational-\u003eInt-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "RProcess",
          "signature": "ERProcessName-\u003eRational-\u003eInt-\u003era-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Basic.html#v:rateRProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process passing on information about a list of real numbers, trying to improve the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the information about the tuple has improved by the desired amount since last time \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ERNet.Blocks.Real.Basic",
          "name": "rateRsProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e Rational-\u003e Int-\u003e ra-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process passing on information about list of real numbers trying to improve the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the information about the tuple has improved by the desired amount since last time the number of queries made in response to this query has reached the given limit",
          "hierarchy": "Control ERNet Blocks Real Basic",
          "module": "Control.ERNet.Blocks.Real.Basic",
          "name": "rateRsProcess",
          "normalized": "ERProcessName-\u003eRational-\u003eInt-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Rs Process",
          "signature": "ERProcessName-\u003eRational-\u003eInt-\u003era-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Basic.html#v:rateRsProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA protocol for sending a real number using a stream\n    of LFT digits based on the work of Potts and Edalat (1997). \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html",
          "type": "module"
        },
        "index": {
          "description": "protocol for sending real number using stream of LFT digits based on the work of Potts and Edalat",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT",
          "package": "AERN-Net",
          "partial": "LFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFTDigit",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFTDigit",
          "package": "AERN-Net",
          "partial": "LFTDigit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:LFTDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multi-dimensional linear fractional transformation with integer coefficients. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFTTensor",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
          "type": "data"
        },
        "index": {
          "description": "multi-dimensional linear fractional transformation with integer coefficients",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFTTensor",
          "package": "AERN-Net",
          "partial": "LFTTensor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:LFTTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealA",
          "package": "AERN-Net",
          "partial": "QALFTReal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:QALFTRealA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealQ",
          "package": "AERN-Net",
          "partial": "QALFTReal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#t:QALFTRealQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFTTensor",
          "package": "AERN-Net",
          "signature": "LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFTTensor",
          "package": "AERN-Net",
          "partial": "LFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFTTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_L",
          "package": "AERN-Net",
          "signature": "LFT_L",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_L",
          "package": "AERN-Net",
          "partial": "LFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_M",
          "package": "AERN-Net",
          "signature": "LFT_M",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_M",
          "package": "AERN-Net",
          "partial": "LFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_R",
          "package": "AERN-Net",
          "signature": "LFT_R",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_R",
          "package": "AERN-Net",
          "partial": "LFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_INF",
          "package": "AERN-Net",
          "signature": "LFT_SG_INF",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_INF",
          "package": "AERN-Net",
          "partial": "LFT SG INF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_INF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_NEG",
          "package": "AERN-Net",
          "signature": "LFT_SG_NEG",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_NEG",
          "package": "AERN-Net",
          "partial": "LFT SG NEG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_NEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_POS",
          "package": "AERN-Net",
          "signature": "LFT_SG_POS",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_POS",
          "package": "AERN-Net",
          "partial": "LFT SG POS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_POS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_ZER",
          "package": "AERN-Net",
          "signature": "LFT_SG_ZER",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "LFT_SG_ZER",
          "package": "AERN-Net",
          "partial": "LFT SG ZER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:LFT_SG_ZER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealA",
          "package": "AERN-Net",
          "signature": "QALFTRealA [LFTDigit]",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealA",
          "normalized": "QALFTRealA[LFTDigit]",
          "package": "AERN-Net",
          "partial": "QALFTReal",
          "signature": "QALFTRealA[LFTDigit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:QALFTRealA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealQ",
          "package": "AERN-Net",
          "signature": "QALFTRealQ Int",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#QALFTRealQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "QALFTRealQ",
          "package": "AERN-Net",
          "partial": "QALFTReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:QALFTRealQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "chTLFTReal",
          "package": "AERN-Net",
          "signature": "ChannelType",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#chTLFTReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "chTLFTReal",
          "package": "AERN-Net",
          "partial": "TLFTReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:chTLFTReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for a 0-ary LFT with integer coefficients. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftConst",
          "package": "AERN-Net",
          "signature": "Integer -\u003e Integer -\u003e LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftConst",
          "type": "function"
        },
        "index": {
          "description": "Constructor for ary LFT with integer coefficients",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftConst",
          "normalized": "Integer-\u003eInteger-\u003eLFTTensor",
          "package": "AERN-Net",
          "partial": "Const",
          "signature": "Integer-\u003eInteger-\u003eLFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret the LFT digits as LFTs.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftDigit2Tensor",
          "package": "AERN-Net",
          "signature": "LFTDigit -\u003e LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftDigit2Tensor",
          "type": "function"
        },
        "index": {
          "description": "Interpret the LFT digits as LFTs",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftDigit2Tensor",
          "normalized": "LFTDigit-\u003eLFTTensor",
          "package": "AERN-Net",
          "partial": "Digit Tensor",
          "signature": "LFTDigit-\u003eLFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftDigit2Tensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for a unary LFT with integer coefficients. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftMatrix",
          "package": "AERN-Net",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftMatrix",
          "type": "function"
        },
        "index": {
          "description": "Constructor for unary LFT with integer coefficients",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftMatrix",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor",
          "package": "AERN-Net",
          "partial": "Matrix",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process that receives a real number incrementally digit by digit\n    and makes it available to multiple clients incrementally or non-incrementally.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftRealNumberBufferForkProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName -\u003e ERProcess sInAnyProt sOutAnyProt",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftRealNumberBufferForkProcess",
          "type": "function"
        },
        "index": {
          "description": "process that receives real number incrementally digit by digit and makes it available to multiple clients incrementally or non-incrementally",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftRealNumberBufferForkProcess",
          "normalized": "ERProcessName-\u003eERProcess a b",
          "package": "AERN-Net",
          "partial": "Real Number Buffer Fork Process",
          "signature": "ERProcessName-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftRealNumberBufferForkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process communicating a real number to a single client\n    incrementally digit by digit.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftRealNumberIncremProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e (EffortIndex -\u003e ra)-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process communicating real number to single client incrementally digit by digit",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftRealNumberIncremProcess",
          "normalized": "ERProcessName-\u003e(EffortIndex-\u003ea)-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Real Number Increm Process",
          "signature": "ERProcessName-\u003e(EffortIndex-\u003era)-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftRealNumberIncremProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe first Bool indicates whether or not the term is in the numerator of the LFT\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTNScoeffs",
          "package": "AERN-Net",
          "signature": "Map [Bool] Integer",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
          "type": "function"
        },
        "index": {
          "description": "the first Bool indicates whether or not the term is in the numerator of the LFT",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTNScoeffs",
          "normalized": "Map[Bool]Integer",
          "package": "AERN-Net",
          "partial": "TNScoeffs",
          "signature": "Map[Bool]Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTNScoeffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTNSrank",
          "package": "AERN-Net",
          "signature": "Int",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#LFTTensor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTNSrank",
          "package": "AERN-Net",
          "partial": "TNSrank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTNSrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for a binary LFT with integer coefficients. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorBinary",
          "package": "AERN-Net",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e Integer -\u003e LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorBinary",
          "type": "function"
        },
        "index": {
          "description": "Constructor for binary LFT with integer coefficients",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorBinary",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor",
          "package": "AERN-Net",
          "partial": "Tensor Binary",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eInteger-\u003eLFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two LFTs, ie substituting one into another \n    using one of its variables.  \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorCompose",
          "package": "AERN-Net",
          "signature": "LFTTensor -\u003e Int -\u003e LFTTensor -\u003e LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorCompose",
          "type": "function"
        },
        "index": {
          "description": "Compose two LFTs ie substituting one into another using one of its variables",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorCompose",
          "normalized": "LFTTensor-\u003eInt-\u003eLFTTensor-\u003eLFTTensor",
          "package": "AERN-Net",
          "partial": "Tensor Compose",
          "signature": "LFTTensor-\u003eInt-\u003eLFTTensor-\u003eLFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two unary LFTs, ie substituting one into the other. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorComposeUnary",
          "package": "AERN-Net",
          "signature": "LFTTensor -\u003e LFTTensor -\u003e LFTTensor",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorComposeUnary",
          "type": "function"
        },
        "index": {
          "description": "Compose two unary LFTs ie substituting one into the other",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorComposeUnary",
          "normalized": "LFTTensor-\u003eLFTTensor-\u003eLFTTensor",
          "package": "AERN-Net",
          "partial": "Tensor Compose Unary",
          "signature": "LFTTensor-\u003eLFTTensor-\u003eLFTTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorComposeUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWork out what interval is the image of the lft when all\n    variables are given the value [0,oo].\n    The returned interval may be slightly bigger than the\n    exact image due to rounding but it always contains the\n    whole exact image. \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorInfo",
          "package": "AERN-Net",
          "signature": "Granularity -\u003e LFTTensor -\u003e ExtInterval ra",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorInfo",
          "type": "function"
        },
        "index": {
          "description": "Work out what interval is the image of the lft when all variables are given the value oo The returned interval may be slightly bigger than the exact image due to rounding but it always contains the whole exact image",
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorInfo",
          "normalized": "Granularity-\u003eLFTTensor-\u003eExtInterval a",
          "package": "AERN-Net",
          "partial": "Tensor Info",
          "signature": "Granularity-\u003eLFTTensor-\u003eExtInterval ra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorIsPositive",
          "package": "AERN-Net",
          "signature": "LFTTensor -\u003e Bool",
          "source": "src/Control-ERNet-Blocks-Real-LFT.html#lftTensorIsPositive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real LFT",
          "module": "Control.ERNet.Blocks.Real.LFT",
          "name": "lftTensorIsPositive",
          "normalized": "LFTTensor-\u003eBool",
          "package": "AERN-Net",
          "partial": "Tensor Is Positive",
          "signature": "LFTTensor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-LFT.html#v:lftTensorIsPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic protocol for transferring approximations of a single real number\n    using intervals. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "Protocols",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html",
          "type": "module"
        },
        "index": {
          "description": "Basic protocol for transferring approximations of single real number using intervals",
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "Protocols",
          "package": "AERN-Net",
          "partial": "Protocols",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealA",
          "package": "AERN-Net",
          "partial": "QAReal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#t:QARealA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealQ",
          "package": "AERN-Net",
          "partial": "QAReal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#t:QARealQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealA",
          "package": "AERN-Net",
          "signature": "QARealA ra",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealA",
          "package": "AERN-Net",
          "partial": "QAReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:QARealA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealQ",
          "package": "AERN-Net",
          "signature": "QARealQ",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#QARealQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "QARealQ",
          "package": "AERN-Net",
          "partial": "QAReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:QARealQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "chTReal",
          "package": "AERN-Net",
          "signature": "ira -\u003e ChannelType",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#chTReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "chTReal",
          "normalized": "a-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TReal",
          "signature": "ira-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:chTReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an answer to a query for a real number\n    using the default real number protocol with an effort index.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerR",
          "package": "AERN-Net",
          "signature": "(EffortIndex -\u003e ra) -\u003e QAIxQ QARealQ -\u003e QAIxA (QARealA ra)",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerR",
          "type": "function"
        },
        "index": {
          "description": "Construct an answer to query for real number using the default real number protocol with an effort index",
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerR",
          "normalized": "(EffortIndex-\u003ea)-\u003eQAIxQ QARealQ-\u003eQAIxA(QARealA a)",
          "package": "AERN-Net",
          "partial": "Answer",
          "signature": "(EffortIndex-\u003era)-\u003eQAIxQ QARealQ-\u003eQAIxA(QARealA ra)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an answer to a query for a real number\n    using the default real number protocol without any effort index.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerRNoIx",
          "package": "AERN-Net",
          "signature": "ra -\u003e QARealQ -\u003e QARealA ra",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerRNoIx",
          "type": "function"
        },
        "index": {
          "description": "Construct an answer to query for real number using the default real number protocol without any effort index",
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerRNoIx",
          "normalized": "a-\u003eQARealQ-\u003eQARealA a",
          "package": "AERN-Net",
          "partial": "Answer RNo Ix",
          "signature": "ra-\u003eQARealQ-\u003eQARealA ra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerRNoIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an answer to a query for a list a real numbers\n    using the list protocol with an effort index.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerRs",
          "package": "AERN-Net",
          "signature": "(EffortIndex -\u003e [ra]) -\u003e QAIxQ (QAListQ QARealQ) -\u003e QAIxA (QAListA (QARealA ra))",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerRs",
          "type": "function"
        },
        "index": {
          "description": "Construct an answer to query for list real numbers using the list protocol with an effort index",
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerRs",
          "normalized": "(EffortIndex-\u003e[a])-\u003eQAIxQ(QAListQ QARealQ)-\u003eQAIxA(QAListA(QARealA a))",
          "package": "AERN-Net",
          "partial": "Answer Rs",
          "signature": "(EffortIndex-\u003e[ra])-\u003eQAIxQ(QAListQ QARealQ)-\u003eQAIxA(QAListA(QARealA ra))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an answer to a query for a list a real numbers\n    using the list protocol without any effort index.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerRsNoIx",
          "package": "AERN-Net",
          "signature": "[ra] -\u003e QAListQ QARealQ -\u003e QAListA (QARealA ra)",
          "source": "src/Control-ERNet-Blocks-Real-Protocols.html#makeAnswerRsNoIx",
          "type": "function"
        },
        "index": {
          "description": "Construct an answer to query for list real numbers using the list protocol without any effort index",
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "makeAnswerRsNoIx",
          "normalized": "[a]-\u003eQAListQ QARealQ-\u003eQAListA(QARealA a)",
          "package": "AERN-Net",
          "partial": "Answer Rs No Ix",
          "signature": "[ra]-\u003eQAListQ QARealQ-\u003eQAListA(QARealA ra)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:makeAnswerRsNoIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a query and wait for answer \n    on a real number input socket with the standard\n    (index -\u003e approx) protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "querySyncR",
          "package": "AERN-Net",
          "signature": "sOut q2 a2-\u003e QueryId-\u003e sIn (QAIxQ QARealQ) (QAIxA (QARealA ira))-\u003e EffortIndex-\u003e IO ira",
          "type": "function"
        },
        "index": {
          "description": "Make query and wait for answer on real number input socket with the standard index approx protocol",
          "hierarchy": "Control ERNet Blocks Real Protocols",
          "module": "Control.ERNet.Blocks.Real.Protocols",
          "name": "querySyncR",
          "normalized": "a b c-\u003eQueryId-\u003ed(QAIxQ QARealQ)(QAIxA(QARealA e))-\u003eEffortIndex-\u003eIO e",
          "package": "AERN-Net",
          "partial": "Sync",
          "signature": "sOut q a-\u003eQueryId-\u003esIn(QAIxQ QARealQ)(QAIxA(QARealA ira))-\u003eEffortIndex-\u003eIO ira",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-Real-Protocols.html#v:querySyncR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few processes universally useful when representing (1st-order) real functions\n    as single data entities via \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e.   \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-RnToRm-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "few processes universally useful when representing st-order real functions as single data entities via ERFnDomApprox",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "Basic",
          "package": "AERN-Net",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function transformer ((R^m-\u003eR^n) -\u003e (R^m-\u003eR^n)) to a function (R^m-\u003eR^n).\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "applyFieldProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "Apply function transformer to function",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "applyFieldProcess",
          "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Field Process",
          "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:applyFieldProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pass-through process for first order real functions with effort index \n    that is almost equal to the identity.\n\u003c/p\u003e\u003cp\u003eIt restricts the function's graph at certain given intervals\n    to the given boxes.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "boundingProcess",
          "package": "AERN-Net",
          "signature": "Bool-\u003e ERProcessName-\u003e ChannelType-\u003e fa-\u003e EffortIndex-\u003e [(domra, ranra)]-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "pass-through process for first order real functions with effort index that is almost equal to the identity It restricts the function graph at certain given intervals to the given boxes",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "boundingProcess",
          "normalized": "Bool-\u003eERProcessName-\u003eChannelType-\u003ea-\u003eEffortIndex-\u003e[(b,c)]-\u003eERProcess d e",
          "package": "AERN-Net",
          "partial": "Process",
          "signature": "Bool-\u003eERProcessName-\u003eChannelType-\u003efa-\u003eEffortIndex-\u003e[(domra,ranra)]-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:boundingProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process passing on information about the values of a real function \n    at its domain endpoints.  \n\u003c/p\u003e\u003cp\u003eProtocols are wrapped in \u003ccode\u003eChannelComm.ChTChanges\u003c/code\u003e \n    in order to be able to communicate failure.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "getEndpointValsProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process passing on information about the values of real function at its domain endpoints Protocols are wrapped in ChannelComm.ChTChanges in order to be able to communicate failure",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "getEndpointValsProcess",
          "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Endpoint Vals Process",
          "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:getEndpointValsProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple integrator process for first-order linear domain functions \n    with effort index using the default integration \n    of the \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "integrateFAProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e ChannelType-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "simple integrator process for first-order linear domain functions with effort index using the default integration of the ERFnDomApprox instance",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "integrateFAProcess",
          "normalized": "ERProcessName-\u003eChannelType-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "FAProcess",
          "signature": "ERProcessName-\u003eChannelType-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:integrateFAProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn intersecting and improvement measuring stateful integrator process using \n    default intersecting & measuring integration of the \n    \u003ccode\u003e\u003ca\u003eERFnDomApprox\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "integrateIsectMeasureFAProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "An intersecting and improvement measuring stateful integrator process using default intersecting measuring integration of the ERFnDomApprox instance",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "integrateIsectMeasureFAProcess",
          "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Isect Measure FAProcess",
          "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:integrateIsectMeasureFAProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process joining two functions for adjacent domains \n    to one function on the joint domain.\n\u003c/p\u003e\u003cp\u003eEach query is split accordingly to two queries on the\n    two halves of the bisected domain, respectively.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "joinFADomProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process joining two functions for adjacent domains to one function on the joint domain Each query is split accordingly to two queries on the two halves of the bisected domain respectively",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "joinFADomProcess",
          "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "FADom Process",
          "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:joinFADomProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process passing on information about the values of a real function \n    over a fixed domain.\n\u003c/p\u003e\u003cp\u003eProtocols are wrapped in \u003ccode\u003eChannelComm.ChTChanges\u003c/code\u003e \n    in order to be able to communicate failure.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "maxOverDomProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e box-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process passing on information about the values of real function over fixed domain Protocols are wrapped in ChannelComm.ChTChanges in order to be able to communicate failure",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "maxOverDomProcess",
          "normalized": "ERProcessName-\u003ea-\u003eb-\u003eERProcess c d",
          "package": "AERN-Net",
          "partial": "Over Dom Process",
          "signature": "ERProcessName-\u003ebox-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:maxOverDomProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process passing on information about a real function, trying to improve the\n    convergence rate in successive queries.\n\u003c/p\u003e\u003cp\u003eEach query may refer to a previous query.  When it does,\n    the query will not be answered until either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the information about the function has improved by the desired amount since last time \n\u003c/li\u003e\u003cli\u003e the number of queries made in response to this query has reached the given limit\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "rateFnProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e Rational-\u003e Int-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process passing on information about real function trying to improve the convergence rate in successive queries Each query may refer to previous query When it does the query will not be answered until either the information about the function has improved by the desired amount since last time the number of queries made in response to this query has reached the given limit",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "rateFnProcess",
          "normalized": "ERProcessName-\u003eRational-\u003eInt-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "Fn Process",
          "signature": "ERProcessName-\u003eRational-\u003eInt-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:rateFnProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process splitting a function into two based on a bisection of the domain.\n\u003c/p\u003e\u003cp\u003eA query for either half of the function results in a query for the whole.\n    The whole function is then cached to answer an analogous query for the second half.\n    Only one such result is cached (always the last one).  \n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "splitFADomProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e fa-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "description": "process splitting function into two based on bisection of the domain query for either half of the function results in query for the whole The whole function is then cached to answer an analogous query for the second half Only one such result is cached always the last one",
          "hierarchy": "Control ERNet Blocks RnToRm Basic",
          "module": "Control.ERNet.Blocks.RnToRm.Basic",
          "name": "splitFADomProcess",
          "normalized": "ERProcessName-\u003ea-\u003eERProcess b c",
          "package": "AERN-Net",
          "partial": "FADom Process",
          "signature": "ERProcessName-\u003efa-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Basic.html#v:splitFADomProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic protocols for transferring approximations of real functions. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "Protocols",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html",
          "type": "module"
        },
        "index": {
          "description": "Basic protocols for transferring approximations of real functions",
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "Protocols",
          "package": "AERN-Net",
          "partial": "Protocols",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1A",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1A",
          "package": "AERN-Net",
          "partial": "QAFn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn1A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1Q",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1Q",
          "package": "AERN-Net",
          "partial": "QAFn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn1Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2A",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2A",
          "package": "AERN-Net",
          "partial": "QAFn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn2A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2Q",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2Q",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2Q",
          "package": "AERN-Net",
          "partial": "QAFn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#t:QAFn2Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1A",
          "package": "AERN-Net",
          "signature": "QAFn1A fa",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1A",
          "package": "AERN-Net",
          "partial": "QAFn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1APt",
          "package": "AERN-Net",
          "signature": "QAFn1APt [ranra]",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1APt",
          "normalized": "QAFn APt[a]",
          "package": "AERN-Net",
          "partial": "QAFn APt",
          "signature": "QAFn APt[ranra]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1APt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1QAll",
          "package": "AERN-Net",
          "signature": "QAFn1QAll",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1QAll",
          "package": "AERN-Net",
          "partial": "QAFn QAll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1QAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1QDom",
          "package": "AERN-Net",
          "signature": "QAFn1QDom box",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1QDom",
          "package": "AERN-Net",
          "partial": "QAFn QDom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1QDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1QPt",
          "package": "AERN-Net",
          "signature": "QAFn1QPt box",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn1Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn1QPt",
          "package": "AERN-Net",
          "partial": "QAFn QPt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn1QPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2APt",
          "package": "AERN-Net",
          "signature": "QAFn2APt fa",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2APt",
          "package": "AERN-Net",
          "partial": "QAFn APt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn2APt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2QPt",
          "package": "AERN-Net",
          "signature": "QAFn2QPt fa",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#QAFn2Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "QAFn2QPt",
          "package": "AERN-Net",
          "partial": "QAFn QPt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:QAFn2QPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "chTFn1",
          "package": "AERN-Net",
          "signature": "fa -\u003e ChannelType",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#chTFn1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "chTFn1",
          "normalized": "a-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TFn",
          "signature": "fa-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:chTFn1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "chTFn2",
          "package": "AERN-Net",
          "signature": "fa -\u003e ChannelType",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#chTFn2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "chTFn2",
          "normalized": "a-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TFn",
          "signature": "fa-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:chTFn2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an answer about a function, given\n    as a Haskell real -\u003e real function.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "makeAnswerFn1ByBoxesNoIx",
          "package": "AERN-Net",
          "signature": "(box -\u003e [ranra]) -\u003e QAFn1Q box -\u003e QAFn1A ranra fa",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#makeAnswerFn1ByBoxesNoIx",
          "type": "function"
        },
        "index": {
          "description": "Construct an answer about function given as Haskell real real function",
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "makeAnswerFn1ByBoxesNoIx",
          "normalized": "(a-\u003e[b])-\u003eQAFn Q a-\u003eQAFn A b c",
          "package": "AERN-Net",
          "partial": "Answer Fn By Boxes No Ix",
          "signature": "(box-\u003e[ranra])-\u003eQAFn Q box-\u003eQAFn A ranra fa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:makeAnswerFn1ByBoxesNoIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an answer about a function, assuming\n    they will not ask about a subdomain.\n\u003c/p\u003e",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "makeAnswerFn1NoIx",
          "package": "AERN-Net",
          "signature": "fa -\u003e QAFn1Q box -\u003e QAFn1A ranra fa",
          "source": "src/Control-ERNet-Blocks-RnToRm-Protocols.html#makeAnswerFn1NoIx",
          "type": "function"
        },
        "index": {
          "description": "Construct an answer about function assuming they will not ask about subdomain",
          "hierarchy": "Control ERNet Blocks RnToRm Protocols",
          "module": "Control.ERNet.Blocks.RnToRm.Protocols",
          "name": "makeAnswerFn1NoIx",
          "normalized": "a-\u003eQAFn Q b-\u003eQAFn A c a",
          "package": "AERN-Net",
          "partial": "Answer Fn No Ix",
          "signature": "fa-\u003eQAFn Q box-\u003eQAFn A ranra fa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Blocks-RnToRm-Protocols.html#v:makeAnswerFn1NoIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple channel implementation using STM protected variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Deployment.Local.Channel",
          "name": "Channel",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Channel.html",
          "type": "module"
        },
        "index": {
          "description": "simple channel implementation using STM protected variables",
          "hierarchy": "Control ERNet Deployment Local Channel",
          "module": "Control.ERNet.Deployment.Local.Channel",
          "name": "Channel",
          "package": "AERN-Net",
          "partial": "Channel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Channel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Deployment.Local.Channel",
          "name": "ChannelLocal",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Channel.html#ChannelLocal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Deployment Local Channel",
          "module": "Control.ERNet.Deployment.Local.Channel",
          "name": "ChannelLocal",
          "package": "AERN-Net",
          "partial": "Channel Local",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Channel.html#t:ChannelLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of channel types over instances of the \u003ccode\u003eChannelComm.QERrotocol\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003e(existential type) \n\u003c/p\u003e",
          "module": "Control.ERNet.Deployment.Local.Channel",
          "name": "ChannelLocalAnyProt",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Channel.html#ChannelLocalAnyProt",
          "type": "data"
        },
        "index": {
          "description": "Union of channel types over instances of the ChannelComm.QERrotocol class existential type",
          "hierarchy": "Control ERNet Deployment Local Channel",
          "module": "Control.ERNet.Deployment.Local.Channel",
          "name": "ChannelLocalAnyProt",
          "package": "AERN-Net",
          "partial": "Channel Local Any Prot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Channel.html#t:ChannelLocalAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple logger implementation using an STM channel.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Deployment.Local.Logger",
          "name": "Logger",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Logger.html",
          "type": "module"
        },
        "index": {
          "description": "simple logger implementation using an STM channel",
          "hierarchy": "Control ERNet Deployment Local Logger",
          "module": "Control.ERNet.Deployment.Local.Logger",
          "name": "Logger",
          "package": "AERN-Net",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Deployment.Local.Logger",
          "name": "LoggerLocal",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Logger.html#LoggerLocal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Deployment Local Logger",
          "module": "Control.ERNet.Deployment.Local.Logger",
          "name": "LoggerLocal",
          "package": "AERN-Net",
          "partial": "Logger Local",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Logger.html#t:LoggerLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of \n    \u003ca\u003eControl.ERNet.Foundations.Manager.Manager\u003c/a\u003e,\n    deploying all processes locally.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Deployment.Local.Manager",
          "name": "Manager",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Manager.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of Control.ERNet.Foundations.Manager.Manager deploying all processes locally",
          "hierarchy": "Control ERNet Deployment Local Manager",
          "module": "Control.ERNet.Deployment.Local.Manager",
          "name": "Manager",
          "package": "AERN-Net",
          "partial": "Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Manager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Deployment.Local.Manager",
          "name": "ManagerLocal",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Deployment-Local-Manager.html#ManagerLocal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Deployment Local Manager",
          "module": "Control.ERNet.Deployment.Local.Manager",
          "name": "ManagerLocal",
          "package": "AERN-Net",
          "partial": "Manager Local",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Deployment-Local-Manager.html#t:ManagerLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of data flow channels and its sockets with associated\n    query-answer protocol for gradual data communication.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the prefix CH.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "Channel",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Channel.html",
          "type": "module"
        },
        "index": {
          "description": "Abstraction of data flow channels and its sockets with associated query-answer protocol for gradual data communication To be imported qualified usually with the prefix CH",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "Channel",
          "package": "AERN-Net",
          "partial": "Channel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA channel type, as it is presented to the processes, \n    consists of an input socket and an output socket types.\n\u003c/p\u003e\u003cp\u003eEach socket type has a unique protocol associated with\n    it.  Whenever the protocol can be determined at\n    compile time, we use the sIn and sOut types, otherwise\n    we use the sInAnyProt and sOutAnyProt types.\n    Elements of sInAnyProt and sOutAnyProt can be dynamically\n    cast to elements of sIn and sOut once the protocol\n    can be deduced by the Haskell type checker. \n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "Channel",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Channel.html#Channel",
          "type": "class"
        },
        "index": {
          "description": "channel type as it is presented to the processes consists of an input socket and an output socket types Each socket type has unique protocol associated with it Whenever the protocol can be determined at compile time we use the sIn and sOut types otherwise we use the sInAnyProt and sOutAnyProt types Elements of sInAnyProt and sOutAnyProt can be dynamically cast to elements of sIn and sOut once the protocol can be deduced by the Haskell type checker",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "Channel",
          "package": "AERN-Net",
          "partial": "Channel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Channel",
          "name": "ChannelForScheduler",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Channel.html#ChannelForScheduler",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "ChannelForScheduler",
          "package": "AERN-Net",
          "partial": "Channel For Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#t:ChannelForScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the provided answer to the given socket as an answer to\n        the query with the given query ID.\n\u003c/p\u003e\u003cp\u003eThis is a version using a statically typed protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "answerQuery",
          "package": "AERN-Net",
          "signature": "answerQuery",
          "source": "src/Control-ERNet-Foundations-Channel.html#answerQuery",
          "type": "method"
        },
        "index": {
          "description": "Send the provided answer to the given socket as an answer to the query with the given query ID This is version using statically typed protocol",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "answerQuery",
          "package": "AERN-Net",
          "partial": "Query",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:answerQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the provided answer to the given socket as an answer to\n        the query with the given query ID.\n\u003c/p\u003e\u003cp\u003eThis is a version using a dynamically typed protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "answerQueryAnyProt",
          "package": "AERN-Net",
          "signature": "answerQueryAnyProt",
          "source": "src/Control-ERNet-Foundations-Channel.html#answerQueryAnyProt",
          "type": "method"
        },
        "index": {
          "description": "Send the provided answer to the given socket as an answer to the query with the given query ID This is version using dynamically typed protocol",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "answerQueryAnyProt",
          "package": "AERN-Net",
          "partial": "Query Any Prot",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:answerQueryAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castIn",
          "package": "AERN-Net",
          "signature": "castIn",
          "source": "src/Control-ERNet-Foundations-Channel.html#castIn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castIn",
          "package": "AERN-Net",
          "partial": "In",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castInIO",
          "package": "AERN-Net",
          "signature": "castInIO",
          "source": "src/Control-ERNet-Foundations-Channel.html#castInIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castInIO",
          "package": "AERN-Net",
          "partial": "In IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castInIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castOut",
          "package": "AERN-Net",
          "signature": "castOut",
          "source": "src/Control-ERNet-Foundations-Channel.html#castOut",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castOut",
          "package": "AERN-Net",
          "partial": "Out",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castOutIO",
          "package": "AERN-Net",
          "signature": "castOutIO",
          "source": "src/Control-ERNet-Foundations-Channel.html#castOutIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "castOutIO",
          "package": "AERN-Net",
          "partial": "Out IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:castOutIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a new query on the given socket.  \n        Return the new query's id.\n\u003c/p\u003e\u003cp\u003eThis is a version using a statically typed protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "makeQuery",
          "package": "AERN-Net",
          "signature": "makeQuery",
          "source": "src/Control-ERNet-Foundations-Channel.html#makeQuery",
          "type": "method"
        },
        "index": {
          "description": "Register new query on the given socket Return the new query id This is version using statically typed protocol",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "makeQuery",
          "package": "AERN-Net",
          "partial": "Query",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:makeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a new query on the given socket.  \n        Return the new query's id.\n\u003c/p\u003e\u003cp\u003eThis is a version using a dynamically typed protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "makeQueryAnyProt",
          "package": "AERN-Net",
          "signature": "makeQueryAnyProt",
          "source": "src/Control-ERNet-Foundations-Channel.html#makeQueryAnyProt",
          "type": "method"
        },
        "index": {
          "description": "Register new query on the given socket Return the new query id This is version using dynamically typed protocol",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "makeQueryAnyProt",
          "package": "AERN-Net",
          "partial": "Query Any Prot",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:makeQueryAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new channel that is then given to processes \n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "new",
          "package": "AERN-Net",
          "signature": "new",
          "source": "src/Control-ERNet-Foundations-Channel.html#new",
          "type": "method"
        },
        "index": {
          "description": "create new channel that is then given to processes",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "new",
          "package": "AERN-Net",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for an answer to a query with the given query ID.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForAnswer",
          "package": "AERN-Net",
          "signature": "waitForAnswer",
          "source": "src/Control-ERNet-Foundations-Channel.html#waitForAnswer",
          "type": "method"
        },
        "index": {
          "description": "Wait for an answer to query with the given query ID",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForAnswer",
          "package": "AERN-Net",
          "partial": "For Answer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for an answer to one of several queries with the given query IDs.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForAnswerMulti",
          "package": "AERN-Net",
          "signature": "waitForAnswerMulti",
          "source": "src/Control-ERNet-Foundations-Channel.html#waitForAnswerMulti",
          "type": "method"
        },
        "index": {
          "description": "Wait for an answer to one of several queries with the given query IDs",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForAnswerMulti",
          "package": "AERN-Net",
          "partial": "For Answer Multi",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForAnswerMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until the given socket has at least one new query.\n        When there is at least one, return the earliest one and set its status to pending.\n\u003c/p\u003e\u003cp\u003eThis function uses a statically typed protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForQuery",
          "package": "AERN-Net",
          "signature": "waitForQuery",
          "source": "src/Control-ERNet-Foundations-Channel.html#waitForQuery",
          "type": "method"
        },
        "index": {
          "description": "Wait until the given socket has at least one new query When there is at least one return the earliest one and set its status to pending This function uses statically typed protocol",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForQuery",
          "package": "AERN-Net",
          "partial": "For Query",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until one of the given sockets has at least one new query.\n        When there is at least one, return the earliest one \n        and set its status to pending.\n\u003c/p\u003e\u003cp\u003eThis is function uses a dynamically typed protocol.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForQueryMulti",
          "package": "AERN-Net",
          "signature": "waitForQueryMulti",
          "source": "src/Control-ERNet-Foundations-Channel.html#waitForQueryMulti",
          "type": "method"
        },
        "index": {
          "description": "Wait until one of the given sockets has at least one new query When there is at least one return the earliest one and set its status to pending This is function uses dynamically typed protocol",
          "hierarchy": "Control ERNet Foundations Channel",
          "module": "Control.ERNet.Foundations.Channel",
          "name": "waitForQueryMulti",
          "package": "AERN-Net",
          "partial": "For Query Multi",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Channel.html#v:waitForQueryMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions that produce a javascipt representation of the\n    message dependence graph contained in a set of network events.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Event.JavaScript",
          "name": "JavaScript",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Event-JavaScript.html",
          "type": "module"
        },
        "index": {
          "description": "Functions that produce javascipt representation of the message dependence graph contained in set of network events",
          "hierarchy": "Control ERNet Foundations Event JavaScript",
          "module": "Control.ERNet.Foundations.Event.JavaScript",
          "name": "JavaScript",
          "package": "AERN-Net",
          "partial": "Java Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-JavaScript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event.JavaScript",
          "name": "constructJS",
          "package": "AERN-Net",
          "signature": "[ERNetEvent] -\u003e String",
          "source": "src/Control-ERNet-Foundations-Event-JavaScript.html#constructJS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event JavaScript",
          "module": "Control.ERNet.Foundations.Event.JavaScript",
          "name": "constructJS",
          "normalized": "[ERNetEvent]-\u003eString",
          "package": "AERN-Net",
          "partial": "JS",
          "signature": "[ERNetEvent]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-JavaScript.html#v:constructJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of an event logger in the IO monad.\n\u003c/p\u003e\u003cp\u003eTo be imported qualified, usually with the prefix LG.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "Logger",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Event-Logger.html",
          "type": "module"
        },
        "index": {
          "description": "Abstraction of an event logger in the IO monad To be imported qualified usually with the prefix LG",
          "hierarchy": "Control ERNet Foundations Event Logger",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "Logger",
          "package": "AERN-Net",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "Logger",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Event-Logger.html#Logger",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event Logger",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "Logger",
          "package": "AERN-Net",
          "partial": "Logger",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#t:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "addEvent",
          "package": "AERN-Net",
          "signature": "lg -\u003e ERNetEvent -\u003e IO ()",
          "source": "src/Control-ERNet-Foundations-Event-Logger.html#addEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event Logger",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "addEvent",
          "normalized": "a-\u003eERNetEvent-\u003eIO()",
          "package": "AERN-Net",
          "partial": "Event",
          "signature": "lg-\u003eERNetEvent-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:addEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "emptyAndDo",
          "package": "AERN-Net",
          "signature": "lg -\u003e (ERNetEvent -\u003e IO a) -\u003e IO ()",
          "source": "src/Control-ERNet-Foundations-Event-Logger.html#emptyAndDo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event Logger",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "emptyAndDo",
          "normalized": "a-\u003e(ERNetEvent-\u003eIO b)-\u003eIO()",
          "package": "AERN-Net",
          "partial": "And Do",
          "signature": "lg-\u003e(ERNetEvent-\u003eIO a)-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:emptyAndDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "emptyAndGetEvents",
          "package": "AERN-Net",
          "signature": "lg -\u003e IO [ERNetEvent]",
          "source": "src/Control-ERNet-Foundations-Event-Logger.html#emptyAndGetEvents",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event Logger",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "emptyAndGetEvents",
          "normalized": "a-\u003eIO[ERNetEvent]",
          "package": "AERN-Net",
          "partial": "And Get Events",
          "signature": "lg-\u003eIO[ERNetEvent]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:emptyAndGetEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "new",
          "package": "AERN-Net",
          "signature": "IO lg",
          "source": "src/Control-ERNet-Foundations-Event-Logger.html#new",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event Logger",
          "module": "Control.ERNet.Foundations.Event.Logger",
          "name": "new",
          "package": "AERN-Net",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event-Logger.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommunication events with various data useful for logging\n    and debugging.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Event",
          "name": "Event",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Event.html",
          "type": "module"
        },
        "index": {
          "description": "Communication events with various data useful for logging and debugging",
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "Event",
          "package": "AERN-Net",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData to be logged with every query and answer event.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvent",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "data"
        },
        "index": {
          "description": "Data to be logged with every query and answer event",
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvent",
          "package": "AERN-Net",
          "partial": "ERNet Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#t:ERNetEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvAnsMade",
          "package": "AERN-Net",
          "signature": "ERNetEvAnsMade",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvAnsMade",
          "package": "AERN-Net",
          "partial": "ERNet Ev Ans Made",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvAnsMade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvAnsReceived",
          "package": "AERN-Net",
          "signature": "ERNetEvAnsReceived",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvAnsReceived",
          "package": "AERN-Net",
          "partial": "ERNet Ev Ans Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvAnsReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvQryMade",
          "package": "AERN-Net",
          "signature": "ERNetEvQryMade",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvQryMade",
          "package": "AERN-Net",
          "partial": "ERNet Ev Qry Made",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvQryMade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvQryReceived",
          "package": "AERN-Net",
          "signature": "ERNetEvQryReceived",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ERNetEvQryReceived",
          "package": "AERN-Net",
          "partial": "ERNet Ev Qry Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ERNetEvQryReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevAns",
          "package": "AERN-Net",
          "signature": "a",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevAns",
          "package": "AERN-Net",
          "partial": "Ans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevAns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevFromId",
          "package": "AERN-Net",
          "signature": "String",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevFromId",
          "package": "AERN-Net",
          "partial": "From Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevFromId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevFromQryId",
          "package": "AERN-Net",
          "signature": "QueryId",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevFromQryId",
          "package": "AERN-Net",
          "partial": "From Qry Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevFromQryId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevQry",
          "package": "AERN-Net",
          "signature": "q",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevQry",
          "package": "AERN-Net",
          "partial": "Qry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevQry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevQryId",
          "package": "AERN-Net",
          "signature": "QueryId",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevQryId",
          "package": "AERN-Net",
          "partial": "Qry Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevQryId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevTime",
          "package": "AERN-Net",
          "signature": "UTCTime",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevTime",
          "package": "AERN-Net",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevToId",
          "package": "AERN-Net",
          "signature": "String",
          "source": "src/Control-ERNet-Foundations-Event.html#ERNetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Event",
          "module": "Control.ERNet.Foundations.Event",
          "name": "ernetevToId",
          "package": "AERN-Net",
          "partial": "To Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Event.html#v:ernetevToId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction of a distributed manager for networked ER processes. \n    Its functions comprise:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e initial process deployment\n\u003c/li\u003e\u003cli\u003e expansion of a process into a sub-network\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo be imported qualified, usually with the prefix MAN.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "Manager",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Manager.html",
          "type": "module"
        },
        "index": {
          "description": "Abstraction of distributed manager for networked ER processes Its functions comprise initial process deployment expansion of process into sub-network To be imported qualified usually with the prefix MAN",
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "Manager",
          "package": "AERN-Net",
          "partial": "Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Manager",
          "name": "Manager",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Manager.html#Manager",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "Manager",
          "package": "AERN-Net",
          "partial": "Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#t:Manager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA globally unique name as a URL. \n\u003c/p\u003e\u003cp\u003eeg ernet:\u003cem/\u003elocalhost:4176/miks-ivp-solver-master\n       ernet-local:/ivp-solver-master\n       ernet-mpi:/ivp-solver-master\n\u003c/p\u003e\u003cp\u003eThe port 4176 was unassigned when checked on\n    http:\u003cem/\u003ewww.iana.org\u003cem\u003eassignments\u003c/em\u003eport-numbers\n    on 2nd November 2008.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "ManagerID",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Manager.html#ManagerID",
          "type": "type"
        },
        "index": {
          "description": "globally unique name as URL eg ernet localhost miks-ivp-solver-master ernet-local ivp-solver-master ernet-mpi ivp-solver-master The port was unassigned when checked on http www.iana.org assignments port-numbers on nd November",
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "ManagerID",
          "package": "AERN-Net",
          "partial": "Manager ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#t:ManagerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name given to a ditributed node by a programmer. \n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "ManagerName",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Manager.html#ManagerName",
          "type": "type"
        },
        "index": {
          "description": "name given to ditributed node by programmer",
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "ManagerName",
          "package": "AERN-Net",
          "partial": "Manager Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#t:ManagerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Manager",
          "name": "connectNeighbour",
          "package": "AERN-Net",
          "signature": "man -\u003e ManagerID -\u003e IO Bool",
          "source": "src/Control-ERNet-Foundations-Manager.html#connectNeighbour",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "connectNeighbour",
          "normalized": "a-\u003eManagerID-\u003eIO Bool",
          "package": "AERN-Net",
          "partial": "Neighbour",
          "signature": "man-\u003eManagerID-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:connectNeighbour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Manager",
          "name": "new",
          "package": "AERN-Net",
          "signature": "ManagerName -\u003e IO (man, ManagerID)",
          "source": "src/Control-ERNet-Foundations-Manager.html#new",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "new",
          "normalized": "ManagerName-\u003eIO(a,ManagerID)",
          "package": "AERN-Net",
          "signature": "ManagerName-\u003eIO(man,ManagerID)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a process together with some queries on one of its output sockets.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "runDialogue",
          "package": "AERN-Net",
          "signature": "man-\u003e ERProcess sInAnyProt sOutAnyProt-\u003e Int-\u003e ChannelType-\u003e ((q -\u003e IO a) -\u003e IO ())-\u003e Bool-\u003e IO lg",
          "type": "function"
        },
        "index": {
          "description": "Run process together with some queries on one of its output sockets",
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "runDialogue",
          "normalized": "a-\u003eERProcess b c-\u003eInt-\u003eChannelType-\u003e((d-\u003eIO e)-\u003eIO())-\u003eBool-\u003eIO f",
          "package": "AERN-Net",
          "partial": "Dialogue",
          "signature": "man-\u003eERProcess sInAnyProt sOutAnyProt-\u003eInt-\u003eChannelType-\u003e((q-\u003eIO a)-\u003eIO())-\u003eBool-\u003eIO lg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:runDialogue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Manager",
          "name": "runProcess",
          "package": "AERN-Net",
          "signature": "runProcess",
          "source": "src/Control-ERNet-Foundations-Manager.html#runProcess",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Manager",
          "module": "Control.ERNet.Foundations.Manager",
          "name": "runProcess",
          "package": "AERN-Net",
          "partial": "Process",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Manager.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eKahn process networks with channels \n    adapted for arbitrary precision real higher-order data communication.\n    Executed using a number of parallel threads.  \n    Each process started in a dedicated thread \n    and each process typically starts further internal threads.\n    Each channel is a transactional variable (TVar) \n    known to both end processes and allows them to communicate\n    according to its instance of the \u003ccode\u003e\u003ca\u003eQAProtocol\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Process",
          "name": "Process",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Kahn process networks with channels adapted for arbitrary precision real higher-order data communication Executed using number of parallel threads Each process started in dedicated thread and each process typically starts further internal threads Each channel is transactional variable TVar known to both end processes and allows them to communicate according to its instance of the QAProtocol class",
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "Process",
          "package": "AERN-Net",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll data that define a process, including its behaviour.\n    Each executing process is instantiated from one of these descriptions.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcess",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
          "type": "data"
        },
        "index": {
          "description": "All data that define process including its behaviour Each executing process is instantiated from one of these descriptions",
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcess",
          "package": "AERN-Net",
          "partial": "ERProcess",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicit representation of a process' action, able to distinguish\n    between answering and making a query or pausing one internal thread\n    until the internal state (TV) has met some condition.\n\u003c/p\u003e\u003cp\u003eThis is useful for producing highly customisable \u003ccode\u003etemplates\u003c/code\u003e for processes\n    as Haskell functions whose parameters are functions that determine\n    what the process should do as a response to some external or internal events.\n    See for example \u003ccode\u003eControl.ERNet.Blocks.Basic.passThroughStatefulProcess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessAction",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
          "type": "data"
        },
        "index": {
          "description": "Explicit representation of process action able to distinguish between answering and making query or pausing one internal thread until the internal state TV has met some condition This is useful for producing highly customisable templates for processes as Haskell functions whose parameters are functions that determine what the process should do as response to some external or internal events See for example Control.ERNet.Blocks.Basic.passThroughStatefulProcess",
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessAction",
          "package": "AERN-Net",
          "partial": "ERProcess Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessDeploy",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessDeploy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessDeploy",
          "package": "AERN-Net",
          "partial": "ERProcess Deploy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessDeploy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessExpandCallback",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessExpandCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessExpandCallback",
          "package": "AERN-Net",
          "partial": "ERProcess Expand Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessExpandCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessName",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessName",
          "package": "AERN-Net",
          "partial": "ERProcess Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#t:ERProcessName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcess",
          "package": "AERN-Net",
          "signature": "ERProcess",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcess",
          "package": "AERN-Net",
          "partial": "ERProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessActionAnswer",
          "package": "AERN-Net",
          "signature": "ERProcessActionAnswer Bool a",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessActionAnswer",
          "package": "AERN-Net",
          "partial": "ERProcess Action Answer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcessActionAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessActionQuery",
          "package": "AERN-Net",
          "signature": "ERProcessActionQuery q",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessActionQuery",
          "package": "AERN-Net",
          "partial": "ERProcess Action Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcessActionQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessActionRetryWhen",
          "package": "AERN-Net",
          "signature": "ERProcessActionRetryWhen (s -\u003e Bool)",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcessAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "ERProcessActionRetryWhen",
          "normalized": "ERProcessActionRetryWhen(a-\u003eBool)",
          "package": "AERN-Net",
          "partial": "ERProcess Action Retry When",
          "signature": "ERProcessActionRetryWhen(s-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:ERProcessActionRetryWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn deployment, a process either expands itself using\n                the provided callback function and does not use the\n                sockets at all\n\u003c/p\u003e\u003cp\u003eOR it uses the sockets and never calls the expansion\n                callback.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocDeploy",
          "package": "AERN-Net",
          "signature": "ERProcessDeploy sInAnyProt sOutAnyProt",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
          "type": "function"
        },
        "index": {
          "description": "On deployment process either expands itself using the provided callback function and does not use the sockets at all OR it uses the sockets and never calls the expansion callback",
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocDeploy",
          "package": "AERN-Net",
          "partial": "Deploy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocDeploy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocInputTypes",
          "package": "AERN-Net",
          "signature": "[ChannelType]",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocInputTypes",
          "normalized": "[ChannelType]",
          "package": "AERN-Net",
          "partial": "Input Types",
          "signature": "[ChannelType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocInputTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eundeployed process name\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocName",
          "package": "AERN-Net",
          "signature": "ERProcessName",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
          "type": "function"
        },
        "index": {
          "description": "undeployed process name",
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocName",
          "package": "AERN-Net",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocOutputTypes",
          "package": "AERN-Net",
          "signature": "[ChannelType]",
          "source": "src/Control-ERNet-Foundations-Process.html#ERProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "erprocOutputTypes",
          "normalized": "[ChannelType]",
          "package": "AERN-Net",
          "partial": "Output Types",
          "signature": "[ChannelType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:erprocOutputTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Process",
          "name": "subnetProcess",
          "package": "AERN-Net",
          "signature": "ERProcessName-\u003e [(ChannelType, Int)]-\u003e [(ChannelType, Int)]-\u003e [(ERProcess sInAnyProt sOutAnyProt, ([Int], [Int]))]-\u003e ERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Process",
          "module": "Control.ERNet.Foundations.Process",
          "name": "subnetProcess",
          "normalized": "ERProcessName-\u003e[(ChannelType,Int)]-\u003e[(ChannelType,Int)]-\u003e[(ERProcess a b,([Int],[Int]))]-\u003eERProcess a b",
          "package": "AERN-Net",
          "partial": "Process",
          "signature": "ERProcessName-\u003e[(ChannelType,Int)]-\u003e[(ChannelType,Int)]-\u003e[(ERProcess sInAnyProt sOutAnyProt,([Int],[Int]))]-\u003eERProcess sInAnyProt sOutAnyProt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Process.html#v:subnetProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some basic concrete protocols,\n    namely protocols for transferring a unit and a boolean.\n\u003c/p\u003e\u003cp\u003eSome protocol combinators are provided to form new protocols\n    from old protocols.  Eg one can form a product of\n    two protocols to get a protocol for query-answer dialogues \n    about a pair of values.  Similarly, one can construct \n    protocols for a sum of two types, a maybe type and a list type.  \n\u003c/p\u003e\u003cp\u003eAny protocol can be also extended to include effort indices\n    in queries or to allow incremental computation with non-blocking\n    queries on progress, multiple dialogue thread tracking and the communication\n    of a failure.\n\u003c/p\u003e\u003cp\u003eTODO: add protocols for\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e game-theoretic HO functions\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "StandardCombinators",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines some basic concrete protocols namely protocols for transferring unit and boolean Some protocol combinators are provided to form new protocols from old protocols Eg one can form product of two protocols to get protocol for query-answer dialogues about pair of values Similarly one can construct protocols for sum of two types maybe type and list type Any protocol can be also extended to include effort indices in queries or to allow incremental computation with non-blocking queries on progress multiple dialogue thread tracking and the communication of failure TODO add protocols for game-theoretic HO functions",
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "StandardCombinators",
          "package": "AERN-Net",
          "partial": "Standard Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesA",
          "package": "AERN-Net",
          "partial": "QAChanges",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAChangesA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQ",
          "package": "AERN-Net",
          "partial": "QAChanges",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAChangesQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxA",
          "package": "AERN-Net",
          "partial": "QAIx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAIxA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxQ",
          "package": "AERN-Net",
          "partial": "QAIx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAIxQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListA",
          "package": "AERN-Net",
          "partial": "QAList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQ",
          "package": "AERN-Net",
          "partial": "QAList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAListQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeA",
          "package": "AERN-Net",
          "partial": "QAMaybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAMaybeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeQ",
          "package": "AERN-Net",
          "partial": "QAMaybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAMaybeQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdA",
          "package": "AERN-Net",
          "partial": "QAProd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAProdA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQ",
          "package": "AERN-Net",
          "partial": "QAProd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#t:QAProdQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesAGivenUp",
          "package": "AERN-Net",
          "signature": "QAChangesAGivenUp",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesAGivenUp",
          "package": "AERN-Net",
          "partial": "QAChanges AGiven Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesAGivenUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesANew",
          "package": "AERN-Net",
          "signature": "QAChangesANew a",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesANew",
          "package": "AERN-Net",
          "partial": "QAChanges ANew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesANew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesASame",
          "package": "AERN-Net",
          "signature": "QAChangesASame",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesASame",
          "package": "AERN-Net",
          "partial": "QAChanges ASame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesASame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQ",
          "package": "AERN-Net",
          "signature": "QAChangesQ q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQ",
          "package": "AERN-Net",
          "partial": "QAChanges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQIfNew",
          "package": "AERN-Net",
          "signature": "QAChangesQIfNew QueryId q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQIfNew",
          "package": "AERN-Net",
          "partial": "QAChanges QIf New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesQIfNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQWhenNew",
          "package": "AERN-Net",
          "signature": "QAChangesQWhenNew QueryId q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAChangesQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAChangesQWhenNew",
          "package": "AERN-Net",
          "partial": "QAChanges QWhen New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAChangesQWhenNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxA",
          "package": "AERN-Net",
          "signature": "QAIxA a",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxA",
          "package": "AERN-Net",
          "partial": "QAIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAIxA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxQ",
          "package": "AERN-Net",
          "signature": "QAIxQ EffortIndex q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAIxQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAIxQ",
          "package": "AERN-Net",
          "partial": "QAIx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAIxQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListA",
          "package": "AERN-Net",
          "signature": "QAListA [a]",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListA",
          "normalized": "QAListA[a]",
          "package": "AERN-Net",
          "partial": "QAList",
          "signature": "QAListA[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListALength",
          "package": "AERN-Net",
          "signature": "QAListALength Int",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListALength",
          "package": "AERN-Net",
          "partial": "QAList ALength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListALength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListASingle",
          "package": "AERN-Net",
          "signature": "QAListASingle a",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListASingle",
          "package": "AERN-Net",
          "partial": "QAList ASingle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListASingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQAllHomog",
          "package": "AERN-Net",
          "signature": "QAListQAllHomog q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQAllHomog",
          "package": "AERN-Net",
          "partial": "QAList QAll Homog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQAllHomog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQLength",
          "package": "AERN-Net",
          "signature": "QAListQLength",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQLength",
          "package": "AERN-Net",
          "partial": "QAList QLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQPrefix",
          "package": "AERN-Net",
          "signature": "QAListQPrefix [q]",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQPrefix",
          "normalized": "QAListQPrefix[a]",
          "package": "AERN-Net",
          "partial": "QAList QPrefix",
          "signature": "QAListQPrefix[q]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQSingle",
          "package": "AERN-Net",
          "signature": "QAListQSingle Int q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAListQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAListQSingle",
          "package": "AERN-Net",
          "partial": "QAList QSingle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAListQSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeA",
          "package": "AERN-Net",
          "signature": "QAMaybeA (Maybe a)",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeA",
          "package": "AERN-Net",
          "partial": "QAMaybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeAIsNothing",
          "package": "AERN-Net",
          "signature": "QAMaybeAIsNothing Bool",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeAIsNothing",
          "package": "AERN-Net",
          "partial": "QAMaybe AIs Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeAIsNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeQ",
          "package": "AERN-Net",
          "signature": "QAMaybeQ q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeQ",
          "package": "AERN-Net",
          "partial": "QAMaybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeQIsNothing",
          "package": "AERN-Net",
          "signature": "QAMaybeQIsNothing q",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAMaybeQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAMaybeQIsNothing",
          "package": "AERN-Net",
          "partial": "QAMaybe QIs Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAMaybeQIsNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdABoth",
          "package": "AERN-Net",
          "signature": "QAProdABoth a1 a2",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdABoth",
          "package": "AERN-Net",
          "partial": "QAProd ABoth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdABoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdAFirst",
          "package": "AERN-Net",
          "signature": "QAProdAFirst a1",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdAFirst",
          "package": "AERN-Net",
          "partial": "QAProd AFirst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdAFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdASecond",
          "package": "AERN-Net",
          "signature": "QAProdASecond a2",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdASecond",
          "package": "AERN-Net",
          "partial": "QAProd ASecond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdASecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQBoth",
          "package": "AERN-Net",
          "signature": "QAProdQBoth q1 q2",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQBoth",
          "package": "AERN-Net",
          "partial": "QAProd QBoth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdQBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQFirst",
          "package": "AERN-Net",
          "signature": "QAProdQFirst q1",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQFirst",
          "package": "AERN-Net",
          "partial": "QAProd QFirst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdQFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQSecond",
          "package": "AERN-Net",
          "signature": "QAProdQSecond q2",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#QAProdQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "QAProdQSecond",
          "package": "AERN-Net",
          "partial": "QAProd QSecond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:QAProdQSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTChanges",
          "package": "AERN-Net",
          "signature": "ChannelType -\u003e ChannelType",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTChanges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTChanges",
          "normalized": "ChannelType-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TChanges",
          "signature": "ChannelType-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTIx",
          "package": "AERN-Net",
          "signature": "ChannelType -\u003e ChannelType",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTIx",
          "normalized": "ChannelType-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TIx",
          "signature": "ChannelType-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTList",
          "package": "AERN-Net",
          "signature": "ChannelType -\u003e ChannelType",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTList",
          "normalized": "ChannelType-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TList",
          "signature": "ChannelType-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTMaybe",
          "package": "AERN-Net",
          "signature": "ChannelType -\u003e ChannelType",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTMaybe",
          "normalized": "ChannelType-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TMaybe",
          "signature": "ChannelType-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTProd",
          "package": "AERN-Net",
          "signature": "ChannelType -\u003e ChannelType -\u003e ChannelType",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#chTProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "chTProd",
          "normalized": "ChannelType-\u003eChannelType-\u003eChannelType",
          "package": "AERN-Net",
          "partial": "TProd",
          "signature": "ChannelType-\u003eChannelType-\u003eChannelType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:chTProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "firstJust",
          "package": "AERN-Net",
          "signature": "[Maybe err] -\u003e Maybe err",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#firstJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "firstJust",
          "normalized": "[Maybe a]-\u003eMaybe a",
          "package": "AERN-Net",
          "partial": "Just",
          "signature": "[Maybe err]-\u003eMaybe err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:firstJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "makeAnswerList",
          "package": "AERN-Net",
          "signature": "[a] -\u003e QAListQ q -\u003e QAListA a",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#makeAnswerList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "makeAnswerList",
          "normalized": "[a]-\u003eQAListQ b-\u003eQAListA a",
          "package": "AERN-Net",
          "partial": "Answer List",
          "signature": "[a]-\u003eQAListQ q-\u003eQAListA a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:makeAnswerList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "makeAnswerMaybe",
          "package": "AERN-Net",
          "signature": "(q -\u003e Maybe a) -\u003e QAMaybeQ q -\u003e QAMaybeA a",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#makeAnswerMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "makeAnswerMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eQAMaybeQ a-\u003eQAMaybeA b",
          "package": "AERN-Net",
          "partial": "Answer Maybe",
          "signature": "(q-\u003eMaybe a)-\u003eQAMaybeQ q-\u003eQAMaybeA a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:makeAnswerMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "makeAnswerProd",
          "package": "AERN-Net",
          "signature": "(q1 -\u003e a1) -\u003e (q2 -\u003e a2) -\u003e QAProdQ q1 q2 -\u003e QAProdA a1 a2",
          "source": "src/Control-ERNet-Foundations-Protocol-StandardCombinators.html#makeAnswerProd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol StandardCombinators",
          "module": "Control.ERNet.Foundations.Protocol.StandardCombinators",
          "name": "makeAnswerProd",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eQAProdQ a a-\u003eQAProdA b b",
          "package": "AERN-Net",
          "partial": "Answer Prod",
          "signature": "(q-\u003ea)-\u003e(q-\u003ea)-\u003eQAProdQ q q-\u003eQAProdA a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol-StandardCombinators.html#v:makeAnswerProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the concept of a protocol \n    for channel communication.\n\u003c/p\u003e\u003cp\u003eThe protocol concept is formalised using the 2-parameter class \n    \u003ccode\u003e\u003ca\u003eQAProtocol\u003c/a\u003e\u003c/code\u003e and the existential types \n    \u003ccode\u003e\u003ca\u003eChannelType\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAnswerAnyProt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eQueryAnyProt\u003c/a\u003e\u003c/code\u003e\n    indexed by instances of \u003ccode\u003e\u003ca\u003eQAProtocol\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "Protocol",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the concept of protocol for channel communication The protocol concept is formalised using the parameter class QAProtocol and the existential types ChannelType AnswerAnyProt QueryAnyProt indexed by instances of QAProtocol",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "Protocol",
          "package": "AERN-Net",
          "partial": "Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of answers from all protocols.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "AnswerAnyProt",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#AnswerAnyProt",
          "type": "data"
        },
        "index": {
          "description": "Union of answers from all protocols",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "AnswerAnyProt",
          "package": "AERN-Net",
          "partial": "Answer Any Prot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:AnswerAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used to identify protocols eg for\n    the creation of new channels or for dynamic type checking.\n    It consists of an example query and an example answer.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "ChannelType",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#ChannelType",
          "type": "data"
        },
        "index": {
          "description": "This type is used to identify protocols eg for the creation of new channels or for dynamic type checking It consists of an example query and an example answer",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "ChannelType",
          "package": "AERN-Net",
          "partial": "Channel Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:ChannelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QABoolQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QABoolQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QABoolQ",
          "package": "AERN-Net",
          "partial": "QABool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QABoolQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QANatA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatA",
          "package": "AERN-Net",
          "partial": "QANat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QANatA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QANatQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatQ",
          "package": "AERN-Net",
          "partial": "QANat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QANatQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class grouping types of queries and answers.\n\u003c/p\u003e\u003cp\u003eEach instance has to define dynamic type checking of answers agains queries.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAProtocol",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QAProtocol",
          "type": "class"
        },
        "index": {
          "description": "class grouping types of queries and answers Each instance has to define dynamic type checking of answers agains queries",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAProtocol",
          "package": "AERN-Net",
          "partial": "QAProtocol",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QAProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitA",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitA",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitA",
          "package": "AERN-Net",
          "partial": "QAUnit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QAUnitA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitQ",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitQ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitQ",
          "package": "AERN-Net",
          "partial": "QAUnit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QAUnitQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of queries from all protocols.\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QueryAnyProt",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QueryAnyProt",
          "type": "data"
        },
        "index": {
          "description": "Union of queries from all protocols",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QueryAnyProt",
          "package": "AERN-Net",
          "partial": "Query Any Prot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QueryAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany danger of over 2^29 queries?\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QueryId",
          "package": "AERN-Net",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QueryId",
          "type": "type"
        },
        "index": {
          "description": "any danger of over queries",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QueryId",
          "package": "AERN-Net",
          "partial": "Query Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#t:QueryId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "AnswerAnyProt",
          "package": "AERN-Net",
          "signature": "AnswerAnyProt a",
          "source": "src/Control-ERNet-Foundations-Protocol.html#AnswerAnyProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "AnswerAnyProt",
          "package": "AERN-Net",
          "partial": "Answer Any Prot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:AnswerAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "ChannelType",
          "package": "AERN-Net",
          "signature": "ChannelType q a",
          "source": "src/Control-ERNet-Foundations-Protocol.html#ChannelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "ChannelType",
          "package": "AERN-Net",
          "partial": "Channel Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:ChannelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QABoolQ",
          "package": "AERN-Net",
          "signature": "QABoolQ",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QABoolQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QABoolQ",
          "package": "AERN-Net",
          "partial": "QABool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QABoolQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatA",
          "package": "AERN-Net",
          "signature": "QANatA Integer",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QANatA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatA",
          "package": "AERN-Net",
          "partial": "QANat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QANatA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatQ",
          "package": "AERN-Net",
          "signature": "QANatQ",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QANatQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QANatQ",
          "package": "AERN-Net",
          "partial": "QANat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QANatQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitA",
          "package": "AERN-Net",
          "signature": "QAUnitA",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitA",
          "package": "AERN-Net",
          "partial": "QAUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QAUnitA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitQ",
          "package": "AERN-Net",
          "signature": "QAUnitQ",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QAUnitQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QAUnitQ",
          "package": "AERN-Net",
          "partial": "QAUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QAUnitQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QueryAnyProt",
          "package": "AERN-Net",
          "signature": "QueryAnyProt q",
          "source": "src/Control-ERNet-Foundations-Protocol.html#QueryAnyProt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "QueryAnyProt",
          "package": "AERN-Net",
          "partial": "Query Any Prot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:QueryAnyProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest whether the answer makes sense for a given query (dynamic type checking)\n\u003c/p\u003e",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "qaMatch",
          "package": "AERN-Net",
          "signature": "qaMatch",
          "source": "src/Control-ERNet-Foundations-Protocol.html#qaMatch",
          "type": "method"
        },
        "index": {
          "description": "test whether the answer makes sense for given query dynamic type checking",
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "qaMatch",
          "package": "AERN-Net",
          "partial": "Match",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:qaMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "qaaSetMinGran",
          "package": "AERN-Net",
          "signature": "Granularity -\u003e a -\u003e a",
          "source": "src/Control-ERNet-Foundations-Protocol.html#qaaSetMinGran",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ERNet Foundations Protocol",
          "module": "Control.ERNet.Foundations.Protocol",
          "name": "qaaSetMinGran",
          "normalized": "Granularity-\u003ea-\u003ea",
          "package": "AERN-Net",
          "partial": "Set Min Gran",
          "signature": "Granularity-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AERN-Net/docs/Control-ERNet-Foundations-Protocol.html#v:qaaSetMinGran"
      }
    }
  ]
]