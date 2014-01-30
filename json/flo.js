[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate a flow chart by from annotations from a code base.\n\u003c/p\u003e\u003cp\u003eThe syntax is as follows:\n\u003c/p\u003e\u003cpre\u003e\n  expr  \u003c- label / next / do / if / task\n  label \u003c- \"label\" name\n  task  \u003c- \"task\" text\n  next  \u003c- \"next\" name / \"trigger\" name\n  do    \u003c- \"do\" text\n  if    \u003c- \"if\" name \"\\n\" \"then\" name (\"\\n\" \"else\" name)?\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ename\u003c/code\u003e and \u003ccode\u003etext\u003c/code\u003e are both arbitrary text.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003elabel\u003c/code\u003e is used to label a node in the graph.  \u003ccode\u003enext\u003c/code\u003e is used to\n link the current node to another node by its label.  The text for a\n node is written by \u003ccode\u003edo\u003c/code\u003e, which explains what this node does, or by\n using \u003ccode\u003eif\u003c/code\u003e which makes this node a conditional which goes to one of\n two possible nodes.\n\u003c/p\u003e\u003cp\u003eExample (assuming \u003ccode\u003e\\/\\//\u003c/code\u003e to be the declaration prefix):\n\u003c/p\u003e\u003cpre\u003e\n  /// label main\n  /// if Logged in?\n  /// then display_overview\n  /// else display_login\n  /// label display_overview\n  /// do Display overview.\n  /// next display_event\n  /// next display_paper\n  // Event list code here.\n  event_list();\n  /// label display_login\n  /// do Display login.\n  /// next try_login\n  // Login display code here.\n  display_login();\n  /// label try_login\n  /// do Check login.\n  /// next main\n  /// trigger log_access_time\n  // Login attempt code here.\n  if(check_login()) log_attempt_success();\n  /// label display_event\n  /// do Display a single event.\n  /// next display_paper\n  // Event list code here.\n  display_event();\n  /// label display_paper\n  /// do Display a single paper.\n  // Paper display code here.\n  display_paper();\n  /// label log_access_time\n  /// task Log login accesses.\n  log_login();\n\u003c/pre\u003e\u003cp\u003eIn other words: You have a main page which either displays a login\n screen or lists the user's events if logged in. From the events\n page you can get to the event page.\n\u003c/p\u003e\u003cp\u003eCustom syntax can be used, too. Example:\n\u003c/p\u003e\u003cpre\u003e\n  {- # bar -}\n SELECT * FROM mysql;\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "module",
        "fct-source": "src/Development-Flo.html",
        "fct-type": "module",
        "title": "Flo"
      },
      "index": {
        "description": "Generate flow chart by from annotations from code base The syntax is as follows expr label next do if task label label name task task text next next name trigger name do do text if if name then name else name where name and text are both arbitrary text label is used to label node in the graph next is used to link the current node to another node by its label The text for node is written by do which explains what this node does or by using if which makes this node conditional which goes to one of two possible nodes Example assuming to be the declaration prefix label main if Logged in then display overview else display login label display overview do Display overview next display event next display paper Event list code here event list label display login do Display login next try login Login display code here display login label try login do Check login next main trigger log access time Login attempt code here if check login log attempt success label display event do Display single event next display paper Event list code here display event label display paper do Display single paper Paper display code here display paper label log access time task Log login accesses log login In other words You have main page which either displays login screen or lists the user events if logged in From the events page you can get to the event page Custom syntax can be used too Example bar SELECT FROM mysql",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Flo",
        "normalized": "",
        "package": "flo",
        "partial": "Flo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Decl",
      "description": {
        "fct-descr": "\u003cp\u003eA workflow declaration.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "data",
        "fct-source": "src/Development-Flo.html#Decl",
        "fct-type": "data",
        "title": "Decl"
      },
      "index": {
        "description": "workflow declaration",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Decl",
        "normalized": "",
        "package": "flo",
        "partial": "Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eA workflow connection.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "data",
        "fct-source": "src/Development-Flo.html#Edge",
        "fct-type": "data",
        "title": "Edge"
      },
      "index": {
        "description": "workflow connection",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Edge",
        "normalized": "",
        "package": "flo",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eA node name.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "data",
        "fct-source": "src/Development-Flo.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "node name",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Name",
        "normalized": "",
        "package": "flo",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA workflow node.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "data",
        "fct-source": "src/Development-Flo.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "workflow node",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Node",
        "normalized": "",
        "package": "flo",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eType of the node.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "data",
        "fct-source": "src/Development-Flo.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "Type of the node",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Type",
        "normalized": "",
        "package": "flo",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Action",
      "description": {
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Action",
        "fct-source": "src/Development-Flo.html#Type",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Action",
        "normalized": "",
        "package": "flo",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Background",
      "description": {
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Background",
        "fct-source": "src/Development-Flo.html#Type",
        "fct-type": "function",
        "title": "Background"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Background",
        "normalized": "",
        "package": "flo",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Condition",
      "description": {
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Condition",
        "fct-source": "src/Development-Flo.html#Type",
        "fct-type": "function",
        "title": "Condition"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Condition",
        "normalized": "",
        "package": "flo",
        "partial": "Condition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Do",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes this node.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Do String",
        "fct-source": "src/Development-Flo.html#Decl",
        "fct-type": "function",
        "title": "Do"
      },
      "index": {
        "description": "Describes this node",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Do",
        "normalized": "",
        "package": "flo",
        "partial": "Do",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Edge",
      "description": {
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Edge",
        "fct-source": "src/Development-Flo.html#Edge",
        "fct-type": "function",
        "title": "Edge"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Edge",
        "normalized": "",
        "package": "flo",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:If",
      "description": {
        "fct-descr": "\u003cp\u003eMakes this node a conditional.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "If String Name (Maybe Name)",
        "fct-source": "src/Development-Flo.html#Decl",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "Makes this node conditional",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "If",
        "normalized": "",
        "package": "flo",
        "partial": "If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Label",
      "description": {
        "fct-descr": "\u003cp\u003eSets the current node.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Label Name",
        "fct-source": "src/Development-Flo.html#Decl",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "Sets the current node",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Label",
        "normalized": "",
        "package": "flo",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Next",
      "description": {
        "fct-descr": "\u003cp\u003eLinks to a next node (an edge).\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Next Name",
        "fct-source": "src/Development-Flo.html#Decl",
        "fct-type": "function",
        "title": "Next"
      },
      "index": {
        "description": "Links to next node an edge",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Next",
        "normalized": "",
        "package": "flo",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Node",
      "description": {
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Node",
        "fct-source": "src/Development-Flo.html#Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Node",
        "normalized": "",
        "package": "flo",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:Task",
      "description": {
        "fct-descr": "\u003cp\u003eRun some task (create db entry,\n   delete file, send email etc.).\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Task String",
        "fct-source": "src/Development-Flo.html#Decl",
        "fct-type": "function",
        "title": "Task"
      },
      "index": {
        "description": "Run some task create db entry delete file send email etc",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "Task",
        "normalized": "",
        "package": "flo",
        "partial": "Task",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:declsToNodes",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list of declarations to a list of nodes.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "[Decl] -\u003e [Node]",
        "fct-source": "src/Development-Flo.html#declsToNodes",
        "fct-type": "function",
        "title": "declsToNodes"
      },
      "index": {
        "description": "Converts list of declarations to list of nodes",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "declsToNodes",
        "normalized": "[Decl]-\u003e[Node]",
        "package": "flo",
        "partial": "To Nodes",
        "signature": "[Decl]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:digraph",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a string up in a digraph.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Development-Flo.html#digraph",
        "fct-type": "function",
        "title": "digraph"
      },
      "index": {
        "description": "Wrap string up in digraph",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "digraph",
        "normalized": "String-\u003eString",
        "package": "flo",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:edgeLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "String",
        "fct-source": "src/Development-Flo.html#Edge",
        "fct-type": "function",
        "title": "edgeLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "edgeLabel",
        "normalized": "",
        "package": "flo",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:edgeTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Name",
        "fct-source": "src/Development-Flo.html#Edge",
        "fct-type": "function",
        "title": "edgeTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "edgeTo",
        "normalized": "",
        "package": "flo",
        "partial": "To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeDesc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "String",
        "fct-source": "src/Development-Flo.html#Node",
        "fct-type": "function",
        "title": "nodeDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "nodeDesc",
        "normalized": "",
        "package": "flo",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeEdges",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "[Edge]",
        "fct-source": "src/Development-Flo.html#Node",
        "fct-type": "function",
        "title": "nodeEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "nodeEdges",
        "normalized": "[Edge]",
        "package": "flo",
        "partial": "Edges",
        "signature": "[Edge]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Name",
        "fct-source": "src/Development-Flo.html#Node",
        "fct-type": "function",
        "title": "nodeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "nodeName",
        "normalized": "",
        "package": "flo",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodeType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "Type",
        "fct-source": "src/Development-Flo.html#Node",
        "fct-type": "function",
        "title": "nodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "nodeType",
        "normalized": "",
        "package": "flo",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:nodesToDot",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of nodes to a Graphviz dot document.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "[Node] -\u003e String",
        "fct-source": "src/Development-Flo.html#nodesToDot",
        "fct-type": "function",
        "title": "nodesToDot"
      },
      "index": {
        "description": "Convert list of nodes to Graphviz dot document",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "nodesToDot",
        "normalized": "[Node]-\u003eString",
        "package": "flo",
        "partial": "To Dot",
        "signature": "[Node]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/flo/docs/Development-Flo.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse a source file containing commented declarations.\n\u003c/p\u003e",
        "fct-module": "Development.Flo",
        "fct-package": "flo",
        "fct-signature": "FilePath -\u003e String -\u003e Maybe String -\u003e IO (Either ParseError [Decl])",
        "fct-source": "src/Development-Flo.html#parseFile",
        "fct-type": "function",
        "title": "parseFile"
      },
      "index": {
        "description": "Parse source file containing commented declarations",
        "hierarchy": "Development Flo",
        "module": "Development.Flo",
        "name": "parseFile",
        "normalized": "FilePath-\u003eString-\u003eMaybe String-\u003eIO(Either ParseError[Decl])",
        "package": "flo",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eMaybe String-\u003eIO(Either ParseError[Decl])"
      }
    }
  }
]