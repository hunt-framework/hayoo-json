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
        "word": "hssqlppp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains the annotation data types and a few auxiliary functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "Annotation",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Annotation.html",
          "type": "module"
        },
        "index": {
          "description": "Contains the annotation data types and few auxiliary functions",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "Annotation",
          "package": "hssqlppp",
          "partial": "Annotation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotation type - one of these is attached to most of the\n data types used in the ast.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "Annotation",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "data"
        },
        "index": {
          "description": "Annotation type one of these is attached to most of the data types used in the ast",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "Annotation",
          "package": "hssqlppp",
          "partial": "Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#t:Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement type is used for getting type information for a parameterized statement.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "ParameterizedStatementType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#ParameterizedStatementType",
          "type": "type"
        },
        "index": {
          "description": "Statement type is used for getting type information for parameterized statement",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "ParameterizedStatementType",
          "package": "hssqlppp",
          "partial": "Parameterized Statement Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#t:ParameterizedStatementType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a source file position, usually set by the parser.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "SourcePosition",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#SourcePosition",
          "type": "type"
        },
        "index": {
          "description": "Represents source file position usually set by the parser",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "SourcePosition",
          "package": "hssqlppp",
          "partial": "Source Position",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#t:SourcePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Annotation",
          "name": "Annotation",
          "package": "hssqlppp",
          "signature": "Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "Annotation",
          "package": "hssqlppp",
          "partial": "Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource position for this node\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "asrc",
          "package": "hssqlppp",
          "signature": "Maybe SourcePosition",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "source position for this node",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "asrc",
          "package": "hssqlppp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:asrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of the node, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the tree hasn't been typechecked or if a type error prevents determining the type\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "atype",
          "package": "hssqlppp",
          "signature": "Maybe Type",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "type of the node Nothing if the tree hasn been typechecked or if type error prevents determining the type",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "atype",
          "package": "hssqlppp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:atype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany catalog updates that a ddl statement produces\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "catUpd",
          "package": "hssqlppp",
          "signature": "[CatalogUpdate]",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "any catalog updates that ddl statement produces",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "catUpd",
          "normalized": "[CatalogUpdate]",
          "package": "hssqlppp",
          "partial": "Upd",
          "signature": "[CatalogUpdate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:catUpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn annotation value with no information.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "emptyAnnotation",
          "package": "hssqlppp",
          "signature": "Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#emptyAnnotation",
          "type": "function"
        },
        "index": {
          "description": "An annotation value with no information",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "emptyAnnotation",
          "package": "hssqlppp",
          "partial": "Annotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:emptyAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany type errors\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "errs",
          "package": "hssqlppp",
          "signature": "[TypeError]",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "any type errors",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "errs",
          "normalized": "[TypeError]",
          "package": "hssqlppp",
          "signature": "[TypeError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:errs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe matched function prototype for a funcall\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "fnProt",
          "package": "hssqlppp",
          "signature": "Maybe FunctionPrototype",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "the matched function prototype for funcall",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "fnProt",
          "package": "hssqlppp",
          "partial": "Prot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:fnProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the annotation for the root element of the tree passed\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "getAnnotation",
          "package": "hssqlppp",
          "signature": "a -\u003e Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#getAnnotation",
          "type": "function"
        },
        "index": {
          "description": "get the annotation for the root element of the tree passed",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "getAnnotation",
          "normalized": "a-\u003eAnnotation",
          "package": "hssqlppp",
          "partial": "Annotation",
          "signature": "a-\u003eAnnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:getAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einferred\u003c/code\u003e type - fake type inference used for getting the type of ? placeholders in parameterized statements\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "infType",
          "package": "hssqlppp",
          "signature": "Maybe Type",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "inferred type fake type inference used for getting the type of placeholders in parameterized statements",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "infType",
          "package": "hssqlppp",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:infType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for getting the in and out types of a parameterized statement\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "stType",
          "package": "hssqlppp",
          "signature": "Maybe ParameterizedStatementType",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#Annotation",
          "type": "function"
        },
        "index": {
          "description": "used for getting the in and out types of parameterized statement",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "stType",
          "package": "hssqlppp",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:stType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the first annotation in a tree using the function supplied\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "updateAnnotation",
          "package": "hssqlppp",
          "signature": "(Annotation -\u003e Annotation) -\u003e a -\u003e a",
          "source": "src/Database-HsSqlPpp-Internals-AstAnnotation.html#updateAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Update the first annotation in tree using the function supplied",
          "hierarchy": "Database HsSqlPpp Annotation",
          "module": "Database.HsSqlPpp.Annotation",
          "name": "updateAnnotation",
          "normalized": "(Annotation-\u003eAnnotation)-\u003ea-\u003ea",
          "package": "hssqlppp",
          "partial": "Annotation",
          "signature": "(Annotation-\u003eAnnotation)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Annotation.html#v:updateAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the ast node data types. They are very\n       permissive, in that they allow a lot of invalid SQL to be\n       represented. The type checking process should catch all invalid\n       trees, but doesn't quite manage at the moment.  Sorry about all\n       the seemingly pointless type synonyms below, they are an\n       artefact of using UUAGC. You can see labels for the fields by\n       looking at the ag source here:\n       \u003ca\u003ehttp://jakewheat.github.com/hssqlppp/source/src/Database/HsSqlPpp/Internals/AstInternal.ag.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Ast",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Ast.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the ast node data types They are very permissive in that they allow lot of invalid SQL to be represented The type checking process should catch all invalid trees but doesn quite manage at the moment Sorry about all the seemingly pointless type synonyms below they are an artefact of using UUAGC You can see labels for the fields by looking at the ag source here http jakewheat.github.com hssqlppp source src Database HsSqlPpp Internals AstInternal.ag.html",
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Ast",
          "package": "hssqlppp",
          "partial": "Ast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterTableAction",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AlterTableAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterTableAction",
          "package": "hssqlppp",
          "partial": "Alter Table Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:AlterTableAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterTableActionList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AlterTableActionList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterTableActionList",
          "package": "hssqlppp",
          "partial": "Alter Table Action List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:AlterTableActionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AttributeDef",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AttributeDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AttributeDef",
          "package": "hssqlppp",
          "partial": "Attribute Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:AttributeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AttributeDefList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AttributeDefList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AttributeDefList",
          "package": "hssqlppp",
          "partial": "Attribute Def List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:AttributeDefList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cascade",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Cascade",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cascade",
          "package": "hssqlppp",
          "partial": "Cascade",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Cascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseScalarExprListScalarExprPair",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CaseScalarExprListScalarExprPair",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseScalarExprListScalarExprPair",
          "package": "hssqlppp",
          "partial": "Case Scalar Expr List Scalar Expr Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:CaseScalarExprListScalarExprPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseScalarExprListScalarExprPairList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CaseScalarExprListScalarExprPairList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseScalarExprListScalarExprPairList",
          "package": "hssqlppp",
          "partial": "Case Scalar Expr List Scalar Expr Pair List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:CaseScalarExprListScalarExprPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CombineType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CombineType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CombineType",
          "package": "hssqlppp",
          "partial": "Combine Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:CombineType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Constraint",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Constraint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Constraint",
          "package": "hssqlppp",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ConstraintList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ConstraintList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ConstraintList",
          "package": "hssqlppp",
          "partial": "Constraint List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ConstraintList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CopySource",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CopySource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CopySource",
          "package": "hssqlppp",
          "partial": "Copy Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:CopySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Direction",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Direction",
          "package": "hssqlppp",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Distinct",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Distinct",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Distinct",
          "package": "hssqlppp",
          "partial": "Distinct",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Distinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "DropType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#DropType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "DropType",
          "package": "hssqlppp",
          "partial": "Drop Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:DropType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractField",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractField",
          "package": "hssqlppp",
          "partial": "Extract Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ExtractField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FnBody",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FnBody",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FnBody",
          "package": "hssqlppp",
          "partial": "Fn Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:FnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameClause",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FrameClause",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameClause",
          "package": "hssqlppp",
          "partial": "Frame Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:FrameClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IfExists",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IfExists",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IfExists",
          "package": "hssqlppp",
          "partial": "If Exists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:IfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "InList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#InList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "InList",
          "package": "hssqlppp",
          "partial": "In List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:InList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalField",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalField",
          "package": "hssqlppp",
          "partial": "Interval Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:IntervalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinExpr",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinExpr",
          "package": "hssqlppp",
          "partial": "Join Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:JoinExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinType",
          "package": "hssqlppp",
          "partial": "Join Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:JoinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Language",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Language",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Language",
          "package": "hssqlppp",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftFlavour",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#LiftFlavour",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftFlavour",
          "package": "hssqlppp",
          "partial": "Lift Flavour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:LiftFlavour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "MaybeBoolExpr",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#MaybeBoolExpr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "MaybeBoolExpr",
          "package": "hssqlppp",
          "partial": "Maybe Bool Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:MaybeBoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "MaybeScalarExpr",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#MaybeScalarExpr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "MaybeScalarExpr",
          "package": "hssqlppp",
          "partial": "Maybe Scalar Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:MaybeScalarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "MaybeSelectList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#MaybeSelectList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "MaybeSelectList",
          "package": "hssqlppp",
          "partial": "Maybe Select List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:MaybeSelectList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Name",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Name",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Name",
          "package": "hssqlppp",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NameComponent",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#NameComponent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NameComponent",
          "package": "hssqlppp",
          "partial": "Name Component",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:NameComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NameTypeNameListPair",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#NameTypeNameListPair",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NameTypeNameListPair",
          "package": "hssqlppp",
          "partial": "Name Type Name List Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:NameTypeNameListPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NameTypeNameListPairList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#NameTypeNameListPairList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NameTypeNameListPairList",
          "package": "hssqlppp",
          "partial": "Name Type Name List Pair List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:NameTypeNameListPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Natural",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Natural",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Natural",
          "package": "hssqlppp",
          "partial": "Natural",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "OnExpr",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#OnExpr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "OnExpr",
          "package": "hssqlppp",
          "partial": "On Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:OnExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDef",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ParamDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDef",
          "package": "hssqlppp",
          "partial": "Param Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ParamDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDefList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ParamDefList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDefList",
          "package": "hssqlppp",
          "partial": "Param Def List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ParamDefList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "QueryExpr",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#QueryExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "QueryExpr",
          "package": "hssqlppp",
          "partial": "Query Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:QueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RaiseType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RaiseType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RaiseType",
          "package": "hssqlppp",
          "partial": "Raise Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:RaiseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Replace",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Replace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Replace",
          "package": "hssqlppp",
          "partial": "Replace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RestartIdentity",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RestartIdentity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RestartIdentity",
          "package": "hssqlppp",
          "partial": "Restart Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:RestartIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowConstraint",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowConstraint",
          "package": "hssqlppp",
          "partial": "Row Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:RowConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowConstraintList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraintList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowConstraintList",
          "package": "hssqlppp",
          "partial": "Row Constraint List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:RowConstraintList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExpr",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExpr",
          "package": "hssqlppp",
          "partial": "Scalar Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprDirectionPair",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprDirectionPair",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprDirectionPair",
          "package": "hssqlppp",
          "partial": "Scalar Expr Direction Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprDirectionPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprDirectionPairList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprDirectionPairList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprDirectionPairList",
          "package": "hssqlppp",
          "partial": "Scalar Expr Direction Pair List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprDirectionPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprList",
          "package": "hssqlppp",
          "partial": "Scalar Expr List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprListList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprListList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprListList",
          "package": "hssqlppp",
          "partial": "Scalar Expr List List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprListList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprListStatementListPair",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprListStatementListPair",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprListStatementListPair",
          "package": "hssqlppp",
          "partial": "Scalar Expr List Statement List Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprListStatementListPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprListStatementListPairList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprListStatementListPairList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprListStatementListPairList",
          "package": "hssqlppp",
          "partial": "Scalar Expr List Statement List Pair List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprListStatementListPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprStatementListPair",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprStatementListPair",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprStatementListPair",
          "package": "hssqlppp",
          "partial": "Scalar Expr Statement List Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprStatementListPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprStatementListPairList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExprStatementListPairList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarExprStatementListPairList",
          "package": "hssqlppp",
          "partial": "Scalar Expr Statement List Pair List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:ScalarExprStatementListPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectItem",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SelectItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectItem",
          "package": "hssqlppp",
          "partial": "Select Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:SelectItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectItemList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SelectItemList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectItemList",
          "package": "hssqlppp",
          "partial": "Select Item List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:SelectItemList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SelectList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectList",
          "package": "hssqlppp",
          "partial": "Select List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:SelectList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetClause",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetClause",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetClause",
          "package": "hssqlppp",
          "partial": "Set Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:SetClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetClauseList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetClauseList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetClauseList",
          "package": "hssqlppp",
          "partial": "Set Clause List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:SetClauseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetValue",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetValue",
          "package": "hssqlppp",
          "partial": "Set Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:SetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Statement",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Statement",
          "package": "hssqlppp",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "StatementList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#StatementList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "StatementList",
          "package": "hssqlppp",
          "partial": "Statement List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:StatementList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableAlias",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableAlias",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableAlias",
          "package": "hssqlppp",
          "partial": "Table Alias",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TableAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableRef",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableRef",
          "package": "hssqlppp",
          "partial": "Table Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TableRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableRefList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableRefList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableRefList",
          "package": "hssqlppp",
          "partial": "Table Ref List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TableRefList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerEvent",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerEvent",
          "package": "hssqlppp",
          "partial": "Trigger Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TriggerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerFire",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerFire",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerFire",
          "package": "hssqlppp",
          "partial": "Trigger Fire",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TriggerFire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerWhen",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerWhen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerWhen",
          "package": "hssqlppp",
          "partial": "Trigger When",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TriggerWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeAttributeDef",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeAttributeDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeAttributeDef",
          "package": "hssqlppp",
          "partial": "Type Attribute Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TypeAttributeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeAttributeDefList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeAttributeDefList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeAttributeDefList",
          "package": "hssqlppp",
          "partial": "Type Attribute Def List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TypeAttributeDefList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeName",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeName",
          "package": "hssqlppp",
          "partial": "Type Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeNameList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeNameList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeNameList",
          "package": "hssqlppp",
          "partial": "Type Name List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:TypeNameList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarDef",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#VarDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarDef",
          "package": "hssqlppp",
          "partial": "Var Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:VarDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarDefList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#VarDefList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarDefList",
          "package": "hssqlppp",
          "partial": "Var Def List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:VarDefList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Volatility",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Volatility",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Volatility",
          "package": "hssqlppp",
          "partial": "Volatility",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:Volatility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQuery",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#WithQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQuery",
          "package": "hssqlppp",
          "partial": "With Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:WithQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQueryList",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#WithQueryList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQueryList",
          "package": "hssqlppp",
          "partial": "With Query List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#t:WithQueryList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AddConstraint",
          "package": "hssqlppp",
          "signature": "AddConstraint Annotation Constraint",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AlterTableAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AddConstraint",
          "package": "hssqlppp",
          "partial": "Add Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AddConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AggregateFn",
          "package": "hssqlppp",
          "signature": "AggregateFn Annotation Distinct ScalarExpr ScalarExprDirectionPairList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AggregateFn",
          "package": "hssqlppp",
          "partial": "Aggregate Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AggregateFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterColumnDefault",
          "package": "hssqlppp",
          "signature": "AlterColumnDefault Annotation NameComponent ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AlterTableAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterColumnDefault",
          "package": "hssqlppp",
          "partial": "Alter Column Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AlterColumnDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterSequence",
          "package": "hssqlppp",
          "signature": "AlterSequence Annotation Name Name",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterSequence",
          "package": "hssqlppp",
          "partial": "Alter Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AlterSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterTable",
          "package": "hssqlppp",
          "signature": "AlterTable Annotation Name AlterTableActionList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AlterTable",
          "package": "hssqlppp",
          "partial": "Alter Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AlterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AntiScalarExpr",
          "package": "hssqlppp",
          "signature": "AntiScalarExpr String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AntiScalarExpr",
          "package": "hssqlppp",
          "partial": "Anti Scalar Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AntiScalarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AntiStatement",
          "package": "hssqlppp",
          "signature": "AntiStatement String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AntiStatement",
          "package": "hssqlppp",
          "partial": "Anti Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AntiStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AntiTriggerEvent",
          "package": "hssqlppp",
          "signature": "AntiTriggerEvent String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AntiTriggerEvent",
          "package": "hssqlppp",
          "partial": "Anti Trigger Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AntiTriggerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ArrayTypeName",
          "package": "hssqlppp",
          "signature": "ArrayTypeName Annotation TypeName",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ArrayTypeName",
          "package": "hssqlppp",
          "partial": "Array Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ArrayTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Asc",
          "package": "hssqlppp",
          "signature": "Asc",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Asc",
          "package": "hssqlppp",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Assignment",
          "package": "hssqlppp",
          "signature": "Assignment Annotation Name ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Assignment",
          "package": "hssqlppp",
          "partial": "Assignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "AttributeDef",
          "package": "hssqlppp",
          "signature": "AttributeDef Annotation NameComponent TypeName MaybeScalarExpr RowConstraintList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#AttributeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "AttributeDef",
          "package": "hssqlppp",
          "partial": "Attribute Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:AttributeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Block",
          "package": "hssqlppp",
          "signature": "Block Annotation (Maybe String) VarDefList StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Block",
          "package": "hssqlppp",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "BooleanLit",
          "package": "hssqlppp",
          "signature": "BooleanLit Annotation Bool",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "BooleanLit",
          "package": "hssqlppp",
          "partial": "Boolean Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:BooleanLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cascade",
          "package": "hssqlppp",
          "signature": "Cascade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Cascade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cascade",
          "package": "hssqlppp",
          "partial": "Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Cascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Case",
          "package": "hssqlppp",
          "signature": "Case Annotation CaseScalarExprListScalarExprPairList MaybeScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Case",
          "package": "hssqlppp",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseSimple",
          "package": "hssqlppp",
          "signature": "CaseSimple Annotation ScalarExpr CaseScalarExprListScalarExprPairList MaybeScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseSimple",
          "package": "hssqlppp",
          "partial": "Case Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CaseSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseStatement",
          "package": "hssqlppp",
          "signature": "CaseStatement Annotation ScalarExprListStatementListPairList StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseStatement",
          "package": "hssqlppp",
          "partial": "Case Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CaseStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseStatementSimple",
          "package": "hssqlppp",
          "signature": "CaseStatementSimple Annotation ScalarExpr ScalarExprListStatementListPairList StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CaseStatementSimple",
          "package": "hssqlppp",
          "partial": "Case Statement Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CaseStatementSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cast",
          "package": "hssqlppp",
          "signature": "Cast Annotation ScalarExpr TypeName",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cast",
          "package": "hssqlppp",
          "partial": "Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CheckConstraint",
          "package": "hssqlppp",
          "signature": "CheckConstraint Annotation String ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CheckConstraint",
          "package": "hssqlppp",
          "partial": "Check Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CheckConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CombineQueryExpr",
          "package": "hssqlppp",
          "signature": "CombineQueryExpr Annotation CombineType QueryExpr QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CombineQueryExpr",
          "package": "hssqlppp",
          "partial": "Combine Query Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CombineQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ContinueIdentity",
          "package": "hssqlppp",
          "signature": "ContinueIdentity",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RestartIdentity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ContinueIdentity",
          "package": "hssqlppp",
          "partial": "Continue Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ContinueIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ContinueStatement",
          "package": "hssqlppp",
          "signature": "ContinueStatement Annotation (Maybe String)",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ContinueStatement",
          "package": "hssqlppp",
          "partial": "Continue Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ContinueStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Copy",
          "package": "hssqlppp",
          "signature": "Copy Annotation Name [NameComponent] CopySource",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Copy",
          "normalized": "Copy Annotation Name[NameComponent]CopySource",
          "package": "hssqlppp",
          "partial": "Copy",
          "signature": "Copy Annotation Name[NameComponent]CopySource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CopyData",
          "package": "hssqlppp",
          "signature": "CopyData Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CopyData",
          "package": "hssqlppp",
          "partial": "Copy Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CopyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CopyFilename",
          "package": "hssqlppp",
          "signature": "CopyFilename String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CopySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CopyFilename",
          "package": "hssqlppp",
          "partial": "Copy Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CopyFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateDomain",
          "package": "hssqlppp",
          "signature": "CreateDomain Annotation Name TypeName String MaybeBoolExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateDomain",
          "package": "hssqlppp",
          "partial": "Create Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateFunction",
          "package": "hssqlppp",
          "signature": "CreateFunction Annotation Name ParamDefList TypeName Replace Language FnBody Volatility",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateFunction",
          "package": "hssqlppp",
          "partial": "Create Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateLanguage",
          "package": "hssqlppp",
          "signature": "CreateLanguage Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateLanguage",
          "package": "hssqlppp",
          "partial": "Create Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateSequence",
          "package": "hssqlppp",
          "signature": "CreateSequence Annotation Name Integer Integer Integer Integer Integer",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateSequence",
          "package": "hssqlppp",
          "partial": "Create Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateTable",
          "package": "hssqlppp",
          "signature": "CreateTable Annotation Name AttributeDefList ConstraintList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateTable",
          "package": "hssqlppp",
          "partial": "Create Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateTableAs",
          "package": "hssqlppp",
          "signature": "CreateTableAs Annotation Name QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateTableAs",
          "package": "hssqlppp",
          "partial": "Create Table As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateTableAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateTrigger",
          "package": "hssqlppp",
          "signature": "CreateTrigger Annotation NameComponent TriggerWhen [TriggerEvent] Name TriggerFire Name ScalarExprList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateTrigger",
          "normalized": "CreateTrigger Annotation NameComponent TriggerWhen[TriggerEvent]Name TriggerFire Name ScalarExprList",
          "package": "hssqlppp",
          "partial": "Create Trigger",
          "signature": "CreateTrigger Annotation NameComponent TriggerWhen[TriggerEvent]Name TriggerFire Name ScalarExprList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateType",
          "package": "hssqlppp",
          "signature": "CreateType Annotation Name TypeAttributeDefList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateType",
          "package": "hssqlppp",
          "partial": "Create Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateView",
          "package": "hssqlppp",
          "signature": "CreateView Annotation Name MaybeNameComponentList QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "CreateView",
          "package": "hssqlppp",
          "partial": "Create View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:CreateView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cross",
          "package": "hssqlppp",
          "signature": "Cross",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Cross",
          "package": "hssqlppp",
          "partial": "Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Delete",
          "package": "hssqlppp",
          "signature": "Delete Annotation Name TableRefList MaybeBoolExpr MaybeSelectList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Delete",
          "package": "hssqlppp",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Desc",
          "package": "hssqlppp",
          "signature": "Desc",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Desc",
          "package": "hssqlppp",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Distinct",
          "package": "hssqlppp",
          "signature": "Distinct",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Distinct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Distinct",
          "package": "hssqlppp",
          "partial": "Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Distinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Domain",
          "package": "hssqlppp",
          "signature": "Domain",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#DropType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Domain",
          "package": "hssqlppp",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "DropFunction",
          "package": "hssqlppp",
          "signature": "DropFunction Annotation IfExists NameTypeNameListPairList Cascade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "DropFunction",
          "package": "hssqlppp",
          "partial": "Drop Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:DropFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "DropSomething",
          "package": "hssqlppp",
          "signature": "DropSomething Annotation DropType IfExists [Name] Cascade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "DropSomething",
          "normalized": "DropSomething Annotation DropType IfExists[Name]Cascade",
          "package": "hssqlppp",
          "partial": "Drop Something",
          "signature": "DropSomething Annotation DropType IfExists[Name]Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:DropSomething"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Dupes",
          "package": "hssqlppp",
          "signature": "Dupes",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Distinct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Dupes",
          "package": "hssqlppp",
          "partial": "Dupes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Dupes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "EachRow",
          "package": "hssqlppp",
          "signature": "EachRow",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerFire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "EachRow",
          "package": "hssqlppp",
          "partial": "Each Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:EachRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "EachStatement",
          "package": "hssqlppp",
          "signature": "EachStatement",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerFire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "EachStatement",
          "package": "hssqlppp",
          "partial": "Each Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:EachStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Except",
          "package": "hssqlppp",
          "signature": "Except",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CombineType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Except",
          "package": "hssqlppp",
          "partial": "Except",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Execute",
          "package": "hssqlppp",
          "signature": "Execute Annotation ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Execute",
          "package": "hssqlppp",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Exists",
          "package": "hssqlppp",
          "signature": "Exists Annotation QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Exists",
          "package": "hssqlppp",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExitStatement",
          "package": "hssqlppp",
          "signature": "ExitStatement Annotation (Maybe String)",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExitStatement",
          "package": "hssqlppp",
          "partial": "Exit Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExitStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Extract",
          "package": "hssqlppp",
          "signature": "Extract Annotation ExtractField ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Extract",
          "package": "hssqlppp",
          "partial": "Extract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractCentury",
          "package": "hssqlppp",
          "signature": "ExtractCentury",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractCentury",
          "package": "hssqlppp",
          "partial": "Extract Century",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractCentury"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDay",
          "package": "hssqlppp",
          "signature": "ExtractDay",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDay",
          "package": "hssqlppp",
          "partial": "Extract Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDecade",
          "package": "hssqlppp",
          "signature": "ExtractDecade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDecade",
          "package": "hssqlppp",
          "partial": "Extract Decade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractDecade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDow",
          "package": "hssqlppp",
          "signature": "ExtractDow",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDow",
          "package": "hssqlppp",
          "partial": "Extract Dow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractDow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDoy",
          "package": "hssqlppp",
          "signature": "ExtractDoy",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractDoy",
          "package": "hssqlppp",
          "partial": "Extract Doy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractDoy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractEpoch",
          "package": "hssqlppp",
          "signature": "ExtractEpoch",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractEpoch",
          "package": "hssqlppp",
          "partial": "Extract Epoch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractEpoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractHour",
          "package": "hssqlppp",
          "signature": "ExtractHour",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractHour",
          "package": "hssqlppp",
          "partial": "Extract Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractIsodow",
          "package": "hssqlppp",
          "signature": "ExtractIsodow",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractIsodow",
          "package": "hssqlppp",
          "partial": "Extract Isodow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractIsodow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractIsoyear",
          "package": "hssqlppp",
          "signature": "ExtractIsoyear",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractIsoyear",
          "package": "hssqlppp",
          "partial": "Extract Isoyear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractIsoyear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMicroseconds",
          "package": "hssqlppp",
          "signature": "ExtractMicroseconds",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMicroseconds",
          "package": "hssqlppp",
          "partial": "Extract Microseconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractMicroseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMillennium",
          "package": "hssqlppp",
          "signature": "ExtractMillennium",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMillennium",
          "package": "hssqlppp",
          "partial": "Extract Millennium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractMillennium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMilliseconds",
          "package": "hssqlppp",
          "signature": "ExtractMilliseconds",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMilliseconds",
          "package": "hssqlppp",
          "partial": "Extract Milliseconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractMilliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMinute",
          "package": "hssqlppp",
          "signature": "ExtractMinute",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMinute",
          "package": "hssqlppp",
          "partial": "Extract Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMonth",
          "package": "hssqlppp",
          "signature": "ExtractMonth",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractMonth",
          "package": "hssqlppp",
          "partial": "Extract Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractQuarter",
          "package": "hssqlppp",
          "signature": "ExtractQuarter",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractQuarter",
          "package": "hssqlppp",
          "partial": "Extract Quarter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractQuarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractSecond",
          "package": "hssqlppp",
          "signature": "ExtractSecond",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractSecond",
          "package": "hssqlppp",
          "partial": "Extract Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractTimezone",
          "package": "hssqlppp",
          "signature": "ExtractTimezone",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractTimezone",
          "package": "hssqlppp",
          "partial": "Extract Timezone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractTimezone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractTimezoneHour",
          "package": "hssqlppp",
          "signature": "ExtractTimezoneHour",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractTimezoneHour",
          "package": "hssqlppp",
          "partial": "Extract Timezone Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractTimezoneHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractTimezoneMinute",
          "package": "hssqlppp",
          "signature": "ExtractTimezoneMinute",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractTimezoneMinute",
          "package": "hssqlppp",
          "partial": "Extract Timezone Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractTimezoneMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractWeek",
          "package": "hssqlppp",
          "signature": "ExtractWeek",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractWeek",
          "package": "hssqlppp",
          "partial": "Extract Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractYear",
          "package": "hssqlppp",
          "signature": "ExtractYear",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ExtractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ExtractYear",
          "package": "hssqlppp",
          "partial": "Extract Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ExtractYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ForIntegerStatement",
          "package": "hssqlppp",
          "signature": "ForIntegerStatement Annotation (Maybe String) NameComponent ScalarExpr ScalarExpr StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ForIntegerStatement",
          "package": "hssqlppp",
          "partial": "For Integer Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ForIntegerStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ForQueryStatement",
          "package": "hssqlppp",
          "signature": "ForQueryStatement Annotation (Maybe String) NameComponent QueryExpr StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ForQueryStatement",
          "package": "hssqlppp",
          "partial": "For Query Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ForQueryStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameRowsUnboundedPreceding",
          "package": "hssqlppp",
          "signature": "FrameRowsUnboundedPreceding",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FrameClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameRowsUnboundedPreceding",
          "package": "hssqlppp",
          "partial": "Frame Rows Unbounded Preceding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FrameRowsUnboundedPreceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameUnboundedFull",
          "package": "hssqlppp",
          "signature": "FrameUnboundedFull",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FrameClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameUnboundedFull",
          "package": "hssqlppp",
          "partial": "Frame Unbounded Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FrameUnboundedFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameUnboundedPreceding",
          "package": "hssqlppp",
          "signature": "FrameUnboundedPreceding",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FrameClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FrameUnboundedPreceding",
          "package": "hssqlppp",
          "partial": "Frame Unbounded Preceding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FrameUnboundedPreceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FullAlias",
          "package": "hssqlppp",
          "signature": "FullAlias Annotation NameComponent [NameComponent]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableAlias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FullAlias",
          "normalized": "FullAlias Annotation NameComponent[NameComponent]",
          "package": "hssqlppp",
          "partial": "Full Alias",
          "signature": "FullAlias Annotation NameComponent[NameComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FullAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FullOuter",
          "package": "hssqlppp",
          "signature": "FullOuter",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FullOuter",
          "package": "hssqlppp",
          "partial": "Full Outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FullOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FunCall",
          "package": "hssqlppp",
          "signature": "FunCall Annotation Name ScalarExprList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FunCall",
          "package": "hssqlppp",
          "partial": "Fun Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FunCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "FunTref",
          "package": "hssqlppp",
          "signature": "FunTref Annotation ScalarExpr TableAlias",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "FunTref",
          "package": "hssqlppp",
          "partial": "Fun Tref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:FunTref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Identifier",
          "package": "hssqlppp",
          "signature": "Identifier Annotation NameComponent",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Identifier",
          "package": "hssqlppp",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "If",
          "package": "hssqlppp",
          "signature": "If Annotation ScalarExprStatementListPairList StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "If",
          "package": "hssqlppp",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IfExists",
          "package": "hssqlppp",
          "signature": "IfExists",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IfExists",
          "package": "hssqlppp",
          "partial": "If Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Immutable",
          "package": "hssqlppp",
          "signature": "Immutable",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Volatility",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Immutable",
          "package": "hssqlppp",
          "partial": "Immutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Immutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "InList",
          "package": "hssqlppp",
          "signature": "InList Annotation ScalarExprList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#InList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "InList",
          "package": "hssqlppp",
          "partial": "In List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:InList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "InPredicate",
          "package": "hssqlppp",
          "signature": "InPredicate Annotation ScalarExpr Bool InList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "InPredicate",
          "package": "hssqlppp",
          "partial": "In Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:InPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "InQueryExpr",
          "package": "hssqlppp",
          "signature": "InQueryExpr Annotation QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#InList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "InQueryExpr",
          "package": "hssqlppp",
          "partial": "In Query Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:InQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Inner",
          "package": "hssqlppp",
          "signature": "Inner",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Inner",
          "package": "hssqlppp",
          "partial": "Inner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Inner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Insert",
          "package": "hssqlppp",
          "signature": "Insert Annotation Name [NameComponent] QueryExpr MaybeSelectList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Insert",
          "normalized": "Insert Annotation Name[NameComponent]QueryExpr MaybeSelectList",
          "package": "hssqlppp",
          "partial": "Insert",
          "signature": "Insert Annotation Name[NameComponent]QueryExpr MaybeSelectList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Intersect",
          "package": "hssqlppp",
          "signature": "Intersect",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CombineType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Intersect",
          "package": "hssqlppp",
          "partial": "Intersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Interval",
          "package": "hssqlppp",
          "signature": "Interval Annotation String IntervalField (Maybe Int)",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Interval",
          "package": "hssqlppp",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDay",
          "package": "hssqlppp",
          "signature": "IntervalDay",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDay",
          "package": "hssqlppp",
          "partial": "Interval Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDayToHour",
          "package": "hssqlppp",
          "signature": "IntervalDayToHour",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDayToHour",
          "package": "hssqlppp",
          "partial": "Interval Day To Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalDayToHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDayToMinute",
          "package": "hssqlppp",
          "signature": "IntervalDayToMinute",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDayToMinute",
          "package": "hssqlppp",
          "partial": "Interval Day To Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalDayToMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDayToSecond",
          "package": "hssqlppp",
          "signature": "IntervalDayToSecond",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalDayToSecond",
          "package": "hssqlppp",
          "partial": "Interval Day To Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalDayToSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalHour",
          "package": "hssqlppp",
          "signature": "IntervalHour",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalHour",
          "package": "hssqlppp",
          "partial": "Interval Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalHourToMinute",
          "package": "hssqlppp",
          "signature": "IntervalHourToMinute",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalHourToMinute",
          "package": "hssqlppp",
          "partial": "Interval Hour To Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalHourToMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalHourToSecond",
          "package": "hssqlppp",
          "signature": "IntervalHourToSecond",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalHourToSecond",
          "package": "hssqlppp",
          "partial": "Interval Hour To Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalHourToSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalMinute",
          "package": "hssqlppp",
          "signature": "IntervalMinute",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalMinute",
          "package": "hssqlppp",
          "partial": "Interval Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalMinuteToSecond",
          "package": "hssqlppp",
          "signature": "IntervalMinuteToSecond",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalMinuteToSecond",
          "package": "hssqlppp",
          "partial": "Interval Minute To Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalMinuteToSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalMonth",
          "package": "hssqlppp",
          "signature": "IntervalMonth",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalMonth",
          "package": "hssqlppp",
          "partial": "Interval Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalSecond",
          "package": "hssqlppp",
          "signature": "IntervalSecond",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalSecond",
          "package": "hssqlppp",
          "partial": "Interval Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalYear",
          "package": "hssqlppp",
          "signature": "IntervalYear",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalYear",
          "package": "hssqlppp",
          "partial": "Interval Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalYearToMonth",
          "package": "hssqlppp",
          "signature": "IntervalYearToMonth",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IntervalField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "IntervalYearToMonth",
          "package": "hssqlppp",
          "partial": "Interval Year To Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:IntervalYearToMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Into",
          "package": "hssqlppp",
          "signature": "Into Annotation Bool [Name] Statement",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Into",
          "normalized": "Into Annotation Bool[Name]Statement",
          "package": "hssqlppp",
          "partial": "Into",
          "signature": "Into Annotation Bool[Name]Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Into"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinOn",
          "package": "hssqlppp",
          "signature": "JoinOn Annotation ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinOn",
          "package": "hssqlppp",
          "partial": "Join On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:JoinOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinTref",
          "package": "hssqlppp",
          "signature": "JoinTref Annotation TableRef Natural JoinType TableRef OnExpr TableAlias",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinTref",
          "package": "hssqlppp",
          "partial": "Join Tref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:JoinTref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinUsing",
          "package": "hssqlppp",
          "signature": "JoinUsing Annotation [NameComponent]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "JoinUsing",
          "normalized": "JoinUsing Annotation[NameComponent]",
          "package": "hssqlppp",
          "partial": "Join Using",
          "signature": "JoinUsing Annotation[NameComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:JoinUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "LeftOuter",
          "package": "hssqlppp",
          "signature": "LeftOuter",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "LeftOuter",
          "package": "hssqlppp",
          "partial": "Left Outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:LeftOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftAll",
          "package": "hssqlppp",
          "signature": "LiftAll",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#LiftFlavour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftAll",
          "package": "hssqlppp",
          "partial": "Lift All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:LiftAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftAny",
          "package": "hssqlppp",
          "signature": "LiftAny",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#LiftFlavour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftAny",
          "package": "hssqlppp",
          "partial": "Lift Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:LiftAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftOperator",
          "package": "hssqlppp",
          "signature": "LiftOperator Annotation String LiftFlavour ScalarExprList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "LiftOperator",
          "package": "hssqlppp",
          "partial": "Lift Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:LiftOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "LoopStatement",
          "package": "hssqlppp",
          "signature": "LoopStatement Annotation (Maybe String) StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "LoopStatement",
          "package": "hssqlppp",
          "partial": "Loop Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:LoopStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "MultiSetClause",
          "package": "hssqlppp",
          "signature": "MultiSetClause Annotation [NameComponent] ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "MultiSetClause",
          "normalized": "MultiSetClause Annotation[NameComponent]ScalarExpr",
          "package": "hssqlppp",
          "partial": "Multi Set Clause",
          "signature": "MultiSetClause Annotation[NameComponent]ScalarExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:MultiSetClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Name",
          "package": "hssqlppp",
          "signature": "Name Annotation [NameComponent]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Name",
          "normalized": "Name Annotation[NameComponent]",
          "package": "hssqlppp",
          "partial": "Name",
          "signature": "Name Annotation[NameComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Natural",
          "package": "hssqlppp",
          "signature": "Natural",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Natural",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Natural",
          "package": "hssqlppp",
          "partial": "Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Nmc",
          "package": "hssqlppp",
          "signature": "Nmc String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#NameComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Nmc",
          "package": "hssqlppp",
          "partial": "Nmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Nmc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NoAlias",
          "package": "hssqlppp",
          "signature": "NoAlias Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableAlias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NoAlias",
          "package": "hssqlppp",
          "partial": "No Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NoAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NoReplace",
          "package": "hssqlppp",
          "signature": "NoReplace",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Replace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NoReplace",
          "package": "hssqlppp",
          "partial": "No Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NoReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NotNullConstraint",
          "package": "hssqlppp",
          "signature": "NotNullConstraint Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NotNullConstraint",
          "package": "hssqlppp",
          "partial": "Not Null Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NotNullConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Notify",
          "package": "hssqlppp",
          "signature": "Notify Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Notify",
          "package": "hssqlppp",
          "partial": "Notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NullConstraint",
          "package": "hssqlppp",
          "signature": "NullConstraint Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NullConstraint",
          "package": "hssqlppp",
          "partial": "Null Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NullConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NullLit",
          "package": "hssqlppp",
          "signature": "NullLit Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NullLit",
          "package": "hssqlppp",
          "partial": "Null Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NullLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NullStatement",
          "package": "hssqlppp",
          "signature": "NullStatement Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NullStatement",
          "package": "hssqlppp",
          "partial": "Null Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NullStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "NumberLit",
          "package": "hssqlppp",
          "signature": "NumberLit Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "NumberLit",
          "package": "hssqlppp",
          "partial": "Number Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:NumberLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamAlias",
          "package": "hssqlppp",
          "signature": "ParamAlias Annotation NameComponent Integer",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#VarDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamAlias",
          "package": "hssqlppp",
          "partial": "Param Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ParamAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDef",
          "package": "hssqlppp",
          "signature": "ParamDef Annotation NameComponent TypeName",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ParamDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDef",
          "package": "hssqlppp",
          "partial": "Param Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ParamDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDefTp",
          "package": "hssqlppp",
          "signature": "ParamDefTp Annotation TypeName",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ParamDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ParamDefTp",
          "package": "hssqlppp",
          "partial": "Param Def Tp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ParamDefTp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Perform",
          "package": "hssqlppp",
          "signature": "Perform Annotation ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Perform",
          "package": "hssqlppp",
          "partial": "Perform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Perform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Placeholder",
          "package": "hssqlppp",
          "signature": "Placeholder Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Placeholder",
          "package": "hssqlppp",
          "partial": "Placeholder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Placeholder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Plpgsql",
          "package": "hssqlppp",
          "signature": "Plpgsql",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Plpgsql",
          "package": "hssqlppp",
          "partial": "Plpgsql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Plpgsql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "PlpgsqlFnBody",
          "package": "hssqlppp",
          "signature": "PlpgsqlFnBody Annotation Statement",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FnBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "PlpgsqlFnBody",
          "package": "hssqlppp",
          "partial": "Plpgsql Fn Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:PlpgsqlFnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "PositionalArg",
          "package": "hssqlppp",
          "signature": "PositionalArg Annotation Integer",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "PositionalArg",
          "package": "hssqlppp",
          "partial": "Positional Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:PositionalArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Prec2TypeName",
          "package": "hssqlppp",
          "signature": "Prec2TypeName Annotation String Integer Integer",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Prec2TypeName",
          "package": "hssqlppp",
          "partial": "Prec Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Prec2TypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "PrecTypeName",
          "package": "hssqlppp",
          "signature": "PrecTypeName Annotation String Integer",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "PrecTypeName",
          "package": "hssqlppp",
          "partial": "Prec Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:PrecTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "PrimaryKeyConstraint",
          "package": "hssqlppp",
          "signature": "PrimaryKeyConstraint Annotation String [NameComponent]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "PrimaryKeyConstraint",
          "normalized": "PrimaryKeyConstraint Annotation String[NameComponent]",
          "package": "hssqlppp",
          "partial": "Primary Key Constraint",
          "signature": "PrimaryKeyConstraint Annotation String[NameComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:PrimaryKeyConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "QIdentifier",
          "package": "hssqlppp",
          "signature": "QIdentifier Annotation [NameComponent]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "QIdentifier",
          "normalized": "QIdentifier Annotation[NameComponent]",
          "package": "hssqlppp",
          "partial": "QIdentifier",
          "signature": "QIdentifier Annotation[NameComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:QIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "QNmc",
          "package": "hssqlppp",
          "signature": "QNmc String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#NameComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "QNmc",
          "package": "hssqlppp",
          "partial": "QNmc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:QNmc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "QStar",
          "package": "hssqlppp",
          "signature": "QStar Annotation NameComponent",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "QStar",
          "package": "hssqlppp",
          "partial": "QStar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:QStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "QueryStatement",
          "package": "hssqlppp",
          "signature": "QueryStatement Annotation QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "QueryStatement",
          "package": "hssqlppp",
          "partial": "Query Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:QueryStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RError",
          "package": "hssqlppp",
          "signature": "RError",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RaiseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RError",
          "package": "hssqlppp",
          "partial": "RError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RException",
          "package": "hssqlppp",
          "signature": "RException",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RaiseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RException",
          "package": "hssqlppp",
          "partial": "RException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RNotice",
          "package": "hssqlppp",
          "signature": "RNotice",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RaiseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RNotice",
          "package": "hssqlppp",
          "partial": "RNotice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Raise",
          "package": "hssqlppp",
          "signature": "Raise Annotation RaiseType String ScalarExprList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Raise",
          "package": "hssqlppp",
          "partial": "Raise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ReferenceConstraint",
          "package": "hssqlppp",
          "signature": "ReferenceConstraint Annotation String [NameComponent] Name [NameComponent] Cascade Cascade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ReferenceConstraint",
          "normalized": "ReferenceConstraint Annotation String[NameComponent]Name[NameComponent]Cascade Cascade",
          "package": "hssqlppp",
          "partial": "Reference Constraint",
          "signature": "ReferenceConstraint Annotation String[NameComponent]Name[NameComponent]Cascade Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ReferenceConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Replace",
          "package": "hssqlppp",
          "signature": "Replace",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Replace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Replace",
          "package": "hssqlppp",
          "partial": "Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Require",
          "package": "hssqlppp",
          "signature": "Require",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#IfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Require",
          "package": "hssqlppp",
          "partial": "Require",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RestartIdentity",
          "package": "hssqlppp",
          "signature": "RestartIdentity",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RestartIdentity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RestartIdentity",
          "package": "hssqlppp",
          "partial": "Restart Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RestartIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Restrict",
          "package": "hssqlppp",
          "signature": "Restrict",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Cascade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Restrict",
          "package": "hssqlppp",
          "partial": "Restrict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Restrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Return",
          "package": "hssqlppp",
          "signature": "Return Annotation MaybeScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Return",
          "package": "hssqlppp",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ReturnNext",
          "package": "hssqlppp",
          "signature": "ReturnNext Annotation ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ReturnNext",
          "package": "hssqlppp",
          "partial": "Return Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ReturnNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ReturnQuery",
          "package": "hssqlppp",
          "signature": "ReturnQuery Annotation QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ReturnQuery",
          "package": "hssqlppp",
          "partial": "Return Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ReturnQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RightOuter",
          "package": "hssqlppp",
          "signature": "RightOuter",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RightOuter",
          "package": "hssqlppp",
          "partial": "Right Outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RightOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowCheckConstraint",
          "package": "hssqlppp",
          "signature": "RowCheckConstraint Annotation String ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowCheckConstraint",
          "package": "hssqlppp",
          "partial": "Row Check Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RowCheckConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowPrimaryKeyConstraint",
          "package": "hssqlppp",
          "signature": "RowPrimaryKeyConstraint Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowPrimaryKeyConstraint",
          "package": "hssqlppp",
          "partial": "Row Primary Key Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RowPrimaryKeyConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowReferenceConstraint",
          "package": "hssqlppp",
          "signature": "RowReferenceConstraint Annotation String Name (Maybe NameComponent) Cascade Cascade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowReferenceConstraint",
          "package": "hssqlppp",
          "partial": "Row Reference Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RowReferenceConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowUniqueConstraint",
          "package": "hssqlppp",
          "signature": "RowUniqueConstraint Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#RowConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "RowUniqueConstraint",
          "package": "hssqlppp",
          "partial": "Row Unique Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:RowUniqueConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarSubQuery",
          "package": "hssqlppp",
          "signature": "ScalarSubQuery Annotation QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ScalarSubQuery",
          "package": "hssqlppp",
          "partial": "Scalar Sub Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ScalarSubQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelExp",
          "package": "hssqlppp",
          "signature": "SelExp Annotation ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SelectItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelExp",
          "package": "hssqlppp",
          "partial": "Sel Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SelExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Select",
          "package": "hssqlppp",
          "signature": "Select Annotation Distinct SelectList TableRefList MaybeBoolExpr ScalarExprList MaybeBoolExpr ScalarExprDirectionPairList MaybeScalarExpr MaybeScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Select",
          "package": "hssqlppp",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectItem",
          "package": "hssqlppp",
          "signature": "SelectItem Annotation ScalarExpr NameComponent",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SelectItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectItem",
          "package": "hssqlppp",
          "partial": "Select Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SelectItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectList",
          "package": "hssqlppp",
          "signature": "SelectList Annotation SelectItemList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SelectList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SelectList",
          "package": "hssqlppp",
          "partial": "Select List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SelectList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Set",
          "package": "hssqlppp",
          "signature": "Set Annotation String [SetValue]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Set",
          "normalized": "Set Annotation String[SetValue]",
          "package": "hssqlppp",
          "partial": "Set",
          "signature": "Set Annotation String[SetValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetClause",
          "package": "hssqlppp",
          "signature": "SetClause Annotation NameComponent ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetClause",
          "package": "hssqlppp",
          "partial": "Set Clause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SetClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetId",
          "package": "hssqlppp",
          "signature": "SetId Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetId",
          "package": "hssqlppp",
          "partial": "Set Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SetId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetNum",
          "package": "hssqlppp",
          "signature": "SetNum Annotation Double",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetNum",
          "package": "hssqlppp",
          "partial": "Set Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SetNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetOfTypeName",
          "package": "hssqlppp",
          "signature": "SetOfTypeName Annotation TypeName",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetOfTypeName",
          "package": "hssqlppp",
          "partial": "Set Of Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SetOfTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetStr",
          "package": "hssqlppp",
          "signature": "SetStr Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#SetValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SetStr",
          "package": "hssqlppp",
          "partial": "Set Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SetStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SimpleTypeName",
          "package": "hssqlppp",
          "signature": "SimpleTypeName Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SimpleTypeName",
          "package": "hssqlppp",
          "partial": "Simple Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SimpleTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Sql",
          "package": "hssqlppp",
          "signature": "Sql",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Sql",
          "package": "hssqlppp",
          "partial": "Sql",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Sql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SqlFnBody",
          "package": "hssqlppp",
          "signature": "SqlFnBody Annotation StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#FnBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SqlFnBody",
          "package": "hssqlppp",
          "partial": "Sql Fn Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SqlFnBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Stable",
          "package": "hssqlppp",
          "signature": "Stable",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Volatility",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Stable",
          "package": "hssqlppp",
          "partial": "Stable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Stable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Star",
          "package": "hssqlppp",
          "signature": "Star Annotation",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Star",
          "package": "hssqlppp",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Stdin",
          "package": "hssqlppp",
          "signature": "Stdin",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CopySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Stdin",
          "package": "hssqlppp",
          "partial": "Stdin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "StringLit",
          "package": "hssqlppp",
          "signature": "StringLit Annotation String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "StringLit",
          "package": "hssqlppp",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "SubTref",
          "package": "hssqlppp",
          "signature": "SubTref Annotation QueryExpr TableAlias",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "SubTref",
          "package": "hssqlppp",
          "partial": "Sub Tref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:SubTref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TDelete",
          "package": "hssqlppp",
          "signature": "TDelete",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TDelete",
          "package": "hssqlppp",
          "partial": "TDelete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TInsert",
          "package": "hssqlppp",
          "signature": "TInsert",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TInsert",
          "package": "hssqlppp",
          "partial": "TInsert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TUpdate",
          "package": "hssqlppp",
          "signature": "TUpdate",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TUpdate",
          "package": "hssqlppp",
          "partial": "TUpdate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Table",
          "package": "hssqlppp",
          "signature": "Table",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#DropType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Table",
          "package": "hssqlppp",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableAlias",
          "package": "hssqlppp",
          "signature": "TableAlias Annotation NameComponent",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableAlias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TableAlias",
          "package": "hssqlppp",
          "partial": "Table Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TableAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Tref",
          "package": "hssqlppp",
          "signature": "Tref Annotation Name TableAlias",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TableRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Tref",
          "package": "hssqlppp",
          "partial": "Tref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Tref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerAfter",
          "package": "hssqlppp",
          "signature": "TriggerAfter",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerAfter",
          "package": "hssqlppp",
          "partial": "Trigger After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TriggerAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerBefore",
          "package": "hssqlppp",
          "signature": "TriggerBefore",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TriggerWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TriggerBefore",
          "package": "hssqlppp",
          "partial": "Trigger Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TriggerBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Truncate",
          "package": "hssqlppp",
          "signature": "Truncate Annotation [Name] RestartIdentity Cascade",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Truncate",
          "normalized": "Truncate Annotation[Name]RestartIdentity Cascade",
          "package": "hssqlppp",
          "partial": "Truncate",
          "signature": "Truncate Annotation[Name]RestartIdentity Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Type",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#DropType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Type",
          "package": "hssqlppp",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeAttDef",
          "package": "hssqlppp",
          "signature": "TypeAttDef Annotation NameComponent TypeName",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#TypeAttributeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypeAttDef",
          "package": "hssqlppp",
          "partial": "Type Att Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TypeAttDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypedStringLit",
          "package": "hssqlppp",
          "signature": "TypedStringLit Annotation TypeName String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "TypedStringLit",
          "package": "hssqlppp",
          "partial": "Typed String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:TypedStringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Union",
          "package": "hssqlppp",
          "signature": "Union",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CombineType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Union",
          "package": "hssqlppp",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "UnionAll",
          "package": "hssqlppp",
          "signature": "UnionAll",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#CombineType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "UnionAll",
          "package": "hssqlppp",
          "partial": "Union All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:UnionAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "UniqueConstraint",
          "package": "hssqlppp",
          "signature": "UniqueConstraint Annotation String [NameComponent]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "UniqueConstraint",
          "normalized": "UniqueConstraint Annotation String[NameComponent]",
          "package": "hssqlppp",
          "partial": "Unique Constraint",
          "signature": "UniqueConstraint Annotation String[NameComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:UniqueConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Unnatural",
          "package": "hssqlppp",
          "signature": "Unnatural",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Natural",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Unnatural",
          "package": "hssqlppp",
          "partial": "Unnatural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Unnatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Update",
          "package": "hssqlppp",
          "signature": "Update Annotation Name SetClauseList TableRefList MaybeBoolExpr MaybeSelectList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Update",
          "package": "hssqlppp",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Values",
          "package": "hssqlppp",
          "signature": "Values Annotation ScalarExprListList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Values",
          "package": "hssqlppp",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarAlias",
          "package": "hssqlppp",
          "signature": "VarAlias Annotation NameComponent Name",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#VarDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarAlias",
          "package": "hssqlppp",
          "partial": "Var Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:VarAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarDef",
          "package": "hssqlppp",
          "signature": "VarDef Annotation NameComponent TypeName (Maybe ScalarExpr)",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#VarDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "VarDef",
          "package": "hssqlppp",
          "partial": "Var Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:VarDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "View",
          "package": "hssqlppp",
          "signature": "View",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#DropType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "View",
          "package": "hssqlppp",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "Volatile",
          "package": "hssqlppp",
          "signature": "Volatile",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Volatility",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "Volatile",
          "package": "hssqlppp",
          "partial": "Volatile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:Volatile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "WhileStatement",
          "package": "hssqlppp",
          "signature": "WhileStatement Annotation (Maybe String) ScalarExpr StatementList",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "WhileStatement",
          "package": "hssqlppp",
          "partial": "While Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:WhileStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "WindowFn",
          "package": "hssqlppp",
          "signature": "WindowFn Annotation ScalarExpr ScalarExprList ScalarExprDirectionPairList FrameClause",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ScalarExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "WindowFn",
          "package": "hssqlppp",
          "partial": "Window Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:WindowFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQuery",
          "package": "hssqlppp",
          "signature": "WithQuery Annotation NameComponent (Maybe [NameComponent]) QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#WithQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQuery",
          "normalized": "WithQuery Annotation NameComponent(Maybe[NameComponent])QueryExpr",
          "package": "hssqlppp",
          "partial": "With Query",
          "signature": "WithQuery Annotation NameComponent(Maybe[NameComponent])QueryExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:WithQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQueryExpr",
          "package": "hssqlppp",
          "signature": "WithQueryExpr Annotation WithQueryList QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "WithQueryExpr",
          "package": "hssqlppp",
          "partial": "With Query Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:WithQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Ast",
          "name": "ncStr",
          "package": "hssqlppp",
          "signature": "NameComponent -\u003e String",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#ncStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Ast",
          "module": "Database.HsSqlPpp.Ast",
          "name": "ncStr",
          "normalized": "NameComponent-\u003eString",
          "package": "hssqlppp",
          "partial": "Str",
          "signature": "NameComponent-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Ast.html#v:ncStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the database catalog data types and helper\n   functions.\n\u003c/p\u003e\u003cp\u003eThe catalog data type serves the following purposes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Contains all the catalog information needed to type check against\n      an existing database.\n\u003c/li\u003e\u003cli\u003e A copy of the catalog information from a default template1\n     database is included - \u003ccode\u003e\u003ca\u003edefaultTemplate1Catalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e It is used internally to keep track of updates to the catalog\n      whilst running an annotation process (e.g. so that a select can\n      type check against a create table given in the same source). It\n      is also used to track other identifier types, such as attribute\n      references in select expressions, and argument and variable\n      types inside create function statements.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can see what kind of stuff is contained in the Catalog type\n   by looking at the \u003ccode\u003e\u003ca\u003eCatalogUpdate\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "Catalog",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Catalog.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the database catalog data types and helper functions The catalog data type serves the following purposes Contains all the catalog information needed to type check against an existing database copy of the catalog information from default template1 database is included defaultTemplate1Catalog It is used internally to keep track of updates to the catalog whilst running an annotation process e.g so that select can type check against create table given in the same source It is also used to track other identifier types such as attribute references in select expressions and argument and variable types inside create function statements You can see what kind of stuff is contained in the Catalog type by looking at the CatalogUpdate type",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "Catalog",
          "package": "hssqlppp",
          "partial": "Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse to note what the flavour of a cast is, i.e. if/when it can\n be used implicitly.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CastContext",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CastContext",
          "type": "data"
        },
        "index": {
          "description": "Use to note what the flavour of cast is i.e if when it can be used implicitly",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CastContext",
          "package": "hssqlppp",
          "partial": "Cast Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:CastContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main datatype, this holds the catalog and context\n information to type check against.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "Catalog",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#Catalog",
          "type": "data"
        },
        "index": {
          "description": "The main datatype this holds the catalog and context information to type check against",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "Catalog",
          "package": "hssqlppp",
          "partial": "Catalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eitems in first catalog and not second, items in second and not first.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatalogDiff",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogDiff",
          "type": "data"
        },
        "index": {
          "description": "items in first catalog and not second items in second and not first",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatalogDiff",
          "package": "hssqlppp",
          "partial": "Catalog Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:CatalogDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatalogUpdate",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatalogUpdate",
          "package": "hssqlppp",
          "partial": "Catalog Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:CatalogUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides the definition of a composite type. The components are\n composite (or table or view) name, the flavour of the composite,\n the types of the composite attributes, and the types of the\n system columns iff the composite represents a table type (the\n third and fourth components are always \u003ccode\u003e\u003ca\u003eCompositeType\u003c/a\u003e\u003c/code\u003es).\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CompositeDef",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CompositeDef",
          "type": "type"
        },
        "index": {
          "description": "Provides the definition of composite type The components are composite or table or view name the flavour of the composite the types of the composite attributes and the types of the system columns iff the composite represents table type the third and fourth components are always CompositeType",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CompositeDef",
          "package": "hssqlppp",
          "partial": "Composite Def",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:CompositeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to distinguish between standalone composite types, and\n automatically generated ones, generated from a table or view\n respectively.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CompositeFlavour",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CompositeFlavour",
          "type": "data"
        },
        "index": {
          "description": "Used to distinguish between standalone composite types and automatically generated ones generated from table or view respectively",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CompositeFlavour",
          "package": "hssqlppp",
          "partial": "Composite Flavour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:CompositeFlavour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe components are domain type, base type (todo: add check\n constraint).\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "DomainDefinition",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#DomainDefinition",
          "type": "type"
        },
        "index": {
          "description": "The components are domain type base type todo add check constraint",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "DomainDefinition",
          "package": "hssqlppp",
          "partial": "Domain Definition",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:DomainDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunFlav",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunFlav",
          "package": "hssqlppp",
          "partial": "Fun Flav",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:FunFlav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe components are: function (or operator) name, argument\n types, return type and is variadic.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunctionPrototype",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunctionPrototype",
          "type": "type"
        },
        "index": {
          "description": "The components are function or operator name argument types return type and is variadic",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunctionPrototype",
          "package": "hssqlppp",
          "partial": "Function Prototype",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:FunctionPrototype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "OperatorType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#OperatorType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "OperatorType",
          "package": "hssqlppp",
          "partial": "Operator Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#t:OperatorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "AssignmentCastContext",
          "package": "hssqlppp",
          "signature": "AssignmentCastContext",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CastContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "AssignmentCastContext",
          "package": "hssqlppp",
          "partial": "Assignment Cast Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:AssignmentCastContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "BinaryOp",
          "package": "hssqlppp",
          "signature": "BinaryOp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#OperatorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "BinaryOp",
          "package": "hssqlppp",
          "partial": "Binary Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:BinaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new cast to the catalog\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateCast",
          "package": "hssqlppp",
          "signature": "CatCreateCast Type Type CastContext",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add new cast to the catalog",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateCast",
          "package": "hssqlppp",
          "partial": "Cat Create Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new composite type to the catalog\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateComposite",
          "package": "hssqlppp",
          "signature": "CatCreateComposite String [(String, Type)]",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add new composite type to the catalog",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateComposite",
          "normalized": "CatCreateComposite String[(String,Type)]",
          "package": "hssqlppp",
          "partial": "Cat Create Composite",
          "signature": "CatCreateComposite String[(String,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateComposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new domain to the catalog\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateDomain",
          "package": "hssqlppp",
          "signature": "CatCreateDomain Type Type",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add new domain to the catalog",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateDomain",
          "package": "hssqlppp",
          "partial": "Cat Create Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new function to the catalog\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateFunction",
          "package": "hssqlppp",
          "signature": "CatCreateFunction FunFlav String [Type] Type Bool",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add new function to the catalog",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateFunction",
          "normalized": "CatCreateFunction FunFlav String[Type]Type Bool",
          "package": "hssqlppp",
          "partial": "Cat Create Function",
          "signature": "CatCreateFunction FunFlav String[Type]Type Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new scalar type with the name given, also creates\n an array type automatically\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateScalar",
          "package": "hssqlppp",
          "signature": "CatCreateScalar Type String Bool",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add new scalar type with the name given also creates an array type automatically",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateScalar",
          "package": "hssqlppp",
          "partial": "Cat Create Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new table to the catalog with the given public and private columns\n also creates the composite type to go with this table\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateTable",
          "package": "hssqlppp",
          "signature": "CatCreateTable String [(String, Type)] [(String, Type)]",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add new table to the catalog with the given public and private columns also creates the composite type to go with this table",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateTable",
          "normalized": "CatCreateTable String[(String,Type)][(String,Type)]",
          "package": "hssqlppp",
          "partial": "Cat Create Table",
          "signature": "CatCreateTable String[(String,Type)][(String,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the view to the catalog, using the column names and types supplied\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateView",
          "package": "hssqlppp",
          "signature": "CatCreateView String [(String, Type)]",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "add the view to the catalog using the column names and types supplied",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatCreateView",
          "normalized": "CatCreateView String[(String,Type)]",
          "package": "hssqlppp",
          "partial": "Cat Create View",
          "signature": "CatCreateView String[(String,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatCreateView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edrop a function from the catalog\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatDropFunction",
          "package": "hssqlppp",
          "signature": "CatDropFunction Bool String [Type]",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "drop function from the catalog",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatDropFunction",
          "normalized": "CatDropFunction Bool String[Type]",
          "package": "hssqlppp",
          "partial": "Cat Drop Function",
          "signature": "CatDropFunction Bool String[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatDropFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatalogDiff",
          "package": "hssqlppp",
          "signature": "CatalogDiff [CatalogUpdate] [CatalogUpdate]",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CatalogDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "CatalogDiff",
          "normalized": "CatalogDiff[CatalogUpdate][CatalogUpdate]",
          "package": "hssqlppp",
          "partial": "Catalog Diff",
          "signature": "CatalogDiff[CatalogUpdate][CatalogUpdate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:CatalogDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "Composite",
          "package": "hssqlppp",
          "signature": "Composite",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CompositeFlavour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "Composite",
          "package": "hssqlppp",
          "partial": "Composite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:Composite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ExplicitCastContext",
          "package": "hssqlppp",
          "signature": "ExplicitCastContext",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CastContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ExplicitCastContext",
          "package": "hssqlppp",
          "partial": "Explicit Cast Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:ExplicitCastContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunAgg",
          "package": "hssqlppp",
          "signature": "FunAgg",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunAgg",
          "package": "hssqlppp",
          "partial": "Fun Agg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:FunAgg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunBinary",
          "package": "hssqlppp",
          "signature": "FunBinary",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunBinary",
          "package": "hssqlppp",
          "partial": "Fun Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:FunBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunName",
          "package": "hssqlppp",
          "signature": "FunName",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunName",
          "package": "hssqlppp",
          "partial": "Fun Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:FunName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunPostfix",
          "package": "hssqlppp",
          "signature": "FunPostfix",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunPostfix",
          "package": "hssqlppp",
          "partial": "Fun Postfix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:FunPostfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunPrefix",
          "package": "hssqlppp",
          "signature": "FunPrefix",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunPrefix",
          "package": "hssqlppp",
          "partial": "Fun Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:FunPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunWindow",
          "package": "hssqlppp",
          "signature": "FunWindow",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#FunFlav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "FunWindow",
          "package": "hssqlppp",
          "partial": "Fun Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:FunWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ImplicitCastContext",
          "package": "hssqlppp",
          "signature": "ImplicitCastContext",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CastContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ImplicitCastContext",
          "package": "hssqlppp",
          "partial": "Implicit Cast Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:ImplicitCastContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "PostfixOp",
          "package": "hssqlppp",
          "signature": "PostfixOp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#OperatorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "PostfixOp",
          "package": "hssqlppp",
          "partial": "Postfix Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:PostfixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "PrefixOp",
          "package": "hssqlppp",
          "signature": "PrefixOp",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#OperatorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "PrefixOp",
          "package": "hssqlppp",
          "partial": "Prefix Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:PrefixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "TableComposite",
          "package": "hssqlppp",
          "signature": "TableComposite",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CompositeFlavour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "TableComposite",
          "package": "hssqlppp",
          "partial": "Table Composite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:TableComposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ViewComposite",
          "package": "hssqlppp",
          "signature": "ViewComposite",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#CompositeFlavour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ViewComposite",
          "package": "hssqlppp",
          "partial": "View Composite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:ViewComposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind differences between two catalogs\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "compareCatalogs",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e Catalog -\u003e Catalog -\u003e CatalogDiff",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#compareCatalogs",
          "type": "function"
        },
        "index": {
          "description": "find differences between two catalogs",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "compareCatalogs",
          "normalized": "Catalog-\u003eCatalog-\u003eCatalog-\u003eCatalogDiff",
          "package": "hssqlppp",
          "partial": "Catalogs",
          "signature": "Catalog-\u003eCatalog-\u003eCatalog-\u003eCatalogDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:compareCatalogs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "deconstructCatalog",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e [CatalogUpdate]",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#deconstructCatalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "deconstructCatalog",
          "normalized": "Catalog-\u003e[CatalogUpdate]",
          "package": "hssqlppp",
          "partial": "Catalog",
          "signature": "Catalog-\u003e[CatalogUpdate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:deconstructCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents what you probably want to use as a starting point if\n you are building an catalog from scratch. It contains\n information on built in function like things that aren't in the\n PostgreSQL catalog, such as greatest, coalesce, keyword operators\n like 'and', etc..\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "defaultCatalog",
          "package": "hssqlppp",
          "signature": "Catalog",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#defaultCatalog",
          "type": "function"
        },
        "index": {
          "description": "Represents what you probably want to use as starting point if you are building an catalog from scratch It contains information on built in function like things that aren in the PostgreSQL catalog such as greatest coalesce keyword operators like and etc",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "defaultCatalog",
          "package": "hssqlppp",
          "partial": "Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:defaultCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "defaultTemplate1Catalog",
          "package": "hssqlppp",
          "signature": "Catalog",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-DefaultTemplate1Catalog.html#defaultTemplate1Catalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "defaultTemplate1Catalog",
          "package": "hssqlppp",
          "partial": "Template Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:defaultTemplate1Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an empty catalog. This doesn't contain things\n like the 'and' operator, \u003ccode\u003e\u003ca\u003edefaultCatalog\u003c/a\u003e\u003c/code\u003e contains these.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "emptyCatalog",
          "package": "hssqlppp",
          "signature": "Catalog",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#emptyCatalog",
          "type": "function"
        },
        "index": {
          "description": "Represents an empty catalog This doesn contain things like the and operator defaultCatalog contains these",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "emptyCatalog",
          "package": "hssqlppp",
          "partial": "Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:emptyCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "getOperatorType",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e String -\u003e Either [TypeError] OperatorType",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#getOperatorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "getOperatorType",
          "normalized": "Catalog-\u003eString-\u003eEither[TypeError]OperatorType",
          "package": "hssqlppp",
          "partial": "Operator Type",
          "signature": "Catalog-\u003eString-\u003eEither[TypeError]OperatorType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:getOperatorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Catalog",
          "name": "isOperatorName",
          "package": "hssqlppp",
          "signature": "String -\u003e Bool",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#isOperatorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "isOperatorName",
          "normalized": "String-\u003eBool",
          "package": "hssqlppp",
          "partial": "Operator Name",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:isOperatorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprint a catdiff in a more human readable way than show.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ppCatDiff",
          "package": "hssqlppp",
          "signature": "CatalogDiff -\u003e String",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#ppCatDiff",
          "type": "function"
        },
        "index": {
          "description": "print catdiff in more human readable way than show",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ppCatDiff",
          "normalized": "CatalogDiff-\u003eString",
          "package": "hssqlppp",
          "partial": "Cat Diff",
          "signature": "CatalogDiff-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:ppCatDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempt to show a readable representation of a \u003ccode\u003e\u003ca\u003eCatalogUpdate\u003c/a\u003e\u003c/code\u003e value\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ppCatUpdate",
          "package": "hssqlppp",
          "signature": "CatalogUpdate -\u003e String",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#ppCatUpdate",
          "type": "function"
        },
        "index": {
          "description": "attempt to show readable representation of CatalogUpdate value",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "ppCatUpdate",
          "normalized": "CatalogUpdate-\u003eString",
          "package": "hssqlppp",
          "partial": "Cat Update",
          "signature": "CatalogUpdate-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:ppCatUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a list of \u003ccode\u003e\u003ca\u003eCatalogUpdate\u003c/a\u003e\u003c/code\u003es to an \u003ccode\u003e\u003ca\u003eCatalog\u003c/a\u003e\u003c/code\u003e value\n to produce a new Catalog value.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "updateCatalog",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e [CatalogUpdate] -\u003e Either [TypeError] Catalog",
          "source": "src/Database-HsSqlPpp-Internals-Catalog-CatalogInternal.html#updateCatalog",
          "type": "function"
        },
        "index": {
          "description": "Applies list of CatalogUpdate to an Catalog value to produce new Catalog value",
          "hierarchy": "Database HsSqlPpp Catalog",
          "module": "Database.HsSqlPpp.Catalog",
          "name": "updateCatalog",
          "normalized": "Catalog-\u003e[CatalogUpdate]-\u003eEither[TypeError]Catalog",
          "package": "hssqlppp",
          "partial": "Catalog",
          "signature": "Catalog-\u003e[CatalogUpdate]-\u003eEither[TypeError]Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Catalog.html#v:updateCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to parse SQL.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "Parser",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to parse SQL",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "Parser",
          "package": "hssqlppp",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple wrapper to allow showing the source context of a ParseError\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "ParseErrorExtra",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Parsing-ParseErrors.html#ParseErrorExtra",
          "type": "data"
        },
        "index": {
          "description": "Simple wrapper to allow showing the source context of ParseError",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "ParseErrorExtra",
          "package": "hssqlppp",
          "partial": "Parse Error Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#t:ParseErrorExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Parser",
          "name": "ParseErrorExtra",
          "package": "hssqlppp",
          "signature": "ParseErrorExtra",
          "source": "src/Database-HsSqlPpp-Parsing-ParseErrors.html#ParseErrorExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "ParseErrorExtra",
          "package": "hssqlppp",
          "partial": "Parse Error Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:ParseErrorExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapped error\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseErrorError",
          "package": "hssqlppp",
          "signature": "ParseError",
          "source": "src/Database-HsSqlPpp-Parsing-ParseErrors.html#ParseErrorExtra",
          "type": "function"
        },
        "index": {
          "description": "wrapped error",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseErrorError",
          "package": "hssqlppp",
          "partial": "Error Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseErrorError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource position\n adjustment to get the\n context bit in error\n messages right - this is\n the same as what is passed\n into parseSqlWithPosition\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseErrorPosition",
          "package": "hssqlppp",
          "signature": "Maybe (Int, Int)",
          "source": "src/Database-HsSqlPpp-Parsing-ParseErrors.html#ParseErrorExtra",
          "type": "function"
        },
        "index": {
          "description": "source position adjustment to get the context bit in error messages right this is the same as what is passed into parseSqlWithPosition",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseErrorPosition",
          "normalized": "Maybe(Int,Int)",
          "package": "hssqlppp",
          "partial": "Error Position",
          "signature": "Maybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseErrorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esql source\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseErrorSqlSource",
          "package": "hssqlppp",
          "signature": "String",
          "source": "src/Database-HsSqlPpp-Parsing-ParseErrors.html#ParseErrorExtra",
          "type": "function"
        },
        "index": {
          "description": "sql source",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseErrorSqlSource",
          "package": "hssqlppp",
          "partial": "Error Sql Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseErrorSqlSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse plpgsql statements, used for testing purposes -\n this can be used to parse a list of plpgsql statements which\n aren't contained in a create function.\n (The produced ast won't pass a type check.)\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parsePlpgsql",
          "package": "hssqlppp",
          "signature": "String -\u003e String -\u003e Either ParseErrorExtra [Statement]",
          "source": "src/Database-HsSqlPpp-Parsing-ParserInternal.html#parsePlpgsql",
          "type": "function"
        },
        "index": {
          "description": "Parse plpgsql statements used for testing purposes this can be used to parse list of plpgsql statements which aren contained in create function The produced ast won pass type check",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parsePlpgsql",
          "normalized": "String-\u003eString-\u003eEither ParseErrorExtra[Statement]",
          "package": "hssqlppp",
          "partial": "Plpgsql",
          "signature": "String-\u003eString-\u003eEither ParseErrorExtra[Statement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parsePlpgsql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseQueryExpr",
          "package": "hssqlppp",
          "signature": "String-\u003e String-\u003e Either ParseErrorExtra QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseQueryExpr",
          "normalized": "String-\u003eString-\u003eEither ParseErrorExtra QueryExpr",
          "package": "hssqlppp",
          "partial": "Query Expr",
          "signature": "String-\u003eString-\u003eEither ParseErrorExtra QueryExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse expression fragment, used for testing purposes\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseScalarExpr",
          "package": "hssqlppp",
          "signature": "String-\u003e String-\u003e Either ParseErrorExtra ScalarExpr",
          "type": "function"
        },
        "index": {
          "description": "Parse expression fragment used for testing purposes",
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseScalarExpr",
          "normalized": "String-\u003eString-\u003eEither ParseErrorExtra ScalarExpr",
          "package": "hssqlppp",
          "partial": "Scalar Expr",
          "signature": "String-\u003eString-\u003eEither ParseErrorExtra ScalarExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseScalarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseStatements",
          "package": "hssqlppp",
          "signature": "String-\u003e String-\u003e Either ParseErrorExtra [Statement]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseStatements",
          "normalized": "String-\u003eString-\u003eEither ParseErrorExtra[Statement]",
          "package": "hssqlppp",
          "partial": "Statements",
          "signature": "String-\u003eString-\u003eEither ParseErrorExtra[Statement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseStatements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseStatementsFromFile",
          "package": "hssqlppp",
          "signature": "FilePath-\u003e IO (Either ParseErrorExtra [Statement])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseStatementsFromFile",
          "normalized": "FilePath-\u003eIO(Either ParseErrorExtra[Statement])",
          "package": "hssqlppp",
          "partial": "Statements From File",
          "signature": "FilePath-\u003eIO(Either ParseErrorExtra[Statement])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseStatementsFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseStatementsWithPosition",
          "package": "hssqlppp",
          "signature": "FilePath-\u003e Int-\u003e Int-\u003e String-\u003e Either ParseErrorExtra [Statement]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Parser",
          "module": "Database.HsSqlPpp.Parser",
          "name": "parseStatementsWithPosition",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eString-\u003eEither ParseErrorExtra[Statement]",
          "package": "hssqlppp",
          "partial": "Statements With Position",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eString-\u003eEither ParseErrorExtra[Statement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Parser.html#v:parseStatementsWithPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to convert sql asts to valid SQL source code. Includes\n     a function - \u003ccode\u003eprintSqlAnn\u003c/code\u003e - to output the annotations from a tree\n     in comments in the outputted SQL source.\n\u003c/p\u003e\u003cp\u003eProduces sort of readable code, but mainly just written to produce\n     reparsable text. Could do with some work to make the outputted text\n     layout better.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "Pretty",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to convert sql asts to valid SQL source code Includes function printSqlAnn to output the annotations from tree in comments in the outputted SQL source Produces sort of readable code but mainly just written to produce reparsable text Could do with some work to make the outputted text layout better",
          "hierarchy": "Database HsSqlPpp Pretty",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "Pretty",
          "package": "hssqlppp",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printQueryExpr",
          "package": "hssqlppp",
          "signature": "QueryExpr -\u003e String",
          "source": "src/Database-HsSqlPpp-Pretty.html#printQueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Pretty",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printQueryExpr",
          "normalized": "QueryExpr-\u003eString",
          "package": "hssqlppp",
          "partial": "Query Expr",
          "signature": "QueryExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Pretty.html#v:printQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry harder to make the output human readable, not necessary correct\n sql output at the moment\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printQueryExprNice",
          "package": "hssqlppp",
          "signature": "QueryExpr -\u003e String",
          "source": "src/Database-HsSqlPpp-Pretty.html#printQueryExprNice",
          "type": "function"
        },
        "index": {
          "description": "Try harder to make the output human readable not necessary correct sql output at the moment",
          "hierarchy": "Database HsSqlPpp Pretty",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printQueryExprNice",
          "normalized": "QueryExpr-\u003eString",
          "package": "hssqlppp",
          "partial": "Query Expr Nice",
          "signature": "QueryExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Pretty.html#v:printQueryExprNice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTesting function, pretty print an expression\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printScalarExpr",
          "package": "hssqlppp",
          "signature": "ScalarExpr -\u003e String",
          "source": "src/Database-HsSqlPpp-Pretty.html#printScalarExpr",
          "type": "function"
        },
        "index": {
          "description": "Testing function pretty print an expression",
          "hierarchy": "Database HsSqlPpp Pretty",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printScalarExpr",
          "normalized": "ScalarExpr-\u003eString",
          "package": "hssqlppp",
          "partial": "Scalar Expr",
          "signature": "ScalarExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Pretty.html#v:printScalarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert an ast back to valid SQL source, it's also almost human readable.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printStatements",
          "package": "hssqlppp",
          "signature": "StatementList -\u003e String",
          "source": "src/Database-HsSqlPpp-Pretty.html#printStatements",
          "type": "function"
        },
        "index": {
          "description": "convert an ast back to valid SQL source it also almost human readable",
          "hierarchy": "Database HsSqlPpp Pretty",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printStatements",
          "normalized": "StatementList-\u003eString",
          "package": "hssqlppp",
          "partial": "Statements",
          "signature": "StatementList-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Pretty.html#v:printStatements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert the ast back to valid source, and convert any annotations to\n text using the function provided and interpolate the output of\n this function(inside comments) with the SQL source.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printStatementsAnn",
          "package": "hssqlppp",
          "signature": "(Annotation -\u003e String) -\u003e StatementList -\u003e String",
          "source": "src/Database-HsSqlPpp-Pretty.html#printStatementsAnn",
          "type": "function"
        },
        "index": {
          "description": "convert the ast back to valid source and convert any annotations to text using the function provided and interpolate the output of this function inside comments with the SQL source",
          "hierarchy": "Database HsSqlPpp Pretty",
          "module": "Database.HsSqlPpp.Pretty",
          "name": "printStatementsAnn",
          "normalized": "(Annotation-\u003eString)-\u003eStatementList-\u003eString",
          "package": "hssqlppp",
          "partial": "Statements Ann",
          "signature": "(Annotation-\u003eString)-\u003eStatementList-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Pretty.html#v:printStatementsAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA quasiquoter for SQL. Antiquoting is a bit inconsistent. The\n  splice variable names must be all lower case because of a limitation\n  in the parser.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \n import Database.HsSqlPpp.Ast\n import Database.HsSqlPpp.Quote\n import Database.HsSqlPpp.Annotation\n\n test :: Statement\n test = [$sqlStmt|\n\n   create table $(tablename) (\n    $(varname) $(typename)\n   );\n\n         |]\n   where\n     tablename = \"my_table\"\n     varname = \"my_field\"\n     typename = \"text\"\n\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003ehttp://jakewheat.github.com/hssqlppp/QuasiQuoteTests.html\u003c/a\u003e\n  for more simple examples\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Quote",
          "name": "Quote",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Quote.html",
          "type": "module"
        },
        "index": {
          "description": "quasiquoter for SQL Antiquoting is bit inconsistent The splice variable names must be all lower case because of limitation in the parser Example import Database.HsSqlPpp.Ast import Database.HsSqlPpp.Quote import Database.HsSqlPpp.Annotation test Statement test sqlStmt create table tablename varname typename where tablename my table varname my field typename text See http jakewheat.github.com hssqlppp QuasiQuoteTests.html for more simple examples",
          "hierarchy": "Database HsSqlPpp Quote",
          "module": "Database.HsSqlPpp.Quote",
          "name": "Quote",
          "package": "hssqlppp",
          "partial": "Quote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Quote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equotes a plpgsql Statement\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Quote",
          "name": "pgsqlStmt",
          "package": "hssqlppp",
          "signature": "QuasiQuoter",
          "source": "src/Database-HsSqlPpp-Quote.html#pgsqlStmt",
          "type": "function"
        },
        "index": {
          "description": "quotes plpgsql Statement",
          "hierarchy": "Database HsSqlPpp Quote",
          "module": "Database.HsSqlPpp.Quote",
          "name": "pgsqlStmt",
          "package": "hssqlppp",
          "partial": "Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Quote.html#v:pgsqlStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equotes plpgsql Statements\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Quote",
          "name": "pgsqlStmts",
          "package": "hssqlppp",
          "signature": "QuasiQuoter",
          "source": "src/Database-HsSqlPpp-Quote.html#pgsqlStmts",
          "type": "function"
        },
        "index": {
          "description": "quotes plpgsql Statements",
          "hierarchy": "Database HsSqlPpp Quote",
          "module": "Database.HsSqlPpp.Quote",
          "name": "pgsqlStmts",
          "package": "hssqlppp",
          "partial": "Stmts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Quote.html#v:pgsqlStmts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equotes a ScalarExpr\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Quote",
          "name": "sqlExpr",
          "package": "hssqlppp",
          "signature": "QuasiQuoter",
          "source": "src/Database-HsSqlPpp-Quote.html#sqlExpr",
          "type": "function"
        },
        "index": {
          "description": "quotes ScalarExpr",
          "hierarchy": "Database HsSqlPpp Quote",
          "module": "Database.HsSqlPpp.Quote",
          "name": "sqlExpr",
          "package": "hssqlppp",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Quote.html#v:sqlExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equotes a single Statement\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Quote",
          "name": "sqlStmt",
          "package": "hssqlppp",
          "signature": "QuasiQuoter",
          "source": "src/Database-HsSqlPpp-Quote.html#sqlStmt",
          "type": "function"
        },
        "index": {
          "description": "quotes single Statement",
          "hierarchy": "Database HsSqlPpp Quote",
          "module": "Database.HsSqlPpp.Quote",
          "name": "sqlStmt",
          "package": "hssqlppp",
          "partial": "Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Quote.html#v:sqlStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equotes Statements\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.Quote",
          "name": "sqlStmts",
          "package": "hssqlppp",
          "signature": "QuasiQuoter",
          "source": "src/Database-HsSqlPpp-Quote.html#sqlStmts",
          "type": "function"
        },
        "index": {
          "description": "quotes Statements",
          "hierarchy": "Database HsSqlPpp Quote",
          "module": "Database.HsSqlPpp.Quote",
          "name": "sqlStmts",
          "package": "hssqlppp",
          "partial": "Stmts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Quote.html#v:sqlStmts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains the data types and functions for annotating\n   an ast and working with annotated trees, including the\n   representations of SQL data types.\n\u003c/p\u003e\u003cp\u003eAnnotations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e are attached to most of the ast node data types, but not quite all of them;\n\u003c/li\u003e\u003cli\u003e types annotations are attached to most nodes during type checking;\n\u003c/li\u003e\u003cli\u003e type errors are attached to the lowest down node that the type\n    error is detected at;\n\u003c/li\u003e\u003cli\u003e nodes who fail the type check or whose type depends on a node with\n    a type error are given the type \u003ccode\u003eTypeCheckFailed\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e each statement has an additional \u003ccode\u003eStatementInfo\u003c/code\u003e annotation attached to it;\n\u003c/li\u003e\u003cli\u003e the parser fills in the source position annotation in every\n    annotatable ast node.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "TypeChecker",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-TypeChecker.html",
          "type": "module"
        },
        "index": {
          "description": "Contains the data types and functions for annotating an ast and working with annotated trees including the representations of SQL data types Annotations are attached to most of the ast node data types but not quite all of them types annotations are attached to most nodes during type checking type errors are attached to the lowest down node that the type error is detected at nodes who fail the type check or whose type depends on node with type error are given the type TypeCheckFailed each statement has an additional StatementInfo annotation attached to it the parser fills in the source position annotation in every annotatable ast node",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "TypeChecker",
          "package": "hssqlppp",
          "partial": "Type Checker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun through a typechecked tree and add in explicit casts where\n implicit casts are used to typecheck. Does function and operator\n calls, case result expressions, and string, integer and float\n literals at the moment, todo: union, array, greatest, least\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "addExplicitCasts",
          "package": "hssqlppp",
          "signature": "a -\u003e a",
          "source": "src/Database-HsSqlPpp-Internals-TypeChecking-Utils.html#addExplicitCasts",
          "type": "function"
        },
        "index": {
          "description": "Run through typechecked tree and add in explicit casts where implicit casts are used to typecheck Does function and operator calls case result expressions and string integer and float literals at the moment todo union array greatest least",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "addExplicitCasts",
          "normalized": "a-\u003ea",
          "package": "hssqlppp",
          "partial": "Explicit Casts",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:addExplicitCasts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert all the typenames in the ast to canonical form\n e.g. int -\u003e int4\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "canonicalizeTypeNames",
          "package": "hssqlppp",
          "signature": "a -\u003e a",
          "source": "src/Database-HsSqlPpp-Internals-TypeChecking-Utils.html#canonicalizeTypeNames",
          "type": "function"
        },
        "index": {
          "description": "Convert all the typenames in the ast to canonical form e.g int int4",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "canonicalizeTypeNames",
          "normalized": "a-\u003ea",
          "package": "hssqlppp",
          "partial": "Type Names",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:canonicalizeTypeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform the tree by converting * to explicit lists of columns and adding qualifiers to all column references\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "fixUpIdentifiers",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e [Statement] -\u003e [Statement]",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#fixUpIdentifiers",
          "type": "function"
        },
        "index": {
          "description": "transform the tree by converting to explicit lists of columns and adding qualifiers to all column references",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "fixUpIdentifiers",
          "normalized": "Catalog-\u003e[Statement]-\u003e[Statement]",
          "package": "hssqlppp",
          "partial": "Up Identifiers",
          "signature": "Catalog-\u003e[Statement]-\u003e[Statement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:fixUpIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "fixUpIdentifiersQE",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e QueryExpr -\u003e QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#fixUpIdentifiersQE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "fixUpIdentifiersQE",
          "normalized": "Catalog-\u003eQueryExpr-\u003eQueryExpr",
          "package": "hssqlppp",
          "partial": "Up Identifiers QE",
          "signature": "Catalog-\u003eQueryExpr-\u003eQueryExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:fixUpIdentifiersQE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "fixUpIdentifiersSE",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e ScalarExpr -\u003e ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#fixUpIdentifiersSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "fixUpIdentifiersSE",
          "normalized": "Catalog-\u003eScalarExpr-\u003eScalarExpr",
          "package": "hssqlppp",
          "partial": "Up Identifiers SE",
          "signature": "Catalog-\u003eScalarExpr-\u003eScalarExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:fixUpIdentifiersSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun through the ast and return all the annotations attached to\n   a Statement node.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "getStatementAnnotations",
          "package": "hssqlppp",
          "signature": "a -\u003e [Annotation]",
          "source": "src/Database-HsSqlPpp-Internals-AnnotationUtils.html#getStatementAnnotations",
          "type": "function"
        },
        "index": {
          "description": "Run through the ast and return all the annotations attached to Statement node",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "getStatementAnnotations",
          "normalized": "a-\u003e[Annotation]",
          "package": "hssqlppp",
          "partial": "Statement Annotations",
          "signature": "a-\u003e[Annotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:getStatementAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfinished version of type check which can type check an\n individual statement with ? or positional arg placeholders in\n it. Will error if the statement isn't select, update, insert or\n delete. For use in type checking embedded parameterized\n statements. Does all typechecking and annotation that the regular\n typecheck does.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckParameterizedStatement",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e Statement -\u003e Either String Statement",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#typeCheckParameterizedStatement",
          "type": "function"
        },
        "index": {
          "description": "Unfinished version of type check which can type check an individual statement with or positional arg placeholders in it Will error if the statement isn select update insert or delete For use in type checking embedded parameterized statements Does all typechecking and annotation that the regular typecheck does",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckParameterizedStatement",
          "normalized": "Catalog-\u003eStatement-\u003eEither String Statement",
          "package": "hssqlppp",
          "partial": "Check Parameterized Statement",
          "signature": "Catalog-\u003eStatement-\u003eEither String Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:typeCheckParameterizedStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckQueryExpr",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e QueryExpr -\u003e QueryExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#typeCheckQueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckQueryExpr",
          "normalized": "Catalog-\u003eQueryExpr-\u003eQueryExpr",
          "package": "hssqlppp",
          "partial": "Check Query Expr",
          "signature": "Catalog-\u003eQueryExpr-\u003eQueryExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:typeCheckQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTesting utility, mainly used to check an expression for type errors\n or to get its type.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckScalarExpr",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e ScalarExpr -\u003e ScalarExpr",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#typeCheckScalarExpr",
          "type": "function"
        },
        "index": {
          "description": "Testing utility mainly used to check an expression for type errors or to get its type",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckScalarExpr",
          "normalized": "Catalog-\u003eScalarExpr-\u003eScalarExpr",
          "package": "hssqlppp",
          "partial": "Check Scalar Expr",
          "signature": "Catalog-\u003eScalarExpr-\u003eScalarExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:typeCheckScalarExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an ast, checks against catalog passed, and adds\n   annotations, including types, type errors, and statement info.\n   Returns the updated catalog as well as the annotated ast.\n\u003c/p\u003e",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckStatements",
          "package": "hssqlppp",
          "signature": "Catalog -\u003e [Statement] -\u003e (Catalog, [Statement])",
          "source": "src/Database-HsSqlPpp-Internals-AstInternal.html#typeCheckStatements",
          "type": "function"
        },
        "index": {
          "description": "Takes an ast checks against catalog passed and adds annotations including types type errors and statement info Returns the updated catalog as well as the annotated ast",
          "hierarchy": "Database HsSqlPpp TypeChecker",
          "module": "Database.HsSqlPpp.TypeChecker",
          "name": "typeCheckStatements",
          "normalized": "Catalog-\u003e[Statement]-\u003e(Catalog,[Statement])",
          "package": "hssqlppp",
          "partial": "Check Statements",
          "signature": "Catalog-\u003e[Statement]-\u003e(Catalog,[Statement])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-TypeChecker.html#v:typeCheckStatements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains the SQL data types, type errors, and a few supporting\n       functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HsSqlPpp.Types",
          "name": "Types",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Contains the SQL data types type errors and few supporting functions",
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Types",
          "package": "hssqlppp",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "PseudoType",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "PseudoType",
          "package": "hssqlppp",
          "partial": "Pseudo Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#t:PseudoType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Type",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Type",
          "package": "hssqlppp",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "TypeError",
          "package": "hssqlppp",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "TypeError",
          "package": "hssqlppp",
          "partial": "Type Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#t:TypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AmbiguousIdentifier",
          "package": "hssqlppp",
          "signature": "AmbiguousIdentifier String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AmbiguousIdentifier",
          "package": "hssqlppp",
          "partial": "Ambiguous Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AmbiguousIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AnonymousRecordType",
          "package": "hssqlppp",
          "signature": "AnonymousRecordType [Type]",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AnonymousRecordType",
          "normalized": "AnonymousRecordType[Type]",
          "package": "hssqlppp",
          "partial": "Anonymous Record Type",
          "signature": "AnonymousRecordType[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AnonymousRecordType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Any",
          "package": "hssqlppp",
          "signature": "Any",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Any",
          "package": "hssqlppp",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyAllError",
          "package": "hssqlppp",
          "signature": "AnyAllError String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyAllError",
          "package": "hssqlppp",
          "partial": "Any All Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AnyAllError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyArray",
          "package": "hssqlppp",
          "signature": "AnyArray",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyArray",
          "package": "hssqlppp",
          "partial": "Any Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AnyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyElement",
          "package": "hssqlppp",
          "signature": "AnyElement",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyElement",
          "package": "hssqlppp",
          "partial": "Any Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AnyElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyEnum",
          "package": "hssqlppp",
          "signature": "AnyEnum",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyEnum",
          "package": "hssqlppp",
          "partial": "Any Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AnyEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyNonArray",
          "package": "hssqlppp",
          "signature": "AnyNonArray",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "AnyNonArray",
          "package": "hssqlppp",
          "partial": "Any Non Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:AnyNonArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "ArrayType",
          "package": "hssqlppp",
          "signature": "ArrayType Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "ArrayType",
          "package": "hssqlppp",
          "partial": "Array Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:ArrayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "BadCatalogUpdate",
          "package": "hssqlppp",
          "signature": "BadCatalogUpdate String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "BadCatalogUpdate",
          "package": "hssqlppp",
          "partial": "Bad Catalog Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:BadCatalogUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "BadStarExpand",
          "package": "hssqlppp",
          "signature": "BadStarExpand",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "BadStarExpand",
          "package": "hssqlppp",
          "partial": "Bad Star Expand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:BadStarExpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "CompositeType",
          "package": "hssqlppp",
          "signature": "CompositeType [(String, Type)]",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "CompositeType",
          "normalized": "CompositeType[(String,Type)]",
          "package": "hssqlppp",
          "partial": "Composite Type",
          "signature": "CompositeType[(String,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:CompositeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "ContextError",
          "package": "hssqlppp",
          "signature": "ContextError String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "ContextError",
          "package": "hssqlppp",
          "partial": "Context Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:ContextError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Cstring",
          "package": "hssqlppp",
          "signature": "Cstring",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Cstring",
          "package": "hssqlppp",
          "partial": "Cstring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Cstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "DomainDefNotFound",
          "package": "hssqlppp",
          "signature": "DomainDefNotFound Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "DomainDefNotFound",
          "package": "hssqlppp",
          "partial": "Domain Def Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:DomainDefNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "DomainType",
          "package": "hssqlppp",
          "signature": "DomainType String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "DomainType",
          "package": "hssqlppp",
          "partial": "Domain Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:DomainType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "EnumType",
          "package": "hssqlppp",
          "signature": "EnumType String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "EnumType",
          "package": "hssqlppp",
          "partial": "Enum Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:EnumType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "ExpectedDomainType",
          "package": "hssqlppp",
          "signature": "ExpectedDomainType Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "ExpectedDomainType",
          "package": "hssqlppp",
          "partial": "Expected Domain Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:ExpectedDomainType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "ExpressionMustBeBool",
          "package": "hssqlppp",
          "signature": "ExpressionMustBeBool",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "ExpressionMustBeBool",
          "package": "hssqlppp",
          "partial": "Expression Must Be Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:ExpressionMustBeBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "FdwHandler",
          "package": "hssqlppp",
          "signature": "FdwHandler",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "FdwHandler",
          "package": "hssqlppp",
          "partial": "Fdw Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:FdwHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "FromToTypesNotSame",
          "package": "hssqlppp",
          "signature": "FromToTypesNotSame Type Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "FromToTypesNotSame",
          "package": "hssqlppp",
          "partial": "From To Types Not Same",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:FromToTypesNotSame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "IncompatibleTypeSet",
          "package": "hssqlppp",
          "signature": "IncompatibleTypeSet [Type]",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "IncompatibleTypeSet",
          "normalized": "IncompatibleTypeSet[Type]",
          "package": "hssqlppp",
          "partial": "Incompatible Type Set",
          "signature": "IncompatibleTypeSet[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:IncompatibleTypeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "IncompatibleTypes",
          "package": "hssqlppp",
          "signature": "IncompatibleTypes Type Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "IncompatibleTypes",
          "package": "hssqlppp",
          "partial": "Incompatible Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:IncompatibleTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Internal",
          "package": "hssqlppp",
          "signature": "Internal",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Internal",
          "package": "hssqlppp",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "InternalError",
          "package": "hssqlppp",
          "signature": "InternalError String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "InternalError",
          "package": "hssqlppp",
          "partial": "Internal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:InternalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "LanguageHandler",
          "package": "hssqlppp",
          "signature": "LanguageHandler",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "LanguageHandler",
          "package": "hssqlppp",
          "partial": "Language Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:LanguageHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "MiscError",
          "package": "hssqlppp",
          "signature": "MiscError String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "MiscError",
          "package": "hssqlppp",
          "partial": "Misc Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:MiscError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "MissingJoinAttribute",
          "package": "hssqlppp",
          "signature": "MissingJoinAttribute",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "MissingJoinAttribute",
          "package": "hssqlppp",
          "partial": "Missing Join Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:MissingJoinAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "NamedCompositeType",
          "package": "hssqlppp",
          "signature": "NamedCompositeType String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "NamedCompositeType",
          "package": "hssqlppp",
          "partial": "Named Composite Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:NamedCompositeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "NoMatchingOperator",
          "package": "hssqlppp",
          "signature": "NoMatchingOperator String [Type]",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "NoMatchingOperator",
          "normalized": "NoMatchingOperator String[Type]",
          "package": "hssqlppp",
          "partial": "No Matching Operator",
          "signature": "NoMatchingOperator String[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:NoMatchingOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "NoRowsGivenForValues",
          "package": "hssqlppp",
          "signature": "NoRowsGivenForValues",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "NoRowsGivenForValues",
          "package": "hssqlppp",
          "partial": "No Rows Given For Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:NoRowsGivenForValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Opaque",
          "package": "hssqlppp",
          "signature": "Opaque",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Opaque",
          "package": "hssqlppp",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "PgRecord",
          "package": "hssqlppp",
          "signature": "PgRecord (Maybe Type)",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "PgRecord",
          "package": "hssqlppp",
          "partial": "Pg Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:PgRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Pseudo",
          "package": "hssqlppp",
          "signature": "Pseudo PseudoType",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Pseudo",
          "package": "hssqlppp",
          "partial": "Pseudo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Pseudo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Record",
          "package": "hssqlppp",
          "signature": "Record",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Record",
          "package": "hssqlppp",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "ScalarType",
          "package": "hssqlppp",
          "signature": "ScalarType String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "ScalarType",
          "package": "hssqlppp",
          "partial": "Scalar Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:ScalarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "SetOfType",
          "package": "hssqlppp",
          "signature": "SetOfType Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "SetOfType",
          "package": "hssqlppp",
          "partial": "Set Of Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:SetOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Trigger",
          "package": "hssqlppp",
          "signature": "Trigger",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Trigger",
          "package": "hssqlppp",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "TriggerRecord",
          "package": "hssqlppp",
          "signature": "TriggerRecord",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "TriggerRecord",
          "package": "hssqlppp",
          "partial": "Trigger Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:TriggerRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "TypeAlreadyExists",
          "package": "hssqlppp",
          "signature": "TypeAlreadyExists Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "TypeAlreadyExists",
          "package": "hssqlppp",
          "partial": "Type Already Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:TypeAlreadyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "TypelessEmptyArray",
          "package": "hssqlppp",
          "signature": "TypelessEmptyArray",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "TypelessEmptyArray",
          "package": "hssqlppp",
          "partial": "Typeless Empty Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:TypelessEmptyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "UnknownType",
          "package": "hssqlppp",
          "signature": "UnknownType",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "UnknownType",
          "package": "hssqlppp",
          "partial": "Unknown Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:UnknownType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "UnknownTypeError",
          "package": "hssqlppp",
          "signature": "UnknownTypeError Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "UnknownTypeError",
          "package": "hssqlppp",
          "partial": "Unknown Type Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:UnknownTypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "UnknownTypeName",
          "package": "hssqlppp",
          "signature": "UnknownTypeName String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "UnknownTypeName",
          "package": "hssqlppp",
          "partial": "Unknown Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:UnknownTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "UnrecognisedCorrelationName",
          "package": "hssqlppp",
          "signature": "UnrecognisedCorrelationName String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "UnrecognisedCorrelationName",
          "package": "hssqlppp",
          "partial": "Unrecognised Correlation Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:UnrecognisedCorrelationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "UnrecognisedIdentifier",
          "package": "hssqlppp",
          "signature": "UnrecognisedIdentifier String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "UnrecognisedIdentifier",
          "package": "hssqlppp",
          "partial": "Unrecognised Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:UnrecognisedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "UnrecognisedRelation",
          "package": "hssqlppp",
          "signature": "UnrecognisedRelation String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "UnrecognisedRelation",
          "package": "hssqlppp",
          "partial": "Unrecognised Relation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:UnrecognisedRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "ValuesListsMustBeSameLength",
          "package": "hssqlppp",
          "signature": "ValuesListsMustBeSameLength",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "ValuesListsMustBeSameLength",
          "package": "hssqlppp",
          "partial": "Values Lists Must Be Same Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:ValuesListsMustBeSameLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "Void",
          "package": "hssqlppp",
          "signature": "Void",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#PseudoType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "Void",
          "package": "hssqlppp",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "WrongNumberOfAliasCols",
          "package": "hssqlppp",
          "signature": "WrongNumberOfAliasCols Int Int",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "WrongNumberOfAliasCols",
          "package": "hssqlppp",
          "partial": "Wrong Number Of Alias Cols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:WrongNumberOfAliasCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "WrongNumberOfColumns",
          "package": "hssqlppp",
          "signature": "WrongNumberOfColumns",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "WrongNumberOfColumns",
          "package": "hssqlppp",
          "partial": "Wrong Number Of Columns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:WrongNumberOfColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "WrongTypes",
          "package": "hssqlppp",
          "signature": "WrongTypes Type [Type]",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#TypeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "WrongTypes",
          "normalized": "WrongTypes Type[Type]",
          "package": "hssqlppp",
          "partial": "Wrong Types",
          "signature": "WrongTypes Type[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:WrongTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "canonicalizeTypeName",
          "package": "hssqlppp",
          "signature": "String -\u003e String",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#canonicalizeTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "canonicalizeTypeName",
          "normalized": "String-\u003eString",
          "package": "hssqlppp",
          "partial": "Type Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:canonicalizeTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "canonicalizeTypes",
          "package": "hssqlppp",
          "signature": "a -\u003e a",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#canonicalizeTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "canonicalizeTypes",
          "normalized": "a-\u003ea",
          "package": "hssqlppp",
          "partial": "Types",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:canonicalizeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeBigInt",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeBigInt",
          "package": "hssqlppp",
          "partial": "Big Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeBigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeBool",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeBool",
          "package": "hssqlppp",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeChar",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeChar",
          "package": "hssqlppp",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeDate",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeDate",
          "package": "hssqlppp",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeFloat4",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeFloat4",
          "package": "hssqlppp",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeFloat4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeFloat8",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeFloat8",
          "package": "hssqlppp",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeFloat8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeInt",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeInt",
          "package": "hssqlppp",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeInterval",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeInterval",
          "package": "hssqlppp",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeNumeric",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeNumeric",
          "package": "hssqlppp",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeSmallInt",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeSmallInt",
          "package": "hssqlppp",
          "partial": "Small Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeSmallInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HsSqlPpp.Types",
          "name": "typeVarChar",
          "package": "hssqlppp",
          "signature": "Type",
          "source": "src/Database-HsSqlPpp-Internals-TypeType.html#typeSmallInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HsSqlPpp Types",
          "module": "Database.HsSqlPpp.Types",
          "name": "typeVarChar",
          "package": "hssqlppp",
          "partial": "Var Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hssqlppp/docs/Database-HsSqlPpp-Types.html#v:typeVarChar"
      }
    }
  ]
]