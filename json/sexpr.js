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
        "word": "sexpr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Sexpr is an S-expressionin the style of Rivest's Canonical\n S-expressions.  Atoms may be of any type, but String and\n ByteString have special support.  Rivest's implementation of\n S-expressions is unusual in supporting MIME type hints for each\n atom.  See http:\u003cem/\u003epeople.csail.mit.edu\u003cem\u003erivest\u003c/em\u003eSexp.txt\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Sexpr",
          "name": "Sexpr",
          "package": "sexpr",
          "source": "src/Codec-Sexpr.html",
          "type": "module"
        },
        "index": {
          "description": "Sexpr is an S-expressionin the style of Rivest Canonical S-expressions Atoms may be of any type but String and ByteString have special support Rivest implementation of S-expressions is unusual in supporting MIME type hints for each atom See http people.csail.mit.edu rivest Sexp.txt",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "Sexpr",
          "package": "sexpr",
          "partial": "Sexpr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "Sexpr",
          "package": "sexpr",
          "source": "src/Codec-Sexpr-Internal.html#Sexpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "Sexpr",
          "package": "sexpr",
          "partial": "Sexpr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#t:Sexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "advanced",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e Doc",
          "source": "src/Codec-Sexpr-Printer.html#advanced",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "advanced",
          "normalized": "Sexpr String-\u003eDoc",
          "package": "sexpr",
          "signature": "Sexpr String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:advanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "advancedSexpr",
          "package": "sexpr",
          "signature": "ReadP (Sexpr String)",
          "source": "src/Codec-Sexpr-Parser.html#advancedSexpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "advancedSexpr",
          "package": "sexpr",
          "partial": "Sexpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:advancedSexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "advancedString",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e String",
          "source": "src/Codec-Sexpr-Printer.html#advancedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "advancedString",
          "normalized": "Sexpr String-\u003eString",
          "package": "sexpr",
          "partial": "String",
          "signature": "Sexpr String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:advancedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an atom.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "atom",
          "package": "sexpr",
          "signature": "a -\u003e Sexpr a",
          "source": "src/Codec-Sexpr-Internal.html#atom",
          "type": "function"
        },
        "index": {
          "description": "Construct an atom",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "atom",
          "normalized": "a-\u003eSexpr a",
          "package": "sexpr",
          "signature": "a-\u003eSexpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "basic",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e Doc",
          "source": "src/Codec-Sexpr-Printer.html#basic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "basic",
          "normalized": "Sexpr String-\u003eDoc",
          "package": "sexpr",
          "signature": "Sexpr String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:basic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "basicString",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e String",
          "source": "src/Codec-Sexpr-Printer.html#basicString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "basicString",
          "normalized": "Sexpr String-\u003eString",
          "package": "sexpr",
          "partial": "String",
          "signature": "Sexpr String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:basicString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "canonical",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e ShowS",
          "source": "src/Codec-Sexpr-Printer.html#canonical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "canonical",
          "normalized": "Sexpr String-\u003eShowS",
          "package": "sexpr",
          "signature": "Sexpr String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:canonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor some applications it is wise to accept only very carefully\n specified input.  This is useful when you know you are receiving\n exactly a Canonical S-Expression.  It will read only a Canonical\n S-expression (and optional terminating NUL), but not the Basic or\n Advanced encodings.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "canonicalSexpr",
          "package": "sexpr",
          "signature": "ReadP (Sexpr String)",
          "source": "src/Codec-Sexpr-Parser.html#canonicalSexpr",
          "type": "function"
        },
        "index": {
          "description": "For some applications it is wise to accept only very carefully specified input This is useful when you know you are receiving exactly Canonical S-Expression It will read only Canonical S-expression and optional terminating NUL but not the Basic or Advanced encodings",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "canonicalSexpr",
          "package": "sexpr",
          "partial": "Sexpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:canonicalSexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "canonicalString",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e String",
          "source": "src/Codec-Sexpr-Printer.html#canonicalString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "canonicalString",
          "normalized": "Sexpr String-\u003eString",
          "package": "sexpr",
          "partial": "String",
          "signature": "Sexpr String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:canonicalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny atom whose hint is not specified is assumed to be \n \u003ca\u003etext/plain; charset=iso-8859-1\u003c/a\u003e.  This is that default value.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "defaultHint",
          "package": "sexpr",
          "signature": "String",
          "source": "src/Codec-Sexpr-Internal.html#defaultHint",
          "type": "function"
        },
        "index": {
          "description": "Any atom whose hint is not specified is assumed to be text plain charset iso-8859-1 This is that default value",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "defaultHint",
          "package": "sexpr",
          "partial": "Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:defaultHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efold f s\u003c/code\u003e applies f to each sub-S-expression of s, from each leaf\n to the root.  \u003ccode\u003ef\u003c/code\u003e need not preserve the shape of \u003ccode\u003es\u003c/code\u003e, in contrast\n to the shape-preserving \u003ccode\u003eTraversable\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "fold",
          "package": "sexpr",
          "signature": "(Sexpr t -\u003e Sexpr t) -\u003e Sexpr t -\u003e Sexpr t",
          "source": "src/Codec-Sexpr-Internal.html#fold",
          "type": "function"
        },
        "index": {
          "description": "fold applies to each sub-S-expression of from each leaf to the root need not preserve the shape of in contrast to the shape-preserving Traversable instance",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "fold",
          "normalized": "(Sexpr a-\u003eSexpr a)-\u003eSexpr a-\u003eSexpr a",
          "package": "sexpr",
          "signature": "(Sexpr t-\u003eSexpr t)-\u003eSexpr t-\u003eSexpr t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the hint of an atom.  Lists do not have hints, but all\n atoms have hints.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "hint",
          "package": "sexpr",
          "signature": "Sexpr a -\u003e Maybe String",
          "source": "src/Codec-Sexpr-Internal.html#hint",
          "type": "function"
        },
        "index": {
          "description": "Extract the hint of an atom Lists do not have hints but all atoms have hints",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "hint",
          "normalized": "Sexpr a-\u003eMaybe String",
          "package": "sexpr",
          "signature": "Sexpr a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:hint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an atom with a MIME type hint.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehintedAtom\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultHint\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eatom\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "hintedAtom",
          "package": "sexpr",
          "signature": "String -\u003e a -\u003e Sexpr a",
          "source": "src/Codec-Sexpr-Internal.html#hintedAtom",
          "type": "function"
        },
        "index": {
          "description": "Construct an atom with MIME type hint hintedAtom defaultHint atom",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "hintedAtom",
          "normalized": "String-\u003ea-\u003eSexpr a",
          "package": "sexpr",
          "partial": "Atom",
          "signature": "String-\u003ea-\u003eSexpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:hintedAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate for identifying atoms, whether or not they have\n explicit hints.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "isAtom",
          "package": "sexpr",
          "signature": "Sexpr a -\u003e Bool",
          "source": "src/Codec-Sexpr-Internal.html#isAtom",
          "type": "function"
        },
        "index": {
          "description": "predicate for identifying atoms whether or not they have explicit hints",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "isAtom",
          "normalized": "Sexpr a-\u003eBool",
          "package": "sexpr",
          "partial": "Atom",
          "signature": "Sexpr a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:isAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTokens may begin with any alphabetic character or the characters\n in \u003ccode\u003e\u003ca\u003e-./_:*+=\u003c/a\u003e\u003c/code\u003e ;\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "isInitialTokenChar",
          "package": "sexpr",
          "signature": "Char -\u003e Bool",
          "source": "src/Codec-Sexpr-Internal.html#isInitialTokenChar",
          "type": "function"
        },
        "index": {
          "description": "Tokens may begin with any alphabetic character or the characters in",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "isInitialTokenChar",
          "normalized": "Char-\u003eBool",
          "package": "sexpr",
          "partial": "Initial Token Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:isInitialTokenChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate for recognizing lists.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "isList",
          "package": "sexpr",
          "signature": "Sexpr a -\u003e Bool",
          "source": "src/Codec-Sexpr-Internal.html#isList",
          "type": "function"
        },
        "index": {
          "description": "predicate for recognizing lists",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "isList",
          "normalized": "Sexpr a-\u003eBool",
          "package": "sexpr",
          "partial": "List",
          "signature": "Sexpr a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:isList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly token characters and spaces don't need to be escaped when\n shown in the \u003ca\u003equoted\u003c/a\u003e syntax.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "isQuoteableChar",
          "package": "sexpr",
          "signature": "Char -\u003e Bool",
          "source": "src/Codec-Sexpr-Internal.html#isQuoteableChar",
          "type": "function"
        },
        "index": {
          "description": "Only token characters and spaces don need to be escaped when shown in the quoted syntax",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "isQuoteableChar",
          "normalized": "Char-\u003eBool",
          "package": "sexpr",
          "partial": "Quoteable Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:isQuoteableChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTokens may internally contain any of the characters legitimate to\n begin tokens, or any numeral.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "isTokenChar",
          "package": "sexpr",
          "signature": "Char -\u003e Bool",
          "source": "src/Codec-Sexpr-Internal.html#isTokenChar",
          "type": "function"
        },
        "index": {
          "description": "Tokens may internally contain any of the characters legitimate to begin tokens or any numeral",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "isTokenChar",
          "normalized": "Char-\u003eBool",
          "package": "sexpr",
          "partial": "Token Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:isTokenChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "list",
          "package": "sexpr",
          "signature": "[Sexpr a] -\u003e Sexpr a",
          "source": "src/Codec-Sexpr-Internal.html#list",
          "type": "function"
        },
        "index": {
          "description": "Construct list",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "list",
          "normalized": "[Sexpr a]-\u003eSexpr a",
          "package": "sexpr",
          "signature": "[Sexpr a]-\u003eSexpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "putCanonical",
          "package": "sexpr",
          "signature": "Sexpr String -\u003e Put",
          "source": "src/Codec-Sexpr-Printer.html#putCanonical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "putCanonical",
          "normalized": "Sexpr String-\u003ePut",
          "package": "sexpr",
          "partial": "Canonical",
          "signature": "Sexpr String-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:putCanonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Sexpr",
          "name": "putCanonicalBS",
          "package": "sexpr",
          "signature": "Sexpr ByteString -\u003e Put",
          "source": "src/Codec-Sexpr-Printer.html#putCanonicalBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "putCanonicalBS",
          "normalized": "Sexpr ByteString-\u003ePut",
          "package": "sexpr",
          "partial": "Canonical BS",
          "signature": "Sexpr ByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:putCanonicalBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSexpr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in canonical encoding.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "readCanonicalSexprString",
          "package": "sexpr",
          "signature": "String -\u003e Sexpr String",
          "source": "src/Codec-Sexpr-Parser.html#readCanonicalSexprString",
          "type": "function"
        },
        "index": {
          "description": "Read Sexpr String in canonical encoding",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "readCanonicalSexprString",
          "normalized": "String-\u003eSexpr String",
          "package": "sexpr",
          "partial": "Canonical Sexpr String",
          "signature": "String-\u003eSexpr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:readCanonicalSexprString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSexpr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ea\u003c/code\u003e.  The Sexpr\n may be in any encoding: Canonical, Basic, or Advanced.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "readSexpr",
          "package": "sexpr",
          "signature": "String -\u003e Sexpr a",
          "source": "src/Codec-Sexpr-Parser.html#readSexpr",
          "type": "function"
        },
        "index": {
          "description": "Read Sexpr using the Read instance for The Sexpr may be in any encoding Canonical Basic or Advanced",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "readSexpr",
          "normalized": "String-\u003eSexpr a",
          "package": "sexpr",
          "partial": "Sexpr",
          "signature": "String-\u003eSexpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:readSexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSexpr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in any encoding: Canonical, Basic, or Advanced.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "readSexprString",
          "package": "sexpr",
          "signature": "String -\u003e Sexpr String",
          "source": "src/Codec-Sexpr-Parser.html#readSexprString",
          "type": "function"
        },
        "index": {
          "description": "Read Sexpr String in any encoding Canonical Basic or Advanced",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "readSexprString",
          "normalized": "String-\u003eSexpr String",
          "package": "sexpr",
          "partial": "Sexpr String",
          "signature": "String-\u003eSexpr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:readSexprString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the content of an atom, discarding any MIME type hint.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "unAtom",
          "package": "sexpr",
          "signature": "Sexpr s -\u003e s",
          "source": "src/Codec-Sexpr-Internal.html#unAtom",
          "type": "function"
        },
        "index": {
          "description": "Extract the content of an atom discarding any MIME type hint",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "unAtom",
          "normalized": "Sexpr a-\u003ea",
          "package": "sexpr",
          "partial": "Atom",
          "signature": "Sexpr s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:unAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sub-S-expressions of a List.  If all you intend to do\n is traverse or map over that list, the Functor instance of\n S-expressions may work just fine.\n\u003c/p\u003e",
          "module": "Codec.Sexpr",
          "name": "unList",
          "package": "sexpr",
          "signature": "Sexpr s -\u003e [Sexpr s]",
          "source": "src/Codec-Sexpr-Internal.html#unList",
          "type": "function"
        },
        "index": {
          "description": "Extract the sub-S-expressions of List If all you intend to do is traverse or map over that list the Functor instance of S-expressions may work just fine",
          "hierarchy": "Codec Sexpr",
          "module": "Codec.Sexpr",
          "name": "unList",
          "normalized": "Sexpr a-\u003e[Sexpr a]",
          "package": "sexpr",
          "partial": "List",
          "signature": "Sexpr s-\u003e[Sexpr s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sexpr/docs/Codec-Sexpr.html#v:unList"
      }
    }
  ]
]