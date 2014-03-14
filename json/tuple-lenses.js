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
        "word": "tuple-lenses"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides some stock lenses for manipulating multiple elements\n   of a tuple at once. For instance:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(1,2,3)^._13\n\u003c/code\u003e\u003c/strong\u003e(1, 3)\n\u003c/pre\u003e\u003cp\u003eThe package provide all lenses that are in increasing order, for FieldN classes 1-9. If you \n   want to swap the order or permute the elements, you need to make your own.\n\u003c/p\u003e\u003cp\u003eCustom combos are provided by a Template Haskell function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e('a','b','c','d') ^. $(tl [4,1,2,3])\n\u003c/code\u003e\u003c/strong\u003e('d','a','b','c')\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Tuple.Lens",
          "name": "Lens",
          "package": "tuple-lenses",
          "source": "src/Data-Tuple-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides some stock lenses for manipulating multiple elements of tuple at once For instance The package provide all lenses that are in increasing order for FieldN classes If you want to swap the order or permute the elements you need to make your own Custom combos are provided by Template Haskell function tl",
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "Lens",
          "package": "tuple-lenses",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_123",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12345",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12345",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12345",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12345"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123456",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234567",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12345678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12345678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12345678",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12345678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7, b8) -\u003e f (b10, b11, b12, b13, b14, b15, b16, b17, b18)) -\u003e s -\u003e f b9",
          "source": "src/Data-Tuple-Lens-Generated.html#_123456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123456789",
          "normalized": "((a,a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12345679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12345679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12345679",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12345679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234568",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12345689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12345689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12345689",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12345689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234569",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123457",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234578",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12345789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12345789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12345789",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12345789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234579",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123458",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234589",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123459",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12346",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12346",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12346",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12346"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123467",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234678",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12346789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12346789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12346789",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12346789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234679",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123468",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234689",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123469",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12347",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12347",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12347",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12347"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123478",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1234789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1234789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1234789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1234789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123479",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12348",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12348",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12348",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12348"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123489",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12349",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12349",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12349",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12349"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1235",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1235",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1235",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1235"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12356",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12356",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12356",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12356"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123567",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1235678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1235678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1235678",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1235678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12356789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12356789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12356789",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12356789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1235679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1235679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1235679",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1235679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123568",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1235689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1235689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1235689",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1235689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123569",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12357",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12357",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12357",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12357"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123578",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1235789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1235789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1235789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1235789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123579",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12358",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12358",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12358",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12358"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123589",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12359",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12359",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12359",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12359"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1236",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1236",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1236",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12367",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12367",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12367",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12367"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1236789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1236789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1236789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1236789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12368",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12368",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12368",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12368"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12369",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12369",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12369",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12369"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1237",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1237",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1237",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1237"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12378",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12378",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12378",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12378"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_123789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_123789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_123789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_123789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12379",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12379",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12379",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12379"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1238",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1238",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1238",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1238"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12389",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12389",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12389",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12389"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1239",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1239",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1239",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1239"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_124",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1245",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1245",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1245",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1245"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12456",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124567",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1245678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1245678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1245678",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1245678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_12456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12456789",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1245679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1245679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1245679",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1245679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124568",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1245689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1245689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1245689",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1245689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124569",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12457",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124578",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1245789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1245789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1245789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1245789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124579",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12458",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124589",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12459",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1246",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1246",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1246",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1246"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12467",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1246789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1246789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1246789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1246789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12468",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12469",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1247",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1247",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1247",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1247"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12478",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_124789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_124789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_124789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_124789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12479",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1248",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1248",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1248",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12489",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1249",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1249",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1249",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1249"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_125",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_125",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_125",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_125"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1256",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1256",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12567",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_125678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_125678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_125678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_125678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1256789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1256789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1256789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1256789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_125679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_125679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_125679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_125679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12568",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_125689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_125689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_125689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_125689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12569",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1257",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1257",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1257",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1257"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12578",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_125789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_125789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_125789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_125789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12579",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1258",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1258",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1258",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1258"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12589",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1259",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1259",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1259",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1259"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_126",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_126",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_126",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_126"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1267",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1267",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1267",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1267"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_126789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_126789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_126789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_126789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1268",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1268",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1268",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1268"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1269",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1269",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1269",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1269"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_127",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_127",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_127",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_127"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1278",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1278",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1278",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1278"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_12789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_12789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_12789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_12789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1279",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1279",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1279",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1279"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_128",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_128",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_128",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1289",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1289",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1289",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1289"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_129",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_129",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_129",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_129"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_134",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1345",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1345",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1345",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1345"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13456",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134567",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1345678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1345678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1345678",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1345678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_13456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13456789",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1345679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1345679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1345679",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1345679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134568",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1345689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1345689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1345689",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1345689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134569",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13457",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134578",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1345789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1345789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1345789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1345789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134579",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13458",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134589",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13459",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1346",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1346",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1346",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1346"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13467",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1346789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1346789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1346789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1346789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13468",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13469",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1347",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1347",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1347",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1347"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13478",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_134789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_134789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_134789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_134789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13479",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1348",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1348",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1348",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1348"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13489",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1349",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1349",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1349",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1349"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_135",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_135",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_135",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_135"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1356",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1356",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1356",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1356"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13567",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_135678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_135678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_135678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_135678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1356789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1356789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1356789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1356789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_135679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_135679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_135679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_135679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13568",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_135689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_135689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_135689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_135689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13569",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1357",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1357",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1357",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1357"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13578",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_135789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_135789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_135789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_135789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13579",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1358",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1358",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1358",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1358"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13589",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1359",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1359",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1359",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1359"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_136",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_136",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_136",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_136"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1367",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1367",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1367",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1367"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_136789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_136789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_136789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_136789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1368",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1368",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1368",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1368"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1369",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1369",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1369",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1369"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_137",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_137",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_137",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_137"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1378",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1378",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1378",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1378"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_13789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_13789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_13789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_13789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1379",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1379",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1379",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1379"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_138",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_138",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_138",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_138"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1389",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1389",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1389",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1389"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_139",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_139",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_139",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_139"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_145",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_145",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_145",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_145"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1456",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14567",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_145678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_145678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_145678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_145678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_1456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1456789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_145679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_145679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_145679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_145679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14568",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_145689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_145689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_145689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_145689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14569",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1457",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14578",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_145789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_145789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_145789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_145789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14579",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1458",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14589",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1459",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_146",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_146",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_146",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_146"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1467",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_146789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_146789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_146789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_146789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1468",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1469",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_147",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_147",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_147",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_147"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1478",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_14789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_14789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_14789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_14789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1479",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_148",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_148",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_148",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_148"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1489",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_149",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_149",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_149",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_149"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_15",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_15",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_156",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_156",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_156",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_156"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1567",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_15678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_15678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_15678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_15678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_156789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_156789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_156789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_156789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_15679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_15679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_15679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_15679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1568",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_15689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_15689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_15689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_15689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1569",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_157",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_157",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_157",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_157"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1578",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_15789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_15789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_15789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_15789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1579",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_158",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_158",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_158",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_158"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1589",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_159",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_159",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_159",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_159"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_16",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_16",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_167",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_167",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_167",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_167"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1678",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_16789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_16789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_16789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_16789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1679",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_168",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_168",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_168",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_168"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1689",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_169",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_169",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_169",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_169"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_17",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_17",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_17",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_178",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_178",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_178",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_178"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_1789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_1789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_1789",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_1789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_179",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_179",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_179",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_179"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_18",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_18",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_18",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_189",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_189",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_189",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_189"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_19",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_19",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_19",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_234",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2345",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2345",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2345",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2345"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23456",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234567",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2345678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2345678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2345678",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2345678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6, b7) -\u003e f (b9, b10, b11, b12, b13, b14, b15, b16)) -\u003e s -\u003e f b8",
          "source": "src/Data-Tuple-Lens-Generated.html#_23456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23456789",
          "normalized": "((a,a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2345679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2345679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2345679",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2345679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234568",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2345689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2345689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2345689",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2345689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234569",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23457",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234578",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2345789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2345789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2345789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2345789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234579",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23458",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234589",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23459",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2346",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2346",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2346",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2346"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23467",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2346789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2346789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2346789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2346789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23468",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23469",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2347",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2347",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2347",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2347"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23478",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_234789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_234789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_234789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_234789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23479",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2348",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2348",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2348",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2348"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23489",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2349",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2349",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2349",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2349"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_235",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_235",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_235",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_235"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2356",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2356",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2356",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2356"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23567",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_235678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_235678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_235678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_235678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2356789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2356789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2356789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2356789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_235679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_235679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_235679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_235679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23568",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_235689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_235689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_235689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_235689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23569",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2357",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2357",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2357",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2357"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23578",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_235789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_235789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_235789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_235789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23579",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2358",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2358",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2358",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2358"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23589",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2359",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2359",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2359",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2359"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_236",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_236",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_236",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2367",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2367",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2367",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2367"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_236789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_236789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_236789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_236789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2368",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2368",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2368",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2368"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2369",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2369",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2369",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2369"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_237",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_237",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_237",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_237"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2378",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2378",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2378",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2378"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_23789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_23789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_23789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_23789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2379",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2379",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2379",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2379"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_238",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_238",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_238",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_238"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2389",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2389",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2389",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2389"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_239",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_239",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_239",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_239"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_245",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_245",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_245",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_245"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2456",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24567",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_245678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_245678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_245678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_245678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_2456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2456789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_245679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_245679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_245679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_245679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24568",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_245689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_245689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_245689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_245689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24569",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2457",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24578",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_245789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_245789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_245789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_245789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24579",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2458",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24589",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2459",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_246",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_246",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_246",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_246"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2467",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_246789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_246789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_246789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_246789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2468",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2469",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_247",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_247",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_247",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_247"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2478",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_24789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_24789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_24789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_24789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2479",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_248",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_248",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_248",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2489",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_249",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_249",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_249",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_249"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_25",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_25",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_25",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_256",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_256",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2567",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_25678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_25678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_25678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_25678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_256789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_256789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_256789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_256789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_25679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_25679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_25679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_25679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2568",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_25689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_25689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_25689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_25689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2569",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_257",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_257",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_257",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_257"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2578",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_25789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_25789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_25789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_25789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2579",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_258",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_258",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_258",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_258"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2589",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_259",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_259",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_259",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_259"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_26",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_26",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_267",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_267",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_267",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_267"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2678",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_26789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_26789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_26789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_26789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2679",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_268",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_268",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_268",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_268"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2689",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_269",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_269",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_269",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_269"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_27",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_27",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_278",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_278",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_278",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_278"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_2789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_2789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_2789",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_2789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_279",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_279",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_279",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_279"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_28",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_28",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_28",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_289",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_289",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_289",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_289"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_29",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_29",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_29",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_34",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_345",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_345",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_345",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_345"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3456",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34567",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_345678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_345678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_345678",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_345678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5, b6) -\u003e f (b8, b9, b10, b11, b12, b13, b14)) -\u003e s -\u003e f b7",
          "source": "src/Data-Tuple-Lens-Generated.html#_3456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3456789",
          "normalized": "((a,a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_345679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_345679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_345679",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_345679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34568",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_345689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_345689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_345689",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_345689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34569",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3457",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34578",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_345789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_345789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_345789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_345789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34579",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3458",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34589",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3459",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_346",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_346",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_346",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_346"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3467",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_346789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_346789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_346789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_346789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3468",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3469",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_347",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_347",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_347",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_347"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3478",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_34789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_34789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_34789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_34789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3479",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_348",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_348",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_348",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_348"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3489",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_349",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_349",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_349",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_349"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_35",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_35",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_35",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_356",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_356",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_356",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_356"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3567",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_35678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_35678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_35678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_35678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_356789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_356789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_356789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_356789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_35679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_35679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_35679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_35679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3568",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_35689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_35689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_35689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_35689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3569",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_357",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_357",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_357",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_357"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3578",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_35789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_35789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_35789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_35789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3579",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_358",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_358",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_358",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_358"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3589",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_359",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_359",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_359",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_359"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_36",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_36",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_36",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_367",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_367",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_367",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_367"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3678",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_36789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_36789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_36789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_36789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3679",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_368",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_368",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_368",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_368"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3689",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_369",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_369",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_369",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_369"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_37",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_37",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_37",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_378",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_378",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_378",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_378"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_3789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_3789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_3789",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_3789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_379",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_379",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_379",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_379"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_38",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_38",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_38",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_389",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_389",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_389",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_389"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_39",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_39",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_39",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_45",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_45",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_45",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_456",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_456",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_456",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_456"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4567",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_45678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_45678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_45678",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_45678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_456789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4, b5) -\u003e f (b7, b8, b9, b10, b11, b12)) -\u003e s -\u003e f b6",
          "source": "src/Data-Tuple-Lens-Generated.html#_456789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_456789",
          "normalized": "((a,a,a,a,a,a)-\u003eb(a,a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b,b)-\u003ef(b,b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_456789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_45679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_45679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_45679",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_45679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4568",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_45689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_45689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_45689",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_45689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4569",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_457",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_457",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_457",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_457"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4578",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_45789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_45789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_45789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_45789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4579",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_458",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_458",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_458",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_458"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4589",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_459",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_459",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_459",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_459"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_46",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_46",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_46",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_467",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_467",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_467",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_467"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4678",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_46789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_46789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_46789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_46789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4679",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_468",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_468",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_468",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_468"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4689",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_469",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_469",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_469",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_469"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_47",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_47",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_47",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_478",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_478",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_478",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_478"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_4789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_4789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_4789",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_4789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_479",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_479",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_479",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_479"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_48",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_48",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_48",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_489",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_489",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_489",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_489"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_49",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_49",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_49",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_56",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_56",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_56",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_56"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_567",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_567",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_567",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_567"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_5678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_5678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_5678",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_5678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_56789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3, b4) -\u003e f (b6, b7, b8, b9, b10)) -\u003e s -\u003e f b5",
          "source": "src/Data-Tuple-Lens-Generated.html#_56789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_56789",
          "normalized": "((a,a,a,a,a)-\u003eb(a,a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b,b)-\u003ef(b,b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_56789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_5679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_5679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_5679",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_5679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_568",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_568",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_568",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_568"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_5689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_5689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_5689",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_5689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_569",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_569",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_569",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_569"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_57",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_57",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_57",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_57"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_578",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_578",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_578",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_578"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_5789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_5789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_5789",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_5789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_579",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_579",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_579",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_579"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_58",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_58",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_58",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_589",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_589",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_589",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_589"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_59",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_59",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_59",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_59"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_67",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_67",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_67",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_67"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_678",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_678",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_678",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_678"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_6789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2, b3) -\u003e f (b5, b6, b7, b8)) -\u003e s -\u003e f b4",
          "source": "src/Data-Tuple-Lens-Generated.html#_6789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_6789",
          "normalized": "((a,a,a,a)-\u003eb(a,a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b,b)-\u003ef(b,b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_6789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_679",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_679",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_679",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_679"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_68",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_68",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_68",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_68"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_689",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_689",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_689",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_689"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_69",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_69",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_69",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_69"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_78",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_78",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_78",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_789",
          "package": "tuple-lenses",
          "signature": "((b, b1, b2) -\u003e f (b4, b5, b6)) -\u003e s -\u003e f b3",
          "source": "src/Data-Tuple-Lens-Generated.html#_789",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_789",
          "normalized": "((a,a,a)-\u003eb(a,a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b,b)-\u003ef(b,b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_789"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_79",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_79",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_79",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_79"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "_89",
          "package": "tuple-lenses",
          "signature": "((b, b1) -\u003e f (b3, b4)) -\u003e s -\u003e f b2",
          "source": "src/Data-Tuple-Lens-Generated.html#_89",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "_89",
          "normalized": "((a,a)-\u003eb(a,a))-\u003ec-\u003eb a",
          "package": "tuple-lenses",
          "signature": "((b,b)-\u003ef(b,b))-\u003es-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:_89"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Lens",
          "name": "makeManyTuples",
          "package": "tuple-lenses",
          "signature": "[[Int]] -\u003e Q [Dec]",
          "source": "src/Data-Tuple-Lens-TH.html#makeManyTuples",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "makeManyTuples",
          "normalized": "[[Int]]-\u003eQ[Dec]",
          "package": "tuple-lenses",
          "partial": "Many Tuples",
          "signature": "[[Int]]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:makeManyTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a top level lens. Indices start at 1.\n\u003c/p\u003e\u003cpre\u003e\n     declareLens [1,2]\n\u003c/pre\u003e\u003cp\u003eCreates the splice\n\u003c/p\u003e\u003cpre\u003e\n     _12 = lens (x -\u003e (x^._1, x^._2)) (x (a, b) -\u003e _1 .~ a \u003c&\u003e _2 .~ b $ x) \n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etl\u003c/a\u003e\u003c/code\u003e for creating a inline lens expression\n\u003c/p\u003e",
          "module": "Data.Tuple.Lens",
          "name": "makeTuples",
          "package": "tuple-lenses",
          "signature": "[Int] -\u003e Q [Dec]",
          "source": "src/Data-Tuple-Lens-TH.html#makeTuples",
          "type": "function"
        },
        "index": {
          "description": "Declare top level lens Indices start at declareLens Creates the splice lens See tl for creating inline lens expression",
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "makeTuples",
          "normalized": "[Int]-\u003eQ[Dec]",
          "package": "tuple-lenses",
          "partial": "Tuples",
          "signature": "[Int]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:makeTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell function for combining Field lenses. Indices start at 1.\n   Calling:\n\u003c/p\u003e\u003cpre\u003e\n     tl [1,2]\n\u003c/pre\u003e\u003cp\u003eMakes a lens like:\n\u003c/p\u003e\u003cpre\u003e\n     lens (x -\u003e (x^._1, x^._2)) (x (a, b) -\u003e _1 .~ a \u003c&\u003e _2 .~ b $ x) \n\u003c/pre\u003e\u003cp\u003eHere is a more complicated example\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e('a','b','c','d') ^. $(tl [4,1,2,3])\n\u003c/code\u003e\u003c/strong\u003e('d','a','b','c')   \n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003edeclareLens\u003c/code\u003e for creating a top level lens. \n\u003c/p\u003e",
          "module": "Data.Tuple.Lens",
          "name": "tl",
          "package": "tuple-lenses",
          "signature": "[Int] -\u003e Q Exp",
          "source": "src/Data-Tuple-Lens-TH.html#tl",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell function for combining Field lenses Indices start at Calling tl Makes lens like lens Here is more complicated example tl See declareLens for creating top level lens",
          "hierarchy": "Data Tuple Lens",
          "module": "Data.Tuple.Lens",
          "name": "tl",
          "normalized": "[Int]-\u003eQ Exp",
          "package": "tuple-lenses",
          "signature": "[Int]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-lenses/docs/Data-Tuple-Lens.html#v:tl"
      }
    }
  ]
]