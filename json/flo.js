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
        "word": "flo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate a flow chart by from annotations from a code base.\n\u003c/p\u003e\u003cp\u003eThe syntax is as follows:\n\u003c/p\u003e\u003cpre\u003e\n  expr  \u003c- label / next / do / if / task\n  label \u003c- \"label\" name\n  task  \u003c- \"task\" text\n  next  \u003c- \"next\" name / \"trigger\" name\n  do    \u003c- \"do\" text\n  if    \u003c- \"if\" name \"\\n\" \"then\" name (\"\\n\" \"else\" name)?\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ename\u003c/code\u003e and \u003ccode\u003etext\u003c/code\u003e are both arbitrary text.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003elabel\u003c/code\u003e is used to label a node in the graph.  \u003ccode\u003enext\u003c/code\u003e is used to\n link the current node to another node by its label.  The text for a\n node is written by \u003ccode\u003edo\u003c/code\u003e, which explains what this node does, or by\n using \u003ccode\u003eif\u003c/code\u003e which makes this node a conditional which goes to one of\n two possible nodes.\n\u003c/p\u003e\u003cp\u003eExample (assuming \u003ccode\u003e\\/\\//\u003c/code\u003e to be the declaration prefix):\n\u003c/p\u003e\u003cpre\u003e\n  /// label main\n  /// if Logged in?\n  /// then display_overview\n  /// else display_login\n  /// label display_overview\n  /// do Display overview.\n  /// next display_event\n  /// next display_paper\n  // Event list code here.\n  event_list();\n  /// label display_login\n  /// do Display login.\n  /// next try_login\n  // Login display code here.\n  display_login();\n  /// label try_login\n  /// do Check login.\n  /// next main\n  /// trigger log_access_time\n  // Login attempt code here.\n  if(check_login()) log_attempt_success();\n  /// label display_event\n  /// do Display a single event.\n  /// next display_paper\n  // Event list code here.\n  display_event();\n  /// label display_paper\n  /// do Display a single paper.\n  // Paper display code here.\n  display_paper();\n  /// label log_access_time\n  /// task Log login accesses.\n  log_login();\n\u003c/pre\u003e\u003cp\u003eIn other words: You have a main page which either displays a login\n screen or lists the user's events if logged in. From the events\n page you can get to the event page.\n\u003c/p\u003e\u003cp\u003eCustom syntax can be used, too. Example:\n\u003c/p\u003e\u003cpre\u003e\n  {- # bar -}\n SELECT * FROM mysql;\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Development.Flo",
          "name": "Flo",
          "package": "flo",
          "source": "src/Development-Flo.html",
          "type": "module"
        },
        "index": {
          "description": "Generate flow chart by from annotations from code base The syntax is as follows expr label next do if task label label name task task text next next name trigger name do do text if if name then name else name where name and text are both arbitrary text label is used to label node in the graph next is used to link the current node to another node by its label The text for node is written by do which explains what this node does or by using if which makes this node conditional which goes to one of two possible nodes Example assuming to be the declaration prefix label main if Logged in then display overview else display login label display overview do Display overview next display event next display paper Event list code here event list label display login do Display login next try login Login display code here display login label try login do Check login next main trigger log access time Login attempt code here if check login log attempt success label display event do Display single event next display paper Event list code here display event label display paper do Display single paper Paper display code here display paper label log access time task Log login accesses log login In other words You have main page which either displays login screen or lists the user events if logged in From the events page you can get to the event page Custom syntax can be used too Example bar SELECT FROM mysql",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Flo",
          "package": "flo",
          "partial": "Flo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA workflow declaration.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Decl",
          "package": "flo",
          "source": "src/Development-Flo.html#Decl",
          "type": "data"
        },
        "index": {
          "description": "workflow declaration",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Decl",
          "package": "flo",
          "partial": "Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA workflow connection.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Edge",
          "package": "flo",
          "source": "src/Development-Flo.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "workflow connection",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Edge",
          "package": "flo",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node name.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Name",
          "package": "flo",
          "source": "src/Development-Flo.html#Name",
          "type": "data"
        },
        "index": {
          "description": "node name",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Name",
          "package": "flo",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA workflow node.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Node",
          "package": "flo",
          "source": "src/Development-Flo.html#Node",
          "type": "data"
        },
        "index": {
          "description": "workflow node",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Node",
          "package": "flo",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the node.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Type",
          "package": "flo",
          "source": "src/Development-Flo.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Type of the node",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Type",
          "package": "flo",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "Action",
          "package": "flo",
          "signature": "Action",
          "source": "src/Development-Flo.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Action",
          "package": "flo",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "Background",
          "package": "flo",
          "signature": "Background",
          "source": "src/Development-Flo.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Background",
          "package": "flo",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "Condition",
          "package": "flo",
          "signature": "Condition",
          "source": "src/Development-Flo.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Condition",
          "package": "flo",
          "partial": "Condition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Condition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes this node.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Do",
          "package": "flo",
          "signature": "Do String",
          "source": "src/Development-Flo.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "Describes this node",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Do",
          "package": "flo",
          "partial": "Do",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Do"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "Edge",
          "package": "flo",
          "signature": "Edge",
          "source": "src/Development-Flo.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Edge",
          "package": "flo",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes this node a conditional.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "If",
          "package": "flo",
          "signature": "If String Name (Maybe Name)",
          "source": "src/Development-Flo.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "Makes this node conditional",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "If",
          "package": "flo",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current node.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Label",
          "package": "flo",
          "signature": "Label Name",
          "source": "src/Development-Flo.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "Sets the current node",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Label",
          "package": "flo",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinks to a next node (an edge).\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Next",
          "package": "flo",
          "signature": "Next Name",
          "source": "src/Development-Flo.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "Links to next node an edge",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Next",
          "package": "flo",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "Node",
          "package": "flo",
          "signature": "Node",
          "source": "src/Development-Flo.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Node",
          "package": "flo",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun some task (create db entry,\n   delete file, send email etc.).\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "Task",
          "package": "flo",
          "signature": "Task String",
          "source": "src/Development-Flo.html#Decl",
          "type": "function"
        },
        "index": {
          "description": "Run some task create db entry delete file send email etc",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "Task",
          "package": "flo",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of declarations to a list of nodes.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "declsToNodes",
          "package": "flo",
          "signature": "[Decl] -\u003e [Node]",
          "source": "src/Development-Flo.html#declsToNodes",
          "type": "function"
        },
        "index": {
          "description": "Converts list of declarations to list of nodes",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "declsToNodes",
          "normalized": "[Decl]-\u003e[Node]",
          "package": "flo",
          "partial": "To Nodes",
          "signature": "[Decl]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:declsToNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string up in a digraph.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "digraph",
          "package": "flo",
          "signature": "String -\u003e String",
          "source": "src/Development-Flo.html#digraph",
          "type": "function"
        },
        "index": {
          "description": "Wrap string up in digraph",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "digraph",
          "normalized": "String-\u003eString",
          "package": "flo",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:digraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "edgeLabel",
          "package": "flo",
          "signature": "String",
          "source": "src/Development-Flo.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "edgeLabel",
          "package": "flo",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:edgeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "edgeTo",
          "package": "flo",
          "signature": "Name",
          "source": "src/Development-Flo.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "edgeTo",
          "package": "flo",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:edgeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "nodeDesc",
          "package": "flo",
          "signature": "String",
          "source": "src/Development-Flo.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "nodeDesc",
          "package": "flo",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "nodeEdges",
          "package": "flo",
          "signature": "[Edge]",
          "source": "src/Development-Flo.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "nodeEdges",
          "normalized": "[Edge]",
          "package": "flo",
          "partial": "Edges",
          "signature": "[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "nodeName",
          "package": "flo",
          "signature": "Name",
          "source": "src/Development-Flo.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "nodeName",
          "package": "flo",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Development.Flo",
          "name": "nodeType",
          "package": "flo",
          "signature": "Type",
          "source": "src/Development-Flo.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "nodeType",
          "package": "flo",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of nodes to a Graphviz dot document.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "nodesToDot",
          "package": "flo",
          "signature": "[Node] -\u003e String",
          "source": "src/Development-Flo.html#nodesToDot",
          "type": "function"
        },
        "index": {
          "description": "Convert list of nodes to Graphviz dot document",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "nodesToDot",
          "normalized": "[Node]-\u003eString",
          "package": "flo",
          "partial": "To Dot",
          "signature": "[Node]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodesToDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a source file containing commented declarations.\n\u003c/p\u003e",
          "module": "Development.Flo",
          "name": "parseFile",
          "package": "flo",
          "signature": "FilePath -\u003e String -\u003e Maybe String -\u003e IO (Either ParseError [Decl])",
          "source": "src/Development-Flo.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "Parse source file containing commented declarations",
          "hierarchy": "Development Flo",
          "module": "Development.Flo",
          "name": "parseFile",
          "normalized": "FilePath-\u003eString-\u003eMaybe String-\u003eIO(Either ParseError[Decl])",
          "package": "flo",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eMaybe String-\u003eIO(Either ParseError[Decl])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:parseFile"
      }
    }
  ]
]