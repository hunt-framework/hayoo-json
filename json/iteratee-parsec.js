[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-Chunk.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing simple implementation based on accumulating chunks.\nIt is optimised for short parsers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Iteratee.Chunk",
        "fct-package": "iteratee-parsec",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Iteratee-Chunk.html",
        "fct-type": "module",
        "title": "Chunk"
      },
      "index": {
        "description": "Module providing simple implementation based on accumulating chunks It is optimised for short parsers",
        "hierarchy": "Text Parsec Iteratee Chunk",
        "module": "Text.Parsec.Iteratee.Chunk",
        "name": "Chunk",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-Chunk.html#v:safeParsecIterateeShort",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Iteratee from a ParsecT parser.\n This is most efficient for relatively smaller parsers (\u003c 1e5 chars),\n and becomes increasingly inefficient as the parser size increases.\n If the parse fails, no input is consumed.  If the parse succeeds,\n any data remaining after the parse is available to the iteratee.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.Chunk",
        "fct-package": "iteratee-parsec",
        "fct-signature": "ParsecT Int u (Iteratee s m) a -\u003e u -\u003e SourceName -\u003e Iteratee s m (Either ParseError a)",
        "fct-source": "src/Text-Parsec-Iteratee-Chunk.html#safeParsecIterateeShort",
        "fct-type": "function",
        "title": "safeParsecIterateeShort"
      },
      "index": {
        "description": "Create an Iteratee from ParsecT parser This is most efficient for relatively smaller parsers e5 chars and becomes increasingly inefficient as the parser size increases If the parse fails no input is consumed If the parse succeeds any data remaining after the parse is available to the iteratee",
        "hierarchy": "Text Parsec Iteratee Chunk",
        "module": "Text.Parsec.Iteratee.Chunk",
        "name": "safeParsecIterateeShort",
        "normalized": "ParsecT Int a(Iteratee b c)d-\u003ea-\u003eSourceName-\u003eIteratee b c(Either ParseError d)",
        "package": "iteratee-parsec",
        "partial": "Parsec Iteratee Short",
        "signature": "ParsecT Int u(Iteratee s m)a-\u003eu-\u003eSourceName-\u003eIteratee s m(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing simple implementation based on mutable linked list.\nIt is optimised for longer parsers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Iteratee-LinkedList.html",
        "fct-type": "module",
        "title": "LinkedList"
      },
      "index": {
        "description": "Module providing simple implementation based on mutable linked list It is optimised for longer parsers",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "LinkedList",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Linked List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eCursor holds current value and reference to possible next cursor\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Iteratee-LinkedList.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "Cursor holds current value and reference to possible next cursor",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "Cursor",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#t:NextCursor",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the 3 possible states of next cursor - existence, non-existence\n and not being evaluated\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "data",
        "fct-source": "src/Text-Parsec-Iteratee-LinkedList.html#NextCursor",
        "fct-type": "data",
        "title": "NextCursor"
      },
      "index": {
        "description": "Specify the possible states of next cursor existence non-existence and not being evaluated",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "NextCursor",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Next Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#t:Reference",
      "description": {
        "fct-descr": "\u003cp\u003eClass connecting mutable variable and monad it exists in.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Reference"
      },
      "index": {
        "description": "Class connecting mutable variable and monad it exists in",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "Reference",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:mkCursor",
      "description": {
        "fct-descr": "\u003cp\u003eCreates new cursor\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "m (Cursor r m s el)",
        "fct-source": "src/Text-Parsec-Iteratee-LinkedList.html#mkCursor",
        "fct-type": "function",
        "title": "mkCursor"
      },
      "index": {
        "description": "Creates new cursor",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "mkCursor",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:modifyRef",
      "description": {
        "fct-descr": "\u003cp\u003eModify the reference. Default implementation is provided but it MUST\n be overloaded if the reference is atomic to provide an atomic write.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "modifyRef",
        "fct-type": "method",
        "title": "modifyRef"
      },
      "index": {
        "description": "Modify the reference Default implementation is provided but it MUST be overloaded if the reference is atomic to provide an atomic write",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "modifyRef",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:newRef",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new reference.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "newRef",
        "fct-type": "method",
        "title": "newRef"
      },
      "index": {
        "description": "Create new reference",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "newRef",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:parsecIteratee",
      "description": {
        "fct-descr": "\u003cp\u003eRuns parser. If it suceed the remaining part of stream stands in stream,\n however if it fails the stream is not in defined state.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "ParsecT (Cursor r m c el) u (Iteratee c m) a-\u003e u-\u003e SourceName-\u003e Iteratee c m (Either ParseError a)",
        "fct-type": "function",
        "title": "parsecIteratee"
      },
      "index": {
        "description": "Runs parser If it suceed the remaining part of stream stands in stream however if it fails the stream is not in defined state",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "parsecIteratee",
        "normalized": "ParsecT(Cursor a b c d)e(Iteratee c b)f-\u003ee-\u003eSourceName-\u003eIteratee c b(Either ParseError f)",
        "package": "iteratee-parsec",
        "partial": "Iteratee",
        "signature": "ParsecT(Cursor r m c el)u(Iteratee c m)a-\u003eu-\u003eSourceName-\u003eIteratee c m(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:readRef",
      "description": {
        "fct-descr": "\u003cp\u003eReads a reference.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "readRef",
        "fct-type": "method",
        "title": "readRef"
      },
      "index": {
        "description": "Reads reference",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "readRef",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:safeParsecIteratee",
      "description": {
        "fct-descr": "\u003cp\u003eRuns parser. If it suceed the remaining part of stream stands in stream,\n however if it fails everything stands in stream.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "ParsecT (Cursor r m c el) u (Iteratee c m) a-\u003e u-\u003e SourceName-\u003e Iteratee c m (Either ParseError a)",
        "fct-type": "function",
        "title": "safeParsecIteratee"
      },
      "index": {
        "description": "Runs parser If it suceed the remaining part of stream stands in stream however if it fails everything stands in stream",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "safeParsecIteratee",
        "normalized": "ParsecT(Cursor a b c d)e(Iteratee c b)f-\u003ee-\u003eSourceName-\u003eIteratee c b(Either ParseError f)",
        "package": "iteratee-parsec",
        "partial": "Parsec Iteratee",
        "signature": "ParsecT(Cursor r m c el)u(Iteratee c m)a-\u003eu-\u003eSourceName-\u003eIteratee c m(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:writeRef",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to reference.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee.LinkedList",
        "fct-package": "iteratee-parsec",
        "fct-signature": "writeRef",
        "fct-type": "method",
        "title": "writeRef"
      },
      "index": {
        "description": "Write to reference",
        "hierarchy": "Text Parsec Iteratee LinkedList",
        "module": "Text.Parsec.Iteratee.LinkedList",
        "name": "writeRef",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#",
      "description": {
        "fct-module": "Text.Parsec.Iteratee",
        "fct-package": "iteratee-parsec",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Iteratee.html",
        "fct-type": "module",
        "title": "Iteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Iteratee",
        "module": "Text.Parsec.Iteratee",
        "name": "Iteratee",
        "normalized": "",
        "package": "iteratee-parsec",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#v:parsecIteratee",
      "description": {
        "fct-descr": "\u003cp\u003eRuns parser. If it suceed the remaining part of stream stands in stream,\n however if it fails the stream is not in defined state.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee",
        "fct-package": "iteratee-parsec",
        "fct-signature": "ParsecT (Cursor r m c el) u (Iteratee c m) a-\u003e u-\u003e SourceName-\u003e Iteratee c m (Either ParseError a)",
        "fct-type": "function",
        "title": "parsecIteratee"
      },
      "index": {
        "description": "Runs parser If it suceed the remaining part of stream stands in stream however if it fails the stream is not in defined state",
        "hierarchy": "Text Parsec Iteratee",
        "module": "Text.Parsec.Iteratee",
        "name": "parsecIteratee",
        "normalized": "ParsecT(Cursor a b c d)e(Iteratee c b)f-\u003ee-\u003eSourceName-\u003eIteratee c b(Either ParseError f)",
        "package": "iteratee-parsec",
        "partial": "Iteratee",
        "signature": "ParsecT(Cursor r m c el)u(Iteratee c m)a-\u003eu-\u003eSourceName-\u003eIteratee c m(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#v:safeParsecIteratee",
      "description": {
        "fct-descr": "\u003cp\u003eRuns parser. If it suceed the remaining part of stream stands in stream,\n however if it fails everything stands in stream.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee",
        "fct-package": "iteratee-parsec",
        "fct-signature": "ParsecT (Cursor r m c el) u (Iteratee c m) a-\u003e u-\u003e SourceName-\u003e Iteratee c m (Either ParseError a)",
        "fct-type": "function",
        "title": "safeParsecIteratee"
      },
      "index": {
        "description": "Runs parser If it suceed the remaining part of stream stands in stream however if it fails everything stands in stream",
        "hierarchy": "Text Parsec Iteratee",
        "module": "Text.Parsec.Iteratee",
        "name": "safeParsecIteratee",
        "normalized": "ParsecT(Cursor a b c d)e(Iteratee c b)f-\u003ee-\u003eSourceName-\u003eIteratee c b(Either ParseError f)",
        "package": "iteratee-parsec",
        "partial": "Parsec Iteratee",
        "signature": "ParsecT(Cursor r m c el)u(Iteratee c m)a-\u003eu-\u003eSourceName-\u003eIteratee c m(Either ParseError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#v:safeParsecIterateeShort",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Iteratee from a ParsecT parser.\n This is most efficient for relatively smaller parsers (\u003c 1e5 chars),\n and becomes increasingly inefficient as the parser size increases.\n If the parse fails, no input is consumed.  If the parse succeeds,\n any data remaining after the parse is available to the iteratee.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Iteratee",
        "fct-package": "iteratee-parsec",
        "fct-signature": "ParsecT Int u (Iteratee s m) a -\u003e u -\u003e SourceName -\u003e Iteratee s m (Either ParseError a)",
        "fct-source": "src/Text-Parsec-Iteratee-Chunk.html#safeParsecIterateeShort",
        "fct-type": "function",
        "title": "safeParsecIterateeShort"
      },
      "index": {
        "description": "Create an Iteratee from ParsecT parser This is most efficient for relatively smaller parsers e5 chars and becomes increasingly inefficient as the parser size increases If the parse fails no input is consumed If the parse succeeds any data remaining after the parse is available to the iteratee",
        "hierarchy": "Text Parsec Iteratee",
        "module": "Text.Parsec.Iteratee",
        "name": "safeParsecIterateeShort",
        "normalized": "ParsecT Int a(Iteratee b c)d-\u003ea-\u003eSourceName-\u003eIteratee b c(Either ParseError d)",
        "package": "iteratee-parsec",
        "partial": "Parsec Iteratee Short",
        "signature": "ParsecT Int u(Iteratee s m)a-\u003eu-\u003eSourceName-\u003eIteratee s m(Either ParseError a)"
      }
    }
  }
]