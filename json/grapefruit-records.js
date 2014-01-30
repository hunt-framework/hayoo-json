[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Context.html#",
      "description": {
        "fct-module": "Data.Record.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Record-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record Context",
        "module": "Data.Record.Context",
        "name": "Context",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Context.html#t:ContextStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe context consumer and context producer record styles.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eContextConnectorStyle \u003cem\u003econtext\u003c/em\u003e \u003ccode\u003eConsumer\u003c/code\u003e\u003c/code\u003e is the style of context consumer records with\n        context \u003ccode\u003e\u003cem\u003econtext\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003eContextConnectorStyle \u003cem\u003econtext\u003c/em\u003e \u003ccode\u003eProducer\u003c/code\u003e\u003c/code\u003e is the style of context\n        producer records with context \u003ccode\u003e\u003cem\u003econtext\u003c/em\u003e\u003c/code\u003e. Fields of context connector style records have\n        the form \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e ::~~ \u003cem\u003econnectorGenerator\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Context.html#ContextStyle",
        "fct-type": "data",
        "title": "ContextStyle"
      },
      "index": {
        "description": "The context consumer and context producer record styles ContextConnectorStyle context Consumer is the style of context consumer records with context context and ContextConnectorStyle context Producer is the style of context producer records with context context Fields of context connector style records have the form name connectorGenerator",
        "hierarchy": "Data Record Context",
        "module": "Data.Record.Context",
        "name": "ContextStyle",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Context.html#v:app",
      "description": {
        "fct-descr": "\u003cp\u003eApplies all values of a context connector record to a given context to form an ordinary\n        context record.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "record (ContextStyle context style) -\u003e context -\u003e record style",
        "fct-source": "src/Data-Record-Context.html#app",
        "fct-type": "function",
        "title": "app"
      },
      "index": {
        "description": "Applies all values of context connector record to given context to form an ordinary context record",
        "hierarchy": "Data Record Context",
        "module": "Data.Record.Context",
        "name": "app",
        "normalized": "a(ContextStyle b c)-\u003eb-\u003ea c",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "record(ContextStyle context style)-\u003econtext-\u003erecord style"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for optionality records.\n\u003c/p\u003e\u003cp\u003eOptionality records are used to specify interfaces with optional input data. Compared to an\n    ordinary record type, an optionality record type states for every field whether it is required\n    or optional. This is done by a slight abuse of field names. A field name \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e\u003c/code\u003e is replaced by\n    either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e \u003cem\u003ename\u003c/em\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOpt\u003c/a\u003e\u003c/code\u003e \u003cem\u003ename\u003c/em\u003e\u003c/code\u003e. Optionality record types are never used directly in\n    types of actual values. Instead, they are converted into ordinary record types with the type\n    functions \u003ccode\u003e\u003ca\u003eAll\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Record.Optionality",
        "fct-package": "grapefruit-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Record-Optionality.html",
        "fct-type": "module",
        "title": "Optionality"
      },
      "index": {
        "description": "This module provides support for optionality records Optionality records are used to specify interfaces with optional input data Compared to an ordinary record type an optionality record type states for every field whether it is required or optional This is done by slight abuse of field names field name name is replaced by either Req name or Opt name Optionality record types are never used directly in types of actual values Instead they are converted into ordinary record types with the type functions All and Required",
        "hierarchy": "Data Record Optionality",
        "module": "Data.Record.Optionality",
        "name": "Optionality",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Optionality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#t:Opt",
      "description": {
        "fct-descr": "\u003cp\u003eA marker for optional fields.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Optionality",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Optionality.html#Opt",
        "fct-type": "data",
        "title": "Opt"
      },
      "index": {
        "description": "marker for optional fields",
        "hierarchy": "Data Record Optionality",
        "module": "Data.Record.Optionality",
        "name": "Opt",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#t:OptRecord",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all optionality record types.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Optionality",
        "fct-package": "grapefruit-records",
        "fct-signature": "class",
        "fct-source": "src/Data-Record-Optionality.html#OptRecord",
        "fct-type": "class",
        "title": "OptRecord"
      },
      "index": {
        "description": "The class of all optionality record types",
        "hierarchy": "Data Record Optionality",
        "module": "Data.Record.Optionality",
        "name": "OptRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Opt Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Optionality.html#t:Req",
      "description": {
        "fct-descr": "\u003cp\u003eA marker for required fields.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Optionality",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Optionality.html#Req",
        "fct-type": "data",
        "title": "Req"
      },
      "index": {
        "description": "marker for required fields",
        "hierarchy": "Data Record Optionality",
        "module": "Data.Record.Optionality",
        "name": "Req",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Plain.html#",
      "description": {
        "fct-module": "Data.Record.Plain",
        "fct-package": "grapefruit-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Record-Plain.html",
        "fct-type": "module",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record Plain",
        "module": "Data.Record.Plain",
        "name": "Plain",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Plain.html#t:PlainKind",
      "description": {
        "fct-module": "Data.Record.Plain",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Plain.html#PlainKind",
        "fct-type": "data",
        "title": "PlainKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record Plain",
        "module": "Data.Record.Plain",
        "name": "PlainKind",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Plain Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Plain.html#t:PlainStyle",
      "description": {
        "fct-module": "Data.Record.Plain",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Plain.html#PlainStyle",
        "fct-type": "data",
        "title": "PlainStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record Plain",
        "module": "Data.Record.Plain",
        "name": "PlainStyle",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Plain Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides context connector records.\n\u003c/p\u003e\u003cp\u003eA context connector record is a record of connectors (consumers or producers) which depend on\n    some data, called the context.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Record-Signal-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "This module provides context connector records context connector record is record of connectors consumers or producers which depend on some data called the context",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "Context",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextConnectorRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which contain functions from contexts to connectors (consumers or producers) as\n        values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal-Context.html#ContextConnectorRecord",
        "fct-type": "type",
        "title": "ContextConnectorRecord"
      },
      "index": {
        "description": "Records which contain functions from contexts to connectors consumers or producers as values",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "ContextConnectorRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context Connector Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextConnectorStyle",
      "description": {
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal-Context.html#ContextConnectorStyle",
        "fct-type": "type",
        "title": "ContextConnectorStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "ContextConnectorStyle",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context Connector Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextConsumerRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which contain functions from contexts to consumers as values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal-Context.html#ContextConsumerRecord",
        "fct-type": "type",
        "title": "ContextConsumerRecord"
      },
      "index": {
        "description": "Records which contain functions from contexts to consumers as values",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "ContextConsumerRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context Consumer Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#t:ContextProducerRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which contain functions from contexts to producers as values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal-Context.html#ContextProducerRecord",
        "fct-type": "type",
        "title": "ContextProducerRecord"
      },
      "index": {
        "description": "Records which contain functions from contexts to producers as values",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "ContextProducerRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Context Producer Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a record of context consumers into a reader arrow which consumes a corresponding\n        record of signals. The concrete context has to be provided as the environment of the reader\n        arrow.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "ContextConsumerRecord context record -\u003e ReaderArrow context (Circuit era) (SignalRecord era record) ()",
        "fct-source": "src/Data-Record-Signal-Context.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Converts record of context consumers into reader arrow which consumes corresponding record of signals The concrete context has to be provided as the environment of the reader arrow",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "consume",
        "normalized": "ContextConsumerRecord a b-\u003eReaderArrow a(Circuit c)(SignalRecord c b)()",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "ContextConsumerRecord context record-\u003eReaderArrow context(Circuit era)(SignalRecord era record)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal-Context.html#v:produce",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a record of context producers into a reader arrow which produces a corresponding\n        record of signals. The concrete context has to be provided as the environment of the reader\n        arrow.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal.Context",
        "fct-package": "grapefruit-records",
        "fct-signature": "ContextProducerRecord context record -\u003e ReaderArrow context (Circuit era) () (SignalRecord era record)",
        "fct-source": "src/Data-Record-Signal-Context.html#produce",
        "fct-type": "function",
        "title": "produce"
      },
      "index": {
        "description": "Converts record of context producers into reader arrow which produces corresponding record of signals The concrete context has to be provided as the environment of the reader arrow",
        "hierarchy": "Data Record Signal Context",
        "module": "Data.Record.Signal.Context",
        "name": "produce",
        "normalized": "ContextProducerRecord a b-\u003eReaderArrow a(Circuit c)()(SignalRecord c b)",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "ContextProducerRecord context record-\u003eReaderArrow context(Circuit era)()(SignalRecord era record)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides records of signals and signal-related data.\n\u003c/p\u003e\u003cp\u003eA record has a type of the following form:\n\u003c/p\u003e\u003cpre\u003e\n    (X :& \u003cem\u003ename_1\u003c/em\u003e ::: \u003cem\u003esignal_1\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_1\u003c/em\u003e :& ... :& \u003cem\u003ename_n\u003c/em\u003e ::: \u003cem\u003esignal_n\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_n\u003c/em\u003e) \u003cem\u003estyle\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eA value of such a type is a list of \u003cem\u003efields\u003c/em\u003e where the \u003cem\u003ei\u003c/em\u003eth field has type \u003ccode\u003e(\u003cem\u003ename_i\u003c/em\u003e :::\n    \u003cem\u003esignal_i\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_i\u003c/em\u003e) \u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(:::)\u003c/code\u003e is a data family. Its \u003ccode\u003e\u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e parameter is a phantom type which selects the instance\n    of the family. For a concrete \u003ccode\u003e\u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e type, the type \u003ccode\u003e(\u003cem\u003ename\u003c/em\u003e ::: \u003cem\u003esignal\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e`\n    \u003cem\u003eval\u003c/em\u003e) \u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e covers name-value pairs where the type of the values depends on \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003cem\u003eval\u003c/em\u003e\u003c/code\u003e. For example, if \u003ccode\u003e\u003cem\u003estyle\u003c/em\u003e\u003c/code\u003e is of the form \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSignalStyle\u003c/a\u003e\u003c/code\u003e \u003cem\u003eera\u003c/em\u003e\u003c/code\u003e, the values have type\n    \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e \u003cem\u003eera\u003c/em\u003e \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e. This leads to records of signals with identical era. With the styles\n    \u003ccode\u003e\u003ccode\u003eConnector\u003c/code\u003e \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003eConnector\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, it is possible to form records of\n    consumers and producers.\n\u003c/p\u003e\u003cp\u003eField names are represented by types which are declared as follows:\n\u003c/p\u003e\u003cpre\u003e\n    data \u003cem\u003eName\u003c/em\u003e = \u003cem\u003eName\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThis makes it possible to use names as types (allowing the use of names in compile-time checks)\n    but also as expressions and patterns.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Record-Signal.html",
        "fct-type": "module",
        "title": "Signal"
      },
      "index": {
        "description": "This module provides records of signals and signal-related data record has type of the following form name signal Of val name signal Of val style value of such type is list of fields where the th field has type name signal Of val style is data family Its style parameter is phantom type which selects the instance of the family For concrete style type the type name signal Of val style covers name-value pairs where the type of the values depends on signal and val For example if style is of the form SignalStyle era the values have type signal era val This leads to records of signals with identical era With the styles Connector Consumer and Connector Producer it is possible to form records of consumers and producers Field names are represented by types which are declared as follows data Name Name This makes it possible to use names as types allowing the use of names in compile-time checks but also as expressions and patterns",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ConnectorRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which which contain signal connectors (producers or consumers) as values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal.html#ConnectorRecord",
        "fct-type": "type",
        "title": "ConnectorRecord"
      },
      "index": {
        "description": "Records which which contain signal connectors producers or consumers as values",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "ConnectorRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Connector Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ConnectorStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe consumer and producer record styles.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eConnectorStyle \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the style of consumer records and \u003ccode\u003eConnectorStyle \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n        is the style of producer records. Fields of connector style records have the form \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e\n        ::~ \u003cem\u003econnector\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Signal.html#ConnectorStyle",
        "fct-type": "data",
        "title": "ConnectorStyle"
      },
      "index": {
        "description": "The consumer and producer record styles ConnectorStyle Consumer is the style of consumer records and ConnectorStyle Producer is the style of producer records Fields of connector style records have the form name connector",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "ConnectorStyle",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Connector Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ConsumerRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which contain signal consumers as values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal.html#ConsumerRecord",
        "fct-type": "type",
        "title": "ConsumerRecord"
      },
      "index": {
        "description": "Records which contain signal consumers as values",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "ConsumerRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Consumer Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:ProducerRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which contain signal producers as values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal.html#ProducerRecord",
        "fct-type": "type",
        "title": "ProducerRecord"
      },
      "index": {
        "description": "Records which contain signal producers as values",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "ProducerRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Producer Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:SignalKind",
      "description": {
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Signal.html#SignalKind",
        "fct-type": "data",
        "title": "SignalKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "SignalKind",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Signal Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:SignalRecord",
      "description": {
        "fct-descr": "\u003cp\u003eRecords which contain signals of a common era as values.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "type",
        "fct-source": "src/Data-Record-Signal.html#SignalRecord",
        "fct-type": "type",
        "title": "SignalRecord"
      },
      "index": {
        "description": "Records which contain signals of common era as values",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "SignalRecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Signal Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#t:SignalStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe style of signal records of a specific era.\n\u003c/p\u003e\u003cp\u003eFields of signal style records have the form \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e ::= \u003cem\u003esignal\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record-Signal.html#SignalStyle",
        "fct-type": "data",
        "title": "SignalStyle"
      },
      "index": {
        "description": "The style of signal records of specific era Fields of signal style records have the form name signal",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "SignalStyle",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Signal Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a record of consumers into a circuit that consumes a corresponding record of\n        signals.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "ConsumerRecord record -\u003e Circuit era (SignalRecord era record) ()",
        "fct-source": "src/Data-Record-Signal.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Converts record of consumers into circuit that consumes corresponding record of signals",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "consume",
        "normalized": "ConsumerRecord a-\u003eCircuit b(SignalRecord b a)()",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "ConsumerRecord record-\u003eCircuit era(SignalRecord era record)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record-Signal.html#v:produce",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a record of producers into a circuit that produces a corresponding record of\n        signals.\n\u003c/p\u003e",
        "fct-module": "Data.Record.Signal",
        "fct-package": "grapefruit-records",
        "fct-signature": "ProducerRecord record -\u003e Circuit era () (SignalRecord era record)",
        "fct-source": "src/Data-Record-Signal.html#produce",
        "fct-type": "function",
        "title": "produce"
      },
      "index": {
        "description": "Converts record of producers into circuit that produces corresponding record of signals",
        "hierarchy": "Data Record Signal",
        "module": "Data.Record.Signal",
        "name": "produce",
        "normalized": "ProducerRecord a-\u003eCircuit b()(SignalRecord b a)",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "ProducerRecord record-\u003eCircuit era()(SignalRecord era record)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Record.html",
        "fct-type": "module",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Record",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t::-38-",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of non-empty records, consisting of an initial record and a last field.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record.html#%3A%26",
        "fct-type": "data",
        "title": ":&"
      },
      "index": {
        "description": "The type of non-empty records consisting of an initial record and last field",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": ":&",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t::::",
      "description": {
        "fct-descr": "\u003cp\u003eThe family of record fields.\n\u003c/p\u003e\u003cp\u003eEach instance of it matches arbitrary \u003ccode\u003ename\u003c/code\u003e parameters and all \u003ccode\u003esignalOfVal\u003c/code\u003e parameters\n        which are of the form \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e `\u003ccode\u003eOf\u003c/code\u003e` \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e. The actual choice of the instance\n        depends only on the \u003ccode\u003estyle\u003c/code\u003e parameter. The structure of fields of a specific style is\n        documented together with the respective style type.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record.html#%3A%3A%3A",
        "fct-type": "data",
        "title": ":::"
      },
      "index": {
        "description": "The family of record fields Each instance of it matches arbitrary name parameters and all signalOfVal parameters which are of the form signal Of val The actual choice of the instance depends only on the style parameter The structure of fields of specific style is documented together with the respective style type",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": ":::",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Cat",
      "description": {
        "fct-descr": "\u003cp\u003eThe catenation of two record types.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "Cat",
        "fct-type": "function",
        "title": "Cat"
      },
      "index": {
        "description": "The catenation of two record types",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Cat",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Cat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:ExtenderPiece",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Record.html#ExtenderPiece",
        "fct-type": "newtype",
        "title": "ExtenderPiece"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "ExtenderPiece",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Extender Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Kind",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "class",
        "fct-source": "src/Data-Record.html#Kind",
        "fct-type": "class",
        "title": "Kind"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Kind",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all record types.\n\u003c/p\u003e\u003cp\u003eA record type is a type of records without the style parameter. Therefore, it has kind \u003ccode\u003e* -\u003e\n        *\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "class",
        "fct-source": "src/Data-Record.html#Record",
        "fct-type": "class",
        "title": "Record"
      },
      "index": {
        "description": "The class of all record types record type is type of records without the style parameter Therefore it has kind",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Record",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Sort",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "class",
        "fct-source": "src/Data-Record.html#Sort",
        "fct-type": "class",
        "title": "Sort"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Sort",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Style",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "class",
        "fct-source": "src/Data-Record.html#Style",
        "fct-type": "class",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Style",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Subrecord",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all pairs of record types where the first is a subrecord of the second.\n\u003c/p\u003e\u003cp\u003eCurrenty, the subrecord relation is only defined for records which do not have multiple\n        occurences of the same name. A records is a subrecord of another record if all field types\n        of the first record are also field types of the second, independently of order.\n\u003c/p\u003e\u003cp\u003eThe instance declarations of \u003ccode\u003eSubrecord\u003c/code\u003e use several helper classes which are hidden. One of\n        them is the class \u003ccode\u003ePresence\u003c/code\u003e. You get the error message that no instance of \u003ccode\u003ePresence\n        \u003cem\u003ename\u003c/em\u003e\u003c/code\u003e could be found if the alleged subrecord contains a name which is not present in the\n        alleged superrecord.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "class",
        "fct-source": "src/Data-Record.html#Subrecord",
        "fct-type": "class",
        "title": "Subrecord"
      },
      "index": {
        "description": "The class of all pairs of record types where the first is subrecord of the second Currenty the subrecord relation is only defined for records which do not have multiple occurences of the same name records is subrecord of another record if all field types of the first record are also field types of the second independently of order The instance declarations of Subrecord use several helper classes which are hidden One of them is the class Presence You get the error message that no instance of Presence name could be found if the alleged subrecord contains name which is not present in the alleged superrecord",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Subrecord",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Subrecord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:TransformerPiece",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Record.html#TransformerPiece",
        "fct-type": "newtype",
        "title": "TransformerPiece"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "TransformerPiece",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Transformer Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:Value",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "Value",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "Value",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#t:X",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of empty records.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Record.html#X",
        "fct-type": "data",
        "title": "X"
      },
      "index": {
        "description": "The type of empty records",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "X",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v::-38-",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "!(record style) :& !(field style)",
        "fct-source": "src/Data-Record.html#%3A%26",
        "fct-type": "function",
        "title": ":&"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": ":&",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v::-61-",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "!name := (Value style sort)",
        "fct-source": "src/Data-Record.html#%3A%3A%3A",
        "fct-type": "function",
        "title": ":="
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": ":=",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:ExtenderPiece",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "sort)))",
        "fct-source": "src/Data-Record.html#ExtenderPiece",
        "fct-type": "function",
        "title": "ExtenderPiece"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "ExtenderPiece",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "Extender Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:TransformerPiece",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "TransformerPiece (Value style sort -\u003e Value style' sort)",
        "fct-source": "src/Data-Record.html#TransformerPiece",
        "fct-type": "function",
        "title": "TransformerPiece"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "TransformerPiece",
        "normalized": "TransformerPiece(Value a b-\u003eValue c b)",
        "package": "grapefruit-records",
        "partial": "Transformer Piece",
        "signature": "TransformerPiece(Value style sort-\u003eValue style' sort)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:X",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "X",
        "fct-source": "src/Data-Record.html#X",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "X",
        "normalized": "",
        "package": "grapefruit-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003eA general method for building record-related &#8220;things&#8221;.\n\u003c/p\u003e\u003cp\u003eFor each record type, this method constructs a value which is somehow related to this\n            record type. Such a value is called a thing. The type parameter \u003ccode\u003ething\u003c/code\u003e maps record\n            types to the types of their corresponding things. The first argument of \u003ccode\u003ebuild\u003c/code\u003e gives\n            the thing of the empty record type while the second argument tells how to transform a\n            thing of an arbitrary record type into the thing of this record type extended\n            with an arbitrary field type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ebuild\u003c/code\u003e is used, for example, to implement the function \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "Forall kind (ExtenderPiece thing record name)) -\u003e thing record",
        "fct-source": "src/Data-Record.html#build",
        "fct-type": "method",
        "title": "build"
      },
      "index": {
        "description": "general method for building record-related things For each record type this method constructs value which is somehow related to this record type Such value is called thing The type parameter thing maps record types to the types of their corresponding things The first argument of build gives the thing of the empty record type while the second argument tells how to transform thing of an arbitrary record type into the thing of this record type extended with an arbitrary field type build is used for example to implement the function cat",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "build",
        "normalized": "Forall a(ExtenderPiece b c d))-\u003eb c",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "Forall kind(ExtenderPiece thing record name))-\u003ething record"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eThe catenation of two records.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "record1 style -\u003e record2 style -\u003e Cat record1 record2 style",
        "fct-source": "src/Data-Record.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "The catenation of two records",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "cat",
        "normalized": "a b-\u003ea b-\u003eCat a a b",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "record style-\u003erecord style-\u003eCat record record style"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:encase",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "piece sort) -\u003e Forall kind piece",
        "fct-source": "src/Data-Record.html#encase",
        "fct-type": "method",
        "title": "encase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "encase",
        "normalized": "a b)-\u003eForall c a",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "piece sort)-\u003eForall kind piece"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApplication of a function to the fields of a record.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "Forall (K style) (TransformerPiece style style') -\u003e record style -\u003e record style'",
        "fct-source": "src/Data-Record.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Application of function to the fields of record",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "map",
        "normalized": "Forall(K a)(TransformerPiece a b)-\u003ec a-\u003ec b",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "Forall(K style)(TransformerPiece style style')-\u003erecord style-\u003erecord style'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:narrow",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a record into a subrecord by dropping and reordering fields appropriately.\n\u003c/p\u003e",
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "record style -\u003e subrecord style",
        "fct-source": "src/Data-Record.html#narrow",
        "fct-type": "method",
        "title": "narrow"
      },
      "index": {
        "description": "Converts record into subrecord by dropping and reordering fields appropriately",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "narrow",
        "normalized": "a b-\u003ec b",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "record style-\u003esubrecord style"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-records/docs/Data-Record.html#v:specialize",
      "description": {
        "fct-module": "Data.Record",
        "fct-package": "grapefruit-records",
        "fct-signature": "Forall kind piece -\u003e piece sort",
        "fct-source": "src/Data-Record.html#specialize",
        "fct-type": "method",
        "title": "specialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Record",
        "module": "Data.Record",
        "name": "specialize",
        "normalized": "Forall a b-\u003eb c",
        "package": "grapefruit-records",
        "partial": "",
        "signature": "Forall kind piece-\u003epiece sort"
      }
    }
  }
]