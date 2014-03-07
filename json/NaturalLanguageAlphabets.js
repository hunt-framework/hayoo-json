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
        "word": "NaturalLanguageAlphabets"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn alphabet, where each character is a short bytestring.\n\u003c/p\u003e\u003cp\u003eDue to the overhead this incurs, we use \u003ccode\u003eShortByteString\u003c/code\u003es internally. We\n also provide an \u003ccode\u003e\u003ca\u003eInterned\u003c/a\u003e\u003c/code\u003e instance to further reduce overhead using\n hash-consing.\n\u003c/p\u003e\u003cp\u003eTODO we'd like to use the \u003ccode\u003estringable\u003c/code\u003e library but it depends on\n \u003ccode\u003esystem-filepath\u003c/code\u003e which is not yet compatible with \u003ccode\u003etext\u003e=1\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Alphabet.MultiChar",
          "name": "MultiChar",
          "package": "NaturalLanguageAlphabets",
          "source": "src/NLP-Alphabet-MultiChar.html",
          "type": "module"
        },
        "index": {
          "description": "An alphabet where each character is short bytestring Due to the overhead this incurs we use ShortByteString internally We also provide an Interned instance to further reduce overhead using hash-consing TODO we like to use the stringable library but it depends on system-filepath which is not yet compatible with text",
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "MultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "InternedMultiChar",
          "package": "NaturalLanguageAlphabets",
          "source": "src/NLP-Alphabet-MultiChar.html#InternedMultiChar",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "InternedMultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Interned Multi Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#t:InternedMultiChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a short bytestring. Read and Show instances behave like for normal\n strings.\n\u003c/p\u003e",
          "module": "NLP.Alphabet.MultiChar",
          "name": "MultiChar",
          "package": "NaturalLanguageAlphabets",
          "source": "src/NLP-Alphabet-MultiChar.html#MultiChar",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap short bytestring Read and Show instances behave like for normal strings",
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "MultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#t:MultiChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "InternedMultiChar",
          "package": "NaturalLanguageAlphabets",
          "signature": "InternedMultiChar",
          "source": "src/NLP-Alphabet-MultiChar.html#InternedMultiChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "InternedMultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Interned Multi Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:InternedMultiChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "MultiChar",
          "package": "NaturalLanguageAlphabets",
          "signature": "MultiChar",
          "source": "src/NLP-Alphabet-MultiChar.html#MultiChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "MultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:MultiChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "imcCache",
          "package": "NaturalLanguageAlphabets",
          "signature": "Cache InternedMultiChar",
          "source": "src/NLP-Alphabet-MultiChar.html#imcCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "imcCache",
          "package": "NaturalLanguageAlphabets",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:imcCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterns a \u003ccode\u003e\u003ca\u003eMultiChar\u003c/a\u003e\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "NLP.Alphabet.MultiChar",
          "name": "internMultiChar",
          "package": "NaturalLanguageAlphabets",
          "signature": "MultiChar -\u003e MultiChar",
          "source": "src/NLP-Alphabet-MultiChar.html#internMultiChar",
          "type": "function"
        },
        "index": {
          "description": "Interns MultiChar character",
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "internMultiChar",
          "normalized": "MultiChar-\u003eMultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char",
          "signature": "MultiChar-\u003eMultiChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:internMultiChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "internedMultiCharId",
          "package": "NaturalLanguageAlphabets",
          "signature": "Id",
          "source": "src/NLP-Alphabet-MultiChar.html#InternedMultiChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "internedMultiCharId",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:internedMultiCharId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "unMultiChar",
          "package": "NaturalLanguageAlphabets",
          "signature": "ShortByteString",
          "source": "src/NLP-Alphabet-MultiChar.html#MultiChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "unMultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:unMultiChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Alphabet.MultiChar",
          "name": "uninternMultiChar",
          "package": "NaturalLanguageAlphabets",
          "signature": "MultiChar",
          "source": "src/NLP-Alphabet-MultiChar.html#InternedMultiChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Alphabet MultiChar",
          "module": "NLP.Alphabet.MultiChar",
          "name": "uninternMultiChar",
          "package": "NaturalLanguageAlphabets",
          "partial": "Multi Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NaturalLanguageAlphabets/docs/NLP-Alphabet-MultiChar.html#v:uninternMultiChar"
      }
    }
  ]
]