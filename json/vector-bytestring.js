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
        "word": "vector-bytestring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManipulate \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e operations. All Chars will be\n truncated to 8 bits. It can be expected that these functions will run\n at identical speeds to their \u003ccode\u003eWord8\u003c/code\u003e equivalents in \u003ca\u003eData.ByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMore specifically these byte strings are taken to be in the\n subset of Unicode covered by code points 0-255. This covers\n Unicode Basic Latin, Latin-1 Supplement and C0+C1 Controls.\n\u003c/p\u003e\u003cp\u003eSee:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.unicode.org/charts/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.unicode.org/charts/PDF/U0000.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.unicode.org/charts/PDF/U0080.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Vector.Storable.ByteString.Char8 as B\n\u003c/pre\u003e\u003cp\u003eThe Char8 interface to bytestrings provides an instance of IsString\n for the ByteString type, enabling you to use string literals, and\n have them implicitly packed to ByteStrings. Use -XOverloadedStrings\n to enable this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "Char8",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html",
          "type": "module"
        },
        "index": {
          "description": "Manipulate ByteString using Char operations All Chars will be truncated to bits It can be expected that these functions will run at identical speeds to their Word8 equivalents in Data.ByteString More specifically these byte strings are taken to be in the subset of Unicode covered by code points This covers Unicode Basic Latin Latin-1 Supplement and C0 C1 Controls See http www.unicode.org charts http www.unicode.org charts PDF U0000.pdf http www.unicode.org charts PDF U0080.pdf This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.Vector.Storable.ByteString.Char8 as The Char8 interface to bytestrings provides an instance of IsString for the ByteString type enabling you to use string literals and have them implicitly packed to ByteStrings Use XOverloadedStrings to enable this",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "Char8",
          "package": "vector-bytestring",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#ByteString",
          "type": "type"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "all",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "any",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two ByteStrings\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "append",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:append\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:append\"]"
        },
        "index": {
          "description": "Append two ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "append",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "appendFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "break",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ebreakEnd p == spanEnd (not.p)\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "breakEnd",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the ByteString breakEnd spanEnd not.p",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "breakEnd",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on a substring, returning a pair of the part of the\n string prior to the match, and the rest of the string.\n\u003c/p\u003e\u003cp\u003eThe following relationships hold:\n\u003c/p\u003e\u003cpre\u003e break (== c) l == breakSubstring (singleton c) l\n\u003c/pre\u003e\u003cp\u003eand:\n\u003c/p\u003e\u003cpre\u003e findSubstring s l ==\n    if null s then Just 0\n              else case breakSubstring s l of\n                       (x,y) | null y    -\u003e Nothing\n                             | otherwise -\u003e Just (length x)\n\u003c/pre\u003e\u003cp\u003eFor example, to tokenise a string, dropping delimiters:\n\u003c/p\u003e\u003cpre\u003e tokenise x y = h : if null t then [] else tokenise x (drop (length x) t)\n     where (h,t) = breakSubstring x y\n\u003c/pre\u003e\u003cp\u003eTo skip to the first occurence of a string:\n\u003c/p\u003e\u003cpre\u003e snd (breakSubstring x y)\n\u003c/pre\u003e\u003cp\u003eTo take the parts of a string before a delimiter:\n\u003c/p\u003e\u003cpre\u003e fst (breakSubstring x y)\n\u003c/pre\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "breakSubstring",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:breakSubstring\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:breakSubstring\"]"
        },
        "index": {
          "description": "Break string on substring returning pair of the part of the string prior to the match and the rest of the string The following relationships hold break breakSubstring singleton and findSubstring if null then Just else case breakSubstring of null Nothing otherwise Just length For example to tokenise string dropping delimiters tokenise if null then else tokenise drop length where breakSubstring To skip to the first occurence of string snd breakSubstring To take the parts of string before delimiter fst breakSubstring",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "breakSubstring",
          "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "Substring",
          "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:breakSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of ByteStrings.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "concat",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#concat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:concat\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:concat\"]"
        },
        "index": {
          "description": "Concatenate list of ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "concat",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "concatMap",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "concatMap",
          "normalized": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Map",
          "signature": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "cons",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "cons",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a copy of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with its own storage.\n This is mainly useful to allow the rest of the data pointed\n to by the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to be garbage collected, for example\n if a large string has been read in, and only a small part of it\n is needed in the rest of the program.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "copy",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#copy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:copy\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:copy\"]"
        },
        "index": {
          "description": "Make copy of the ByteString with its own storage This is mainly useful to allow the rest of the data pointed to by the ByteString to be garbage collected for example if large string has been read in and only small part of it is needed in the rest of the program",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "copy",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eAlso\n\u003c/p\u003e\u003cpre\u003e count '\\n' == length . lines\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "count",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Int",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices Also count length lines But more efficiently than using length on the intermediate list",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "count",
          "normalized": "Char-\u003eByteString-\u003eInt",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "drop",
          "package": "vector-bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#drop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:drop\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:drop\"]"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "drop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "dropWhile",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate. This\n implementation uses \u003ccode\u003ememchr(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elem",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate This implementation uses memchr",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal (by memchr) to the\n query element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elemIndex",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal by memchr to the query element or Nothing if there is no such element",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elemIndex",
          "normalized": "Char-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "Char-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs ==\n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elemIndexEnd",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given ByteString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elemIndexEnd",
          "normalized": "Char-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index End",
          "signature": "Char-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elemIndices",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "elemIndices",
          "normalized": "Char-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "Char-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "empty",
          "package": "vector-bytestring",
          "signature": "ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:empty\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:empty\"]"
        },
        "index": {
          "description": "The empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "empty",
          "package": "vector-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "filter",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "find",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "findIndex",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "findIndices",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first index of a substring in another string,\n   or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the string is not found.\n   \u003ccode\u003efindSubstring p s\u003c/code\u003e is equivalent to \u003ccode\u003elistToMaybe (findSubstrings p s)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "findSubstring",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e ByteString-\u003e Maybe Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:findSubstring\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:findSubstring\"]"
        },
        "index": {
          "description": "Get the first index of substring in another string or Nothing if the string is not found findSubstring is equivalent to listToMaybe findSubstrings",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "findSubstring",
          "normalized": "ByteString-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Substring",
          "signature": "ByteString-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:findSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the indexes of all (possibly overlapping) occurances of a\n substring in a string.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "findSubstrings",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e ByteString-\u003e [Int]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:findSubstrings\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:findSubstrings\"]"
        },
        "index": {
          "description": "Find the indexes of all possibly overlapping occurances of substring in string",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "findSubstrings",
          "normalized": "ByteString-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Substrings",
          "signature": "ByteString-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:findSubstrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like foldl, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl'",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl1",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl1'",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl1",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a packed string,\n reduces the packed string using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and packed string reduces the packed string using the binary operator from right to left",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr\\'' is a strict variant of foldr\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr'",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr is strict variant of foldr",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr'",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr1",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of foldr1\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr1'",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "strict variant of foldr1",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "foldr1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Read stdin strictly. Equivalent to hGetContents stdin\n The \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is closed after the contents have been read.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "getContents",
          "package": "vector-bytestring",
          "signature": "IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#getContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:getContents\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:getContents\"]"
        },
        "index": {
          "description": "getContents Read stdin strictly Equivalent to hGetContents stdin The Handle is closed after the contents have been read",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "getContents",
          "package": "vector-bytestring",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from stdin.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "getLine",
          "package": "vector-bytestring",
          "signature": "IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#getLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:getLine\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:getLine\"]"
        },
        "index": {
          "description": "Read line from stdin",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "getLine",
          "package": "vector-bytestring",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a ByteString and returns a list of\n ByteStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. It is about 40% faster than\n \u003cem\u003egroupBy (==)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "group",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#group",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:group\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:group\"]"
        },
        "index": {
          "description": "The group function takes ByteString and returns list of ByteStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test It is about faster than groupBy",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "group",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003egroup\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "groupBy",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  This\n is far more efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n and then using \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. First argument is the Handle to read from,\n and the second is the number of bytes to read. It returns the bytes\n read, up to n, or \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e if EOF has been reached.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e is implemented in terms of \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end\n is closed, \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hGet",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#hGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGet\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hGet\"]"
        },
        "index": {
          "description": "Read ByteString directly from the specified Handle This is far more efficient than reading the characters into String and then using pack First argument is the Handle to read from and the second is the number of bytes to read It returns the bytes read up to or null if EOF has been reached hGet is implemented in terms of hGetBuf If the handle is pipe or socket and the writing end is closed hGet will behave as if EOF was reached",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function reads chunks at a time, doubling the chunksize on each\n read. The final buffer is then realloced to the appropriate size. For\n files \u003e half of available memory, this may lead to memory exhaustion.\n Consider using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e in this case.\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, the string representation in the file is assumed to\n be ISO-8859-1.\n\u003c/p\u003e\u003cp\u003eThe Handle is closed once the contents have been read,\n or if an exception is thrown.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hGetContents",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#hGetContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGetContents\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hGetContents\"]"
        },
        "index": {
          "description": "Read entire handle contents strictly into ByteString This function reads chunks at time doubling the chunksize on each read The final buffer is then realloced to the appropriate size For files half of available memory this may lead to memory exhaustion Consider using readFile in this case As with hGet the string representation in the file is assumed to be ISO-8859-1 The Handle is closed once the contents have been read or if an exception is thrown",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from a handle\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hGetLine",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#hGetLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGetLine\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hGetLine\"]"
        },
        "index": {
          "description": "Read line from handle",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is identical to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never\n block waiting for data to become available.  If there is no data\n available to be read, \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hGetNonBlocking",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#hGetNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGetNonBlocking\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hGetNonBlocking\"]"
        },
        "index": {
          "description": "hGetNonBlocking is identical to hGet except that it will never block waiting for data to become available If there is no data available to be read hGetNonBlocking returns null",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hPut",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#hPut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPut\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hPut\"]"
        },
        "index": {
          "description": "Outputs ByteString to the specified Handle",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hPut",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e except that it will never block. Instead it returns\n any tail that did not get written. This tail may be \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e in the case that\n the whole string was written, or the whole original string if nothing was\n written. Partial writes are also possible.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hPutNonBlocking",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#hPutNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPutNonBlocking\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hPutNonBlocking\"]"
        },
        "index": {
          "description": "Similar to hPut except that it will never block Instead it returns any tail that did not get written This tail may be empty in the case that the whole string was written or the whole original string if nothing was written Partial writes are also possible Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hPut",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hPutNonBlocking",
          "normalized": "Handle-\u003eByteString-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Put Non Blocking",
          "signature": "Handle-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPutNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "hPutStr",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#hPutStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPutStr\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hPutStr\"]"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hPutStr",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put Str",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to a handle, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hPutStrLn",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to handle appending newline byte",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "head",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "head",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "index",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "init",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#init",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:init\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:init\"]"
        },
        "index": {
          "description": "Return all the elements of ByteString except the last one An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "init",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "inits",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#inits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:inits\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:inits\"]"
        },
        "index": {
          "description": "Return all initial segments of the given ByteString shortest first",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "inits",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eByteString -\u003e ByteString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "interact",
          "package": "vector-bytestring",
          "signature": "(ByteString -\u003e ByteString) -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#interact",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:interact\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:interact\"]"
        },
        "index": {
          "description": "The interact function takes function of type ByteString ByteString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "interact",
          "normalized": "(ByteString-\u003eByteString)-\u003eIO()",
          "package": "vector-bytestring",
          "signature": "(ByteString-\u003eByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "intercalate",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#intercalate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:intercalate\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:intercalate\"]"
        },
        "index": {
          "description": "The intercalate function takes ByteString and list of ByteString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "intercalate",
          "normalized": "ByteString-\u003e[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a Char and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n and `intersperses' that Char between the elements of the\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on Lists.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "intersperse",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and ByteString and intersperses that Char between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "intersperse",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether one string is a substring of another. \u003ccode\u003eisInfixOf\n p s\u003c/code\u003e is equivalent to \u003ccode\u003enot (null (findSubstrings p s))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "isInfixOf",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#isInfixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:isInfixOf\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:isInfixOf\"]"
        },
        "index": {
          "description": "Check whether one string is substring of another isInfixOf is equivalent to not null findSubstrings",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "isInfixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Infix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "isPrefixOf",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#isPrefixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:isPrefixOf\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:isPrefixOf\"]"
        },
        "index": {
          "description": "The isPrefixOf function takes two ByteStrings and returns True iff the first is prefix of the second",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "isPrefixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Prefix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e\u003cp\u003eHowever, the real implemenation uses memcmp to compare the end of the\n string only, with no reverse required..\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "isSuffixOf",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#isSuffixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:isSuffixOf\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:isSuffixOf\"]"
        },
        "index": {
          "description": "The isSuffixOf function takes two ByteStrings and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse However the real implemenation uses memcmp to compare the end of the string only with no reverse required",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "isSuffixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Suffix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a packed string, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "last",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of packed string which must be non-empty",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "last",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a ByteString as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "length",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int",
          "source": "src/Data-Vector-Storable-ByteString.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:length\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:length\"]"
        },
        "index": {
          "description": "length returns the length of ByteString as an Int",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "length",
          "normalized": "ByteString-\u003eInt",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of ByteStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "lines",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks ByteString up into list of ByteStrings at newline Chars The resulting strings do not contain newlines",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003exs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "map",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "mapAccumL",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "mapAccumR",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "maximum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "maximum",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "minimum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "minimum",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "notElem",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "notElem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Elem",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a ByteString is empty.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "null",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:null\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:null\"]"
        },
        "index": {
          "description": "Test whether ByteString is empty",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "null",
          "normalized": "ByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor applications with large numbers of string literals, pack can be a\n bottleneck.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "pack",
          "package": "vector-bytestring",
          "signature": "String -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into ByteString For applications with large numbers of string literals pack can be bottleneck",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "pack",
          "normalized": "String-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Construct a new \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCString\u003c/code\u003e. The\n resulting \u003ccode\u003eByteString\u003c/code\u003e is an immutable copy of the original\n \u003ccode\u003eCString\u003c/code\u003e, and is managed on the Haskell heap. The original\n \u003ccode\u003eCString\u003c/code\u003e must be null terminated.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "packCString",
          "package": "vector-bytestring",
          "signature": "CString -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#packCString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:packCString\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:packCString\"]"
        },
        "index": {
          "description": "Construct new ByteString from CString The resulting ByteString is an immutable copy of the original CString and is managed on the Haskell heap The original CString must be null terminated",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "packCString",
          "normalized": "CString-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "CString",
          "signature": "CString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:packCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Construct a new \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCStringLen\u003c/code\u003e. The\n resulting \u003ccode\u003eByteString\u003c/code\u003e is an immutable copy of the original \u003ccode\u003eCStringLen\u003c/code\u003e.\n The \u003ccode\u003eByteString\u003c/code\u003e is a normal Haskell value and will be managed on the\n Haskell heap.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "packCStringLen",
          "package": "vector-bytestring",
          "signature": "CStringLen -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#packCStringLen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:packCStringLen\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:packCStringLen\"]"
        },
        "index": {
          "description": "Construct new ByteString from CStringLen The resulting ByteString is an immutable copy of the original CStringLen The ByteString is normal Haskell value and will be managed on the Haskell heap",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "packCStringLen",
          "normalized": "CStringLen-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "CString Len",
          "signature": "CStringLen-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:packCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "putStr",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#putStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:putStr\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:putStr\"]"
        },
        "index": {
          "description": "Write ByteString to stdout",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "putStr",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Str",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "putStrLn",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to stdout appending newline byte",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  This is far more\n efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.  It also may be more efficient than opening the file and\n reading it using hGet.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "readFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into ByteString This is far more efficient than reading the characters into String and then using pack It also may be more efficient than opening the file and reading it using hGet",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInt reads an Int from the beginning of the ByteString.  If there is no\n integer at the beginning of the string, it returns Nothing, otherwise\n it just returns the int read, and the rest of the string.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "readInt",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Int, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#readInt",
          "type": "function"
        },
        "index": {
          "description": "readInt reads an Int from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "readInt",
          "normalized": "ByteString-\u003eMaybe(Int,ByteString)",
          "package": "vector-bytestring",
          "partial": "Int",
          "signature": "ByteString-\u003eMaybe(Int,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:readInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInteger reads an Integer from the beginning of the ByteString.  If\n there is no integer at the beginning of the string, it returns Nothing,\n otherwise it just returns the int read, and the rest of the string.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "readInteger",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Integer, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#readInteger",
          "type": "function"
        },
        "index": {
          "description": "readInteger reads an Integer from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "readInteger",
          "normalized": "ByteString-\u003eMaybe(Integer,ByteString)",
          "package": "vector-bytestring",
          "partial": "Integer",
          "signature": "ByteString-\u003eMaybe(Integer,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:readInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e\u003cp\u003eThis implemenation uses \u003ccode\u003ememset(3)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "replicate",
          "package": "vector-bytestring",
          "signature": "Int -\u003e Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element The following holds replicate unfoldr Just This implemenation uses memset",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e efficiently returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "reverse",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#reverse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:reverse\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:reverse\"]"
        },
        "index": {
          "description": "reverse xs efficiently returns the elements of xs in reverse order",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "reverse",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanl",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanl1",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanr",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanr",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanr1",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "scanr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "singleton",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "singleton",
          "normalized": "Char-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a Char to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Similar to\n \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, this function performs a memcpy.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "snoc",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append Char to the end of ByteString Similar to cons this function performs memcpy",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "snoc",
          "normalized": "ByteString-\u003eChar-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Sort a ByteString efficiently, using counting sort.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "sort",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#sort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:sort\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:sort\"]"
        },
        "index": {
          "description": "Sort ByteString efficiently using counting sort",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "sort",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "span",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n We have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) v\n    ==\n let (x,y) = span (not.isSpace) (reverse v) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "spanEnd",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the ByteString We have spanEnd not.isSpace and spanEnd not isSpace let span not.isSpace reverse in reverse reverse",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "spanEnd",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "split",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "split",
          "normalized": "Char-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "splitAt",
          "package": "vector-bytestring",
          "signature": "Int -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#splitAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:splitAt\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:splitAt\"]"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "splitAt",
          "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "At",
          "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "splitWith",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a ByteString, which must be non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "tail",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#tail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:tail\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:tail\"]"
        },
        "index": {
          "description": "Extract the elements after the head of ByteString which must be non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "tail",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "tails",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#tails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:tails\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:tails\"]"
        },
        "index": {
          "description": "Return all final segments of the given ByteString longest first",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "tails",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a ByteString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "take",
          "package": "vector-bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#take",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:take\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:take\"]"
        },
        "index": {
          "description": "take applied to ByteString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "take",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "takeWhile",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "transpose",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#transpose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:transpose\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:transpose\"]"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its ByteString argument",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "transpose",
          "normalized": "[ByteString]-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "uncons",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Char, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eMaybe(Char,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a\n ByteString from a seed value.  The function takes the element and\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the ByteString or returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next character in the string,\n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\x -\u003e if x \u003c= '9' then Just (x, succ x) else Nothing) '0' == \"0123456789\"\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unfoldr",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is the next character in the string and is the seed value for further production Examples unfoldr if then Just succ else Nothing",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e unfoldrN n f s == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unfoldrN",
          "package": "vector-bytestring",
          "signature": "Int -\u003e (a -\u003e Maybe (Char, a)) -\u003e a -\u003e (ByteString, Maybe a)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr unfoldrN take unfoldr",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "package": "vector-bytestring",
          "signature": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unlines",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unlines",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unpack",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [Char]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to String",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Char]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unwords",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unwords",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of Chars into a pair of\n ByteStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unzip",
          "package": "vector-bytestring",
          "signature": "[(Char, Char)] -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of Chars into pair of ByteStrings Note that this performs two pack operations",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "unzip",
          "normalized": "[(Char,Char)]-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "[(Char,Char)]-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a\n null-terminated \u003ccode\u003eCString\u003c/code\u003e.  The \u003ccode\u003eCString\u003c/code\u003e will be freed\n automatically. This is a memcpy(3).\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "useAsCString",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Vector-Storable-ByteString.html#useAsCString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:useAsCString\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:useAsCString\"]"
        },
        "index": {
          "description": "construction Use ByteString with function requiring null-terminated CString The CString will be freed automatically This is memcpy",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "useAsCString",
          "normalized": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "vector-bytestring",
          "partial": "As CString",
          "signature": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:useAsCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a \u003ccode\u003eCStringLen\u003c/code\u003e.\n As for \u003ccode\u003euseAsCString\u003c/code\u003e this function makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Char8\",\"Data.Vector.Storable.ByteString\"]",
          "name": "useAsCStringLen",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Vector-Storable-ByteString.html#useAsCStringLen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:useAsCStringLen\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:useAsCStringLen\"]"
        },
        "index": {
          "description": "construction Use ByteString with function requiring CStringLen As for useAsCString this function makes copy of the original ByteString",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "useAsCStringLen",
          "normalized": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "vector-bytestring",
          "partial": "As CString Len",
          "signature": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:useAsCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "words",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "words",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "writeFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of Chars. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations, and so space\n usage may be large for multi-megabyte ByteStrings\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "zip",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Char, Char)]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of Chars If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations and so space usage may be large for multi-megabyte ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list\n of corresponding sums.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "zipWith",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-Vector-Storable-ByteString-Char8.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data Vector Storable ByteString Char8",
          "module": "Data.Vector.Storable.ByteString.Char8",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Char8.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing semi-public \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e internals. This exposes the\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representation and low level construction functions. As such\n all the functions in this module are unsafe. The API is also not stable.\n\u003c/p\u003e\u003cp\u003eWhere possible application should instead use the functions from the normal\n public interface modules, such as \u003ca\u003eData.Vector.Storable.ByteString.Unsafe\u003c/a\u003e.\n Packages that extend the ByteString system at a low level will need to use\n this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "Internal",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing semi-public ByteString internals This exposes the ByteString representation and low level construction functions As such all the functions in this module are unsafe The API is also not stable Where possible application should instead use the functions from the normal public interface modules such as Data.Vector.Storable.ByteString.Unsafe Packages that extend the ByteString system at low level will need to use this module",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "Internal",
          "package": "vector-bytestring",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#ByteString",
          "type": "type"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe conversion between \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e. This is a no-op and\n silently truncates to 8 bits Chars \u003e '\\255'. It is provided as\n convenience for ByteString construction.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c2w",
          "package": "vector-bytestring",
          "signature": "Char -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c2w",
          "type": "function"
        },
        "index": {
          "description": "Unsafe conversion between Char and Word8 This is no-op and silently truncates to bits Chars It is provided as convenience for ByteString construction",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c2w",
          "normalized": "Char-\u003eWord",
          "package": "vector-bytestring",
          "signature": "Char-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c2w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_count",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e CULong -\u003e Word8 -\u003e IO CULong",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_count",
          "normalized": "Ptr Word-\u003eCULong-\u003eWord-\u003eIO CULong",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003eCULong-\u003eWord-\u003eIO CULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_free_finalizer",
          "package": "vector-bytestring",
          "signature": "FunPtr (Ptr Word8 -\u003e IO ())",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_free_finalizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_free_finalizer",
          "normalized": "FunPtr(Ptr Word-\u003eIO())",
          "package": "vector-bytestring",
          "signature": "FunPtr(Ptr Word-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_free_finalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_intersperse",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CULong -\u003e Word8 -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_intersperse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_intersperse",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCULong-\u003eWord-\u003eIO()",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCULong-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_maximum",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e CULong -\u003e IO Word8",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_maximum",
          "normalized": "Ptr Word-\u003eCULong-\u003eIO Word",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003eCULong-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_minimum",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e CULong -\u003e IO Word8",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_minimum",
          "normalized": "Ptr Word-\u003eCULong-\u003eIO Word",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003eCULong-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_reverse",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CULong -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_reverse",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCULong-\u003eIO()",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCULong-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_strlen",
          "package": "vector-bytestring",
          "signature": "CString -\u003e IO CSize",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#c_strlen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "c_strlen",
          "normalized": "CString-\u003eIO CSize",
          "package": "vector-bytestring",
          "signature": "CString-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:c_strlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate ByteString of size \u003ccode\u003el\u003c/code\u003e and use action \u003ccode\u003ef\u003c/code\u003e to fill it's contents.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "create",
          "package": "vector-bytestring",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#create",
          "type": "function"
        },
        "index": {
          "description": "Create ByteString of size and use action to fill it contents",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "create",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO ByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the maximum size needed and a function to make the contents\n of a ByteString, createAndTrim makes the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The generating\n function is required to return the actual final size (\u003c= the maximum\n size), and the resulting byte array is realloced to this size.\n\u003c/p\u003e\u003cp\u003ecreateAndTrim is the main mechanism for creating custom, efficient\n ByteString functions, using Haskell or C functions to fill the space.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "createAndTrim",
          "package": "vector-bytestring",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO Int) -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#createAndTrim",
          "type": "function"
        },
        "index": {
          "description": "Given the maximum size needed and function to make the contents of ByteString createAndTrim makes the ByteString The generating function is required to return the actual final size the maximum size and the resulting byte array is realloced to this size createAndTrim is the main mechanism for creating custom efficient ByteString functions using Haskell or functions to fill the space",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "createAndTrim",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO Int)-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "And Trim",
          "signature": "Int-\u003e(Ptr Word-\u003eIO Int)-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:createAndTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "createAndTrim'",
          "package": "vector-bytestring",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO (Int, Int, a)) -\u003e IO (ByteString, a)",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#createAndTrim%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "createAndTrim'",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO(Int,Int,a))-\u003eIO(ByteString,a)",
          "package": "vector-bytestring",
          "partial": "And Trim'",
          "signature": "Int-\u003e(Ptr Word-\u003eIO(Int,Int,a))-\u003eIO(ByteString,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:createAndTrim-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Build a ByteString from a ForeignPtr.\n\u003c/p\u003e\u003cp\u003eIf you do not need the offset parameter then you do should be using\n \u003ccode\u003e\u003ca\u003eunsafePackCStringLen\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eunsafePackCStringFinalizer\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "fromForeignPtr",
          "package": "vector-bytestring",
          "signature": "ForeignPtr Word8-\u003e Int-\u003e Int-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from ForeignPtr If you do not need the offset parameter then you do should be using unsafePackCStringLen or unsafePackCStringFinalizer instead",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "fromForeignPtr",
          "normalized": "ForeignPtr Word-\u003eInt-\u003eInt-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr Word-\u003eInt-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:fromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like unsafePerformIO, but we inline it. Big performance gains as\n it exposes lots of things to further inlining. \u003cem\u003eVery unsafe\u003c/em\u003e. In\n particular, you should do no memory allocation inside an\n \u003ccode\u003e\u003ca\u003einlinePerformIO\u003c/a\u003e\u003c/code\u003e block. On Hugs this is just \u003ccode\u003eunsafePerformIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "inlinePerformIO",
          "package": "vector-bytestring",
          "signature": "IO a -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#inlinePerformIO",
          "type": "function"
        },
        "index": {
          "description": "Just like unsafePerformIO but we inline it Big performance gains as it exposes lots of things to further inlining Very unsafe In particular you should do no memory allocation inside an inlinePerformIO block On Hugs this is just unsafePerformIO",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "inlinePerformIO",
          "normalized": "IO a-\u003ea",
          "package": "vector-bytestring",
          "partial": "Perform IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:inlinePerformIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects white-space characters in the Latin-1 range\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "isSpaceChar8",
          "package": "vector-bytestring",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#isSpaceChar8",
          "type": "function"
        },
        "index": {
          "description": "Selects white-space characters in the Latin-1 range",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "isSpaceChar8",
          "normalized": "Char-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Space Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:isSpaceChar8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects words corresponding to white-space characters in the Latin-1 range\n ordered by frequency.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "isSpaceWord8",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#isSpaceWord8",
          "type": "function"
        },
        "index": {
          "description": "Selects words corresponding to white-space characters in the Latin-1 range ordered by frequency",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "isSpaceWord8",
          "normalized": "Word-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Space Word",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:isSpaceWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper of \u003ccode\u003emallocForeignPtrBytes\u003c/code\u003e with faster implementation for GHC.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "mallocByteString",
          "package": "vector-bytestring",
          "signature": "Int -\u003e IO (ForeignPtr a)",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#mallocByteString",
          "type": "function"
        },
        "index": {
          "description": "Wrapper of mallocForeignPtrBytes with faster implementation for GHC",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "mallocByteString",
          "normalized": "Int-\u003eIO(ForeignPtr a)",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "signature": "Int-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:mallocByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memchr",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Word8 -\u003e CSize -\u003e IO (Ptr Word8)",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#memchr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memchr",
          "normalized": "Ptr Word-\u003eWord-\u003eCSize-\u003eIO(Ptr Word)",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003eWord-\u003eCSize-\u003eIO(Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:memchr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memcmp",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CSize -\u003e IO CInt",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#memcmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memcmp",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO CInt",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:memcmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memcpy",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CSize -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#memcpy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memcpy",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO()",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCSize-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:memcpy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memset",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Word8 -\u003e CSize -\u003e IO (Ptr Word8)",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#memset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "memset",
          "normalized": "Ptr Word-\u003eWord-\u003eCSize-\u003eIO(Ptr Word)",
          "package": "vector-bytestring",
          "signature": "Ptr Word-\u003eWord-\u003eCSize-\u003eIO(Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:memset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 0 pointer. Used to indicate the empty Bytestring.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "nullForeignPtr",
          "package": "vector-bytestring",
          "signature": "ForeignPtr Word8",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#nullForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "The pointer Used to indicate the empty Bytestring",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "nullForeignPtr",
          "package": "vector-bytestring",
          "partial": "Foreign Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:nullForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Deconstruct a ForeignPtr from a ByteString\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "toForeignPtr",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e (ForeignPtr Word8, Int, Int)",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct ForeignPtr from ByteString",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "toForeignPtr",
          "normalized": "ByteString-\u003e(ForeignPtr Word,Int,Int)",
          "package": "vector-bytestring",
          "partial": "Foreign Ptr",
          "signature": "ByteString-\u003e(ForeignPtr Word,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:toForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way of creating ByteStrings outside the IO monad. The \u003ccode\u003eInt\u003c/code\u003e\n argument gives the final size of the ByteString. Unlike\n \u003ccode\u003e\u003ca\u003ecreateAndTrim\u003c/a\u003e\u003c/code\u003e the ByteString is not reallocated if the final size\n is less than the estimated size.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "unsafeCreate",
          "package": "vector-bytestring",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#unsafeCreate",
          "type": "function"
        },
        "index": {
          "description": "way of creating ByteStrings outside the IO monad The Int argument gives the final size of the ByteString Unlike createAndTrim the ByteString is not reallocated if the final size is less than the estimated size",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "unsafeCreate",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Create",
          "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:unsafeCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion between \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e. Should compile to a no-op.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "w2c",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#w2c",
          "type": "function"
        },
        "index": {
          "description": "Conversion between Word8 and Char Should compile to no-op",
          "hierarchy": "Data Vector Storable ByteString Internal",
          "module": "Data.Vector.Storable.ByteString.Internal",
          "name": "w2c",
          "normalized": "Word-\u003eChar",
          "package": "vector-bytestring",
          "signature": "Word-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Internal.html#v:w2c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManipulate \u003cem\u003elazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e operations. All Chars will\n be truncated to 8 bits. It can be expected that these functions will\n run at identical speeds to their \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e equivalents in\n \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Vector.Storable.ByteString.Lazy.Char8 as C\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "Char8",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html",
          "type": "module"
        },
        "index": {
          "description": "Manipulate lazy ByteString using Char operations All Chars will be truncated to bits It can be expected that these functions will run at identical speeds to their Word8 equivalents in Data.ByteString.Lazy This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.Vector.Storable.ByteString.Lazy.Char8 as",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "Char8",
          "package": "vector-bytestring",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "all",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "any",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Append two ByteStrings\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "append",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:append\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:append\"]"
        },
        "index": {
          "description": "Append two ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "append",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "appendFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "break",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of ByteStrings.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "concat",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#concat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:concat\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:concat\"]"
        },
        "index": {
          "description": "Concatenate list of ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "concat",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "concatMap",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "concatMap",
          "normalized": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Map",
          "signature": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to '(:)' for lists.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "cons",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "cons",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unlike \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, 'cons\\'' is\n strict in the ByteString that we are consing onto. More precisely, it forces\n the head and the first chunk. It does this because, for space efficiency, it\n may coalesce the new byte onto the first 'chunk' rather than starting a\n new 'chunk'.\n\u003c/p\u003e\u003cp\u003eSo that means you can't use a lazy recursive contruction like this:\n\u003c/p\u003e\u003cpre\u003e let xs = cons\\' c xs in xs\n\u003c/pre\u003e\u003cp\u003eYou can however use \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, as well as \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e, to build\n infinite lazy ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "cons'",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#cons%27",
          "type": "function"
        },
        "index": {
          "description": "Unlike cons cons is strict in the ByteString that we are consing onto More precisely it forces the head and the first chunk It does this because for space efficiency it may coalesce the new byte onto the first chunk rather than starting new chunk So that means you can use lazy recursive contruction like this let xs cons xs in xs You can however use cons as well as repeat and cycle to build infinite lazy ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "cons'",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:cons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a copy of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with its own storage.\n   This is mainly useful to allow the rest of the data pointed\n   to by the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to be garbage collected, for example\n   if a large string has been read in, and only a small part of it\n   is needed in the rest of the program.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "copy",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#copy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:copy\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:copy\"]"
        },
        "index": {
          "description": "Make copy of the ByteString with its own storage This is mainly useful to allow the rest of the data pointed to by the ByteString to be garbage collected for example if large string has been read in and only small part of it is needed in the rest of the program",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "copy",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count      == length . elemIndices\n count '\\n' == length . lines\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "count",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices count length lines But more efficiently than using length on the intermediate list",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "count",
          "normalized": "Char-\u003eByteString-\u003eInt",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite ByteString into a circular one, or equivalently,\n the infinite repetition of the original ByteString.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "cycle",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#cycle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:cycle\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:cycle\"]"
        },
        "index": {
          "description": "cycle ties finite ByteString into circular one or equivalently the infinite repetition of the original ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "cycle",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "drop",
          "package": "vector-bytestring",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#drop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:drop\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:drop\"]"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "drop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "dropWhile",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate. This\n implementation uses \u003ccode\u003ememchr(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "elem",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate This implementation uses memchr",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "elem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal (by memchr) to the\n query element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "elemIndex",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal by memchr to the query element or Nothing if there is no such element",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "elemIndex",
          "normalized": "Char-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "Char-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "elemIndices",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "elemIndices",
          "normalized": "Char-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "Char-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "empty",
          "package": "vector-bytestring",
          "signature": "ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:empty\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:empty\"]"
        },
        "index": {
          "description": "The empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "empty",
          "package": "vector-bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "filter",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "find",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "findIndex",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "findIndices",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like foldl, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl'",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl1",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl1'",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a packed string,\n reduces the packed string using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldr",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and packed string reduces the packed string using the binary operator from right to left",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldr1",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e Convert a list of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "fromChunks",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#fromChunks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:fromChunks\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:fromChunks\"]"
        },
        "index": {
          "description": "Convert list of strict ByteString into lazy ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "fromChunks",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Chunks",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:fromChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Equivalent to hGetContents stdin. Will read \u003cem\u003elazily\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "getContents",
          "package": "vector-bytestring",
          "signature": "IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#getContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:getContents\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:getContents\"]"
        },
        "index": {
          "description": "getContents Equivalent to hGetContents stdin Will read lazily",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "getContents",
          "package": "vector-bytestring",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a ByteString and returns a list of\n ByteStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "group",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#group",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:group\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:group\"]"
        },
        "index": {
          "description": "The group function takes ByteString and returns list of ByteStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "group",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "groupBy",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bytes into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "hGet",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#hGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hGet\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:hGet\"]"
        },
        "index": {
          "description": "Read bytes into ByteString directly from the specified Handle",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Chunks\n are read on demand, using the default chunk size.\n\u003c/p\u003e\u003cp\u003eOnce EOF is encountered, the Handle is closed.\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e should be placed in binary mode with\n \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e to\n work correctly.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "hGetContents",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#hGetContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hGetContents\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:hGetContents\"]"
        },
        "index": {
          "description": "Read entire handle contents lazily into ByteString Chunks are read on demand using the default chunk size Once EOF is encountered the Handle is closed Note the Handle should be placed in binary mode with hSetBinaryMode for hGetContents to work correctly",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is similar to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.  If there is no data available to be read, \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e\n returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "hGetNonBlocking",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#hGetNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hGetNonBlocking\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:hGetNonBlocking\"]"
        },
        "index": {
          "description": "hGetNonBlocking is similar to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available If there is no data available to be read hGetNonBlocking returns empty Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hGet",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "hPut",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#hPut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPut\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:hPut\"]"
        },
        "index": {
          "description": "Outputs ByteString to the specified Handle",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hPut",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e except that it will never block. Instead it returns\n any tail that did not get written. This tail may be \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e in the case that\n the whole string was written, or the whole original string if nothing was\n written. Partial writes are also possible.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "hPutNonBlocking",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#hPutNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPutNonBlocking\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:hPutNonBlocking\"]"
        },
        "index": {
          "description": "Similar to hPut except that it will never block Instead it returns any tail that did not get written This tail may be empty in the case that the whole string was written or the whole original string if nothing was written Partial writes are also possible Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hPut",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hPutNonBlocking",
          "normalized": "Handle-\u003eByteString-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Put Non Blocking",
          "signature": "Handle-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPutNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "hPutStr",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#hPutStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPutStr\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:hPutStr\"]"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hPutStr",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put Str",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to a handle, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hPutStrLn",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to handle appending newline byte",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "head",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "head",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "index",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int64 -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Return all the elements of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e except the last one.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "init",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#init",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:init\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:init\"]"
        },
        "index": {
          "description": "Return all the elements of ByteString except the last one",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "init",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "inits",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#inits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:inits\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:inits\"]"
        },
        "index": {
          "description": "Return all initial segments of the given ByteString shortest first",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "inits",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eByteString -\u003e ByteString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "interact",
          "package": "vector-bytestring",
          "signature": "(ByteString -\u003e ByteString) -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#interact",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:interact\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:interact\"]"
        },
        "index": {
          "description": "The interact function takes function of type ByteString ByteString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "interact",
          "normalized": "(ByteString-\u003eByteString)-\u003eIO()",
          "package": "vector-bytestring",
          "signature": "(ByteString-\u003eByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "intercalate",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#intercalate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:intercalate\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:intercalate\"]"
        },
        "index": {
          "description": "The intercalate function takes ByteString and list of ByteString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "intercalate",
          "normalized": "ByteString-\u003e[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a Char and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n and `intersperses' that Char between the elements of the\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on Lists.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "intersperse",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and ByteString and intersperses that Char between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "intersperse",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "isPrefixOf",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#isPrefixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:isPrefixOf\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:isPrefixOf\"]"
        },
        "index": {
          "description": "The isPrefixOf function takes two ByteStrings and returns True iff the first is prefix of the second",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "isPrefixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Prefix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e returns an infinite ByteString of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "iterate",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char) -\u003e Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite ByteString of repeated applications of to iterate",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "iterate",
          "normalized": "(Char-\u003eChar)-\u003eChar-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar)-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a packed string, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "last",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of packed string which must be non-empty",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "last",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a ByteString as an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "length",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:length\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:length\"]"
        },
        "index": {
          "description": "length returns the length of ByteString as an Int64",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "length",
          "normalized": "ByteString-\u003eInt",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of ByteStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e\u003cp\u003eAs of bytestring 0.9.0.3, this function is stricter than its\n list cousin.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "lines",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks ByteString up into list of ByteStrings at newline Chars The resulting strings do not contain newlines As of bytestring this function is stricter than its list cousin",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003exs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "map",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "mapAccumL",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "mapAccumR",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "maximum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "maximum",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "minimum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "minimum",
          "normalized": "ByteString-\u003eChar",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "notElem",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "notElem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Elem",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a ByteString is empty.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "null",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:null\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:null\"]"
        },
        "index": {
          "description": "Test whether ByteString is empty",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "null",
          "normalized": "ByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "pack",
          "package": "vector-bytestring",
          "signature": "[Char] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "pack",
          "normalized": "[Char]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[Char]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "putStr",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#putStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:putStr\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:putStr\"]"
        },
        "index": {
          "description": "Write ByteString to stdout",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "putStr",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Str",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "putStrLn",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to stdout appending newline byte",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Use 'text mode'\n on Windows to interpret newlines\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "readFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file lazily into ByteString Use text mode on Windows to interpret newlines",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInt reads an Int from the beginning of the ByteString.  If\n there is no integer at the beginning of the string, it returns\n Nothing, otherwise it just returns the int read, and the rest of the\n string.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "readInt",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Int, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#readInt",
          "type": "function"
        },
        "index": {
          "description": "readInt reads an Int from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "readInt",
          "normalized": "ByteString-\u003eMaybe(Int,ByteString)",
          "package": "vector-bytestring",
          "partial": "Int",
          "signature": "ByteString-\u003eMaybe(Int,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:readInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInteger reads an Integer from the beginning of the ByteString.  If\n there is no integer at the beginning of the string, it returns Nothing,\n otherwise it just returns the int read, and the rest of the string.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "readInteger",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Integer, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#readInteger",
          "type": "function"
        },
        "index": {
          "description": "readInteger reads an Integer from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "readInteger",
          "normalized": "ByteString-\u003eMaybe(Integer,ByteString)",
          "package": "vector-bytestring",
          "partial": "Integer",
          "signature": "ByteString-\u003eMaybe(Integer,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:readInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is an infinite ByteString, with \u003ccode\u003ex\u003c/code\u003e the value of every\n element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "repeat",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite ByteString with the value of every element",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "repeat",
          "normalized": "Char-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "replicate",
          "package": "vector-bytestring",
          "signature": "Int64 -\u003e Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "reverse",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#reverse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:reverse\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:reverse\"]"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "reverse",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "scanl",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "singleton",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "singleton",
          "normalized": "Char-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a Char to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Similar to\n \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, this function performs a memcpy.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "snoc",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Char -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append Char to the end of ByteString Similar to cons this function performs memcpy",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "snoc",
          "normalized": "ByteString-\u003eChar-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "span",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "split",
          "package": "vector-bytestring",
          "signature": "Char -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "split",
          "normalized": "Char-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "Char-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "splitAt",
          "package": "vector-bytestring",
          "signature": "Int64 -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#splitAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:splitAt\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:splitAt\"]"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "splitAt",
          "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "At",
          "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "splitWith",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a ByteString, which must be\n non-empty.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "tail",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#tail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:tail\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:tail\"]"
        },
        "index": {
          "description": "Extract the elements after the head of ByteString which must be non-empty",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "tail",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "tails",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#tails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:tails\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:tails\"]"
        },
        "index": {
          "description": "Return all final segments of the given ByteString longest first",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "tails",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a ByteString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "take",
          "package": "vector-bytestring",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#take",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:take\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:take\"]"
        },
        "index": {
          "description": "take applied to ByteString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "take",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "takeWhile",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a list of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "toChunks",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#toChunks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:toChunks\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:toChunks\"]"
        },
        "index": {
          "description": "Convert lazy ByteString into list of strict ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "toChunks",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "Chunks",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:toChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Storable.ByteString.Lazy.Char8\",\"Data.Vector.Storable.ByteString.Lazy\"]",
          "name": "transpose",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#transpose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:transpose\",\"http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:transpose\"]"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its ByteString argument",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "transpose",
          "normalized": "[ByteString]-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "uncons",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Char, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eMaybe(Char,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is analogous to the List 'unfoldr'.\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed value.  The function takes\n the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the\n ByteString or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is a\n prepending to the ByteString and \u003ccode\u003eb\u003c/code\u003e is used as the next element in a\n recursive call.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unfoldr",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is prepending to the ByteString and is used as the next element in recursive call",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unlines",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unlines",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unpack",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [Char]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to String",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Char]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unwords",
          "package": "vector-bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "unwords",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space. And\n\u003c/p\u003e\u003cpre\u003e tokens isSpace = words\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "words",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space And tokens isSpace words",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "words",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "writeFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of Chars. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations, and so space\n usage may be large for multi-megabyte ByteStrings\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "zip",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Char, Char)]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of Chars If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations and so space usage may be large for multi-megabyte ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list\n of corresponding sums.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "zipWith",
          "package": "vector-bytestring",
          "signature": "(Char -\u003e Char -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Char8.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data Vector Storable ByteString Lazy Char8",
          "module": "Data.Vector.Storable.ByteString.Lazy.Char8",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Char8.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing semi-public \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e internals. This exposes\n the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representation and low level construction functions.\n Modules which extend the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e system will need to use this module\n while ideally most users will be able to make do with the public interface\n modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "Internal",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing semi-public ByteString internals This exposes the ByteString representation and low level construction functions Modules which extend the ByteString system will need to use this module while ideally most users will be able to make do with the public interface modules",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "Internal",
          "package": "vector-bytestring",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "Chunk",
          "package": "vector-bytestring",
          "signature": "Chunk !ByteString ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "Chunk",
          "package": "vector-bytestring",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "Empty",
          "package": "vector-bytestring",
          "signature": "Empty",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "Empty",
          "package": "vector-bytestring",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn a form that checks the invariant lazily.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "checkInvariant",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#checkInvariant",
          "type": "function"
        },
        "index": {
          "description": "In form that checks the invariant lazily",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "checkInvariant",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Invariant",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:checkInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e. Guarantees the data type invariant.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "chunk",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for Chunk Guarantees the data type invariant",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "chunk",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe memory management overhead. Currently this is tuned for GHC only.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "chunkOverhead",
          "package": "vector-bytestring",
          "signature": "Int",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#chunkOverhead",
          "type": "function"
        },
        "index": {
          "description": "The memory management overhead Currently this is tuned for GHC only",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "chunkOverhead",
          "package": "vector-bytestring",
          "partial": "Overhead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:chunkOverhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently set to 32k, less the memory management overhead\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "defaultChunkSize",
          "package": "vector-bytestring",
          "signature": "Int",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#defaultChunkSize",
          "type": "function"
        },
        "index": {
          "description": "Currently set to less the memory management overhead",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "defaultChunkSize",
          "package": "vector-bytestring",
          "partial": "Chunk Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:defaultChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the chunks of a lazy ByteString with a strict, tail-recursive,\n accumulating left fold.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "foldlChunks",
          "package": "vector-bytestring",
          "signature": "(a -\u003e ByteString -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#foldlChunks",
          "type": "function"
        },
        "index": {
          "description": "Consume the chunks of lazy ByteString with strict tail-recursive accumulating left fold",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "foldlChunks",
          "normalized": "(a-\u003eByteString-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "partial": "Chunks",
          "signature": "(a-\u003eByteString-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:foldlChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the chunks of a lazy ByteString with a natural right fold.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "foldrChunks",
          "package": "vector-bytestring",
          "signature": "(ByteString -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#foldrChunks",
          "type": "function"
        },
        "index": {
          "description": "Consume the chunks of lazy ByteString with natural right fold",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "foldrChunks",
          "normalized": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "partial": "Chunks",
          "signature": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:foldrChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type invariant:\n Every ByteString is either \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e or consists of non-null \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n All functions must preserve this, and the QC properties must check this.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "invariant",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#invariant",
          "type": "function"
        },
        "index": {
          "description": "The data type invariant Every ByteString is either Empty or consists of non-null ByteString All functions must preserve this and the QC properties must check this",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "invariant",
          "normalized": "ByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently set to 4k, less the memory management overhead\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "smallChunkSize",
          "package": "vector-bytestring",
          "signature": "Int",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#smallChunkSize",
          "type": "function"
        },
        "index": {
          "description": "Currently set to less the memory management overhead",
          "hierarchy": "Data Vector Storable ByteString Lazy Internal",
          "module": "Data.Vector.Storable.ByteString.Lazy.Internal",
          "name": "smallChunkSize",
          "package": "vector-bytestring",
          "partial": "Chunk Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Internal.html#v:smallChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert our lazy \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e to and from \u003cem\u003elegacy\u003c/em\u003e lazy\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e (from the \u003ccode\u003ebytestring\u003c/code\u003e package).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Legacy",
          "name": "Legacy",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Legacy.html",
          "type": "module"
        },
        "index": {
          "description": "Convert our lazy ByteString to and from legacy lazy ByteString from the bytestring package",
          "hierarchy": "Data Vector Storable ByteString Lazy Legacy",
          "module": "Data.Vector.Storable.ByteString.Lazy.Legacy",
          "name": "Legacy",
          "package": "vector-bytestring",
          "partial": "Legacy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Legacy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert a \u003cem\u003elegacy\u003c/em\u003e lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (from the \u003ccode\u003ebytestring\u003c/code\u003e package)\n to our lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Legacy",
          "name": "fromLegacyByteString",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Legacy.html#fromLegacyByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert legacy lazy ByteString from the bytestring package to our lazy ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy Legacy",
          "module": "Data.Vector.Storable.ByteString.Lazy.Legacy",
          "name": "fromLegacyByteString",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Legacy Byte String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Legacy.html#v:fromLegacyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert our lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003cem\u003elegacy\u003c/em\u003e lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n (from the \u003ccode\u003ebytestring\u003c/code\u003e package).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy.Legacy",
          "name": "toLegacyByteString",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Legacy.html#toLegacyByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert our lazy ByteString to legacy lazy ByteString from the bytestring package",
          "hierarchy": "Data Vector Storable ByteString Lazy Legacy",
          "module": "Data.Vector.Storable.ByteString.Lazy.Legacy",
          "name": "toLegacyByteString",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Legacy Byte String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy-Legacy.html#v:toLegacyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of lazy byte vectors\n using lists of packed \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e arrays, suitable for high performance\n use, both in terms of large data quantities, or high speed\n requirements. Byte vectors are encoded as lazy lists of strict \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n arrays of bytes. They provide a means to manipulate large byte vectors\n without requiring the entire vector be resident in memory.\n\u003c/p\u003e\u003cp\u003eSome operations, such as concat, append, reverse and cons, have\n better complexity than their \u003ca\u003eData.ByteString\u003c/a\u003e equivalents, due to\n optimisations resulting from the list spine structure. And for other\n operations lazy ByteStrings are usually within a few percent of\n strict ones, but with better heap usage. For data larger than the\n available memory, or if you have tight memory constraints, this\n module will be the only option. The default chunk size is 64k, which\n should be good in most circumstances. For people with large L2\n caches, you may want to increase this to fit your cache.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Vector.Storable.ByteString.Lazy as B\n\u003c/pre\u003e\u003cp\u003eOriginal GHC implementation by Bryan O'Sullivan.\n Rewritten to use \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e by Simon Marlow.\n Rewritten to support slices and use \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e\n by David Roundy.\n Polished and extended by Don Stewart.\n Lazy variant by Duncan Coutts and Don Stewart.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "Lazy",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "time and space-efficient implementation of lazy byte vectors using lists of packed Word8 arrays suitable for high performance use both in terms of large data quantities or high speed requirements Byte vectors are encoded as lazy lists of strict Word8 arrays of bytes They provide means to manipulate large byte vectors without requiring the entire vector be resident in memory Some operations such as concat append reverse and cons have better complexity than their Data.ByteString equivalents due to optimisations resulting from the list spine structure And for other operations lazy ByteStrings are usually within few percent of strict ones but with better heap usage For data larger than the available memory or if you have tight memory constraints this module will be the only option The default chunk size is which should be good in most circumstances For people with large L2 caches you may want to increase this to fit your cache This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.Vector.Storable.ByteString.Lazy as Original GHC implementation by Bryan Sullivan Rewritten to use UArray by Simon Marlow Rewritten to support slices and use ForeignPtr by David Roundy Polished and extended by Don Stewart Lazy variant by Duncan Coutts and Don Stewart",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "Lazy",
          "package": "vector-bytestring",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Lazy-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines\n if all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "all",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "all",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "any",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "any",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "appendFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "break",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "break",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "concatMap",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "concatMap",
          "normalized": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Map",
          "signature": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to '(:)' for lists.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "cons",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "cons",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unlike \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, 'cons\\'' is\n strict in the ByteString that we are consing onto. More precisely, it forces\n the head and the first chunk. It does this because, for space efficiency, it\n may coalesce the new byte onto the first 'chunk' rather than starting a\n new 'chunk'.\n\u003c/p\u003e\u003cp\u003eSo that means you can't use a lazy recursive contruction like this:\n\u003c/p\u003e\u003cpre\u003e let xs = cons\\' c xs in xs\n\u003c/pre\u003e\u003cp\u003eYou can however use \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, as well as \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e, to build\n infinite lazy ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "cons'",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#cons%27",
          "type": "function"
        },
        "index": {
          "description": "Unlike cons cons is strict in the ByteString that we are consing onto More precisely it forces the head and the first chunk It does this because for space efficiency it may coalesce the new byte onto the first chunk rather than starting new chunk So that means you can use lazy recursive contruction like this let xs cons xs in xs You can however use cons as well as repeat and cycle to build infinite lazy ByteStrings",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "cons'",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:cons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "count",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices But more efficiently than using length on the intermediate list",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "count",
          "normalized": "Word-\u003eByteString-\u003eInt",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "dropWhile",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "elem",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "elem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "elemIndex",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element This implementation uses memchr",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "elemIndex",
          "normalized": "Word-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "Word-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "elemIndices",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order This implementation uses memchr",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "elemIndices",
          "normalized": "Word-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "Word-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "filter",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "filter",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p ! n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "find",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just Nothing",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "find",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "findIndex",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "findIndex",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "findIndices",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "findIndices",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl'",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl'",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl1",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings This function is subject to array fusion",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl1'",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldl1'",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a ByteString,\n reduces the ByteString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldr",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and ByteString reduces the ByteString using the binary operator from right to left",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldr",
          "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldr1",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "foldr1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "groupBy",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "groupBy",
          "normalized": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "By",
          "signature": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "head",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "head",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "index",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int64 -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n `intersperses' that byte between the elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n It is analogous to the intersperse function on Lists.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "intersperse",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Word8 and ByteString and intersperses that byte between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "intersperse",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "isSuffixOf",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two ByteStrings and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "isSuffixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Suffix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e returns an infinite ByteString of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "iterate",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite ByteString of repeated applications of to iterate",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "iterate",
          "normalized": "(Word-\u003eWord)-\u003eWord-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord)-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Extract the last element of a ByteString, which must be finite\n and non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "last",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "last",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "map",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "map",
          "normalized": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "mapAccumL",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "mapAccumL",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "mapAccumR",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "mapAccumR",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "maximum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "maximum",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "minimum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "minimum",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "notElem",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "notElem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Elem",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a '[Word8]' into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "pack",
          "package": "vector-bytestring",
          "signature": "[Word8] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "pack",
          "normalized": "[Word]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[Word]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a ByteString and returns\n the pair of ByteStrings with elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p bs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "partition",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate ByteString and returns the pair of ByteStrings with elements which do and do not satisfy the predicate respectively i.e partition bs filter xs filter not xs",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "partition",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "putStrLn",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to stdout appending newline byte",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The Handle will be held open until EOF is encountered.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "readFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file lazily into ByteString The Handle will be held open until EOF is encountered",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is an infinite ByteString, with \u003ccode\u003ex\u003c/code\u003e the value of every\n element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "repeat",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite ByteString with the value of every element",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "repeat",
          "normalized": "Word-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "replicate",
          "package": "vector-bytestring",
          "signature": "Int64 -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "replicate",
          "normalized": "Int-\u003eWord-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "scanl",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "scanl",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "singleton",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "singleton",
          "normalized": "Word-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Append a byte to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "snoc",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of ByteString",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "snoc",
          "normalized": "ByteString-\u003eWord-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "span",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "span",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "split",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "split",
          "normalized": "Word-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "splitWith",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "splitWith",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "takeWhile",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "uncons",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Word8, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Word,ByteString)",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eMaybe(Word,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is analogous to the List 'unfoldr'.\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed value.  The function takes\n the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the\n ByteString or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is a\n prepending to the ByteString and \u003ccode\u003eb\u003c/code\u003e is used as the next element in a\n recursive call.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "unfoldr",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Maybe (Word8, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is prepending to the ByteString and is used as the next element in recursive call",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a '[Word8]'.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "unpack",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [Word8]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to Word8",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Word]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n ByteStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "unzip",
          "package": "vector-bytestring",
          "signature": "[(Word8, Word8)] -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of ByteStrings Note that this performs two pack operations",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "unzip",
          "normalized": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "writeFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "zip",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Word8, Word8)]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "zipWith",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-Vector-Storable-ByteString-Lazy.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data Vector Storable ByteString Lazy",
          "module": "Data.Vector.Storable.ByteString.Lazy",
          "name": "zipWith",
          "normalized": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Lazy.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert our \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e to and from \u003cem\u003elegacy\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e\n (from the \u003ccode\u003ebytestring\u003c/code\u003e package).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Legacy",
          "name": "Legacy",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Legacy.html",
          "type": "module"
        },
        "index": {
          "description": "Convert our ByteString to and from legacy ByteString from the bytestring package",
          "hierarchy": "Data Vector Storable ByteString Legacy",
          "module": "Data.Vector.Storable.ByteString.Legacy",
          "name": "Legacy",
          "package": "vector-bytestring",
          "partial": "Legacy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Legacy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert a \u003cem\u003elegacy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (from the \u003ccode\u003ebytestring\u003c/code\u003e package)\n to our \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Legacy",
          "name": "fromLegacyByteString",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Legacy.html#fromLegacyByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert legacy ByteString from the bytestring package to our ByteString",
          "hierarchy": "Data Vector Storable ByteString Legacy",
          "module": "Data.Vector.Storable.ByteString.Legacy",
          "name": "fromLegacyByteString",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Legacy Byte String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Legacy.html#v:fromLegacyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Convert our \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003cem\u003elegacy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n (from the \u003ccode\u003ebytestring\u003c/code\u003e package).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Legacy",
          "name": "toLegacyByteString",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Legacy.html#toLegacyByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert our ByteString to legacy ByteString from the bytestring package",
          "hierarchy": "Data Vector Storable ByteString Legacy",
          "module": "Data.Vector.Storable.ByteString.Legacy",
          "name": "toLegacyByteString",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Legacy Byte String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Legacy.html#v:toLegacyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing unsafe \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003cp\u003eWhile these functions have a stable API and you may use these functions in\n applications, do carefully consider the documented pre-conditions;\n incorrect use can break referential transparency or worse.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "Unsafe",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "module containing unsafe ByteString operations While these functions have stable API and you may use these functions in applications do carefully consider the documented pre-conditions incorrect use can break referential transparency or worse",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "Unsafe",
          "package": "vector-bytestring",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003edrop\u003c/code\u003e which omits the checks on \u003ccode\u003en\u003c/code\u003e so there is an\n obligation on the programmer to provide a proof that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003elength\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeDrop",
          "package": "vector-bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeDrop",
          "type": "function"
        },
        "index": {
          "description": "variety of drop which omits the checks on so there is an obligation on the programmer to provide proof that length xs",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeDrop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Drop",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly run the finaliser associated with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n References to this value after finalisation may generate invalid memory\n references.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e, as there may be other\n \u003ccode\u003eByteStrings\u003c/code\u003e referring to the same underlying pages. If you use\n this, you need to have a proof of some kind that all \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n ever generated from the underlying byte array are no longer live.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeFinalize",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeFinalize",
          "type": "function"
        },
        "index": {
          "description": "Explicitly run the finaliser associated with ByteString References to this value after finalisation may generate invalid memory references This function is unsafe as there may be other ByteStrings referring to the same underlying pages If you use this you need to have proof of some kind that all ByteString ever generated from the underlying byte array are no longer live",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeFinalize",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Finalize",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003ehead\u003c/code\u003e for non-empty ByteStrings. \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the ByteString is non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeHead",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeHead",
          "type": "function"
        },
        "index": {
          "description": "variety of head for non-empty ByteStrings unsafeHead omits the check for the empty case so there is an obligation on the programmer to provide proof that the ByteString is non-empty",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeHead",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "partial": "Head",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0, returning a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n This omits the bounds check, which means there is an accompanying\n obligation on the programmer to ensure the bounds are checked in some\n other way.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeIndex",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeIndex",
          "type": "function"
        },
        "index": {
          "description": "Unsafe ByteString index subscript operator starting from returning Word8 This omits the bounds check which means there is an accompanying obligation on the programmer to ensure the bounds are checked in some other way",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeIndex",
          "normalized": "ByteString-\u003eInt-\u003eWord",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "ByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Pack a null-terminated sequence of bytes, pointed to by an\n Addr# (an arbitrary machine address assumed to point outside the\n garbage-collected heap) into a \u003ccode\u003eByteString\u003c/code\u003e. A much faster way to\n create an Addr# is with an unboxed string literal, than to pack a\n boxed string. A unboxed string literal is compiled to a static \u003ccode\u003echar\n []\u003c/code\u003e by GHC. Establishing the length of the string requires a call to\n \u003ccode\u003estrlen(3)\u003c/code\u003e, so the Addr# must point to a null-terminated buffer (as\n is the case with \u003ca\u003estring\u003c/a\u003e# literals in GHC). Use \u003ccode\u003e\u003ca\u003eunsafePackAddressLen\u003c/a\u003e\u003c/code\u003e\n if you know the length of the string statically.\n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cpre\u003e literalFS = unsafePackAddress \"literal\"#\n\u003c/pre\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e. If you modify the buffer pointed to by the\n original Addr# this modification will be reflected in the resulting\n \u003ccode\u003eByteString\u003c/code\u003e, breaking referential transparency.\n\u003c/p\u003e\u003cp\u003eNote this also won't work if your Addr# has embedded '\\0' characters in\n the string (strlen will fail).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackAddress",
          "package": "vector-bytestring",
          "signature": "Addr# -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafePackAddress",
          "type": "function"
        },
        "index": {
          "description": "Pack null-terminated sequence of bytes pointed to by an Addr an arbitrary machine address assumed to point outside the garbage-collected heap into ByteString much faster way to create an Addr is with an unboxed string literal than to pack boxed string unboxed string literal is compiled to static char by GHC Establishing the length of the string requires call to strlen so the Addr must point to null-terminated buffer as is the case with string literals in GHC Use unsafePackAddressLen if you know the length of the string statically An example literalFS unsafePackAddress literal This function is unsafe If you modify the buffer pointed to by the original Addr this modification will be reflected in the resulting ByteString breaking referential transparency Note this also won work if your Addr has embedded characters in the string strlen will fail",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackAddress",
          "normalized": "Addr #-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Pack Address",
          "signature": "Addr #-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafePackAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunsafePackAddressLen\u003c/a\u003e\u003c/code\u003e provides constant-time construction of\n \u003ccode\u003eByteStrings\u003c/code\u003e which is ideal for string literals. It packs a sequence\n of bytes into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, given a raw \u003ccode\u003e\u003ca\u003eAddr#\u003c/a\u003e\u003c/code\u003e to the string, and\n the length of the string.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e in two ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the length argument is assumed to be correct. If the length\n argument is incorrect, it is possible to overstep the end of the\n byte array.\n\u003c/li\u003e\u003cli\u003e if the underying Addr# is later modified, this change will be\n reflected in resulting \u003ccode\u003eByteString\u003c/code\u003e, breaking referential\n transparency.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf in doubt, don't use these functions.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackAddressLen",
          "package": "vector-bytestring",
          "signature": "Int -\u003e Addr# -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafePackAddressLen",
          "type": "function"
        },
        "index": {
          "description": "unsafePackAddressLen provides constant-time construction of ByteStrings which is ideal for string literals It packs sequence of bytes into ByteString given raw Addr to the string and the length of the string This function is unsafe in two ways the length argument is assumed to be correct If the length argument is incorrect it is possible to overstep the end of the byte array if the underying Addr is later modified this change will be reflected in resulting ByteString breaking referential transparency If in doubt don use these functions",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackAddressLen",
          "normalized": "Int-\u003eAddr #-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Pack Address Len",
          "signature": "Int-\u003eAddr #-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafePackAddressLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCString\u003c/code\u003e. This value will have \u003cem\u003eno\u003c/em\u003e\n finalizer associated to it, and will not be garbage collected by\n Haskell. The ByteString length is calculated using \u003cem\u003estrlen(3)\u003c/em\u003e,\n and thus the complexity is a \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e. If the \u003ccode\u003eCString\u003c/code\u003e is later modified, this\n change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e, breaking\n referential transparency.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackCString",
          "package": "vector-bytestring",
          "signature": "CString -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafePackCString",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from CString This value will have no finalizer associated to it and will not be garbage collected by Haskell The ByteString length is calculated using strlen and thus the complexity is This function is unsafe If the CString is later modified this change will be reflected in the resulting ByteString breaking referential transparency",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackCString",
          "normalized": "CString-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Pack CString",
          "signature": "CString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafePackCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e given a Ptr Word8 to a buffer, a\n length, and an IO action representing a finalizer. This function is\n not available on Hugs.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e, it is possible to break referential\n transparency by modifying the underlying buffer pointed to by the\n first argument. Any changes to the original buffer will be reflected\n in the resulting \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackCStringFinalizer",
          "package": "vector-bytestring",
          "signature": "Ptr Word8 -\u003e Int -\u003e IO () -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafePackCStringFinalizer",
          "type": "function"
        },
        "index": {
          "description": "Construct ByteString given Ptr Word8 to buffer length and an IO action representing finalizer This function is not available on Hugs This function is unsafe it is possible to break referential transparency by modifying the underlying buffer pointed to by the first argument Any changes to the original buffer will be reflected in the resulting ByteString",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackCStringFinalizer",
          "normalized": "Ptr Word-\u003eInt-\u003eIO()-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Pack CString Finalizer",
          "signature": "Ptr Word-\u003eInt-\u003eIO()-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafePackCStringFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCStringLen\u003c/code\u003e. This value will\n have \u003cem\u003eno\u003c/em\u003e finalizer associated with it, and will not be garbage\n collected by Haskell. This operation has \u003cem\u003eO(1)\u003c/em\u003e complexity as we\n already know the final size, so no \u003cem\u003estrlen(3)\u003c/em\u003e is required.\n\u003c/p\u003e\u003cp\u003eThis funtion is \u003cem\u003eunsafe\u003c/em\u003e. If the original \u003ccode\u003eCStringLen\u003c/code\u003e is later\n modified, this change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e,\n breaking referential transparency.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackCStringLen",
          "package": "vector-bytestring",
          "signature": "CStringLen -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafePackCStringLen",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from CStringLen This value will have no finalizer associated with it and will not be garbage collected by Haskell This operation has complexity as we already know the final size so no strlen is required This funtion is unsafe If the original CStringLen is later modified this change will be reflected in the resulting ByteString breaking referential transparency",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackCStringLen",
          "normalized": "CStringLen-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Pack CString Len",
          "signature": "CStringLen-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafePackCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a malloced \u003ccode\u003eCString\u003c/code\u003e. This value will\n have a \u003ccode\u003efree(3)\u003c/code\u003e finalizer associated to it.\n\u003c/p\u003e\u003cp\u003eThis funtion is \u003cem\u003eunsafe\u003c/em\u003e. If the original \u003ccode\u003eCString\u003c/code\u003e is later\n modified, this change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e,\n breaking referential transparency.\n\u003c/p\u003e\u003cp\u003eThis function is also unsafe if you call its finalizer twice,\n which will result in a \u003cem\u003edouble free\u003c/em\u003e error, or if you pass it\n a CString not allocated with \u003ccode\u003emalloc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackMallocCString",
          "package": "vector-bytestring",
          "signature": "CString -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafePackMallocCString",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from malloced CString This value will have free finalizer associated to it This funtion is unsafe If the original CString is later modified this change will be reflected in the resulting ByteString breaking referential transparency This function is also unsafe if you call its finalizer twice which will result in double free error or if you pass it CString not allocated with malloc",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafePackMallocCString",
          "normalized": "CString-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Pack Malloc CString",
          "signature": "CString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafePackMallocCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003etail\u003c/code\u003e for non-empty ByteStrings. \u003ccode\u003e\u003ca\u003eunsafeTail\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case. As with \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e, the programmer must\n provide a separate proof that the ByteString is non-empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeTail",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeTail",
          "type": "function"
        },
        "index": {
          "description": "variety of tail for non-empty ByteStrings unsafeTail omits the check for the empty case As with unsafeHead the programmer must provide separate proof that the ByteString is non-empty",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeTail",
          "normalized": "ByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Tail",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003etake\u003c/code\u003e which omits the checks on \u003ccode\u003en\u003c/code\u003e so there is an\n obligation on the programmer to provide a proof that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003elength\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeTake",
          "package": "vector-bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeTake",
          "type": "function"
        },
        "index": {
          "description": "variety of take which omits the checks on so there is an obligation on the programmer to provide proof that length xs",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeTake",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Take",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a\n \u003ccode\u003eCString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does zero copying, and merely unwraps a \u003ccode\u003eByteString\u003c/code\u003e to\n appear as a \u003ccode\u003eCString\u003c/code\u003e. It is \u003cem\u003eunsafe\u003c/em\u003e in two ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e After calling this function the \u003ccode\u003eCString\u003c/code\u003e shares the underlying\n byte buffer with the original \u003ccode\u003eByteString\u003c/code\u003e. Thus modifying the\n \u003ccode\u003eCString\u003c/code\u003e, either in C, or using poke, will cause the contents of the\n \u003ccode\u003eByteString\u003c/code\u003e to change, breaking referential transparency. Other\n \u003ccode\u003eByteStrings\u003c/code\u003e created by sharing (such as those produced via \u003ccode\u003etake\u003c/code\u003e\n or \u003ccode\u003edrop\u003c/code\u003e) will also reflect these changes. Modifying the \u003ccode\u003eCString\u003c/code\u003e\n will break referential transparency. To avoid this, use\n \u003ccode\u003euseAsCString\u003c/code\u003e, which makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eCStrings\u003c/code\u003e are often passed to functions that require them to be\n null-terminated. If the original \u003ccode\u003eByteString\u003c/code\u003e wasn't null terminated,\n neither will the \u003ccode\u003eCString\u003c/code\u003e be. It is the programmers responsibility\n to guarantee that the \u003ccode\u003eByteString\u003c/code\u003e is indeed null terminated. If in\n doubt, use \u003ccode\u003euseAsCString\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeUseAsCString",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeUseAsCString",
          "type": "function"
        },
        "index": {
          "description": "construction Use ByteString with function requiring CString This function does zero copying and merely unwraps ByteString to appear as CString It is unsafe in two ways After calling this function the CString shares the underlying byte buffer with the original ByteString Thus modifying the CString either in or using poke will cause the contents of the ByteString to change breaking referential transparency Other ByteStrings created by sharing such as those produced via take or drop will also reflect these changes Modifying the CString will break referential transparency To avoid this use useAsCString which makes copy of the original ByteString CStrings are often passed to functions that require them to be null-terminated If the original ByteString wasn null terminated neither will the CString be It is the programmers responsibility to guarantee that the ByteString is indeed null terminated If in doubt use useAsCString",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeUseAsCString",
          "normalized": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "vector-bytestring",
          "partial": "Use As CString",
          "signature": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeUseAsCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a\n \u003ccode\u003eCStringLen\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does zero copying, and merely unwraps a \u003ccode\u003eByteString\u003c/code\u003e to\n appear as a \u003ccode\u003eCStringLen\u003c/code\u003e. It is \u003cem\u003eunsafe\u003c/em\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e After calling this function the \u003ccode\u003eCStringLen\u003c/code\u003e shares the underlying\n byte buffer with the original \u003ccode\u003eByteString\u003c/code\u003e. Thus modifying the\n \u003ccode\u003eCStringLen\u003c/code\u003e, either in C, or using poke, will cause the contents of the\n \u003ccode\u003eByteString\u003c/code\u003e to change, breaking referential transparency. Other\n \u003ccode\u003eByteStrings\u003c/code\u003e created by sharing (such as those produced via \u003ccode\u003etake\u003c/code\u003e\n or \u003ccode\u003edrop\u003c/code\u003e) will also reflect these changes. Modifying the \u003ccode\u003eCStringLen\u003c/code\u003e\n will break referential transparency. To avoid this, use\n \u003ccode\u003euseAsCStringLen\u003c/code\u003e, which makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeUseAsCStringLen",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Vector-Storable-ByteString-Unsafe.html#unsafeUseAsCStringLen",
          "type": "function"
        },
        "index": {
          "description": "construction Use ByteString with function requiring CStringLen This function does zero copying and merely unwraps ByteString to appear as CStringLen It is unsafe After calling this function the CStringLen shares the underlying byte buffer with the original ByteString Thus modifying the CStringLen either in or using poke will cause the contents of the ByteString to change breaking referential transparency Other ByteStrings created by sharing such as those produced via take or drop will also reflect these changes Modifying the CStringLen will break referential transparency To avoid this use useAsCStringLen which makes copy of the original ByteString",
          "hierarchy": "Data Vector Storable ByteString Unsafe",
          "module": "Data.Vector.Storable.ByteString.Unsafe",
          "name": "unsafeUseAsCStringLen",
          "normalized": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "vector-bytestring",
          "partial": "Use As CString Len",
          "signature": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString-Unsafe.html#v:unsafeUseAsCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of byte vectors using\n vectors of Word8, suitable for high performance use, both in terms\n of large data quantities, or high speed requirements. Byte vectors\n are encoded as strict \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e arrays of bytes, held in a \u003ccode\u003eForeignPtr\u003c/code\u003e,\n and can be passed between C and Haskell with little effort.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Vector.Storable.ByteString as B\n\u003c/pre\u003e\u003cp\u003eOriginal GHC implementation by Bryan O'Sullivan.\n Rewritten to use \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e by Simon Marlow.\n Rewritten to support slices and use \u003ccode\u003eForeignPtr\u003c/code\u003e by David Roundy.\n Polished and extended by Don Stewart.\n Redefined ByteString as a Vector (from the vector package) of Word8s\n by Bas van Dijk\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "time and space-efficient implementation of byte vectors using vectors of Word8 suitable for high performance use both in terms of large data quantities or high speed requirements Byte vectors are encoded as strict Word8 arrays of bytes held in ForeignPtr and can be passed between and Haskell with little effort This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.Vector.Storable.ByteString as Original GHC implementation by Bryan Sullivan Rewritten to use UArray by Simon Marlow Rewritten to support slices and use ForeignPtr by David Roundy Polished and extended by Don Stewart Redefined ByteString as Vector from the vector package of Word8s by Bas van Dijk",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "ByteString",
          "package": "vector-bytestring",
          "source": "src/Data-Vector-Storable-ByteString-Internal.html#ByteString",
          "type": "type"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "ByteString",
          "package": "vector-bytestring",
          "partial": "Byte String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines\n if all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "all",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "all",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "any",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "any",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "appendFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnder GHC, a rewrite rule will transform break (==) into a\n call to the specialised breakByte:\n\u003c/p\u003e\u003cpre\u003e break ((==) x) = breakByte x\n break (==x) = breakByte x\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "break",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not Under GHC rewrite rule will transform break into call to the specialised breakByte break breakByte break breakByte",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "break",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakByte\u003c/a\u003e\u003c/code\u003e breaks its ByteString argument at the first occurence\n of the specified byte. It is more efficient than \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e as it is\n implemented with \u003ccode\u003ememchr(3)\u003c/code\u003e. I.e.\n\u003c/p\u003e\u003cpre\u003e break (=='c') \"abcd\" == breakByte 'c' \"abcd\"\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "breakByte",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#breakByte",
          "type": "function"
        },
        "index": {
          "description": "breakByte breaks its ByteString argument at the first occurence of the specified byte It is more efficient than break as it is implemented with memchr I.e break abcd breakByte abcd",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "breakByte",
          "normalized": "Word-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "Byte",
          "signature": "Word-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:breakByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ebreakEnd p == spanEnd (not.p)\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "breakEnd",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the ByteString breakEnd spanEnd not.p",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "breakEnd",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "End",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "concatMap",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "concatMap",
          "normalized": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "Map",
          "signature": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "cons",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "cons",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "count",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Int",
          "source": "src/Data-Vector-Storable-ByteString.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices But more efficiently than using length on the intermediate list",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "count",
          "normalized": "Word-\u003eByteString-\u003eInt",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "dropWhile",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elem",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elemIndex",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-Vector-Storable-ByteString.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elemIndex",
          "normalized": "Word-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "Word-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs ==\n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elemIndexEnd",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-Vector-Storable-ByteString.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given ByteString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elemIndexEnd",
          "normalized": "Word-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index End",
          "signature": "Word-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elemIndices",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-Vector-Storable-ByteString.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order This implementation uses memchr",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "elemIndices",
          "normalized": "Word-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "Word-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "filter",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate This function is subject to array fusion",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "filter",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p ! n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "find",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just Nothing",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "find",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "findIndex",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-Vector-Storable-ByteString.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "findIndex",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "vector-bytestring",
          "partial": "Index",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "findIndices",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-Vector-Storable-ByteString.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "findIndices",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "vector-bytestring",
          "partial": "Indices",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl'",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl'",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl1",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl1'",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldl1'",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr",
          "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr'",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-Vector-Storable-ByteString.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr'",
          "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "vector-bytestring",
          "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr1",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr1'",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "foldr1'",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "groupBy",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "groupBy",
          "normalized": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "By",
          "signature": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that a shorter \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e may be returned\n if there are not enough bytes immediately available to satisfy the\n whole request.  \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e only blocks if there is no data\n available, and EOF has not yet been reached.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "hGetSome",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#hGetSome",
          "type": "function"
        },
        "index": {
          "description": "Like hGet except that shorter ByteString may be returned if there are not enough bytes immediately available to satisfy the whole request hGetSome only blocks if there is no data available and EOF has not yet been reached",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "hGetSome",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "Get Some",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to a handle, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "hPutStrLn",
          "package": "vector-bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to handle appending newline byte",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "head",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "head",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "index",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Int -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and `intersperses' that byte between the elements of\n the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "intersperse",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Word8 and ByteString and intersperses that byte between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "intersperse",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a ByteString, which must be finite and non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "last",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "last",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "map",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs This function is subject to array fusion",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "map",
          "normalized": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "mapAccumL",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "mapAccumL",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "mapAccumR",
          "package": "vector-bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "mapAccumR",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "vector-bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n This function will fuse.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "maximum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString This function will fuse An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "maximum",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n This function will fuse.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "minimum",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-Vector-Storable-ByteString.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString This function will fuse An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "minimum",
          "normalized": "ByteString-\u003eWord",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "notElem",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-Vector-Storable-ByteString.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "notElem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "vector-bytestring",
          "partial": "Elem",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor applications with large numbers of string literals, pack can be a\n bottleneck. In such cases, consider using packAddress (GHC only).\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "pack",
          "package": "vector-bytestring",
          "signature": "[Word8] -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString For applications with large numbers of string literals pack can be bottleneck In such cases consider using packAddress GHC only",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "pack",
          "normalized": "[Word]-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "[Word]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a ByteString and returns\n the pair of ByteStrings with elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p bs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "partition",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate ByteString and returns the pair of ByteStrings with elements which do and do not satisfy the predicate respectively i.e partition bs filter xs filter not xs",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "partition",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "putStrLn",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to stdout appending newline byte",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  This is far more\n efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.  It also may be more efficient than opening the file and\n reading it using hGet. Files are read using 'binary mode' on Windows,\n for 'text mode' use the Char8 version of this function.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "readFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into ByteString This is far more efficient than reading the characters into String and then using pack It also may be more efficient than opening the file and reading it using hGet Files are read using binary mode on Windows for text mode use the Char8 version of this function",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate n x = unfoldr n (\\u -\u003e Just (u,u)) x\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "replicate",
          "package": "vector-bytestring",
          "signature": "Int -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element The following holds replicate unfoldr Just",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "replicate",
          "normalized": "Int-\u003eWord-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Int-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanl",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanl",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanl1",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanl1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanr",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanr",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanr1",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "scanr1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "singleton",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "singleton",
          "normalized": "Word-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a byte to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "snoc",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "snoc",
          "normalized": "ByteString-\u003eWord-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "span",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "span",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n We have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) v\n    ==\n let (x,y) = span (not.isSpace) (reverse v) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "spanEnd",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the ByteString We have spanEnd not.isSpace and spanEnd not isSpace let span not.isSpace reverse in reverse reverse",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "spanEnd",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "partial": "End",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "split",
          "package": "vector-bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "split",
          "normalized": "Word-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "signature": "Word-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "splitWith",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-Vector-Storable-ByteString.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "splitWith",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "takeWhile",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "vector-bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "uncons",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e Maybe (Word8, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Word,ByteString)",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eMaybe(Word,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a\n ByteString from a seed value.  The function takes the element and\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the ByteString or returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next byte in the string,\n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unfoldr",
          "package": "vector-bytestring",
          "signature": "(a -\u003e Maybe (Word8, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is the next byte in the string and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "package": "vector-bytestring",
          "signature": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e snd (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNote: this function has a different type than @Data.Vector.Storable.'VS.unfoldrN'@!\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unfoldrN",
          "package": "vector-bytestring",
          "signature": "Int -\u003e (a -\u003e Maybe (Word8, a)) -\u003e a -\u003e (ByteString, Maybe a)",
          "source": "src/Data-Vector-Storable-ByteString.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr snd unfoldrN take unfoldr Note this function has different type than Data.Vector.Storable VS.unfoldrN",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Word,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "package": "vector-bytestring",
          "signature": "Int-\u003e(a-\u003eMaybe(Word,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unpack",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e [Word8]",
          "source": "src/Data-Vector-Storable-ByteString.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to Word8",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Word]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n ByteStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unzip",
          "package": "vector-bytestring",
          "signature": "[(Word8, Word8)] -\u003e (ByteString, ByteString)",
          "source": "src/Data-Vector-Storable-ByteString.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of ByteStrings Note that this performs two pack operations",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "unzip",
          "normalized": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "package": "vector-bytestring",
          "signature": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "writeFile",
          "package": "vector-bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Vector-Storable-ByteString.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "vector-bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "zip",
          "package": "vector-bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Word8, Word8)]",
          "source": "src/Data-Vector-Storable-ByteString.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "package": "vector-bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "zipWith",
          "package": "vector-bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-Vector-Storable-ByteString.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "zipWith",
          "normalized": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "vector-bytestring",
          "partial": "With",
          "signature": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-bytestring/docs/Data-Vector-Storable-ByteString.html#v:zipWith"
      }
    }
  ]
]