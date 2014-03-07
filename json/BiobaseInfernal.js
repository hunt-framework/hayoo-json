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
        "word": "BiobaseInfernal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParses text-based covariance-model descriptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.CM.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Parses text-based covariance-model descriptions",
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "finishedHeader",
          "package": "BiobaseInfernal",
          "signature": "Maybe ByteString -\u003e Bool",
          "source": "src/Biobase-SElab-CM-Import.html#finishedHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "finishedHeader",
          "normalized": "Maybe ByteString-\u003eBool",
          "package": "BiobaseInfernal",
          "partial": "Header",
          "signature": "Maybe ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:finishedHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "fromFile",
          "package": "BiobaseInfernal",
          "signature": "FilePath -\u003e IO [CM]",
          "source": "src/Biobase-SElab-CM-Import.html#fromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO[CM]",
          "package": "BiobaseInfernal",
          "partial": "File",
          "signature": "FilePath-\u003eIO[CM]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a line is a node line (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e). If yes, we'll get the node\n type as string and the node identifier, too.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM.Import",
          "name": "isNode",
          "package": "BiobaseInfernal",
          "signature": "Maybe ByteString -\u003e Maybe (NodeType, NodeID)",
          "source": "src/Biobase-SElab-CM-Import.html#isNode",
          "type": "function"
        },
        "index": {
          "description": "Determine if line is node line Just If yes we ll get the node type as string and the node identifier too",
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "isNode",
          "normalized": "Maybe ByteString-\u003eMaybe(NodeType,NodeID)",
          "package": "BiobaseInfernal",
          "partial": "Node",
          "signature": "Maybe ByteString-\u003eMaybe(NodeType,NodeID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:isNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "lineParser",
          "package": "BiobaseInfernal",
          "signature": "Parser b -\u003e Pipe l ByteString o u m b",
          "source": "src/Biobase-SElab-CM-Import.html#lineParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "lineParser",
          "normalized": "Parser a-\u003ePipe b ByteString c d e a",
          "package": "BiobaseInfernal",
          "partial": "Parser",
          "signature": "Parser b-\u003ePipe l ByteString o u m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:lineParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level parser for Infernal 1.0 and 1.1 human-readable covariance\n models. Reads all lines first, then builds up the CM.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseCM1x",
          "package": "BiobaseInfernal",
          "signature": "Conduit ByteString m CM",
          "source": "src/Biobase-SElab-CM-Import.html#parseCM1x",
          "type": "function"
        },
        "index": {
          "description": "Top-level parser for Infernal and human-readable covariance models Reads all lines first then builds up the CM",
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseCM1x",
          "package": "BiobaseInfernal",
          "partial": "CM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseCM1x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "parseHeader",
          "package": "BiobaseInfernal",
          "signature": "Parser CMVersion",
          "source": "src/Biobase-SElab-CM-Import.html#parseHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseHeader",
          "package": "BiobaseInfernal",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfernal 1.0 header parser. Greps all lines until the \u003ca\u003eMODEL:\u003c/a\u003e line, then\n return lines to top-level parser. Parses three lines at once in case of\n \u003ca\u003eFT-\u003c/a\u003e lines.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseHeaders",
          "package": "BiobaseInfernal",
          "signature": "[ByteString] -\u003e Pipe l ByteString o u m (Map ByteString ByteString)",
          "source": "src/Biobase-SElab-CM-Import.html#parseHeaders",
          "type": "function"
        },
        "index": {
          "description": "Infernal header parser Greps all lines until the MODEL line then return lines to top-level parser Parses three lines at once in case of FT lines",
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseHeaders",
          "normalized": "[ByteString]-\u003ePipe a ByteString b c d(Map ByteString ByteString)",
          "package": "BiobaseInfernal",
          "partial": "Headers",
          "signature": "[ByteString]-\u003ePipe l ByteString o u m(Map ByteString ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "parseNodes",
          "package": "BiobaseInfernal",
          "signature": "CMVersion -\u003e [(NodeType, NodeID, [State])] -\u003e Pipe ByteString ByteString o u m [(NodeType, NodeID, [State])]",
          "source": "src/Biobase-SElab-CM-Import.html#parseNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseNodes",
          "normalized": "CMVersion-\u003e[(NodeType,NodeID,[State])]-\u003ePipe ByteString ByteString a b c[(NodeType,NodeID,[State])]",
          "package": "BiobaseInfernal",
          "partial": "Nodes",
          "signature": "CMVersion-\u003e[(NodeType,NodeID,[State])]-\u003ePipe ByteString ByteString o u m[(NodeType,NodeID,[State])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "parseState",
          "package": "BiobaseInfernal",
          "signature": "CMVersion -\u003e NodeType -\u003e NodeID -\u003e ByteString -\u003e State",
          "source": "src/Biobase-SElab-CM-Import.html#parseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseState",
          "normalized": "CMVersion-\u003eNodeType-\u003eNodeID-\u003eByteString-\u003eState",
          "package": "BiobaseInfernal",
          "partial": "State",
          "signature": "CMVersion-\u003eNodeType-\u003eNodeID-\u003eByteString-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "parseStates",
          "package": "BiobaseInfernal",
          "signature": "CMVersion -\u003e NodeType -\u003e NodeID -\u003e [State] -\u003e Pipe ByteString ByteString o u m [State]",
          "source": "src/Biobase-SElab-CM-Import.html#parseStates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "parseStates",
          "normalized": "CMVersion-\u003eNodeType-\u003eNodeID-\u003e[State]-\u003ePipe ByteString ByteString a b c[State]",
          "package": "BiobaseInfernal",
          "partial": "States",
          "signature": "CMVersion-\u003eNodeType-\u003eNodeID-\u003e[State]-\u003ePipe ByteString ByteString o u m[State]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:parseStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "readAccession",
          "package": "BiobaseInfernal",
          "signature": "ByteString -\u003e a",
          "source": "src/Biobase-SElab-CM-Import.html#readAccession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "readAccession",
          "normalized": "ByteString-\u003ea",
          "package": "BiobaseInfernal",
          "partial": "Accession",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:readAccession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "readBS",
          "package": "BiobaseInfernal",
          "signature": "ByteString -\u003e c",
          "source": "src/Biobase-SElab-CM-Import.html#readBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "readBS",
          "normalized": "ByteString-\u003ea",
          "package": "BiobaseInfernal",
          "partial": "BS",
          "signature": "ByteString-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:readBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "readBitScore",
          "package": "BiobaseInfernal",
          "signature": "ByteString -\u003e BitScore",
          "source": "src/Biobase-SElab-CM-Import.html#readBitScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "readBitScore",
          "normalized": "ByteString-\u003eBitScore",
          "package": "BiobaseInfernal",
          "partial": "Bit Score",
          "signature": "ByteString-\u003eBitScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:readBitScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM.Import",
          "name": "test",
          "package": "BiobaseInfernal",
          "signature": "IO ()",
          "source": "src/Biobase-SElab-CM-Import.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM Import",
          "module": "Biobase.SElab.CM.Import",
          "name": "test",
          "normalized": "IO()",
          "package": "BiobaseInfernal",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM-Import.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfernal CMs.\n\u003c/p\u003e\u003cp\u003eTODO order of nucleotides? ACGU?\n\u003c/p\u003e\u003cp\u003eTODO \u003ca\u003efastCM :: CM -\u003e FastCM\u003c/a\u003e to make a data structure that is suitable for\n high-performance applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.CM",
          "name": "CM",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html",
          "type": "module"
        },
        "index": {
          "description": "Infernal CMs TODO order of nucleotides ACGU TODO fastCM CM FastCM to make data structure that is suitable for high-performance applications",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "CM",
          "package": "BiobaseInfernal",
          "partial": "CM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of model accession numbers to individual CMs.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "AC2CM",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#AC2CM",
          "type": "type"
        },
        "index": {
          "description": "Map of model accession numbers to individual CMs",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "AC2CM",
          "package": "BiobaseInfernal",
          "partial": "AC CM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:AC2CM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an Infernal covariance model. We have a number of blocks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e basic information like the name of the CM, accession number, etc.\n\u003c/li\u003e\u003cli\u003e advanced information: nodes and their states, and the states themselves.\n\u003c/li\u003e\u003cli\u003e unsorted information from the header / blasic block\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCM\u003c/a\u003e\u003c/code\u003e data structure is not suitable for high-performance applications.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e score inequalities: trusted (lowest seed score) \u003e= gathering (lowest full\n score) \u003e= noise (random strings)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLocal entries into the CM.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003elocalBegin\u003c/a\u003e lens returns a map of state id's. We either have just the\n root node (with the \u003ca\u003eS\u003c/a\u003e state), or a set of states with type: MP,ML,MR,B.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003elocalEnd\u003c/a\u003e lens on the other hand is the set of possible early exits\n from the model.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "CM",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "data"
        },
        "index": {
          "description": "This is an Infernal covariance model We have number of blocks basic information like the name of the CM accession number etc advanced information nodes and their states and the states themselves unsorted information from the header blasic block The CM data structure is not suitable for high-performance applications score inequalities trusted lowest seed score gathering lowest full score noise random strings Local entries into the CM The localBegin lens returns map of state id We either have just the root node with the state or set of states with type MP ML MR The localEnd lens on the other hand is the set of possible early exits from the model",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "CM",
          "package": "BiobaseInfernal",
          "partial": "CM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:CM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the CM versions we can parse\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "CMVersion",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#CMVersion",
          "type": "data"
        },
        "index": {
          "description": "Encode the CM versions we can parse",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "CMVersion",
          "package": "BiobaseInfernal",
          "partial": "CMVersion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:CMVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertain states (IL,IR,ML,MR) emit a single nucleotide, one state emits a\n pair (MP), other states emit nothing.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "Emits",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#Emits",
          "type": "data"
        },
        "index": {
          "description": "Certain states IL IR ML MR emit single nucleotide one state emits pair MP other states emit nothing",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "Emits",
          "package": "BiobaseInfernal",
          "partial": "Emits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:Emits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of model names to individual CMs.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "ID2CM",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#ID2CM",
          "type": "type"
        },
        "index": {
          "description": "Map of model names to individual CMs",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "ID2CM",
          "package": "BiobaseInfernal",
          "partial": "ID CM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:ID2CM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode IDs\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "NodeID",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#NodeID",
          "type": "newtype"
        },
        "index": {
          "description": "Node IDs",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "NodeID",
          "package": "BiobaseInfernal",
          "partial": "Node ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:NodeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode CM node types.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "NodeType",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "data"
        },
        "index": {
          "description": "Encode CM node types",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "NodeType",
          "package": "BiobaseInfernal",
          "partial": "Node Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:NodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single state.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "State",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "data"
        },
        "index": {
          "description": "single state",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "State",
          "package": "BiobaseInfernal",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState IDs\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "StateID",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#StateID",
          "type": "newtype"
        },
        "index": {
          "description": "State IDs",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "StateID",
          "package": "BiobaseInfernal",
          "partial": "State ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:StateID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode CM state types.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "StateType",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "data"
        },
        "index": {
          "description": "Encode CM state types",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "StateType",
          "package": "BiobaseInfernal",
          "partial": "State Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#t:StateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "B",
          "package": "BiobaseInfernal",
          "signature": "B",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "B",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "BEGL",
          "package": "BiobaseInfernal",
          "signature": "BEGL",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "BEGL",
          "package": "BiobaseInfernal",
          "partial": "BEGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:BEGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "BEGR",
          "package": "BiobaseInfernal",
          "signature": "BEGR",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "BEGR",
          "package": "BiobaseInfernal",
          "partial": "BEGR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:BEGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "BIF",
          "package": "BiobaseInfernal",
          "signature": "BIF",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "BIF",
          "package": "BiobaseInfernal",
          "partial": "BIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:BIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "CM",
          "package": "BiobaseInfernal",
          "signature": "CM",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "CM",
          "package": "BiobaseInfernal",
          "partial": "CM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:CM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "D",
          "package": "BiobaseInfernal",
          "signature": "D",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "D",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "E",
          "package": "BiobaseInfernal",
          "signature": "E",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "E",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "EL",
          "package": "BiobaseInfernal",
          "signature": "EL",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "EL",
          "package": "BiobaseInfernal",
          "partial": "EL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "END",
          "package": "BiobaseInfernal",
          "signature": "END",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "END",
          "package": "BiobaseInfernal",
          "partial": "END",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:END"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "EmitNothing",
          "package": "BiobaseInfernal",
          "signature": "EmitNothing",
          "source": "src/Biobase-SElab-CM.html#Emits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "EmitNothing",
          "package": "BiobaseInfernal",
          "partial": "Emit Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EmitNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "EmitsPair",
          "package": "BiobaseInfernal",
          "signature": "EmitsPair",
          "source": "src/Biobase-SElab-CM.html#Emits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "EmitsPair",
          "package": "BiobaseInfernal",
          "partial": "Emits Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EmitsPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "EmitsSingle",
          "package": "BiobaseInfernal",
          "signature": "EmitsSingle",
          "source": "src/Biobase-SElab-CM.html#Emits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "EmitsSingle",
          "package": "BiobaseInfernal",
          "partial": "Emits Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:EmitsSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "IL",
          "package": "BiobaseInfernal",
          "signature": "IL",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "IL",
          "package": "BiobaseInfernal",
          "partial": "IL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:IL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "IR",
          "package": "BiobaseInfernal",
          "signature": "IR",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "IR",
          "package": "BiobaseInfernal",
          "partial": "IR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:IR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "Infernal10",
          "package": "BiobaseInfernal",
          "signature": "Infernal10 ByteString",
          "source": "src/Biobase-SElab-CM.html#CMVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "Infernal10",
          "package": "BiobaseInfernal",
          "partial": "Infernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:Infernal10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "Infernal11",
          "package": "BiobaseInfernal",
          "signature": "Infernal11 ByteString",
          "source": "src/Biobase-SElab-CM.html#CMVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "Infernal11",
          "package": "BiobaseInfernal",
          "partial": "Infernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:Infernal11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "MATL",
          "package": "BiobaseInfernal",
          "signature": "MATL",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "MATL",
          "package": "BiobaseInfernal",
          "partial": "MATL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MATL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "MATP",
          "package": "BiobaseInfernal",
          "signature": "MATP",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "MATP",
          "package": "BiobaseInfernal",
          "partial": "MATP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MATP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "MATR",
          "package": "BiobaseInfernal",
          "signature": "MATR",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "MATR",
          "package": "BiobaseInfernal",
          "partial": "MATR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MATR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "ML",
          "package": "BiobaseInfernal",
          "signature": "ML",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "ML",
          "package": "BiobaseInfernal",
          "partial": "ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:ML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "MP",
          "package": "BiobaseInfernal",
          "signature": "MP",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "MP",
          "package": "BiobaseInfernal",
          "partial": "MP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "MR",
          "package": "BiobaseInfernal",
          "signature": "MR",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "MR",
          "package": "BiobaseInfernal",
          "partial": "MR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:MR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "NodeID",
          "package": "BiobaseInfernal",
          "signature": "NodeID",
          "source": "src/Biobase-SElab-CM.html#NodeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "NodeID",
          "package": "BiobaseInfernal",
          "partial": "Node ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:NodeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "ROOT",
          "package": "BiobaseInfernal",
          "signature": "ROOT",
          "source": "src/Biobase-SElab-CM.html#NodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "ROOT",
          "package": "BiobaseInfernal",
          "partial": "ROOT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:ROOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "S",
          "package": "BiobaseInfernal",
          "signature": "S",
          "source": "src/Biobase-SElab-CM.html#StateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "S",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "State",
          "package": "BiobaseInfernal",
          "signature": "State",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "State",
          "package": "BiobaseInfernal",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "StateID",
          "package": "BiobaseInfernal",
          "signature": "StateID",
          "source": "src/Biobase-SElab-CM.html#StateID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "StateID",
          "package": "BiobaseInfernal",
          "partial": "State ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:StateID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRFxxxxx identification\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_accession",
          "package": "BiobaseInfernal",
          "signature": "Accession Rfam",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "RFxxxxx identification",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_accession",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_accession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo we emit characters\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_emits",
          "package": "BiobaseInfernal",
          "signature": "Emits",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "description": "do we emit characters",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_emits",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_emits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall scores at or above \u003ccode\u003e\u003ca\u003egathering\u003c/a\u003e\u003c/code\u003e score are in the \u003ca\u003efull\u003c/a\u003e alignment\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_gathering",
          "package": "BiobaseInfernal",
          "signature": "BitScore",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "all scores at or above gathering score are in the full alignment",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_gathering",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_gathering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "_hmm",
          "package": "BiobaseInfernal",
          "signature": "Maybe HMM3",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_hmm",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_hmm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntries into the CM.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_localBegin",
          "package": "BiobaseInfernal",
          "signature": "Map StateID BitScore",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "Entries into the CM",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_localBegin",
          "package": "BiobaseInfernal",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_localBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExits out of the CM.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_localEnd",
          "package": "BiobaseInfernal",
          "signature": "Map StateID BitScore",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "Exits out of the CM",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_localEnd",
          "package": "BiobaseInfernal",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_localEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of model as in \u003ca\u003etRNA\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_name",
          "package": "BiobaseInfernal",
          "signature": "Identification Rfam",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "name of model as in tRNA",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_name",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto which node does this state belong\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_nodeID",
          "package": "BiobaseInfernal",
          "signature": "NodeID",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "description": "to which node does this state belong",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_nodeID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nodeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enode type for this state\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_nodeType",
          "package": "BiobaseInfernal",
          "signature": "NodeType",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "description": "node type for this state",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_nodeType",
          "package": "BiobaseInfernal",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeach node has a set of states\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_nodes",
          "package": "BiobaseInfernal",
          "signature": "Map NodeID (NodeType, [StateID])",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "each node has set of states",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_nodes",
          "normalized": "Map NodeID(NodeType,[StateID])",
          "package": "BiobaseInfernal",
          "signature": "Map NodeID(NodeType,[StateID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehighest score NOT included as member\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_noiseCutoff",
          "package": "BiobaseInfernal",
          "signature": "Maybe BitScore",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "highest score NOT included as member",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_noiseCutoff",
          "package": "BiobaseInfernal",
          "partial": "Cutoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_noiseCutoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNull-model: categorical distribution on ACGU\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_nullModel",
          "package": "BiobaseInfernal",
          "signature": "Vector BitScore",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "Null-model categorical distribution on ACGU",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_nullModel",
          "package": "BiobaseInfernal",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_nullModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "_pair",
          "package": "BiobaseInfernal",
          "signature": "[(Char, Char, BitScore)]",
          "source": "src/Biobase-SElab-CM.html#Emits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_pair",
          "normalized": "[(Char,Char,BitScore)]",
          "package": "BiobaseInfernal",
          "signature": "[(Char,Char,BitScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "_single",
          "package": "BiobaseInfernal",
          "signature": "[(Char, BitScore)]",
          "source": "src/Biobase-SElab-CM.html#Emits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_single",
          "normalized": "[(Char,BitScore)]",
          "package": "BiobaseInfernal",
          "signature": "[(Char,BitScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of this state\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_stateID",
          "package": "BiobaseInfernal",
          "signature": "StateID",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "description": "The ID of this state",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_stateID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_stateID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of the state\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_stateType",
          "package": "BiobaseInfernal",
          "signature": "StateType",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "description": "type of the state",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_stateType",
          "package": "BiobaseInfernal",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_stateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeach state has a type, some emit characters, and some have children\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_states",
          "package": "BiobaseInfernal",
          "signature": "Map StateID State",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "each state has type some emit characters and some have children",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_states",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_states"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhich transitions, id and bitscore\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_transitions",
          "package": "BiobaseInfernal",
          "signature": "[(StateID, BitScore)]",
          "source": "src/Biobase-SElab-CM.html#State",
          "type": "function"
        },
        "index": {
          "description": "which transitions id and bitscore",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_transitions",
          "normalized": "[(StateID,BitScore)]",
          "package": "BiobaseInfernal",
          "signature": "[(StateID,BitScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_transitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elowest score of any seed member\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_trustedCutoff",
          "package": "BiobaseInfernal",
          "signature": "BitScore",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "lowest score of any seed member",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_trustedCutoff",
          "package": "BiobaseInfernal",
          "partial": "Cutoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_trustedCutoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall lines that are not handled. Multiline entries are key-\u003emulti-line entry\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_unsorted",
          "package": "BiobaseInfernal",
          "signature": "Map ByteString ByteString",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "all lines that are not handled Multiline entries are key multi-line entry",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_unsorted",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_unsorted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can parse version 1.0 and 1.1 CMs\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "_version",
          "package": "BiobaseInfernal",
          "signature": "CMVersion",
          "source": "src/Biobase-SElab-CM.html#CM",
          "type": "function"
        },
        "index": {
          "description": "We can parse version and CMs",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "_version",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "accession",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Accession Rfam)",
          "source": "src/Biobase-SElab-CM.html#accession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "accession",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:accession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "emits",
          "package": "BiobaseInfernal",
          "signature": "Lens' State Emits",
          "source": "src/Biobase-SElab-CM.html#emits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "emits",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:emits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "gathering",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM BitScore",
          "source": "src/Biobase-SElab-CM.html#gathering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "gathering",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:gathering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "hmm",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Maybe HMM3)",
          "source": "src/Biobase-SElab-CM.html#hmm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "hmm",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:hmm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "illegalState",
          "package": "BiobaseInfernal",
          "signature": "StateID",
          "source": "src/Biobase-SElab-CM.html#illegalState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "illegalState",
          "package": "BiobaseInfernal",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:illegalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "localBegin",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Map StateID BitScore)",
          "source": "src/Biobase-SElab-CM.html#localBegin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "localBegin",
          "package": "BiobaseInfernal",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:localBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "localEnd",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Map StateID BitScore)",
          "source": "src/Biobase-SElab-CM.html#localEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "localEnd",
          "package": "BiobaseInfernal",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:localEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a CM have local start/end behaviour, with \u003ca\u003epbegin\u003c/a\u003e and \u003ca\u003epend\u003c/a\u003e\n probabilities given.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "makeLocal",
          "package": "BiobaseInfernal",
          "signature": "Double -\u003e Double -\u003e CM -\u003e CM",
          "source": "src/Biobase-SElab-CM.html#makeLocal",
          "type": "function"
        },
        "index": {
          "description": "Make CM have local start end behaviour with pbegin and pend probabilities given",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "makeLocal",
          "normalized": "Double-\u003eDouble-\u003eCM-\u003eCM",
          "package": "BiobaseInfernal",
          "partial": "Local",
          "signature": "Double-\u003eDouble-\u003eCM-\u003eCM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:makeLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert all legal local beginnings, disable root node (and root states).\n The \u003ccode\u003epbegin\u003c/code\u003e probability the the total probability for local begins. The\n remaining \u003ca\u003e1-pbegin\u003c/a\u003e is the probability to start with node 1.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "makeLocalBegin",
          "package": "BiobaseInfernal",
          "signature": "Double -\u003e CM -\u003e CM",
          "source": "src/Biobase-SElab-CM.html#makeLocalBegin",
          "type": "function"
        },
        "index": {
          "description": "Insert all legal local beginnings disable root node and root states The pbegin probability the the total probability for local begins The remaining pbegin is the probability to start with node",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "makeLocalBegin",
          "normalized": "Double-\u003eCM-\u003eCM",
          "package": "BiobaseInfernal",
          "partial": "Local Begin",
          "signature": "Double-\u003eCM-\u003eCM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:makeLocalBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert all legal local ends.\n\u003c/p\u003e",
          "module": "Biobase.SElab.CM",
          "name": "makeLocalEnd",
          "package": "BiobaseInfernal",
          "signature": "Double -\u003e CM -\u003e CM",
          "source": "src/Biobase-SElab-CM.html#makeLocalEnd",
          "type": "function"
        },
        "index": {
          "description": "Insert all legal local ends",
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "makeLocalEnd",
          "normalized": "Double-\u003eCM-\u003eCM",
          "package": "BiobaseInfernal",
          "partial": "Local End",
          "signature": "Double-\u003eCM-\u003eCM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:makeLocalEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "name",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Identification Rfam)",
          "source": "src/Biobase-SElab-CM.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "name",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "nodeID",
          "package": "BiobaseInfernal",
          "signature": "Lens' State NodeID",
          "source": "src/Biobase-SElab-CM.html#nodeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "nodeID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nodeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "nodeType",
          "package": "BiobaseInfernal",
          "signature": "Lens' State NodeType",
          "source": "src/Biobase-SElab-CM.html#nodeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "nodeType",
          "package": "BiobaseInfernal",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "nodes",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Map NodeID (NodeType, [StateID]))",
          "source": "src/Biobase-SElab-CM.html#nodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "nodes",
          "normalized": "Lens' CM(Map NodeID(NodeType,[StateID]))",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM(Map NodeID(NodeType,[StateID]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "noiseCutoff",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Maybe BitScore)",
          "source": "src/Biobase-SElab-CM.html#noiseCutoff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "noiseCutoff",
          "package": "BiobaseInfernal",
          "partial": "Cutoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:noiseCutoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "nullModel",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Vector BitScore)",
          "source": "src/Biobase-SElab-CM.html#nullModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "nullModel",
          "package": "BiobaseInfernal",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:nullModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "pair",
          "package": "BiobaseInfernal",
          "signature": "Traversal' Emits [(Char, Char, BitScore)]",
          "source": "src/Biobase-SElab-CM.html#pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "pair",
          "normalized": "Traversal' Emits[(Char,Char,BitScore)]",
          "package": "BiobaseInfernal",
          "signature": "Traversal' Emits[(Char,Char,BitScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "single",
          "package": "BiobaseInfernal",
          "signature": "Traversal' Emits [(Char, BitScore)]",
          "source": "src/Biobase-SElab-CM.html#single",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "single",
          "normalized": "Traversal' Emits[(Char,BitScore)]",
          "package": "BiobaseInfernal",
          "signature": "Traversal' Emits[(Char,BitScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "stateID",
          "package": "BiobaseInfernal",
          "signature": "Lens' State StateID",
          "source": "src/Biobase-SElab-CM.html#stateID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "stateID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:stateID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "stateType",
          "package": "BiobaseInfernal",
          "signature": "Lens' State StateType",
          "source": "src/Biobase-SElab-CM.html#stateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "stateType",
          "package": "BiobaseInfernal",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:stateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "states",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Map StateID State)",
          "source": "src/Biobase-SElab-CM.html#states",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "states",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:states"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "transitions",
          "package": "BiobaseInfernal",
          "signature": "Lens' State [(StateID, BitScore)]",
          "source": "src/Biobase-SElab-CM.html#transitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "transitions",
          "normalized": "Lens' State[(StateID,BitScore)]",
          "package": "BiobaseInfernal",
          "signature": "Lens' State[(StateID,BitScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:transitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "trustedCutoff",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM BitScore",
          "source": "src/Biobase-SElab-CM.html#trustedCutoff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "trustedCutoff",
          "package": "BiobaseInfernal",
          "partial": "Cutoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:trustedCutoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "unNodeID",
          "package": "BiobaseInfernal",
          "signature": "Int",
          "source": "src/Biobase-SElab-CM.html#NodeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "unNodeID",
          "package": "BiobaseInfernal",
          "partial": "Node ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:unNodeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "unStateID",
          "package": "BiobaseInfernal",
          "signature": "Int",
          "source": "src/Biobase-SElab-CM.html#StateID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "unStateID",
          "package": "BiobaseInfernal",
          "partial": "State ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:unStateID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "unsorted",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM (Map ByteString ByteString)",
          "source": "src/Biobase-SElab-CM.html#unsorted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "unsorted",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:unsorted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.CM",
          "name": "version",
          "package": "BiobaseInfernal",
          "signature": "Lens' CM CMVersion",
          "source": "src/Biobase-SElab-CM.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab CM",
          "module": "Biobase.SElab.CM",
          "name": "version",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-CM.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImport HMMER3 HMM models.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Import HMMER3 HMM models",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the optional COMPO line.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "compoLine",
          "package": "BiobaseInfernal",
          "signature": "Pipe ByteString ByteString o u m [NegLogProb]",
          "source": "src/Biobase-SElab-HMM-Import.html#compoLine",
          "type": "function"
        },
        "index": {
          "description": "Read the optional COMPO line",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "compoLine",
          "normalized": "Pipe ByteString ByteString a b c[NegLogProb]",
          "package": "BiobaseInfernal",
          "partial": "Line",
          "signature": "Pipe ByteString ByteString o u m[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:compoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the header lines until we see \u003ca\u003eHMM\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "headerLines",
          "package": "BiobaseInfernal",
          "signature": "Pipe ByteString ByteString o u m [ByteString]",
          "source": "src/Biobase-SElab-HMM-Import.html#headerLines",
          "type": "function"
        },
        "index": {
          "description": "All the header lines until we see HMM",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "headerLines",
          "normalized": "Pipe ByteString ByteString a b c[ByteString]",
          "package": "BiobaseInfernal",
          "partial": "Lines",
          "signature": "Pipe ByteString ByteString o u m[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:headerLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate associative map of the key/value data.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "headerMap",
          "package": "BiobaseInfernal",
          "signature": "[ByteString] -\u003e Map ByteString ByteString",
          "source": "src/Biobase-SElab-HMM-Import.html#headerMap",
          "type": "function"
        },
        "index": {
          "description": "create associative map of the key value data",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "headerMap",
          "normalized": "[ByteString]-\u003eMap ByteString ByteString",
          "package": "BiobaseInfernal",
          "partial": "Map",
          "signature": "[ByteString]-\u003eMap ByteString ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:headerMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck, if we have a legal HMMER3 model.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "legalHMM",
          "package": "BiobaseInfernal",
          "signature": "Maybe ByteString -\u003e Bool",
          "source": "src/Biobase-SElab-HMM-Import.html#legalHMM",
          "type": "function"
        },
        "index": {
          "description": "Check if we have legal HMMER3 model",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "legalHMM",
          "normalized": "Maybe ByteString-\u003eBool",
          "package": "BiobaseInfernal",
          "partial": "HMM",
          "signature": "Maybe ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:legalHMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the two beginning lines.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "parseBegin",
          "package": "BiobaseInfernal",
          "signature": "t -\u003e Pipe l ByteString o u m Node",
          "source": "src/Biobase-SElab-HMM-Import.html#parseBegin",
          "type": "function"
        },
        "index": {
          "description": "Parse the two beginning lines",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "parseBegin",
          "normalized": "a-\u003ePipe b ByteString c d e Node",
          "package": "BiobaseInfernal",
          "partial": "Begin",
          "signature": "t-\u003ePipe l ByteString o u m Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:parseBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO not everything is currently being parsed. Notably the rf,cs,alignmap\n annotations.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "parseHMM3",
          "package": "BiobaseInfernal",
          "signature": "Pipe ByteString ByteString o u m HMM3",
          "source": "src/Biobase-SElab-HMM-Import.html#parseHMM3",
          "type": "function"
        },
        "index": {
          "description": "TODO not everything is currently being parsed Notably the rf cs alignmap annotations",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "parseHMM3",
          "package": "BiobaseInfernal",
          "partial": "HMM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:parseHMM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse all individual nodes, except the first one, which uses \u003ccode\u003e\u003ca\u003eparseBegin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "parseNodes",
          "package": "BiobaseInfernal",
          "signature": "Int -\u003e Pipe ByteString ByteString o u m [Node]",
          "source": "src/Biobase-SElab-HMM-Import.html#parseNodes",
          "type": "function"
        },
        "index": {
          "description": "Parse all individual nodes except the first one which uses parseBegin",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "parseNodes",
          "normalized": "Int-\u003ePipe ByteString ByteString a b c[Node]",
          "package": "BiobaseInfernal",
          "partial": "Nodes",
          "signature": "Int-\u003ePipe ByteString ByteString o u m[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:parseNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine which alphabet is in use by the HMM.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readAlph",
          "package": "BiobaseInfernal",
          "signature": "ByteString -\u003e Alphabet",
          "source": "src/Biobase-SElab-HMM-Import.html#readAlph",
          "type": "function"
        },
        "index": {
          "description": "Determine which alphabet is in use by the HMM",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readAlph",
          "normalized": "ByteString-\u003eAlphabet",
          "package": "BiobaseInfernal",
          "partial": "Alph",
          "signature": "ByteString-\u003eAlphabet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readAlph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from a bytestring into a structure.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readBS",
          "package": "BiobaseInfernal",
          "signature": "ByteString -\u003e c",
          "source": "src/Biobase-SElab-HMM-Import.html#readBS",
          "type": "function"
        },
        "index": {
          "description": "Read from bytestring into structure",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readBS",
          "normalized": "ByteString-\u003ea",
          "package": "BiobaseInfernal",
          "partial": "BS",
          "signature": "ByteString-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead boolean flags.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readBoolean",
          "package": "BiobaseInfernal",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Biobase-SElab-HMM-Import.html#readBoolean",
          "type": "function"
        },
        "index": {
          "description": "Read boolean flags",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readBoolean",
          "normalized": "ByteString-\u003eBool",
          "package": "BiobaseInfernal",
          "partial": "Boolean",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a HMMER negated log-probability.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readNLP",
          "package": "BiobaseInfernal",
          "signature": "String -\u003e NegLogProb",
          "source": "src/Biobase-SElab-HMM-Import.html#readNLP",
          "type": "function"
        },
        "index": {
          "description": "Read HMMER negated log-probability",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "readNLP",
          "normalized": "String-\u003eNegLogProb",
          "package": "BiobaseInfernal",
          "partial": "NLP",
          "signature": "String-\u003eNegLogProb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:readNLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the alphabet and transition lines.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "sathLines",
          "package": "BiobaseInfernal",
          "signature": "Pipe l ByteString o u m ([ByteString], [ByteString])",
          "source": "src/Biobase-SElab-HMM-Import.html#sathLines",
          "type": "function"
        },
        "index": {
          "description": "Read the alphabet and transition lines",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "sathLines",
          "normalized": "Pipe a ByteString b c d([ByteString],[ByteString])",
          "package": "BiobaseInfernal",
          "partial": "Lines",
          "signature": "Pipe l ByteString o u m([ByteString],[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:sathLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple test for the HMMer parser.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM.Import",
          "name": "test",
          "package": "BiobaseInfernal",
          "signature": "IO ()",
          "source": "src/Biobase-SElab-HMM-Import.html#test",
          "type": "function"
        },
        "index": {
          "description": "Simple test for the HMMer parser",
          "hierarchy": "Biobase SElab HMM Import",
          "module": "Biobase.SElab.HMM.Import",
          "name": "test",
          "normalized": "IO()",
          "package": "BiobaseInfernal",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM-Import.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "HMM",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "HMM",
          "package": "BiobaseInfernal",
          "partial": "HMM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "Alphabet",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Alphabet",
          "package": "BiobaseInfernal",
          "partial": "Alphabet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:Alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "HMM",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM.html#HMM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "HMM",
          "package": "BiobaseInfernal",
          "partial": "HMM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:HMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HMM3 data structure in ``slow mode''.\n\u003c/p\u003e\u003cp\u003eTODO shouldn't this be \u003ca\u003eIdentification Pfam\u003c/a\u003e ?\n\u003c/p\u003e\u003cp\u003eTODO maybe redo the whole \u003ca\u003eidd\u003c/a\u003e idea and just keep the string?\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM",
          "name": "HMM3",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "data"
        },
        "index": {
          "description": "The HMM3 data structure in slow mode TODO shouldn this be Identification Pfam TODO maybe redo the whole idd idea and just keep the string",
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "HMM3",
          "package": "BiobaseInfernal",
          "partial": "HMM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:HMM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegated natural logarithm of probability.\n\u003c/p\u003e\u003cp\u003eTODO put into types stuff\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM",
          "name": "NegLogProb",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM.html#NegLogProb",
          "type": "newtype"
        },
        "index": {
          "description": "Negated natural logarithm of probability TODO put into types stuff",
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "NegLogProb",
          "package": "BiobaseInfernal",
          "partial": "Neg Log Prob",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:NegLogProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nodes in an HMM. Starting with Node \u003ca\u003e0\u003c/a\u003e for BEGIN.\n\u003c/p\u003e",
          "module": "Biobase.SElab.HMM",
          "name": "Node",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-HMM.html#Node",
          "type": "data"
        },
        "index": {
          "description": "The nodes in an HMM Starting with Node for BEGIN",
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Node",
          "package": "BiobaseInfernal",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "Amino",
          "package": "BiobaseInfernal",
          "signature": "Amino",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Amino",
          "package": "BiobaseInfernal",
          "partial": "Amino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Amino"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "Coins",
          "package": "BiobaseInfernal",
          "signature": "Coins",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Coins",
          "package": "BiobaseInfernal",
          "partial": "Coins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Coins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "Custom",
          "package": "BiobaseInfernal",
          "signature": "Custom",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Custom",
          "package": "BiobaseInfernal",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "DNA",
          "package": "BiobaseInfernal",
          "signature": "DNA",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "DNA",
          "package": "BiobaseInfernal",
          "partial": "DNA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:DNA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "Dice",
          "package": "BiobaseInfernal",
          "signature": "Dice",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Dice",
          "package": "BiobaseInfernal",
          "partial": "Dice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Dice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "HMM3",
          "package": "BiobaseInfernal",
          "signature": "HMM3",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "HMM3",
          "package": "BiobaseInfernal",
          "partial": "HMM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:HMM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "NLP",
          "package": "BiobaseInfernal",
          "signature": "NLP Double",
          "source": "src/Biobase-SElab-HMM.html#NegLogProb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "NLP",
          "package": "BiobaseInfernal",
          "partial": "NLP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:NLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "Node",
          "package": "BiobaseInfernal",
          "signature": "Node",
          "source": "src/Biobase-SElab-HMM.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "Node",
          "package": "BiobaseInfernal",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "RNA",
          "package": "BiobaseInfernal",
          "signature": "RNA",
          "source": "src/Biobase-SElab-HMM.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "RNA",
          "package": "BiobaseInfernal",
          "partial": "RNA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:RNA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_acc",
          "package": "BiobaseInfernal",
          "signature": "Maybe (Accession HMM)",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_acc",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_acc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_alignMap",
          "package": "BiobaseInfernal",
          "signature": "Bool",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_alignMap",
          "package": "BiobaseInfernal",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_alignMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_alph",
          "package": "BiobaseInfernal",
          "signature": "Alphabet",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_alph",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_alph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_compo",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_compo",
          "normalized": "[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_compo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_cs",
          "package": "BiobaseInfernal",
          "signature": "Bool",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_cs",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_cs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_date",
          "package": "BiobaseInfernal",
          "signature": "ByteString",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_date",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_description",
          "package": "BiobaseInfernal",
          "signature": "Maybe ByteString",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_description",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_idd",
          "package": "BiobaseInfernal",
          "signature": "Identification HMM",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_idd",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_idd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_insertE",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_insertE",
          "normalized": "[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_insertE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_leng",
          "package": "BiobaseInfernal",
          "signature": "Int",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_leng",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_leng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_matchE",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_matchE",
          "normalized": "[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_matchE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_nid",
          "package": "BiobaseInfernal",
          "signature": "Int",
          "source": "src/Biobase-SElab-HMM.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_nid",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_nid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_nodes",
          "package": "BiobaseInfernal",
          "signature": "[Node]",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_nodes",
          "normalized": "[Node]",
          "package": "BiobaseInfernal",
          "signature": "[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_rf",
          "package": "BiobaseInfernal",
          "signature": "Bool",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_rf",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_rf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_symAlph",
          "package": "BiobaseInfernal",
          "signature": "[ByteString]",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_symAlph",
          "normalized": "[ByteString]",
          "package": "BiobaseInfernal",
          "partial": "Alph",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_symAlph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_trans",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_trans",
          "normalized": "[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_transHeaders",
          "package": "BiobaseInfernal",
          "signature": "[ByteString]",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_transHeaders",
          "normalized": "[ByteString]",
          "package": "BiobaseInfernal",
          "partial": "Headers",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_transHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "_version",
          "package": "BiobaseInfernal",
          "signature": "(ByteString, ByteString)",
          "source": "src/Biobase-SElab-HMM.html#HMM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "_version",
          "normalized": "(ByteString,ByteString)",
          "package": "BiobaseInfernal",
          "signature": "(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "acc",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 (Maybe (Accession HMM))",
          "source": "src/Biobase-SElab-HMM.html#acc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "acc",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:acc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "alignMap",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 Bool",
          "source": "src/Biobase-SElab-HMM.html#alignMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "alignMap",
          "package": "BiobaseInfernal",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:alignMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "alph",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 Alphabet",
          "source": "src/Biobase-SElab-HMM.html#alph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "alph",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:alph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "compo",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 [NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#compo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "compo",
          "normalized": "Lens' HMM[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:compo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "cs",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 Bool",
          "source": "src/Biobase-SElab-HMM.html#cs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "cs",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:cs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "date",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 ByteString",
          "source": "src/Biobase-SElab-HMM.html#date",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "date",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "description",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 (Maybe ByteString)",
          "source": "src/Biobase-SElab-HMM.html#description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "description",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "idd",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 (Identification HMM)",
          "source": "src/Biobase-SElab-HMM.html#idd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "idd",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:idd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "insertE",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node [NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#insertE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "insertE",
          "normalized": "Lens' Node[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:insertE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "leng",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 Int",
          "source": "src/Biobase-SElab-HMM.html#leng",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "leng",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:leng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "matchE",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node [NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#matchE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "matchE",
          "normalized": "Lens' Node[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:matchE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "nid",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node Int",
          "source": "src/Biobase-SElab-HMM.html#nid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "nid",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:nid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "nodes",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 [Node]",
          "source": "src/Biobase-SElab-HMM.html#nodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "nodes",
          "normalized": "Lens' HMM[Node]",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "rf",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 Bool",
          "source": "src/Biobase-SElab-HMM.html#rf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "rf",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:rf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "symAlph",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 [ByteString]",
          "source": "src/Biobase-SElab-HMM.html#symAlph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "symAlph",
          "normalized": "Lens' HMM[ByteString]",
          "package": "BiobaseInfernal",
          "partial": "Alph",
          "signature": "Lens' HMM[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:symAlph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "trans",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node [NegLogProb]",
          "source": "src/Biobase-SElab-HMM.html#trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "trans",
          "normalized": "Lens' Node[NegLogProb]",
          "package": "BiobaseInfernal",
          "signature": "Lens' Node[NegLogProb]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "transHeaders",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 [ByteString]",
          "source": "src/Biobase-SElab-HMM.html#transHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "transHeaders",
          "normalized": "Lens' HMM[ByteString]",
          "package": "BiobaseInfernal",
          "partial": "Headers",
          "signature": "Lens' HMM[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:transHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.HMM",
          "name": "version",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM3 (ByteString, ByteString)",
          "source": "src/Biobase-SElab-HMM.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab HMM",
          "module": "Biobase.SElab.HMM",
          "name": "version",
          "normalized": "Lens' HMM(ByteString,ByteString)",
          "package": "BiobaseInfernal",
          "signature": "Lens' HMM(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-HMM.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-RfamNames-Import.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames Import",
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "fromFile",
          "package": "BiobaseInfernal",
          "signature": "String -\u003e IO (Map (Identification Rfam) [ModelNames], Map (Accession Rfam) [ModelNames])",
          "source": "src/Biobase-SElab-RfamNames-Import.html#fromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames Import",
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "fromFile",
          "normalized": "String-\u003eIO(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])",
          "package": "BiobaseInfernal",
          "partial": "File",
          "signature": "String-\u003eIO(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "mapAcRfamNames",
          "package": "BiobaseInfernal",
          "signature": "Pipe l ModelNames o u m (Map (Accession Rfam) [ModelNames])",
          "source": "src/Biobase-SElab-RfamNames-Import.html#mapAcRfamNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames Import",
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "mapAcRfamNames",
          "normalized": "Pipe a ModelNames b c d(Map(Accession Rfam)[ModelNames])",
          "package": "BiobaseInfernal",
          "partial": "Ac Rfam Names",
          "signature": "Pipe l ModelNames o u m(Map(Accession Rfam)[ModelNames])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:mapAcRfamNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "mapIdRfamNames",
          "package": "BiobaseInfernal",
          "signature": "Pipe l ModelNames o u m (Map (Identification Rfam) [ModelNames])",
          "source": "src/Biobase-SElab-RfamNames-Import.html#mapIdRfamNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames Import",
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "mapIdRfamNames",
          "normalized": "Pipe a ModelNames b c d(Map(Identification Rfam)[ModelNames])",
          "package": "BiobaseInfernal",
          "partial": "Id Rfam Names",
          "signature": "Pipe l ModelNames o u m(Map(Identification Rfam)[ModelNames])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:mapIdRfamNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "mkRfamName",
          "package": "BiobaseInfernal",
          "signature": "Parser ByteString ModelNames",
          "source": "src/Biobase-SElab-RfamNames-Import.html#mkRfamName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames Import",
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "mkRfamName",
          "package": "BiobaseInfernal",
          "partial": "Rfam Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:mkRfamName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "parse",
          "package": "BiobaseInfernal",
          "signature": "Sink ByteString m (Map (Identification Rfam) [ModelNames], Map (Accession Rfam) [ModelNames])",
          "source": "src/Biobase-SElab-RfamNames-Import.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames Import",
          "module": "Biobase.SElab.RfamNames.Import",
          "name": "parse",
          "normalized": "Sink ByteString a(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])",
          "package": "BiobaseInfernal",
          "signature": "Sink ByteString m(Map(Identification Rfam)[ModelNames],Map(Accession Rfam)[ModelNames])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames-Import.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe database of Rfam \u003ca\u003enames\u003c/a\u003e. For each model, we get to know which\n sequences it is built of, what the AC of the species is, and its name (or\n ID).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.RfamNames",
          "name": "RfamNames",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-RfamNames.html",
          "type": "module"
        },
        "index": {
          "description": "The database of Rfam names For each model we get to know which sequences it is built of what the AC of the species is and its name or ID",
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "RfamNames",
          "package": "BiobaseInfernal",
          "partial": "Rfam Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "ModelNames",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-RfamNames.html#ModelNames",
          "type": "data"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "ModelNames",
          "package": "BiobaseInfernal",
          "partial": "Model Names",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#t:ModelNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "ModelNames",
          "package": "BiobaseInfernal",
          "signature": "ModelNames",
          "source": "src/Biobase-SElab-RfamNames.html#ModelNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "ModelNames",
          "package": "BiobaseInfernal",
          "partial": "Model Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:ModelNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "_modelAC",
          "package": "BiobaseInfernal",
          "signature": "(Accession Rfam)",
          "source": "src/Biobase-SElab-RfamNames.html#ModelNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "_modelAC",
          "package": "BiobaseInfernal",
          "partial": "AC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_modelAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "_modelID",
          "package": "BiobaseInfernal",
          "signature": "(Identification Rfam)",
          "source": "src/Biobase-SElab-RfamNames.html#ModelNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "_modelID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_modelID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "_speciesAC",
          "package": "BiobaseInfernal",
          "signature": "Maybe (Accession Species)",
          "source": "src/Biobase-SElab-RfamNames.html#ModelNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "_speciesAC",
          "package": "BiobaseInfernal",
          "partial": "AC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_speciesAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "_speciesID",
          "package": "BiobaseInfernal",
          "signature": "Maybe (Identification Species)",
          "source": "src/Biobase-SElab-RfamNames.html#ModelNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "_speciesID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:_speciesID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "modelAC",
          "package": "BiobaseInfernal",
          "signature": "Lens' ModelNames (Accession Rfam)",
          "source": "src/Biobase-SElab-RfamNames.html#modelAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "modelAC",
          "package": "BiobaseInfernal",
          "partial": "AC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:modelAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "modelID",
          "package": "BiobaseInfernal",
          "signature": "Lens' ModelNames (Identification Rfam)",
          "source": "src/Biobase-SElab-RfamNames.html#modelID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "modelID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:modelID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "speciesAC",
          "package": "BiobaseInfernal",
          "signature": "Lens' ModelNames (Maybe (Accession Species))",
          "source": "src/Biobase-SElab-RfamNames.html#speciesAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "speciesAC",
          "package": "BiobaseInfernal",
          "partial": "AC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:speciesAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.RfamNames",
          "name": "speciesID",
          "package": "BiobaseInfernal",
          "signature": "Lens' ModelNames (Maybe (Identification Species))",
          "source": "src/Biobase-SElab-RfamNames.html#speciesID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab RfamNames",
          "module": "Biobase.SElab.RfamNames",
          "name": "speciesID",
          "package": "BiobaseInfernal",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-RfamNames.html#v:speciesID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee-based importer. Provides a simple \u003ca\u003efromFile\u003c/a\u003e function that\n produces both maps in one pass.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Taxonomy-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratee-based importer Provides simple fromFile function that produces both maps in one pass",
          "hierarchy": "Biobase SElab Taxonomy Import",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "Import",
          "package": "BiobaseInfernal",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "fromFile",
          "package": "BiobaseInfernal",
          "signature": "String -\u003e IO (Map (Identification Species) Taxonomy, Map (Accession Species) Taxonomy)",
          "source": "src/Biobase-SElab-Taxonomy-Import.html#fromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy Import",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "fromFile",
          "normalized": "String-\u003eIO(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)",
          "package": "BiobaseInfernal",
          "partial": "File",
          "signature": "String-\u003eIO(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "mapAcTaxonomy",
          "package": "BiobaseInfernal",
          "signature": "GSink Taxonomy m (Map (Accession Species) Taxonomy)",
          "source": "src/Biobase-SElab-Taxonomy-Import.html#mapAcTaxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy Import",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "mapAcTaxonomy",
          "package": "BiobaseInfernal",
          "partial": "Ac Taxonomy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:mapAcTaxonomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "mapIdTaxonomy",
          "package": "BiobaseInfernal",
          "signature": "GSink Taxonomy m (Map (Identification Species) Taxonomy)",
          "source": "src/Biobase-SElab-Taxonomy-Import.html#mapIdTaxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy Import",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "mapIdTaxonomy",
          "package": "BiobaseInfernal",
          "partial": "Id Taxonomy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:mapIdTaxonomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "mkTaxonomy",
          "package": "BiobaseInfernal",
          "signature": "Parser Taxonomy",
          "source": "src/Biobase-SElab-Taxonomy-Import.html#mkTaxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy Import",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "mkTaxonomy",
          "package": "BiobaseInfernal",
          "partial": "Taxonomy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:mkTaxonomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "parse",
          "package": "BiobaseInfernal",
          "signature": "Sink ByteString m (Map (Identification Species) Taxonomy, Map (Accession Species) Taxonomy)",
          "source": "src/Biobase-SElab-Taxonomy-Import.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy Import",
          "module": "Biobase.SElab.Taxonomy.Import",
          "name": "parse",
          "normalized": "Sink ByteString a(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)",
          "package": "BiobaseInfernal",
          "signature": "Sink ByteString m(Map(Identification Species)Taxonomy,Map(Accession Species)Taxonomy)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy-Import.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfernal contains a taxonomy database. This is a simple module reflecting\n said database.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.Taxonomy",
          "name": "Taxonomy",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Taxonomy.html",
          "type": "module"
        },
        "index": {
          "description": "Infernal contains taxonomy database This is simple module reflecting said database",
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "Taxonomy",
          "package": "BiobaseInfernal",
          "partial": "Taxonomy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each species, we store the name and a classification list from most\n general (head) to most specific (last). The database comes with the NCBI\n taxon identifier (taxid).\n\u003c/p\u003e",
          "module": "Biobase.SElab.Taxonomy",
          "name": "Taxonomy",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
          "type": "data"
        },
        "index": {
          "description": "For each species we store the name and classification list from most general head to most specific last The database comes with the NCBI taxon identifier taxid",
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "Taxonomy",
          "package": "BiobaseInfernal",
          "partial": "Taxonomy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#t:Taxonomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "Taxonomy",
          "package": "BiobaseInfernal",
          "signature": "Taxonomy",
          "source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "Taxonomy",
          "package": "BiobaseInfernal",
          "partial": "Taxonomy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:Taxonomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "_accession",
          "package": "BiobaseInfernal",
          "signature": "(Accession Species)",
          "source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "_accession",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:_accession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "_classification",
          "package": "BiobaseInfernal",
          "signature": "[Classification]",
          "source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "_classification",
          "normalized": "[Classification]",
          "package": "BiobaseInfernal",
          "signature": "[Classification]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:_classification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "_name",
          "package": "BiobaseInfernal",
          "signature": "(Identification Species)",
          "source": "src/Biobase-SElab-Taxonomy.html#Taxonomy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "_name",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "accession",
          "package": "BiobaseInfernal",
          "signature": "Lens' Taxonomy (Accession Species)",
          "source": "src/Biobase-SElab-Taxonomy.html#accession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "accession",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:accession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "classification",
          "package": "BiobaseInfernal",
          "signature": "Lens' Taxonomy [Classification]",
          "source": "src/Biobase-SElab-Taxonomy.html#classification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "classification",
          "normalized": "Lens' Taxonomy[Classification]",
          "package": "BiobaseInfernal",
          "signature": "Lens' Taxonomy[Classification]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:classification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Taxonomy",
          "name": "name",
          "package": "BiobaseInfernal",
          "signature": "Lens' Taxonomy (Identification Species)",
          "source": "src/Biobase-SElab-Taxonomy.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "name",
          "package": "BiobaseInfernal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a name such as \u003ca\u003eDrosophila Melanogaster\u003c/a\u003e, returns \u003ca\u003ed.melanogaster\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Taxonomy",
          "name": "shortenName",
          "package": "BiobaseInfernal",
          "signature": "Identification Species -\u003e Identification Species",
          "source": "src/Biobase-SElab-Taxonomy.html#shortenName",
          "type": "function"
        },
        "index": {
          "description": "Given name such as Drosophila Melanogaster returns d.melanogaster",
          "hierarchy": "Biobase SElab Taxonomy",
          "module": "Biobase.SElab.Taxonomy",
          "name": "shortenName",
          "normalized": "Identification Species-\u003eIdentification Species",
          "package": "BiobaseInfernal",
          "partial": "Name",
          "signature": "Identification Species-\u003eIdentification Species",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Taxonomy.html#v:shortenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfernal Stockholm files and covariance models, and other related files\n use a bunch of different identifiers. We provide newtypes for more type\n safety.\n\u003c/p\u003e\u003cp\u003eTODO Use (Bio.Core.Sequence.Offset) instead of Int for sequence info\n\u003c/p\u003e\u003cp\u003eTODO move \u003ccode\u003e\u003ca\u003eBitScore\u003c/a\u003e\u003c/code\u003es, null models, probabilities into its own library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Types",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Infernal Stockholm files and covariance models and other related files use bunch of different identifiers We provide newtypes for more type safety TODO Use Bio.Core.Sequence.Offset instead of Int for sequence info TODO move BitScore null models probabilities into its own library",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Types",
          "package": "BiobaseInfernal",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccession number, in the format of RFxxxxx, PFxxxxx, or CLxxxxx. We keep\n only the Int-part. A phantom type specifies which kind of accession number\n this is. For Species, we just have an index, it seems.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Accession",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Accession",
          "type": "newtype"
        },
        "index": {
          "description": "Accession number in the format of RFxxxxx PFxxxxx or CLxxxxx We keep only the Int-part phantom type specifies which kind of accession number this is For Species we just have an index it seems",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Accession",
          "package": "BiobaseInfernal",
          "partial": "Accession",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Accession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfernal bit score. Behaves like a double (deriving Num).\n\u003c/p\u003e\u003cp\u003eInfernal users guide, p.42: log-odds score in log_2 (aka bits).\n\u003c/p\u003e\u003cp\u003eS = log_2 (P(seq|CM) / P(seq|null))\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "BitScore",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#BitScore",
          "type": "newtype"
        },
        "index": {
          "description": "Infernal bit score Behaves like double deriving Num Infernal users guide p.42 log-odds score in log aka bits log seq CM seq null",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "BitScore",
          "package": "BiobaseInfernal",
          "partial": "Bit Score",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:BitScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag as being a clan.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Clan",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Clan",
          "type": "data"
        },
        "index": {
          "description": "Tag as being clan",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Clan",
          "package": "BiobaseInfernal",
          "partial": "Clan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Clan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassification names (taxonomic classification)\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Classification",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Classification",
          "type": "newtype"
        },
        "index": {
          "description": "Classification names taxonomic classification",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Classification",
          "package": "BiobaseInfernal",
          "partial": "Classification",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Classification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne word name for the family or clan. Phantom-typed with the correct type\n of model. Can be a longer name for species.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Identification",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Identification",
          "type": "newtype"
        },
        "index": {
          "description": "One word name for the family or clan Phantom-typed with the correct type of model Can be longer name for species",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Identification",
          "package": "BiobaseInfernal",
          "partial": "Identification",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Identification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag as being a Pfam model.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Pfam",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Pfam",
          "type": "data"
        },
        "index": {
          "description": "Tag as being Pfam model",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Pfam",
          "package": "BiobaseInfernal",
          "partial": "Pfam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Pfam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag as being an Rfam model. Used for Stockholm and CM files.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Rfam",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Rfam",
          "type": "data"
        },
        "index": {
          "description": "Tag as being an Rfam model Used for Stockholm and CM files",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Rfam",
          "package": "BiobaseInfernal",
          "partial": "Rfam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Rfam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecies have an accession number, too.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "Species",
          "package": "BiobaseInfernal",
          "source": "src/Biobase-SElab-Types.html#Species",
          "type": "data"
        },
        "index": {
          "description": "Species have an accession number too",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Species",
          "package": "BiobaseInfernal",
          "partial": "Species",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#t:Species"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "ACC",
          "package": "BiobaseInfernal",
          "signature": "ACC",
          "source": "src/Biobase-SElab-Types.html#Accession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "ACC",
          "package": "BiobaseInfernal",
          "partial": "ACC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:ACC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "BitScore",
          "package": "BiobaseInfernal",
          "signature": "BitScore",
          "source": "src/Biobase-SElab-Types.html#BitScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "BitScore",
          "package": "BiobaseInfernal",
          "partial": "Bit Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:BitScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "Classification",
          "package": "BiobaseInfernal",
          "signature": "Classification",
          "source": "src/Biobase-SElab-Types.html#Classification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "Classification",
          "package": "BiobaseInfernal",
          "partial": "Classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:Classification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "IDD",
          "package": "BiobaseInfernal",
          "signature": "IDD",
          "source": "src/Biobase-SElab-Types.html#Identification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "IDD",
          "package": "BiobaseInfernal",
          "partial": "IDD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:IDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a null model and a probability, calculate the corresponding\n \u003ccode\u003e\u003ca\u003eBitScore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "prob2Score",
          "package": "BiobaseInfernal",
          "signature": "Double -\u003e Double -\u003e BitScore",
          "source": "src/Biobase-SElab-Types.html#prob2Score",
          "type": "function"
        },
        "index": {
          "description": "Given null model and probability calculate the corresponding BitScore",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "prob2Score",
          "normalized": "Double-\u003eDouble-\u003eBitScore",
          "package": "BiobaseInfernal",
          "partial": "Score",
          "signature": "Double-\u003eDouble-\u003eBitScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:prob2Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a null model and a \u003ccode\u003e\u003ca\u003eBitScore\u003c/a\u003e\u003c/code\u003e return the corresponding probability.\n\u003c/p\u003e",
          "module": "Biobase.SElab.Types",
          "name": "score2Prob",
          "package": "BiobaseInfernal",
          "signature": "Double -\u003e BitScore -\u003e Double",
          "source": "src/Biobase-SElab-Types.html#score2Prob",
          "type": "function"
        },
        "index": {
          "description": "Given null model and BitScore return the corresponding probability",
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "score2Prob",
          "normalized": "Double-\u003eBitScore-\u003eDouble",
          "package": "BiobaseInfernal",
          "partial": "Prob",
          "signature": "Double-\u003eBitScore-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:score2Prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "unACC",
          "package": "BiobaseInfernal",
          "signature": "Int",
          "source": "src/Biobase-SElab-Types.html#Accession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "unACC",
          "package": "BiobaseInfernal",
          "partial": "ACC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unACC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "unBitScore",
          "package": "BiobaseInfernal",
          "signature": "Double",
          "source": "src/Biobase-SElab-Types.html#BitScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "unBitScore",
          "package": "BiobaseInfernal",
          "partial": "Bit Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unBitScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "unClassification",
          "package": "BiobaseInfernal",
          "signature": "ByteString",
          "source": "src/Biobase-SElab-Types.html#Classification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "unClassification",
          "package": "BiobaseInfernal",
          "partial": "Classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unClassification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.SElab.Types",
          "name": "unIDD",
          "package": "BiobaseInfernal",
          "signature": "ByteString",
          "source": "src/Biobase-SElab-Types.html#Identification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase SElab Types",
          "module": "Biobase.SElab.Types",
          "name": "unIDD",
          "package": "BiobaseInfernal",
          "partial": "IDD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseInfernal/docs/Biobase-SElab-Types.html#v:unIDD"
      }
    }
  ]
]