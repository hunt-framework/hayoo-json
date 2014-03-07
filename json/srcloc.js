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
        "word": "srcloc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "Loc",
          "package": "srcloc",
          "source": "src/Data-Loc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Loc",
          "package": "srcloc",
          "partial": "Loc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "IsLocation",
          "package": "srcloc",
          "source": "src/Data-Loc.html#IsLocation",
          "type": "class"
        },
        "index": {
          "description": "Locations",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "IsLocation",
          "package": "srcloc",
          "partial": "Is Location",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:IsLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn 'L a' is an \u003ccode\u003ea\u003c/code\u003e with an associated \u003ccode\u003e\u003ca\u003eLoc\u003c/a\u003e\u003c/code\u003e, but this location is ignored\n when performing comparisons.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "L",
          "package": "srcloc",
          "source": "src/Data-Loc.html#L",
          "type": "data"
        },
        "index": {
          "description": "An is an with an associated Loc but this location is ignored when performing comparisons",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "L",
          "package": "srcloc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation type, consisting of a beginning position and an end position.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "Loc",
          "package": "srcloc",
          "source": "src/Data-Loc.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "Location type consisting of beginning position and an end position",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Loc",
          "package": "srcloc",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocated values have a location.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "Located",
          "package": "srcloc",
          "source": "src/Data-Loc.html#Located",
          "type": "class"
        },
        "index": {
          "description": "Located values have location",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Located",
          "package": "srcloc",
          "partial": "Located",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:Located"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition type.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "Pos",
          "package": "srcloc",
          "source": "src/Data-Loc.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "Position type",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Pos",
          "package": "srcloc",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues that can be relocated\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "Relocatable",
          "package": "srcloc",
          "source": "src/Data-Loc.html#Relocatable",
          "type": "class"
        },
        "index": {
          "description": "Values that can be relocated",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Relocatable",
          "package": "srcloc",
          "partial": "Relocatable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:Relocatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource location type. Source location are all equal, which allows AST nodes\n to be compared modulo location information.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "SrcLoc",
          "package": "srcloc",
          "source": "src/Data-Loc.html#SrcLoc",
          "type": "newtype"
        },
        "index": {
          "description": "Source location type Source location are all equal which allows AST nodes to be compared modulo location information",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "SrcLoc",
          "package": "srcloc",
          "partial": "Src Loc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#t:SrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge the locations of two \u003ccode\u003e\u003ca\u003eLocated\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "(\u003c--\u003e)",
          "package": "srcloc",
          "signature": "a -\u003e b -\u003e Loc",
          "source": "src/Data-Loc.html#%3C--%3E",
          "type": "function"
        },
        "index": {
          "description": "Merge the locations of two Located values",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "(\u003c--\u003e) \u003c--\u003e",
          "normalized": "a-\u003eb-\u003eLoc",
          "package": "srcloc",
          "signature": "a-\u003eb-\u003eLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:-60--45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "L",
          "package": "srcloc",
          "signature": "L Loc a",
          "source": "src/Data-Loc.html#L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "L",
          "package": "srcloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeginning and end positions\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "Loc",
          "package": "srcloc",
          "signature": "Loc !Pos !Pos",
          "source": "src/Data-Loc.html#Loc",
          "type": "function"
        },
        "index": {
          "description": "Beginning and end positions",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Loc",
          "package": "srcloc",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "NoLoc",
          "package": "srcloc",
          "signature": "NoLoc",
          "source": "src/Data-Loc.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "NoLoc",
          "package": "srcloc",
          "partial": "No Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:NoLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource file name, line, column, and character offset\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "Pos",
          "package": "srcloc",
          "signature": "Pos !String !Int !Int !Int",
          "source": "src/Data-Loc.html#Pos",
          "type": "function"
        },
        "index": {
          "description": "Source file name line column and character offset",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "Pos",
          "package": "srcloc",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "SrcLoc",
          "package": "srcloc",
          "signature": "SrcLoc Loc",
          "source": "src/Data-Loc.html#SrcLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "SrcLoc",
          "package": "srcloc",
          "partial": "Src Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:SrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "advancePos",
          "package": "srcloc",
          "signature": "Pos -\u003e Char -\u003e Pos",
          "source": "src/Data-Loc.html#advancePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "advancePos",
          "normalized": "Pos-\u003eChar-\u003ePos",
          "package": "srcloc",
          "partial": "Pos",
          "signature": "Pos-\u003eChar-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:advancePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "fromLoc",
          "package": "srcloc",
          "signature": "Loc -\u003e a",
          "source": "src/Data-Loc.html#fromLoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "fromLoc",
          "normalized": "Loc-\u003ea",
          "package": "srcloc",
          "partial": "Loc",
          "signature": "Loc-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:fromLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "fromPos",
          "package": "srcloc",
          "signature": "Pos -\u003e a",
          "source": "src/Data-Loc.html#fromPos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "fromPos",
          "normalized": "Pos-\u003ea",
          "package": "srcloc",
          "partial": "Pos",
          "signature": "Pos-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:fromPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "linePos",
          "package": "srcloc",
          "signature": "String -\u003e Int -\u003e Pos",
          "source": "src/Data-Loc.html#linePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "linePos",
          "normalized": "String-\u003eInt-\u003ePos",
          "package": "srcloc",
          "partial": "Pos",
          "signature": "String-\u003eInt-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:linePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnding position of the location.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "locEnd",
          "package": "srcloc",
          "signature": "Loc -\u003e Loc",
          "source": "src/Data-Loc.html#locEnd",
          "type": "function"
        },
        "index": {
          "description": "Ending position of the location",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "locEnd",
          "normalized": "Loc-\u003eLoc",
          "package": "srcloc",
          "partial": "End",
          "signature": "Loc-\u003eLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:locEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "locOf",
          "package": "srcloc",
          "signature": "a -\u003e Loc",
          "source": "src/Data-Loc.html#locOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "locOf",
          "normalized": "a-\u003eLoc",
          "package": "srcloc",
          "partial": "Of",
          "signature": "a-\u003eLoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:locOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "locOfList",
          "package": "srcloc",
          "signature": "[a] -\u003e Loc",
          "source": "src/Data-Loc.html#locOfList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "locOfList",
          "normalized": "[a]-\u003eLoc",
          "package": "srcloc",
          "partial": "Of List",
          "signature": "[a]-\u003eLoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:locOfList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting position of the location.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "locStart",
          "package": "srcloc",
          "signature": "Loc -\u003e Loc",
          "source": "src/Data-Loc.html#locStart",
          "type": "function"
        },
        "index": {
          "description": "Starting position of the location",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "locStart",
          "normalized": "Loc-\u003eLoc",
          "package": "srcloc",
          "partial": "Start",
          "signature": "Loc-\u003eLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:locStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo location.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "noLoc",
          "package": "srcloc",
          "signature": "a",
          "source": "src/Data-Loc.html#noLoc",
          "type": "function"
        },
        "index": {
          "description": "No location",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "noLoc",
          "package": "srcloc",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:noLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition character offset.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "posCoff",
          "package": "srcloc",
          "signature": "Pos -\u003e Int",
          "source": "src/Data-Loc.html#posCoff",
          "type": "function"
        },
        "index": {
          "description": "Position character offset",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "posCoff",
          "normalized": "Pos-\u003eInt",
          "package": "srcloc",
          "partial": "Coff",
          "signature": "Pos-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:posCoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition column.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "posCol",
          "package": "srcloc",
          "signature": "Pos -\u003e Int",
          "source": "src/Data-Loc.html#posCol",
          "type": "function"
        },
        "index": {
          "description": "Position column",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "posCol",
          "normalized": "Pos-\u003eInt",
          "package": "srcloc",
          "partial": "Col",
          "signature": "Pos-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:posCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition file.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "posFile",
          "package": "srcloc",
          "signature": "Pos -\u003e String",
          "source": "src/Data-Loc.html#posFile",
          "type": "function"
        },
        "index": {
          "description": "Position file",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "posFile",
          "normalized": "Pos-\u003eString",
          "package": "srcloc",
          "partial": "File",
          "signature": "Pos-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:posFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition line.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "posLine",
          "package": "srcloc",
          "signature": "Pos -\u003e Int",
          "source": "src/Data-Loc.html#posLine",
          "type": "function"
        },
        "index": {
          "description": "Position line",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "posLine",
          "normalized": "Pos-\u003eInt",
          "package": "srcloc",
          "partial": "Line",
          "signature": "Pos-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:posLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "reloc",
          "package": "srcloc",
          "signature": "Loc -\u003e a -\u003e a",
          "source": "src/Data-Loc.html#reloc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "reloc",
          "normalized": "Loc-\u003ea-\u003ea",
          "package": "srcloc",
          "signature": "Loc-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:reloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSrcLoc\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eLocated\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "srclocOf",
          "package": "srcloc",
          "signature": "a -\u003e SrcLoc",
          "source": "src/Data-Loc.html#srclocOf",
          "type": "function"
        },
        "index": {
          "description": "The SrcLoc of Located value",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "srclocOf",
          "normalized": "a-\u003eSrcLoc",
          "package": "srcloc",
          "partial": "Of",
          "signature": "a-\u003eSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:srclocOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSrcLoc\u003c/a\u003e\u003c/code\u003e with (minimal) span that includes two \u003ccode\u003e\u003ca\u003eLocated\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Loc",
          "name": "srcspan",
          "package": "srcloc",
          "signature": "a -\u003e b -\u003e SrcLoc",
          "source": "src/Data-Loc.html#srcspan",
          "type": "function"
        },
        "index": {
          "description": "SrcLoc with minimal span that includes two Located values",
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "srcspan",
          "normalized": "a-\u003eb-\u003eSrcLoc",
          "package": "srcloc",
          "signature": "a-\u003eb-\u003eSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:srcspan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "startPos",
          "package": "srcloc",
          "signature": "String -\u003e Pos",
          "source": "src/Data-Loc.html#startPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "startPos",
          "normalized": "String-\u003ePos",
          "package": "srcloc",
          "partial": "Pos",
          "signature": "String-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:startPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Loc",
          "name": "unLoc",
          "package": "srcloc",
          "signature": "L a -\u003e a",
          "source": "src/Data-Loc.html#unLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Loc",
          "module": "Data.Loc",
          "name": "unLoc",
          "normalized": "L a-\u003ea",
          "package": "srcloc",
          "partial": "Loc",
          "signature": "L a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/srcloc/docs/Data-Loc.html#v:unLoc"
      }
    }
  ]
]