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
        "word": "verbalexpressions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library to make it easier to work with regular expressions. Based on the (original)\n    Javascript VerbalExpression library by jehna.\n\u003c/p\u003e\u003cp\u003eHere's some examples, first a http validator:\n\u003c/p\u003e\u003cpre\u003e let expr =    endOfLine\n                . anythingBut \" \"\n                . possibly \"www\"\n                . find \"://\"\n                . possibly \"s\"\n                . find \"http\"\n                . startOfLine\n                . searchGlobal\n                $ verEx\n\u003c/pre\u003e\u003cp\u003eYou can use VerEx's test to find if it matches.\n\u003c/p\u003e\u003cpre\u003e test \"http://www.google.com\" expr\n True\n\u003c/pre\u003e\u003cp\u003eThe actual expression is the following in regexp:\n\u003c/p\u003e\u003cpre\u003e ^(?:http)(?:s)?(?:://)(?:www.)?(?:[^ ]*)$\n\u003c/pre\u003e\u003cp\u003eReplacing a string.\n\u003c/p\u003e\u003cpre\u003e let replaceMe = \"Replace bird with a duck\"\n let expr2 = find \"bird\" $ verEx;\n foo = replace replaceMe \"duck\" expr2\n\u003c/pre\u003e\u003cp\u003eThe above can be shortened.\n\u003c/p\u003e\u003cpre\u003e bar = replace \"We have a red house\" \"blue\" . find \"red\" $ verEx\n\u003c/pre\u003e\u003cp\u003eBasic usage of Verbal Expressions is through a singleton, called\n    verEx, that compiles it to a regexp.\n\u003c/p\u003e\u003cpre\u003e let expr = (all of your terms) $ verEx \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Regex.VerbalExpressions",
          "name": "VerbalExpressions",
          "package": "verbalexpressions",
          "source": "src/Text-Regex-VerbalExpressions.html",
          "type": "module"
        },
        "index": {
          "description": "library to make it easier to work with regular expressions Based on the original Javascript VerbalExpression library by jehna Here some examples first http validator let expr endOfLine anythingBut possibly www find possibly find http startOfLine searchGlobal verEx You can use VerEx test to find if it matches test http www.google.com expr True The actual expression is the following in regexp http www Replacing string let replaceMe Replace bird with duck let expr2 find bird verEx foo replace replaceMe duck expr2 The above can be shortened bar replace We have red house blue find red verEx Basic usage of Verbal Expressions is through singleton called verEx that compiles it to regexp let expr all of your terms verEx",
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "VerbalExpressions",
          "package": "verbalexpressions",
          "partial": "Verbal Expressions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "add",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "add",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "alt",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "alt",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "anyOf",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#anyOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "anyOf",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Of",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:anyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "anything",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#anything",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "anything",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:anything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "anythingBut",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#anythingBut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "anythingBut",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "But",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:anythingBut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "br",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#br",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "br",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:br"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "endOfLine",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#endOfLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "endOfLine",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Of Line",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:endOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "endOfLine'",
          "package": "verbalexpressions",
          "signature": "Bool -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#endOfLine%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "endOfLine'",
          "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Of Line'",
          "signature": "Bool-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:endOfLine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "find",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "find",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "lineBreak",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#lineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "lineBreak",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Break",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:lineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "multiple",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#multiple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "multiple",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:multiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "possibly",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#possibly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "possibly",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:possibly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "range",
          "package": "verbalexpressions",
          "signature": "[String] -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "range",
          "normalized": "[String]-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "[String]-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "replace",
          "package": "verbalexpressions",
          "signature": "String -\u003e String -\u003e VerStruct -\u003e String",
          "source": "src/Text-Regex-VerbalExpressions.html#replace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "replace",
          "normalized": "String-\u003eString-\u003eVerStruct-\u003eString",
          "package": "verbalexpressions",
          "signature": "String-\u003eString-\u003eVerStruct-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchGlobal",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#searchGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchGlobal",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Global",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchGlobal'",
          "package": "verbalexpressions",
          "signature": "Bool -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#searchGlobal%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchGlobal'",
          "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Global'",
          "signature": "Bool-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchGlobal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchOneLine",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#searchOneLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchOneLine",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "One Line",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchOneLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchOneLine'",
          "package": "verbalexpressions",
          "signature": "Bool -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#searchOneLine%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "searchOneLine'",
          "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "One Line'",
          "signature": "Bool-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:searchOneLine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "something",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#something",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "something",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:something"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "somethingBut",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#somethingBut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "somethingBut",
          "normalized": "String-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "But",
          "signature": "String-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:somethingBut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "startOfLine",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#startOfLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "startOfLine",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Of Line",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:startOfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "startOfLine'",
          "package": "verbalexpressions",
          "signature": "Bool -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#startOfLine%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "startOfLine'",
          "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Of Line'",
          "signature": "Bool-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:startOfLine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "tab",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#tab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "tab",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "test",
          "package": "verbalexpressions",
          "signature": "String -\u003e VerStruct -\u003e Bool",
          "source": "src/Text-Regex-VerbalExpressions.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "test",
          "normalized": "String-\u003eVerStruct-\u003eBool",
          "package": "verbalexpressions",
          "signature": "String-\u003eVerStruct-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "verEx",
          "package": "verbalexpressions",
          "signature": "VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#verEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "verEx",
          "package": "verbalexpressions",
          "partial": "Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:verEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "withAnyCase",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#withAnyCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "withAnyCase",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Any Case",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:withAnyCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "withAnyCase'",
          "package": "verbalexpressions",
          "signature": "Bool -\u003e VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#withAnyCase%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "withAnyCase'",
          "normalized": "Bool-\u003eVerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "partial": "Any Case'",
          "signature": "Bool-\u003eVerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:withAnyCase-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Regex.VerbalExpressions",
          "name": "word",
          "package": "verbalexpressions",
          "signature": "VerStruct -\u003e VerStruct",
          "source": "src/Text-Regex-VerbalExpressions.html#word",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Regex VerbalExpressions",
          "module": "Text.Regex.VerbalExpressions",
          "name": "word",
          "normalized": "VerStruct-\u003eVerStruct",
          "package": "verbalexpressions",
          "signature": "VerStruct-\u003eVerStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verbalexpressions/docs/Text-Regex-VerbalExpressions.html#v:word"
      }
    }
  ]
]