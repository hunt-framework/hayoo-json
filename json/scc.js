[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the entire SCC library except for low-level modules \u003ca\u003eControl.Concurrent.SCC.Streams\u003c/a\u003e and\n \u003ca\u003eControl.Concurrent.SCC.Types\u003c/a\u003e. The exported combinators can be configured to run their components sequentially or in\n parallel depending on the available resources.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html",
        "fct-type": "module",
        "title": "Configurable"
      },
      "index": {
        "description": "This module exports the entire SCC library except for low-level modules Control.Concurrent.SCC.Streams and Control.Concurrent.SCC.Types The exported combinators can be configured to run their components sequentially or in parallel depending on the available resources",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "Configurable",
        "normalized": "",
        "package": "scc",
        "partial": "Configurable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#t:Component",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eComponent\u003c/a\u003e\u003c/code\u003e carries a value and metadata about the value. It can be configured to use a specific number of\n threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "data",
        "title": "Component"
      },
      "index": {
        "description": "Component carries value and metadata about the value It can be configured to use specific number of threads",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "Component",
        "normalized": "",
        "package": "scc",
        "partial": "Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#t:ConsumerComponent",
      "description": {
        "fct-descr": "\u003cp\u003eA component that consumes values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e is called \u003ccode\u003e\u003ca\u003eConsumerComponent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#ConsumerComponent",
        "fct-type": "type",
        "title": "ConsumerComponent"
      },
      "index": {
        "description": "component that consumes values from Source is called ConsumerComponent",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "ConsumerComponent",
        "normalized": "",
        "package": "scc",
        "partial": "Consumer Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#t:PerformerComponent",
      "description": {
        "fct-descr": "\u003cp\u003eA component that performs a computation with no inputs nor outputs is a \u003ccode\u003e\u003ca\u003ePerformerComponent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#PerformerComponent",
        "fct-type": "type",
        "title": "PerformerComponent"
      },
      "index": {
        "description": "component that performs computation with no inputs nor outputs is PerformerComponent",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "PerformerComponent",
        "normalized": "",
        "package": "scc",
        "partial": "Performer Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#t:ProducerComponent",
      "description": {
        "fct-descr": "\u003cp\u003eA component that produces values and puts them into a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e is called \u003ccode\u003e\u003ca\u003eProducerComponent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#ProducerComponent",
        "fct-type": "type",
        "title": "ProducerComponent"
      },
      "index": {
        "description": "component that produces values and puts them into Sink is called ProducerComponent",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "ProducerComponent",
        "normalized": "",
        "package": "scc",
        "partial": "Producer Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#t:SplitterComponent",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSplitterComponent\u003c/a\u003e\u003c/code\u003e type represents computations that distribute data acording to some criteria.  A splitter\n should distribute only the original input data, and feed it into the sinks in the same order it has been read from\n the source. If the two 'Sink c x' arguments of a splitter are the same, the splitter must act as an identity\n transform.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#SplitterComponent",
        "fct-type": "type",
        "title": "SplitterComponent"
      },
      "index": {
        "description": "The SplitterComponent type represents computations that distribute data acording to some criteria splitter should distribute only the original input data and feed it into the sinks in the same order it has been read from the source If the two Sink arguments of splitter are the same the splitter must act as an identity transform",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "SplitterComponent",
        "normalized": "",
        "package": "scc",
        "partial": "Splitter Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#t:TransducerComponent",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTransducerComponent\u003c/a\u003e\u003c/code\u003e type represents computations that transform a data stream.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#TransducerComponent",
        "fct-type": "type",
        "title": "TransducerComponent"
      },
      "index": {
        "description": "The TransducerComponent type represents computations that transform data stream",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "TransducerComponent",
        "normalized": "",
        "package": "scc",
        "partial": "Transducer Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e is a pairwise logical disjunction of two splitters run in parallel on the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#%7C%7C",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Combinator is pairwise logical disjunction of two splitters run in parallel on the same input",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "(||) ||",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e is a pairwise logical conjunction of two splitters run in parallel on the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#%26%26",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Combinator is pairwise logical conjunction of two splitters run in parallel on the same input",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "(&&) &&",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:-62--124-",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003e\u003e|\u003c/a\u003e\u003c/code\u003e combinator's input value can reach its \u003cem\u003efalse\u003c/em\u003e sink only by going through both argument splitters' \u003cem\u003efalse\u003c/em\u003e\n sinks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#%3E%7C",
        "fct-type": "function",
        "title": "(\u003e|)"
      },
      "index": {
        "description": "combinator input value can reach its false sink only by going through both argument splitters false sinks",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "(\u003e|) \u003e|",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:-62--38-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\u003e&\u003c/a\u003e\u003c/code\u003e combinator sends the \u003cem\u003etrue\u003c/em\u003e sink output of its left operand to the input of its right operand for further\n splitting. Both operands' \u003cem\u003efalse\u003c/em\u003e sinks are connected to the \u003cem\u003efalse\u003c/em\u003e sink of the combined splitter, but any input\n value to reach the \u003cem\u003etrue\u003c/em\u003e sink of the combined component data must be deemed true by both splitters.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#%3E%26",
        "fct-type": "function",
        "title": "(\u003e&)"
      },
      "index": {
        "description": "The combinator sends the true sink output of its left operand to the input of its right operand for further splitting Both operands false sinks are connected to the false sink of the combined splitter but any input value to reach the true sink of the combined component data must be deemed true by both splitters",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "(\u003e&) \u003e&",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003ePipeableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input of the result, if any, becomes the input of the first component.\n\u003c/li\u003e\u003cli\u003e The output produced by the first child component is consumed by the second child component.\n\u003c/li\u003e\u003cli\u003e The result output, if any, is the output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Component c1 -\u003e Component c2 -\u003e Component c3",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Class PipeableComponentPair applies to any two components that can be combined into third component with the following properties The input of the result if any becomes the input of the first component The output produced by the first child component is consumed by the second child component The result output if any is the output of the second component",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "Component a-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "",
        "signature": "Component c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:...",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e...\u003c/a\u003e\u003c/code\u003e tracks the running balance of difference between the number of preceding starts of sections\n considered \u003cem\u003etrue\u003c/em\u003e according to its first argument and the ones according to its second argument. The combinator\n passes to \u003cem\u003etrue\u003c/em\u003e all input values for which the difference balance is positive. This combinator is typically used\n with \u003ccode\u003e\u003ca\u003estartOf\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eendOf\u003c/a\u003e\u003c/code\u003e in order to count entire input sections and ignore their lengths.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#...",
        "fct-type": "function",
        "title": "(...)"
      },
      "index": {
        "description": "Combinator tracks the running balance of difference between the number of preceding starts of sections considered true according to its first argument and the ones according to its second argument The combinator passes to true all input values for which the difference balance is positive This combinator is typically used with startOf and endOf in order to count entire input sections and ignore their lengths",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "(...) ...",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:Component",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Component",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "Component"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "Component",
        "normalized": "",
        "package": "scc",
        "partial": "Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:adaptConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts the argument consumer to consume the stream of a data type coercible to the type it was meant to consume.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ConsumerComponent m y r -\u003e ConsumerComponent m x r",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#adaptConsumer",
        "fct-type": "function",
        "title": "adaptConsumer"
      },
      "index": {
        "description": "Adjusts the argument consumer to consume the stream of data type coercible to the type it was meant to consume",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "adaptConsumer",
        "normalized": "ConsumerComponent a b c-\u003eConsumerComponent a d c",
        "package": "scc",
        "partial": "Consumer",
        "signature": "ConsumerComponent m y r-\u003eConsumerComponent m x r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:adaptProducer",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts the argument producer to produce the stream of a data type coercible from the type it was meant to produce.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ProducerComponent m x r -\u003e ProducerComponent m y r",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#adaptProducer",
        "fct-type": "function",
        "title": "adaptProducer"
      },
      "index": {
        "description": "Adjusts the argument producer to produce the stream of data type coercible from the type it was meant to produce",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "adaptProducer",
        "normalized": "ProducerComponent a b c-\u003eProducerComponent a d c",
        "package": "scc",
        "partial": "Producer",
        "signature": "ProducerComponent m x r-\u003eProducerComponent m y r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:adaptSplitter",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts the argument splitter to split the stream of a data type isomorphic to the type it was meant to split.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m y",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#adaptSplitter",
        "fct-type": "function",
        "title": "adaptSplitter"
      },
      "index": {
        "description": "Adjusts the argument splitter to split the stream of data type isomorphic to the type it was meant to split",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "adaptSplitter",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a c",
        "package": "scc",
        "partial": "Splitter",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e converts the given producer to transducer that passes all its input through unmodified, finally\n | appending to it the output of the argument producer.\n | \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e \u003cem\u003esuffix\u003c/em\u003e = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e \u003ccode\u003easis\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e \u003cem\u003esuffix\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ProducerComponent m x r -\u003e TransducerComponent m x x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Combinator append converts the given producer to transducer that passes all its input through unmodified finally appending to it the output of the argument producer append suffix join asis substitute suffix",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "append",
        "normalized": "ProducerComponent a b c-\u003eTransducerComponent a b b",
        "package": "scc",
        "partial": "",
        "signature": "ProducerComponent m x r-\u003eTransducerComponent m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eConsumerComponent \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e opens the name file and appends the given source to it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e ConsumerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "ConsumerComponent appendFile opens the name file and appends the given source to it",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "appendFile",
        "normalized": "String-\u003eConsumerComponent IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eConsumerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:atomic",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003eatomic\u003c/a\u003e\u003c/code\u003e takes the component name and its cost creates a single-threaded component with no subcomponents.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Int -\u003e c -\u003e Component c",
        "fct-source": "src/Control-Concurrent-Configuration.html#atomic",
        "fct-type": "function",
        "title": "atomic"
      },
      "index": {
        "description": "Function atomic takes the component name and its cost creates single-threaded component with no subcomponents",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "atomic",
        "normalized": "String-\u003eInt-\u003ea-\u003eComponent a",
        "package": "scc",
        "partial": "",
        "signature": "String-\u003eInt-\u003ec-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:coerce",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransducerComponent\u003c/a\u003e\u003c/code\u003e that converts a stream of one type to another.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m x y",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#coerce",
        "fct-type": "function",
        "title": "coerce"
      },
      "index": {
        "description": "TransducerComponent that converts stream of one type to another",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "coerce",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:concatSeparate",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003econcatenate\u003c/a\u003e\u003c/code\u003e except it inserts the given separator list between every two input lists.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "x -\u003e TransducerComponent m [x] x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#concatSeparate",
        "fct-type": "function",
        "title": "concatSeparate"
      },
      "index": {
        "description": "Same as concatenate except it inserts the given separator list between every two input lists",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "concatSeparate",
        "normalized": "a-\u003eTransducerComponent b[a]a",
        "package": "scc",
        "partial": "Separate",
        "signature": "x-\u003eTransducerComponent m[x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:concatenate",
      "description": {
        "fct-descr": "\u003cp\u003eTransducerComponent \u003ccode\u003e\u003ca\u003econcatenate\u003c/a\u003e\u003c/code\u003e flattens the input stream of lists of values into the output stream of values.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m [x] x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#concatenate",
        "fct-type": "function",
        "title": "concatenate"
      },
      "index": {
        "description": "TransducerComponent concatenate flattens the input stream of lists of values into the output stream of values",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "concatenate",
        "normalized": "TransducerComponent a[b]b",
        "package": "scc",
        "partial": "",
        "signature": "TransducerComponent m[x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:consumeBy",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eConsumerComponent\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTransducerComponent\u003c/a\u003e\u003c/code\u003e with no output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ConsumerComponent m x r -\u003e TransducerComponent m x y",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#consumeBy",
        "fct-type": "function",
        "title": "consumeBy"
      },
      "index": {
        "description": "Converts ConsumerComponent into TransducerComponent with no output",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "consumeBy",
        "normalized": "ConsumerComponent a b c-\u003eTransducerComponent a b d",
        "package": "scc",
        "partial": "By",
        "signature": "ConsumerComponent m x r-\u003eTransducerComponent m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:consumeInto",
      "description": {
        "fct-descr": "\u003cp\u003eConsumerComponent \u003ccode\u003e\u003ca\u003econsumeInto\u003c/a\u003e\u003c/code\u003e collects the given source into the return value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ConsumerComponent m x x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#consumeInto",
        "fct-type": "function",
        "title": "consumeInto"
      },
      "index": {
        "description": "ConsumerComponent consumeInto collects the given source into the return value",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "consumeInto",
        "normalized": "",
        "package": "scc",
        "partial": "Into",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:contentMarkedWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003econtentMarkedWith\u003c/a\u003e\u003c/code\u003e passes the content of input sections marked-up with the appropriate tag to\n its \u003cem\u003etrue\u003c/em\u003e sink, and the rest of the input to its \u003cem\u003efalse\u003c/em\u003e sink. The argument \u003cem\u003eselect\u003c/em\u003e determines if the tag is\n appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "(y -\u003e Bool) -\u003e SplitterComponent m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#contentMarkedWith",
        "fct-type": "function",
        "title": "contentMarkedWith"
      },
      "index": {
        "description": "SplitterComponent contentMarkedWith passes the content of input sections marked-up with the appropriate tag to its true sink and the rest of the input to its false sink The argument select determines if the tag is appropriate",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "contentMarkedWith",
        "normalized": "(a-\u003eBool)-\u003eSplitterComponent b[Markup a c]",
        "package": "scc",
        "partial": "Marked With",
        "signature": "(y-\u003eBool)-\u003eSplitterComponent m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:cost",
      "description": {
        "fct-descr": "\u003cp\u003eThe cost of using the component as configured. The cost is a rough approximation of time it would take to do the\n job given the \u003ccode\u003e\u003ca\u003eusedThreads\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "cost"
      },
      "index": {
        "description": "The cost of using the component as configured The cost is rough approximation of time it would take to do the job given the usedThreads",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "cost",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e transducer counts all its input values and outputs the final tally.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m x [Integer]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "The count transducer counts all its input values and outputs the final tally",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "count",
        "normalized": "TransducerComponent a b[Integer]",
        "package": "scc",
        "partial": "",
        "signature": "TransducerComponent m x[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:digits",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003edigits\u003c/a\u003e\u003c/code\u003e feeds all digits into its \u003cem\u003etrue\u003c/em\u003e sink, all other characters into \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#digits",
        "fct-type": "function",
        "title": "digits"
      },
      "index": {
        "description": "SplitterComponent digits feeds all digits into its true sink all other characters into false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "digits",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:endOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003eendOf\u003c/a\u003e\u003c/code\u003e issues an empty \u003cem\u003etrue\u003c/em\u003e section at the end of every section considered \u003cem\u003etrue\u003c/em\u003e by its\n argument splitter, otherwise the entire input goes into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#endOf",
        "fct-type": "function",
        "title": "endOf"
      },
      "index": {
        "description": "SplitterComponent endOf issues an empty true section at the end of every section considered true by its argument splitter otherwise the entire input goes into its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "endOf",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "Of",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:erroneous",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eerroneous\u003c/a\u003e\u003c/code\u003e consumer reports an error if any input reaches it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e ConsumerComponent m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#erroneous",
        "fct-type": "function",
        "title": "erroneous"
      },
      "index": {
        "description": "The erroneous consumer reports an error if any input reaches it",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "erroneous",
        "normalized": "String-\u003eConsumerComponent a b()",
        "package": "scc",
        "partial": "",
        "signature": "String-\u003eConsumerComponent m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:even",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e combinator takes every input section that its argument \u003cem\u003esplitter\u003c/em\u003e deems \u003cem\u003etrue\u003c/em\u003e, and feeds even ones into\n its \u003cem\u003etrue\u003c/em\u003e sink. The odd sections and parts of input that are \u003cem\u003efalse\u003c/em\u003e according to its argument splitter are fed to\n \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e splitter's \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "The even combinator takes every input section that its argument splitter deems true and feeds even ones into its true sink The odd sections and parts of input that are false according to its argument splitter are fed to even splitter false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "even",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:everything",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003eeverything\u003c/a\u003e\u003c/code\u003e feeds its entire input into its \u003cem\u003etrue\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#everything",
        "fct-type": "function",
        "title": "everything"
      },
      "index": {
        "description": "SplitterComponent everything feeds its entire input into its true sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "everything",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:expandXMLEntity",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an XML entity name into the text value it represents: \u003ccode\u003eexpandXMLEntity \"lt\" = \"\u003c\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#expandXMLEntity",
        "fct-type": "function",
        "title": "expandXMLEntity"
      },
      "index": {
        "description": "Converts an XML entity name into the text value it represents expandXMLEntity lt",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "expandXMLEntity",
        "normalized": "String-\u003eString",
        "package": "scc",
        "partial": "XMLEntity",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of combinator \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e behaves the same as the argument splitter up to and including the first portion of\n the input which goes into the argument's \u003cem\u003etrue\u003c/em\u003e sink. All input following the first true portion goes into the\n \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "The result of combinator first behaves the same as the argument splitter up to and including the first portion of the input which goes into the argument true sink All input following the first true portion goes into the false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "first",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:followedBy",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003efollowedBy\u003c/a\u003e\u003c/code\u003e treats its argument \u003ccode\u003e\u003ca\u003eSplitterComponent\u003c/a\u003e\u003c/code\u003es as patterns components and returns a\n \u003ccode\u003e\u003ca\u003eSplitterComponent\u003c/a\u003e\u003c/code\u003e that matches their concatenation. A section of input is considered \u003cem\u003etrue\u003c/em\u003e by the result iff its\n prefix is considered \u003cem\u003etrue\u003c/em\u003e by argument \u003cem\u003es1\u003c/em\u003e and the rest of the section is considered \u003cem\u003etrue\u003c/em\u003e by \u003cem\u003es2\u003c/em\u003e. The splitter\n \u003cem\u003es2\u003c/em\u003e is started anew after every section split to \u003cem\u003etrue\u003c/em\u003e sink by \u003cem\u003es1\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#followedBy",
        "fct-type": "function",
        "title": "followedBy"
      },
      "index": {
        "description": "Combinator followedBy treats its argument SplitterComponent as patterns components and returns SplitterComponent that matches their concatenation section of input is considered true by the result iff its prefix is considered true by argument s1 and the rest of the section is considered true by s2 The splitter s2 is started anew after every section split to true sink by s1",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "followedBy",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "By",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:foreach",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforeach\u003c/a\u003e\u003c/code\u003e combinator is similar to the combinator \u003ccode\u003e\u003ca\u003eifs\u003c/a\u003e\u003c/code\u003e in that it combines a splitter and two transducers into\n another transducer. However, in this case the transducers are re-instantiated for each consecutive portion of the\n input as the splitter chunks it up. Each contiguous portion of the input that the splitter sends to one of its two\n sinks gets transducered through the appropriate argument transducer as that transducer's whole input. As soon as the\n contiguous portion is finished, the transducer gets terminated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e Component c -\u003e Component c -\u003e Component c",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#foreach",
        "fct-type": "function",
        "title": "foreach"
      },
      "index": {
        "description": "The foreach combinator is similar to the combinator ifs in that it combines splitter and two transducers into another transducer However in this case the transducers are re-instantiated for each consecutive portion of the input as the splitter chunks it up Each contiguous portion of the input that the splitter sends to one of its two sinks gets transducered through the appropriate argument transducer as that transducer whole input As soon as the contiguous portion is finished the transducer gets terminated",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "foreach",
        "normalized": "SplitterComponent a b-\u003eComponent c-\u003eComponent c-\u003eComponent c",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eComponent c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:fromFile",
      "description": {
        "fct-descr": "\u003cp\u003eProducerComponent \u003ccode\u003e\u003ca\u003efromFile\u003c/a\u003e\u003c/code\u003e opens the named file and feeds the given sink from its contents.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e ProducerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "ProducerComponent fromFile opens the named file and feeds the given sink from its contents",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "fromFile",
        "normalized": "String-\u003eProducerComponent IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eProducerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:fromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eProducerComponent \u003ccode\u003e\u003ca\u003efromHandle\u003c/a\u003e\u003c/code\u003e feeds the given sink from the open file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e ProducerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#fromHandle",
        "fct-type": "function",
        "title": "fromHandle"
      },
      "index": {
        "description": "ProducerComponent fromHandle feeds the given sink from the open file handle",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "fromHandle",
        "normalized": "Handle-\u003eProducerComponent IO Text()",
        "package": "scc",
        "partial": "Handle",
        "signature": "Handle-\u003eProducerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:fromStdIn",
      "description": {
        "fct-descr": "\u003cp\u003eProducerComponent \u003ccode\u003e\u003ca\u003efromStdIn\u003c/a\u003e\u003c/code\u003e feeds the given sink from the standard input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ProducerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#fromStdIn",
        "fct-type": "function",
        "title": "fromStdIn"
      },
      "index": {
        "description": "ProducerComponent fromStdIn feeds the given sink from the standard input",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "fromStdIn",
        "normalized": "ProducerComponent IO Text()",
        "package": "scc",
        "partial": "Std In",
        "signature": "ProducerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eTransducerComponent \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e collects all its input into a single list item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m x [x]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "TransducerComponent group collects all its input into single list item",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "group",
        "normalized": "TransducerComponent a b[b]",
        "package": "scc",
        "partial": "",
        "signature": "TransducerComponent m x[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:having",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e combinator combines two pure splitters into a pure splitter. One splitter is used to chunk the input\n into contiguous portions. Its \u003cem\u003efalse\u003c/em\u003e sink is routed directly to the \u003cem\u003efalse\u003c/em\u003e sink of the combined splitter. The\n second splitter is instantiated and run on each portion of the input that goes to first splitter's \u003cem\u003etrue\u003c/em\u003e sink. If\n the second splitter sends any output at all to its \u003cem\u003etrue\u003c/em\u003e sink, the whole input portion is passed on to the \u003cem\u003etrue\u003c/em\u003e\n sink of the combined splitter, otherwise it goes to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m y -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#having",
        "fct-type": "function",
        "title": "having"
      },
      "index": {
        "description": "The having combinator combines two pure splitters into pure splitter One splitter is used to chunk the input into contiguous portions Its false sink is routed directly to the false sink of the combined splitter The second splitter is instantiated and run on each portion of the input that goes to first splitter true sink If the second splitter sends any output at all to its true sink the whole input portion is passed on to the true sink of the combined splitter otherwise it goes to its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "having",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a c-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m y-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:havingOnly",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehavingOnly\u003c/a\u003e\u003c/code\u003e combinator is analogous to the \u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e combinator, but it succeeds and passes each chunk of the\n input to its \u003cem\u003etrue\u003c/em\u003e sink only if the second splitter sends no part of it to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m y -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#havingOnly",
        "fct-type": "function",
        "title": "havingOnly"
      },
      "index": {
        "description": "The havingOnly combinator is analogous to the having combinator but it succeeds and passes each chunk of the input to its true sink only if the second splitter sends no part of it to its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "havingOnly",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a c-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "Only",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m y-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:id",
      "description": {
        "fct-descr": "\u003cp\u003eTransducerComponent \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e passes its input through unmodified.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m x x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#id",
        "fct-type": "function",
        "title": "id"
      },
      "index": {
        "description": "TransducerComponent id passes its input through unmodified",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "id",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:ioCost",
      "description": {
        "fct-descr": "\u003cp\u003eThe constant cost of each I/O-performing component.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#ioCost",
        "fct-type": "function",
        "title": "ioCost"
      },
      "index": {
        "description": "The constant cost of each O-performing component",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "ioCost",
        "normalized": "",
        "package": "scc",
        "partial": "Cost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003eJoinableComponentPair\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if both argument components consume input, the input of the combined component gets distributed to both\n      components in parallel,\n\u003c/li\u003e\u003cli\u003e if both argument components produce output, the output of the combined component is a concatenation of the\n      complete output from the first component followed by the complete output of the second component, and\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e combinator may apply the components in any order.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Component c1 -\u003e Component c2 -\u003e Component c3",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Class JoinableComponentPair applies to any two components that can be combined into third component with the following properties if both argument components consume input the input of the combined component gets distributed to both components in parallel if both argument components produce output the output of the combined component is concatenation of the complete output from the first component followed by the complete output of the second component and The join combinator may apply the components in any order",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "join",
        "normalized": "Component a-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "",
        "signature": "Component c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the combinator \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e is a splitter which directs all input to its \u003cem\u003efalse\u003c/em\u003e sink, up to the last\n portion of the input which goes to its argument's \u003cem\u003etrue\u003c/em\u003e sink. That portion of the input is the only one that goes to\n the resulting component's \u003cem\u003etrue\u003c/em\u003e sink.  The splitter returned by the combinator \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e has to buffer the previous two\n portions of its input, because it cannot know if a true portion of the input is the last one until it sees the end of\n the input or another portion succeeding the previous one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "The result of the combinator last is splitter which directs all input to its false sink up to the last portion of the input which goes to its argument true sink That portion of the input is the only one that goes to the resulting component true sink The splitter returned by the combinator last has to buffer the previous two portions of its input because it cannot know if true portion of the input is the last one until it sees the end of the input or another portion succeeding the previous one",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "last",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:lastAndAfter",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the combinator \u003ccode\u003e\u003ca\u003elastAndAfter\u003c/a\u003e\u003c/code\u003e is a splitter which directs all input to its \u003cem\u003efalse\u003c/em\u003e sink, up to the\n last portion of the input which goes to its argument's \u003cem\u003etrue\u003c/em\u003e sink. That portion and the remainder of the input is\n fed to the resulting component's \u003cem\u003etrue\u003c/em\u003e sink. The difference between \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elastAndAfter\u003c/a\u003e\u003c/code\u003e combinators is where\n they feed the \u003cem\u003efalse\u003c/em\u003e portion of the input, if any, remaining after the last \u003cem\u003etrue\u003c/em\u003e part.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#lastAndAfter",
        "fct-type": "function",
        "title": "lastAndAfter"
      },
      "index": {
        "description": "The result of the combinator lastAndAfter is splitter which directs all input to its false sink up to the last portion of the input which goes to its argument true sink That portion and the remainder of the input is fed to the resulting component true sink The difference between last and lastAndAfter combinators is where they feed the false portion of the input if any remaining after the last true part",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "lastAndAfter",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "And After",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:letters",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003eletters\u003c/a\u003e\u003c/code\u003e feeds all alphabetical characters into its \u003cem\u003etrue\u003c/em\u003e sink, all other characters into\n | \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#letters",
        "fct-type": "function",
        "title": "letters"
      },
      "index": {
        "description": "SplitterComponent letters feeds all alphabetical characters into its true sink all other characters into false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "letters",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a unary \u003cem\u003ecombinator\u003c/em\u003e to the component payload. The resulting component has the original one as its\n \u003ccode\u003e\u003ca\u003esubComponents\u003c/a\u003e\u003c/code\u003e, and its \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e is the sum of the original component's cost and the \u003cem\u003ecombinator cost\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Int-\u003e String-\u003e (c1 -\u003e c2)-\u003e Component c1-\u003e Component c2",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Applies unary combinator to the component payload The resulting component has the original one as its subComponents and its cost is the sum of the original component cost and the combinator cost",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "lift",
        "normalized": "Int-\u003eString-\u003e(a-\u003ea)-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "",
        "signature": "Int-\u003eString-\u003e(c-\u003ec)-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:liftParallelPair",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two components into one, applying \u003cem\u003ecombinator\u003c/em\u003e to their contents. The \u003cem\u003ecombinator\u003c/em\u003e takes a flag denoting\n if its arguments should run in parallel. The \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eusingThreads\u003c/a\u003e\u003c/code\u003e of the result assume the parallel execution of\n the argument components.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e (Bool -\u003e c1 -\u003e c2 -\u003e c3) -\u003e Component c1 -\u003e Component c2 -\u003e Component c3",
        "fct-source": "src/Control-Concurrent-Configuration.html#liftParallelPair",
        "fct-type": "function",
        "title": "liftParallelPair"
      },
      "index": {
        "description": "Combines two components into one applying combinator to their contents The combinator takes flag denoting if its arguments should run in parallel The cost and usingThreads of the result assume the parallel execution of the argument components",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "liftParallelPair",
        "normalized": "String-\u003e(Bool-\u003ea-\u003ea-\u003ea)-\u003eComponent a-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "Parallel Pair",
        "signature": "String-\u003e(Bool-\u003ec-\u003ec-\u003ec)-\u003eComponent c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:liftSequentialPair",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two components into one, applying \u003cem\u003ecombinator\u003c/em\u003e to their contents. The \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eusingThreads\u003c/a\u003e\u003c/code\u003e of the\n result assume the sequential execution of the argument components.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e (c1 -\u003e c2 -\u003e c3) -\u003e Component c1 -\u003e Component c2 -\u003e Component c3",
        "fct-source": "src/Control-Concurrent-Configuration.html#liftSequentialPair",
        "fct-type": "function",
        "title": "liftSequentialPair"
      },
      "index": {
        "description": "Combines two components into one applying combinator to their contents The cost and usingThreads of the result assume the sequential execution of the argument components",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "liftSequentialPair",
        "normalized": "String-\u003e(a-\u003ea-\u003ea)-\u003eComponent a-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "Sequential Pair",
        "signature": "String-\u003e(c-\u003ec-\u003ec)-\u003eComponent c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eThe sectioning splitter \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e feeds line-ends into its \u003cem\u003efalse\u003c/em\u003e sink, and line contents into \u003cem\u003etrue\u003c/em\u003e. A single\n line-end can be formed by any of the character sequences \"\\n\", \"\\r\", \"\\r\\n\", or \"\\n\\r\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "The sectioning splitter line feeds line-ends into its false sink and line contents into true single line-end can be formed by any of the character sequences or",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "line",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:lowercase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elowercase\u003c/a\u003e\u003c/code\u003e transforms all uppercase letters in the input to lowercase, leaving the rest unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m String String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#lowercase",
        "fct-type": "function",
        "title": "lowercase"
      },
      "index": {
        "description": "The lowercase transforms all uppercase letters in the input to lowercase leaving the rest unchanged",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "lowercase",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:marked",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003emarked\u003c/a\u003e\u003c/code\u003e passes all marked-up input sections to its \u003cem\u003etrue\u003c/em\u003e sink, and all unmarked input to its\n \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#marked",
        "fct-type": "function",
        "title": "marked"
      },
      "index": {
        "description": "SplitterComponent marked passes all marked-up input sections to its true sink and all unmarked input to its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "marked",
        "normalized": "SplitterComponent a[Markup b c]",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:markedContent",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003emarkedContent\u003c/a\u003e\u003c/code\u003e passes the content of all marked-up input sections to its \u003cem\u003etrue\u003c/em\u003e sink, while the\n outermost tags and all unmarked input go to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#markedContent",
        "fct-type": "function",
        "title": "markedContent"
      },
      "index": {
        "description": "SplitterComponent markedContent passes the content of all marked-up input sections to its true sink while the outermost tags and all unmarked input go to its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "markedContent",
        "normalized": "SplitterComponent a[Markup b c]",
        "package": "scc",
        "partial": "Content",
        "signature": "SplitterComponent m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:markedWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003emarkedWith\u003c/a\u003e\u003c/code\u003e passes input sections marked-up with the appropriate tag to its \u003cem\u003etrue\u003c/em\u003e sink, and the\n rest of the input to its \u003cem\u003efalse\u003c/em\u003e sink. The argument \u003cem\u003eselect\u003c/em\u003e determines if the tag is appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "(y -\u003e Bool) -\u003e SplitterComponent m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#markedWith",
        "fct-type": "function",
        "title": "markedWith"
      },
      "index": {
        "description": "SplitterComponent markedWith passes input sections marked-up with the appropriate tag to its true sink and the rest of the input to its false sink The argument select determines if the tag is appropriate",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "markedWith",
        "normalized": "(a-\u003eBool)-\u003eSplitterComponent b[Markup a c]",
        "package": "scc",
        "partial": "With",
        "signature": "(y-\u003eBool)-\u003eSplitterComponent m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:maxUsableThreads",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the maximum number of threads that can be used by the component.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "maxUsableThreads"
      },
      "index": {
        "description": "Returns the maximum number of threads that can be used by the component",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "maxUsableThreads",
        "normalized": "",
        "package": "scc",
        "partial": "Usable Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eReadable component name.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Readable component name",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "name",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:nestedIn",
      "description": {
        "fct-descr": "\u003cp\u003eThe recursive combinator \u003ccode\u003e\u003ca\u003enestedIn\u003c/a\u003e\u003c/code\u003e combines two splitters into a mutually recursive loop acting as a single\n splitter.  The true sink of one of the argument splitters and false sink of the other become the true and false sinks\n of the loop.  The other two sinks are bound to the other splitter's source.  The use of \u003ccode\u003e\u003ca\u003enestedIn\u003c/a\u003e\u003c/code\u003e makes sense only\n on hierarchically structured streams. If we gave it some input containing a flat sequence of values, and assuming\n both component splitters are deterministic and stateless, an input value would either not loop at all or it would\n loop forever.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#nestedIn",
        "fct-type": "function",
        "title": "nestedIn"
      },
      "index": {
        "description": "The recursive combinator nestedIn combines two splitters into mutually recursive loop acting as single splitter The true sink of one of the argument splitters and false sink of the other become the true and false sinks of the loop The other two sinks are bound to the other splitter source The use of nestedIn makes sense only on hierarchically structured streams If we gave it some input containing flat sequence of values and assuming both component splitters are deterministic and stateless an input value would either not loop at all or it would loop forever",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "nestedIn",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "In",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:nonEmptyLine",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003enonEmptyLine\u003c/a\u003e\u003c/code\u003e feeds line-ends into its \u003cem\u003efalse\u003c/em\u003e sink, and all other characters into \u003cem\u003etrue\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#nonEmptyLine",
        "fct-type": "function",
        "title": "nonEmptyLine"
      },
      "index": {
        "description": "SplitterComponent nonEmptyLine feeds line-ends into its false sink and all other characters into true",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "nonEmptyLine",
        "normalized": "",
        "package": "scc",
        "partial": "Empty Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:nothing",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003enothing\u003c/a\u003e\u003c/code\u003e feeds its entire input into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "SplitterComponent nothing feeds its entire input into its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "nothing",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003eone\u003c/a\u003e\u003c/code\u003e feeds all input values to its \u003cem\u003etrue\u003c/em\u003e sink, treating every value as a separate section.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "SplitterComponent one feeds all input values to its true sink treating every value as separate section",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "one",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:parallelRouterAndBranches",
      "description": {
        "fct-descr": "\u003cp\u003eCombines three components into one. The first component runs in parallel with the latter two, which are considered\n alternative to each other.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e (Bool -\u003e c1 -\u003e c2 -\u003e c3 -\u003e c4) -\u003e Component c1 -\u003e Component c2 -\u003e Component c3 -\u003e Component c4",
        "fct-source": "src/Control-Concurrent-Configuration.html#parallelRouterAndBranches",
        "fct-type": "function",
        "title": "parallelRouterAndBranches"
      },
      "index": {
        "description": "Combines three components into one The first component runs in parallel with the latter two which are considered alternative to each other",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "parallelRouterAndBranches",
        "normalized": "String-\u003e(Bool-\u003ea-\u003ea-\u003ea-\u003ea)-\u003eComponent a-\u003eComponent a-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "Router And Branches",
        "signature": "String-\u003e(Bool-\u003ec-\u003ec-\u003ec-\u003ec)-\u003eComponent c-\u003eComponent c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eTransducerComponent \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e prepares input content for subsequent parsing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ParserComponent m x y",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "TransducerComponent parse prepares input content for subsequent parsing",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "parse",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:parseRegions",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a splitter into a parser.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e ParserComponent m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#parseRegions",
        "fct-type": "function",
        "title": "parseRegions"
      },
      "index": {
        "description": "Converts splitter into parser",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "parseRegions",
        "normalized": "SplitterComponent a b-\u003eParserComponent a b()",
        "package": "scc",
        "partial": "Regions",
        "signature": "SplitterComponent m x-\u003eParserComponent m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:parseSubstring",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the same task as the \u003ccode\u003e\u003ca\u003esubstring\u003c/a\u003e\u003c/code\u003e splitter, but instead of splitting it outputs the input as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e x\n \u003ccode\u003e\u003ca\u003eOccurenceTag\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in order to distinguish overlapping strings.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "x -\u003e ParserComponent m x OccurenceTag",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#parseSubstring",
        "fct-type": "function",
        "title": "parseSubstring"
      },
      "index": {
        "description": "Performs the same task as the substring splitter but instead of splitting it outputs the input as Markup OccurenceTag in order to distinguish overlapping strings",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "parseSubstring",
        "normalized": "a-\u003eParserComponent b a OccurenceTag",
        "package": "scc",
        "partial": "Substring",
        "signature": "x-\u003eParserComponent m x OccurenceTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e combinator feeds its \u003cem\u003etrue\u003c/em\u003e sink only the prefix of the input that its argument feeds to its \u003cem\u003etrue\u003c/em\u003e\n sink.  All the rest of the input is dumped into the \u003cem\u003efalse\u003c/em\u003e sink of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "The prefix combinator feeds its true sink only the prefix of the input that its argument feeds to its true sink All the rest of the input is dumped into the false sink of the result",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "prefix",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:prepend",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e converts the given producer to transducer that passes all its input through unmodified, except\n | for prepending the output of the argument producer to it.\n | \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprefix\u003c/em\u003e = \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprefix\u003c/em\u003e) \u003ccode\u003easis\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ProducerComponent m x r -\u003e TransducerComponent m x x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#prepend",
        "fct-type": "function",
        "title": "prepend"
      },
      "index": {
        "description": "Combinator prepend converts the given producer to transducer that passes all its input through unmodified except for prepending the output of the argument producer to it prepend prefix join substitute prefix asis",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "prepend",
        "normalized": "ProducerComponent a b c-\u003eTransducerComponent a b b",
        "package": "scc",
        "partial": "",
        "signature": "ProducerComponent m x r-\u003eTransducerComponent m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:produceFrom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eproduceFrom\u003c/a\u003e\u003c/code\u003e produces the contents of the given argument.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "x -\u003e ProducerComponent m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#produceFrom",
        "fct-type": "function",
        "title": "produceFrom"
      },
      "index": {
        "description": "produceFrom produces the contents of the given argument",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "produceFrom",
        "normalized": "a-\u003eProducerComponent b a()",
        "package": "scc",
        "partial": "From",
        "signature": "x-\u003eProducerComponent m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:recursiveComponentTree",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds a tree of recursive components. The combinator takes a list of pairs of a boolean flag denoting whether the\n level should be run in parallel and the value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "forall c1 c2.  String -\u003e (Bool -\u003e c1 -\u003e c2 -\u003e c2) -\u003e Component c1 -\u003e Component c2",
        "fct-source": "src/Control-Concurrent-Configuration.html#recursiveComponentTree",
        "fct-type": "function",
        "title": "recursiveComponentTree"
      },
      "index": {
        "description": "Builds tree of recursive components The combinator takes list of pairs of boolean flag denoting whether the level should be run in parallel and the value",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "recursiveComponentTree",
        "normalized": "a b b String-\u003e(Bool-\u003eb-\u003eb-\u003eb)-\u003eComponent b-\u003eComponent b",
        "package": "scc",
        "partial": "Component Tree",
        "signature": "forall c c String-\u003e(Bool-\u003ec-\u003ec-\u003ec)-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e combinator makes sure its first argument has completed before using the second one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Component c1 -\u003e Component c2 -\u003e Component c3",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "The sequence combinator makes sure its first argument has completed before using the second one",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "sequence",
        "normalized": "Component a-\u003eComponent a-\u003eComponent a",
        "package": "scc",
        "partial": "",
        "signature": "Component c-\u003eComponent c-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:showComponentTree",
      "description": {
        "fct-descr": "\u003cp\u003eShow details of the given component's configuration.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "forall c.  Component c -\u003e String",
        "fct-source": "src/Control-Concurrent-Configuration.html#showComponentTree",
        "fct-type": "function",
        "title": "showComponentTree"
      },
      "index": {
        "description": "Show details of the given component configuration",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "showComponentTree",
        "normalized": "a b Component c-\u003eString",
        "package": "scc",
        "partial": "Component Tree",
        "signature": "forall c. Component c-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:snot",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esnot\u003c/a\u003e\u003c/code\u003e (streaming not) combinator simply reverses the outputs of the argument splitter. In other words, data\n that the argument splitter sends to its \u003cem\u003etrue\u003c/em\u003e sink goes to the \u003cem\u003efalse\u003c/em\u003e sink of the result, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#snot",
        "fct-type": "function",
        "title": "snot"
      },
      "index": {
        "description": "The snot streaming not combinator simply reverses the outputs of the argument splitter In other words data that the argument splitter sends to its true sink goes to the false sink of the result and vice versa",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "snot",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:startOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003estartOf\u003c/a\u003e\u003c/code\u003e issues an empty \u003cem\u003etrue\u003c/em\u003e section at the beginning of every section considered \u003cem\u003etrue\u003c/em\u003e by\n its argument splitter, otherwise the entire input goes into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#startOf",
        "fct-type": "function",
        "title": "startOf"
      },
      "index": {
        "description": "SplitterComponent startOf issues an empty true section at the beginning of every section considered true by its argument splitter otherwise the entire input goes into its false sink",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "startOf",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "Of",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:subComponents",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of all children components.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "[AnyComponent]",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "subComponents"
      },
      "index": {
        "description": "Returns the list of all children components",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "subComponents",
        "normalized": "[AnyComponent]",
        "package": "scc",
        "partial": "Components",
        "signature": "[AnyComponent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:substitute",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e combinator converts its argument producer to a transducer that produces the same output, while\n | consuming its entire input and ignoring it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ProducerComponent m y r -\u003e TransducerComponent m x y",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#substitute",
        "fct-type": "function",
        "title": "substitute"
      },
      "index": {
        "description": "The substitute combinator converts its argument producer to transducer that produces the same output while consuming its entire input and ignoring it",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "substitute",
        "normalized": "ProducerComponent a b c-\u003eTransducerComponent a d b",
        "package": "scc",
        "partial": "",
        "signature": "ProducerComponent m y r-\u003eTransducerComponent m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:substring",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003esubstring\u003c/a\u003e\u003c/code\u003e feeds to its \u003cem\u003etrue\u003c/em\u003e sink all input parts that match the contents of the given list\n argument. If two overlapping parts of the input both match the argument, both are sent to \u003cem\u003etrue\u003c/em\u003e and each is preceded\n by an empty chunk on \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#substring",
        "fct-type": "function",
        "title": "substring"
      },
      "index": {
        "description": "SplitterComponent substring feeds to its true sink all input parts that match the contents of the given list argument If two overlapping parts of the input both match the argument both are sent to true and each is preceded by an empty chunk on false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "substring",
        "normalized": "a-\u003eSplitterComponent b a",
        "package": "scc",
        "partial": "",
        "signature": "x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:suffix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esuffix\u003c/a\u003e\u003c/code\u003e combinator feeds its \u003cem\u003etrue\u003c/em\u003e sink only the suffix of the input that its argument feeds to its \u003cem\u003etrue\u003c/em\u003e\n sink.  All the rest of the input is dumped into the \u003cem\u003efalse\u003c/em\u003e sink of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#suffix",
        "fct-type": "function",
        "title": "suffix"
      },
      "index": {
        "description": "The suffix combinator feeds its true sink only the suffix of the input that its argument feeds to its true sink All the rest of the input is dumped into the false sink of the result",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "suffix",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:suppress",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esuppress\u003c/a\u003e\u003c/code\u003e consumer suppresses all input it receives. It is equivalent to \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e []\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ConsumerComponent m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#suppress",
        "fct-type": "function",
        "title": "suppress"
      },
      "index": {
        "description": "The suppress consumer suppresses all input it receives It is equivalent to substitute",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "suppress",
        "normalized": "ConsumerComponent a b()",
        "package": "scc",
        "partial": "",
        "signature": "ConsumerComponent m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:toFile",
      "description": {
        "fct-descr": "\u003cp\u003eConsumerComponent \u003ccode\u003e\u003ca\u003etoFile\u003c/a\u003e\u003c/code\u003e opens the named file and copies the given source into it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "String -\u003e ConsumerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#toFile",
        "fct-type": "function",
        "title": "toFile"
      },
      "index": {
        "description": "ConsumerComponent toFile opens the named file and copies the given source into it",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "toFile",
        "normalized": "String-\u003eConsumerComponent IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eConsumerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:toHandle",
      "description": {
        "fct-descr": "\u003cp\u003eConsumerComponent \u003ccode\u003e\u003ca\u003etoHandle\u003c/a\u003e\u003c/code\u003e copies the given source into the open file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e ConsumerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#toHandle",
        "fct-type": "function",
        "title": "toHandle"
      },
      "index": {
        "description": "ConsumerComponent toHandle copies the given source into the open file handle",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "toHandle",
        "normalized": "Handle-\u003eConsumerComponent IO Text()",
        "package": "scc",
        "partial": "Handle",
        "signature": "Handle-\u003eConsumerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:toStdOut",
      "description": {
        "fct-descr": "\u003cp\u003eConsumerComponent \u003ccode\u003e\u003ca\u003etoStdOut\u003c/a\u003e\u003c/code\u003e copies the given source into the standard output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "ConsumerComponent IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#toStdOut",
        "fct-type": "function",
        "title": "toStdOut"
      },
      "index": {
        "description": "ConsumerComponent toStdOut copies the given source into the standard output",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "toStdOut",
        "normalized": "ConsumerComponent IO Text()",
        "package": "scc",
        "partial": "Std Out",
        "signature": "ConsumerComponent IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts each input value \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003eshow x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m [x] [String]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Converts each input value to show",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "toString",
        "normalized": "TransducerComponent a[b][String]",
        "package": "scc",
        "partial": "String",
        "signature": "TransducerComponent m[x][String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:unparse",
      "description": {
        "fct-descr": "\u003cp\u003eTransducerComponent \u003ccode\u003e\u003ca\u003eunparse\u003c/a\u003e\u003c/code\u003e removes all markup from its input and passes the content through.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m [Markup b x] x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#unparse",
        "fct-type": "function",
        "title": "unparse"
      },
      "index": {
        "description": "TransducerComponent unparse removes all markup from its input and passes the content through",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "unparse",
        "normalized": "TransducerComponent a[Markup b c]c",
        "package": "scc",
        "partial": "",
        "signature": "TransducerComponent m[Markup b x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:uppercase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003euppercase\u003c/a\u003e\u003c/code\u003e transforms all lowercase letters in the input to uppercase, leaving the rest unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m String String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#uppercase",
        "fct-type": "function",
        "title": "uppercase"
      },
      "index": {
        "description": "The uppercase transforms all lowercase letters in the input to uppercase leaving the rest unchanged",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "uppercase",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:uptoFirst",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of combinator \u003ccode\u003e\u003ca\u003euptoFirst\u003c/a\u003e\u003c/code\u003e takes all input up to and including the first portion of the input which goes\n into the argument's \u003cem\u003etrue\u003c/em\u003e sink and feeds it to the result splitter's \u003cem\u003etrue\u003c/em\u003e sink. All the rest of the input goes\n into the \u003cem\u003efalse\u003c/em\u003e sink. The only difference between \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euptoFirst\u003c/a\u003e\u003c/code\u003e combinators is in where they direct the\n \u003cem\u003efalse\u003c/em\u003e portion of the input preceding the first \u003cem\u003etrue\u003c/em\u003e part.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m x -\u003e SplitterComponent m x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#uptoFirst",
        "fct-type": "function",
        "title": "uptoFirst"
      },
      "index": {
        "description": "The result of combinator uptoFirst takes all input up to and including the first portion of the input which goes into the argument true sink and feeds it to the result splitter true sink All the rest of the input goes into the false sink The only difference between first and uptoFirst combinators is in where they direct the false portion of the input preceding the first true part",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "uptoFirst",
        "normalized": "SplitterComponent a b-\u003eSplitterComponent a b",
        "package": "scc",
        "partial": "First",
        "signature": "SplitterComponent m x-\u003eSplitterComponent m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:usedThreads",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of threads that the component is configured to use. The default number is usually 1.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "usedThreads"
      },
      "index": {
        "description": "The number of threads that the component is configured to use The default number is usually",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "usedThreads",
        "normalized": "",
        "package": "scc",
        "partial": "Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:usingThreads",
      "description": {
        "fct-descr": "\u003cp\u003eConfigures the component to use the specified number of threads. This function affects \u003ccode\u003e\u003ca\u003eusedThreads\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecost\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003esubComponents\u003c/a\u003e\u003c/code\u003e methods of the result, while \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxUsableThreads\u003c/a\u003e\u003c/code\u003e remain the same.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "Int -\u003e Component c",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "usingThreads"
      },
      "index": {
        "description": "Configures the component to use the specified number of threads This function affects usedThreads cost and subComponents methods of the result while name and maxUsableThreads remain the same",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "usingThreads",
        "normalized": "Int-\u003eComponent a",
        "package": "scc",
        "partial": "Threads",
        "signature": "Int-\u003eComponent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eThe recursive combinator \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e feeds the true sink of the argument splitter back to itself, modified by the\n argument transducer. Data fed to the splitter's false sink is passed on unmodified.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m x x -\u003e SplitterComponent m x -\u003e TransducerComponent m x x",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "The recursive combinator while feeds the true sink of the argument splitter back to itself modified by the argument transducer Data fed to the splitter false sink is passed on unmodified",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "while",
        "normalized": "TransducerComponent a b b-\u003eSplitterComponent a b-\u003eTransducerComponent a b b",
        "package": "scc",
        "partial": "",
        "signature": "TransducerComponent m x x-\u003eSplitterComponent m x-\u003eTransducerComponent m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:whitespace",
      "description": {
        "fct-descr": "\u003cp\u003eSplitterComponent \u003ccode\u003e\u003ca\u003ewhitespace\u003c/a\u003e\u003c/code\u003e feeds all white-space characters into its \u003cem\u003etrue\u003c/em\u003e sink, all others into \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m String",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#whitespace",
        "fct-type": "function",
        "title": "whitespace"
      },
      "index": {
        "description": "SplitterComponent whitespace feeds all white-space characters into its true sink all others into false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "whitespace",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eThe content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "c",
        "fct-source": "src/Control-Concurrent-Configuration.html#Component",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "The content",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "with",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute specification to \u003cem\u003etrue\u003c/em\u003e, everything else to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlAttribute",
        "fct-type": "function",
        "title": "xmlAttribute"
      },
      "index": {
        "description": "Splits every attribute specification to true everything else to false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlAttribute",
        "normalized": "SplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute",
        "signature": "SplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlAttributeName",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute name to \u003cem\u003etrue\u003c/em\u003e, all the rest of input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlAttributeName",
        "fct-type": "function",
        "title": "xmlAttributeName"
      },
      "index": {
        "description": "Splits every attribute name to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlAttributeName",
        "normalized": "SplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute Name",
        "signature": "SplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlAttributeValue",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute value, excluding the quote delimiters, to \u003cem\u003etrue\u003c/em\u003e, all the rest of input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlAttributeValue",
        "fct-type": "function",
        "title": "xmlAttributeValue"
      },
      "index": {
        "description": "Splits every attribute value excluding the quote delimiters to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlAttributeValue",
        "normalized": "SplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute Value",
        "signature": "SplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlElement",
      "description": {
        "fct-descr": "\u003cp\u003eSplits all top-level elements with all their content to \u003cem\u003etrue\u003c/em\u003e, all other input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlElement",
        "fct-type": "function",
        "title": "xmlElement"
      },
      "index": {
        "description": "Splits all top-level elements with all their content to true all other input to false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlElement",
        "normalized": "SplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element",
        "signature": "SplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlElementContent",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the content of all top-level elements to \u003cem\u003etrue\u003c/em\u003e, their tags and intervening input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlElementContent",
        "fct-type": "function",
        "title": "xmlElementContent"
      },
      "index": {
        "description": "Splits the content of all top-level elements to true their tags and intervening input to false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlElementContent",
        "normalized": "SplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Content",
        "signature": "SplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlElementHavingTagWith",
      "description": {
        "fct-descr": "\u003cp\u003eSimiliar to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eelement\u003c/code\u003e)\u003c/code\u003e, except it runs the argument splitter\n only on each element's start tag, not on the entire element with its content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text] -\u003e SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlElementHavingTagWith",
        "fct-type": "function",
        "title": "xmlElementHavingTagWith"
      },
      "index": {
        "description": "Similiar to having element except it runs the argument splitter only on each element start tag not on the entire element with its content",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlElementHavingTagWith",
        "normalized": "SplitterComponent a[Markup XMLToken Text]-\u003eSplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Having Tag With",
        "signature": "SplitterComponent m[Markup XMLToken Text]-\u003eSplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlElementName",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every element name, including the names of nested elements and names in end tags, to \u003cem\u003etrue\u003c/em\u003e, all the rest of\n input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlElementName",
        "fct-type": "function",
        "title": "xmlElementName"
      },
      "index": {
        "description": "Splits every element name including the names of nested elements and names in end tags to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlElementName",
        "normalized": "SplitterComponent a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Name",
        "signature": "SplitterComponent m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlParseTokens",
      "description": {
        "fct-descr": "\u003cp\u003eThe XML token parser. This parser converts plain text to parsed text, which is a precondition for using the\n remaining XML components.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "TransducerComponent m Text [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlParseTokens",
        "fct-type": "function",
        "title": "xmlParseTokens"
      },
      "index": {
        "description": "The XML token parser This parser converts plain text to parsed text which is precondition for using the remaining XML components",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlParseTokens",
        "normalized": "TransducerComponent a Text[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Parse Tokens",
        "signature": "TransducerComponent m Text[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Configurable.html#v:xmlTokens",
      "description": {
        "fct-descr": "\u003cp\u003eThis splitter splits XML markup from data content. It is used by \u003ccode\u003eparseXMLTokens\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Configurable",
        "fct-package": "scc",
        "fct-signature": "SplitterComponent m Text",
        "fct-source": "src/Control-Concurrent-SCC-Configurable.html#xmlTokens",
        "fct-type": "function",
        "title": "xmlTokens"
      },
      "index": {
        "description": "This splitter splits XML markup from data content It is used by parseXMLTokens",
        "hierarchy": "Control Concurrent SCC Configurable",
        "module": "Control.Concurrent.SCC.Configurable",
        "name": "xmlTokens",
        "normalized": "",
        "package": "scc",
        "partial": "Tokens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the entire SCC library except for low-level modules \u003ca\u003eControl.Concurrent.SCC.Streams\u003c/a\u003e and\n \u003ca\u003eControl.Concurrent.SCC.Types\u003c/a\u003e. The exported combinators run their components in parallel.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SCC-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "This module exports the entire SCC library except for low-level modules Control.Concurrent.SCC.Streams and Control.Concurrent.SCC.Types The exported combinators run their components in parallel",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "scc",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#t:Coercible",
      "description": {
        "fct-descr": "\u003cp\u003eTwo streams of \u003ccode\u003e\u003ca\u003eCoercible\u003c/a\u003e\u003c/code\u003e types can be unambigously converted one to another.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#Coercible",
        "fct-type": "class",
        "title": "Coercible"
      },
      "index": {
        "description": "Two streams of Coercible types can be unambigously converted one to another",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "Coercible",
        "normalized": "",
        "package": "scc",
        "partial": "Coercible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#t:JoinableComponentPair",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eJoinableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if both argument components consume input, the input of the combined component gets distributed to both\n      components in parallel, and\n\u003c/li\u003e\u003cli\u003e if both argument components produce output, the output of the combined component is a concatenation of the\n      complete output from the first component followed by the complete output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#JoinableComponentPair",
        "fct-type": "class",
        "title": "JoinableComponentPair"
      },
      "index": {
        "description": "Class JoinableComponentPair applies to any two components that can be combined into third component with the following properties if both argument components consume input the input of the combined component gets distributed to both components in parallel and if both argument components produce output the output of the combined component is concatenation of the complete output from the first component followed by the complete output of the second component",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "JoinableComponentPair",
        "normalized": "",
        "package": "scc",
        "partial": "Joinable Component Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#t:OccurenceTag",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003eparseSubstring\u003c/a\u003e\u003c/code\u003e to distinguish between overlapping substrings.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#OccurenceTag",
        "fct-type": "data",
        "title": "OccurenceTag"
      },
      "index": {
        "description": "Used by parseSubstring to distinguish between overlapping substrings",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "OccurenceTag",
        "normalized": "",
        "package": "scc",
        "partial": "Occurence Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#t:PipeableComponentPair",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003ePipeableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input of the result, if any, becomes the input of the first component.\n\u003c/li\u003e\u003cli\u003e The output produced by the first child component is consumed by the second child component.\n\u003c/li\u003e\u003cli\u003e The result output, if any, is the output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#PipeableComponentPair",
        "fct-type": "class",
        "title": "PipeableComponentPair"
      },
      "index": {
        "description": "Class PipeableComponentPair applies to any two components that can be combined into third component with the following properties The input of the result if any becomes the input of the first component The output produced by the first child component is consumed by the second child component The result output if any is the output of the second component",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "PipeableComponentPair",
        "normalized": "",
        "package": "scc",
        "partial": "Pipeable Component Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#t:XMLToken",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "data",
        "title": "XMLToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "XMLToken",
        "normalized": "",
        "package": "scc",
        "partial": "XMLToken",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e is a pairwise logical disjunction of two splitters run in parallel on the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#%7C%7C",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Combinator is pairwise logical disjunction of two splitters run in parallel on the same input",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "(||) ||",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e is a pairwise logical conjunction of two splitters run in parallel on the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#%26%26",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Combinator is pairwise logical conjunction of two splitters run in parallel on the same input",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "(&&) &&",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:-62--124-",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003e\u003e|\u003c/a\u003e\u003c/code\u003e combinator's input value can reach its \u003cem\u003efalse\u003c/em\u003e sink only by going through both argument splitters' \u003cem\u003efalse\u003c/em\u003e\n sinks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#%3E%7C",
        "fct-type": "function",
        "title": "(\u003e|)"
      },
      "index": {
        "description": "combinator input value can reach its false sink only by going through both argument splitters false sinks",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "(\u003e|) \u003e|",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:-62--38-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\u003e&\u003c/a\u003e\u003c/code\u003e combinator sends the \u003cem\u003etrue\u003c/em\u003e sink output of its left operand to the input of its right operand for further\n splitting. Both operands' \u003cem\u003efalse\u003c/em\u003e sinks are connected to the \u003cem\u003efalse\u003c/em\u003e sink of the combined splitter, but any input\n value to reach the \u003cem\u003etrue\u003c/em\u003e sink of the combined component data must be deemed true by both splitters.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#%3E%26",
        "fct-type": "function",
        "title": "(\u003e&)"
      },
      "index": {
        "description": "The combinator sends the true sink output of its left operand to the input of its right operand for further splitting Both operands false sinks are connected to the false sink of the combined splitter but any input value to reach the true sink of the combined component data must be deemed true by both splitters",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "(\u003e&) \u003e&",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003ePipeableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input of the result, if any, becomes the input of the first component.\n\u003c/li\u003e\u003cli\u003e The output produced by the first child component is consumed by the second child component.\n\u003c/li\u003e\u003cli\u003e The result output, if any, is the output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Class PipeableComponentPair applies to any two components that can be combined into third component with the following properties The input of the result if any becomes the input of the first component The output produced by the first child component is consumed by the second child component The result output if any is the output of the second component",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scc",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:...",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e...\u003c/a\u003e\u003c/code\u003e tracks the running balance of difference between the number of preceding starts of sections\n considered \u003cem\u003etrue\u003c/em\u003e according to its first argument and the ones according to its second argument. The combinator\n passes to \u003cem\u003etrue\u003c/em\u003e all input values for which the difference balance is positive. This combinator is typically used\n with \u003ccode\u003estartOf\u003c/code\u003e and \u003ccode\u003eendOf\u003c/code\u003e in order to count entire input sections and ignore their lengths.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#...",
        "fct-type": "function",
        "title": "(...)"
      },
      "index": {
        "description": "Combinator tracks the running balance of difference between the number of preceding starts of sections considered true according to its first argument and the ones according to its second argument The combinator passes to true all input values for which the difference balance is positive This combinator is typically used with startOf and endOf in order to count entire input sections and ignore their lengths",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "(...) ...",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:AttributeName",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "AttributeName",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "AttributeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "AttributeName",
        "normalized": "",
        "package": "scc",
        "partial": "Attribute Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:AttributeValue",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "AttributeValue",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "AttributeValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "AttributeValue",
        "normalized": "",
        "package": "scc",
        "partial": "Attribute Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:Comment",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Comment",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "Comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "Comment",
        "normalized": "",
        "package": "scc",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:CommentText",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "CommentText",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "CommentText"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "CommentText",
        "normalized": "",
        "package": "scc",
        "partial": "Comment Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:DoctypeDeclaration",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "DoctypeDeclaration",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "DoctypeDeclaration"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "DoctypeDeclaration",
        "normalized": "",
        "package": "scc",
        "partial": "Doctype Declaration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:ElementName",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "ElementName",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ElementName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "ElementName",
        "normalized": "",
        "package": "scc",
        "partial": "Element Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:EmptyTag",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "EmptyTag",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EmptyTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "EmptyTag",
        "normalized": "",
        "package": "scc",
        "partial": "Empty Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:EndMarkedSection",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "EndMarkedSection",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EndMarkedSection"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "EndMarkedSection",
        "normalized": "",
        "package": "scc",
        "partial": "End Marked Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:EndTag",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "EndTag",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EndTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "EndTag",
        "normalized": "",
        "package": "scc",
        "partial": "End Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:EntityName",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "EntityName",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EntityName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "EntityName",
        "normalized": "",
        "package": "scc",
        "partial": "Entity Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:EntityReference",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "EntityReference",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EntityReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "EntityReference",
        "normalized": "",
        "package": "scc",
        "partial": "Entity Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:ErrorToken",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "ErrorToken String",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ErrorToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "ErrorToken",
        "normalized": "",
        "package": "scc",
        "partial": "Error Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:ProcessingInstruction",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "ProcessingInstruction",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ProcessingInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "ProcessingInstruction",
        "normalized": "",
        "package": "scc",
        "partial": "Processing Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:ProcessingInstructionText",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "ProcessingInstructionText",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ProcessingInstructionText"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "ProcessingInstructionText",
        "normalized": "",
        "package": "scc",
        "partial": "Processing Instruction Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:StartMarkedSectionCDATA",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "StartMarkedSectionCDATA",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "StartMarkedSectionCDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "StartMarkedSectionCDATA",
        "normalized": "",
        "package": "scc",
        "partial": "Start Marked Section CDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:StartTag",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "StartTag",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "StartTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "StartTag",
        "normalized": "",
        "package": "scc",
        "partial": "Start Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:adaptConsumer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Consumer m y r -\u003e Consumer m x r",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#adaptConsumer",
        "fct-type": "method",
        "title": "adaptConsumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "adaptConsumer",
        "normalized": "Consumer a b c-\u003eConsumer a d c",
        "package": "scc",
        "partial": "Consumer",
        "signature": "Consumer m y r-\u003eConsumer m x r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:adaptProducer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Producer m x r -\u003e Producer m y r",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#adaptProducer",
        "fct-type": "method",
        "title": "adaptProducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "adaptProducer",
        "normalized": "Producer a b c-\u003eProducer a d c",
        "package": "scc",
        "partial": "Producer",
        "signature": "Producer m x r-\u003eProducer m y r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:adaptSplitter",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts the argument splitter to split the stream of a data type \u003ccode\u003eIsomorphic\u003c/code\u003e to the type it was meant to split.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m y",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#adaptSplitter",
        "fct-type": "function",
        "title": "adaptSplitter"
      },
      "index": {
        "description": "Adjusts the argument splitter to split the stream of data type Isomorphic to the type it was meant to split",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "adaptSplitter",
        "normalized": "Splitter a b-\u003eSplitter a c",
        "package": "scc",
        "partial": "Splitter",
        "signature": "Splitter m x-\u003eSplitter m y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e converts the given producer to a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that passes all its\n input through unmodified, finally appending the output of the argument producer to it. The following law holds: \u003ccode\u003e\n \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e \u003cem\u003esuffix\u003c/em\u003e = \u003ccode\u003ejoin\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e \u003cem\u003esuffix\u003c/em\u003e) \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Producer m x r -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Combinator append converts the given producer to Transducer that passes all its input through unmodified finally appending the output of the argument producer to it The following law holds append suffix join id substitute suffix",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "append",
        "normalized": "Producer a b c-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Producer m x r-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given source to the named text file.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Appends the given source to the named text file",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "appendFile",
        "normalized": "String-\u003eConsumer IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eConsumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:coerce",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that converts a stream of one type to another.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#coerce",
        "fct-type": "method",
        "title": "coerce"
      },
      "index": {
        "description": "Transducer that converts stream of one type to another",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "coerce",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:concatSeparate",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003econcatenate\u003c/a\u003e\u003c/code\u003e except it inserts the given separator list between every two input lists.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Transducer m [x] x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#concatSeparate",
        "fct-type": "function",
        "title": "concatSeparate"
      },
      "index": {
        "description": "Same as concatenate except it inserts the given separator list between every two input lists",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "concatSeparate",
        "normalized": "a-\u003eTransducer b[a]a",
        "package": "scc",
        "partial": "Separate",
        "signature": "x-\u003eTransducer m[x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:concatenate",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003econcatenate\u003c/a\u003e\u003c/code\u003e flattens the input stream of lists of values into the output stream of values.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m [x] x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#concatenate",
        "fct-type": "function",
        "title": "concatenate"
      },
      "index": {
        "description": "Transducer concatenate flattens the input stream of lists of values into the output stream of values",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "concatenate",
        "normalized": "Transducer a[b]b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m[x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:consumeBy",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e with no output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Consumer m x r -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#consumeBy",
        "fct-type": "function",
        "title": "consumeBy"
      },
      "index": {
        "description": "Converts Consumer into Transducer with no output",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "consumeBy",
        "normalized": "Consumer a b c-\u003eTransducer a b d",
        "package": "scc",
        "partial": "By",
        "signature": "Consumer m x r-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:consumeInto",
      "description": {
        "fct-descr": "\u003cp\u003eCollects the entire input source into the return value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Consumer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#consumeInto",
        "fct-type": "function",
        "title": "consumeInto"
      },
      "index": {
        "description": "Collects the entire input source into the return value",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "consumeInto",
        "normalized": "",
        "package": "scc",
        "partial": "Into",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:contentMarkedWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003econtentMarkedWith\u003c/a\u003e\u003c/code\u003e passes the content of input sections marked-up with the appropriate tag to\n its \u003cem\u003etrue\u003c/em\u003e sink, and the rest of the input to its \u003cem\u003efalse\u003c/em\u003e sink. The argument \u003cem\u003eselect\u003c/em\u003e determines if the tag is\n appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "(y -\u003e Bool) -\u003e Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#contentMarkedWith",
        "fct-type": "function",
        "title": "contentMarkedWith"
      },
      "index": {
        "description": "Splitter contentMarkedWith passes the content of input sections marked-up with the appropriate tag to its true sink and the rest of the input to its false sink The argument select determines if the tag is appropriate",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "contentMarkedWith",
        "normalized": "(a-\u003eBool)-\u003eSplitter b[Markup a c]",
        "package": "scc",
        "partial": "Marked With",
        "signature": "(y-\u003eBool)-\u003eSplitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e transducer counts all its input values and outputs the final tally.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m x [Integer]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "The count transducer counts all its input values and outputs the final tally",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "count",
        "normalized": "Transducer a b[Integer]",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:digits",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003edigits\u003c/a\u003e\u003c/code\u003e feeds all digits into its \u003cem\u003etrue\u003c/em\u003e sink, all other characters into \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#digits",
        "fct-type": "function",
        "title": "digits"
      },
      "index": {
        "description": "Splitter digits feeds all digits into its true sink all other characters into false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "digits",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:endOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eendOf\u003c/a\u003e\u003c/code\u003e issues an empty \u003cem\u003etrue\u003c/em\u003e section at the end of every section considered \u003cem\u003etrue\u003c/em\u003e by its argument\n splitter, otherwise the entire input goes into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#endOf",
        "fct-type": "function",
        "title": "endOf"
      },
      "index": {
        "description": "Splitter endOf issues an empty true section at the end of every section considered true by its argument splitter otherwise the entire input goes into its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "endOf",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "Of",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:erroneous",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eerroneous\u003c/a\u003e\u003c/code\u003e consumer reports an error if any input reaches it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Consumer m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#erroneous",
        "fct-type": "function",
        "title": "erroneous"
      },
      "index": {
        "description": "The erroneous consumer reports an error if any input reaches it",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "erroneous",
        "normalized": "String-\u003eConsumer a b()",
        "package": "scc",
        "partial": "",
        "signature": "String-\u003eConsumer m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:even",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e combinator takes every input section that its argument \u003cem\u003esplitter\u003c/em\u003e deems \u003cem\u003etrue\u003c/em\u003e, and feeds even ones into\n its \u003cem\u003etrue\u003c/em\u003e sink. The odd sections and parts of input that are \u003cem\u003efalse\u003c/em\u003e according to its argument splitter are fed to\n \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e splitter's \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "The even combinator takes every input section that its argument splitter deems true and feeds even ones into its true sink The odd sections and parts of input that are false according to its argument splitter are fed to even splitter false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "even",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:everything",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eeverything\u003c/a\u003e\u003c/code\u003e feeds its entire input into its \u003cem\u003etrue\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#everything",
        "fct-type": "function",
        "title": "everything"
      },
      "index": {
        "description": "Splitter everything feeds its entire input into its true sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "everything",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:expandXMLEntity",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an XML entity name into the text value it represents: \u003ccode\u003eexpandXMLEntity \"lt\" = \"\u003c\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#expandXMLEntity",
        "fct-type": "function",
        "title": "expandXMLEntity"
      },
      "index": {
        "description": "Converts an XML entity name into the text value it represents expandXMLEntity lt",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "expandXMLEntity",
        "normalized": "String-\u003eString",
        "package": "scc",
        "partial": "XMLEntity",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of combinator \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e behaves the same as the argument splitter up to and including the first portion of\n the input which goes into the argument's \u003cem\u003etrue\u003c/em\u003e sink. All input following the first true portion goes into the\n \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "The result of combinator first behaves the same as the argument splitter up to and including the first portion of the input which goes into the argument true sink All input following the first true portion goes into the false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "first",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:followedBy",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003efollowedBy\u003c/a\u003e\u003c/code\u003e treats its argument \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003es as patterns components and returns a \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e that\n matches their concatenation. A section of input is considered \u003cem\u003etrue\u003c/em\u003e by the result iff its prefix is considered\n \u003cem\u003etrue\u003c/em\u003e by argument \u003cem\u003es1\u003c/em\u003e and the rest of the section is considered \u003cem\u003etrue\u003c/em\u003e by \u003cem\u003es2\u003c/em\u003e. The splitter \u003cem\u003es2\u003c/em\u003e is started anew\n after every section split to \u003cem\u003etrue\u003c/em\u003e sink by \u003cem\u003es1\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#followedBy",
        "fct-type": "function",
        "title": "followedBy"
      },
      "index": {
        "description": "Combinator followedBy treats its argument Splitter as patterns components and returns Splitter that matches their concatenation section of input is considered true by the result iff its prefix is considered true by argument s1 and the rest of the section is considered true by s2 The splitter s2 is started anew after every section split to true sink by s1",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "followedBy",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "By",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:foreach",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforeach\u003c/a\u003e\u003c/code\u003e combinator is similar to the combinator \u003ccode\u003e\u003ca\u003eifs\u003c/a\u003e\u003c/code\u003e in that it combines a splitter and two transducers into\n another transducer. However, in this case the transducers are re-instantiated for each consecutive portion of the\n input as the splitter chunks it up. Each contiguous portion of the input that the splitter sends to one of its two\n sinks gets transducered through the appropriate argument transducer as that transducer's whole input. As soon as the\n contiguous portion is finished, the transducer gets terminated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#foreach",
        "fct-type": "function",
        "title": "foreach"
      },
      "index": {
        "description": "The foreach combinator is similar to the combinator ifs in that it combines splitter and two transducers into another transducer However in this case the transducers are re-instantiated for each consecutive portion of the input as the splitter chunks it up Each contiguous portion of the input that the splitter sends to one of its two sinks gets transducered through the appropriate argument transducer as that transducer whole input As soon as the contiguous portion is finished the transducer gets terminated",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "foreach",
        "normalized": "Splitter a b-\u003ec-\u003ec-\u003ec",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:fromBinaryHandle",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds the given sink from the open binary file \u003cem\u003ehandle\u003c/em\u003e. The argument \u003cem\u003echunkSize\u003c/em\u003e determines the size of the chunks\n read from the handle.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Int -\u003e Producer IO ByteString ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromBinaryHandle",
        "fct-type": "function",
        "title": "fromBinaryHandle"
      },
      "index": {
        "description": "Feeds the given sink from the open binary file handle The argument chunkSize determines the size of the chunks read from the handle",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "fromBinaryHandle",
        "normalized": "Handle-\u003eInt-\u003eProducer IO ByteString()",
        "package": "scc",
        "partial": "Binary Handle",
        "signature": "Handle-\u003eInt-\u003eProducer IO ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:fromFile",
      "description": {
        "fct-descr": "\u003cp\u003eReads the named file and feeds the given sink from its contents.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Producer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "Reads the named file and feeds the given sink from its contents",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "fromFile",
        "normalized": "String-\u003eProducer IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eProducer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:fromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds the given sink from the open text file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Producer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromHandle",
        "fct-type": "function",
        "title": "fromHandle"
      },
      "index": {
        "description": "Feeds the given sink from the open text file handle",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "fromHandle",
        "normalized": "Handle-\u003eProducer IO Text()",
        "package": "scc",
        "partial": "Handle",
        "signature": "Handle-\u003eProducer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:fromStdIn",
      "description": {
        "fct-descr": "\u003cp\u003eProducer \u003ccode\u003e\u003ca\u003efromStdIn\u003c/a\u003e\u003c/code\u003e feeds the given sink from the standard input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Producer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromStdIn",
        "fct-type": "function",
        "title": "fromStdIn"
      },
      "index": {
        "description": "Producer fromStdIn feeds the given sink from the standard input",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "fromStdIn",
        "normalized": "Producer IO Text()",
        "package": "scc",
        "partial": "Std In",
        "signature": "Producer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e collects all its input into a single list item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m x [x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Transducer group collects all its input into single list item",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "group",
        "normalized": "Transducer a b[b]",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:having",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e combinator combines two pure splitters into a pure splitter. One splitter is used to chunk the input\n into contiguous portions. Its \u003cem\u003efalse\u003c/em\u003e sink is routed directly to the \u003cem\u003efalse\u003c/em\u003e sink of the combined splitter. The\n second splitter is instantiated and run on each portion of the input that goes to first splitter's \u003cem\u003etrue\u003c/em\u003e sink. If\n the second splitter sends any output at all to its \u003cem\u003etrue\u003c/em\u003e sink, the whole input portion is passed on to the \u003cem\u003etrue\u003c/em\u003e\n sink of the combined splitter, otherwise it goes to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m y -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#having",
        "fct-type": "function",
        "title": "having"
      },
      "index": {
        "description": "The having combinator combines two pure splitters into pure splitter One splitter is used to chunk the input into contiguous portions Its false sink is routed directly to the false sink of the combined splitter The second splitter is instantiated and run on each portion of the input that goes to first splitter true sink If the second splitter sends any output at all to its true sink the whole input portion is passed on to the true sink of the combined splitter otherwise it goes to its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "having",
        "normalized": "Splitter a b-\u003eSplitter a c-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m y-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:havingOnly",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehavingOnly\u003c/a\u003e\u003c/code\u003e combinator is analogous to the \u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e combinator, but it succeeds and passes each chunk of the\n input to its \u003cem\u003etrue\u003c/em\u003e sink only if the second splitter sends no part of it to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m y -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#havingOnly",
        "fct-type": "function",
        "title": "havingOnly"
      },
      "index": {
        "description": "The havingOnly combinator is analogous to the having combinator but it succeeds and passes each chunk of the input to its true sink only if the second splitter sends no part of it to its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "havingOnly",
        "normalized": "Splitter a b-\u003eSplitter a c-\u003eSplitter a b",
        "package": "scc",
        "partial": "Only",
        "signature": "Splitter m x-\u003eSplitter m y-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:ifs",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#ifs",
        "fct-type": "function",
        "title": "ifs"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "ifs",
        "normalized": "Splitter a b-\u003ec-\u003ec-\u003ec",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e combinator may apply the components in any order.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "The join combinator may apply the components in any order",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "join",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scc",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the combinator \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e is a splitter which directs all input to its \u003cem\u003efalse\u003c/em\u003e sink, up to the last\n portion of the input which goes to its argument's \u003cem\u003etrue\u003c/em\u003e sink. That portion of the input is the only one that goes to\n the resulting component's \u003cem\u003etrue\u003c/em\u003e sink.  The splitter returned by the combinator \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e has to buffer the previous two\n portions of its input, because it cannot know if a true portion of the input is the last one until it sees the end of\n the input or another portion succeeding the previous one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "The result of the combinator last is splitter which directs all input to its false sink up to the last portion of the input which goes to its argument true sink That portion of the input is the only one that goes to the resulting component true sink The splitter returned by the combinator last has to buffer the previous two portions of its input because it cannot know if true portion of the input is the last one until it sees the end of the input or another portion succeeding the previous one",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "last",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:lastAndAfter",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the combinator \u003ccode\u003e\u003ca\u003elastAndAfter\u003c/a\u003e\u003c/code\u003e is a splitter which directs all input to its \u003cem\u003efalse\u003c/em\u003e sink, up to the\n last portion of the input which goes to its argument's \u003cem\u003etrue\u003c/em\u003e sink. That portion and the remainder of the input is\n fed to the resulting component's \u003cem\u003etrue\u003c/em\u003e sink. The difference between \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elastAndAfter\u003c/a\u003e\u003c/code\u003e combinators is where\n they feed the \u003cem\u003efalse\u003c/em\u003e portion of the input, if any, remaining after the last \u003cem\u003etrue\u003c/em\u003e part.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#lastAndAfter",
        "fct-type": "function",
        "title": "lastAndAfter"
      },
      "index": {
        "description": "The result of the combinator lastAndAfter is splitter which directs all input to its false sink up to the last portion of the input which goes to its argument true sink That portion and the remainder of the input is fed to the resulting component true sink The difference between last and lastAndAfter combinators is where they feed the false portion of the input if any remaining after the last true part",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "lastAndAfter",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "And After",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:letters",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eletters\u003c/a\u003e\u003c/code\u003e feeds all alphabetical characters into its \u003cem\u003etrue\u003c/em\u003e sink, all other characters into\n | \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#letters",
        "fct-type": "function",
        "title": "letters"
      },
      "index": {
        "description": "Splitter letters feeds all alphabetical characters into its true sink all other characters into false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "letters",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eThe sectioning splitter \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e feeds line-ends into its \u003cem\u003efalse\u003c/em\u003e sink, and line contents into \u003cem\u003etrue\u003c/em\u003e. A single\n line-end can be formed by any of the character sequences \"\\n\", \"\\r\", \"\\r\\n\", or \"\\n\\r\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "The sectioning splitter line feeds line-ends into its false sink and line contents into true single line-end can be formed by any of the character sequences or",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "line",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:lowercase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elowercase\u003c/a\u003e\u003c/code\u003e transforms all uppercase letters in the input to lowercase, leaving the rest unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m String String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#lowercase",
        "fct-type": "function",
        "title": "lowercase"
      },
      "index": {
        "description": "The lowercase transforms all uppercase letters in the input to lowercase leaving the rest unchanged",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "lowercase",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:marked",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003emarked\u003c/a\u003e\u003c/code\u003e passes all marked-up input sections to its \u003cem\u003etrue\u003c/em\u003e sink, and all unmarked input to its\n \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#marked",
        "fct-type": "function",
        "title": "marked"
      },
      "index": {
        "description": "Splitter marked passes all marked-up input sections to its true sink and all unmarked input to its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "marked",
        "normalized": "Splitter a[Markup b c]",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:markedContent",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003emarkedContent\u003c/a\u003e\u003c/code\u003e passes the content of all marked-up input sections to its \u003cem\u003etrue\u003c/em\u003e sink, takeWhile the\n outermost tags and all unmarked input go to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#markedContent",
        "fct-type": "function",
        "title": "markedContent"
      },
      "index": {
        "description": "Splitter markedContent passes the content of all marked-up input sections to its true sink takeWhile the outermost tags and all unmarked input go to its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "markedContent",
        "normalized": "Splitter a[Markup b c]",
        "package": "scc",
        "partial": "Content",
        "signature": "Splitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:markedWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003emarkedWith\u003c/a\u003e\u003c/code\u003e passes input sections marked-up with the appropriate tag to its \u003cem\u003etrue\u003c/em\u003e sink, and the\n rest of the input to its \u003cem\u003efalse\u003c/em\u003e sink. The argument \u003cem\u003eselect\u003c/em\u003e determines if the tag is appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "(y -\u003e Bool) -\u003e Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#markedWith",
        "fct-type": "function",
        "title": "markedWith"
      },
      "index": {
        "description": "Splitter markedWith passes input sections marked-up with the appropriate tag to its true sink and the rest of the input to its false sink The argument select determines if the tag is appropriate",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "markedWith",
        "normalized": "(a-\u003eBool)-\u003eSplitter b[Markup a c]",
        "package": "scc",
        "partial": "With",
        "signature": "(y-\u003eBool)-\u003eSplitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:nestedIn",
      "description": {
        "fct-descr": "\u003cp\u003eThe recursive combinator \u003ccode\u003e\u003ca\u003enestedIn\u003c/a\u003e\u003c/code\u003e combines two splitters into a mutually recursive loop acting as a single\n splitter. The true sink of one of the argument splitters and false sink of the other become the true and false sinks\n of the loop. The other two sinks are bound to the other splitter's source. The use of \u003ccode\u003e\u003ca\u003enestedIn\u003c/a\u003e\u003c/code\u003e makes sense only on\n hierarchically structured streams. If we gave it some input containing a flat sequence of values, and assuming both\n component splitters are deterministic and stateless, an input value would either not loop at all or it would loop\n forever.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#nestedIn",
        "fct-type": "function",
        "title": "nestedIn"
      },
      "index": {
        "description": "The recursive combinator nestedIn combines two splitters into mutually recursive loop acting as single splitter The true sink of one of the argument splitters and false sink of the other become the true and false sinks of the loop The other two sinks are bound to the other splitter source The use of nestedIn makes sense only on hierarchically structured streams If we gave it some input containing flat sequence of values and assuming both component splitters are deterministic and stateless an input value would either not loop at all or it would loop forever",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "nestedIn",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "In",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:nonEmptyLine",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003enonEmptyLine\u003c/a\u003e\u003c/code\u003e feeds line-ends into its \u003cem\u003efalse\u003c/em\u003e sink, and all other characters into \u003cem\u003etrue\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#nonEmptyLine",
        "fct-type": "function",
        "title": "nonEmptyLine"
      },
      "index": {
        "description": "Splitter nonEmptyLine feeds line-ends into its false sink and all other characters into true",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "nonEmptyLine",
        "normalized": "",
        "package": "scc",
        "partial": "Empty Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:nothing",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003enothing\u003c/a\u003e\u003c/code\u003e feeds its entire input into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "Splitter nothing feeds its entire input into its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "nothing",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eone\u003c/a\u003e\u003c/code\u003e feeds all input values to its \u003cem\u003etrue\u003c/em\u003e sink, treating every value as a separate section.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "Splitter one feeds all input values to its true sink treating every value as separate section",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "one",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e prepares input content for subsequent parsing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Parser m x y",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Transducer parse prepares input content for subsequent parsing",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "parse",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:parseRegions",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a splitter into a parser.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Parser m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#parseRegions",
        "fct-type": "function",
        "title": "parseRegions"
      },
      "index": {
        "description": "Converts splitter into parser",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "parseRegions",
        "normalized": "Splitter a b-\u003eParser a b()",
        "package": "scc",
        "partial": "Regions",
        "signature": "Splitter m x-\u003eParser m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:parseSubstring",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the same task as the \u003ccode\u003e\u003ca\u003esubstring\u003c/a\u003e\u003c/code\u003e splitter, but instead of splitting it outputs the input as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e x\n \u003ccode\u003e\u003ca\u003eOccurenceTag\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in order to distinguish overlapping strings.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Parser m x OccurenceTag",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#parseSubstring",
        "fct-type": "function",
        "title": "parseSubstring"
      },
      "index": {
        "description": "Performs the same task as the substring splitter but instead of splitting it outputs the input as Markup OccurenceTag in order to distinguish overlapping strings",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "parseSubstring",
        "normalized": "a-\u003eParser b a OccurenceTag",
        "package": "scc",
        "partial": "Substring",
        "signature": "x-\u003eParser m x OccurenceTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:parseXMLTokens",
      "description": {
        "fct-descr": "\u003cp\u003eThe XML token parser. This parser converts plain text to parsed text, which is a precondition for using the\n remaining XML components.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m Text [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#parseXMLTokens",
        "fct-type": "function",
        "title": "parseXMLTokens"
      },
      "index": {
        "description": "The XML token parser This parser converts plain text to parsed text which is precondition for using the remaining XML components",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "parseXMLTokens",
        "normalized": "Transducer a Text[Markup XMLToken Text]",
        "package": "scc",
        "partial": "XMLTokens",
        "signature": "Transducer m Text[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e combinator feeds its \u003cem\u003etrue\u003c/em\u003e sink only the prefix of the input that its argument feeds to its \u003cem\u003etrue\u003c/em\u003e\n sink.  All the rest of the input is dumped into the \u003cem\u003efalse\u003c/em\u003e sink of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "The prefix combinator feeds its true sink only the prefix of the input that its argument feeds to its true sink All the rest of the input is dumped into the false sink of the result",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "prefix",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:prepend",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e converts the given producer to a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that passes all its\n input through unmodified, except for prepending the output of the argument producer to it. The following law holds: \u003ccode\u003e\n \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprefix\u003c/em\u003e = \u003ccode\u003ejoin\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprefix\u003c/em\u003e) \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Producer m x r -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#prepend",
        "fct-type": "function",
        "title": "prepend"
      },
      "index": {
        "description": "Combinator prepend converts the given producer to Transducer that passes all its input through unmodified except for prepending the output of the argument producer to it The following law holds prepend prefix join substitute prefix id",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "prepend",
        "normalized": "Producer a b c-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Producer m x r-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:produceFrom",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the contents of the given argument.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Producer m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#produceFrom",
        "fct-type": "function",
        "title": "produceFrom"
      },
      "index": {
        "description": "Produces the contents of the given argument",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "produceFrom",
        "normalized": "a-\u003eProducer b a()",
        "package": "scc",
        "partial": "From",
        "signature": "x-\u003eProducer m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:sNot",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esNot\u003c/a\u003e\u003c/code\u003e (streaming not) combinator simply reverses the outputs of the argument splitter. In other words, data\n that the argument splitter sends to its \u003cem\u003etrue\u003c/em\u003e sink goes to the \u003cem\u003efalse\u003c/em\u003e sink of the result, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#sNot",
        "fct-type": "function",
        "title": "sNot"
      },
      "index": {
        "description": "The sNot streaming not combinator simply reverses the outputs of the argument splitter In other words data that the argument splitter sends to its true sink goes to the false sink of the result and vice versa",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "sNot",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "Not",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:select",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "select",
        "normalized": "Splitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e combinator makes sure its first argument has completed before using the second one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#sequence",
        "fct-type": "method",
        "title": "sequence"
      },
      "index": {
        "description": "The sequence combinator makes sure its first argument has completed before using the second one",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "sequence",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scc",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:splitterToMarker",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Transducer m x [(x, Bool)]",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#splitterToMarker",
        "fct-type": "function",
        "title": "splitterToMarker"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "splitterToMarker",
        "normalized": "Splitter a b-\u003eTransducer a b[(b,Bool)]",
        "package": "scc",
        "partial": "To Marker",
        "signature": "Splitter m x-\u003eTransducer m x[(x,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:startOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003estartOf\u003c/a\u003e\u003c/code\u003e issues an empty \u003cem\u003etrue\u003c/em\u003e section at the beginning of every section considered \u003cem\u003etrue\u003c/em\u003e by its\n argument splitter, otherwise the entire input goes into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#startOf",
        "fct-type": "function",
        "title": "startOf"
      },
      "index": {
        "description": "Splitter startOf issues an empty true section at the beginning of every section considered true by its argument splitter otherwise the entire input goes into its false sink",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "startOf",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "Of",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:substitute",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e combinator converts its argument producer to a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that\n produces the same output, while consuming its entire input and ignoring it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Producer m y r -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#substitute",
        "fct-type": "function",
        "title": "substitute"
      },
      "index": {
        "description": "The substitute combinator converts its argument producer to Transducer that produces the same output while consuming its entire input and ignoring it",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "substitute",
        "normalized": "Producer a b c-\u003eTransducer a d b",
        "package": "scc",
        "partial": "",
        "signature": "Producer m y r-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:substring",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003esubstring\u003c/a\u003e\u003c/code\u003e feeds to its \u003cem\u003etrue\u003c/em\u003e sink all input parts that match the contents of the given list\n argument. If two overlapping parts of the input both match the argument, both are sent to \u003cem\u003etrue\u003c/em\u003e and each is preceded\n by an empty chunk on \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#substring",
        "fct-type": "function",
        "title": "substring"
      },
      "index": {
        "description": "Splitter substring feeds to its true sink all input parts that match the contents of the given list argument If two overlapping parts of the input both match the argument both are sent to true and each is preceded by an empty chunk on false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "substring",
        "normalized": "a-\u003eSplitter b a",
        "package": "scc",
        "partial": "",
        "signature": "x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:suffix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esuffix\u003c/a\u003e\u003c/code\u003e combinator feeds its \u003cem\u003etrue\u003c/em\u003e sink only the suffix of the input that its argument feeds to its \u003cem\u003etrue\u003c/em\u003e\n sink.  All the rest of the input is dumped into the \u003cem\u003efalse\u003c/em\u003e sink of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#suffix",
        "fct-type": "function",
        "title": "suffix"
      },
      "index": {
        "description": "The suffix combinator feeds its true sink only the suffix of the input that its argument feeds to its true sink All the rest of the input is dumped into the false sink of the result",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "suffix",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:suppress",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esuppress\u003c/a\u003e\u003c/code\u003e consumer suppresses all input it receives. It is equivalent to \u003ccode\u003esubstitute\u003c/code\u003e []\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Consumer m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#suppress",
        "fct-type": "function",
        "title": "suppress"
      },
      "index": {
        "description": "The suppress consumer suppresses all input it receives It is equivalent to substitute",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "suppress",
        "normalized": "Consumer a b()",
        "package": "scc",
        "partial": "",
        "signature": "Consumer m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:toBinaryHandle",
      "description": {
        "fct-descr": "\u003cp\u003eCopies the given source into the open binary file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Consumer IO ByteString ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toBinaryHandle",
        "fct-type": "function",
        "title": "toBinaryHandle"
      },
      "index": {
        "description": "Copies the given source into the open binary file handle",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "toBinaryHandle",
        "normalized": "Handle-\u003eConsumer IO ByteString()",
        "package": "scc",
        "partial": "Binary Handle",
        "signature": "Handle-\u003eConsumer IO ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:toFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the named text file and writes the entire given source to it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toFile",
        "fct-type": "function",
        "title": "toFile"
      },
      "index": {
        "description": "Creates the named text file and writes the entire given source to it",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "toFile",
        "normalized": "String-\u003eConsumer IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eConsumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:toHandle",
      "description": {
        "fct-descr": "\u003cp\u003eCopies the given source into the open text file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toHandle",
        "fct-type": "function",
        "title": "toHandle"
      },
      "index": {
        "description": "Copies the given source into the open text file handle",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "toHandle",
        "normalized": "Handle-\u003eConsumer IO Text()",
        "package": "scc",
        "partial": "Handle",
        "signature": "Handle-\u003eConsumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:toStdOut",
      "description": {
        "fct-descr": "\u003cp\u003eConsumer \u003ccode\u003e\u003ca\u003etoStdOut\u003c/a\u003e\u003c/code\u003e copies the given source into the standard output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toStdOut",
        "fct-type": "function",
        "title": "toStdOut"
      },
      "index": {
        "description": "Consumer toStdOut copies the given source into the standard output",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "toStdOut",
        "normalized": "Consumer IO Text()",
        "package": "scc",
        "partial": "Std Out",
        "signature": "Consumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts each input value \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003eshow x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m [x] [String]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Converts each input value to show",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "toString",
        "normalized": "Transducer a[b][String]",
        "package": "scc",
        "partial": "String",
        "signature": "Transducer m[x][String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:unless",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m x x -\u003e Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "unless",
        "normalized": "Transducer a b b-\u003eSplitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x x-\u003eSplitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:unparse",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003eunparse\u003c/a\u003e\u003c/code\u003e removes all markup from its input and passes the content through.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m [Markup b x] x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#unparse",
        "fct-type": "function",
        "title": "unparse"
      },
      "index": {
        "description": "Transducer unparse removes all markup from its input and passes the content through",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "unparse",
        "normalized": "Transducer a[Markup b c]c",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m[Markup b x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:uppercase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003euppercase\u003c/a\u003e\u003c/code\u003e transforms all lowercase letters in the input to uppercase, leaving the rest unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m String String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#uppercase",
        "fct-type": "function",
        "title": "uppercase"
      },
      "index": {
        "description": "The uppercase transforms all lowercase letters in the input to uppercase leaving the rest unchanged",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "uppercase",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:uptoFirst",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of combinator \u003ccode\u003e\u003ca\u003euptoFirst\u003c/a\u003e\u003c/code\u003e takes all input up to and including the first portion of the input which goes\n into the argument's \u003cem\u003etrue\u003c/em\u003e sink and feeds it to the result splitter's \u003cem\u003etrue\u003c/em\u003e sink. All the rest of the input goes\n into the \u003cem\u003efalse\u003c/em\u003e sink. The only difference between \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euptoFirst\u003c/a\u003e\u003c/code\u003e combinators is in where they direct the\n \u003cem\u003efalse\u003c/em\u003e portion of the input preceding the first \u003cem\u003etrue\u003c/em\u003e part.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#uptoFirst",
        "fct-type": "function",
        "title": "uptoFirst"
      },
      "index": {
        "description": "The result of combinator uptoFirst takes all input up to and including the first portion of the input which goes into the argument true sink and feeds it to the result splitter true sink All the rest of the input goes into the false sink The only difference between first and uptoFirst combinators is in where they direct the false portion of the input preceding the first true part",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "uptoFirst",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "First",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:wherever",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m x x -\u003e Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#wherever",
        "fct-type": "function",
        "title": "wherever"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "wherever",
        "normalized": "Transducer a b b-\u003eSplitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x x-\u003eSplitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eThe recursive combinator \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e feeds the true sink of the argument splitter back to itself, modified by the\n argument transducer. Data fed to the splitter's false sink is passed on unmodified.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Transducer m x x -\u003e Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Parallel.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "The recursive combinator while feeds the true sink of the argument splitter back to itself modified by the argument transducer Data fed to the splitter false sink is passed on unmodified",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "while",
        "normalized": "Transducer a b b-\u003eSplitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x x-\u003eSplitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:whitespace",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003ewhitespace\u003c/a\u003e\u003c/code\u003e feeds all white-space characters into its \u003cem\u003etrue\u003c/em\u003e sink, all others into \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#whitespace",
        "fct-type": "function",
        "title": "whitespace"
      },
      "index": {
        "description": "Splitter whitespace feeds all white-space characters into its true sink all others into false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "whitespace",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute specification to \u003cem\u003etrue\u003c/em\u003e, everything else to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlAttribute",
        "fct-type": "function",
        "title": "xmlAttribute"
      },
      "index": {
        "description": "Splits every attribute specification to true everything else to false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlAttribute",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlAttributeName",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute name to \u003cem\u003etrue\u003c/em\u003e, all the rest of input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlAttributeName",
        "fct-type": "function",
        "title": "xmlAttributeName"
      },
      "index": {
        "description": "Splits every attribute name to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlAttributeName",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute Name",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlAttributeValue",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute value, excluding the quote delimiters, to \u003cem\u003etrue\u003c/em\u003e, all the rest of input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlAttributeValue",
        "fct-type": "function",
        "title": "xmlAttributeValue"
      },
      "index": {
        "description": "Splits every attribute value excluding the quote delimiters to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlAttributeValue",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute Value",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlElement",
      "description": {
        "fct-descr": "\u003cp\u003eSplits all top-level elements with all their content to \u003cem\u003etrue\u003c/em\u003e, all other input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElement",
        "fct-type": "function",
        "title": "xmlElement"
      },
      "index": {
        "description": "Splits all top-level elements with all their content to true all other input to false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlElement",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlElementContent",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the content of all top-level elements to \u003cem\u003etrue\u003c/em\u003e, their tags and intervening input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElementContent",
        "fct-type": "function",
        "title": "xmlElementContent"
      },
      "index": {
        "description": "Splits the content of all top-level elements to true their tags and intervening input to false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlElementContent",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Content",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlElementHavingTagWith",
      "description": {
        "fct-descr": "\u003cp\u003eSimiliar to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eelement\u003c/code\u003e)\u003c/code\u003e, except it runs the argument splitter\n only on each element's start tag, not on the entire element with its content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text] -\u003e Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElementHavingTagWith",
        "fct-type": "function",
        "title": "xmlElementHavingTagWith"
      },
      "index": {
        "description": "Similiar to having element except it runs the argument splitter only on each element start tag not on the entire element with its content",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlElementHavingTagWith",
        "normalized": "Splitter a[Markup XMLToken Text]-\u003eSplitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Having Tag With",
        "signature": "Splitter m[Markup XMLToken Text]-\u003eSplitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlElementName",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every element name, including the names of nested elements and names in end tags, to \u003cem\u003etrue\u003c/em\u003e, all the rest of\n input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElementName",
        "fct-type": "function",
        "title": "xmlElementName"
      },
      "index": {
        "description": "Splits every element name including the names of nested elements and names in end tags to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlElementName",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Name",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Parallel.html#v:xmlTokens",
      "description": {
        "fct-descr": "\u003cp\u003eXML markup splitter wrapping \u003ccode\u003e\u003ca\u003eparseXMLTokens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Parallel",
        "fct-package": "scc",
        "fct-signature": "Splitter m Text",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlTokens",
        "fct-type": "function",
        "title": "xmlTokens"
      },
      "index": {
        "description": "XML markup splitter wrapping parseXMLTokens",
        "hierarchy": "Control Concurrent SCC Parallel",
        "module": "Control.Concurrent.SCC.Parallel",
        "name": "xmlTokens",
        "normalized": "",
        "package": "scc",
        "partial": "Tokens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the entire SCC library except for low-level modules \u003ca\u003eControl.Concurrent.SCC.Streams\u003c/a\u003e and\n \u003ca\u003eControl.Concurrent.SCC.Types\u003c/a\u003e. The exported combinators run their components by sequentially interleaving them.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SCC-Sequential.html",
        "fct-type": "module",
        "title": "Sequential"
      },
      "index": {
        "description": "This module exports the entire SCC library except for low-level modules Control.Concurrent.SCC.Streams and Control.Concurrent.SCC.Types The exported combinators run their components by sequentially interleaving them",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "Sequential",
        "normalized": "",
        "package": "scc",
        "partial": "Sequential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#t:Coercible",
      "description": {
        "fct-descr": "\u003cp\u003eTwo streams of \u003ccode\u003e\u003ca\u003eCoercible\u003c/a\u003e\u003c/code\u003e types can be unambigously converted one to another.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#Coercible",
        "fct-type": "class",
        "title": "Coercible"
      },
      "index": {
        "description": "Two streams of Coercible types can be unambigously converted one to another",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "Coercible",
        "normalized": "",
        "package": "scc",
        "partial": "Coercible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#t:JoinableComponentPair",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eJoinableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if both argument components consume input, the input of the combined component gets distributed to both\n      components in parallel, and\n\u003c/li\u003e\u003cli\u003e if both argument components produce output, the output of the combined component is a concatenation of the\n      complete output from the first component followed by the complete output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#JoinableComponentPair",
        "fct-type": "class",
        "title": "JoinableComponentPair"
      },
      "index": {
        "description": "Class JoinableComponentPair applies to any two components that can be combined into third component with the following properties if both argument components consume input the input of the combined component gets distributed to both components in parallel and if both argument components produce output the output of the combined component is concatenation of the complete output from the first component followed by the complete output of the second component",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "JoinableComponentPair",
        "normalized": "",
        "package": "scc",
        "partial": "Joinable Component Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#t:OccurenceTag",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003eparseSubstring\u003c/a\u003e\u003c/code\u003e to distinguish between overlapping substrings.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#OccurenceTag",
        "fct-type": "data",
        "title": "OccurenceTag"
      },
      "index": {
        "description": "Used by parseSubstring to distinguish between overlapping substrings",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "OccurenceTag",
        "normalized": "",
        "package": "scc",
        "partial": "Occurence Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#t:PipeableComponentPair",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003ePipeableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input of the result, if any, becomes the input of the first component.\n\u003c/li\u003e\u003cli\u003e The output produced by the first child component is consumed by the second child component.\n\u003c/li\u003e\u003cli\u003e The result output, if any, is the output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#PipeableComponentPair",
        "fct-type": "class",
        "title": "PipeableComponentPair"
      },
      "index": {
        "description": "Class PipeableComponentPair applies to any two components that can be combined into third component with the following properties The input of the result if any becomes the input of the first component The output produced by the first child component is consumed by the second child component The result output if any is the output of the second component",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "PipeableComponentPair",
        "normalized": "",
        "package": "scc",
        "partial": "Pipeable Component Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#t:XMLToken",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "data",
        "title": "XMLToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "XMLToken",
        "normalized": "",
        "package": "scc",
        "partial": "XMLToken",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e is a pairwise logical disjunction of two splitters run in parallel on the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#%7C%7C",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Combinator is pairwise logical disjunction of two splitters run in parallel on the same input",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "(||) ||",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e is a pairwise logical conjunction of two splitters run in parallel on the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#%26%26",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Combinator is pairwise logical conjunction of two splitters run in parallel on the same input",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "(&&) &&",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:-62--124-",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003e\u003e|\u003c/a\u003e\u003c/code\u003e combinator's input value can reach its \u003cem\u003efalse\u003c/em\u003e sink only by going through both argument splitters' \u003cem\u003efalse\u003c/em\u003e\n sinks.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#%3E%7C",
        "fct-type": "function",
        "title": "(\u003e|)"
      },
      "index": {
        "description": "combinator input value can reach its false sink only by going through both argument splitters false sinks",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "(\u003e|) \u003e|",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:-62--38-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\u003e&\u003c/a\u003e\u003c/code\u003e combinator sends the \u003cem\u003etrue\u003c/em\u003e sink output of its left operand to the input of its right operand for further\n splitting. Both operands' \u003cem\u003efalse\u003c/em\u003e sinks are connected to the \u003cem\u003efalse\u003c/em\u003e sink of the combined splitter, but any input\n value to reach the \u003cem\u003etrue\u003c/em\u003e sink of the combined component data must be deemed true by both splitters.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#%3E%26",
        "fct-type": "function",
        "title": "(\u003e&)"
      },
      "index": {
        "description": "The combinator sends the true sink output of its left operand to the input of its right operand for further splitting Both operands false sinks are connected to the false sink of the combined splitter but any input value to reach the true sink of the combined component data must be deemed true by both splitters",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "(\u003e&) \u003e&",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003ePipeableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input of the result, if any, becomes the input of the first component.\n\u003c/li\u003e\u003cli\u003e The output produced by the first child component is consumed by the second child component.\n\u003c/li\u003e\u003cli\u003e The result output, if any, is the output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Class PipeableComponentPair applies to any two components that can be combined into third component with the following properties The input of the result if any becomes the input of the first component The output produced by the first child component is consumed by the second child component The result output if any is the output of the second component",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scc",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:...",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003e...\u003c/a\u003e\u003c/code\u003e tracks the running balance of difference between the number of preceding starts of sections\n considered \u003cem\u003etrue\u003c/em\u003e according to its first argument and the ones according to its second argument. The combinator\n passes to \u003cem\u003etrue\u003c/em\u003e all input values for which the difference balance is positive. This combinator is typically used\n with \u003ccode\u003estartOf\u003c/code\u003e and \u003ccode\u003eendOf\u003c/code\u003e in order to count entire input sections and ignore their lengths.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#...",
        "fct-type": "function",
        "title": "(...)"
      },
      "index": {
        "description": "Combinator tracks the running balance of difference between the number of preceding starts of sections considered true according to its first argument and the ones according to its second argument The combinator passes to true all input values for which the difference balance is positive This combinator is typically used with startOf and endOf in order to count entire input sections and ignore their lengths",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "(...) ...",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:AttributeName",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "AttributeName",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "AttributeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "AttributeName",
        "normalized": "",
        "package": "scc",
        "partial": "Attribute Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:AttributeValue",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "AttributeValue",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "AttributeValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "AttributeValue",
        "normalized": "",
        "package": "scc",
        "partial": "Attribute Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:Comment",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Comment",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "Comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "Comment",
        "normalized": "",
        "package": "scc",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:CommentText",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "CommentText",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "CommentText"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "CommentText",
        "normalized": "",
        "package": "scc",
        "partial": "Comment Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:DoctypeDeclaration",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "DoctypeDeclaration",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "DoctypeDeclaration"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "DoctypeDeclaration",
        "normalized": "",
        "package": "scc",
        "partial": "Doctype Declaration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:ElementName",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "ElementName",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ElementName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "ElementName",
        "normalized": "",
        "package": "scc",
        "partial": "Element Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:EmptyTag",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "EmptyTag",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EmptyTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "EmptyTag",
        "normalized": "",
        "package": "scc",
        "partial": "Empty Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:EndMarkedSection",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "EndMarkedSection",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EndMarkedSection"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "EndMarkedSection",
        "normalized": "",
        "package": "scc",
        "partial": "End Marked Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:EndTag",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "EndTag",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EndTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "EndTag",
        "normalized": "",
        "package": "scc",
        "partial": "End Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:EntityName",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "EntityName",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EntityName"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "EntityName",
        "normalized": "",
        "package": "scc",
        "partial": "Entity Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:EntityReference",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "EntityReference",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "EntityReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "EntityReference",
        "normalized": "",
        "package": "scc",
        "partial": "Entity Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:ErrorToken",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "ErrorToken String",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ErrorToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "ErrorToken",
        "normalized": "",
        "package": "scc",
        "partial": "Error Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:ProcessingInstruction",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "ProcessingInstruction",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ProcessingInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "ProcessingInstruction",
        "normalized": "",
        "package": "scc",
        "partial": "Processing Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:ProcessingInstructionText",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "ProcessingInstructionText",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "ProcessingInstructionText"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "ProcessingInstructionText",
        "normalized": "",
        "package": "scc",
        "partial": "Processing Instruction Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:StartMarkedSectionCDATA",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "StartMarkedSectionCDATA",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "StartMarkedSectionCDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "StartMarkedSectionCDATA",
        "normalized": "",
        "package": "scc",
        "partial": "Start Marked Section CDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:StartTag",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "StartTag",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#XMLToken",
        "fct-type": "function",
        "title": "StartTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "StartTag",
        "normalized": "",
        "package": "scc",
        "partial": "Start Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:adaptConsumer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Consumer m y r -\u003e Consumer m x r",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#adaptConsumer",
        "fct-type": "method",
        "title": "adaptConsumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "adaptConsumer",
        "normalized": "Consumer a b c-\u003eConsumer a d c",
        "package": "scc",
        "partial": "Consumer",
        "signature": "Consumer m y r-\u003eConsumer m x r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:adaptProducer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Producer m x r -\u003e Producer m y r",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#adaptProducer",
        "fct-type": "method",
        "title": "adaptProducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "adaptProducer",
        "normalized": "Producer a b c-\u003eProducer a d c",
        "package": "scc",
        "partial": "Producer",
        "signature": "Producer m x r-\u003eProducer m y r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:adaptSplitter",
      "description": {
        "fct-descr": "\u003cp\u003eAdjusts the argument splitter to split the stream of a data type \u003ccode\u003eIsomorphic\u003c/code\u003e to the type it was meant to split.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m y",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#adaptSplitter",
        "fct-type": "function",
        "title": "adaptSplitter"
      },
      "index": {
        "description": "Adjusts the argument splitter to split the stream of data type Isomorphic to the type it was meant to split",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "adaptSplitter",
        "normalized": "Splitter a b-\u003eSplitter a c",
        "package": "scc",
        "partial": "Splitter",
        "signature": "Splitter m x-\u003eSplitter m y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e converts the given producer to a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that passes all its\n input through unmodified, finally appending the output of the argument producer to it. The following law holds: \u003ccode\u003e\n \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e \u003cem\u003esuffix\u003c/em\u003e = \u003ccode\u003ejoin\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e \u003cem\u003esuffix\u003c/em\u003e) \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Producer m x r -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Combinator append converts the given producer to Transducer that passes all its input through unmodified finally appending the output of the argument producer to it The following law holds append suffix join id substitute suffix",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "append",
        "normalized": "Producer a b c-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Producer m x r-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the given source to the named text file.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Appends the given source to the named text file",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "appendFile",
        "normalized": "String-\u003eConsumer IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eConsumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:coerce",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that converts a stream of one type to another.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Coercions.html#coerce",
        "fct-type": "method",
        "title": "coerce"
      },
      "index": {
        "description": "Transducer that converts stream of one type to another",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "coerce",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:concatSeparate",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003econcatenate\u003c/a\u003e\u003c/code\u003e except it inserts the given separator list between every two input lists.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Transducer m [x] x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#concatSeparate",
        "fct-type": "function",
        "title": "concatSeparate"
      },
      "index": {
        "description": "Same as concatenate except it inserts the given separator list between every two input lists",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "concatSeparate",
        "normalized": "a-\u003eTransducer b[a]a",
        "package": "scc",
        "partial": "Separate",
        "signature": "x-\u003eTransducer m[x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:concatenate",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003econcatenate\u003c/a\u003e\u003c/code\u003e flattens the input stream of lists of values into the output stream of values.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m [x] x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#concatenate",
        "fct-type": "function",
        "title": "concatenate"
      },
      "index": {
        "description": "Transducer concatenate flattens the input stream of lists of values into the output stream of values",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "concatenate",
        "normalized": "Transducer a[b]b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m[x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:consumeBy",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e with no output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Consumer m x r -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#consumeBy",
        "fct-type": "function",
        "title": "consumeBy"
      },
      "index": {
        "description": "Converts Consumer into Transducer with no output",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "consumeBy",
        "normalized": "Consumer a b c-\u003eTransducer a b d",
        "package": "scc",
        "partial": "By",
        "signature": "Consumer m x r-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:consumeInto",
      "description": {
        "fct-descr": "\u003cp\u003eCollects the entire input source into the return value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Consumer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#consumeInto",
        "fct-type": "function",
        "title": "consumeInto"
      },
      "index": {
        "description": "Collects the entire input source into the return value",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "consumeInto",
        "normalized": "",
        "package": "scc",
        "partial": "Into",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:contentMarkedWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003econtentMarkedWith\u003c/a\u003e\u003c/code\u003e passes the content of input sections marked-up with the appropriate tag to\n its \u003cem\u003etrue\u003c/em\u003e sink, and the rest of the input to its \u003cem\u003efalse\u003c/em\u003e sink. The argument \u003cem\u003eselect\u003c/em\u003e determines if the tag is\n appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "(y -\u003e Bool) -\u003e Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#contentMarkedWith",
        "fct-type": "function",
        "title": "contentMarkedWith"
      },
      "index": {
        "description": "Splitter contentMarkedWith passes the content of input sections marked-up with the appropriate tag to its true sink and the rest of the input to its false sink The argument select determines if the tag is appropriate",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "contentMarkedWith",
        "normalized": "(a-\u003eBool)-\u003eSplitter b[Markup a c]",
        "package": "scc",
        "partial": "Marked With",
        "signature": "(y-\u003eBool)-\u003eSplitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e transducer counts all its input values and outputs the final tally.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m x [Integer]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "The count transducer counts all its input values and outputs the final tally",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "count",
        "normalized": "Transducer a b[Integer]",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:digits",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003edigits\u003c/a\u003e\u003c/code\u003e feeds all digits into its \u003cem\u003etrue\u003c/em\u003e sink, all other characters into \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#digits",
        "fct-type": "function",
        "title": "digits"
      },
      "index": {
        "description": "Splitter digits feeds all digits into its true sink all other characters into false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "digits",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:endOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eendOf\u003c/a\u003e\u003c/code\u003e issues an empty \u003cem\u003etrue\u003c/em\u003e section at the end of every section considered \u003cem\u003etrue\u003c/em\u003e by its argument\n splitter, otherwise the entire input goes into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#endOf",
        "fct-type": "function",
        "title": "endOf"
      },
      "index": {
        "description": "Splitter endOf issues an empty true section at the end of every section considered true by its argument splitter otherwise the entire input goes into its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "endOf",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "Of",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:erroneous",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eerroneous\u003c/a\u003e\u003c/code\u003e consumer reports an error if any input reaches it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Consumer m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#erroneous",
        "fct-type": "function",
        "title": "erroneous"
      },
      "index": {
        "description": "The erroneous consumer reports an error if any input reaches it",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "erroneous",
        "normalized": "String-\u003eConsumer a b()",
        "package": "scc",
        "partial": "",
        "signature": "String-\u003eConsumer m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:even",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e combinator takes every input section that its argument \u003cem\u003esplitter\u003c/em\u003e deems \u003cem\u003etrue\u003c/em\u003e, and feeds even ones into\n its \u003cem\u003etrue\u003c/em\u003e sink. The odd sections and parts of input that are \u003cem\u003efalse\u003c/em\u003e according to its argument splitter are fed to\n \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e splitter's \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "The even combinator takes every input section that its argument splitter deems true and feeds even ones into its true sink The odd sections and parts of input that are false according to its argument splitter are fed to even splitter false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "even",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:everything",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eeverything\u003c/a\u003e\u003c/code\u003e feeds its entire input into its \u003cem\u003etrue\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#everything",
        "fct-type": "function",
        "title": "everything"
      },
      "index": {
        "description": "Splitter everything feeds its entire input into its true sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "everything",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:expandXMLEntity",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an XML entity name into the text value it represents: \u003ccode\u003eexpandXMLEntity \"lt\" = \"\u003c\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#expandXMLEntity",
        "fct-type": "function",
        "title": "expandXMLEntity"
      },
      "index": {
        "description": "Converts an XML entity name into the text value it represents expandXMLEntity lt",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "expandXMLEntity",
        "normalized": "String-\u003eString",
        "package": "scc",
        "partial": "XMLEntity",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of combinator \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e behaves the same as the argument splitter up to and including the first portion of\n the input which goes into the argument's \u003cem\u003etrue\u003c/em\u003e sink. All input following the first true portion goes into the\n \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "The result of combinator first behaves the same as the argument splitter up to and including the first portion of the input which goes into the argument true sink All input following the first true portion goes into the false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "first",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:followedBy",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003efollowedBy\u003c/a\u003e\u003c/code\u003e treats its argument \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003es as patterns components and returns a \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e that\n matches their concatenation. A section of input is considered \u003cem\u003etrue\u003c/em\u003e by the result iff its prefix is considered\n \u003cem\u003etrue\u003c/em\u003e by argument \u003cem\u003es1\u003c/em\u003e and the rest of the section is considered \u003cem\u003etrue\u003c/em\u003e by \u003cem\u003es2\u003c/em\u003e. The splitter \u003cem\u003es2\u003c/em\u003e is started anew\n after every section split to \u003cem\u003etrue\u003c/em\u003e sink by \u003cem\u003es1\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#followedBy",
        "fct-type": "function",
        "title": "followedBy"
      },
      "index": {
        "description": "Combinator followedBy treats its argument Splitter as patterns components and returns Splitter that matches their concatenation section of input is considered true by the result iff its prefix is considered true by argument s1 and the rest of the section is considered true by s2 The splitter s2 is started anew after every section split to true sink by s1",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "followedBy",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "By",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:foreach",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforeach\u003c/a\u003e\u003c/code\u003e combinator is similar to the combinator \u003ccode\u003e\u003ca\u003eifs\u003c/a\u003e\u003c/code\u003e in that it combines a splitter and two transducers into\n another transducer. However, in this case the transducers are re-instantiated for each consecutive portion of the\n input as the splitter chunks it up. Each contiguous portion of the input that the splitter sends to one of its two\n sinks gets transducered through the appropriate argument transducer as that transducer's whole input. As soon as the\n contiguous portion is finished, the transducer gets terminated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#foreach",
        "fct-type": "function",
        "title": "foreach"
      },
      "index": {
        "description": "The foreach combinator is similar to the combinator ifs in that it combines splitter and two transducers into another transducer However in this case the transducers are re-instantiated for each consecutive portion of the input as the splitter chunks it up Each contiguous portion of the input that the splitter sends to one of its two sinks gets transducered through the appropriate argument transducer as that transducer whole input As soon as the contiguous portion is finished the transducer gets terminated",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "foreach",
        "normalized": "Splitter a b-\u003ec-\u003ec-\u003ec",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:fromBinaryHandle",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds the given sink from the open binary file \u003cem\u003ehandle\u003c/em\u003e. The argument \u003cem\u003echunkSize\u003c/em\u003e determines the size of the chunks\n read from the handle.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Int -\u003e Producer IO ByteString ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromBinaryHandle",
        "fct-type": "function",
        "title": "fromBinaryHandle"
      },
      "index": {
        "description": "Feeds the given sink from the open binary file handle The argument chunkSize determines the size of the chunks read from the handle",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "fromBinaryHandle",
        "normalized": "Handle-\u003eInt-\u003eProducer IO ByteString()",
        "package": "scc",
        "partial": "Binary Handle",
        "signature": "Handle-\u003eInt-\u003eProducer IO ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:fromFile",
      "description": {
        "fct-descr": "\u003cp\u003eReads the named file and feeds the given sink from its contents.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Producer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "Reads the named file and feeds the given sink from its contents",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "fromFile",
        "normalized": "String-\u003eProducer IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eProducer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:fromHandle",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds the given sink from the open text file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Producer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromHandle",
        "fct-type": "function",
        "title": "fromHandle"
      },
      "index": {
        "description": "Feeds the given sink from the open text file handle",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "fromHandle",
        "normalized": "Handle-\u003eProducer IO Text()",
        "package": "scc",
        "partial": "Handle",
        "signature": "Handle-\u003eProducer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:fromStdIn",
      "description": {
        "fct-descr": "\u003cp\u003eProducer \u003ccode\u003e\u003ca\u003efromStdIn\u003c/a\u003e\u003c/code\u003e feeds the given sink from the standard input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Producer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#fromStdIn",
        "fct-type": "function",
        "title": "fromStdIn"
      },
      "index": {
        "description": "Producer fromStdIn feeds the given sink from the standard input",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "fromStdIn",
        "normalized": "Producer IO Text()",
        "package": "scc",
        "partial": "Std In",
        "signature": "Producer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e collects all its input into a single list item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m x [x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Transducer group collects all its input into single list item",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "group",
        "normalized": "Transducer a b[b]",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:having",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e combinator combines two pure splitters into a pure splitter. One splitter is used to chunk the input\n into contiguous portions. Its \u003cem\u003efalse\u003c/em\u003e sink is routed directly to the \u003cem\u003efalse\u003c/em\u003e sink of the combined splitter. The\n second splitter is instantiated and run on each portion of the input that goes to first splitter's \u003cem\u003etrue\u003c/em\u003e sink. If\n the second splitter sends any output at all to its \u003cem\u003etrue\u003c/em\u003e sink, the whole input portion is passed on to the \u003cem\u003etrue\u003c/em\u003e\n sink of the combined splitter, otherwise it goes to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m y -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#having",
        "fct-type": "function",
        "title": "having"
      },
      "index": {
        "description": "The having combinator combines two pure splitters into pure splitter One splitter is used to chunk the input into contiguous portions Its false sink is routed directly to the false sink of the combined splitter The second splitter is instantiated and run on each portion of the input that goes to first splitter true sink If the second splitter sends any output at all to its true sink the whole input portion is passed on to the true sink of the combined splitter otherwise it goes to its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "having",
        "normalized": "Splitter a b-\u003eSplitter a c-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m y-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:havingOnly",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehavingOnly\u003c/a\u003e\u003c/code\u003e combinator is analogous to the \u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e combinator, but it succeeds and passes each chunk of the\n input to its \u003cem\u003etrue\u003c/em\u003e sink only if the second splitter sends no part of it to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m y -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#havingOnly",
        "fct-type": "function",
        "title": "havingOnly"
      },
      "index": {
        "description": "The havingOnly combinator is analogous to the having combinator but it succeeds and passes each chunk of the input to its true sink only if the second splitter sends no part of it to its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "havingOnly",
        "normalized": "Splitter a b-\u003eSplitter a c-\u003eSplitter a b",
        "package": "scc",
        "partial": "Only",
        "signature": "Splitter m x-\u003eSplitter m y-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:ifs",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#ifs",
        "fct-type": "function",
        "title": "ifs"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "ifs",
        "normalized": "Splitter a b-\u003ec-\u003ec-\u003ec",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e combinator may apply the components in any order.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "The join combinator may apply the components in any order",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "join",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scc",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the combinator \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e is a splitter which directs all input to its \u003cem\u003efalse\u003c/em\u003e sink, up to the last\n portion of the input which goes to its argument's \u003cem\u003etrue\u003c/em\u003e sink. That portion of the input is the only one that goes to\n the resulting component's \u003cem\u003etrue\u003c/em\u003e sink.  The splitter returned by the combinator \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e has to buffer the previous two\n portions of its input, because it cannot know if a true portion of the input is the last one until it sees the end of\n the input or another portion succeeding the previous one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "The result of the combinator last is splitter which directs all input to its false sink up to the last portion of the input which goes to its argument true sink That portion of the input is the only one that goes to the resulting component true sink The splitter returned by the combinator last has to buffer the previous two portions of its input because it cannot know if true portion of the input is the last one until it sees the end of the input or another portion succeeding the previous one",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "last",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:lastAndAfter",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of the combinator \u003ccode\u003e\u003ca\u003elastAndAfter\u003c/a\u003e\u003c/code\u003e is a splitter which directs all input to its \u003cem\u003efalse\u003c/em\u003e sink, up to the\n last portion of the input which goes to its argument's \u003cem\u003etrue\u003c/em\u003e sink. That portion and the remainder of the input is\n fed to the resulting component's \u003cem\u003etrue\u003c/em\u003e sink. The difference between \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elastAndAfter\u003c/a\u003e\u003c/code\u003e combinators is where\n they feed the \u003cem\u003efalse\u003c/em\u003e portion of the input, if any, remaining after the last \u003cem\u003etrue\u003c/em\u003e part.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#lastAndAfter",
        "fct-type": "function",
        "title": "lastAndAfter"
      },
      "index": {
        "description": "The result of the combinator lastAndAfter is splitter which directs all input to its false sink up to the last portion of the input which goes to its argument true sink That portion and the remainder of the input is fed to the resulting component true sink The difference between last and lastAndAfter combinators is where they feed the false portion of the input if any remaining after the last true part",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "lastAndAfter",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "And After",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:letters",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eletters\u003c/a\u003e\u003c/code\u003e feeds all alphabetical characters into its \u003cem\u003etrue\u003c/em\u003e sink, all other characters into\n | \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#letters",
        "fct-type": "function",
        "title": "letters"
      },
      "index": {
        "description": "Splitter letters feeds all alphabetical characters into its true sink all other characters into false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "letters",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eThe sectioning splitter \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e feeds line-ends into its \u003cem\u003efalse\u003c/em\u003e sink, and line contents into \u003cem\u003etrue\u003c/em\u003e. A single\n line-end can be formed by any of the character sequences \"\\n\", \"\\r\", \"\\r\\n\", or \"\\n\\r\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "The sectioning splitter line feeds line-ends into its false sink and line contents into true single line-end can be formed by any of the character sequences or",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "line",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:lowercase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elowercase\u003c/a\u003e\u003c/code\u003e transforms all uppercase letters in the input to lowercase, leaving the rest unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m String String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#lowercase",
        "fct-type": "function",
        "title": "lowercase"
      },
      "index": {
        "description": "The lowercase transforms all uppercase letters in the input to lowercase leaving the rest unchanged",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "lowercase",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:marked",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003emarked\u003c/a\u003e\u003c/code\u003e passes all marked-up input sections to its \u003cem\u003etrue\u003c/em\u003e sink, and all unmarked input to its\n \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#marked",
        "fct-type": "function",
        "title": "marked"
      },
      "index": {
        "description": "Splitter marked passes all marked-up input sections to its true sink and all unmarked input to its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "marked",
        "normalized": "Splitter a[Markup b c]",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:markedContent",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003emarkedContent\u003c/a\u003e\u003c/code\u003e passes the content of all marked-up input sections to its \u003cem\u003etrue\u003c/em\u003e sink, takeWhile the\n outermost tags and all unmarked input go to its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#markedContent",
        "fct-type": "function",
        "title": "markedContent"
      },
      "index": {
        "description": "Splitter markedContent passes the content of all marked-up input sections to its true sink takeWhile the outermost tags and all unmarked input go to its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "markedContent",
        "normalized": "Splitter a[Markup b c]",
        "package": "scc",
        "partial": "Content",
        "signature": "Splitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:markedWith",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003emarkedWith\u003c/a\u003e\u003c/code\u003e passes input sections marked-up with the appropriate tag to its \u003cem\u003etrue\u003c/em\u003e sink, and the\n rest of the input to its \u003cem\u003efalse\u003c/em\u003e sink. The argument \u003cem\u003eselect\u003c/em\u003e determines if the tag is appropriate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "(y -\u003e Bool) -\u003e Splitter m [Markup y x]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#markedWith",
        "fct-type": "function",
        "title": "markedWith"
      },
      "index": {
        "description": "Splitter markedWith passes input sections marked-up with the appropriate tag to its true sink and the rest of the input to its false sink The argument select determines if the tag is appropriate",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "markedWith",
        "normalized": "(a-\u003eBool)-\u003eSplitter b[Markup a c]",
        "package": "scc",
        "partial": "With",
        "signature": "(y-\u003eBool)-\u003eSplitter m[Markup y x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:nestedIn",
      "description": {
        "fct-descr": "\u003cp\u003eThe recursive combinator \u003ccode\u003e\u003ca\u003enestedIn\u003c/a\u003e\u003c/code\u003e combines two splitters into a mutually recursive loop acting as a single\n splitter. The true sink of one of the argument splitters and false sink of the other become the true and false sinks\n of the loop. The other two sinks are bound to the other splitter's source. The use of \u003ccode\u003e\u003ca\u003enestedIn\u003c/a\u003e\u003c/code\u003e makes sense only on\n hierarchically structured streams. If we gave it some input containing a flat sequence of values, and assuming both\n component splitters are deterministic and stateless, an input value would either not loop at all or it would loop\n forever.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#nestedIn",
        "fct-type": "function",
        "title": "nestedIn"
      },
      "index": {
        "description": "The recursive combinator nestedIn combines two splitters into mutually recursive loop acting as single splitter The true sink of one of the argument splitters and false sink of the other become the true and false sinks of the loop The other two sinks are bound to the other splitter source The use of nestedIn makes sense only on hierarchically structured streams If we gave it some input containing flat sequence of values and assuming both component splitters are deterministic and stateless an input value would either not loop at all or it would loop forever",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "nestedIn",
        "normalized": "Splitter a b-\u003eSplitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "In",
        "signature": "Splitter m x-\u003eSplitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:nonEmptyLine",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003enonEmptyLine\u003c/a\u003e\u003c/code\u003e feeds line-ends into its \u003cem\u003efalse\u003c/em\u003e sink, and all other characters into \u003cem\u003etrue\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#nonEmptyLine",
        "fct-type": "function",
        "title": "nonEmptyLine"
      },
      "index": {
        "description": "Splitter nonEmptyLine feeds line-ends into its false sink and all other characters into true",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "nonEmptyLine",
        "normalized": "",
        "package": "scc",
        "partial": "Empty Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:nothing",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003enothing\u003c/a\u003e\u003c/code\u003e feeds its entire input into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "Splitter nothing feeds its entire input into its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "nothing",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003eone\u003c/a\u003e\u003c/code\u003e feeds all input values to its \u003cem\u003etrue\u003c/em\u003e sink, treating every value as a separate section.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "Splitter one feeds all input values to its true sink treating every value as separate section",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "one",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e prepares input content for subsequent parsing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Parser m x y",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Transducer parse prepares input content for subsequent parsing",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "parse",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:parseRegions",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a splitter into a parser.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Parser m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#parseRegions",
        "fct-type": "function",
        "title": "parseRegions"
      },
      "index": {
        "description": "Converts splitter into parser",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "parseRegions",
        "normalized": "Splitter a b-\u003eParser a b()",
        "package": "scc",
        "partial": "Regions",
        "signature": "Splitter m x-\u003eParser m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:parseSubstring",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the same task as the \u003ccode\u003e\u003ca\u003esubstring\u003c/a\u003e\u003c/code\u003e splitter, but instead of splitting it outputs the input as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e x\n \u003ccode\u003e\u003ca\u003eOccurenceTag\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in order to distinguish overlapping strings.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Parser m x OccurenceTag",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#parseSubstring",
        "fct-type": "function",
        "title": "parseSubstring"
      },
      "index": {
        "description": "Performs the same task as the substring splitter but instead of splitting it outputs the input as Markup OccurenceTag in order to distinguish overlapping strings",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "parseSubstring",
        "normalized": "a-\u003eParser b a OccurenceTag",
        "package": "scc",
        "partial": "Substring",
        "signature": "x-\u003eParser m x OccurenceTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:parseXMLTokens",
      "description": {
        "fct-descr": "\u003cp\u003eThe XML token parser. This parser converts plain text to parsed text, which is a precondition for using the\n remaining XML components.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m Text [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#parseXMLTokens",
        "fct-type": "function",
        "title": "parseXMLTokens"
      },
      "index": {
        "description": "The XML token parser This parser converts plain text to parsed text which is precondition for using the remaining XML components",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "parseXMLTokens",
        "normalized": "Transducer a Text[Markup XMLToken Text]",
        "package": "scc",
        "partial": "XMLTokens",
        "signature": "Transducer m Text[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e combinator feeds its \u003cem\u003etrue\u003c/em\u003e sink only the prefix of the input that its argument feeds to its \u003cem\u003etrue\u003c/em\u003e\n sink.  All the rest of the input is dumped into the \u003cem\u003efalse\u003c/em\u003e sink of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "The prefix combinator feeds its true sink only the prefix of the input that its argument feeds to its true sink All the rest of the input is dumped into the false sink of the result",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "prefix",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:prepend",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e converts the given producer to a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that passes all its\n input through unmodified, except for prepending the output of the argument producer to it. The following law holds: \u003ccode\u003e\n \u003ccode\u003e\u003ca\u003eprepend\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprefix\u003c/em\u003e = \u003ccode\u003ejoin\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprefix\u003c/em\u003e) \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Producer m x r -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#prepend",
        "fct-type": "function",
        "title": "prepend"
      },
      "index": {
        "description": "Combinator prepend converts the given producer to Transducer that passes all its input through unmodified except for prepending the output of the argument producer to it The following law holds prepend prefix join substitute prefix id",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "prepend",
        "normalized": "Producer a b c-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Producer m x r-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:produceFrom",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the contents of the given argument.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Producer m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#produceFrom",
        "fct-type": "function",
        "title": "produceFrom"
      },
      "index": {
        "description": "Produces the contents of the given argument",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "produceFrom",
        "normalized": "a-\u003eProducer b a()",
        "package": "scc",
        "partial": "From",
        "signature": "x-\u003eProducer m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:sNot",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esNot\u003c/a\u003e\u003c/code\u003e (streaming not) combinator simply reverses the outputs of the argument splitter. In other words, data\n that the argument splitter sends to its \u003cem\u003etrue\u003c/em\u003e sink goes to the \u003cem\u003efalse\u003c/em\u003e sink of the result, and vice versa.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#sNot",
        "fct-type": "function",
        "title": "sNot"
      },
      "index": {
        "description": "The sNot streaming not combinator simply reverses the outputs of the argument splitter In other words data that the argument splitter sends to its true sink goes to the false sink of the result and vice versa",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "sNot",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "Not",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:select",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "select",
        "normalized": "Splitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e combinator makes sure its first argument has completed before using the second one.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#sequence",
        "fct-type": "method",
        "title": "sequence"
      },
      "index": {
        "description": "The sequence combinator makes sure its first argument has completed before using the second one",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "sequence",
        "normalized": "a-\u003ea-\u003ea",
        "package": "scc",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:splitterToMarker",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Transducer m x [(x, Bool)]",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#splitterToMarker",
        "fct-type": "function",
        "title": "splitterToMarker"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "splitterToMarker",
        "normalized": "Splitter a b-\u003eTransducer a b[(b,Bool)]",
        "package": "scc",
        "partial": "To Marker",
        "signature": "Splitter m x-\u003eTransducer m x[(x,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:startOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003estartOf\u003c/a\u003e\u003c/code\u003e issues an empty \u003cem\u003etrue\u003c/em\u003e section at the beginning of every section considered \u003cem\u003etrue\u003c/em\u003e by its\n argument splitter, otherwise the entire input goes into its \u003cem\u003efalse\u003c/em\u003e sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#startOf",
        "fct-type": "function",
        "title": "startOf"
      },
      "index": {
        "description": "Splitter startOf issues an empty true section at the beginning of every section considered true by its argument splitter otherwise the entire input goes into its false sink",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "startOf",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "Of",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:substitute",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003e combinator converts its argument producer to a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e that\n produces the same output, while consuming its entire input and ignoring it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Producer m y r -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#substitute",
        "fct-type": "function",
        "title": "substitute"
      },
      "index": {
        "description": "The substitute combinator converts its argument producer to Transducer that produces the same output while consuming its entire input and ignoring it",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "substitute",
        "normalized": "Producer a b c-\u003eTransducer a d b",
        "package": "scc",
        "partial": "",
        "signature": "Producer m y r-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:substring",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003esubstring\u003c/a\u003e\u003c/code\u003e feeds to its \u003cem\u003etrue\u003c/em\u003e sink all input parts that match the contents of the given list\n argument. If two overlapping parts of the input both match the argument, both are sent to \u003cem\u003etrue\u003c/em\u003e and each is preceded\n by an empty chunk on \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#substring",
        "fct-type": "function",
        "title": "substring"
      },
      "index": {
        "description": "Splitter substring feeds to its true sink all input parts that match the contents of the given list argument If two overlapping parts of the input both match the argument both are sent to true and each is preceded by an empty chunk on false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "substring",
        "normalized": "a-\u003eSplitter b a",
        "package": "scc",
        "partial": "",
        "signature": "x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:suffix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esuffix\u003c/a\u003e\u003c/code\u003e combinator feeds its \u003cem\u003etrue\u003c/em\u003e sink only the suffix of the input that its argument feeds to its \u003cem\u003etrue\u003c/em\u003e\n sink.  All the rest of the input is dumped into the \u003cem\u003efalse\u003c/em\u003e sink of the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#suffix",
        "fct-type": "function",
        "title": "suffix"
      },
      "index": {
        "description": "The suffix combinator feeds its true sink only the suffix of the input that its argument feeds to its true sink All the rest of the input is dumped into the false sink of the result",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "suffix",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:suppress",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esuppress\u003c/a\u003e\u003c/code\u003e consumer suppresses all input it receives. It is equivalent to \u003ccode\u003esubstitute\u003c/code\u003e []\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Consumer m x ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#suppress",
        "fct-type": "function",
        "title": "suppress"
      },
      "index": {
        "description": "The suppress consumer suppresses all input it receives It is equivalent to substitute",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "suppress",
        "normalized": "Consumer a b()",
        "package": "scc",
        "partial": "",
        "signature": "Consumer m x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:toBinaryHandle",
      "description": {
        "fct-descr": "\u003cp\u003eCopies the given source into the open binary file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Consumer IO ByteString ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toBinaryHandle",
        "fct-type": "function",
        "title": "toBinaryHandle"
      },
      "index": {
        "description": "Copies the given source into the open binary file handle",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "toBinaryHandle",
        "normalized": "Handle-\u003eConsumer IO ByteString()",
        "package": "scc",
        "partial": "Binary Handle",
        "signature": "Handle-\u003eConsumer IO ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:toFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the named text file and writes the entire given source to it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "String -\u003e Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toFile",
        "fct-type": "function",
        "title": "toFile"
      },
      "index": {
        "description": "Creates the named text file and writes the entire given source to it",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "toFile",
        "normalized": "String-\u003eConsumer IO Text()",
        "package": "scc",
        "partial": "File",
        "signature": "String-\u003eConsumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:toHandle",
      "description": {
        "fct-descr": "\u003cp\u003eCopies the given source into the open text file \u003cem\u003ehandle\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Handle -\u003e Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toHandle",
        "fct-type": "function",
        "title": "toHandle"
      },
      "index": {
        "description": "Copies the given source into the open text file handle",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "toHandle",
        "normalized": "Handle-\u003eConsumer IO Text()",
        "package": "scc",
        "partial": "Handle",
        "signature": "Handle-\u003eConsumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:toStdOut",
      "description": {
        "fct-descr": "\u003cp\u003eConsumer \u003ccode\u003e\u003ca\u003etoStdOut\u003c/a\u003e\u003c/code\u003e copies the given source into the standard output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Consumer IO Text ()",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toStdOut",
        "fct-type": "function",
        "title": "toStdOut"
      },
      "index": {
        "description": "Consumer toStdOut copies the given source into the standard output",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "toStdOut",
        "normalized": "Consumer IO Text()",
        "package": "scc",
        "partial": "Std Out",
        "signature": "Consumer IO Text()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts each input value \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003eshow x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m [x] [String]",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Converts each input value to show",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "toString",
        "normalized": "Transducer a[b][String]",
        "package": "scc",
        "partial": "String",
        "signature": "Transducer m[x][String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:unless",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m x x -\u003e Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#unless",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "unless",
        "normalized": "Transducer a b b-\u003eSplitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x x-\u003eSplitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:unparse",
      "description": {
        "fct-descr": "\u003cp\u003eTransducer \u003ccode\u003e\u003ca\u003eunparse\u003c/a\u003e\u003c/code\u003e removes all markup from its input and passes the content through.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m [Markup b x] x",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#unparse",
        "fct-type": "function",
        "title": "unparse"
      },
      "index": {
        "description": "Transducer unparse removes all markup from its input and passes the content through",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "unparse",
        "normalized": "Transducer a[Markup b c]c",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m[Markup b x]x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:uppercase",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003euppercase\u003c/a\u003e\u003c/code\u003e transforms all lowercase letters in the input to uppercase, leaving the rest unchanged.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m String String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#uppercase",
        "fct-type": "function",
        "title": "uppercase"
      },
      "index": {
        "description": "The uppercase transforms all lowercase letters in the input to uppercase leaving the rest unchanged",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "uppercase",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:uptoFirst",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of combinator \u003ccode\u003e\u003ca\u003euptoFirst\u003c/a\u003e\u003c/code\u003e takes all input up to and including the first portion of the input which goes\n into the argument's \u003cem\u003etrue\u003c/em\u003e sink and feeds it to the result splitter's \u003cem\u003etrue\u003c/em\u003e sink. All the rest of the input goes\n into the \u003cem\u003efalse\u003c/em\u003e sink. The only difference between \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euptoFirst\u003c/a\u003e\u003c/code\u003e combinators is in where they direct the\n \u003cem\u003efalse\u003c/em\u003e portion of the input preceding the first \u003cem\u003etrue\u003c/em\u003e part.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m x -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators.html#uptoFirst",
        "fct-type": "function",
        "title": "uptoFirst"
      },
      "index": {
        "description": "The result of combinator uptoFirst takes all input up to and including the first portion of the input which goes into the argument true sink and feeds it to the result splitter true sink All the rest of the input goes into the false sink The only difference between first and uptoFirst combinators is in where they direct the false portion of the input preceding the first true part",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "uptoFirst",
        "normalized": "Splitter a b-\u003eSplitter a b",
        "package": "scc",
        "partial": "First",
        "signature": "Splitter m x-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:wherever",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m x x -\u003e Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#wherever",
        "fct-type": "function",
        "title": "wherever"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "wherever",
        "normalized": "Transducer a b b-\u003eSplitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x x-\u003eSplitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eThe recursive combinator \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e feeds the true sink of the argument splitter back to itself, modified by the\n argument transducer. Data fed to the splitter's false sink is passed on unmodified.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Transducer m x x -\u003e Splitter m x -\u003e Transducer m x x",
        "fct-source": "src/Control-Concurrent-SCC-Combinators-Sequential.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "The recursive combinator while feeds the true sink of the argument splitter back to itself modified by the argument transducer Data fed to the splitter false sink is passed on unmodified",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "while",
        "normalized": "Transducer a b b-\u003eSplitter a b-\u003eTransducer a b b",
        "package": "scc",
        "partial": "",
        "signature": "Transducer m x x-\u003eSplitter m x-\u003eTransducer m x x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:whitespace",
      "description": {
        "fct-descr": "\u003cp\u003eSplitter \u003ccode\u003e\u003ca\u003ewhitespace\u003c/a\u003e\u003c/code\u003e feeds all white-space characters into its \u003cem\u003etrue\u003c/em\u003e sink, all others into \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m String",
        "fct-source": "src/Control-Concurrent-SCC-Primitives.html#whitespace",
        "fct-type": "function",
        "title": "whitespace"
      },
      "index": {
        "description": "Splitter whitespace feeds all white-space characters into its true sink all others into false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "whitespace",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlAttribute",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute specification to \u003cem\u003etrue\u003c/em\u003e, everything else to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlAttribute",
        "fct-type": "function",
        "title": "xmlAttribute"
      },
      "index": {
        "description": "Splits every attribute specification to true everything else to false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlAttribute",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlAttributeName",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute name to \u003cem\u003etrue\u003c/em\u003e, all the rest of input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlAttributeName",
        "fct-type": "function",
        "title": "xmlAttributeName"
      },
      "index": {
        "description": "Splits every attribute name to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlAttributeName",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute Name",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlAttributeValue",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every attribute value, excluding the quote delimiters, to \u003cem\u003etrue\u003c/em\u003e, all the rest of input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlAttributeValue",
        "fct-type": "function",
        "title": "xmlAttributeValue"
      },
      "index": {
        "description": "Splits every attribute value excluding the quote delimiters to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlAttributeValue",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Attribute Value",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlElement",
      "description": {
        "fct-descr": "\u003cp\u003eSplits all top-level elements with all their content to \u003cem\u003etrue\u003c/em\u003e, all other input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElement",
        "fct-type": "function",
        "title": "xmlElement"
      },
      "index": {
        "description": "Splits all top-level elements with all their content to true all other input to false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlElement",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlElementContent",
      "description": {
        "fct-descr": "\u003cp\u003eSplits the content of all top-level elements to \u003cem\u003etrue\u003c/em\u003e, their tags and intervening input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElementContent",
        "fct-type": "function",
        "title": "xmlElementContent"
      },
      "index": {
        "description": "Splits the content of all top-level elements to true their tags and intervening input to false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlElementContent",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Content",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlElementHavingTagWith",
      "description": {
        "fct-descr": "\u003cp\u003eSimiliar to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ehaving\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eelement\u003c/code\u003e)\u003c/code\u003e, except it runs the argument splitter\n only on each element's start tag, not on the entire element with its content.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text] -\u003e Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElementHavingTagWith",
        "fct-type": "function",
        "title": "xmlElementHavingTagWith"
      },
      "index": {
        "description": "Similiar to having element except it runs the argument splitter only on each element start tag not on the entire element with its content",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlElementHavingTagWith",
        "normalized": "Splitter a[Markup XMLToken Text]-\u003eSplitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Having Tag With",
        "signature": "Splitter m[Markup XMLToken Text]-\u003eSplitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlElementName",
      "description": {
        "fct-descr": "\u003cp\u003eSplits every element name, including the names of nested elements and names in end tags, to \u003cem\u003etrue\u003c/em\u003e, all the rest of\n input to \u003cem\u003efalse\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m [Markup XMLToken Text]",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlElementName",
        "fct-type": "function",
        "title": "xmlElementName"
      },
      "index": {
        "description": "Splits every element name including the names of nested elements and names in end tags to true all the rest of input to false",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlElementName",
        "normalized": "Splitter a[Markup XMLToken Text]",
        "package": "scc",
        "partial": "Element Name",
        "signature": "Splitter m[Markup XMLToken Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Sequential.html#v:xmlTokens",
      "description": {
        "fct-descr": "\u003cp\u003eXML markup splitter wrapping \u003ccode\u003e\u003ca\u003eparseXMLTokens\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Sequential",
        "fct-package": "scc",
        "fct-signature": "Splitter m Text",
        "fct-source": "src/Control-Concurrent-SCC-XML.html#xmlTokens",
        "fct-type": "function",
        "title": "xmlTokens"
      },
      "index": {
        "description": "XML markup splitter wrapping parseXMLTokens",
        "hierarchy": "Control Concurrent SCC Sequential",
        "module": "Control.Concurrent.SCC.Sequential",
        "name": "xmlTokens",
        "normalized": "",
        "package": "scc",
        "partial": "Tokens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e types and \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e functions that create them. The method \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e\n abstracts away \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e, and the method \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e is a higher-level\n abstraction of \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e. With this arrangement, a single coroutine can\n yield values to multiple sinks and await values from multiple sources with no need to change the\n \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e functor. The only requirement is that each functor of the sources and sinks the\n coroutine uses must be an \u003ccode\u003e\u003ca\u003eAncestorFunctor\u003c/a\u003e\u003c/code\u003e of the coroutine's own functor. For\n example, a coroutine that takes two sources and one sink might be declared like this:\n\u003c/p\u003e\u003cpre\u003e\n zip :: forall m a1 a2 a3 d x y. (Monad m, AncestorFunctor a1 d, AncestorFunctor a2 d, AncestorFunctor a3 d)\n        =\u003e Source m a1 [x] -\u003e Source m a2 [y] -\u003e Sink m a3 [(x, y)] -\u003e Coroutine d m ()\n\u003c/pre\u003e\u003cp\u003eSources, sinks, and coroutines communicating through them are all created using the \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e function or one of its\n variants. They effectively split the current coroutine into a producer-consumer coroutine pair. The producer gets a\n new \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to write to and the consumer a new \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e to read from, in addition to all the streams they inherit from\n the current coroutine. The following function, for example, uses the \u003cem\u003ezip\u003c/em\u003e coroutine declard above to add together\n the pairs of values from two Integer sources:\n\u003c/p\u003e\u003cpre\u003e\n add :: forall m a1 a2 a3 d. (Monad m, AncestorFunctor a1 d, AncestorFunctor a2 d, AncestorFunctor a3 d)\n        =\u003e Source m a1 [Integer] -\u003e Source m a2 [Integer] -\u003e Sink m a3 [Integer] -\u003e Coroutine d m ()\n add source1 source2 sink = do pipe\n                                  (pairSink-\u003e zip source1 source2 pairSink)                         -- producer\n                                  (pairSource-\u003e mapStream (List.map $ uncurry (+)) pairSource sink) -- consumer\n                               return ()\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html",
        "fct-type": "module",
        "title": "Streams"
      },
      "index": {
        "description": "This module defines Source and Sink types and pipe functions that create them The method get on Source abstracts away await and the method put on Sink is higher-level abstraction of yield With this arrangement single coroutine can yield values to multiple sinks and await values from multiple sources with no need to change the Coroutine functor The only requirement is that each functor of the sources and sinks the coroutine uses must be an AncestorFunctor of the coroutine own functor For example coroutine that takes two sources and one sink might be declared like this zip forall a1 a2 a3 Monad AncestorFunctor a1 AncestorFunctor a2 AncestorFunctor a3 Source a1 Source a2 Sink a3 Coroutine Sources sinks and coroutines communicating through them are all created using the pipe function or one of its variants They effectively split the current coroutine into producer-consumer coroutine pair The producer gets new Sink to write to and the consumer new Source to read from in addition to all the streams they inherit from the current coroutine The following function for example uses the zip coroutine declard above to add together the pairs of values from two Integer sources add forall a1 a2 a3 Monad AncestorFunctor a1 AncestorFunctor a2 AncestorFunctor a3 Source a1 Integer Source a2 Integer Sink a3 Integer Coroutine add source1 source2 sink do pipe pairSink zip source1 source2 pairSink producer pairSource mapStream List.map uncurry pairSource sink consumer return",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Streams",
        "normalized": "",
        "package": "scc",
        "partial": "Streams",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:AncestorFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eClass of functors that can be lifted.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "AncestorFunctor"
      },
      "index": {
        "description": "Class of functors that can be lifted",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "AncestorFunctor",
        "normalized": "",
        "package": "scc",
        "partial": "Ancestor Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:Reader",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Reader",
        "normalized": "",
        "package": "scc",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:Reading",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Reading"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Reading",
        "normalized": "",
        "package": "scc",
        "partial": "Reading",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:ReadingResult",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ReadingResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "ReadingResult",
        "normalized": "",
        "package": "scc",
        "partial": "Reading Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e can be used to yield output from any nested \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e computation whose functor provably descends from\n the functor \u003cem\u003ea\u003c/em\u003e. It's the write-only end of a communication channel created by \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#Sink",
        "fct-type": "data",
        "title": "Sink"
      },
      "index": {
        "description": "Sink can be used to yield output from any nested Coroutine computation whose functor provably descends from the functor It the write-only end of communication channel created by pipe",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Sink",
        "normalized": "",
        "package": "scc",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:SinkFunctor",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#SinkFunctor",
        "fct-type": "type",
        "title": "SinkFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "SinkFunctor",
        "normalized": "",
        "package": "scc",
        "partial": "Sink Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e can be used to read input into any nested \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e computation whose functor provably descends from\n the functor \u003cem\u003ea\u003c/em\u003e. It's the read-only end of a communication channel created by \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#Source",
        "fct-type": "data",
        "title": "Source"
      },
      "index": {
        "description": "Source can be used to read input into any nested Coroutine computation whose functor provably descends from the functor It the read-only end of communication channel created by pipe",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Source",
        "normalized": "",
        "package": "scc",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#t:SourceFunctor",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#SourceFunctor",
        "fct-type": "type",
        "title": "SourceFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "SourceFunctor",
        "normalized": "",
        "package": "scc",
        "partial": "Source Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:Advance",
      "description": {
        "fct-descr": "\u003cp\u003eA part of the result with the reader of more input and the EOF\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Advance (Reader x py y) y py",
        "fct-type": "function",
        "title": "Advance"
      },
      "index": {
        "description": "part of the result with the reader of more input and the EOF",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Advance",
        "normalized": "",
        "package": "scc",
        "partial": "Advance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:Deferred",
      "description": {
        "fct-descr": "\u003cp\u003eReader of more input, plus the result if there isn't any.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Deferred (Reader x py y) y",
        "fct-type": "function",
        "title": "Deferred"
      },
      "index": {
        "description": "Reader of more input plus the result if there isn any",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Deferred",
        "normalized": "",
        "package": "scc",
        "partial": "Deferred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:Final",
      "description": {
        "fct-descr": "\u003cp\u003eFinal result chunk with the unconsumed portion of the input\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Final x y",
        "fct-type": "function",
        "title": "Final"
      },
      "index": {
        "description": "Final result chunk with the unconsumed portion of the input",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "Final",
        "normalized": "",
        "package": "scc",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:FinalResult",
      "description": {
        "fct-descr": "\u003cp\u003eFinal result chunk\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "FinalResult y",
        "fct-type": "function",
        "title": "FinalResult"
      },
      "index": {
        "description": "Final result chunk",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "FinalResult",
        "normalized": "",
        "package": "scc",
        "partial": "Final Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:ResultPart",
      "description": {
        "fct-descr": "\u003cp\u003eA part of the result with the reader of more input\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "ResultPart py (Reader x py y)",
        "fct-type": "function",
        "title": "ResultPart"
      },
      "index": {
        "description": "part of the result with the reader of more input",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "ResultPart",
        "normalized": "",
        "package": "scc",
        "partial": "Result Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:concatMapAccumStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatMapAccumStream\u003c/a\u003e\u003c/code\u003e is a love child of \u003ccode\u003e\u003ca\u003econcatMapStream\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emapAccumStream\u003c/a\u003e\u003c/code\u003e: it threads the accumulator like\n the latter, but its argument function returns not a single value, but a list of values to write into the sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e x -\u003e (acc, [y])) -\u003e acc -\u003e Source m a1 [x] -\u003e Sink m a2 [y] -\u003e Coroutine d m acc",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#concatMapAccumStream",
        "fct-type": "function",
        "title": "concatMapAccumStream"
      },
      "index": {
        "description": "concatMapAccumStream is love child of concatMapStream and mapAccumStream it threads the accumulator like the latter but its argument function returns not single value but list of values to write into the sink",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "concatMapAccumStream",
        "normalized": "(a-\u003eb-\u003e(a,[c]))-\u003ea-\u003eSource d e[b]-\u003eSink d e[c]-\u003eCoroutine f d a",
        "package": "scc",
        "partial": "Map Accum Stream",
        "signature": "(acc-\u003ex-\u003e(acc,[y]))-\u003eacc-\u003eSource m a[x]-\u003eSink m a[y]-\u003eCoroutine d m acc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:concatMapStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatMapStream\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Source m a1 [x] -\u003e Sink m a2 y -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#concatMapStream",
        "fct-type": "function",
        "title": "concatMapStream"
      },
      "index": {
        "description": "concatMapStream is to mapStream like concatMap is to map",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "concatMapStream",
        "normalized": "(a-\u003eb)-\u003eSource c d[a]-\u003eSink c d b-\u003eCoroutine e c()",
        "package": "scc",
        "partial": "Map Stream",
        "signature": "(x-\u003ey)-\u003eSource m a[x]-\u003eSink m a y-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:filterMStream",
      "description": {
        "fct-descr": "\u003cp\u003eAn equivalent of \u003ccode\u003e\u003ca\u003efilterM\u003c/a\u003e\u003c/code\u003e. Draws the values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list, writes the filtered\n values to a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e, and returns a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Coroutine d m Bool) -\u003e Source m a1 x -\u003e Sink m a2 x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#filterMStream",
        "fct-type": "function",
        "title": "filterMStream"
      },
      "index": {
        "description": "An equivalent of filterM Draws the values from Source instead of list writes the filtered values to Sink and returns Coroutine",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "filterMStream",
        "normalized": "(a-\u003eCoroutine b c Bool)-\u003eSource c d a-\u003eSink c d a-\u003eCoroutine b c()",
        "package": "scc",
        "partial": "MStream",
        "signature": "(x-\u003eCoroutine d m Bool)-\u003eSource m a x-\u003eSink m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:foldMStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldMStream\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e except it draws the values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list and\n works with \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e instead of an arbitrary monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e x -\u003e Coroutine d m acc) -\u003e acc -\u003e Source m a [x] -\u003e Coroutine d m acc",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#foldMStream",
        "fct-type": "function",
        "title": "foldMStream"
      },
      "index": {
        "description": "foldMStream is similar to foldM except it draws the values from Source instead of list and works with Coroutine instead of an arbitrary monad",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "foldMStream",
        "normalized": "(a-\u003eb-\u003eCoroutine c d a)-\u003ea-\u003eSource d e[b]-\u003eCoroutine c d a",
        "package": "scc",
        "partial": "MStream",
        "signature": "(acc-\u003ex-\u003eCoroutine d m acc)-\u003eacc-\u003eSource m a[x]-\u003eCoroutine d m acc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:foldMStream_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldMStream\u003c/a\u003e\u003c/code\u003e that discards the final result value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e x -\u003e Coroutine d m acc) -\u003e acc -\u003e Source m a [x] -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#foldMStream_",
        "fct-type": "function",
        "title": "foldMStream_"
      },
      "index": {
        "description": "variant of foldMStream that discards the final result value",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "foldMStream_",
        "normalized": "(a-\u003eb-\u003eCoroutine c d a)-\u003ea-\u003eSource d e[b]-\u003eCoroutine c d()",
        "package": "scc",
        "partial": "MStream",
        "signature": "(acc-\u003ex-\u003eCoroutine d m acc)-\u003eacc-\u003eSource m a[x]-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:foldStream",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but reads the values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e x -\u003e acc) -\u003e acc -\u003e Source m a x -\u003e Coroutine d m acc",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#foldStream",
        "fct-type": "function",
        "title": "foldStream"
      },
      "index": {
        "description": "Similar to foldl but reads the values from Source instead of list",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "foldStream",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSource c d b-\u003eCoroutine e c a",
        "package": "scc",
        "partial": "Stream",
        "signature": "(acc-\u003ex-\u003eacc)-\u003eacc-\u003eSource m a x-\u003eCoroutine d m acc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e tries to get a single value from the given \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e argument. The intervening \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e\n computations suspend all the way to the \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e function invocation that created the source. The function returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the argument source is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a [x] -\u003e Coroutine d m (Maybe x)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Function get tries to get single value from the given Source argument The intervening Coroutine computations suspend all the way to the pipe function invocation that created the source The function returns Nothing if the argument source is empty",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "get",
        "normalized": "Source a b[c]-\u003eCoroutine d a(Maybe c)",
        "package": "scc",
        "partial": "",
        "signature": "Source m a[x]-\u003eCoroutine d m(Maybe x)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e consumes and returns all data generated by the source.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a x -\u003e Coroutine d m x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getAll",
        "fct-type": "function",
        "title": "getAll"
      },
      "index": {
        "description": "getAll consumes and returns all data generated by the source",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getAll",
        "normalized": "Source a b c-\u003eCoroutine d a c",
        "package": "scc",
        "partial": "All",
        "signature": "Source m a x-\u003eCoroutine d m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getParsed",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes inputs from the \u003cem\u003esource\u003c/em\u003e as long as the \u003cem\u003eparser\u003c/em\u003e accepts it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Parser p x y -\u003e Source m a x -\u003e Coroutine d m y",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getParsed",
        "fct-type": "function",
        "title": "getParsed"
      },
      "index": {
        "description": "Consumes inputs from the source as long as the parser accepts it",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getParsed",
        "normalized": "Parser a b c-\u003eSource d e b-\u003eCoroutine f d c",
        "package": "scc",
        "partial": "Parsed",
        "signature": "Parser p x y-\u003eSource m a x-\u003eCoroutine d m y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getPrime",
      "description": {
        "fct-descr": "\u003cp\u003eTries to get a minimal, \u003cem\u003ei.e.\u003c/em\u003e, prime, prefix from the given \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e argument. The intervening \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e\n computations suspend all the way to the \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e function invocation that created the source. The function returns\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e if the argument source is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a x -\u003e Coroutine d m x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getPrime",
        "fct-type": "function",
        "title": "getPrime"
      },
      "index": {
        "description": "Tries to get minimal i.e prime prefix from the given Source argument The intervening Coroutine computations suspend all the way to the pipe function invocation that created the source The function returns mempty if the argument source is empty",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getPrime",
        "normalized": "Source a b c-\u003eCoroutine d a c",
        "package": "scc",
        "partial": "Prime",
        "signature": "Source m a x-\u003eCoroutine d m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getRead",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes input from the \u003cem\u003esource\u003c/em\u003e as long as the \u003cem\u003ereader\u003c/em\u003e accepts it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Reader x (y -\u003e y) y -\u003e Source m a x -\u003e Coroutine d m y",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getRead",
        "fct-type": "function",
        "title": "getRead"
      },
      "index": {
        "description": "Consumes input from the source as long as the reader accepts it",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getRead",
        "normalized": "Reader a(b-\u003eb)b-\u003eSource c d a-\u003eCoroutine e c b",
        "package": "scc",
        "partial": "Read",
        "signature": "Reader x(y-\u003ey)y-\u003eSource m a x-\u003eCoroutine d m y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getUntil",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes values from the \u003cem\u003esource\u003c/em\u003e until one of them satisfies the predicate or the source is emptied, then returns\n the pair of the list of preceding values and maybe the one value that satisfied the predicate. The latter is not\n consumed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Bool) -\u003e Source m a x -\u003e Coroutine d m (x, Maybe x)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getUntil",
        "fct-type": "function",
        "title": "getUntil"
      },
      "index": {
        "description": "Consumes values from the source until one of them satisfies the predicate or the source is emptied then returns the pair of the list of preceding values and maybe the one value that satisfied the predicate The latter is not consumed",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getUntil",
        "normalized": "(a-\u003eBool)-\u003eSource b c a-\u003eCoroutine d b(a,Maybe a)",
        "package": "scc",
        "partial": "Until",
        "signature": "(x-\u003eBool)-\u003eSource m a x-\u003eCoroutine d m(x,Maybe x)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getWhile",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes values from the \u003cem\u003esource\u003c/em\u003e as long as each satisfies the predicate, then returns their list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Bool) -\u003e Source m a x -\u003e Coroutine d m x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getWhile",
        "fct-type": "function",
        "title": "getWhile"
      },
      "index": {
        "description": "Consumes values from the source as long as each satisfies the predicate then returns their list",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getWhile",
        "normalized": "(a-\u003eBool)-\u003eSource b c a-\u003eCoroutine d b a",
        "package": "scc",
        "partial": "While",
        "signature": "(x-\u003eBool)-\u003eSource m a x-\u003eCoroutine d m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:getWith",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes its first argument with the value it gets from the source, if there is any to get.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a x -\u003e (x -\u003e Coroutine d m ()) -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#getWith",
        "fct-type": "function",
        "title": "getWith"
      },
      "index": {
        "description": "Invokes its first argument with the value it gets from the source if there is any to get",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "getWith",
        "normalized": "Source a b c-\u003e(c-\u003eCoroutine d a())-\u003eCoroutine d a()",
        "package": "scc",
        "partial": "With",
        "signature": "Source m a x-\u003e(x-\u003eCoroutine d m())-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:liftSink",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e on the ancestor functor \u003cem\u003ea\u003c/em\u003e into a sink on the descendant functor \u003cem\u003ed\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Sink m a x -\u003e Sink m d x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#liftSink",
        "fct-type": "function",
        "title": "liftSink"
      },
      "index": {
        "description": "Converts Sink on the ancestor functor into sink on the descendant functor",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "liftSink",
        "normalized": "Sink a b c-\u003eSink a d c",
        "package": "scc",
        "partial": "Sink",
        "signature": "Sink m a x-\u003eSink m d x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:liftSource",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e on the ancestor functor \u003cem\u003ea\u003c/em\u003e into a source on the descendant functor \u003cem\u003ed\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a x -\u003e Source m d x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#liftSource",
        "fct-type": "function",
        "title": "liftSource"
      },
      "index": {
        "description": "Converts Source on the ancestor functor into source on the descendant functor",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "liftSource",
        "normalized": "Source a b c-\u003eSource a d c",
        "package": "scc",
        "partial": "Source",
        "signature": "Source m a x-\u003eSource m d x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapAccumStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapAccumStream\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e except it reads the values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list\n and writes the mapped values into a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e instead of returning another list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e Source m a1 [x] -\u003e Sink m a2 [y] -\u003e Coroutine d m acc",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapAccumStream",
        "fct-type": "function",
        "title": "mapAccumStream"
      },
      "index": {
        "description": "mapAccumStream is similar to mapAccumL except it reads the values from Source instead of list and writes the mapped values into Sink instead of returning another list",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapAccumStream",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eSource d e[b]-\u003eSink d e[c]-\u003eCoroutine f d a",
        "package": "scc",
        "partial": "Accum Stream",
        "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003eSource m a[x]-\u003eSink m a[y]-\u003eCoroutine d m acc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapAccumStreamChunks",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapAccumStream\u003c/a\u003e\u003c/code\u003e except it runs the argument function on whole chunks read from the input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e Source m a1 x -\u003e Sink m a2 y -\u003e Coroutine d m acc",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapAccumStreamChunks",
        "fct-type": "function",
        "title": "mapAccumStreamChunks"
      },
      "index": {
        "description": "Like mapAccumStream except it runs the argument function on whole chunks read from the input",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapAccumStreamChunks",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eSource d e b-\u003eSink d e c-\u003eCoroutine f d a",
        "package": "scc",
        "partial": "Accum Stream Chunks",
        "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003eSource m a x-\u003eSink m a y-\u003eCoroutine d m acc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapMStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapMStream\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e. It draws the values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list, writes the\n mapped values to a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e, and returns a \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Coroutine d m y) -\u003e Source m a1 x -\u003e Sink m a2 y -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapMStream",
        "fct-type": "function",
        "title": "mapMStream"
      },
      "index": {
        "description": "mapMStream is similar to mapM It draws the values from Source instead of list writes the mapped values to Sink and returns Coroutine",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapMStream",
        "normalized": "(a-\u003eCoroutine b c d)-\u003eSource c e a-\u003eSink c e d-\u003eCoroutine b c()",
        "package": "scc",
        "partial": "MStream",
        "signature": "(x-\u003eCoroutine d m y)-\u003eSource m a x-\u003eSink m a y-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapMStreamChunks_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapMStream_\u003c/a\u003e\u003c/code\u003e except it runs the argument function on whole chunks read from the input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Coroutine d m r) -\u003e Source m a x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapMStreamChunks_",
        "fct-type": "function",
        "title": "mapMStreamChunks_"
      },
      "index": {
        "description": "Like mapMStream except it runs the argument function on whole chunks read from the input",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapMStreamChunks_",
        "normalized": "(a-\u003eCoroutine b c d)-\u003eSource c e a-\u003eCoroutine b c()",
        "package": "scc",
        "partial": "MStream Chunks",
        "signature": "(x-\u003eCoroutine d m r)-\u003eSource m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapMStream_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapMStream_\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e except it draws the values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list and\n works with \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e instead of an arbitrary monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Coroutine d m r) -\u003e Source m a x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapMStream_",
        "fct-type": "function",
        "title": "mapMStream_"
      },
      "index": {
        "description": "mapMStream is similar to mapM except it draws the values from Source instead of list and works with Coroutine instead of an arbitrary monad",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapMStream_",
        "normalized": "(a-\u003eCoroutine b c d)-\u003eSource c e a-\u003eCoroutine b c()",
        "package": "scc",
        "partial": "MStream",
        "signature": "(x-\u003eCoroutine d m r)-\u003eSource m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapMaybeStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapMaybeStream\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Maybe y) -\u003e Source m a1 [x] -\u003e Sink m a2 [y] -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapMaybeStream",
        "fct-type": "function",
        "title": "mapMaybeStream"
      },
      "index": {
        "description": "mapMaybeStream is to mapStream like mapMaybe is to map",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapMaybeStream",
        "normalized": "(a-\u003eMaybe b)-\u003eSource c d[a]-\u003eSink c d[b]-\u003eCoroutine e c()",
        "package": "scc",
        "partial": "Maybe Stream",
        "signature": "(x-\u003eMaybe y)-\u003eSource m a[x]-\u003eSink m a[y]-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapSink",
      "description": {
        "fct-descr": "\u003cp\u003eAn equivalent of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e that works on a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e instead of a list. The argument function is applied to\n every value vefore it's written to the sink argument.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Sink m a [y] -\u003e Sink m a [x]",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapSink",
        "fct-type": "function",
        "title": "mapSink"
      },
      "index": {
        "description": "An equivalent of map that works on Sink instead of list The argument function is applied to every value vefore it written to the sink argument",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapSink",
        "normalized": "(a-\u003eb)-\u003eSink c d[b]-\u003eSink c d[a]",
        "package": "scc",
        "partial": "Sink",
        "signature": "(x-\u003ey)-\u003eSink m a[y]-\u003eSink m a[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003epour\u003c/a\u003e\u003c/code\u003e that applies the function \u003cem\u003ef\u003c/em\u003e to each argument before passing it into the \u003cem\u003esink\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Source m a1 x -\u003e Sink m a2 y -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapStream",
        "fct-type": "function",
        "title": "mapStream"
      },
      "index": {
        "description": "mapStream is like pour that applies the function to each argument before passing it into the sink",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapStream",
        "normalized": "(a-\u003eb)-\u003eSource c d a-\u003eSink c d b-\u003eCoroutine e c()",
        "package": "scc",
        "partial": "Stream",
        "signature": "(x-\u003ey)-\u003eSource m a x-\u003eSink m a y-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:mapStreamChunks",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e except it runs the argument function on whole chunks read from the input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Source m a1 x -\u003e Sink m a2 y -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#mapStreamChunks",
        "fct-type": "function",
        "title": "mapStreamChunks"
      },
      "index": {
        "description": "Like mapStream except it runs the argument function on whole chunks read from the input",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "mapStreamChunks",
        "normalized": "(a-\u003eb)-\u003eSource c d a-\u003eSink c d b-\u003eCoroutine e c()",
        "package": "scc",
        "partial": "Stream Chunks",
        "signature": "(x-\u003ey)-\u003eSource m a x-\u003eSink m a y-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:markDown",
      "description": {
        "fct-descr": "\u003cp\u003eA sink mark-down transformation: the marks get removed off each chunk.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Sink m a x -\u003e Sink m a [(x, mark)]",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#markDown",
        "fct-type": "function",
        "title": "markDown"
      },
      "index": {
        "description": "sink mark-down transformation the marks get removed off each chunk",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "markDown",
        "normalized": "Sink a b c-\u003eSink a b[(c,d)]",
        "package": "scc",
        "partial": "Down",
        "signature": "Sink m a x-\u003eSink m a[(x,mark)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:markUpWith",
      "description": {
        "fct-descr": "\u003cp\u003eA sink mark-up transformation: every chunk going into the sink is accompanied by the given value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "mark -\u003e Sink m a [(x, mark)] -\u003e Sink m a x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#markUpWith",
        "fct-type": "function",
        "title": "markUpWith"
      },
      "index": {
        "description": "sink mark-up transformation every chunk going into the sink is accompanied by the given value",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "markUpWith",
        "normalized": "a-\u003eSink b c[(d,a)]-\u003eSink b c d",
        "package": "scc",
        "partial": "Up With",
        "signature": "mark-\u003eSink m a[(x,mark)]-\u003eSink m a x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:nullSink",
      "description": {
        "fct-descr": "\u003cp\u003eA disconnected sink that consumes and ignores all data \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e into it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Sink m a x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#nullSink",
        "fct-type": "function",
        "title": "nullSink"
      },
      "index": {
        "description": "disconnected sink that consumes and ignores all data put into it",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "nullSink",
        "normalized": "",
        "package": "scc",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:parZipWithMStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eparZipWithMStream\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003ezipWithMStream\u003c/a\u003e\u003c/code\u003e, but it consumes the two sources in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y -\u003e Coroutine d m z) -\u003e Source m a1 [x] -\u003e Source m a2 [y] -\u003e Sink m a3 [z] -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#parZipWithMStream",
        "fct-type": "function",
        "title": "parZipWithMStream"
      },
      "index": {
        "description": "parZipWithMStream is equivalent to zipWithMStream but it consumes the two sources in parallel",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "parZipWithMStream",
        "normalized": "(a-\u003eb-\u003eCoroutine c d e)-\u003eSource d f[a]-\u003eSource d f[b]-\u003eSink d f[e]-\u003eCoroutine c d()",
        "package": "scc",
        "partial": "Zip With MStream",
        "signature": "(x-\u003ey-\u003eCoroutine d m z)-\u003eSource m a[x]-\u003eSource m a[y]-\u003eSink m a[z]-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:partitionStream",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e. Takes a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e instead of a list argument and partitions its contents into\n the two \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Bool) -\u003e Source m a1 [x] -\u003e Sink m a2 [x] -\u003e Sink m a3 [x] -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#partitionStream",
        "fct-type": "function",
        "title": "partitionStream"
      },
      "index": {
        "description": "Equivalent to partition Takes Source instead of list argument and partitions its contents into the two Sink arguments",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "partitionStream",
        "normalized": "(a-\u003eBool)-\u003eSource b c[a]-\u003eSink b c[a]-\u003eSink b c[a]-\u003eCoroutine d b()",
        "package": "scc",
        "partial": "Stream",
        "signature": "(x-\u003eBool)-\u003eSource m a[x]-\u003eSink m a[x]-\u003eSink m a[x]-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e acts the same way as \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, but doesn't actually consume the value from the source; sequential\n calls to \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e will always return the same value.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a [x] -\u003e Coroutine d m (Maybe x)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Function peek acts the same way as get but doesn actually consume the value from the source sequential calls to peek will always return the same value",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "peek",
        "normalized": "Source a b[c]-\u003eCoroutine d a(Maybe c)",
        "package": "scc",
        "partial": "",
        "signature": "Source m a[x]-\u003eCoroutine d m(Maybe x)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pipe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e function splits the computation into two concurrent parts, \u003cem\u003eproducer\u003c/em\u003e and \u003cem\u003econsumer\u003c/em\u003e. The \u003cem\u003eproducer\u003c/em\u003e is\n given a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to put values into, and \u003cem\u003econsumer\u003c/em\u003e a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e to get those values from. Once producer and consumer\n both complete, \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e returns their paired results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(Sink m a1 x -\u003e Coroutine a1 m r1) -\u003e (Source m a2 x -\u003e Coroutine a2 m r2) -\u003e Coroutine a m (r1, r2)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pipe",
        "fct-type": "function",
        "title": "pipe"
      },
      "index": {
        "description": "The pipe function splits the computation into two concurrent parts producer and consumer The producer is given Sink to put values into and consumer Source to get those values from Once producer and consumer both complete pipe returns their paired results",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pipe",
        "normalized": "(Sink a b c-\u003eCoroutine b a d)-\u003e(Source a b c-\u003eCoroutine b a d)-\u003eCoroutine b a(d,d)",
        "package": "scc",
        "partial": "",
        "signature": "(Sink m a x-\u003eCoroutine a m r)-\u003e(Source m a x-\u003eCoroutine a m r)-\u003eCoroutine a m(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pipeG",
      "description": {
        "fct-descr": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e. The first argument is used to combine two computation steps.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "PairBinder m -\u003e (Sink m a1 x -\u003e Coroutine a1 m r1) -\u003e (Source m a2 x -\u003e Coroutine a2 m r2) -\u003e Coroutine a m (r1, r2)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pipeG",
        "fct-type": "function",
        "title": "pipeG"
      },
      "index": {
        "description": "generic version of pipe The first argument is used to combine two computation steps",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pipeG",
        "normalized": "PairBinder a-\u003e(Sink a b c-\u003eCoroutine b a d)-\u003e(Source a b c-\u003eCoroutine b a d)-\u003eCoroutine b a(d,d)",
        "package": "scc",
        "partial": "",
        "signature": "PairBinder m-\u003e(Sink m a x-\u003eCoroutine a m r)-\u003e(Source m a x-\u003eCoroutine a m r)-\u003eCoroutine a m(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pipeP",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epipeP\u003c/a\u003e\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e, except it runs the \u003cem\u003eproducer\u003c/em\u003e and the \u003cem\u003econsumer\u003c/em\u003e in parallel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(Sink m a1 x -\u003e Coroutine a1 m r1) -\u003e (Source m a2 x -\u003e Coroutine a2 m r2) -\u003e Coroutine a m (r1, r2)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pipeP",
        "fct-type": "function",
        "title": "pipeP"
      },
      "index": {
        "description": "The pipeP function is equivalent to pipe except it runs the producer and the consumer in parallel",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pipeP",
        "normalized": "(Sink a b c-\u003eCoroutine b a d)-\u003e(Source a b c-\u003eCoroutine b a d)-\u003eCoroutine b a(d,d)",
        "package": "scc",
        "partial": "",
        "signature": "(Sink m a x-\u003eCoroutine a m r)-\u003e(Source m a x-\u003eCoroutine a m r)-\u003eCoroutine a m(r,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pour",
      "description": {
        "fct-descr": "\u003cp\u003eCopies all data from the \u003cem\u003esource\u003c/em\u003e argument into the \u003cem\u003esink\u003c/em\u003e argument. The result indicates if there was any chunk to\n copy.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a1 x -\u003e Sink m a2 x -\u003e Coroutine d m Bool",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pour",
        "fct-type": "function",
        "title": "pour"
      },
      "index": {
        "description": "Copies all data from the source argument into the sink argument The result indicates if there was any chunk to copy",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pour",
        "normalized": "Source a b c-\u003eSink a b c-\u003eCoroutine d a Bool",
        "package": "scc",
        "partial": "",
        "signature": "Source m a x-\u003eSink m a x-\u003eCoroutine d m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pourParsed",
      "description": {
        "fct-descr": "\u003cp\u003eParses the input data using the given parser and copies the results to output.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Parser p x y -\u003e Source m a1 x -\u003e Sink m a2 y -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pourParsed",
        "fct-type": "function",
        "title": "pourParsed"
      },
      "index": {
        "description": "Parses the input data using the given parser and copies the results to output",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pourParsed",
        "normalized": "Parser a b c-\u003eSource d e b-\u003eSink d e c-\u003eCoroutine f d()",
        "package": "scc",
        "partial": "Parsed",
        "signature": "Parser p x y-\u003eSource m a x-\u003eSink m a y-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pourRead",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epour\u003c/a\u003e\u003c/code\u003e, copies data from the \u003cem\u003esource\u003c/em\u003e to the \u003cem\u003esink\u003c/em\u003e, but only as long as it satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Reader x y y -\u003e Source m a1 x -\u003e Sink m a2 y -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pourRead",
        "fct-type": "function",
        "title": "pourRead"
      },
      "index": {
        "description": "Like pour copies data from the source to the sink but only as long as it satisfies the predicate",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pourRead",
        "normalized": "Reader a b b-\u003eSource c d a-\u003eSink c d b-\u003eCoroutine e c()",
        "package": "scc",
        "partial": "Read",
        "signature": "Reader x y y-\u003eSource m a x-\u003eSink m a y-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pourUntil",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epour\u003c/a\u003e\u003c/code\u003e, copies data from the \u003cem\u003esource\u003c/em\u003e to the \u003cem\u003esink\u003c/em\u003e, but only until one value satisfies the predicate. That\n value is returned rather than copied.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Bool) -\u003e Source m a1 x -\u003e Sink m a2 x -\u003e Coroutine d m (Maybe x)",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pourUntil",
        "fct-type": "function",
        "title": "pourUntil"
      },
      "index": {
        "description": "Like pour copies data from the source to the sink but only until one value satisfies the predicate That value is returned rather than copied",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pourUntil",
        "normalized": "(a-\u003eBool)-\u003eSource b c a-\u003eSink b c a-\u003eCoroutine d b(Maybe a)",
        "package": "scc",
        "partial": "Until",
        "signature": "(x-\u003eBool)-\u003eSource m a x-\u003eSink m a x-\u003eCoroutine d m(Maybe x)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pourWhile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epour\u003c/a\u003e\u003c/code\u003e, copies data from the \u003cem\u003esource\u003c/em\u003e to the \u003cem\u003esink\u003c/em\u003e, but only as long as it satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Bool) -\u003e Source m a1 x -\u003e Sink m a2 x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pourWhile",
        "fct-type": "function",
        "title": "pourWhile"
      },
      "index": {
        "description": "Like pour copies data from the source to the sink but only as long as it satisfies the predicate",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pourWhile",
        "normalized": "(a-\u003eBool)-\u003eSource b c a-\u003eSink b c a-\u003eCoroutine d b()",
        "package": "scc",
        "partial": "While",
        "signature": "(x-\u003eBool)-\u003eSource m a x-\u003eSink m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:pour_",
      "description": {
        "fct-descr": "\u003cp\u003eCopies all data from the \u003cem\u003esource\u003c/em\u003e argument into the \u003cem\u003esink\u003c/em\u003e argument, like \u003ccode\u003e\u003ca\u003epour\u003c/a\u003e\u003c/code\u003e but ignoring the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a1 x -\u003e Sink m a2 x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#pour_",
        "fct-type": "function",
        "title": "pour_"
      },
      "index": {
        "description": "Copies all data from the source argument into the sink argument like pour but ignoring the result",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "pour_",
        "normalized": "Source a b c-\u003eSink a b c-\u003eCoroutine d a()",
        "package": "scc",
        "partial": "",
        "signature": "Source m a x-\u003eSink m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eThis function puts a value into the given \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e. The intervening \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e computations suspend up\n to the \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e invocation that has created the argument sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Sink m a [x] -\u003e x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "This function puts value into the given Sink The intervening Coroutine computations suspend up to the pipe invocation that has created the argument sink",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "put",
        "normalized": "Sink a b[c]-\u003ec-\u003eCoroutine d a()",
        "package": "scc",
        "partial": "",
        "signature": "Sink m a[x]-\u003ex-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:putAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAll\u003c/a\u003e\u003c/code\u003e puts an entire list into its \u003cem\u003esink\u003c/em\u003e argument. If the coroutine fed by the \u003cem\u003esink\u003c/em\u003e dies, the remainder of\n the argument list is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Sink m a x -\u003e Coroutine d m x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#putAll",
        "fct-type": "function",
        "title": "putAll"
      },
      "index": {
        "description": "putAll puts an entire list into its sink argument If the coroutine fed by the sink dies the remainder of the argument list is returned",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "putAll",
        "normalized": "a-\u003eSink b c a-\u003eCoroutine d b a",
        "package": "scc",
        "partial": "All",
        "signature": "x-\u003eSink m a x-\u003eCoroutine d m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:putChunk",
      "description": {
        "fct-descr": "\u003cp\u003eThis method puts a portion of the producer's output into the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e. The intervening \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e computations\n suspend up to the \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e invocation that has created the argument sink. The method returns the suffix of the\n argument that could not make it into the sink because of the sibling coroutine's death.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "x -\u003e Coroutine d m x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#putChunk",
        "fct-type": "function",
        "title": "putChunk"
      },
      "index": {
        "description": "This method puts portion of the producer output into the Sink The intervening Coroutine computations suspend up to the pipe invocation that has created the argument sink The method returns the suffix of the argument that could not make it into the sink because of the sibling coroutine death",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "putChunk",
        "normalized": "a-\u003eCoroutine b c a",
        "package": "scc",
        "partial": "Chunk",
        "signature": "x-\u003eCoroutine d m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:tee",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etee\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003epour\u003c/a\u003e\u003c/code\u003e except it distributes every input value from its source argument into its both sink\n arguments.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Source m a1 x -\u003e Sink m a2 x -\u003e Sink m a3 x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#tee",
        "fct-type": "function",
        "title": "tee"
      },
      "index": {
        "description": "tee is similar to pour except it distributes every input value from its source argument into its both sink arguments",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "tee",
        "normalized": "Source a b c-\u003eSink a b c-\u003eSink a b c-\u003eCoroutine d a()",
        "package": "scc",
        "partial": "",
        "signature": "Source m a x-\u003eSink m a x-\u003eSink m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:teeSink",
      "description": {
        "fct-descr": "\u003cp\u003eEvery value \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eteeSink\u003c/a\u003e\u003c/code\u003e result sink goes into its both argument sinks: \u003ccode\u003eput (teeSink s1 s2) x\u003c/code\u003e is\n equivalent to \u003ccode\u003eput s1 x \u003e\u003e put s2 x\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eputChunk\u003c/a\u003e\u003c/code\u003e method returns the list of values that couldn't fit into the\n second sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Sink m a1 x -\u003e Sink m a2 x -\u003e Sink m a3 x",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#teeSink",
        "fct-type": "function",
        "title": "teeSink"
      },
      "index": {
        "description": "Every value put into teeSink result sink goes into its both argument sinks put teeSink s1 s2 is equivalent to put s1 put s2 The putChunk method returns the list of values that couldn fit into the second sink",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "teeSink",
        "normalized": "Sink a b c-\u003eSink a b c-\u003eSink a b c",
        "package": "scc",
        "partial": "Sink",
        "signature": "Sink m a x-\u003eSink m a x-\u003eSink m a x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:tryPut",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, but returns a Bool that determines if the sink is still active.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Sink m a [x] -\u003e x -\u003e Coroutine d m Bool",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#tryPut",
        "fct-type": "function",
        "title": "tryPut"
      },
      "index": {
        "description": "Like put but returns Bool that determines if the sink is still active",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "tryPut",
        "normalized": "Sink a b[c]-\u003ec-\u003eCoroutine d a Bool",
        "package": "scc",
        "partial": "Put",
        "signature": "Sink m a[x]-\u003ex-\u003eCoroutine d m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:unfoldMStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunfoldMStream\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e that writes the generated values into a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e instead of\n returning a list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(acc -\u003e Coroutine d m (Maybe (x, acc))) -\u003e acc -\u003e Sink m a [x] -\u003e Coroutine d m acc",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#unfoldMStream",
        "fct-type": "function",
        "title": "unfoldMStream"
      },
      "index": {
        "description": "unfoldMStream is version of unfoldr that writes the generated values into Sink instead of returning list",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "unfoldMStream",
        "normalized": "(a-\u003eCoroutine b c(Maybe(d,a)))-\u003ea-\u003eSink c e[d]-\u003eCoroutine b c a",
        "package": "scc",
        "partial": "MStream",
        "signature": "(acc-\u003eCoroutine d m(Maybe(x,acc)))-\u003eacc-\u003eSink m a[x]-\u003eCoroutine d m acc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:unmapMStreamChunks_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunmapMStream_\u003c/a\u003e\u003c/code\u003e but writing whole chunks of generated data into the argument sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Coroutine d m x -\u003e Sink m a x -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#unmapMStreamChunks_",
        "fct-type": "function",
        "title": "unmapMStreamChunks_"
      },
      "index": {
        "description": "Like unmapMStream but writing whole chunks of generated data into the argument sink",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "unmapMStreamChunks_",
        "normalized": "Coroutine a b c-\u003eSink b d c-\u003eCoroutine a b()",
        "package": "scc",
        "partial": "MStream Chunks",
        "signature": "Coroutine d m x-\u003eSink m a x-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:unmapMStream_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunmapMStream_\u003c/a\u003e\u003c/code\u003e is opposite of \u003ccode\u003e\u003ca\u003emapMStream_\u003c/a\u003e\u003c/code\u003e; it takes a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e argument and writes the\n generated values into it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "Coroutine d m (Maybe x) -\u003e Sink m a [x] -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#unmapMStream_",
        "fct-type": "function",
        "title": "unmapMStream_"
      },
      "index": {
        "description": "unmapMStream is opposite of mapMStream it takes Sink instead of Source argument and writes the generated values into it",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "unmapMStream_",
        "normalized": "Coroutine a b(Maybe c)-\u003eSink b d[c]-\u003eCoroutine a b()",
        "package": "scc",
        "partial": "MStream",
        "signature": "Coroutine d m(Maybe x)-\u003eSink m a[x]-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Streams.html#v:zipWithMStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithMStream\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e except it draws the values from two \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e arguments\n instead of two lists, sends the results into a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e, and works with \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e instead of an arbitrary monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Streams",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y -\u003e Coroutine d m z) -\u003e Source m a1 [x] -\u003e Source m a2 [y] -\u003e Sink m a3 [z] -\u003e Coroutine d m ()",
        "fct-source": "src/Control-Concurrent-SCC-Streams.html#zipWithMStream",
        "fct-type": "function",
        "title": "zipWithMStream"
      },
      "index": {
        "description": "zipWithMStream is similar to zipWithM except it draws the values from two Source arguments instead of two lists sends the results into Sink and works with Coroutine instead of an arbitrary monad",
        "hierarchy": "Control Concurrent SCC Streams",
        "module": "Control.Concurrent.SCC.Streams",
        "name": "zipWithMStream",
        "normalized": "(a-\u003eb-\u003eCoroutine c d e)-\u003eSource d f[a]-\u003eSource d f[b]-\u003eSink d f[e]-\u003eCoroutine c d()",
        "package": "scc",
        "partial": "With MStream",
        "signature": "(x-\u003ey-\u003eCoroutine d m z)-\u003eSource m a[x]-\u003eSource m a[y]-\u003eSink m a[z]-\u003eCoroutine d m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines various \u003ccode\u003e\u003ca\u003eCoroutine\u003c/a\u003e\u003c/code\u003e types that operate on\n \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e values. The simplest of the bunch\n are \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e types, which respectively operate on a single source or sink. A \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e has access\n both to a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e to read from and a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to write\n into. Finally, a \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e reads from a single source and writes all of the input, without any modifications, into\n two sinks of the same type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SCC-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module defines various Coroutine types that operate on Sink and Source values The simplest of the bunch are Consumer and Producer types which respectively operate on single source or sink Transducer has access both to Source to read from and Sink to write into Finally Splitter reads from single source and writes all of the input without any modifications into two sinks of the same type",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Types",
        "normalized": "",
        "package": "scc",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Boundary",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBoundary\u003c/a\u003e\u003c/code\u003e value is produced to mark either a \u003ccode\u003e\u003ca\u003eStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e of a region of data, or an arbitrary \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e in\n data. A \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e is semantically equivalent to a \u003ccode\u003e\u003ca\u003eStart\u003c/a\u003e\u003c/code\u003e immediately followed by \u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Boundary",
        "fct-type": "data",
        "title": "Boundary"
      },
      "index": {
        "description": "Boundary value is produced to mark either Start and End of region of data or an arbitrary Point in data Point is semantically equivalent to Start immediately followed by End",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Boundary",
        "normalized": "",
        "package": "scc",
        "partial": "Boundary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Branching",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBranching\u003c/a\u003e\u003c/code\u003e is a type class representing all types that can act as consumers, namely \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Branching",
        "fct-type": "class",
        "title": "Branching"
      },
      "index": {
        "description": "Branching is type class representing all types that can act as consumers namely Consumer Transducer and Splitter",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Branching",
        "normalized": "",
        "package": "scc",
        "partial": "Branching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Consumer",
      "description": {
        "fct-descr": "\u003cp\u003eA coroutine that consumes values from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Consumer",
        "fct-type": "newtype",
        "title": "Consumer"
      },
      "index": {
        "description": "coroutine that consumes values from Source",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Consumer",
        "normalized": "",
        "package": "scc",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Markup",
      "description": {
        "fct-descr": "\u003cp\u003eType of values in a markup-up stream. The \u003ccode\u003e\u003ca\u003eContent\u003c/a\u003e\u003c/code\u003e constructor wraps the actual data.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Markup",
        "fct-type": "data",
        "title": "Markup"
      },
      "index": {
        "description": "Type of values in markup-up stream The Content constructor wraps the actual data",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Markup",
        "normalized": "",
        "package": "scc",
        "partial": "Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:OpenConsumer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#OpenConsumer",
        "fct-type": "type",
        "title": "OpenConsumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "OpenConsumer",
        "normalized": "",
        "package": "scc",
        "partial": "Open Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:OpenProducer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#OpenProducer",
        "fct-type": "type",
        "title": "OpenProducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "OpenProducer",
        "normalized": "",
        "package": "scc",
        "partial": "Open Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:OpenSplitter",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#OpenSplitter",
        "fct-type": "type",
        "title": "OpenSplitter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "OpenSplitter",
        "normalized": "",
        "package": "scc",
        "partial": "Open Splitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:OpenTransducer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#OpenTransducer",
        "fct-type": "type",
        "title": "OpenTransducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "OpenTransducer",
        "normalized": "",
        "package": "scc",
        "partial": "Open Transducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA parser is a transducer that marks up its input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "parser is transducer that marks up its input",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Parser",
        "normalized": "",
        "package": "scc",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Performer",
      "description": {
        "fct-descr": "\u003cp\u003eA coroutine that has no inputs nor outputs - and therefore may not suspend at all, which means it's not really a\n \u003cem\u003eco\u003c/em\u003eroutine.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Performer",
        "fct-type": "newtype",
        "title": "Performer"
      },
      "index": {
        "description": "coroutine that has no inputs nor outputs and therefore may not suspend at all which means it not really co routine",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Performer",
        "normalized": "",
        "package": "scc",
        "partial": "Performer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:PipeableComponentPair",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003ePipeableComponentPair\u003c/a\u003e\u003c/code\u003e applies to any two components that can be combined into a third component with the\n following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input of the result, if any, becomes the input of the first component.\n\u003c/li\u003e\u003cli\u003e The output produced by the first child component is consumed by the second child component.\n\u003c/li\u003e\u003cli\u003e The result output, if any, is the output of the second component.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#PipeableComponentPair",
        "fct-type": "class",
        "title": "PipeableComponentPair"
      },
      "index": {
        "description": "Class PipeableComponentPair applies to any two components that can be combined into third component with the following properties The input of the result if any becomes the input of the first component The output produced by the first child component is consumed by the second child component The result output if any is the output of the second component",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "PipeableComponentPair",
        "normalized": "",
        "package": "scc",
        "partial": "Pipeable Component Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Producer",
      "description": {
        "fct-descr": "\u003cp\u003eA coroutine that produces values and puts them into a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Producer",
        "fct-type": "newtype",
        "title": "Producer"
      },
      "index": {
        "description": "coroutine that produces values and puts them into Sink",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Producer",
        "normalized": "",
        "package": "scc",
        "partial": "Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Splitter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e type represents coroutines that distribute the input stream acording to some criteria. A splitter\n should distribute only the original input data, and feed it into the sinks in the same order it has been read from\n the source. Furthermore, the input source should be entirely consumed and fed into the two sinks.\n\u003c/p\u003e\u003cp\u003eA splitter can be used in two ways: as a predicate to determine which portions of its input stream satisfy a certain\n property, or as a chunker to divide the input stream into chunks. In the former case, the predicate is considered\n true for exactly those parts of the input that are written to its \u003cem\u003etrue\u003c/em\u003e sink. In the latter case, a chunk is a\n contiguous section of the input stream that is written exclusively to one sink, either true or false. A \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\n value written to either of the two sinks can also terminate the chunk written to the other sink.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Splitter",
        "fct-type": "newtype",
        "title": "Splitter"
      },
      "index": {
        "description": "The Splitter type represents coroutines that distribute the input stream acording to some criteria splitter should distribute only the original input data and feed it into the sinks in the same order it has been read from the source Furthermore the input source should be entirely consumed and fed into the two sinks splitter can be used in two ways as predicate to determine which portions of its input stream satisfy certain property or as chunker to divide the input stream into chunks In the former case the predicate is considered true for exactly those parts of the input that are written to its true sink In the latter case chunk is contiguous section of the input stream that is written exclusively to one sink either true or false mempty value written to either of the two sinks can also terminate the chunk written to the other sink",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Splitter",
        "normalized": "",
        "package": "scc",
        "partial": "Splitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#t:Transducer",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e type represents coroutines that transform a data stream.  Execution of \u003ccode\u003e\u003ca\u003etransduce\u003c/a\u003e\u003c/code\u003e must continue\n consuming the given \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e and feeding the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e as\n long as there is any data in the source.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Transducer",
        "fct-type": "newtype",
        "title": "Transducer"
      },
      "index": {
        "description": "The Transducer type represents coroutines that transform data stream Execution of transduce must continue consuming the given Source and feeding the Sink as long as there is any data in the source",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Transducer",
        "normalized": "",
        "package": "scc",
        "partial": "Transducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Consumer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Consumer",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Consumer",
        "fct-type": "function",
        "title": "Consumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Consumer",
        "normalized": "",
        "package": "scc",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Content",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Content x",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Markup",
        "fct-type": "function",
        "title": "Content"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Content",
        "normalized": "",
        "package": "scc",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:End",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "End y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Boundary",
        "fct-type": "function",
        "title": "End"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "End",
        "normalized": "",
        "package": "scc",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Markup",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Markup (Boundary y)",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Markup",
        "fct-type": "function",
        "title": "Markup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Markup",
        "normalized": "",
        "package": "scc",
        "partial": "Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Performer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Performer",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Performer",
        "fct-type": "function",
        "title": "Performer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Performer",
        "normalized": "",
        "package": "scc",
        "partial": "Performer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Point",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Point y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Boundary",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Point",
        "normalized": "",
        "package": "scc",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Producer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Producer",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Producer",
        "fct-type": "function",
        "title": "Producer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Producer",
        "normalized": "",
        "package": "scc",
        "partial": "Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Splitter",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Splitter",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Splitter",
        "fct-type": "function",
        "title": "Splitter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Splitter",
        "normalized": "",
        "package": "scc",
        "partial": "Splitter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Start",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Start y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Boundary",
        "fct-type": "function",
        "title": "Start"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Start",
        "normalized": "",
        "package": "scc",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:Transducer",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Transducer",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Transducer",
        "fct-type": "function",
        "title": "Transducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "Transducer",
        "normalized": "",
        "package": "scc",
        "partial": "Transducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:combineBranches",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecombineBranches\u003c/a\u003e\u003c/code\u003e is used to combine two values of \u003ccode\u003eBranch\u003c/code\u003e class into one, using the given \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e binary\n combinator.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "OpenConsumer m a d' x r) -\u003e forall a.  OpenConsumer m a d x r) -\u003e PairBinder m -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#combineBranches",
        "fct-type": "method",
        "title": "combineBranches"
      },
      "index": {
        "description": "combineBranches is used to combine two values of Branch class into one using the given Consumer binary combinator",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "combineBranches",
        "normalized": "OpenConsumer a b c d e)-\u003ef g OpenConsumer a b h d e)-\u003ePairBinder a-\u003ei-\u003ei-\u003ei",
        "package": "scc",
        "partial": "Branches",
        "signature": "OpenConsumer m a d' x r)-\u003eforall a. OpenConsumer m a d x r)-\u003ePairBinder m-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:compose",
      "description": {
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "PairBinder m -\u003e c1 -\u003e c2 -\u003e c3",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#compose",
        "fct-type": "method",
        "title": "compose"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "compose",
        "normalized": "PairBinder a-\u003eb-\u003eb-\u003eb",
        "package": "scc",
        "partial": "",
        "signature": "PairBinder m-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:consume",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "forall a d.  OpenConsumer m a d x r",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Consumer",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "consume",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:isolateConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a proper \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e from a function that is, but can't be proven to be, an \u003ccode\u003e\u003ca\u003eOpenConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Source m d x -\u003e Coroutine d m r) -\u003e Consumer m x r",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#isolateConsumer",
        "fct-type": "function",
        "title": "isolateConsumer"
      },
      "index": {
        "description": "Creates proper Consumer from function that is but can be proven to be an OpenConsumer",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "isolateConsumer",
        "normalized": "Source a b c-\u003eCoroutine b a d)-\u003eConsumer a c d",
        "package": "scc",
        "partial": "Consumer",
        "signature": "Source m d x-\u003eCoroutine d m r)-\u003eConsumer m x r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:isolateProducer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a proper \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e from a function that is, but can't be proven to be, an \u003ccode\u003e\u003ca\u003eOpenProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Sink m d x -\u003e Coroutine d m r) -\u003e Producer m x r",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#isolateProducer",
        "fct-type": "function",
        "title": "isolateProducer"
      },
      "index": {
        "description": "Creates proper Producer from function that is but can be proven to be an OpenProducer",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "isolateProducer",
        "normalized": "Sink a b c-\u003eCoroutine b a d)-\u003eProducer a c d",
        "package": "scc",
        "partial": "Producer",
        "signature": "Sink m d x-\u003eCoroutine d m r)-\u003eProducer m x r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:isolateSplitter",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a proper \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e from a function that is, but can't be proven to be, an \u003ccode\u003e\u003ca\u003eOpenSplitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Source m d x -\u003e Sink m d x -\u003e Sink m d x -\u003e Coroutine d m ()) -\u003e Splitter m x",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#isolateSplitter",
        "fct-type": "function",
        "title": "isolateSplitter"
      },
      "index": {
        "description": "Creates proper Splitter from function that is but can be proven to be an OpenSplitter",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "isolateSplitter",
        "normalized": "Source a b c-\u003eSink a b c-\u003eSink a b c-\u003eCoroutine b a())-\u003eSplitter a c",
        "package": "scc",
        "partial": "Splitter",
        "signature": "Source m d x-\u003eSink m d x-\u003eSink m d x-\u003eCoroutine d m())-\u003eSplitter m x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:isolateTransducer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a proper \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e from a function that is, but can't be proven to be, an \u003ccode\u003e\u003ca\u003eOpenTransducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "Source m d x -\u003e Sink m d y -\u003e Coroutine d m ()) -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#isolateTransducer",
        "fct-type": "function",
        "title": "isolateTransducer"
      },
      "index": {
        "description": "Creates proper Transducer from function that is but can be proven to be an OpenTransducer",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "isolateTransducer",
        "normalized": "Source a b c-\u003eSink a b d-\u003eCoroutine b a())-\u003eTransducer a c d",
        "package": "scc",
        "partial": "Transducer",
        "signature": "Source m d x-\u003eSink m d y-\u003eCoroutine d m())-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:oneToOneTransducer",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003eoneToOneTransducer\u003c/a\u003e\u003c/code\u003e takes a function that maps one input value to one output value each, and lifts it\n into a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#oneToOneTransducer",
        "fct-type": "function",
        "title": "oneToOneTransducer"
      },
      "index": {
        "description": "Function oneToOneTransducer takes function that maps one input value to one output value each and lifts it into Transducer",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "oneToOneTransducer",
        "normalized": "(a-\u003eb)-\u003eTransducer c a b",
        "package": "scc",
        "partial": "To One Transducer",
        "signature": "(x-\u003ey)-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:perform",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "m r",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Performer",
        "fct-type": "function",
        "title": "perform"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "perform",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:produce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "forall a d.  OpenProducer m a d x r",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Producer",
        "fct-type": "function",
        "title": "produce"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "produce",
        "normalized": "",
        "package": "scc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:split",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "forall a1 a2 a3 d.  OpenSplitter m a1 a2 a3 d x ()",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Splitter",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "split",
        "normalized": "a b b b c OpenSplitter d b b b e f()",
        "package": "scc",
        "partial": "",
        "signature": "forall a a a d. OpenSplitter m a a a d x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:statefulSplitter",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003estatefulSplitter\u003c/a\u003e\u003c/code\u003e takes a state-converting function that also assigns a Boolean value to each input\n item and lifts it into a \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "(state -\u003e x -\u003e (state, Bool)) -\u003e state -\u003e Splitter m [x]",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#statefulSplitter",
        "fct-type": "function",
        "title": "statefulSplitter"
      },
      "index": {
        "description": "Function statefulSplitter takes state-converting function that also assigns Boolean value to each input item and lifts it into Splitter",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "statefulSplitter",
        "normalized": "(a-\u003eb-\u003e(a,Bool))-\u003ea-\u003eSplitter c[b]",
        "package": "scc",
        "partial": "Splitter",
        "signature": "(state-\u003ex-\u003e(state,Bool))-\u003estate-\u003eSplitter m[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:statefulTransducer",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003estatefulTransducer\u003c/a\u003e\u003c/code\u003e constructs a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e from a state-transition function and the initial\n state. The transition function may produce arbitrary output at any transition step.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "(state -\u003e x -\u003e (state, y)) -\u003e state -\u003e Transducer m [x] y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#statefulTransducer",
        "fct-type": "function",
        "title": "statefulTransducer"
      },
      "index": {
        "description": "Function statefulTransducer constructs Transducer from state-transition function and the initial state The transition function may produce arbitrary output at any transition step",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "statefulTransducer",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTransducer d[b]c",
        "package": "scc",
        "partial": "Transducer",
        "signature": "(state-\u003ex-\u003e(state,y))-\u003estate-\u003eTransducer m[x]y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:statelessChunkTransducer",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003estatelessTransducer\u003c/a\u003e\u003c/code\u003e takes a function that maps one input value into a list of output values, and\n lifts it into a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Transducer m x y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#statelessChunkTransducer",
        "fct-type": "function",
        "title": "statelessChunkTransducer"
      },
      "index": {
        "description": "Function statelessTransducer takes function that maps one input value into list of output values and lifts it into Transducer",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "statelessChunkTransducer",
        "normalized": "(a-\u003eb)-\u003eTransducer c a b",
        "package": "scc",
        "partial": "Chunk Transducer",
        "signature": "(x-\u003ey)-\u003eTransducer m x y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:statelessSplitter",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003estatelessSplitter\u003c/a\u003e\u003c/code\u003e takes a function that assigns a Boolean value to each input item and lifts it into\n a \u003ccode\u003e\u003ca\u003eSplitter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e Bool) -\u003e Splitter m [x]",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#statelessSplitter",
        "fct-type": "function",
        "title": "statelessSplitter"
      },
      "index": {
        "description": "Function statelessSplitter takes function that assigns Boolean value to each input item and lifts it into Splitter",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "statelessSplitter",
        "normalized": "(a-\u003eBool)-\u003eSplitter b[a]",
        "package": "scc",
        "partial": "Splitter",
        "signature": "(x-\u003eBool)-\u003eSplitter m[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:statelessTransducer",
      "description": {
        "fct-descr": "\u003cp\u003eFunction \u003ccode\u003e\u003ca\u003estatelessTransducer\u003c/a\u003e\u003c/code\u003e takes a function that maps one input value into a list of output values, and\n lifts it into a \u003ccode\u003e\u003ca\u003eTransducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "(x -\u003e y) -\u003e Transducer m [x] y",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#statelessTransducer",
        "fct-type": "function",
        "title": "statelessTransducer"
      },
      "index": {
        "description": "Function statelessTransducer takes function that maps one input value into list of output values and lifts it into Transducer",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "statelessTransducer",
        "normalized": "(a-\u003eb)-\u003eTransducer c[a]b",
        "package": "scc",
        "partial": "Transducer",
        "signature": "(x-\u003ey)-\u003eTransducer m[x]y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scc/docs/Control-Concurrent-SCC-Types.html#v:transduce",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.SCC.Types",
        "fct-package": "scc",
        "fct-signature": "forall a1 a2 d.  OpenTransducer m a1 a2 d x y ()",
        "fct-source": "src/Control-Concurrent-SCC-Types.html#Transducer",
        "fct-type": "function",
        "title": "transduce"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SCC Types",
        "module": "Control.Concurrent.SCC.Types",
        "name": "transduce",
        "normalized": "a b b c OpenTransducer d b b e f g()",
        "package": "scc",
        "partial": "",
        "signature": "forall a a d. OpenTransducer m a a d x y()"
      }
    }
  }
]