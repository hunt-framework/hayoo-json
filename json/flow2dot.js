[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverts flow diagrams to the Graphviz (Dot) files for subsequent rendering\ninto nice pictures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "module",
        "fct-source": "src/Text-FlowDiagram.html",
        "fct-type": "module",
        "title": "FlowDiagram"
      },
      "index": {
        "description": "Converts flow diagrams to the Graphviz Dot files for subsequent rendering into nice pictures",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "FlowDiagram",
        "normalized": "",
        "package": "flow2dot",
        "partial": "Flow Diagram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#t:Flow",
      "description": {
        "fct-descr": "\u003cp\u003eFlow could include messages and actions, one item per source line\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "data",
        "fct-source": "src/Text-FlowDiagram.html#Flow",
        "fct-type": "data",
        "title": "Flow"
      },
      "index": {
        "description": "Flow could include messages and actions one item per source line",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "Flow",
        "normalized": "",
        "package": "flow2dot",
        "partial": "Flow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:Action",
      "description": {
        "fct-descr": "\u003cp\u003eAction (actor, message text). Syntax in the source file: \u003ccode\u003eactor: message text\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "Action String String",
        "fct-source": "src/Text-FlowDiagram.html#Flow",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "Action actor message text Syntax in the source file actor message text",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "Action",
        "normalized": "",
        "package": "flow2dot",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:Msg",
      "description": {
        "fct-descr": "\u003cp\u003eMessage (from, to, message text). Syntax in the source file: \u003ccode\u003efrom -\u003e to: message text\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "Msg String String String",
        "fct-source": "src/Text-FlowDiagram.html#Flow",
        "fct-type": "function",
        "title": "Msg"
      },
      "index": {
        "description": "Message from to message text Syntax in the source file from to message text",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "Msg",
        "normalized": "",
        "package": "flow2dot",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:Order",
      "description": {
        "fct-descr": "\u003cp\u003eTries to put swimlines in the specified order. Syntax: \u003ccode\u003eorder swimline1 swimline2 ...\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "Order [String]",
        "fct-source": "src/Text-FlowDiagram.html#Flow",
        "fct-type": "function",
        "title": "Order"
      },
      "index": {
        "description": "Tries to put swimlines in the specified order Syntax order swimline1 swimline2",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "Order",
        "normalized": "Order[String]",
        "package": "flow2dot",
        "partial": "Order",
        "signature": "Order[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:flow2dot",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eflow2dot\u003c/a\u003e\u003c/code\u003e take a list of flow diagram items (\u003ccode\u003e\u003ca\u003eFlow\u003c/a\u003e\u003c/code\u003e) and converts them to Graphviz code\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "[Flow] -\u003e String",
        "fct-source": "src/Text-FlowDiagram.html#flow2dot",
        "fct-type": "function",
        "title": "flow2dot"
      },
      "index": {
        "description": "flow2dot take list of flow diagram items Flow and converts them to Graphviz code",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "flow2dot",
        "normalized": "[Flow]-\u003eString",
        "package": "flow2dot",
        "partial": "",
        "signature": "[Flow]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:parseFlow",
      "description": {
        "fct-descr": "\u003cp\u003eParse given string and return Flow Diagram contained therein.\n All syntax errors are thrown via \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "String -\u003e String -\u003e [Flow]",
        "fct-source": "src/Text-FlowDiagram.html#parseFlow",
        "fct-type": "function",
        "title": "parseFlow"
      },
      "index": {
        "description": "Parse given string and return Flow Diagram contained therein All syntax errors are thrown via error",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "parseFlow",
        "normalized": "String-\u003eString-\u003e[Flow]",
        "package": "flow2dot",
        "partial": "Flow",
        "signature": "String-\u003eString-\u003e[Flow]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:parseFlowFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse specified file and return Flow Diagram contained therein.\n All syntax errors are thrown via \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "FilePath -\u003e IO [Flow]",
        "fct-source": "src/Text-FlowDiagram.html#parseFlowFromFile",
        "fct-type": "function",
        "title": "parseFlowFromFile"
      },
      "index": {
        "description": "Parse specified file and return Flow Diagram contained therein All syntax errors are thrown via error",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "parseFlowFromFile",
        "normalized": "FilePath-\u003eIO[Flow]",
        "package": "flow2dot",
        "partial": "Flow From File",
        "signature": "FilePath-\u003eIO[Flow]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:showFlow",
      "description": {
        "fct-descr": "\u003cp\u003ePrint element of the flow diagram as String\n\u003c/p\u003e",
        "fct-module": "Text.FlowDiagram",
        "fct-package": "flow2dot",
        "fct-signature": "Flow -\u003e String",
        "fct-source": "src/Text-FlowDiagram.html#showFlow",
        "fct-type": "function",
        "title": "showFlow"
      },
      "index": {
        "description": "Print element of the flow diagram as String",
        "hierarchy": "Text FlowDiagram",
        "module": "Text.FlowDiagram",
        "name": "showFlow",
        "normalized": "Flow-\u003eString",
        "package": "flow2dot",
        "partial": "Flow",
        "signature": "Flow-\u003eString"
      }
    }
  }
]