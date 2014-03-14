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
        "word": "flow2dot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverts flow diagrams to the Graphviz (Dot) files for subsequent rendering\ninto nice pictures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.FlowDiagram",
          "name": "FlowDiagram",
          "package": "flow2dot",
          "source": "src/Text-FlowDiagram.html",
          "type": "module"
        },
        "index": {
          "description": "Converts flow diagrams to the Graphviz Dot files for subsequent rendering into nice pictures",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "FlowDiagram",
          "package": "flow2dot",
          "partial": "Flow Diagram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlow could include messages and actions, one item per source line\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "Flow",
          "package": "flow2dot",
          "source": "src/Text-FlowDiagram.html#Flow",
          "type": "data"
        },
        "index": {
          "description": "Flow could include messages and actions one item per source line",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "Flow",
          "package": "flow2dot",
          "partial": "Flow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#t:Flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction (actor, message text). Syntax in the source file: \u003ccode\u003eactor: message text\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "Action",
          "package": "flow2dot",
          "signature": "Action String String",
          "source": "src/Text-FlowDiagram.html#Flow",
          "type": "function"
        },
        "index": {
          "description": "Action actor message text Syntax in the source file actor message text",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "Action",
          "package": "flow2dot",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage (from, to, message text). Syntax in the source file: \u003ccode\u003efrom -\u003e to: message text\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "Msg",
          "package": "flow2dot",
          "signature": "Msg String String String",
          "source": "src/Text-FlowDiagram.html#Flow",
          "type": "function"
        },
        "index": {
          "description": "Message from to message text Syntax in the source file from to message text",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "Msg",
          "package": "flow2dot",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to put swimlines in the specified order. Syntax: \u003ccode\u003eorder swimline1 swimline2 ...\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "Order",
          "package": "flow2dot",
          "signature": "Order [String]",
          "source": "src/Text-FlowDiagram.html#Flow",
          "type": "function"
        },
        "index": {
          "description": "Tries to put swimlines in the specified order Syntax order swimline1 swimline2",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "Order",
          "normalized": "Order[String]",
          "package": "flow2dot",
          "partial": "Order",
          "signature": "Order[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eflow2dot\u003c/a\u003e\u003c/code\u003e take a list of flow diagram items (\u003ccode\u003e\u003ca\u003eFlow\u003c/a\u003e\u003c/code\u003e) and converts them to Graphviz code\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "flow2dot",
          "package": "flow2dot",
          "signature": "[Flow] -\u003e String",
          "source": "src/Text-FlowDiagram.html#flow2dot",
          "type": "function"
        },
        "index": {
          "description": "flow2dot take list of flow diagram items Flow and converts them to Graphviz code",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "flow2dot",
          "normalized": "[Flow]-\u003eString",
          "package": "flow2dot",
          "signature": "[Flow]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:flow2dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse given string and return Flow Diagram contained therein.\n All syntax errors are thrown via \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "parseFlow",
          "package": "flow2dot",
          "signature": "String -\u003e String -\u003e [Flow]",
          "source": "src/Text-FlowDiagram.html#parseFlow",
          "type": "function"
        },
        "index": {
          "description": "Parse given string and return Flow Diagram contained therein All syntax errors are thrown via error",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "parseFlow",
          "normalized": "String-\u003eString-\u003e[Flow]",
          "package": "flow2dot",
          "partial": "Flow",
          "signature": "String-\u003eString-\u003e[Flow]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:parseFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse specified file and return Flow Diagram contained therein.\n All syntax errors are thrown via \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "parseFlowFromFile",
          "package": "flow2dot",
          "signature": "FilePath -\u003e IO [Flow]",
          "source": "src/Text-FlowDiagram.html#parseFlowFromFile",
          "type": "function"
        },
        "index": {
          "description": "Parse specified file and return Flow Diagram contained therein All syntax errors are thrown via error",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "parseFlowFromFile",
          "normalized": "FilePath-\u003eIO[Flow]",
          "package": "flow2dot",
          "partial": "Flow From File",
          "signature": "FilePath-\u003eIO[Flow]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:parseFlowFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint element of the flow diagram as String\n\u003c/p\u003e",
          "module": "Text.FlowDiagram",
          "name": "showFlow",
          "package": "flow2dot",
          "signature": "Flow -\u003e String",
          "source": "src/Text-FlowDiagram.html#showFlow",
          "type": "function"
        },
        "index": {
          "description": "Print element of the flow diagram as String",
          "hierarchy": "Text FlowDiagram",
          "module": "Text.FlowDiagram",
          "name": "showFlow",
          "normalized": "Flow-\u003eString",
          "package": "flow2dot",
          "partial": "Flow",
          "signature": "Flow-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flow2dot/docs/Text-FlowDiagram.html#v:showFlow"
      }
    }
  ]
]