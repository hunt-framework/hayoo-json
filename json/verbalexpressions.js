[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library to make it easier to work with regular expressions. Based on the (original)\n    Javascript VerbalExpression library by jehna.\n\u003c/p\u003e\u003cp\u003eHere's some examples, first a http validator:\n\u003c/p\u003e\u003cpre\u003e let expr =    endOfLine\n                . anythingBut \" \"\n                . possibly \"www\"\n                . find \"://\"\n                . possibly \"s\"\n                . find \"http\"\n                . startOfLine\n                . searchGlobal\n                $ verEx\n\u003c/pre\u003e\u003cp\u003eYou can use VerEx's test to find if it matches.\n\u003c/p\u003e\u003cpre\u003e test \"http://www.google.com\" expr\n True\n\u003c/pre\u003e\u003cp\u003eThe actual expression is the following in regexp:\n\u003c/p\u003e\u003cpre\u003e ^(?:http)(?:s)?(?:://)(?:www.)?(?:[^ ]*)$\n\u003c/pre\u003e\u003cp\u003eReplacing a string.\n\u003c/p\u003e\u003cpre\u003e let replaceMe = \"Replace bird with a duck\"\n let expr2 = find \"bird\" $ verEx;\n foo = replace replaceMe \"duck\" expr2\n\u003c/pre\u003e\u003cp\u003eThe above can be shortened.\n\u003c/p\u003e\u003cpre\u003e bar = replace \"We have a red house\" \"blue\" . find \"red\" $ verEx\n\u003c/pre\u003e\u003cp\u003eBasic usage of Verbal Expressions is through a singleton, called\n    verEx, that compiles it to a regexp.\n\u003c/p\u003e\u003cpre\u003e let expr = (all of your terms) $ verEx \n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "module",
        "fct-source": "src/Text-Regex-VerbalExpressions.html",
        "fct-type": "module",
        "title": "VerbalExpressions"
      },
      "index": {
        "description": "library to make it easier to work with regular expressions Based on the original Javascript VerbalExpression library by jehna Here some examples first http validator let expr endOfLine anythingBut possibly www find possibly find http startOfLine searchGlobal verEx You can use VerEx test to find if it matches test http www.google.com expr True The actual expression is the following in regexp http www Replacing string let replaceMe Replace bird with duck let expr2 find bird verEx foo replace replaceMe duck expr2 The above can be shortened bar replace We have red house blue find red verEx Basic usage of Verbal Expressions is through singleton called verEx that compiles it to regexp let expr all of your terms verEx",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "VerbalExpressions",
        "normalized": "",
        "package": "verbalexpressions",
        "partial": "Verbal Expressions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:add",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "add",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:alt",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#alt",
        "fct-type": "function",
        "title": "alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "alt",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:anyOf",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#anyOf",
        "fct-type": "function",
        "title": "anyOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "anyOf",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Of",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:anything",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#anything",
        "fct-type": "function",
        "title": "anything"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "anything",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:anythingBut",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#anythingBut",
        "fct-type": "function",
        "title": "anythingBut"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "anythingBut",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "But",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:br",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#br",
        "fct-type": "function",
        "title": "br"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "br",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:endOfLine",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#endOfLine",
        "fct-type": "function",
        "title": "endOfLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "endOfLine",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Of Line",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:endOfLine-39-",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "Bool -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#endOfLine%27",
        "fct-type": "function",
        "title": "endOfLine'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "endOfLine'",
        "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Of Line'",
        "signature": "Bool-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:find",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "find",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:lineBreak",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#lineBreak",
        "fct-type": "function",
        "title": "lineBreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "lineBreak",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Break",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:multiple",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#multiple",
        "fct-type": "function",
        "title": "multiple"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "multiple",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:possibly",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#possibly",
        "fct-type": "function",
        "title": "possibly"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "possibly",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:range",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "[String] -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "range",
        "normalized": "[String]-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "[String]-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:replace",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e String -\u003e VerStruct -\u003e String",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "replace",
        "normalized": "String-\u003eString-\u003eVerStruct-\u003eString",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eString-\u003eVerStruct-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchGlobal",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#searchGlobal",
        "fct-type": "function",
        "title": "searchGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "searchGlobal",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Global",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchGlobal-39-",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "Bool -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#searchGlobal%27",
        "fct-type": "function",
        "title": "searchGlobal'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "searchGlobal'",
        "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Global'",
        "signature": "Bool-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchOneLine",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#searchOneLine",
        "fct-type": "function",
        "title": "searchOneLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "searchOneLine",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "One Line",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchOneLine-39-",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "Bool -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#searchOneLine%27",
        "fct-type": "function",
        "title": "searchOneLine'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "searchOneLine'",
        "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "One Line'",
        "signature": "Bool-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:something",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#something",
        "fct-type": "function",
        "title": "something"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "something",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:somethingBut",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#somethingBut",
        "fct-type": "function",
        "title": "somethingBut"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "somethingBut",
        "normalized": "String-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "But",
        "signature": "String-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:startOfLine",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#startOfLine",
        "fct-type": "function",
        "title": "startOfLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "startOfLine",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Of Line",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:startOfLine-39-",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "Bool -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#startOfLine%27",
        "fct-type": "function",
        "title": "startOfLine'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "startOfLine'",
        "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Of Line'",
        "signature": "Bool-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:tab",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#tab",
        "fct-type": "function",
        "title": "tab"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "tab",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:test",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "String -\u003e VerStruct -\u003e Bool",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "test",
        "normalized": "String-\u003eVerStruct-\u003eBool",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "String-\u003eVerStruct-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:verEx",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#verEx",
        "fct-type": "function",
        "title": "verEx"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "verEx",
        "normalized": "",
        "package": "verbalexpressions",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:withAnyCase",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#withAnyCase",
        "fct-type": "function",
        "title": "withAnyCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "withAnyCase",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Any Case",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:withAnyCase-39-",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "Bool -\u003e VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#withAnyCase%27",
        "fct-type": "function",
        "title": "withAnyCase'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "withAnyCase'",
        "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "Any Case'",
        "signature": "Bool-\u003eVerStruct-\u003eVerStruct"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:word",
      "description": {
        "fct-module": "Text.Regex.VerbalExpressions",
        "fct-package": "verbalexpressions",
        "fct-signature": "VerStruct -\u003e VerStruct",
        "fct-source": "src/Text-Regex-VerbalExpressions.html#word",
        "fct-type": "function",
        "title": "word"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex VerbalExpressions",
        "module": "Text.Regex.VerbalExpressions",
        "name": "word",
        "normalized": "VerStruct-\u003eVerStruct",
        "package": "verbalexpressions",
        "partial": "",
        "signature": "VerStruct-\u003eVerStruct"
      }
    }
  }
]