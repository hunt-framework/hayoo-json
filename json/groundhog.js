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
        "word": "groundhog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions and datatypes used throughout the framework.\n Most of them are for the internal use\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Core",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the functions and datatypes used throughout the framework Most of them are for the internal use",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Core",
          "package": "groundhog",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis subset of Projection instances is for things that behave like fields. Namely, they can occur in condition expressions (for example, Field and SubField) and on the left side of update statements. For example \"lower(field)\" is a valid Projection, but not Field like because it cannot be on the left side. Datatypes that index PostgreSQL arrays \"arr[5]\" or access composites \"(comp).subfield\" are valid instances of Assignable.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Assignable",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Assignable",
          "type": "class"
        },
        "index": {
          "description": "This subset of Projection instances is for things that behave like fields Namely they can occur in condition expressions for example Field and SubField and on the left side of update statements For example lower field is valid Projection but not Field like because it cannot be on the left side Datatypes that index PostgreSQL arrays arr or access composites comp subfield are valid instances of Assignable",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Assignable",
          "package": "groundhog",
          "partial": "Assignable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Assignable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt can be used in expressions like a regular field.\n For example, \u003ccode\u003edelete (AutoKeyField ==. k)\u003c/code\u003e\n or \u003ccode\u003edelete (AutoKeyField ==. k ||. SomeField ==. \"DUPLICATE\")\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "AutoKeyField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#AutoKeyField",
          "type": "data"
        },
        "index": {
          "description": "It can be used in expressions like regular field For example delete AutoKeyField or delete AutoKeyField SomeField DUPLICATE",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "AutoKeyField",
          "package": "groundhog",
          "partial": "Auto Key Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:AutoKeyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey marked with this type can have value for any backend\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "BackendSpecific",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#BackendSpecific",
          "type": "data"
        },
        "index": {
          "description": "Key marked with this type can have value for any backend",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "BackendSpecific",
          "package": "groundhog",
          "partial": "Backend Specific",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:BackendSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents condition for a query.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Cond",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "data"
        },
        "index": {
          "description": "Represents condition for query",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Cond",
          "package": "groundhog",
          "partial": "Cond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection manager provides connection to the passed function handles transations. Manager can be a connection itself, a pool, Snaplet in Snap, foundation datatype in Yesod, etc.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "ConnectionManager",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ConnectionManager",
          "type": "class"
        },
        "index": {
          "description": "Connection manager provides connection to the passed function handles transations Manager can be connection itself pool Snaplet in Snap foundation datatype in Yesod etc",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ConnectionManager",
          "package": "groundhog",
          "partial": "Connection Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ConnectionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom constructors are made instances of this class. This class should be used only by Template Haskell codegen\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Constructor",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Constructor",
          "type": "class"
        },
        "index": {
          "description": "Phantom constructors are made instances of this class This class should be used only by Template Haskell codegen",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Constructor",
          "package": "groundhog",
          "partial": "Constructor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes an entity constructor\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "ConstructorDef",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "data"
        },
        "index": {
          "description": "Describes an entity constructor",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ConstructorDef",
          "package": "groundhog",
          "partial": "Constructor Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ConstructorDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA phantom datatype to make instance head different \u003ccode\u003ec (ConstructorMarker v)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "ConstructorMarker",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ConstructorMarker",
          "type": "data"
        },
        "index": {
          "description": "phantom datatype to make instance head different ConstructorMarker",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ConstructorMarker",
          "package": "groundhog",
          "partial": "Constructor Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ConstructorMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbDescriptor",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#DbDescriptor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbDescriptor",
          "package": "groundhog",
          "partial": "Db Descriptor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbPersist",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#DbPersist",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbPersist",
          "package": "groundhog",
          "partial": "Db Persist",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbType",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#DbType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbType",
          "package": "groundhog",
          "partial": "Db Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DB data type. Naming attempts to reflect the underlying Haskell\n datatypes, eg DbString instead of DbVarchar. Different databases may\n have different representations for these types.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "DbTypePrimitive",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "data"
        },
        "index": {
          "description": "DB data type Naming attempts to reflect the underlying Haskell datatypes eg DbString instead of DbVarchar Different databases may have different representations for these types",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbTypePrimitive",
          "package": "groundhog",
          "partial": "Db Type Primitive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbTypePrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Embedded",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Embedded",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Embedded",
          "package": "groundhog",
          "partial": "Embedded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Embedded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first argument is a flag which defines if the field names should be concatenated with the outer field name (False) or used as is which provides full control over table column names (True).\n Value False should be the default value so that a datatype can be embedded without name conflict concern. The second argument list of field names and field types.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "EmbeddedDef",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#EmbeddedDef",
          "type": "data"
        },
        "index": {
          "description": "The first argument is flag which defines if the field names should be concatenated with the outer field name False or used as is which provides full control over table column names True Value False should be the default value so that datatype can be embedded without name conflict concern The second argument list of field names and field types",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "EmbeddedDef",
          "package": "groundhog",
          "partial": "Embedded Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:EmbeddedDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class helps type inference in cases when query does not contain any fields which\n define the constructor, but the entity has only one.\n For example, in \u003ccode\u003eselect $ AutoKeyField ==. k\u003c/code\u003e the condition would need type annotation with constructor name only if we select a sum type.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "EntityConstr",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#EntityConstr",
          "type": "class"
        },
        "index": {
          "description": "This class helps type inference in cases when query does not contain any fields which define the constructor but the entity has only one For example in select AutoKeyField the condition would need type annotation with constructor name only if we select sum type",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "EntityConstr",
          "package": "groundhog",
          "partial": "Entity Constr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:EntityConstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes an ADT.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "EntityDef",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#EntityDef",
          "type": "data"
        },
        "index": {
          "description": "Describes an ADT",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "EntityDef",
          "package": "groundhog",
          "partial": "Entity Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:EntityDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpr with phantom type helps to keep type safety in complex expressions\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Expr",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Expr",
          "type": "newtype"
        },
        "index": {
          "description": "Expr with phantom type helps to keep type safety in complex expressions",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Expr",
          "package": "groundhog",
          "partial": "Expr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ExprRelation",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ExprRelation",
          "package": "groundhog",
          "partial": "Expr Relation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ExprRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is used to map field to column names. It can be either a column name for a regular field of non-embedded type or a list of this field and the outer fields in reverse order. Eg, fieldChain $ SomeField ~\u003e Tuple2_0Selector may result in [(\"val0\", DbString), (\"some\", DbEmbedded False [dbType \"\", dbType True])].\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "FieldChain",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#FieldChain",
          "type": "type"
        },
        "index": {
          "description": "It is used to map field to column names It can be either column name for regular field of non-embedded type or list of this field and the outer fields in reverse order Eg fieldChain SomeField Tuple2 Selector may result in val0 DbString some DbEmbedded False dbType dbType True",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "FieldChain",
          "package": "groundhog",
          "partial": "Field Chain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:FieldChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis subset of Assignable is for plain database fields.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "FieldLike",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#FieldLike",
          "type": "class"
        },
        "index": {
          "description": "This subset of Assignable is for plain database fields",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "FieldLike",
          "package": "groundhog",
          "partial": "Field Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:FieldLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "HFalse",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#HFalse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "HFalse",
          "package": "groundhog",
          "partial": "HFalse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:HFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "HTrue",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#HTrue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "HTrue",
          "package": "groundhog",
          "partial": "HTrue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:HTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class helps to check that limit, offset, or order clauses are added to condition only once.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "HasSelectOptions",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#HasSelectOptions",
          "type": "class"
        },
        "index": {
          "description": "This class helps to check that limit offset or order clauses are added to condition only once",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "HasSelectOptions",
          "package": "groundhog",
          "partial": "Has Select Options",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:HasSelectOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "IsUniqueKey",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#IsUniqueKey",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "IsUniqueKey",
          "package": "groundhog",
          "partial": "Is Unique Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:IsUniqueKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt allows to store autogenerated keys of one database in another\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "KeyForBackend",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#KeyForBackend",
          "type": "data"
        },
        "index": {
          "description": "It allows to store autogenerated keys of one database in another",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "KeyForBackend",
          "package": "groundhog",
          "partial": "Key For Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:KeyForBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Migration",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Migration",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Migration",
          "package": "groundhog",
          "partial": "Migration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Migration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype names and corresponding migrations\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "NamedMigrations",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#NamedMigrations",
          "type": "type"
        },
        "index": {
          "description": "Datatype names and corresponding migrations",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "NamedMigrations",
          "package": "groundhog",
          "partial": "Named Migrations",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:NamedMigrations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes which are never NULL when converted to \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e.\n Consider the type \u003ccode\u003eMaybe (Maybe a)\u003c/code\u003e. Now Nothing is stored as NULL, so we cannot distinguish between Just Nothing and Nothing which is a problem.\n The purpose of this class is to ban the inner Maybe's.\n Maybe this class can be removed when support for inner Maybe's appears.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "NeverNull",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#NeverNull",
          "type": "class"
        },
        "index": {
          "description": "Types which are never NULL when converted to PersistValue Consider the type Maybe Maybe Now Nothing is stored as NULL so we cannot distinguish between Just Nothing and Nothing which is problem The purpose of this class is to ban the inner Maybe Maybe this class can be removed when support for inner Maybe appears",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "NeverNull",
          "package": "groundhog",
          "partial": "Never Null",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:NeverNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines sort order of a result-set\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Order",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Order",
          "type": "data"
        },
        "index": {
          "description": "Defines sort order of result-set",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Order",
          "package": "groundhog",
          "partial": "Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores name for a database type\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "OtherTypeDef",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#OtherTypeDef",
          "type": "newtype"
        },
        "index": {
          "description": "Stores name for database type",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "OtherTypeDef",
          "package": "groundhog",
          "partial": "Other Type Def",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:OtherTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reference contains either EntityDef of the parent table and name of the unique constraint. Or for tables not mapped by Groundhog schema name, table name, and list of columns  \n Reference to the autogenerated key of a mapped entity = (Left (entityDef, Nothing), onDelete, onUpdate)\n Reference to a unique key of a mapped entity = (Left (entityDef, Just uniqueKeyName), onDelete, onUpdate)\n Reference to a table that is not mapped = (Right (schema, tableName, columns), onDelete, onUpdate)\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "ParentTableReference",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ParentTableReference",
          "type": "type"
        },
        "index": {
          "description": "The reference contains either EntityDef of the parent table and name of the unique constraint Or for tables not mapped by Groundhog schema name table name and list of columns Reference to the autogenerated key of mapped entity Left entityDef Nothing onDelete onUpdate Reference to unique key of mapped entity Left entityDef Just uniqueKeyName onDelete onUpdate Reference to table that is not mapped Right schema tableName columns onDelete onUpdate",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ParentTableReference",
          "package": "groundhog",
          "partial": "Parent Table Reference",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ParentTableReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistBackend",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PersistBackend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistBackend",
          "package": "groundhog",
          "partial": "Persist Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly instances of this class can be persisted in a database\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "PersistEntity",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PersistEntity",
          "type": "class"
        },
        "index": {
          "description": "Only instances of this class can be persisted in database",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistEntity",
          "package": "groundhog",
          "partial": "Persist Entity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents everything which can be put into a database. This data can be stored in multiple columns and tables. To get value of those columns we might need to access another table. That is why the result type is monadic.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "PersistField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PersistField",
          "type": "class"
        },
        "index": {
          "description": "Represents everything which can be put into database This data can be stored in multiple columns and tables To get value of those columns we might need to access another table That is why the result type is monadic",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistField",
          "package": "groundhog",
          "partial": "Persist Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA raw value which can be stored in any backend and can be marshalled to\n and from a \u003ccode\u003e\u003ca\u003ePersistField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "PersistValue",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "data"
        },
        "index": {
          "description": "raw value which can be stored in any backend and can be marshalled to and from PersistField",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistValue",
          "package": "groundhog",
          "partial": "Persist Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatypes which can be converted directly to \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e. The no-value parameter \u003ccode\u003eDbDescriptor db =\u003e Proxy db\u003c/code\u003e allows conversion depend the database details while keeping it pure. A type which has an instance of \u003ccode\u003e\u003ca\u003ePrimitivePersistField\u003c/a\u003e\u003c/code\u003e should be an instance of superclasses \u003ccode\u003e\u003ca\u003eSinglePersistField\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePurePersistField\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "PrimitivePersistField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PrimitivePersistField",
          "type": "class"
        },
        "index": {
          "description": "Datatypes which can be converted directly to PersistValue The no-value parameter DbDescriptor db Proxy db allows conversion depend the database details while keeping it pure type which has an instance of PrimitivePersistField should be an instance of superclasses SinglePersistField and PurePersistField as well",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PrimitivePersistField",
          "package": "groundhog",
          "partial": "Primitive Persist Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PrimitivePersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny data that can be fetched from a database\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Projection",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Projection",
          "type": "class"
        },
        "index": {
          "description": "Any data that can be fetched from database",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Projection",
          "package": "groundhog",
          "partial": "Projection",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Projection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Proxy",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Proxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Proxy",
          "package": "groundhog",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents all datatypes that map into several columns. Getting values for those columns is pure.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "PurePersistField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PurePersistField",
          "type": "class"
        },
        "index": {
          "description": "Represents all datatypes that map into several columns Getting values for those columns is pure",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PurePersistField",
          "package": "groundhog",
          "partial": "Pure Persist Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PurePersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ReferenceActionType",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ReferenceActionType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ReferenceActionType",
          "package": "groundhog",
          "partial": "Reference Action Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ReferenceActionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "RestrictionHolder",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#RestrictionHolder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "RestrictionHolder",
          "package": "groundhog",
          "partial": "Restriction Holder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:RestrictionHolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "RowPopper",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#RowPopper",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "RowPopper",
          "package": "groundhog",
          "partial": "Row Popper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:RowPopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Savepoint",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Savepoint",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Savepoint",
          "package": "groundhog",
          "partial": "Savepoint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Savepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "SelectOptions",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#SelectOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SelectOptions",
          "package": "groundhog",
          "partial": "Select Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SelectOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis connection manager always returns the same connection. This constraint is useful when performing operations which make sense only within one connection, for example, nested savepoints..\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "SingleConnectionManager",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#SingleConnectionManager",
          "type": "class"
        },
        "index": {
          "description": "This connection manager always returns the same connection This constraint is useful when performing operations which make sense only within one connection for example nested savepoints",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SingleConnectionManager",
          "package": "groundhog",
          "partial": "Single Connection Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SingleConnectionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither error messages or migration queries with safety flag and execution order\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "SingleMigration",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#SingleMigration",
          "type": "type"
        },
        "index": {
          "description": "Either error messages or migration queries with safety flag and execution order",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SingleMigration",
          "package": "groundhog",
          "partial": "Single Migration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SingleMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents all datatypes that map into a single column. Getting value for that column might require monadic actions to access other tables.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "SinglePersistField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#SinglePersistField",
          "type": "class"
        },
        "index": {
          "description": "Represents all datatypes that map into single column Getting value for that column might require monadic actions to access other tables",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SinglePersistField",
          "package": "groundhog",
          "partial": "Single Persist Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SinglePersistField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "SubField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#SubField",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SubField",
          "package": "groundhog",
          "partial": "Sub Field",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SubField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA holder for Unique constraints\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Unique",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Unique",
          "type": "data"
        },
        "index": {
          "description": "holder for Unique constraints",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Unique",
          "package": "groundhog",
          "partial": "Unique",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique name and list of the field names that form a unique combination\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "UniqueDef",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#UniqueDef",
          "type": "data"
        },
        "index": {
          "description": "Unique name and list of the field names that form unique combination",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniqueDef",
          "package": "groundhog",
          "partial": "Unique Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UniqueDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA phantom datatype to make instance head different \u003ccode\u003eu (UniqueMarker v)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "UniqueMarker",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#UniqueMarker",
          "type": "data"
        },
        "index": {
          "description": "phantom datatype to make instance head different UniqueMarker",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniqueMarker",
          "package": "groundhog",
          "partial": "Unique Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UniqueMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines how to treat the unique set of fields for a datatype\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "UniqueType",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#UniqueType",
          "type": "data"
        },
        "index": {
          "description": "Defines how to treat the unique set of fields for datatype",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniqueType",
          "package": "groundhog",
          "partial": "Unique Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UniqueType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to uniformly represent fields, constants and more complex things, e.g., arithmetic expressions.\n A value should be converted to \u003ccode\u003e\u003ca\u003eUntypedExpr\u003c/a\u003e\u003c/code\u003e for usage in expressions\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "UntypedExpr",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#UntypedExpr",
          "type": "data"
        },
        "index": {
          "description": "Used to uniformly represent fields constants and more complex things e.g arithmetic expressions value should be converted to UntypedExpr for usage in expressions",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UntypedExpr",
          "package": "groundhog",
          "partial": "Untyped Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UntypedExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Update",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Update",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Update",
          "package": "groundhog",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype for incremental building SQL queries\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "Utf8",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Utf8",
          "type": "newtype"
        },
        "index": {
          "description": "Datatype for incremental building SQL queries",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Utf8",
          "package": "groundhog",
          "partial": "Utf",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvoid orphan instances.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "ZT",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#ZT",
          "type": "newtype"
        },
        "index": {
          "description": "Avoid orphan instances",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ZT",
          "package": "groundhog",
          "partial": "ZT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ZT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccesses fields of the embedded datatypes. For example, \u003ccode\u003eSomeField ==. (\"abc\", \"def\") ||. SomeField ~\u003e Tuple2_0Selector ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "(~\u003e)",
          "package": "groundhog",
          "signature": "f -\u003e Selector a a' -\u003e SubField v c a'",
          "source": "src/Database-Groundhog-Core.html#~%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:-126--62-\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-126--62-\"]"
        },
        "index": {
          "description": "Accesses fields of the embedded datatypes For example SomeField abc def SomeField Tuple2 Selector def",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "(~\u003e) ~\u003e",
          "normalized": "a-\u003eSelector b c-\u003eSubField d e c",
          "package": "groundhog",
          "signature": "f-\u003eSelector a a'-\u003eSubField v c a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "And",
          "package": "groundhog",
          "signature": "And (Cond db r) (Cond db r)",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:And\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:And\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "And",
          "package": "groundhog",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "Asc",
          "package": "groundhog",
          "signature": "Asc f",
          "source": "src/Database-Groundhog-Core.html#Order",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Asc\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Asc\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Asc",
          "package": "groundhog",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "AutoKeyField",
          "package": "groundhog",
          "signature": "AutoKeyField v c",
          "source": "src/Database-Groundhog-Core.html#AutoKeyField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:AutoKeyField\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:AutoKeyField\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "AutoKeyField",
          "package": "groundhog",
          "partial": "Auto Key Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:AutoKeyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Cascade",
          "package": "groundhog",
          "signature": "Cascade",
          "source": "src/Database-Groundhog-Core.html#ReferenceActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Cascade",
          "package": "groundhog",
          "partial": "Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Cascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "Compare",
          "package": "groundhog",
          "signature": "Compare ExprRelation (UntypedExpr db r) (UntypedExpr db r)",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Compare\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Compare\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Compare",
          "package": "groundhog",
          "partial": "Compare",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "CondEmpty",
          "package": "groundhog",
          "signature": "CondEmpty",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:CondEmpty\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:CondEmpty\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "CondEmpty",
          "package": "groundhog",
          "partial": "Cond Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:CondEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "CondRaw",
          "package": "groundhog",
          "signature": "CondRaw (QueryRaw db r)",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:CondRaw\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:CondRaw\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "CondRaw",
          "package": "groundhog",
          "partial": "Cond Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:CondRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ConstructorDef",
          "package": "groundhog",
          "signature": "ConstructorDef",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ConstructorDef",
          "package": "groundhog",
          "partial": "Constructor Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ConstructorDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbAutoKey",
          "package": "groundhog",
          "signature": "DbAutoKey",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbAutoKey",
          "package": "groundhog",
          "partial": "Db Auto Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbAutoKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByteString\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "DbBlob",
          "package": "groundhog",
          "signature": "DbBlob",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "description": "ByteString",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbBlob",
          "package": "groundhog",
          "partial": "Db Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbBool",
          "package": "groundhog",
          "signature": "DbBool",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbBool",
          "package": "groundhog",
          "partial": "Db Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbDay",
          "package": "groundhog",
          "signature": "DbDay",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbDay",
          "package": "groundhog",
          "partial": "Db Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbDayTime",
          "package": "groundhog",
          "signature": "DbDayTime",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbDayTime",
          "package": "groundhog",
          "partial": "Db Day Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbDayTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbDayTimeZoned",
          "package": "groundhog",
          "signature": "DbDayTimeZoned",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbDayTimeZoned",
          "package": "groundhog",
          "partial": "Db Day Time Zoned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbDayTimeZoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbEmbedded",
          "package": "groundhog",
          "signature": "DbEmbedded EmbeddedDef (Maybe ParentTableReference)",
          "source": "src/Database-Groundhog-Core.html#DbType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbEmbedded",
          "package": "groundhog",
          "partial": "Db Embedded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbEmbedded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbInt32",
          "package": "groundhog",
          "signature": "DbInt32",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbInt32",
          "package": "groundhog",
          "partial": "Db Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbInt64",
          "package": "groundhog",
          "signature": "DbInt64",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbInt64",
          "package": "groundhog",
          "partial": "Db Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList table name and type of its argument\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "DbList",
          "package": "groundhog",
          "signature": "DbList String DbType",
          "source": "src/Database-Groundhog-Core.html#DbType",
          "type": "function"
        },
        "index": {
          "description": "List table name and type of its argument",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbList",
          "package": "groundhog",
          "partial": "Db List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbOther",
          "package": "groundhog",
          "signature": "DbOther OtherTypeDef",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbOther",
          "package": "groundhog",
          "partial": "Db Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "DbPersist",
          "package": "groundhog",
          "signature": "DbPersist",
          "source": "src/Database-Groundhog-Core.html#DbPersist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbPersist\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:DbPersist\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbPersist",
          "package": "groundhog",
          "partial": "Db Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbReal",
          "package": "groundhog",
          "signature": "DbReal",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbReal",
          "package": "groundhog",
          "partial": "Db Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbString",
          "package": "groundhog",
          "signature": "DbString",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbString",
          "package": "groundhog",
          "partial": "Db String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "DbTime",
          "package": "groundhog",
          "signature": "DbTime",
          "source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbTime",
          "package": "groundhog",
          "partial": "Db Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype, nullable, default value, reference\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "DbTypePrimitive",
          "package": "groundhog",
          "signature": "DbTypePrimitive DbTypePrimitive Bool (Maybe String) (Maybe ParentTableReference)",
          "source": "src/Database-Groundhog-Core.html#DbType",
          "type": "function"
        },
        "index": {
          "description": "type nullable default value reference",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "DbTypePrimitive",
          "package": "groundhog",
          "partial": "Db Type Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbTypePrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "Desc",
          "package": "groundhog",
          "signature": "Desc f",
          "source": "src/Database-Groundhog-Core.html#Order",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Desc\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Desc\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Desc",
          "package": "groundhog",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "EmbeddedDef",
          "package": "groundhog",
          "signature": "EmbeddedDef Bool [(String, DbType)]",
          "source": "src/Database-Groundhog-Core.html#EmbeddedDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "EmbeddedDef",
          "normalized": "EmbeddedDef Bool[(String,DbType)]",
          "package": "groundhog",
          "partial": "Embedded Def",
          "signature": "EmbeddedDef Bool[(String,DbType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:EmbeddedDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "EntityDef",
          "package": "groundhog",
          "signature": "EntityDef",
          "source": "src/Database-Groundhog-Core.html#EntityDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "EntityDef",
          "package": "groundhog",
          "partial": "Entity Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:EntityDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Eq",
          "package": "groundhog",
          "signature": "Eq",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Eq",
          "package": "groundhog",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Expr",
          "package": "groundhog",
          "signature": "Expr (QueryRaw db r)",
          "source": "src/Database-Groundhog-Core.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Expr",
          "package": "groundhog",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ExprField",
          "package": "groundhog",
          "signature": "FieldChain -\u003e UntypedExpr db r",
          "source": "src/Database-Groundhog-Core.html#UntypedExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ExprField",
          "normalized": "FieldChain-\u003eUntypedExpr a b",
          "package": "groundhog",
          "partial": "Expr Field",
          "signature": "FieldChain-\u003eUntypedExpr db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ExprField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ExprPure",
          "package": "groundhog",
          "signature": "a -\u003e UntypedExpr db r",
          "source": "src/Database-Groundhog-Core.html#UntypedExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ExprPure",
          "normalized": "a-\u003eUntypedExpr b c",
          "package": "groundhog",
          "partial": "Expr Pure",
          "signature": "a-\u003eUntypedExpr db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ExprPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ExprRaw",
          "package": "groundhog",
          "signature": "Expr db r a -\u003e UntypedExpr db r",
          "source": "src/Database-Groundhog-Core.html#UntypedExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ExprRaw",
          "normalized": "Expr a b c-\u003eUntypedExpr a b",
          "package": "groundhog",
          "partial": "Expr Raw",
          "signature": "Expr db r a-\u003eUntypedExpr db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ExprRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Ge",
          "package": "groundhog",
          "signature": "Ge",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Ge",
          "package": "groundhog",
          "partial": "Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Gt",
          "package": "groundhog",
          "signature": "Gt",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Gt",
          "package": "groundhog",
          "partial": "Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "KeyForBackend",
          "package": "groundhog",
          "signature": "KeyForBackend (AutoKeyType db)",
          "source": "src/Database-Groundhog-Core.html#KeyForBackend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "KeyForBackend",
          "package": "groundhog",
          "partial": "Key For Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:KeyForBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Le",
          "package": "groundhog",
          "signature": "Le",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Le",
          "package": "groundhog",
          "partial": "Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Lt",
          "package": "groundhog",
          "signature": "Lt",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Lt",
          "package": "groundhog",
          "partial": "Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Ne",
          "package": "groundhog",
          "signature": "Ne",
          "source": "src/Database-Groundhog-Core.html#ExprRelation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Ne",
          "package": "groundhog",
          "partial": "Ne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "NoAction",
          "package": "groundhog",
          "signature": "NoAction",
          "source": "src/Database-Groundhog-Core.html#ReferenceActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "NoAction",
          "package": "groundhog",
          "partial": "No Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:NoAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "Not",
          "package": "groundhog",
          "signature": "Not (Cond db r)",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Not\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Not\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Not",
          "package": "groundhog",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "Or",
          "package": "groundhog",
          "signature": "Or (Cond db r) (Cond db r)",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Or\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Or\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Or",
          "package": "groundhog",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "OtherTypeDef",
          "package": "groundhog",
          "signature": "OtherTypeDef ((DbTypePrimitive -\u003e String) -\u003e String)",
          "source": "src/Database-Groundhog-Core.html#OtherTypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "OtherTypeDef",
          "normalized": "OtherTypeDef((DbTypePrimitive-\u003eString)-\u003eString)",
          "package": "groundhog",
          "partial": "Other Type Def",
          "signature": "OtherTypeDef((DbTypePrimitive-\u003eString)-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:OtherTypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistBool",
          "package": "groundhog",
          "signature": "PersistBool Bool",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistBool",
          "package": "groundhog",
          "partial": "Persist Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistByteString",
          "package": "groundhog",
          "signature": "PersistByteString ByteString",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistByteString",
          "package": "groundhog",
          "partial": "Persist Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating some datatypes may require calling a function, using a special constructor, or other syntax. The string (which can have placeholders) is included into query without escaping. The recursive constructions are not allowed, i.e., [PersistValue] cannot contain PersistCustom values.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "PersistCustom",
          "package": "groundhog",
          "signature": "PersistCustom Utf8 [PersistValue]",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "description": "Creating some datatypes may require calling function using special constructor or other syntax The string which can have placeholders is included into query without escaping The recursive constructions are not allowed i.e PersistValue cannot contain PersistCustom values",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistCustom",
          "normalized": "PersistCustom Utf[PersistValue]",
          "package": "groundhog",
          "partial": "Persist Custom",
          "signature": "PersistCustom Utf[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistDay",
          "package": "groundhog",
          "signature": "PersistDay Day",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistDay",
          "package": "groundhog",
          "partial": "Persist Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistDouble",
          "package": "groundhog",
          "signature": "PersistDouble Double",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistDouble",
          "package": "groundhog",
          "partial": "Persist Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistInt64",
          "package": "groundhog",
          "signature": "PersistInt64 Int64",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistInt64",
          "package": "groundhog",
          "partial": "Persist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistNull",
          "package": "groundhog",
          "signature": "PersistNull",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistNull",
          "package": "groundhog",
          "partial": "Persist Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistString",
          "package": "groundhog",
          "signature": "PersistString String",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistString",
          "package": "groundhog",
          "partial": "Persist String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistTimeOfDay",
          "package": "groundhog",
          "signature": "PersistTimeOfDay TimeOfDay",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistTimeOfDay",
          "package": "groundhog",
          "partial": "Persist Time Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistUTCTime",
          "package": "groundhog",
          "signature": "PersistUTCTime UTCTime",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistUTCTime",
          "package": "groundhog",
          "partial": "Persist UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "PersistZonedTime",
          "package": "groundhog",
          "signature": "PersistZonedTime ZT",
          "source": "src/Database-Groundhog-Core.html#PersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "PersistZonedTime",
          "package": "groundhog",
          "partial": "Persist Zoned Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Restrict",
          "package": "groundhog",
          "signature": "Restrict",
          "source": "src/Database-Groundhog-Core.html#ReferenceActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Restrict",
          "package": "groundhog",
          "partial": "Restrict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Restrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "SelectOptions",
          "package": "groundhog",
          "signature": "SelectOptions",
          "source": "src/Database-Groundhog-Core.html#SelectOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SelectOptions",
          "package": "groundhog",
          "partial": "Select Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SelectOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "SetDefault",
          "package": "groundhog",
          "signature": "SetDefault",
          "source": "src/Database-Groundhog-Core.html#ReferenceActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SetDefault",
          "package": "groundhog",
          "partial": "Set Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SetDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "SetNull",
          "package": "groundhog",
          "signature": "SetNull",
          "source": "src/Database-Groundhog-Core.html#ReferenceActionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SetNull",
          "package": "groundhog",
          "partial": "Set Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SetNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "SubField",
          "package": "groundhog",
          "signature": "SubField FieldChain",
          "source": "src/Database-Groundhog-Core.html#SubField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "SubField",
          "package": "groundhog",
          "partial": "Sub Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SubField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "UniqueConstraint",
          "package": "groundhog",
          "signature": "UniqueConstraint",
          "source": "src/Database-Groundhog-Core.html#UniqueType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniqueConstraint",
          "package": "groundhog",
          "partial": "Unique Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniqueConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "UniqueDef",
          "package": "groundhog",
          "signature": "UniqueDef",
          "source": "src/Database-Groundhog-Core.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniqueDef",
          "package": "groundhog",
          "partial": "Unique Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniqueDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "UniqueIndex",
          "package": "groundhog",
          "signature": "UniqueIndex",
          "source": "src/Database-Groundhog-Core.html#UniqueType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniqueIndex",
          "package": "groundhog",
          "partial": "Unique Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniqueIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "UniquePrimary",
          "package": "groundhog",
          "signature": "UniquePrimary",
          "source": "src/Database-Groundhog-Core.html#UniqueType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "UniquePrimary",
          "package": "groundhog",
          "partial": "Unique Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniquePrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "Update",
          "package": "groundhog",
          "signature": "Update f (UntypedExpr db r)",
          "source": "src/Database-Groundhog-Core.html#Update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Update",
          "package": "groundhog",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog.Generic.Sql\"]",
          "name": "Utf8",
          "package": "groundhog",
          "signature": "Utf8 Builder",
          "source": "src/Database-Groundhog-Core.html#Utf8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Utf8\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:Utf8\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "Utf8",
          "package": "groundhog",
          "partial": "Utf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "ZT",
          "package": "groundhog",
          "signature": "ZT ZonedTime",
          "source": "src/Database-Groundhog-Core.html#ZT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "ZT",
          "package": "groundhog",
          "partial": "ZT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ZT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of backend\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "backendName",
          "package": "groundhog",
          "signature": "Proxy db -\u003e String",
          "source": "src/Database-Groundhog-Core.html#backendName",
          "type": "method"
        },
        "index": {
          "description": "Name of backend",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "backendName",
          "normalized": "Proxy a-\u003eString",
          "package": "groundhog",
          "partial": "Name",
          "signature": "Proxy db-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:backendName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "condOptions",
          "package": "groundhog",
          "signature": "Cond db r",
          "source": "src/Database-Groundhog-Core.html#SelectOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "condOptions",
          "package": "groundhog",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:condOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutokey name if any\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "constrAutoKeyName",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "function"
        },
        "index": {
          "description": "Autokey name if any",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "constrAutoKeyName",
          "package": "groundhog",
          "partial": "Auto Key Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrAutoKeyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor name\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "constrName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "function"
        },
        "index": {
          "description": "Constructor name",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "constrName",
          "package": "groundhog",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of the constructor in the ADT\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "constrNum",
          "package": "groundhog",
          "signature": "Int",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "function"
        },
        "index": {
          "description": "Number of the constructor in the ADT",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "constrNum",
          "package": "groundhog",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter names with their named type\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "constrParams",
          "package": "groundhog",
          "signature": "[(String, DbType)]",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "function"
        },
        "index": {
          "description": "Parameter names with their named type",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "constrParams",
          "normalized": "[(String,DbType)]",
          "package": "groundhog",
          "partial": "Params",
          "signature": "[(String,DbType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniqueness constraints on the constructor fiels\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "constrUniques",
          "package": "groundhog",
          "signature": "[UniqueDef]",
          "source": "src/Database-Groundhog-Core.html#ConstructorDef",
          "type": "function"
        },
        "index": {
          "description": "Uniqueness constraints on the constructor fiels",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "constrUniques",
          "normalized": "[UniqueDef]",
          "package": "groundhog",
          "partial": "Uniques",
          "signature": "[UniqueDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrUniques"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of entity constructors definitions\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "constructors",
          "package": "groundhog",
          "signature": "[ConstructorDef]",
          "source": "src/Database-Groundhog-Core.html#EntityDef",
          "type": "function"
        },
        "index": {
          "description": "List of entity constructors definitions",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "constructors",
          "normalized": "[ConstructorDef]",
          "package": "groundhog",
          "signature": "[ConstructorDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount total number of records satisfying the condition\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "count",
          "package": "groundhog",
          "signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m Int",
          "source": "src/Database-Groundhog-Core.html#count",
          "type": "method"
        },
        "index": {
          "description": "Count total number of records satisfying the condition",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "count",
          "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea Int",
          "package": "groundhog",
          "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount total number of records with all constructors. The entity parameter is used only for type inference\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "countAll",
          "package": "groundhog",
          "signature": "v -\u003e m Int",
          "source": "src/Database-Groundhog-Core.html#countAll",
          "type": "method"
        },
        "index": {
          "description": "Count total number of records with all constructors The entity parameter is used only for type inference",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "countAll",
          "normalized": "a-\u003eb Int",
          "package": "groundhog",
          "partial": "All",
          "signature": "v-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:countAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of value type\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "dbType",
          "package": "groundhog",
          "signature": "a -\u003e DbType",
          "source": "src/Database-Groundhog-Core.html#dbType",
          "type": "method"
        },
        "index": {
          "description": "Description of value type",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "dbType",
          "normalized": "a-\u003eDbType",
          "package": "groundhog",
          "partial": "Type",
          "signature": "a-\u003eDbType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:dbType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the records satisfying the condition\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "delete",
          "package": "groundhog",
          "signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Remove the records satisfying the condition",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "delete",
          "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
          "package": "groundhog",
          "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all records. The entity parameter is used only for type inference.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "deleteAll",
          "package": "groundhog",
          "signature": "v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#deleteAll",
          "type": "method"
        },
        "index": {
          "description": "Remove all records The entity parameter is used only for type inference",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "deleteAll",
          "normalized": "a-\u003eb()",
          "package": "groundhog",
          "partial": "All",
          "signature": "v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the record with given key. No-op if the record does not exist\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "deleteBy",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#deleteBy",
          "type": "method"
        },
        "index": {
          "description": "Remove the record with given key No-op if the record does not exist",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "deleteBy",
          "normalized": "Key a BackendSpecific-\u003eb()",
          "package": "groundhog",
          "partial": "By",
          "signature": "Key v BackendSpecific-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "delim",
          "package": "groundhog",
          "signature": "Char",
          "source": "src/Database-Groundhog-Core.html#delim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "delim",
          "package": "groundhog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:delim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "entityConstrNum",
          "package": "groundhog",
          "signature": "* -\u003e *) -\u003e Int",
          "source": "src/Database-Groundhog-Core.html#entityConstrNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "entityConstrNum",
          "normalized": "*-\u003e*)-\u003eInt",
          "package": "groundhog",
          "partial": "Constr Num",
          "signature": "*-\u003e*)-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityConstrNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a complete description of the type\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "entityDef",
          "package": "groundhog",
          "signature": "v -\u003e EntityDef",
          "source": "src/Database-Groundhog-Core.html#entityDef",
          "type": "method"
        },
        "index": {
          "description": "Returns complete description of the type",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "entityDef",
          "normalized": "a-\u003eEntityDef",
          "package": "groundhog",
          "partial": "Def",
          "signature": "v-\u003eEntityDef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs internally used by FieldLike Field instance\n We could avoid this function if class FieldLike allowed FieldLike Fields Data or FieldLike (Fields Data). However that would require additional extensions in user-space code\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "entityFieldChain",
          "package": "groundhog",
          "signature": "Field v c a -\u003e FieldChain",
          "source": "src/Database-Groundhog-Core.html#entityFieldChain",
          "type": "method"
        },
        "index": {
          "description": "Is internally used by FieldLike Field instance We could avoid this function if class FieldLike allowed FieldLike Fields Data or FieldLike Fields Data However that would require additional extensions in user-space code",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "entityFieldChain",
          "normalized": "Field a b c-\u003eFieldChain",
          "package": "groundhog",
          "partial": "Field Chain",
          "signature": "Field v c a-\u003eFieldChain",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityFieldChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntity name. \u003ccode\u003eentityName (entityDef v) == persistName v\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "entityName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Core.html#EntityDef",
          "type": "function"
        },
        "index": {
          "description": "Entity name entityName entityDef persistName",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "entityName",
          "package": "groundhog",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase schema for the entity table and tables of its constructors\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "entitySchema",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Core.html#EntityDef",
          "type": "function"
        },
        "index": {
          "description": "Database schema for the entity table and tables of its constructors",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "entitySchema",
          "package": "groundhog",
          "partial": "Schema",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entitySchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute raw query\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "executeRaw",
          "package": "groundhog",
          "signature": "executeRaw",
          "source": "src/Database-Groundhog-Core.html#executeRaw",
          "type": "method"
        },
        "index": {
          "description": "Execute raw query",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "executeRaw",
          "package": "groundhog",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:executeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates value of unique key using the data extracted from the passed value\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "extractUnique",
          "package": "groundhog",
          "signature": "v -\u003e uKey",
          "source": "src/Database-Groundhog-Core.html#extractUnique",
          "type": "method"
        },
        "index": {
          "description": "Creates value of unique key using the data extracted from the passed value",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "extractUnique",
          "normalized": "a-\u003eb",
          "package": "groundhog",
          "partial": "Unique",
          "signature": "v-\u003euKey",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:extractUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "fieldChain",
          "package": "groundhog",
          "signature": "f -\u003e FieldChain",
          "source": "src/Database-Groundhog-Core.html#fieldChain",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fieldChain",
          "normalized": "a-\u003eFieldChain",
          "package": "groundhog",
          "partial": "Chain",
          "signature": "f-\u003eFieldChain",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fieldChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs the value from the list of \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "fromEntityPersistValues",
          "package": "groundhog",
          "signature": "[PersistValue] -\u003e m (v, [PersistValue])",
          "source": "src/Database-Groundhog-Core.html#fromEntityPersistValues",
          "type": "method"
        },
        "index": {
          "description": "Constructs the value from the list of PersistValue",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fromEntityPersistValues",
          "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
          "package": "groundhog",
          "partial": "Entity Persist Values",
          "signature": "[PersistValue]-\u003em(v,[PersistValue])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromEntityPersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a value from a \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e. For complex datatypes it may query the database\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "fromPersistValues",
          "package": "groundhog",
          "signature": "[PersistValue] -\u003e m (a, [PersistValue])",
          "source": "src/Database-Groundhog-Core.html#fromPersistValues",
          "type": "method"
        },
        "index": {
          "description": "Constructs value from PersistValue For complex datatypes it may query the database",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fromPersistValues",
          "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
          "package": "groundhog",
          "partial": "Persist Values",
          "signature": "[PersistValue]-\u003em(a,[PersistValue])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromPersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "fromPrimitivePersistValue",
          "package": "groundhog",
          "signature": "Proxy db -\u003e PersistValue -\u003e a",
          "source": "src/Database-Groundhog-Core.html#fromPrimitivePersistValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fromPrimitivePersistValue",
          "normalized": "Proxy a-\u003ePersistValue-\u003eb",
          "package": "groundhog",
          "partial": "Primitive Persist Value",
          "signature": "Proxy db-\u003ePersistValue-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromPrimitivePersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "fromPurePersistValues",
          "package": "groundhog",
          "signature": "Proxy db -\u003e [PersistValue] -\u003e (a, [PersistValue])",
          "source": "src/Database-Groundhog-Core.html#fromPurePersistValues",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fromPurePersistValues",
          "normalized": "Proxy a-\u003e[PersistValue]-\u003e(b,[PersistValue])",
          "package": "groundhog",
          "partial": "Pure Persist Values",
          "signature": "Proxy db-\u003e[PersistValue]-\u003e(a,[PersistValue])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromPurePersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "fromSinglePersistValue",
          "package": "groundhog",
          "signature": "PersistValue -\u003e m a",
          "source": "src/Database-Groundhog-Core.html#fromSinglePersistValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fromSinglePersistValue",
          "normalized": "PersistValue-\u003ea b",
          "package": "groundhog",
          "partial": "Single Persist Value",
          "signature": "PersistValue-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromSinglePersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog.Generic.Sql\"]",
          "name": "fromUtf8",
          "package": "groundhog",
          "signature": "Utf8 -\u003e ByteString",
          "source": "src/Database-Groundhog-Core.html#fromUtf8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromUtf8\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:fromUtf8\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "fromUtf8",
          "normalized": "Utf-\u003eByteString",
          "package": "groundhog",
          "partial": "Utf",
          "signature": "Utf-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an entity from a database\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "get",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e m (Maybe v)",
          "source": "src/Database-Groundhog-Core.html#get",
          "type": "method"
        },
        "index": {
          "description": "Fetch an entity from database",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "get",
          "normalized": "Key a BackendSpecific-\u003eb(Maybe a)",
          "package": "groundhog",
          "signature": "Key v BackendSpecific-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an entity from a database by its unique key\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "getBy",
          "package": "groundhog",
          "signature": "Key v (Unique u) -\u003e m (Maybe v)",
          "source": "src/Database-Groundhog-Core.html#getBy",
          "type": "method"
        },
        "index": {
          "description": "Fetch an entity from database by its unique key",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "getBy",
          "normalized": "Key a(Unique b)-\u003ec(Maybe a)",
          "package": "groundhog",
          "partial": "By",
          "signature": "Key v(Unique u)-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "getList",
          "package": "groundhog",
          "signature": "Int64 -\u003e m [a]",
          "source": "src/Database-Groundhog-Core.html#getList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "getList",
          "normalized": "Int-\u003ea[b]",
          "package": "groundhog",
          "partial": "List",
          "signature": "Int-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "getSelectOptions",
          "package": "groundhog",
          "signature": "a -\u003e SelectOptions db r (HasLimit a) (HasOffset a) (HasOrder a)",
          "source": "src/Database-Groundhog-Core.html#getSelectOptions",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "getSelectOptions",
          "normalized": "a-\u003eSelectOptions b c(HasLimit a)(HasOffset a)(HasOrder a)",
          "package": "groundhog",
          "partial": "Select Options",
          "signature": "a-\u003eSelectOptions db r(HasLimit a)(HasOffset a)(HasOrder a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getSelectOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns constructor number and a list of uniques names and corresponding field values\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "getUniques",
          "package": "groundhog",
          "signature": "Proxy db -\u003e v -\u003e (Int, [(String, [PersistValue] -\u003e [PersistValue])])",
          "source": "src/Database-Groundhog-Core.html#getUniques",
          "type": "method"
        },
        "index": {
          "description": "Returns constructor number and list of uniques names and corresponding field values",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "getUniques",
          "normalized": "Proxy a-\u003eb-\u003e(Int,[(String,[PersistValue]-\u003e[PersistValue])])",
          "package": "groundhog",
          "partial": "Uniques",
          "signature": "Proxy db-\u003ev-\u003e(Int,[(String,[PersistValue]-\u003e[PersistValue])])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getUniques"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new record to a database and return its autogenerated key or ()\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "insert",
          "package": "groundhog",
          "signature": "v -\u003e m (AutoKey v)",
          "source": "src/Database-Groundhog-Core.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Insert new record to database and return its autogenerated key or",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "insert",
          "normalized": "a-\u003eb(AutoKey a)",
          "package": "groundhog",
          "signature": "v-\u003em(AutoKey v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for the given constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "insertBy",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e v -\u003e m (Either (AutoKey v) (AutoKey v))",
          "source": "src/Database-Groundhog-Core.html#insertBy",
          "type": "method"
        },
        "index": {
          "description": "Try to insert record and return Right newkey If there is constraint violation for the given constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "insertBy",
          "normalized": "a(UniqueMarker b)-\u003eb-\u003ec(Either(AutoKey b)(AutoKey b))",
          "package": "groundhog",
          "partial": "By",
          "signature": "u(UniqueMarker v)-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for any constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values. Note that if several constraints are violated, a key of an arbitrary matching record is returned.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "insertByAll",
          "package": "groundhog",
          "signature": "v -\u003e m (Either (AutoKey v) (AutoKey v))",
          "source": "src/Database-Groundhog-Core.html#insertByAll",
          "type": "method"
        },
        "index": {
          "description": "Try to insert record and return Right newkey If there is constraint violation for any constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values Note that if several constraints are violated key of an arbitrary matching record is returned",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "insertByAll",
          "normalized": "a-\u003eb(Either(AutoKey a)(AutoKey a))",
          "package": "groundhog",
          "partial": "By All",
          "signature": "v-\u003em(Either(AutoKey v)(AutoKey v))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insertByAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "insertList",
          "package": "groundhog",
          "signature": "[a] -\u003e m Int64",
          "source": "src/Database-Groundhog-Core.html#insertList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "insertList",
          "normalized": "[a]-\u003eb Int",
          "package": "groundhog",
          "partial": "List",
          "signature": "[a]-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new record to a database. For some backends it may be faster than \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "insert_",
          "package": "groundhog",
          "signature": "v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#insert_",
          "type": "method"
        },
        "index": {
          "description": "Insert new record to database For some backends it may be faster than insert",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "insert_",
          "normalized": "a-\u003eb()",
          "package": "groundhog",
          "signature": "v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insert_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "limitOptions",
          "package": "groundhog",
          "signature": "Maybe Int",
          "source": "src/Database-Groundhog-Core.html#SelectOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "limitOptions",
          "package": "groundhog",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:limitOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "limitTo",
          "package": "groundhog",
          "signature": "a -\u003e Int -\u003e SelectOptions db r HTrue (HasOffset a) (HasOrder a)",
          "source": "src/Database-Groundhog-Core.html#limitTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:limitTo\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:limitTo\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "limitTo",
          "normalized": "a-\u003eInt-\u003eSelectOptions b c HTrue(HasOffset a)(HasOrder a)",
          "package": "groundhog",
          "partial": "To",
          "signature": "a-\u003eInt-\u003eSelectOptions db r HTrue(HasOffset a)(HasOrder a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:limitTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck database schema and create migrations for the entity and the entities it contains\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "migrate",
          "package": "groundhog",
          "signature": "v -\u003e Migration m",
          "source": "src/Database-Groundhog-Core.html#migrate",
          "type": "method"
        },
        "index": {
          "description": "Check database schema and create migrations for the entity and the entities it contains",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "migrate",
          "normalized": "a-\u003eMigration b",
          "package": "groundhog",
          "signature": "v-\u003eMigration m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "offsetBy",
          "package": "groundhog",
          "signature": "a -\u003e Int -\u003e SelectOptions db r (HasLimit a) HTrue (HasOrder a)",
          "source": "src/Database-Groundhog-Core.html#offsetBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:offsetBy\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:offsetBy\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "offsetBy",
          "normalized": "a-\u003eInt-\u003eSelectOptions b c(HasLimit a)HTrue(HasOrder a)",
          "package": "groundhog",
          "partial": "By",
          "signature": "a-\u003eInt-\u003eSelectOptions db r(HasLimit a)HTrue(HasOrder a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:offsetBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "offsetOptions",
          "package": "groundhog",
          "signature": "Maybe Int",
          "source": "src/Database-Groundhog-Core.html#SelectOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "offsetOptions",
          "package": "groundhog",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:offsetOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "orderBy",
          "package": "groundhog",
          "signature": "a -\u003e [Order db r] -\u003e SelectOptions db r (HasLimit a) (HasOffset a) HTrue",
          "source": "src/Database-Groundhog-Core.html#orderBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:orderBy\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:orderBy\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "orderBy",
          "normalized": "a-\u003e[Order b c]-\u003eSelectOptions b c(HasLimit a)(HasOffset a)HTrue",
          "package": "groundhog",
          "partial": "By",
          "signature": "a-\u003e[Order db r]-\u003eSelectOptions db r(HasLimit a)(HasOffset a)HTrue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:orderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "orderOptions",
          "package": "groundhog",
          "signature": "[Order db r]",
          "source": "src/Database-Groundhog-Core.html#SelectOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "orderOptions",
          "normalized": "[Order a b]",
          "package": "groundhog",
          "partial": "Options",
          "signature": "[Order db r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:orderOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn name of the type. If it is polymorphic, the names of parameter types are separated with \u003ccode\u003e\u003ca\u003edelim\u003c/a\u003e\u003c/code\u003e symbol\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "persistName",
          "package": "groundhog",
          "signature": "a -\u003e String",
          "source": "src/Database-Groundhog-Core.html#persistName",
          "type": "method"
        },
        "index": {
          "description": "Return name of the type If it is polymorphic the names of parameter types are separated with delim symbol",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "persistName",
          "normalized": "a-\u003eString",
          "package": "groundhog",
          "partial": "Name",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:persistName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns constructor index which can be used to get ConstructorDef from EntityDef\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "phantomConstrNum",
          "package": "groundhog",
          "signature": "* -\u003e *) -\u003e Int",
          "source": "src/Database-Groundhog-Core.html#phantomConstrNum",
          "type": "method"
        },
        "index": {
          "description": "Returns constructor index which can be used to get ConstructorDef from EntityDef",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "phantomConstrNum",
          "normalized": "*-\u003e*)-\u003eInt",
          "package": "groundhog",
          "partial": "Constr Num",
          "signature": "*-\u003e*)-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:phantomConstrNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch projection of some fields. Example: \u003ccode\u003eproject (SecondField, ThirdField) $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `offsetBy` 100\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "project",
          "package": "groundhog",
          "signature": "p -\u003e opts -\u003e m [a]",
          "source": "src/Database-Groundhog-Core.html#project",
          "type": "method"
        },
        "index": {
          "description": "Fetch projection of some fields Example project SecondField ThirdField FirstField abc SecondField def orderBy Asc ThirdField offsetBy",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "project",
          "normalized": "a-\u003eb-\u003ec[d]",
          "package": "groundhog",
          "signature": "p-\u003eopts-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt returns multiple expressions that can be transformed into values which can be selected. Difflist is used for concatenation efficiency.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "projectionExprs",
          "package": "groundhog",
          "signature": "p -\u003e [UntypedExpr db r] -\u003e [UntypedExpr db r]",
          "source": "src/Database-Groundhog-Core.html#projectionExprs",
          "type": "method"
        },
        "index": {
          "description": "It returns multiple expressions that can be transformed into values which can be selected Difflist is used for concatenation efficiency",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "projectionExprs",
          "normalized": "a-\u003e[UntypedExpr b c]-\u003e[UntypedExpr b c]",
          "package": "groundhog",
          "partial": "Exprs",
          "signature": "p-\u003e[UntypedExpr db r]-\u003e[UntypedExpr db r]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:projectionExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is like \u003ccode\u003e\u003ca\u003efromPersistValues\u003c/a\u003e\u003c/code\u003e. However, we cannot use it for projections in all cases. For the \u003ccode\u003e\u003ca\u003ePersistEntity\u003c/a\u003e\u003c/code\u003e instances \u003ccode\u003e\u003ca\u003efromPersistValues\u003c/a\u003e\u003c/code\u003e expects entity id instead of the entity values.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "projectionResult",
          "package": "groundhog",
          "signature": "p -\u003e [PersistValue] -\u003e m (a, [PersistValue])",
          "source": "src/Database-Groundhog-Core.html#projectionResult",
          "type": "method"
        },
        "index": {
          "description": "It is like fromPersistValues However we cannot use it for projections in all cases For the PersistEntity instances fromPersistValues expects entity id instead of the entity values",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "projectionResult",
          "normalized": "a-\u003e[PersistValue]-\u003eb(c,[PersistValue])",
          "package": "groundhog",
          "partial": "Result",
          "signature": "p-\u003e[PersistValue]-\u003em(a,[PersistValue])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:projectionResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute raw query with results\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "queryRaw",
          "package": "groundhog",
          "signature": "queryRaw",
          "source": "src/Database-Groundhog-Core.html#queryRaw",
          "type": "method"
        },
        "index": {
          "description": "Execute raw query with results",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "queryRaw",
          "package": "groundhog",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:queryRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a record with the given autogenerated key. Result is undefined if the record does not exist.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "replace",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#replace",
          "type": "method"
        },
        "index": {
          "description": "Replace record with the given autogenerated key Result is undefined if the record does not exist",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "replace",
          "normalized": "Key a BackendSpecific-\u003ea-\u003eb()",
          "package": "groundhog",
          "signature": "Key v BackendSpecific-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a record. The unique key marker defines what unique key of the entity is used.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "replaceBy",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#replaceBy",
          "type": "method"
        },
        "index": {
          "description": "Replace record The unique key marker defines what unique key of the entity is used",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "replaceBy",
          "normalized": "a(UniqueMarker b)-\u003eb-\u003ec()",
          "package": "groundhog",
          "partial": "By",
          "signature": "u(UniqueMarker v)-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:replaceBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "runDbPersist",
          "package": "groundhog",
          "signature": "DbPersist conn m a -\u003e conn -\u003e m a",
          "source": "src/Database-Groundhog-Core.html#runDbPersist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "runDbPersist",
          "normalized": "DbPersist a b c-\u003ea-\u003eb c",
          "package": "groundhog",
          "partial": "Db Persist",
          "signature": "DbPersist conn m a-\u003econn-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:runDbPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of the records satisfying the condition. Example: \u003ccode\u003eselect $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `limitTo` 100\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "select",
          "package": "groundhog",
          "signature": "opts -\u003e m [v]",
          "source": "src/Database-Groundhog-Core.html#select",
          "type": "method"
        },
        "index": {
          "description": "Return list of the records satisfying the condition Example select FirstField abc SecondField def orderBy Asc ThirdField limitTo",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "select",
          "normalized": "a-\u003eb[c]",
          "package": "groundhog",
          "signature": "opts-\u003em[v]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all records. Order is undefined. It can be useful for datatypes with multiple constructors.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "selectAll",
          "package": "groundhog",
          "signature": "m [(AutoKey v, v)]",
          "source": "src/Database-Groundhog-Core.html#selectAll",
          "type": "method"
        },
        "index": {
          "description": "Return list of all records Order is undefined It can be useful for datatypes with multiple constructors",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "selectAll",
          "normalized": "a[(AutoKey b,b)]",
          "package": "groundhog",
          "partial": "All",
          "signature": "m[(AutoKey v,v)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:selectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "selectorNum",
          "package": "groundhog",
          "signature": "Selector v a -\u003e Int",
          "source": "src/Database-Groundhog-Core.html#selectorNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "selectorNum",
          "normalized": "Selector a b-\u003eInt",
          "package": "groundhog",
          "partial": "Num",
          "signature": "Selector v a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:selectorNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshalls value to a list of \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e ready for insert to a database\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "toEntityPersistValues",
          "package": "groundhog",
          "signature": "v -\u003e m ([PersistValue] -\u003e [PersistValue])",
          "source": "src/Database-Groundhog-Core.html#toEntityPersistValues",
          "type": "method"
        },
        "index": {
          "description": "Marshalls value to list of PersistValue ready for insert to database",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "toEntityPersistValues",
          "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
          "package": "groundhog",
          "partial": "Entity Persist Values",
          "signature": "v-\u003em([PersistValue]-\u003e[PersistValue])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toEntityPersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value into something which can be stored in a database column.\n Note that for complex datatypes it may insert them to return identifier\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "toPersistValues",
          "package": "groundhog",
          "signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
          "source": "src/Database-Groundhog-Core.html#toPersistValues",
          "type": "method"
        },
        "index": {
          "description": "Convert value into something which can be stored in database column Note that for complex datatypes it may insert them to return identifier",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "toPersistValues",
          "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
          "package": "groundhog",
          "partial": "Persist Values",
          "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toPersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "toPrimitivePersistValue",
          "package": "groundhog",
          "signature": "Proxy db -\u003e a -\u003e PersistValue",
          "source": "src/Database-Groundhog-Core.html#toPrimitivePersistValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "toPrimitivePersistValue",
          "normalized": "Proxy a-\u003eb-\u003ePersistValue",
          "package": "groundhog",
          "partial": "Primitive Persist Value",
          "signature": "Proxy db-\u003ea-\u003ePersistValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toPrimitivePersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "toPurePersistValues",
          "package": "groundhog",
          "signature": "Proxy db -\u003e a -\u003e [PersistValue] -\u003e [PersistValue]",
          "source": "src/Database-Groundhog-Core.html#toPurePersistValues",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "toPurePersistValues",
          "normalized": "Proxy a-\u003eb-\u003e[PersistValue]-\u003e[PersistValue]",
          "package": "groundhog",
          "partial": "Pure Persist Values",
          "signature": "Proxy db-\u003ea-\u003e[PersistValue]-\u003e[PersistValue]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toPurePersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "toSinglePersistValue",
          "package": "groundhog",
          "signature": "a -\u003e m PersistValue",
          "source": "src/Database-Groundhog-Core.html#toSinglePersistValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "toSinglePersistValue",
          "normalized": "a-\u003eb PersistValue",
          "package": "groundhog",
          "partial": "Single Persist Value",
          "signature": "a-\u003em PersistValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toSinglePersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed types of the instantiated polymorphic type parameters\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "typeParams",
          "package": "groundhog",
          "signature": "[DbType]",
          "source": "src/Database-Groundhog-Core.html#EntityDef",
          "type": "function"
        },
        "index": {
          "description": "Named types of the instantiated polymorphic type parameters",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "typeParams",
          "normalized": "[DbType]",
          "package": "groundhog",
          "partial": "Params",
          "signature": "[DbType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:typeParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Core\",\"Database.Groundhog\"]",
          "name": "unDbPersist",
          "package": "groundhog",
          "signature": "ReaderT conn m a",
          "source": "src/Database-Groundhog-Core.html#DbPersist",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:unDbPersist\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:unDbPersist\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "unDbPersist",
          "package": "groundhog",
          "partial": "Db Persist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:unDbPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "uniqueFields",
          "package": "groundhog",
          "signature": "[(String, DbType)]",
          "source": "src/Database-Groundhog-Core.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "uniqueFields",
          "normalized": "[(String,DbType)]",
          "package": "groundhog",
          "partial": "Fields",
          "signature": "[(String,DbType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "uniqueName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Core.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "uniqueName",
          "package": "groundhog",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinal number of the unique constraint in the list returned by \u003ccode\u003e\u003ca\u003econstrUniques\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "uniqueNum",
          "package": "groundhog",
          "signature": "uKey -\u003e Int",
          "source": "src/Database-Groundhog-Core.html#uniqueNum",
          "type": "method"
        },
        "index": {
          "description": "Ordinal number of the unique constraint in the list returned by constrUniques",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "uniqueNum",
          "normalized": "a-\u003eInt",
          "package": "groundhog",
          "partial": "Num",
          "signature": "uKey-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Core",
          "name": "uniqueType",
          "package": "groundhog",
          "signature": "UniqueType",
          "source": "src/Database-Groundhog-Core.html#UniqueDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "uniqueType",
          "package": "groundhog",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the records satisfying the condition. Example: \u003ccode\u003eupdate [FirstField =. \"abc\"] $ FirstField ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "update",
          "package": "groundhog",
          "signature": "[Update (PhantomDb m) (RestrictionHolder v c)] -\u003e Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#update",
          "type": "method"
        },
        "index": {
          "description": "Update the records satisfying the condition Example update FirstField abc FirstField def",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "update",
          "normalized": "[Update(PhantomDb a)(RestrictionHolder b c)]-\u003eCond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
          "package": "groundhog",
          "signature": "[Update(PhantomDb m)(RestrictionHolder v c)]-\u003eCond(PhantomDb m)(RestrictionHolder v c)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the connection from manager and opens the transaction.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "withConn",
          "package": "groundhog",
          "signature": "(conn -\u003e m a) -\u003e cm -\u003e m a",
          "source": "src/Database-Groundhog-Core.html#withConn",
          "type": "method"
        },
        "index": {
          "description": "Extracts the connection from manager and opens the transaction",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "withConn",
          "normalized": "(a-\u003eb c)-\u003ed-\u003eb c",
          "package": "groundhog",
          "partial": "Conn",
          "signature": "(conn-\u003em a)-\u003ecm-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:withConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the connection.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "withConnNoTransaction",
          "package": "groundhog",
          "signature": "(conn -\u003e m a) -\u003e cm -\u003e m a",
          "source": "src/Database-Groundhog-Core.html#withConnNoTransaction",
          "type": "method"
        },
        "index": {
          "description": "Extracts the connection",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "withConnNoTransaction",
          "normalized": "(a-\u003eb c)-\u003ed-\u003eb c",
          "package": "groundhog",
          "partial": "Conn No Transaction",
          "signature": "(conn-\u003em a)-\u003ecm-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:withConnNoTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps the passed action into a named savepoint\n\u003c/p\u003e",
          "module": "Database.Groundhog.Core",
          "name": "withConnSavepoint",
          "package": "groundhog",
          "signature": "String -\u003e m a -\u003e conn -\u003e m a",
          "source": "src/Database-Groundhog-Core.html#withConnSavepoint",
          "type": "method"
        },
        "index": {
          "description": "Wraps the passed action into named savepoint",
          "hierarchy": "Database Groundhog Core",
          "module": "Database.Groundhog.Core",
          "name": "withConnSavepoint",
          "normalized": "String-\u003ea b-\u003ec-\u003ea b",
          "package": "groundhog",
          "partial": "Conn Savepoint",
          "signature": "String-\u003em a-\u003econn-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:withConnSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides mechanism for flexible and typesafe usage of plain data values and fields.\n The expressions can used in conditions and right part of Update statement.\n Example:\n\u003c/p\u003e\u003cpre\u003e\n StringField ==. \"abc\" &&. NumberField \u003e. (0 :: Int) ||. MaybeField ==. (Nothing :: Maybe String) ||. MaybeField ==. Just \"def\"\n\u003c/pre\u003e\u003cp\u003eNote that polymorphic values like numbers or Nothing must have a type annotation.\n Comparison operators specific for SQL such as IN and LIKE are defined in \u003ca\u003eDatabase.Groundhog.Generic.Sql.Functions\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Expression",
          "name": "Expression",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Expression.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides mechanism for flexible and typesafe usage of plain data values and fields The expressions can used in conditions and right part of Update statement Example StringField abc NumberField Int MaybeField Nothing Maybe String MaybeField Just def Note that polymorphic values like numbers or Nothing must have type annotation Comparison operators specific for SQL such as IN and LIKE are defined in Database.Groundhog.Generic.Sql.Functions",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "Expression",
          "package": "groundhog",
          "partial": "Expression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of this type can be converted to \u003ccode\u003e\u003ca\u003eUntypedExpr\u003c/a\u003e\u003c/code\u003e. It is useful for uniform manipulation over fields, constant values, etc.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Expression",
          "name": "Expression",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Expression.html#Expression",
          "type": "class"
        },
        "index": {
          "description": "Instances of this type can be converted to UntypedExpr It is useful for uniform manipulation over fields constant values etc",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "Expression",
          "package": "groundhog",
          "partial": "Expression",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis helper class can make type signatures more concise\n\u003c/p\u003e",
          "module": "Database.Groundhog.Expression",
          "name": "ExpressionOf",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Expression.html#ExpressionOf",
          "type": "class"
        },
        "index": {
          "description": "This helper class can make type signatures more concise",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "ExpressionOf",
          "package": "groundhog",
          "partial": "Expression Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#t:ExpressionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Expression",
          "name": "Unifiable",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Expression.html#Unifiable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "Unifiable",
          "package": "groundhog",
          "partial": "Unifiable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#t:Unifiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\" operator.\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(||.)",
          "package": "groundhog",
          "signature": "Cond db r -\u003e Cond db r -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%7C%7C.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-124--124-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-124--124-.\"]"
        },
        "index": {
          "description": "Boolean or operator",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(||.) ||.",
          "normalized": "Cond a b-\u003eCond a b-\u003eCond a b",
          "package": "groundhog",
          "signature": "Cond db r-\u003eCond db r-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\" operator.\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(&&.)",
          "package": "groundhog",
          "signature": "Cond db r -\u003e Cond db r -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%26%26.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-38--38-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-38--38-.\"]"
        },
        "index": {
          "description": "Boolean and operator",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(&&.) &&.",
          "normalized": "Cond a b-\u003eCond a b-\u003eCond a b",
          "package": "groundhog",
          "signature": "Cond db r-\u003eCond db r-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(/=.)",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%2F%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-47--61-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-47--61-.\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(/=.) /=.",
          "normalized": "a-\u003eb-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-47--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(\u003c=.)",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%3C%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-60--61-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-60--61-.\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(\u003c=.) \u003c=.",
          "normalized": "a-\u003eb-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-60--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(\u003c.)",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%3C.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-60-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-60-.\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(\u003c.) \u003c.",
          "normalized": "a-\u003eb-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(==.)",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%3D%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-61--61-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-61--61-.\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(==.) ==.",
          "normalized": "a-\u003eb-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate field\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(=.)",
          "package": "groundhog",
          "signature": "f -\u003e b -\u003e Update db r",
          "source": "src/Database-Groundhog-Expression.html#%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-61-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-61-.\"]"
        },
        "index": {
          "description": "Update field",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(=.) =.",
          "normalized": "a-\u003eb-\u003eUpdate c d",
          "package": "groundhog",
          "signature": "f-\u003eb-\u003eUpdate db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(\u003e=.)",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%3E%3D.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-62--61-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-62--61-.\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(\u003e=.) \u003e=.",
          "normalized": "a-\u003eb-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "(\u003e.)",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#%3E.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-62-.\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-62-.\"]"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "(\u003e.) \u003e.",
          "normalized": "a-\u003eb-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function more limited than (==.), but has better type inference.\n If you want to compare your value to Nothing with \u003ccode\u003e(==.)\u003c/code\u003e operator, you have to write the types explicitly \u003ccode\u003emyExpr ==. (Nothing :: Maybe Int)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Expression\",\"Database.Groundhog\"]",
          "name": "isFieldNothing",
          "package": "groundhog",
          "signature": "f -\u003e Cond db r",
          "source": "src/Database-Groundhog-Expression.html#isFieldNothing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:isFieldNothing\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:isFieldNothing\"]"
        },
        "index": {
          "description": "This function more limited than but has better type inference If you want to compare your value to Nothing with operator you have to write the types explicitly myExpr Nothing Maybe Int",
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "isFieldNothing",
          "normalized": "a-\u003eCond b c",
          "package": "groundhog",
          "partial": "Field Nothing",
          "signature": "f-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:isFieldNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Expression",
          "name": "toExpr",
          "package": "groundhog",
          "signature": "a -\u003e UntypedExpr db r",
          "source": "src/Database-Groundhog-Expression.html#toExpr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Expression",
          "module": "Database.Groundhog.Expression",
          "name": "toExpr",
          "normalized": "a-\u003eUntypedExpr b c",
          "package": "groundhog",
          "partial": "Expr",
          "signature": "a-\u003eUntypedExpr db r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:toExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module is intended for use by the backend creators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Migration",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module is intended for use by the backend creators",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Migration",
          "package": "groundhog",
          "partial": "Migration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterColumn",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterColumn",
          "package": "groundhog",
          "partial": "Alter Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:AlterColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterDB",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterDB",
          "package": "groundhog",
          "partial": "Alter DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:AlterDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterTable",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterTable",
          "package": "groundhog",
          "partial": "Alter Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:AlterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Column",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#Column",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Column",
          "package": "groundhog",
          "partial": "Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "MigrationPack",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "MigrationPack",
          "package": "groundhog",
          "partial": "Migration Pack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:MigrationPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Reference",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Reference",
          "package": "groundhog",
          "partial": "Reference",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:Reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "SchemaAnalyzer",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#SchemaAnalyzer",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "SchemaAnalyzer",
          "package": "groundhog",
          "partial": "Schema Analyzer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:SchemaAnalyzer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "TableInfo",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "TableInfo",
          "package": "groundhog",
          "partial": "Table Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:TableInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "UniqueDef'",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "UniqueDef'",
          "package": "groundhog",
          "partial": "Unique Def'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:UniqueDef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddColumn",
          "package": "groundhog",
          "signature": "AddColumn Column",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddColumn",
          "package": "groundhog",
          "partial": "Add Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddReference",
          "package": "groundhog",
          "signature": "AddReference Reference",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddReference",
          "package": "groundhog",
          "partial": "Add Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddTable",
          "package": "groundhog",
          "signature": "AddTable String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddTable",
          "package": "groundhog",
          "partial": "Add Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger schema, trigger name, table schema, table name, body\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddTriggerOnDelete",
          "package": "groundhog",
          "signature": "AddTriggerOnDelete (Maybe String) String (Maybe String) String String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "description": "Trigger schema trigger name table schema table name body",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddTriggerOnDelete",
          "package": "groundhog",
          "partial": "Add Trigger On Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddTriggerOnDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger schema, trigger name, table schema, table name, field name, body\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddTriggerOnUpdate",
          "package": "groundhog",
          "signature": "AddTriggerOnUpdate (Maybe String) String (Maybe String) String (Maybe String) String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "description": "Trigger schema trigger name table schema table name field name body",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddTriggerOnUpdate",
          "package": "groundhog",
          "partial": "Add Trigger On Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddTriggerOnUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddUnique",
          "package": "groundhog",
          "signature": "AddUnique UniqueDef'",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AddUnique",
          "package": "groundhog",
          "partial": "Add Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterColumn",
          "package": "groundhog",
          "signature": "AlterColumn Column [AlterColumn]",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterColumn",
          "normalized": "AlterColumn Column[AlterColumn]",
          "package": "groundhog",
          "partial": "Alter Column",
          "signature": "AlterColumn Column[AlterColumn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AlterColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable schema, table name, create statement, structure of table from DB, structure of table from datatype, alters\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterTable",
          "package": "groundhog",
          "signature": "AlterTable (Maybe String) String String TableInfo TableInfo [AlterTable]",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "description": "Table schema table name create statement structure of table from DB structure of table from datatype alters",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "AlterTable",
          "normalized": "AlterTable(Maybe String)String String TableInfo TableInfo[AlterTable]",
          "package": "groundhog",
          "partial": "Alter Table",
          "signature": "AlterTable(Maybe String)String String TableInfo TableInfo[AlterTable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AlterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Column",
          "package": "groundhog",
          "signature": "Column",
          "source": "src/Database-Groundhog-Generic-Migration.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Column",
          "package": "groundhog",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement which creates the function\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "CreateOrReplaceFunction",
          "package": "groundhog",
          "signature": "CreateOrReplaceFunction String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "description": "Statement which creates the function",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "CreateOrReplaceFunction",
          "package": "groundhog",
          "partial": "Create Or Replace Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:CreateOrReplaceFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Default",
          "package": "groundhog",
          "signature": "Default String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Default",
          "package": "groundhog",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropColumn",
          "package": "groundhog",
          "signature": "DropColumn String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropColumn",
          "package": "groundhog",
          "partial": "Drop Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropConstraint",
          "package": "groundhog",
          "signature": "DropConstraint String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropConstraint",
          "package": "groundhog",
          "partial": "Drop Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction schema, function name\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropFunction",
          "package": "groundhog",
          "signature": "DropFunction (Maybe String) String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "description": "Function schema function name",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropFunction",
          "package": "groundhog",
          "partial": "Drop Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropIndex",
          "package": "groundhog",
          "signature": "DropIndex String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropIndex",
          "package": "groundhog",
          "partial": "Drop Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropReference",
          "package": "groundhog",
          "signature": "DropReference String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropReference",
          "package": "groundhog",
          "partial": "Drop Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger schema, trigger name, table schema, table name\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropTrigger",
          "package": "groundhog",
          "signature": "DropTrigger (Maybe String) String (Maybe String) String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
          "type": "function"
        },
        "index": {
          "description": "Trigger schema trigger name table schema table name",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "DropTrigger",
          "package": "groundhog",
          "partial": "Drop Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "IsNull",
          "package": "groundhog",
          "signature": "IsNull",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "IsNull",
          "package": "groundhog",
          "partial": "Is Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:IsNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "MigrationPack",
          "package": "groundhog",
          "signature": "MigrationPack",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "MigrationPack",
          "package": "groundhog",
          "partial": "Migration Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:MigrationPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "NoDefault",
          "package": "groundhog",
          "signature": "NoDefault",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "NoDefault",
          "package": "groundhog",
          "partial": "No Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:NoDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "NotNull",
          "package": "groundhog",
          "signature": "NotNull",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "NotNull",
          "package": "groundhog",
          "partial": "Not Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:NotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Reference",
          "package": "groundhog",
          "signature": "Reference",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Reference",
          "package": "groundhog",
          "partial": "Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "TableInfo",
          "package": "groundhog",
          "signature": "TableInfo",
          "source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "TableInfo",
          "package": "groundhog",
          "partial": "Table Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:TableInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Type",
          "package": "groundhog",
          "signature": "Type DbTypePrimitive",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "Type",
          "package": "groundhog",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "UniqueDef'",
          "package": "groundhog",
          "signature": "UniqueDef'",
          "source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "UniqueDef'",
          "package": "groundhog",
          "partial": "Unique Def'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:UniqueDef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "UpdateValue",
          "package": "groundhog",
          "signature": "UpdateValue String",
          "source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "UpdateValue",
          "package": "groundhog",
          "partial": "Update Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:UpdateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSql pieces for the create table statement that add constraints and alterations for running after the table is created\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "addUniquesReferences",
          "package": "groundhog",
          "signature": "[UniqueDef'] -\u003e [Reference] -\u003e ([String], [AlterTable])",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "description": "Sql pieces for the create table statement that add constraints and alterations for running after the table is created",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "addUniquesReferences",
          "normalized": "[UniqueDef']-\u003e[Reference]-\u003e([String],[AlterTable])",
          "package": "groundhog",
          "partial": "Uniques References",
          "signature": "[UniqueDef']-\u003e[Reference]-\u003e([String],[AlterTable])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:addUniquesReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "analyzeFunction",
          "package": "groundhog",
          "signature": "analyzeFunction",
          "source": "src/Database-Groundhog-Generic-Migration.html#analyzeFunction",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "analyzeFunction",
          "package": "groundhog",
          "partial": "Function",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:analyzeFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "analyzeTable",
          "package": "groundhog",
          "signature": "analyzeTable",
          "source": "src/Database-Groundhog-Generic-Migration.html#analyzeTable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "analyzeTable",
          "package": "groundhog",
          "partial": "Table",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:analyzeTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "analyzeTrigger",
          "package": "groundhog",
          "signature": "analyzeTrigger",
          "source": "src/Database-Groundhog-Generic-Migration.html#analyzeTrigger",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "analyzeTrigger",
          "package": "groundhog",
          "partial": "Trigger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:analyzeTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colDefault",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic-Migration.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colDefault",
          "package": "groundhog",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Generic-Migration.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colName",
          "package": "groundhog",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colNull",
          "package": "groundhog",
          "signature": "Bool",
          "source": "src/Database-Groundhog-Generic-Migration.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colNull",
          "package": "groundhog",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colType",
          "package": "groundhog",
          "signature": "DbTypePrimitive",
          "source": "src/Database-Groundhog-Generic-Migration.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "colType",
          "package": "groundhog",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareDefaults",
          "package": "groundhog",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareDefaults",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "groundhog",
          "partial": "Defaults",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareRefs",
          "package": "groundhog",
          "signature": "(Maybe String, Reference) -\u003e (Maybe String, Reference) -\u003e Bool",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareRefs",
          "normalized": "(Maybe String,Reference)-\u003e(Maybe String,Reference)-\u003eBool",
          "package": "groundhog",
          "partial": "Refs",
          "signature": "(Maybe String,Reference)-\u003e(Maybe String,Reference)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareTypes",
          "package": "groundhog",
          "signature": "DbTypePrimitive -\u003e DbTypePrimitive -\u003e Bool",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareTypes",
          "normalized": "DbTypePrimitive-\u003eDbTypePrimitive-\u003eBool",
          "package": "groundhog",
          "partial": "Types",
          "signature": "DbTypePrimitive-\u003eDbTypePrimitive-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareUniqs",
          "package": "groundhog",
          "signature": "UniqueDef' -\u003e UniqueDef' -\u003e Bool",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "compareUniqs",
          "normalized": "UniqueDef'-\u003eUniqueDef'-\u003eBool",
          "package": "groundhog",
          "partial": "Uniqs",
          "signature": "UniqueDef'-\u003eUniqueDef'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareUniqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "defaultMigConstr",
          "package": "groundhog",
          "signature": "MigrationPack m -\u003e EntityDef -\u003e ConstructorDef -\u003e m (Bool, SingleMigration)",
          "source": "src/Database-Groundhog-Generic-Migration.html#defaultMigConstr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "defaultMigConstr",
          "normalized": "MigrationPack a-\u003eEntityDef-\u003eConstructorDef-\u003ea(Bool,SingleMigration)",
          "package": "groundhog",
          "partial": "Mig Constr",
          "signature": "MigrationPack m-\u003eEntityDef-\u003eConstructorDef-\u003em(Bool,SingleMigration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:defaultMigConstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "defaultPriority",
          "package": "groundhog",
          "signature": "Int",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "defaultPriority",
          "package": "groundhog",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:defaultPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "defaultReferenceActionType",
          "package": "groundhog",
          "signature": "ReferenceActionType",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "defaultReferenceActionType",
          "package": "groundhog",
          "partial": "Reference Action Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:defaultReferenceActionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "escape",
          "package": "groundhog",
          "signature": "String -\u003e String",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "escape",
          "normalized": "String-\u003eString",
          "package": "groundhog",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "getAlters",
          "package": "groundhog",
          "signature": "MigrationPack m-\u003e TableInfo-\u003e TableInfo-\u003e [AlterTable]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "getAlters",
          "normalized": "MigrationPack a-\u003eTableInfo-\u003eTableInfo-\u003e[AlterTable]",
          "package": "groundhog",
          "partial": "Alters",
          "signature": "MigrationPack m-\u003eTableInfo-\u003eTableInfo-\u003e[AlterTable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:getAlters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "listTableTriggers",
          "package": "groundhog",
          "signature": "listTableTriggers",
          "source": "src/Database-Groundhog-Generic-Migration.html#listTableTriggers",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "listTableTriggers",
          "package": "groundhog",
          "partial": "Table Triggers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:listTableTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "listTables",
          "package": "groundhog",
          "signature": "listTables",
          "source": "src/Database-Groundhog-Generic-Migration.html#listTables",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "listTables",
          "package": "groundhog",
          "partial": "Tables",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:listTables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "mainTableId",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "mainTableId",
          "package": "groundhog",
          "partial": "Table Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:mainTableId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migConstr",
          "package": "groundhog",
          "signature": "MigrationPack m -\u003e EntityDef -\u003e ConstructorDef -\u003e m (Bool, SingleMigration)",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migConstr",
          "normalized": "MigrationPack a-\u003eEntityDef-\u003eConstructorDef-\u003ea(Bool,SingleMigration)",
          "package": "groundhog",
          "partial": "Constr",
          "signature": "MigrationPack m-\u003eEntityDef-\u003eConstructorDef-\u003em(Bool,SingleMigration)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migConstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migTriggerOnDelete",
          "package": "groundhog",
          "signature": "Maybe String -\u003e String -\u003e [(String, String)] -\u003e m (Bool, [AlterDB])",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migTriggerOnDelete",
          "normalized": "Maybe String-\u003eString-\u003e[(String,String)]-\u003ea(Bool,[AlterDB])",
          "package": "groundhog",
          "partial": "Trigger On Delete",
          "signature": "Maybe String-\u003eString-\u003e[(String,String)]-\u003em(Bool,[AlterDB])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migTriggerOnDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migTriggerOnUpdate",
          "package": "groundhog",
          "signature": "Maybe String -\u003e String -\u003e [(String, String)] -\u003e m [(Bool, [AlterDB])]",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migTriggerOnUpdate",
          "normalized": "Maybe String-\u003eString-\u003e[(String,String)]-\u003ea[(Bool,[AlterDB])]",
          "package": "groundhog",
          "partial": "Trigger On Update",
          "signature": "Maybe String-\u003eString-\u003e[(String,String)]-\u003em[(Bool,[AlterDB])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migTriggerOnUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migrateEntity",
          "package": "groundhog",
          "signature": "MigrationPack m -\u003e EntityDef -\u003e m SingleMigration",
          "source": "src/Database-Groundhog-Generic-Migration.html#migrateEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migrateEntity",
          "normalized": "MigrationPack a-\u003eEntityDef-\u003ea SingleMigration",
          "package": "groundhog",
          "partial": "Entity",
          "signature": "MigrationPack m-\u003eEntityDef-\u003em SingleMigration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migrateEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migrateList",
          "package": "groundhog",
          "signature": "MigrationPack m -\u003e DbType -\u003e m SingleMigration",
          "source": "src/Database-Groundhog-Generic-Migration.html#migrateList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migrateList",
          "normalized": "MigrationPack a-\u003eDbType-\u003ea SingleMigration",
          "package": "groundhog",
          "partial": "List",
          "signature": "MigrationPack m-\u003eDbType-\u003em SingleMigration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migrateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate migration for a given entity and all entities it depends on.\n The stateful Map is used to avoid duplicate migrations when an entity type\n occurs several times in a datatype\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migrateRecursively",
          "package": "groundhog",
          "signature": "(EntityDef -\u003e m SingleMigration)-\u003e (DbType -\u003e m SingleMigration)-\u003e v-\u003e StateT NamedMigrations m ()",
          "type": "function"
        },
        "index": {
          "description": "Create migration for given entity and all entities it depends on The stateful Map is used to avoid duplicate migrations when an entity type occurs several times in datatype",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "migrateRecursively",
          "normalized": "(EntityDef-\u003ea SingleMigration)-\u003e(DbType-\u003ea SingleMigration)-\u003eb-\u003eStateT NamedMigrations a()",
          "package": "groundhog",
          "partial": "Recursively",
          "signature": "(EntityDef-\u003em SingleMigration)-\u003e(DbType-\u003em SingleMigration)-\u003ev-\u003eStateT NamedMigrations m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migrateRecursively"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "mkColumns",
          "package": "groundhog",
          "signature": "(String, DbType) -\u003e [Column] -\u003e [Column]",
          "source": "src/Database-Groundhog-Generic-Migration.html#mkColumns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "mkColumns",
          "normalized": "(String,DbType)-\u003e[Column]-\u003e[Column]",
          "package": "groundhog",
          "partial": "Columns",
          "signature": "(String,DbType)-\u003e[Column]-\u003e[Column]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:mkColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "primaryKeyTypeName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "primaryKeyTypeName",
          "package": "groundhog",
          "partial": "Key Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:primaryKeyTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "readReferenceAction",
          "package": "groundhog",
          "signature": "String -\u003e Maybe ReferenceActionType",
          "source": "src/Database-Groundhog-Generic-Migration.html#readReferenceAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "readReferenceAction",
          "normalized": "String-\u003eMaybe ReferenceActionType",
          "package": "groundhog",
          "partial": "Reference Action",
          "signature": "String-\u003eMaybe ReferenceActionType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:readReferenceAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referenceOnDelete",
          "package": "groundhog",
          "signature": "Maybe ReferenceActionType",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referenceOnDelete",
          "package": "groundhog",
          "partial": "On Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referenceOnDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referenceOnUpdate",
          "package": "groundhog",
          "signature": "Maybe ReferenceActionType",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referenceOnUpdate",
          "package": "groundhog",
          "partial": "On Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referenceOnUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echild column, parent column\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referencedColumns",
          "package": "groundhog",
          "signature": "[(String, String)]",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "function"
        },
        "index": {
          "description": "child column parent column",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referencedColumns",
          "normalized": "[(String,String)]",
          "package": "groundhog",
          "partial": "Columns",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referencedColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referencedTableName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referencedTableName",
          "package": "groundhog",
          "partial": "Table Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referencedTableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referencedTableSchema",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic-Migration.html#Reference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "referencedTableSchema",
          "package": "groundhog",
          "partial": "Table Schema",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referencedTableSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "showAlterDb",
          "package": "groundhog",
          "signature": "AlterDB -\u003e SingleMigration",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "showAlterDb",
          "normalized": "AlterDB-\u003eSingleMigration",
          "package": "groundhog",
          "partial": "Alter Db",
          "signature": "AlterDB-\u003eSingleMigration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:showAlterDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "showColumn",
          "package": "groundhog",
          "signature": "Column -\u003e String",
          "source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "showColumn",
          "normalized": "Column-\u003eString",
          "package": "groundhog",
          "partial": "Column",
          "signature": "Column-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:showColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "showReferenceAction",
          "package": "groundhog",
          "signature": "ReferenceActionType -\u003e String",
          "source": "src/Database-Groundhog-Generic-Migration.html#showReferenceAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "showReferenceAction",
          "normalized": "ReferenceActionType-\u003eString",
          "package": "groundhog",
          "partial": "Reference Action",
          "signature": "ReferenceActionType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:showReferenceAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "tableColumns",
          "package": "groundhog",
          "signature": "[Column]",
          "source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "tableColumns",
          "normalized": "[Column]",
          "package": "groundhog",
          "partial": "Columns",
          "signature": "[Column]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:tableColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstraint name and reference\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "tableReferences",
          "package": "groundhog",
          "signature": "[(Maybe String, Reference)]",
          "source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
          "type": "function"
        },
        "index": {
          "description": "constraint name and reference",
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "tableReferences",
          "normalized": "[(Maybe String,Reference)]",
          "package": "groundhog",
          "partial": "References",
          "signature": "[(Maybe String,Reference)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:tableReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "tableUniques",
          "package": "groundhog",
          "signature": "[UniqueDef']",
          "source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "tableUniques",
          "normalized": "[UniqueDef']",
          "package": "groundhog",
          "partial": "Uniques",
          "signature": "[UniqueDef']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:tableUniques"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "uniqueDefColumns",
          "package": "groundhog",
          "signature": "[String]",
          "source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "uniqueDefColumns",
          "normalized": "[String]",
          "package": "groundhog",
          "partial": "Def Columns",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:uniqueDefColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "uniqueDefName",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "uniqueDefName",
          "package": "groundhog",
          "partial": "Def Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:uniqueDefName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Migration",
          "name": "uniqueDefType",
          "package": "groundhog",
          "signature": "UniqueType",
          "source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Migration",
          "module": "Database.Groundhog.Generic.Migration",
          "name": "uniqueDefType",
          "package": "groundhog",
          "partial": "Def Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:uniqueDefType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module contains generic versions of PersistBackend functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "PersistBackendHelpers",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module contains generic versions of PersistBackend functions",
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "PersistBackendHelpers",
          "package": "groundhog",
          "partial": "Persist Backend Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "count",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e Cond db r -\u003e m Int",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "count",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003e(Cond e f-\u003eMaybe(RenderS e f))-\u003eCond e f-\u003ec Int",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003eCond db r-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "countAll",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e v -\u003e m Int",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#countAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "countAll",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003ee-\u003ec Int",
          "package": "groundhog",
          "partial": "All",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003ev-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:countAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "delete",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e Cond db r -\u003e m ()",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "delete",
          "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003e(Cond b c-\u003eMaybe(RenderS b c))-\u003eCond b c-\u003ea()",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003eCond db r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "deleteAll",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e v -\u003e m ()",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#deleteAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "deleteAll",
          "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003eb-\u003ea()",
          "package": "groundhog",
          "partial": "All",
          "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003ev-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "deleteBy",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e Key v BackendSpecific -\u003e m ()",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#deleteBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "deleteBy",
          "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003eKey b BackendSpecific-\u003ea()",
          "package": "groundhog",
          "partial": "By",
          "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003eKey v BackendSpecific-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "get",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Key v BackendSpecific -\u003e m (Maybe v)",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "get",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eKey e BackendSpecific-\u003ec(Maybe e)",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eKey v BackendSpecific-\u003em(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "getBy",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8)-\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a)-\u003e Key v (Unique u)-\u003e m (Maybe v)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "getBy",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eKey e(Unique f)-\u003ec(Maybe e)",
          "package": "groundhog",
          "partial": "By",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eKey v(Unique u)-\u003em(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:getBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "insertBy",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Bool -\u003e u (UniqueMarker v) -\u003e v -\u003e m (Either (AutoKey v) (AutoKey v))",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "insertBy",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eBool-\u003ee(UniqueMarker f)-\u003ef-\u003ec(Either(AutoKey f)(AutoKey f))",
          "package": "groundhog",
          "partial": "By",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eBool-\u003eu(UniqueMarker v)-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "insertByAll",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8)-\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a)-\u003e Bool-\u003e v-\u003e m (Either (AutoKey v) (AutoKey v))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "insertByAll",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eBool-\u003ee-\u003ec(Either(AutoKey e)(AutoKey e))",
          "package": "groundhog",
          "partial": "By All",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eBool-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:insertByAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "project",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Utf8 -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e p -\u003e opts -\u003e m [a']",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#project",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "project",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eUtf-\u003e(Cond e f-\u003eMaybe(RenderS e f))-\u003eg-\u003eh-\u003ec[i]",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eUtf-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003ep-\u003eopts-\u003em[a']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "replace",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e (Bool -\u003e Utf8 -\u003e ConstructorDef -\u003e [PersistValue] -\u003e RenderS db r) -\u003e Key v BackendSpecific -\u003e v -\u003e m ()",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#replace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "replace",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003e(Utf-\u003e[PersistValue]-\u003ec())-\u003e(Bool-\u003eUtf-\u003eConstructorDef-\u003e[PersistValue]-\u003eRenderS e f)-\u003eKey g BackendSpecific-\u003eg-\u003ec()",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003e(Bool-\u003eUtf-\u003eConstructorDef-\u003e[PersistValue]-\u003eRenderS db r)-\u003eKey v BackendSpecific-\u003ev-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "replaceBy",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8)-\u003e (Utf8 -\u003e [PersistValue] -\u003e m ())-\u003e u (UniqueMarker v)-\u003e v-\u003e m ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "replaceBy",
          "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003eb(UniqueMarker c)-\u003ec-\u003ea()",
          "package": "groundhog",
          "partial": "By",
          "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003eu(UniqueMarker v)-\u003ev-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:replaceBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "select",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Utf8 -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e opts -\u003e m [v]",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "select",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eUtf-\u003e(Cond e f-\u003eMaybe(RenderS e f))-\u003eg-\u003ec[h]",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eUtf-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003eopts-\u003em[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "selectAll",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e m [(AutoKey v, v)]",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#selectAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "selectAll",
          "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003ec[(AutoKey e,e)]",
          "package": "groundhog",
          "partial": "All",
          "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003em[(AutoKey v,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:selectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "update",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e [Update db r] -\u003e Cond db r -\u003e m ()",
          "source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
          "module": "Database.Groundhog.Generic.PersistBackendHelpers",
          "name": "update",
          "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003e(Cond b c-\u003eMaybe(RenderS b c))-\u003e[Update b c]-\u003eCond b c-\u003ea()",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003e[Update db r]-\u003eCond db r-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module has common SQL functions and operators which are supported in the most SQL databases\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "Functions",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "This module has common SQL functions and operators which are supported in the most SQL databases",
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "Functions",
          "package": "groundhog",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class distinguishes databases which support SQL-specific expressions. It contains ad hoc members for features whose syntax differs across the databases.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "SqlDb",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql.html#SqlDb",
          "type": "class"
        },
        "index": {
          "description": "This class distinguishes databases which support SQL-specific expressions It contains ad hoc members for features whose syntax differs across the databases",
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "SqlDb",
          "package": "groundhog",
          "partial": "Sql Db",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#t:SqlDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "append",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Expr db r String",
          "source": "src/Database-Groundhog-Generic-Sql.html#append",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "append",
          "normalized": "a-\u003eb-\u003eExpr c d String",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eExpr db r String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "in_",
          "package": "groundhog",
          "signature": "a -\u003e [b] -\u003e Cond db r",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#in_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "in_",
          "normalized": "a-\u003e[b]-\u003eCond c d",
          "package": "groundhog",
          "signature": "a-\u003e[b]-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:in_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "like",
          "package": "groundhog",
          "signature": "a -\u003e String -\u003e Cond db r",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#like",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "like",
          "normalized": "a-\u003eString-\u003eCond b c",
          "package": "groundhog",
          "signature": "a-\u003eString-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:like"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "lower",
          "package": "groundhog",
          "signature": "a -\u003e Expr db r String",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#lower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "lower",
          "normalized": "a-\u003eExpr b c String",
          "package": "groundhog",
          "signature": "a-\u003eExpr db r String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "notIn_",
          "package": "groundhog",
          "signature": "a -\u003e [b] -\u003e Cond db r",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#notIn_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "notIn_",
          "normalized": "a-\u003e[b]-\u003eCond c d",
          "package": "groundhog",
          "partial": "In",
          "signature": "a-\u003e[b]-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:notIn_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "notLike",
          "package": "groundhog",
          "signature": "a -\u003e String -\u003e Cond db r",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#notLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "notLike",
          "normalized": "a-\u003eString-\u003eCond b c",
          "package": "groundhog",
          "partial": "Like",
          "signature": "a-\u003eString-\u003eCond db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:notLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert field to an arithmetic value. It is kept for compatibility with older Groundhog versions and can be replaced with liftExpr.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "toArith",
          "package": "groundhog",
          "signature": "f -\u003e Expr db r a'",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#toArith",
          "type": "function"
        },
        "index": {
          "description": "Convert field to an arithmetic value It is kept for compatibility with older Groundhog versions and can be replaced with liftExpr",
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "toArith",
          "normalized": "a-\u003eExpr b c d",
          "package": "groundhog",
          "partial": "Arith",
          "signature": "f-\u003eExpr db r a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:toArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "upper",
          "package": "groundhog",
          "signature": "a -\u003e Expr db r String",
          "source": "src/Database-Groundhog-Generic-Sql-Functions.html#upper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql Functions",
          "module": "Database.Groundhog.Generic.Sql.Functions",
          "name": "upper",
          "normalized": "a-\u003eExpr b c String",
          "package": "groundhog",
          "signature": "a-\u003eExpr db r String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions which are used only for backends creation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Sql",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the functions which are used only for backends creation",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Sql",
          "package": "groundhog",
          "partial": "Sql",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "RenderS",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "RenderS",
          "package": "groundhog",
          "partial": "Render",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:RenderS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape function, priority of the outer operator. The result is a list for the embedded data which may expand to several RenderS.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Snippet",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql.html#Snippet",
          "type": "newtype"
        },
        "index": {
          "description": "Escape function priority of the outer operator The result is list for the embedded data which may expand to several RenderS",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Snippet",
          "package": "groundhog",
          "partial": "Snippet",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:Snippet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class distinguishes databases which support SQL-specific expressions. It contains ad hoc members for features whose syntax differs across the databases.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "SqlDb",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql.html#SqlDb",
          "type": "class"
        },
        "index": {
          "description": "This class distinguishes databases which support SQL-specific expressions It contains ad hoc members for features whose syntax differs across the databases",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "SqlDb",
          "package": "groundhog",
          "partial": "Sql Db",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:SqlDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "StringLike",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic-Sql.html#StringLike",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "StringLike",
          "package": "groundhog",
          "partial": "String Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:StringLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype for incremental building SQL queries\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Utf8",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Utf8",
          "type": "newtype"
        },
        "index": {
          "description": "Datatype for incremental building SQL queries",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Utf8",
          "package": "groundhog",
          "partial": "Utf",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:Utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "(\u003c\u003e)",
          "package": "groundhog",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "groundhog",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "RenderS",
          "package": "groundhog",
          "signature": "RenderS",
          "source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "RenderS",
          "package": "groundhog",
          "partial": "Render",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:RenderS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Snippet",
          "package": "groundhog",
          "signature": "Snippet ((Utf8 -\u003e Utf8) -\u003e Int -\u003e [RenderS db r])",
          "source": "src/Database-Groundhog-Generic-Sql.html#Snippet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "Snippet",
          "normalized": "Snippet((Utf-\u003eUtf)-\u003eInt-\u003e[RenderS a b])",
          "package": "groundhog",
          "partial": "Snippet",
          "signature": "Snippet((Utf-\u003eUtf)-\u003eInt-\u003e[RenderS db r])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:Snippet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "append",
          "package": "groundhog",
          "signature": "a -\u003e b -\u003e Expr db r String",
          "source": "src/Database-Groundhog-Generic-Sql.html#append",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "append",
          "normalized": "a-\u003eb-\u003eExpr c d String",
          "package": "groundhog",
          "signature": "a-\u003eb-\u003eExpr db r String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "commasJoin",
          "package": "groundhog",
          "signature": "[s] -\u003e s",
          "source": "src/Database-Groundhog-Generic-Sql.html#commasJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "commasJoin",
          "normalized": "[a]-\u003ea",
          "package": "groundhog",
          "partial": "Join",
          "signature": "[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:commasJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "defaultShowPrim",
          "package": "groundhog",
          "signature": "PersistValue -\u003e String",
          "source": "src/Database-Groundhog-Generic-Sql.html#defaultShowPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "defaultShowPrim",
          "normalized": "PersistValue-\u003eString",
          "package": "groundhog",
          "partial": "Show Prim",
          "signature": "PersistValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:defaultShowPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "flatten",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e (String, DbType) -\u003e [Utf8] -\u003e [Utf8]",
          "source": "src/Database-Groundhog-Generic-Sql.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "flatten",
          "normalized": "(Utf-\u003eUtf)-\u003e(String,DbType)-\u003e[Utf]-\u003e[Utf]",
          "package": "groundhog",
          "signature": "(Utf-\u003eUtf)-\u003e(String,DbType)-\u003e[Utf]-\u003e[Utf]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "fromChar",
          "package": "groundhog",
          "signature": "Char -\u003e a",
          "source": "src/Database-Groundhog-Generic-Sql.html#fromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "fromChar",
          "normalized": "Char-\u003ea",
          "package": "groundhog",
          "partial": "Char",
          "signature": "Char-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:fromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "fromString",
          "package": "groundhog",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "groundhog",
          "partial": "String",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "function",
          "package": "groundhog",
          "signature": "String -\u003e [UntypedExpr db r] -\u003e Snippet db r",
          "source": "src/Database-Groundhog-Generic-Sql.html#function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "function",
          "normalized": "String-\u003e[UntypedExpr a b]-\u003eSnippet a b",
          "package": "groundhog",
          "signature": "String-\u003e[UntypedExpr db r]-\u003eSnippet db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "getQuery",
          "package": "groundhog",
          "signature": "Utf8",
          "source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "getQuery",
          "package": "groundhog",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:getQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "getValues",
          "package": "groundhog",
          "signature": "[PersistValue] -\u003e [PersistValue]",
          "source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "getValues",
          "normalized": "[PersistValue]-\u003e[PersistValue]",
          "package": "groundhog",
          "partial": "Values",
          "signature": "[PersistValue]-\u003e[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:getValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "intercalateS",
          "package": "groundhog",
          "signature": "s -\u003e [s] -\u003e s",
          "source": "src/Database-Groundhog-Generic-Sql.html#intercalateS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "intercalateS",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "groundhog",
          "signature": "s-\u003e[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:intercalateS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "liftExpr",
          "package": "groundhog",
          "signature": "a -\u003e Expr db r b",
          "source": "src/Database-Groundhog-Generic-Sql.html#liftExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "liftExpr",
          "normalized": "a-\u003eExpr b c d",
          "package": "groundhog",
          "partial": "Expr",
          "signature": "a-\u003eExpr db r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:liftExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns escaped main table name optionally qualified with schema\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "mainTableName",
          "package": "groundhog",
          "signature": "(s -\u003e s) -\u003e EntityDef -\u003e s",
          "source": "src/Database-Groundhog-Generic-Sql.html#mainTableName",
          "type": "function"
        },
        "index": {
          "description": "Returns escaped main table name optionally qualified with schema",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "mainTableName",
          "normalized": "(a-\u003ea)-\u003eEntityDef-\u003ea",
          "package": "groundhog",
          "partial": "Table Name",
          "signature": "(s-\u003es)-\u003eEntityDef-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:mainTableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "operator",
          "package": "groundhog",
          "signature": "Int -\u003e String -\u003e a -\u003e b -\u003e Snippet db r",
          "source": "src/Database-Groundhog-Generic-Sql.html#operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "operator",
          "normalized": "Int-\u003eString-\u003ea-\u003eb-\u003eSnippet c d",
          "package": "groundhog",
          "signature": "Int-\u003eString-\u003ea-\u003eb-\u003eSnippet db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "parens",
          "package": "groundhog",
          "signature": "Int -\u003e Int -\u003e RenderS db r -\u003e RenderS db r",
          "source": "src/Database-Groundhog-Generic-Sql.html#parens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "parens",
          "normalized": "Int-\u003eInt-\u003eRenderS a b-\u003eRenderS a b",
          "package": "groundhog",
          "signature": "Int-\u003eInt-\u003eRenderS db r-\u003eRenderS db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderChain",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e FieldChain -\u003e [Utf8] -\u003e [Utf8]",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderChain",
          "normalized": "(Utf-\u003eUtf)-\u003eFieldChain-\u003e[Utf]-\u003e[Utf]",
          "package": "groundhog",
          "partial": "Chain",
          "signature": "(Utf-\u003eUtf)-\u003eFieldChain-\u003e[Utf]-\u003e[Utf]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders conditions for SQL backend. Returns Nothing if the fields don't have any columns.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderCond",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8)-\u003e (Utf8 -\u003e Utf8 -\u003e Utf8)-\u003e (Utf8 -\u003e Utf8 -\u003e Utf8)-\u003e Cond db r-\u003e Maybe (RenderS db r)",
          "type": "function"
        },
        "index": {
          "description": "Renders conditions for SQL backend Returns Nothing if the fields don have any columns",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderCond",
          "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003eCond a b-\u003eMaybe(RenderS a b)",
          "package": "groundhog",
          "partial": "Cond",
          "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003eCond db r-\u003eMaybe(RenderS db r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderExpr",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e UntypedExpr db r -\u003e RenderS db r",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderExpr",
          "normalized": "(Utf-\u003eUtf)-\u003eUntypedExpr a b-\u003eRenderS a b",
          "package": "groundhog",
          "partial": "Expr",
          "signature": "(Utf-\u003eUtf)-\u003eUntypedExpr db r-\u003eRenderS db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderExprExtended",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e Int -\u003e UntypedExpr db r -\u003e [RenderS db r]",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderExprExtended",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderExprExtended",
          "normalized": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr a b-\u003e[RenderS a b]",
          "package": "groundhog",
          "partial": "Expr Extended",
          "signature": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr db r-\u003e[RenderS db r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderExprExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderExprPriority",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e Int -\u003e UntypedExpr db r -\u003e RenderS db r",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderExprPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderExprPriority",
          "normalized": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr a b-\u003eRenderS a b",
          "package": "groundhog",
          "partial": "Expr Priority",
          "signature": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr db r-\u003eRenderS db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderExprPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderFields",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e [(String, DbType)] -\u003e Utf8",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderFields",
          "normalized": "(Utf-\u003eUtf)-\u003e[(String,DbType)]-\u003eUtf",
          "package": "groundhog",
          "partial": "Fields",
          "signature": "(Utf-\u003eUtf)-\u003e[(String,DbType)]-\u003eUtf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderOrders",
          "package": "groundhog",
          "signature": "forall db r.  (Utf8 -\u003e Utf8) -\u003e [Order db r] -\u003e Utf8",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderOrders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderOrders",
          "normalized": "a b c(Utf-\u003eUtf)-\u003e[Order b d]-\u003eUtf",
          "package": "groundhog",
          "partial": "Orders",
          "signature": "forall db r.(Utf-\u003eUtf)-\u003e[Order db r]-\u003eUtf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderPersistValue",
          "package": "groundhog",
          "signature": "PersistValue -\u003e RenderS db r",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderPersistValue",
          "normalized": "PersistValue-\u003eRenderS a b",
          "package": "groundhog",
          "partial": "Persist Value",
          "signature": "PersistValue-\u003eRenderS db r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderUpdates",
          "package": "groundhog",
          "signature": "(Utf8 -\u003e Utf8) -\u003e [Update db r] -\u003e Maybe (RenderS db r)",
          "source": "src/Database-Groundhog-Generic-Sql.html#renderUpdates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "renderUpdates",
          "normalized": "(Utf-\u003eUtf)-\u003e[Update a b]-\u003eMaybe(RenderS a b)",
          "package": "groundhog",
          "partial": "Updates",
          "signature": "(Utf-\u003eUtf)-\u003e[Update db r]-\u003eMaybe(RenderS db r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderUpdates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns escaped table name optionally qualified with schema\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "tableName",
          "package": "groundhog",
          "signature": "(s -\u003e s) -\u003e EntityDef -\u003e ConstructorDef -\u003e s",
          "source": "src/Database-Groundhog-Generic-Sql.html#tableName",
          "type": "function"
        },
        "index": {
          "description": "Returns escaped table name optionally qualified with schema",
          "hierarchy": "Database Groundhog Generic Sql",
          "module": "Database.Groundhog.Generic.Sql",
          "name": "tableName",
          "normalized": "(a-\u003ea)-\u003eEntityDef-\u003eConstructorDef-\u003ea",
          "package": "groundhog",
          "partial": "Name",
          "signature": "(s-\u003es)-\u003eEntityDef-\u003eConstructorDef-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:tableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module is intended for use by the backend creators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "Generic",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module is intended for use by the backend creators",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "Generic",
          "package": "groundhog",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class helps to shorten the type signatures of user monadic code.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "HasConn",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic.html#HasConn",
          "type": "class"
        },
        "index": {
          "description": "This class helps to shorten the type signatures of user monadic code",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "HasConn",
          "package": "groundhog",
          "partial": "Has Conn",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#t:HasConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "PSFieldDef",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "PSFieldDef",
          "package": "groundhog",
          "partial": "PSField Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#t:PSFieldDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "PSFieldDef",
          "package": "groundhog",
          "signature": "PSFieldDef",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "PSFieldDef",
          "package": "groundhog",
          "partial": "PSField Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:PSFieldDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "applyDbTypeSettings",
          "package": "groundhog",
          "signature": "PSFieldDef -\u003e DbType -\u003e DbType",
          "source": "src/Database-Groundhog-Generic.html#applyDbTypeSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "applyDbTypeSettings",
          "normalized": "PSFieldDef-\u003eDbType-\u003eDbType",
          "package": "groundhog",
          "partial": "Db Type Settings",
          "signature": "PSFieldDef-\u003eDbType-\u003eDbType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:applyDbTypeSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "bracket",
          "package": "groundhog",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "groundhog",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the migrations but not execute them. Fails when an unsafe migration occurs.\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "createMigration",
          "package": "groundhog",
          "signature": "Migration m -\u003e m NamedMigrations",
          "source": "src/Database-Groundhog-Generic.html#createMigration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:createMigration\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:createMigration\"]"
        },
        "index": {
          "description": "Produce the migrations but not execute them Fails when an unsafe migration occurs",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "createMigration",
          "normalized": "Migration a-\u003ea NamedMigrations",
          "package": "groundhog",
          "partial": "Migration",
          "signature": "Migration m-\u003em NamedMigrations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:createMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the queries to stdout\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "defaultMigrationLogger",
          "package": "groundhog",
          "signature": "String -\u003e IO ()",
          "source": "src/Database-Groundhog-Generic.html#defaultMigrationLogger",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:defaultMigrationLogger\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:defaultMigrationLogger\"]"
        },
        "index": {
          "description": "Prints the queries to stdout",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "defaultMigrationLogger",
          "normalized": "String-\u003eIO()",
          "package": "groundhog",
          "partial": "Migration Logger",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:defaultMigrationLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deleteBy instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "deleteByKey",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e m ()",
          "source": "src/Database-Groundhog-Generic.html#deleteByKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:deleteByKey\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:deleteByKey\"]"
        },
        "index": {
          "description": "Deprecated Use deleteBy instead",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "deleteByKey",
          "normalized": "Key a BackendSpecific-\u003eb()",
          "package": "groundhog",
          "partial": "By Key",
          "signature": "Key v BackendSpecific-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:deleteByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the migrations and log them. \n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "executeMigration",
          "package": "groundhog",
          "signature": "(String -\u003e IO ()) -\u003e NamedMigrations -\u003e m ()",
          "source": "src/Database-Groundhog-Generic.html#executeMigration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:executeMigration\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:executeMigration\"]"
        },
        "index": {
          "description": "Execute the migrations and log them",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "executeMigration",
          "normalized": "(String-\u003eIO())-\u003eNamedMigrations-\u003ea()",
          "package": "groundhog",
          "partial": "Migration",
          "signature": "(String-\u003eIO())-\u003eNamedMigrations-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:executeMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute migrations and log them. Executes the unsafe migrations without warnings\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "executeMigrationUnsafe",
          "package": "groundhog",
          "signature": "(String -\u003e IO ()) -\u003e NamedMigrations -\u003e m ()",
          "source": "src/Database-Groundhog-Generic.html#executeMigrationUnsafe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:executeMigrationUnsafe\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:executeMigrationUnsafe\"]"
        },
        "index": {
          "description": "Execute migrations and log them Executes the unsafe migrations without warnings",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "executeMigrationUnsafe",
          "normalized": "(String-\u003eIO())-\u003eNamedMigrations-\u003ea()",
          "package": "groundhog",
          "partial": "Migration Unsafe",
          "signature": "(String-\u003eIO())-\u003eNamedMigrations-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:executeMigrationUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "failMessage",
          "package": "groundhog",
          "signature": "a -\u003e [PersistValue] -\u003e String",
          "source": "src/Database-Groundhog-Generic.html#failMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "failMessage",
          "normalized": "a-\u003e[PersistValue]-\u003eString",
          "package": "groundhog",
          "partial": "Message",
          "signature": "a-\u003e[PersistValue]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:failMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "finally",
          "package": "groundhog",
          "signature": "m a-\u003e m b-\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "groundhog",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "findOne",
          "package": "groundhog",
          "signature": "String -\u003e (a -\u003e c) -\u003e (b -\u003e c) -\u003e a -\u003e [b] -\u003e b",
          "source": "src/Database-Groundhog-Generic.html#findOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "findOne",
          "normalized": "String-\u003e(a-\u003eb)-\u003e(c-\u003eb)-\u003ea-\u003e[c]-\u003ec",
          "package": "groundhog",
          "partial": "One",
          "signature": "String-\u003e(a-\u003ec)-\u003e(b-\u003ec)-\u003ea-\u003e[b]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:findOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "fromPersistValuesUnique",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e [PersistValue] -\u003e m (v, [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#fromPersistValuesUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "fromPersistValuesUnique",
          "normalized": "a(UniqueMarker b)-\u003e[PersistValue]-\u003ec(b,[PersistValue])",
          "package": "groundhog",
          "partial": "Persist Values Unique",
          "signature": "u(UniqueMarker v)-\u003e[PersistValue]-\u003em(v,[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:fromPersistValuesUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "fromSinglePersistValueAutoKey",
          "package": "groundhog",
          "signature": "PersistValue -\u003e m v",
          "source": "src/Database-Groundhog-Generic.html#fromSinglePersistValueAutoKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "fromSinglePersistValueAutoKey",
          "normalized": "PersistValue-\u003ea b",
          "package": "groundhog",
          "partial": "Single Persist Value Auto Key",
          "signature": "PersistValue-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:fromSinglePersistValueAutoKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "fromSinglePersistValueUnique",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e PersistValue -\u003e m v",
          "source": "src/Database-Groundhog-Generic.html#fromSinglePersistValueUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "fromSinglePersistValueUnique",
          "normalized": "a(UniqueMarker b)-\u003ePersistValue-\u003ec b",
          "package": "groundhog",
          "partial": "Single Persist Value Unique",
          "signature": "u(UniqueMarker v)-\u003ePersistValue-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:fromSinglePersistValueUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns either a list of errors in migration or a list of queries\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "getQueries",
          "package": "groundhog",
          "signature": "Bool-\u003e SingleMigration-\u003e Either [String] [String]",
          "type": "function"
        },
        "index": {
          "description": "Returns either list of errors in migration or list of queries",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "getQueries",
          "normalized": "Bool-\u003eSingleMigration-\u003eEither[String][String]",
          "package": "groundhog",
          "partial": "Queries",
          "signature": "Bool-\u003eSingleMigration-\u003eEither[String][String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:getQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "haveSameElems",
          "package": "groundhog",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e [a] -\u003e [b] -\u003e Bool",
          "source": "src/Database-Groundhog-Generic.html#haveSameElems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "haveSameElems",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eBool",
          "package": "groundhog",
          "partial": "Same Elems",
          "signature": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:haveSameElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "isSimple",
          "package": "groundhog",
          "signature": "[ConstructorDef] -\u003e Bool",
          "source": "src/Database-Groundhog-Generic.html#isSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "isSimple",
          "normalized": "[ConstructorDef]-\u003eBool",
          "package": "groundhog",
          "partial": "Simple",
          "signature": "[ConstructorDef]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:isSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "mapAllRows",
          "package": "groundhog",
          "signature": "([PersistValue] -\u003e m a) -\u003e RowPopper m -\u003e m [a]",
          "source": "src/Database-Groundhog-Generic.html#mapAllRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "mapAllRows",
          "normalized": "([PersistValue]-\u003ea b)-\u003eRowPopper a-\u003ea[b]",
          "package": "groundhog",
          "partial": "All Rows",
          "signature": "([PersistValue]-\u003em a)-\u003eRowPopper m-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:mapAllRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only old elements, only new elements, and matched pairs (old, new).\n The new ones exist only in datatype, the old are present only in DB, match is typically by name (the properties of the matched elements may differ).\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "matchElements",
          "package": "groundhog",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e [a] -\u003e [b] -\u003e ([a], [b], [(a, b)])",
          "source": "src/Database-Groundhog-Generic.html#matchElements",
          "type": "function"
        },
        "index": {
          "description": "Returns only old elements only new elements and matched pairs old new The new ones exist only in datatype the old are present only in DB match is typically by name the properties of the matched elements may differ",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "matchElements",
          "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003e([a],[b],[(a,b)])",
          "package": "groundhog",
          "partial": "Elements",
          "signature": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003e([a],[b],[(a,b)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:matchElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins the migrations. The result is either all error messages or all queries\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "mergeMigrations",
          "package": "groundhog",
          "signature": "[SingleMigration] -\u003e SingleMigration",
          "source": "src/Database-Groundhog-Generic.html#mergeMigrations",
          "type": "function"
        },
        "index": {
          "description": "Joins the migrations The result is either all error messages or all queries",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "mergeMigrations",
          "normalized": "[SingleMigration]-\u003eSingleMigration",
          "package": "groundhog",
          "partial": "Migrations",
          "signature": "[SingleMigration]-\u003eSingleMigration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:mergeMigrations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "onException",
          "package": "groundhog",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Database-Groundhog-Generic.html#onException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "onException",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "groundhog",
          "partial": "Exception",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "phantomDb",
          "package": "groundhog",
          "signature": "m (Proxy (PhantomDb m))",
          "source": "src/Database-Groundhog-Generic.html#phantomDb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "phantomDb",
          "package": "groundhog",
          "partial": "Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:phantomDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "primFromPersistValue",
          "package": "groundhog",
          "signature": "[PersistValue] -\u003e m (a, [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#primFromPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "primFromPersistValue",
          "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
          "package": "groundhog",
          "partial": "From Persist Value",
          "signature": "[PersistValue]-\u003em(a,[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primFromPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "primFromPurePersistValues",
          "package": "groundhog",
          "signature": "Proxy db -\u003e [PersistValue] -\u003e (a, [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#primFromPurePersistValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "primFromPurePersistValues",
          "normalized": "Proxy a-\u003e[PersistValue]-\u003e(b,[PersistValue])",
          "package": "groundhog",
          "partial": "From Pure Persist Values",
          "signature": "Proxy db-\u003e[PersistValue]-\u003e(a,[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primFromPurePersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "primFromSinglePersistValue",
          "package": "groundhog",
          "signature": "PersistValue -\u003e m a",
          "source": "src/Database-Groundhog-Generic.html#primFromSinglePersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "primFromSinglePersistValue",
          "normalized": "PersistValue-\u003ea b",
          "package": "groundhog",
          "partial": "From Single Persist Value",
          "signature": "PersistValue-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primFromSinglePersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "primToPersistValue",
          "package": "groundhog",
          "signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#primToPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "primToPersistValue",
          "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
          "package": "groundhog",
          "partial": "To Persist Value",
          "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primToPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "primToPurePersistValues",
          "package": "groundhog",
          "signature": "Proxy db -\u003e a -\u003e [PersistValue] -\u003e [PersistValue]",
          "source": "src/Database-Groundhog-Generic.html#primToPurePersistValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "primToPurePersistValues",
          "normalized": "Proxy a-\u003eb-\u003e[PersistValue]-\u003e[PersistValue]",
          "package": "groundhog",
          "partial": "To Pure Persist Values",
          "signature": "Proxy db-\u003ea-\u003e[PersistValue]-\u003e[PersistValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primToPurePersistValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "primToSinglePersistValue",
          "package": "groundhog",
          "signature": "a -\u003e m PersistValue",
          "source": "src/Database-Groundhog-Generic.html#primToSinglePersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "primToSinglePersistValue",
          "normalized": "a-\u003eb PersistValue",
          "package": "groundhog",
          "partial": "To Single Persist Value",
          "signature": "a-\u003em PersistValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primToSinglePersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the migrations\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "printMigration",
          "package": "groundhog",
          "signature": "NamedMigrations -\u003e m ()",
          "source": "src/Database-Groundhog-Generic.html#printMigration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:printMigration\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:printMigration\"]"
        },
        "index": {
          "description": "Pretty print the migrations",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "printMigration",
          "normalized": "NamedMigrations-\u003ea()",
          "package": "groundhog",
          "partial": "Migration",
          "signature": "NamedMigrations-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:printMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psDbFieldName",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psDbFieldName",
          "package": "groundhog",
          "partial": "Db Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psDbFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psDbTypeName",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psDbTypeName",
          "package": "groundhog",
          "partial": "Db Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psDbTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psDefaultValue",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psDefaultValue",
          "package": "groundhog",
          "partial": "Default Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psEmbeddedDef",
          "package": "groundhog",
          "signature": "Maybe [PSFieldDef]",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psEmbeddedDef",
          "normalized": "Maybe[PSFieldDef]",
          "package": "groundhog",
          "partial": "Embedded Def",
          "signature": "Maybe[PSFieldDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psEmbeddedDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psExprName",
          "package": "groundhog",
          "signature": "Maybe String",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psExprName",
          "package": "groundhog",
          "partial": "Expr Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psExprName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psFieldName",
          "package": "groundhog",
          "signature": "String",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psFieldName",
          "package": "groundhog",
          "partial": "Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "psReferenceParent",
          "package": "groundhog",
          "signature": "Maybe (Maybe (Maybe String, String, [String]), Maybe ReferenceActionType, Maybe ReferenceActionType)",
          "source": "src/Database-Groundhog-Generic.html#PSFieldDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "psReferenceParent",
          "normalized": "Maybe(Maybe(Maybe String,String,[String]),Maybe ReferenceActionType,Maybe ReferenceActionType)",
          "package": "groundhog",
          "partial": "Reference Parent",
          "signature": "Maybe(Maybe(Maybe String,String,[String]),Maybe ReferenceActionType,Maybe ReferenceActionType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psReferenceParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "pureFromPersistValue",
          "package": "groundhog",
          "signature": "[PersistValue] -\u003e m (a, [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#pureFromPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "pureFromPersistValue",
          "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
          "package": "groundhog",
          "partial": "From Persist Value",
          "signature": "[PersistValue]-\u003em(a,[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:pureFromPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "pureToPersistValue",
          "package": "groundhog",
          "signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#pureToPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "pureToPersistValue",
          "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
          "package": "groundhog",
          "partial": "To Persist Value",
          "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:pureToPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "replaceOne",
          "package": "groundhog",
          "signature": "String -\u003e (a -\u003e c) -\u003e (b -\u003e c) -\u003e (a -\u003e b -\u003e b) -\u003e a -\u003e [b] -\u003e [b]",
          "source": "src/Database-Groundhog-Generic.html#replaceOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "replaceOne",
          "normalized": "String-\u003e(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003ec)-\u003ea-\u003e[c]-\u003e[c]",
          "package": "groundhog",
          "partial": "One",
          "signature": "String-\u003e(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003eb)-\u003ea-\u003e[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:replaceOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt helps to run database operations within your application monad.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "runDb",
          "package": "groundhog",
          "signature": "DbPersist conn m a -\u003e m a",
          "source": "src/Database-Groundhog-Generic.html#runDb",
          "type": "function"
        },
        "index": {
          "description": "It helps to run database operations within your application monad",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "runDb",
          "normalized": "DbPersist a b c-\u003eb c",
          "package": "groundhog",
          "partial": "Db",
          "signature": "DbPersist conn m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns action within connection. It can handle a simple connection, a pool of them, etc.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "runDbConn",
          "package": "groundhog",
          "signature": "DbPersist conn (NoLoggingT m) a -\u003e cm -\u003e m a",
          "source": "src/Database-Groundhog-Generic.html#runDbConn",
          "type": "function"
        },
        "index": {
          "description": "Runs action within connection It can handle simple connection pool of them etc",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "runDbConn",
          "normalized": "DbPersist a(NoLoggingT b)c-\u003ed-\u003eb c",
          "package": "groundhog",
          "partial": "Db Conn",
          "signature": "DbPersist conn(NoLoggingT m)a-\u003ecm-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runDbConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is similar to \u003ccode\u003e\u003ca\u003erunDbConn\u003c/a\u003e\u003c/code\u003e but runs action without transaction. It can be useful if you use Groundhog within IO monad or in other cases when you cannot put \u003ccode\u003e\u003ca\u003ePersistBackend\u003c/a\u003e\u003c/code\u003e instance into your monad stack.\n\u003c/p\u003e\u003cpre\u003e\n flip withConn cm $ \\conn -\u003e liftIO $ do\n   -- transaction is already opened by withConn at this point\n   someIOAction\n   getValuesFromIO $ \\value -\u003e runDbConnNoTransaction (insert_ value) conn\n\u003c/pre\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "runDbConnNoTransaction",
          "package": "groundhog",
          "signature": "DbPersist conn (NoLoggingT m) a -\u003e cm -\u003e m a",
          "source": "src/Database-Groundhog-Generic.html#runDbConnNoTransaction",
          "type": "function"
        },
        "index": {
          "description": "It is similar to runDbConn but runs action without transaction It can be useful if you use Groundhog within IO monad or in other cases when you cannot put PersistBackend instance into your monad stack flip withConn cm conn liftIO do transaction is already opened by withConn at this point someIOAction getValuesFromIO value runDbConnNoTransaction insert value conn",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "runDbConnNoTransaction",
          "normalized": "DbPersist a(NoLoggingT b)c-\u003ed-\u003eb c",
          "package": "groundhog",
          "partial": "Db Conn No Transaction",
          "signature": "DbPersist conn(NoLoggingT m)a-\u003ecm-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runDbConnNoTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun migrations and log them. Fails when an unsafe migration occurs.\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "runMigration",
          "package": "groundhog",
          "signature": "(String -\u003e IO ()) -\u003e Migration m -\u003e m ()",
          "source": "src/Database-Groundhog-Generic.html#runMigration",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runMigration\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:runMigration\"]"
        },
        "index": {
          "description": "Run migrations and log them Fails when an unsafe migration occurs",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "runMigration",
          "normalized": "(String-\u003eIO())-\u003eMigration a-\u003ea()",
          "package": "groundhog",
          "partial": "Migration",
          "signature": "(String-\u003eIO())-\u003eMigration m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runMigration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun migrations and log them. Executes the unsafe migrations without warnings\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "runMigrationUnsafe",
          "package": "groundhog",
          "signature": "(String -\u003e IO ()) -\u003e Migration m -\u003e m ()",
          "source": "src/Database-Groundhog-Generic.html#runMigrationUnsafe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runMigrationUnsafe\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:runMigrationUnsafe\"]"
        },
        "index": {
          "description": "Run migrations and log them Executes the unsafe migrations without warnings",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "runMigrationUnsafe",
          "normalized": "(String-\u003eIO())-\u003eMigration a-\u003ea()",
          "package": "groundhog",
          "partial": "Migration Unsafe",
          "signature": "(String-\u003eIO())-\u003eMigration m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runMigrationUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo-op\n\u003c/p\u003e",
          "module": "[\"Database.Groundhog.Generic\",\"Database.Groundhog\"]",
          "name": "silentMigrationLogger",
          "package": "groundhog",
          "signature": "String -\u003e IO ()",
          "source": "src/Database-Groundhog-Generic.html#silentMigrationLogger",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:silentMigrationLogger\",\"http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:silentMigrationLogger\"]"
        },
        "index": {
          "description": "No-op",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "silentMigrationLogger",
          "normalized": "String-\u003eIO()",
          "package": "groundhog",
          "partial": "Migration Logger",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:silentMigrationLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "singleFromPersistValue",
          "package": "groundhog",
          "signature": "[PersistValue] -\u003e m (a, [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#singleFromPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "singleFromPersistValue",
          "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
          "package": "groundhog",
          "partial": "From Persist Value",
          "signature": "[PersistValue]-\u003em(a,[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:singleFromPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "singleToPersistValue",
          "package": "groundhog",
          "signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#singleToPersistValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "singleToPersistValue",
          "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
          "package": "groundhog",
          "partial": "To Persist Value",
          "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:singleToPersistValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "toPersistValuesUnique",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e v -\u003e m ([PersistValue] -\u003e [PersistValue])",
          "source": "src/Database-Groundhog-Generic.html#toPersistValuesUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "toPersistValuesUnique",
          "normalized": "a(UniqueMarker b)-\u003eb-\u003ec([PersistValue]-\u003e[PersistValue])",
          "package": "groundhog",
          "partial": "Persist Values Unique",
          "signature": "u(UniqueMarker v)-\u003ev-\u003em([PersistValue]-\u003e[PersistValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:toPersistValuesUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "toSinglePersistValueAutoKey",
          "package": "groundhog",
          "signature": "v -\u003e m PersistValue",
          "source": "src/Database-Groundhog-Generic.html#toSinglePersistValueAutoKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "toSinglePersistValueAutoKey",
          "normalized": "a-\u003eb PersistValue",
          "package": "groundhog",
          "partial": "Single Persist Value Auto Key",
          "signature": "v-\u003em PersistValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:toSinglePersistValueAutoKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Generic",
          "name": "toSinglePersistValueUnique",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e v -\u003e m PersistValue",
          "source": "src/Database-Groundhog-Generic.html#toSinglePersistValueUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "toSinglePersistValueUnique",
          "normalized": "a(UniqueMarker b)-\u003eb-\u003ec PersistValue",
          "package": "groundhog",
          "partial": "Single Persist Value Unique",
          "signature": "u(UniqueMarker v)-\u003ev-\u003em PersistValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:toSinglePersistValueUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt helps to run \u003ccode\u003e\u003ca\u003ewithConnSavepoint\u003c/a\u003e\u003c/code\u003e within a monad.\n\u003c/p\u003e",
          "module": "Database.Groundhog.Generic",
          "name": "withSavepoint",
          "package": "groundhog",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/Database-Groundhog-Generic.html#withSavepoint",
          "type": "function"
        },
        "index": {
          "description": "It helps to run withConnSavepoint within monad",
          "hierarchy": "Database Groundhog Generic",
          "module": "Database.Groundhog.Generic",
          "name": "withSavepoint",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "groundhog",
          "partial": "Savepoint",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:withSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog.Instances",
          "name": "Instances",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Groundhog Instances",
          "module": "Database.Groundhog.Instances",
          "name": "Instances",
          "package": "groundhog",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the most commonly used functions and datatypes.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://github.com/lykahb/groundhog/blob/master/examples/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Groundhog",
          "name": "Groundhog",
          "package": "groundhog",
          "source": "src/Database-Groundhog.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the most commonly used functions and datatypes See http github.com lykahb groundhog blob master examples",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "Groundhog",
          "package": "groundhog",
          "partial": "Groundhog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt can be used in expressions like a regular field.\n For example, \u003ccode\u003edelete (AutoKeyField ==. k)\u003c/code\u003e\n or \u003ccode\u003edelete (AutoKeyField ==. k ||. SomeField ==. \"DUPLICATE\")\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "AutoKeyField",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#AutoKeyField",
          "type": "data"
        },
        "index": {
          "description": "It can be used in expressions like regular field For example delete AutoKeyField or delete AutoKeyField SomeField DUPLICATE",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "AutoKeyField",
          "package": "groundhog",
          "partial": "Auto Key Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:AutoKeyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey marked with this type can have value for any backend\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "BackendSpecific",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#BackendSpecific",
          "type": "data"
        },
        "index": {
          "description": "Key marked with this type can have value for any backend",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "BackendSpecific",
          "package": "groundhog",
          "partial": "Backend Specific",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:BackendSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents condition for a query.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "Cond",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Cond",
          "type": "data"
        },
        "index": {
          "description": "Represents condition for query",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "Cond",
          "package": "groundhog",
          "partial": "Cond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog",
          "name": "DbPersist",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#DbPersist",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "DbPersist",
          "package": "groundhog",
          "partial": "Db Persist",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:DbPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines sort order of a result-set\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "Order",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Order",
          "type": "data"
        },
        "index": {
          "description": "Defines sort order of result-set",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "Order",
          "package": "groundhog",
          "partial": "Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:Order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog",
          "name": "PersistBackend",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#PersistBackend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "PersistBackend",
          "package": "groundhog",
          "partial": "Persist Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:PersistBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA holder for Unique constraints\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "Unique",
          "package": "groundhog",
          "source": "src/Database-Groundhog-Core.html#Unique",
          "type": "data"
        },
        "index": {
          "description": "holder for Unique constraints",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "Unique",
          "package": "groundhog",
          "partial": "Unique",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount total number of records satisfying the condition\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "count",
          "package": "groundhog",
          "signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m Int",
          "source": "src/Database-Groundhog-Core.html#count",
          "type": "method"
        },
        "index": {
          "description": "Count total number of records satisfying the condition",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "count",
          "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea Int",
          "package": "groundhog",
          "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount total number of records with all constructors. The entity parameter is used only for type inference\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "countAll",
          "package": "groundhog",
          "signature": "v -\u003e m Int",
          "source": "src/Database-Groundhog-Core.html#countAll",
          "type": "method"
        },
        "index": {
          "description": "Count total number of records with all constructors The entity parameter is used only for type inference",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "countAll",
          "normalized": "a-\u003eb Int",
          "package": "groundhog",
          "partial": "All",
          "signature": "v-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:countAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the records satisfying the condition\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "delete",
          "package": "groundhog",
          "signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Remove the records satisfying the condition",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "delete",
          "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
          "package": "groundhog",
          "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all records. The entity parameter is used only for type inference.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "deleteAll",
          "package": "groundhog",
          "signature": "v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#deleteAll",
          "type": "method"
        },
        "index": {
          "description": "Remove all records The entity parameter is used only for type inference",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "deleteAll",
          "normalized": "a-\u003eb()",
          "package": "groundhog",
          "partial": "All",
          "signature": "v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:deleteAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the record with given key. No-op if the record does not exist\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "deleteBy",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#deleteBy",
          "type": "method"
        },
        "index": {
          "description": "Remove the record with given key No-op if the record does not exist",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "deleteBy",
          "normalized": "Key a BackendSpecific-\u003eb()",
          "package": "groundhog",
          "partial": "By",
          "signature": "Key v BackendSpecific-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute raw query\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "executeRaw",
          "package": "groundhog",
          "signature": "executeRaw",
          "source": "src/Database-Groundhog-Core.html#executeRaw",
          "type": "method"
        },
        "index": {
          "description": "Execute raw query",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "executeRaw",
          "package": "groundhog",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:executeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates value of unique key using the data extracted from the passed value\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "extractUnique",
          "package": "groundhog",
          "signature": "v -\u003e uKey",
          "source": "src/Database-Groundhog-Core.html#extractUnique",
          "type": "function"
        },
        "index": {
          "description": "Creates value of unique key using the data extracted from the passed value",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "extractUnique",
          "normalized": "a-\u003eb",
          "package": "groundhog",
          "partial": "Unique",
          "signature": "v-\u003euKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:extractUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an entity from a database\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "get",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e m (Maybe v)",
          "source": "src/Database-Groundhog-Core.html#get",
          "type": "method"
        },
        "index": {
          "description": "Fetch an entity from database",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "get",
          "normalized": "Key a BackendSpecific-\u003eb(Maybe a)",
          "package": "groundhog",
          "signature": "Key v BackendSpecific-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an entity from a database by its unique key\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "getBy",
          "package": "groundhog",
          "signature": "Key v (Unique u) -\u003e m (Maybe v)",
          "source": "src/Database-Groundhog-Core.html#getBy",
          "type": "method"
        },
        "index": {
          "description": "Fetch an entity from database by its unique key",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "getBy",
          "normalized": "Key a(Unique b)-\u003ec(Maybe a)",
          "package": "groundhog",
          "partial": "By",
          "signature": "Key v(Unique u)-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:getBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog",
          "name": "getList",
          "package": "groundhog",
          "signature": "Int64 -\u003e m [a]",
          "source": "src/Database-Groundhog-Core.html#getList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "getList",
          "normalized": "Int-\u003ea[b]",
          "package": "groundhog",
          "partial": "List",
          "signature": "Int-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:getList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new record to a database and return its autogenerated key or ()\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "insert",
          "package": "groundhog",
          "signature": "v -\u003e m (AutoKey v)",
          "source": "src/Database-Groundhog-Core.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Insert new record to database and return its autogenerated key or",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "insert",
          "normalized": "a-\u003eb(AutoKey a)",
          "package": "groundhog",
          "signature": "v-\u003em(AutoKey v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for the given constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "insertBy",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e v -\u003e m (Either (AutoKey v) (AutoKey v))",
          "source": "src/Database-Groundhog-Core.html#insertBy",
          "type": "method"
        },
        "index": {
          "description": "Try to insert record and return Right newkey If there is constraint violation for the given constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "insertBy",
          "normalized": "a(UniqueMarker b)-\u003eb-\u003ec(Either(AutoKey b)(AutoKey b))",
          "package": "groundhog",
          "partial": "By",
          "signature": "u(UniqueMarker v)-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for any constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values. Note that if several constraints are violated, a key of an arbitrary matching record is returned.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "insertByAll",
          "package": "groundhog",
          "signature": "v -\u003e m (Either (AutoKey v) (AutoKey v))",
          "source": "src/Database-Groundhog-Core.html#insertByAll",
          "type": "method"
        },
        "index": {
          "description": "Try to insert record and return Right newkey If there is constraint violation for any constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values Note that if several constraints are violated key of an arbitrary matching record is returned",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "insertByAll",
          "normalized": "a-\u003eb(Either(AutoKey a)(AutoKey a))",
          "package": "groundhog",
          "partial": "By All",
          "signature": "v-\u003em(Either(AutoKey v)(AutoKey v))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insertByAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Groundhog",
          "name": "insertList",
          "package": "groundhog",
          "signature": "[a] -\u003e m Int64",
          "source": "src/Database-Groundhog-Core.html#insertList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "insertList",
          "normalized": "[a]-\u003eb Int",
          "package": "groundhog",
          "partial": "List",
          "signature": "[a]-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new record to a database. For some backends it may be faster than \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "insert_",
          "package": "groundhog",
          "signature": "v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#insert_",
          "type": "method"
        },
        "index": {
          "description": "Insert new record to database For some backends it may be faster than insert",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "insert_",
          "normalized": "a-\u003eb()",
          "package": "groundhog",
          "signature": "v-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insert_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck database schema and create migrations for the entity and the entities it contains\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "migrate",
          "package": "groundhog",
          "signature": "v -\u003e Migration m",
          "source": "src/Database-Groundhog-Core.html#migrate",
          "type": "method"
        },
        "index": {
          "description": "Check database schema and create migrations for the entity and the entities it contains",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "migrate",
          "normalized": "a-\u003eMigration b",
          "package": "groundhog",
          "signature": "v-\u003eMigration m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch projection of some fields. Example: \u003ccode\u003eproject (SecondField, ThirdField) $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `offsetBy` 100\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "project",
          "package": "groundhog",
          "signature": "p -\u003e opts -\u003e m [a]",
          "source": "src/Database-Groundhog-Core.html#project",
          "type": "method"
        },
        "index": {
          "description": "Fetch projection of some fields Example project SecondField ThirdField FirstField abc SecondField def orderBy Asc ThirdField offsetBy",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "project",
          "normalized": "a-\u003eb-\u003ec[d]",
          "package": "groundhog",
          "signature": "p-\u003eopts-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute raw query with results\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "queryRaw",
          "package": "groundhog",
          "signature": "queryRaw",
          "source": "src/Database-Groundhog-Core.html#queryRaw",
          "type": "method"
        },
        "index": {
          "description": "Execute raw query with results",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "queryRaw",
          "package": "groundhog",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:queryRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a record with the given autogenerated key. Result is undefined if the record does not exist.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "replace",
          "package": "groundhog",
          "signature": "Key v BackendSpecific -\u003e v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#replace",
          "type": "method"
        },
        "index": {
          "description": "Replace record with the given autogenerated key Result is undefined if the record does not exist",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "replace",
          "normalized": "Key a BackendSpecific-\u003ea-\u003eb()",
          "package": "groundhog",
          "signature": "Key v BackendSpecific-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a record. The unique key marker defines what unique key of the entity is used.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "replaceBy",
          "package": "groundhog",
          "signature": "u (UniqueMarker v) -\u003e v -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#replaceBy",
          "type": "method"
        },
        "index": {
          "description": "Replace record The unique key marker defines what unique key of the entity is used",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "replaceBy",
          "normalized": "a(UniqueMarker b)-\u003eb-\u003ec()",
          "package": "groundhog",
          "partial": "By",
          "signature": "u(UniqueMarker v)-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:replaceBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of the records satisfying the condition. Example: \u003ccode\u003eselect $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `limitTo` 100\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "select",
          "package": "groundhog",
          "signature": "opts -\u003e m [v]",
          "source": "src/Database-Groundhog-Core.html#select",
          "type": "method"
        },
        "index": {
          "description": "Return list of the records satisfying the condition Example select FirstField abc SecondField def orderBy Asc ThirdField limitTo",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "select",
          "normalized": "a-\u003eb[c]",
          "package": "groundhog",
          "signature": "opts-\u003em[v]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all records. Order is undefined. It can be useful for datatypes with multiple constructors.\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "selectAll",
          "package": "groundhog",
          "signature": "m [(AutoKey v, v)]",
          "source": "src/Database-Groundhog-Core.html#selectAll",
          "type": "method"
        },
        "index": {
          "description": "Return list of all records Order is undefined It can be useful for datatypes with multiple constructors",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "selectAll",
          "normalized": "a[(AutoKey b,b)]",
          "package": "groundhog",
          "partial": "All",
          "signature": "m[(AutoKey v,v)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:selectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the records satisfying the condition. Example: \u003ccode\u003eupdate [FirstField =. \"abc\"] $ FirstField ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Groundhog",
          "name": "update",
          "package": "groundhog",
          "signature": "[Update (PhantomDb m) (RestrictionHolder v c)] -\u003e Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
          "source": "src/Database-Groundhog-Core.html#update",
          "type": "method"
        },
        "index": {
          "description": "Update the records satisfying the condition Example update FirstField abc FirstField def",
          "hierarchy": "Database Groundhog",
          "module": "Database.Groundhog",
          "name": "update",
          "normalized": "[Update(PhantomDb a)(RestrictionHolder b c)]-\u003eCond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
          "package": "groundhog",
          "signature": "[Update(PhantomDb m)(RestrictionHolder v c)]-\u003eCond(PhantomDb m)(RestrictionHolder v c)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:update"
      }
    }
  ]
]