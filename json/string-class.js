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
        "word": "string-class"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "Class",
          "package": "string-class",
          "source": "src/Data-String-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "Class",
          "package": "string-class",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "ConvGenString",
          "package": "string-class",
          "source": "src/Data-String-Class.html#ConvGenString",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "ConvGenString",
          "package": "string-class",
          "partial": "Conv Gen String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:ConvGenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "ConvLazyByteString",
          "package": "string-class",
          "source": "src/Data-String-Class.html#ConvLazyByteString",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "ConvLazyByteString",
          "package": "string-class",
          "partial": "Conv Lazy Byte String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:ConvLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "ConvStrictByteString",
          "package": "string-class",
          "source": "src/Data-String-Class.html#ConvStrictByteString",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "ConvStrictByteString",
          "package": "string-class",
          "partial": "Conv Strict Byte String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:ConvStrictByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "ConvString",
          "package": "string-class",
          "source": "src/Data-String-Class.html#ConvString",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "ConvString",
          "package": "string-class",
          "partial": "Conv String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:ConvString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "ConvText",
          "package": "string-class",
          "source": "src/Data-String-Class.html#ConvText",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "ConvText",
          "package": "string-class",
          "partial": "Conv Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:ConvText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic container of a string\n\u003c/p\u003e\u003cp\u003eWhen operations take place on multiple \u003ccode\u003e\u003ca\u003eGenString\u003c/a\u003e\u003c/code\u003es, they are first\n converted to the type \u003ccode\u003e\u003ca\u003eGenStringDefault\u003c/a\u003e\u003c/code\u003e, which are lazy bytestrings,\n whenever absolutely necessary (which includes testing for equality,\n appending strings, concatenating lists of strings, empty strings with\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, and unfolding), making them the most efficient type for this\n polymorphic container.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "GenString",
          "package": "string-class",
          "source": "src/Data-String-Class.html#GenString",
          "type": "data"
        },
        "index": {
          "description": "Polymorphic container of string When operations take place on multiple GenString they are first converted to the type GenStringDefault which are lazy bytestrings whenever absolutely necessary which includes testing for equality appending strings concatenating lists of strings empty strings with empty and unfolding making them the most efficient type for this polymorphic container",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "GenString",
          "package": "string-class",
          "partial": "Gen String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:GenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is used by \u003ccode\u003e\u003ca\u003eGenString\u003c/a\u003e\u003c/code\u003e when a concrete string type is needed\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "GenStringDefault",
          "package": "string-class",
          "source": "src/Data-String-Class.html#GenStringDefault",
          "type": "type"
        },
        "index": {
          "description": "This type is used by GenString when concrete string type is needed",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "GenStringDefault",
          "package": "string-class",
          "partial": "Gen String Default",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:GenStringDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "StringCell",
          "package": "string-class",
          "source": "src/Data-String-Class.html#StringCell",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "StringCell",
          "package": "string-class",
          "partial": "String Cell",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:StringCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete definition: StringCellChar; StringCellAltChar; toStringCells; fromStringCells; toMainChar; toAltChar; cons; snoc; either all of head, tail, last, and init, or all of uncons and unsnoc; take, take64 or genericTake; drop, drop64, or genericDrop; and length, length64, or genericLength\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "StringCells",
          "package": "string-class",
          "source": "src/Data-String-Class.html#StringCells",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete definition StringCellChar StringCellAltChar toStringCells fromStringCells toMainChar toAltChar cons snoc either all of head tail last and init or all of uncons and unsnoc take take64 or genericTake drop drop64 or genericDrop and length length64 or genericLength",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "StringCells",
          "package": "string-class",
          "partial": "String Cells",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:StringCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "StringRWIO",
          "package": "string-class",
          "source": "src/Data-String-Class.html#StringRWIO",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete definition hGetContents hGetLine hPutStr and hPutStrLn",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "StringRWIO",
          "package": "string-class",
          "partial": "String RWIO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:StringRWIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString super class\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "Stringy",
          "package": "string-class",
          "source": "src/Data-String-Class.html#Stringy",
          "type": "class"
        },
        "index": {
          "description": "String super class",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "Stringy",
          "package": "string-class",
          "partial": "Stringy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#t:Stringy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "GenString",
          "package": "string-class",
          "signature": "GenString",
          "source": "src/Data-String-Class.html#GenString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "GenString",
          "package": "string-class",
          "partial": "Gen String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:GenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altCons",
          "package": "string-class",
          "signature": "StringCellAltChar s -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#altCons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altCons",
          "normalized": "StringCellAltChar a-\u003ea-\u003ea",
          "package": "string-class",
          "partial": "Cons",
          "signature": "StringCellAltChar s-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altHead",
          "package": "string-class",
          "signature": "s -\u003e StringCellAltChar s",
          "source": "src/Data-String-Class.html#altHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altHead",
          "normalized": "a-\u003eStringCellAltChar a",
          "package": "string-class",
          "partial": "Head",
          "signature": "s-\u003eStringCellAltChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altLast",
          "package": "string-class",
          "signature": "s -\u003e StringCellAltChar s",
          "source": "src/Data-String-Class.html#altLast",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altLast",
          "normalized": "a-\u003eStringCellAltChar a",
          "package": "string-class",
          "partial": "Last",
          "signature": "s-\u003eStringCellAltChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altSnoc",
          "package": "string-class",
          "signature": "s -\u003e StringCellAltChar s -\u003e s",
          "source": "src/Data-String-Class.html#altSnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altSnoc",
          "normalized": "a-\u003eStringCellAltChar a-\u003ea",
          "package": "string-class",
          "partial": "Snoc",
          "signature": "s-\u003eStringCellAltChar s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altSnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altUncons",
          "package": "string-class",
          "signature": "s -\u003e (StringCellAltChar s, s)",
          "source": "src/Data-String-Class.html#altUncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altUncons",
          "normalized": "a-\u003e(StringCellAltChar a,a)",
          "package": "string-class",
          "partial": "Uncons",
          "signature": "s-\u003e(StringCellAltChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altUncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altUnfoldr",
          "package": "string-class",
          "signature": "(a -\u003e Maybe (StringCellAltChar s, a)) -\u003e a -\u003e s",
          "source": "src/Data-String-Class.html#altUnfoldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altUnfoldr",
          "normalized": "(a-\u003eMaybe(StringCellAltChar b,a))-\u003ea-\u003eb",
          "package": "string-class",
          "partial": "Unfoldr",
          "signature": "(a-\u003eMaybe(StringCellAltChar s,a))-\u003ea-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altUnfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altUnfoldrN",
          "package": "string-class",
          "signature": "Int -\u003e (a -\u003e Maybe (StringCellAltChar s, a)) -\u003e a -\u003e s",
          "source": "src/Data-String-Class.html#altUnfoldrN",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altUnfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(StringCellAltChar b,a))-\u003ea-\u003eb",
          "package": "string-class",
          "partial": "Unfoldr",
          "signature": "Int-\u003e(a-\u003eMaybe(StringCellAltChar s,a))-\u003ea-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altUnfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "altUnsnoc",
          "package": "string-class",
          "signature": "s -\u003e (s, StringCellAltChar s)",
          "source": "src/Data-String-Class.html#altUnsnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "altUnsnoc",
          "normalized": "a-\u003e(a,StringCellAltChar a)",
          "package": "string-class",
          "partial": "Unsnoc",
          "signature": "s-\u003e(s,StringCellAltChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:altUnsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two strings\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "append",
          "package": "string-class",
          "signature": "s -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#append",
          "type": "method"
        },
        "index": {
          "description": "Append two strings",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "s-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the end of a file\n\u003c/p\u003e\u003cp\u003eThe default definition uses \u003ccode\u003ewithFile\u003c/code\u003e to open the file.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "appendFile",
          "package": "string-class",
          "signature": "FilePath -\u003e s -\u003e IO ()",
          "source": "src/Data-String-Class.html#appendFile",
          "type": "method"
        },
        "index": {
          "description": "Write string to the end of file The default definition uses withFile to open the file",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "appendFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "string-class",
          "partial": "File",
          "signature": "FilePath-\u003es-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "concat",
          "package": "string-class",
          "signature": "[s] -\u003e s",
          "source": "src/Data-String-Class.html#concat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "concat",
          "normalized": "[a]-\u003ea",
          "package": "string-class",
          "signature": "[s]-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "cons",
          "package": "string-class",
          "signature": "StringCellChar s -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#cons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "cons",
          "normalized": "StringCellChar a-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "StringCellChar s-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "cons2",
          "package": "string-class",
          "signature": "StringCellChar s -\u003e StringCellChar s -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#cons2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "cons2",
          "normalized": "StringCellChar a-\u003eStringCellChar a-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "StringCellChar s-\u003eStringCellChar s-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:cons2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "cons3",
          "package": "string-class",
          "signature": "StringCellChar s -\u003e StringCellChar s -\u003e StringCellChar s -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#cons3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "cons3",
          "normalized": "StringCellChar a-\u003eStringCellChar a-\u003eStringCellChar a-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "StringCellChar s-\u003eStringCellChar s-\u003eStringCellChar s-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:cons3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "cons4",
          "package": "string-class",
          "signature": "StringCellChar s -\u003e StringCellChar s -\u003e StringCellChar s -\u003e StringCellChar s -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#cons4",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "cons4",
          "normalized": "StringCellChar a-\u003eStringCellChar a-\u003eStringCellChar a-\u003eStringCellChar a-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "StringCellChar s-\u003eStringCellChar s-\u003eStringCellChar s-\u003eStringCellChar s-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:cons4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "drop",
          "package": "string-class",
          "signature": "Int -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#drop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "drop",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "Int-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "drop64",
          "package": "string-class",
          "signature": "Int64 -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#drop64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "drop64",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "Int-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:drop64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "empty",
          "package": "string-class",
          "signature": "s",
          "source": "src/Data-String-Class.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "empty",
          "package": "string-class",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromChar",
          "package": "string-class",
          "signature": "Char -\u003e c",
          "source": "src/Data-String-Class.html#fromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromChar",
          "normalized": "Char-\u003ea",
          "package": "string-class",
          "partial": "Char",
          "signature": "Char-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromGenString",
          "package": "string-class",
          "signature": "GenString -\u003e s",
          "source": "src/Data-String-Class.html#fromGenString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromGenString",
          "normalized": "GenString-\u003ea",
          "package": "string-class",
          "partial": "Gen String",
          "signature": "GenString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromGenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromLazyByteString",
          "package": "string-class",
          "signature": "ByteString -\u003e s",
          "source": "src/Data-String-Class.html#fromLazyByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromLazyByteString",
          "normalized": "ByteString-\u003ea",
          "package": "string-class",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromStrictByteString",
          "package": "string-class",
          "signature": "ByteString -\u003e s",
          "source": "src/Data-String-Class.html#fromStrictByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromStrictByteString",
          "normalized": "ByteString-\u003ea",
          "package": "string-class",
          "partial": "Strict Byte String",
          "signature": "ByteString-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromStrictByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromString",
          "package": "string-class",
          "signature": "String -\u003e s",
          "source": "src/Data-String-Class.html#fromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "string-class",
          "partial": "String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromStringCells",
          "package": "string-class",
          "signature": "s2 -\u003e s",
          "source": "src/Data-String-Class.html#fromStringCells",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromStringCells",
          "normalized": "a-\u003ea",
          "package": "string-class",
          "partial": "String Cells",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromStringCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromText",
          "package": "string-class",
          "signature": "Text -\u003e s",
          "source": "src/Data-String-Class.html#fromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromText",
          "normalized": "Text-\u003ea",
          "package": "string-class",
          "partial": "Text",
          "signature": "Text-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromWord16",
          "package": "string-class",
          "signature": "Word16 -\u003e c",
          "source": "src/Data-String-Class.html#fromWord16",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromWord16",
          "normalized": "Word-\u003ea",
          "package": "string-class",
          "partial": "Word",
          "signature": "Word-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromWord32",
          "package": "string-class",
          "signature": "Word32 -\u003e c",
          "source": "src/Data-String-Class.html#fromWord32",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromWord32",
          "normalized": "Word-\u003ea",
          "package": "string-class",
          "partial": "Word",
          "signature": "Word-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromWord64",
          "package": "string-class",
          "signature": "Word64 -\u003e c",
          "source": "src/Data-String-Class.html#fromWord64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromWord64",
          "normalized": "Word-\u003ea",
          "package": "string-class",
          "partial": "Word",
          "signature": "Word-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "fromWord8",
          "package": "string-class",
          "signature": "Word8 -\u003e c",
          "source": "src/Data-String-Class.html#fromWord8",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "fromWord8",
          "normalized": "Word-\u003ea",
          "package": "string-class",
          "partial": "Word",
          "signature": "Word-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:fromWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "gen_string",
          "package": "string-class",
          "signature": "s",
          "source": "src/Data-String-Class.html#GenString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "gen_string",
          "package": "string-class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:gen_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "genericDrop",
          "package": "string-class",
          "signature": "i -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#genericDrop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "genericDrop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "string-class",
          "partial": "Drop",
          "signature": "i-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex a string at any location\n\u003c/p\u003e\u003cp\u003eJust like the other \u003ccode\u003egeneric\u003c/code\u003e functions of this module, this function\n can be significantly slower than \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e, since the function must be\n able to support arbitrarily large indices.  Consider using \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eindex64\u003c/a\u003e\u003c/code\u003e, even if you need to coerce the index to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "genericIndex",
          "package": "string-class",
          "signature": "s -\u003e i -\u003e StringCellChar s",
          "source": "src/Data-String-Class.html#genericIndex",
          "type": "method"
        },
        "index": {
          "description": "Index string at any location Just like the other generic functions of this module this function can be significantly slower than index since the function must be able to support arbitrarily large indices Consider using index or index64 even if you need to coerce the index to an Int",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "genericIndex",
          "normalized": "a-\u003eb-\u003eStringCellChar a",
          "package": "string-class",
          "partial": "Index",
          "signature": "s-\u003ei-\u003eStringCellChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "genericLength",
          "package": "string-class",
          "signature": "s -\u003e i",
          "source": "src/Data-String-Class.html#genericLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "genericLength",
          "normalized": "a-\u003eb",
          "package": "string-class",
          "partial": "Length",
          "signature": "s-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "genericTake",
          "package": "string-class",
          "signature": "i -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#genericTake",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "genericTake",
          "normalized": "a-\u003eb-\u003eb",
          "package": "string-class",
          "partial": "Take",
          "signature": "i-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all user input on \u003ccode\u003estdin\u003c/code\u003e as a single string\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "getContents",
          "package": "string-class",
          "signature": "IO s",
          "source": "src/Data-String-Class.html#getContents",
          "type": "method"
        },
        "index": {
          "description": "Read all user input on stdin as single string",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "getContents",
          "package": "string-class",
          "partial": "Contents",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a single line of user input from \u003ccode\u003estdin\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "getLine",
          "package": "string-class",
          "signature": "IO s",
          "source": "src/Data-String-Class.html#getLine",
          "type": "method"
        },
        "index": {
          "description": "Read single line of user input from stdin",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "getLine",
          "package": "string-class",
          "partial": "Line",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead n bytes *or* characters, depending on the implementation into a\n ByteString, directly from the specified Handle\n\u003c/p\u003e\u003cp\u003eWhether or not this function is lazy depends on the instance; laziness\n is preferred.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "hGetContents",
          "package": "string-class",
          "signature": "Handle -\u003e IO s",
          "source": "src/Data-String-Class.html#hGetContents",
          "type": "method"
        },
        "index": {
          "description": "Read bytes or characters depending on the implementation into ByteString directly from the specified Handle Whether or not this function is lazy depends on the instance laziness is preferred",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO a",
          "package": "string-class",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a single line from a handle\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "hGetLine",
          "package": "string-class",
          "signature": "Handle -\u003e IO s",
          "source": "src/Data-String-Class.html#hGetLine",
          "type": "method"
        },
        "index": {
          "description": "Read single line from handle",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO a",
          "package": "string-class",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to a handle\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "hPutStr",
          "package": "string-class",
          "signature": "Handle -\u003e s -\u003e IO ()",
          "source": "src/Data-String-Class.html#hPutStr",
          "type": "method"
        },
        "index": {
          "description": "Write string to handle",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "hPutStr",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "string-class",
          "partial": "Put Str",
          "signature": "Handle-\u003es-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to a handle, followed by a newline\n\u003c/p\u003e\u003cp\u003eN.B.: implementations might not define this atomically.  If the state\n of being atomic is necessary, one possible solution is to convert a\n string to an efficient type for which \u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e is atomic.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "hPutStrLn",
          "package": "string-class",
          "signature": "Handle -\u003e s -\u003e IO ()",
          "source": "src/Data-String-Class.html#hPutStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write string to handle followed by newline N.B implementations might not define this atomically If the state of being atomic is necessary one possible solution is to convert string to an efficient type for which hPutStrLn is atomic",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "string-class",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003es-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "head",
          "package": "string-class",
          "signature": "s -\u003e StringCellChar s",
          "source": "src/Data-String-Class.html#head",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "head",
          "normalized": "a-\u003eStringCellChar a",
          "package": "string-class",
          "signature": "s-\u003eStringCellChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the character at the given position\n\u003c/p\u003e\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edrop64\u003c/a\u003e\u003c/code\u003e, and the variants of those functions, the\n default definitions of these three variants are independent of each\n other, and are defined in terms of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e, which can be\n inefficient.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "index",
          "package": "string-class",
          "signature": "s -\u003e Int -\u003e StringCellChar s",
          "source": "src/Data-String-Class.html#index",
          "type": "method"
        },
        "index": {
          "description": "Get the character at the given position Just like drop drop64 and the variants of those functions the default definitions of these three variants are independent of each other and are defined in terms of head and tail which can be inefficient",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "index",
          "normalized": "a-\u003eInt-\u003eStringCellChar a",
          "package": "string-class",
          "signature": "s-\u003eInt-\u003eStringCellChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "index64",
          "package": "string-class",
          "signature": "s -\u003e Int64 -\u003e StringCellChar s",
          "source": "src/Data-String-Class.html#index64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "index64",
          "normalized": "a-\u003eInt-\u003eStringCellChar a",
          "package": "string-class",
          "signature": "s-\u003eInt-\u003eStringCellChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:index64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "init",
          "package": "string-class",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Class.html#init",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "init",
          "normalized": "a-\u003ea",
          "package": "string-class",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function of type Text -\u003e Text as its argument\n\u003c/p\u003e\u003cp\u003eThe entire input from the standard input device is passed to this\n function as its argument, and the resulting string is output on the\n standard output device.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "interact",
          "package": "string-class",
          "signature": "(s -\u003e s) -\u003e IO ()",
          "source": "src/Data-String-Class.html#interact",
          "type": "method"
        },
        "index": {
          "description": "Take function of type Text Text as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "interact",
          "normalized": "(a-\u003ea)-\u003eIO()",
          "package": "string-class",
          "signature": "(s-\u003es)-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "last",
          "package": "string-class",
          "signature": "s -\u003e StringCellChar s",
          "source": "src/Data-String-Class.html#last",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "last",
          "normalized": "a-\u003eStringCellChar a",
          "package": "string-class",
          "signature": "s-\u003eStringCellChar s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "length",
          "package": "string-class",
          "signature": "s -\u003e Int",
          "source": "src/Data-String-Class.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "string-class",
          "signature": "s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "length64",
          "package": "string-class",
          "signature": "s -\u003e Int64",
          "source": "src/Data-String-Class.html#length64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "length64",
          "normalized": "a-\u003eInt",
          "package": "string-class",
          "signature": "s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:length64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "null",
          "package": "string-class",
          "signature": "s -\u003e Bool",
          "source": "src/Data-String-Class.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "string-class",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to \u003ccode\u003estdout\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "putStr",
          "package": "string-class",
          "signature": "s -\u003e IO ()",
          "source": "src/Data-String-Class.html#putStr",
          "type": "method"
        },
        "index": {
          "description": "Write string to stdout",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "putStr",
          "normalized": "a-\u003eIO()",
          "package": "string-class",
          "partial": "Str",
          "signature": "s-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to \u003ccode\u003estdout\u003c/code\u003e, followed by a newline\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "putStrLn",
          "package": "string-class",
          "signature": "s -\u003e IO ()",
          "source": "src/Data-String-Class.html#putStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write string to stdout followed by newline",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "putStrLn",
          "normalized": "a-\u003eIO()",
          "package": "string-class",
          "partial": "Str Ln",
          "signature": "s-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a file and returns the contents of the file as a string\n\u003c/p\u003e\u003cp\u003eDepending on the instance, this function might expect the file to be\n non-binary.  The default definition uses \u003ccode\u003eopenFile\u003c/code\u003e to open the file.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "readFile",
          "package": "string-class",
          "signature": "FilePath -\u003e IO s",
          "source": "src/Data-String-Class.html#readFile",
          "type": "method"
        },
        "index": {
          "description": "Read file and returns the contents of the file as string Depending on the instance this function might expect the file to be non-binary The default definition uses openFile to open the file",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "string-class",
          "partial": "File",
          "signature": "FilePath-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeAltHead",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellAltChar s)",
          "source": "src/Data-String-Class.html#safeAltHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeAltHead",
          "normalized": "a-\u003eMaybe(StringCellAltChar a)",
          "package": "string-class",
          "partial": "Alt Head",
          "signature": "s-\u003eMaybe(StringCellAltChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeAltHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeAltLast",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellAltChar s)",
          "source": "src/Data-String-Class.html#safeAltLast",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeAltLast",
          "normalized": "a-\u003eMaybe(StringCellAltChar a)",
          "package": "string-class",
          "partial": "Alt Last",
          "signature": "s-\u003eMaybe(StringCellAltChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeAltLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeAltUncons",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellAltChar s, s)",
          "source": "src/Data-String-Class.html#safeAltUncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeAltUncons",
          "normalized": "a-\u003eMaybe(StringCellAltChar a,a)",
          "package": "string-class",
          "partial": "Alt Uncons",
          "signature": "s-\u003eMaybe(StringCellAltChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeAltUncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeAltUnsnoc",
          "package": "string-class",
          "signature": "s -\u003e Maybe (s, StringCellAltChar s)",
          "source": "src/Data-String-Class.html#safeAltUnsnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeAltUnsnoc",
          "normalized": "a-\u003eMaybe(a,StringCellAltChar a)",
          "package": "string-class",
          "partial": "Alt Unsnoc",
          "signature": "s-\u003eMaybe(s,StringCellAltChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeAltUnsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeDrop",
          "package": "string-class",
          "signature": "Int -\u003e s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeDrop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeDrop",
          "normalized": "Int-\u003ea-\u003eMaybe a",
          "package": "string-class",
          "partial": "Drop",
          "signature": "Int-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeDrop64",
          "package": "string-class",
          "signature": "Int64 -\u003e s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeDrop64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeDrop64",
          "normalized": "Int-\u003ea-\u003eMaybe a",
          "package": "string-class",
          "partial": "Drop",
          "signature": "Int-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeDrop64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeGenericDrop",
          "package": "string-class",
          "signature": "i -\u003e s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeGenericDrop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeGenericDrop",
          "normalized": "a-\u003eb-\u003eMaybe b",
          "package": "string-class",
          "partial": "Generic Drop",
          "signature": "i-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeGenericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeGenericIndex",
          "package": "string-class",
          "signature": "s -\u003e i -\u003e Maybe (StringCellChar s)",
          "source": "src/Data-String-Class.html#safeGenericIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeGenericIndex",
          "normalized": "a-\u003eb-\u003eMaybe(StringCellChar a)",
          "package": "string-class",
          "partial": "Generic Index",
          "signature": "s-\u003ei-\u003eMaybe(StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeGenericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeGenericTake",
          "package": "string-class",
          "signature": "i -\u003e s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeGenericTake",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeGenericTake",
          "normalized": "a-\u003eb-\u003eMaybe b",
          "package": "string-class",
          "partial": "Generic Take",
          "signature": "i-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeGenericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeHead",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellChar s)",
          "source": "src/Data-String-Class.html#safeHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeHead",
          "normalized": "a-\u003eMaybe(StringCellChar a)",
          "package": "string-class",
          "partial": "Head",
          "signature": "s-\u003eMaybe(StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeIndex",
          "package": "string-class",
          "signature": "s -\u003e Int -\u003e Maybe (StringCellChar s)",
          "source": "src/Data-String-Class.html#safeIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeIndex",
          "normalized": "a-\u003eInt-\u003eMaybe(StringCellChar a)",
          "package": "string-class",
          "partial": "Index",
          "signature": "s-\u003eInt-\u003eMaybe(StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeIndex64",
          "package": "string-class",
          "signature": "s -\u003e Int64 -\u003e Maybe (StringCellChar s)",
          "source": "src/Data-String-Class.html#safeIndex64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeIndex64",
          "normalized": "a-\u003eInt-\u003eMaybe(StringCellChar a)",
          "package": "string-class",
          "partial": "Index",
          "signature": "s-\u003eInt-\u003eMaybe(StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeIndex64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeInit",
          "package": "string-class",
          "signature": "s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeInit",
          "normalized": "a-\u003eMaybe a",
          "package": "string-class",
          "partial": "Init",
          "signature": "s-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeLast",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellChar s)",
          "source": "src/Data-String-Class.html#safeLast",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeLast",
          "normalized": "a-\u003eMaybe(StringCellChar a)",
          "package": "string-class",
          "partial": "Last",
          "signature": "s-\u003eMaybe(StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeTail",
          "package": "string-class",
          "signature": "s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeTail",
          "normalized": "a-\u003eMaybe a",
          "package": "string-class",
          "partial": "Tail",
          "signature": "s-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeTake",
          "package": "string-class",
          "signature": "Int -\u003e s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeTake",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeTake",
          "normalized": "Int-\u003ea-\u003eMaybe a",
          "package": "string-class",
          "partial": "Take",
          "signature": "Int-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeTake64",
          "package": "string-class",
          "signature": "Int64 -\u003e s -\u003e Maybe s",
          "source": "src/Data-String-Class.html#safeTake64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeTake64",
          "normalized": "Int-\u003ea-\u003eMaybe a",
          "package": "string-class",
          "partial": "Take",
          "signature": "Int-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeTake64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeUncons",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellChar s, s)",
          "source": "src/Data-String-Class.html#safeUncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeUncons",
          "normalized": "a-\u003eMaybe(StringCellChar a,a)",
          "package": "string-class",
          "partial": "Uncons",
          "signature": "s-\u003eMaybe(StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeUncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeUncons2",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellChar s, StringCellChar s, s)",
          "source": "src/Data-String-Class.html#safeUncons2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeUncons2",
          "normalized": "a-\u003eMaybe(StringCellChar a,StringCellChar a,a)",
          "package": "string-class",
          "partial": "Uncons",
          "signature": "s-\u003eMaybe(StringCellChar s,StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeUncons2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeUncons3",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellChar s, StringCellChar s, StringCellChar s, s)",
          "source": "src/Data-String-Class.html#safeUncons3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeUncons3",
          "normalized": "a-\u003eMaybe(StringCellChar a,StringCellChar a,StringCellChar a,a)",
          "package": "string-class",
          "partial": "Uncons",
          "signature": "s-\u003eMaybe(StringCellChar s,StringCellChar s,StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeUncons3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeUncons4",
          "package": "string-class",
          "signature": "s -\u003e Maybe (StringCellChar s, StringCellChar s, StringCellChar s, StringCellChar s, s)",
          "source": "src/Data-String-Class.html#safeUncons4",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeUncons4",
          "normalized": "a-\u003eMaybe(StringCellChar a,StringCellChar a,StringCellChar a,StringCellChar a,a)",
          "package": "string-class",
          "partial": "Uncons",
          "signature": "s-\u003eMaybe(StringCellChar s,StringCellChar s,StringCellChar s,StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeUncons4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "safeUnsnoc",
          "package": "string-class",
          "signature": "s -\u003e Maybe (s, StringCellChar s)",
          "source": "src/Data-String-Class.html#safeUnsnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "safeUnsnoc",
          "normalized": "a-\u003eMaybe(a,StringCellChar a)",
          "package": "string-class",
          "partial": "Unsnoc",
          "signature": "s-\u003eMaybe(s,StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:safeUnsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "snoc",
          "package": "string-class",
          "signature": "s -\u003e StringCellChar s -\u003e s",
          "source": "src/Data-String-Class.html#snoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "snoc",
          "normalized": "a-\u003eStringCellChar a-\u003ea",
          "package": "string-class",
          "signature": "s-\u003eStringCellChar s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "tail",
          "package": "string-class",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Class.html#tail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "tail",
          "normalized": "a-\u003ea",
          "package": "string-class",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "take",
          "package": "string-class",
          "signature": "Int -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#take",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "take",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "Int-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "take64",
          "package": "string-class",
          "signature": "Int64 -\u003e s -\u003e s",
          "source": "src/Data-String-Class.html#take64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "take64",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "string-class",
          "signature": "Int-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:take64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toAltChar",
          "package": "string-class",
          "signature": "c -\u003e Tagged s (StringCellAltChar s)",
          "source": "src/Data-String-Class.html#toAltChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toAltChar",
          "normalized": "a-\u003eTagged b(StringCellAltChar b)",
          "package": "string-class",
          "partial": "Alt Char",
          "signature": "c-\u003eTagged s(StringCellAltChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toAltChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toChar",
          "package": "string-class",
          "signature": "c -\u003e Char",
          "source": "src/Data-String-Class.html#toChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toChar",
          "normalized": "a-\u003eChar",
          "package": "string-class",
          "partial": "Char",
          "signature": "c-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toGenString",
          "package": "string-class",
          "signature": "s -\u003e GenString",
          "source": "src/Data-String-Class.html#toGenString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toGenString",
          "normalized": "a-\u003eGenString",
          "package": "string-class",
          "partial": "Gen String",
          "signature": "s-\u003eGenString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toGenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toLazyByteString",
          "package": "string-class",
          "signature": "s -\u003e ByteString",
          "source": "src/Data-String-Class.html#toLazyByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toLazyByteString",
          "normalized": "a-\u003eByteString",
          "package": "string-class",
          "partial": "Lazy Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toMainChar",
          "package": "string-class",
          "signature": "c -\u003e Tagged s (StringCellChar s)",
          "source": "src/Data-String-Class.html#toMainChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toMainChar",
          "normalized": "a-\u003eTagged b(StringCellChar b)",
          "package": "string-class",
          "partial": "Main Char",
          "signature": "c-\u003eTagged s(StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toMainChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toStrictByteString",
          "package": "string-class",
          "signature": "s -\u003e ByteString",
          "source": "src/Data-String-Class.html#toStrictByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toStrictByteString",
          "normalized": "a-\u003eByteString",
          "package": "string-class",
          "partial": "Strict Byte String",
          "signature": "s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toStrictByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toString",
          "package": "string-class",
          "signature": "s -\u003e String",
          "source": "src/Data-String-Class.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "string-class",
          "partial": "String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toStringCells",
          "package": "string-class",
          "signature": "s -\u003e s2",
          "source": "src/Data-String-Class.html#toStringCells",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toStringCells",
          "normalized": "a-\u003ea",
          "package": "string-class",
          "partial": "String Cells",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toStringCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toText",
          "package": "string-class",
          "signature": "s -\u003e Text",
          "source": "src/Data-String-Class.html#toText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toText",
          "normalized": "a-\u003eText",
          "package": "string-class",
          "partial": "Text",
          "signature": "s-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toWord16",
          "package": "string-class",
          "signature": "c -\u003e Word16",
          "source": "src/Data-String-Class.html#toWord16",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toWord16",
          "normalized": "a-\u003eWord",
          "package": "string-class",
          "partial": "Word",
          "signature": "c-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toWord32",
          "package": "string-class",
          "signature": "c -\u003e Word32",
          "source": "src/Data-String-Class.html#toWord32",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toWord32",
          "normalized": "a-\u003eWord",
          "package": "string-class",
          "partial": "Word",
          "signature": "c-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toWord64",
          "package": "string-class",
          "signature": "c -\u003e Word64",
          "source": "src/Data-String-Class.html#toWord64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toWord64",
          "normalized": "a-\u003eWord",
          "package": "string-class",
          "partial": "Word",
          "signature": "c-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "toWord8",
          "package": "string-class",
          "signature": "c -\u003e Word8",
          "source": "src/Data-String-Class.html#toWord8",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "toWord8",
          "normalized": "a-\u003eWord",
          "package": "string-class",
          "partial": "Word",
          "signature": "c-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:toWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "uncons",
          "package": "string-class",
          "signature": "s -\u003e (StringCellChar s, s)",
          "source": "src/Data-String-Class.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "uncons",
          "normalized": "a-\u003e(StringCellChar a,a)",
          "package": "string-class",
          "signature": "s-\u003e(StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "uncons2",
          "package": "string-class",
          "signature": "s -\u003e (StringCellChar s, StringCellChar s, s)",
          "source": "src/Data-String-Class.html#uncons2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "uncons2",
          "normalized": "a-\u003e(StringCellChar a,StringCellChar a,a)",
          "package": "string-class",
          "signature": "s-\u003e(StringCellChar s,StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:uncons2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "uncons3",
          "package": "string-class",
          "signature": "s -\u003e (StringCellChar s, StringCellChar s, StringCellChar s, s)",
          "source": "src/Data-String-Class.html#uncons3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "uncons3",
          "normalized": "a-\u003e(StringCellChar a,StringCellChar a,StringCellChar a,a)",
          "package": "string-class",
          "signature": "s-\u003e(StringCellChar s,StringCellChar s,StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:uncons3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "uncons4",
          "package": "string-class",
          "signature": "s -\u003e (StringCellChar s, StringCellChar s, StringCellChar s, StringCellChar s, s)",
          "source": "src/Data-String-Class.html#uncons4",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "uncons4",
          "normalized": "a-\u003e(StringCellChar a,StringCellChar a,StringCellChar a,StringCellChar a,a)",
          "package": "string-class",
          "signature": "s-\u003e(StringCellChar s,StringCellChar s,StringCellChar s,StringCellChar s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:uncons4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruction of a string; implementations should behave safely with incorrect lengths\n\u003c/p\u003e\u003cp\u003eThe default implementation of \u003ccode\u003eundfoldr\u003c/code\u003e is independent from that of \u003ccode\u003e\u003ca\u003ealtUnfoldr\u003c/a\u003e\u003c/code\u003e,\n as well as \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e as and \u003ccode\u003e\u003ca\u003ealtUnfoldrN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "unfoldr",
          "package": "string-class",
          "signature": "(a -\u003e Maybe (StringCellChar s, a)) -\u003e a -\u003e s",
          "source": "src/Data-String-Class.html#unfoldr",
          "type": "method"
        },
        "index": {
          "description": "Construction of string implementations should behave safely with incorrect lengths The default implementation of undfoldr is independent from that of altUnfoldr as well as unfoldrN as and altUnfoldrN",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(StringCellChar b,a))-\u003ea-\u003eb",
          "package": "string-class",
          "signature": "(a-\u003eMaybe(StringCellChar s,a))-\u003ea-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "unfoldrN",
          "package": "string-class",
          "signature": "Int -\u003e (a -\u003e Maybe (StringCellChar s, a)) -\u003e a -\u003e s",
          "source": "src/Data-String-Class.html#unfoldrN",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(StringCellChar b,a))-\u003ea-\u003eb",
          "package": "string-class",
          "signature": "Int-\u003e(a-\u003eMaybe(StringCellChar s,a))-\u003ea-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Class",
          "name": "unsnoc",
          "package": "string-class",
          "signature": "s -\u003e (s, StringCellChar s)",
          "source": "src/Data-String-Class.html#unsnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "unsnoc",
          "normalized": "a-\u003e(a,StringCellChar a)",
          "package": "string-class",
          "signature": "s-\u003e(s,StringCellChar s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:unsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to a file\n\u003c/p\u003e\u003cp\u003eThe file is truncated to zero length before writing begins.\n The default definition uses \u003ccode\u003ewithFile\u003c/code\u003e to open the file.\n\u003c/p\u003e",
          "module": "Data.String.Class",
          "name": "writeFile",
          "package": "string-class",
          "signature": "FilePath -\u003e s -\u003e IO ()",
          "source": "src/Data-String-Class.html#writeFile",
          "type": "method"
        },
        "index": {
          "description": "Write string to file The file is truncated to zero length before writing begins The default definition uses withFile to open the file",
          "hierarchy": "Data String Class",
          "module": "Data.String.Class",
          "name": "writeFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "string-class",
          "partial": "File",
          "signature": "FilePath-\u003es-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/string-class/docs/Data-String-Class.html#v:writeFile"
      }
    }
  ]
]