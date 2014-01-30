[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParses text-based covariance-model descriptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-CM-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Parses text-based covariance-model descriptions",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:finishedHeader",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe ByteString -\u003e Bool",
        "fct-source": "src/Biobase-SElab-CM-Import.html#finishedHeader",
        "fct-type": "function",
        "title": "finishedHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "finishedHeader",
        "normalized": "Maybe ByteString-\u003eBool",
        "package": "BiobaseInfernal",
        "partial": "Header",
        "signature": "Maybe ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:fromFile",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "FilePath -\u003e IO [CM]",
        "fct-source": "src/Biobase-SElab-CM-Import.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "fromFile",
        "normalized": "FilePath-\u003eIO[CM]",
        "package": "BiobaseInfernal",
        "partial": "File",
        "signature": "FilePath-\u003eIO[CM]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:isNode",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a line is a node line (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e). If yes, we'll get the node\n type as string and the node identifier, too.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe ByteString -\u003e Maybe (NodeType, NodeID)",
        "fct-source": "src/Biobase-SElab-CM-Import.html#isNode",
        "fct-type": "function",
        "title": "isNode"
      },
      "index": {
        "description": "Determine if line is node line Just If yes we ll get the node type as string and the node identifier too",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "isNode",
        "normalized": "Maybe ByteString-\u003eMaybe(NodeType,NodeID)",
        "package": "BiobaseInfernal",
        "partial": "Node",
        "signature": "Maybe ByteString-\u003eMaybe(NodeType,NodeID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:lineParser",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Parser b -\u003e Pipe l ByteString o u m b",
        "fct-source": "src/Biobase-SElab-CM-Import.html#lineParser",
        "fct-type": "function",
        "title": "lineParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "lineParser",
        "normalized": "Parser a-\u003ePipe b ByteString c d e a",
        "package": "BiobaseInfernal",
        "partial": "Parser",
        "signature": "Parser b-\u003ePipe l ByteString o u m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseCM1x",
      "description": {
        "fct-descr": "\u003cp\u003eTop-level parser for Infernal 1.0 and 1.1 human-readable covariance\n models. Reads all lines first, then builds up the CM.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Conduit ByteString m CM",
        "fct-source": "src/Biobase-SElab-CM-Import.html#parseCM1x",
        "fct-type": "function",
        "title": "parseCM1x"
      },
      "index": {
        "description": "Top-level parser for Infernal and human-readable covariance models Reads all lines first then builds up the CM",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "parseCM1x",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseHeader",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Parser CMVersion",
        "fct-source": "src/Biobase-SElab-CM-Import.html#parseHeader",
        "fct-type": "function",
        "title": "parseHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "parseHeader",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eInfernal 1.0 header parser. Greps all lines until the \u003ca\u003eMODEL:\u003c/a\u003e line, then\n return lines to top-level parser. Parses three lines at once in case of\n \u003ca\u003eFT-\u003c/a\u003e lines.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[ByteString] -\u003e Pipe l ByteString o u m (Map ByteString ByteString)",
        "fct-source": "src/Biobase-SElab-CM-Import.html#parseHeaders",
        "fct-type": "function",
        "title": "parseHeaders"
      },
      "index": {
        "description": "Infernal header parser Greps all lines until the MODEL line then return lines to top-level parser Parses three lines at once in case of FT lines",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "parseHeaders",
        "normalized": "[ByteString]-\u003ePipe a ByteString b c d(Map ByteString ByteString)",
        "package": "BiobaseInfernal",
        "partial": "Headers",
        "signature": "[ByteString]-\u003ePipe l ByteString o u m(Map ByteString ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseNodes",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "CMVersion -\u003e [(NodeType, NodeID, [State])] -\u003e Pipe ByteString ByteString o u m [(NodeType, NodeID, [State])]",
        "fct-source": "src/Biobase-SElab-CM-Import.html#parseNodes",
        "fct-type": "function",
        "title": "parseNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "parseNodes",
        "normalized": "CMVersion-\u003e[(NodeType,NodeID,[State])]-\u003ePipe ByteString ByteString a b c[(NodeType,NodeID,[State])]",
        "package": "BiobaseInfernal",
        "partial": "Nodes",
        "signature": "CMVersion-\u003e[(NodeType,NodeID,[State])]-\u003ePipe ByteString ByteString o u m[(NodeType,NodeID,[State])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseState",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "CMVersion -\u003e NodeType -\u003e NodeID -\u003e ByteString -\u003e State",
        "fct-source": "src/Biobase-SElab-CM-Import.html#parseState",
        "fct-type": "function",
        "title": "parseState"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "parseState",
        "normalized": "CMVersion-\u003eNodeType-\u003eNodeID-\u003eByteString-\u003eState",
        "package": "BiobaseInfernal",
        "partial": "State",
        "signature": "CMVersion-\u003eNodeType-\u003eNodeID-\u003eByteString-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseStates",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "CMVersion -\u003e NodeType -\u003e NodeID -\u003e [State] -\u003e Pipe ByteString ByteString o u m [State]",
        "fct-source": "src/Biobase-SElab-CM-Import.html#parseStates",
        "fct-type": "function",
        "title": "parseStates"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "parseStates",
        "normalized": "CMVersion-\u003eNodeType-\u003eNodeID-\u003e[State]-\u003ePipe ByteString ByteString a b c[State]",
        "package": "BiobaseInfernal",
        "partial": "States",
        "signature": "CMVersion-\u003eNodeType-\u003eNodeID-\u003e[State]-\u003ePipe ByteString ByteString o u m[State]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:readAccession",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Biobase-SElab-CM-Import.html#readAccession",
        "fct-type": "function",
        "title": "readAccession"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "readAccession",
        "normalized": "ByteString-\u003ea",
        "package": "BiobaseInfernal",
        "partial": "Accession",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:readBS",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString -\u003e c",
        "fct-source": "src/Biobase-SElab-CM-Import.html#readBS",
        "fct-type": "function",
        "title": "readBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "readBS",
        "normalized": "ByteString-\u003ea",
        "package": "BiobaseInfernal",
        "partial": "BS",
        "signature": "ByteString-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:readBitScore",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString -\u003e BitScore",
        "fct-source": "src/Biobase-SElab-CM-Import.html#readBitScore",
        "fct-type": "function",
        "title": "readBitScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "readBitScore",
        "normalized": "ByteString-\u003eBitScore",
        "package": "BiobaseInfernal",
        "partial": "Bit Score",
        "signature": "ByteString-\u003eBitScore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:test",
      "description": {
        "fct-module": "Biobase.SElab.CM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "IO ()",
        "fct-source": "src/Biobase-SElab-CM-Import.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM Import",
        "module": "Biobase.SElab.CM.Import",
        "name": "test",
        "normalized": "IO()",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfernal CMs.\n\u003c/p\u003e\u003cp\u003eTODO order of nucleotides? ACGU?\n\u003c/p\u003e\u003cp\u003eTODO \u003ca\u003efastCM :: CM -\u003e FastCM\u003c/a\u003e to make a data structure that is suitable for\n high-performance applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-CM.html",
        "fct-type": "module",
        "title": "CM"
      },
      "index": {
        "description": "Infernal CMs TODO order of nucleotides ACGU TODO fastCM CM FastCM to make data structure that is suitable for high-performance applications",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "CM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:AC2CM",
      "description": {
        "fct-descr": "\u003cp\u003eMap of model accession numbers to individual CMs.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "type",
        "fct-source": "src/Biobase-SElab-CM.html#AC2CM",
        "fct-type": "type",
        "title": "AC2CM"
      },
      "index": {
        "description": "Map of model accession numbers to individual CMs",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "AC2CM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "AC CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:CM",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an Infernal covariance model. We have a number of blocks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e basic information like the name of the CM, accession number, etc.\n\u003c/li\u003e\u003cli\u003e advanced information: nodes and their states, and the states themselves.\n\u003c/li\u003e\u003cli\u003e unsorted information from the header / blasic block\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCM\u003c/a\u003e\u003c/code\u003e data structure is not suitable for high-performance applications.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e score inequalities: trusted (lowest seed score) \u003e= gathering (lowest full\n score) \u003e= noise (random strings)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLocal entries into the CM.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003elocalBegin\u003c/a\u003e lens returns a map of state id's. We either have just the\n root node (with the \u003ca\u003eS\u003c/a\u003e state), or a set of states with type: MP,ML,MR,B.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003elocalEnd\u003c/a\u003e lens on the other hand is the set of possible early exits\n from the model.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "data",
        "title": "CM"
      },
      "index": {
        "description": "This is an Infernal covariance model We have number of blocks basic information like the name of the CM accession number etc advanced information nodes and their states and the states themselves unsorted information from the header blasic block The CM data structure is not suitable for high-performance applications score inequalities trusted lowest seed score gathering lowest full score noise random strings Local entries into the CM The localBegin lens returns map of state id We either have just the root node with the state or set of states with type MP ML MR The localEnd lens on the other hand is the set of possible early exits from the model",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "CM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:CMVersion",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the CM versions we can parse\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-CM.html#CMVersion",
        "fct-type": "data",
        "title": "CMVersion"
      },
      "index": {
        "description": "Encode the CM versions we can parse",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "CMVersion",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "CMVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:Emits",
      "description": {
        "fct-descr": "\u003cp\u003eCertain states (IL,IR,ML,MR) emit a single nucleotide, one state emits a\n pair (MP), other states emit nothing.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-CM.html#Emits",
        "fct-type": "data",
        "title": "Emits"
      },
      "index": {
        "description": "Certain states IL IR ML MR emit single nucleotide one state emits pair MP other states emit nothing",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "Emits",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Emits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:ID2CM",
      "description": {
        "fct-descr": "\u003cp\u003eMap of model names to individual CMs.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "type",
        "fct-source": "src/Biobase-SElab-CM.html#ID2CM",
        "fct-type": "type",
        "title": "ID2CM"
      },
      "index": {
        "description": "Map of model names to individual CMs",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "ID2CM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:NodeID",
      "description": {
        "fct-descr": "\u003cp\u003eNode IDs\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-CM.html#NodeID",
        "fct-type": "newtype",
        "title": "NodeID"
      },
      "index": {
        "description": "Node IDs",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "NodeID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Node ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:NodeType",
      "description": {
        "fct-descr": "\u003cp\u003eEncode CM node types.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "data",
        "title": "NodeType"
      },
      "index": {
        "description": "Encode CM node types",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "NodeType",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Node Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA single state.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "single state",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "State",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:StateID",
      "description": {
        "fct-descr": "\u003cp\u003eState IDs\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-CM.html#StateID",
        "fct-type": "newtype",
        "title": "StateID"
      },
      "index": {
        "description": "State IDs",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "StateID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:StateType",
      "description": {
        "fct-descr": "\u003cp\u003eEncode CM state types.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "data",
        "title": "StateType"
      },
      "index": {
        "description": "Encode CM state types",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "StateType",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:B",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "B",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "B",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:BEGL",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "BEGL",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "BEGL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "BEGL",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "BEGL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:BEGR",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "BEGR",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "BEGR"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "BEGR",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "BEGR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:BIF",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "BIF",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "BIF"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "BIF",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "BIF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:CM",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "CM",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "CM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "CM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "CM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:D",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "D",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "D"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "D",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:E",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "E",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "E"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "E",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EL",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "EL",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "EL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "EL",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "EL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:END",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "END",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "END"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "END",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "END",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EmitNothing",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "EmitNothing",
        "fct-source": "src/Biobase-SElab-CM.html#Emits",
        "fct-type": "function",
        "title": "EmitNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "EmitNothing",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Emit Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EmitsPair",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "EmitsPair",
        "fct-source": "src/Biobase-SElab-CM.html#Emits",
        "fct-type": "function",
        "title": "EmitsPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "EmitsPair",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Emits Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EmitsSingle",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "EmitsSingle",
        "fct-source": "src/Biobase-SElab-CM.html#Emits",
        "fct-type": "function",
        "title": "EmitsSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "EmitsSingle",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Emits Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:IL",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "IL",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "IL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "IL",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "IL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:IR",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "IR",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "IR"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "IR",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "IR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:Infernal10",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Infernal10 ByteString",
        "fct-source": "src/Biobase-SElab-CM.html#CMVersion",
        "fct-type": "function",
        "title": "Infernal10"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "Infernal10",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Infernal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:Infernal11",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Infernal11 ByteString",
        "fct-source": "src/Biobase-SElab-CM.html#CMVersion",
        "fct-type": "function",
        "title": "Infernal11"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "Infernal11",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Infernal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MATL",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "MATL",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "MATL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "MATL",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "MATL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MATP",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "MATP",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "MATP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "MATP",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "MATP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MATR",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "MATR",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "MATR"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "MATR",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "MATR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:ML",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ML",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "ML"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "ML",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MP",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "MP",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "MP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "MP",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "MP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MR",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "MR",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "MR"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "MR",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "MR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:NodeID",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "NodeID",
        "fct-source": "src/Biobase-SElab-CM.html#NodeID",
        "fct-type": "function",
        "title": "NodeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "NodeID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Node ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:ROOT",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ROOT",
        "fct-source": "src/Biobase-SElab-CM.html#NodeType",
        "fct-type": "function",
        "title": "ROOT"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "ROOT",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ROOT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:S",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "S",
        "fct-source": "src/Biobase-SElab-CM.html#StateType",
        "fct-type": "function",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "S",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:State",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "State",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "State",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:StateID",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "StateID",
        "fct-source": "src/Biobase-SElab-CM.html#StateID",
        "fct-type": "function",
        "title": "StateID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "StateID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_accession",
      "description": {
        "fct-descr": "\u003cp\u003eRFxxxxx identification\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Accession Rfam",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_accession"
      },
      "index": {
        "description": "RFxxxxx identification",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_accession",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_emits",
      "description": {
        "fct-descr": "\u003cp\u003edo we emit characters\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Emits",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "_emits"
      },
      "index": {
        "description": "do we emit characters",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_emits",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_gathering",
      "description": {
        "fct-descr": "\u003cp\u003eall scores at or above \u003ccode\u003e\u003ca\u003egathering\u003c/a\u003e\u003c/code\u003e score are in the \u003ca\u003efull\u003c/a\u003e alignment\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_gathering"
      },
      "index": {
        "description": "all scores at or above gathering score are in the full alignment",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_gathering",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_hmm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe HMM3",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_hmm"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_hmm",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_localBegin",
      "description": {
        "fct-descr": "\u003cp\u003eEntries into the CM.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Map StateID BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_localBegin"
      },
      "index": {
        "description": "Entries into the CM",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_localBegin",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_localEnd",
      "description": {
        "fct-descr": "\u003cp\u003eExits out of the CM.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Map StateID BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_localEnd"
      },
      "index": {
        "description": "Exits out of the CM",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_localEnd",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_name",
      "description": {
        "fct-descr": "\u003cp\u003ename of model as in \u003ca\u003etRNA\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Identification Rfam",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_name"
      },
      "index": {
        "description": "name of model as in tRNA",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_name",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nodeID",
      "description": {
        "fct-descr": "\u003cp\u003eto which node does this state belong\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "NodeID",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "_nodeID"
      },
      "index": {
        "description": "to which node does this state belong",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_nodeID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nodeType",
      "description": {
        "fct-descr": "\u003cp\u003enode type for this state\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "NodeType",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "_nodeType"
      },
      "index": {
        "description": "node type for this state",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_nodeType",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nodes",
      "description": {
        "fct-descr": "\u003cp\u003eeach node has a set of states\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Map NodeID (NodeType, [StateID])",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_nodes"
      },
      "index": {
        "description": "each node has set of states",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_nodes",
        "normalized": "Map NodeID(NodeType,[StateID])",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Map NodeID(NodeType,[StateID])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_noiseCutoff",
      "description": {
        "fct-descr": "\u003cp\u003ehighest score NOT included as member\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_noiseCutoff"
      },
      "index": {
        "description": "highest score NOT included as member",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_noiseCutoff",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Cutoff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nullModel",
      "description": {
        "fct-descr": "\u003cp\u003eNull-model: categorical distribution on ACGU\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Vector BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_nullModel"
      },
      "index": {
        "description": "Null-model categorical distribution on ACGU",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_nullModel",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_pair",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[(Char, Char, BitScore)]",
        "fct-source": "src/Biobase-SElab-CM.html#Emits",
        "fct-type": "function",
        "title": "_pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_pair",
        "normalized": "[(Char,Char,BitScore)]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[(Char,Char,BitScore)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_single",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[(Char, BitScore)]",
        "fct-source": "src/Biobase-SElab-CM.html#Emits",
        "fct-type": "function",
        "title": "_single"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_single",
        "normalized": "[(Char,BitScore)]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[(Char,BitScore)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_stateID",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of this state\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "StateID",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "_stateID"
      },
      "index": {
        "description": "The ID of this state",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_stateID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_stateType",
      "description": {
        "fct-descr": "\u003cp\u003etype of the state\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "StateType",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "_stateType"
      },
      "index": {
        "description": "type of the state",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_stateType",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_states",
      "description": {
        "fct-descr": "\u003cp\u003eeach state has a type, some emit characters, and some have children\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Map StateID State",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_states"
      },
      "index": {
        "description": "each state has type some emit characters and some have children",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_states",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_transitions",
      "description": {
        "fct-descr": "\u003cp\u003ewhich transitions, id and bitscore\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[(StateID, BitScore)]",
        "fct-source": "src/Biobase-SElab-CM.html#State",
        "fct-type": "function",
        "title": "_transitions"
      },
      "index": {
        "description": "which transitions id and bitscore",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_transitions",
        "normalized": "[(StateID,BitScore)]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[(StateID,BitScore)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_trustedCutoff",
      "description": {
        "fct-descr": "\u003cp\u003elowest score of any seed member\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_trustedCutoff"
      },
      "index": {
        "description": "lowest score of any seed member",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_trustedCutoff",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Cutoff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_unsorted",
      "description": {
        "fct-descr": "\u003cp\u003eall lines that are not handled. Multiline entries are key-\u003emulti-line entry\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_unsorted"
      },
      "index": {
        "description": "all lines that are not handled Multiline entries are key multi-line entry",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_unsorted",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_version",
      "description": {
        "fct-descr": "\u003cp\u003eWe can parse version 1.0 and 1.1 CMs\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "CMVersion",
        "fct-source": "src/Biobase-SElab-CM.html#CM",
        "fct-type": "function",
        "title": "_version"
      },
      "index": {
        "description": "We can parse version and CMs",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "_version",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:accession",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Accession Rfam)",
        "fct-source": "src/Biobase-SElab-CM.html#accession",
        "fct-type": "function",
        "title": "accession"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "accession",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:emits",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' State Emits",
        "fct-source": "src/Biobase-SElab-CM.html#emits",
        "fct-type": "function",
        "title": "emits"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "emits",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:gathering",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#gathering",
        "fct-type": "function",
        "title": "gathering"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "gathering",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:hmm",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Maybe HMM3)",
        "fct-source": "src/Biobase-SElab-CM.html#hmm",
        "fct-type": "function",
        "title": "hmm"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "hmm",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:illegalState",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "StateID",
        "fct-source": "src/Biobase-SElab-CM.html#illegalState",
        "fct-type": "function",
        "title": "illegalState"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "illegalState",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:localBegin",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Map StateID BitScore)",
        "fct-source": "src/Biobase-SElab-CM.html#localBegin",
        "fct-type": "function",
        "title": "localBegin"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "localBegin",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:localEnd",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Map StateID BitScore)",
        "fct-source": "src/Biobase-SElab-CM.html#localEnd",
        "fct-type": "function",
        "title": "localEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "localEnd",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:makeLocal",
      "description": {
        "fct-descr": "\u003cp\u003eMake a CM have local start/end behaviour, with \u003ca\u003epbegin\u003c/a\u003e and \u003ca\u003epend\u003c/a\u003e\n probabilities given.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Double -\u003e Double -\u003e CM -\u003e CM",
        "fct-source": "src/Biobase-SElab-CM.html#makeLocal",
        "fct-type": "function",
        "title": "makeLocal"
      },
      "index": {
        "description": "Make CM have local start end behaviour with pbegin and pend probabilities given",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "makeLocal",
        "normalized": "Double-\u003eDouble-\u003eCM-\u003eCM",
        "package": "BiobaseInfernal",
        "partial": "Local",
        "signature": "Double-\u003eDouble-\u003eCM-\u003eCM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:makeLocalBegin",
      "description": {
        "fct-descr": "\u003cp\u003eInsert all legal local beginnings, disable root node (and root states).\n The \u003ccode\u003epbegin\u003c/code\u003e probability the the total probability for local begins. The\n remaining \u003ca\u003e1-pbegin\u003c/a\u003e is the probability to start with node 1.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Double -\u003e CM -\u003e CM",
        "fct-source": "src/Biobase-SElab-CM.html#makeLocalBegin",
        "fct-type": "function",
        "title": "makeLocalBegin"
      },
      "index": {
        "description": "Insert all legal local beginnings disable root node and root states The pbegin probability the the total probability for local begins The remaining pbegin is the probability to start with node",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "makeLocalBegin",
        "normalized": "Double-\u003eCM-\u003eCM",
        "package": "BiobaseInfernal",
        "partial": "Local Begin",
        "signature": "Double-\u003eCM-\u003eCM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:makeLocalEnd",
      "description": {
        "fct-descr": "\u003cp\u003eInsert all legal local ends.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Double -\u003e CM -\u003e CM",
        "fct-source": "src/Biobase-SElab-CM.html#makeLocalEnd",
        "fct-type": "function",
        "title": "makeLocalEnd"
      },
      "index": {
        "description": "Insert all legal local ends",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "makeLocalEnd",
        "normalized": "Double-\u003eCM-\u003eCM",
        "package": "BiobaseInfernal",
        "partial": "Local End",
        "signature": "Double-\u003eCM-\u003eCM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:name",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Identification Rfam)",
        "fct-source": "src/Biobase-SElab-CM.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "name",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nodeID",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' State NodeID",
        "fct-source": "src/Biobase-SElab-CM.html#nodeID",
        "fct-type": "function",
        "title": "nodeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "nodeID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nodeType",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' State NodeType",
        "fct-source": "src/Biobase-SElab-CM.html#nodeType",
        "fct-type": "function",
        "title": "nodeType"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "nodeType",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nodes",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Map NodeID (NodeType, [StateID]))",
        "fct-source": "src/Biobase-SElab-CM.html#nodes",
        "fct-type": "function",
        "title": "nodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "nodes",
        "normalized": "Lens' CM(Map NodeID(NodeType,[StateID]))",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' CM(Map NodeID(NodeType,[StateID]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:noiseCutoff",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Maybe BitScore)",
        "fct-source": "src/Biobase-SElab-CM.html#noiseCutoff",
        "fct-type": "function",
        "title": "noiseCutoff"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "noiseCutoff",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Cutoff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nullModel",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Vector BitScore)",
        "fct-source": "src/Biobase-SElab-CM.html#nullModel",
        "fct-type": "function",
        "title": "nullModel"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "nullModel",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:pair",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Traversal' Emits [(Char, Char, BitScore)]",
        "fct-source": "src/Biobase-SElab-CM.html#pair",
        "fct-type": "function",
        "title": "pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "pair",
        "normalized": "Traversal' Emits[(Char,Char,BitScore)]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Traversal' Emits[(Char,Char,BitScore)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:single",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Traversal' Emits [(Char, BitScore)]",
        "fct-source": "src/Biobase-SElab-CM.html#single",
        "fct-type": "function",
        "title": "single"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "single",
        "normalized": "Traversal' Emits[(Char,BitScore)]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Traversal' Emits[(Char,BitScore)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:stateID",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' State StateID",
        "fct-source": "src/Biobase-SElab-CM.html#stateID",
        "fct-type": "function",
        "title": "stateID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "stateID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:stateType",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' State StateType",
        "fct-source": "src/Biobase-SElab-CM.html#stateType",
        "fct-type": "function",
        "title": "stateType"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "stateType",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:states",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Map StateID State)",
        "fct-source": "src/Biobase-SElab-CM.html#states",
        "fct-type": "function",
        "title": "states"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "states",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:transitions",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' State [(StateID, BitScore)]",
        "fct-source": "src/Biobase-SElab-CM.html#transitions",
        "fct-type": "function",
        "title": "transitions"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "transitions",
        "normalized": "Lens' State[(StateID,BitScore)]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' State[(StateID,BitScore)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:trustedCutoff",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM BitScore",
        "fct-source": "src/Biobase-SElab-CM.html#trustedCutoff",
        "fct-type": "function",
        "title": "trustedCutoff"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "trustedCutoff",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Cutoff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:unNodeID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-SElab-CM.html#NodeID",
        "fct-type": "function",
        "title": "unNodeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "unNodeID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Node ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:unStateID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-SElab-CM.html#StateID",
        "fct-type": "function",
        "title": "unStateID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "unStateID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "State ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:unsorted",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM (Map ByteString ByteString)",
        "fct-source": "src/Biobase-SElab-CM.html#unsorted",
        "fct-type": "function",
        "title": "unsorted"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "unsorted",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:version",
      "description": {
        "fct-module": "Biobase.SElab.CM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' CM CMVersion",
        "fct-source": "src/Biobase-SElab-CM.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab CM",
        "module": "Biobase.SElab.CM",
        "name": "version",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImport HMMER3 HMM models.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-HMM-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Import HMMER3 HMM models",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:compoLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead the optional COMPO line.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Pipe ByteString ByteString o u m [NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#compoLine",
        "fct-type": "function",
        "title": "compoLine"
      },
      "index": {
        "description": "Read the optional COMPO line",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "compoLine",
        "normalized": "Pipe ByteString ByteString a b c[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "Line",
        "signature": "Pipe ByteString ByteString o u m[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:headerLines",
      "description": {
        "fct-descr": "\u003cp\u003eAll the header lines until we see \u003ca\u003eHMM\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Pipe ByteString ByteString o u m [ByteString]",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#headerLines",
        "fct-type": "function",
        "title": "headerLines"
      },
      "index": {
        "description": "All the header lines until we see HMM",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "headerLines",
        "normalized": "Pipe ByteString ByteString a b c[ByteString]",
        "package": "BiobaseInfernal",
        "partial": "Lines",
        "signature": "Pipe ByteString ByteString o u m[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:headerMap",
      "description": {
        "fct-descr": "\u003cp\u003ecreate associative map of the key/value data.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[ByteString] -\u003e Map ByteString ByteString",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#headerMap",
        "fct-type": "function",
        "title": "headerMap"
      },
      "index": {
        "description": "create associative map of the key value data",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "headerMap",
        "normalized": "[ByteString]-\u003eMap ByteString ByteString",
        "package": "BiobaseInfernal",
        "partial": "Map",
        "signature": "[ByteString]-\u003eMap ByteString ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:legalHMM",
      "description": {
        "fct-descr": "\u003cp\u003eCheck, if we have a legal HMMER3 model.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe ByteString -\u003e Bool",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#legalHMM",
        "fct-type": "function",
        "title": "legalHMM"
      },
      "index": {
        "description": "Check if we have legal HMMER3 model",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "legalHMM",
        "normalized": "Maybe ByteString-\u003eBool",
        "package": "BiobaseInfernal",
        "partial": "HMM",
        "signature": "Maybe ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:parseBegin",
      "description": {
        "fct-descr": "\u003cp\u003eParse the two beginning lines.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "t -\u003e Pipe l ByteString o u m Node",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#parseBegin",
        "fct-type": "function",
        "title": "parseBegin"
      },
      "index": {
        "description": "Parse the two beginning lines",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "parseBegin",
        "normalized": "a-\u003ePipe b ByteString c d e Node",
        "package": "BiobaseInfernal",
        "partial": "Begin",
        "signature": "t-\u003ePipe l ByteString o u m Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:parseHMM3",
      "description": {
        "fct-descr": "\u003cp\u003eTODO not everything is currently being parsed. Notably the rf,cs,alignmap\n annotations.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Pipe ByteString ByteString o u m HMM3",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#parseHMM3",
        "fct-type": "function",
        "title": "parseHMM3"
      },
      "index": {
        "description": "TODO not everything is currently being parsed Notably the rf cs alignmap annotations",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "parseHMM3",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:parseNodes",
      "description": {
        "fct-descr": "\u003cp\u003eParse all individual nodes, except the first one, which uses \u003ccode\u003e\u003ca\u003eparseBegin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Int -\u003e Pipe ByteString ByteString o u m [Node]",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#parseNodes",
        "fct-type": "function",
        "title": "parseNodes"
      },
      "index": {
        "description": "Parse all individual nodes except the first one which uses parseBegin",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "parseNodes",
        "normalized": "Int-\u003ePipe ByteString ByteString a b c[Node]",
        "package": "BiobaseInfernal",
        "partial": "Nodes",
        "signature": "Int-\u003ePipe ByteString ByteString o u m[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readAlph",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine which alphabet is in use by the HMM.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString -\u003e Alphabet",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#readAlph",
        "fct-type": "function",
        "title": "readAlph"
      },
      "index": {
        "description": "Determine which alphabet is in use by the HMM",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "readAlph",
        "normalized": "ByteString-\u003eAlphabet",
        "package": "BiobaseInfernal",
        "partial": "Alph",
        "signature": "ByteString-\u003eAlphabet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readBS",
      "description": {
        "fct-descr": "\u003cp\u003eRead from a bytestring into a structure.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString -\u003e c",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#readBS",
        "fct-type": "function",
        "title": "readBS"
      },
      "index": {
        "description": "Read from bytestring into structure",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "readBS",
        "normalized": "ByteString-\u003ea",
        "package": "BiobaseInfernal",
        "partial": "BS",
        "signature": "ByteString-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readBoolean",
      "description": {
        "fct-descr": "\u003cp\u003eRead boolean flags.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#readBoolean",
        "fct-type": "function",
        "title": "readBoolean"
      },
      "index": {
        "description": "Read boolean flags",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "readBoolean",
        "normalized": "ByteString-\u003eBool",
        "package": "BiobaseInfernal",
        "partial": "Boolean",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readNLP",
      "description": {
        "fct-descr": "\u003cp\u003eRead a HMMER negated log-probability.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "String -\u003e NegLogProb",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#readNLP",
        "fct-type": "function",
        "title": "readNLP"
      },
      "index": {
        "description": "Read HMMER negated log-probability",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "readNLP",
        "normalized": "String-\u003eNegLogProb",
        "package": "BiobaseInfernal",
        "partial": "NLP",
        "signature": "String-\u003eNegLogProb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:sathLines",
      "description": {
        "fct-descr": "\u003cp\u003eRead the alphabet and transition lines.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Pipe l ByteString o u m ([ByteString], [ByteString])",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#sathLines",
        "fct-type": "function",
        "title": "sathLines"
      },
      "index": {
        "description": "Read the alphabet and transition lines",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "sathLines",
        "normalized": "Pipe a ByteString b c d([ByteString],[ByteString])",
        "package": "BiobaseInfernal",
        "partial": "Lines",
        "signature": "Pipe l ByteString o u m([ByteString],[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eSimple test for the HMMer parser.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "IO ()",
        "fct-source": "src/Biobase-SElab-HMM-Import.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Simple test for the HMMer parser",
        "hierarchy": "Biobase SElab HMM Import",
        "module": "Biobase.SElab.HMM.Import",
        "name": "test",
        "normalized": "IO()",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-HMM.html",
        "fct-type": "module",
        "title": "HMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "HMM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:Alphabet",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "data",
        "title": "Alphabet"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Alphabet",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Alphabet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:HMM",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM",
        "fct-type": "data",
        "title": "HMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "HMM",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:HMM3",
      "description": {
        "fct-descr": "\u003cp\u003eThe HMM3 data structure in ``slow mode''.\n\u003c/p\u003e\u003cp\u003eTODO shouldn't this be \u003ca\u003eIdentification Pfam\u003c/a\u003e ?\n\u003c/p\u003e\u003cp\u003eTODO maybe redo the whole \u003ca\u003eidd\u003c/a\u003e idea and just keep the string?\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "data",
        "title": "HMM3"
      },
      "index": {
        "description": "The HMM3 data structure in slow mode TODO shouldn this be Identification Pfam TODO maybe redo the whole idd idea and just keep the string",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "HMM3",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:NegLogProb",
      "description": {
        "fct-descr": "\u003cp\u003eNegated natural logarithm of probability.\n\u003c/p\u003e\u003cp\u003eTODO put into types stuff\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-HMM.html#NegLogProb",
        "fct-type": "newtype",
        "title": "NegLogProb"
      },
      "index": {
        "description": "Negated natural logarithm of probability TODO put into types stuff",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "NegLogProb",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Neg Log Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eThe nodes in an HMM. Starting with Node \u003ca\u003e0\u003c/a\u003e for BEGIN.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-HMM.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "The nodes in an HMM Starting with Node for BEGIN",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Node",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Amino",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Amino",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "function",
        "title": "Amino"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Amino",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Amino",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Coins",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Coins",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "function",
        "title": "Coins"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Coins",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Coins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Custom",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Custom",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Custom",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:DNA",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "DNA",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "function",
        "title": "DNA"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "DNA",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "DNA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Dice",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Dice",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "function",
        "title": "Dice"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Dice",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Dice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:HMM3",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "HMM3",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "HMM3"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "HMM3",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "HMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:NLP",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "NLP Double",
        "fct-source": "src/Biobase-SElab-HMM.html#NegLogProb",
        "fct-type": "function",
        "title": "NLP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "NLP",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "NLP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Node",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Node",
        "fct-source": "src/Biobase-SElab-HMM.html#Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "Node",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:RNA",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "RNA",
        "fct-source": "src/Biobase-SElab-HMM.html#Alphabet",
        "fct-type": "function",
        "title": "RNA"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "RNA",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "RNA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_acc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe (Accession HMM)",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_acc"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_acc",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_alignMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Bool",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_alignMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_alignMap",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_alph",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Alphabet",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_alph"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_alph",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_compo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_compo"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_compo",
        "normalized": "[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_cs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Bool",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_cs"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_cs",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_date",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_date"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_date",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_description",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_description"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_description",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_idd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Identification HMM",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_idd"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_idd",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_insertE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#Node",
        "fct-type": "function",
        "title": "_insertE"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_insertE",
        "normalized": "[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_leng",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_leng"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_leng",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_matchE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#Node",
        "fct-type": "function",
        "title": "_matchE"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_matchE",
        "normalized": "[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_nid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-SElab-HMM.html#Node",
        "fct-type": "function",
        "title": "_nid"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_nid",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_nodes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[Node]",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_nodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_nodes",
        "normalized": "[Node]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_rf",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Bool",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_rf"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_rf",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_symAlph",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_symAlph"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_symAlph",
        "normalized": "[ByteString]",
        "package": "BiobaseInfernal",
        "partial": "Alph",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_trans",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#Node",
        "fct-type": "function",
        "title": "_trans"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_trans",
        "normalized": "[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_transHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_transHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_transHeaders",
        "normalized": "[ByteString]",
        "package": "BiobaseInfernal",
        "partial": "Headers",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "(ByteString, ByteString)",
        "fct-source": "src/Biobase-SElab-HMM.html#HMM3",
        "fct-type": "function",
        "title": "_version"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "_version",
        "normalized": "(ByteString,ByteString)",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:acc",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 (Maybe (Accession HMM))",
        "fct-source": "src/Biobase-SElab-HMM.html#acc",
        "fct-type": "function",
        "title": "acc"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "acc",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:alignMap",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 Bool",
        "fct-source": "src/Biobase-SElab-HMM.html#alignMap",
        "fct-type": "function",
        "title": "alignMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "alignMap",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:alph",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 Alphabet",
        "fct-source": "src/Biobase-SElab-HMM.html#alph",
        "fct-type": "function",
        "title": "alph"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "alph",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:compo",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 [NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#compo",
        "fct-type": "function",
        "title": "compo"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "compo",
        "normalized": "Lens' HMM[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' HMM[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:cs",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 Bool",
        "fct-source": "src/Biobase-SElab-HMM.html#cs",
        "fct-type": "function",
        "title": "cs"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "cs",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:date",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 ByteString",
        "fct-source": "src/Biobase-SElab-HMM.html#date",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "date",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:description",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 (Maybe ByteString)",
        "fct-source": "src/Biobase-SElab-HMM.html#description",
        "fct-type": "function",
        "title": "description"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "description",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:idd",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 (Identification HMM)",
        "fct-source": "src/Biobase-SElab-HMM.html#idd",
        "fct-type": "function",
        "title": "idd"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "idd",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:insertE",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Node [NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#insertE",
        "fct-type": "function",
        "title": "insertE"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "insertE",
        "normalized": "Lens' Node[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' Node[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:leng",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 Int",
        "fct-source": "src/Biobase-SElab-HMM.html#leng",
        "fct-type": "function",
        "title": "leng"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "leng",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:matchE",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Node [NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#matchE",
        "fct-type": "function",
        "title": "matchE"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "matchE",
        "normalized": "Lens' Node[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' Node[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:nid",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Node Int",
        "fct-source": "src/Biobase-SElab-HMM.html#nid",
        "fct-type": "function",
        "title": "nid"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "nid",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:nodes",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 [Node]",
        "fct-source": "src/Biobase-SElab-HMM.html#nodes",
        "fct-type": "function",
        "title": "nodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "nodes",
        "normalized": "Lens' HMM[Node]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' HMM[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:rf",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 Bool",
        "fct-source": "src/Biobase-SElab-HMM.html#rf",
        "fct-type": "function",
        "title": "rf"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "rf",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:symAlph",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 [ByteString]",
        "fct-source": "src/Biobase-SElab-HMM.html#symAlph",
        "fct-type": "function",
        "title": "symAlph"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "symAlph",
        "normalized": "Lens' HMM[ByteString]",
        "package": "BiobaseInfernal",
        "partial": "Alph",
        "signature": "Lens' HMM[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:trans",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Node [NegLogProb]",
        "fct-source": "src/Biobase-SElab-HMM.html#trans",
        "fct-type": "function",
        "title": "trans"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "trans",
        "normalized": "Lens' Node[NegLogProb]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' Node[NegLogProb]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:transHeaders",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 [ByteString]",
        "fct-source": "src/Biobase-SElab-HMM.html#transHeaders",
        "fct-type": "function",
        "title": "transHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "transHeaders",
        "normalized": "Lens' HMM[ByteString]",
        "package": "BiobaseInfernal",
        "partial": "Headers",
        "signature": "Lens' HMM[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:version",
      "description": {
        "fct-module": "Biobase.SElab.HMM",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' HMM3 (ByteString, ByteString)",
        "fct-source": "src/Biobase-SElab-HMM.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab HMM",
        "module": "Biobase.SElab.HMM",
        "name": "version",
        "normalized": "Lens' HMM(ByteString,ByteString)",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' HMM(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-RfamNames-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames Import",
        "module": "Biobase.SElab.RfamNames.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:fromFile",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "String -\u003e IO (Map (Identification Rfam) [ModelNames], Map (Accession Rfam) [ModelNames])",
        "fct-source": "src/Biobase-SElab-RfamNames-Import.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames Import",
        "module": "Biobase.SElab.RfamNames.Import",
        "name": "fromFile",
        "normalized": "String-\u003eIO(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])",
        "package": "BiobaseInfernal",
        "partial": "File",
        "signature": "String-\u003eIO(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:mapAcRfamNames",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Pipe l ModelNames o u m (Map (Accession Rfam) [ModelNames])",
        "fct-source": "src/Biobase-SElab-RfamNames-Import.html#mapAcRfamNames",
        "fct-type": "function",
        "title": "mapAcRfamNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames Import",
        "module": "Biobase.SElab.RfamNames.Import",
        "name": "mapAcRfamNames",
        "normalized": "Pipe a ModelNames b c d(Map(Accession Rfam)[ModelNames])",
        "package": "BiobaseInfernal",
        "partial": "Ac Rfam Names",
        "signature": "Pipe l ModelNames o u m(Map(Accession Rfam)[ModelNames])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:mapIdRfamNames",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Pipe l ModelNames o u m (Map (Identification Rfam) [ModelNames])",
        "fct-source": "src/Biobase-SElab-RfamNames-Import.html#mapIdRfamNames",
        "fct-type": "function",
        "title": "mapIdRfamNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames Import",
        "module": "Biobase.SElab.RfamNames.Import",
        "name": "mapIdRfamNames",
        "normalized": "Pipe a ModelNames b c d(Map(Identification Rfam)[ModelNames])",
        "package": "BiobaseInfernal",
        "partial": "Id Rfam Names",
        "signature": "Pipe l ModelNames o u m(Map(Identification Rfam)[ModelNames])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:mkRfamName",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Parser ByteString ModelNames",
        "fct-source": "src/Biobase-SElab-RfamNames-Import.html#mkRfamName",
        "fct-type": "function",
        "title": "mkRfamName"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames Import",
        "module": "Biobase.SElab.RfamNames.Import",
        "name": "mkRfamName",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Rfam Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:parse",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Sink ByteString m (Map (Identification Rfam) [ModelNames], Map (Accession Rfam) [ModelNames])",
        "fct-source": "src/Biobase-SElab-RfamNames-Import.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames Import",
        "module": "Biobase.SElab.RfamNames.Import",
        "name": "parse",
        "normalized": "Sink ByteString a(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Sink ByteString m(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe database of Rfam \u003ca\u003enames\u003c/a\u003e. For each model, we get to know which\n sequences it is built of, what the AC of the species is, and its name (or\n ID).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-RfamNames.html",
        "fct-type": "module",
        "title": "RfamNames"
      },
      "index": {
        "description": "The database of Rfam names For each model we get to know which sequences it is built of what the AC of the species is and its name or ID",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "RfamNames",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Rfam Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#t:ModelNames",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-RfamNames.html#ModelNames",
        "fct-type": "data",
        "title": "ModelNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "ModelNames",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Model Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:ModelNames",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ModelNames",
        "fct-source": "src/Biobase-SElab-RfamNames.html#ModelNames",
        "fct-type": "function",
        "title": "ModelNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "ModelNames",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Model Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_modelAC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "!(Accession Rfam)",
        "fct-source": "src/Biobase-SElab-RfamNames.html#ModelNames",
        "fct-type": "function",
        "title": "_modelAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "_modelAC",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_modelID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "!(Identification Rfam)",
        "fct-source": "src/Biobase-SElab-RfamNames.html#ModelNames",
        "fct-type": "function",
        "title": "_modelID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "_modelID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_speciesAC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe (Accession Species)",
        "fct-source": "src/Biobase-SElab-RfamNames.html#ModelNames",
        "fct-type": "function",
        "title": "_speciesAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "_speciesAC",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_speciesID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Maybe (Identification Species)",
        "fct-source": "src/Biobase-SElab-RfamNames.html#ModelNames",
        "fct-type": "function",
        "title": "_speciesID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "_speciesID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:modelAC",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' ModelNames (Accession Rfam)",
        "fct-source": "src/Biobase-SElab-RfamNames.html#modelAC",
        "fct-type": "function",
        "title": "modelAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "modelAC",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:modelID",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' ModelNames (Identification Rfam)",
        "fct-source": "src/Biobase-SElab-RfamNames.html#modelID",
        "fct-type": "function",
        "title": "modelID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "modelID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:speciesAC",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' ModelNames (Maybe (Accession Species))",
        "fct-source": "src/Biobase-SElab-RfamNames.html#speciesAC",
        "fct-type": "function",
        "title": "speciesAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "speciesAC",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:speciesID",
      "description": {
        "fct-module": "Biobase.SElab.RfamNames",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' ModelNames (Maybe (Identification Species))",
        "fct-source": "src/Biobase-SElab-RfamNames.html#speciesID",
        "fct-type": "function",
        "title": "speciesID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab RfamNames",
        "module": "Biobase.SElab.RfamNames",
        "name": "speciesID",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee-based importer. Provides a simple \u003ca\u003efromFile\u003c/a\u003e function that\n produces both maps in one pass.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.Taxonomy.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-Taxonomy-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Iteratee-based importer Provides simple fromFile function that produces both maps in one pass",
        "hierarchy": "Biobase SElab Taxonomy Import",
        "module": "Biobase.SElab.Taxonomy.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:fromFile",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "String -\u003e IO (Map (Identification Species) Taxonomy, Map (Accession Species) Taxonomy)",
        "fct-source": "src/Biobase-SElab-Taxonomy-Import.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy Import",
        "module": "Biobase.SElab.Taxonomy.Import",
        "name": "fromFile",
        "normalized": "String-\u003eIO(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)",
        "package": "BiobaseInfernal",
        "partial": "File",
        "signature": "String-\u003eIO(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:mapAcTaxonomy",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "GSink Taxonomy m (Map (Accession Species) Taxonomy)",
        "fct-source": "src/Biobase-SElab-Taxonomy-Import.html#mapAcTaxonomy",
        "fct-type": "function",
        "title": "mapAcTaxonomy"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy Import",
        "module": "Biobase.SElab.Taxonomy.Import",
        "name": "mapAcTaxonomy",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Ac Taxonomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:mapIdTaxonomy",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "GSink Taxonomy m (Map (Identification Species) Taxonomy)",
        "fct-source": "src/Biobase-SElab-Taxonomy-Import.html#mapIdTaxonomy",
        "fct-type": "function",
        "title": "mapIdTaxonomy"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy Import",
        "module": "Biobase.SElab.Taxonomy.Import",
        "name": "mapIdTaxonomy",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Id Taxonomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:mkTaxonomy",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Parser Taxonomy",
        "fct-source": "src/Biobase-SElab-Taxonomy-Import.html#mkTaxonomy",
        "fct-type": "function",
        "title": "mkTaxonomy"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy Import",
        "module": "Biobase.SElab.Taxonomy.Import",
        "name": "mkTaxonomy",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Taxonomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:parse",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy.Import",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Sink ByteString m (Map (Identification Species) Taxonomy, Map (Accession Species) Taxonomy)",
        "fct-source": "src/Biobase-SElab-Taxonomy-Import.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy Import",
        "module": "Biobase.SElab.Taxonomy.Import",
        "name": "parse",
        "normalized": "Sink ByteString a(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Sink ByteString m(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfernal contains a taxonomy database. This is a simple module reflecting\n said database.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-Taxonomy.html",
        "fct-type": "module",
        "title": "Taxonomy"
      },
      "index": {
        "description": "Infernal contains taxonomy database This is simple module reflecting said database",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "Taxonomy",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Taxonomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#t:Taxonomy",
      "description": {
        "fct-descr": "\u003cp\u003eFor each species, we store the name and a classification list from most\n general (head) to most specific (last). The database comes with the NCBI\n taxon identifier (taxid).\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
        "fct-type": "data",
        "title": "Taxonomy"
      },
      "index": {
        "description": "For each species we store the name and classification list from most general head to most specific last The database comes with the NCBI taxon identifier taxid",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "Taxonomy",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Taxonomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:Taxonomy",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Taxonomy",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
        "fct-type": "function",
        "title": "Taxonomy"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "Taxonomy",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Taxonomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:_accession",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "!(Accession Species)",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
        "fct-type": "function",
        "title": "_accession"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "_accession",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:_classification",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "[Classification]",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
        "fct-type": "function",
        "title": "_classification"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "_classification",
        "normalized": "[Classification]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "[Classification]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "!(Identification Species)",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
        "fct-type": "function",
        "title": "_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "_name",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:accession",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Taxonomy (Accession Species)",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#accession",
        "fct-type": "function",
        "title": "accession"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "accession",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:classification",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Taxonomy [Classification]",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#classification",
        "fct-type": "function",
        "title": "classification"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "classification",
        "normalized": "Lens' Taxonomy[Classification]",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": "Lens' Taxonomy[Classification]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:name",
      "description": {
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Lens' Taxonomy (Identification Species)",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "name",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:shortenName",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a name such as \u003ca\u003eDrosophila Melanogaster\u003c/a\u003e, returns \u003ca\u003ed.melanogaster\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Taxonomy",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Identification Species -\u003e Identification Species",
        "fct-source": "src/Biobase-SElab-Taxonomy.html#shortenName",
        "fct-type": "function",
        "title": "shortenName"
      },
      "index": {
        "description": "Given name such as Drosophila Melanogaster returns d.melanogaster",
        "hierarchy": "Biobase SElab Taxonomy",
        "module": "Biobase.SElab.Taxonomy",
        "name": "shortenName",
        "normalized": "Identification Species-\u003eIdentification Species",
        "package": "BiobaseInfernal",
        "partial": "Name",
        "signature": "Identification Species-\u003eIdentification Species"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfernal Stockholm files and covariance models, and other related files\n use a bunch of different identifiers. We provide newtypes for more type\n safety.\n\u003c/p\u003e\u003cp\u003eTODO Use (Bio.Core.Sequence.Offset) instead of Int for sequence info\n\u003c/p\u003e\u003cp\u003eTODO move \u003ccode\u003e\u003ca\u003eBitScore\u003c/a\u003e\u003c/code\u003es, null models, probabilities into its own library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "module",
        "fct-source": "src/Biobase-SElab-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Infernal Stockholm files and covariance models and other related files use bunch of different identifiers We provide newtypes for more type safety TODO Use Bio.Core.Sequence.Offset instead of Int for sequence info TODO move BitScore null models probabilities into its own library",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Types",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Accession",
      "description": {
        "fct-descr": "\u003cp\u003eAccession number, in the format of RFxxxxx, PFxxxxx, or CLxxxxx. We keep\n only the Int-part. A phantom type specifies which kind of accession number\n this is. For Species, we just have an index, it seems.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-Types.html#Accession",
        "fct-type": "newtype",
        "title": "Accession"
      },
      "index": {
        "description": "Accession number in the format of RFxxxxx PFxxxxx or CLxxxxx We keep only the Int-part phantom type specifies which kind of accession number this is For Species we just have an index it seems",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Accession",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Accession",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:BitScore",
      "description": {
        "fct-descr": "\u003cp\u003eInfernal bit score. Behaves like a double (deriving Num).\n\u003c/p\u003e\u003cp\u003eInfernal users guide, p.42: log-odds score in log_2 (aka bits).\n\u003c/p\u003e\u003cp\u003eS = log_2 (P(seq|CM) / P(seq|null))\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-Types.html#BitScore",
        "fct-type": "newtype",
        "title": "BitScore"
      },
      "index": {
        "description": "Infernal bit score Behaves like double deriving Num Infernal users guide p.42 log-odds score in log aka bits log seq CM seq null",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "BitScore",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Bit Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Clan",
      "description": {
        "fct-descr": "\u003cp\u003eTag as being a clan.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-Types.html#Clan",
        "fct-type": "data",
        "title": "Clan"
      },
      "index": {
        "description": "Tag as being clan",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Clan",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Clan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Classification",
      "description": {
        "fct-descr": "\u003cp\u003eClassification names (taxonomic classification)\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-Types.html#Classification",
        "fct-type": "newtype",
        "title": "Classification"
      },
      "index": {
        "description": "Classification names taxonomic classification",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Classification",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Classification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Identification",
      "description": {
        "fct-descr": "\u003cp\u003eOne word name for the family or clan. Phantom-typed with the correct type\n of model. Can be a longer name for species.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-SElab-Types.html#Identification",
        "fct-type": "newtype",
        "title": "Identification"
      },
      "index": {
        "description": "One word name for the family or clan Phantom-typed with the correct type of model Can be longer name for species",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Identification",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Identification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Pfam",
      "description": {
        "fct-descr": "\u003cp\u003eTag as being a Pfam model.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-Types.html#Pfam",
        "fct-type": "data",
        "title": "Pfam"
      },
      "index": {
        "description": "Tag as being Pfam model",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Pfam",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Pfam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Rfam",
      "description": {
        "fct-descr": "\u003cp\u003eTag as being an Rfam model. Used for Stockholm and CM files.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-Types.html#Rfam",
        "fct-type": "data",
        "title": "Rfam"
      },
      "index": {
        "description": "Tag as being an Rfam model Used for Stockholm and CM files",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Rfam",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Rfam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Species",
      "description": {
        "fct-descr": "\u003cp\u003eSpecies have an accession number, too.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "data",
        "fct-source": "src/Biobase-SElab-Types.html#Species",
        "fct-type": "data",
        "title": "Species"
      },
      "index": {
        "description": "Species have an accession number too",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Species",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Species",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:ACC",
      "description": {
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ACC",
        "fct-source": "src/Biobase-SElab-Types.html#Accession",
        "fct-type": "function",
        "title": "ACC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "ACC",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ACC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:BitScore",
      "description": {
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "BitScore",
        "fct-source": "src/Biobase-SElab-Types.html#BitScore",
        "fct-type": "function",
        "title": "BitScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "BitScore",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Bit Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:Classification",
      "description": {
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Classification",
        "fct-source": "src/Biobase-SElab-Types.html#Classification",
        "fct-type": "function",
        "title": "Classification"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "Classification",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Classification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:IDD",
      "description": {
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "IDD",
        "fct-source": "src/Biobase-SElab-Types.html#Identification",
        "fct-type": "function",
        "title": "IDD"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "IDD",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "IDD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:prob2Score",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a null model and a probability, calculate the corresponding\n \u003ccode\u003e\u003ca\u003eBitScore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Double -\u003e Double -\u003e BitScore",
        "fct-source": "src/Biobase-SElab-Types.html#prob2Score",
        "fct-type": "function",
        "title": "prob2Score"
      },
      "index": {
        "description": "Given null model and probability calculate the corresponding BitScore",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "prob2Score",
        "normalized": "Double-\u003eDouble-\u003eBitScore",
        "package": "BiobaseInfernal",
        "partial": "Score",
        "signature": "Double-\u003eDouble-\u003eBitScore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:score2Prob",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a null model and a \u003ccode\u003e\u003ca\u003eBitScore\u003c/a\u003e\u003c/code\u003e return the corresponding probability.\n\u003c/p\u003e",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Double -\u003e BitScore -\u003e Double",
        "fct-source": "src/Biobase-SElab-Types.html#score2Prob",
        "fct-type": "function",
        "title": "score2Prob"
      },
      "index": {
        "description": "Given null model and BitScore return the corresponding probability",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "score2Prob",
        "normalized": "Double-\u003eBitScore-\u003eDouble",
        "package": "BiobaseInfernal",
        "partial": "Prob",
        "signature": "Double-\u003eBitScore-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unACC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-SElab-Types.html#Accession",
        "fct-type": "function",
        "title": "unACC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "unACC",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "ACC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unBitScore",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "Double",
        "fct-source": "src/Biobase-SElab-Types.html#BitScore",
        "fct-type": "function",
        "title": "unBitScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "unBitScore",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Bit Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unClassification",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-SElab-Types.html#Classification",
        "fct-type": "function",
        "title": "unClassification"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "unClassification",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "Classification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unIDD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.SElab.Types",
        "fct-package": "BiobaseInfernal",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-SElab-Types.html#Identification",
        "fct-type": "function",
        "title": "unIDD"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase SElab Types",
        "module": "Biobase.SElab.Types",
        "name": "unIDD",
        "normalized": "",
        "package": "BiobaseInfernal",
        "partial": "IDD",
        "signature": ""
      }
    }
  }
]