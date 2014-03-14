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
        "word": "webidl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Lexer",
          "name": "Token",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Lexer.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Lexer",
          "module": "Language.WebIDL.Lexer",
          "name": "Token",
          "package": "webidl",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Lexer.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Tokenize the standard input.\n",
          "module": "Language.WebIDL.Lexer",
          "name": "lexStdin",
          "package": "webidl",
          "signature": "IO [Token]",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Lexer.html#lexStdin",
          "type": "function"
        },
        "index": {
          "description": "Tokenize the standard input",
          "hierarchy": "Language WebIDL Lexer",
          "module": "Language.WebIDL.Lexer",
          "name": "lexStdin",
          "normalized": "IO[Token]",
          "package": "webidl",
          "partial": "Stdin",
          "signature": "IO[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Lexer.html#v:lexStdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get a token from the lexer. Upon EOF, token with tag 0 will be returned.\n",
          "module": "Language.WebIDL.Lexer",
          "name": "pickToken",
          "package": "webidl",
          "signature": "IO Token",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Lexer.html#pickToken",
          "type": "function"
        },
        "index": {
          "description": "Get token from the lexer Upon EOF token with tag will be returned",
          "hierarchy": "Language WebIDL Lexer",
          "module": "Language.WebIDL.Lexer",
          "name": "pickToken",
          "package": "webidl",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Lexer.html#v:pickToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run the parser, return IDL definitions.\n",
          "module": "Language.WebIDL.Parser",
          "name": "parseIDL",
          "package": "webidl",
          "signature": "[Token] -\u003e Either ParseError IDLSpecification",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Parser.html#parseIDL",
          "type": "function"
        },
        "index": {
          "description": "Run the parser return IDL definitions",
          "hierarchy": "Language WebIDL Parser",
          "module": "Language.WebIDL.Parser",
          "name": "parseIDL",
          "normalized": "[Token]-\u003eEither ParseError IDLSpecification",
          "package": "webidl",
          "partial": "IDL",
          "signature": "[Token]-\u003eEither ParseError IDLSpecification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Parser.html#v:parseIDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Pretty print a parsed IDL specification.\n",
          "module": "Language.WebIDL.PrettyPrint",
          "name": "prettyPrint",
          "package": "webidl",
          "signature": "IDLSpecification -\u003e String",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-PrettyPrint.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "description": "Pretty print parsed IDL specification",
          "hierarchy": "Language WebIDL PrettyPrint",
          "module": "Language.WebIDL.PrettyPrint",
          "name": "prettyPrint",
          "normalized": "IDLSpecification-\u003eString",
          "package": "webidl",
          "partial": "Print",
          "signature": "IDLSpecification-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-PrettyPrint.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLArrayDeclarator",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLArrayDeclarator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLArrayDeclarator",
          "package": "webidl",
          "partial": "IDLArray Declarator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLArrayDeclarator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLAttrDcl",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLAttrDcl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLAttrDcl",
          "package": "webidl",
          "partial": "IDLAttr Dcl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLAttrDcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLBaseTypeSpec",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLBaseTypeSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLBaseTypeSpec",
          "package": "webidl",
          "partial": "IDLBase Type Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLBaseTypeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLBinaryOp",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLBinaryOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLBinaryOp",
          "package": "webidl",
          "partial": "IDLBinary Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLBinaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLConstDcl",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLConstDcl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLConstDcl",
          "package": "webidl",
          "partial": "IDLConst Dcl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLConstDcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLConstExp",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLConstExp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLConstExp",
          "package": "webidl",
          "partial": "IDLConst Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLConstExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLConstType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLConstType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLConstType",
          "package": "webidl",
          "partial": "IDLConst Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLConstType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLDeclarator",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLDeclarator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLDeclarator",
          "package": "webidl",
          "partial": "IDLDeclarator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLDeclarator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLDef",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLDef",
          "package": "webidl",
          "partial": "IDLDef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLDefinition",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLDefinition",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLDefinition",
          "package": "webidl",
          "partial": "IDLDefinition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExceptDcl",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLExceptDcl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExceptDcl",
          "package": "webidl",
          "partial": "IDLExcept Dcl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLExceptDcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExp",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLExp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExp",
          "package": "webidl",
          "partial": "IDLExp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExport",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLExport",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExport",
          "package": "webidl",
          "partial": "IDLExport",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExtAttr",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLExtAttr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExtAttr",
          "package": "webidl",
          "partial": "IDLExt Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLExtAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExtAttrDetails",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLExtAttrDetails",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLExtAttrDetails",
          "package": "webidl",
          "partial": "IDLExt Attr Details",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLExtAttrDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLFixedType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLFixedType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLFixedType",
          "package": "webidl",
          "partial": "IDLFixed Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLFixedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLFloatingType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLFloatingType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLFloatingType",
          "package": "webidl",
          "partial": "IDLFloating Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLFloatingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLInteger",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLInteger",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLInteger",
          "package": "webidl",
          "partial": "IDLInteger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLIntegerType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLIntegerType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLIntegerType",
          "package": "webidl",
          "partial": "IDLInteger Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLIntegerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLInterfaceBody",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLInterfaceBody",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLInterfaceBody",
          "package": "webidl",
          "partial": "IDLInterface Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLInterfaceBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLLiteral",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLLiteral",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLLiteral",
          "package": "webidl",
          "partial": "IDLLiteral",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLMember",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLMember",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLMember",
          "package": "webidl",
          "partial": "IDLMember",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLOpAttr",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLOpAttr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLOpAttr",
          "package": "webidl",
          "partial": "IDLOp Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLOpAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLOpDcl",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLOpDcl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLOpDcl",
          "package": "webidl",
          "partial": "IDLOp Dcl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLOpDcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLParamAttr",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLParamAttr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLParamAttr",
          "package": "webidl",
          "partial": "IDLParam Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLParamAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLParamDcl",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLParamDcl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLParamDcl",
          "package": "webidl",
          "partial": "IDLParam Dcl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLParamDcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLParamTypeSpec",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLParamTypeSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLParamTypeSpec",
          "package": "webidl",
          "partial": "IDLParam Type Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLParamTypeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLScopedName",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLScopedName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLScopedName",
          "package": "webidl",
          "partial": "IDLScoped Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLScopedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLSequenceType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLSequenceType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLSequenceType",
          "package": "webidl",
          "partial": "IDLSequence Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLSequenceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLSimpleTypeSpec",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLSimpleTypeSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLSimpleTypeSpec",
          "package": "webidl",
          "partial": "IDLSimple Type Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLSimpleTypeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLSpecification",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLSpecification",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLSpecification",
          "package": "webidl",
          "partial": "IDLSpecification",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLSpecification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLStringType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLStringType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLStringType",
          "package": "webidl",
          "partial": "IDLString Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLStringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLStructType",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLStructType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLStructType",
          "package": "webidl",
          "partial": "IDLStruct Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLStructType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLTemplateTypeSpec",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLTemplateTypeSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLTemplateTypeSpec",
          "package": "webidl",
          "partial": "IDLTemplate Type Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLTemplateTypeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLTypeDcl",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLTypeDcl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLTypeDcl",
          "package": "webidl",
          "partial": "IDLType Dcl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLTypeDcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLTypeSpec",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLTypeSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLTypeSpec",
          "package": "webidl",
          "partial": "IDLType Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLTypeSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "IDLUnaryOp",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#IDLUnaryOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "IDLUnaryOp",
          "package": "webidl",
          "partial": "IDLUnary Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:IDLUnaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.WebIDL.Syntax",
          "name": "JavaDoc",
          "package": "webidl",
          "source": "http://hackage.haskell.org/package/webidl/docs/src/Language-WebIDL-Syntax.html#JavaDoc",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language WebIDL Syntax",
          "module": "Language.WebIDL.Syntax",
          "name": "JavaDoc",
          "package": "webidl",
          "partial": "Java Doc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL-Syntax.html#t:JavaDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Re-export commonly used modules.\n",
          "source": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL.html",
          "type": "unknown"
        },
        "index": {
          "description": "Re-export commonly used modules",
          "type": "unknown"
        },
        "uri": "http://hackage.haskell.org/package/webidl/docs/Language-WebIDL.html"
      }
    }
  ]
]