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
        "word": "stringlike"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Like",
          "name": "Like",
          "package": "stringlike",
          "source": "src/Data-String-Like.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "Like",
          "package": "stringlike",
          "partial": "Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type class can be used to transform any string like from\n lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, there is no default implementation for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e consciously,\n beacause we don't want to incite \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e using.\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "StringLike",
          "package": "stringlike",
          "source": "src/Data-String-Like.html#StringLike",
          "type": "class"
        },
        "index": {
          "description": "This type class can be used to transform any string like from lazy Text there is no default implementation for String consciously beacause we don want to incite String using",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "StringLike",
          "package": "stringlike",
          "partial": "String Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#t:StringLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type class can be used to transform any type to \u003ccode\u003e\u003ca\u003eStringLike\u003c/a\u003e\u003c/code\u003e type.\n Minimal complete definition: \u003ccode\u003e\u003ca\u003etoText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "ToString",
          "package": "stringlike",
          "source": "src/Data-String-Like.html#ToString",
          "type": "class"
        },
        "index": {
          "description": "This type class can be used to transform any type to StringLike type Minimal complete definition toText",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "ToString",
          "package": "stringlike",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "Data.String.Like",
          "name": "appendFile",
          "package": "stringlike",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "stringlike",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform any \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type to strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "bs",
          "package": "stringlike",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-String-Like.html#bs",
          "type": "function"
        },
        "index": {
          "description": "Transform any ToString type to strict ByteString",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "bs",
          "normalized": "a-\u003eByteString",
          "package": "stringlike",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Like",
          "name": "fromLazyText",
          "package": "stringlike",
          "signature": "Text -\u003e a",
          "source": "src/Data-String-Like.html#fromLazyText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "fromLazyText",
          "normalized": "Text-\u003ea",
          "package": "stringlike",
          "partial": "Lazy Text",
          "signature": "Text-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:fromLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform any \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type to lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "lbs",
          "package": "stringlike",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-String-Like.html#lbs",
          "type": "function"
        },
        "index": {
          "description": "Transform any ToString type to lazy ByteString",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "lbs",
          "normalized": "a-\u003eByteString",
          "package": "stringlike",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:lbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform any \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type to lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "ltext",
          "package": "stringlike",
          "signature": "a -\u003e Text",
          "source": "src/Data-String-Like.html#ltext",
          "type": "function"
        },
        "index": {
          "description": "Transform any ToString type to lazy Text",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "ltext",
          "normalized": "a-\u003eText",
          "package": "stringlike",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:ltext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "readFile",
          "package": "stringlike",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "stringlike",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform any \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type to any \u003ccode\u003e\u003ca\u003eStringLike\u003c/a\u003e\u003c/code\u003e type, it can be inferred\n or should be explicitly defined.\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "string",
          "package": "stringlike",
          "signature": "a -\u003e b",
          "source": "src/Data-String-Like.html#string",
          "type": "function"
        },
        "index": {
          "description": "Transform any ToString type to any StringLike type it can be inferred or should be explicitly defined",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "string",
          "normalized": "a-\u003eb",
          "package": "stringlike",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform any \u003ccode\u003e\u003ca\u003eToString\u003c/a\u003e\u003c/code\u003e type to strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "text",
          "package": "stringlike",
          "signature": "a -\u003e Text",
          "source": "src/Data-String-Like.html#text",
          "type": "function"
        },
        "index": {
          "description": "Transform any ToString type to strict Text",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "text",
          "normalized": "a-\u003eText",
          "package": "stringlike",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Like",
          "name": "toText",
          "package": "stringlike",
          "signature": "a -\u003e Text",
          "source": "src/Data-String-Like.html#toText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "toText",
          "normalized": "a-\u003eText",
          "package": "stringlike",
          "partial": "Text",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Like",
          "name": "writeFile",
          "package": "stringlike",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Data String Like",
          "module": "Data.String.Like",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "stringlike",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stringlike/docs/Data-String-Like.html#v:writeFile"
      }
    }
  ]
]