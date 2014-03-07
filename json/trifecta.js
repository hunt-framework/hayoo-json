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
        "word": "trifecta"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Combinators",
          "name": "Combinators",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Combinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "Combinators",
          "package": "trifecta",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides parsers with easy access to:\n\u003c/p\u003e\u003cp\u003e1) the current line contents.\n 2) the current position as a \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e.\n 3) the ability to use \u003ccode\u003e\u003ca\u003esliced\u003c/a\u003e\u003c/code\u003e on any parser.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "DeltaParsing",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Combinators.html#DeltaParsing",
          "type": "class"
        },
        "index": {
          "description": "This class provides parsers with easy access to the current line contents the current position as Delta the ability to use sliced on any parser",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "DeltaParsing",
          "package": "trifecta",
          "partial": "Delta Parsing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#t:DeltaParsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is a refinement of \u003ccode\u003e\u003ca\u003eDeltaParsing\u003c/a\u003e\u003c/code\u003e that adds the ability to mark your position in the input\n and return there for further parsing later.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "MarkParsing",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Combinators.html#MarkParsing",
          "type": "class"
        },
        "index": {
          "description": "This class is refinement of DeltaParsing that adds the ability to mark your position in the input and return there for further parsing later",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "MarkParsing",
          "package": "trifecta",
          "partial": "Mark Parsing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#t:MarkParsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eCareted\u003c/a\u003e\u003c/code\u003e result. Pointing the \u003ccode\u003e\u003ca\u003eCaret\u003c/a\u003e\u003c/code\u003e to where you start.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "careted",
          "package": "trifecta",
          "signature": "m a -\u003e m (Careted a)",
          "source": "src/Text-Trifecta-Combinators.html#careted",
          "type": "function"
        },
        "index": {
          "description": "Parse Careted result Pointing the Caret to where you start",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "careted",
          "normalized": "a b-\u003ea(Careted b)",
          "package": "trifecta",
          "signature": "m a-\u003em(Careted a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:careted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a \u003ccode\u003e\u003ca\u003eCaret\u003c/a\u003e\u003c/code\u003e pointing to the current location.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "careting",
          "package": "trifecta",
          "signature": "m Caret",
          "source": "src/Text-Trifecta-Combinators.html#careting",
          "type": "function"
        },
        "index": {
          "description": "Grab Caret pointing to the current location",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "careting",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:careting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a fixit.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "fixiting",
          "package": "trifecta",
          "signature": "m ByteString -\u003e m Fixit",
          "source": "src/Text-Trifecta-Combinators.html#fixiting",
          "type": "function"
        },
        "index": {
          "description": "Grab fixit",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "fixiting",
          "normalized": "a ByteString-\u003ea Fixit",
          "package": "trifecta",
          "signature": "m ByteString-\u003em Fixit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:fixiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the contents of the current line (from the beginning of the line)\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "line",
          "package": "trifecta",
          "signature": "m ByteString",
          "source": "src/Text-Trifecta-Combinators.html#line",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the contents of the current line from the beginning of the line",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "line",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emark the current location so it can be used in constructing a span, or for later seeking\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "mark",
          "package": "trifecta",
          "signature": "m d",
          "source": "src/Text-Trifecta-Combinators.html#mark",
          "type": "method"
        },
        "index": {
          "description": "mark the current location so it can be used in constructing span or for later seeking",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "mark",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current position as a \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "position",
          "package": "trifecta",
          "signature": "m Delta",
          "source": "src/Text-Trifecta-Combinators.html#position",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the current position as Delta",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "position",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek a previously marked location\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "release",
          "package": "trifecta",
          "signature": "d -\u003e m ()",
          "source": "src/Text-Trifecta-Combinators.html#release",
          "type": "method"
        },
        "index": {
          "description": "Seek previously marked location",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "release",
          "normalized": "a-\u003eb()",
          "package": "trifecta",
          "signature": "d-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a \u003ccode\u003e\u003ca\u003eRendering\u003c/a\u003e\u003c/code\u003e of the current linem noting this position, but not\n placing a \u003ccode\u003e\u003ca\u003eCaret\u003c/a\u003e\u003c/code\u003e there.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "rend",
          "package": "trifecta",
          "signature": "m Rendering",
          "source": "src/Text-Trifecta-Combinators.html#rend",
          "type": "method"
        },
        "index": {
          "description": "Retrieve Rendering of the current linem noting this position but not placing Caret there",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "rend",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:rend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab the remainder of the current line\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "restOfLine",
          "package": "trifecta",
          "signature": "m ByteString",
          "source": "src/Text-Trifecta-Combinators.html#restOfLine",
          "type": "method"
        },
        "index": {
          "description": "Grab the remainder of the current line",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "restOfLine",
          "package": "trifecta",
          "partial": "Of Line",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:restOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser, grabbing all of the text between its start and end points and discarding the original result\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "sliced",
          "package": "trifecta",
          "signature": "m a -\u003e m ByteString",
          "source": "src/Text-Trifecta-Combinators.html#sliced",
          "type": "function"
        },
        "index": {
          "description": "Run parser grabbing all of the text between its start and end points and discarding the original result",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "sliced",
          "normalized": "a b-\u003ea ByteString",
          "package": "trifecta",
          "signature": "m a-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:sliced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser, grabbing all of the text between its start and end points\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "slicedWith",
          "package": "trifecta",
          "signature": "(a -\u003e ByteString -\u003e r) -\u003e m a -\u003e m r",
          "source": "src/Text-Trifecta-Combinators.html#slicedWith",
          "type": "method"
        },
        "index": {
          "description": "Run parser grabbing all of the text between its start and end points",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "slicedWith",
          "normalized": "(a-\u003eByteString-\u003eb)-\u003ec a-\u003ec b",
          "package": "trifecta",
          "partial": "With",
          "signature": "(a-\u003eByteString-\u003er)-\u003em a-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:slicedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eSpanned\u003c/a\u003e\u003c/code\u003e result. The \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003e starts here and runs to the last position parsed.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "spanned",
          "package": "trifecta",
          "signature": "m a -\u003e m (Spanned a)",
          "source": "src/Text-Trifecta-Combinators.html#spanned",
          "type": "function"
        },
        "index": {
          "description": "Parse Spanned result The Span starts here and runs to the last position parsed",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "spanned",
          "normalized": "a b-\u003ea(Spanned b)",
          "package": "trifecta",
          "signature": "m a-\u003em(Spanned a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:spanned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard the result of a parse, returning a \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003e from where we start to where it ended parsing.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Combinators",
          "name": "spanning",
          "package": "trifecta",
          "signature": "m a -\u003e m Span",
          "source": "src/Text-Trifecta-Combinators.html#spanning",
          "type": "function"
        },
        "index": {
          "description": "Discard the result of parse returning Span from where we start to where it ended parsing",
          "hierarchy": "Text Trifecta Combinators",
          "module": "Text.Trifecta.Combinators",
          "name": "spanning",
          "normalized": "a b-\u003ea Span",
          "package": "trifecta",
          "signature": "m a-\u003em Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Combinators.html#v:spanning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "Delta",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Delta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "Delta",
          "package": "trifecta",
          "partial": "Delta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "Delta",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Delta.html#Delta",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "Delta",
          "package": "trifecta",
          "partial": "Delta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#t:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "HasBytes",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Delta.html#HasBytes",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "HasBytes",
          "package": "trifecta",
          "partial": "Has Bytes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#t:HasBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "HasDelta",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Delta.html#HasDelta",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "HasDelta",
          "package": "trifecta",
          "partial": "Has Delta",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#t:HasDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "Columns",
          "package": "trifecta",
          "signature": "Columns !Int64 !Int64",
          "source": "src/Text-Trifecta-Delta.html#Delta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "Columns",
          "package": "trifecta",
          "partial": "Columns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:Columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "Directed",
          "package": "trifecta",
          "signature": "Directed !ByteString !Int64 !Int64 !Int64 !Int64",
          "source": "src/Text-Trifecta-Delta.html#Delta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "Directed",
          "package": "trifecta",
          "partial": "Directed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:Directed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "Lines",
          "package": "trifecta",
          "signature": "Lines !Int64 !Int64 !Int64 !Int64",
          "source": "src/Text-Trifecta-Delta.html#Delta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "Lines",
          "package": "trifecta",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "Tab",
          "package": "trifecta",
          "signature": "Tab !Int64 !Int64 !Int64",
          "source": "src/Text-Trifecta-Delta.html#Delta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "Tab",
          "package": "trifecta",
          "partial": "Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "bytes",
          "package": "trifecta",
          "signature": "t -\u003e Int64",
          "source": "src/Text-Trifecta-Delta.html#bytes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "bytes",
          "normalized": "a-\u003eInt",
          "package": "trifecta",
          "signature": "t-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the character offset within the current line from this \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Delta",
          "name": "column",
          "package": "trifecta",
          "signature": "t -\u003e Int64",
          "source": "src/Text-Trifecta-Delta.html#column",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the character offset within the current line from this Delta",
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "column",
          "normalized": "a-\u003eInt",
          "package": "trifecta",
          "signature": "t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the byte offset within the current line from this \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Delta",
          "name": "columnByte",
          "package": "trifecta",
          "signature": "Delta -\u003e Int64",
          "source": "src/Text-Trifecta-Delta.html#columnByte",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the byte offset within the current line from this Delta",
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "columnByte",
          "normalized": "Delta-\u003eInt",
          "package": "trifecta",
          "partial": "Byte",
          "signature": "Delta-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:columnByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Delta",
          "name": "delta",
          "package": "trifecta",
          "signature": "t -\u003e Delta",
          "source": "src/Text-Trifecta-Delta.html#delta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "delta",
          "normalized": "a-\u003eDelta",
          "package": "trifecta",
          "signature": "t-\u003eDelta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould we show two things with a \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e on the same line?\n\u003c/p\u003e",
          "module": "Text.Trifecta.Delta",
          "name": "near",
          "package": "trifecta",
          "signature": "s -\u003e t -\u003e Bool",
          "source": "src/Text-Trifecta-Delta.html#near",
          "type": "function"
        },
        "index": {
          "description": "Should we show two things with Delta on the same line",
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "near",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "trifecta",
          "signature": "s-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:near"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement a column number to the next tabstop.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Delta",
          "name": "nextTab",
          "package": "trifecta",
          "signature": "Int64 -\u003e Int64",
          "source": "src/Text-Trifecta-Delta.html#nextTab",
          "type": "function"
        },
        "index": {
          "description": "Increment column number to the next tabstop",
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "nextTab",
          "normalized": "Int-\u003eInt",
          "package": "trifecta",
          "partial": "Tab",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:nextTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewind a \u003ccode\u003e\u003ca\u003eDelta\u003c/a\u003e\u003c/code\u003e to the beginning of the line.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Delta",
          "name": "rewind",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta",
          "source": "src/Text-Trifecta-Delta.html#rewind",
          "type": "function"
        },
        "index": {
          "description": "Rewind Delta to the beginning of the line",
          "hierarchy": "Text Trifecta Delta",
          "module": "Text.Trifecta.Delta",
          "name": "rewind",
          "normalized": "Delta-\u003eDelta",
          "package": "trifecta",
          "signature": "Delta-\u003eDelta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Delta.html#v:rewind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "Highlight",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Highlight.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "Highlight",
          "package": "trifecta",
          "partial": "Highlight",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "HasHighlightDoc",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Highlight.html#HasHighlightDoc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "HasHighlightDoc",
          "package": "trifecta",
          "partial": "Has Highlight Doc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#t:HasHighlightDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "HasHighlightedRope",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Highlight.html#HasHighlightedRope",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "HasHighlightedRope",
          "package": "trifecta",
          "partial": "Has Highlighted Rope",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#t:HasHighlightedRope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags used by the \u003ccode\u003e\u003ca\u003eTokenParsing\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ehighlight\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Highlight",
          "name": "Highlight",
          "package": "trifecta",
          "type": "data"
        },
        "index": {
          "description": "Tags used by the TokenParsing highlight combinator",
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "Highlight",
          "package": "trifecta",
          "partial": "Highlight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#t:Highlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a source file like an HsColour rendered document\n\u003c/p\u003e",
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightDoc",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Highlight.html#HighlightDoc",
          "type": "data"
        },
        "index": {
          "description": "Represents source file like an HsColour rendered document",
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightDoc",
          "package": "trifecta",
          "partial": "Highlight Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#t:HighlightDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHighlightedRope\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e with an associated \u003ccode\u003e\u003ca\u003eIntervalMap\u003c/a\u003e\u003c/code\u003e full of highlighted regions.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightedRope",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Highlight.html#HighlightedRope",
          "type": "data"
        },
        "index": {
          "description": "HighlightedRope is Rope with an associated IntervalMap full of highlighted regions",
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightedRope",
          "package": "trifecta",
          "partial": "Highlighted Rope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#t:HighlightedRope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightDoc",
          "package": "trifecta",
          "signature": "HighlightDoc String String HighlightedRope",
          "source": "src/Text-Trifecta-Highlight.html#HighlightDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightDoc",
          "package": "trifecta",
          "partial": "Highlight Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:HighlightDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightedRope",
          "package": "trifecta",
          "signature": "HighlightedRope !(IntervalMap Delta Highlight) !Rope",
          "source": "src/Text-Trifecta-Highlight.html#HighlightedRope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "HighlightedRope",
          "package": "trifecta",
          "partial": "Highlighted Rope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:HighlightedRope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an HTML document from a title and a \u003ccode\u003e\u003ca\u003eHighlightedRope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Highlight",
          "name": "doc",
          "package": "trifecta",
          "signature": "String -\u003e HighlightedRope -\u003e HighlightDoc",
          "source": "src/Text-Trifecta-Highlight.html#doc",
          "type": "function"
        },
        "index": {
          "description": "Generate an HTML document from title and HighlightedRope",
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "doc",
          "normalized": "String-\u003eHighlightedRope-\u003eHighlightDoc",
          "package": "trifecta",
          "signature": "String-\u003eHighlightedRope-\u003eHighlightDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "docContent",
          "package": "trifecta",
          "signature": "Lens' t HighlightedRope",
          "source": "src/Text-Trifecta-Highlight.html#docContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "docContent",
          "package": "trifecta",
          "partial": "Content",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:docContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "docCss",
          "package": "trifecta",
          "signature": "Lens' t String",
          "source": "src/Text-Trifecta-Highlight.html#docCss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "docCss",
          "package": "trifecta",
          "partial": "Css",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:docCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "docTitle",
          "package": "trifecta",
          "signature": "Lens' t String",
          "source": "src/Text-Trifecta-Highlight.html#docTitle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "docTitle",
          "package": "trifecta",
          "partial": "Title",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:docTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "highlightDoc",
          "package": "trifecta",
          "signature": "Lens' t HighlightDoc",
          "source": "src/Text-Trifecta-Highlight.html#highlightDoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "highlightDoc",
          "package": "trifecta",
          "partial": "Doc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:highlightDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "highlightedRope",
          "package": "trifecta",
          "signature": "Lens' t HighlightedRope",
          "source": "src/Text-Trifecta-Highlight.html#highlightedRope",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "highlightedRope",
          "package": "trifecta",
          "partial": "Rope",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:highlightedRope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "ropeContent",
          "package": "trifecta",
          "signature": "Lens' t Rope",
          "source": "src/Text-Trifecta-Highlight.html#ropeContent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "ropeContent",
          "package": "trifecta",
          "partial": "Content",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:ropeContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Highlight",
          "name": "ropeHighlights",
          "package": "trifecta",
          "signature": "Lens' t (IntervalMap Delta Highlight)",
          "source": "src/Text-Trifecta-Highlight.html#ropeHighlights",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "ropeHighlights",
          "package": "trifecta",
          "partial": "Highlights",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:ropeHighlights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eHighlight\u003c/a\u003e\u003c/code\u003e into a coloration on a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Highlight",
          "name": "withHighlight",
          "package": "trifecta",
          "signature": "Highlight -\u003e Doc -\u003e Doc",
          "source": "src/Text-Trifecta-Highlight.html#withHighlight",
          "type": "function"
        },
        "index": {
          "description": "Convert Highlight into coloration on Doc",
          "hierarchy": "Text Trifecta Highlight",
          "module": "Text.Trifecta.Highlight",
          "name": "withHighlight",
          "normalized": "Highlight-\u003eDoc-\u003eDoc",
          "package": "trifecta",
          "partial": "Highlight",
          "signature": "Highlight-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Highlight.html#v:withHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "Parser",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "Parser",
          "package": "trifecta",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "Parser",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Parser.html#Parser",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "Parser",
          "package": "trifecta",
          "partial": "Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "Step",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Parser.html#Step",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "Step",
          "package": "trifecta",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "Parser",
          "package": "trifecta",
          "signature": "Parser",
          "source": "src/Text-Trifecta-Parser.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "Parser",
          "package": "trifecta",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "StepCont",
          "package": "trifecta",
          "signature": "StepCont !Rope (Result a) (Rope -\u003e Step a)",
          "source": "src/Text-Trifecta-Parser.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "StepCont",
          "normalized": "StepCont Rope(Result a)(Rope-\u003eStep a)",
          "package": "trifecta",
          "partial": "Step Cont",
          "signature": "StepCont Rope(Result a)(Rope-\u003eStep a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:StepCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "StepDone",
          "package": "trifecta",
          "signature": "StepDone !Rope a",
          "source": "src/Text-Trifecta-Parser.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "StepDone",
          "package": "trifecta",
          "partial": "Step Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:StepDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "StepFail",
          "package": "trifecta",
          "signature": "StepFail !Rope Doc",
          "source": "src/Text-Trifecta-Parser.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "StepFail",
          "package": "trifecta",
          "partial": "Step Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:StepFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "feed",
          "package": "trifecta",
          "signature": "t -\u003e Step r -\u003e Step r",
          "source": "src/Text-Trifecta-Parser.html#feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "feed",
          "normalized": "a-\u003eStep b-\u003eStep b",
          "package": "trifecta",
          "signature": "t-\u003eStep r-\u003eStep r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "manyAccum",
          "package": "trifecta",
          "signature": "(a -\u003e [a] -\u003e [a]) -\u003e Parser a -\u003e Parser [a]",
          "source": "src/Text-Trifecta-Parser.html#manyAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "manyAccum",
          "normalized": "(a-\u003e[a]-\u003e[a])-\u003eParser a-\u003eParser[a]",
          "package": "trifecta",
          "partial": "Accum",
          "signature": "(a-\u003e[a]-\u003e[a])-\u003eParser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:manyAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseByteString p delta i\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e on \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Parser",
          "name": "parseByteString",
          "package": "trifecta",
          "signature": "Parser a -\u003e Delta -\u003e ByteString -\u003e Result a",
          "source": "src/Text-Trifecta-Parser.html#parseByteString",
          "type": "function"
        },
        "index": {
          "description": "parseByteString delta runs parser on",
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "parseByteString",
          "normalized": "Parser a-\u003eDelta-\u003eByteString-\u003eResult a",
          "package": "trifecta",
          "partial": "Byte String",
          "signature": "Parser a-\u003eDelta-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:parseByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseFromFile p filePath\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. All diagnostic messages\n emitted over the course of the parse attempt are shown to the user on the console.\n\u003c/p\u003e\u003cpre\u003e main = do\n   result \u003c- parseFromFile numbers \"digits.txt\"\n   case result of\n     Nothing -\u003e return ()\n     Just a  -\u003e print $ sum a\n\u003c/pre\u003e",
          "module": "Text.Trifecta.Parser",
          "name": "parseFromFile",
          "package": "trifecta",
          "signature": "Parser a -\u003e String -\u003e m (Maybe a)",
          "source": "src/Text-Trifecta-Parser.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "description": "parseFromFile filePath runs parser on the input read from filePath using readFile All diagnostic messages emitted over the course of the parse attempt are shown to the user on the console main do result parseFromFile numbers digits.txt case result of Nothing return Just print sum",
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eString-\u003eb(Maybe a)",
          "package": "trifecta",
          "partial": "From File",
          "signature": "Parser a-\u003eString-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseFromFileEx p filePath\u003c/code\u003e runs a parser \u003ccode\u003ep\u003c/code\u003e on the\n input read from \u003ccode\u003efilePath\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e. Returns all diagnostic messages\n emitted over the course of the parse and the answer if the parse was successful.\n\u003c/p\u003e\u003cpre\u003e main = do\n   result \u003c- parseFromFileEx (many number) \"digits.txt\"\n   case result of\n     Failure xs -\u003e displayLn xs\n     Success a  -\u003e print (sum a)\n\n\u003c/pre\u003e",
          "module": "Text.Trifecta.Parser",
          "name": "parseFromFileEx",
          "package": "trifecta",
          "signature": "Parser a -\u003e String -\u003e m (Result a)",
          "source": "src/Text-Trifecta-Parser.html#parseFromFileEx",
          "type": "function"
        },
        "index": {
          "description": "parseFromFileEx filePath runs parser on the input read from filePath using readFile Returns all diagnostic messages emitted over the course of the parse and the answer if the parse was successful main do result parseFromFileEx many number digits.txt case result of Failure xs displayLn xs Success print sum",
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "parseFromFileEx",
          "normalized": "Parser a-\u003eString-\u003eb(Result a)",
          "package": "trifecta",
          "partial": "From File Ex",
          "signature": "Parser a-\u003eString-\u003em(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:parseFromFileEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "parseString",
          "package": "trifecta",
          "signature": "Parser a -\u003e Delta -\u003e String -\u003e Result a",
          "source": "src/Text-Trifecta-Parser.html#parseString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "parseString",
          "normalized": "Parser a-\u003eDelta-\u003eString-\u003eResult a",
          "package": "trifecta",
          "partial": "String",
          "signature": "Parser a-\u003eDelta-\u003eString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "parseTest",
          "package": "trifecta",
          "signature": "Parser a -\u003e String -\u003e m ()",
          "source": "src/Text-Trifecta-Parser.html#parseTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "parseTest",
          "normalized": "Parser a-\u003eString-\u003eb()",
          "package": "trifecta",
          "partial": "Test",
          "signature": "Parser a-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "starve",
          "package": "trifecta",
          "signature": "Step a -\u003e Result a",
          "source": "src/Text-Trifecta-Parser.html#starve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "starve",
          "normalized": "Step a-\u003eResult a",
          "package": "trifecta",
          "signature": "Step a-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:starve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "stepIt",
          "package": "trifecta",
          "signature": "It Rope a -\u003e Step a",
          "source": "src/Text-Trifecta-Parser.html#stepIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "stepIt",
          "normalized": "It Rope a-\u003eStep a",
          "package": "trifecta",
          "partial": "It",
          "signature": "It Rope a-\u003eStep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:stepIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "stepParser",
          "package": "trifecta",
          "signature": "Parser a -\u003e Delta -\u003e ByteString -\u003e Step a",
          "source": "src/Text-Trifecta-Parser.html#stepParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "stepParser",
          "normalized": "Parser a-\u003eDelta-\u003eByteString-\u003eStep a",
          "package": "trifecta",
          "partial": "Parser",
          "signature": "Parser a-\u003eDelta-\u003eByteString-\u003eStep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:stepParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "stepResult",
          "package": "trifecta",
          "signature": "Rope -\u003e Result a -\u003e Step a",
          "source": "src/Text-Trifecta-Parser.html#stepResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "stepResult",
          "normalized": "Rope-\u003eResult a-\u003eStep a",
          "package": "trifecta",
          "partial": "Result",
          "signature": "Rope-\u003eResult a-\u003eStep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:stepResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Parser",
          "name": "unparser",
          "package": "trifecta",
          "signature": "forall r.  (a -\u003e Err -\u003e It Rope r) -\u003e (Err -\u003e It Rope r) -\u003e (a -\u003e Set String -\u003e Delta -\u003e ByteString -\u003e It Rope r) -\u003e (Doc -\u003e It Rope r) -\u003e Delta -\u003e ByteString -\u003e It Rope r",
          "source": "src/Text-Trifecta-Parser.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Parser",
          "module": "Text.Trifecta.Parser",
          "name": "unparser",
          "normalized": "a b(c-\u003eErr-\u003eIt Rope d)-\u003e(Err-\u003eIt Rope d)-\u003e(c-\u003eSet String-\u003eDelta-\u003eByteString-\u003eIt Rope d)-\u003e(Doc-\u003eIt Rope d)-\u003eDelta-\u003eByteString-\u003eIt Rope d",
          "package": "trifecta",
          "signature": "forall r.(a-\u003eErr-\u003eIt Rope r)-\u003e(Err-\u003eIt Rope r)-\u003e(a-\u003eSet String-\u003eDelta-\u003eByteString-\u003eIt Rope r)-\u003e(Doc-\u003eIt Rope r)-\u003eDelta-\u003eByteString-\u003eIt Rope r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Parser.html#v:unparser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe type for Lines will very likely change over time, to enable drawing\n lit up multi-character versions of control characters for \u003ccode\u003e^Z\u003c/code\u003e, \u003ccode\u003e^[\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003e0xff\u003c/a\u003e\u003c/code\u003e, etc. This will make for much nicer diagnostics when\n working with protocols.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Trifecta.Rendering",
          "name": "Rendering",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html",
          "type": "module"
        },
        "index": {
          "description": "The type for Lines will very likely change over time to enable drawing lit up multi-character versions of control characters for xff etc This will make for much nicer diagnostics when working with protocols",
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Rendering",
          "package": "trifecta",
          "partial": "Rendering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e In file included from baz.c:9\n In file included from bar.c:4\n foo.c:8:36: note\n int main(int argc, char ** argv) { int; }\n                                    ^\n\u003c/pre\u003e",
          "module": "Text.Trifecta.Rendering",
          "name": "Caret",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Caret",
          "type": "data"
        },
        "index": {
          "description": "In file included from baz.c In file included from bar.c foo.c note int main int argc char argv int",
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Caret",
          "package": "trifecta",
          "partial": "Caret",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Caret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Careted",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Careted",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Careted",
          "package": "trifecta",
          "partial": "Careted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Careted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Fixit",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Fixit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Fixit",
          "package": "trifecta",
          "partial": "Fixit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Fixit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "HasCaret",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#HasCaret",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "HasCaret",
          "package": "trifecta",
          "partial": "Has Caret",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:HasCaret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "HasFixit",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#HasFixit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "HasFixit",
          "package": "trifecta",
          "partial": "Has Fixit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:HasFixit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "HasRendering",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#HasRendering",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "HasRendering",
          "package": "trifecta",
          "partial": "Has Rendering",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:HasRendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "HasSpan",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#HasSpan",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "HasSpan",
          "package": "trifecta",
          "partial": "Has Span",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:HasSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Lines",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Lines",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Lines",
          "package": "trifecta",
          "partial": "Lines",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Renderable",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Renderable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Renderable",
          "package": "trifecta",
          "partial": "Renderable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Renderable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Rendered",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Rendered",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Rendered",
          "package": "trifecta",
          "partial": "Rendered",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Rendered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Rendering",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Rendering",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Rendering",
          "package": "trifecta",
          "partial": "Rendering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Rendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Source",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Source",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Source",
          "package": "trifecta",
          "partial": "Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Span",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Span",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Span",
          "package": "trifecta",
          "partial": "Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Spanned",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rendering.html#Spanned",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Spanned",
          "package": "trifecta",
          "partial": "Spanned",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#t:Spanned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "(.#)",
          "package": "trifecta",
          "signature": "(Delta -\u003e Lines -\u003e Lines) -\u003e Rendering -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#.%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "(.#) .#",
          "normalized": "(Delta-\u003eLines-\u003eLines)-\u003eRendering-\u003eRendering",
          "package": "trifecta",
          "signature": "(Delta-\u003eLines-\u003eLines)-\u003eRendering-\u003eRendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:.-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": ":~",
          "package": "trifecta",
          "signature": "a :~ Span",
          "source": "src/Text-Trifecta-Rendering.html#Spanned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": ":~",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": ":@",
          "package": "trifecta",
          "signature": "a :@ Rendering",
          "source": "src/Text-Trifecta-Rendering.html#Rendered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": ":@",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v::-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": ":^",
          "package": "trifecta",
          "signature": "a :^ Caret",
          "source": "src/Text-Trifecta-Rendering.html#Careted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": ":^",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v::-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Caret",
          "package": "trifecta",
          "signature": "Caret !Delta !ByteString",
          "source": "src/Text-Trifecta-Rendering.html#Caret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Caret",
          "package": "trifecta",
          "partial": "Caret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:Caret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Fixit",
          "package": "trifecta",
          "signature": "Fixit",
          "source": "src/Text-Trifecta-Rendering.html#Fixit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Fixit",
          "package": "trifecta",
          "partial": "Fixit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:Fixit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Rendering",
          "package": "trifecta",
          "signature": "Rendering !Delta !Int64 !Int64 (Lines -\u003e Lines) (Delta -\u003e Lines -\u003e Lines)",
          "source": "src/Text-Trifecta-Rendering.html#Rendering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Rendering",
          "normalized": "Rendering Delta Int Int(Lines-\u003eLines)(Delta-\u003eLines-\u003eLines)",
          "package": "trifecta",
          "partial": "Rendering",
          "signature": "Rendering Delta Int Int(Lines-\u003eLines)(Delta-\u003eLines-\u003eLines)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:Rendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "Span",
          "package": "trifecta",
          "signature": "Span !Delta !Delta !ByteString",
          "source": "src/Text-Trifecta-Rendering.html#Span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "Span",
          "package": "trifecta",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "_fixitReplacement",
          "package": "trifecta",
          "signature": "ByteString",
          "source": "src/Text-Trifecta-Rendering.html#Fixit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "_fixitReplacement",
          "package": "trifecta",
          "partial": "Replacement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:_fixitReplacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "_fixitSpan",
          "package": "trifecta",
          "signature": "Span",
          "source": "src/Text-Trifecta-Rendering.html#Fixit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "_fixitSpan",
          "package": "trifecta",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:_fixitSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "addCaret",
          "package": "trifecta",
          "signature": "Delta -\u003e Rendering -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#addCaret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "addCaret",
          "normalized": "Delta-\u003eRendering-\u003eRendering",
          "package": "trifecta",
          "partial": "Caret",
          "signature": "Delta-\u003eRendering-\u003eRendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:addCaret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "addFixit",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta -\u003e String -\u003e Rendering -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#addFixit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "addFixit",
          "normalized": "Delta-\u003eDelta-\u003eString-\u003eRendering-\u003eRendering",
          "package": "trifecta",
          "partial": "Fixit",
          "signature": "Delta-\u003eDelta-\u003eString-\u003eRendering-\u003eRendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:addFixit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e int main(int argc, char ** argv) { int; }\n                                    ^~~\n\u003c/pre\u003e",
          "module": "Text.Trifecta.Rendering",
          "name": "addSpan",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta -\u003e Rendering -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#addSpan",
          "type": "function"
        },
        "index": {
          "description": "int main int argc char argv int",
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "addSpan",
          "normalized": "Delta-\u003eDelta-\u003eRendering-\u003eRendering",
          "package": "trifecta",
          "partial": "Span",
          "signature": "Delta-\u003eDelta-\u003eRendering-\u003eRendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:addSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "caret",
          "package": "trifecta",
          "signature": "Lens' t Caret",
          "source": "src/Text-Trifecta-Rendering.html#caret",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "caret",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:caret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "caretEffects",
          "package": "trifecta",
          "signature": "[SGR]",
          "source": "src/Text-Trifecta-Rendering.html#caretEffects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "caretEffects",
          "normalized": "[SGR]",
          "package": "trifecta",
          "partial": "Effects",
          "signature": "[SGR]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:caretEffects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "draw",
          "package": "trifecta",
          "signature": "[SGR] -\u003e Int -\u003e Int64 -\u003e String -\u003e Lines -\u003e Lines",
          "source": "src/Text-Trifecta-Rendering.html#draw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "draw",
          "normalized": "[SGR]-\u003eInt-\u003eInt-\u003eString-\u003eLines-\u003eLines",
          "package": "trifecta",
          "signature": "[SGR]-\u003eInt-\u003eInt-\u003eString-\u003eLines-\u003eLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "drawCaret",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta -\u003e Lines -\u003e Lines",
          "source": "src/Text-Trifecta-Rendering.html#drawCaret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "drawCaret",
          "normalized": "Delta-\u003eDelta-\u003eLines-\u003eLines",
          "package": "trifecta",
          "partial": "Caret",
          "signature": "Delta-\u003eDelta-\u003eLines-\u003eLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:drawCaret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "drawFixit",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta -\u003e String -\u003e Delta -\u003e Lines -\u003e Lines",
          "source": "src/Text-Trifecta-Rendering.html#drawFixit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "drawFixit",
          "normalized": "Delta-\u003eDelta-\u003eString-\u003eDelta-\u003eLines-\u003eLines",
          "package": "trifecta",
          "partial": "Fixit",
          "signature": "Delta-\u003eDelta-\u003eString-\u003eDelta-\u003eLines-\u003eLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:drawFixit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "drawSpan",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta -\u003e Delta -\u003e Lines -\u003e Lines",
          "source": "src/Text-Trifecta-Rendering.html#drawSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "drawSpan",
          "normalized": "Delta-\u003eDelta-\u003eDelta-\u003eLines-\u003eLines",
          "package": "trifecta",
          "partial": "Span",
          "signature": "Delta-\u003eDelta-\u003eDelta-\u003eLines-\u003eLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:drawSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "emptyRendering",
          "package": "trifecta",
          "signature": "Rendering",
          "source": "src/Text-Trifecta-Rendering.html#emptyRendering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "emptyRendering",
          "package": "trifecta",
          "partial": "Rendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:emptyRendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "fixit",
          "package": "trifecta",
          "signature": "Lens' t Fixit",
          "source": "src/Text-Trifecta-Rendering.html#fixit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "fixit",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:fixit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "fixitReplacement",
          "package": "trifecta",
          "signature": "Lens' t ByteString",
          "source": "src/Text-Trifecta-Rendering.html#fixitReplacement",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "fixitReplacement",
          "package": "trifecta",
          "partial": "Replacement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:fixitReplacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "fixitSpan",
          "package": "trifecta",
          "signature": "Lens' t Span",
          "source": "src/Text-Trifecta-Rendering.html#fixitSpan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "fixitSpan",
          "package": "trifecta",
          "partial": "Span",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:fixitSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "ifNear",
          "package": "trifecta",
          "signature": "Delta -\u003e (Lines -\u003e Lines) -\u003e Delta -\u003e Lines -\u003e Lines",
          "source": "src/Text-Trifecta-Rendering.html#ifNear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "ifNear",
          "normalized": "Delta-\u003e(Lines-\u003eLines)-\u003eDelta-\u003eLines-\u003eLines",
          "package": "trifecta",
          "partial": "Near",
          "signature": "Delta-\u003e(Lines-\u003eLines)-\u003eDelta-\u003eLines-\u003eLines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:ifNear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "nullRendering",
          "package": "trifecta",
          "signature": "Rendering -\u003e Bool",
          "source": "src/Text-Trifecta-Rendering.html#nullRendering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "nullRendering",
          "normalized": "Rendering-\u003eBool",
          "package": "trifecta",
          "partial": "Rendering",
          "signature": "Rendering-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:nullRendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "render",
          "package": "trifecta",
          "signature": "t -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#render",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "render",
          "normalized": "a-\u003eRendering",
          "package": "trifecta",
          "signature": "t-\u003eRendering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a drawing surface\n\u003c/p\u003e",
          "module": "Text.Trifecta.Rendering",
          "name": "rendered",
          "package": "trifecta",
          "signature": "Delta -\u003e s -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#rendered",
          "type": "function"
        },
        "index": {
          "description": "create drawing surface",
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "rendered",
          "normalized": "Delta-\u003ea-\u003eRendering",
          "package": "trifecta",
          "signature": "Delta-\u003es-\u003eRendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:rendered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "rendering",
          "package": "trifecta",
          "signature": "Lens' t Rendering",
          "source": "src/Text-Trifecta-Rendering.html#rendering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "rendering",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:rendering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "renderingCaret",
          "package": "trifecta",
          "signature": "Delta -\u003e ByteString -\u003e Rendering",
          "source": "src/Text-Trifecta-Rendering.html#renderingCaret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "renderingCaret",
          "normalized": "Delta-\u003eByteString-\u003eRendering",
          "package": "trifecta",
          "partial": "Caret",
          "signature": "Delta-\u003eByteString-\u003eRendering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:renderingCaret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "renderingDelta",
          "package": "trifecta",
          "signature": "Lens' t Delta",
          "source": "src/Text-Trifecta-Rendering.html#renderingDelta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "renderingDelta",
          "package": "trifecta",
          "partial": "Delta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:renderingDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "renderingLine",
          "package": "trifecta",
          "signature": "Lens' t (Lines -\u003e Lines)",
          "source": "src/Text-Trifecta-Rendering.html#renderingLine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "renderingLine",
          "normalized": "Lens' a(Lines-\u003eLines)",
          "package": "trifecta",
          "partial": "Line",
          "signature": "Lens' t(Lines-\u003eLines)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:renderingLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "renderingLineBytes",
          "package": "trifecta",
          "signature": "Lens' t Int64",
          "source": "src/Text-Trifecta-Rendering.html#renderingLineBytes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "renderingLineBytes",
          "package": "trifecta",
          "partial": "Line Bytes",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:renderingLineBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "renderingLineLen",
          "package": "trifecta",
          "signature": "Lens' t Int64",
          "source": "src/Text-Trifecta-Rendering.html#renderingLineLen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "renderingLineLen",
          "package": "trifecta",
          "partial": "Line Len",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:renderingLineLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "renderingOverlays",
          "package": "trifecta",
          "signature": "Lens' t (Delta -\u003e Lines -\u003e Lines)",
          "source": "src/Text-Trifecta-Rendering.html#renderingOverlays",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "renderingOverlays",
          "normalized": "Lens' a(Delta-\u003eLines-\u003eLines)",
          "package": "trifecta",
          "partial": "Overlays",
          "signature": "Lens' t(Delta-\u003eLines-\u003eLines)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:renderingOverlays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "source",
          "package": "trifecta",
          "signature": "t -\u003e (Int64, Int64, Lines -\u003e Lines)",
          "source": "src/Text-Trifecta-Rendering.html#source",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "source",
          "normalized": "a-\u003e(Int,Int,Lines-\u003eLines)",
          "package": "trifecta",
          "signature": "t-\u003e(Int,Int,Lines-\u003eLines)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "span",
          "package": "trifecta",
          "signature": "Lens' t Span",
          "source": "src/Text-Trifecta-Rendering.html#span",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "span",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rendering",
          "name": "spanEffects",
          "package": "trifecta",
          "signature": "[SGR]",
          "source": "src/Text-Trifecta-Rendering.html#spanEffects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rendering",
          "module": "Text.Trifecta.Rendering",
          "name": "spanEffects",
          "normalized": "[SGR]",
          "package": "trifecta",
          "partial": "Effects",
          "signature": "[SGR]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rendering.html#v:spanEffects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eResults and Parse Errors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Trifecta.Result",
          "name": "Result",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Result.html",
          "type": "module"
        },
        "index": {
          "description": "Results and Parse Errors",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Result",
          "package": "trifecta",
          "partial": "Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e that lets you embed or retrieve a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e in a potentially larger type.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "AsResult",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Result.html#AsResult",
          "type": "class"
        },
        "index": {
          "description": "Prism that lets you embed or retrieve Result in potentially larger type",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "AsResult",
          "package": "trifecta",
          "partial": "As Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#t:AsResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used to report an error. What went wrong, some supplemental docs and a set of things expected\n at the current location. This does not, however, include the actual location.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "Err",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Result.html#Err",
          "type": "data"
        },
        "index": {
          "description": "This is used to report an error What went wrong some supplemental docs and set of things expected at the current location This does not however include the actual location",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Err",
          "package": "trifecta",
          "partial": "Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#t:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "Errable",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Result.html#Errable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Errable",
          "package": "trifecta",
          "partial": "Errable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#t:Errable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "HasErr",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Result.html#HasErr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "HasErr",
          "package": "trifecta",
          "partial": "Has Err",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#t:HasErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of parsing. Either we succeeded or something went wrong.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "Result",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Result.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of parsing Either we succeeded or something went wrong",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Result",
          "package": "trifecta",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "Err",
          "package": "trifecta",
          "signature": "Err",
          "source": "src/Text-Trifecta-Result.html#Err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Err",
          "package": "trifecta",
          "partial": "Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "Failure",
          "package": "trifecta",
          "signature": "Failure Doc",
          "source": "src/Text-Trifecta-Result.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Failure",
          "package": "trifecta",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "Success",
          "package": "trifecta",
          "signature": "Success a",
          "source": "src/Text-Trifecta-Result.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "Success",
          "package": "trifecta",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "_Failure",
          "package": "trifecta",
          "signature": "Prism' s Doc",
          "source": "src/Text-Trifecta-Result.html#_Failure",
          "type": "function"
        },
        "index": {
          "description": "The Prism for the Failure constructor of Result",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "_Failure",
          "package": "trifecta",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:_Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "_Result",
          "package": "trifecta",
          "signature": "Prism s t (Result a) (Result b)",
          "source": "src/Text-Trifecta-Result.html#_Result",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "_Result",
          "package": "trifecta",
          "partial": "Result",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:_Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "_Success",
          "package": "trifecta",
          "signature": "Prism s t a b",
          "source": "src/Text-Trifecta-Result.html#_Success",
          "type": "function"
        },
        "index": {
          "description": "The Prism for the Success constructor of Result",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "_Success",
          "package": "trifecta",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:_Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "_expected",
          "package": "trifecta",
          "signature": "Set String",
          "source": "src/Text-Trifecta-Result.html#Err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "_expected",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:_expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "_footnotes",
          "package": "trifecta",
          "signature": "[Doc]",
          "source": "src/Text-Trifecta-Result.html#Err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "_footnotes",
          "normalized": "[Doc]",
          "package": "trifecta",
          "signature": "[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:_footnotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "_reason",
          "package": "trifecta",
          "signature": "Maybe Doc",
          "source": "src/Text-Trifecta-Result.html#Err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "_reason",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:_reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "err",
          "package": "trifecta",
          "signature": "Lens' t Err",
          "source": "src/Text-Trifecta-Result.html#err",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "err",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "expected",
          "package": "trifecta",
          "signature": "Lens' t (Set String)",
          "source": "src/Text-Trifecta-Result.html#expected",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "expected",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a location and an \u003ccode\u003e\u003ca\u003eErr\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "explain",
          "package": "trifecta",
          "signature": "Rendering -\u003e Err -\u003e Doc",
          "source": "src/Text-Trifecta-Result.html#explain",
          "type": "function"
        },
        "index": {
          "description": "Convert location and an Err into Doc",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "explain",
          "normalized": "Rendering-\u003eErr-\u003eDoc",
          "package": "trifecta",
          "signature": "Rendering-\u003eErr-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:explain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a simple \u003ccode\u003e\u003ca\u003eErr\u003c/a\u003e\u003c/code\u003e word-wrapping the supplied message.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Result",
          "name": "failed",
          "package": "trifecta",
          "signature": "String -\u003e Err",
          "source": "src/Text-Trifecta-Result.html#failed",
          "type": "function"
        },
        "index": {
          "description": "Generate simple Err word-wrapping the supplied message",
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "failed",
          "normalized": "String-\u003eErr",
          "package": "trifecta",
          "signature": "String-\u003eErr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "footnotes",
          "package": "trifecta",
          "signature": "Lens' t [Doc]",
          "source": "src/Text-Trifecta-Result.html#footnotes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "footnotes",
          "normalized": "Lens' a[Doc]",
          "package": "trifecta",
          "signature": "Lens' t[Doc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:footnotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "raiseErr",
          "package": "trifecta",
          "signature": "Err -\u003e m a",
          "source": "src/Text-Trifecta-Result.html#raiseErr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "raiseErr",
          "normalized": "Err-\u003ea b",
          "package": "trifecta",
          "partial": "Err",
          "signature": "Err-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:raiseErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Result",
          "name": "reason",
          "package": "trifecta",
          "signature": "Lens' t (Maybe Doc)",
          "source": "src/Text-Trifecta-Result.html#reason",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Trifecta Result",
          "module": "Text.Trifecta.Result",
          "name": "reason",
          "package": "trifecta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Result.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "Rope",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rope.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "Rope",
          "package": "trifecta",
          "partial": "Rope",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "Rope",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rope.html#Rope",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "Rope",
          "package": "trifecta",
          "partial": "Rope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#t:Rope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "Strand",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Rope.html#Strand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "Strand",
          "package": "trifecta",
          "partial": "Strand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#t:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "Rope",
          "package": "trifecta",
          "signature": "Rope !Delta !(FingerTree Delta Strand)",
          "source": "src/Text-Trifecta-Rope.html#Rope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "Rope",
          "package": "trifecta",
          "partial": "Rope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:Rope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "Skipping",
          "package": "trifecta",
          "signature": "Skipping !Delta",
          "source": "src/Text-Trifecta-Rope.html#Strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "Skipping",
          "package": "trifecta",
          "partial": "Skipping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:Skipping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "Strand",
          "package": "trifecta",
          "signature": "Strand !ByteString !Delta",
          "source": "src/Text-Trifecta-Rope.html#Strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "Strand",
          "package": "trifecta",
          "partial": "Strand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egrab a the contents of a rope from a given location up to a newline\n\u003c/p\u003e",
          "module": "Text.Trifecta.Rope",
          "name": "grabLine",
          "package": "trifecta",
          "signature": "Delta -\u003e Rope -\u003e r -\u003e (Delta -\u003e ByteString -\u003e r) -\u003e r",
          "source": "src/Text-Trifecta-Rope.html#grabLine",
          "type": "function"
        },
        "index": {
          "description": "grab the contents of rope from given location up to newline",
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "grabLine",
          "normalized": "Delta-\u003eRope-\u003ea-\u003e(Delta-\u003eByteString-\u003ea)-\u003ea",
          "package": "trifecta",
          "partial": "Line",
          "signature": "Delta-\u003eRope-\u003er-\u003e(Delta-\u003eByteString-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:grabLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egrab a the contents of a rope from a given location up to a newline\n\u003c/p\u003e",
          "module": "Text.Trifecta.Rope",
          "name": "grabRest",
          "package": "trifecta",
          "signature": "Delta -\u003e Rope -\u003e r -\u003e (Delta -\u003e ByteString -\u003e r) -\u003e r",
          "source": "src/Text-Trifecta-Rope.html#grabRest",
          "type": "function"
        },
        "index": {
          "description": "grab the contents of rope from given location up to newline",
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "grabRest",
          "normalized": "Delta-\u003eRope-\u003ea-\u003e(Delta-\u003eByteString-\u003ea)-\u003ea",
          "package": "trifecta",
          "partial": "Rest",
          "signature": "Delta-\u003eRope-\u003er-\u003e(Delta-\u003eByteString-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:grabRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "rope",
          "package": "trifecta",
          "signature": "FingerTree Delta Strand -\u003e Rope",
          "source": "src/Text-Trifecta-Rope.html#rope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "rope",
          "normalized": "FingerTree Delta Strand-\u003eRope",
          "package": "trifecta",
          "signature": "FingerTree Delta Strand-\u003eRope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:rope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "strand",
          "package": "trifecta",
          "signature": "ByteString -\u003e Strand",
          "source": "src/Text-Trifecta-Rope.html#strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "strand",
          "normalized": "ByteString-\u003eStrand",
          "package": "trifecta",
          "signature": "ByteString-\u003eStrand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Rope",
          "name": "strands",
          "package": "trifecta",
          "signature": "Rope -\u003e FingerTree Delta Strand",
          "source": "src/Text-Trifecta-Rope.html#strands",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Rope",
          "module": "Text.Trifecta.Rope",
          "name": "strands",
          "normalized": "Rope-\u003eFingerTree Delta Strand",
          "package": "trifecta",
          "signature": "Rope-\u003eFingerTree Delta Strand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Rope.html#v:strands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast zero based arrays, based on the implementation in the HAMT-branch of\n unordered-containers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "Array",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Fast zero based arrays based on the implementation in the HAMT-branch of unordered-containers",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "Array",
          "package": "trifecta",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "Array",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-Array.html#Array",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "Array",
          "package": "trifecta",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "MArray",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-Array.html#MArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "MArray",
          "package": "trifecta",
          "partial": "MArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#t:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely copy the elements of an array. Array bounds are not checked.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "copy",
          "package": "trifecta",
          "signature": "Array e -\u003e Int -\u003e MArray s e -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Text-Trifecta-Util-Array.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Unsafely copy the elements of an array Array bounds are not checked",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "copy",
          "normalized": "Array a-\u003eInt-\u003eMArray b a-\u003eInt-\u003eInt-\u003eST b()",
          "package": "trifecta",
          "signature": "Array e-\u003eInt-\u003eMArray s e-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely copy the elements of an array. Array bounds are not checked.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "copyM",
          "package": "trifecta",
          "signature": "MArray s e -\u003e Int -\u003e MArray s e -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Text-Trifecta-Util-Array.html#copyM",
          "type": "function"
        },
        "index": {
          "description": "Unsafely copy the elements of an array Array bounds are not checked",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "copyM",
          "normalized": "MArray a b-\u003eInt-\u003eMArray a b-\u003eInt-\u003eInt-\u003eST a()",
          "package": "trifecta",
          "signature": "MArray s e-\u003eInt-\u003eMArray s e-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:copyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Delete an element at the given position in this array,\n decreasing its size by one.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "delete",
          "package": "trifecta",
          "signature": "Array e -\u003e Int -\u003e Array e",
          "source": "src/Text-Trifecta-Util-Array.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an element at the given position in this array decreasing its size by one",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "delete",
          "normalized": "Array a-\u003eInt-\u003eArray a",
          "package": "trifecta",
          "signature": "Array e-\u003eInt-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "empty",
          "package": "trifecta",
          "signature": "Array a",
          "source": "src/Text-Trifecta-Util-Array.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "empty",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "filter",
          "package": "trifecta",
          "signature": "(a -\u003e Bool) -\u003e Array a -\u003e Array a",
          "source": "src/Text-Trifecta-Util-Array.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
          "package": "trifecta",
          "signature": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "foldl'",
          "package": "trifecta",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Array a -\u003e b",
          "source": "src/Text-Trifecta-Util-Array.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eArray b-\u003ea",
          "package": "trifecta",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eArray a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "foldr",
          "package": "trifecta",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Array a -\u003e b",
          "source": "src/Text-Trifecta-Util-Array.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eArray a-\u003eb",
          "package": "trifecta",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eArray a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "index",
          "package": "trifecta",
          "signature": "Array a -\u003e Int -\u003e a",
          "source": "src/Text-Trifecta-Util-Array.html#index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "index",
          "normalized": "Array a-\u003eInt-\u003ea",
          "package": "trifecta",
          "signature": "Array a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "indexM_",
          "package": "trifecta",
          "signature": "MArray s a -\u003e Int -\u003e ST s a",
          "source": "src/Text-Trifecta-Util-Array.html#indexM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "indexM_",
          "normalized": "MArray a b-\u003eInt-\u003eST a b",
          "package": "trifecta",
          "signature": "MArray s a-\u003eInt-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:indexM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "index_",
          "package": "trifecta",
          "signature": "Array a -\u003e Int -\u003e ST s a",
          "source": "src/Text-Trifecta-Util-Array.html#index_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "index_",
          "normalized": "Array a-\u003eInt-\u003eST b a",
          "package": "trifecta",
          "signature": "Array a-\u003eInt-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:index_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Insert an element at the given position in this array,\n increasing its size by one.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "insert",
          "package": "trifecta",
          "signature": "Array e -\u003e Int -\u003e e -\u003e Array e",
          "source": "src/Text-Trifecta-Util-Array.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert an element at the given position in this array increasing its size by one",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "insert",
          "normalized": "Array a-\u003eInt-\u003ea-\u003eArray a",
          "package": "trifecta",
          "signature": "Array e-\u003eInt-\u003ee-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "length",
          "package": "trifecta",
          "signature": "Array a -\u003e Int",
          "source": "src/Text-Trifecta-Util-Array.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "length",
          "normalized": "Array a-\u003eInt",
          "package": "trifecta",
          "signature": "Array a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "lengthM",
          "package": "trifecta",
          "signature": "MArray s a -\u003e Int",
          "source": "src/Text-Trifecta-Util-Array.html#lengthM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "lengthM",
          "normalized": "MArray a b-\u003eInt",
          "package": "trifecta",
          "signature": "MArray s a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:lengthM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "map",
          "package": "trifecta",
          "signature": "(a -\u003e b) -\u003e Array a -\u003e Array b",
          "source": "src/Text-Trifecta-Util-Array.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "package": "trifecta",
          "signature": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "map'",
          "package": "trifecta",
          "signature": "(a -\u003e b) -\u003e Array a -\u003e Array b",
          "source": "src/Text-Trifecta-Util-Array.html#map%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of map",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "map'",
          "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "package": "trifecta",
          "signature": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:map-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new mutable array of specified size, in the specified\n state thread, with each element containing the specified initial\n value.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "new",
          "package": "trifecta",
          "signature": "Int -\u003e a -\u003e ST s (MArray s a)",
          "source": "src/Text-Trifecta-Util-Array.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new mutable array of specified size in the specified state thread with each element containing the specified initial value",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "new",
          "normalized": "Int-\u003ea-\u003eST b(MArray b a)",
          "package": "trifecta",
          "signature": "Int-\u003ea-\u003eST s(MArray s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "new_",
          "package": "trifecta",
          "signature": "Int -\u003e ST s (MArray s a)",
          "source": "src/Text-Trifecta-Util-Array.html#new_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "new_",
          "normalized": "Int-\u003eST a(MArray a b)",
          "package": "trifecta",
          "signature": "Int-\u003eST s(MArray s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:new_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "read",
          "package": "trifecta",
          "signature": "MArray s a -\u003e Int -\u003e ST s a",
          "source": "src/Text-Trifecta-Util-Array.html#read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "read",
          "normalized": "MArray a b-\u003eInt-\u003eST a b",
          "package": "trifecta",
          "signature": "MArray s a-\u003eInt-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "run",
          "package": "trifecta",
          "signature": "(forall s.  ST s (MArray s e)) -\u003e Array e",
          "source": "src/Text-Trifecta-Util-Array.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "run",
          "normalized": "(a b ST c(MArray c d))-\u003eArray d",
          "package": "trifecta",
          "signature": "(forall s. ST s(MArray s e))-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "run2",
          "package": "trifecta",
          "signature": "(forall s.  ST s (MArray s e, a)) -\u003e (Array e, a)",
          "source": "src/Text-Trifecta-Util-Array.html#run2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "run2",
          "normalized": "(a b ST c(MArray c d,e))-\u003e(Array d,e)",
          "package": "trifecta",
          "signature": "(forall s. ST s(MArray s e,a))-\u003e(Array e,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:run2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "singleton",
          "package": "trifecta",
          "signature": "a -\u003e Array a",
          "source": "src/Text-Trifecta-Util-Array.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "singleton",
          "normalized": "a-\u003eArray a",
          "package": "trifecta",
          "signature": "a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "thaw",
          "package": "trifecta",
          "signature": "Array e -\u003e Int -\u003e Int -\u003e ST s (MArray s e)",
          "source": "src/Text-Trifecta-Util-Array.html#thaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "thaw",
          "normalized": "Array a-\u003eInt-\u003eInt-\u003eST b(MArray b a)",
          "package": "trifecta",
          "signature": "Array e-\u003eInt-\u003eInt-\u003eST s(MArray s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "traverse",
          "package": "trifecta",
          "signature": "(a -\u003e f b) -\u003e Array a -\u003e f (Array b)",
          "source": "src/Text-Trifecta-Util-Array.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003eArray a-\u003eb(Array c)",
          "package": "trifecta",
          "signature": "(a-\u003ef b)-\u003eArray a-\u003ef(Array b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "unsafeFreeze",
          "package": "trifecta",
          "signature": "MArray s a -\u003e ST s (Array a)",
          "source": "src/Text-Trifecta-Util-Array.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "unsafeFreeze",
          "normalized": "MArray a b-\u003eST a(Array b)",
          "package": "trifecta",
          "partial": "Freeze",
          "signature": "MArray s a-\u003eST s(Array a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Update the element at the given position in this array.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.Array",
          "name": "update",
          "package": "trifecta",
          "signature": "Array e -\u003e Int -\u003e e -\u003e Array e",
          "source": "src/Text-Trifecta-Util-Array.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the element at the given position in this array",
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "update",
          "normalized": "Array a-\u003eInt-\u003ea-\u003eArray a",
          "package": "trifecta",
          "signature": "Array e-\u003eInt-\u003ee-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.Array",
          "name": "write",
          "package": "trifecta",
          "signature": "MArray s a -\u003e Int -\u003e a -\u003e ST s ()",
          "source": "src/Text-Trifecta-Util-Array.html#write",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util Array",
          "module": "Text.Trifecta.Util.Array",
          "name": "write",
          "normalized": "MArray a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "trifecta",
          "signature": "MArray s a-\u003eInt-\u003ea-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-Array.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterval maps implemented using the \u003ccode\u003e\u003ca\u003eFingerTree\u003c/a\u003e\u003c/code\u003e type, following\n section 4.8 of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ralf Hinze and Ross Paterson,\n      \"Finger trees: a simple general-purpose data structure\",\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 16:2 (2006) pp 197-217.\n      \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e\n referring to the size of the priority queue.  These bounds hold even\n in a persistent (shared) setting.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Many of these operations have the same names as similar\n operations on lists in the \u003ca\u003ePrelude\u003c/a\u003e.  The ambiguity may be resolved\n using either qualification or the \u003ccode\u003ehiding\u003c/code\u003e clause.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ca\u003eData.IntervalMap.FingerTree\u003c/a\u003e, this version sorts things so\n that the largest interval from a given point comes first. This way\n if you have nested intervals, you get the outermost interval before\n the contained intervals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntervalMap",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-IntervalMap.html",
          "type": "module"
        },
        "index": {
          "description": "Interval maps implemented using the FingerTree type following section of Ralf Hinze and Ross Paterson Finger trees simple general-purpose data structure Journal of Functional Programming pp http www.soi.city.ac.uk ross papers FingerTree.html An amortized running time is given for each operation with referring to the size of the priority queue These bounds hold even in persistent shared setting Note Many of these operations have the same names as similar operations on lists in the Prelude The ambiguity may be resolved using either qualification or the hiding clause Unlike Data.IntervalMap.FingerTree this version sorts things so that the largest interval from given point comes first This way if you have nested intervals you get the outermost interval before the contained intervals",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntervalMap",
          "package": "trifecta",
          "partial": "Interval Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntInterval",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#IntInterval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntInterval",
          "package": "trifecta",
          "partial": "Int Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#t:IntInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closed interval.  The lower bound should be less than or equal\n to the higher bound.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "Interval",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "closed interval The lower bound should be less than or equal to the higher bound",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "Interval",
          "package": "trifecta",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of closed intervals, possibly with duplicates.\n The \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances process the intervals in\n lexicographical order.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntervalMap",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#IntervalMap",
          "type": "newtype"
        },
        "index": {
          "description": "Map of closed intervals possibly with duplicates The Foldable and Traversable instances process the intervals in lexicographical order",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntervalMap",
          "package": "trifecta",
          "partial": "Interval Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#t:IntervalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntInterval",
          "package": "trifecta",
          "signature": "IntInterval (Interval v) v",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#IntInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntInterval",
          "package": "trifecta",
          "partial": "Int Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:IntInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "Interval",
          "package": "trifecta",
          "signature": "Interval",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "Interval",
          "package": "trifecta",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntervalMap",
          "package": "trifecta",
          "signature": "IntervalMap",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#IntervalMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "IntervalMap",
          "package": "trifecta",
          "partial": "Interval Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:IntervalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "NoInterval",
          "package": "trifecta",
          "signature": "NoInterval",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#IntInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "NoInterval",
          "package": "trifecta",
          "partial": "No Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:NoInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k log (n\u003c/em\u003e/\u003cem\u003ek))\u003c/em\u003e.  All intervals that contain the given interval,\n in lexicographical order.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "dominators",
          "package": "trifecta",
          "signature": "v -\u003e v -\u003e IntervalMap v a -\u003e [(Interval v, a)]",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#dominators",
          "type": "function"
        },
        "index": {
          "description": "log All intervals that contain the given interval in lexicographical order",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "dominators",
          "normalized": "a-\u003ea-\u003eIntervalMap a b-\u003e[(Interval a,b)]",
          "package": "trifecta",
          "signature": "v-\u003ev-\u003eIntervalMap v a-\u003e[(Interval v,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:dominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "fromList",
          "package": "trifecta",
          "signature": "[(v, v, a)] -\u003e IntervalMap v a",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "fromList",
          "normalized": "[(a,a,b)]-\u003eIntervalMap a b",
          "package": "trifecta",
          "partial": "List",
          "signature": "[(v,v,a)]-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "high",
          "package": "trifecta",
          "signature": "v",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "high",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:high"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Insert an interval into a map.\n The map may contain duplicate intervals; the new entry will be inserted\n before any existing entries for the same interval.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "insert",
          "package": "trifecta",
          "signature": "v -\u003e v -\u003e a -\u003e IntervalMap v a -\u003e IntervalMap v a",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert an interval into map The map may contain duplicate intervals the new entry will be inserted before any existing entries for the same interval",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "insert",
          "normalized": "a-\u003ea-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "trifecta",
          "signature": "v-\u003ev-\u003ea-\u003eIntervalMap v a-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k log (n\u003c/em\u003e/\u003cem\u003ek))\u003c/em\u003e.  All intervals that intersect with the given\n interval, in lexicographical order.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "intersections",
          "package": "trifecta",
          "signature": "v -\u003e v -\u003e IntervalMap v a -\u003e [(Interval v, a)]",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#intersections",
          "type": "function"
        },
        "index": {
          "description": "log All intervals that intersect with the given interval in lexicographical order",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "intersections",
          "normalized": "a-\u003ea-\u003eIntervalMap a b-\u003e[(Interval a,b)]",
          "package": "trifecta",
          "signature": "v-\u003ev-\u003eIntervalMap v a-\u003e[(Interval v,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:intersections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "low",
          "package": "trifecta",
          "signature": "v",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "low",
          "package": "trifecta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:low"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Add a delta to each interval in the map\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "offset",
          "package": "trifecta",
          "signature": "v -\u003e IntervalMap v a -\u003e IntervalMap v a",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#offset",
          "type": "function"
        },
        "index": {
          "description": "Add delta to each interval in the map",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "offset",
          "normalized": "a-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "trifecta",
          "signature": "v-\u003eIntervalMap v a-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "runIntervalMap",
          "package": "trifecta",
          "signature": "FingerTree (IntInterval v) (Node v a)",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#IntervalMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "runIntervalMap",
          "package": "trifecta",
          "partial": "Interval Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:runIntervalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k log (n\u003c/em\u003e/\u003cem\u003ek))\u003c/em\u003e.  All intervals that contain the given point,\n in lexicographical order.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "search",
          "package": "trifecta",
          "signature": "v -\u003e IntervalMap v a -\u003e [(Interval v, a)]",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#search",
          "type": "function"
        },
        "index": {
          "description": "log All intervals that contain the given point in lexicographical order",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "search",
          "normalized": "a-\u003eIntervalMap a b-\u003e[(Interval a,b)]",
          "package": "trifecta",
          "signature": "v-\u003eIntervalMap v a-\u003e[(Interval v,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Interval map with a single entry.\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "singleton",
          "package": "trifecta",
          "signature": "Interval v -\u003e a -\u003e IntervalMap v a",
          "source": "src/Text-Trifecta-Util-IntervalMap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Interval map with single entry",
          "hierarchy": "Text Trifecta Util IntervalMap",
          "module": "Text.Trifecta.Util.IntervalMap",
          "name": "singleton",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b",
          "package": "trifecta",
          "signature": "Interval v-\u003ea-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-IntervalMap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eharder, better, faster, stronger...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Trifecta.Util.It",
          "name": "It",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-It.html",
          "type": "module"
        },
        "index": {
          "description": "harder better faster stronger",
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "It",
          "package": "trifecta",
          "partial": "It",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "It",
          "package": "trifecta",
          "source": "src/Text-Trifecta-Util-It.html#It",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "It",
          "package": "trifecta",
          "partial": "It",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#t:It"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "It",
          "package": "trifecta",
          "signature": "It a (r -\u003e It r a)",
          "source": "src/Text-Trifecta-Util-It.html#It",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "It",
          "normalized": "It a(b-\u003eIt b a)",
          "package": "trifecta",
          "partial": "It",
          "signature": "It a(r-\u003eIt r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:It"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "Pure",
          "package": "trifecta",
          "signature": "Pure a",
          "source": "src/Text-Trifecta-Util-It.html#It",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "Pure",
          "package": "trifecta",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a position, go there, and grab the text forward from that point\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.It",
          "name": "fillIt",
          "package": "trifecta",
          "signature": "r -\u003e (Delta -\u003e ByteString -\u003e r) -\u003e Delta -\u003e It Rope r",
          "source": "src/Text-Trifecta-Util-It.html#fillIt",
          "type": "function"
        },
        "index": {
          "description": "Given position go there and grab the text forward from that point",
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "fillIt",
          "normalized": "a-\u003e(Delta-\u003eByteString-\u003ea)-\u003eDelta-\u003eIt Rope a",
          "package": "trifecta",
          "partial": "It",
          "signature": "r-\u003e(Delta-\u003eByteString-\u003er)-\u003eDelta-\u003eIt Rope r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:fillIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "needIt",
          "package": "trifecta",
          "signature": "a -\u003e (r -\u003e Maybe a) -\u003e It r a",
          "source": "src/Text-Trifecta-Util-It.html#needIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "needIt",
          "normalized": "a-\u003e(b-\u003eMaybe a)-\u003eIt b a",
          "package": "trifecta",
          "partial": "It",
          "signature": "a-\u003e(r-\u003eMaybe a)-\u003eIt r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:needIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the text of the line that contains a given position\n\u003c/p\u003e",
          "module": "Text.Trifecta.Util.It",
          "name": "rewindIt",
          "package": "trifecta",
          "signature": "Delta -\u003e It Rope (Maybe ByteString)",
          "source": "src/Text-Trifecta-Util-It.html#rewindIt",
          "type": "function"
        },
        "index": {
          "description": "Return the text of the line that contains given position",
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "rewindIt",
          "normalized": "Delta-\u003eIt Rope(Maybe ByteString)",
          "package": "trifecta",
          "partial": "It",
          "signature": "Delta-\u003eIt Rope(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:rewindIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "runIt",
          "package": "trifecta",
          "signature": "(a -\u003e o) -\u003e (a -\u003e (r -\u003e It r a) -\u003e o) -\u003e It r a -\u003e o",
          "source": "src/Text-Trifecta-Util-It.html#runIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "runIt",
          "normalized": "(a-\u003eb)-\u003e(a-\u003e(c-\u003eIt c a)-\u003eb)-\u003eIt c a-\u003eb",
          "package": "trifecta",
          "partial": "It",
          "signature": "(a-\u003eo)-\u003e(a-\u003e(r-\u003eIt r a)-\u003eo)-\u003eIt r a-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:runIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "simplifyIt",
          "package": "trifecta",
          "signature": "It r a -\u003e r -\u003e It r a",
          "source": "src/Text-Trifecta-Util-It.html#simplifyIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "simplifyIt",
          "normalized": "It a b-\u003ea-\u003eIt a b",
          "package": "trifecta",
          "partial": "It",
          "signature": "It r a-\u003er-\u003eIt r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:simplifyIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "sliceIt",
          "package": "trifecta",
          "signature": "Delta -\u003e Delta -\u003e It Rope ByteString",
          "source": "src/Text-Trifecta-Util-It.html#sliceIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "sliceIt",
          "normalized": "Delta-\u003eDelta-\u003eIt Rope ByteString",
          "package": "trifecta",
          "partial": "It",
          "signature": "Delta-\u003eDelta-\u003eIt Rope ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:sliceIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta.Util.It",
          "name": "wantIt",
          "package": "trifecta",
          "signature": "a -\u003e (r -\u003e (#Bool, a#)) -\u003e It r a",
          "source": "src/Text-Trifecta-Util-It.html#wantIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Trifecta Util It",
          "module": "Text.Trifecta.Util.It",
          "name": "wantIt",
          "normalized": "a-\u003e(b-\u003e(#Bool,a #))-\u003eIt b a",
          "package": "trifecta",
          "partial": "It",
          "signature": "a-\u003e(r-\u003e(#Bool,a #))-\u003eIt r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta-Util-It.html#v:wantIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Trifecta",
          "name": "Trifecta",
          "package": "trifecta",
          "source": "src/Text-Trifecta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Trifecta",
          "module": "Text.Trifecta",
          "name": "Trifecta",
          "package": "trifecta",
          "partial": "Trifecta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/trifecta/docs/Text-Trifecta.html#"
      }
    }
  ]
]