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
        "word": "compact-string"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompactString specialized to ASCII.         Note that not all characters can be encoded in ASCII,         if encoding is not possible the function will raise an error..\n\u003c/p\u003e\u003cp\u003eThis module can be used to reduce the need for type signatures,\n since in most cases only a single encoding is used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "ASCII",
          "package": "compact-string",
          "source": "src/Data-CompactString-ASCII.html",
          "type": "module"
        },
        "index": {
          "description": "CompactString specialized to ASCII Note that not all characters can be encoded in ASCII if encoding is not possible the function will raise an error This module can be used to reduce the need for type signatures since in most cases only single encoding is used",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "ASCII",
          "package": "compact-string",
          "partial": "ASCII",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompactString specialized to ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "CompactString",
          "package": "compact-string",
          "source": "src/Data-CompactString-ASCII.html#CompactString",
          "type": "type"
        },
        "index": {
          "description": "CompactString specialized to ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "CompactString",
          "package": "compact-string",
          "partial": "Compact String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#t:CompactString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "all",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if all elements of the CompactString satisfy the predicate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "any",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if any element of the CompactString satisfies the predicate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two CompactStrings\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "append",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two CompactStrings",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "append",
          "normalized": "CompactString-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "appendFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file Files are written using ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "appendFile",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark.\n   If the file is empty, it is written using ASCII with a Byte Order Mark.\n   If the encoding can not be determined the file is assumed to be UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "appendFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#appendFile%27",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file The encoding of the file is determined based on Byte Order Mark If the file is empty it is written using ASCII with Byte Order Mark If the encoding can not be determined the file is assumed to be UTF-8",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "appendFile'",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:appendFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "break",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e breakEnd p == spanEnd (not.p)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "breakEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the CompactString breakEnd spanEnd not.p",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "breakEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "concat",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "concat",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "concatMap",
          "package": "compact-string",
          "signature": "(Char -\u003e CompactString) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over CompactString and concatenate the results",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "concatMap",
          "normalized": "(Char-\u003eCompactString)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Map",
          "signature": "(Char-\u003eCompactString)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "cons",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "cons",
          "normalized": "Char-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e count c = length . elemIndices c\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "count",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Int",
          "source": "src/Data-CompactString-ASCII.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the CompactString count length elemIndices",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "count",
          "normalized": "Char-\u003eCompactString-\u003eInt",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode e = recode =\u003c\u003c fromByteString\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the ByteString is not a valid encoded string\n   or if the string can not be represented in ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "decode",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-ASCII.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Fails if the ByteString is not valid encoded string or if the string can not be represented in ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "decode",
          "normalized": "a-\u003eByteString-\u003eb CompactString",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Fails if the input is not a valid encoded string\n   or if the string can not be represented in ASCII.\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "decodeBOM",
          "package": "compact-string",
          "signature": "ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-ASCII.html#decodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Fails if the input is not valid encoded string or if the string can not be represented in ASCII For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "decodeBOM",
          "normalized": "ByteString-\u003ea CompactString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:decodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Raises an error if the input is not a valid encoded string\n   or if the string can not be represented in ASCII.\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "decodeBOM_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#decodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Raises an error if the input is not valid encoded string or if the string can not be represented in ASCII For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "decodeBOM_",
          "normalized": "ByteString-\u003eCompactString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:decodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode_ e = recode_ . fromByteString_\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the ByteString is not a valid encoded string\n   or if the string can not be represented in ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "decode_",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#decode_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Raises an error if the ByteString is not valid encoded string or if the string can not be represented in ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "decode_",
          "normalized": "a-\u003eByteString-\u003eCompactString",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:decode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003eempty\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "drop",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or empty if length xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "drop",
          "normalized": "Int-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "dropWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "elem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the CompactString membership predicate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "elem",
          "normalized": "Char-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. \n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "elemIndex",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-ASCII.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "elemIndex",
          "normalized": "Char-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "Char-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs == \n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "elemIndexEnd",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-ASCII.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given CompactString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "elemIndexEnd",
          "normalized": "Char-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "Char-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "elemIndices",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e [Int]",
          "source": "src/Data-CompactString-ASCII.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "elemIndices",
          "normalized": "Char-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "Char-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "empty",
          "package": "compact-string",
          "signature": "CompactString",
          "source": "src/Data-CompactString-ASCII.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "empty",
          "package": "compact-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode e = liftM toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "encode",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e m ByteString",
          "source": "src/Data-CompactString-ASCII.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode liftM toByteString recode But it might be faster for some combinations of encodings Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "encode",
          "normalized": "a-\u003eCompactString-\u003eb ByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "encodeBOM",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e m ByteString",
          "source": "src/Data-CompactString-ASCII.html#encodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "encodeBOM",
          "normalized": "a-\u003eCompactString-\u003eb ByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:encodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "encodeBOM_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-ASCII.html#encodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "encodeBOM_",
          "normalized": "a-\u003eCompactString-\u003eByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:encodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode_ e = toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "encode_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-ASCII.html#encode_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode toByteString recode But it might be faster for some combinations of encodings Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "encode_",
          "normalized": "a-\u003eCompactString-\u003eByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:encode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a CompactString containing those characters that satisfy the\n predicate. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "filter",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and CompactString returns CompactString containing those characters that satisfy the predicate This function is subject to array fusion",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p `index` n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "find",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Char",
          "source": "src/Data-CompactString-ASCII.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and CompactString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just index Nothing",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Char",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the CompactString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "findIndex",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-ASCII.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and CompactString and returns the index of the first element in the CompactString satisfying the predicate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which satisfies the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following holds:\n\u003c/p\u003e\u003cpre\u003e findIndexEnd c xs == \n (-) (length xs - 1) `fmap` findIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "findIndexEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-ASCII.html#findIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The findIndexEnd function returns the last index of the element in the given CompactString which satisfies the predicate or Nothing if there is no such element The following holds findIndexEnd xs length xs fmap findIndex reverse xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "findIndexEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "findIndices",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e [Int]",
          "source": "src/Data-CompactString-ASCII.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first index of a substring in another string,\n   or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the string is not found.\n   \u003ccode\u003efindSubstring p s\u003c/code\u003e is equivalent to \u003ccode\u003elistToMaybe (findSubstrings p s)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.CompactString.ASCII\",\"Data.CompactString.UTF16\",\"Data.CompactString.UTF8\"]",
          "name": "findSubstring",
          "package": "compact-string",
          "signature": "CompactString-\u003e CompactString-\u003e Maybe Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findSubstring\",\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:findSubstring\",\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:findSubstring\"]"
        },
        "index": {
          "description": "Get the first index of substring in another string or Nothing if the string is not found findSubstring is equivalent to listToMaybe findSubstrings",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "findSubstring",
          "normalized": "CompactString-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Substring",
          "signature": "CompactString-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the indexes of all (possibly overlapping) occurances of a\n substring in a string.  This function uses the Knuth-Morris-Pratt\n string matching algorithm.\n\u003c/p\u003e",
          "module": "[\"Data.CompactString.ASCII\",\"Data.CompactString.UTF16\",\"Data.CompactString.UTF8\"]",
          "name": "findSubstrings",
          "package": "compact-string",
          "signature": "CompactString-\u003e CompactString-\u003e [Int]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findSubstrings\",\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:findSubstrings\",\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:findSubstrings\"]"
        },
        "index": {
          "description": "Find the indexes of all possibly overlapping occurances of substring in string This function uses the Knuth-Morris-Pratt string matching algorithm",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "findSubstrings",
          "normalized": "CompactString-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Substrings",
          "signature": "CompactString-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:findSubstrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a CompactString, reduces the\n CompactString using the binary operator, from left to right.\n This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldl",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-ASCII.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and CompactString reduces the CompactString using the binary operator from left to right This function is subject to array fusion",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n Though actually foldl is also strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldl'",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-ASCII.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator Though actually foldl is also strict in the accumulator",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n This function is subject to array fusion. \n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty CompactString This function is subject to array fusion An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldl1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldr",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-ASCII.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldr'",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-ASCII.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldr'",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr1\\'' is a variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e, but is strict in the\n accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "foldr1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr1 but is strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "foldr1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Fails if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "fromByteString",
          "package": "compact-string",
          "signature": "ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-ASCII.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Fails if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "fromByteString",
          "normalized": "ByteString-\u003ea CompactString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Raises an error if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "fromByteString_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#fromByteString_",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Raises an error if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "fromByteString_",
          "normalized": "ByteString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:fromByteString_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Equivalent to \u003ccode\u003ehGetContents stdin\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInput is assumed to be in ASCII, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "getContents",
          "package": "compact-string",
          "signature": "IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "getContents Equivalent to hGetContents stdin Input is assumed to be in ASCII this may not be appropriate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "getContents",
          "package": "compact-string",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from stdin.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "getLine",
          "package": "compact-string",
          "signature": "IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#getLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from stdin",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "getLine",
          "package": "compact-string",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and returns a list of\n CompactStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "group",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes CompactString and returns list of CompactStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "group",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "groupBy",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hGet",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read CompactString directly from the specified Handle The handle is interpreted as ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hGetContents",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The handle is interpreted as ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe encoding is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hGetContents'",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#hGetContents%27",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The encoding is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hGetContents'",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Contents'",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hGetContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from a handle\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hGetLine",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#hGetLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from handle",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is identical to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hGetNonBlocking",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#hGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "hGetNonBlocking is identical to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available The handle is interpreted as ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOutput is written in ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hPut",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Outputs CompactString to the specified Handle Output is written in ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hPut",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility \n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hPutStr",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hPutStr",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a handle, appending a newline byte\n\u003c/p\u003e\u003cp\u003eOutput is written in ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "hPutStrLn",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to handle appending newline byte Output is written in ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "head",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "head",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the front of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e headView s = if null s then Nothing else Just (head s, tail s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "headView",
          "package": "compact-string",
          "signature": "CompactString -\u003e Maybe (Char, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#headView",
          "type": "function"
        },
        "index": {
          "description": "view of the front of CompactString headView if null then Nothing else Just head tail",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "headView",
          "normalized": "CompactString-\u003eMaybe(Char,CompactString)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString-\u003eMaybe(Char,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:headView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "index",
          "package": "compact-string",
          "signature": "CompactString -\u003e Int -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#index",
          "type": "function"
        },
        "index": {
          "description": "CompactString index subscript operator starting from",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "index",
          "normalized": "CompactString-\u003eInt-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "init",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of CompactString except the last one An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "init",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "inits",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#inits",
          "type": "function"
        },
        "index": {
          "description": "Return all initial segments of the given CompactString shortest first",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "inits",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eCompactString -\u003e CompactString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device. It's great for writing one line programs!\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "interact",
          "package": "compact-string",
          "signature": "(CompactString -\u003e CompactString) -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#interact",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type CompactString CompactString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device It great for writing one line programs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "interact",
          "normalized": "(CompactString-\u003eCompactString)-\u003eIO()",
          "package": "compact-string",
          "signature": "(CompactString-\u003eCompactString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "intercalate",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "The intercalate function takes CompactString and list of CompactString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "intercalate",
          "normalized": "CompactString-\u003e[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and `intersperses' that character between the elements of\n the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "intersperse",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and CompactString and intersperses that character between the elements of the CompactString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "intersperse",
          "normalized": "Char-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether one string is a substring of another. \u003ccode\u003eisInfixOf\n p s\u003c/code\u003e is equivalent to \u003ccode\u003enot (null (findSubstrings p s))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.CompactString.ASCII\",\"Data.CompactString.UTF16\",\"Data.CompactString.UTF8\"]",
          "name": "isInfixOf",
          "package": "compact-string",
          "signature": "CompactString-\u003e CompactString-\u003e Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:isInfixOf\",\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:isInfixOf\",\"http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:isInfixOf\"]"
        },
        "index": {
          "description": "Check whether one string is substring of another isInfixOf is equivalent to not null findSubstrings",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "isInfixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Infix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "isPrefixOf",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two CompactString and returns True iff the first is prefix of the second",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "isPrefixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Prefix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "isSuffixOf",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two CompactString and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "isSuffixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Suffix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a ByteString, which must be finite and non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "last",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "last",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the back of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e lastView s = if null s then Nothing else Just (init s, last s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "lastView",
          "package": "compact-string",
          "signature": "CompactString -\u003e Maybe (CompactString, Char)",
          "source": "src/Data-CompactString-ASCII.html#lastView",
          "type": "function"
        },
        "index": {
          "description": "view of the back of CompactString lastView if null then Nothing else Just init last",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "lastView",
          "normalized": "CompactString-\u003eMaybe(CompactString,Char)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString-\u003eMaybe(CompactString,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:lastView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a CompactString as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "length",
          "package": "compact-string",
          "signature": "CompactString -\u003e Int",
          "source": "src/Data-CompactString-ASCII.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of CompactString as an Int",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "length",
          "normalized": "CompactString-\u003eInt",
          "package": "compact-string",
          "signature": "CompactString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e up into a list of CompactStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "lines",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks CompactString up into list of CompactStrings at newline Chars The resulting strings do not contain newlines",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "lines",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the CompactString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "map",
          "package": "compact-string",
          "signature": "(Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the CompactString obtained by applying to each element of xs This function is subject to array fusion",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "mapAccumL",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString -\u003e (acc, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of CompactString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString-\u003e(a,CompactString)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString-\u003e(acc,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "mapAccumR",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString -\u003e (acc, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of CompactString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString-\u003e(a,CompactString)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString-\u003e(acc,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e map Char functions, provided with the index at each position.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "mapIndexed",
          "package": "compact-string",
          "signature": "(Int -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#mapIndexed",
          "type": "function"
        },
        "index": {
          "description": "map Char functions provided with the index at each position",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "mapIndexed",
          "normalized": "(Int-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Indexed",
          "signature": "(Int-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:mapIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "maximum",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "maximum",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "minimum",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-ASCII.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "minimum",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "notElem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "notElem",
          "normalized": "Char-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Elem",
          "signature": "Char-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a CompactString is empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "null",
          "package": "compact-string",
          "signature": "CompactString -\u003e Bool",
          "source": "src/Data-CompactString-ASCII.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether CompactString is empty",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "null",
          "normalized": "CompactString-\u003eBool",
          "package": "compact-string",
          "signature": "CompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "pack",
          "package": "compact-string",
          "signature": "String -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "pack",
          "normalized": "String-\u003eCompactString",
          "package": "compact-string",
          "signature": "String-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a pair of CompactStrings.\n The first containing those characters that satisfy the predicate,\n the second containg those that don't.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "partition",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#partition",
          "type": "function"
        },
        "index": {
          "description": "partition applied to predicate and CompactString returns pair of CompactStrings The first containing those characters that satisfy the predicate the second containg those that don",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "partition",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout.\n\u003c/p\u003e\u003cp\u003eOutput is written in ASCII, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "putStr",
          "package": "compact-string",
          "signature": "CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#putStr",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout Output is written in ASCII this may not be appropriate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "putStr",
          "normalized": "CompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Str",
          "signature": "CompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout, appending a newline character.\n\u003c/p\u003e\u003cp\u003eOutput is written in ASCII, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "putStrLn",
          "package": "compact-string",
          "signature": "CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout appending newline character Output is written in ASCII this may not be appropriate",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "putStrLn",
          "normalized": "CompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Str Ln",
          "signature": "CompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eFiles are assumed to be in ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "readFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows Files are assumed to be in ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "readFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO CompactString",
          "source": "src/Data-CompactString-ASCII.html#readFile%27",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows The encoding of the file is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a CompactString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "replicate",
          "package": "compact-string",
          "signature": "Int -\u003e Char -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is CompactString of length with the value of every element The following holds replicate unfoldr Just",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eChar-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "reverse",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "reverse",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "scanl",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "scanl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "scanl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "scanr",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "scanr",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "scanr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "scanr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "singleton",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "singleton",
          "normalized": "Char-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a byte to the end of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "snoc",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "snoc",
          "normalized": "CompactString-\u003eChar-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Sort a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "sort",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#sort",
          "type": "function"
        },
        "index": {
          "description": "log Sort CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "sort",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "span",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWe have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) cs\n    == \n let (x,y) = span (not.isSpace) (reverse cs) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "spanEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the CompactString We have spanEnd not.isSpace and spanEnd not isSpace cs let span not.isSpace reverse cs in reverse reverse",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "spanEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "split",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new CompactString that are slices of the original",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "split",
          "normalized": "Char-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "splitAt",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "splitAt",
          "normalized": "Int-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "At",
          "signature": "Int-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "splitWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits CompactString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "tail",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "tail",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "tails",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#tails",
          "type": "function"
        },
        "index": {
          "description": "Return all final segments of the given CompactString longest first",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "tails",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a CompactString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "take",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to CompactString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "take",
          "normalized": "Int-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a CompactString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "takeWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and CompactString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CompactString to a ByteString\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "toByteString",
          "package": "compact-string",
          "signature": "CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-ASCII.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert CompactString to ByteString",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "toByteString",
          "normalized": "CompactString-\u003eByteString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "CompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "transpose",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its CompactString argument",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "transpose",
          "normalized": "[CompactString]-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "[CompactString]-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a \n ByteString from a seed value.  The function takes the element and \n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the CompactString or returns \n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next byte in the string, \n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "unfoldr",
          "package": "compact-string",
          "signature": "(acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the CompactString or returns Just in which case is the next byte in the string and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eCompactString",
          "package": "compact-string",
          "signature": "(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fst (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "unfoldrN",
          "package": "compact-string",
          "signature": "Int -\u003e (acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e (CompactString, Maybe acc)",
          "source": "src/Data-CompactString-ASCII.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr fst unfoldrN take unfoldr",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(CompactString,Maybe a)",
          "package": "compact-string",
          "signature": "Int-\u003e(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003e(CompactString,Maybe acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "unlines",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "unlines",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "unpack",
          "package": "compact-string",
          "signature": "CompactString -\u003e String",
          "source": "src/Data-CompactString-ASCII.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts CompactString to String",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "unpack",
          "normalized": "CompactString-\u003eString",
          "package": "compact-string",
          "signature": "CompactString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "unwords",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "unwords",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n CompactStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "unzip",
          "package": "compact-string",
          "signature": "[(Char, Char)] -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-ASCII.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of CompactStrings Note that this performs two pack operations",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "unzip",
          "normalized": "[(Char,Char)]-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "[(Char,Char)]-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, fails, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "validate",
          "package": "compact-string",
          "signature": "CompactString -\u003e m CompactString",
          "source": "src/Data-CompactString-ASCII.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid fails otherwise returns the input",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "validate",
          "normalized": "CompactString-\u003ea CompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, throws an error, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "validate_",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#validate_",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid throws an error otherwise returns the input",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "validate_",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:validate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space. And\n\u003c/p\u003e\u003cpre\u003e words = filter (not . null) . splitWith isSpace\n\u003c/pre\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "words",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-ASCII.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space And words filter not null splitWith isSpace",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "words",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using ASCII.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "writeFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using ASCII",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "writeFile",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using ASCII.\n   A Byte Order Mark is also written.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "writeFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-ASCII.html#writeFile%27",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using ASCII Byte Order Mark is also written",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "writeFile'",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "zip",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e [(Char, Char)]",
          "source": "src/Data-CompactString-ASCII.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "zip",
          "normalized": "CompactString-\u003eCompactString-\u003e[(Char,Char)]",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums. \n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "zipWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e b) -\u003e CompactString -\u003e CompactString -\u003e [b]",
          "source": "src/Data-CompactString-ASCII.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eCompactString-\u003eCompactString-\u003e[a]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003eb)-\u003eCompactString-\u003eCompactString-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised version of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e for the common case of a\n simultaneous map over two \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es, to build a 3rd. Rewrite rules\n are used to automatically covert zipWith into zipWith' when a pack is\n performed on the result of zipWith, but we also export it for\n convenience.\n\u003c/p\u003e",
          "module": "Data.CompactString.ASCII",
          "name": "zipWith'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-ASCII.html#zipWith%27",
          "type": "function"
        },
        "index": {
          "description": "specialised version of zipWith for the common case of simultaneous map over two CompactString to build rd Rewrite rules are used to automatically covert zipWith into zipWith when pack is performed on the result of zipWith but we also export it for convenience",
          "hierarchy": "Data CompactString ASCII",
          "module": "Data.CompactString.ASCII",
          "name": "zipWith'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "With'",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-ASCII.html#v:zipWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDifferent encodings of characters into bytes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "Encodings",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html",
          "type": "module"
        },
        "index": {
          "description": "Different encodings of characters into bytes",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "Encodings",
          "package": "compact-string",
          "partial": "Encodings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the ASCII encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "ASCII",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#ASCII",
          "type": "data"
        },
        "index": {
          "description": "Tag representing the ASCII encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "ASCII",
          "package": "compact-string",
          "partial": "ASCII",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:ASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing big endian encoding\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "BE",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#BE",
          "type": "data"
        },
        "index": {
          "description": "Tag representing big endian encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "BE",
          "package": "compact-string",
          "partial": "BE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing a custom encoding optimized for memory usage.\n\u003c/p\u003e\u003cp\u003eThis encoding looks like UTF-8, but is slightly more efficient.\n It requires at most 3 byes per character, as opposed to 4 for UTF-8.\n\u003c/p\u003e\u003cp\u003eEncoding looks like:\n\u003c/p\u003e\u003cpre\u003e                   0zzzzzzz -\u003e 0zzzzzzz\n          00yyyyyy yzzzzzzz -\u003e 1xxxxxxx 1yyyyyyy\n 000xxxxx xxyyyyyy yzzzzzzz -\u003e 1xxxxxxx 0yyyyyyy 1zzzzzzz\n\u003c/pre\u003e\u003cp\u003eThe reasoning behind the tag bits is that this allows the char to be read both forwards\n and backwards.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "Compact",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#Compact",
          "type": "data"
        },
        "index": {
          "description": "Tag representing custom encoding optimized for memory usage This encoding looks like UTF-8 but is slightly more efficient It requires at most byes per character as opposed to for UTF-8 Encoding looks like zzzzzzz zzzzzzz yyyyyy yzzzzzzz xxxxxxx yyyyyyy xxxxx xxyyyyyy yzzzzzzz xxxxxxx yyyyyyy zzzzzzz The reasoning behind the tag bits is that this allows the char to be read both forwards and backwards",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "Compact",
          "package": "compact-string",
          "partial": "Compact",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:Compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing little endian encoding\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "LE",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#LE",
          "type": "data"
        },
        "index": {
          "description": "Tag representing little endian encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "LE",
          "package": "compact-string",
          "partial": "LE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the ISO 8859-1 encoding (latin 1).\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "Latin1",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#Latin1",
          "type": "data"
        },
        "index": {
          "description": "Tag representing the ISO encoding latin",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "Latin1",
          "package": "compact-string",
          "partial": "Latin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:Latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe platform native endianness\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "Native",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#Native",
          "type": "type"
        },
        "index": {
          "description": "The platform native endianness",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "Native",
          "package": "compact-string",
          "partial": "Native",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:Native"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the UTF-16 encoding\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF16",
          "type": "data"
        },
        "index": {
          "description": "Tag representing the UTF-16 encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16",
          "package": "compact-string",
          "partial": "UTF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the big endian UTF-16 encoding, aka. UTF-16BE.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16BE",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF16BE",
          "type": "type"
        },
        "index": {
          "description": "Tag representing the big endian UTF-16 encoding aka UTF-16BE",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16BE",
          "package": "compact-string",
          "partial": "UTF BE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF16BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the little endian UTF-16 encoding, aka. UTF-16LE.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16LE",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF16LE",
          "type": "type"
        },
        "index": {
          "description": "Tag representing the little endian UTF-16 encoding aka UTF-16LE",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16LE",
          "package": "compact-string",
          "partial": "UTF LE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the platform native UTF-16 encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16Native",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF16Native",
          "type": "type"
        },
        "index": {
          "description": "Tag representing the platform native UTF-16 encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16Native",
          "package": "compact-string",
          "partial": "UTF Native",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF16Native"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the UTF-32 encoding\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF32",
          "type": "data"
        },
        "index": {
          "description": "Tag representing the UTF-32 encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32",
          "package": "compact-string",
          "partial": "UTF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the big endian UTF-32 encoding, aka. UTF-32BE.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32BE",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF32BE",
          "type": "type"
        },
        "index": {
          "description": "Tag representing the big endian UTF-32 encoding aka UTF-32BE",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32BE",
          "package": "compact-string",
          "partial": "UTF BE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF32BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the little endian UTF-32 encoding, aka. UTF-32LE.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32LE",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF32LE",
          "type": "type"
        },
        "index": {
          "description": "Tag representing the little endian UTF-32 encoding aka UTF-32LE",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32LE",
          "package": "compact-string",
          "partial": "UTF LE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the platform native UTF-32 encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32Native",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF32Native",
          "type": "type"
        },
        "index": {
          "description": "Tag representing the platform native UTF-32 encoding",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32Native",
          "package": "compact-string",
          "partial": "UTF Native",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF32Native"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag representing the UTF-8 encoding.\n   Use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e UTF8\u003c/code\u003e for UTF-8 encoded strings.\n\u003c/p\u003e",
          "module": "Data.CompactString.Encodings",
          "name": "UTF8",
          "package": "compact-string",
          "source": "src/Data-CompactString-Encodings.html#UTF8",
          "type": "data"
        },
        "index": {
          "description": "Tag representing the UTF-8 encoding Use CompactString UTF8 for UTF-8 encoded strings",
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF8",
          "package": "compact-string",
          "partial": "UTF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#t:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "ASCII",
          "package": "compact-string",
          "signature": "ASCII",
          "source": "src/Data-CompactString-Encodings.html#ASCII",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "ASCII",
          "package": "compact-string",
          "partial": "ASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:ASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "BE",
          "package": "compact-string",
          "signature": "BE",
          "source": "src/Data-CompactString-Encodings.html#BE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "BE",
          "package": "compact-string",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "Compact",
          "package": "compact-string",
          "signature": "Compact",
          "source": "src/Data-CompactString-Encodings.html#Compact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "Compact",
          "package": "compact-string",
          "partial": "Compact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:Compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "LE",
          "package": "compact-string",
          "signature": "LE",
          "source": "src/Data-CompactString-Encodings.html#LE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "LE",
          "package": "compact-string",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "Latin1",
          "package": "compact-string",
          "signature": "Latin1",
          "source": "src/Data-CompactString-Encodings.html#Latin1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "Latin1",
          "package": "compact-string",
          "partial": "Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:Latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "UTF16",
          "package": "compact-string",
          "signature": "UTF16 endianness",
          "source": "src/Data-CompactString-Encodings.html#UTF16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF16",
          "package": "compact-string",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:UTF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "UTF32",
          "package": "compact-string",
          "signature": "UTF32 endianness",
          "source": "src/Data-CompactString-Encodings.html#UTF32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF32",
          "package": "compact-string",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:UTF32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Encodings",
          "name": "UTF8",
          "package": "compact-string",
          "signature": "UTF8",
          "source": "src/Data-CompactString-Encodings.html#UTF8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Encodings",
          "module": "Data.CompactString.Encodings",
          "name": "UTF8",
          "package": "compact-string",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Encodings.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFusable loop functions, mirrors \u003ca\u003eData.ByteString.Fusion\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.Fusion",
          "name": "Fusion",
          "package": "compact-string",
          "source": "src/Data-CompactString-Fusion.html",
          "type": "module"
        },
        "index": {
          "description": "Fusable loop functions mirrors Data.ByteString.Fusion",
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "Fusion",
          "package": "compact-string",
          "partial": "Fusion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for accumulators which can be ignored. The rewrite rules rely on\n the fact that no bottoms of this type are ever constructed; hence, we can\n assume \u003ccode\u003e(_ :: NoAcc) \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.Fusion",
          "name": "NoAcc",
          "package": "compact-string",
          "source": "src/Data-CompactString-Fusion.html#NoAcc",
          "type": "data"
        },
        "index": {
          "description": "Data type for accumulators which can be ignored The rewrite rules rely on the fact that no bottoms of this type are ever constructed hence we can assume NoAcc seq",
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "NoAcc",
          "package": "compact-string",
          "partial": "No Acc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#t:NoAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "NoAcc",
          "package": "compact-string",
          "signature": "NoAcc",
          "source": "src/Data-CompactString-Fusion.html#NoAcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "NoAcc",
          "package": "compact-string",
          "partial": "No Acc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:NoAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "filterEFL",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e AccEFL NoAcc",
          "source": "src/Data-CompactString-Fusion.html#filterEFL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "filterEFL",
          "normalized": "(Char-\u003eBool)-\u003eAccEFL NoAcc",
          "package": "compact-string",
          "partial": "EFL",
          "signature": "(Char-\u003eBool)-\u003eAccEFL NoAcc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:filterEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "foldEFL",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e AccEFL acc",
          "source": "src/Data-CompactString-Fusion.html#foldEFL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "foldEFL",
          "normalized": "(a-\u003eChar-\u003ea)-\u003eAccEFL a",
          "package": "compact-string",
          "partial": "EFL",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eAccEFL acc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:foldEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "loopAcc",
          "package": "compact-string",
          "signature": "PairS acc arr -\u003e acc",
          "source": "src/Data-CompactString-Fusion.html#loopAcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopAcc",
          "normalized": "PairS a b-\u003ea",
          "package": "compact-string",
          "partial": "Acc",
          "signature": "PairS acc arr-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjection functions that are fusion friendly (as in, we determine when\n they are inlined)\n\u003c/p\u003e",
          "module": "Data.CompactString.Fusion",
          "name": "loopArr",
          "package": "compact-string",
          "signature": "PairS acc arr -\u003e arr",
          "source": "src/Data-CompactString-Fusion.html#loopArr",
          "type": "function"
        },
        "index": {
          "description": "Projection functions that are fusion friendly as in we determine when they are inlined",
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopArr",
          "normalized": "PairS a b-\u003eb",
          "package": "compact-string",
          "partial": "Arr",
          "signature": "PairS acc arr-\u003earr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "loopDown",
          "package": "compact-string",
          "signature": "AccEFL acc -\u003e acc -\u003e CompactString a -\u003e PairS acc (CompactString a)",
          "source": "src/Data-CompactString-Fusion.html#loopDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopDown",
          "normalized": "AccEFL a-\u003ea-\u003eCompactString b-\u003ePairS a(CompactString b)",
          "package": "compact-string",
          "partial": "Down",
          "signature": "AccEFL acc-\u003eacc-\u003eCompactString a-\u003ePairS acc(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "loopDownFold",
          "package": "compact-string",
          "signature": "FoldEFL acc -\u003e acc -\u003e CompactString a -\u003e acc",
          "source": "src/Data-CompactString-Fusion.html#loopDownFold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopDownFold",
          "normalized": "FoldEFL a-\u003ea-\u003eCompactString b-\u003ea",
          "package": "compact-string",
          "partial": "Down Fold",
          "signature": "FoldEFL acc-\u003eacc-\u003eCompactString a-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopDownFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "loopUp",
          "package": "compact-string",
          "signature": "AccEFL acc -\u003e acc -\u003e CompactString a -\u003e PairS acc (CompactString a)",
          "source": "src/Data-CompactString-Fusion.html#loopUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopUp",
          "normalized": "AccEFL a-\u003ea-\u003eCompactString b-\u003ePairS a(CompactString b)",
          "package": "compact-string",
          "partial": "Up",
          "signature": "AccEFL acc-\u003eacc-\u003eCompactString a-\u003ePairS acc(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike loopUp, but the size of the buffer can only become smaller\n\u003c/p\u003e",
          "module": "Data.CompactString.Fusion",
          "name": "loopUpC",
          "package": "compact-string",
          "signature": "AccEFL acc -\u003e acc -\u003e CompactString a -\u003e PairS acc (CompactString a)",
          "source": "src/Data-CompactString-Fusion.html#loopUpC",
          "type": "function"
        },
        "index": {
          "description": "like loopUp but the size of the buffer can only become smaller",
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopUpC",
          "normalized": "AccEFL a-\u003ea-\u003eCompactString b-\u003ePairS a(CompactString b)",
          "package": "compact-string",
          "partial": "Up",
          "signature": "AccEFL acc-\u003eacc-\u003eCompactString a-\u003ePairS acc(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopUpC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "loopUpFold",
          "package": "compact-string",
          "signature": "FoldEFL acc -\u003e acc -\u003e CompactString a -\u003e acc",
          "source": "src/Data-CompactString-Fusion.html#loopUpFold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "loopUpFold",
          "normalized": "FoldEFL a-\u003ea-\u003eCompactString b-\u003ea",
          "package": "compact-string",
          "partial": "Up Fold",
          "signature": "FoldEFL acc-\u003eacc-\u003eCompactString a-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:loopUpFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement function implementing a map and fold\n\u003c/p\u003e",
          "module": "Data.CompactString.Fusion",
          "name": "mapAccumEFL",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e AccEFL acc",
          "source": "src/Data-CompactString-Fusion.html#mapAccumEFL",
          "type": "function"
        },
        "index": {
          "description": "Element function implementing map and fold",
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "mapAccumEFL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003eAccEFL a",
          "package": "compact-string",
          "partial": "Accum EFL",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eAccEFL acc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:mapAccumEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "mapEFL",
          "package": "compact-string",
          "signature": "(Char -\u003e Char) -\u003e AccEFL NoAcc",
          "source": "src/Data-CompactString-Fusion.html#mapEFL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "mapEFL",
          "normalized": "(Char-\u003eChar)-\u003eAccEFL NoAcc",
          "package": "compact-string",
          "partial": "EFL",
          "signature": "(Char-\u003eChar)-\u003eAccEFL NoAcc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:mapEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement function implementing a map with index\n\u003c/p\u003e",
          "module": "Data.CompactString.Fusion",
          "name": "mapIndexEFL",
          "package": "compact-string",
          "signature": "(Int -\u003e Char -\u003e Char) -\u003e AccEFL Int",
          "source": "src/Data-CompactString-Fusion.html#mapIndexEFL",
          "type": "function"
        },
        "index": {
          "description": "Element function implementing map with index",
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "mapIndexEFL",
          "normalized": "(Int-\u003eChar-\u003eChar)-\u003eAccEFL Int",
          "package": "compact-string",
          "partial": "Index EFL",
          "signature": "(Int-\u003eChar-\u003eChar)-\u003eAccEFL Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:mapIndexEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Fusion",
          "name": "scanEFL",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e AccEFL Char",
          "source": "src/Data-CompactString-Fusion.html#scanEFL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Fusion",
          "module": "Data.CompactString.Fusion",
          "name": "scanEFL",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eAccEFL Char",
          "package": "compact-string",
          "partial": "EFL",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eAccEFL Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Fusion.html#v:scanEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal functions for the CompactString type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.Internal",
          "name": "Internal",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal functions for the CompactString type",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "Internal",
          "package": "compact-string",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of loop functions\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "AccEFL",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#AccEFL",
          "type": "type"
        },
        "index": {
          "description": "Type of loop functions",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "AccEFL",
          "package": "compact-string",
          "partial": "Acc EFL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:AccEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "ByteString",
          "package": "compact-string",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "ByteString",
          "package": "compact-string",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA String using a compact, strict representation.\n   A \u003ccode\u003eCompactString a\u003c/code\u003e is encoded using encoding \u003ccode\u003ea\u003c/code\u003e, for example \u003ccode\u003eCompactString \u003ccode\u003eUTF8\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "CompactString",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#CompactString",
          "type": "newtype"
        },
        "index": {
          "description": "String using compact strict representation CompactString is encoded using encoding for example CompactString UTF8",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "CompactString",
          "package": "compact-string",
          "partial": "Compact String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:CompactString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way to encode characters into bytes\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "Encoding",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#Encoding",
          "type": "class"
        },
        "index": {
          "description": "way to encode characters into bytes",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "Encoding",
          "package": "compact-string",
          "partial": "Encoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "FoldEFL",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#FoldEFL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "FoldEFL",
          "package": "compact-string",
          "partial": "Fold EFL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:FoldEFL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn imperative loop transforming a string, using an accumulating parameter.\n   See Data.ByteString.Fusion\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "ImperativeLoop",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#ImperativeLoop",
          "type": "type"
        },
        "index": {
          "description": "An imperative loop transforming string using an accumulating parameter See Data.ByteString.Fusion",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "ImperativeLoop",
          "package": "compact-string",
          "partial": "Imperative Loop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:ImperativeLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImperativeLoop with no output\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "ImperativeLoop_",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#ImperativeLoop_",
          "type": "type"
        },
        "index": {
          "description": "ImperativeLoop with no output",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "ImperativeLoop_",
          "package": "compact-string",
          "partial": "Imperative Loop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:ImperativeLoop_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "MaybeS",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#MaybeS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "MaybeS",
          "package": "compact-string",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:MaybeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "PairS",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#PairS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "PairS",
          "package": "compact-string",
          "partial": "Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:PairS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "Proxy",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#Proxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "Proxy",
          "package": "compact-string",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": ":*:",
          "package": "compact-string",
          "signature": "a :*: !b",
          "source": "src/Data-CompactString-Internal.html#PairS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": ":*:",
          "package": "compact-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "CS",
          "package": "compact-string",
          "signature": "CS",
          "source": "src/Data-CompactString-Internal.html#CompactString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "CS",
          "package": "compact-string",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:CS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "JustS",
          "package": "compact-string",
          "signature": "JustS !a",
          "source": "src/Data-CompactString-Internal.html#MaybeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "JustS",
          "package": "compact-string",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:JustS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "NothingS",
          "package": "compact-string",
          "signature": "NothingS",
          "source": "src/Data-CompactString-Internal.html#MaybeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "NothingS",
          "package": "compact-string",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:NothingS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "PS",
          "package": "compact-string",
          "signature": "PS !(ForeignPtr Word8) !Int !Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "PS",
          "package": "compact-string",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat is the maximum number of bytes a string with the given number of characters contains?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "byteCount",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Int -\u003e Int",
          "source": "src/Data-CompactString-Internal.html#byteCount",
          "type": "method"
        },
        "index": {
          "description": "What is the maximum number of bytes string with the given number of characters contains",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "byteCount",
          "normalized": "Proxy a-\u003eInt-\u003eInt",
          "package": "compact-string",
          "partial": "Count",
          "signature": "Proxy a-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:byteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat is the maximum number of character a string with the given number of bytes contains?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "charCount",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Int -\u003e Int",
          "source": "src/Data-CompactString-Internal.html#charCount",
          "type": "method"
        },
        "index": {
          "description": "What is the maximum number of character string with the given number of bytes contains",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "charCount",
          "normalized": "Proxy a-\u003eInt-\u003eInt",
          "package": "compact-string",
          "partial": "Count",
          "signature": "Proxy a-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:charCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs ASCII a valid subset of the encoding?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "containsASCII",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Bool",
          "source": "src/Data-CompactString-Internal.html#containsASCII",
          "type": "method"
        },
        "index": {
          "description": "Is ASCII valid subset of the encoding",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "containsASCII",
          "normalized": "Proxy a-\u003eBool",
          "package": "compact-string",
          "partial": "ASCII",
          "signature": "Proxy a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:containsASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a character from one buffer to another, return the length of the character\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "copyChar",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO Int",
          "source": "src/Data-CompactString-Internal.html#copyChar",
          "type": "method"
        },
        "index": {
          "description": "Copy character from one buffer to another return the length of the character",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "copyChar",
          "normalized": "Proxy a-\u003ePtr Word-\u003ePtr Word-\u003eIO Int",
          "package": "compact-string",
          "partial": "Char",
          "signature": "Proxy a-\u003ePtr Word-\u003ePtr Word-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:copyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a character from one buffer to another, where the source pointer\n   points to the last byte of the character.\n   return the length of the character.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "copyCharRev",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO Int",
          "source": "src/Data-CompactString-Internal.html#copyCharRev",
          "type": "method"
        },
        "index": {
          "description": "Copy character from one buffer to another where the source pointer points to the last byte of the character return the length of the character",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "copyCharRev",
          "normalized": "Proxy a-\u003ePtr Word-\u003ePtr Word-\u003eIO Int",
          "package": "compact-string",
          "partial": "Char Rev",
          "signature": "Proxy a-\u003ePtr Word-\u003ePtr Word-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:copyCharRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "create",
          "package": "compact-string",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString-Internal.html#create",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "create",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO(CompactString a)",
          "package": "compact-string",
          "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "doDownLoop",
          "package": "compact-string",
          "signature": "Proxy a -\u003e AccEFL acc -\u003e acc -\u003e ImperativeLoop acc",
          "source": "src/Data-CompactString-Internal.html#doDownLoop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "doDownLoop",
          "normalized": "Proxy a-\u003eAccEFL b-\u003eb-\u003eImperativeLoop b",
          "package": "compact-string",
          "partial": "Down Loop",
          "signature": "Proxy a-\u003eAccEFL acc-\u003eacc-\u003eImperativeLoop acc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:doDownLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "doDownLoopFold",
          "package": "compact-string",
          "signature": "Proxy a -\u003e FoldEFL acc -\u003e acc -\u003e ImperativeLoop_ acc",
          "source": "src/Data-CompactString-Internal.html#doDownLoopFold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "doDownLoopFold",
          "normalized": "Proxy a-\u003eFoldEFL b-\u003eb-\u003eImperativeLoop_ b",
          "package": "compact-string",
          "partial": "Down Loop Fold",
          "signature": "Proxy a-\u003eFoldEFL acc-\u003eacc-\u003eImperativeLoop_ acc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:doDownLoopFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "doUpLoop",
          "package": "compact-string",
          "signature": "Proxy a -\u003e AccEFL acc -\u003e acc -\u003e ImperativeLoop acc",
          "source": "src/Data-CompactString-Internal.html#doUpLoop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "doUpLoop",
          "normalized": "Proxy a-\u003eAccEFL b-\u003eb-\u003eImperativeLoop b",
          "package": "compact-string",
          "partial": "Up Loop",
          "signature": "Proxy a-\u003eAccEFL acc-\u003eacc-\u003eImperativeLoop acc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:doUpLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "doUpLoopFold",
          "package": "compact-string",
          "signature": "Proxy a -\u003e FoldEFL acc -\u003e acc -\u003e ImperativeLoop_ acc",
          "source": "src/Data-CompactString-Internal.html#doUpLoopFold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "doUpLoopFold",
          "normalized": "Proxy a-\u003eFoldEFL b-\u003eb-\u003eImperativeLoop_ b",
          "package": "compact-string",
          "partial": "Up Loop Fold",
          "signature": "Proxy a-\u003eFoldEFL acc-\u003eacc-\u003eImperativeLoop_ acc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:doUpLoopFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "encoding",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Proxy a",
          "source": "src/Data-CompactString-Internal.html#encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "encoding",
          "normalized": "CompactString a-\u003eProxy a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eProxy a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "errorEmptyList",
          "package": "compact-string",
          "signature": "String -\u003e a",
          "source": "src/Data-CompactString-Internal.html#errorEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "errorEmptyList",
          "normalized": "String-\u003ea",
          "package": "compact-string",
          "partial": "Empty List",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:errorEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with an error message including the module name and function\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "failMessage",
          "package": "compact-string",
          "signature": "String -\u003e String -\u003e IO a",
          "source": "src/Data-CompactString-Internal.html#failMessage",
          "type": "function"
        },
        "index": {
          "description": "Fail with an error message including the module name and function",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "failMessage",
          "normalized": "String-\u003eString-\u003eIO a",
          "package": "compact-string",
          "partial": "Message",
          "signature": "String-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:failMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like unsafePerformIO, but we inline it. Big performance gains as\n it exposes lots of things to further inlining. \u003cem\u003eVery unsafe\u003c/em\u003e. In\n particular, you should do no memory allocation inside an\n \u003ccode\u003e\u003ca\u003einlinePerformIO\u003c/a\u003e\u003c/code\u003e block. On Hugs this is just \u003ccode\u003eunsafePerformIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "inlinePerformIO",
          "package": "compact-string",
          "signature": "IO a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Just like unsafePerformIO but we inline it Big performance gains as it exposes lots of things to further inlining Very unsafe In particular you should do no memory allocation inside an inlinePerformIO block On Hugs this is just unsafePerformIO",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "inlinePerformIO",
          "normalized": "IO a-\u003ea",
          "package": "compact-string",
          "partial": "Perform IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:inlinePerformIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "memcpy",
          "package": "compact-string",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CSize -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "memcpy",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO()",
          "package": "compact-string",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:memcpy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an errorr, with the message including the module name and function\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "moduleError",
          "package": "compact-string",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Data-CompactString-Internal.html#moduleError",
          "type": "function"
        },
        "index": {
          "description": "Raise an errorr with the message including the module name and function",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "moduleError",
          "normalized": "String-\u003eString-\u003ea",
          "package": "compact-string",
          "partial": "Error",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:moduleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat is the maximum size in bytes after transforming (using map) a string?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "newSize",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Int -\u003e Int",
          "source": "src/Data-CompactString-Internal.html#newSize",
          "type": "method"
        },
        "index": {
          "description": "What is the maximum size in bytes after transforming using map string",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "newSize",
          "normalized": "Proxy a-\u003eInt-\u003eInt",
          "package": "compact-string",
          "partial": "Size",
          "signature": "Proxy a-\u003eInt-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:newSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Prelude.fromEnum method restricted to the type Data.Char.Char.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "ord",
          "package": "compact-string",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The Prelude.fromEnum method restricted to the type Data.Char.Char",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "ord",
          "normalized": "Char-\u003eInt",
          "package": "compact-string",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the given memory location.\n\u003c/p\u003e\u003cp\u003eNote that the peek and poke functions might require properly\n  aligned addresses to function correctly.  This is architecture\n  dependent; thus, portable code should ensure that when peeking or\n  poking values of some type \u003ccode\u003ea\u003c/code\u003e, the alignment\n  constraint for \u003ccode\u003ea\u003c/code\u003e, as given by the function\n  \u003ccode\u003e\u003ca\u003ealignment\u003c/a\u003e\u003c/code\u003e is fulfilled.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "peek",
          "package": "compact-string",
          "signature": "Ptr a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Read value from the given memory location Note that the peek and poke functions might require properly aligned addresses to function correctly This is architecture dependent thus portable code should ensure that when peeking or poking values of some type the alignment constraint for as given by the function alignment is fulfilled",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peek",
          "normalized": "Ptr a-\u003eIO a",
          "package": "compact-string",
          "signature": "Ptr a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "peekByteOff",
          "package": "compact-string",
          "signature": "Ptr a -\u003e Int -\u003e IO a",
          "source": "src/Data-CompactString-Internal.html#peekByteOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peekByteOff",
          "normalized": "Ptr a-\u003eInt-\u003eIO a",
          "package": "compact-string",
          "partial": "Byte Off",
          "signature": "Ptr a-\u003eInt-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peekByteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from a memory buffer, return it and its length.\n   The buffer is guaranteed to contain a valid character.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "peekChar",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e IO (Int, Char)",
          "source": "src/Data-CompactString-Internal.html#peekChar",
          "type": "method"
        },
        "index": {
          "description": "Read character from memory buffer return it and its length The buffer is guaranteed to contain valid character",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peekChar",
          "normalized": "Proxy a-\u003ePtr Word-\u003eIO(Int,Char)",
          "package": "compact-string",
          "partial": "Char",
          "signature": "Proxy a-\u003ePtr Word-\u003eIO(Int,Char)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peekChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the character in a memory buffer\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "peekCharLen",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e IO Int",
          "source": "src/Data-CompactString-Internal.html#peekCharLen",
          "type": "method"
        },
        "index": {
          "description": "Return the length of the character in memory buffer",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peekCharLen",
          "normalized": "Proxy a-\u003ePtr Word-\u003eIO Int",
          "package": "compact-string",
          "partial": "Char Len",
          "signature": "Proxy a-\u003ePtr Word-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peekCharLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the character in a memory buffer,\n   given a pointer to the \u003cem\u003elast\u003c/em\u003e byte.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "peekCharLenRev",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e IO Int",
          "source": "src/Data-CompactString-Internal.html#peekCharLenRev",
          "type": "method"
        },
        "index": {
          "description": "Return the length of the character in memory buffer given pointer to the last byte",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peekCharLenRev",
          "normalized": "Proxy a-\u003ePtr Word-\u003eIO Int",
          "package": "compact-string",
          "partial": "Char Len Rev",
          "signature": "Proxy a-\u003ePtr Word-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peekCharLenRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from a memory buffer, return it and its length,\n   given a pointer to the \u003cem\u003elast\u003c/em\u003e byte.\n   The buffer is guaranteed to contain a valid character.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "peekCharRev",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e IO (Int, Char)",
          "source": "src/Data-CompactString-Internal.html#peekCharRev",
          "type": "method"
        },
        "index": {
          "description": "Read character from memory buffer return it and its length given pointer to the last byte The buffer is guaranteed to contain valid character",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peekCharRev",
          "normalized": "Proxy a-\u003ePtr Word-\u003eIO(Int,Char)",
          "package": "compact-string",
          "partial": "Char Rev",
          "signature": "Proxy a-\u003ePtr Word-\u003eIO(Int,Char)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peekCharRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from a memory buffer, return it and its length.\n   The buffer is not guaranteed to contain a valid character, so that should\n   be verified. There is also no guarantee that the length of the buffer (also given)\n   is sufficient to contain a whole character.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "peekCharSafe",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Int -\u003e Ptr Word8 -\u003e IO (Int, Char)",
          "source": "src/Data-CompactString-Internal.html#peekCharSafe",
          "type": "method"
        },
        "index": {
          "description": "Read character from memory buffer return it and its length The buffer is not guaranteed to contain valid character so that should be verified There is also no guarantee that the length of the buffer also given is sufficient to contain whole character",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "peekCharSafe",
          "normalized": "Proxy a-\u003eInt-\u003ePtr Word-\u003eIO(Int,Char)",
          "package": "compact-string",
          "partial": "Char Safe",
          "signature": "Proxy a-\u003eInt-\u003ePtr Word-\u003eIO(Int,Char)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:peekCharSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplusPtr that preserves the pointer type\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "plusPtr",
          "package": "compact-string",
          "signature": "Ptr a -\u003e Int -\u003e Ptr a",
          "source": "src/Data-CompactString-Internal.html#plusPtr",
          "type": "function"
        },
        "index": {
          "description": "plusPtr that preserves the pointer type",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "plusPtr",
          "normalized": "Ptr a-\u003eInt-\u003ePtr a",
          "package": "compact-string",
          "partial": "Ptr",
          "signature": "Ptr a-\u003eInt-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:plusPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the given value to the given memory location.  Alignment\n restrictions might apply; see \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "poke",
          "package": "compact-string",
          "signature": "Ptr a -\u003e a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write the given value to the given memory location Alignment restrictions might apply see peek",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "poke",
          "normalized": "Ptr a-\u003ea-\u003eIO()",
          "package": "compact-string",
          "signature": "Ptr a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "pokeByteOff",
          "package": "compact-string",
          "signature": "Ptr a -\u003e Int -\u003e a -\u003e IO ()",
          "source": "src/Data-CompactString-Internal.html#pokeByteOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "pokeByteOff",
          "normalized": "Ptr a-\u003eInt-\u003ea-\u003eIO()",
          "package": "compact-string",
          "partial": "Byte Off",
          "signature": "Ptr a-\u003eInt-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:pokeByteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character and return the size used\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "pokeChar",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e Char -\u003e IO Int",
          "source": "src/Data-CompactString-Internal.html#pokeChar",
          "type": "method"
        },
        "index": {
          "description": "Write character and return the size used",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "pokeChar",
          "normalized": "Proxy a-\u003ePtr Word-\u003eChar-\u003eIO Int",
          "package": "compact-string",
          "partial": "Char",
          "signature": "Proxy a-\u003ePtr Word-\u003eChar-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:pokeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a character returns the length of that character,\n   and a function to write it to a memory buffer.\n   if the encoding can not represent the character, the io function should \u003ccode\u003efail\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "pokeCharFun",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Char -\u003e (Int, Ptr Word8 -\u003e IO ())",
          "source": "src/Data-CompactString-Internal.html#pokeCharFun",
          "type": "method"
        },
        "index": {
          "description": "Given character returns the length of that character and function to write it to memory buffer if the encoding can not represent the character the io function should fail",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "pokeCharFun",
          "normalized": "Proxy a-\u003eChar-\u003e(Int,Ptr Word-\u003eIO())",
          "package": "compact-string",
          "partial": "Char Fun",
          "signature": "Proxy a-\u003eChar-\u003e(Int,Ptr Word-\u003eIO())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:pokeCharFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size needed to store a character\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "pokeCharLen",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Char -\u003e Int",
          "source": "src/Data-CompactString-Internal.html#pokeCharLen",
          "type": "method"
        },
        "index": {
          "description": "The size needed to store character",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "pokeCharLen",
          "normalized": "Proxy a-\u003eChar-\u003eInt",
          "package": "compact-string",
          "partial": "Char Len",
          "signature": "Proxy a-\u003eChar-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:pokeCharLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character given a pointer to its last byte, and return the size used\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "pokeCharRev",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Ptr Word8 -\u003e Char -\u003e IO Int",
          "source": "src/Data-CompactString-Internal.html#pokeCharRev",
          "type": "method"
        },
        "index": {
          "description": "Write character given pointer to its last byte and return the size used",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "pokeCharRev",
          "normalized": "Proxy a-\u003ePtr Word-\u003eChar-\u003eIO Int",
          "package": "compact-string",
          "partial": "Char Rev",
          "signature": "Proxy a-\u003ePtr Word-\u003eChar-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:pokeCharRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe variant of chr, combined with return; does more checks.\n   At least GHC does not check for surrogate pairs\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "returnChr",
          "package": "compact-string",
          "signature": "Int -\u003e Word32 -\u003e IO (Int, Char)",
          "source": "src/Data-CompactString-Internal.html#returnChr",
          "type": "function"
        },
        "index": {
          "description": "Safe variant of chr combined with return does more checks At least GHC does not check for surrogate pairs",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "returnChr",
          "normalized": "Int-\u003eWord-\u003eIO(Int,Char)",
          "package": "compact-string",
          "partial": "Chr",
          "signature": "Int-\u003eWord-\u003eIO(Int,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:returnChr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "unCS",
          "package": "compact-string",
          "signature": "ByteString",
          "source": "src/Data-CompactString-Internal.html#CompactString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unCS",
          "package": "compact-string",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "unSP",
          "package": "compact-string",
          "signature": "PairS a b -\u003e (a, b)",
          "source": "src/Data-CompactString-Internal.html#unSP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unSP",
          "normalized": "PairS a b-\u003e(a,b)",
          "package": "compact-string",
          "partial": "SP",
          "signature": "PairS a b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CompactString.Internal",
          "name": "unsafeChr",
          "package": "compact-string",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unsafeChr",
          "normalized": "Int-\u003eChar",
          "package": "compact-string",
          "partial": "Chr",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unsafeChr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch exceptions from fail in the IO monad, and wrap them in another monad\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "unsafeTry",
          "package": "compact-string",
          "signature": "IO a -\u003e m a",
          "source": "src/Data-CompactString-Internal.html#unsafeTry",
          "type": "function"
        },
        "index": {
          "description": "Catch exceptions from fail in the IO monad and wrap them in another monad",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unsafeTry",
          "normalized": "IO a-\u003eb a",
          "package": "compact-string",
          "partial": "Try",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unsafeTry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch exceptions from fail in the IO monad, and wrap them in another monad\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "unsafeTryIO",
          "package": "compact-string",
          "signature": "IO a -\u003e IO (m a)",
          "source": "src/Data-CompactString-Internal.html#unsafeTryIO",
          "type": "function"
        },
        "index": {
          "description": "Catch exceptions from fail in the IO monad and wrap them in another monad",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unsafeTryIO",
          "normalized": "IO a-\u003eIO(b a)",
          "package": "compact-string",
          "partial": "Try IO",
          "signature": "IO a-\u003eIO(m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unsafeTryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a function given a pointer to the buffer of a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "unsafeWithBuffer",
          "package": "compact-string",
          "signature": "CompactString a -\u003e (Ptr Word8 -\u003e IO b) -\u003e b",
          "source": "src/Data-CompactString-Internal.html#unsafeWithBuffer",
          "type": "function"
        },
        "index": {
          "description": "Perform function given pointer to the buffer of CompactString",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unsafeWithBuffer",
          "normalized": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eb",
          "package": "compact-string",
          "partial": "With Buffer",
          "signature": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unsafeWithBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a function given a pointer to the last byte in the buffer of a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "unsafeWithBufferEnd",
          "package": "compact-string",
          "signature": "CompactString a -\u003e (Ptr Word8 -\u003e IO b) -\u003e b",
          "source": "src/Data-CompactString-Internal.html#unsafeWithBufferEnd",
          "type": "function"
        },
        "index": {
          "description": "Perform function given pointer to the last byte in the buffer of CompactString",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "unsafeWithBufferEnd",
          "normalized": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eb",
          "package": "compact-string",
          "partial": "With Buffer End",
          "signature": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:unsafeWithBufferEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003e(a == b) == (toBS a == toBS b)\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "validEquality",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Bool",
          "source": "src/Data-CompactString-Internal.html#validEquality",
          "type": "method"
        },
        "index": {
          "description": "Is toBS toBS",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "validEquality",
          "normalized": "Proxy a-\u003eBool",
          "package": "compact-string",
          "partial": "Equality",
          "signature": "Proxy a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:validEquality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003e(a \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e b) == (toBS a \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e toBS b)\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "validOrdering",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Bool",
          "source": "src/Data-CompactString-Internal.html#validOrdering",
          "type": "method"
        },
        "index": {
          "description": "Is compare toBS compare toBS",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "validOrdering",
          "normalized": "Proxy a-\u003eBool",
          "package": "compact-string",
          "partial": "Ordering",
          "signature": "Proxy a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:validOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs \u003ccode\u003e(a \u003ccode\u003eisSubstringOf\u003c/code\u003e b) == (toBS a \u003ccode\u003eisSubstringOf\u003c/code\u003e toBS b)\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "validSubstring",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Bool",
          "source": "src/Data-CompactString-Internal.html#validSubstring",
          "type": "method"
        },
        "index": {
          "description": "Is isSubstringOf toBS isSubstringOf toBS",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "validSubstring",
          "normalized": "Proxy a-\u003eBool",
          "package": "compact-string",
          "partial": "Substring",
          "signature": "Proxy a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:validSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate the length, should be used before peekCharSafe is called.\n   Can be used to remove the number of checks used by peekCharSafe.\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "validateLength",
          "package": "compact-string",
          "signature": "Proxy a -\u003e Int -\u003e IO ()",
          "source": "src/Data-CompactString-Internal.html#validateLength",
          "type": "method"
        },
        "index": {
          "description": "Validate the length should be used before peekCharSafe is called Can be used to remove the number of checks used by peekCharSafe",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "validateLength",
          "normalized": "Proxy a-\u003eInt-\u003eIO()",
          "package": "compact-string",
          "partial": "Length",
          "signature": "Proxy a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:validateLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a function given a pointer to the buffer of a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "withBuffer",
          "package": "compact-string",
          "signature": "CompactString a -\u003e (Ptr Word8 -\u003e IO b) -\u003e IO b",
          "source": "src/Data-CompactString-Internal.html#withBuffer",
          "type": "function"
        },
        "index": {
          "description": "Perform function given pointer to the buffer of CompactString",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "withBuffer",
          "normalized": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "package": "compact-string",
          "partial": "Buffer",
          "signature": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:withBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a function given a pointer to the last byte in the buffer of a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.Internal",
          "name": "withBufferEnd",
          "package": "compact-string",
          "signature": "CompactString a -\u003e (Ptr Word8 -\u003e IO b) -\u003e IO b",
          "source": "src/Data-CompactString-Internal.html#withBufferEnd",
          "type": "function"
        },
        "index": {
          "description": "Perform function given pointer to the last byte in the buffer of CompactString",
          "hierarchy": "Data CompactString Internal",
          "module": "Data.CompactString.Internal",
          "name": "withBufferEnd",
          "normalized": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "package": "compact-string",
          "partial": "Buffer End",
          "signature": "CompactString a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Internal.html#v:withBufferEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompactString specialized to platform native UTF-16.\n\u003c/p\u003e\u003cp\u003eThis module can be used to reduce the need for type signatures,\n since in most cases only a single encoding is used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "UTF16",
          "package": "compact-string",
          "source": "src/Data-CompactString-UTF16.html",
          "type": "module"
        },
        "index": {
          "description": "CompactString specialized to platform native UTF-16 This module can be used to reduce the need for type signatures since in most cases only single encoding is used",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "UTF16",
          "package": "compact-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompactString specialized to UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "CompactString",
          "package": "compact-string",
          "source": "src/Data-CompactString-UTF16.html#CompactString",
          "type": "type"
        },
        "index": {
          "description": "CompactString specialized to UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "CompactString",
          "package": "compact-string",
          "partial": "Compact String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#t:CompactString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "all",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if all elements of the CompactString satisfy the predicate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "any",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if any element of the CompactString satisfies the predicate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two CompactStrings\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "append",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two CompactStrings",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "append",
          "normalized": "CompactString-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "appendFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file Files are written using UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "appendFile",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark.\n   If the file is empty, it is written using UTF-16 with a Byte Order Mark.\n   If the encoding can not be determined the file is assumed to be UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "appendFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#appendFile%27",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file The encoding of the file is determined based on Byte Order Mark If the file is empty it is written using UTF-16 with Byte Order Mark If the encoding can not be determined the file is assumed to be UTF-8",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "appendFile'",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:appendFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "break",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e breakEnd p == spanEnd (not.p)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "breakEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the CompactString breakEnd spanEnd not.p",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "breakEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "concat",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "concat",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "concatMap",
          "package": "compact-string",
          "signature": "(Char -\u003e CompactString) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over CompactString and concatenate the results",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "concatMap",
          "normalized": "(Char-\u003eCompactString)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Map",
          "signature": "(Char-\u003eCompactString)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "cons",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "cons",
          "normalized": "Char-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e count c = length . elemIndices c\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "count",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Int",
          "source": "src/Data-CompactString-UTF16.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the CompactString count length elemIndices",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "count",
          "normalized": "Char-\u003eCompactString-\u003eInt",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode e = recode =\u003c\u003c fromByteString\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the ByteString is not a valid encoded string\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "decode",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF16.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Fails if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "decode",
          "normalized": "a-\u003eByteString-\u003eb CompactString",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Fails if the input is not a valid encoded string\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "decodeBOM",
          "package": "compact-string",
          "signature": "ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF16.html#decodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Fails if the input is not valid encoded string For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "decodeBOM",
          "normalized": "ByteString-\u003ea CompactString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:decodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Raises an error if the input is not a valid encoded string\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "decodeBOM_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#decodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Raises an error if the input is not valid encoded string For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "decodeBOM_",
          "normalized": "ByteString-\u003eCompactString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:decodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode_ e = recode_ . fromByteString_\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the ByteString is not a valid encoded string\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "decode_",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#decode_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Raises an error if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "decode_",
          "normalized": "a-\u003eByteString-\u003eCompactString",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:decode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003eempty\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "drop",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or empty if length xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "drop",
          "normalized": "Int-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "dropWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "elem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the CompactString membership predicate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "elem",
          "normalized": "Char-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. \n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "elemIndex",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF16.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "elemIndex",
          "normalized": "Char-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "Char-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs == \n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "elemIndexEnd",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF16.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given CompactString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "elemIndexEnd",
          "normalized": "Char-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "Char-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "elemIndices",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e [Int]",
          "source": "src/Data-CompactString-UTF16.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "elemIndices",
          "normalized": "Char-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "Char-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "empty",
          "package": "compact-string",
          "signature": "CompactString",
          "source": "src/Data-CompactString-UTF16.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "empty",
          "package": "compact-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode e = liftM toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "encode",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e m ByteString",
          "source": "src/Data-CompactString-UTF16.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode liftM toByteString recode But it might be faster for some combinations of encodings Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "encode",
          "normalized": "a-\u003eCompactString-\u003eb ByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "encodeBOM",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e m ByteString",
          "source": "src/Data-CompactString-UTF16.html#encodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "encodeBOM",
          "normalized": "a-\u003eCompactString-\u003eb ByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:encodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "encodeBOM_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-UTF16.html#encodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "encodeBOM_",
          "normalized": "a-\u003eCompactString-\u003eByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:encodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode_ e = toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "encode_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-UTF16.html#encode_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode toByteString recode But it might be faster for some combinations of encodings Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "encode_",
          "normalized": "a-\u003eCompactString-\u003eByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:encode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a CompactString containing those characters that satisfy the\n predicate. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "filter",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and CompactString returns CompactString containing those characters that satisfy the predicate This function is subject to array fusion",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p `index` n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "find",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Char",
          "source": "src/Data-CompactString-UTF16.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and CompactString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just index Nothing",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Char",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the CompactString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "findIndex",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF16.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and CompactString and returns the index of the first element in the CompactString satisfying the predicate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which satisfies the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following holds:\n\u003c/p\u003e\u003cpre\u003e findIndexEnd c xs == \n (-) (length xs - 1) `fmap` findIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "findIndexEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF16.html#findIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The findIndexEnd function returns the last index of the element in the given CompactString which satisfies the predicate or Nothing if there is no such element The following holds findIndexEnd xs length xs fmap findIndex reverse xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "findIndexEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:findIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "findIndices",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e [Int]",
          "source": "src/Data-CompactString-UTF16.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a CompactString, reduces the\n CompactString using the binary operator, from left to right.\n This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldl",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF16.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and CompactString reduces the CompactString using the binary operator from left to right This function is subject to array fusion",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n Though actually foldl is also strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldl'",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF16.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator Though actually foldl is also strict in the accumulator",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n This function is subject to array fusion. \n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty CompactString This function is subject to array fusion An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldl1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldr",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF16.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldr'",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF16.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldr'",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr1\\'' is a variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e, but is strict in the\n accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "foldr1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr1 but is strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "foldr1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Fails if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "fromByteString",
          "package": "compact-string",
          "signature": "ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF16.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Fails if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "fromByteString",
          "normalized": "ByteString-\u003ea CompactString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Raises an error if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "fromByteString_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#fromByteString_",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Raises an error if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "fromByteString_",
          "normalized": "ByteString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:fromByteString_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Equivalent to \u003ccode\u003ehGetContents stdin\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInput is assumed to be in UTF-16, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "getContents",
          "package": "compact-string",
          "signature": "IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "getContents Equivalent to hGetContents stdin Input is assumed to be in UTF-16 this may not be appropriate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "getContents",
          "package": "compact-string",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from stdin.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "getLine",
          "package": "compact-string",
          "signature": "IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#getLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from stdin",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "getLine",
          "package": "compact-string",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and returns a list of\n CompactStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "group",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes CompactString and returns list of CompactStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "group",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "groupBy",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hGet",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read CompactString directly from the specified Handle The handle is interpreted as UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hGetContents",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The handle is interpreted as UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe encoding is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hGetContents'",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#hGetContents%27",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The encoding is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hGetContents'",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Contents'",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hGetContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from a handle\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hGetLine",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#hGetLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from handle",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is identical to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hGetNonBlocking",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#hGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "hGetNonBlocking is identical to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available The handle is interpreted as UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hPut",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Outputs CompactString to the specified Handle Output is written in UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hPut",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility \n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hPutStr",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hPutStr",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a handle, appending a newline byte\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "hPutStrLn",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to handle appending newline byte Output is written in UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "head",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "head",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the front of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e headView s = if null s then Nothing else Just (head s, tail s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "headView",
          "package": "compact-string",
          "signature": "CompactString -\u003e Maybe (Char, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#headView",
          "type": "function"
        },
        "index": {
          "description": "view of the front of CompactString headView if null then Nothing else Just head tail",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "headView",
          "normalized": "CompactString-\u003eMaybe(Char,CompactString)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString-\u003eMaybe(Char,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:headView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "index",
          "package": "compact-string",
          "signature": "CompactString -\u003e Int -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#index",
          "type": "function"
        },
        "index": {
          "description": "CompactString index subscript operator starting from",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "index",
          "normalized": "CompactString-\u003eInt-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "init",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of CompactString except the last one An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "init",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "inits",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#inits",
          "type": "function"
        },
        "index": {
          "description": "Return all initial segments of the given CompactString shortest first",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "inits",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eCompactString -\u003e CompactString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device. It's great for writing one line programs!\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "interact",
          "package": "compact-string",
          "signature": "(CompactString -\u003e CompactString) -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#interact",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type CompactString CompactString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device It great for writing one line programs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "interact",
          "normalized": "(CompactString-\u003eCompactString)-\u003eIO()",
          "package": "compact-string",
          "signature": "(CompactString-\u003eCompactString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "intercalate",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "The intercalate function takes CompactString and list of CompactString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "intercalate",
          "normalized": "CompactString-\u003e[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and `intersperses' that character between the elements of\n the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "intersperse",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and CompactString and intersperses that character between the elements of the CompactString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "intersperse",
          "normalized": "Char-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "isPrefixOf",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two CompactString and returns True iff the first is prefix of the second",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "isPrefixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Prefix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "isSuffixOf",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two CompactString and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "isSuffixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Suffix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a ByteString, which must be finite and non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "last",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "last",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the back of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e lastView s = if null s then Nothing else Just (init s, last s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "lastView",
          "package": "compact-string",
          "signature": "CompactString -\u003e Maybe (CompactString, Char)",
          "source": "src/Data-CompactString-UTF16.html#lastView",
          "type": "function"
        },
        "index": {
          "description": "view of the back of CompactString lastView if null then Nothing else Just init last",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "lastView",
          "normalized": "CompactString-\u003eMaybe(CompactString,Char)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString-\u003eMaybe(CompactString,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:lastView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a CompactString as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "length",
          "package": "compact-string",
          "signature": "CompactString -\u003e Int",
          "source": "src/Data-CompactString-UTF16.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of CompactString as an Int",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "length",
          "normalized": "CompactString-\u003eInt",
          "package": "compact-string",
          "signature": "CompactString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e up into a list of CompactStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "lines",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks CompactString up into list of CompactStrings at newline Chars The resulting strings do not contain newlines",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "lines",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the CompactString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "map",
          "package": "compact-string",
          "signature": "(Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the CompactString obtained by applying to each element of xs This function is subject to array fusion",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "mapAccumL",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString -\u003e (acc, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of CompactString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString-\u003e(a,CompactString)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString-\u003e(acc,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "mapAccumR",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString -\u003e (acc, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of CompactString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString-\u003e(a,CompactString)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString-\u003e(acc,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e map Char functions, provided with the index at each position.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "mapIndexed",
          "package": "compact-string",
          "signature": "(Int -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#mapIndexed",
          "type": "function"
        },
        "index": {
          "description": "map Char functions provided with the index at each position",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "mapIndexed",
          "normalized": "(Int-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Indexed",
          "signature": "(Int-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:mapIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "maximum",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "maximum",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "minimum",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF16.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "minimum",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "notElem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "notElem",
          "normalized": "Char-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Elem",
          "signature": "Char-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a CompactString is empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "null",
          "package": "compact-string",
          "signature": "CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF16.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether CompactString is empty",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "null",
          "normalized": "CompactString-\u003eBool",
          "package": "compact-string",
          "signature": "CompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "pack",
          "package": "compact-string",
          "signature": "String -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "pack",
          "normalized": "String-\u003eCompactString",
          "package": "compact-string",
          "signature": "String-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a pair of CompactStrings.\n The first containing those characters that satisfy the predicate,\n the second containg those that don't.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "partition",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#partition",
          "type": "function"
        },
        "index": {
          "description": "partition applied to predicate and CompactString returns pair of CompactStrings The first containing those characters that satisfy the predicate the second containg those that don",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "partition",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout.\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-16, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "putStr",
          "package": "compact-string",
          "signature": "CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#putStr",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout Output is written in UTF-16 this may not be appropriate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "putStr",
          "normalized": "CompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Str",
          "signature": "CompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout, appending a newline character.\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-16, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "putStrLn",
          "package": "compact-string",
          "signature": "CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout appending newline character Output is written in UTF-16 this may not be appropriate",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "putStrLn",
          "normalized": "CompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Str Ln",
          "signature": "CompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eFiles are assumed to be in UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "readFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows Files are assumed to be in UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "readFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF16.html#readFile%27",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows The encoding of the file is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a CompactString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "replicate",
          "package": "compact-string",
          "signature": "Int -\u003e Char -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is CompactString of length with the value of every element The following holds replicate unfoldr Just",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eChar-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "reverse",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "reverse",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "scanl",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "scanl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "scanl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "scanr",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "scanr",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "scanr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "scanr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "singleton",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "singleton",
          "normalized": "Char-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a byte to the end of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "snoc",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "snoc",
          "normalized": "CompactString-\u003eChar-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Sort a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "sort",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#sort",
          "type": "function"
        },
        "index": {
          "description": "log Sort CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "sort",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "span",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWe have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) cs\n    == \n let (x,y) = span (not.isSpace) (reverse cs) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "spanEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the CompactString We have spanEnd not.isSpace and spanEnd not isSpace cs let span not.isSpace reverse cs in reverse reverse",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "spanEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "split",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new CompactString that are slices of the original",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "split",
          "normalized": "Char-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "splitAt",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "splitAt",
          "normalized": "Int-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "At",
          "signature": "Int-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "splitWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits CompactString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "tail",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "tail",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "tails",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#tails",
          "type": "function"
        },
        "index": {
          "description": "Return all final segments of the given CompactString longest first",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "tails",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a CompactString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "take",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to CompactString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "take",
          "normalized": "Int-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a CompactString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "takeWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and CompactString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CompactString to a ByteString\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "toByteString",
          "package": "compact-string",
          "signature": "CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-UTF16.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert CompactString to ByteString",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "toByteString",
          "normalized": "CompactString-\u003eByteString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "CompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "transpose",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its CompactString argument",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "transpose",
          "normalized": "[CompactString]-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "[CompactString]-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a \n ByteString from a seed value.  The function takes the element and \n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the CompactString or returns \n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next byte in the string, \n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "unfoldr",
          "package": "compact-string",
          "signature": "(acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the CompactString or returns Just in which case is the next byte in the string and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eCompactString",
          "package": "compact-string",
          "signature": "(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fst (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "unfoldrN",
          "package": "compact-string",
          "signature": "Int -\u003e (acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e (CompactString, Maybe acc)",
          "source": "src/Data-CompactString-UTF16.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr fst unfoldrN take unfoldr",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(CompactString,Maybe a)",
          "package": "compact-string",
          "signature": "Int-\u003e(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003e(CompactString,Maybe acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "unlines",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "unlines",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "unpack",
          "package": "compact-string",
          "signature": "CompactString -\u003e String",
          "source": "src/Data-CompactString-UTF16.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts CompactString to String",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "unpack",
          "normalized": "CompactString-\u003eString",
          "package": "compact-string",
          "signature": "CompactString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "unwords",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "unwords",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n CompactStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "unzip",
          "package": "compact-string",
          "signature": "[(Char, Char)] -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF16.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of CompactStrings Note that this performs two pack operations",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "unzip",
          "normalized": "[(Char,Char)]-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "[(Char,Char)]-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, fails, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "validate",
          "package": "compact-string",
          "signature": "CompactString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF16.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid fails otherwise returns the input",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "validate",
          "normalized": "CompactString-\u003ea CompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, throws an error, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "validate_",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#validate_",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid throws an error otherwise returns the input",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "validate_",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:validate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space. And\n\u003c/p\u003e\u003cpre\u003e words = filter (not . null) . splitWith isSpace\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "words",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF16.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space And words filter not null splitWith isSpace",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "words",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using UTF-16.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "writeFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using UTF-16",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "writeFile",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using UTF-16.\n   A Byte Order Mark is also written.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "writeFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF16.html#writeFile%27",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using UTF-16 Byte Order Mark is also written",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "writeFile'",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "zip",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e [(Char, Char)]",
          "source": "src/Data-CompactString-UTF16.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "zip",
          "normalized": "CompactString-\u003eCompactString-\u003e[(Char,Char)]",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums. \n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "zipWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e b) -\u003e CompactString -\u003e CompactString -\u003e [b]",
          "source": "src/Data-CompactString-UTF16.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eCompactString-\u003eCompactString-\u003e[a]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003eb)-\u003eCompactString-\u003eCompactString-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised version of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e for the common case of a\n simultaneous map over two \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es, to build a 3rd. Rewrite rules\n are used to automatically covert zipWith into zipWith' when a pack is\n performed on the result of zipWith, but we also export it for\n convenience.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF16",
          "name": "zipWith'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF16.html#zipWith%27",
          "type": "function"
        },
        "index": {
          "description": "specialised version of zipWith for the common case of simultaneous map over two CompactString to build rd Rewrite rules are used to automatically covert zipWith into zipWith when pack is performed on the result of zipWith but we also export it for convenience",
          "hierarchy": "Data CompactString UTF16",
          "module": "Data.CompactString.UTF16",
          "name": "zipWith'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "With'",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF16.html#v:zipWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompactString specialized to UTF-8.\n\u003c/p\u003e\u003cp\u003eThis module can be used to reduce the need for type signatures,\n since in most cases only a single encoding is used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "UTF8",
          "package": "compact-string",
          "source": "src/Data-CompactString-UTF8.html",
          "type": "module"
        },
        "index": {
          "description": "CompactString specialized to UTF-8 This module can be used to reduce the need for type signatures since in most cases only single encoding is used",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "UTF8",
          "package": "compact-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompactString specialized to UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "CompactString",
          "package": "compact-string",
          "source": "src/Data-CompactString-UTF8.html#CompactString",
          "type": "type"
        },
        "index": {
          "description": "CompactString specialized to UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "CompactString",
          "package": "compact-string",
          "partial": "Compact String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#t:CompactString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "all",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if all elements of the CompactString satisfy the predicate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "any",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if any element of the CompactString satisfies the predicate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two CompactStrings\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "append",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two CompactStrings",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "append",
          "normalized": "CompactString-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "appendFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file Files are written using UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "appendFile",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark.\n   If the file is empty, it is written using UTF-8 with a Byte Order Mark.\n   If the encoding can not be determined the file is assumed to be UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "appendFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#appendFile%27",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file The encoding of the file is determined based on Byte Order Mark If the file is empty it is written using UTF-8 with Byte Order Mark If the encoding can not be determined the file is assumed to be UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "appendFile'",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:appendFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "break",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e breakEnd p == spanEnd (not.p)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "breakEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the CompactString breakEnd spanEnd not.p",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "breakEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "concat",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "concat",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "concatMap",
          "package": "compact-string",
          "signature": "(Char -\u003e CompactString) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over CompactString and concatenate the results",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "concatMap",
          "normalized": "(Char-\u003eCompactString)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Map",
          "signature": "(Char-\u003eCompactString)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "cons",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "cons",
          "normalized": "Char-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e count c = length . elemIndices c\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "count",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Int",
          "source": "src/Data-CompactString-UTF8.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the CompactString count length elemIndices",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "count",
          "normalized": "Char-\u003eCompactString-\u003eInt",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode e = recode =\u003c\u003c fromByteString\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the ByteString is not a valid encoded string\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "decode",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF8.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Fails if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "decode",
          "normalized": "a-\u003eByteString-\u003eb CompactString",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Fails if the input is not a valid encoded string\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "decodeBOM",
          "package": "compact-string",
          "signature": "ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF8.html#decodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Fails if the input is not valid encoded string For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "decodeBOM",
          "normalized": "ByteString-\u003ea CompactString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:decodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Raises an error if the input is not a valid encoded string\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "decodeBOM_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#decodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Raises an error if the input is not valid encoded string For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "decodeBOM_",
          "normalized": "ByteString-\u003eCompactString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:decodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode_ e = recode_ . fromByteString_\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the ByteString is not a valid encoded string\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "decode_",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#decode_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Raises an error if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "decode_",
          "normalized": "a-\u003eByteString-\u003eCompactString",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:decode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003eempty\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "drop",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or empty if length xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "drop",
          "normalized": "Int-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "dropWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "elem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the CompactString membership predicate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "elem",
          "normalized": "Char-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. \n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "elemIndex",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF8.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "elemIndex",
          "normalized": "Char-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "Char-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs == \n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "elemIndexEnd",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF8.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given CompactString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "elemIndexEnd",
          "normalized": "Char-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "Char-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "elemIndices",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e [Int]",
          "source": "src/Data-CompactString-UTF8.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "elemIndices",
          "normalized": "Char-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "Char-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "empty",
          "package": "compact-string",
          "signature": "CompactString",
          "source": "src/Data-CompactString-UTF8.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "empty",
          "package": "compact-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode e = liftM toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "encode",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e m ByteString",
          "source": "src/Data-CompactString-UTF8.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode liftM toByteString recode But it might be faster for some combinations of encodings Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "encode",
          "normalized": "a-\u003eCompactString-\u003eb ByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "encodeBOM",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e m ByteString",
          "source": "src/Data-CompactString-UTF8.html#encodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "encodeBOM",
          "normalized": "a-\u003eCompactString-\u003eb ByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:encodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "encodeBOM_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-UTF8.html#encodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "encodeBOM_",
          "normalized": "a-\u003eCompactString-\u003eByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:encodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode_ e = toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "encode_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-UTF8.html#encode_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode toByteString recode But it might be faster for some combinations of encodings Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "encode_",
          "normalized": "a-\u003eCompactString-\u003eByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:encode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a CompactString containing those characters that satisfy the\n predicate. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "filter",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and CompactString returns CompactString containing those characters that satisfy the predicate This function is subject to array fusion",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p `index` n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "find",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Char",
          "source": "src/Data-CompactString-UTF8.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and CompactString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just index Nothing",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Char",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the CompactString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "findIndex",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF8.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and CompactString and returns the index of the first element in the CompactString satisfying the predicate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which satisfies the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following holds:\n\u003c/p\u003e\u003cpre\u003e findIndexEnd c xs == \n (-) (length xs - 1) `fmap` findIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "findIndexEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e Maybe Int",
          "source": "src/Data-CompactString-UTF8.html#findIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The findIndexEnd function returns the last index of the element in the given CompactString which satisfies the predicate or Nothing if there is no such element The following holds findIndexEnd xs length xs fmap findIndex reverse xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "findIndexEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:findIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "findIndices",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e [Int]",
          "source": "src/Data-CompactString-UTF8.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a CompactString, reduces the\n CompactString using the binary operator, from left to right.\n This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldl",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and CompactString reduces the CompactString using the binary operator from left to right This function is subject to array fusion",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n Though actually foldl is also strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldl'",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF8.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator Though actually foldl is also strict in the accumulator",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n This function is subject to array fusion. \n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty CompactString This function is subject to array fusion An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldl1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldr",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldr'",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString -\u003e acc",
          "source": "src/Data-CompactString-UTF8.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldr'",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr1\\'' is a variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e, but is strict in the\n accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "foldr1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr1 but is strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "foldr1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Fails if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "fromByteString",
          "package": "compact-string",
          "signature": "ByteString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF8.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Fails if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "fromByteString",
          "normalized": "ByteString-\u003ea CompactString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Raises an error if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "fromByteString_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#fromByteString_",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Raises an error if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "fromByteString_",
          "normalized": "ByteString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:fromByteString_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Equivalent to \u003ccode\u003ehGetContents stdin\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInput is assumed to be in UTF-8, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "getContents",
          "package": "compact-string",
          "signature": "IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "getContents Equivalent to hGetContents stdin Input is assumed to be in UTF-8 this may not be appropriate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "getContents",
          "package": "compact-string",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from stdin.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "getLine",
          "package": "compact-string",
          "signature": "IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#getLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from stdin",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "getLine",
          "package": "compact-string",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and returns a list of\n CompactStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "group",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes CompactString and returns list of CompactStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "group",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "groupBy",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hGet",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read CompactString directly from the specified Handle The handle is interpreted as UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hGetContents",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The handle is interpreted as UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe encoding is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hGetContents'",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#hGetContents%27",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The encoding is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hGetContents'",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Contents'",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hGetContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from a handle\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hGetLine",
          "package": "compact-string",
          "signature": "Handle -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#hGetLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from handle",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is identical to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hGetNonBlocking",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#hGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "hGetNonBlocking is identical to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available The handle is interpreted as UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hPut",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Outputs CompactString to the specified Handle Output is written in UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hPut",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility \n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hPutStr",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hPutStr",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a handle, appending a newline byte\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "hPutStrLn",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to handle appending newline byte Output is written in UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "head",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "head",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the front of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e headView s = if null s then Nothing else Just (head s, tail s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "headView",
          "package": "compact-string",
          "signature": "CompactString -\u003e Maybe (Char, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#headView",
          "type": "function"
        },
        "index": {
          "description": "view of the front of CompactString headView if null then Nothing else Just head tail",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "headView",
          "normalized": "CompactString-\u003eMaybe(Char,CompactString)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString-\u003eMaybe(Char,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:headView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "index",
          "package": "compact-string",
          "signature": "CompactString -\u003e Int -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#index",
          "type": "function"
        },
        "index": {
          "description": "CompactString index subscript operator starting from",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "index",
          "normalized": "CompactString-\u003eInt-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "init",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of CompactString except the last one An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "init",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "inits",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#inits",
          "type": "function"
        },
        "index": {
          "description": "Return all initial segments of the given CompactString shortest first",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "inits",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eCompactString -\u003e CompactString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device. It's great for writing one line programs!\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "interact",
          "package": "compact-string",
          "signature": "(CompactString -\u003e CompactString) -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#interact",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type CompactString CompactString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device It great for writing one line programs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "interact",
          "normalized": "(CompactString-\u003eCompactString)-\u003eIO()",
          "package": "compact-string",
          "signature": "(CompactString-\u003eCompactString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "intercalate",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "The intercalate function takes CompactString and list of CompactString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "intercalate",
          "normalized": "CompactString-\u003e[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and `intersperses' that character between the elements of\n the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "intersperse",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and CompactString and intersperses that character between the elements of the CompactString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "intersperse",
          "normalized": "Char-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "isPrefixOf",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two CompactString and returns True iff the first is prefix of the second",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "isPrefixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Prefix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "isSuffixOf",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two CompactString and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "isSuffixOf",
          "normalized": "CompactString-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Suffix Of",
          "signature": "CompactString-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a ByteString, which must be finite and non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "last",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "last",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the back of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e lastView s = if null s then Nothing else Just (init s, last s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "lastView",
          "package": "compact-string",
          "signature": "CompactString -\u003e Maybe (CompactString, Char)",
          "source": "src/Data-CompactString-UTF8.html#lastView",
          "type": "function"
        },
        "index": {
          "description": "view of the back of CompactString lastView if null then Nothing else Just init last",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "lastView",
          "normalized": "CompactString-\u003eMaybe(CompactString,Char)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString-\u003eMaybe(CompactString,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:lastView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a CompactString as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "length",
          "package": "compact-string",
          "signature": "CompactString -\u003e Int",
          "source": "src/Data-CompactString-UTF8.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of CompactString as an Int",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "length",
          "normalized": "CompactString-\u003eInt",
          "package": "compact-string",
          "signature": "CompactString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e up into a list of CompactStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "lines",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks CompactString up into list of CompactStrings at newline Chars The resulting strings do not contain newlines",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "lines",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the CompactString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "map",
          "package": "compact-string",
          "signature": "(Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the CompactString obtained by applying to each element of xs This function is subject to array fusion",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "mapAccumL",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString -\u003e (acc, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of CompactString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString-\u003e(a,CompactString)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString-\u003e(acc,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "mapAccumR",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString -\u003e (acc, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of CompactString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString-\u003e(a,CompactString)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString-\u003e(acc,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e map Char functions, provided with the index at each position.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "mapIndexed",
          "package": "compact-string",
          "signature": "(Int -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#mapIndexed",
          "type": "function"
        },
        "index": {
          "description": "map Char functions provided with the index at each position",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "mapIndexed",
          "normalized": "(Int-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "Indexed",
          "signature": "(Int-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:mapIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "maximum",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "maximum",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "minimum",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char",
          "source": "src/Data-CompactString-UTF8.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "minimum",
          "normalized": "CompactString-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "notElem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "notElem",
          "normalized": "Char-\u003eCompactString-\u003eBool",
          "package": "compact-string",
          "partial": "Elem",
          "signature": "Char-\u003eCompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a CompactString is empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "null",
          "package": "compact-string",
          "signature": "CompactString -\u003e Bool",
          "source": "src/Data-CompactString-UTF8.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether CompactString is empty",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "null",
          "normalized": "CompactString-\u003eBool",
          "package": "compact-string",
          "signature": "CompactString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "pack",
          "package": "compact-string",
          "signature": "String -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "pack",
          "normalized": "String-\u003eCompactString",
          "package": "compact-string",
          "signature": "String-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a pair of CompactStrings.\n The first containing those characters that satisfy the predicate,\n the second containg those that don't.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "partition",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#partition",
          "type": "function"
        },
        "index": {
          "description": "partition applied to predicate and CompactString returns pair of CompactStrings The first containing those characters that satisfy the predicate the second containg those that don",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "partition",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout.\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-8, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "putStr",
          "package": "compact-string",
          "signature": "CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#putStr",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout Output is written in UTF-8 this may not be appropriate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "putStr",
          "normalized": "CompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Str",
          "signature": "CompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout, appending a newline character.\n\u003c/p\u003e\u003cp\u003eOutput is written in UTF-8, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "putStrLn",
          "package": "compact-string",
          "signature": "CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout appending newline character Output is written in UTF-8 this may not be appropriate",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "putStrLn",
          "normalized": "CompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "Str Ln",
          "signature": "CompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eFiles are assumed to be in UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "readFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows Files are assumed to be in UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "readFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO CompactString",
          "source": "src/Data-CompactString-UTF8.html#readFile%27",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows The encoding of the file is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO CompactString",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eIO CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a CompactString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "replicate",
          "package": "compact-string",
          "signature": "Int -\u003e Char -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is CompactString of length with the value of every element The following holds replicate unfoldr Just",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eChar-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "reverse",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "reverse",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "scanl",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "scanl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "scanl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "scanr",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "scanr",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "scanr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "scanr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "singleton",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "singleton",
          "normalized": "Char-\u003eCompactString",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a byte to the end of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "snoc",
          "package": "compact-string",
          "signature": "CompactString -\u003e Char -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "snoc",
          "normalized": "CompactString-\u003eChar-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eChar-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Sort a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "sort",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#sort",
          "type": "function"
        },
        "index": {
          "description": "log Sort CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "sort",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "span",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWe have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) cs\n    == \n let (x,y) = span (not.isSpace) (reverse cs) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "spanEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the CompactString We have spanEnd not.isSpace and spanEnd not isSpace cs let span not.isSpace reverse cs in reverse reverse",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "spanEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "split",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new CompactString that are slices of the original",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "split",
          "normalized": "Char-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "splitAt",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "splitAt",
          "normalized": "Int-\u003eCompactString-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "partial": "At",
          "signature": "Int-\u003eCompactString-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "splitWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits CompactString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "tail",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "tail",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "tails",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#tails",
          "type": "function"
        },
        "index": {
          "description": "Return all final segments of the given CompactString longest first",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "tails",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a CompactString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "take",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to CompactString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "take",
          "normalized": "Int-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a CompactString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "takeWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and CompactString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CompactString to a ByteString\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "toByteString",
          "package": "compact-string",
          "signature": "CompactString -\u003e ByteString",
          "source": "src/Data-CompactString-UTF8.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert CompactString to ByteString",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "toByteString",
          "normalized": "CompactString-\u003eByteString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "CompactString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "transpose",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its CompactString argument",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "transpose",
          "normalized": "[CompactString]-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "[CompactString]-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a \n ByteString from a seed value.  The function takes the element and \n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the CompactString or returns \n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next byte in the string, \n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "unfoldr",
          "package": "compact-string",
          "signature": "(acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the CompactString or returns Just in which case is the next byte in the string and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eCompactString",
          "package": "compact-string",
          "signature": "(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fst (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "unfoldrN",
          "package": "compact-string",
          "signature": "Int -\u003e (acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e (CompactString, Maybe acc)",
          "source": "src/Data-CompactString-UTF8.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr fst unfoldrN take unfoldr",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(CompactString,Maybe a)",
          "package": "compact-string",
          "signature": "Int-\u003e(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003e(CompactString,Maybe acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "unlines",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "unlines",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "unpack",
          "package": "compact-string",
          "signature": "CompactString -\u003e String",
          "source": "src/Data-CompactString-UTF8.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts CompactString to String",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "unpack",
          "normalized": "CompactString-\u003eString",
          "package": "compact-string",
          "signature": "CompactString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "unwords",
          "package": "compact-string",
          "signature": "[CompactString] -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "unwords",
          "normalized": "[CompactString]-\u003eCompactString",
          "package": "compact-string",
          "signature": "[CompactString]-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n CompactStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "unzip",
          "package": "compact-string",
          "signature": "[(Char, Char)] -\u003e (CompactString, CompactString)",
          "source": "src/Data-CompactString-UTF8.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of CompactStrings Note that this performs two pack operations",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "unzip",
          "normalized": "[(Char,Char)]-\u003e(CompactString,CompactString)",
          "package": "compact-string",
          "signature": "[(Char,Char)]-\u003e(CompactString,CompactString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, fails, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "validate",
          "package": "compact-string",
          "signature": "CompactString -\u003e m CompactString",
          "source": "src/Data-CompactString-UTF8.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid fails otherwise returns the input",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "validate",
          "normalized": "CompactString-\u003ea CompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003em CompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, throws an error, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "validate_",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#validate_",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid throws an error otherwise returns the input",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "validate_",
          "normalized": "CompactString-\u003eCompactString",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:validate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space. And\n\u003c/p\u003e\u003cpre\u003e words = filter (not . null) . splitWith isSpace\n\u003c/pre\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "words",
          "package": "compact-string",
          "signature": "CompactString -\u003e [CompactString]",
          "source": "src/Data-CompactString-UTF8.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space And words filter not null splitWith isSpace",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "words",
          "normalized": "CompactString-\u003e[CompactString]",
          "package": "compact-string",
          "signature": "CompactString-\u003e[CompactString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "writeFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using UTF-8",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "writeFile",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using UTF-8.\n   A Byte Order Mark is also written.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "writeFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString -\u003e IO ()",
          "source": "src/Data-CompactString-UTF8.html#writeFile%27",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using UTF-8 Byte Order Mark is also written",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "writeFile'",
          "normalized": "FilePath-\u003eCompactString-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "zip",
          "package": "compact-string",
          "signature": "CompactString -\u003e CompactString -\u003e [(Char, Char)]",
          "source": "src/Data-CompactString-UTF8.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "zip",
          "normalized": "CompactString-\u003eCompactString-\u003e[(Char,Char)]",
          "package": "compact-string",
          "signature": "CompactString-\u003eCompactString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums. \n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "zipWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e b) -\u003e CompactString -\u003e CompactString -\u003e [b]",
          "source": "src/Data-CompactString-UTF8.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eCompactString-\u003eCompactString-\u003e[a]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003eb)-\u003eCompactString-\u003eCompactString-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised version of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e for the common case of a\n simultaneous map over two \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es, to build a 3rd. Rewrite rules\n are used to automatically covert zipWith into zipWith' when a pack is\n performed on the result of zipWith, but we also export it for\n convenience.\n\u003c/p\u003e",
          "module": "Data.CompactString.UTF8",
          "name": "zipWith'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString -\u003e CompactString -\u003e CompactString",
          "source": "src/Data-CompactString-UTF8.html#zipWith%27",
          "type": "function"
        },
        "index": {
          "description": "specialised version of zipWith for the common case of simultaneous map over two CompactString to build rd Rewrite rules are used to automatically covert zipWith into zipWith when pack is performed on the result of zipWith but we also export it for convenience",
          "hierarchy": "Data CompactString UTF8",
          "module": "Data.CompactString.UTF8",
          "name": "zipWith'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString-\u003eCompactString",
          "package": "compact-string",
          "partial": "With'",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString-\u003eCompactString-\u003eCompactString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-UTF8.html#v:zipWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe functions on \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es.\n All these functions can lead to crashes if not used properly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString.Unsafe",
          "name": "Unsafe",
          "package": "compact-string",
          "source": "src/Data-CompactString-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafe functions on CompactString All these functions can lead to crashes if not used properly",
          "hierarchy": "Data CompactString Unsafe",
          "module": "Data.CompactString.Unsafe",
          "name": "Unsafe",
          "package": "compact-string",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString,\n   does not check whether the ByteString represents a valid string in the encoding a.\n\u003c/p\u003e",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeFromByteString",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString a",
          "source": "src/Data-CompactString-Unsafe.html#unsafeFromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString does not check whether the ByteString represents valid string in the encoding",
          "hierarchy": "Data CompactString Unsafe",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeFromByteString",
          "normalized": "ByteString-\u003eCompactString a",
          "package": "compact-string",
          "partial": "From Byte String",
          "signature": "ByteString-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Unsafe.html#v:unsafeFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e for non-empty CompactString. \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the CompactString is non-empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeHead",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char",
          "source": "src/Data-CompactString-Unsafe.html#unsafeHead",
          "type": "function"
        },
        "index": {
          "description": "variety of head for non-empty CompactString unsafeHead omits the check for the empty case so there is an obligation on the programmer to provide proof that the CompactString is non-empty",
          "hierarchy": "Data CompactString Unsafe",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeHead",
          "normalized": "CompactString a-\u003eChar",
          "package": "compact-string",
          "partial": "Head",
          "signature": "CompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Unsafe.html#v:unsafeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e for non-empty CompactString. \u003ccode\u003e\u003ca\u003eunsafeInit\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the CompactString is non-empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeInit",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString-Unsafe.html#unsafeInit",
          "type": "function"
        },
        "index": {
          "description": "variety of init for non-empty CompactString unsafeInit omits the check for the empty case so there is an obligation on the programmer to provide proof that the CompactString is non-empty",
          "hierarchy": "Data CompactString Unsafe",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeInit",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "Init",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Unsafe.html#v:unsafeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e for non-empty CompactString. \u003ccode\u003e\u003ca\u003eunsafeLast\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the CompactString is non-empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeLast",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char",
          "source": "src/Data-CompactString-Unsafe.html#unsafeLast",
          "type": "function"
        },
        "index": {
          "description": "variety of last for non-empty CompactString unsafeLast omits the check for the empty case so there is an obligation on the programmer to provide proof that the CompactString is non-empty",
          "hierarchy": "Data CompactString Unsafe",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeLast",
          "normalized": "CompactString a-\u003eChar",
          "package": "compact-string",
          "partial": "Last",
          "signature": "CompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Unsafe.html#v:unsafeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e for non-empty CompactString. \u003ccode\u003e\u003ca\u003eunsafeTail\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the CompactString is non-empty.\n\u003c/p\u003e",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeTail",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString-Unsafe.html#unsafeTail",
          "type": "function"
        },
        "index": {
          "description": "variety of tail for non-empty CompactString unsafeTail omits the check for the empty case so there is an obligation on the programmer to provide proof that the CompactString is non-empty",
          "hierarchy": "Data CompactString Unsafe",
          "module": "Data.CompactString.Unsafe",
          "name": "unsafeTail",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "Tail",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString-Unsafe.html#v:unsafeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of strings using\n packed Word8 arrays, suitable for high performance use, both in terms\n of large data quantities, or high speed requirements.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.CompactString as C\n\u003c/pre\u003e\u003cp\u003eInternally, CompactStrings are encoded \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CompactString",
          "name": "CompactString",
          "package": "compact-string",
          "source": "src/Data-CompactString.html",
          "type": "module"
        },
        "index": {
          "description": "time and space-efficient implementation of strings using packed Word8 arrays suitable for high performance use both in terms of large data quantities or high speed requirements This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.CompactString as Internally CompactStrings are encoded ByteString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "CompactString",
          "package": "compact-string",
          "partial": "Compact String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA String using a compact, strict representation.\n   A \u003ccode\u003eCompactString a\u003c/code\u003e is encoded using encoding \u003ccode\u003ea\u003c/code\u003e, for example \u003ccode\u003eCompactString \u003ccode\u003eUTF8\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "CompactString",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#CompactString",
          "type": "data"
        },
        "index": {
          "description": "String using compact strict representation CompactString is encoded using encoding for example CompactString UTF8",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "CompactString",
          "package": "compact-string",
          "partial": "Compact String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#t:CompactString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way to encode characters into bytes\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "Encoding",
          "package": "compact-string",
          "source": "src/Data-CompactString-Internal.html#Encoding",
          "type": "class"
        },
        "index": {
          "description": "way to encode characters into bytes",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "Encoding",
          "package": "compact-string",
          "partial": "Encoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "all",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if all elements of the CompactString satisfy the predicate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a CompactString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "any",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and CompactString any determines if any element of the CompactString satisfies the predicate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two CompactStrings\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "append",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two CompactStrings",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "append",
          "normalized": "CompactString a-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "appendFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file Files are written using the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "appendFile",
          "normalized": "FilePath-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark.\n   If the file is empty, it is written using the encoding \u003ccode\u003ea\u003c/code\u003e with a Byte Order Mark.\n   If the encoding can not be determined the file is assumed to be UTF-8.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "appendFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#appendFile%27",
          "type": "function"
        },
        "index": {
          "description": "Append CompactString to file The encoding of the file is determined based on Byte Order Mark If the file is empty it is written using the encoding with Byte Order Mark If the encoding can not be determined the file is assumed to be UTF-8",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "appendFile'",
          "normalized": "FilePath-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:appendFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "break",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e breakEnd p == spanEnd (not.p)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "breakEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the CompactString breakEnd spanEnd not.p",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "breakEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two bytestrings, possibly with a different encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "compare'",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString b -\u003e Ordering",
          "source": "src/Data-CompactString.html#compare%27",
          "type": "function"
        },
        "index": {
          "description": "Compare two bytestrings possibly with different encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "compare'",
          "normalized": "CompactString a-\u003eCompactString b-\u003eOrdering",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString b-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:compare-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "concat",
          "package": "compact-string",
          "signature": "[CompactString a] -\u003e CompactString a",
          "source": "src/Data-CompactString.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "concat",
          "normalized": "[CompactString a]-\u003eCompactString a",
          "package": "compact-string",
          "signature": "[CompactString a]-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "concatMap",
          "package": "compact-string",
          "signature": "(Char -\u003e CompactString a) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over CompactString and concatenate the results",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "concatMap",
          "normalized": "(Char-\u003eCompactString a)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "Map",
          "signature": "(Char-\u003eCompactString a)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "cons",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "cons",
          "normalized": "Char-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e count c = length . elemIndices c\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "count",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e Int",
          "source": "src/Data-CompactString.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the CompactString count length elemIndices",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "count",
          "normalized": "Char-\u003eCompactString a-\u003eInt",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode e = recode =\u003c\u003c fromByteString\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the ByteString is not a valid encoded string\n   or if the string can not be represented in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "decode",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e m (CompactString a)",
          "source": "src/Data-CompactString.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Fails if the ByteString is not valid encoded string or if the string can not be represented in the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "decode",
          "normalized": "a-\u003eByteString-\u003eb(CompactString c)",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003em(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Fails if the input is not a valid encoded string\n   or if the string can not be represented in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "decodeBOM",
          "package": "compact-string",
          "signature": "ByteString -\u003e m (CompactString a)",
          "source": "src/Data-CompactString.html#decodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Fails if the input is not valid encoded string or if the string can not be represented in the encoding For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "decodeBOM",
          "normalized": "ByteString-\u003ea(CompactString b)",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003em(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:decodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, by investigating the Byte Order Mark.\n   If there is no BOM assumes UTF-8.\n   Raises an error if the input is not a valid encoded string\n   or if the string can not be represented in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor portability, this function should be prefered over \u003ccode\u003edecode UTF8\u003c/code\u003e when reading files.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "decodeBOM_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString a",
          "source": "src/Data-CompactString.html#decodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into CompactString by investigating the Byte Order Mark If there is no BOM assumes UTF-8 Raises an error if the input is not valid encoded string or if the string can not be represented in the encoding For portability this function should be prefered over decode UTF8 when reading files",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "decodeBOM_",
          "normalized": "ByteString-\u003eCompactString a",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "ByteString-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:decodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString to a CompactString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e decode_ e = recode_ . fromByteString_\n\u003c/pre\u003e\u003cp\u003ebut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the ByteString is not a valid encoded string\n   or if the string can not be represented in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "decode_",
          "package": "compact-string",
          "signature": "e -\u003e ByteString -\u003e CompactString a",
          "source": "src/Data-CompactString.html#decode_",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString to CompactString using the given encoding decode recode fromByteString but it might be faster for some combinations of encodings Raises an error if the ByteString is not valid encoded string or if the string can not be represented in the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "decode_",
          "normalized": "a-\u003eByteString-\u003eCompactString b",
          "package": "compact-string",
          "signature": "e-\u003eByteString-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:decode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003eempty\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "drop",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or empty if length xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "drop",
          "normalized": "Int-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "dropWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "elem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the CompactString membership predicate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "elem",
          "normalized": "Char-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. \n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "elemIndex",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e Maybe Int",
          "source": "src/Data-CompactString.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "elemIndex",
          "normalized": "Char-\u003eCompactString a-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "Char-\u003eCompactString a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs == \n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "elemIndexEnd",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e Maybe Int",
          "source": "src/Data-CompactString.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given CompactString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "elemIndexEnd",
          "normalized": "Char-\u003eCompactString a-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "Char-\u003eCompactString a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "elemIndices",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e [Int]",
          "source": "src/Data-CompactString.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "elemIndices",
          "normalized": "Char-\u003eCompactString a-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "Char-\u003eCompactString a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "empty",
          "package": "compact-string",
          "signature": "CompactString a",
          "source": "src/Data-CompactString.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "empty",
          "package": "compact-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode e = liftM toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "encode",
          "package": "compact-string",
          "signature": "e -\u003e CompactString a -\u003e m ByteString",
          "source": "src/Data-CompactString.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode liftM toByteString recode But it might be faster for some combinations of encodings Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "encode",
          "normalized": "a-\u003eCompactString b-\u003ec ByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString a-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eFails if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "encodeBOM",
          "package": "compact-string",
          "signature": "e -\u003e CompactString a -\u003e m ByteString",
          "source": "src/Data-CompactString.html#encodeBOM",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Fails if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "encodeBOM",
          "normalized": "a-\u003eCompactString b-\u003ec ByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString a-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:encodeBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e using the given encoding, and add a Byte Order Mark.\n   Byte Order Marks are common on Windows, but not on other platforms.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "encodeBOM_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString a -\u003e ByteString",
          "source": "src/Data-CompactString.html#encodeBOM_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString using the given encoding and add Byte Order Mark Byte Order Marks are common on Windows but not on other platforms Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "encodeBOM_",
          "normalized": "a-\u003eCompactString b-\u003eByteString",
          "package": "compact-string",
          "partial": "BOM",
          "signature": "e-\u003eCompactString a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:encodeBOM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a CompactString to a ByteString using the given encoding.\n\u003c/p\u003e\u003cpre\u003e encode_ e = toByteString . recode\n\u003c/pre\u003e\u003cp\u003eBut it might be faster for some combinations of encodings.\n\u003c/p\u003e\u003cp\u003eRaises an error if the string is cannot be encoded in the target encoding.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "encode_",
          "package": "compact-string",
          "signature": "e -\u003e CompactString a -\u003e ByteString",
          "source": "src/Data-CompactString.html#encode_",
          "type": "function"
        },
        "index": {
          "description": "Encode CompactString to ByteString using the given encoding encode toByteString recode But it might be faster for some combinations of encodings Raises an error if the string is cannot be encoded in the target encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "encode_",
          "normalized": "a-\u003eCompactString b-\u003eByteString",
          "package": "compact-string",
          "signature": "e-\u003eCompactString a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:encode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a CompactString containing those characters that satisfy the\n predicate. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "filter",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and CompactString returns CompactString containing those characters that satisfy the predicate This function is subject to array fusion",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p `index` n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "find",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e Maybe Char",
          "source": "src/Data-CompactString.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and CompactString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just index Nothing",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eMaybe Char",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the CompactString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "findIndex",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e Maybe Int",
          "source": "src/Data-CompactString.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and CompactString and returns the index of the first element in the CompactString satisfying the predicate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e which satisfies the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following holds:\n\u003c/p\u003e\u003cpre\u003e findIndexEnd c xs == \n (-) (length xs - 1) `fmap` findIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "findIndexEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e Maybe Int",
          "source": "src/Data-CompactString.html#findIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The findIndexEnd function returns the last index of the element in the given CompactString which satisfies the predicate or Nothing if there is no such element The following holds findIndexEnd xs length xs fmap findIndex reverse xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "findIndexEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Index End",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:findIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "findIndices",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e [Int]",
          "source": "src/Data-CompactString.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e[Int]",
          "package": "compact-string",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first index of a substring in another string,\n   or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the string is not found.\n   \u003ccode\u003efindSubstring p s\u003c/code\u003e is equivalent to \u003ccode\u003elistToMaybe (findSubstrings p s)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "findSubstring",
          "package": "compact-string",
          "signature": "CompactString a-\u003e CompactString a-\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "Get the first index of substring in another string or Nothing if the string is not found findSubstring is equivalent to listToMaybe findSubstrings",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "findSubstring",
          "normalized": "CompactString a-\u003eCompactString a-\u003eMaybe Int",
          "package": "compact-string",
          "partial": "Substring",
          "signature": "CompactString a-\u003eCompactString a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:findSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the indexes of all (possibly overlapping) occurances of a\n substring in a string.  This function uses the Knuth-Morris-Pratt\n string matching algorithm.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "findSubstrings",
          "package": "compact-string",
          "signature": "CompactString a-\u003e CompactString a-\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "Find the indexes of all possibly overlapping occurances of substring in string This function uses the Knuth-Morris-Pratt string matching algorithm",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "findSubstrings",
          "normalized": "CompactString a-\u003eCompactString a-\u003e[Int]",
          "package": "compact-string",
          "partial": "Substrings",
          "signature": "CompactString a-\u003eCompactString a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:findSubstrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a CompactString, reduces the\n CompactString using the binary operator, from left to right.\n This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldl",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString a -\u003e acc",
          "source": "src/Data-CompactString.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and CompactString reduces the CompactString using the binary operator from left to right This function is subject to array fusion",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString b-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString a-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n Though actually foldl is also strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldl'",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e acc) -\u003e acc -\u003e CompactString a -\u003e acc",
          "source": "src/Data-CompactString.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator Though actually foldl is also strict in the accumulator",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eCompactString b-\u003ea",
          "package": "compact-string",
          "signature": "(acc-\u003eChar-\u003eacc)-\u003eacc-\u003eCompactString a-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n This function is subject to array fusion. \n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty CompactString This function is subject to array fusion An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldl1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldr",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString a -\u003e acc",
          "source": "src/Data-CompactString.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString b-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString a-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a CompactString,\n reduces the CompactString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldr'",
          "package": "compact-string",
          "signature": "(Char -\u003e acc -\u003e acc) -\u003e acc -\u003e CompactString a -\u003e acc",
          "source": "src/Data-CompactString.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and CompactString reduces the CompactString using the binary operator from right to left",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldr'",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eCompactString b-\u003ea",
          "package": "compact-string",
          "signature": "(Char-\u003eacc-\u003eacc)-\u003eacc-\u003eCompactString a-\u003eacc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr1\\'' is a variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e, but is strict in the\n accumulator.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "foldr1'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr1 but is strict in the accumulator An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "foldr1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Fails if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "fromByteString",
          "package": "compact-string",
          "signature": "ByteString -\u003e m (CompactString a)",
          "source": "src/Data-CompactString.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Fails if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "fromByteString",
          "normalized": "ByteString-\u003ea(CompactString b)",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003em(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a ByteString to a CompactString.\n   Raises an error if the ByteString is not a valid encoded string.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "fromByteString_",
          "package": "compact-string",
          "signature": "ByteString -\u003e CompactString a",
          "source": "src/Data-CompactString.html#fromByteString_",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to CompactString Raises an error if the ByteString is not valid encoded string",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "fromByteString_",
          "normalized": "ByteString-\u003eCompactString a",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "ByteString-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:fromByteString_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Equivalent to \u003ccode\u003ehGetContents stdin\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInput is assumed to be in the encoding \u003ccode\u003ea\u003c/code\u003e, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "getContents",
          "package": "compact-string",
          "signature": "IO (CompactString a)",
          "source": "src/Data-CompactString.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "getContents Equivalent to hGetContents stdin Input is assumed to be in the encoding this may not be appropriate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "getContents",
          "package": "compact-string",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from stdin.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "getLine",
          "package": "compact-string",
          "signature": "IO (CompactString a)",
          "source": "src/Data-CompactString.html#getLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from stdin",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "getLine",
          "package": "compact-string",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and returns a list of\n CompactStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "group",
          "package": "compact-string",
          "signature": "CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes CompactString and returns list of CompactStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "group",
          "normalized": "CompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "CompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "groupBy",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eCompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eCompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hGet",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read CompactString directly from the specified Handle The handle is interpreted as the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hGetContents",
          "package": "compact-string",
          "signature": "Handle -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The handle is interpreted as the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe encoding is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hGetContents'",
          "package": "compact-string",
          "signature": "Handle -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#hGetContents%27",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents into CompactString The encoding is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hGetContents'",
          "normalized": "Handle-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "Get Contents'",
          "signature": "Handle-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hGetContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from a handle\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hGetLine",
          "package": "compact-string",
          "signature": "Handle -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#hGetLine",
          "type": "function"
        },
        "index": {
          "description": "Read line from handle",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is identical to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.\n\u003c/p\u003e\u003cp\u003eThe handle is interpreted as the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hGetNonBlocking",
          "package": "compact-string",
          "signature": "Handle -\u003e Int -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#hGetNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "hGetNonBlocking is identical to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available The handle is interpreted as the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOutput is written in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hPut",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Outputs CompactString to the specified Handle Output is written in the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hPut",
          "normalized": "Handle-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "Put",
          "signature": "Handle-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility \n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hPutStr",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hPutStr",
          "normalized": "Handle-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str",
          "signature": "Handle-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a handle, appending a newline byte\n\u003c/p\u003e\u003cp\u003eOutput is written in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "hPutStrLn",
          "package": "compact-string",
          "signature": "Handle -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to handle appending newline byte Output is written in the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "head",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "head",
          "normalized": "CompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the front of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e headView s = if null s then Nothing else Just (head s, tail s)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "headView",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Maybe (Char, CompactString a)",
          "source": "src/Data-CompactString.html#headView",
          "type": "function"
        },
        "index": {
          "description": "view of the front of CompactString headView if null then Nothing else Just head tail",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "headView",
          "normalized": "CompactString a-\u003eMaybe(Char,CompactString a)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString a-\u003eMaybe(Char,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:headView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "index",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Int -\u003e Char",
          "source": "src/Data-CompactString.html#index",
          "type": "function"
        },
        "index": {
          "description": "CompactString index subscript operator starting from",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "index",
          "normalized": "CompactString a-\u003eInt-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString a-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "init",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of CompactString except the last one An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "init",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "inits",
          "package": "compact-string",
          "signature": "CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#inits",
          "type": "function"
        },
        "index": {
          "description": "Return all initial segments of the given CompactString shortest first",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "inits",
          "normalized": "CompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "CompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eCompactString -\u003e CompactString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device. It's great for writing one line programs!\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "interact",
          "package": "compact-string",
          "signature": "(CompactString a -\u003e CompactString a) -\u003e IO ()",
          "source": "src/Data-CompactString.html#interact",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type CompactString CompactString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device It great for writing one line programs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "interact",
          "normalized": "(CompactString a-\u003eCompactString a)-\u003eIO()",
          "package": "compact-string",
          "signature": "(CompactString a-\u003eCompactString a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "intercalate",
          "package": "compact-string",
          "signature": "CompactString a -\u003e [CompactString a] -\u003e CompactString a",
          "source": "src/Data-CompactString.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "The intercalate function takes CompactString and list of CompactString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "intercalate",
          "normalized": "CompactString a-\u003e[CompactString a]-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003e[CompactString a]-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e and `intersperses' that character between the elements of\n the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "intersperse",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and CompactString and intersperses that character between the elements of the CompactString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "intersperse",
          "normalized": "Char-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether one string is a substring of another. \u003ccode\u003eisInfixOf\n p s\u003c/code\u003e is equivalent to \u003ccode\u003enot (null (findSubstrings p s))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "isInfixOf",
          "package": "compact-string",
          "signature": "CompactString a-\u003e CompactString a-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether one string is substring of another isInfixOf is equivalent to not null findSubstrings",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "isInfixOf",
          "normalized": "CompactString a-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "partial": "Infix Of",
          "signature": "CompactString a-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "isPrefixOf",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two CompactString and returns True iff the first is prefix of the second",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "isPrefixOf",
          "normalized": "CompactString a-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "partial": "Prefix Of",
          "signature": "CompactString a-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two CompactString and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "isSuffixOf",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two CompactString and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "isSuffixOf",
          "normalized": "CompactString a-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "partial": "Suffix Of",
          "signature": "CompactString a-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a ByteString, which must be finite and non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "last",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "last",
          "normalized": "CompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A view of the back of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e lastView s = if null s then Nothing else Just (init s, last s)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "lastView",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Maybe (CompactString a, Char)",
          "source": "src/Data-CompactString.html#lastView",
          "type": "function"
        },
        "index": {
          "description": "view of the back of CompactString lastView if null then Nothing else Just init last",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "lastView",
          "normalized": "CompactString a-\u003eMaybe(CompactString a,Char)",
          "package": "compact-string",
          "partial": "View",
          "signature": "CompactString a-\u003eMaybe(CompactString a,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:lastView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a CompactString as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "length",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Int",
          "source": "src/Data-CompactString.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of CompactString as an Int",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "length",
          "normalized": "CompactString a-\u003eInt",
          "package": "compact-string",
          "signature": "CompactString a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e up into a list of CompactStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "lines",
          "package": "compact-string",
          "signature": "CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks CompactString up into list of CompactStrings at newline Chars The resulting strings do not contain newlines",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "lines",
          "normalized": "CompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "CompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the CompactString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "map",
          "package": "compact-string",
          "signature": "(Char -\u003e Char) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the CompactString obtained by applying to each element of xs This function is subject to array fusion",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "(Char-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "mapAccumL",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString a -\u003e (acc, CompactString a)",
          "source": "src/Data-CompactString.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of CompactString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString b-\u003e(a,CompactString b)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString a-\u003e(acc,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a CompactString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "mapAccumR",
          "package": "compact-string",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e CompactString a -\u003e (acc, CompactString a)",
          "source": "src/Data-CompactString.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of CompactString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eCompactString b-\u003e(a,CompactString b)",
          "package": "compact-string",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eCompactString a-\u003e(acc,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e map Char functions, provided with the index at each position.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "mapIndexed",
          "package": "compact-string",
          "signature": "(Int -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#mapIndexed",
          "type": "function"
        },
        "index": {
          "description": "map Char functions provided with the index at each position",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "mapIndexed",
          "normalized": "(Int-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "Indexed",
          "signature": "(Int-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:mapIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "maximum",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "maximum",
          "normalized": "CompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "minimum",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char",
          "source": "src/Data-CompactString.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from CompactString An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "minimum",
          "normalized": "CompactString a-\u003eChar",
          "package": "compact-string",
          "signature": "CompactString a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "notElem",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "notElem",
          "normalized": "Char-\u003eCompactString a-\u003eBool",
          "package": "compact-string",
          "partial": "Elem",
          "signature": "Char-\u003eCompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a CompactString is empty.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "null",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Bool",
          "source": "src/Data-CompactString.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether CompactString is empty",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "null",
          "normalized": "CompactString a-\u003eBool",
          "package": "compact-string",
          "signature": "CompactString a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "pack",
          "package": "compact-string",
          "signature": "String -\u003e CompactString a",
          "source": "src/Data-CompactString.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "pack",
          "normalized": "String-\u003eCompactString a",
          "package": "compact-string",
          "signature": "String-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e,\n returns a pair of CompactStrings.\n The first containing those characters that satisfy the predicate,\n the second containg those that don't.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "partition",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#partition",
          "type": "function"
        },
        "index": {
          "description": "partition applied to predicate and CompactString returns pair of CompactStrings The first containing those characters that satisfy the predicate the second containg those that don",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "partition",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout.\n\u003c/p\u003e\u003cp\u003eOutput is written in the encoding \u003ccode\u003ea\u003c/code\u003e, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "putStr",
          "package": "compact-string",
          "signature": "CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#putStr",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout Output is written in the encoding this may not be appropriate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "putStr",
          "normalized": "CompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "Str",
          "signature": "CompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to stdout, appending a newline character.\n\u003c/p\u003e\u003cp\u003eOutput is written in the encoding \u003ccode\u003ea\u003c/code\u003e, this may not be appropriate.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "putStrLn",
          "package": "compact-string",
          "signature": "CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to stdout appending newline character Output is written in the encoding this may not be appropriate",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "putStrLn",
          "normalized": "CompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "Str Ln",
          "signature": "CompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eFiles are assumed to be in the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "readFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows Files are assumed to be in the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e.  This is far more\n   efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n   \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. Files are read using 'text mode' on Windows.\n\u003c/p\u003e\u003cp\u003eThe encoding of the file is determined based on a Byte Order Mark, see \u003ccode\u003e\u003ca\u003edecodeBOM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "readFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e IO (CompactString a)",
          "source": "src/Data-CompactString.html#readFile%27",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into CompactString This is far more efficient than reading the characters into String and then using pack Files are read using text mode on Windows The encoding of the file is determined based on Byte Order Mark see decodeBOM",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO(CompactString a)",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eIO(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between two different encodings, fails if conversion is not possible.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "recode",
          "package": "compact-string",
          "signature": "CompactString a -\u003e m (CompactString b)",
          "source": "src/Data-CompactString.html#recode",
          "type": "function"
        },
        "index": {
          "description": "Convert between two different encodings fails if conversion is not possible",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "recode",
          "normalized": "CompactString a-\u003eb(CompactString c)",
          "package": "compact-string",
          "signature": "CompactString a-\u003em(CompactString b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:recode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between two different encodings, raises an error if conversion is not possible.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "recode_",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString b",
          "source": "src/Data-CompactString.html#recode_",
          "type": "function"
        },
        "index": {
          "description": "Convert between two different encodings raises an error if conversion is not possible",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "recode_",
          "normalized": "CompactString a-\u003eCompactString b",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:recode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a CompactString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "replicate",
          "package": "compact-string",
          "signature": "Int -\u003e Char -\u003e CompactString a",
          "source": "src/Data-CompactString.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is CompactString of length with the value of every element The following holds replicate unfoldr Just",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eCompactString a",
          "package": "compact-string",
          "signature": "Int-\u003eChar-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "reverse",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "reverse",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "scanl",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "scanl1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "scanl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "scanr",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "scanr",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "scanr1",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "scanr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "singleton",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a",
          "source": "src/Data-CompactString.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "singleton",
          "normalized": "Char-\u003eCompactString a",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a byte to the end of a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "snoc",
          "package": "compact-string",
          "signature": "CompactString a -\u003e Char -\u003e CompactString a",
          "source": "src/Data-CompactString.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "snoc",
          "normalized": "CompactString a-\u003eChar-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eChar-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Sort a CompactString\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "sort",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#sort",
          "type": "function"
        },
        "index": {
          "description": "log Sort CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "sort",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "span",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWe have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) cs\n    == \n let (x,y) = span (not.isSpace) (reverse cs) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "spanEnd",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the CompactString We have spanEnd not.isSpace and spanEnd not isSpace cs let span not.isSpace reverse cs in reverse reverse",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "spanEnd",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "split",
          "package": "compact-string",
          "signature": "Char -\u003e CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new CompactString that are slices of the original",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "split",
          "normalized": "Char-\u003eCompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "Char-\u003eCompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "splitAt",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString a -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "splitAt",
          "normalized": "Int-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "partial": "At",
          "signature": "Int-\u003eCompactString a-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "splitWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits CompactString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a CompactString, which must be non-empty.\n An exception will be thrown in the case of an empty CompactString.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "tail",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of CompactString which must be non-empty An exception will be thrown in the case of an empty CompactString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "tail",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "tails",
          "package": "compact-string",
          "signature": "CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#tails",
          "type": "function"
        },
        "index": {
          "description": "Return all final segments of the given CompactString longest first",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "tails",
          "normalized": "CompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "CompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a CompactString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "take",
          "package": "compact-string",
          "signature": "Int -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to CompactString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "take",
          "normalized": "Int-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "Int-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a CompactString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "takeWhile",
          "package": "compact-string",
          "signature": "(Char -\u003e Bool) -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and CompactString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CompactString to a ByteString\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "toByteString",
          "package": "compact-string",
          "signature": "CompactString a -\u003e ByteString",
          "source": "src/Data-CompactString.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert CompactString to ByteString",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "toByteString",
          "normalized": "CompactString a-\u003eByteString",
          "package": "compact-string",
          "partial": "Byte String",
          "signature": "CompactString a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "transpose",
          "package": "compact-string",
          "signature": "[CompactString a] -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its CompactString argument",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "transpose",
          "normalized": "[CompactString a]-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "[CompactString a]-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a \n ByteString from a seed value.  The function takes the element and \n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the CompactString or returns \n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next byte in the string, \n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "unfoldr",
          "package": "compact-string",
          "signature": "(acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e CompactString a",
          "source": "src/Data-CompactString.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the CompactString or returns Just in which case is the next byte in the string and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eCompactString b",
          "package": "compact-string",
          "signature": "(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fst (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "unfoldrN",
          "package": "compact-string",
          "signature": "Int -\u003e (acc -\u003e Maybe (Char, acc)) -\u003e acc -\u003e (CompactString a, Maybe acc)",
          "source": "src/Data-CompactString.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr fst unfoldrN take unfoldr",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(CompactString b,Maybe a)",
          "package": "compact-string",
          "signature": "Int-\u003e(acc-\u003eMaybe(Char,acc))-\u003eacc-\u003e(CompactString a,Maybe acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "unlines",
          "package": "compact-string",
          "signature": "[CompactString a] -\u003e CompactString a",
          "source": "src/Data-CompactString.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "unlines",
          "normalized": "[CompactString a]-\u003eCompactString a",
          "package": "compact-string",
          "signature": "[CompactString a]-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "unpack",
          "package": "compact-string",
          "signature": "CompactString a -\u003e String",
          "source": "src/Data-CompactString.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts CompactString to String",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "unpack",
          "normalized": "CompactString a-\u003eString",
          "package": "compact-string",
          "signature": "CompactString a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "unwords",
          "package": "compact-string",
          "signature": "[CompactString a] -\u003e CompactString a",
          "source": "src/Data-CompactString.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "unwords",
          "normalized": "[CompactString a]-\u003eCompactString a",
          "package": "compact-string",
          "signature": "[CompactString a]-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n CompactStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "unzip",
          "package": "compact-string",
          "signature": "[(Char, Char)] -\u003e (CompactString a, CompactString a)",
          "source": "src/Data-CompactString.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of CompactStrings Note that this performs two pack operations",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "unzip",
          "normalized": "[(Char,Char)]-\u003e(CompactString a,CompactString a)",
          "package": "compact-string",
          "signature": "[(Char,Char)]-\u003e(CompactString a,CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, fails, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "validate",
          "package": "compact-string",
          "signature": "CompactString a -\u003e m (CompactString a)",
          "source": "src/Data-CompactString.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid fails otherwise returns the input",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "validate",
          "normalized": "CompactString a-\u003eb(CompactString a)",
          "package": "compact-string",
          "signature": "CompactString a-\u003em(CompactString a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a CompactString.\n   If the string is invalid, throws an error, otherwise returns the input.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "validate_",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#validate_",
          "type": "function"
        },
        "index": {
          "description": "Validates CompactString If the string is invalid throws an error otherwise returns the input",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "validate_",
          "normalized": "CompactString a-\u003eCompactString a",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:validate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space. And\n\u003c/p\u003e\u003cpre\u003e words = filter (not . null) . splitWith isSpace\n\u003c/pre\u003e",
          "module": "Data.CompactString",
          "name": "words",
          "package": "compact-string",
          "signature": "CompactString a -\u003e [CompactString a]",
          "source": "src/Data-CompactString.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space And words filter not null splitWith isSpace",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "words",
          "normalized": "CompactString a-\u003e[CompactString a]",
          "package": "compact-string",
          "signature": "CompactString a-\u003e[CompactString a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using the encoding \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "writeFile",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using the encoding",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "writeFile",
          "normalized": "FilePath-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "File",
          "signature": "FilePath-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e\u003cp\u003eFiles are written using the encoding \u003ccode\u003ea\u003c/code\u003e.\n   A Byte Order Mark is also written.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "writeFile'",
          "package": "compact-string",
          "signature": "FilePath -\u003e CompactString a -\u003e IO ()",
          "source": "src/Data-CompactString.html#writeFile%27",
          "type": "function"
        },
        "index": {
          "description": "Write CompactString to file Files are written using the encoding Byte Order Mark is also written",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "writeFile'",
          "normalized": "FilePath-\u003eCompactString a-\u003eIO()",
          "package": "compact-string",
          "partial": "File'",
          "signature": "FilePath-\u003eCompactString a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "zip",
          "package": "compact-string",
          "signature": "CompactString a -\u003e CompactString a -\u003e [(Char, Char)]",
          "source": "src/Data-CompactString.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "zip",
          "normalized": "CompactString a-\u003eCompactString a-\u003e[(Char,Char)]",
          "package": "compact-string",
          "signature": "CompactString a-\u003eCompactString a-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums. \n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "zipWith",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e b) -\u003e CompactString a -\u003e CompactString a -\u003e [b]",
          "source": "src/Data-CompactString.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eCompactString b-\u003eCompactString b-\u003e[a]",
          "package": "compact-string",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003eb)-\u003eCompactString a-\u003eCompactString a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised version of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e for the common case of a\n simultaneous map over two \u003ccode\u003e\u003ca\u003eCompactString\u003c/a\u003e\u003c/code\u003es, to build a 3rd. Rewrite rules\n are used to automatically covert zipWith into zipWith' when a pack is\n performed on the result of zipWith, but we also export it for\n convenience.\n\u003c/p\u003e",
          "module": "Data.CompactString",
          "name": "zipWith'",
          "package": "compact-string",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e CompactString a -\u003e CompactString a -\u003e CompactString a",
          "source": "src/Data-CompactString.html#zipWith%27",
          "type": "function"
        },
        "index": {
          "description": "specialised version of zipWith for the common case of simultaneous map over two CompactString to build rd Rewrite rules are used to automatically covert zipWith into zipWith when pack is performed on the result of zipWith but we also export it for convenience",
          "hierarchy": "Data CompactString",
          "module": "Data.CompactString",
          "name": "zipWith'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a-\u003eCompactString a",
          "package": "compact-string",
          "partial": "With'",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eCompactString a-\u003eCompactString a-\u003eCompactString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compact-string/docs/Data-CompactString.html#v:zipWith-39-"
      }
    }
  ]
]