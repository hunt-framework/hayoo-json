[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasicPrelude mostly re-exports\n several key libraries in their entirety.\n The exception is Data.List,\n where various functions are replaced\n by similar versions that are either\n generalized, operate on Text,\n or are implemented strictly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "module",
        "fct-source": "src/BasicPrelude.html",
        "fct-type": "module",
        "title": "BasicPrelude"
      },
      "index": {
        "description": "BasicPrelude mostly re-exports several key libraries in their entirety The exception is Data.List where various functions are replaced by similar versions that are either generalized operate on Text or are implemented strictly",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "BasicPrelude",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Basic Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#t:ReadS",
      "description": {
        "fct-descr": "\u003cp\u003eA parser for a type \u003ccode\u003ea\u003c/code\u003e, represented as a function that takes a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and returns a list of possible parses as \u003ccode\u003e(a,\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eNote that this kind of backtracking parser is very inefficient;\n reading a large structure may be quite slow (cf \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "ReadS"
      },
      "index": {
        "description": "parser for type represented as function that takes String and returns list of possible parses as String pairs Note that this kind of backtracking parser is very inefficient reading large structure may be quite slow cf ReadP",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "ReadS",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#t:ShowS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eshows\u003c/code\u003e functions return a function that prepends the\n output \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  This allows constant-time\n concatenation of results using function composition.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "ShowS"
      },
      "index": {
        "description": "The shows functions return function that prepends the output String to an existing String This allows constant-time concatenation of results using function composition",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "ShowS",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:-43--43-",
      "description": {
        "fct-descr": "\u003cpre\u003e (++) = mappend\n\u003c/pre\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "w -\u003e w -\u003e w",
        "fct-source": "src/BasicPrelude.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "mappend",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "(++) ++",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "w-\u003ew-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite Text to the end of a file.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/BasicPrelude.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Write Text to the end of file",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "appendFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "basic-prelude",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:concat",
      "description": {
        "fct-descr": "\u003cpre\u003e concat = mconcat\n\u003c/pre\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[w] -\u003e w",
        "fct-source": "src/BasicPrelude.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "concat mconcat",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "concat",
        "normalized": "[a]-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[w]-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:decodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eNote that this is \u003cem\u003enot\u003c/em\u003e the standard \u003ccode\u003eData.Text.Encoding.decodeUtf8\u003c/code\u003e. That\n function will throw impure exceptions on any decoding errors. This function\n instead uses \u003ccode\u003edecodeLenient\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/BasicPrelude.html#decodeUtf8",
        "fct-type": "function",
        "title": "decodeUtf8"
      },
      "index": {
        "description": "Note that this is not the standard Data.Text.Encoding.decodeUtf8 That function will throw impure exceptions on any decoding errors This function instead uses decodeLenient",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "decodeUtf8",
        "normalized": "ByteString-\u003eText",
        "package": "basic-prelude",
        "partial": "Utf",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:empty",
      "description": {
        "fct-descr": "\u003cpre\u003e empty = mempty\n\u003c/pre\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "w",
        "fct-source": "src/BasicPrelude.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty mempty",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "empty",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:encodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e ByteString",
        "fct-type": "function",
        "title": "encodeUtf8"
      },
      "index": {
        "description": "Encode text using UTF-8 encoding",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "encodeUtf8",
        "normalized": "Text-\u003eByteString",
        "package": "basic-prelude",
        "partial": "Utf",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:gcd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the non-negative factor of both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e of which\n every common factor of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e is also a factor; for example\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 4 2 = 2\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-4) 6 = 2\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 4\u003c/code\u003e = \u003ccode\u003e4\u003c/code\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 0\u003c/code\u003e = \u003ccode\u003e0\u003c/code\u003e.\n (That is, the common divisor that is \"greatest\" in the divisibility\n preordering.)\n\u003c/p\u003e\u003cp\u003eNote: Since for signed fixed-width integer types, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c 0\u003c/code\u003e,\n the result may be negative if one of the arguments is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (and\n necessarily is if the other is \u003ccode\u003e0\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e) for such types.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "gcd"
      },
      "index": {
        "description": "gcd is the non-negative factor of both and of which every common factor of and is also factor for example gcd gcd gcd gcd That is the common divisor that is greatest in the divisibility preordering Note Since for signed fixed-width integer types abs minBound the result may be negative if one of the arguments is minBound and necessarily is if the other is or minBound for such types",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "gcd",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:getChar",
      "description": {
        "fct-descr": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "IO Char",
        "fct-type": "function",
        "title": "getChar"
      },
      "index": {
        "description": "Read character from the standard input device same as hGetChar stdin",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "getChar",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read all user input on \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e as a single string.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "IO Text",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Lazily read all user input on stdin as single string",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "getContents",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:getLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line of user input from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "IO Text",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "Read single line of user input from stdin",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "getLine",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:interact",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eText -\u003e Text\u003c/code\u003e\n as its argument. The entire input from the standard input device is\n passed (lazily) to this function as its argument, and the resulting\n string is output on the standard output device.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(Text -\u003e Text) -\u003e IO ()",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "The interact function takes function of type Text Text as its argument The entire input from the standard input device is passed lazily to this function as its argument and the resulting string is output on the standard output device",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "interact",
        "normalized": "(Text-\u003eText)-\u003eIO()",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(Text-\u003eText)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cpre\u003e intercalate = mconcat .: intersperse\n\u003c/pre\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "w -\u003e [w] -\u003e w",
        "fct-source": "src/BasicPrelude.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "intercalate mconcat intersperse",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "intercalate",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "w-\u003e[w]-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:lcm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the smallest positive integer that both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e divide.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "lcm"
      },
      "index": {
        "description": "lcm is the smallest positive integer that both and divide",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "lcm",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:lex",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e function reads a single lexeme from the input, discarding\n initial white space, and returning the characters that constitute the\n lexeme.  If the input string contains only white space, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e returns a\n single successful `lexeme' consisting of the empty string.  (Thus\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e \"\" = [(\"\",\"\")]\u003c/code\u003e.)  If there is no legal lexeme at the\n beginning of the input string, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e fails (i.e. returns \u003ccode\u003e[]\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis lexer is not completely faithful to the Haskell lexical syntax\n in the following respects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Qualified names are not handled properly\n\u003c/li\u003e\u003cli\u003e Octal and hexadecimal numerics are not recognized as a single token\n\u003c/li\u003e\u003cli\u003e Comments are not treated properly\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "ReadS String",
        "fct-type": "function",
        "title": "lex"
      },
      "index": {
        "description": "The lex function reads single lexeme from the input discarding initial white space and returning the characters that constitute the lexeme If the input string contains only white space lex returns single successful lexeme consisting of the empty string Thus lex If there is no legal lexeme at the beginning of the input string lex fails i.e returns This lexer is not completely faithful to the Haskell lexical syntax in the following respects Qualified names are not handled properly Octal and hexadecimal numerics are not recognized as single token Comments are not treated properly",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "lex",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Breaks a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e up into a list of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es at\n newline \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es. The resulting strings do not contain newlines.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e [Text]",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Breaks Text up into list of Text at newline Char The resulting strings do not contain newlines",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "lines",
        "normalized": "Text-\u003e[Text]",
        "package": "basic-prelude",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:ltextToString",
      "description": {
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "LText -\u003e String",
        "fct-source": "src/BasicPrelude.html#ltextToString",
        "fct-type": "function",
        "title": "ltextToString"
      },
      "index": {
        "description": "",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "ltextToString",
        "normalized": "LText-\u003eString",
        "package": "basic-prelude",
        "partial": "To String",
        "signature": "LText-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:map",
      "description": {
        "fct-descr": "\u003cpre\u003e map = fmap\n\u003c/pre\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/BasicPrelude.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map fmap",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the product of a finite list of numbers.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/BasicPrelude.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "Compute the product of finite list of numbers",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "product",
        "normalized": "[a]-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:putChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Char -\u003e IO ()",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "Write character to the standard output device same as hPutChar stdout",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "putChar",
        "normalized": "Char-\u003eIO()",
        "package": "basic-prelude",
        "partial": "Char",
        "signature": "Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e IO ()",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Write string to stdout",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "putStr",
        "normalized": "Text-\u003eIO()",
        "package": "basic-prelude",
        "partial": "Str",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eParse Text to a value\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e a",
        "fct-source": "src/BasicPrelude.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Parse Text to value",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "read",
        "normalized": "Text-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "Text-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a file and return the contents of the file as Text.\n The entire file is read strictly.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e IO Text",
        "fct-source": "src/BasicPrelude.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Read file and return the contents of the file as Text The entire file is read strictly",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO Text",
        "package": "basic-prelude",
        "partial": "File",
        "signature": "FilePath-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readIO",
      "description": {
        "fct-descr": "\u003cp\u003eThe readIO function is similar to read\n except that it signals parse failure to the IO monad\n instead of terminating the program. \n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e IO a",
        "fct-source": "src/BasicPrelude.html#readIO",
        "fct-type": "function",
        "title": "readIO"
      },
      "index": {
        "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readIO",
        "normalized": "Text-\u003eIO a",
        "package": "basic-prelude",
        "partial": "IO",
        "signature": "Text-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readList",
      "description": {
        "fct-descr": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "ReadS [a]",
        "fct-type": "function",
        "title": "readList"
      },
      "index": {
        "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readList",
        "normalized": "ReadS[a]",
        "package": "basic-prelude",
        "partial": "List",
        "signature": "ReadS[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readLn",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "IO a",
        "fct-type": "function",
        "title": "readLn"
      },
      "index": {
        "description": "The readLn function combines getLine and readIO",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readLn",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Ln",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readMay",
      "description": {
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e Maybe a",
        "fct-source": "src/BasicPrelude.html#readMay",
        "fct-type": "function",
        "title": "readMay"
      },
      "index": {
        "description": "",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readMay",
        "normalized": "Text-\u003eMaybe a",
        "package": "basic-prelude",
        "partial": "May",
        "signature": "Text-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readParen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but surrounded with\n parentheses.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but optionally\n surrounded with parentheses.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Bool -\u003e ReadS a -\u003e ReadS a",
        "fct-type": "function",
        "title": "readParen"
      },
      "index": {
        "description": "readParen True parses what parses but surrounded with parentheses readParen False parses what parses but optionally surrounded with parentheses",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readParen",
        "normalized": "Bool-\u003eReadS a-\u003eReadS a",
        "package": "basic-prelude",
        "partial": "Paren",
        "signature": "Bool-\u003eReadS a-\u003eReadS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:reads",
      "description": {
        "fct-descr": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "ReadS a",
        "fct-type": "function",
        "title": "reads"
      },
      "index": {
        "description": "equivalent to readsPrec with precedence of",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "reads",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:readsPrec",
      "description": {
        "fct-descr": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Int-\u003e ReadS a",
        "fct-type": "function",
        "title": "readsPrec"
      },
      "index": {
        "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "readsPrec",
        "normalized": "Int-\u003eReadS a",
        "package": "basic-prelude",
        "partial": "Prec",
        "signature": "Int-\u003eReadS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:show",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value to readable Text\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/BasicPrelude.html#show",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "Convert value to readable Text",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "show",
        "normalized": "a-\u003eText",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:showChar",
      "description": {
        "fct-descr": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the character unchanged.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Char -\u003e ShowS",
        "fct-type": "function",
        "title": "showChar"
      },
      "index": {
        "description": "utility function converting Char to show function that simply prepends the character unchanged",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "showChar",
        "normalized": "Char-\u003eShowS",
        "package": "basic-prelude",
        "partial": "Char",
        "signature": "Char-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:showList",
      "description": {
        "fct-descr": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[a] -\u003e ShowS",
        "fct-type": "function",
        "title": "showList"
      },
      "index": {
        "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "showList",
        "normalized": "[a]-\u003eShowS",
        "package": "basic-prelude",
        "partial": "List",
        "signature": "[a]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:showParen",
      "description": {
        "fct-descr": "\u003cp\u003eutility function that surrounds the inner show function with\n parentheses when the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Bool -\u003e ShowS -\u003e ShowS",
        "fct-type": "function",
        "title": "showParen"
      },
      "index": {
        "description": "utility function that surrounds the inner show function with parentheses when the Bool parameter is True",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "showParen",
        "normalized": "Bool-\u003eShowS-\u003eShowS",
        "package": "basic-prelude",
        "partial": "Paren",
        "signature": "Bool-\u003eShowS-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:showString",
      "description": {
        "fct-descr": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the string unchanged.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "String -\u003e ShowS",
        "fct-type": "function",
        "title": "showString"
      },
      "index": {
        "description": "utility function converting String to show function that simply prepends the string unchanged",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "showString",
        "normalized": "String-\u003eShowS",
        "package": "basic-prelude",
        "partial": "String",
        "signature": "String-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:shows",
      "description": {
        "fct-descr": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e ShowS",
        "fct-type": "function",
        "title": "shows"
      },
      "index": {
        "description": "equivalent to showsPrec with precedence of",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "shows",
        "normalized": "a-\u003eShowS",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:showsPrec",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Int-\u003e a-\u003e ShowS",
        "fct-type": "function",
        "title": "showsPrec"
      },
      "index": {
        "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "showsPrec",
        "normalized": "Int-\u003ea-\u003eShowS",
        "package": "basic-prelude",
        "partial": "Prec",
        "signature": "Int-\u003ea-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the sum of a finite list of numbers.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/BasicPrelude.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Compute the sum of finite list of numbers",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "sum",
        "normalized": "[a]-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:textToString",
      "description": {
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e String",
        "fct-source": "src/BasicPrelude.html#textToString",
        "fct-type": "function",
        "title": "textToString"
      },
      "index": {
        "description": "",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "textToString",
        "normalized": "Text-\u003eString",
        "package": "basic-prelude",
        "partial": "To String",
        "signature": "Text-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Joins lines, after appending a terminating newline to\n each.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Text] -\u003e Text",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "Joins lines after appending terminating newline to each",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "unlines",
        "normalized": "[Text]-\u003eText",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Joins words using single space characters.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Text] -\u003e Text",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "Joins words using single space characters",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "unwords",
        "normalized": "[Text]-\u003eText",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Breaks a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e up into a list of words, delimited by \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es\n representing white space.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e [Text]",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "Breaks Text up into list of words delimited by Char representing white space",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "words",
        "normalized": "Text-\u003e[Text]",
        "package": "basic-prelude",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/BasicPrelude.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite Text to a file.\n The file is truncated to zero length before writing begins.\n\u003c/p\u003e",
        "fct-module": "BasicPrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/BasicPrelude.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Write Text to file The file is truncated to zero length before writing begins",
        "hierarchy": "BasicPrelude",
        "module": "BasicPrelude",
        "name": "writeFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "basic-prelude",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "module",
        "fct-source": "src/CorePrelude.html",
        "fct-type": "module",
        "title": "CorePrelude"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "CorePrelude",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Core Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Applicative",
      "description": {
        "fct-descr": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Applicative"
      },
      "index": {
        "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Applicative",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Bool",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Bool",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Bounded",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class is used to name the upper and lower limits of a\n type.  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is not a superclass of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e since types that are not\n totally ordered may also have upper and lower bounds.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class may be derived for any enumeration type;\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e is the first constructor listed in the \u003ccode\u003edata\u003c/code\u003e declaration\n and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is the last.\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e may also be derived for single-constructor datatypes whose\n constituent types are in \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Bounded"
      },
      "index": {
        "description": "The Bounded class is used to name the upper and lower limits of type Ord is not superclass of Bounded since types that are not totally ordered may also have upper and lower bounds The Bounded class may be derived for any enumeration type minBound is the first constructor listed in the data declaration and maxBound is the last Bounded may also be derived for single-constructor datatypes whose constituent types are in Bounded",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Bounded",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Bounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "ByteString",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Char",
      "description": {
        "fct-descr": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Char"
      },
      "index": {
        "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Char",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Double",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Down",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDown\u003c/a\u003e\u003c/code\u003e type allows you to reverse sort order conveniently.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDown\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDown\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e).\n If \u003ccode\u003ea\u003c/code\u003e has an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance associated with it then comparing two\n values thus wrapped will give you the opposite of their normal sort order.\n This is particularly useful when sorting in generalised list comprehensions,\n as in: \u003ccode\u003ethen sortWith by \u003ccode\u003e\u003ca\u003eDown\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Down"
      },
      "index": {
        "description": "The Down type allows you to reverse sort order conveniently value of type Down contains value of type represented as Down If has an Ord instance associated with it then comparing two values thus wrapped will give you the opposite of their normal sort order This is particularly useful when sorting in generalised list comprehensions as in then sortWith by Down",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Down",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Either",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Either"
      },
      "index": {
        "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Either",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Enum",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Enum"
      },
      "index": {
        "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Enum",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Eq",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Eq"
      },
      "index": {
        "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Eq",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Exception"
      },
      "index": {
        "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Exception",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:FilePath",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "FilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "FilePath",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Float",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Float"
      },
      "index": {
        "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Float",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Floating",
      "description": {
        "fct-descr": "\u003cp\u003eTrigonometric and hyperbolic functions and related functions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e,\n      \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Floating"
      },
      "index": {
        "description": "Trigonometric and hyperbolic functions and related functions Minimal complete definition pi exp log sin cos sinh cosh asin acos atan asinh acosh and atanh",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Floating",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Floating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Fractional",
      "description": {
        "fct-descr": "\u003cp\u003eFractional numbers, supporting real division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e and (\u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Fractional"
      },
      "index": {
        "description": "Fractional numbers supporting real division Minimal complete definition fromRational and recip or",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Fractional",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Fractional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Functor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Functor",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:HashMap",
      "description": {
        "fct-descr": "\u003cp\u003eA map from keys to values.  A map cannot contain duplicate keys;\n each key can map to at most one value.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "HashMap"
      },
      "index": {
        "description": "map from keys to values map cannot contain duplicate keys each key can map to at most one value",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "HashMap",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Hash Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:HashSet",
      "description": {
        "fct-descr": "\u003cp\u003eA set of values.  A set cannot contain duplicate values.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "HashSet"
      },
      "index": {
        "description": "set of values set cannot contain duplicate values",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "HashSet",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Hash Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Hashable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types that can be converted to a hash value.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "The class of types that can be converted to hash value",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Hashable",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:IO",
      "description": {
        "fct-descr": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IO"
      },
      "index": {
        "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "IO",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:IOException",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions that occur in the \u003ccode\u003eIO\u003c/code\u003e monad.\n An \u003ccode\u003eIOException\u003c/code\u003e records a more specific error type, a descriptive\n string and maybe the handle that was used when the error was\n flagged.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOException"
      },
      "index": {
        "description": "Exceptions that occur in the IO monad An IOException records more specific error type descriptive string and maybe the handle that was used when the error was flagged",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "IOException",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "IOException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Int",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Int32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int32"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Int32",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Int64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int64"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Int64",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Integer",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Integer"
      },
      "index": {
        "description": "Arbitrary-precision integers",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Integer",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Integral",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Integral"
      },
      "index": {
        "description": "Integral numbers supporting integer division Minimal complete definition quotRem and toInteger",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Integral",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:IsString",
      "description": {
        "fct-descr": "\u003cp\u003eClass for string-like datastructures; used by the overloaded string\n   extension (-foverloaded-strings in GHC).\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "IsString"
      },
      "index": {
        "description": "Class for string-like datastructures used by the overloaded string extension foverloaded-strings in GHC",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "IsString",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Is String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:LByteString",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-source": "src/CorePrelude.html#LByteString",
        "fct-type": "type",
        "title": "LByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "LByteString",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "LByte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:LText",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-source": "src/CorePrelude.html#LText",
        "fct-type": "type",
        "title": "LText"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "LText",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "LText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Map",
      "description": {
        "fct-descr": "\u003cp\u003eA Map from keys \u003ccode\u003ek\u003c/code\u003e to values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Map"
      },
      "index": {
        "description": "Map from keys to values",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Map",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Maybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Maybe"
      },
      "index": {
        "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Maybe",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Monad",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monad"
      },
      "index": {
        "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Monad",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "MonadIO",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Monoid",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Num",
      "description": {
        "fct-descr": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Num"
      },
      "index": {
        "description": "Basic numeric class Minimal complete definition all except negate or",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Num",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Ord",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is used for totally ordered datatypes.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e can be derived for any user-defined\n datatype whose constituent types are in \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.  The declared order\n of the constructors in the data declaration determines the ordering\n in derived \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.  The \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e datatype allows a single\n comparison to determine the precise ordering of two objects.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e.\n Using \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e can be more efficient for complex types.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Ord"
      },
      "index": {
        "description": "The Ord class is used for totally ordered datatypes Instances of Ord can be derived for any user-defined datatype whose constituent types are in Ord The declared order of the constructors in the data declaration determines the ordering in derived Ord instances The Ordering datatype allows single comparison to determine the precise ordering of two objects Minimal complete definition either compare or Using compare can be more efficient for complex types",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Ord",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Ordering",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Ordering"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Ordering",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Rational",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Rational"
      },
      "index": {
        "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Rational",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Read",
      "description": {
        "fct-descr": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Read"
      },
      "index": {
        "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Read",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Real",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Real"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Real",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:RealFloat",
      "description": {
        "fct-descr": "\u003cp\u003eEfficient, machine-independent access to the components of a\n floating-point number.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      all except \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "RealFloat"
      },
      "index": {
        "description": "Efficient machine-independent access to the components of floating-point number Minimal complete definition all except exponent significand scaleFloat and atan2",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "RealFloat",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Real Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:RealFrac",
      "description": {
        "fct-descr": "\u003cp\u003eExtracting components of fractions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "RealFrac"
      },
      "index": {
        "description": "Extracting components of fractions Minimal complete definition properFraction",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "RealFrac",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Real Frac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Seq",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral-purpose finite sequences.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Seq"
      },
      "index": {
        "description": "General-purpose finite sequences",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Seq",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eA set of values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Set"
      },
      "index": {
        "description": "set of values",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Set",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Show",
      "description": {
        "fct-descr": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Show"
      },
      "index": {
        "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Show",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:SomeException",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SomeException"
      },
      "index": {
        "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "SomeException",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Some Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:String",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "String"
      },
      "index": {
        "description": "String is list of characters String constants in Haskell are values of type String",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "String",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Text",
      "description": {
        "fct-descr": "\u003cp\u003eA space efficient, packed, unboxed Unicode text type.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "space efficient packed unboxed Unicode text type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Text",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Typeable",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:UVector",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "type",
        "fct-source": "src/CorePrelude.html#UVector",
        "fct-type": "type",
        "title": "UVector"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "UVector",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "UVector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Unbox",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Unbox"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Unbox",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Unbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eBoxed vectors, supporting efficient slicing.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Vector"
      },
      "index": {
        "description": "Boxed vectors supporting efficient slicing",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Vector",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is an unsigned integral type, with the same size as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word"
      },
      "index": {
        "description": "Word is an unsigned integral type with the same size as Int",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Word",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Word32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word32"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Word32",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Word64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word64"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Word64",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Word8",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Boolean or",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(||) ||",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-36-",
      "description": {
        "fct-descr": "\u003cp\u003eApplication operator.  This operator is redundant, since ordinary\n application \u003ccode\u003e(f x)\u003c/code\u003e means the same as \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e x)\u003c/code\u003e. However, \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e has\n low, right-associative binding precedence, so it sometimes allows\n parentheses to be omitted; for example:\n\u003c/p\u003e\u003cpre\u003e     f $ g $ h x  =  f (g (h x))\n\u003c/pre\u003e\u003cp\u003eIt is also useful in higher-order situations, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e 0) xs\u003c/code\u003e,\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e) fs xs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-type": "function",
        "title": "($)"
      },
      "index": {
        "description": "Application operator This operator is redundant since ordinary application means the same as However has low right-associative binding precedence so it sometimes allows parentheses to be omitted for example It is also useful in higher-order situations such as map xs or zipWith fs xs",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "($) $",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-36--33-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict (call-by-value) application, defined in terms of \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-type": "function",
        "title": "($!)"
      },
      "index": {
        "description": "Strict call-by-value application defined in terms of seq",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "($!) $!",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Boolean and",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(&&) &&",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-38--38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eFanout: send the input to both argument arrows and combine\n   their output.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall b c c'.  a b c -\u003e a b c' -\u003e a b (c, c')",
        "fct-type": "function",
        "title": "(&&&)"
      },
      "index": {
        "description": "Fanout send the input to both argument arrows and combine their output The default definition may be overridden with more efficient version if desired",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(&&&) &&&",
        "normalized": "a b c d e b c-\u003ee b f-\u003ee b(c,f)",
        "package": "basic-prelude",
        "partial": "",
        "signature": "forall b c c'. a b c-\u003ea b c'-\u003ea b(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-42-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(*) *",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-42--42-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(**)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(**) **",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-42--42--42-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the input between the two argument arrows and combine\n   their output.  Note that this is in general not a functor.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall b c b' c'.  a b c -\u003e a b' c' -\u003e a (b, b') (c, c')",
        "fct-type": "function",
        "title": "(***)"
      },
      "index": {
        "description": "Split the input between the two argument arrows and combine their output Note that this is in general not functor The default definition may be overridden with more efficient version if desired",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(***) ***",
        "normalized": "a b c d e f b c-\u003ef d g-\u003ef(b,d)(c,g)",
        "package": "basic-prelude",
        "partial": "",
        "signature": "forall b c b' c'. a b c-\u003ea b' c'-\u003ea(b,b')(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence actions, discarding the value of the first argument.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "f a -\u003e f b -\u003e f b",
        "fct-type": "method",
        "title": "(*\u003e)"
      },
      "index": {
        "description": "Sequence actions discarding the value of the first argument",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(*\u003e) *\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-43-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(+) +",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-45-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(-) -",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-47-",
      "description": {
        "fct-descr": "\u003cp\u003efractional division\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "(/)"
      },
      "index": {
        "description": "fractional division",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(/) /",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-47--61-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(/=) /=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c) \u003c",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative binary operation\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall a.  f a -\u003e f a -\u003e f a",
        "fct-type": "function",
        "title": "(\u003c|\u003e)"
      },
      "index": {
        "description": "An associative binary operation",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c|\u003e) \u003c|\u003e",
        "normalized": "a b c d-\u003ec d-\u003ec d",
        "package": "basic-prelude",
        "partial": "",
        "signature": "forall a. f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--36-",
      "description": {
        "fct-descr": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e f b -\u003e f a",
        "fct-type": "method",
        "title": "(\u003c$)"
      },
      "index": {
        "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c$) \u003c$",
        "normalized": "a-\u003eb c-\u003eb a",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "An infix synonym for fmap",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--42-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence actions, discarding the value of the second argument.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "f a -\u003e f b -\u003e f a",
        "fct-type": "method",
        "title": "(\u003c*)"
      },
      "index": {
        "description": "Sequence actions discarding the value of the second argument",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c*) \u003c*",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequential application.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "method",
        "title": "(\u003c*\u003e)"
      },
      "index": {
        "description": "Sequential application",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c*\u003e) \u003c*\u003e",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "An alias for append",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "basic-prelude",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--61-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c=) \u003c=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-60-.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e Text -\u003e FilePath",
        "fct-type": "function",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "An alias for addExtension",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "FilePath-\u003eText-\u003eFilePath",
        "package": "basic-prelude",
        "partial": "",
        "signature": "FilePath-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-61--60--60-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
        "fct-type": "function",
        "title": "(=\u003c\u003c)"
      },
      "index": {
        "description": "Same as but with the arguments interchanged",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(=\u003c\u003c) =\u003c\u003c",
        "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-61--61-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(==) ==",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-62-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003e) \u003e",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-62--61-",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-type": "method",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003e=) \u003e=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-62--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-to-right Kleisli composition of monads.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
        "fct-type": "function",
        "title": "(\u003e=\u003e)"
      },
      "index": {
        "description": "Left-to-right Kleisli composition of monads",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003e=\u003e) \u003e=\u003e",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a -\u003e m b -\u003e m b",
        "fct-type": "method",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-62--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-type": "method",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-94-",
      "description": {
        "fct-descr": "\u003cp\u003eraise a number to a non-negative integral power\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-type": "function",
        "title": "(^)"
      },
      "index": {
        "description": "raise number to non-negative integral power",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(^) ^",
        "normalized": "a-\u003eb-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:-94--94-",
      "description": {
        "fct-descr": "\u003cp\u003eraise a number to an integral power\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-type": "function",
        "title": "(^^)"
      },
      "index": {
        "description": "raise number to an integral power",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(^^) ^^",
        "normalized": "a-\u003eb-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:.",
      "description": {
        "fct-descr": "\u003cp\u003emorphism composition\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall b c a.  cat b c -\u003e cat a b -\u003e cat a c",
        "fct-type": "function",
        "title": "(.)"
      },
      "index": {
        "description": "morphism composition",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "(.) .",
        "normalized": "a b c d e b c-\u003ee f b-\u003ee f c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "forall b c a. cat b c-\u003ecat a b-\u003ecat a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:Down",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Down a",
        "fct-type": "function",
        "title": "Down"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Down",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:EQ",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "EQ",
        "fct-type": "function",
        "title": "EQ"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "EQ",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "EQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:False",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "False",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "False",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:GT",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "GT",
        "fct-type": "function",
        "title": "GT"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "GT",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "GT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:Just",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Just a",
        "fct-type": "function",
        "title": "Just"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Just",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:LT",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "LT",
        "fct-type": "function",
        "title": "LT"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "LT",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "LT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:Left",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Left a",
        "fct-type": "function",
        "title": "Left"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Left",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:Nothing",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Nothing",
        "fct-type": "function",
        "title": "Nothing"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Nothing",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:Right",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Right b",
        "fct-type": "function",
        "title": "Right"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "Right",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:True",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "True",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "True",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:abs",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "abs"
      },
      "index": {
        "description": "Absolute value",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "abs",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:acos",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "acos"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "acos",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:acosh",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "acosh"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "acosh",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:asTypeOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.  It is usually\n used as an infix operator, and its typing forces its first argument\n (which is usually overloaded) to have the same type as the second.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "asTypeOf"
      },
      "index": {
        "description": "asTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the second",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "asTypeOf",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "Type Of",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:asin",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "asin"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "asin",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:asinh",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "asinh"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "asinh",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:atan",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "atan"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "atan",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:atan2",
      "description": {
        "fct-descr": "\u003cp\u003ea version of arctangent taking two real floating-point arguments.\n For real floating \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e computes the angle\n (from the positive x-axis) of the vector from the origin to the\n point \u003ccode\u003e(x,y)\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e returns a value in the range [\u003ccode\u003e-pi\u003c/code\u003e,\n \u003ccode\u003epi\u003c/code\u003e].  It follows the Common Lisp semantics for the origin when\n signed zeroes are supported.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y 1\u003c/code\u003e, with \u003ccode\u003ey\u003c/code\u003e in a type\n that is \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e, should return the same value as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e.\n A default definition of \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e is provided, but implementors\n can provide a more accurate implementation.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "atan2"
      },
      "index": {
        "description": "version of arctangent taking two real floating-point arguments For real floating and atan2 computes the angle from the positive x-axis of the vector from the origin to the point atan2 returns value in the range pi pi It follows the Common Lisp semantics for the origin when signed zeroes are supported atan2 with in type that is RealFloat should return the same value as atan default definition of atan2 is provided but implementors can provide more accurate implementation",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "atan2",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:atanh",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "atanh"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "atanh",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:basename",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s basename component.\n\u003c/p\u003e\u003cpre\u003e\n basename \"foo/bar.txt\" == \"bar\"\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-type": "function",
        "title": "basename"
      },
      "index": {
        "description": "Retrieve FilePath basename component basename foo bar.txt bar",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "basename",
        "normalized": "FilePath-\u003eFilePath",
        "package": "basic-prelude",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the \"acquire\" or \"release\" computations throw exceptions\n   any monadic side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/li\u003e\u003cli\u003e When the \"in-between\" computation throws an exception any\n   monadic side effects in \u003ccode\u003em\u003c/code\u003e produced by that computation will be\n   discarded but the side effects of the \"acquire\" or \"release\"\n   computations will be retained.\n\u003c/li\u003e\u003cli\u003e Also, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"release\"\n   computation will be discarded; it is run only for its side\n   effects in \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Generalized version of bracket Note When the acquire or release computations throw exceptions any monadic side effects in will be discarded When the in-between computation throws an exception any monadic side effects in produced by that computation will be discarded but the side effects of the acquire or release computations will be retained Also any monadic side effects in of the release computation will be discarded it is run only for its side effects in IO Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracket acquire release",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:catMaybes",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values. \n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Maybe a] -\u003e [a]",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "catMaybes",
        "normalized": "[Maybe a]-\u003e[a]",
        "package": "basic-prelude",
        "partial": "Maybes",
        "signature": "[Maybe a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a-\u003e (e -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "Generalized version of catch Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:ceiling",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b",
        "fct-type": "method",
        "title": "ceiling"
      },
      "index": {
        "description": "ceiling returns the least integer not less than",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "ceiling",
        "normalized": "a-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:compare",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e Ordering",
        "fct-type": "method",
        "title": "compare"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "compare",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:comparing",
      "description": {
        "fct-descr": "\u003cpre\u003e comparing p x y = compare (p x) (p y)\n\u003c/pre\u003e\u003cp\u003eUseful combinator for use in conjunction with the \u003ccode\u003exxxBy\u003c/code\u003e family\n of functions from \u003ca\u003eData.List\u003c/a\u003e, for example:\n\u003c/p\u003e\u003cpre\u003e   ... sortBy (comparing fst) ...\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(b -\u003e a) -\u003e b -\u003e b -\u003e Ordering",
        "fct-type": "function",
        "title": "comparing"
      },
      "index": {
        "description": "comparing compare Useful combinator for use in conjunction with the xxxBy family of functions from Data.List for example sortBy comparing fst",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "comparing",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eOrdering",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(b-\u003ea)-\u003eb-\u003eb-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:const",
      "description": {
        "fct-descr": "\u003cp\u003eConstant function.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-type": "function",
        "title": "const"
      },
      "index": {
        "description": "Constant function",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "const",
        "normalized": "a-\u003eb-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:cos",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "cos"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "cos",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:cosh",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "cosh"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "cosh",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:curry",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
        "fct-type": "function",
        "title": "curry"
      },
      "index": {
        "description": "curry converts an uncurried function to curried function",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "curry",
        "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "basic-prelude",
        "partial": "",
        "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:decodeFloat",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e applied to a real floating-point\n number returns the significand expressed as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and an\n appropriately scaled exponent (an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e).  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n yields \u003ccode\u003e(m,n)\u003c/code\u003e, then \u003ccode\u003ex\u003c/code\u003e is equal in value to \u003ccode\u003em*b^^n\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e\n is the floating-point radix, and furthermore, either \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e\n are both zero or else \u003ccode\u003eb^(d-1) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e m \u003c b^d\u003c/code\u003e, where \u003ccode\u003ed\u003c/code\u003e is\n the value of \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e 0 = (0,0)\u003c/code\u003e. If the type\n contains a negative zero, also \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e (-0.0) = (0,0)\u003c/code\u003e.\n \u003cem\u003eThe result of\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis unspecified if either of\u003c/em\u003e\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis\u003c/em\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e (Integer, Int)",
        "fct-type": "method",
        "title": "decodeFloat"
      },
      "index": {
        "description": "The function decodeFloat applied to real floating-point number returns the significand expressed as an Integer and an appropriately scaled exponent an Int If decodeFloat yields then is equal in value to where is the floating-point radix and furthermore either and are both zero or else d-1 abs where is the value of floatDigits In particular decodeFloat If the type contains negative zero also decodeFloat The result of decodeFloat is unspecified if either of isNaN or isInfinite is True",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "decodeFloat",
        "normalized": "a-\u003e(Integer,Int)",
        "package": "basic-prelude",
        "partial": "Float",
        "signature": "a-\u003e(Integer,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:directory",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s directory. If the path is already a\n directory, it is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "Retrieves the FilePath directory If the path is already directory it is returned unchanged",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "directory",
        "normalized": "FilePath-\u003eFilePath",
        "package": "basic-prelude",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:div",
      "description": {
        "fct-descr": "\u003cp\u003einteger division truncated toward negative infinity\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "div"
      },
      "index": {
        "description": "integer division truncated toward negative infinity",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "div",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:divMod",
      "description": {
        "fct-descr": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-type": "method",
        "title": "divMod"
      },
      "index": {
        "description": "simultaneous div and mod",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "divMod",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "basic-prelude",
        "partial": "Mod",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:either",
      "description": {
        "fct-descr": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n If the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
        "fct-type": "function",
        "title": "either"
      },
      "index": {
        "description": "Case analysis for the Either type If the value is Left apply the first function to if it is Right apply the second function to",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "either",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:encodeFloat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e performs the inverse of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e in the\n sense that for finite \u003ccode\u003ex\u003c/code\u003e with the exception of \u003ccode\u003e-0.0\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003euncurry\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) = x\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e m n\u003c/code\u003e is one of the two closest representable\n floating-point numbers to \u003ccode\u003em*b^^n\u003c/code\u003e (or \u003ccode\u003e&#177;Infinity\u003c/code\u003e if overflow\n occurs); usually the closer, but if \u003ccode\u003em\u003c/code\u003e contains too many bits,\n the result may be rounded in the wrong direction.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Integer -\u003e Int -\u003e a",
        "fct-type": "method",
        "title": "encodeFloat"
      },
      "index": {
        "description": "encodeFloat performs the inverse of decodeFloat in the sense that for finite with the exception of uncurry encodeFloat decodeFloat encodeFloat is one of the two closest representable floating-point numbers to or Infinity if overflow occurs usually the closer but if contains too many bits the result may be rounded in the wrong direction",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "encodeFloat",
        "normalized": "Integer-\u003eInt-\u003ea",
        "package": "basic-prelude",
        "partial": "Float",
        "signature": "Integer-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:enumFrom",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFrom"
      },
      "index": {
        "description": "Used in Haskell translation of",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "enumFrom",
        "normalized": "a-\u003e[a]",
        "package": "basic-prelude",
        "partial": "From",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:enumFromThen",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFromThen"
      },
      "index": {
        "description": "Used in Haskell translation of",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "enumFromThen",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "basic-prelude",
        "partial": "From Then",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:enumFromThenTo",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFromThenTo"
      },
      "index": {
        "description": "Used in Haskell translation of",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "enumFromThenTo",
        "normalized": "a-\u003ea-\u003ea-\u003e[a]",
        "package": "basic-prelude",
        "partial": "From Then To",
        "signature": "a-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Used in Haskell translation of n..m",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "basic-prelude",
        "partial": "From To",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:equating",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(b -\u003e a) -\u003e b -\u003e b -\u003e Bool",
        "fct-source": "src/CorePrelude.html#equating",
        "fct-type": "function",
        "title": "equating"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "equating",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(b-\u003ea)-\u003eb-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:error",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Char] -\u003e a",
        "fct-type": "function",
        "title": "error"
      },
      "index": {
        "description": "error stops execution and displays an error message",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "error",
        "normalized": "[Char]-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[Char]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:even",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "even",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:exp",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "exp"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "exp",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:exponent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e corresponds to the second component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e 0 = 0\u003c/code\u003e and for finite nonzero \u003ccode\u003ex\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x = snd (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) + \u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n If \u003ccode\u003ex\u003c/code\u003e is a finite floating-point number, it is equal in value to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e x * b ^^ \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e is the\n floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Int",
        "fct-type": "method",
        "title": "exponent"
      },
      "index": {
        "description": "exponent corresponds to the second component of decodeFloat exponent and for finite nonzero exponent snd decodeFloat floatDigits If is finite floating-point number it is equal in value to significand exponent where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "exponent",
        "normalized": "a-\u003eInt",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fail",
      "description": {
        "fct-descr": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "String -\u003e m a",
        "fct-type": "method",
        "title": "fail"
      },
      "index": {
        "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fail",
        "normalized": "String-\u003ea b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:filename",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s filename component.\n\u003c/p\u003e\u003cpre\u003e\n filename \"foo/bar.txt\" == \"bar.txt\"\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-type": "function",
        "title": "filename"
      },
      "index": {
        "description": "Retrieve FilePath filename component filename foo bar.txt bar.txt",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "filename",
        "normalized": "FilePath-\u003eFilePath",
        "package": "basic-prelude",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\"\n computation will be discarded.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a-\u003e m b-\u003e m a",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Generalized version of finally Note any monadic side effects in of the afterward computation will be discarded",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "finally",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall b c d.  a b c -\u003e a (b, d) (c, d)",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "first",
        "normalized": "a b c d e b c-\u003ee(b,f)(c,f)",
        "package": "basic-prelude",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(b,d)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:flip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes its (first) two arguments in the reverse order of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
        "fct-type": "function",
        "title": "flip"
      },
      "index": {
        "description": "flip takes its first two arguments in the reverse order of",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "flip",
        "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:floatDigits",
      "description": {
        "fct-descr": "\u003cp\u003ea constant function, returning the number of digits of\n \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e in the significand\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Int",
        "fct-type": "method",
        "title": "floatDigits"
      },
      "index": {
        "description": "constant function returning the number of digits of floatRadix in the significand",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "floatDigits",
        "normalized": "a-\u003eInt",
        "package": "basic-prelude",
        "partial": "Digits",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:floatRadix",
      "description": {
        "fct-descr": "\u003cp\u003ea constant function, returning the radix of the representation\n (often \u003ccode\u003e2\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Integer",
        "fct-type": "method",
        "title": "floatRadix"
      },
      "index": {
        "description": "constant function returning the radix of the representation often",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "floatRadix",
        "normalized": "a-\u003eInteger",
        "package": "basic-prelude",
        "partial": "Radix",
        "signature": "a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:floatRange",
      "description": {
        "fct-descr": "\u003cp\u003ea constant function, returning the lowest and highest values\n the exponent may assume\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e (Int, Int)",
        "fct-type": "method",
        "title": "floatRange"
      },
      "index": {
        "description": "constant function returning the lowest and highest values the exponent may assume",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "floatRange",
        "normalized": "a-\u003e(Int,Int)",
        "package": "basic-prelude",
        "partial": "Range",
        "signature": "a-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:floor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b",
        "fct-type": "method",
        "title": "floor"
      },
      "index": {
        "description": "floor returns the greatest integer not greater than",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "floor",
        "normalized": "a-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fmap",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Int",
        "fct-type": "method",
        "title": "fromEnum"
      },
      "index": {
        "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromEnum",
        "normalized": "a-\u003eInt",
        "package": "basic-prelude",
        "partial": "Enum",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromException",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "SomeException -\u003e Maybe e",
        "fct-type": "method",
        "title": "fromException"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromException",
        "normalized": "SomeException-\u003eMaybe a",
        "package": "basic-prelude",
        "partial": "Exception",
        "signature": "SomeException-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromInteger",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Integer -\u003e a",
        "fct-type": "method",
        "title": "fromInteger"
      },
      "index": {
        "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromInteger",
        "normalized": "Integer-\u003ea",
        "package": "basic-prelude",
        "partial": "Integer",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromIntegral",
      "description": {
        "fct-descr": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b",
        "fct-type": "function",
        "title": "fromIntegral"
      },
      "index": {
        "description": "general coercion from integral types",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromIntegral",
        "normalized": "a-\u003eb",
        "package": "basic-prelude",
        "partial": "Integral",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Maybe a -\u003e a",
        "fct-type": "function",
        "title": "fromMaybe"
      },
      "index": {
        "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromMaybe",
        "normalized": "a-\u003eMaybe a-\u003ea",
        "package": "basic-prelude",
        "partial": "Maybe",
        "signature": "a-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromRational",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e (that is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n A floating literal stands for an application of \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e\n to a value of type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, so such literals have type\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Rational -\u003e a",
        "fct-type": "method",
        "title": "fromRational"
      },
      "index": {
        "description": "Conversion from Rational that is Ratio Integer floating literal stands for an application of fromRational to value of type Rational so such literals have type Fractional",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromRational",
        "normalized": "Rational-\u003ea",
        "package": "basic-prelude",
        "partial": "Rational",
        "signature": "Rational-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fromString",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "String -\u003e a",
        "fct-type": "method",
        "title": "fromString"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "basic-prelude",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:fst",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a, b) -\u003e a",
        "fct-type": "function",
        "title": "fst"
      },
      "index": {
        "description": "Extract the first component of pair",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "fst",
        "normalized": "(a,b)-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a,b)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:getArgs",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m [Text]",
        "fct-source": "src/CorePrelude.html#getArgs",
        "fct-type": "function",
        "title": "getArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "getArgs",
        "normalized": "a[Text]",
        "package": "basic-prelude",
        "partial": "Args",
        "signature": "m[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-type": "function",
        "title": "handle"
      },
      "index": {
        "description": "Generalized version of handle Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "handle",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:hasExtension",
      "description": {
        "fct-descr": "\u003cp\u003eGet whether a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s last extension is the predicate.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "FilePath -\u003e Text -\u003e Bool",
        "fct-type": "function",
        "title": "hasExtension"
      },
      "index": {
        "description": "Get whether FilePath last extension is the predicate",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "hasExtension",
        "normalized": "FilePath-\u003eText-\u003eBool",
        "package": "basic-prelude",
        "partial": "Extension",
        "signature": "FilePath-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a hash value for the argument. Defined in terms of\n \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e and a default salt.\n\u003c/p\u003e\u003cp\u003e(See the \"Hashing and security\" section of the\n \u003ca\u003eData.Hashable\u003c/a\u003e documentation for an important note on\n working safely with untrusted user input.)\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Int",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Return hash value for the argument Defined in terms of hashWithSalt and default salt See the Hashing and security section of the Data.Hashable documentation for an important note on working safely with untrusted user input",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "hash",
        "normalized": "a-\u003eInt",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:hashWithSalt",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a hash value for the argument, using the given salt.\n\u003c/p\u003e\u003cp\u003eThe general contract of \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If a value is hashed using the same salt during distinct\n    runs of an application, the result must remain the\n    same. (This is necessary to make it possible to store hashes\n    on persistent media.)\n\u003c/li\u003e\u003cli\u003e If two values are equal according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then\n    applying the \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e method on each of the two values\n    \u003cem\u003emust\u003c/em\u003e produce the same integer result if the same salt is\n    used in each case.\n\u003c/li\u003e\u003cli\u003e It is \u003cem\u003enot\u003c/em\u003e required that if two values are unequal\n    according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then applying the\n    \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e method on each of the two values must produce\n    distinct integer results.  (Every programmer will be aware\n    that producing distinct integer results for unequal values\n    will improve the performance of hashing-based data\n    structures.)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis method can be used to compute different hash values for\n the same input by providing a different salt in each\n application of the method. This implies that any instance that\n defines \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e \u003cem\u003emust\u003c/em\u003e make use of the salt in its\n implementation.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Int -\u003e a -\u003e Int",
        "fct-type": "function",
        "title": "hashWithSalt"
      },
      "index": {
        "description": "Return hash value for the argument using the given salt The general contract of hashWithSalt is If value is hashed using the same salt during distinct runs of an application the result must remain the same This is necessary to make it possible to store hashes on persistent media If two values are equal according to the method then applying the hashWithSalt method on each of the two values must produce the same integer result if the same salt is used in each case It is not required that if two values are unequal according to the method then applying the hashWithSalt method on each of the two values must produce distinct integer results Every programmer will be aware that producing distinct integer results for unequal values will improve the performance of hashing-based data structures This method can be used to compute different hash values for the same input by providing different salt in each application of the method This implies that any instance that defines hashWithSalt must make use of the salt in its implementation",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "hashWithSalt",
        "normalized": "Int-\u003ea-\u003eInt",
        "package": "basic-prelude",
        "partial": "With Salt",
        "signature": "Int-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:id",
      "description": {
        "fct-descr": "\u003cp\u003ethe identity morphism\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall a.  cat a a",
        "fct-type": "function",
        "title": "id"
      },
      "index": {
        "description": "the identity morphism",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "id",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isDenormalized",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is too small to be represented in\n normalized format\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "method",
        "title": "isDenormalized"
      },
      "index": {
        "description": "True if the argument is too small to be represented in normalized format",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isDenormalized",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "Denormalized",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isIEEE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE floating point number\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "method",
        "title": "isIEEE"
      },
      "index": {
        "description": "True if the argument is an IEEE floating point number",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isIEEE",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "IEEE",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isInfinite",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE infinity or negative infinity\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "method",
        "title": "isInfinite"
      },
      "index": {
        "description": "True if the argument is an IEEE infinity or negative infinity",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isInfinite",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "Infinite",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isJust",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the\n form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Maybe a -\u003e Bool",
        "fct-type": "function",
        "title": "isJust"
      },
      "index": {
        "description": "The isJust function returns True iff its argument is of the form Just",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isJust",
        "normalized": "Maybe a-\u003eBool",
        "package": "basic-prelude",
        "partial": "Just",
        "signature": "Maybe a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isNaN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE \"not-a-number\" (NaN) value\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "method",
        "title": "isNaN"
      },
      "index": {
        "description": "True if the argument is an IEEE not-a-number NaN value",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isNaN",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "Na",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isNegativeZero",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE negative zero\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "method",
        "title": "isNegativeZero"
      },
      "index": {
        "description": "True if the argument is an IEEE negative zero",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isNegativeZero",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "Negative Zero",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:isNothing",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisNothing\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Maybe a -\u003e Bool",
        "fct-type": "function",
        "title": "isNothing"
      },
      "index": {
        "description": "The isNothing function returns True iff its argument is Nothing",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "isNothing",
        "normalized": "Maybe a-\u003eBool",
        "package": "basic-prelude",
        "partial": "Nothing",
        "signature": "Maybe a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:lefts",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts from a list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e all the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e elements\n All the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e elements are extracted in order.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Either a b] -\u003e [a]",
        "fct-type": "function",
        "title": "lefts"
      },
      "index": {
        "description": "Extracts from list of Either all the Left elements All the Left elements are extracted in order",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "lefts",
        "normalized": "[Either a b]-\u003e[a]",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[Either a b]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the argument monad to the constructed monad.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a -\u003e t m a",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Lift computation from the argument monad to the constructed monad",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "basic-prelude",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:listToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on an empty list\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the first element of the list.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-type": "function",
        "title": "listToMaybe"
      },
      "index": {
        "description": "The listToMaybe function returns Nothing on an empty list or Just where is the first element of the list",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "listToMaybe",
        "normalized": "[a]-\u003eMaybe a",
        "package": "basic-prelude",
        "partial": "To Maybe",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:log",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "log"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "log",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:logBase",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "logBase"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "logBase",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "Base",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e function is a version of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e which can throw\n out elements.  In particular, the functional argument returns\n something of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.  If this is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no element\n is added on to the result list.  If it just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is\n included in the result list.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "The mapMaybe function is version of map which can throw out elements In particular the functional argument returns something of type Maybe If this is Nothing no element is added on to the result list If it just Just then is included in the result list",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
        "package": "basic-prelude",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:max",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "max",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:maxBound",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "maxBound"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "maxBound",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:maybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "maybe",
        "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:maybeToList",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e function returns an empty list when given\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or a singleton list when not given \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Maybe a -\u003e [a]",
        "fct-type": "function",
        "title": "maybeToList"
      },
      "index": {
        "description": "The maybeToList function returns an empty list when given Nothing or singleton list when not given Nothing",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "maybeToList",
        "normalized": "Maybe a-\u003e[a]",
        "package": "basic-prelude",
        "partial": "To List",
        "signature": "Maybe a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[a] -\u003e a",
        "fct-type": "method",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "mconcat",
        "normalized": "[a]-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:mempty",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "mempty"
      },
      "index": {
        "description": "Identity of mappend",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "mempty",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:min",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "min",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:minBound",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "minBound"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "minBound",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:mod",
      "description": {
        "fct-descr": "\u003cp\u003einteger modulus, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `div` y)*y + (x `mod` y) == x\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mod"
      },
      "index": {
        "description": "integer modulus satisfying div mod",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "mod",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:negate",
      "description": {
        "fct-descr": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "negate"
      },
      "index": {
        "description": "Unary negation",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "negate",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Bool -\u003e Bool",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "Boolean not",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "not",
        "normalized": "Bool-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:odd",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Bool",
        "fct-type": "function",
        "title": "odd"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "odd",
        "normalized": "a-\u003eBool",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:on",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(*) `on` f = \\x y -\u003e f x * f y\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTypical usage: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e `on` \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlgebraic properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(*) `on` \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e = (*)\u003c/code\u003e (if \u003ccode\u003e(*) &#8713; {&#8869;, \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e &#8869;}\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e((*) `on` f) `on` g = (*) `on` (f . g)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on f . \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on g = \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e on (g . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(b -\u003e b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e c",
        "fct-type": "function",
        "title": "on"
      },
      "index": {
        "description": "on Typical usage sortBy compare on fst Algebraic properties on id if const on on on flip on flip on flip on",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "on",
        "normalized": "(a-\u003ea-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003ec-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(b-\u003eb-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\"\n computation will be discarded.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Generalized version of onException Note any monadic side effects in of the afterward computation will be discarded",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "basic-prelude",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:otherwise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "otherwise"
      },
      "index": {
        "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "otherwise",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:partitionEithers",
      "description": {
        "fct-descr": "\u003cp\u003ePartitions a list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e into two lists\n All the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e elements are extracted, in order, to the first\n component of the output.  Similarly the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e elements are extracted\n to the second component of the output.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Either a b] -\u003e ([a], [b])",
        "fct-type": "function",
        "title": "partitionEithers"
      },
      "index": {
        "description": "Partitions list of Either into two lists All the Left elements are extracted in order to the first component of the output Similarly the Right elements are extracted to the second component of the output",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "partitionEithers",
        "normalized": "[Either a b]-\u003e([a],[b])",
        "package": "basic-prelude",
        "partial": "Eithers",
        "signature": "[Either a b]-\u003e([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:pi",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "pi"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "pi",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:pred",
      "description": {
        "fct-descr": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "pred"
      },
      "index": {
        "description": "the predecessor of value For numeric types pred subtracts",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "pred",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:print",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e IO ()",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "print",
        "normalized": "a-\u003eIO()",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:properFraction",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e takes a real fractional number \u003ccode\u003ex\u003c/code\u003e\n and returns a pair \u003ccode\u003e(n,f)\u003c/code\u003e such that \u003ccode\u003ex = n+f\u003c/code\u003e, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is an integral number with the same sign as \u003ccode\u003ex\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e is a fraction with the same type and sign as \u003ccode\u003ex\u003c/code\u003e,\n   and with absolute value less than \u003ccode\u003e1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default definitions of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e functions are in terms of \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e (b, a)",
        "fct-type": "method",
        "title": "properFraction"
      },
      "index": {
        "description": "The function properFraction takes real fractional number and returns pair such that and is an integral number with the same sign as and is fraction with the same type and sign as and with absolute value less than The default definitions of the ceiling floor truncate and round functions are in terms of properFraction",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "properFraction",
        "normalized": "a-\u003e(b,a)",
        "package": "basic-prelude",
        "partial": "Fraction",
        "signature": "a-\u003e(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:pure",
      "description": {
        "fct-descr": "\u003cp\u003eLift a value.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e f a",
        "fct-type": "method",
        "title": "pure"
      },
      "index": {
        "description": "Lift value",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "pure",
        "normalized": "a-\u003eb a",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:putStrLn",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Text -\u003e m ()",
        "fct-source": "src/CorePrelude.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "putStrLn",
        "normalized": "Text-\u003ea()",
        "package": "basic-prelude",
        "partial": "Str Ln",
        "signature": "Text-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:quot",
      "description": {
        "fct-descr": "\u003cp\u003einteger division truncated toward zero\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "quot"
      },
      "index": {
        "description": "integer division truncated toward zero",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "quot",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:quotRem",
      "description": {
        "fct-descr": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-type": "method",
        "title": "quotRem"
      },
      "index": {
        "description": "simultaneous quot and rem",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "quotRem",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "basic-prelude",
        "partial": "Rem",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:readArgs",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a",
        "fct-source": "src/CorePrelude.html#readArgs",
        "fct-type": "function",
        "title": "readArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "readArgs",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:realToFrac",
      "description": {
        "fct-descr": "\u003cp\u003egeneral coercion to fractional types\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b",
        "fct-type": "function",
        "title": "realToFrac"
      },
      "index": {
        "description": "general coercion to fractional types",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "realToFrac",
        "normalized": "a-\u003eb",
        "package": "basic-prelude",
        "partial": "To Frac",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:recip",
      "description": {
        "fct-descr": "\u003cp\u003ereciprocal fraction\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "recip"
      },
      "index": {
        "description": "reciprocal fraction",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "recip",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:rem",
      "description": {
        "fct-descr": "\u003cp\u003einteger remainder, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `quot` y)*y + (x `rem` y) == x\n\u003c/pre\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "rem"
      },
      "index": {
        "description": "integer remainder satisfying quot rem",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "rem",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:return",
      "description": {
        "fct-descr": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e m a",
        "fct-type": "method",
        "title": "return"
      },
      "index": {
        "description": "Inject value into the monadic type",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "return",
        "normalized": "a-\u003eb a",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:rights",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts from a list of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e all the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e elements\n All the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e elements are extracted in order.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "[Either a b] -\u003e [b]",
        "fct-type": "function",
        "title": "rights"
      },
      "index": {
        "description": "Extracts from list of Either all the Right elements All the Right elements are extracted in order",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "rights",
        "normalized": "[Either a b]-\u003e[b]",
        "package": "basic-prelude",
        "partial": "",
        "signature": "[Either a b]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:round",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e;\n   the even integer if \u003ccode\u003ex\u003c/code\u003e is equidistant between two integers\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b",
        "fct-type": "method",
        "title": "round"
      },
      "index": {
        "description": "round returns the nearest integer to the even integer if is equidistant between two integers",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "round",
        "normalized": "a-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:scaleFloat",
      "description": {
        "fct-descr": "\u003cp\u003emultiplies a floating-point number by an integer power of the radix\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "scaleFloat"
      },
      "index": {
        "description": "multiplies floating-point number by an integer power of the radix",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "scaleFloat",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "Float",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "forall b c d.  a b c -\u003e a (d, b) (d, c)",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "second",
        "normalized": "a b c d e b c-\u003ee(f,b)(f,c)",
        "package": "basic-prelude",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(d,b)(d,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:seq",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-type": "function",
        "title": "seq"
      },
      "index": {
        "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "seq",
        "normalized": "a-\u003eb-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:significand",
      "description": {
        "fct-descr": "\u003cp\u003eThe first component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, scaled to lie in the open\n interval (\u003ccode\u003e-1\u003c/code\u003e,\u003ccode\u003e1\u003c/code\u003e), either \u003ccode\u003e0.0\u003c/code\u003e or of absolute value \u003ccode\u003e\u003e= 1/b\u003c/code\u003e,\n where \u003ccode\u003eb\u003c/code\u003e is the floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "significand"
      },
      "index": {
        "description": "The first component of decodeFloat scaled to lie in the open interval either or of absolute value where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "significand",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:signum",
      "description": {
        "fct-descr": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "signum"
      },
      "index": {
        "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "signum",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:sin",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "sin"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "sin",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:sinh",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "sinh"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "sinh",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:snd",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a, b) -\u003e b",
        "fct-type": "function",
        "title": "snd"
      },
      "index": {
        "description": "Extract the second component of pair",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "snd",
        "normalized": "(a,b)-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a,b)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:sqrt",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "sqrt",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:subtract",
      "description": {
        "fct-descr": "\u003cp\u003ethe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e-\u003c/code\u003e is treated specially in the Haskell grammar,\n \u003ccode\u003e(-\u003c/code\u003e \u003cem\u003ee\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is not a section, but an application of prefix negation.\n However, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is equivalent to the disallowed section.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "subtract"
      },
      "index": {
        "description": "the same as flip Because is treated specially in the Haskell grammar is not section but an application of prefix negation However subtract exp is equivalent to the disallowed section",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "subtract",
        "normalized": "a-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:succ",
      "description": {
        "fct-descr": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "succ"
      },
      "index": {
        "description": "the successor of value For numeric types succ adds",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "succ",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eSwap the components of a pair.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a, b) -\u003e (b, a)",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "Swap the components of pair",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "swap",
        "normalized": "(a,b)-\u003e(b,a)",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a,b)-\u003e(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:tan",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "tan"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "tan",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:tanh",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "tanh"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "tanh",
        "normalized": "a-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:throwIO",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "e -\u003e m a",
        "fct-type": "function",
        "title": "throwIO"
      },
      "index": {
        "description": "Generalized version of throwIO",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "throwIO",
        "normalized": "a-\u003eb c",
        "package": "basic-prelude",
        "partial": "IO",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:toEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "Int -\u003e a",
        "fct-type": "method",
        "title": "toEnum"
      },
      "index": {
        "description": "Convert from an Int",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "toEnum",
        "normalized": "Int-\u003ea",
        "package": "basic-prelude",
        "partial": "Enum",
        "signature": "Int-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:toException",
      "description": {
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "method",
        "title": "toException"
      },
      "index": {
        "description": "",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "toException",
        "normalized": "a-\u003eSomeException",
        "package": "basic-prelude",
        "partial": "Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:toInteger",
      "description": {
        "fct-descr": "\u003cp\u003econversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Integer",
        "fct-type": "method",
        "title": "toInteger"
      },
      "index": {
        "description": "conversion to Integer",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "toInteger",
        "normalized": "a-\u003eInteger",
        "package": "basic-prelude",
        "partial": "Integer",
        "signature": "a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:toRational",
      "description": {
        "fct-descr": "\u003cp\u003ethe rational equivalent of its real argument with full precision\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e Rational",
        "fct-type": "method",
        "title": "toRational"
      },
      "index": {
        "description": "the rational equivalent of its real argument with full precision",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "toRational",
        "normalized": "a-\u003eRational",
        "package": "basic-prelude",
        "partial": "Rational",
        "signature": "a-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:truncate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e b",
        "fct-type": "method",
        "title": "truncate"
      },
      "index": {
        "description": "truncate returns the integer nearest between zero and",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "truncate",
        "normalized": "a-\u003eb",
        "package": "basic-prelude",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "m a -\u003e m (Either e a)",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "Generalized version of try Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "try",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "basic-prelude",
        "partial": "",
        "signature": "m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:typeOf",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a value of type \u003ccode\u003ea\u003c/code\u003e and returns a concrete representation\n of that type.  The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by\n any instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, so that it is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as\n the argument.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a -\u003e TypeRep",
        "fct-type": "method",
        "title": "typeOf"
      },
      "index": {
        "description": "Takes value of type and returns concrete representation of that type The value of the argument should be ignored by any instance of Typeable so that it is safe to pass undefined as the argument",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "typeOf",
        "normalized": "a-\u003eTypeRep",
        "package": "basic-prelude",
        "partial": "Of",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:uncurry",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
        "fct-type": "function",
        "title": "uncurry"
      },
      "index": {
        "description": "uncurry converts curried function to function on pairs",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "uncurry",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:undefined",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "undefined"
      },
      "index": {
        "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "undefined",
        "normalized": "",
        "package": "basic-prelude",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/basic-prelude/docs/CorePrelude.html#v:until",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
        "fct-module": "CorePrelude",
        "fct-package": "basic-prelude",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "until"
      },
      "index": {
        "description": "until yields the result of applying until holds",
        "hierarchy": "CorePrelude",
        "module": "CorePrelude",
        "name": "until",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "basic-prelude",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  }
]