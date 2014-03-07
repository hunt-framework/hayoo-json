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
        "word": "Annotations"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and utility functions for expression text selections.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.Bounds",
          "name": "Bounds",
          "package": "Annotations",
          "source": "src/Annotations-Bounds.html",
          "type": "module"
        },
        "index": {
          "description": "Types and utility functions for expression text selections",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "Bounds",
          "package": "Annotations",
          "partial": "Bounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structural selection expressed as a textual selection. The margins\n indicate the whitespace directly around the selected structure.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "Bounds",
          "package": "Annotations",
          "source": "src/Annotations-Bounds.html#Bounds",
          "type": "data"
        },
        "index": {
          "description": "structural selection expressed as textual selection The margins indicate the whitespace directly around the selected structure",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "Bounds",
          "package": "Annotations",
          "partial": "Bounds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#t:Bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple textual selection: starting offset and ending offset,\n respectively. Offsets are 0-based.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "Range",
          "package": "Annotations",
          "source": "src/Annotations-Bounds.html#Range",
          "type": "type"
        },
        "index": {
          "description": "simple textual selection starting offset and ending offset respectively Offsets are based",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "Range",
          "package": "Annotations",
          "partial": "Range",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.Bounds",
          "name": "Bounds",
          "package": "Annotations",
          "signature": "Bounds",
          "source": "src/Annotations-Bounds.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "Bounds",
          "package": "Annotations",
          "partial": "Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:Bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA measure for the dissimilarity between two ranges.\n\u003c/p\u003e\u003cpre\u003edistRange (l1, r1) (l2, r2) = |l1 - l2| + |r1 - r2|\u003c/pre\u003e",
          "module": "Annotations.Bounds",
          "name": "distRange",
          "package": "Annotations",
          "signature": "Range -\u003e Range -\u003e Int",
          "source": "src/Annotations-Bounds.html#distRange",
          "type": "function"
        },
        "index": {
          "description": "measure for the dissimilarity between two ranges distRange l1 r1 l2 r2 l1 l2 r1 r2",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "distRange",
          "normalized": "Range-\u003eRange-\u003eInt",
          "package": "Annotations",
          "partial": "Range",
          "signature": "Range-\u003eRange-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:distRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eBounds\u003c/code\u003e' inner range does not include the whitespace around the selected structure.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "innerRange",
          "package": "Annotations",
          "signature": "Bounds -\u003e Range",
          "source": "src/Annotations-Bounds.html#innerRange",
          "type": "function"
        },
        "index": {
          "description": "Bounds inner range does not include the whitespace around the selected structure",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "innerRange",
          "normalized": "Bounds-\u003eRange",
          "package": "Annotations",
          "partial": "Range",
          "signature": "Bounds-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:innerRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.Bounds",
          "name": "leftMargin",
          "package": "Annotations",
          "signature": "Range",
          "source": "src/Annotations-Bounds.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "leftMargin",
          "package": "Annotations",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:leftMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eBounds\u003c/code\u003e' outer range includes the whitespace around the selected structure.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "outerRange",
          "package": "Annotations",
          "signature": "Bounds -\u003e Range",
          "source": "src/Annotations-Bounds.html#outerRange",
          "type": "function"
        },
        "index": {
          "description": "Bounds outer range includes the whitespace around the selected structure",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "outerRange",
          "normalized": "Bounds-\u003eRange",
          "package": "Annotations",
          "partial": "Range",
          "signature": "Bounds-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:outerRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTells whether the offset falls within the given range.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "posInRange",
          "package": "Annotations",
          "signature": "Int -\u003e Range -\u003e Bool",
          "source": "src/Annotations-Bounds.html#posInRange",
          "type": "function"
        },
        "index": {
          "description": "Tells whether the offset falls within the given range",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "posInRange",
          "normalized": "Int-\u003eRange-\u003eBool",
          "package": "Annotations",
          "partial": "In Range",
          "signature": "Int-\u003eRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:posInRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range is within certain bounds if its left offset is within the bounds' \n left margin and its right offset is within the bounds' right margin.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "rangeInBounds",
          "package": "Annotations",
          "signature": "Range -\u003e Bounds -\u003e Bool",
          "source": "src/Annotations-Bounds.html#rangeInBounds",
          "type": "function"
        },
        "index": {
          "description": "range is within certain bounds if its left offset is within the bounds left margin and its right offset is within the bounds right margin",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "rangeInBounds",
          "normalized": "Range-\u003eBounds-\u003eBool",
          "package": "Annotations",
          "partial": "In Bounds",
          "signature": "Range-\u003eBounds-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:rangeInBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTells whether the first range is enclosed by the second range.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "rangeInRange",
          "package": "Annotations",
          "signature": "Range -\u003e Range -\u003e Bool",
          "source": "src/Annotations-Bounds.html#rangeInRange",
          "type": "function"
        },
        "index": {
          "description": "Tells whether the first range is enclosed by the second range",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "rangeInRange",
          "normalized": "Range-\u003eRange-\u003eBool",
          "package": "Annotations",
          "partial": "In Range",
          "signature": "Range-\u003eRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:rangeInRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erangesInBounds b\u003c/code\u003e yields all those ranges \u003ccode\u003er\u003c/code\u003e for which\n \u003ccode\u003erangeInBounds r b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.Bounds",
          "name": "rangesInBounds",
          "package": "Annotations",
          "signature": "Bounds -\u003e [Range]",
          "source": "src/Annotations-Bounds.html#rangesInBounds",
          "type": "function"
        },
        "index": {
          "description": "rangesInBounds yields all those ranges for which rangeInBounds",
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "rangesInBounds",
          "normalized": "Bounds-\u003e[Range]",
          "package": "Annotations",
          "partial": "In Bounds",
          "signature": "Bounds-\u003e[Range]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:rangesInBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.Bounds",
          "name": "rightMargin",
          "package": "Annotations",
          "signature": "Range",
          "source": "src/Annotations-Bounds.html#Bounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations Bounds",
          "module": "Annotations.Bounds",
          "name": "rightMargin",
          "package": "Annotations",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Bounds.html#v:rightMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Parsec parser type that parses \u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003es and keeps track of the \n position within the input stream. Unlike Parsec's default position \n tracking, this parser keeps track of the range of whitespace between two \n tokens.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.BoundsParser",
          "name": "BoundsParser",
          "package": "Annotations",
          "source": "src/Annotations-BoundsParser.html",
          "type": "module"
        },
        "index": {
          "description": "Parsec parser type that parses Symbol and keeps track of the position within the input stream Unlike Parsec default position tracking this parser keeps track of the range of whitespace between two tokens",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "BoundsParser",
          "package": "Annotations",
          "partial": "Bounds Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that works on symbols coupled with token information. The state maintains the current position in the stream. This position is the range of whitespace between two tokens.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "P",
          "package": "Annotations",
          "source": "src/Annotations-BoundsParser.html#P",
          "type": "type"
        },
        "index": {
          "description": "parser that works on symbols coupled with token information The state maintains the current position in the stream This position is the range of whitespace between two tokens",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "P",
          "package": "Annotations",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbols form input for parsers. Minimal complete definition: \u003ccode\u003e\u003ca\u003eunparse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "Symbol",
          "package": "Annotations",
          "source": "src/Annotations-BoundsParser.html#Symbol",
          "type": "class"
        },
        "index": {
          "description": "Symbols form input for parsers Minimal complete definition unparse",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "Symbol",
          "package": "Annotations",
          "partial": "Symbol",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a predicate that tells what tokens to discard, keeps only the meaningful tokens and couples them with position information.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "collapse",
          "package": "Annotations",
          "signature": "(s -\u003e Bool) -\u003e [s] -\u003e [(s, Bounds)]",
          "source": "src/Annotations-BoundsParser.html#collapse",
          "type": "function"
        },
        "index": {
          "description": "Given predicate that tells what tokens to discard keeps only the meaningful tokens and couples them with position information",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "collapse",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[(a,Bounds)]",
          "package": "Annotations",
          "signature": "(s-\u003eBool)-\u003e[s]-\u003e[(s,Bounds)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#v:collapse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the current position in the input.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "getPos",
          "package": "Annotations",
          "signature": "P s m Range",
          "source": "src/Annotations-BoundsParser.html#getPos",
          "type": "function"
        },
        "index": {
          "description": "Yield the current position in the input",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "getPos",
          "package": "Annotations",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#v:getPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecognise a specific symbol.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "pToken",
          "package": "Annotations",
          "signature": "s -\u003e P s m s",
          "source": "src/Annotations-BoundsParser.html#pToken",
          "type": "function"
        },
        "index": {
          "description": "Recognise specific symbol",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "pToken",
          "normalized": "a-\u003eP a b a",
          "package": "Annotations",
          "partial": "Token",
          "signature": "s-\u003eP s m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#v:pToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecognise a symbol matching a predicate.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "satisfy",
          "package": "Annotations",
          "signature": "(s -\u003e Bool) -\u003e P s m s",
          "source": "src/Annotations-BoundsParser.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Recognise symbol matching predicate",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eP a b a",
          "package": "Annotations",
          "signature": "(s-\u003eBool)-\u003eP s m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the size of a symbol. Default implementation is \u003ccode\u003elength . unparse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "symbolSize",
          "package": "Annotations",
          "signature": "s -\u003e Int",
          "source": "src/Annotations-BoundsParser.html#symbolSize",
          "type": "method"
        },
        "index": {
          "description": "Yields the size of symbol Default implementation is length unparse",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "symbolSize",
          "normalized": "a-\u003eInt",
          "package": "Annotations",
          "partial": "Size",
          "signature": "s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#v:symbolSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnparses a symbol, converting it back to text.\n\u003c/p\u003e",
          "module": "Annotations.BoundsParser",
          "name": "unparse",
          "package": "Annotations",
          "signature": "s -\u003e String",
          "source": "src/Annotations-BoundsParser.html#unparse",
          "type": "method"
        },
        "index": {
          "description": "Unparses symbol converting it back to text",
          "hierarchy": "Annotations BoundsParser",
          "module": "Annotations.BoundsParser",
          "name": "unparse",
          "normalized": "a-\u003eString",
          "package": "Annotations",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-BoundsParser.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExcept\u003c/a\u003e\u003c/code\u003e datatype captures monoidal exceptions in applicative \n computations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.Except",
          "name": "Except",
          "package": "Annotations",
          "source": "src/Annotations-Except.html",
          "type": "module"
        },
        "index": {
          "description": "The Except datatype captures monoidal exceptions in applicative computations",
          "hierarchy": "Annotations Except",
          "module": "Annotations.Except",
          "name": "Except",
          "package": "Annotations",
          "partial": "Except",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Except.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eExcept\u003c/code\u003e is like \u003ccode\u003eEither\u003c/code\u003e but is meant to be used only in applicative \n computations. When two exceptions are sequenced, their sum (using \n \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e) is computed.\n\u003c/p\u003e",
          "module": "Annotations.Except",
          "name": "Except",
          "package": "Annotations",
          "source": "src/Annotations-Except.html#Except",
          "type": "data"
        },
        "index": {
          "description": "Except is like Either but is meant to be used only in applicative computations When two exceptions are sequenced their sum using mappend is computed",
          "hierarchy": "Annotations Except",
          "module": "Annotations.Except",
          "name": "Except",
          "package": "Annotations",
          "partial": "Except",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Except.html#t:Except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.Except",
          "name": "Failed",
          "package": "Annotations",
          "signature": "Failed e",
          "source": "src/Annotations-Except.html#Except",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations Except",
          "module": "Annotations.Except",
          "name": "Failed",
          "package": "Annotations",
          "partial": "Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Except.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.Except",
          "name": "OK",
          "package": "Annotations",
          "signature": "OK a",
          "source": "src/Annotations-Except.html#Except",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations Except",
          "module": "Annotations.Except",
          "name": "OK",
          "package": "Annotations",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-Except.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.ExploreHints",
          "name": "ExploreHints",
          "package": "Annotations",
          "source": "src/Annotations-ExploreHints.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations ExploreHints",
          "module": "Annotations.ExploreHints",
          "name": "ExploreHints",
          "package": "Annotations",
          "partial": "Explore Hints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-ExploreHints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCaptures hints for the exploration of annotated trees.\n\u003c/p\u003e",
          "module": "Annotations.ExploreHints",
          "name": "ExploreHints",
          "package": "Annotations",
          "source": "src/Annotations-ExploreHints.html#ExploreHints",
          "type": "data"
        },
        "index": {
          "description": "Captures hints for the exploration of annotated trees",
          "hierarchy": "Annotations ExploreHints",
          "module": "Annotations.ExploreHints",
          "name": "ExploreHints",
          "package": "Annotations",
          "partial": "Explore Hints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-ExploreHints.html#t:ExploreHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.ExploreHints",
          "name": "ExploreHints",
          "package": "Annotations",
          "signature": "ExploreHints",
          "source": "src/Annotations-ExploreHints.html#ExploreHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations ExploreHints",
          "module": "Annotations.ExploreHints",
          "name": "ExploreHints",
          "package": "Annotations",
          "partial": "Explore Hints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-ExploreHints.html#v:ExploreHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to explore the children.\n\u003c/p\u003e",
          "module": "Annotations.ExploreHints",
          "name": "exploreDown",
          "package": "Annotations",
          "signature": "Bool",
          "source": "src/Annotations-ExploreHints.html#ExploreHints",
          "type": "function"
        },
        "index": {
          "description": "Whether to explore the children",
          "hierarchy": "Annotations ExploreHints",
          "module": "Annotations.ExploreHints",
          "name": "exploreDown",
          "package": "Annotations",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-ExploreHints.html#v:exploreDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to explore further to the right.\n\u003c/p\u003e",
          "module": "Annotations.ExploreHints",
          "name": "exploreRight",
          "package": "Annotations",
          "signature": "Bool",
          "source": "src/Annotations-ExploreHints.html#ExploreHints",
          "type": "function"
        },
        "index": {
          "description": "Whether to explore further to the right",
          "hierarchy": "Annotations ExploreHints",
          "module": "Annotations.ExploreHints",
          "name": "exploreRight",
          "package": "Annotations",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-ExploreHints.html#v:exploreRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the current focus matches.\n\u003c/p\u003e",
          "module": "Annotations.ExploreHints",
          "name": "matchHere",
          "package": "Annotations",
          "signature": "Bool",
          "source": "src/Annotations-ExploreHints.html#ExploreHints",
          "type": "function"
        },
        "index": {
          "description": "Whether the current focus matches",
          "hierarchy": "Annotations ExploreHints",
          "module": "Annotations.ExploreHints",
          "name": "matchHere",
          "package": "Annotations",
          "partial": "Here",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-ExploreHints.html#v:matchHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Annotated",
          "name": "Annotated",
          "package": "Annotations",
          "source": "src/Annotations-F-Annotated.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "Annotated",
          "package": "Annotations",
          "partial": "Annotated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted annotation of functors.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "Ann",
          "package": "Annotations",
          "source": "src/Annotations-F-Annotated.html#Ann",
          "type": "data"
        },
        "index": {
          "description": "Lifted annotation of functors",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "Ann",
          "package": "Annotations",
          "partial": "Ann",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#t:Ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fully annotated tree.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "AnnFix",
          "package": "Annotations",
          "source": "src/Annotations-F-Annotated.html#AnnFix",
          "type": "type"
        },
        "index": {
          "description": "fully annotated tree",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "AnnFix",
          "package": "Annotations",
          "partial": "Ann Fix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#t:AnnFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with fully annotated children.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "AnnFix1",
          "package": "Annotations",
          "source": "src/Annotations-F-Annotated.html#AnnFix1",
          "type": "type"
        },
        "index": {
          "description": "functor with fully annotated children",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "AnnFix1",
          "package": "Annotations",
          "partial": "Ann Fix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#t:AnnFix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Annotated",
          "name": "Ann",
          "package": "Annotations",
          "signature": "Ann x (f a)",
          "source": "src/Annotations-F-Annotated.html#Ann",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "Ann",
          "package": "Annotations",
          "partial": "Ann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:Ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a tree to a value according to the algebra, collecting potential\n   errors. The errors are combined with the annotations in the tree at the\n   positions at which the errors occurred.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "errorCata",
          "package": "Annotations",
          "signature": "ErrorAlgebra fT eT aT -\u003e AnnFix xT fT -\u003e Except [(eT, xT)] aT",
          "source": "src/Annotations-F-Annotated.html#errorCata",
          "type": "function"
        },
        "index": {
          "description": "Reduces tree to value according to the algebra collecting potential errors The errors are combined with the annotations in the tree at the positions at which the errors occurred",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "errorCata",
          "normalized": "ErrorAlgebra a b c-\u003eAnnFix d a-\u003eExcept[(b,d)]c",
          "package": "Annotations",
          "partial": "Cata",
          "signature": "ErrorAlgebra fT eT aT-\u003eAnnFix xT fT-\u003eExcept[(eT,xT)]aT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:errorCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore an annotated tree. Starting with the root of the tree, at each \n position the annotation at that position is matched against the \n \u003ccode\u003e\u003ca\u003eExploreHints\u003c/a\u003e\u003c/code\u003e predicates and all the selections where \u003ccode\u003e\u003ca\u003ematchHere\u003c/a\u003e\u003c/code\u003e was \n positive are collected. The \u003ccode\u003e\u003ca\u003eexploreRight\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexploreDown\u003c/a\u003e\u003c/code\u003e allow pruning \n of the tree, preventing entire parts from being visited.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "explore",
          "package": "Annotations",
          "signature": "(x -\u003e ExploreHints) -\u003e AnnFix x f -\u003e [Zipper (AnnFix x f)]",
          "source": "src/Annotations-F-Annotated.html#explore",
          "type": "function"
        },
        "index": {
          "description": "Explore an annotated tree Starting with the root of the tree at each position the annotation at that position is matched against the ExploreHints predicates and all the selections where matchHere was positive are collected The exploreRight and exploreDown allow pruning of the tree preventing entire parts from being visited",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "explore",
          "normalized": "(a-\u003eExploreHints)-\u003eAnnFix a b-\u003e[Zipper(AnnFix a b)]",
          "package": "Annotations",
          "signature": "(x-\u003eExploreHints)-\u003eAnnFix x f-\u003e[Zipper(AnnFix x f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:explore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the deepest node in an annotated tree that matches the predicate.\n Starting with the root, the predicate tells whether a node's annotation\n matches. If so, the search continues at the node's children and the node's\n siblings to the right are excluded from further exploration. If no child\n matches, the node itself is returned.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "findLeftmostDeepest",
          "package": "Annotations",
          "signature": "(x -\u003e Bool) -\u003e AnnFix x f -\u003e Maybe (Zipper (AnnFix x f))",
          "source": "src/Annotations-F-Annotated.html#findLeftmostDeepest",
          "type": "function"
        },
        "index": {
          "description": "Find the deepest node in an annotated tree that matches the predicate Starting with the root the predicate tells whether node annotation matches If so the search continues at the node children and the node siblings to the right are excluded from further exploration If no child matches the node itself is returned",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "findLeftmostDeepest",
          "normalized": "(a-\u003eBool)-\u003eAnnFix a b-\u003eMaybe(Zipper(AnnFix a b))",
          "package": "Annotations",
          "partial": "Leftmost Deepest",
          "signature": "(x-\u003eBool)-\u003eAnnFix x f-\u003eMaybe(Zipper(AnnFix x f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:findLeftmostDeepest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a tree with an annotation at the top level.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "mkAnnFix",
          "package": "Annotations",
          "signature": "x -\u003e AnnFix1 x f -\u003e AnnFix x f",
          "source": "src/Annotations-F-Annotated.html#mkAnnFix",
          "type": "function"
        },
        "index": {
          "description": "Supply tree with an annotation at the top level",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "mkAnnFix",
          "normalized": "a-\u003eAnnFix a b-\u003eAnnFix a b",
          "package": "Annotations",
          "partial": "Ann Fix",
          "signature": "x-\u003eAnnFix x f-\u003eAnnFix x f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:mkAnnFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the annotation at the root of the tree.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "rootAnn",
          "package": "Annotations",
          "signature": "AnnFix x f -\u003e x",
          "source": "src/Annotations-F-Annotated.html#rootAnn",
          "type": "function"
        },
        "index": {
          "description": "Yields the annotation at the root of the tree",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "rootAnn",
          "normalized": "AnnFix a b-\u003ea",
          "package": "Annotations",
          "partial": "Ann",
          "signature": "AnnFix x f-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:rootAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively discard annotations.\n\u003c/p\u003e",
          "module": "Annotations.F.Annotated",
          "name": "unannotate",
          "package": "Annotations",
          "signature": "AnnFix x f -\u003e Fix f",
          "source": "src/Annotations-F-Annotated.html#unannotate",
          "type": "function"
        },
        "index": {
          "description": "Recursively discard annotations",
          "hierarchy": "Annotations F Annotated",
          "module": "Annotations.F.Annotated",
          "name": "unannotate",
          "normalized": "AnnFix a b-\u003eFix b",
          "package": "Annotations",
          "signature": "AnnFix x f-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Annotated.html#v:unannotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Fixpoints",
          "name": "Fixpoints",
          "package": "Annotations",
          "source": "src/Annotations-F-Fixpoints.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "Fixpoints",
          "package": "Annotations",
          "partial": "Fixpoints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebras for catamorphisms.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "Algebra",
          "package": "Annotations",
          "source": "src/Annotations-F-Fixpoints.html#Algebra",
          "type": "type"
        },
        "index": {
          "description": "Algebras for catamorphisms",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "Algebra",
          "package": "Annotations",
          "partial": "Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#t:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoalgebras for anamorphisms.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "Coalgebra",
          "package": "Annotations",
          "source": "src/Annotations-F-Fixpoints.html#Coalgebra",
          "type": "type"
        },
        "index": {
          "description": "Coalgebras for anamorphisms",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "Coalgebra",
          "package": "Annotations",
          "partial": "Coalgebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#t:Coalgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgebras for error catamorphisms.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "ErrorAlgebra",
          "package": "Annotations",
          "source": "src/Annotations-F-Fixpoints.html#ErrorAlgebra",
          "type": "type"
        },
        "index": {
          "description": "Algebras for error catamorphisms",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "ErrorAlgebra",
          "package": "Annotations",
          "partial": "Error Algebra",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#t:ErrorAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixpoint of functors.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "Fix",
          "package": "Annotations",
          "source": "src/Annotations-F-Fixpoints.html#Fix",
          "type": "newtype"
        },
        "index": {
          "description": "Fixpoint of functors",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "Fix",
          "package": "Annotations",
          "partial": "Fix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#t:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Fixpoints",
          "name": "In",
          "package": "Annotations",
          "signature": "In",
          "source": "src/Annotations-F-Fixpoints.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "In",
          "package": "Annotations",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a tree from a value according to the coalgebra.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "ana",
          "package": "Annotations",
          "signature": "Coalgebra fT aT -\u003e aT -\u003e Fix fT",
          "source": "src/Annotations-F-Fixpoints.html#ana",
          "type": "function"
        },
        "index": {
          "description": "Constructs tree from value according to the coalgebra",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "ana",
          "normalized": "Coalgebra a b-\u003eb-\u003eFix a",
          "package": "Annotations",
          "signature": "Coalgebra fT aT-\u003eaT-\u003eFix fT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#v:ana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a tree to a value according to the algebra, propagating potential errors.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "cascade",
          "package": "Annotations",
          "signature": "ErrorAlgebra fT eT aT -\u003e Algebra fT (Except eT aT)",
          "source": "src/Annotations-F-Fixpoints.html#cascade",
          "type": "function"
        },
        "index": {
          "description": "Reduces tree to value according to the algebra propagating potential errors",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "cascade",
          "normalized": "ErrorAlgebra a b c-\u003eAlgebra a(Except b c)",
          "package": "Annotations",
          "signature": "ErrorAlgebra fT eT aT-\u003eAlgebra fT(Except eT aT)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#v:cascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a tree to a value according to the algebra.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "cata",
          "package": "Annotations",
          "signature": "Algebra fT aT -\u003e Fix fT -\u003e aT",
          "source": "src/Annotations-F-Fixpoints.html#cata",
          "type": "function"
        },
        "index": {
          "description": "Reduces tree to value according to the algebra",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "cata",
          "normalized": "Algebra a b-\u003eFix a-\u003eb",
          "package": "Annotations",
          "signature": "Algebra fT aT-\u003eFix fT-\u003eaT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#v:cata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to a tree's direct children.\n\u003c/p\u003e",
          "module": "Annotations.F.Fixpoints",
          "name": "compos",
          "package": "Annotations",
          "signature": "(Fix f -\u003e Fix f) -\u003e Fix f -\u003e Fix f",
          "source": "src/Annotations-F-Fixpoints.html#compos",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation to tree direct children",
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "compos",
          "normalized": "(Fix a-\u003eFix a)-\u003eFix a-\u003eFix a",
          "package": "Annotations",
          "signature": "(Fix f-\u003eFix f)-\u003eFix f-\u003eFix f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#v:compos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Fixpoints",
          "name": "out",
          "package": "Annotations",
          "signature": "fT (Fix fT)",
          "source": "src/Annotations-F-Fixpoints.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations F Fixpoints",
          "module": "Annotations.F.Fixpoints",
          "name": "out",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Fixpoints.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.ParserCombinators",
          "name": "ParserCombinators",
          "package": "Annotations",
          "source": "src/Annotations-F-ParserCombinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations F ParserCombinators",
          "module": "Annotations.F.ParserCombinators",
          "name": "ParserCombinators",
          "package": "Annotations",
          "partial": "Parser Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-ParserCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse left-recursive structures.\n\u003c/p\u003e",
          "module": "Annotations.F.ParserCombinators",
          "name": "chainl",
          "package": "Annotations",
          "signature": "P s m (AnnFix Bounds f) -\u003e P s m (AnnFix Bounds f -\u003e AnnFix Bounds f -\u003e AnnFix1 Bounds f) -\u003e P s m (AnnFix Bounds f)",
          "source": "src/Annotations-F-ParserCombinators.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "Parse left-recursive structures",
          "hierarchy": "Annotations F ParserCombinators",
          "module": "Annotations.F.ParserCombinators",
          "name": "chainl",
          "normalized": "P a b(AnnFix Bounds c)-\u003eP a b(AnnFix Bounds c-\u003eAnnFix Bounds c-\u003eAnnFix Bounds c)-\u003eP a b(AnnFix Bounds c)",
          "package": "Annotations",
          "signature": "P s m(AnnFix Bounds f)-\u003eP s m(AnnFix Bounds f-\u003eAnnFix Bounds f-\u003eAnnFix Bounds f)-\u003eP s m(AnnFix Bounds f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-ParserCombinators.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse right-recursive structures.\n\u003c/p\u003e",
          "module": "Annotations.F.ParserCombinators",
          "name": "chainr",
          "package": "Annotations",
          "signature": "P s m (AnnFix Bounds f) -\u003e P s m (AnnFix Bounds f -\u003e AnnFix Bounds f -\u003e AnnFix1 Bounds f) -\u003e P s m (AnnFix Bounds f)",
          "source": "src/Annotations-F-ParserCombinators.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "Parse right-recursive structures",
          "hierarchy": "Annotations F ParserCombinators",
          "module": "Annotations.F.ParserCombinators",
          "name": "chainr",
          "normalized": "P a b(AnnFix Bounds c)-\u003eP a b(AnnFix Bounds c-\u003eAnnFix Bounds c-\u003eAnnFix Bounds c)-\u003eP a b(AnnFix Bounds c)",
          "package": "Annotations",
          "signature": "P s m(AnnFix Bounds f)-\u003eP s m(AnnFix Bounds f-\u003eAnnFix Bounds f-\u003eAnnFix Bounds f)-\u003eP s m(AnnFix Bounds f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-ParserCombinators.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the left margin of a structure, asks the parser for the right\n   margin and wraps the position information around the root of the tree.\n\u003c/p\u003e",
          "module": "Annotations.F.ParserCombinators",
          "name": "mkBounded",
          "package": "Annotations",
          "signature": "Range -\u003e AnnFix1 Bounds f -\u003e P s m (AnnFix Bounds f)",
          "source": "src/Annotations-F-ParserCombinators.html#mkBounded",
          "type": "function"
        },
        "index": {
          "description": "Given the left margin of structure asks the parser for the right margin and wraps the position information around the root of the tree",
          "hierarchy": "Annotations F ParserCombinators",
          "module": "Annotations.F.ParserCombinators",
          "name": "mkBounded",
          "normalized": "Range-\u003eAnnFix Bounds a-\u003eP b c(AnnFix Bounds a)",
          "package": "Annotations",
          "partial": "Bounded",
          "signature": "Range-\u003eAnnFix Bounds f-\u003eP s m(AnnFix Bounds f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-ParserCombinators.html#v:mkBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an unnotated tree with position information from the parse state.\n\u003c/p\u003e",
          "module": "Annotations.F.ParserCombinators",
          "name": "unit",
          "package": "Annotations",
          "signature": "P s m (AnnFix1 Bounds f) -\u003e P s m (AnnFix Bounds f)",
          "source": "src/Annotations-F-ParserCombinators.html#unit",
          "type": "function"
        },
        "index": {
          "description": "Wrap an unnotated tree with position information from the parse state",
          "hierarchy": "Annotations F ParserCombinators",
          "module": "Annotations.F.ParserCombinators",
          "name": "unit",
          "normalized": "P a b(AnnFix Bounds c)-\u003eP a b(AnnFix Bounds c)",
          "package": "Annotations",
          "signature": "P s m(AnnFix Bounds f)-\u003eP s m(AnnFix Bounds f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-ParserCombinators.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQueries on trees annotated with position information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.F.Positional",
          "name": "Positional",
          "package": "Annotations",
          "source": "src/Annotations-F-Positional.html",
          "type": "module"
        },
        "index": {
          "description": "Queries on trees annotated with position information",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "Positional",
          "package": "Annotations",
          "partial": "Positional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove around in a tree according to the \u003ccode\u003e\u003ca\u003eNav\u003c/a\u003e\u003c/code\u003e, expressed in tree selections. Although a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e is required as input, a \u003ccode\u003e\u003ca\u003eBounds\u003c/a\u003e\u003c/code\u003e is returned, providing information about all the valid text selections that would select the particular tree node.\n\u003c/p\u003e",
          "module": "Annotations.F.Positional",
          "name": "moveSelection",
          "package": "Annotations",
          "signature": "AnnFix Bounds f -\u003e Nav -\u003e Range -\u003e Maybe Bounds",
          "source": "src/Annotations-F-Positional.html#moveSelection",
          "type": "function"
        },
        "index": {
          "description": "Move around in tree according to the Nav expressed in tree selections Although Range is required as input Bounds is returned providing information about all the valid text selections that would select the particular tree node",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "moveSelection",
          "normalized": "AnnFix Bounds a-\u003eNav-\u003eRange-\u003eMaybe Bounds",
          "package": "Annotations",
          "partial": "Selection",
          "signature": "AnnFix Bounds f-\u003eNav-\u003eRange-\u003eMaybe Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#v:moveSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefined as \u003ccode\u003e\u003ccode\u003e\u003ca\u003erepairBy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edistRange\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.F.Positional",
          "name": "repair",
          "package": "Annotations",
          "signature": "AnnFix Bounds f -\u003e Range -\u003e Bounds",
          "source": "src/Annotations-F-Positional.html#repair",
          "type": "function"
        },
        "index": {
          "description": "Defined as repairBy distRange",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "repair",
          "normalized": "AnnFix Bounds a-\u003eRange-\u003eBounds",
          "package": "Annotations",
          "signature": "AnnFix Bounds f-\u003eRange-\u003eBounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#v:repair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepairBy cost tree range\u003c/code\u003e finds the the closest valid text selection to \u003ccode\u003erange\u003c/code\u003e, where ''closest'' is determined by the specified cost function.\n\u003c/p\u003e",
          "module": "Annotations.F.Positional",
          "name": "repairBy",
          "package": "Annotations",
          "signature": "(Range -\u003e Range -\u003e dist) -\u003e AnnFix Bounds f -\u003e Range -\u003e Bounds",
          "source": "src/Annotations-F-Positional.html#repairBy",
          "type": "function"
        },
        "index": {
          "description": "repairBy cost tree range finds the the closest valid text selection to range where closest is determined by the specified cost function",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "repairBy",
          "normalized": "(Range-\u003eRange-\u003ea)-\u003eAnnFix Bounds b-\u003eRange-\u003eBounds",
          "package": "Annotations",
          "partial": "By",
          "signature": "(Range-\u003eRange-\u003edist)-\u003eAnnFix Bounds f-\u003eRange-\u003eBounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#v:repairBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the deepest node whose bounds contain the given position.\n\u003c/p\u003e",
          "module": "Annotations.F.Positional",
          "name": "selectByPos",
          "package": "Annotations",
          "signature": "Int -\u003e AnnFix Bounds f -\u003e Maybe (Zipper (AnnFix Bounds f))",
          "source": "src/Annotations-F-Positional.html#selectByPos",
          "type": "function"
        },
        "index": {
          "description": "Find the deepest node whose bounds contain the given position",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "selectByPos",
          "normalized": "Int-\u003eAnnFix Bounds a-\u003eMaybe(Zipper(AnnFix Bounds a))",
          "package": "Annotations",
          "partial": "By Pos",
          "signature": "Int-\u003eAnnFix Bounds f-\u003eMaybe(Zipper(AnnFix Bounds f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#v:selectByPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the deepest node whose bounds match the given range. See \u003ccode\u003e\u003ca\u003erangeInBounds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.F.Positional",
          "name": "selectByRange",
          "package": "Annotations",
          "signature": "Range -\u003e AnnFix Bounds f -\u003e Maybe (Zipper (AnnFix Bounds f))",
          "source": "src/Annotations-F-Positional.html#selectByRange",
          "type": "function"
        },
        "index": {
          "description": "Find the deepest node whose bounds match the given range See rangeInBounds",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "selectByRange",
          "normalized": "Range-\u003eAnnFix Bounds a-\u003eMaybe(Zipper(AnnFix Bounds a))",
          "package": "Annotations",
          "partial": "By Range",
          "signature": "Range-\u003eAnnFix Bounds f-\u003eMaybe(Zipper(AnnFix Bounds f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#v:selectByRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all selections in the tree and return their bounds. The tree is traversed in preorder. Consequently, the bounds are returned in lexicographical order.\n\u003c/p\u003e",
          "module": "Annotations.F.Positional",
          "name": "validBounds",
          "package": "Annotations",
          "signature": "AnnFix Bounds f -\u003e [Bounds]",
          "source": "src/Annotations-F-Positional.html#validBounds",
          "type": "function"
        },
        "index": {
          "description": "Find all selections in the tree and return their bounds The tree is traversed in preorder Consequently the bounds are returned in lexicographical order",
          "hierarchy": "Annotations F Positional",
          "module": "Annotations.F.Positional",
          "name": "validBounds",
          "normalized": "AnnFix Bounds a-\u003e[Bounds]",
          "package": "Annotations",
          "partial": "Bounds",
          "signature": "AnnFix Bounds f-\u003e[Bounds]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Positional.html#v:validBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "source": "src/Annotations-F-Zipper.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCaptures navigation steps in a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e. Its \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance specifies the identity step (\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e) and step composition (\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "Nav",
          "package": "Annotations",
          "source": "src/Annotations-F-Zipper.html#Nav",
          "type": "newtype"
        },
        "index": {
          "description": "Captures navigation steps in Zipper Its Monoid instance specifies the identity step mempty and step composition mappend",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "Nav",
          "package": "Annotations",
          "partial": "Nav",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#t:Nav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quasi-zipper, meant for O(1), fixed-memory stepping through a tree structure, but not meant for updates.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "quasi-zipper meant for fixed-memory stepping through tree structure but not meant for updates",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Zipper",
          "name": "Nav",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-F-Zipper.html#Nav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "Nav",
          "package": "Annotations",
          "partial": "Nav",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:Nav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "signature": "Zipper",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "partial": "Zipper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses the tree in preorder, yielding all possible tree selections.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "allFoci",
          "package": "Annotations",
          "signature": "Fix f -\u003e [Zipper (Fix f)]",
          "source": "src/Annotations-F-Zipper.html#allFoci",
          "type": "function"
        },
        "index": {
          "description": "Traverses the tree in preorder yielding all possible tree selections",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "allFoci",
          "normalized": "Fix a-\u003e[Zipper(Fix a)]",
          "package": "Annotations",
          "partial": "Foci",
          "signature": "Fix f-\u003e[Zipper(Fix f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:allFoci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove down into a specific child.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "child",
          "package": "Annotations",
          "signature": "Int -\u003e Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Annotations-F-Zipper.html#child",
          "type": "function"
        },
        "index": {
          "description": "Move down into specific child",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "child",
          "normalized": "Int-\u003eZipper a-\u003eMaybe(Zipper a)",
          "package": "Annotations",
          "signature": "Int-\u003eZipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove into the root of the fixed point. The returned zipper builds a data structure with optimal sharing and fixed memory usage. For example, \u003ccode\u003ezLeft \u003e=\u003e zRight\u003c/code\u003e (if successful) returns to the same node in memory.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "enter",
          "package": "Annotations",
          "signature": "Fix f -\u003e Zipper (Fix f)",
          "source": "src/Annotations-F-Zipper.html#enter",
          "type": "function"
        },
        "index": {
          "description": "Move into the root of the fixed point The returned zipper builds data structure with optimal sharing and fixed memory usage For example zLeft zRight if successful returns to the same node in memory",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "enter",
          "normalized": "Fix a-\u003eZipper(Fix a)",
          "package": "Annotations",
          "signature": "Fix f-\u003eZipper(Fix f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWalk back up to the root of the fixed point and leave the zipper structure.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "leave",
          "package": "Annotations",
          "signature": "Zipper a -\u003e a",
          "source": "src/Annotations-F-Zipper.html#leave",
          "type": "function"
        },
        "index": {
          "description": "Walk back up to the root of the fixed point and leave the zipper structure",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "leave",
          "normalized": "Zipper a-\u003ea",
          "package": "Annotations",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.F.Zipper",
          "name": "nav",
          "package": "Annotations",
          "signature": "forall a.  Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Annotations-F-Zipper.html#Nav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "nav",
          "normalized": "a b Zipper c-\u003eMaybe(Zipper c)",
          "package": "Annotations",
          "signature": "forall a. Zipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:nav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove down into the leftmost child.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "zDown",
          "package": "Annotations",
          "signature": "Maybe (Zipper a)",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "description": "Move down into the leftmost child",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "zDown",
          "package": "Annotations",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:zDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current focus of this zipper.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "zFocus",
          "package": "Annotations",
          "signature": "a",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "description": "The current focus of this zipper",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "zFocus",
          "package": "Annotations",
          "partial": "Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:zFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to the left sibling.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "zLeft",
          "package": "Annotations",
          "signature": "Maybe (Zipper a)",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "description": "Move to the left sibling",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "zLeft",
          "package": "Annotations",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:zLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to the right sibling.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "zRight",
          "package": "Annotations",
          "signature": "Maybe (Zipper a)",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "description": "Move to the right sibling",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "zRight",
          "package": "Annotations",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:zRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove up to the parent.\n\u003c/p\u003e",
          "module": "Annotations.F.Zipper",
          "name": "zUp",
          "package": "Annotations",
          "signature": "Maybe (Zipper a)",
          "source": "src/Annotations-F-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "description": "Move up to the parent",
          "hierarchy": "Annotations F Zipper",
          "module": "Annotations.F.Zipper",
          "name": "zUp",
          "package": "Annotations",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-F-Zipper.html#v:zUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Annotated",
          "name": "Annotated",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Annotated.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "Annotated",
          "package": "Annotations",
          "partial": "Annotated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fully annotated tree.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnnFix",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Annotated.html#AnnFix",
          "type": "type"
        },
        "index": {
          "description": "fully annotated tree",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnnFix",
          "package": "Annotations",
          "partial": "Ann Fix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#t:AnnFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with fully annotated children.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnnFix1",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Annotated.html#AnnFix1",
          "type": "type"
        },
        "index": {
          "description": "functor with fully annotated children",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnnFix1",
          "package": "Annotations",
          "partial": "Ann Fix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#t:AnnFix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnnZipper",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Annotated.html#AnnZipper",
          "type": "type"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnnZipper",
          "package": "Annotations",
          "partial": "Ann Zipper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#t:AnnZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixpoint of a data family \u003ccode\u003es\u003c/code\u003e annotated with an \u003ccode\u003ex\u003c/code\u003e at every recursive position, with existentially quantified top-level index.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnyAnnFix",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Annotated.html#AnyAnnFix",
          "type": "type"
        },
        "index": {
          "description": "fixpoint of data family annotated with an at every recursive position with existentially quantified top-level index",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "AnyAnnFix",
          "package": "Annotations",
          "partial": "Any Ann Fix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#t:AnyAnnFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively yield all annotations in the tree in preorder.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "allAnnotations",
          "package": "Annotations",
          "signature": "phi ix -\u003e AnnFix x phi ix -\u003e [x]",
          "source": "src/Annotations-MultiRec-Annotated.html#allAnnotations",
          "type": "function"
        },
        "index": {
          "description": "Recursively yield all annotations in the tree in preorder",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "allAnnotations",
          "normalized": "a b-\u003eAnnFix c a b-\u003e[c]",
          "package": "Annotations",
          "partial": "Annotations",
          "signature": "phi ix-\u003eAnnFix x phi ix-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:allAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollects the direct children of a functor in a list.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "children",
          "package": "Annotations",
          "signature": "s ix -\u003e f r ix -\u003e [AnyF s r]",
          "source": "src/Annotations-MultiRec-Annotated.html#children",
          "type": "function"
        },
        "index": {
          "description": "Collects the direct children of functor in list",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "children",
          "normalized": "a b-\u003ec d b-\u003e[AnyF a d]",
          "package": "Annotations",
          "signature": "s ix-\u003ef r ix-\u003e[AnyF s r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten an annotated tree and print all subtrees to stdout.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "debugFlatten",
          "package": "Annotations",
          "signature": "s ix -\u003e AnnFix x s ix -\u003e IO ()",
          "source": "src/Annotations-MultiRec-Annotated.html#debugFlatten",
          "type": "function"
        },
        "index": {
          "description": "Flatten an annotated tree and print all subtrees to stdout",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "debugFlatten",
          "normalized": "a b-\u003eAnnFix c a b-\u003eIO()",
          "package": "Annotations",
          "partial": "Flatten",
          "signature": "s ix-\u003eAnnFix x s ix-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:debugFlatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplore an annotated tree. Starting with the root of the tree, at each \n position the annotation at that position is matched against the \n \u003ccode\u003e\u003ca\u003eExploreHints\u003c/a\u003e\u003c/code\u003e predicates and all the selections where \u003ccode\u003e\u003ca\u003ematchHere\u003c/a\u003e\u003c/code\u003e was \n positive are collected. The \u003ccode\u003e\u003ca\u003eexploreRight\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexploreDown\u003c/a\u003e\u003c/code\u003e allow pruning \n of the tree, preventing entire parts from being visited.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "explore",
          "package": "Annotations",
          "signature": "phi ix -\u003e (x -\u003e ExploreHints) -\u003e AnnFix x phi ix -\u003e [AnnZipper phi x ix]",
          "source": "src/Annotations-MultiRec-Annotated.html#explore",
          "type": "function"
        },
        "index": {
          "description": "Explore an annotated tree Starting with the root of the tree at each position the annotation at that position is matched against the ExploreHints predicates and all the selections where matchHere was positive are collected The exploreRight and exploreDown allow pruning of the tree preventing entire parts from being visited",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "explore",
          "normalized": "a b-\u003e(c-\u003eExploreHints)-\u003eAnnFix c a b-\u003e[AnnZipper a c b]",
          "package": "Annotations",
          "signature": "phi ix-\u003e(x-\u003eExploreHints)-\u003eAnnFix x phi ix-\u003e[AnnZipper phi x ix]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:explore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield all subtrees whose annotation matches the predicate.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "filterAnnFix",
          "package": "Annotations",
          "signature": "s ix -\u003e (x -\u003e Bool) -\u003e AnnFix x s ix -\u003e [(x, Any s)]",
          "source": "src/Annotations-MultiRec-Annotated.html#filterAnnFix",
          "type": "function"
        },
        "index": {
          "description": "Yield all subtrees whose annotation matches the predicate",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "filterAnnFix",
          "normalized": "a b-\u003e(c-\u003eBool)-\u003eAnnFix c a b-\u003e[(c,Any a)]",
          "package": "Annotations",
          "partial": "Ann Fix",
          "signature": "s ix-\u003e(x-\u003eBool)-\u003eAnnFix x s ix-\u003e[(x,Any s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:filterAnnFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the deepest node in an annotated tree that matches the predicate.\n Starting with the root, the predicate tells whether a node's annotation\n matches. If so, the search continues at the node's children and the node's\n siblings to the right are excluded from further exploration. If no child\n matches, the node itself is returned.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "findLeftmostDeepest",
          "package": "Annotations",
          "signature": "phi ix -\u003e (x -\u003e Bool) -\u003e AnnFix x phi ix -\u003e Maybe (AnnZipper phi x ix)",
          "source": "src/Annotations-MultiRec-Annotated.html#findLeftmostDeepest",
          "type": "function"
        },
        "index": {
          "description": "Find the deepest node in an annotated tree that matches the predicate Starting with the root the predicate tells whether node annotation matches If so the search continues at the node children and the node siblings to the right are excluded from further exploration If no child matches the node itself is returned",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "findLeftmostDeepest",
          "normalized": "a b-\u003e(c-\u003eBool)-\u003eAnnFix c a b-\u003eMaybe(AnnZipper a c b)",
          "package": "Annotations",
          "partial": "Leftmost Deepest",
          "signature": "phi ix-\u003e(x-\u003eBool)-\u003eAnnFix x phi ix-\u003eMaybe(AnnZipper phi x ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:findLeftmostDeepest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten an annotated tree to a list of subtrees coupled with their annotations.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "flatten",
          "package": "Annotations",
          "signature": "s ix -\u003e AnnFix x s ix -\u003e [(x, Any s)]",
          "source": "src/Annotations-MultiRec-Annotated.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Flatten an annotated tree to list of subtrees coupled with their annotations",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "flatten",
          "normalized": "a b-\u003eAnnFix c a b-\u003e[(c,Any a)]",
          "package": "Annotations",
          "signature": "s ix-\u003eAnnFix x s ix-\u003e[(x,Any s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the annotation of the current focus.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "focusAnn",
          "package": "Annotations",
          "signature": "Loc phi f (HFix (K x :*: g)) ix -\u003e x",
          "source": "src/Annotations-MultiRec-Annotated.html#focusAnn",
          "type": "function"
        },
        "index": {
          "description": "Extract the annotation of the current focus",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "focusAnn",
          "normalized": "Loc a b(HFix(K c*d))e-\u003ec",
          "package": "Annotations",
          "partial": "Ann",
          "signature": "Loc phi f(HFix(K x*g))ix-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:focusAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a tree with an annotation at the top level.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "mkAnnFix",
          "package": "Annotations",
          "signature": "x -\u003e AnnFix1 x s ix -\u003e AnnFix x s ix",
          "source": "src/Annotations-MultiRec-Annotated.html#mkAnnFix",
          "type": "function"
        },
        "index": {
          "description": "Supply tree with an annotation at the top level",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "mkAnnFix",
          "normalized": "a-\u003eAnnFix a b c-\u003eAnnFix a b c",
          "package": "Annotations",
          "partial": "Ann Fix",
          "signature": "x-\u003eAnnFix x s ix-\u003eAnnFix x s ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:mkAnnFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all annotations from a recursively annotated fixpoint.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Annotated",
          "name": "unannotate",
          "package": "Annotations",
          "signature": "s ix -\u003e AnnFix x s ix -\u003e HFix (PF s) ix",
          "source": "src/Annotations-MultiRec-Annotated.html#unannotate",
          "type": "function"
        },
        "index": {
          "description": "Removes all annotations from recursively annotated fixpoint",
          "hierarchy": "Annotations MultiRec Annotated",
          "module": "Annotations.MultiRec.Annotated",
          "name": "unannotate",
          "normalized": "a b-\u003eAnnFix c a b-\u003eHFix(PF a)b",
          "package": "Annotations",
          "signature": "s ix-\u003eAnnFix x s ix-\u003eHFix(PF s)ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Annotated.html#v:unannotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePattern functors existentially quantified in their top-level index type \u003ccode\u003eix\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "Any",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Any.html",
          "type": "module"
        },
        "index": {
          "description": "Pattern functors existentially quantified in their top-level index type ix",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "Any",
          "package": "Annotations",
          "partial": "Any",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of some type in data family \u003ccode\u003es\u003c/code\u003e, together with its witness.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "Any",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Any.html#Any",
          "type": "data"
        },
        "index": {
          "description": "value of some type in data family together with its witness",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "Any",
          "package": "Annotations",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of some type in data family \u003ccode\u003es\u003c/code\u003e wrapped in an \u003ccode\u003ef\u003c/code\u003e, together with its witness.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "AnyF",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Any.html#AnyF",
          "type": "data"
        },
        "index": {
          "description": "value of some type in data family wrapped in an together with its witness",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "AnyF",
          "package": "Annotations",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#t:AnyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an \u003ccode\u003e\u003ca\u003eAnyF\u003c/a\u003e\u003c/code\u003e and pass it to a function.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "($?)",
          "package": "Annotations",
          "signature": "(forall b.  s b -\u003e f b -\u003e a) -\u003e AnyF s f -\u003e a",
          "source": "src/Annotations-MultiRec-Any.html#%24%3F",
          "type": "function"
        },
        "index": {
          "description": "Unwrap an AnyF and pass it to function",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "($?) $?",
          "normalized": "(a b c d-\u003ee d-\u003ef)-\u003eAnyF c e-\u003ef",
          "package": "Annotations",
          "signature": "(forall b. s b-\u003ef b-\u003ea)-\u003eAnyF s f-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:-36--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Any",
          "name": "Any",
          "package": "Annotations",
          "signature": "s ix -\u003e ix -\u003e Any s",
          "source": "src/Annotations-MultiRec-Any.html#Any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "Any",
          "normalized": "a b-\u003eb-\u003eAny a",
          "package": "Annotations",
          "partial": "Any",
          "signature": "s ix-\u003eix-\u003eAny s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Any",
          "name": "AnyF",
          "package": "Annotations",
          "signature": "s ix -\u003e f ix -\u003e AnyF s f",
          "source": "src/Annotations-MultiRec-Any.html#AnyF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "AnyF",
          "normalized": "a b-\u003ec b-\u003eAnyF a c",
          "package": "Annotations",
          "partial": "Any",
          "signature": "s ix-\u003ef ix-\u003eAnyF s f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:AnyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify an \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "matchAny",
          "package": "Annotations",
          "signature": "s a -\u003e Any s -\u003e Maybe a",
          "source": "src/Annotations-MultiRec-Any.html#matchAny",
          "type": "function"
        },
        "index": {
          "description": "Unify an Any with an",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "matchAny",
          "normalized": "a b-\u003eAny a-\u003eMaybe b",
          "package": "Annotations",
          "partial": "Any",
          "signature": "s a-\u003eAny s-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify an \u003ccode\u003e\u003ca\u003eAnyF\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003ef a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "matchAnyF",
          "package": "Annotations",
          "signature": "s a -\u003e AnyF s f -\u003e Maybe (f a)",
          "source": "src/Annotations-MultiRec-Any.html#matchAnyF",
          "type": "function"
        },
        "index": {
          "description": "Unify an AnyF with an",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "matchAnyF",
          "normalized": "a b-\u003eAnyF a c-\u003eMaybe(c b)",
          "package": "Annotations",
          "partial": "Any",
          "signature": "s a-\u003eAnyF s f-\u003eMaybe(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:matchAnyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper constructor.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "mkAny",
          "package": "Annotations",
          "signature": "ix -\u003e Any s",
          "source": "src/Annotations-MultiRec-Any.html#mkAny",
          "type": "function"
        },
        "index": {
          "description": "Helper constructor",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "mkAny",
          "normalized": "a-\u003eAny b",
          "package": "Annotations",
          "partial": "Any",
          "signature": "ix-\u003eAny s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:mkAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper constructor.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "mkAnyF",
          "package": "Annotations",
          "signature": "r ix -\u003e AnyF s r",
          "source": "src/Annotations-MultiRec-Any.html#mkAnyF",
          "type": "function"
        },
        "index": {
          "description": "Helper constructor",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "mkAnyF",
          "normalized": "a b-\u003eAnyF c a",
          "package": "Annotations",
          "partial": "Any",
          "signature": "r ix-\u003eAnyF s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:mkAnyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the value from its functor \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Any",
          "name": "unwrapAnyF",
          "package": "Annotations",
          "signature": "(forall ix.  f ix -\u003e ix) -\u003e AnyF s f -\u003e Any s",
          "source": "src/Annotations-MultiRec-Any.html#unwrapAnyF",
          "type": "function"
        },
        "index": {
          "description": "Removes the value from its functor",
          "hierarchy": "Annotations MultiRec Any",
          "module": "Annotations.MultiRec.Any",
          "name": "unwrapAnyF",
          "normalized": "(a b c d-\u003ed)-\u003eAnyF e c-\u003eAny e",
          "package": "Annotations",
          "partial": "Any",
          "signature": "(forall ix. f ix-\u003eix)-\u003eAnyF s f-\u003eAny s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Any.html#v:unwrapAnyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "ErrorAlg",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ErrorAlg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "ErrorAlg",
          "package": "Annotations",
          "partial": "Error Alg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType family that converts pattern functors to convenient algebra types.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "ErrorAlg",
          "package": "Annotations",
          "signature": "ErrorAlg",
          "type": "function"
        },
        "index": {
          "description": "Type family that converts pattern functors to convenient algebra types",
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "ErrorAlg",
          "package": "Annotations",
          "partial": "Error Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#t:ErrorAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error algebra over pattern functors.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "ErrorAlg_PF",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ErrorAlg.html#ErrorAlg_PF",
          "type": "type"
        },
        "index": {
          "description": "An error algebra over pattern functors",
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "ErrorAlg_PF",
          "package": "Annotations",
          "partial": "Error Alg PF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#t:ErrorAlg_PF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts convenient algebras to algebras that are able to work with\n pattern functors.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "MkErrorAlg",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ErrorAlg.html#MkErrorAlg",
          "type": "class"
        },
        "index": {
          "description": "Converts convenient algebras to algebras that are able to work with pattern functors",
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "MkErrorAlg",
          "package": "Annotations",
          "partial": "Mk Error Alg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#t:MkErrorAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor constructing algebras that are made of nested pairs rather\n   than n-ary tuples, it is helpful to use this pairing combinator.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "(&)",
          "package": "Annotations",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/Annotations-MultiRec-ErrorAlg.html#%26",
          "type": "function"
        },
        "index": {
          "description": "For constructing algebras that are made of nested pairs rather than n-ary tuples it is helpful to use this pairing combinator",
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "(&) &",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "Annotations",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a tree to a value according to the algebra, collecting potential\n   errors. The errors are combined with the annotations in the tree at the\n   positions at which the errors occurred.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "errorCata",
          "package": "Annotations",
          "signature": "ErrorAlg_PF f e r -\u003e phi ix -\u003e HFix (K x :*: f) ix -\u003e Except [(e, x)] r",
          "source": "src/Annotations-MultiRec-ErrorAlg.html#errorCata",
          "type": "function"
        },
        "index": {
          "description": "Reduces tree to value according to the algebra collecting potential errors The errors are combined with the annotations in the tree at the positions at which the errors occurred",
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "errorCata",
          "normalized": "ErrorAlg_PF a b c-\u003ed e-\u003eHFix(K f*a)e-\u003eExcept[(b,f)]c",
          "package": "Annotations",
          "partial": "Cata",
          "signature": "ErrorAlg_PF f e r-\u003ephi ix-\u003eHFix(K x*f)ix-\u003eExcept[(e,x)]r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#v:errorCata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "mkErrorAlg",
          "package": "Annotations",
          "signature": "ErrorAlg f e a -\u003e ErrorAlg_PF f e a",
          "source": "src/Annotations-MultiRec-ErrorAlg.html#mkErrorAlg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Annotations MultiRec ErrorAlg",
          "module": "Annotations.MultiRec.ErrorAlg",
          "name": "mkErrorAlg",
          "normalized": "ErrorAlg a b c-\u003eErrorAlg_PF a b c",
          "package": "Annotations",
          "partial": "Error Alg",
          "signature": "ErrorAlg f e a-\u003eErrorAlg_PF f e a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ErrorAlg.html#v:mkErrorAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "ParserCombinators",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ParserCombinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations MultiRec ParserCombinators",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "ParserCombinators",
          "package": "Annotations",
          "partial": "Parser Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ParserCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that yields its components, annotated with \u003ccode\u003e\u003ca\u003eBounds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "YP",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ParserCombinators.html#YP",
          "type": "type"
        },
        "index": {
          "description": "parser that yields its components annotated with Bounds",
          "hierarchy": "Annotations MultiRec ParserCombinators",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "YP",
          "package": "Annotations",
          "partial": "YP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ParserCombinators.html#t:YP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse left-recursive structures.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "chainl",
          "package": "Annotations",
          "signature": "fam a -\u003e YP s fam m a -\u003e YP s fam m (a -\u003e a -\u003e a) -\u003e YP s fam m a",
          "source": "src/Annotations-MultiRec-ParserCombinators.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "Parse left-recursive structures",
          "hierarchy": "Annotations MultiRec ParserCombinators",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "chainl",
          "normalized": "a b-\u003eYP c a d b-\u003eYP c a d(b-\u003eb-\u003eb)-\u003eYP c a d b",
          "package": "Annotations",
          "signature": "fam a-\u003eYP s fam m a-\u003eYP s fam m(a-\u003ea-\u003ea)-\u003eYP s fam m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ParserCombinators.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse right-recursive structures.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "chainr",
          "package": "Annotations",
          "signature": "fam a -\u003e YP s fam m a -\u003e YP s fam m (a -\u003e a -\u003e a) -\u003e YP s fam m a",
          "source": "src/Annotations-MultiRec-ParserCombinators.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "Parse right-recursive structures",
          "hierarchy": "Annotations MultiRec ParserCombinators",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "chainr",
          "normalized": "a b-\u003eYP c a d b-\u003eYP c a d(b-\u003eb-\u003eb)-\u003eYP c a d b",
          "package": "Annotations",
          "signature": "fam a-\u003eYP s fam m a-\u003eYP s fam m(a-\u003ea-\u003ea)-\u003eYP s fam m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ParserCombinators.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the left margin of a structure, asks the parser for the right\n   margin and wraps the position information around the root of the tree.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "mkBounded",
          "package": "Annotations",
          "signature": "fam a -\u003e Range -\u003e a -\u003e YP s fam m a",
          "source": "src/Annotations-MultiRec-ParserCombinators.html#mkBounded",
          "type": "function"
        },
        "index": {
          "description": "Given the left margin of structure asks the parser for the right margin and wraps the position information around the root of the tree",
          "hierarchy": "Annotations MultiRec ParserCombinators",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "mkBounded",
          "normalized": "a b-\u003eRange-\u003eb-\u003eYP c a d b",
          "package": "Annotations",
          "partial": "Bounded",
          "signature": "fam a-\u003eRange-\u003ea-\u003eYP s fam m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ParserCombinators.html#v:mkBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an unnotated tree with position information from the parse state.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "unit",
          "package": "Annotations",
          "signature": "fam a -\u003e YP s fam m a -\u003e YP s fam m a",
          "source": "src/Annotations-MultiRec-ParserCombinators.html#unit",
          "type": "function"
        },
        "index": {
          "description": "Wrap an unnotated tree with position information from the parse state",
          "hierarchy": "Annotations MultiRec ParserCombinators",
          "module": "Annotations.MultiRec.ParserCombinators",
          "name": "unit",
          "normalized": "a b-\u003eYP c a d b-\u003eYP c a d b",
          "package": "Annotations",
          "signature": "fam a-\u003eYP s fam m a-\u003eYP s fam m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ParserCombinators.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Positional",
          "name": "Positional",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Positional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "Positional",
          "package": "Annotations",
          "partial": "Positional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove around in a tree according to the \u003ccode\u003e\u003ca\u003eNav\u003c/a\u003e\u003c/code\u003e, expressed in tree selections. Although a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e is required as input, a \u003ccode\u003e\u003ca\u003eBounds\u003c/a\u003e\u003c/code\u003e is returned, providing information about all the valid text selections that would select the particular tree node.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Positional",
          "name": "moveSelection",
          "package": "Annotations",
          "signature": "phi ix -\u003e AnnFix Bounds phi ix -\u003e Nav -\u003e Range -\u003e Maybe Bounds",
          "source": "src/Annotations-MultiRec-Positional.html#moveSelection",
          "type": "function"
        },
        "index": {
          "description": "Move around in tree according to the Nav expressed in tree selections Although Range is required as input Bounds is returned providing information about all the valid text selections that would select the particular tree node",
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "moveSelection",
          "normalized": "a b-\u003eAnnFix Bounds a b-\u003eNav-\u003eRange-\u003eMaybe Bounds",
          "package": "Annotations",
          "partial": "Selection",
          "signature": "phi ix-\u003eAnnFix Bounds phi ix-\u003eNav-\u003eRange-\u003eMaybe Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#v:moveSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefined as \u003ccode\u003e\u003ccode\u003e\u003ca\u003erepairBy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edistRange\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Positional",
          "name": "repair",
          "package": "Annotations",
          "signature": "phi ix -\u003e AnnFix Bounds phi ix -\u003e Range -\u003e Bounds",
          "source": "src/Annotations-MultiRec-Positional.html#repair",
          "type": "function"
        },
        "index": {
          "description": "Defined as repairBy distRange",
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "repair",
          "normalized": "a b-\u003eAnnFix Bounds a b-\u003eRange-\u003eBounds",
          "package": "Annotations",
          "signature": "phi ix-\u003eAnnFix Bounds phi ix-\u003eRange-\u003eBounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#v:repair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Positional",
          "name": "repairBy",
          "package": "Annotations",
          "signature": "phi ix -\u003e (Range -\u003e Range -\u003e dist) -\u003e AnnFix Bounds phi ix -\u003e Range -\u003e Bounds",
          "source": "src/Annotations-MultiRec-Positional.html#repairBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "repairBy",
          "normalized": "a b-\u003e(Range-\u003eRange-\u003ec)-\u003eAnnFix Bounds a b-\u003eRange-\u003eBounds",
          "package": "Annotations",
          "partial": "By",
          "signature": "phi ix-\u003e(Range-\u003eRange-\u003edist)-\u003eAnnFix Bounds phi ix-\u003eRange-\u003eBounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#v:repairBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Positional",
          "name": "selectByPos",
          "package": "Annotations",
          "signature": "phi ix -\u003e Int -\u003e AnnFix Bounds phi ix -\u003e Maybe (AnnZipper phi Bounds ix)",
          "source": "src/Annotations-MultiRec-Positional.html#selectByPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "selectByPos",
          "normalized": "a b-\u003eInt-\u003eAnnFix Bounds a b-\u003eMaybe(AnnZipper a Bounds b)",
          "package": "Annotations",
          "partial": "By Pos",
          "signature": "phi ix-\u003eInt-\u003eAnnFix Bounds phi ix-\u003eMaybe(AnnZipper phi Bounds ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#v:selectByPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the deepest node whose bounds match the given range. See \u003ccode\u003e\u003ca\u003erangeInBounds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Positional",
          "name": "selectByRange",
          "package": "Annotations",
          "signature": "phi ix -\u003e Range -\u003e AnnFix Bounds phi ix -\u003e Maybe (AnnZipper phi Bounds ix)",
          "source": "src/Annotations-MultiRec-Positional.html#selectByRange",
          "type": "function"
        },
        "index": {
          "description": "Find the deepest node whose bounds match the given range See rangeInBounds",
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "selectByRange",
          "normalized": "a b-\u003eRange-\u003eAnnFix Bounds a b-\u003eMaybe(AnnZipper a Bounds b)",
          "package": "Annotations",
          "partial": "By Range",
          "signature": "phi ix-\u003eRange-\u003eAnnFix Bounds phi ix-\u003eMaybe(AnnZipper phi Bounds ix)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#v:selectByRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Positional",
          "name": "sortOn",
          "package": "Annotations",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Annotations-MultiRec-Positional.html#sortOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Positional",
          "module": "Annotations.MultiRec.Positional",
          "name": "sortOn",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "Annotations",
          "partial": "On",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Positional.html#v:sortOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Show-like type class for families of data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.MultiRec.ShowFam",
          "name": "ShowFam",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ShowFam.html",
          "type": "module"
        },
        "index": {
          "description": "Show-like type class for families of data types",
          "hierarchy": "Annotations MultiRec ShowFam",
          "module": "Annotations.MultiRec.ShowFam",
          "name": "ShowFam",
          "package": "Annotations",
          "partial": "Show Fam",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ShowFam.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.ShowFam",
          "name": "ShowFam",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ShowFam.html#ShowFam",
          "type": "class"
        },
        "index": {
          "hierarchy": "Annotations MultiRec ShowFam",
          "module": "Annotations.MultiRec.ShowFam",
          "name": "ShowFam",
          "package": "Annotations",
          "partial": "Show Fam",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ShowFam.html#t:ShowFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a witness, convert the value of that type to String.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ShowFam",
          "name": "showFam",
          "package": "Annotations",
          "signature": "fam a -\u003e a -\u003e String",
          "source": "src/Annotations-MultiRec-ShowFam.html#showFam",
          "type": "method"
        },
        "index": {
          "description": "Given witness convert the value of that type to String",
          "hierarchy": "Annotations MultiRec ShowFam",
          "module": "Annotations.MultiRec.ShowFam",
          "name": "showFam",
          "normalized": "a b-\u003eb-\u003eString",
          "package": "Annotations",
          "partial": "Fam",
          "signature": "fam a-\u003ea-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ShowFam.html#v:showFam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Yield",
          "name": "Yield",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Yield.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "Yield",
          "package": "Annotations",
          "partial": "Yield",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that allow yielding recursively annotated values.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Yield",
          "name": "MonadYield",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Yield.html#MonadYield",
          "type": "class"
        },
        "index": {
          "description": "Monads that allow yielding recursively annotated values",
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "MonadYield",
          "package": "Annotations",
          "partial": "Monad Yield",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#t:MonadYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield over the identity monad.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Yield",
          "name": "Yield",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Yield.html#Yield",
          "type": "type"
        },
        "index": {
          "description": "Yield over the identity monad",
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "Yield",
          "package": "Annotations",
          "partial": "Yield",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#t:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Yield transformer. Allows yielding generic values in family \u003ccode\u003efam\u003c/code\u003e with annotations of type \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Yield",
          "name": "YieldT",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Yield.html#YieldT",
          "type": "data"
        },
        "index": {
          "description": "The Yield transformer Allows yielding generic values in family fam with annotations of type",
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "YieldT",
          "package": "Annotations",
          "partial": "Yield",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#t:YieldT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Yield",
          "name": "runYield",
          "package": "Annotations",
          "signature": "fam a -\u003e Yield x fam a -\u003e Maybe (AnnFix x fam a)",
          "source": "src/Annotations-MultiRec-Yield.html#runYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "runYield",
          "normalized": "a b-\u003eYield c a b-\u003eMaybe(AnnFix c a b)",
          "package": "Annotations",
          "partial": "Yield",
          "signature": "fam a-\u003eYield x fam a-\u003eMaybe(AnnFix x fam a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#v:runYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Yield",
          "name": "runYieldG",
          "package": "Annotations",
          "signature": "Yield x fam a -\u003e (a, Maybe (AnyAnnFix x fam))",
          "source": "src/Annotations-MultiRec-Yield.html#runYieldG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "runYieldG",
          "normalized": "Yield a b c-\u003e(c,Maybe(AnyAnnFix a b))",
          "package": "Annotations",
          "partial": "Yield",
          "signature": "Yield x fam a-\u003e(a,Maybe(AnyAnnFix x fam))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#v:runYieldG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Yield",
          "name": "runYieldT",
          "package": "Annotations",
          "signature": "fam a -\u003e YieldT x fam m a -\u003e m (Maybe (AnnFix x fam a))",
          "source": "src/Annotations-MultiRec-Yield.html#runYieldT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "runYieldT",
          "normalized": "a b-\u003eYieldT c a d b-\u003ed(Maybe(AnnFix c a b))",
          "package": "Annotations",
          "partial": "Yield",
          "signature": "fam a-\u003eYieldT x fam m a-\u003em(Maybe(AnnFix x fam a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#v:runYieldT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Yield",
          "name": "runYieldTG",
          "package": "Annotations",
          "signature": "YieldT x fam m a -\u003e m (a, Maybe (AnyAnnFix x fam))",
          "source": "src/Annotations-MultiRec-Yield.html#runYieldTG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "runYieldTG",
          "normalized": "YieldT a b c d-\u003ec(d,Maybe(AnyAnnFix a b))",
          "package": "Annotations",
          "partial": "Yield TG",
          "signature": "YieldT x fam m a-\u003em(a,Maybe(AnyAnnFix x fam))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#v:runYieldTG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a value with its annotation.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Yield",
          "name": "yield",
          "package": "Annotations",
          "signature": "YieldFam m ix -\u003e AnnType m -\u003e ix -\u003e m ix",
          "source": "src/Annotations-MultiRec-Yield.html#yield",
          "type": "method"
        },
        "index": {
          "description": "Yields value with its annotation",
          "hierarchy": "Annotations MultiRec Yield",
          "module": "Annotations.MultiRec.Yield",
          "name": "yield",
          "normalized": "YieldFam a b-\u003eAnnType a-\u003eb-\u003ea b",
          "package": "Annotations",
          "signature": "YieldFam m ix-\u003eAnnType m-\u003eix-\u003em ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Yield.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe generic zipper.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Zipper.html",
          "type": "module"
        },
        "index": {
          "description": "The generic zipper",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type of context frames. Not required for the high-level\n navigation functions.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Ctx",
          "package": "Annotations",
          "signature": "Ctx",
          "type": "function"
        },
        "index": {
          "description": "Abstract type of context frames Not required for the high-level navigation functions",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Ctx",
          "package": "Annotations",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "Ctxs",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Zipper.html#Ctxs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Ctxs",
          "package": "Annotations",
          "partial": "Ctxs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#t:Ctxs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type of locations. A location contains the current focus\n and its context. A location is parameterized over the family of\n datatypes and over the type of the complete value.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Loc",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Zipper.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "Abstract type of locations location contains the current focus and its context location is parameterized over the family of datatypes and over the type of the complete value",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Loc",
          "package": "Annotations",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is in general not necessary to use the generic navigation\n functions directly. The functions listed in the `\u003ccode\u003eInterface'\u003c/code\u003e section\n below are more user-friendly.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-Zipper.html#Zipper",
          "type": "class"
        },
        "index": {
          "description": "It is in general not necessary to use the generic navigation functions directly The functions listed in the Interface section below are more user-friendly",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Zipper",
          "package": "Annotations",
          "partial": "Zipper",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "Empty",
          "package": "Annotations",
          "signature": "Ctxs phi f a r a",
          "source": "src/Annotations-MultiRec-Zipper.html#Ctxs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Empty",
          "package": "Annotations",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "Loc",
          "package": "Annotations",
          "signature": "phi ix -\u003e r ix -\u003e Ctxs phi f ix r a -\u003e Loc phi f r a",
          "source": "src/Annotations-MultiRec-Zipper.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Loc",
          "normalized": "a b-\u003ec b-\u003eCtxs a d b c e-\u003eLoc a d c e",
          "package": "Annotations",
          "partial": "Loc",
          "signature": "phi ix-\u003er ix-\u003eCtxs phi f ix r a-\u003eLoc phi f r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "Push",
          "package": "Annotations",
          "signature": "phi ix -\u003e Ctx f b r ix -\u003e Ctxs phi f ix r a -\u003e Ctxs phi f b r a",
          "source": "src/Annotations-MultiRec-Zipper.html#Ctxs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "Push",
          "normalized": "a b-\u003eCtx c d e b-\u003eCtxs a c b e f-\u003eCtxs a c d e f",
          "package": "Annotations",
          "partial": "Push",
          "signature": "phi ix-\u003eCtx f b r ix-\u003eCtxs phi f ix r a-\u003eCtxs phi f b r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "cmapA",
          "package": "Annotations",
          "signature": "(forall ix.  phi ix -\u003e r ix -\u003e a (r' ix)) -\u003e phi ix -\u003e Ctx f b r ix -\u003e a (Ctx f b r' ix)",
          "source": "src/Annotations-MultiRec-Zipper.html#cmapA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "cmapA",
          "normalized": "(a b c d-\u003ee d-\u003ef(g d))-\u003ec d-\u003eCtx h i e d-\u003ef(Ctx h i g d)",
          "package": "Annotations",
          "signature": "(forall ix. phi ix-\u003er ix-\u003ea(r' ix))-\u003ephi ix-\u003eCtx f b r ix-\u003ea(Ctx f b r' ix)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:cmapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart navigating a datastructure. Returns a location that\n focuses the entire value and has an empty context.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "enter",
          "package": "Annotations",
          "signature": "phi ix -\u003e r ix -\u003e Loc phi f r ix",
          "source": "src/Annotations-MultiRec-Zipper.html#enter",
          "type": "function"
        },
        "index": {
          "description": "Start navigating datastructure Returns location that focuses the entire value and has an empty context",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "enter",
          "normalized": "a b-\u003ec b-\u003eLoc a d c b",
          "package": "Annotations",
          "signature": "phi ix-\u003er ix-\u003eLoc phi f r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "fill",
          "package": "Annotations",
          "signature": "phi b -\u003e Ctx f b r ix -\u003e r b -\u003e f r ix",
          "source": "src/Annotations-MultiRec-Zipper.html#fill",
          "type": "method"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "fill",
          "normalized": "a b-\u003eCtx c b d e-\u003ed b-\u003ec d e",
          "package": "Annotations",
          "signature": "phi b-\u003eCtx f b r ix-\u003er b-\u003ef r ix",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "first",
          "package": "Annotations",
          "signature": "(forall b.  phi b -\u003e r b -\u003e Ctx f b r ix -\u003e a) -\u003e f r ix -\u003e Maybe a",
          "source": "src/Annotations-MultiRec-Zipper.html#first",
          "type": "method"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "first",
          "normalized": "(a b c d-\u003ee d-\u003eCtx f d e g-\u003eh)-\u003ef e g-\u003eMaybe h",
          "package": "Annotations",
          "signature": "(forall b. phi b-\u003er b-\u003eCtx f b r ix-\u003ea)-\u003ef r ix-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Annotations.MultiRec.Zipper",
          "name": "next",
          "package": "Annotations",
          "signature": "(forall b.  phi b -\u003e r b -\u003e Ctx f b r ix -\u003e a) -\u003e phi b -\u003e Ctx f b r ix -\u003e r b -\u003e Maybe a",
          "source": "src/Annotations-MultiRec-Zipper.html#next",
          "type": "method"
        },
        "index": {
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "next",
          "normalized": "(a b c d-\u003ee d-\u003eCtx f d e g-\u003eh)-\u003ec d-\u003eCtx f d e g-\u003ee d-\u003eMaybe h",
          "package": "Annotations",
          "signature": "(forall b. phi b-\u003er b-\u003eCtx f b r ix-\u003ea)-\u003ephi b-\u003eCtx f b r ix-\u003er b-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperate on the current focus. This function can be used to\n extract the current point of focus.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "on",
          "package": "Annotations",
          "signature": "(forall xi.  phi xi -\u003e r xi -\u003e a) -\u003e Loc phi f r ix -\u003e a",
          "source": "src/Annotations-MultiRec-Zipper.html#on",
          "type": "function"
        },
        "index": {
          "description": "Operate on the current focus This function can be used to extract the current point of focus",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "on",
          "normalized": "(a b c d-\u003ee d-\u003ef)-\u003eLoc c g e h-\u003ef",
          "package": "Annotations",
          "signature": "(forall xi. phi xi-\u003er xi-\u003ea)-\u003eLoc phi f r ix-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the current focus without changing its type.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.Zipper",
          "name": "update",
          "package": "Annotations",
          "signature": "(forall xi.  phi xi -\u003e r xi -\u003e r xi) -\u003e Loc phi f r ix -\u003e Loc phi f r ix",
          "source": "src/Annotations-MultiRec-Zipper.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the current focus without changing its type",
          "hierarchy": "Annotations MultiRec Zipper",
          "module": "Annotations.MultiRec.Zipper",
          "name": "update",
          "normalized": "(a b c d-\u003ee d-\u003ee d)-\u003eLoc c f e g-\u003eLoc c f e g",
          "package": "Annotations",
          "signature": "(forall xi. phi xi-\u003er xi-\u003er xi)-\u003eLoc phi f r ix-\u003eLoc phi f r ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-Zipper.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZipper functions specialised to work on fixpoints of pattern functors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "ZipperFix",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ZipperFix.html",
          "type": "module"
        },
        "index": {
          "description": "Zipper functions specialised to work on fixpoints of pattern functors",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "ZipperFix",
          "package": "Annotations",
          "partial": "Zipper Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location within a fixpoint.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "FixZipper",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ZipperFix.html#FixZipper",
          "type": "type"
        },
        "index": {
          "description": "location within fixpoint",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "FixZipper",
          "package": "Annotations",
          "partial": "Fix Zipper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#t:FixZipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA navigation step in a fixpoint.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "Nav",
          "package": "Annotations",
          "source": "src/Annotations-MultiRec-ZipperFix.html#Nav",
          "type": "type"
        },
        "index": {
          "description": "navigation step in fixpoint",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "Nav",
          "package": "Annotations",
          "partial": "Nav",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#t:Nav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove through all positions in depth-first left-to-right order.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "dfnext",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#dfnext",
          "type": "function"
        },
        "index": {
          "description": "Move through all positions in depth-first left-to-right order",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "dfnext",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:dfnext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove through all positions in depth-first right-to-left order.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "dfprev",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#dfprev",
          "type": "function"
        },
        "index": {
          "description": "Move through all positions in depth-first right-to-left order",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "dfprev",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:dfprev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove down to the leftmost child. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n current focus is a leaf.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "down",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#down",
          "type": "function"
        },
        "index": {
          "description": "Move down to the leftmost child Returns Nothing if the current focus is leaf",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "down",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove down to the rightmost child. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n current focus is a leaf.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "down'",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#down%27",
          "type": "function"
        },
        "index": {
          "description": "Move down to the rightmost child Returns Nothing if the current focus is leaf",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "down'",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:down-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the entire value, independent of the current focus.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "leave",
          "package": "Annotations",
          "signature": "Loc phi f (HFix f) ix -\u003e HFix f ix",
          "source": "src/Annotations-MultiRec-ZipperFix.html#leave",
          "type": "function"
        },
        "index": {
          "description": "Return the entire value independent of the current focus",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "leave",
          "normalized": "Loc a b(HFix b)c-\u003eHFix b c",
          "package": "Annotations",
          "signature": "Loc phi f(HFix f)ix-\u003eHFix f ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to the left sibling. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the current\n focus is the leftmost sibling.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "left",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#left",
          "type": "function"
        },
        "index": {
          "description": "Move to the left sibling Returns Nothing if the current focus is the leftmost sibling",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "left",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to the right sibling. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the current\n focus is the rightmost sibling.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "right",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#right",
          "type": "function"
        },
        "index": {
          "description": "Move to the right sibling Returns Nothing if the current focus is the rightmost sibling",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "right",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove up to the parent. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the current\n focus is the root.\n\u003c/p\u003e",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "up",
          "package": "Annotations",
          "signature": "Nav",
          "source": "src/Annotations-MultiRec-ZipperFix.html#up",
          "type": "function"
        },
        "index": {
          "description": "Move up to the parent Returns Nothing if the current focus is the root",
          "hierarchy": "Annotations MultiRec ZipperFix",
          "module": "Annotations.MultiRec.ZipperFix",
          "name": "up",
          "package": "Annotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Annotations/docs/Annotations-MultiRec-ZipperFix.html#v:up"
      }
    }
  ]
]