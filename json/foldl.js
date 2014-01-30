[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFolds for byte streams\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "module",
        "fct-source": "src/Control-Foldl-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Folds for byte streams",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "foldl",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(all predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all bytes satisfy the predicate, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n    otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString Bool",
        "fct-source": "src/Control-Foldl-ByteString.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all predicate returns True if all bytes satisfy the predicate False otherwise",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "all",
        "normalized": "(Word-\u003eBool)-\u003eFold ByteString Bool",
        "package": "foldl",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eFold ByteString Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(any predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any byte satisfies the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString Bool",
        "fct-source": "src/Control-Foldl-ByteString.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any predicate returns True if any byte satisfies the predicate False otherwise",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "any",
        "normalized": "(Word-\u003eBool)-\u003eFold ByteString Bool",
        "package": "foldl",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eFold ByteString Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(elem w8)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the byte stream has a byte equal to \u003ccode\u003ew8\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Word8 -\u003e Fold ByteString Bool",
        "fct-source": "src/Control-Foldl-ByteString.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "elem w8 returns True if the byte stream has byte equal to w8 False otherwise",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "elem",
        "normalized": "Word-\u003eFold ByteString Bool",
        "package": "foldl",
        "partial": "",
        "signature": "Word-\u003eFold ByteString Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(elemIndex w8)\u003c/code\u003e returns the index of the first byte that equals \u003ccode\u003ew8\u003c/code\u003e, or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no byte matches\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Word8 -\u003e Fold ByteString (Maybe n)",
        "fct-source": "src/Control-Foldl-ByteString.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "elemIndex w8 returns the index of the first byte that equals w8 or Nothing if no byte matches",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "elemIndex",
        "normalized": "Word-\u003eFold ByteString(Maybe a)",
        "package": "foldl",
        "partial": "Index",
        "signature": "Word-\u003eFold ByteString(Maybe n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(find predicate)\u003c/code\u003e returns the first byte that satisfies the predicate or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no byte satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString (Maybe Word8)",
        "fct-source": "src/Control-Foldl-ByteString.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "find predicate returns the first byte that satisfies the predicate or Nothing if no byte satisfies the predicate",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "find",
        "normalized": "(Word-\u003eBool)-\u003eFold ByteString(Maybe Word)",
        "package": "foldl",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eFold ByteString(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(findIndex predicate)\u003c/code\u003e returns the index of the first byte that satisfies\n    the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no byte satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Fold ByteString (Maybe n)",
        "fct-source": "src/Control-Foldl-ByteString.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "findIndex predicate returns the index of the first byte that satisfies the predicate or Nothing if no byte satisfies the predicate",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "findIndex",
        "normalized": "(Word-\u003eBool)-\u003eFold ByteString(Maybe a)",
        "package": "foldl",
        "partial": "Index",
        "signature": "(Word-\u003eBool)-\u003eFold ByteString(Maybe n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first byte of a byte stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream is\n    empty\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Fold ByteString (Maybe Word8)",
        "fct-source": "src/Control-Foldl-ByteString.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Get the first byte of byte stream or return Nothing if the stream is empty",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "head",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(index n)\u003c/code\u003e returns the \u003ccode\u003en\u003c/code\u003eth byte of the byte stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n    stream has an insufficient number of bytes\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "n -\u003e Fold ByteString (Maybe Word8)",
        "fct-source": "src/Control-Foldl-ByteString.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "index returns the th byte of the byte stream or Nothing if the stream has an insufficient number of bytes",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "index",
        "normalized": "a-\u003eFold ByteString(Maybe Word)",
        "package": "foldl",
        "partial": "",
        "signature": "n-\u003eFold ByteString(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last byte of a byte stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the byte stream is\n    empty\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Fold ByteString (Maybe Word8)",
        "fct-source": "src/Control-Foldl-ByteString.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Get the last byte of byte stream or return Nothing if the byte stream is empty",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "last",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the length of the byte stream in bytes\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Fold ByteString n",
        "fct-source": "src/Control-Foldl-ByteString.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Return the length of the byte stream in bytes",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "length",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the maximum byte\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Fold ByteString (Maybe Word8)",
        "fct-source": "src/Control-Foldl-ByteString.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "Computes the maximum byte",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "maximum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the minimum byte\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Fold ByteString (Maybe Word8)",
        "fct-source": "src/Control-Foldl-ByteString.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "Computes the minimum byte",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "minimum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(notElem w8)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the byte stream has a byte equal to \u003ccode\u003ew8\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Word8 -\u003e Fold ByteString Bool",
        "fct-source": "src/Control-Foldl-ByteString.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "notElem w8 returns False if the byte stream has byte equal to w8 True otherwise",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "notElem",
        "normalized": "Word-\u003eFold ByteString Bool",
        "package": "foldl",
        "partial": "Elem",
        "signature": "Word-\u003eFold ByteString Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-ByteString.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the byte stream is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.ByteString",
        "fct-package": "foldl",
        "fct-signature": "Fold ByteString Bool",
        "fct-source": "src/Control-Foldl-ByteString.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Returns True if the byte stream is empty False otherwise",
        "hierarchy": "Control Foldl ByteString",
        "module": "Control.Foldl.ByteString",
        "name": "null",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFolds for text streams\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "module",
        "fct-source": "src/Control-Foldl-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Folds for text streams",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "Text",
        "normalized": "",
        "package": "foldl",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(all predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all characters satisfy the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "(Char -\u003e Bool) -\u003e Fold Text Bool",
        "fct-source": "src/Control-Foldl-Text.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all predicate returns True if all characters satisfy the predicate False otherwise",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "all",
        "normalized": "(Char-\u003eBool)-\u003eFold Text Bool",
        "package": "foldl",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eFold Text Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(any predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any character satisfies the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "(Char -\u003e Bool) -\u003e Fold Text Bool",
        "fct-source": "src/Control-Foldl-Text.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any predicate returns True if any character satisfies the predicate False otherwise",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "any",
        "normalized": "(Char-\u003eBool)-\u003eFold Text Bool",
        "package": "foldl",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eFold Text Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(elem c)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the text stream has a character equal to \u003ccode\u003ec\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Char -\u003e Fold Text Bool",
        "fct-source": "src/Control-Foldl-Text.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "elem returns True if the text stream has character equal to False otherwise",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "elem",
        "normalized": "Char-\u003eFold Text Bool",
        "package": "foldl",
        "partial": "",
        "signature": "Char-\u003eFold Text Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(elemIndex c)\u003c/code\u003e returns the index of the first character that equals \u003ccode\u003ec\u003c/code\u003e,\n    or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no character matches\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Char -\u003e Fold Text (Maybe n)",
        "fct-source": "src/Control-Foldl-Text.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "elemIndex returns the index of the first character that equals or Nothing if no character matches",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "elemIndex",
        "normalized": "Char-\u003eFold Text(Maybe a)",
        "package": "foldl",
        "partial": "Index",
        "signature": "Char-\u003eFold Text(Maybe n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(find predicate)\u003c/code\u003e returns the first character that satisfies the predicate\n    or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no character satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "(Char -\u003e Bool) -\u003e Fold Text (Maybe Char)",
        "fct-source": "src/Control-Foldl-Text.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "find predicate returns the first character that satisfies the predicate or Nothing if no character satisfies the predicate",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "find",
        "normalized": "(Char-\u003eBool)-\u003eFold Text(Maybe Char)",
        "package": "foldl",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eFold Text(Maybe Char)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(findIndex predicate)\u003c/code\u003e returns the index of the first character that\n    satisfies the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no character satisfies the\n    predicate\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "(Char -\u003e Bool) -\u003e Fold Text (Maybe n)",
        "fct-source": "src/Control-Foldl-Text.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "findIndex predicate returns the index of the first character that satisfies the predicate or Nothing if no character satisfies the predicate",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "findIndex",
        "normalized": "(Char-\u003eBool)-\u003eFold Text(Maybe a)",
        "package": "foldl",
        "partial": "Index",
        "signature": "(Char-\u003eBool)-\u003eFold Text(Maybe n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first character of a text stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n    is empty\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Fold Text (Maybe Char)",
        "fct-source": "src/Control-Foldl-Text.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Get the first character of text stream or return Nothing if the stream is empty",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "head",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(index n)\u003c/code\u003e returns the \u003ccode\u003en\u003c/code\u003eth character of the text stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n    the stream has an insufficient number of characters\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "n -\u003e Fold Text (Maybe Char)",
        "fct-source": "src/Control-Foldl-Text.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "index returns the th character of the text stream or Nothing if the stream has an insufficient number of characters",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "index",
        "normalized": "a-\u003eFold Text(Maybe Char)",
        "package": "foldl",
        "partial": "",
        "signature": "n-\u003eFold Text(Maybe Char)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last character of a text stream or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the text\n    stream is empty\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Fold Text (Maybe Char)",
        "fct-source": "src/Control-Foldl-Text.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Get the last character of text stream or return Nothing if the text stream is empty",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "last",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the length of the text stream in characters\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Fold Text n",
        "fct-source": "src/Control-Foldl-Text.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Return the length of the text stream in characters",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "length",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the maximum character\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Fold Text (Maybe Char)",
        "fct-source": "src/Control-Foldl-Text.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "Computes the maximum character",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "maximum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the minimum character\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Fold Text (Maybe Char)",
        "fct-source": "src/Control-Foldl-Text.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "Computes the minimum character",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "minimum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(notElem c)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the text stream has a character equal to\n    \u003ccode\u003ec\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Char -\u003e Fold Text Bool",
        "fct-source": "src/Control-Foldl-Text.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "notElem returns False if the text stream has character equal to True otherwise",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "notElem",
        "normalized": "Char-\u003eFold Text Bool",
        "package": "foldl",
        "partial": "Elem",
        "signature": "Char-\u003eFold Text Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl-Text.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the text stream is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl.Text",
        "fct-package": "foldl",
        "fct-signature": "Fold Text Bool",
        "fct-source": "src/Control-Foldl-Text.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Returns True if the text stream is empty False otherwise",
        "hierarchy": "Control Foldl Text",
        "module": "Control.Foldl.Text",
        "name": "null",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient and streaming left folds that you can combine\n    using \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e style.\n\u003c/p\u003e\u003cp\u003eImport this module qualified to avoid clashing with the Prelude:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Control.Foldl as L\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e to apply a \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e to a list:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.fold L.sum [1..100]\n\u003c/code\u003e\u003c/strong\u003e5050\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003es, so you can combine them using \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\n    combinators:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Control.Applicative\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet average = (/) \u003c$\u003e L.sum \u003c*\u003e L.genericLength\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThese combined folds will still traverse the list only once, streaming\n    efficiently over the list in constant space without space leaks:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.fold average [1..10000000]\n\u003c/code\u003e\u003c/strong\u003e5000000.5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eL.fold ((,) \u003c$\u003e L.minimum \u003c*\u003e L.maximum) [1..10000000]\n\u003c/code\u003e\u003c/strong\u003e(Just 1,Just 10000000)\n\u003c/pre\u003e\u003cp\u003eYou can also unpack the \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e type if you want to extract the individual\n    components of combined folds for use with your own customized folding\n    utilities:\n\u003c/p\u003e\u003cpre\u003e case ((/) \u003c$\u003e L.sum \u003c*\u003e L.genericLength) of\n     L.Foldl step begin done -\u003e ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "module",
        "fct-source": "src/Control-Foldl.html",
        "fct-type": "module",
        "title": "Foldl"
      },
      "index": {
        "description": "This module provides efficient and streaming left folds that you can combine using Applicative style Import this module qualified to avoid clashing with the Prelude import qualified Control.Foldl as Use fold to apply Fold to list L.fold L.sum Fold are Applicative so you can combine them using Applicative combinators import Control.Applicative let average L.sum L.genericLength These combined folds will still traverse the list only once streaming efficiently over the list in constant space without space leaks L.fold average L.fold L.minimum L.maximum Just Just You can also unpack the Fold type if you want to extract the individual components of combined folds for use with your own customized folding utilities case L.sum L.genericLength of L.Foldl step begin done",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "Foldl",
        "normalized": "",
        "package": "foldl",
        "partial": "Foldl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#t:Fold",
      "description": {
        "fct-descr": "\u003cp\u003eEfficient representation of a left fold that preserves the fold's step\n    function, initial accumulator, and extraction function\n\u003c/p\u003e\u003cp\u003eThis allows the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance to assemble derived folds that\n    traverse the container only once\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "data",
        "fct-source": "src/Control-Foldl.html#Fold",
        "fct-type": "data",
        "title": "Fold"
      },
      "index": {
        "description": "Efficient representation of left fold that preserves the fold step function initial accumulator and extraction function This allows the Applicative instance to assemble derived folds that traverse the container only once",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "Fold",
        "normalized": "",
        "package": "foldl",
        "partial": "Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#t:FoldM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e, but monadic\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "data",
        "fct-source": "src/Control-Foldl.html#FoldM",
        "fct-type": "data",
        "title": "FoldM"
      },
      "index": {
        "description": "Like Fold but monadic",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "FoldM",
        "normalized": "",
        "package": "foldl",
        "partial": "Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:Fold",
      "description": {
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "forall x . Fold (x -\u003e a -\u003e x) x (x -\u003e b)",
        "fct-source": "src/Control-Foldl.html#Fold",
        "fct-type": "function",
        "title": "Fold"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "Fold",
        "normalized": "a b Fold(b-\u003ec-\u003eb)b(b-\u003ed)",
        "package": "foldl",
        "partial": "Fold",
        "signature": "forall x Fold(x-\u003ea-\u003ex)x(x-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:FoldM",
      "description": {
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "forall x . FoldM (x -\u003e a -\u003e m x) (m x) (x -\u003e m b)",
        "fct-source": "src/Control-Foldl.html#FoldM",
        "fct-type": "function",
        "title": "FoldM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "FoldM",
        "normalized": "a b FoldM(b-\u003ec-\u003ed b)(d b)(b-\u003ed e)",
        "package": "foldl",
        "partial": "Fold",
        "signature": "forall x FoldM(x-\u003ea-\u003em x)(m x)(x-\u003em b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(all predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all elements satisfy the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(a -\u003e Bool) -\u003e Fold a Bool",
        "fct-source": "src/Control-Foldl.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all predicate returns True if all elements satisfy the predicate False otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eFold a Bool",
        "package": "foldl",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eFold a Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all elements are \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold Bool Bool",
        "fct-source": "src/Control-Foldl.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Returns True if all elements are True False otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "and",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(any predicate)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any element satisfies the predicate,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(a -\u003e Bool) -\u003e Fold a Bool",
        "fct-source": "src/Control-Foldl.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any predicate returns True if any element satisfies the predicate False otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003eFold a Bool",
        "package": "foldl",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eFold a Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(elem a)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the container has an element equal to \u003ccode\u003ea\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "a -\u003e Fold a Bool",
        "fct-source": "src/Control-Foldl.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "elem returns True if the container has an element equal to False otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "elem",
        "normalized": "a-\u003eFold a Bool",
        "package": "foldl",
        "partial": "",
        "signature": "a-\u003eFold a Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(elemIndex a)\u003c/code\u003e returns the index of the first element that equals \u003ccode\u003ea\u003c/code\u003e, or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no element matches\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "a -\u003e Fold a (Maybe Int)",
        "fct-source": "src/Control-Foldl.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "elemIndex returns the index of the first element that equals or Nothing if no element matches",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "elemIndex",
        "normalized": "a-\u003eFold a(Maybe Int)",
        "package": "foldl",
        "partial": "Index",
        "signature": "a-\u003eFold a(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(find predicate)\u003c/code\u003e returns the first element that satisfies the predicate or\n    \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no element satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(a -\u003e Bool) -\u003e Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "find predicate returns the first element that satisfies the predicate or Nothing if no element satisfies the predicate",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "find",
        "normalized": "(a-\u003eBool)-\u003eFold a(Maybe a)",
        "package": "foldl",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eFold a(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(findIndex predicate)\u003c/code\u003e returns the index of the first element that\n    satisfies the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no element satisfies the predicate\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(a -\u003e Bool) -\u003e Fold a (Maybe Int)",
        "fct-source": "src/Control-Foldl.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "findIndex predicate returns the index of the first element that satisfies the predicate or Nothing if no element satisfies the predicate",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "findIndex",
        "normalized": "(a-\u003eBool)-\u003eFold a(Maybe Int)",
        "package": "foldl",
        "partial": "Index",
        "signature": "(a-\u003eBool)-\u003eFold a(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eApply a strict left \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container\n\u003c/p\u003e\u003cp\u003eMuch slower than \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e on lists because \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e operations currently do\n    not trigger \u003ccode\u003ebuild/foldr\u003c/code\u003e fusion\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a b -\u003e f a -\u003e b",
        "fct-source": "src/Control-Foldl.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Apply strict left Fold to Foldable container Much slower than fold on lists because Foldable operations currently do not trigger build foldr fusion",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "fold",
        "normalized": "Fold a b-\u003ec a-\u003eb",
        "package": "foldl",
        "partial": "",
        "signature": "Fold a b-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e, but monadic\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "FoldM m a b -\u003e f a -\u003e m b",
        "fct-source": "src/Control-Foldl.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "Like fold but monadic",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "foldM",
        "normalized": "FoldM a b c-\u003ed b-\u003ea c",
        "package": "foldl",
        "partial": "",
        "signature": "FoldM m a b-\u003ef a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \"\u003ccode\u003efoldMap\u003c/code\u003e\" to a \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(a -\u003e w) -\u003e (w -\u003e b) -\u003e Fold a b",
        "fct-source": "src/Control-Foldl.html#foldMap",
        "fct-type": "function",
        "title": "foldMap"
      },
      "index": {
        "description": "Convert foldMap to Fold",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "foldMap",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003eFold a c",
        "package": "foldl",
        "partial": "Map",
        "signature": "(a-\u003ew)-\u003e(w-\u003eb)-\u003eFold a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:genericIndex",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e, except with a more general \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "i -\u003e Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#genericIndex",
        "fct-type": "function",
        "title": "genericIndex"
      },
      "index": {
        "description": "Like index except with more general Integral argument",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "genericIndex",
        "normalized": "a-\u003eFold b(Maybe b)",
        "package": "foldl",
        "partial": "Index",
        "signature": "i-\u003eFold a(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:genericLength",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, except with a more general \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e return value\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a b",
        "fct-source": "src/Control-Foldl.html#genericLength",
        "fct-type": "function",
        "title": "genericLength"
      },
      "index": {
        "description": "Like length except with more general Num return value",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "genericLength",
        "normalized": "",
        "package": "foldl",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first element of a container or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the container is\n    empty\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Get the first element of container or return Nothing if the container is empty",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "head",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:impurely",
      "description": {
        "fct-descr": "\u003cp\u003eUpgrade a monadic fold to accept the \u003ccode\u003e\u003ca\u003eFoldM\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(forall x.  (x -\u003e a -\u003e m x) -\u003e m x -\u003e (x -\u003e m b) -\u003e r) -\u003e FoldM m a b -\u003e r",
        "fct-source": "src/Control-Foldl.html#impurely",
        "fct-type": "function",
        "title": "impurely"
      },
      "index": {
        "description": "Upgrade monadic fold to accept the FoldM type",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "impurely",
        "normalized": "(a b(c-\u003ed-\u003ee c)-\u003ee c-\u003e(c-\u003ee f)-\u003eg)-\u003eFoldM e d f-\u003eg",
        "package": "foldl",
        "partial": "",
        "signature": "(forall x.(x-\u003ea-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003er)-\u003eFoldM m a b-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(index n)\u003c/code\u003e returns the \u003ccode\u003en\u003c/code\u003eth element of the container, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n    container has an insufficient number of elements\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Int -\u003e Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "index returns the th element of the container or Nothing if the container has an insufficient number of elements",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "index",
        "normalized": "Int-\u003eFold a(Maybe a)",
        "package": "foldl",
        "partial": "",
        "signature": "Int-\u003eFold a(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last element of a container or return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the container is\n    empty\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Get the last element of container or return Nothing if the container is empty",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "last",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the length of the container\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a Int",
        "fct-source": "src/Control-Foldl.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Return the length of the container",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "length",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the maximum element\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "Computes the maximum element",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "maximum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold all values within a container using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a a",
        "fct-source": "src/Control-Foldl.html#mconcat",
        "fct-type": "function",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold all values within container using mappend and mempty",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "mconcat",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the minimum element\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a (Maybe a)",
        "fct-source": "src/Control-Foldl.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "Computes the minimum element",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "minimum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(notElem a)\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the container has an element equal to \u003ccode\u003ea\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "a -\u003e Fold a Bool",
        "fct-source": "src/Control-Foldl.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "notElem returns False if the container has an element equal to True otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "notElem",
        "normalized": "a-\u003eFold a Bool",
        "package": "foldl",
        "partial": "Elem",
        "signature": "a-\u003eFold a Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the container is empty, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a Bool",
        "fct-source": "src/Control-Foldl.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Returns True if the container is empty False otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "null",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any element is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold Bool Bool",
        "fct-source": "src/Control-Foldl.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Returns True if any element is True False otherwise",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "or",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the product all elements\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a a",
        "fct-source": "src/Control-Foldl.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "Computes the product all elements",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "product",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:purely",
      "description": {
        "fct-descr": "\u003cp\u003eUpgrade a fold to accept the \u003ccode\u003e\u003ca\u003eFold\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "(forall x.  (x -\u003e a -\u003e x) -\u003e x -\u003e (x -\u003e b) -\u003e r) -\u003e Fold a b -\u003e r",
        "fct-source": "src/Control-Foldl.html#purely",
        "fct-type": "function",
        "title": "purely"
      },
      "index": {
        "description": "Upgrade fold to accept the Fold type",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "purely",
        "normalized": "(a b(c-\u003ed-\u003ec)-\u003ec-\u003e(c-\u003ee)-\u003ef)-\u003eFold d e-\u003ef",
        "package": "foldl",
        "partial": "",
        "signature": "(forall x.(x-\u003ea-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003er)-\u003eFold a b-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/foldl/docs/Control-Foldl.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the sum of all elements\n\u003c/p\u003e",
        "fct-module": "Control.Foldl",
        "fct-package": "foldl",
        "fct-signature": "Fold a a",
        "fct-source": "src/Control-Foldl.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Computes the sum of all elements",
        "hierarchy": "Control Foldl",
        "module": "Control.Foldl",
        "name": "sum",
        "normalized": "",
        "package": "foldl",
        "partial": "",
        "signature": ""
      }
    }
  }
]