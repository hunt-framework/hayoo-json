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
        "word": "seqloc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "LocRepr",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-LocRepr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "LocRepr",
          "package": "seqloc",
          "partial": "Loc Repr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "LocRepr",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-LocRepr.html#LocRepr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "LocRepr",
          "package": "seqloc",
          "partial": "Loc Repr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#t:LocRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "repr",
          "package": "seqloc",
          "signature": "l -\u003e ByteString",
          "source": "src/Bio-SeqLoc-LocRepr.html#repr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "repr",
          "normalized": "a-\u003eByteString",
          "package": "seqloc",
          "signature": "l-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#v:repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "reprStr",
          "package": "seqloc",
          "signature": "l -\u003e String",
          "source": "src/Bio-SeqLoc-LocRepr.html#reprStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "reprStr",
          "normalized": "a-\u003eString",
          "package": "seqloc",
          "partial": "Str",
          "signature": "l-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#v:reprStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unrepr",
          "package": "seqloc",
          "signature": "Parser l",
          "source": "src/Bio-SeqLoc-LocRepr.html#unrepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unrepr",
          "package": "seqloc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#v:unrepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unreprEither",
          "package": "seqloc",
          "signature": "ByteString -\u003e Either String l",
          "source": "src/Bio-SeqLoc-LocRepr.html#unreprEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unreprEither",
          "normalized": "ByteString-\u003eEither String a",
          "package": "seqloc",
          "partial": "Either",
          "signature": "ByteString-\u003eEither String l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#v:unreprEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unreprErr",
          "package": "seqloc",
          "signature": "ByteString -\u003e l",
          "source": "src/Bio-SeqLoc-LocRepr.html#unreprErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unreprErr",
          "normalized": "ByteString-\u003ea",
          "package": "seqloc",
          "partial": "Err",
          "signature": "ByteString-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#v:unreprErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unreprMaybe",
          "package": "seqloc",
          "signature": "ByteString -\u003e Maybe l",
          "source": "src/Bio-SeqLoc-LocRepr.html#unreprMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc LocRepr",
          "module": "Bio.SeqLoc.LocRepr",
          "name": "unreprMaybe",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "seqloc",
          "partial": "Maybe",
          "signature": "ByteString-\u003eMaybe l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-LocRepr.html#v:unreprMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for a sequence location consiting of a contiguous range\nof positions on the sequence.\n\u003c/p\u003e\u003cp\u003eThroughout, \u003cem\u003esequence position\u003c/em\u003e refers to a \u003ccode\u003e\u003ca\u003ePos\u003c/a\u003e\u003c/code\u003e which includes a\nstrand, as opposed to an \u003cem\u003eoffset\u003c/em\u003e, which refers to a \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e with\nno strand.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "Location",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Location.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for sequence location consiting of contiguous range of positions on the sequence Throughout sequence position refers to Pos which includes strand as opposed to an offset which refers to Offset with no strand",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "Location",
          "package": "seqloc",
          "partial": "Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContiguous sequence location defined by a span of sequence\n positions, lying on a specific strand of the sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "ContigLoc",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Location.html#ContigLoc",
          "type": "data"
        },
        "index": {
          "description": "Contiguous sequence location defined by span of sequence positions lying on specific strand of the sequence",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "ContigLoc",
          "package": "seqloc",
          "partial": "Contig Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#t:ContigLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Location",
          "name": "Location",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Location.html#Location",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "Location",
          "package": "seqloc",
          "partial": "Location",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of sequence positions in the location, in order from the\n 5' end to the 3' end of the location strand.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "allPos",
          "package": "seqloc",
          "signature": "l -\u003e [Pos]",
          "source": "src/Bio-SeqLoc-Location.html#allPos",
          "type": "method"
        },
        "index": {
          "description": "List of sequence positions in the location in order from the end to the end of the location strand",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "allPos",
          "normalized": "a-\u003e[Pos]",
          "package": "seqloc",
          "partial": "Pos",
          "signature": "l-\u003e[Pos]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:allPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds of a sequence location.  This is a pair consisting\n of the lowest and highest sequence offsets covered by the region.\n The bounds ignore the strand of the sequence location, and the\n first element of the pair will always be lower than the second.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "bounds",
          "package": "seqloc",
          "signature": "l -\u003e (Offset, Offset)",
          "source": "src/Bio-SeqLoc-Location.html#bounds",
          "type": "method"
        },
        "index": {
          "description": "The bounds of sequence location This is pair consisting of the lowest and highest sequence offsets covered by the region The bounds ignore the strand of the sequence location and the first element of the pair will always be lower than the second",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "bounds",
          "normalized": "a-\u003e(Offset,Offset)",
          "package": "seqloc",
          "signature": "l-\u003e(Offset,Offset)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor an enclosing location and a sublocation in the same\n coordinate system, find the image of the sublocation relative to\n the enclosing location.  For example, if the enclosing location\n spans (100, 150) and the sublocation is (110, 120) then\n \u003ccode\u003e\u003ca\u003eclocInto\u003c/a\u003e\u003c/code\u003e will be (10, 20).\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "clocInto",
          "package": "seqloc",
          "signature": "ContigLoc -\u003e l -\u003e Maybe ContigLoc",
          "source": "src/Bio-SeqLoc-Location.html#clocInto",
          "type": "method"
        },
        "index": {
          "description": "For an enclosing location and sublocation in the same coordinate system find the image of the sublocation relative to the enclosing location For example if the enclosing location spans and the sublocation is then clocInto will be",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "clocInto",
          "normalized": "ContigLoc-\u003ea-\u003eMaybe ContigLoc",
          "package": "seqloc",
          "partial": "Into",
          "signature": "ContigLoc-\u003el-\u003eMaybe ContigLoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:clocInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a sequence location produced by finding the inverse\n image of a sublocation, with coordinates given relative to an\n enclosing location, in the coordinate system of the enclosing\n location.  For example, if the enclosing location spans (100,\n 150) and the sublocation is (10, 20) then \u003ccode\u003e\u003ca\u003eclocOutof\u003c/a\u003e\u003c/code\u003e will be\n (110, 120).\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "clocOutof",
          "package": "seqloc",
          "signature": "ContigLoc -\u003e l -\u003e Maybe l",
          "source": "src/Bio-SeqLoc-Location.html#clocOutof",
          "type": "method"
        },
        "index": {
          "description": "Returns sequence location produced by finding the inverse image of sublocation with coordinates given relative to an enclosing location in the coordinate system of the enclosing location For example if the enclosing location spans and the sublocation is then clocOutof will be",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "clocOutof",
          "normalized": "ContigLoc-\u003ea-\u003eMaybe a",
          "package": "seqloc",
          "partial": "Outof",
          "signature": "ContigLoc-\u003el-\u003eMaybe l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:clocOutof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when two sequence locations overlap at any\n position.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "contigOverlaps",
          "package": "seqloc",
          "signature": "ContigLoc -\u003e l -\u003e Bool",
          "source": "src/Bio-SeqLoc-Location.html#contigOverlaps",
          "type": "method"
        },
        "index": {
          "description": "Returns True when two sequence locations overlap at any position",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "contigOverlaps",
          "normalized": "ContigLoc-\u003ea-\u003eBool",
          "package": "seqloc",
          "partial": "Overlaps",
          "signature": "ContigLoc-\u003el-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:contigOverlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of the end of the location, as described in\n \u003ccode\u003e\u003ca\u003estartPos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "endPos",
          "package": "seqloc",
          "signature": "l -\u003e Pos",
          "source": "src/Bio-SeqLoc-Location.html#endPos",
          "type": "method"
        },
        "index": {
          "description": "Sequence position of the end of the location as described in startPos",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "endPos",
          "normalized": "a-\u003ePos",
          "package": "seqloc",
          "partial": "Pos",
          "signature": "l-\u003ePos",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:endPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a sequence location produced by extending the original\n location on each end, based on a pair of (\u003cem\u003e5\\' extension\u003c/em\u003e, /3'\n extension/).  The 5' extension is applied to the 5' end of the\n location on the location strand; if the location is on the\n \u003ccode\u003e\u003ca\u003eMinus\u003c/a\u003e\u003c/code\u003e strand, the 5' end will have a higher offset than the\n 3' end and this offset will increase by the amount of the 5'\n extension.  Similarly, the 3' extension is applied to the 3'\n end of the location.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "extend",
          "package": "seqloc",
          "signature": "(Offset, Offset) -\u003e l -\u003e l",
          "source": "src/Bio-SeqLoc-Location.html#extend",
          "type": "method"
        },
        "index": {
          "description": "Returns sequence location produced by extending the original location on each end based on pair of extension extension The extension is applied to the end of the location on the location strand if the location is on the Minus strand the end will have higher offset than the end and this offset will increase by the amount of the extension Similarly the extension is applied to the end of the location",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "extend",
          "normalized": "(Offset,Offset)-\u003ea-\u003ea",
          "package": "seqloc",
          "signature": "(Offset,Offset)-\u003el-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sequence location between 0-based starting and ending\n bounds with a specified strand.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "fromBoundsStrand",
          "package": "seqloc",
          "signature": "Offset -\u003e Offset -\u003e Strand -\u003e ContigLoc",
          "source": "src/Bio-SeqLoc-Location.html#fromBoundsStrand",
          "type": "function"
        },
        "index": {
          "description": "Create sequence location between based starting and ending bounds with specified strand",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "fromBoundsStrand",
          "normalized": "Offset-\u003eOffset-\u003eStrand-\u003eContigLoc",
          "package": "seqloc",
          "partial": "Bounds Strand",
          "signature": "Offset-\u003eOffset-\u003eStrand-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:fromBoundsStrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sequence location from the sequence position of the\n start of the location and the length of the position.  The strand\n of the location, and the direction it extends from the starting\n position, are determined by the strand of the starting position.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "fromPosLen",
          "package": "seqloc",
          "signature": "Pos -\u003e Offset -\u003e ContigLoc",
          "source": "src/Bio-SeqLoc-Location.html#fromPosLen",
          "type": "function"
        },
        "index": {
          "description": "Create sequence location from the sequence position of the start of the location and the length of the position The strand of the location and the direction it extends from the starting position are determined by the strand of the starting position",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "fromPosLen",
          "normalized": "Pos-\u003eOffset-\u003eContigLoc",
          "package": "seqloc",
          "partial": "Pos Len",
          "signature": "Pos-\u003eOffset-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:fromPosLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sequence location lying between 0-based starting and\n ending offsets.  When \u003ccode\u003estart \u003c end\u003c/code\u003e, the location\n be on the forward strand, otherwise it will be on the\n reverse complement strand.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "fromStartEnd",
          "package": "seqloc",
          "signature": "Offset -\u003e Offset -\u003e ContigLoc",
          "source": "src/Bio-SeqLoc-Location.html#fromStartEnd",
          "type": "function"
        },
        "index": {
          "description": "Create sequence location lying between based starting and ending offsets When start end the location be on the forward strand otherwise it will be on the reverse complement strand",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "fromStartEnd",
          "normalized": "Offset-\u003eOffset-\u003eContigLoc",
          "package": "seqloc",
          "partial": "Start End",
          "signature": "Offset-\u003eOffset-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:fromStartEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Location",
          "name": "length",
          "package": "seqloc",
          "signature": "l -\u003e Offset",
          "source": "src/Bio-SeqLoc-Location.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "length",
          "normalized": "a-\u003eOffset",
          "package": "seqloc",
          "signature": "l-\u003eOffset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe offset of the 5' end of the location, as a 0-based index\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "offset5",
          "package": "seqloc",
          "signature": "ContigLoc -\u003e Offset",
          "source": "src/Bio-SeqLoc-Location.html#offset5",
          "type": "function"
        },
        "index": {
          "description": "The offset of the end of the location as based index",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "offset5",
          "normalized": "ContigLoc-\u003eOffset",
          "package": "seqloc",
          "signature": "ContigLoc-\u003eOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:offset5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when a sequence offset lies within a sequence\n location on the same sequence\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "offsetWithin",
          "package": "seqloc",
          "signature": "Offset -\u003e l -\u003e Bool",
          "source": "src/Bio-SeqLoc-Location.html#offsetWithin",
          "type": "method"
        },
        "index": {
          "description": "Returns True when sequence offset lies within sequence location on the same sequence",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "offsetWithin",
          "normalized": "Offset-\u003ea-\u003eBool",
          "package": "seqloc",
          "partial": "Within",
          "signature": "Offset-\u003el-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:offsetWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Location",
          "name": "overlaps",
          "package": "seqloc",
          "signature": "l1 -\u003e l2 -\u003e Bool",
          "source": "src/Bio-SeqLoc-Location.html#overlaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "overlaps",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "seqloc",
          "signature": "l-\u003el-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence position and a sequence location relative to\n the same sequence, compute a new position representing the\n original position relative to the subsequence defined by the\n location.  If the sequence position lies outside of the sequence\n location, \u003ccode\u003eNothing\u003c/code\u003e is returned; thus, the offset of the new\n position will always be in the range \u003ccode\u003e[0, length l - 1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "posInto",
          "package": "seqloc",
          "signature": "Pos -\u003e l -\u003e Maybe Pos",
          "source": "src/Bio-SeqLoc-Location.html#posInto",
          "type": "method"
        },
        "index": {
          "description": "Given sequence position and sequence location relative to the same sequence compute new position representing the original position relative to the subsequence defined by the location If the sequence position lies outside of the sequence location Nothing is returned thus the offset of the new position will always be in the range length",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "posInto",
          "normalized": "Pos-\u003ea-\u003eMaybe Pos",
          "package": "seqloc",
          "partial": "Into",
          "signature": "Pos-\u003el-\u003eMaybe Pos",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:posInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence location and a sequence position within that\n location, compute a new position representing the original\n position relative to the outer sequence.  If the sequence\n position lies outside the location, \u003ccode\u003eNothing\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eThis function inverts \u003ccode\u003e\u003ca\u003eposInto\u003c/a\u003e\u003c/code\u003e when the sequence position lies\n within the position is actually within the location.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "posOutof",
          "package": "seqloc",
          "signature": "Pos -\u003e l -\u003e Maybe Pos",
          "source": "src/Bio-SeqLoc-Location.html#posOutof",
          "type": "method"
        },
        "index": {
          "description": "Given sequence location and sequence position within that location compute new position representing the original position relative to the outer sequence If the sequence position lies outside the location Nothing is returned This function inverts posInto when the sequence position lies within the position is actually within the location",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "posOutof",
          "normalized": "Pos-\u003ea-\u003eMaybe Pos",
          "package": "seqloc",
          "partial": "Outof",
          "signature": "Pos-\u003el-\u003eMaybe Pos",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:posOutof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when a sequence position lies within a sequence\n location on the same sequence, and occupies the same strand.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "posWithin",
          "package": "seqloc",
          "signature": "Pos -\u003e l -\u003e Bool",
          "source": "src/Bio-SeqLoc-Location.html#posWithin",
          "type": "method"
        },
        "index": {
          "description": "Returns True when sequence position lies within sequence location on the same sequence and occupies the same strand",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "posWithin",
          "normalized": "Pos-\u003ea-\u003eBool",
          "package": "seqloc",
          "partial": "Within",
          "signature": "Pos-\u003el-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:posWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the nucleotide \u003ccode\u003eSeqLike\u003c/code\u003e for the sequence\n location, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if f any part of the location lies outside\n the bounds of the sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "seqData",
          "package": "seqloc",
          "signature": "s -\u003e l -\u003e Maybe s",
          "source": "src/Bio-SeqLoc-Location.html#seqData",
          "type": "method"
        },
        "index": {
          "description": "Extract Just the nucleotide SeqLike for the sequence location or Nothing if any part of the location lies outside the bounds of the sequence",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "seqData",
          "normalized": "a-\u003eb-\u003eMaybe a",
          "package": "seqloc",
          "partial": "Data",
          "signature": "s-\u003el-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:seqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eseqData\u003c/a\u003e\u003c/code\u003e, extract the nucleotide subsequence for the\n location, but any positions in the location lying outside the\n bounds of the sequence are returned as \u003ccode\u003eN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "seqDataPad",
          "package": "seqloc",
          "signature": "s -\u003e l -\u003e s",
          "source": "src/Bio-SeqLoc-Location.html#seqDataPad",
          "type": "method"
        },
        "index": {
          "description": "As seqData extract the nucleotide subsequence for the location but any positions in the location lying outside the bounds of the sequence are returned as",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "seqDataPad",
          "normalized": "a-\u003eb-\u003ea",
          "package": "seqloc",
          "partial": "Data Pad",
          "signature": "s-\u003el-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:seqDataPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a location resulting from sliding the original location\n along the sequence by a specified offset.  A positive offset will\n move the location away from the 5' end of the forward stand of the\n sequence regardless of the strand of the location itself.  Thus,\n\u003c/p\u003e\u003cpre\u003e slide (revCompl cloc) off == revCompl (slide cloc off)\n\u003c/pre\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "slide",
          "package": "seqloc",
          "signature": "Offset -\u003e ContigLoc -\u003e ContigLoc",
          "source": "src/Bio-SeqLoc-Location.html#slide",
          "type": "function"
        },
        "index": {
          "description": "Returns location resulting from sliding the original location along the sequence by specified offset positive offset will move the location away from the end of the forward stand of the sequence regardless of the strand of the location itself Thus slide revCompl cloc off revCompl slide cloc off",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "slide",
          "normalized": "Offset-\u003eContigLoc-\u003eContigLoc",
          "package": "seqloc",
          "signature": "Offset-\u003eContigLoc-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of the start of the location.  This is the 5'\n end on the location strand, which will have a higher offset than\n \u003ccode\u003e\u003ca\u003eendPos\u003c/a\u003e\u003c/code\u003e if the location is on the \u003ccode\u003e\u003ca\u003eMinus\u003c/a\u003e\u003c/code\u003e strand.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "startPos",
          "package": "seqloc",
          "signature": "l -\u003e Pos",
          "source": "src/Bio-SeqLoc-Location.html#startPos",
          "type": "method"
        },
        "index": {
          "description": "Sequence position of the start of the location This is the end on the location strand which will have higher offset than endPos if the location is on the Minus strand",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "startPos",
          "normalized": "a-\u003ePos",
          "package": "seqloc",
          "partial": "Pos",
          "signature": "l-\u003ePos",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:startPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Location",
          "name": "strand",
          "package": "seqloc",
          "signature": "l -\u003e Strand",
          "source": "src/Bio-SeqLoc-Location.html#strand",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "strand",
          "normalized": "a-\u003eStrand",
          "package": "seqloc",
          "signature": "l-\u003eStrand",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContigs that comprise the location\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Location",
          "name": "toContigs",
          "package": "seqloc",
          "signature": "l -\u003e [ContigLoc]",
          "source": "src/Bio-SeqLoc-Location.html#toContigs",
          "type": "method"
        },
        "index": {
          "description": "Contigs that comprise the location",
          "hierarchy": "Bio SeqLoc Location",
          "module": "Bio.SeqLoc.Location",
          "name": "toContigs",
          "normalized": "a-\u003e[ContigLoc]",
          "package": "seqloc",
          "partial": "Contigs",
          "signature": "l-\u003e[ContigLoc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Location.html#v:toContigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for sequence locations and sequence positions associated\nwith specific, named sequences.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "OnSeq",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-OnSeq.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for sequence locations and sequence positions associated with specific named sequences",
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "OnSeq",
          "package": "seqloc",
          "partial": "On Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location consisting of a contiguous span of positions on a\n named sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "ContigSeqLoc",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-OnSeq.html#ContigSeqLoc",
          "type": "type"
        },
        "index": {
          "description": "location consisting of contiguous span of positions on named sequence",
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "ContigSeqLoc",
          "package": "seqloc",
          "partial": "Contig Seq Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#t:ContigSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "OnSeq",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-OnSeq.html#OnSeq",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "OnSeq",
          "package": "seqloc",
          "partial": "On Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#t:OnSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqLabel",
          "package": "seqloc",
          "type": "newtype"
        },
        "index": {
          "description": "Sequence data are lazy bytestrings of ASCII characters",
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqLabel",
          "package": "seqloc",
          "partial": "Seq Label",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#t:SeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqOffset",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-OnSeq.html#SeqOffset",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqOffset",
          "package": "seqloc",
          "partial": "Seq Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#t:SeqOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position on a named sequence\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqPos",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-OnSeq.html#SeqPos",
          "type": "type"
        },
        "index": {
          "description": "position on named sequence",
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqPos",
          "package": "seqloc",
          "partial": "Seq Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#t:SeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general location, consisting of spans of sequence positions on\n a specific, named sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SpliceSeqLoc",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-OnSeq.html#SpliceSeqLoc",
          "type": "type"
        },
        "index": {
          "description": "general location consisting of spans of sequence positions on specific named sequence",
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SpliceSeqLoc",
          "package": "seqloc",
          "partial": "Splice Seq Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#t:SpliceSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "OnSeq",
          "package": "seqloc",
          "signature": "OnSeq",
          "source": "src/Bio-SeqLoc-OnSeq.html#OnSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "OnSeq",
          "package": "seqloc",
          "partial": "On Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:OnSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqLabel",
          "package": "seqloc",
          "signature": "SeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "SeqLabel",
          "package": "seqloc",
          "partial": "Seq Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:SeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "andSameSeq",
          "package": "seqloc",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e OnSeq a -\u003e OnSeq b -\u003e Bool",
          "source": "src/Bio-SeqLoc-OnSeq.html#andSameSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "andSameSeq",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eOnSeq a-\u003eOnSeq b-\u003eBool",
          "package": "seqloc",
          "partial": "Same Seq",
          "signature": "(a-\u003eb-\u003eBool)-\u003eOnSeq a-\u003eOnSeq b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:andSameSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "onSeqLabel",
          "package": "seqloc",
          "signature": "SeqLabel",
          "source": "src/Bio-SeqLoc-OnSeq.html#OnSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "onSeqLabel",
          "package": "seqloc",
          "partial": "Seq Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:onSeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "toSeqLabel",
          "package": "seqloc",
          "signature": "ByteString -\u003e SeqLabel",
          "source": "src/Bio-SeqLoc-OnSeq.html#toSeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "toSeqLabel",
          "normalized": "ByteString-\u003eSeqLabel",
          "package": "seqloc",
          "partial": "Seq Label",
          "signature": "ByteString-\u003eSeqLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:toSeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "unOnSeq",
          "package": "seqloc",
          "signature": "s",
          "source": "src/Bio-SeqLoc-OnSeq.html#OnSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "unOnSeq",
          "package": "seqloc",
          "partial": "On Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:unOnSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "unSL",
          "package": "seqloc",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "unSL",
          "package": "seqloc",
          "partial": "SL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:unSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.OnSeq",
          "name": "unSeqLabel",
          "package": "seqloc",
          "signature": "SeqLabel -\u003e ByteString",
          "source": "src/Bio-SeqLoc-OnSeq.html#unSeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc OnSeq",
          "module": "Bio.SeqLoc.OnSeq",
          "name": "unSeqLabel",
          "normalized": "SeqLabel-\u003eByteString",
          "package": "seqloc",
          "partial": "Seq Label",
          "signature": "SeqLabel-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-OnSeq.html#v:unSeqLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for a sequence position.\n\u003c/p\u003e\u003cp\u003eZero-based \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003eindices are used throughout, to facilitate direct\nuse of indexing functions on \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "Position",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Position.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for sequence position Zero-based Offset indices are used throughout to facilitate direct use of indexing functions on SeqData",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "Position",
          "package": "seqloc",
          "partial": "Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e is a zero-based index into a sequence\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "Offset",
          "package": "seqloc",
          "type": "newtype"
        },
        "index": {
          "description": "An Offset is zero-based index into sequence",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "Offset",
          "package": "seqloc",
          "partial": "Offset",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStranded position in a sequence\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "Pos",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Position.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "Stranded position in sequence",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "Pos",
          "package": "seqloc",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Position",
          "name": "Offset",
          "package": "seqloc",
          "signature": "Offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "Offset",
          "package": "seqloc",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Position",
          "name": "Pos",
          "package": "seqloc",
          "signature": "Pos",
          "source": "src/Bio-SeqLoc-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "Pos",
          "package": "seqloc",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the item at a specific sequence position, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the position lies outside the bounds of the sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "atPos",
          "package": "seqloc",
          "signature": "s -\u003e Pos -\u003e Maybe Char",
          "source": "src/Bio-SeqLoc-Position.html#atPos",
          "type": "function"
        },
        "index": {
          "description": "Extract Just the item at specific sequence position or Nothing if the position lies outside the bounds of the sequence",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "atPos",
          "normalized": "a-\u003ePos-\u003eMaybe Char",
          "package": "seqloc",
          "partial": "Pos",
          "signature": "s-\u003ePos-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:atPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0-based index of the position\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "offset",
          "package": "seqloc",
          "signature": "Offset",
          "source": "src/Bio-SeqLoc-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "description": "based index of the position",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "offset",
          "package": "seqloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a position resulting from sliding the original position\n along the sequence by a specified offset.  A positive offset will\n move the position away from the 5' end of the forward stand of the\n sequence regardless of the strand of the position itself.  Thus,\n\u003c/p\u003e\u003cpre\u003e slide (revCompl pos) off == revCompl (slide pos off)\n\u003c/pre\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "slide",
          "package": "seqloc",
          "signature": "Pos -\u003e Offset -\u003e Pos",
          "source": "src/Bio-SeqLoc-Position.html#slide",
          "type": "function"
        },
        "index": {
          "description": "Returns position resulting from sliding the original position along the sequence by specified offset positive offset will move the position away from the end of the forward stand of the sequence regardless of the strand of the position itself Thus slide revCompl pos off revCompl slide pos off",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "slide",
          "normalized": "Pos-\u003eOffset-\u003ePos",
          "package": "seqloc",
          "signature": "Pos-\u003eOffset-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrand of the position\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Position",
          "name": "strand",
          "package": "seqloc",
          "signature": "Strand",
          "source": "src/Bio-SeqLoc-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "description": "Strand of the position",
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "strand",
          "package": "seqloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Position",
          "name": "unOff",
          "package": "seqloc",
          "signature": "Int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Position",
          "module": "Bio.SeqLoc.Position",
          "name": "unOff",
          "package": "seqloc",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Position.html#v:unOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SeqLike",
          "name": "SeqLike",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-SeqLike.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "SeqLike",
          "package": "seqloc",
          "partial": "Seq Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SeqLike",
          "name": "SeqLike",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-SeqLike.html#SeqLike",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "SeqLike",
          "package": "seqloc",
          "partial": "Seq Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#t:SeqLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SeqLike",
          "name": "concat",
          "package": "seqloc",
          "signature": "[s] -\u003e s",
          "source": "src/Bio-SeqLoc-SeqLike.html#concat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "concat",
          "normalized": "[a]-\u003ea",
          "package": "seqloc",
          "signature": "[s]-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of sequence data\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "length",
          "package": "seqloc",
          "signature": "s -\u003e n",
          "source": "src/Bio-SeqLoc-SeqLike.html#length",
          "type": "method"
        },
        "index": {
          "description": "Length of sequence data",
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "length",
          "normalized": "a-\u003eb",
          "package": "seqloc",
          "signature": "s-\u003en",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the nucleotide at a specified sequence data offset,\n given in 0-based coordinates, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the offset is\n beyond the bounds of the data\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "ntAt",
          "package": "seqloc",
          "signature": "s -\u003e n -\u003e Maybe Char",
          "source": "src/Bio-SeqLoc-SeqLike.html#ntAt",
          "type": "method"
        },
        "index": {
          "description": "Just the nucleotide at specified sequence data offset given in based coordinates or Nothing if the offset is beyond the bounds of the data",
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "ntAt",
          "normalized": "a-\u003eb-\u003eMaybe Char",
          "package": "seqloc",
          "partial": "At",
          "signature": "s-\u003en-\u003eMaybe Char",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#v:ntAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the nucleotides in subsequence of the sequence data, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the region extends beyond the bounds of the\n sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "subseq",
          "package": "seqloc",
          "signature": "subseq",
          "source": "src/Bio-SeqLoc-SeqLike.html#subseq",
          "type": "method"
        },
        "index": {
          "description": "Just the nucleotides in subsequence of the sequence data or Nothing if the region extends beyond the bounds of the sequence",
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "subseq",
          "package": "seqloc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#v:subseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNucleotides in a subsequence of the sequence data, padded with\n \u003ccode\u003eN\u003c/code\u003e when the region extends beyond the bounds of the sequence.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "subseqPad",
          "package": "seqloc",
          "signature": "subseqPad",
          "source": "src/Bio-SeqLoc-SeqLike.html#subseqPad",
          "type": "method"
        },
        "index": {
          "description": "Nucleotides in subsequence of the sequence data padded with when the region extends beyond the bounds of the sequence",
          "hierarchy": "Bio SeqLoc SeqLike",
          "module": "Bio.SeqLoc.SeqLike",
          "name": "subseqPad",
          "package": "seqloc",
          "partial": "Pad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SeqLike.html#v:subseqPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for a more general sequence location consiting of\ndisjoint ranges of positions on a sequence.\n\u003c/p\u003e\u003cp\u003eThroughout, \u003cem\u003esequence position\u003c/em\u003e refers to a \u003ccode\u003e\u003ca\u003ePos\u003c/a\u003e\u003c/code\u003e which includes a\nstrand, as opposed to an \u003cem\u003eoffset\u003c/em\u003e, which refers to a \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e with\nno strand.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "SpliceLocation",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-SpliceLocation.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for more general sequence location consiting of disjoint ranges of positions on sequence Throughout sequence position refers to Pos which includes strand as opposed to an offset which refers to Offset with no strand",
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "SpliceLocation",
          "package": "seqloc",
          "partial": "Splice Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral (disjoint) sequence region consisting of a concatenated\n set of one or more contiguous regions.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "SpliceLoc",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-SpliceLocation.html#SpliceLoc",
          "type": "data"
        },
        "index": {
          "description": "General disjoint sequence region consisting of concatenated set of one or more contiguous regions",
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "SpliceLoc",
          "package": "seqloc",
          "partial": "Splice Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#t:SpliceLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "fromContigs",
          "package": "seqloc",
          "signature": "[ContigLoc] -\u003e Maybe SpliceLoc",
          "source": "src/Bio-SeqLoc-SpliceLocation.html#fromContigs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "fromContigs",
          "normalized": "[ContigLoc]-\u003eMaybe SpliceLoc",
          "package": "seqloc",
          "partial": "Contigs",
          "signature": "[ContigLoc]-\u003eMaybe SpliceLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#v:fromContigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "locInto",
          "package": "seqloc",
          "signature": "SpliceLoc -\u003e l -\u003e Maybe SpliceLoc",
          "source": "src/Bio-SeqLoc-SpliceLocation.html#locInto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "locInto",
          "normalized": "SpliceLoc-\u003ea-\u003eMaybe SpliceLoc",
          "package": "seqloc",
          "partial": "Into",
          "signature": "SpliceLoc-\u003el-\u003eMaybe SpliceLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#v:locInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "locOutof",
          "package": "seqloc",
          "signature": "SpliceLoc -\u003e l -\u003e Maybe SpliceLoc",
          "source": "src/Bio-SeqLoc-SpliceLocation.html#locOutof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "locOutof",
          "normalized": "SpliceLoc-\u003ea-\u003eMaybe SpliceLoc",
          "package": "seqloc",
          "partial": "Outof",
          "signature": "SpliceLoc-\u003el-\u003eMaybe SpliceLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#v:locOutof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "mergeAdjContigs",
          "package": "seqloc",
          "signature": "ContigLoc -\u003e ContigLoc -\u003e Maybe ContigLoc",
          "source": "src/Bio-SeqLoc-SpliceLocation.html#mergeAdjContigs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "mergeAdjContigs",
          "normalized": "ContigLoc-\u003eContigLoc-\u003eMaybe ContigLoc",
          "package": "seqloc",
          "partial": "Adj Contigs",
          "signature": "ContigLoc-\u003eContigLoc-\u003eMaybe ContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#v:mergeAdjContigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "mergeContigs",
          "package": "seqloc",
          "signature": "[ContigLoc] -\u003e [ContigLoc]",
          "source": "src/Bio-SeqLoc-SpliceLocation.html#mergeContigs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc SpliceLocation",
          "module": "Bio.SeqLoc.SpliceLocation",
          "name": "mergeContigs",
          "normalized": "[ContigLoc]-\u003e[ContigLoc]",
          "package": "seqloc",
          "partial": "Contigs",
          "signature": "[ContigLoc]-\u003e[ContigLoc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-SpliceLocation.html#v:mergeContigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for manipulating nucleotide sequences and locations on\nnucleotide sequences that occur on a forward or a reverse-complement\nstrand.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.SeqLoc.Strand",
          "name": "Strand",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Strand.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for manipulating nucleotide sequences and locations on nucleotide sequences that occur on forward or reverse-complement strand",
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "Strand",
          "package": "seqloc",
          "partial": "Strand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e is either plus (forward) or minus (reverse or reverse-complement)\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Strand",
          "name": "Strand",
          "package": "seqloc",
          "type": "data"
        },
        "index": {
          "description": "Strand is either plus forward or minus reverse or reverse-complement",
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "Strand",
          "package": "seqloc",
          "partial": "Strand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#t:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nucleotide sequence or location on a nucleotide sequence that\n   lies on a specific strand and has an orientation.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Strand",
          "name": "Stranded",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Strand.html#Stranded",
          "type": "class"
        },
        "index": {
          "description": "nucleotide sequence or location on nucleotide sequence that lies on specific strand and has an orientation",
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "Stranded",
          "package": "seqloc",
          "partial": "Stranded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#t:Stranded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Strand",
          "name": "Minus",
          "package": "seqloc",
          "signature": "Minus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "Minus",
          "package": "seqloc",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Strand",
          "name": "Plus",
          "package": "seqloc",
          "signature": "Plus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "Plus",
          "package": "seqloc",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplement of a nucleotide character, swap A\u003cem\u003eT and G\u003c/em\u003eC preserving\n case and leave all other characters unchanged.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Strand",
          "name": "compl",
          "package": "seqloc",
          "signature": "Char -\u003e Char",
          "source": "src/Bio-SeqLoc-Strand.html#compl",
          "type": "function"
        },
        "index": {
          "description": "Complement of nucleotide character swap and preserving case and leave all other characters unchanged",
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "compl",
          "normalized": "Char-\u003eChar",
          "package": "seqloc",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#v:compl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Strand",
          "name": "revCompl",
          "package": "seqloc",
          "signature": "s -\u003e s",
          "source": "src/Bio-SeqLoc-Strand.html#revCompl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "revCompl",
          "normalized": "a-\u003ea",
          "package": "seqloc",
          "partial": "Compl",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#v:revCompl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the orientation of a \u003ccode\u003e\u003ca\u003eStranded\u003c/a\u003e\u003c/code\u003e thing based on a\n   specified \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Strand",
          "name": "stranded",
          "package": "seqloc",
          "signature": "Strand -\u003e s -\u003e s",
          "source": "src/Bio-SeqLoc-Strand.html#stranded",
          "type": "function"
        },
        "index": {
          "description": "Convert the orientation of Stranded thing based on specified Strand",
          "hierarchy": "Bio SeqLoc Strand",
          "module": "Bio.SeqLoc.Strand",
          "name": "stranded",
          "normalized": "Strand-\u003ea-\u003ea",
          "package": "seqloc",
          "signature": "Strand-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Strand.html#v:stranded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Transcript",
          "name": "Transcript",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Transcript.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Transcript",
          "package": "seqloc",
          "partial": "Transcript",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplice junctions, which are isomorphic to the introns they span,\n but which support other biologically relevant constructors and\n accessors.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Junction",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Transcript.html#Junction",
          "type": "newtype"
        },
        "index": {
          "description": "Splice junctions which are isomorphic to the introns they span but which support other biologically relevant constructors and accessors",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Junction",
          "package": "seqloc",
          "partial": "Junction",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#t:Junction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a genomic transcript, with a gene and a\n transcript identifier, along with the genomic location of the\n processed transcript and an optional coding sequence on that\n transcript.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Transcript",
          "package": "seqloc",
          "source": "src/Bio-SeqLoc-Transcript.html#Transcript",
          "type": "data"
        },
        "index": {
          "description": "Representation of genomic transcript with gene and transcript identifier along with the genomic location of the processed transcript and an optional coding sequence on that transcript",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Transcript",
          "package": "seqloc",
          "partial": "Transcript",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#t:Transcript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Transcript",
          "name": "Junction",
          "package": "seqloc",
          "signature": "Junction",
          "source": "src/Bio-SeqLoc-Transcript.html#Junction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Junction",
          "package": "seqloc",
          "partial": "Junction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:Junction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Transcript",
          "name": "Transcript",
          "package": "seqloc",
          "signature": "Transcript",
          "source": "src/Bio-SeqLoc-Transcript.html#Transcript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "Transcript",
          "package": "seqloc",
          "partial": "Transcript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:Transcript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptor position, i.e., the first position in the 3' exon around\n a junction.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "acceptor",
          "package": "seqloc",
          "signature": "Junction -\u003e Pos",
          "source": "src/Bio-SeqLoc-Transcript.html#acceptor",
          "type": "function"
        },
        "index": {
          "description": "Acceptor position i.e the first position in the exon around junction",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "acceptor",
          "normalized": "Junction-\u003ePos",
          "package": "seqloc",
          "signature": "Junction-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:acceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of CDS on the transcript\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "cds",
          "package": "seqloc",
          "signature": "(Maybe ContigLoc)",
          "source": "src/Bio-SeqLoc-Transcript.html#Transcript",
          "type": "function"
        },
        "index": {
          "description": "Location of CDS on the transcript",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "cds",
          "package": "seqloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:cds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenomic location of CDS within the transcript\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "cdsLocation",
          "package": "seqloc",
          "signature": "Transcript -\u003e Maybe SpliceSeqLoc",
          "source": "src/Bio-SeqLoc-Transcript.html#cdsLocation",
          "type": "function"
        },
        "index": {
          "description": "Genomic location of CDS within the transcript",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "cdsLocation",
          "normalized": "Transcript-\u003eMaybe SpliceSeqLoc",
          "package": "seqloc",
          "partial": "Location",
          "signature": "Transcript-\u003eMaybe SpliceSeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:cdsLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDonor position, i.e., the last position in the 5' exon around a\n junction.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "donor",
          "package": "seqloc",
          "signature": "Junction -\u003e Pos",
          "source": "src/Bio-SeqLoc-Transcript.html#donor",
          "type": "function"
        },
        "index": {
          "description": "Donor position i.e the last position in the exon around junction",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "donor",
          "normalized": "Junction-\u003ePos",
          "package": "seqloc",
          "signature": "Junction-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:donor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a splice junction from a donor position (the last position\n in the 5' exon) and the acceptor position (the first position in\n the 3' exon).\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "fromDonorAcceptor",
          "package": "seqloc",
          "signature": "Pos -\u003e Pos -\u003e Junction",
          "source": "src/Bio-SeqLoc-Transcript.html#fromDonorAcceptor",
          "type": "function"
        },
        "index": {
          "description": "Create splice junction from donor position the last position in the exon and the acceptor position the first position in the exon",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "fromDonorAcceptor",
          "normalized": "Pos-\u003ePos-\u003eJunction",
          "package": "seqloc",
          "partial": "Donor Acceptor",
          "signature": "Pos-\u003ePos-\u003eJunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:fromDonorAcceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGene or locus name for a collection of transcripts\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "geneId",
          "package": "seqloc",
          "signature": "SeqLabel",
          "source": "src/Bio-SeqLoc-Transcript.html#Transcript",
          "type": "function"
        },
        "index": {
          "description": "Gene or locus name for collection of transcripts",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "geneId",
          "package": "seqloc",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:geneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.SeqLoc.Transcript",
          "name": "intron",
          "package": "seqloc",
          "signature": "ContigLoc",
          "source": "src/Bio-SeqLoc-Transcript.html#Junction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "intron",
          "package": "seqloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:intron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of splice junctions from a spliced location, in order.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "junctions",
          "package": "seqloc",
          "signature": "SpliceLoc -\u003e [Junction]",
          "source": "src/Bio-SeqLoc-Transcript.html#junctions",
          "type": "function"
        },
        "index": {
          "description": "List of splice junctions from spliced location in order",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "junctions",
          "normalized": "SpliceLoc-\u003e[Junction]",
          "package": "seqloc",
          "signature": "SpliceLoc-\u003e[Junction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:junctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence location of processed transcript\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "location",
          "package": "seqloc",
          "signature": "SpliceSeqLoc",
          "source": "src/Bio-SeqLoc-Transcript.html#Transcript",
          "type": "function"
        },
        "index": {
          "description": "Sequence location of processed transcript",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "location",
          "package": "seqloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the input contigs sorted in stranded order, when all lie\n on the same strand, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if they are not all on the same\n strand.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "sortContigs",
          "package": "seqloc",
          "signature": "[ContigLoc] -\u003e Maybe [ContigLoc]",
          "source": "src/Bio-SeqLoc-Transcript.html#sortContigs",
          "type": "function"
        },
        "index": {
          "description": "Just the input contigs sorted in stranded order when all lie on the same strand or Nothing if they are not all on the same strand",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "sortContigs",
          "normalized": "[ContigLoc]-\u003eMaybe[ContigLoc]",
          "package": "seqloc",
          "partial": "Contigs",
          "signature": "[ContigLoc]-\u003eMaybe[ContigLoc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:sortContigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific transcript identifier\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "trxId",
          "package": "seqloc",
          "signature": "SeqLabel",
          "source": "src/Bio-SeqLoc-Transcript.html#Transcript",
          "type": "function"
        },
        "index": {
          "description": "Specific transcript identifier",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "trxId",
          "package": "seqloc",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:trxId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the location of the 3' UTR on the transcript, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no \u003ccode\u003e\u003ca\u003ecds\u003c/a\u003e\u003c/code\u003e on the transcript or if the \u003ccode\u003e\u003ca\u003ecds\u003c/a\u003e\u003c/code\u003e location\n ends at the last nucleotide of the transcript--if a region is\n returned it will have positive length.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "utr3",
          "package": "seqloc",
          "signature": "Transcript -\u003e Maybe ContigLoc",
          "source": "src/Bio-SeqLoc-Transcript.html#utr3",
          "type": "function"
        },
        "index": {
          "description": "Just the location of the UTR on the transcript or Nothing if there is no cds on the transcript or if the cds location ends at the last nucleotide of the transcript--if region is returned it will have positive length",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "utr3",
          "normalized": "Transcript-\u003eMaybe ContigLoc",
          "package": "seqloc",
          "signature": "Transcript-\u003eMaybe ContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:utr3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the location of the 5' UTR on the transcript, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no \u003ccode\u003e\u003ca\u003ecds\u003c/a\u003e\u003c/code\u003e on the transcript or if the \u003ccode\u003e\u003ca\u003ecds\u003c/a\u003e\u003c/code\u003e location\n begins at the first nucleotide of the transcript--if a region is\n returned it will have positive length.\n\u003c/p\u003e",
          "module": "Bio.SeqLoc.Transcript",
          "name": "utr5",
          "package": "seqloc",
          "signature": "Transcript -\u003e Maybe ContigLoc",
          "source": "src/Bio-SeqLoc-Transcript.html#utr5",
          "type": "function"
        },
        "index": {
          "description": "Just the location of the UTR on the transcript or Nothing if there is no cds on the transcript or if the cds location begins at the first nucleotide of the transcript--if region is returned it will have positive length",
          "hierarchy": "Bio SeqLoc Transcript",
          "module": "Bio.SeqLoc.Transcript",
          "name": "utr5",
          "normalized": "Transcript-\u003eMaybe ContigLoc",
          "package": "seqloc",
          "signature": "Transcript-\u003eMaybe ContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/seqloc/docs/Bio-SeqLoc-Transcript.html#v:utr5"
      }
    }
  ]
]