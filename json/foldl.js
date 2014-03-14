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
        "word": "foldl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFolds for byte streams\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "ByteString",
          "package": "foldl",
          "source": "src/Control-Foldl-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Folds for byte streams",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "ByteString",
          "package": "foldl",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(all predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all bytes satisfy the predicate, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n    otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "all",
          "package": "foldl",
          "signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString Bool",
          "source": "src/Control-Foldl-ByteString.html#all",
          "type": "function"
        },
        "index": {
          "description": "all predicate returns True if all bytes satisfy the predicate False otherwise",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "all",
          "normalized": "(Word-\u003eBool)-\u003eFold ByteString Bool",
          "package": "foldl",
          "signature": "(Word-\u003eBool)-\u003eFold ByteString Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(any predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any byte satisfies the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "any",
          "package": "foldl",
          "signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString Bool",
          "source": "src/Control-Foldl-ByteString.html#any",
          "type": "function"
        },
        "index": {
          "description": "any predicate returns True if any byte satisfies the predicate False otherwise",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "any",
          "normalized": "(Word-\u003eBool)-\u003eFold ByteString Bool",
          "package": "foldl",
          "signature": "(Word-\u003eBool)-\u003eFold ByteString Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elem w8)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the byte stream has a byte equal to \u003ccode\u003ew8\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "elem",
          "package": "foldl",
          "signature": "Word8 -\u003e Fold ByteString Bool",
          "source": "src/Control-Foldl-ByteString.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem w8 returns True if the byte stream has byte equal to w8 False otherwise",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "elem",
          "normalized": "Word-\u003eFold ByteString Bool",
          "package": "foldl",
          "signature": "Word-\u003eFold ByteString Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elemIndex w8)\u003c/code\u003e returns the index of the first byte that equals \u003ccode\u003ew8\u003c/code\u003e, or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no byte matches\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "elemIndex",
          "package": "foldl",
          "signature": "Word8 -\u003e Fold ByteString (Maybe n)",
          "source": "src/Control-Foldl-ByteString.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "elemIndex w8 returns the index of the first byte that equals w8 or Nothing if no byte matches",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "elemIndex",
          "normalized": "Word-\u003eFold ByteString(Maybe a)",
          "package": "foldl",
          "partial": "Index",
          "signature": "Word-\u003eFold ByteString(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(find predicate)\u003c/code\u003e returns the first byte that satisfies the predicate or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no byte satisfies the predicate\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "find",
          "package": "foldl",
          "signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString (Maybe Word8)",
          "source": "src/Control-Foldl-ByteString.html#find",
          "type": "function"
        },
        "index": {
          "description": "find predicate returns the first byte that satisfies the predicate or Nothing if no byte satisfies the predicate",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "find",
          "normalized": "(Word-\u003eBool)-\u003eFold ByteString(Maybe Word)",
          "package": "foldl",
          "signature": "(Word-\u003eBool)-\u003eFold ByteString(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(findIndex predicate)\u003c/code\u003e returns the index of the first byte that satisfies\n    the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no byte satisfies the predicate\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "findIndex",
          "package": "foldl",
          "signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString (Maybe n)",
          "source": "src/Control-Foldl-ByteString.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "findIndex predicate returns the index of the first byte that satisfies the predicate or Nothing if no byte satisfies the predicate",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "findIndex",
          "normalized": "(Word-\u003eBool)-\u003eFold ByteString(Maybe a)",
          "package": "foldl",
          "partial": "Index",
          "signature": "(Word-\u003eBool)-\u003eFold ByteString(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppply a strict left \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e to a lazy bytestring\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "fold",
          "package": "foldl",
          "signature": "Fold ByteString a -\u003e ByteString -\u003e a",
          "source": "src/Control-Foldl-ByteString.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Appply strict left Fold to lazy bytestring",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "fold",
          "normalized": "Fold ByteString a-\u003eByteString-\u003ea",
          "package": "foldl",
          "signature": "Fold ByteString a-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first byte of a byte stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream is\n    empty\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "head",
          "package": "foldl",
          "signature": "Fold ByteString (Maybe Word8)",
          "source": "src/Control-Foldl-ByteString.html#head",
          "type": "function"
        },
        "index": {
          "description": "Get the first byte of byte stream or return Nothing if the stream is empty",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "head",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(index n)\u003c/code\u003e returns the \u003ccode\u003en\u003c/code\u003eth byte of the byte stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n    stream has an insufficient number of bytes\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "index",
          "package": "foldl",
          "signature": "n -\u003e Fold ByteString (Maybe Word8)",
          "source": "src/Control-Foldl-ByteString.html#index",
          "type": "function"
        },
        "index": {
          "description": "index returns the th byte of the byte stream or Nothing if the stream has an insufficient number of bytes",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "index",
          "normalized": "a-\u003eFold ByteString(Maybe Word)",
          "package": "foldl",
          "signature": "n-\u003eFold ByteString(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last byte of a byte stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the byte stream is\n    empty\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "last",
          "package": "foldl",
          "signature": "Fold ByteString (Maybe Word8)",
          "source": "src/Control-Foldl-ByteString.html#last",
          "type": "function"
        },
        "index": {
          "description": "Get the last byte of byte stream or return Nothing if the byte stream is empty",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "last",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the byte stream in bytes\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "length",
          "package": "foldl",
          "signature": "Fold ByteString n",
          "source": "src/Control-Foldl-ByteString.html#length",
          "type": "function"
        },
        "index": {
          "description": "Return the length of the byte stream in bytes",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "length",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the maximum byte\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "maximum",
          "package": "foldl",
          "signature": "Fold ByteString (Maybe Word8)",
          "source": "src/Control-Foldl-ByteString.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Computes the maximum byte",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "maximum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the minimum byte\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "minimum",
          "package": "foldl",
          "signature": "Fold ByteString (Maybe Word8)",
          "source": "src/Control-Foldl-ByteString.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Computes the minimum byte",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "minimum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(notElem w8)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the byte stream has a byte equal to \u003ccode\u003ew8\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "notElem",
          "package": "foldl",
          "signature": "Word8 -\u003e Fold ByteString Bool",
          "source": "src/Control-Foldl-ByteString.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem w8 returns False if the byte stream has byte equal to w8 True otherwise",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "notElem",
          "normalized": "Word-\u003eFold ByteString Bool",
          "package": "foldl",
          "partial": "Elem",
          "signature": "Word-\u003eFold ByteString Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the byte stream is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.ByteString",
          "name": "null",
          "package": "foldl",
          "signature": "Fold ByteString Bool",
          "source": "src/Control-Foldl-ByteString.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the byte stream is empty False otherwise",
          "hierarchy": "Control Foldl ByteString",
          "module": "Control.Foldl.ByteString",
          "name": "null",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFolds for text streams\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Foldl.Text",
          "name": "Text",
          "package": "foldl",
          "source": "src/Control-Foldl-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Folds for text streams",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "Text",
          "package": "foldl",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(all predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all characters satisfy the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "all",
          "package": "foldl",
          "signature": "(Char -\u003e Bool) -\u003e Fold Text Bool",
          "source": "src/Control-Foldl-Text.html#all",
          "type": "function"
        },
        "index": {
          "description": "all predicate returns True if all characters satisfy the predicate False otherwise",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eFold Text Bool",
          "package": "foldl",
          "signature": "(Char-\u003eBool)-\u003eFold Text Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(any predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any character satisfies the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "any",
          "package": "foldl",
          "signature": "(Char -\u003e Bool) -\u003e Fold Text Bool",
          "source": "src/Control-Foldl-Text.html#any",
          "type": "function"
        },
        "index": {
          "description": "any predicate returns True if any character satisfies the predicate False otherwise",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eFold Text Bool",
          "package": "foldl",
          "signature": "(Char-\u003eBool)-\u003eFold Text Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elem c)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the text stream has a character equal to \u003ccode\u003ec\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "elem",
          "package": "foldl",
          "signature": "Char -\u003e Fold Text Bool",
          "source": "src/Control-Foldl-Text.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem returns True if the text stream has character equal to False otherwise",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "elem",
          "normalized": "Char-\u003eFold Text Bool",
          "package": "foldl",
          "signature": "Char-\u003eFold Text Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elemIndex c)\u003c/code\u003e returns the index of the first character that equals \u003ccode\u003ec\u003c/code\u003e,\n    or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no character matches\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "elemIndex",
          "package": "foldl",
          "signature": "Char -\u003e Fold Text (Maybe n)",
          "source": "src/Control-Foldl-Text.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "elemIndex returns the index of the first character that equals or Nothing if no character matches",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "elemIndex",
          "normalized": "Char-\u003eFold Text(Maybe a)",
          "package": "foldl",
          "partial": "Index",
          "signature": "Char-\u003eFold Text(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(find predicate)\u003c/code\u003e returns the first character that satisfies the predicate\n    or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no character satisfies the predicate\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "find",
          "package": "foldl",
          "signature": "(Char -\u003e Bool) -\u003e Fold Text (Maybe Char)",
          "source": "src/Control-Foldl-Text.html#find",
          "type": "function"
        },
        "index": {
          "description": "find predicate returns the first character that satisfies the predicate or Nothing if no character satisfies the predicate",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eFold Text(Maybe Char)",
          "package": "foldl",
          "signature": "(Char-\u003eBool)-\u003eFold Text(Maybe Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(findIndex predicate)\u003c/code\u003e returns the index of the first character that\n    satisfies the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no character satisfies the\n    predicate\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "findIndex",
          "package": "foldl",
          "signature": "(Char -\u003e Bool) -\u003e Fold Text (Maybe n)",
          "source": "src/Control-Foldl-Text.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "findIndex predicate returns the index of the first character that satisfies the predicate or Nothing if no character satisfies the predicate",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eFold Text(Maybe a)",
          "package": "foldl",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eFold Text(Maybe n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a strict left \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e to lazy text\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "fold",
          "package": "foldl",
          "signature": "Fold Text a -\u003e Text -\u003e a",
          "source": "src/Control-Foldl-Text.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Apply strict left Fold to lazy text",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "fold",
          "normalized": "Fold Text a-\u003eText-\u003ea",
          "package": "foldl",
          "signature": "Fold Text a-\u003eText-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first character of a text stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n    is empty\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "head",
          "package": "foldl",
          "signature": "Fold Text (Maybe Char)",
          "source": "src/Control-Foldl-Text.html#head",
          "type": "function"
        },
        "index": {
          "description": "Get the first character of text stream or return Nothing if the stream is empty",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "head",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(index n)\u003c/code\u003e returns the \u003ccode\u003en\u003c/code\u003eth character of the text stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n    the stream has an insufficient number of characters\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "index",
          "package": "foldl",
          "signature": "n -\u003e Fold Text (Maybe Char)",
          "source": "src/Control-Foldl-Text.html#index",
          "type": "function"
        },
        "index": {
          "description": "index returns the th character of the text stream or Nothing if the stream has an insufficient number of characters",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "index",
          "normalized": "a-\u003eFold Text(Maybe Char)",
          "package": "foldl",
          "signature": "n-\u003eFold Text(Maybe Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last character of a text stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the text\n    stream is empty\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "last",
          "package": "foldl",
          "signature": "Fold Text (Maybe Char)",
          "source": "src/Control-Foldl-Text.html#last",
          "type": "function"
        },
        "index": {
          "description": "Get the last character of text stream or return Nothing if the text stream is empty",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "last",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the text stream in characters\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "length",
          "package": "foldl",
          "signature": "Fold Text n",
          "source": "src/Control-Foldl-Text.html#length",
          "type": "function"
        },
        "index": {
          "description": "Return the length of the text stream in characters",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "length",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the maximum character\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "maximum",
          "package": "foldl",
          "signature": "Fold Text (Maybe Char)",
          "source": "src/Control-Foldl-Text.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Computes the maximum character",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "maximum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the minimum character\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "minimum",
          "package": "foldl",
          "signature": "Fold Text (Maybe Char)",
          "source": "src/Control-Foldl-Text.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Computes the minimum character",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "minimum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(notElem c)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the text stream has a character equal to\n    \u003ccode\u003ec\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "notElem",
          "package": "foldl",
          "signature": "Char -\u003e Fold Text Bool",
          "source": "src/Control-Foldl-Text.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem returns False if the text stream has character equal to True otherwise",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "notElem",
          "normalized": "Char-\u003eFold Text Bool",
          "package": "foldl",
          "partial": "Elem",
          "signature": "Char-\u003eFold Text Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the text stream is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl.Text",
          "name": "null",
          "package": "foldl",
          "signature": "Fold Text Bool",
          "source": "src/Control-Foldl-Text.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the text stream is empty False otherwise",
          "hierarchy": "Control Foldl Text",
          "module": "Control.Foldl.Text",
          "name": "null",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient and streaming left folds that you can combine\n    using \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e style.\n\u003c/p\u003e\u003cp\u003eImport this module qualified to avoid clashing with the Prelude:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Control.Foldl as L\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e to apply a \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e to a list:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.fold L.sum [1..100]\n\u003c/code\u003e\u003c/strong\u003e5050\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003es, so you can combine them using \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\n    combinators:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Control.Applicative\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet average = (/) \u003c$\u003e L.sum \u003c*\u003e L.genericLength\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThese combined folds will still traverse the list only once, streaming\n    efficiently over the list in constant space without space leaks:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.fold average [1..10000000]\n\u003c/code\u003e\u003c/strong\u003e5000000.5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.fold ((,) \u003c$\u003e L.minimum \u003c*\u003e L.maximum) [1..10000000]\n\u003c/code\u003e\u003c/strong\u003e(Just 1,Just 10000000)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Foldl",
          "name": "Foldl",
          "package": "foldl",
          "source": "src/Control-Foldl.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides efficient and streaming left folds that you can combine using Applicative style Import this module qualified to avoid clashing with the Prelude import qualified Control.Foldl as Use fold to apply Fold to list L.fold L.sum Fold are Applicative so you can combine them using Applicative combinators import Control.Applicative let average L.sum L.genericLength These combined folds will still traverse the list only once streaming efficiently over the list in constant space without space leaks L.fold average L.fold L.minimum L.maximum Just Just",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "Foldl",
          "package": "foldl",
          "partial": "Foldl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient representation of a left fold that preserves the fold's step\n    function, initial accumulator, and extraction function\n\u003c/p\u003e\u003cp\u003eThis allows the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance to assemble derived folds that\n    traverse the container only once\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "Fold",
          "package": "foldl",
          "source": "src/Control-Foldl.html#Fold",
          "type": "data"
        },
        "index": {
          "description": "Efficient representation of left fold that preserves the fold step function initial accumulator and extraction function This allows the Applicative instance to assemble derived folds that traverse the container only once",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "Fold",
          "package": "foldl",
          "partial": "Fold",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e, but monadic\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "FoldM",
          "package": "foldl",
          "source": "src/Control-Foldl.html#FoldM",
          "type": "data"
        },
        "index": {
          "description": "Like Fold but monadic",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "FoldM",
          "package": "foldl",
          "partial": "Fold",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#t:FoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Foldl",
          "name": "Fold",
          "package": "foldl",
          "signature": "forall x . Fold (x -\u003e a -\u003e x) x (x -\u003e b)",
          "source": "src/Control-Foldl.html#Fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "Fold",
          "normalized": "a b Fold(b-\u003ec-\u003eb)b(b-\u003ed)",
          "package": "foldl",
          "partial": "Fold",
          "signature": "forall x Fold(x-\u003ea-\u003ex)x(x-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Foldl",
          "name": "FoldM",
          "package": "foldl",
          "signature": "forall x . FoldM (x -\u003e a -\u003e m x) (m x) (x -\u003e m b)",
          "source": "src/Control-Foldl.html#FoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "FoldM",
          "normalized": "a b FoldM(b-\u003ec-\u003ed b)(d b)(b-\u003ed e)",
          "package": "foldl",
          "partial": "Fold",
          "signature": "forall x FoldM(x-\u003ea-\u003em x)(m x)(x-\u003em b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:FoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(all predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all elements satisfy the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "all",
          "package": "foldl",
          "signature": "(a -\u003e Bool) -\u003e Fold a Bool",
          "source": "src/Control-Foldl.html#all",
          "type": "function"
        },
        "index": {
          "description": "all predicate returns True if all elements satisfy the predicate False otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eFold a Bool",
          "package": "foldl",
          "signature": "(a-\u003eBool)-\u003eFold a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all elements are \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "and",
          "package": "foldl",
          "signature": "Fold Bool Bool",
          "source": "src/Control-Foldl.html#and",
          "type": "function"
        },
        "index": {
          "description": "Returns True if all elements are True False otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "and",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(any predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any element satisfies the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "any",
          "package": "foldl",
          "signature": "(a -\u003e Bool) -\u003e Fold a Bool",
          "source": "src/Control-Foldl.html#any",
          "type": "function"
        },
        "index": {
          "description": "any predicate returns True if any element satisfies the predicate False otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eFold a Bool",
          "package": "foldl",
          "signature": "(a-\u003eBool)-\u003eFold a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elem a)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the container has an element equal to \u003ccode\u003ea\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "elem",
          "package": "foldl",
          "signature": "a -\u003e Fold a Bool",
          "source": "src/Control-Foldl.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem returns True if the container has an element equal to False otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "elem",
          "normalized": "a-\u003eFold a Bool",
          "package": "foldl",
          "signature": "a-\u003eFold a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(elemIndex a)\u003c/code\u003e returns the index of the first element that equals \u003ccode\u003ea\u003c/code\u003e, or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no element matches\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "elemIndex",
          "package": "foldl",
          "signature": "a -\u003e Fold a (Maybe Int)",
          "source": "src/Control-Foldl.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "elemIndex returns the index of the first element that equals or Nothing if no element matches",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "elemIndex",
          "normalized": "a-\u003eFold a(Maybe Int)",
          "package": "foldl",
          "partial": "Index",
          "signature": "a-\u003eFold a(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(find predicate)\u003c/code\u003e returns the first element that satisfies the predicate or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no element satisfies the predicate\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "find",
          "package": "foldl",
          "signature": "(a -\u003e Bool) -\u003e Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#find",
          "type": "function"
        },
        "index": {
          "description": "find predicate returns the first element that satisfies the predicate or Nothing if no element satisfies the predicate",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eFold a(Maybe a)",
          "package": "foldl",
          "signature": "(a-\u003eBool)-\u003eFold a(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(findIndex predicate)\u003c/code\u003e returns the index of the first element that\n    satisfies the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no element satisfies the predicate\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "findIndex",
          "package": "foldl",
          "signature": "(a -\u003e Bool) -\u003e Fold a (Maybe Int)",
          "source": "src/Control-Foldl.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "findIndex predicate returns the index of the first element that satisfies the predicate or Nothing if no element satisfies the predicate",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eFold a(Maybe Int)",
          "package": "foldl",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eFold a(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a strict left \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "fold",
          "package": "foldl",
          "signature": "Fold a b -\u003e f a -\u003e b",
          "source": "src/Control-Foldl.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Apply strict left Fold to Foldable container",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "fold",
          "normalized": "Fold a b-\u003ec a-\u003eb",
          "package": "foldl",
          "signature": "Fold a b-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e, but monadic\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "foldM",
          "package": "foldl",
          "signature": "FoldM m a b -\u003e f a -\u003e m b",
          "source": "src/Control-Foldl.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Like fold but monadic",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "foldM",
          "normalized": "FoldM a b c-\u003ed b-\u003ea c",
          "package": "foldl",
          "signature": "FoldM m a b-\u003ef a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \"\u003ccode\u003efoldMap\u003c/code\u003e\" to a \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "foldMap",
          "package": "foldl",
          "signature": "(a -\u003e w) -\u003e (w -\u003e b) -\u003e Fold a b",
          "source": "src/Control-Foldl.html#foldMap",
          "type": "function"
        },
        "index": {
          "description": "Convert foldMap to Fold",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003eFold a c",
          "package": "foldl",
          "partial": "Map",
          "signature": "(a-\u003ew)-\u003e(w-\u003eb)-\u003eFold a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e, except with a more general \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "genericIndex",
          "package": "foldl",
          "signature": "i -\u003e Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#genericIndex",
          "type": "function"
        },
        "index": {
          "description": "Like index except with more general Integral argument",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "genericIndex",
          "normalized": "a-\u003eFold b(Maybe b)",
          "package": "foldl",
          "partial": "Index",
          "signature": "i-\u003eFold a(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, except with a more general \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e return value\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "genericLength",
          "package": "foldl",
          "signature": "Fold a b",
          "source": "src/Control-Foldl.html#genericLength",
          "type": "function"
        },
        "index": {
          "description": "Like length except with more general Num return value",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "genericLength",
          "package": "foldl",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first element of a container or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the container is\n    empty\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "head",
          "package": "foldl",
          "signature": "Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#head",
          "type": "function"
        },
        "index": {
          "description": "Get the first element of container or return Nothing if the container is empty",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "head",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpgrade a monadic fold to accept the \u003ccode\u003e\u003ca\u003eFoldM\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "impurely",
          "package": "foldl",
          "signature": "(forall x.  (x -\u003e a -\u003e m x) -\u003e m x -\u003e (x -\u003e m b) -\u003e r) -\u003e FoldM m a b -\u003e r",
          "source": "src/Control-Foldl.html#impurely",
          "type": "function"
        },
        "index": {
          "description": "Upgrade monadic fold to accept the FoldM type",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "impurely",
          "normalized": "(a b(c-\u003ed-\u003ee c)-\u003ee c-\u003e(c-\u003ee f)-\u003eg)-\u003eFoldM e d f-\u003eg",
          "package": "foldl",
          "signature": "(forall x.(x-\u003ea-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003er)-\u003eFoldM m a b-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:impurely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(index n)\u003c/code\u003e returns the \u003ccode\u003en\u003c/code\u003eth element of the container, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n    container has an insufficient number of elements\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "index",
          "package": "foldl",
          "signature": "Int -\u003e Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#index",
          "type": "function"
        },
        "index": {
          "description": "index returns the th element of the container or Nothing if the container has an insufficient number of elements",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "index",
          "normalized": "Int-\u003eFold a(Maybe a)",
          "package": "foldl",
          "signature": "Int-\u003eFold a(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last element of a container or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the container is\n    empty\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "last",
          "package": "foldl",
          "signature": "Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#last",
          "type": "function"
        },
        "index": {
          "description": "Get the last element of container or return Nothing if the container is empty",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "last",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the container\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "length",
          "package": "foldl",
          "signature": "Fold a Int",
          "source": "src/Control-Foldl.html#length",
          "type": "function"
        },
        "index": {
          "description": "Return the length of the container",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "length",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold all values into a list\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "list",
          "package": "foldl",
          "signature": "Fold a [a]",
          "source": "src/Control-Foldl.html#list",
          "type": "function"
        },
        "index": {
          "description": "Fold all values into list",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "list",
          "normalized": "Fold a[a]",
          "package": "foldl",
          "signature": "Fold a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the maximum element\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "maximum",
          "package": "foldl",
          "signature": "Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Computes the maximum element",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "maximum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold all values within a container using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "mconcat",
          "package": "foldl",
          "signature": "Fold a a",
          "source": "src/Control-Foldl.html#mconcat",
          "type": "function"
        },
        "index": {
          "description": "Fold all values within container using mappend and mempty",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "mconcat",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the minimum element\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "minimum",
          "package": "foldl",
          "signature": "Fold a (Maybe a)",
          "source": "src/Control-Foldl.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Computes the minimum element",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "minimum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(notElem a)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the container has an element equal to \u003ccode\u003ea\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "notElem",
          "package": "foldl",
          "signature": "a -\u003e Fold a Bool",
          "source": "src/Control-Foldl.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem returns False if the container has an element equal to True otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "notElem",
          "normalized": "a-\u003eFold a Bool",
          "package": "foldl",
          "partial": "Elem",
          "signature": "a-\u003eFold a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the container is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "null",
          "package": "foldl",
          "signature": "Fold a Bool",
          "source": "src/Control-Foldl.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the container is empty False otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "null",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any element is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "or",
          "package": "foldl",
          "signature": "Fold Bool Bool",
          "source": "src/Control-Foldl.html#or",
          "type": "function"
        },
        "index": {
          "description": "Returns True if any element is True False otherwise",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "or",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(premap f folder)\u003c/code\u003e returns a new \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e where f is applied at each step\n    \u003ccode\u003efold (premap f folder) list\u003c/code\u003e == \u003ccode\u003efold folder (map f list)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "premap",
          "package": "foldl",
          "signature": "(a -\u003e b) -\u003e Fold b r -\u003e Fold a r",
          "source": "src/Control-Foldl.html#premap",
          "type": "function"
        },
        "index": {
          "description": "premap folder returns new Fold where is applied at each step fold premap folder list fold folder map list",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "premap",
          "normalized": "(a-\u003eb)-\u003eFold b c-\u003eFold a c",
          "package": "foldl",
          "signature": "(a-\u003eb)-\u003eFold b r-\u003eFold a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:premap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the product all elements\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "product",
          "package": "foldl",
          "signature": "Fold a a",
          "source": "src/Control-Foldl.html#product",
          "type": "function"
        },
        "index": {
          "description": "Computes the product all elements",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "product",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpgrade a fold to accept the \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "purely",
          "package": "foldl",
          "signature": "(forall x.  (x -\u003e a -\u003e x) -\u003e x -\u003e (x -\u003e b) -\u003e r) -\u003e Fold a b -\u003e r",
          "source": "src/Control-Foldl.html#purely",
          "type": "function"
        },
        "index": {
          "description": "Upgrade fold to accept the Fold type",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "purely",
          "normalized": "(a b(c-\u003ed-\u003ec)-\u003ec-\u003e(c-\u003ee)-\u003ef)-\u003eFold d e-\u003ef",
          "package": "foldl",
          "signature": "(forall x.(x-\u003ea-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003er)-\u003eFold a b-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:purely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the sum of all elements\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "sum",
          "package": "foldl",
          "signature": "Fold a a",
          "source": "src/Control-Foldl.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Computes the sum of all elements",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "sum",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold all values into a vector\n\u003c/p\u003e",
          "module": "Control.Foldl",
          "name": "vector",
          "package": "foldl",
          "signature": "FoldM m a (v a)",
          "source": "src/Control-Foldl.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Fold all values into vector",
          "hierarchy": "Control Foldl",
          "module": "Control.Foldl",
          "name": "vector",
          "package": "foldl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:vector"
      }
    }
  ]
]