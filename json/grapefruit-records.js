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
        "word": "grapefruit-records"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.Context",
          "name": "Context",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Context.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Record Context",
          "module": "Data.Record.Context",
          "name": "Context",
          "package": "grapefruit-records",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context consumer and context producer record styles.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eContextConnectorStyle \u003cem\u003econtext\u003c/em\u003e \u003ccode\u003eConsumer\u003c/code\u003e\u003c/code\u003e is the style of context consumer records with\n        context \u003ccode\u003e\u003cem\u003econtext\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003eContextConnectorStyle \u003cem\u003econtext\u003c/em\u003e \u003ccode\u003eProducer\u003c/code\u003e\u003c/code\u003e is the style of context\n        producer records with context \u003ccode\u003e\u003cem\u003econtext\u003c/em\u003e\u003c/code\u003e. Fields of context connector style records have\n        the form \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e ::~~ \u003cem\u003econnectorGenerator\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record.Context",
          "name": "ContextStyle",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Context.html#ContextStyle",
          "type": "data"
        },
        "index": {
          "description": "The context consumer and context producer record styles ContextConnectorStyle context Consumer is the style of context consumer records with context context and ContextConnectorStyle context Producer is the style of context producer records with context context Fields of context connector style records have the form name connectorGenerator",
          "hierarchy": "Data Record Context",
          "module": "Data.Record.Context",
          "name": "ContextStyle",
          "package": "grapefruit-records",
          "partial": "Context Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Context.html#t:ContextStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies all values of a context connector record to a given context to form an ordinary\n        context record.\n\u003c/p\u003e",
          "module": "Data.Record.Context",
          "name": "app",
          "package": "grapefruit-records",
          "signature": "record (ContextStyle context style) -\u003e context -\u003e record style",
          "source": "src/Data-Record-Context.html#app",
          "type": "function"
        },
        "index": {
          "description": "Applies all values of context connector record to given context to form an ordinary context record",
          "hierarchy": "Data Record Context",
          "module": "Data.Record.Context",
          "name": "app",
          "normalized": "a(ContextStyle b c)-\u003eb-\u003ea c",
          "package": "grapefruit-records",
          "signature": "record(ContextStyle context style)-\u003econtext-\u003erecord style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Context.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for optionality records.\n\u003c/p\u003e\u003cp\u003eOptionality records are used to specify interfaces with optional input data. Compared to an\n    ordinary record type, an optionality record type states for every field whether it is required\n    or optional. This is done by a slight abuse of field names. A field name \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e\u003c/code\u003e is replaced by\n    either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e \u003cem\u003ename\u003c/em\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOpt\u003c/a\u003e\u003c/code\u003e \u003cem\u003ename\u003c/em\u003e\u003c/code\u003e. Optionality record types are never used directly in\n    types of actual values. Instead, they are converted into ordinary record types with the type\n    functions \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Record.Optionality",
          "name": "Optionality",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Optionality.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for optionality records Optionality records are used to specify interfaces with optional input data Compared to an ordinary record type an optionality record type states for every field whether it is required or optional This is done by slight abuse of field names field name name is replaced by either Req name or Opt name Optionality record types are never used directly in types of actual values Instead they are converted into ordinary record types with the type functions All and Required",
          "hierarchy": "Data Record Optionality",
          "module": "Data.Record.Optionality",
          "name": "Optionality",
          "package": "grapefruit-records",
          "partial": "Optionality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA marker for optional fields.\n\u003c/p\u003e",
          "module": "Data.Record.Optionality",
          "name": "Opt",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Optionality.html#Opt",
          "type": "data"
        },
        "index": {
          "description": "marker for optional fields",
          "hierarchy": "Data Record Optionality",
          "module": "Data.Record.Optionality",
          "name": "Opt",
          "package": "grapefruit-records",
          "partial": "Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#t:Opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all optionality record types.\n\u003c/p\u003e",
          "module": "Data.Record.Optionality",
          "name": "OptRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Optionality.html#OptRecord",
          "type": "class"
        },
        "index": {
          "description": "The class of all optionality record types",
          "hierarchy": "Data Record Optionality",
          "module": "Data.Record.Optionality",
          "name": "OptRecord",
          "package": "grapefruit-records",
          "partial": "Opt Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#t:OptRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA marker for required fields.\n\u003c/p\u003e",
          "module": "Data.Record.Optionality",
          "name": "Req",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Optionality.html#Req",
          "type": "data"
        },
        "index": {
          "description": "marker for required fields",
          "hierarchy": "Data Record Optionality",
          "module": "Data.Record.Optionality",
          "name": "Req",
          "package": "grapefruit-records",
          "partial": "Req",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#t:Req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.Plain",
          "name": "Plain",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Plain.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Record Plain",
          "module": "Data.Record.Plain",
          "name": "Plain",
          "package": "grapefruit-records",
          "partial": "Plain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Plain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.Plain",
          "name": "PlainKind",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Plain.html#PlainKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Record Plain",
          "module": "Data.Record.Plain",
          "name": "PlainKind",
          "package": "grapefruit-records",
          "partial": "Plain Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Plain.html#t:PlainKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.Plain",
          "name": "PlainStyle",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Plain.html#PlainStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Record Plain",
          "module": "Data.Record.Plain",
          "name": "PlainStyle",
          "package": "grapefruit-records",
          "partial": "Plain Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Plain.html#t:PlainStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides context connector records.\n\u003c/p\u003e\u003cp\u003eA context connector record is a record of connectors (consumers or producers) which depend on\n    some data, called the context.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Record.Signal.Context",
          "name": "Context",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal-Context.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides context connector records context connector record is record of connectors consumers or producers which depend on some data called the context",
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "Context",
          "package": "grapefruit-records",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which contain functions from contexts to connectors (consumers or producers) as\n        values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal.Context",
          "name": "ContextConnectorRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal-Context.html#ContextConnectorRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which contain functions from contexts to connectors consumers or producers as values",
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "ContextConnectorRecord",
          "package": "grapefruit-records",
          "partial": "Context Connector Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextConnectorRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.Signal.Context",
          "name": "ContextConnectorStyle",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal-Context.html#ContextConnectorStyle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "ContextConnectorStyle",
          "package": "grapefruit-records",
          "partial": "Context Connector Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextConnectorStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which contain functions from contexts to consumers as values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal.Context",
          "name": "ContextConsumerRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal-Context.html#ContextConsumerRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which contain functions from contexts to consumers as values",
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "ContextConsumerRecord",
          "package": "grapefruit-records",
          "partial": "Context Consumer Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextConsumerRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which contain functions from contexts to producers as values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal.Context",
          "name": "ContextProducerRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal-Context.html#ContextProducerRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which contain functions from contexts to producers as values",
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "ContextProducerRecord",
          "package": "grapefruit-records",
          "partial": "Context Producer Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextProducerRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record of context consumers into a reader arrow which consumes a corresponding\n        record of signals. The concrete context has to be provided as the environment of the reader\n        arrow.\n\u003c/p\u003e",
          "module": "Data.Record.Signal.Context",
          "name": "consume",
          "package": "grapefruit-records",
          "signature": "ContextConsumerRecord context record -\u003e ReaderArrow context (Circuit era) (SignalRecord era record) ()",
          "source": "src/Data-Record-Signal-Context.html#consume",
          "type": "function"
        },
        "index": {
          "description": "Converts record of context consumers into reader arrow which consumes corresponding record of signals The concrete context has to be provided as the environment of the reader arrow",
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "consume",
          "normalized": "ContextConsumerRecord a b-\u003eReaderArrow a(Circuit c)(SignalRecord c b)()",
          "package": "grapefruit-records",
          "signature": "ContextConsumerRecord context record-\u003eReaderArrow context(Circuit era)(SignalRecord era record)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record of context producers into a reader arrow which produces a corresponding\n        record of signals. The concrete context has to be provided as the environment of the reader\n        arrow.\n\u003c/p\u003e",
          "module": "Data.Record.Signal.Context",
          "name": "produce",
          "package": "grapefruit-records",
          "signature": "ContextProducerRecord context record -\u003e ReaderArrow context (Circuit era) () (SignalRecord era record)",
          "source": "src/Data-Record-Signal-Context.html#produce",
          "type": "function"
        },
        "index": {
          "description": "Converts record of context producers into reader arrow which produces corresponding record of signals The concrete context has to be provided as the environment of the reader arrow",
          "hierarchy": "Data Record Signal Context",
          "module": "Data.Record.Signal.Context",
          "name": "produce",
          "normalized": "ContextProducerRecord a b-\u003eReaderArrow a(Circuit c)()(SignalRecord c b)",
          "package": "grapefruit-records",
          "signature": "ContextProducerRecord context record-\u003eReaderArrow context(Circuit era)()(SignalRecord era record)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#v:produce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides records of signals and signal-related data.\n\u003c/p\u003e\u003cp\u003eA record has a type of the following form:\n\u003c/p\u003e\u003cpre\u003e\n    (X :& \u003cem\u003ename_1\u003c/em\u003e ::: \u003cem\u003esignal_1\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_1\u003c/em\u003e :& ... :& \u003cem\u003ename_n\u003c/em\u003e ::: \u003cem\u003esignal_n\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_n\u003c/em\u003e) \u003cem\u003estyle\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eA value of such a type is a list of \u003cem\u003efields\u003c/em\u003e where the \u003cem\u003ei\u003c/em\u003eth field has type \u003ccode\u003e(\u003cem\u003ename_i\u003c/em\u003e :::\n    \u003cem\u003esignal_i\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_i\u003c/em\u003e) \u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(:::)\u003c/code\u003e is a data family. Its \u003ccode\u003e\u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e parameter is a phantom type which selects the instance\n    of the family. For a concrete \u003ccode\u003e\u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e type, the type \u003ccode\u003e(\u003cem\u003ename\u003c/em\u003e ::: \u003cem\u003esignal\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e`\n    \u003cem\u003eval\u003c/em\u003e) \u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e covers name-value pairs where the type of the values depends on \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003cem\u003eval\u003c/em\u003e\u003c/code\u003e. For example, if \u003ccode\u003e\u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e is of the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSignalStyle\u003c/a\u003e\u003c/code\u003e \u003cem\u003eera\u003c/em\u003e\u003c/code\u003e, the values have type\n    \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e \u003cem\u003eera\u003c/em\u003e \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e. This leads to records of signals with identical era. With the styles\n    \u003ccode\u003e\u003ccode\u003eConnector\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003eConnector\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, it is possible to form records of\n    consumers and producers.\n\u003c/p\u003e\u003cp\u003eField names are represented by types which are declared as follows:\n\u003c/p\u003e\u003cpre\u003e\n    data \u003cem\u003eName\u003c/em\u003e = \u003cem\u003eName\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThis makes it possible to use names as types (allowing the use of names in compile-time checks)\n    but also as expressions and patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Record.Signal",
          "name": "Signal",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides records of signals and signal-related data record has type of the following form name signal Of val name signal Of val style value of such type is list of fields where the th field has type name signal Of val style is data family Its style parameter is phantom type which selects the instance of the family For concrete style type the type name signal Of val style covers name-value pairs where the type of the values depends on signal and val For example if style is of the form SignalStyle era the values have type signal era val This leads to records of signals with identical era With the styles Connector Consumer and Connector Producer it is possible to form records of consumers and producers Field names are represented by types which are declared as follows data Name Name This makes it possible to use names as types allowing the use of names in compile-time checks but also as expressions and patterns",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "Signal",
          "package": "grapefruit-records",
          "partial": "Signal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which which contain signal connectors (producers or consumers) as values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "ConnectorRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#ConnectorRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which which contain signal connectors producers or consumers as values",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "ConnectorRecord",
          "package": "grapefruit-records",
          "partial": "Connector Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ConnectorRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe consumer and producer record styles.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eConnectorStyle \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the style of consumer records and \u003ccode\u003eConnectorStyle \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n        is the style of producer records. Fields of connector style records have the form \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e\n        ::~ \u003cem\u003econnector\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "ConnectorStyle",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#ConnectorStyle",
          "type": "data"
        },
        "index": {
          "description": "The consumer and producer record styles ConnectorStyle Consumer is the style of consumer records and ConnectorStyle Producer is the style of producer records Fields of connector style records have the form name connector",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "ConnectorStyle",
          "package": "grapefruit-records",
          "partial": "Connector Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ConnectorStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which contain signal consumers as values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "ConsumerRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#ConsumerRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which contain signal consumers as values",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "ConsumerRecord",
          "package": "grapefruit-records",
          "partial": "Consumer Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ConsumerRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which contain signal producers as values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "ProducerRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#ProducerRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which contain signal producers as values",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "ProducerRecord",
          "package": "grapefruit-records",
          "partial": "Producer Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ProducerRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record.Signal",
          "name": "SignalKind",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#SignalKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "SignalKind",
          "package": "grapefruit-records",
          "partial": "Signal Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:SignalKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecords which contain signals of a common era as values.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "SignalRecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#SignalRecord",
          "type": "type"
        },
        "index": {
          "description": "Records which contain signals of common era as values",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "SignalRecord",
          "package": "grapefruit-records",
          "partial": "Signal Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:SignalRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe style of signal records of a specific era.\n\u003c/p\u003e\u003cp\u003eFields of signal style records have the form \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e ::= \u003cem\u003esignal\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "SignalStyle",
          "package": "grapefruit-records",
          "source": "src/Data-Record-Signal.html#SignalStyle",
          "type": "data"
        },
        "index": {
          "description": "The style of signal records of specific era Fields of signal style records have the form name signal",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "SignalStyle",
          "package": "grapefruit-records",
          "partial": "Signal Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:SignalStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record of consumers into a circuit that consumes a corresponding record of\n        signals.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "consume",
          "package": "grapefruit-records",
          "signature": "ConsumerRecord record -\u003e Circuit era (SignalRecord era record) ()",
          "source": "src/Data-Record-Signal.html#consume",
          "type": "function"
        },
        "index": {
          "description": "Converts record of consumers into circuit that consumes corresponding record of signals",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "consume",
          "normalized": "ConsumerRecord a-\u003eCircuit b(SignalRecord b a)()",
          "package": "grapefruit-records",
          "signature": "ConsumerRecord record-\u003eCircuit era(SignalRecord era record)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record of producers into a circuit that produces a corresponding record of\n        signals.\n\u003c/p\u003e",
          "module": "Data.Record.Signal",
          "name": "produce",
          "package": "grapefruit-records",
          "signature": "ProducerRecord record -\u003e Circuit era () (SignalRecord era record)",
          "source": "src/Data-Record-Signal.html#produce",
          "type": "function"
        },
        "index": {
          "description": "Converts record of producers into circuit that produces corresponding record of signals",
          "hierarchy": "Data Record Signal",
          "module": "Data.Record.Signal",
          "name": "produce",
          "normalized": "ProducerRecord a-\u003eCircuit b()(SignalRecord b a)",
          "package": "grapefruit-records",
          "signature": "ProducerRecord record-\u003eCircuit era()(SignalRecord era record)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#v:produce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "Record",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Record",
          "package": "grapefruit-records",
          "partial": "Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of non-empty records, consisting of an initial record and a last field.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": ":&",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#%3A%26",
          "type": "data"
        },
        "index": {
          "description": "The type of non-empty records consisting of an initial record and last field",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":&",
          "package": "grapefruit-records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t::-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe family of record fields.\n\u003c/p\u003e\u003cp\u003eEach instance of it matches arbitrary \u003ccode\u003ename\u003c/code\u003e parameters and all \u003ccode\u003esignalOfVal\u003c/code\u003e parameters\n        which are of the form \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e `\u003ccode\u003eOf\u003c/code\u003e` \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e. The actual choice of the instance\n        depends only on the \u003ccode\u003estyle\u003c/code\u003e parameter. The structure of fields of a specific style is\n        documented together with the respective style type.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": ":::",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#%3A%3A%3A",
          "type": "data"
        },
        "index": {
          "description": "The family of record fields Each instance of it matches arbitrary name parameters and all signalOfVal parameters which are of the form signal Of val The actual choice of the instance depends only on the style parameter The structure of fields of specific style is documented together with the respective style type",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":::",
          "package": "grapefruit-records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t::::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe catenation of two record types.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Cat",
          "package": "grapefruit-records",
          "signature": "Cat",
          "type": "function"
        },
        "index": {
          "description": "The catenation of two record types",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Cat",
          "package": "grapefruit-records",
          "partial": "Cat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "ExtenderPiece",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#ExtenderPiece",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "ExtenderPiece",
          "package": "grapefruit-records",
          "partial": "Extender Piece",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:ExtenderPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "Kind",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#Kind",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Kind",
          "package": "grapefruit-records",
          "partial": "Kind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all record types.\n\u003c/p\u003e\u003cp\u003eA record type is a type of records without the style parameter. Therefore, it has kind \u003ccode\u003e* -\u003e\n        *\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Record",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#Record",
          "type": "class"
        },
        "index": {
          "description": "The class of all record types record type is type of records without the style parameter Therefore it has kind",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Record",
          "package": "grapefruit-records",
          "partial": "Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "Sort",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#Sort",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Sort",
          "package": "grapefruit-records",
          "partial": "Sort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "Style",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#Style",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Style",
          "package": "grapefruit-records",
          "partial": "Style",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all pairs of record types where the first is a subrecord of the second.\n\u003c/p\u003e\u003cp\u003eCurrenty, the subrecord relation is only defined for records which do not have multiple\n        occurences of the same name. A records is a subrecord of another record if all field types\n        of the first record are also field types of the second, independently of order.\n\u003c/p\u003e\u003cp\u003eThe instance declarations of \u003ccode\u003eSubrecord\u003c/code\u003e use several helper classes which are hidden. One of\n        them is the class \u003ccode\u003ePresence\u003c/code\u003e. You get the error message that no instance of \u003ccode\u003ePresence\n        \u003cem\u003ename\u003c/em\u003e\u003c/code\u003e could be found if the alleged subrecord contains a name which is not present in the\n        alleged superrecord.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "Subrecord",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#Subrecord",
          "type": "class"
        },
        "index": {
          "description": "The class of all pairs of record types where the first is subrecord of the second Currenty the subrecord relation is only defined for records which do not have multiple occurences of the same name records is subrecord of another record if all field types of the first record are also field types of the second independently of order The instance declarations of Subrecord use several helper classes which are hidden One of them is the class Presence You get the error message that no instance of Presence name could be found if the alleged subrecord contains name which is not present in the alleged superrecord",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Subrecord",
          "package": "grapefruit-records",
          "partial": "Subrecord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Subrecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "TransformerPiece",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#TransformerPiece",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "TransformerPiece",
          "package": "grapefruit-records",
          "partial": "Transformer Piece",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:TransformerPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "Value",
          "package": "grapefruit-records",
          "signature": "Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "Value",
          "package": "grapefruit-records",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of empty records.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "X",
          "package": "grapefruit-records",
          "source": "src/Data-Record.html#X",
          "type": "data"
        },
        "index": {
          "description": "The type of empty records",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "X",
          "package": "grapefruit-records",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": ":&",
          "package": "grapefruit-records",
          "signature": "(record style) :& !(field style)",
          "source": "src/Data-Record.html#%3A%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":&",
          "package": "grapefruit-records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v::-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": ":=",
          "package": "grapefruit-records",
          "signature": "name := (Value style sort)",
          "source": "src/Data-Record.html#%3A%3A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": ":=",
          "package": "grapefruit-records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "ExtenderPiece",
          "package": "grapefruit-records",
          "signature": "sort)))",
          "source": "src/Data-Record.html#ExtenderPiece",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "ExtenderPiece",
          "package": "grapefruit-records",
          "partial": "Extender Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:ExtenderPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "TransformerPiece",
          "package": "grapefruit-records",
          "signature": "TransformerPiece (Value style sort -\u003e Value style' sort)",
          "source": "src/Data-Record.html#TransformerPiece",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "TransformerPiece",
          "normalized": "TransformerPiece(Value a b-\u003eValue c b)",
          "package": "grapefruit-records",
          "partial": "Transformer Piece",
          "signature": "TransformerPiece(Value style sort-\u003eValue style' sort)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:TransformerPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "X",
          "package": "grapefruit-records",
          "signature": "X",
          "source": "src/Data-Record.html#X",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "X",
          "package": "grapefruit-records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general method for building record-related &#8220;things&#8221;.\n\u003c/p\u003e\u003cp\u003eFor each record type, this method constructs a value which is somehow related to this\n            record type. Such a value is called a thing. The type parameter \u003ccode\u003ething\u003c/code\u003e maps record\n            types to the types of their corresponding things. The first argument of \u003ccode\u003ebuild\u003c/code\u003e gives\n            the thing of the empty record type while the second argument tells how to transform a\n            thing of an arbitrary record type into the thing of this record type extended\n            with an arbitrary field type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ebuild\u003c/code\u003e is used, for example, to implement the function \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "build",
          "package": "grapefruit-records",
          "signature": "Forall kind (ExtenderPiece thing record name)) -\u003e thing record",
          "source": "src/Data-Record.html#build",
          "type": "method"
        },
        "index": {
          "description": "general method for building record-related things For each record type this method constructs value which is somehow related to this record type Such value is called thing The type parameter thing maps record types to the types of their corresponding things The first argument of build gives the thing of the empty record type while the second argument tells how to transform thing of an arbitrary record type into the thing of this record type extended with an arbitrary field type build is used for example to implement the function cat",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "build",
          "normalized": "Forall a(ExtenderPiece b c d))-\u003eb c",
          "package": "grapefruit-records",
          "signature": "Forall kind(ExtenderPiece thing record name))-\u003ething record",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe catenation of two records.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "cat",
          "package": "grapefruit-records",
          "signature": "record1 style -\u003e record2 style -\u003e Cat record1 record2 style",
          "source": "src/Data-Record.html#cat",
          "type": "function"
        },
        "index": {
          "description": "The catenation of two records",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "cat",
          "normalized": "a b-\u003ea b-\u003eCat a a b",
          "package": "grapefruit-records",
          "signature": "record style-\u003erecord style-\u003eCat record record style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "encase",
          "package": "grapefruit-records",
          "signature": "piece sort) -\u003e Forall kind piece",
          "source": "src/Data-Record.html#encase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "encase",
          "normalized": "a b)-\u003eForall c a",
          "package": "grapefruit-records",
          "signature": "piece sort)-\u003eForall kind piece",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:encase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of a function to the fields of a record.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "map",
          "package": "grapefruit-records",
          "signature": "Forall (K style) (TransformerPiece style style') -\u003e record style -\u003e record style'",
          "source": "src/Data-Record.html#map",
          "type": "function"
        },
        "index": {
          "description": "Application of function to the fields of record",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "map",
          "normalized": "Forall(K a)(TransformerPiece a b)-\u003ec a-\u003ec b",
          "package": "grapefruit-records",
          "signature": "Forall(K style)(TransformerPiece style style')-\u003erecord style-\u003erecord style'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a record into a subrecord by dropping and reordering fields appropriately.\n\u003c/p\u003e",
          "module": "Data.Record",
          "name": "narrow",
          "package": "grapefruit-records",
          "signature": "record style -\u003e subrecord style",
          "source": "src/Data-Record.html#narrow",
          "type": "method"
        },
        "index": {
          "description": "Converts record into subrecord by dropping and reordering fields appropriately",
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "narrow",
          "normalized": "a b-\u003ec b",
          "package": "grapefruit-records",
          "signature": "record style-\u003esubrecord style",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:narrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Record",
          "name": "specialize",
          "package": "grapefruit-records",
          "signature": "Forall kind piece -\u003e piece sort",
          "source": "src/Data-Record.html#specialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Record",
          "module": "Data.Record",
          "name": "specialize",
          "normalized": "Forall a b-\u003eb c",
          "package": "grapefruit-records",
          "signature": "Forall kind piece-\u003epiece sort",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:specialize"
      }
    }
  ]
]