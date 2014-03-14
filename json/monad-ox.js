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
        "word": "monad-ox"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePopular transformation functions for the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e observation type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Ox.String",
          "name": "String",
          "package": "monad-ox",
          "source": "src/Control-Monad-Ox-String.html",
          "type": "module"
        },
        "index": {
          "description": "Popular transformation functions for the String observation type",
          "hierarchy": "Control Monad Ox String",
          "module": "Control.Monad.Ox.String",
          "name": "String",
          "package": "monad-ox",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack the string, that is remove all adjacent repetitions,\n for example \u003cem\u003eaabcccdde -\u003e abcde\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.String",
          "name": "pack",
          "package": "monad-ox",
          "signature": "String -\u003e String",
          "source": "src/Control-Monad-Ox-String.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Pack the string that is remove all adjacent repetitions for example aabcccdde abcde",
          "hierarchy": "Control Monad Ox String",
          "module": "Control.Monad.Ox.String",
          "name": "pack",
          "normalized": "String-\u003eString",
          "package": "monad-ox",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-String.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix of the given size or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the size exceeds the\n length of the string.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.String",
          "name": "prefix",
          "package": "monad-ox",
          "signature": "Int -\u003e String -\u003e Maybe String",
          "source": "src/Control-Monad-Ox-String.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix of the given size or Nothing if the size exceeds the length of the string",
          "hierarchy": "Control Monad Ox String",
          "module": "Control.Monad.Ox.String",
          "name": "prefix",
          "normalized": "Int-\u003eString-\u003eMaybe String",
          "package": "monad-ox",
          "signature": "Int-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-String.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape of the string.  All lower-case characters are mapped to \u003ccode\u003el\u003c/code\u003e,\n upper-case characters to \u003ccode\u003eu\u003c/code\u003e, digits to \u003ccode\u003ed\u003c/code\u003e and rest of characters\n to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.String",
          "name": "shape",
          "package": "monad-ox",
          "signature": "String -\u003e String",
          "source": "src/Control-Monad-Ox-String.html#shape",
          "type": "function"
        },
        "index": {
          "description": "Shape of the string All lower-case characters are mapped to upper-case characters to digits to and rest of characters to",
          "hierarchy": "Control Monad Ox String",
          "module": "Control.Monad.Ox.String",
          "name": "shape",
          "normalized": "String-\u003eString",
          "package": "monad-ox",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-String.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll substrings of the given size.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.String",
          "name": "substr",
          "package": "monad-ox",
          "signature": "Int -\u003e String -\u003e [String]",
          "source": "src/Control-Monad-Ox-String.html#substr",
          "type": "function"
        },
        "index": {
          "description": "All substrings of the given size",
          "hierarchy": "Control Monad Ox String",
          "module": "Control.Monad.Ox.String",
          "name": "substr",
          "normalized": "Int-\u003eString-\u003e[String]",
          "package": "monad-ox",
          "signature": "Int-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-String.html#v:substr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuffix of the given size or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the size exceeds the\n length of the string.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.String",
          "name": "suffix",
          "package": "monad-ox",
          "signature": "Int -\u003e String -\u003e Maybe String",
          "source": "src/Control-Monad-Ox-String.html#suffix",
          "type": "function"
        },
        "index": {
          "description": "Suffix of the given size or Nothing if the size exceeds the length of the string",
          "hierarchy": "Control Monad Ox String",
          "module": "Control.Monad.Ox.String",
          "name": "suffix",
          "normalized": "Int-\u003eString-\u003eMaybe String",
          "package": "monad-ox",
          "signature": "Int-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-String.html#v:suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePopular transformation functions for the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e observation type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "Lazy",
          "package": "monad-ox",
          "source": "src/Control-Monad-Ox-Text-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Popular transformation functions for the Text observation type",
          "hierarchy": "Control Monad Ox Text Lazy",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "Lazy",
          "package": "monad-ox",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack the text, that is remove all adjacent repetitions,\n for example \u003cem\u003eaabcccdde -\u003e abcde\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "pack",
          "package": "monad-ox",
          "signature": "Text -\u003e Text",
          "source": "src/Control-Monad-Ox-Text-Lazy.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Pack the text that is remove all adjacent repetitions for example aabcccdde abcde",
          "hierarchy": "Control Monad Ox Text Lazy",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "pack",
          "normalized": "Text-\u003eText",
          "package": "monad-ox",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text-Lazy.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix of the given size or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the size exceeds the\n length of the text.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "prefix",
          "package": "monad-ox",
          "signature": "Int -\u003e Text -\u003e Maybe Text",
          "source": "src/Control-Monad-Ox-Text-Lazy.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix of the given size or Nothing if the size exceeds the length of the text",
          "hierarchy": "Control Monad Ox Text Lazy",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "prefix",
          "normalized": "Int-\u003eText-\u003eMaybe Text",
          "package": "monad-ox",
          "signature": "Int-\u003eText-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text-Lazy.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape of the text.  All lower-case characters are mapped to \u003ccode\u003el\u003c/code\u003e,\n upper-case characters to \u003ccode\u003eu\u003c/code\u003e, digits to \u003ccode\u003ed\u003c/code\u003e and rest of characters\n to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "shape",
          "package": "monad-ox",
          "signature": "Text -\u003e Text",
          "source": "src/Control-Monad-Ox-Text-Lazy.html#shape",
          "type": "function"
        },
        "index": {
          "description": "Shape of the text All lower-case characters are mapped to upper-case characters to digits to and rest of characters to",
          "hierarchy": "Control Monad Ox Text Lazy",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "shape",
          "normalized": "Text-\u003eText",
          "package": "monad-ox",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text-Lazy.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll substrings of the given size.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "substr",
          "package": "monad-ox",
          "signature": "Int -\u003e Text -\u003e [Text]",
          "source": "src/Control-Monad-Ox-Text-Lazy.html#substr",
          "type": "function"
        },
        "index": {
          "description": "All substrings of the given size",
          "hierarchy": "Control Monad Ox Text Lazy",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "substr",
          "normalized": "Int-\u003eText-\u003e[Text]",
          "package": "monad-ox",
          "signature": "Int-\u003eText-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text-Lazy.html#v:substr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuffix of the given size or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the size exceeds the\n length of the text.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "suffix",
          "package": "monad-ox",
          "signature": "Int -\u003e Text -\u003e Maybe Text",
          "source": "src/Control-Monad-Ox-Text-Lazy.html#suffix",
          "type": "function"
        },
        "index": {
          "description": "Suffix of the given size or Nothing if the size exceeds the length of the text",
          "hierarchy": "Control Monad Ox Text Lazy",
          "module": "Control.Monad.Ox.Text.Lazy",
          "name": "suffix",
          "normalized": "Int-\u003eText-\u003eMaybe Text",
          "package": "monad-ox",
          "signature": "Int-\u003eText-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text-Lazy.html#v:suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePopular transformation functions for the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e observation type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Ox.Text",
          "name": "Text",
          "package": "monad-ox",
          "source": "src/Control-Monad-Ox-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Popular transformation functions for the Text observation type",
          "hierarchy": "Control Monad Ox Text",
          "module": "Control.Monad.Ox.Text",
          "name": "Text",
          "package": "monad-ox",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack the text, that is remove all adjacent repetitions,\n for example \u003cem\u003eaabcccdde -\u003e abcde\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text",
          "name": "pack",
          "package": "monad-ox",
          "signature": "Text -\u003e Text",
          "source": "src/Control-Monad-Ox-Text.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Pack the text that is remove all adjacent repetitions for example aabcccdde abcde",
          "hierarchy": "Control Monad Ox Text",
          "module": "Control.Monad.Ox.Text",
          "name": "pack",
          "normalized": "Text-\u003eText",
          "package": "monad-ox",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix of the given size or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the size exceeds the\n length of the text.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text",
          "name": "prefix",
          "package": "monad-ox",
          "signature": "Int -\u003e Text -\u003e Maybe Text",
          "source": "src/Control-Monad-Ox-Text.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix of the given size or Nothing if the size exceeds the length of the text",
          "hierarchy": "Control Monad Ox Text",
          "module": "Control.Monad.Ox.Text",
          "name": "prefix",
          "normalized": "Int-\u003eText-\u003eMaybe Text",
          "package": "monad-ox",
          "signature": "Int-\u003eText-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape of the text.  All lower-case characters are mapped to \u003ccode\u003el\u003c/code\u003e,\n upper-case characters to \u003ccode\u003eu\u003c/code\u003e, digits to \u003ccode\u003ed\u003c/code\u003e and rest of characters\n to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text",
          "name": "shape",
          "package": "monad-ox",
          "signature": "Text -\u003e Text",
          "source": "src/Control-Monad-Ox-Text.html#shape",
          "type": "function"
        },
        "index": {
          "description": "Shape of the text All lower-case characters are mapped to upper-case characters to digits to and rest of characters to",
          "hierarchy": "Control Monad Ox Text",
          "module": "Control.Monad.Ox.Text",
          "name": "shape",
          "normalized": "Text-\u003eText",
          "package": "monad-ox",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll substrings of the given size.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text",
          "name": "substr",
          "package": "monad-ox",
          "signature": "Int -\u003e Text -\u003e [Text]",
          "source": "src/Control-Monad-Ox-Text.html#substr",
          "type": "function"
        },
        "index": {
          "description": "All substrings of the given size",
          "hierarchy": "Control Monad Ox Text",
          "module": "Control.Monad.Ox.Text",
          "name": "substr",
          "normalized": "Int-\u003eText-\u003e[Text]",
          "package": "monad-ox",
          "signature": "Int-\u003eText-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text.html#v:substr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuffix of the given size or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the size exceeds the\n length of the text.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox.Text",
          "name": "suffix",
          "package": "monad-ox",
          "signature": "Int -\u003e Text -\u003e Maybe Text",
          "source": "src/Control-Monad-Ox-Text.html#suffix",
          "type": "function"
        },
        "index": {
          "description": "Suffix of the given size or Nothing if the size exceeds the length of the text",
          "hierarchy": "Control Monad Ox Text",
          "module": "Control.Monad.Ox.Text",
          "name": "suffix",
          "normalized": "Int-\u003eText-\u003eMaybe Text",
          "package": "monad-ox",
          "signature": "Int-\u003eText-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox-Text.html#v:suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Ox monad facilitates writing functional expressions over the\n input sentence with arbitrary type of sentence token.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Ox",
          "name": "Ox",
          "package": "monad-ox",
          "source": "src/Control-Monad-Ox.html",
          "type": "module"
        },
        "index": {
          "description": "The Ox monad facilitates writing functional expressions over the input sentence with arbitrary type of sentence token",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "Ox",
          "package": "monad-ox",
          "partial": "Ox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObservation type identifier.  It consists of a list of\n integers, each integer representing a state of the Ox\n monad on the particular level.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "Id",
          "package": "monad-ox",
          "source": "src/Control-Monad-Ox.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Observation type identifier It consists of list of integers each integer representing state of the Ox monad on the particular level",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "Id",
          "package": "monad-ox",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Ox is a monad stack with observation type identifier handled by\n the state monad and the resulting observation values paired with identifiers\n printed using the writer monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "Ox",
          "package": "monad-ox",
          "source": "src/Control-Monad-Ox.html#Ox",
          "type": "type"
        },
        "index": {
          "description": "The Ox is monad stack with observation type identifier handled by the state monad and the resulting observation values paired with identifiers printed using the writer monad",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "Ox",
          "package": "monad-ox",
          "partial": "Ox",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#t:Ox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of the 't -\u003e a' function with respect to the given sentence\n and sentence position.  Return Nothing if the position is out of\n bounds.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "atWith",
          "package": "monad-ox",
          "signature": "Vector a -\u003e (a -\u003e b) -\u003e Int -\u003e Maybe b",
          "source": "src/Control-Monad-Ox.html#atWith",
          "type": "function"
        },
        "index": {
          "description": "Value of the function with respect to the given sentence and sentence position Return Nothing if the position is out of bounds",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "atWith",
          "normalized": "Vector a-\u003e(a-\u003eb)-\u003eInt-\u003eMaybe b",
          "package": "monad-ox",
          "partial": "With",
          "signature": "Vector a-\u003e(a-\u003eb)-\u003eInt-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:atWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of the 't -\u003e [a]' function with respect to the given sentence\n and sentence position.  Return empty list if the position is out of\n bounds.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "atsWith",
          "package": "monad-ox",
          "signature": "Vector a -\u003e (a -\u003e [b]) -\u003e Int -\u003e [b]",
          "source": "src/Control-Monad-Ox.html#atsWith",
          "type": "function"
        },
        "index": {
          "description": "Value of the function with respect to the given sentence and sentence position Return empty list if the position is out of bounds",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "atsWith",
          "normalized": "Vector a-\u003e(a-\u003e[b])-\u003eInt-\u003e[b]",
          "package": "monad-ox",
          "partial": "With",
          "signature": "Vector a-\u003e(a-\u003e[b])-\u003eInt-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:atsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the Ox monad and retrieve the saved (with the \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esaves\u003c/a\u003e\u003c/code\u003e functions) results.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "execOx",
          "package": "monad-ox",
          "signature": "Ox o a -\u003e [(Id, o)]",
          "source": "src/Control-Monad-Ox.html#execOx",
          "type": "function"
        },
        "index": {
          "description": "Execute the Ox monad and retrieve the saved with the save and saves functions results",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "execOx",
          "normalized": "Ox a b-\u003e[(Id,a)]",
          "package": "monad-ox",
          "partial": "Ox",
          "signature": "Ox o a-\u003e[(Id,o)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:execOx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all embedded observations to be indistinguishable with respect\n to their top-most identifier components.\n TODO: Perhaps should set only the current level, not the deeper ones.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "group",
          "package": "monad-ox",
          "signature": "Ox o a -\u003e Ox o a",
          "source": "src/Control-Monad-Ox.html#group",
          "type": "function"
        },
        "index": {
          "description": "Make all embedded observations to be indistinguishable with respect to their top-most identifier components TODO Perhaps should set only the current level not the deeper ones",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "group",
          "normalized": "Ox a b-\u003eOx a b",
          "package": "monad-ox",
          "signature": "Ox o a-\u003eOx o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the observation value.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "save",
          "package": "monad-ox",
          "signature": "Maybe o -\u003e Ox o ()",
          "source": "src/Control-Monad-Ox.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save the observation value",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "save",
          "normalized": "Maybe a-\u003eOx a()",
          "package": "monad-ox",
          "signature": "Maybe o-\u003eOx o()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave observation values in the writer monad of the Ox stack.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "saves",
          "package": "monad-ox",
          "signature": "[o] -\u003e Ox o ()",
          "source": "src/Control-Monad-Ox.html#saves",
          "type": "function"
        },
        "index": {
          "description": "Save observation values in the writer monad of the Ox stack",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "saves",
          "normalized": "[a]-\u003eOx a()",
          "package": "monad-ox",
          "signature": "[o]-\u003eOx o()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:saves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the Ox action only when the \u003ccode\u003econd\u003c/code\u003e is True.  It works like\n the standard \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e function but also changes the current\n identifier value.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "when",
          "package": "monad-ox",
          "signature": "Bool -\u003e Ox o a -\u003e Ox o (Maybe a)",
          "source": "src/Control-Monad-Ox.html#when",
          "type": "function"
        },
        "index": {
          "description": "Perform the Ox action only when the cond is True It works like the standard when function but also changes the current identifier value",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "when",
          "normalized": "Bool-\u003eOx a b-\u003eOx a(Maybe b)",
          "package": "monad-ox",
          "signature": "Bool-\u003eOx o a-\u003eOx o(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the action only when the given condition is equal to Just True.\n\u003c/p\u003e",
          "module": "Control.Monad.Ox",
          "name": "whenJT",
          "package": "monad-ox",
          "signature": "Maybe Bool -\u003e Ox o a -\u003e Ox o (Maybe a)",
          "source": "src/Control-Monad-Ox.html#whenJT",
          "type": "function"
        },
        "index": {
          "description": "Perform the action only when the given condition is equal to Just True",
          "hierarchy": "Control Monad Ox",
          "module": "Control.Monad.Ox",
          "name": "whenJT",
          "normalized": "Maybe Bool-\u003eOx a b-\u003eOx a(Maybe b)",
          "package": "monad-ox",
          "partial": "JT",
          "signature": "Maybe Bool-\u003eOx o a-\u003eOx o(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-ox/docs/Control-Monad-Ox.html#v:whenJT"
      }
    }
  ]
]