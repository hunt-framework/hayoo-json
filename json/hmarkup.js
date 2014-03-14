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
        "word": "hmarkup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMarkup parsing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HMarkup.Parse",
          "name": "Parse",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Markup parsing",
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "Parse",
          "package": "hmarkup",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "anyCharToUnixNL",
          "package": "hmarkup",
          "signature": "Parser Char",
          "source": "src/Text-HMarkup-Parse.html#anyCharToUnixNL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "anyCharToUnixNL",
          "package": "hmarkup",
          "partial": "Char To Unix NL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:anyCharToUnixNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "endBlock",
          "package": "hmarkup",
          "signature": "Parser ()",
          "source": "src/Text-HMarkup-Parse.html#endBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "endBlock",
          "normalized": "Parser()",
          "package": "hmarkup",
          "partial": "Block",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:endBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "followedBy",
          "package": "hmarkup",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Text-HMarkup-Parse.html#followedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "followedBy",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "hmarkup",
          "partial": "By",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:followedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "inFirstColumn",
          "package": "hmarkup",
          "signature": "GenParser tok st a -\u003e GenParser tok st a",
          "source": "src/Text-HMarkup-Parse.html#inFirstColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "inFirstColumn",
          "normalized": "GenParser a b c-\u003eGenParser a b c",
          "package": "hmarkup",
          "partial": "First Column",
          "signature": "GenParser tok st a-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:inFirstColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "isSpecial",
          "package": "hmarkup",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-HMarkup-Parse.html#isSpecial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "isSpecial",
          "normalized": "Char-\u003eBool",
          "package": "hmarkup",
          "partial": "Special",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:isSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "manyTill1",
          "package": "hmarkup",
          "signature": "GenParser tok st a -\u003e GenParser tok st end -\u003e GenParser tok st [a]",
          "source": "src/Text-HMarkup-Parse.html#manyTill1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "manyTill1",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "hmarkup",
          "partial": "Till",
          "signature": "GenParser tok st a-\u003eGenParser tok st end-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:manyTill1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "namedEntity",
          "package": "hmarkup",
          "signature": "Parser String",
          "source": "src/Text-HMarkup-Parse.html#namedEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "namedEntity",
          "package": "hmarkup",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:namedEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "nl",
          "package": "hmarkup",
          "signature": "Parser ()",
          "source": "src/Text-HMarkup-Parse.html#nl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "nl",
          "normalized": "Parser()",
          "package": "hmarkup",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "numEntity",
          "package": "hmarkup",
          "signature": "Parser Char",
          "source": "src/Text-HMarkup-Parse.html#numEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "numEntity",
          "package": "hmarkup",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:numEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pBlock",
          "package": "hmarkup",
          "signature": "Parser Block",
          "source": "src/Text-HMarkup-Parse.html#pBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pBlock",
          "package": "hmarkup",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pChunk",
          "package": "hmarkup",
          "signature": "Parser Block",
          "source": "src/Text-HMarkup-Parse.html#pChunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pChunk",
          "package": "hmarkup",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pDecInt",
          "package": "hmarkup",
          "signature": "Parser Int",
          "source": "src/Text-HMarkup-Parse.html#pDecInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pDecInt",
          "package": "hmarkup",
          "partial": "Dec Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pDecInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pEmph",
          "package": "hmarkup",
          "signature": "Parser Text",
          "source": "src/Text-HMarkup-Parse.html#pEmph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pEmph",
          "package": "hmarkup",
          "partial": "Emph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pEmph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pEntity",
          "package": "hmarkup",
          "signature": "Parser String",
          "source": "src/Text-HMarkup-Parse.html#pEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pEntity",
          "package": "hmarkup",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pEsc",
          "package": "hmarkup",
          "signature": "Parser Char",
          "source": "src/Text-HMarkup-Parse.html#pEsc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pEsc",
          "package": "hmarkup",
          "partial": "Esc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pEsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pHeader",
          "package": "hmarkup",
          "signature": "Parser Block",
          "source": "src/Text-HMarkup-Parse.html#pHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pHeader",
          "package": "hmarkup",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pHexInt",
          "package": "hmarkup",
          "signature": "Parser Int",
          "source": "src/Text-HMarkup-Parse.html#pHexInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pHexInt",
          "package": "hmarkup",
          "partial": "Hex Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pHexInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pIdent",
          "package": "hmarkup",
          "signature": "Parser String",
          "source": "src/Text-HMarkup-Parse.html#pIdent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pIdent",
          "package": "hmarkup",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pItem",
          "package": "hmarkup",
          "signature": "Parser [Text]",
          "source": "src/Text-HMarkup-Parse.html#pItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pItem",
          "normalized": "Parser[Text]",
          "package": "hmarkup",
          "partial": "Item",
          "signature": "Parser[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pItemList",
          "package": "hmarkup",
          "signature": "Parser Block",
          "source": "src/Text-HMarkup-Parse.html#pItemList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pItemList",
          "package": "hmarkup",
          "partial": "Item List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pItemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pMarkup",
          "package": "hmarkup",
          "signature": "Parser Doc",
          "source": "src/Text-HMarkup-Parse.html#pMarkup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pMarkup",
          "package": "hmarkup",
          "partial": "Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pMarkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pPara",
          "package": "hmarkup",
          "signature": "Parser Block",
          "source": "src/Text-HMarkup-Parse.html#pPara",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pPara",
          "package": "hmarkup",
          "partial": "Para",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pPara"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pRef",
          "package": "hmarkup",
          "signature": "Parser Text",
          "source": "src/Text-HMarkup-Parse.html#pRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pRef",
          "package": "hmarkup",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pTT",
          "package": "hmarkup",
          "signature": "Parser Text",
          "source": "src/Text-HMarkup-Parse.html#pTT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pTT",
          "package": "hmarkup",
          "partial": "TT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pTT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pText",
          "package": "hmarkup",
          "signature": "Parser [Text]",
          "source": "src/Text-HMarkup-Parse.html#pText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pText",
          "normalized": "Parser[Text]",
          "package": "hmarkup",
          "partial": "Text",
          "signature": "Parser[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pTextsTill",
          "package": "hmarkup",
          "signature": "Parser a -\u003e Parser [Text]",
          "source": "src/Text-HMarkup-Parse.html#pTextsTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pTextsTill",
          "normalized": "Parser a-\u003eParser[Text]",
          "package": "hmarkup",
          "partial": "Texts Till",
          "signature": "Parser a-\u003eParser[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pTextsTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pToken",
          "package": "hmarkup",
          "signature": "Parser String",
          "source": "src/Text-HMarkup-Parse.html#pToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pToken",
          "package": "hmarkup",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pTokenPiece",
          "package": "hmarkup",
          "signature": "Parser String",
          "source": "src/Text-HMarkup-Parse.html#pTokenPiece",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pTokenPiece",
          "package": "hmarkup",
          "partial": "Token Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pTokenPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pURI",
          "package": "hmarkup",
          "signature": "Parser URI",
          "source": "src/Text-HMarkup-Parse.html#pURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pURI",
          "package": "hmarkup",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "pWord",
          "package": "hmarkup",
          "signature": "Parser Text",
          "source": "src/Text-HMarkup-Parse.html#pWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "pWord",
          "package": "hmarkup",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:pWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "parseMarkup",
          "package": "hmarkup",
          "signature": "String -\u003e String -\u003e m Doc",
          "source": "src/Text-HMarkup-Parse.html#parseMarkup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "parseMarkup",
          "normalized": "String-\u003eString-\u003ea Doc",
          "package": "hmarkup",
          "partial": "Markup",
          "signature": "String-\u003eString-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:parseMarkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "skipWhite",
          "package": "hmarkup",
          "signature": "Parser ()",
          "source": "src/Text-HMarkup-Parse.html#skipWhite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "skipWhite",
          "normalized": "Parser()",
          "package": "hmarkup",
          "partial": "White",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:skipWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "sp",
          "package": "hmarkup",
          "signature": "Parser ()",
          "source": "src/Text-HMarkup-Parse.html#sp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "sp",
          "normalized": "Parser()",
          "package": "hmarkup",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "sps",
          "package": "hmarkup",
          "signature": "Parser ()",
          "source": "src/Text-HMarkup-Parse.html#sps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "sps",
          "normalized": "Parser()",
          "package": "hmarkup",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:sps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Parse",
          "name": "white",
          "package": "hmarkup",
          "signature": "Parser Bool",
          "source": "src/Text-HMarkup-Parse.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Parse",
          "module": "Text.HMarkup.Parse",
          "name": "white",
          "package": "hmarkup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Parse.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Types",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Types",
          "package": "hmarkup",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Block",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-Types.html#Block",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Block",
          "package": "hmarkup",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Doc",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-Types.html#Doc",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Doc",
          "package": "hmarkup",
          "partial": "Doc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Text",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-Types.html#Text",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Text",
          "package": "hmarkup",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Chunk",
          "package": "hmarkup",
          "signature": "Chunk String String",
          "source": "src/Text-HMarkup-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Chunk",
          "package": "hmarkup",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Doc",
          "package": "hmarkup",
          "signature": "Doc [Block]",
          "source": "src/Text-HMarkup-Types.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Doc",
          "normalized": "Doc[Block]",
          "package": "hmarkup",
          "partial": "Doc",
          "signature": "Doc[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Emph",
          "package": "hmarkup",
          "signature": "Emph [Text]",
          "source": "src/Text-HMarkup-Types.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Emph",
          "normalized": "Emph[Text]",
          "package": "hmarkup",
          "partial": "Emph",
          "signature": "Emph[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Emph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Header",
          "package": "hmarkup",
          "signature": "Header Int [Text]",
          "source": "src/Text-HMarkup-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Header",
          "normalized": "Header Int[Text]",
          "package": "hmarkup",
          "partial": "Header",
          "signature": "Header Int[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "ItemList",
          "package": "hmarkup",
          "signature": "ItemList [[Text]]",
          "source": "src/Text-HMarkup-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "ItemList",
          "normalized": "ItemList[[Text]]",
          "package": "hmarkup",
          "partial": "Item List",
          "signature": "ItemList[[Text]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:ItemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Para",
          "package": "hmarkup",
          "signature": "Para [Text]",
          "source": "src/Text-HMarkup-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Para",
          "normalized": "Para[Text]",
          "package": "hmarkup",
          "partial": "Para",
          "signature": "Para[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Ref",
          "package": "hmarkup",
          "signature": "Ref URI [Text]",
          "source": "src/Text-HMarkup-Types.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Ref",
          "normalized": "Ref URI[Text]",
          "package": "hmarkup",
          "partial": "Ref",
          "signature": "Ref URI[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "TT",
          "package": "hmarkup",
          "signature": "TT [Text]",
          "source": "src/Text-HMarkup-Types.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "TT",
          "normalized": "TT[Text]",
          "package": "hmarkup",
          "partial": "TT",
          "signature": "TT[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:TT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "WhiteSpace",
          "package": "hmarkup",
          "signature": "WhiteSpace",
          "source": "src/Text-HMarkup-Types.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "WhiteSpace",
          "package": "hmarkup",
          "partial": "White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:WhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.Types",
          "name": "Word",
          "package": "hmarkup",
          "signature": "Word String",
          "source": "src/Text-HMarkup-Types.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup Types",
          "module": "Text.HMarkup.Types",
          "name": "Word",
          "package": "hmarkup",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-Types.html#v:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConverting markup to HTML\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HMarkup.XHtml",
          "name": "XHtml",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-XHtml.html",
          "type": "module"
        },
        "index": {
          "description": "Converting markup to HTML",
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "XHtml",
          "package": "hmarkup",
          "partial": "XHtml",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "MarkupXHtmlFormat",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "MarkupXHtmlFormat",
          "package": "hmarkup",
          "partial": "Markup XHtml Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#t:MarkupXHtmlFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "MarkupXHtmlPrefs",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlPrefs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "MarkupXHtmlPrefs",
          "package": "hmarkup",
          "partial": "Markup XHtml Prefs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#t:MarkupXHtmlPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "ChunkFormat",
          "package": "hmarkup",
          "signature": "ChunkFormat",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "ChunkFormat",
          "package": "hmarkup",
          "partial": "Chunk Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:ChunkFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HMarkup.XHtml\",\"Text.HMarkup\"]",
          "name": "MarkupXHtmlPrefs",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlPrefs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:MarkupXHtmlPrefs\",\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#v:MarkupXHtmlPrefs\"]"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "MarkupXHtmlPrefs",
          "package": "hmarkup",
          "partial": "Markup XHtml Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:MarkupXHtmlPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "RefFormat",
          "package": "hmarkup",
          "signature": "RefFormat",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "RefFormat",
          "package": "hmarkup",
          "partial": "Ref Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:RefFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HMarkup.XHtml\",\"Text.HMarkup\"]",
          "name": "defaultMarkupXHtmlPrefs",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m",
          "source": "src/Text-HMarkup-XHtml.html#defaultMarkupXHtmlPrefs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:defaultMarkupXHtmlPrefs\",\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#v:defaultMarkupXHtmlPrefs\"]"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "defaultMarkupXHtmlPrefs",
          "package": "hmarkup",
          "partial": "Markup XHtml Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:defaultMarkupXHtmlPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "docToHtml",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e Doc -\u003e m Html",
          "source": "src/Text-HMarkup-XHtml.html#docToHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "docToHtml",
          "normalized": "MarkupXHtmlPrefs a-\u003eDoc-\u003ea Html",
          "package": "hmarkup",
          "partial": "To Html",
          "signature": "MarkupXHtmlPrefs m-\u003eDoc-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:docToHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "formatChunk",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e String -\u003e m Html",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "formatChunk",
          "normalized": "MarkupXHtmlPrefs a-\u003eString-\u003ea Html",
          "package": "hmarkup",
          "partial": "Chunk",
          "signature": "MarkupXHtmlPrefs m-\u003eString-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:formatChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "formatName",
          "package": "hmarkup",
          "signature": "String",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "formatName",
          "package": "hmarkup",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:formatName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "formatRef",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e URI -\u003e [Text] -\u003e m Html",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "formatRef",
          "normalized": "MarkupXHtmlPrefs a-\u003eURI-\u003e[Text]-\u003ea Html",
          "package": "hmarkup",
          "partial": "Ref",
          "signature": "MarkupXHtmlPrefs m-\u003eURI-\u003e[Text]-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:formatRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, all relative URIs will be resolved with this as a base.\n\u003c/p\u003e",
          "module": "[\"Text.HMarkup.XHtml\",\"Text.HMarkup\"]",
          "name": "markupBaseURI",
          "package": "hmarkup",
          "signature": "Maybe URI",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlPrefs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:markupBaseURI\",\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#v:markupBaseURI\"]"
        },
        "index": {
          "description": "If set all relative URIs will be resolved with this as base",
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "markupBaseURI",
          "package": "hmarkup",
          "partial": "Base URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:markupBaseURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HMarkup.XHtml\",\"Text.HMarkup\"]",
          "name": "markupFormats",
          "package": "hmarkup",
          "signature": "[MarkupXHtmlFormat m]",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlPrefs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:markupFormats\",\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#v:markupFormats\"]"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "markupFormats",
          "normalized": "[MarkupXHtmlFormat a]",
          "package": "hmarkup",
          "partial": "Formats",
          "signature": "[MarkupXHtmlFormat m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:markupFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "markupURI",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e URI -\u003e URI",
          "source": "src/Text-HMarkup-XHtml.html#markupURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "markupURI",
          "normalized": "MarkupXHtmlPrefs a-\u003eURI-\u003eURI",
          "package": "hmarkup",
          "partial": "URI",
          "signature": "MarkupXHtmlPrefs m-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:markupURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "markupURL",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e URI -\u003e URL",
          "source": "src/Text-HMarkup-XHtml.html#markupURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "markupURL",
          "normalized": "MarkupXHtmlPrefs a-\u003eURI-\u003eURL",
          "package": "hmarkup",
          "partial": "URL",
          "signature": "MarkupXHtmlPrefs m-\u003eURI-\u003eURL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:markupURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.HMarkup.XHtml\",\"Text.HMarkup\"]",
          "name": "standardMarkupFormats",
          "package": "hmarkup",
          "signature": "[MarkupXHtmlFormat m]",
          "source": "src/Text-HMarkup-XHtml.html#standardMarkupFormats",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:standardMarkupFormats\",\"http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#v:standardMarkupFormats\"]"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "standardMarkupFormats",
          "normalized": "[MarkupXHtmlFormat a]",
          "package": "hmarkup",
          "partial": "Markup Formats",
          "signature": "[MarkupXHtmlFormat m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:standardMarkupFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "useChunkFormat",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e String -\u003e String -\u003e m Html",
          "source": "src/Text-HMarkup-XHtml.html#useChunkFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "useChunkFormat",
          "normalized": "MarkupXHtmlPrefs a-\u003eString-\u003eString-\u003ea Html",
          "package": "hmarkup",
          "partial": "Chunk Format",
          "signature": "MarkupXHtmlPrefs m-\u003eString-\u003eString-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:useChunkFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup.XHtml",
          "name": "useRefFormat",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m -\u003e String -\u003e URI -\u003e [Text] -\u003e m Html",
          "source": "src/Text-HMarkup-XHtml.html#useRefFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HMarkup XHtml",
          "module": "Text.HMarkup.XHtml",
          "name": "useRefFormat",
          "normalized": "MarkupXHtmlPrefs a-\u003eString-\u003eURI-\u003e[Text]-\u003ea Html",
          "package": "hmarkup",
          "partial": "Ref Format",
          "signature": "MarkupXHtmlPrefs m-\u003eString-\u003eURI-\u003e[Text]-\u003em Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup-XHtml.html#v:useRefFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup",
          "name": "HMarkup",
          "package": "hmarkup",
          "source": "src/Text-HMarkup.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HMarkup",
          "module": "Text.HMarkup",
          "name": "HMarkup",
          "package": "hmarkup",
          "partial": "HMarkup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup",
          "name": "MarkupXHtmlFormat",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HMarkup",
          "module": "Text.HMarkup",
          "name": "MarkupXHtmlFormat",
          "package": "hmarkup",
          "partial": "Markup XHtml Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#t:MarkupXHtmlFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HMarkup",
          "name": "MarkupXHtmlPrefs",
          "package": "hmarkup",
          "source": "src/Text-HMarkup-XHtml.html#MarkupXHtmlPrefs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HMarkup",
          "module": "Text.HMarkup",
          "name": "MarkupXHtmlPrefs",
          "package": "hmarkup",
          "partial": "Markup XHtml Prefs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#t:MarkupXHtmlPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse some markup and format it as HTML.\n\u003c/p\u003e",
          "module": "Text.HMarkup",
          "name": "markupToHtml",
          "package": "hmarkup",
          "signature": "MarkupXHtmlPrefs m-\u003e String-\u003e m (Either String Html)",
          "type": "function"
        },
        "index": {
          "description": "Parse some markup and format it as HTML",
          "hierarchy": "Text HMarkup",
          "module": "Text.HMarkup",
          "name": "markupToHtml",
          "normalized": "MarkupXHtmlPrefs a-\u003eString-\u003ea(Either String Html)",
          "package": "hmarkup",
          "partial": "To Html",
          "signature": "MarkupXHtmlPrefs m-\u003eString-\u003em(Either String Html)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmarkup/docs/Text-HMarkup.html#v:markupToHtml"
      }
    }
  ]
]