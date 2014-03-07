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
        "word": "iteratee-parsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing simple implementation based on accumulating chunks.\nIt is optimised for short parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Iteratee.Chunk",
          "name": "Chunk",
          "package": "iteratee-parsec",
          "source": "src/Text-Parsec-Iteratee-Chunk.html",
          "type": "module"
        },
        "index": {
          "description": "Module providing simple implementation based on accumulating chunks It is optimised for short parsers",
          "hierarchy": "Text Parsec Iteratee Chunk",
          "module": "Text.Parsec.Iteratee.Chunk",
          "name": "Chunk",
          "package": "iteratee-parsec",
          "partial": "Chunk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-Chunk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Iteratee from a ParsecT parser.\n This is most efficient for relatively smaller parsers (\u003c 1e5 chars),\n and becomes increasingly inefficient as the parser size increases.\n If the parse fails, no input is consumed.  If the parse succeeds,\n any data remaining after the parse is available to the iteratee.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Iteratee.Chunk\",\"Text.Parsec.Iteratee\"]",
          "name": "safeParsecIterateeShort",
          "package": "iteratee-parsec",
          "signature": "ParsecT Int u (Iteratee s m) a -\u003e u -\u003e SourceName -\u003e Iteratee s m (Either ParseError a)",
          "source": "src/Text-Parsec-Iteratee-Chunk.html#safeParsecIterateeShort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-Chunk.html#v:safeParsecIterateeShort\",\"http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#v:safeParsecIterateeShort\"]"
        },
        "index": {
          "description": "Create an Iteratee from ParsecT parser This is most efficient for relatively smaller parsers e5 chars and becomes increasingly inefficient as the parser size increases If the parse fails no input is consumed If the parse succeeds any data remaining after the parse is available to the iteratee",
          "hierarchy": "Text Parsec Iteratee Chunk",
          "module": "Text.Parsec.Iteratee.Chunk",
          "name": "safeParsecIterateeShort",
          "normalized": "ParsecT Int a(Iteratee b c)d-\u003ea-\u003eSourceName-\u003eIteratee b c(Either ParseError d)",
          "package": "iteratee-parsec",
          "partial": "Parsec Iteratee Short",
          "signature": "ParsecT Int u(Iteratee s m)a-\u003eu-\u003eSourceName-\u003eIteratee s m(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-Chunk.html#v:safeParsecIterateeShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing simple implementation based on mutable linked list.\nIt is optimised for longer parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "LinkedList",
          "package": "iteratee-parsec",
          "source": "src/Text-Parsec-Iteratee-LinkedList.html",
          "type": "module"
        },
        "index": {
          "description": "Module providing simple implementation based on mutable linked list It is optimised for longer parsers",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "LinkedList",
          "package": "iteratee-parsec",
          "partial": "Linked List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCursor holds current value and reference to possible next cursor\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "Cursor",
          "package": "iteratee-parsec",
          "source": "src/Text-Parsec-Iteratee-LinkedList.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "Cursor holds current value and reference to possible next cursor",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "Cursor",
          "package": "iteratee-parsec",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the 3 possible states of next cursor - existence, non-existence\n and not being evaluated\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "NextCursor",
          "package": "iteratee-parsec",
          "source": "src/Text-Parsec-Iteratee-LinkedList.html#NextCursor",
          "type": "data"
        },
        "index": {
          "description": "Specify the possible states of next cursor existence non-existence and not being evaluated",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "NextCursor",
          "package": "iteratee-parsec",
          "partial": "Next Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#t:NextCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass connecting mutable variable and monad it exists in.\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "Reference",
          "package": "iteratee-parsec",
          "type": "class"
        },
        "index": {
          "description": "Class connecting mutable variable and monad it exists in",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "Reference",
          "package": "iteratee-parsec",
          "partial": "Reference",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#t:Reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates new cursor\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "mkCursor",
          "package": "iteratee-parsec",
          "signature": "m (Cursor r m s el)",
          "source": "src/Text-Parsec-Iteratee-LinkedList.html#mkCursor",
          "type": "function"
        },
        "index": {
          "description": "Creates new cursor",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "mkCursor",
          "package": "iteratee-parsec",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:mkCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the reference. Default implementation is provided but it MUST\n be overloaded if the reference is atomic to provide an atomic write.\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "modifyRef",
          "package": "iteratee-parsec",
          "signature": "modifyRef",
          "type": "method"
        },
        "index": {
          "description": "Modify the reference Default implementation is provided but it MUST be overloaded if the reference is atomic to provide an atomic write",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "modifyRef",
          "package": "iteratee-parsec",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new reference.\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "newRef",
          "package": "iteratee-parsec",
          "signature": "newRef",
          "type": "method"
        },
        "index": {
          "description": "Create new reference",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "newRef",
          "package": "iteratee-parsec",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns parser. If it suceed the remaining part of stream stands in stream,\n however if it fails the stream is not in defined state.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Iteratee.LinkedList\",\"Text.Parsec.Iteratee\"]",
          "name": "parsecIteratee",
          "package": "iteratee-parsec",
          "signature": "ParsecT (Cursor r m c el) u (Iteratee c m) a-\u003e u-\u003e SourceName-\u003e Iteratee c m (Either ParseError a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:parsecIteratee\",\"http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#v:parsecIteratee\"]"
        },
        "index": {
          "description": "Runs parser If it suceed the remaining part of stream stands in stream however if it fails the stream is not in defined state",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "parsecIteratee",
          "normalized": "ParsecT(Cursor a b c d)e(Iteratee c b)f-\u003ee-\u003eSourceName-\u003eIteratee c b(Either ParseError f)",
          "package": "iteratee-parsec",
          "partial": "Iteratee",
          "signature": "ParsecT(Cursor r m c el)u(Iteratee c m)a-\u003eu-\u003eSourceName-\u003eIteratee c m(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:parsecIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a reference.\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "readRef",
          "package": "iteratee-parsec",
          "signature": "readRef",
          "type": "method"
        },
        "index": {
          "description": "Reads reference",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "readRef",
          "package": "iteratee-parsec",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns parser. If it suceed the remaining part of stream stands in stream,\n however if it fails everything stands in stream.\n\u003c/p\u003e",
          "module": "[\"Text.Parsec.Iteratee.LinkedList\",\"Text.Parsec.Iteratee\"]",
          "name": "safeParsecIteratee",
          "package": "iteratee-parsec",
          "signature": "ParsecT (Cursor r m c el) u (Iteratee c m) a-\u003e u-\u003e SourceName-\u003e Iteratee c m (Either ParseError a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:safeParsecIteratee\",\"http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#v:safeParsecIteratee\"]"
        },
        "index": {
          "description": "Runs parser If it suceed the remaining part of stream stands in stream however if it fails everything stands in stream",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "safeParsecIteratee",
          "normalized": "ParsecT(Cursor a b c d)e(Iteratee c b)f-\u003ee-\u003eSourceName-\u003eIteratee c b(Either ParseError f)",
          "package": "iteratee-parsec",
          "partial": "Parsec Iteratee",
          "signature": "ParsecT(Cursor r m c el)u(Iteratee c m)a-\u003eu-\u003eSourceName-\u003eIteratee c m(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:safeParsecIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to reference.\n\u003c/p\u003e",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "writeRef",
          "package": "iteratee-parsec",
          "signature": "writeRef",
          "type": "method"
        },
        "index": {
          "description": "Write to reference",
          "hierarchy": "Text Parsec Iteratee LinkedList",
          "module": "Text.Parsec.Iteratee.LinkedList",
          "name": "writeRef",
          "package": "iteratee-parsec",
          "partial": "Ref",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee-LinkedList.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parsec.Iteratee",
          "name": "Iteratee",
          "package": "iteratee-parsec",
          "source": "src/Text-Parsec-Iteratee.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parsec Iteratee",
          "module": "Text.Parsec.Iteratee",
          "name": "Iteratee",
          "package": "iteratee-parsec",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-parsec/docs/Text-Parsec-Iteratee.html#"
      }
    }
  ]
]