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
        "word": "greencard-lib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "GreenCard",
          "package": "greencard-lib",
          "source": "src/Foreign-GreenCard.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "GreenCard",
          "package": "greencard-lib",
          "partial": "Green Card",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters\n(see \u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).\nThis set extends the ISO 8859-1 (Latin-1) character set\n(the first 256 charachers), which is itself an extension of the ASCII\ncharacter set (the first 128 characters).\nA character literal in Haskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003ePrelude.toEnum\u003c/code\u003e and \u003ccode\u003ePrelude.fromEnum\u003c/code\u003e from the\n\u003ccode\u003ePrelude.Enum\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Foreign.GreenCard",
          "name": "Char",
          "package": "greencard-lib",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first charachers which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use Prelude.toEnum and Prelude.fromEnum from the Prelude.Enum class respectively or equivalently ord and chr",
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "Char",
          "package": "greencard-lib",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Foreign.GreenCard",
          "name": "Double",
          "package": "greencard-lib",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "Double",
          "package": "greencard-lib",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Foreign.GreenCard",
          "name": "Float",
          "package": "greencard-lib",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "Float",
          "package": "greencard-lib",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "MbString",
          "package": "greencard-lib",
          "source": "src/Foreign-GreenCard.html#MbString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "MbString",
          "package": "greencard-lib",
          "partial": "Mb String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#t:MbString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "marshall_bool_",
          "package": "greencard-lib",
          "signature": "Bool -\u003e IO Int",
          "source": "src/Foreign-GreenCard.html#marshall_bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "marshall_bool_",
          "normalized": "Bool-\u003eIO Int",
          "package": "greencard-lib",
          "signature": "Bool-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#v:marshall_bool_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "marshall_stringLen_",
          "package": "greencard-lib",
          "signature": "[Char] -\u003e IO CStringLen",
          "source": "src/Foreign-GreenCard.html#marshall_stringLen_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "marshall_stringLen_",
          "normalized": "[Char]-\u003eIO CStringLen",
          "package": "greencard-lib",
          "partial": "Len",
          "signature": "[Char]-\u003eIO CStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#v:marshall_stringLen_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "marshall_string_",
          "package": "greencard-lib",
          "signature": "[Char] -\u003e IO CString",
          "source": "src/Foreign-GreenCard.html#marshall_string_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "marshall_string_",
          "normalized": "[Char]-\u003eIO CString",
          "package": "greencard-lib",
          "signature": "[Char]-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#v:marshall_string_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "unmarshall_bool_",
          "package": "greencard-lib",
          "signature": "Int -\u003e IO Bool",
          "source": "src/Foreign-GreenCard.html#unmarshall_bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "unmarshall_bool_",
          "normalized": "Int-\u003eIO Bool",
          "package": "greencard-lib",
          "signature": "Int-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#v:unmarshall_bool_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "unmarshall_stringLen_",
          "package": "greencard-lib",
          "signature": "CString -\u003e Int -\u003e IO String",
          "source": "src/Foreign-GreenCard.html#unmarshall_stringLen_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "unmarshall_stringLen_",
          "normalized": "CString-\u003eInt-\u003eIO String",
          "package": "greencard-lib",
          "partial": "Len",
          "signature": "CString-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#v:unmarshall_stringLen_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.GreenCard",
          "name": "unmarshall_string_",
          "package": "greencard-lib",
          "signature": "CString -\u003e IO String",
          "source": "src/Foreign-GreenCard.html#unmarshall_string_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign GreenCard",
          "module": "Foreign.GreenCard",
          "name": "unmarshall_string_",
          "normalized": "CString-\u003eIO String",
          "package": "greencard-lib",
          "signature": "CString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greencard-lib/docs/Foreign-GreenCard.html#v:unmarshall_string_"
      }
    }
  ]
]