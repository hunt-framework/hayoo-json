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
        "word": "compressed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression algorithms are all about exploiting redundancy. When applying\n an expensive \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a redundant source, it may be better to\n extract the structural redundancy that is present. \u003ccode\u003e\u003ca\u003eLZ78\u003c/a\u003e\u003c/code\u003e is a compression\n algorithm that does so, without requiring the dictionary to be populated\n with all of the possible values of a data type unlike its later\n refinement LZW, and which has fewer comparison reqirements during encoding\n than its earlier counterpart LZ77.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "source": "src/Data-Compressed-Internal-LZ78.html",
          "type": "module"
        },
        "index": {
          "description": "Compression algorithms are all about exploiting redundancy When applying an expensive Reducer to redundant source it may be better to extract the structural redundancy that is present LZ78 is compression algorithm that does so without requiring the dictionary to be populated with all of the possible values of data type unlike its later refinement LZW and which has fewer comparison reqirements during encoding than its earlier counterpart LZ77",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "partial": "LZ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Entry",
          "package": "compressed",
          "source": "src/Data-Compressed-Internal-LZ78.html#Entry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Entry",
          "package": "compressed",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn LZ78 compressed \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "source": "src/Data-Compressed-Internal-LZ78.html#LZ78",
          "type": "data"
        },
        "index": {
          "description": "An LZ78 compressed Generator",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "partial": "LZ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#t:LZ78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Token",
          "package": "compressed",
          "source": "src/Data-Compressed-Internal-LZ78.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Token",
          "package": "compressed",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Cons",
          "package": "compressed",
          "signature": "Cons !(Token a) (LZ78 a)",
          "source": "src/Data-Compressed-Internal-LZ78.html#LZ78",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Cons",
          "package": "compressed",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Entry",
          "package": "compressed",
          "signature": "Entry !i a",
          "source": "src/Data-Compressed-Internal-LZ78.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Entry",
          "package": "compressed",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Nil",
          "package": "compressed",
          "signature": "Nil",
          "source": "src/Data-Compressed-Internal-LZ78.html#LZ78",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Nil",
          "package": "compressed",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Token",
          "package": "compressed",
          "signature": "Token !Int a",
          "source": "src/Data-Compressed-Internal-LZ78.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "Token",
          "package": "compressed",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-constrained \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e operation\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "decode",
          "package": "compressed",
          "signature": "LZ78 a -\u003e [a]",
          "source": "src/Data-Compressed-Internal-LZ78.html#decode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:decode\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:decode\"]"
        },
        "index": {
          "description": "type-constrained reduce operation",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "decode",
          "normalized": "LZ a-\u003e[a]",
          "package": "compressed",
          "signature": "LZ a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Construct an LZ78-compressed \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003eHashMap\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "encode",
          "package": "compressed",
          "signature": "[a] -\u003e LZ78 a",
          "source": "src/Data-Compressed-Internal-LZ78.html#encode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:encode\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:encode\"]"
        },
        "index": {
          "description": "Construct an LZ78-compressed Generator using HashMap internally",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "encode",
          "normalized": "[a]-\u003eLZ a",
          "package": "compressed",
          "signature": "[a]-\u003eLZ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e Contruct an LZ78-compressed \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using a list internally, requires an instance of Eq,\n less efficient than encode.\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "encodeEq",
          "package": "compressed",
          "signature": "[a] -\u003e LZ78 a",
          "source": "src/Data-Compressed-Internal-LZ78.html#encodeEq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:encodeEq\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:encodeEq\"]"
        },
        "index": {
          "description": "Contruct an LZ78-compressed Generator using list internally requires an instance of Eq less efficient than encode",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "encodeEq",
          "normalized": "[a]-\u003eLZ a",
          "package": "compressed",
          "partial": "Eq",
          "signature": "[a]-\u003eLZ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:encodeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e Contruct an LZ78-compressed \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003eMap\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "encodeOrd",
          "package": "compressed",
          "signature": "[a] -\u003e LZ78 a",
          "source": "src/Data-Compressed-Internal-LZ78.html#encodeOrd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:encodeOrd\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:encodeOrd\"]"
        },
        "index": {
          "description": "log Contruct an LZ78-compressed Generator using Map internally",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "encodeOrd",
          "normalized": "[a]-\u003eLZ a",
          "package": "compressed",
          "partial": "Ord",
          "signature": "[a]-\u003eLZ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:encodeOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexposes internal structure\n\u003c/p\u003e",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "entries",
          "package": "compressed",
          "signature": "LZ78 a -\u003e LZ78 (Entry Int a)",
          "source": "src/Data-Compressed-Internal-LZ78.html#entries",
          "type": "function"
        },
        "index": {
          "description": "exposes internal structure",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "entries",
          "normalized": "LZ a-\u003eLZ(Entry Int a)",
          "package": "compressed",
          "signature": "LZ a-\u003eLZ(Entry Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Recompress with \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "recode",
          "package": "compressed",
          "signature": "LZ78 a -\u003e LZ78 a",
          "source": "src/Data-Compressed-Internal-LZ78.html#recode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:recode\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:recode\"]"
        },
        "index": {
          "description": "Recompress with Hashable",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "recode",
          "normalized": "LZ a-\u003eLZ a",
          "package": "compressed",
          "signature": "LZ a-\u003eLZ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:recode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e. Recompress with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "recodeEq",
          "package": "compressed",
          "signature": "LZ78 a -\u003e LZ78 a",
          "source": "src/Data-Compressed-Internal-LZ78.html#recodeEq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:recodeEq\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:recodeEq\"]"
        },
        "index": {
          "description": "Recompress with Eq",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "recodeEq",
          "normalized": "LZ a-\u003eLZ a",
          "package": "compressed",
          "partial": "Eq",
          "signature": "LZ a-\u003eLZ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:recodeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Recompress with \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Compressed.Internal.LZ78\",\"Data.Compressed.LZ78\"]",
          "name": "recodeOrd",
          "package": "compressed",
          "signature": "LZ78 a -\u003e LZ78 a",
          "source": "src/Data-Compressed-Internal-LZ78.html#recodeOrd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:recodeOrd\",\"http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#v:recodeOrd\"]"
        },
        "index": {
          "description": "log Recompress with Ord",
          "hierarchy": "Data Compressed Internal LZ78",
          "module": "Data.Compressed.Internal.LZ78",
          "name": "recodeOrd",
          "normalized": "LZ a-\u003eLZ a",
          "package": "compressed",
          "partial": "Ord",
          "signature": "LZ a-\u003eLZ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-Internal-LZ78.html#v:recodeOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression algorithms are all about exploiting redundancy. When applying\n an expensive \u003ccode\u003eReducer\u003c/code\u003e to a redundant source, it may be better to\n extract the structural redundancy that is present. \u003ccode\u003e\u003ca\u003eLZ78\u003c/a\u003e\u003c/code\u003e is a compression\n algorithm that does so, without requiring the dictionary to be populated\n with all of the possible values of a data type unlike its later\n refinement LZW, and which has fewer comparison reqirements during encoding\n than its earlier counterpart LZ77.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Compressed.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "source": "src/Data-Compressed-LZ78.html",
          "type": "module"
        },
        "index": {
          "description": "Compression algorithms are all about exploiting redundancy When applying an expensive Reducer to redundant source it may be better to extract the structural redundancy that is present LZ78 is compression algorithm that does so without requiring the dictionary to be populated with all of the possible values of data type unlike its later refinement LZW and which has fewer comparison reqirements during encoding than its earlier counterpart LZ77",
          "hierarchy": "Data Compressed LZ78",
          "module": "Data.Compressed.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "partial": "LZ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn LZ78 compressed \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Compressed.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "source": "src/Data-Compressed-Internal-LZ78.html#LZ78",
          "type": "data"
        },
        "index": {
          "description": "An LZ78 compressed Generator",
          "hierarchy": "Data Compressed LZ78",
          "module": "Data.Compressed.LZ78",
          "name": "LZ78",
          "package": "compressed",
          "partial": "LZ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-LZ78.html#t:LZ78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression algorithms are all about exploiting redundancy. When applying\n an expensive \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a redundant source, it may be better to\n extract the structural redundancy that is present. Run length encoding\n can do so for long runs of identical inputs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "RunLengthEncoding",
          "package": "compressed",
          "source": "src/Data-Compressed-RunLengthEncoding.html",
          "type": "module"
        },
        "index": {
          "description": "Compression algorithms are all about exploiting redundancy When applying an expensive Reducer to redundant source it may be better to extract the structural redundancy that is present Run length encoding can do so for long runs of identical inputs",
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "RunLengthEncoding",
          "package": "compressed",
          "partial": "Run Length Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e which supports efficient \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e operations over run-length encoded data.\n\u003c/p\u003e",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "RLE",
          "package": "compressed",
          "source": "src/Data-Compressed-RunLengthEncoding.html#RLE",
          "type": "newtype"
        },
        "index": {
          "description": "Generator which supports efficient mapReduce operations over run-length encoded data",
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "RLE",
          "package": "compressed",
          "partial": "RLE",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#t:RLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single run with a strict length\n\u003c/p\u003e",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "Run",
          "package": "compressed",
          "source": "src/Data-Compressed-RunLengthEncoding.html#Run",
          "type": "data"
        },
        "index": {
          "description": "single run with strict length",
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "Run",
          "package": "compressed",
          "partial": "Run",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#t:Run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "RLE",
          "package": "compressed",
          "signature": "RLE",
          "source": "src/Data-Compressed-RunLengthEncoding.html#RLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "RLE",
          "package": "compressed",
          "partial": "RLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:RLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "decode",
          "package": "compressed",
          "signature": "RLE a -\u003e [a]",
          "source": "src/Data-Compressed-RunLengthEncoding.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "decode",
          "normalized": "RLE a-\u003e[a]",
          "package": "compressed",
          "signature": "RLE a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "encode",
          "package": "compressed",
          "signature": "c -\u003e RLE (Elem c)",
          "source": "src/Data-Compressed-RunLengthEncoding.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "encode",
          "normalized": "a-\u003eRLE(Elem a)",
          "package": "compressed",
          "signature": "c-\u003eRLE(Elem c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "fromRuns",
          "package": "compressed",
          "signature": "[Run a] -\u003e RLE a",
          "source": "src/Data-Compressed-RunLengthEncoding.html#fromRuns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "fromRuns",
          "normalized": "[Run a]-\u003eRLE a",
          "package": "compressed",
          "partial": "Runs",
          "signature": "[Run a]-\u003eRLE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:fromRuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "getRLE",
          "package": "compressed",
          "signature": "FingerTree Count (Run a)",
          "source": "src/Data-Compressed-RunLengthEncoding.html#RLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "getRLE",
          "package": "compressed",
          "partial": "RLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:getRLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "recode",
          "package": "compressed",
          "signature": "RLE a -\u003e RLE a",
          "source": "src/Data-Compressed-RunLengthEncoding.html#recode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "recode",
          "normalized": "RLE a-\u003eRLE a",
          "package": "compressed",
          "signature": "RLE a-\u003eRLE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:recode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "runLength",
          "package": "compressed",
          "signature": "Run a -\u003e Int",
          "source": "src/Data-Compressed-RunLengthEncoding.html#runLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "runLength",
          "normalized": "Run a-\u003eInt",
          "package": "compressed",
          "partial": "Length",
          "signature": "Run a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:runLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "toRuns",
          "package": "compressed",
          "signature": "RLE a -\u003e [Run a]",
          "source": "src/Data-Compressed-RunLengthEncoding.html#toRuns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Compressed RunLengthEncoding",
          "module": "Data.Compressed.RunLengthEncoding",
          "name": "toRuns",
          "normalized": "RLE a-\u003e[Run a]",
          "package": "compressed",
          "partial": "Runs",
          "signature": "RLE a-\u003e[Run a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compressed/docs/Data-Compressed-RunLengthEncoding.html#v:toRuns"
      }
    }
  ]
]