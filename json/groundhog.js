[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions and datatypes used throughout the framework.\n Most of them are for the internal use\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module defines the functions and datatypes used throughout the framework Most of them are for the internal use",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Core",
        "normalized": "",
        "package": "groundhog",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Assignable",
      "description": {
        "fct-descr": "\u003cp\u003eThis subset of Projection instances is for things that behave like fields. Namely, they can occur in condition expressions (for example, Field and SubField) and on the left side of update statements. For example \"lower(field)\" is a valid Projection, but not Field like because it cannot be on the left side. Datatypes that index PostgreSQL arrays \"arr[5]\" or access composites \"(comp).subfield\" are valid instances of Assignable.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#Assignable",
        "fct-type": "class",
        "title": "Assignable"
      },
      "index": {
        "description": "This subset of Projection instances is for things that behave like fields Namely they can occur in condition expressions for example Field and SubField and on the left side of update statements For example lower field is valid Projection but not Field like because it cannot be on the left side Datatypes that index PostgreSQL arrays arr or access composites comp subfield are valid instances of Assignable",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Assignable",
        "normalized": "",
        "package": "groundhog",
        "partial": "Assignable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:AutoKeyField",
      "description": {
        "fct-descr": "\u003cp\u003eIt can be used in expressions like a regular field.\n For example, \u003ccode\u003edelete (AutoKeyField ==. k)\u003c/code\u003e\n or \u003ccode\u003edelete (AutoKeyField ==. k ||. SomeField ==. \"DUPLICATE\")\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#AutoKeyField",
        "fct-type": "data",
        "title": "AutoKeyField"
      },
      "index": {
        "description": "It can be used in expressions like regular field For example delete AutoKeyField or delete AutoKeyField SomeField DUPLICATE",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "AutoKeyField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Auto Key Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:BackendSpecific",
      "description": {
        "fct-descr": "\u003cp\u003eKey marked with this type can have value for any backend\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#BackendSpecific",
        "fct-type": "data",
        "title": "BackendSpecific"
      },
      "index": {
        "description": "Key marked with this type can have value for any backend",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "BackendSpecific",
        "normalized": "",
        "package": "groundhog",
        "partial": "Backend Specific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Cond",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents condition for a query.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "data",
        "title": "Cond"
      },
      "index": {
        "description": "Represents condition for query",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Cond",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ConnectionManager",
      "description": {
        "fct-descr": "\u003cp\u003eConnection manager provides connection to the passed function handles transations. Manager can be a connection itself, a pool, Snaplet in Snap, foundation datatype in Yesod, etc.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#ConnectionManager",
        "fct-type": "class",
        "title": "ConnectionManager"
      },
      "index": {
        "description": "Connection manager provides connection to the passed function handles transations Manager can be connection itself pool Snaplet in Snap foundation datatype in Yesod etc",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ConnectionManager",
        "normalized": "",
        "package": "groundhog",
        "partial": "Connection Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Constructor",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom constructors are made instances of this class. This class should be used only by Template Haskell codegen\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#Constructor",
        "fct-type": "class",
        "title": "Constructor"
      },
      "index": {
        "description": "Phantom constructors are made instances of this class This class should be used only by Template Haskell codegen",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Constructor",
        "normalized": "",
        "package": "groundhog",
        "partial": "Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ConstructorDef",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes an entity constructor\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "data",
        "title": "ConstructorDef"
      },
      "index": {
        "description": "Describes an entity constructor",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ConstructorDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Constructor Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ConstructorMarker",
      "description": {
        "fct-descr": "\u003cp\u003eA phantom datatype to make instance head different \u003ccode\u003ec (ConstructorMarker v)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorMarker",
        "fct-type": "data",
        "title": "ConstructorMarker"
      },
      "index": {
        "description": "phantom datatype to make instance head different ConstructorMarker",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ConstructorMarker",
        "normalized": "",
        "package": "groundhog",
        "partial": "Constructor Marker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbDescriptor",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#DbDescriptor",
        "fct-type": "class",
        "title": "DbDescriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbDescriptor",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Descriptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbPersist",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#DbPersist",
        "fct-type": "newtype",
        "title": "DbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbPersist",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbType",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#DbType",
        "fct-type": "data",
        "title": "DbType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:DbTypePrimitive",
      "description": {
        "fct-descr": "\u003cp\u003eA DB data type. Naming attempts to reflect the underlying Haskell\n datatypes, eg DbString instead of DbVarchar. Different databases may\n have different representations for these types.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "data",
        "title": "DbTypePrimitive"
      },
      "index": {
        "description": "DB data type Naming attempts to reflect the underlying Haskell datatypes eg DbString instead of DbVarchar Different databases may have different representations for these types",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbTypePrimitive",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Type Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Embedded",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#Embedded",
        "fct-type": "class",
        "title": "Embedded"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Embedded",
        "normalized": "",
        "package": "groundhog",
        "partial": "Embedded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:EmbeddedDef",
      "description": {
        "fct-descr": "\u003cp\u003eThe first argument is a flag which defines if the field names should be concatenated with the outer field name (False) or used as is which provides full control over table column names (True).\n Value False should be the default value so that a datatype can be embedded without name conflict concern. The second argument list of field names and field types.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#EmbeddedDef",
        "fct-type": "data",
        "title": "EmbeddedDef"
      },
      "index": {
        "description": "The first argument is flag which defines if the field names should be concatenated with the outer field name False or used as is which provides full control over table column names True Value False should be the default value so that datatype can be embedded without name conflict concern The second argument list of field names and field types",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "EmbeddedDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Embedded Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:EntityConstr",
      "description": {
        "fct-descr": "\u003cp\u003eThis class helps type inference in cases when query does not contain any fields which\n define the constructor, but the entity has only one.\n For example, in \u003ccode\u003eselect $ AutoKeyField ==. k\u003c/code\u003e the condition would need type annotation with constructor name only if we select a sum type.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#EntityConstr",
        "fct-type": "class",
        "title": "EntityConstr"
      },
      "index": {
        "description": "This class helps type inference in cases when query does not contain any fields which define the constructor but the entity has only one For example in select AutoKeyField the condition would need type annotation with constructor name only if we select sum type",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "EntityConstr",
        "normalized": "",
        "package": "groundhog",
        "partial": "Entity Constr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:EntityDef",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes an ADT.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#EntityDef",
        "fct-type": "data",
        "title": "EntityDef"
      },
      "index": {
        "description": "Describes an ADT",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "EntityDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Entity Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eExpr with phantom type helps to keep type safety in complex expressions\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#Expr",
        "fct-type": "newtype",
        "title": "Expr"
      },
      "index": {
        "description": "Expr with phantom type helps to keep type safety in complex expressions",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Expr",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ExprRelation",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "data",
        "title": "ExprRelation"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ExprRelation",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expr Relation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:FieldChain",
      "description": {
        "fct-descr": "\u003cp\u003eIt is used to map field to column names. It can be either a column name for a regular field of non-embedded type or a list of this field and the outer fields in reverse order. Eg, fieldChain $ SomeField ~\u003e Tuple2_0Selector may result in [(\"val0\", DbString), (\"some\", DbEmbedded False [dbType \"\", dbType True])].\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "type",
        "fct-source": "src/Database-Groundhog-Core.html#FieldChain",
        "fct-type": "type",
        "title": "FieldChain"
      },
      "index": {
        "description": "It is used to map field to column names It can be either column name for regular field of non-embedded type or list of this field and the outer fields in reverse order Eg fieldChain SomeField Tuple2 Selector may result in val0 DbString some DbEmbedded False dbType dbType True",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "FieldChain",
        "normalized": "",
        "package": "groundhog",
        "partial": "Field Chain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:FieldLike",
      "description": {
        "fct-descr": "\u003cp\u003eThis subset of Assignable is for plain database fields.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#FieldLike",
        "fct-type": "class",
        "title": "FieldLike"
      },
      "index": {
        "description": "This subset of Assignable is for plain database fields",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "FieldLike",
        "normalized": "",
        "package": "groundhog",
        "partial": "Field Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:HFalse",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#HFalse",
        "fct-type": "data",
        "title": "HFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "HFalse",
        "normalized": "",
        "package": "groundhog",
        "partial": "HFalse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:HTrue",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#HTrue",
        "fct-type": "data",
        "title": "HTrue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "HTrue",
        "normalized": "",
        "package": "groundhog",
        "partial": "HTrue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:HasSelectOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThis class helps to check that limit, offset, or order clauses are added to condition only once.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#HasSelectOptions",
        "fct-type": "class",
        "title": "HasSelectOptions"
      },
      "index": {
        "description": "This class helps to check that limit offset or order clauses are added to condition only once",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "HasSelectOptions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Has Select Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:IsUniqueKey",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#IsUniqueKey",
        "fct-type": "class",
        "title": "IsUniqueKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "IsUniqueKey",
        "normalized": "",
        "package": "groundhog",
        "partial": "Is Unique Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:KeyForBackend",
      "description": {
        "fct-descr": "\u003cp\u003eIt allows to store autogenerated keys of one database in another\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#KeyForBackend",
        "fct-type": "data",
        "title": "KeyForBackend"
      },
      "index": {
        "description": "It allows to store autogenerated keys of one database in another",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "KeyForBackend",
        "normalized": "",
        "package": "groundhog",
        "partial": "Key For Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Migration",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "type",
        "fct-source": "src/Database-Groundhog-Core.html#Migration",
        "fct-type": "type",
        "title": "Migration"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Migration",
        "normalized": "",
        "package": "groundhog",
        "partial": "Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:NamedMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype names and corresponding migrations\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "type",
        "fct-source": "src/Database-Groundhog-Core.html#NamedMigrations",
        "fct-type": "type",
        "title": "NamedMigrations"
      },
      "index": {
        "description": "Datatype names and corresponding migrations",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "NamedMigrations",
        "normalized": "",
        "package": "groundhog",
        "partial": "Named Migrations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:NeverNull",
      "description": {
        "fct-descr": "\u003cp\u003eTypes which are never NULL when converted to \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e.\n Consider the type \u003ccode\u003eMaybe (Maybe a)\u003c/code\u003e. Now Nothing is stored as NULL, so we cannot distinguish between Just Nothing and Nothing which is a problem.\n The purpose of this class is to ban the inner Maybe's.\n Maybe this class can be removed when support for inner Maybe's appears.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#NeverNull",
        "fct-type": "class",
        "title": "NeverNull"
      },
      "index": {
        "description": "Types which are never NULL when converted to PersistValue Consider the type Maybe Maybe Now Nothing is stored as NULL so we cannot distinguish between Just Nothing and Nothing which is problem The purpose of this class is to ban the inner Maybe Maybe this class can be removed when support for inner Maybe appears",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "NeverNull",
        "normalized": "",
        "package": "groundhog",
        "partial": "Never Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Order",
      "description": {
        "fct-descr": "\u003cp\u003eDefines sort order of a result-set\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Order",
        "fct-type": "data",
        "title": "Order"
      },
      "index": {
        "description": "Defines sort order of result-set",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Order",
        "normalized": "",
        "package": "groundhog",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:OtherTypeDef",
      "description": {
        "fct-descr": "\u003cp\u003eStores name for a database type\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#OtherTypeDef",
        "fct-type": "newtype",
        "title": "OtherTypeDef"
      },
      "index": {
        "description": "Stores name for database type",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "OtherTypeDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Other Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ParentTableReference",
      "description": {
        "fct-descr": "\u003cp\u003eThe reference contains either EntityDef of the parent table and name of the unique constraint. Or for tables not mapped by Groundhog schema name, table name, and list of columns  \n Reference to the autogenerated key of a mapped entity = (Left (entityDef, Nothing), onDelete, onUpdate)\n Reference to a unique key of a mapped entity = (Left (entityDef, Just uniqueKeyName), onDelete, onUpdate)\n Reference to a table that is not mapped = (Right (schema, tableName, columns), onDelete, onUpdate)\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "type",
        "fct-source": "src/Database-Groundhog-Core.html#ParentTableReference",
        "fct-type": "type",
        "title": "ParentTableReference"
      },
      "index": {
        "description": "The reference contains either EntityDef of the parent table and name of the unique constraint Or for tables not mapped by Groundhog schema name table name and list of columns Reference to the autogenerated key of mapped entity Left entityDef Nothing onDelete onUpdate Reference to unique key of mapped entity Left entityDef Just uniqueKeyName onDelete onUpdate Reference to table that is not mapped Right schema tableName columns onDelete onUpdate",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ParentTableReference",
        "normalized": "",
        "package": "groundhog",
        "partial": "Parent Table Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistBackend",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#PersistBackend",
        "fct-type": "class",
        "title": "PersistBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistBackend",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistEntity",
      "description": {
        "fct-descr": "\u003cp\u003eOnly instances of this class can be persisted in a database\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#PersistEntity",
        "fct-type": "class",
        "title": "PersistEntity"
      },
      "index": {
        "description": "Only instances of this class can be persisted in database",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistEntity",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistField",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents everything which can be put into a database. This data can be stored in multiple columns and tables. To get value of those columns we might need to access another table. That is why the result type is monadic.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#PersistField",
        "fct-type": "class",
        "title": "PersistField"
      },
      "index": {
        "description": "Represents everything which can be put into database This data can be stored in multiple columns and tables To get value of those columns we might need to access another table That is why the result type is monadic",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PersistValue",
      "description": {
        "fct-descr": "\u003cp\u003eA raw value which can be stored in any backend and can be marshalled to\n and from a \u003ccode\u003e\u003ca\u003ePersistField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "data",
        "title": "PersistValue"
      },
      "index": {
        "description": "raw value which can be stored in any backend and can be marshalled to and from PersistField",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistValue",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PrimitivePersistField",
      "description": {
        "fct-descr": "\u003cp\u003eDatatypes which can be converted directly to \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e. The no-value parameter \u003ccode\u003eDbDescriptor db =\u003e Proxy db\u003c/code\u003e allows conversion depend the database details while keeping it pure. A type which has an instance of \u003ccode\u003e\u003ca\u003ePrimitivePersistField\u003c/a\u003e\u003c/code\u003e should be an instance of superclasses \u003ccode\u003e\u003ca\u003eSinglePersistField\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePurePersistField\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#PrimitivePersistField",
        "fct-type": "class",
        "title": "PrimitivePersistField"
      },
      "index": {
        "description": "Datatypes which can be converted directly to PersistValue The no-value parameter DbDescriptor db Proxy db allows conversion depend the database details while keeping it pure type which has an instance of PrimitivePersistField should be an instance of superclasses SinglePersistField and PurePersistField as well",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PrimitivePersistField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Primitive Persist Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Projection",
      "description": {
        "fct-descr": "\u003cp\u003eAny data that can be fetched from a database\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#Projection",
        "fct-type": "class",
        "title": "Projection"
      },
      "index": {
        "description": "Any data that can be fetched from database",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Projection",
        "normalized": "",
        "package": "groundhog",
        "partial": "Projection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Proxy",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Proxy",
        "fct-type": "data",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Proxy",
        "normalized": "",
        "package": "groundhog",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:PurePersistField",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents all datatypes that map into several columns. Getting values for those columns is pure.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#PurePersistField",
        "fct-type": "class",
        "title": "PurePersistField"
      },
      "index": {
        "description": "Represents all datatypes that map into several columns Getting values for those columns is pure",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PurePersistField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Pure Persist Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ReferenceActionType",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#ReferenceActionType",
        "fct-type": "data",
        "title": "ReferenceActionType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ReferenceActionType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Reference Action Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:RestrictionHolder",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#RestrictionHolder",
        "fct-type": "data",
        "title": "RestrictionHolder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "RestrictionHolder",
        "normalized": "",
        "package": "groundhog",
        "partial": "Restriction Holder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:RowPopper",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "type",
        "fct-source": "src/Database-Groundhog-Core.html#RowPopper",
        "fct-type": "type",
        "title": "RowPopper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "RowPopper",
        "normalized": "",
        "package": "groundhog",
        "partial": "Row Popper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Savepoint",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#Savepoint",
        "fct-type": "class",
        "title": "Savepoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Savepoint",
        "normalized": "",
        "package": "groundhog",
        "partial": "Savepoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SelectOptions",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#SelectOptions",
        "fct-type": "data",
        "title": "SelectOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SelectOptions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Select Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SingleConnectionManager",
      "description": {
        "fct-descr": "\u003cp\u003eThis connection manager always returns the same connection. This constraint is useful when performing operations which make sense only within one connection, for example, nested savepoints..\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#SingleConnectionManager",
        "fct-type": "class",
        "title": "SingleConnectionManager"
      },
      "index": {
        "description": "This connection manager always returns the same connection This constraint is useful when performing operations which make sense only within one connection for example nested savepoints",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SingleConnectionManager",
        "normalized": "",
        "package": "groundhog",
        "partial": "Single Connection Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SingleMigration",
      "description": {
        "fct-descr": "\u003cp\u003eEither error messages or migration queries with safety flag and execution order\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "type",
        "fct-source": "src/Database-Groundhog-Core.html#SingleMigration",
        "fct-type": "type",
        "title": "SingleMigration"
      },
      "index": {
        "description": "Either error messages or migration queries with safety flag and execution order",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SingleMigration",
        "normalized": "",
        "package": "groundhog",
        "partial": "Single Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SinglePersistField",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents all datatypes that map into a single column. Getting value for that column might require monadic actions to access other tables.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#SinglePersistField",
        "fct-type": "class",
        "title": "SinglePersistField"
      },
      "index": {
        "description": "Represents all datatypes that map into single column Getting value for that column might require monadic actions to access other tables",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SinglePersistField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Single Persist Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:SubField",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#SubField",
        "fct-type": "newtype",
        "title": "SubField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SubField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Sub Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Unique",
      "description": {
        "fct-descr": "\u003cp\u003eA holder for Unique constraints\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Unique",
        "fct-type": "data",
        "title": "Unique"
      },
      "index": {
        "description": "holder for Unique constraints",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Unique",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UniqueDef",
      "description": {
        "fct-descr": "\u003cp\u003eUnique name and list of the field names that form a unique combination\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueDef",
        "fct-type": "data",
        "title": "UniqueDef"
      },
      "index": {
        "description": "Unique name and list of the field names that form unique combination",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniqueDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UniqueMarker",
      "description": {
        "fct-descr": "\u003cp\u003eA phantom datatype to make instance head different \u003ccode\u003eu (UniqueMarker v)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueMarker",
        "fct-type": "data",
        "title": "UniqueMarker"
      },
      "index": {
        "description": "phantom datatype to make instance head different UniqueMarker",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniqueMarker",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Marker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UniqueType",
      "description": {
        "fct-descr": "\u003cp\u003eDefines how to treat the unique set of fields for a datatype\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueType",
        "fct-type": "data",
        "title": "UniqueType"
      },
      "index": {
        "description": "Defines how to treat the unique set of fields for datatype",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniqueType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:UntypedExpr",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to uniformly represent fields, constants and more complex things, e.g., arithmetic expressions.\n A value should be converted to \u003ccode\u003e\u003ca\u003eUntypedExpr\u003c/a\u003e\u003c/code\u003e for usage in expressions\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#UntypedExpr",
        "fct-type": "data",
        "title": "UntypedExpr"
      },
      "index": {
        "description": "Used to uniformly represent fields constants and more complex things e.g arithmetic expressions value should be converted to UntypedExpr for usage in expressions",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UntypedExpr",
        "normalized": "",
        "package": "groundhog",
        "partial": "Untyped Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Update",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Update",
        "fct-type": "data",
        "title": "Update"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Update",
        "normalized": "",
        "package": "groundhog",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:Utf8",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for incremental building SQL queries\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#Utf8",
        "fct-type": "newtype",
        "title": "Utf8"
      },
      "index": {
        "description": "Datatype for incremental building SQL queries",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Utf8",
        "normalized": "",
        "package": "groundhog",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#t:ZT",
      "description": {
        "fct-descr": "\u003cp\u003eAvoid orphan instances.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#ZT",
        "fct-type": "newtype",
        "title": "ZT"
      },
      "index": {
        "description": "Avoid orphan instances",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ZT",
        "normalized": "",
        "package": "groundhog",
        "partial": "ZT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAccesses fields of the embedded datatypes. For example, \u003ccode\u003eSomeField ==. (\"abc\", \"def\") ||. SomeField ~\u003e Tuple2_0Selector ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e Selector a a' -\u003e SubField v c a'",
        "fct-source": "src/Database-Groundhog-Core.html#~%3E",
        "fct-type": "function",
        "title": "(~\u003e)"
      },
      "index": {
        "description": "Accesses fields of the embedded datatypes For example SomeField abc def SomeField Tuple2 Selector def",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "(~\u003e) ~\u003e",
        "normalized": "a-\u003eSelector b c-\u003eSubField d e c",
        "package": "groundhog",
        "partial": "",
        "signature": "f-\u003eSelector a a'-\u003eSubField v c a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:And",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "And (Cond db r) (Cond db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "And",
        "normalized": "",
        "package": "groundhog",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Asc",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Asc f",
        "fct-source": "src/Database-Groundhog-Core.html#Order",
        "fct-type": "function",
        "title": "Asc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Asc",
        "normalized": "",
        "package": "groundhog",
        "partial": "Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:AutoKeyField",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "AutoKeyField v c",
        "fct-source": "src/Database-Groundhog-Core.html#AutoKeyField",
        "fct-type": "function",
        "title": "AutoKeyField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "AutoKeyField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Auto Key Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Cascade",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Cascade",
        "fct-source": "src/Database-Groundhog-Core.html#ReferenceActionType",
        "fct-type": "function",
        "title": "Cascade"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Cascade",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cascade",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Compare",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Compare ExprRelation (UntypedExpr db r) (UntypedExpr db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "Compare"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Compare",
        "normalized": "",
        "package": "groundhog",
        "partial": "Compare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:CondEmpty",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "CondEmpty",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "CondEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "CondEmpty",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cond Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:CondRaw",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "CondRaw (QueryRaw db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "CondRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "CondRaw",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cond Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ConstructorDef",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "ConstructorDef",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "function",
        "title": "ConstructorDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ConstructorDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Constructor Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbAutoKey",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbAutoKey",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbAutoKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbAutoKey",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Auto Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbBlob",
      "description": {
        "fct-descr": "\u003cp\u003eByteString\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbBlob",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbBlob"
      },
      "index": {
        "description": "ByteString",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbBlob",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbBool",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbBool",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbBool",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbDay",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbDay",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbDay",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbDayTime",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbDayTime",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbDayTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbDayTime",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Day Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbDayTimeZoned",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbDayTimeZoned",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbDayTimeZoned"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbDayTimeZoned",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Day Time Zoned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbEmbedded",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbEmbedded EmbeddedDef (Maybe ParentTableReference)",
        "fct-source": "src/Database-Groundhog-Core.html#DbType",
        "fct-type": "function",
        "title": "DbEmbedded"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbEmbedded",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Embedded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbInt32",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbInt32",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbInt32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbInt32",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbInt64",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbInt64",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbInt64",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbList",
      "description": {
        "fct-descr": "\u003cp\u003eList table name and type of its argument\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbList String DbType",
        "fct-source": "src/Database-Groundhog-Core.html#DbType",
        "fct-type": "function",
        "title": "DbList"
      },
      "index": {
        "description": "List table name and type of its argument",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbList",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbOther",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbOther OtherTypeDef",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbOther",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbPersist",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbPersist",
        "fct-source": "src/Database-Groundhog-Core.html#DbPersist",
        "fct-type": "function",
        "title": "DbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbPersist",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbReal",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbReal",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbReal",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbString",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbString",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbString",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbTime",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbTime",
        "fct-source": "src/Database-Groundhog-Core.html#DbTypePrimitive",
        "fct-type": "function",
        "title": "DbTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbTime",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:DbTypePrimitive",
      "description": {
        "fct-descr": "\u003cp\u003etype, nullable, default value, reference\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbTypePrimitive DbTypePrimitive Bool (Maybe String) (Maybe ParentTableReference)",
        "fct-source": "src/Database-Groundhog-Core.html#DbType",
        "fct-type": "function",
        "title": "DbTypePrimitive"
      },
      "index": {
        "description": "type nullable default value reference",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "DbTypePrimitive",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Type Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Desc",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Desc f",
        "fct-source": "src/Database-Groundhog-Core.html#Order",
        "fct-type": "function",
        "title": "Desc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Desc",
        "normalized": "",
        "package": "groundhog",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:EmbeddedDef",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "EmbeddedDef Bool [(String, DbType)]",
        "fct-source": "src/Database-Groundhog-Core.html#EmbeddedDef",
        "fct-type": "function",
        "title": "EmbeddedDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "EmbeddedDef",
        "normalized": "EmbeddedDef Bool[(String,DbType)]",
        "package": "groundhog",
        "partial": "Embedded Def",
        "signature": "EmbeddedDef Bool[(String,DbType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:EntityDef",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "EntityDef",
        "fct-source": "src/Database-Groundhog-Core.html#EntityDef",
        "fct-type": "function",
        "title": "EntityDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "EntityDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Entity Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Eq",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Eq",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "function",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Eq",
        "normalized": "",
        "package": "groundhog",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Expr",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Expr (QueryRaw db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Expr",
        "fct-type": "function",
        "title": "Expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Expr",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ExprField",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "FieldChain -\u003e UntypedExpr db r",
        "fct-source": "src/Database-Groundhog-Core.html#UntypedExpr",
        "fct-type": "function",
        "title": "ExprField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ExprField",
        "normalized": "FieldChain-\u003eUntypedExpr a b",
        "package": "groundhog",
        "partial": "Expr Field",
        "signature": "FieldChain-\u003eUntypedExpr db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ExprPure",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e UntypedExpr db r",
        "fct-source": "src/Database-Groundhog-Core.html#UntypedExpr",
        "fct-type": "function",
        "title": "ExprPure"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ExprPure",
        "normalized": "a-\u003eUntypedExpr b c",
        "package": "groundhog",
        "partial": "Expr Pure",
        "signature": "a-\u003eUntypedExpr db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ExprRaw",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Expr db r a -\u003e UntypedExpr db r",
        "fct-source": "src/Database-Groundhog-Core.html#UntypedExpr",
        "fct-type": "function",
        "title": "ExprRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ExprRaw",
        "normalized": "Expr a b c-\u003eUntypedExpr a b",
        "package": "groundhog",
        "partial": "Expr Raw",
        "signature": "Expr db r a-\u003eUntypedExpr db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Ge",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Ge",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "function",
        "title": "Ge"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Ge",
        "normalized": "",
        "package": "groundhog",
        "partial": "Ge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Gt",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Gt",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "function",
        "title": "Gt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Gt",
        "normalized": "",
        "package": "groundhog",
        "partial": "Gt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:KeyForBackend",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "KeyForBackend (AutoKeyType db)",
        "fct-source": "src/Database-Groundhog-Core.html#KeyForBackend",
        "fct-type": "function",
        "title": "KeyForBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "KeyForBackend",
        "normalized": "",
        "package": "groundhog",
        "partial": "Key For Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Le",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Le",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "function",
        "title": "Le"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Le",
        "normalized": "",
        "package": "groundhog",
        "partial": "Le",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Lt",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Lt",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "function",
        "title": "Lt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Lt",
        "normalized": "",
        "package": "groundhog",
        "partial": "Lt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Ne",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Ne",
        "fct-source": "src/Database-Groundhog-Core.html#ExprRelation",
        "fct-type": "function",
        "title": "Ne"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Ne",
        "normalized": "",
        "package": "groundhog",
        "partial": "Ne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:NoAction",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "NoAction",
        "fct-source": "src/Database-Groundhog-Core.html#ReferenceActionType",
        "fct-type": "function",
        "title": "NoAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "NoAction",
        "normalized": "",
        "package": "groundhog",
        "partial": "No Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Not",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Not (Cond db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Not",
        "normalized": "",
        "package": "groundhog",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Or",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Or (Cond db r) (Cond db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Or",
        "normalized": "",
        "package": "groundhog",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:OtherTypeDef",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "OtherTypeDef ((DbTypePrimitive -\u003e String) -\u003e String)",
        "fct-source": "src/Database-Groundhog-Core.html#OtherTypeDef",
        "fct-type": "function",
        "title": "OtherTypeDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "OtherTypeDef",
        "normalized": "OtherTypeDef((DbTypePrimitive-\u003eString)-\u003eString)",
        "package": "groundhog",
        "partial": "Other Type Def",
        "signature": "OtherTypeDef((DbTypePrimitive-\u003eString)-\u003eString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistBool",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistBool Bool",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistBool",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistByteString",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistByteString ByteString",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistByteString",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistCustom",
      "description": {
        "fct-descr": "\u003cp\u003eCreating some datatypes may require calling a function, using a special constructor, or other syntax. The string (which can have placeholders) is included into query without escaping. The recursive constructions are not allowed, i.e., [PersistValue] cannot contain PersistCustom values.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistCustom Utf8 [PersistValue]",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistCustom"
      },
      "index": {
        "description": "Creating some datatypes may require calling function using special constructor or other syntax The string which can have placeholders is included into query without escaping The recursive constructions are not allowed i.e PersistValue cannot contain PersistCustom values",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistCustom",
        "normalized": "PersistCustom Utf[PersistValue]",
        "package": "groundhog",
        "partial": "Persist Custom",
        "signature": "PersistCustom Utf[PersistValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistDay",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistDay Day",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistDay",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistDouble",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistDouble Double",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistDouble",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistInt64",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistInt64 Int64",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistInt64",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistNull",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistNull",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistNull",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistString",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistString String",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistString",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistTimeOfDay",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistTimeOfDay TimeOfDay",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistTimeOfDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistTimeOfDay",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistUTCTime",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistUTCTime UTCTime",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistUTCTime",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:PersistZonedTime",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistZonedTime ZT",
        "fct-source": "src/Database-Groundhog-Core.html#PersistValue",
        "fct-type": "function",
        "title": "PersistZonedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "PersistZonedTime",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Restrict",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Restrict",
        "fct-source": "src/Database-Groundhog-Core.html#ReferenceActionType",
        "fct-type": "function",
        "title": "Restrict"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Restrict",
        "normalized": "",
        "package": "groundhog",
        "partial": "Restrict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SelectOptions",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "SelectOptions",
        "fct-source": "src/Database-Groundhog-Core.html#SelectOptions",
        "fct-type": "function",
        "title": "SelectOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SelectOptions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Select Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SetDefault",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "SetDefault",
        "fct-source": "src/Database-Groundhog-Core.html#ReferenceActionType",
        "fct-type": "function",
        "title": "SetDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SetDefault",
        "normalized": "",
        "package": "groundhog",
        "partial": "Set Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SetNull",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "SetNull",
        "fct-source": "src/Database-Groundhog-Core.html#ReferenceActionType",
        "fct-type": "function",
        "title": "SetNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SetNull",
        "normalized": "",
        "package": "groundhog",
        "partial": "Set Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:SubField",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "SubField FieldChain",
        "fct-source": "src/Database-Groundhog-Core.html#SubField",
        "fct-type": "function",
        "title": "SubField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "SubField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Sub Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniqueConstraint",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "UniqueConstraint",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueType",
        "fct-type": "function",
        "title": "UniqueConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniqueConstraint",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniqueDef",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "UniqueDef",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueDef",
        "fct-type": "function",
        "title": "UniqueDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniqueDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniqueIndex",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "UniqueIndex",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueType",
        "fct-type": "function",
        "title": "UniqueIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniqueIndex",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:UniquePrimary",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "UniquePrimary",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueType",
        "fct-type": "function",
        "title": "UniquePrimary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "UniquePrimary",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Primary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Update",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Update f (UntypedExpr db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Update",
        "fct-type": "function",
        "title": "Update"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Update",
        "normalized": "",
        "package": "groundhog",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:Utf8",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Utf8 Builder",
        "fct-source": "src/Database-Groundhog-Core.html#Utf8",
        "fct-type": "function",
        "title": "Utf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "Utf8",
        "normalized": "",
        "package": "groundhog",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:ZT",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "ZT ZonedTime",
        "fct-source": "src/Database-Groundhog-Core.html#ZT",
        "fct-type": "function",
        "title": "ZT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "ZT",
        "normalized": "",
        "package": "groundhog",
        "partial": "ZT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:backendName",
      "description": {
        "fct-descr": "\u003cp\u003eName of backend\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e String",
        "fct-source": "src/Database-Groundhog-Core.html#backendName",
        "fct-type": "method",
        "title": "backendName"
      },
      "index": {
        "description": "Name of backend",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "backendName",
        "normalized": "Proxy a-\u003eString",
        "package": "groundhog",
        "partial": "Name",
        "signature": "Proxy db-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:condOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Cond db r",
        "fct-source": "src/Database-Groundhog-Core.html#SelectOptions",
        "fct-type": "function",
        "title": "condOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "condOptions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrAutoKeyName",
      "description": {
        "fct-descr": "\u003cp\u003eAutokey name if any\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "function",
        "title": "constrAutoKeyName"
      },
      "index": {
        "description": "Autokey name if any",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "constrAutoKeyName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Auto Key Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrName",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor name\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "function",
        "title": "constrName"
      },
      "index": {
        "description": "Constructor name",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "constrName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrNum",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of the constructor in the ADT\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Int",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "function",
        "title": "constrNum"
      },
      "index": {
        "description": "Number of the constructor in the ADT",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "constrNum",
        "normalized": "",
        "package": "groundhog",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrParams",
      "description": {
        "fct-descr": "\u003cp\u003eParameter names with their named type\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[(String, DbType)]",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "function",
        "title": "constrParams"
      },
      "index": {
        "description": "Parameter names with their named type",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "constrParams",
        "normalized": "[(String,DbType)]",
        "package": "groundhog",
        "partial": "Params",
        "signature": "[(String,DbType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constrUniques",
      "description": {
        "fct-descr": "\u003cp\u003eUniqueness constraints on the constructor fiels\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[UniqueDef]",
        "fct-source": "src/Database-Groundhog-Core.html#ConstructorDef",
        "fct-type": "function",
        "title": "constrUniques"
      },
      "index": {
        "description": "Uniqueness constraints on the constructor fiels",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "constrUniques",
        "normalized": "[UniqueDef]",
        "package": "groundhog",
        "partial": "Uniques",
        "signature": "[UniqueDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:constructors",
      "description": {
        "fct-descr": "\u003cp\u003eList of entity constructors definitions\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[ConstructorDef]",
        "fct-source": "src/Database-Groundhog-Core.html#EntityDef",
        "fct-type": "function",
        "title": "constructors"
      },
      "index": {
        "description": "List of entity constructors definitions",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "constructors",
        "normalized": "[ConstructorDef]",
        "package": "groundhog",
        "partial": "",
        "signature": "[ConstructorDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCount total number of records satisfying the condition\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m Int",
        "fct-source": "src/Database-Groundhog-Core.html#count",
        "fct-type": "method",
        "title": "count"
      },
      "index": {
        "description": "Count total number of records satisfying the condition",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "count",
        "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea Int",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:countAll",
      "description": {
        "fct-descr": "\u003cp\u003eCount total number of records with all constructors\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m Int",
        "fct-source": "src/Database-Groundhog-Core.html#countAll",
        "fct-type": "method",
        "title": "countAll"
      },
      "index": {
        "description": "Count total number of records with all constructors",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "countAll",
        "normalized": "a-\u003eb Int",
        "package": "groundhog",
        "partial": "All",
        "signature": "v-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:dbType",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of value type\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e DbType",
        "fct-source": "src/Database-Groundhog-Core.html#dbType",
        "fct-type": "method",
        "title": "dbType"
      },
      "index": {
        "description": "Description of value type",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "dbType",
        "normalized": "a-\u003eDbType",
        "package": "groundhog",
        "partial": "Type",
        "signature": "a-\u003eDbType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the records satisfying the condition\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Remove the records satisfying the condition",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "delete",
        "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:deleteByKey",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the record with given key. No-op if the record does not exist\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Key v BackendSpecific -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#deleteByKey",
        "fct-type": "method",
        "title": "deleteByKey"
      },
      "index": {
        "description": "Remove the record with given key No-op if the record does not exist",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "deleteByKey",
        "normalized": "Key a BackendSpecific-\u003eb()",
        "package": "groundhog",
        "partial": "By Key",
        "signature": "Key v BackendSpecific-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:delim",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Char",
        "fct-source": "src/Database-Groundhog-Core.html#delim",
        "fct-type": "function",
        "title": "delim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "delim",
        "normalized": "",
        "package": "groundhog",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityConstrNum",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "* -\u003e *) -\u003e Int",
        "fct-source": "src/Database-Groundhog-Core.html#entityConstrNum",
        "fct-type": "method",
        "title": "entityConstrNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "entityConstrNum",
        "normalized": "*-\u003e*)-\u003eInt",
        "package": "groundhog",
        "partial": "Constr Num",
        "signature": "*-\u003e*)-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityDef",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a complete description of the type\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e EntityDef",
        "fct-source": "src/Database-Groundhog-Core.html#entityDef",
        "fct-type": "method",
        "title": "entityDef"
      },
      "index": {
        "description": "Returns complete description of the type",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "entityDef",
        "normalized": "a-\u003eEntityDef",
        "package": "groundhog",
        "partial": "Def",
        "signature": "v-\u003eEntityDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityFieldChain",
      "description": {
        "fct-descr": "\u003cp\u003eIs internally used by FieldLike Field instance\n We could avoid this function if class FieldLike allowed FieldLike Fields Data or FieldLike (Fields Data). However that would require additional extensions in user-space code\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Field v c a -\u003e FieldChain",
        "fct-source": "src/Database-Groundhog-Core.html#entityFieldChain",
        "fct-type": "method",
        "title": "entityFieldChain"
      },
      "index": {
        "description": "Is internally used by FieldLike Field instance We could avoid this function if class FieldLike allowed FieldLike Fields Data or FieldLike Fields Data However that would require additional extensions in user-space code",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "entityFieldChain",
        "normalized": "Field a b c-\u003eFieldChain",
        "package": "groundhog",
        "partial": "Field Chain",
        "signature": "Field v c a-\u003eFieldChain"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entityName",
      "description": {
        "fct-descr": "\u003cp\u003eEntity name. \u003ccode\u003eentityName (entityDef v) == persistName v\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Core.html#EntityDef",
        "fct-type": "function",
        "title": "entityName"
      },
      "index": {
        "description": "Entity name entityName entityDef persistName",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "entityName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:entitySchema",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase schema for the entity table and tables of its constructors\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Core.html#EntityDef",
        "fct-type": "function",
        "title": "entitySchema"
      },
      "index": {
        "description": "Database schema for the entity table and tables of its constructors",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "entitySchema",
        "normalized": "",
        "package": "groundhog",
        "partial": "Schema",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:executeRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute raw query\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "executeRaw",
        "fct-source": "src/Database-Groundhog-Core.html#executeRaw",
        "fct-type": "method",
        "title": "executeRaw"
      },
      "index": {
        "description": "Execute raw query",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "executeRaw",
        "normalized": "",
        "package": "groundhog",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:extractUnique",
      "description": {
        "fct-descr": "\u003cp\u003eCreates value of unique key using the data extracted from the passed value\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e uKey",
        "fct-source": "src/Database-Groundhog-Core.html#extractUnique",
        "fct-type": "method",
        "title": "extractUnique"
      },
      "index": {
        "description": "Creates value of unique key using the data extracted from the passed value",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "extractUnique",
        "normalized": "a-\u003eb",
        "package": "groundhog",
        "partial": "Unique",
        "signature": "v-\u003euKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fieldChain",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e FieldChain",
        "fct-source": "src/Database-Groundhog-Core.html#fieldChain",
        "fct-type": "method",
        "title": "fieldChain"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fieldChain",
        "normalized": "a-\u003eFieldChain",
        "package": "groundhog",
        "partial": "Chain",
        "signature": "f-\u003eFieldChain"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromEntityPersistValues",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the value from the list of \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[PersistValue] -\u003e m (v, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Core.html#fromEntityPersistValues",
        "fct-type": "method",
        "title": "fromEntityPersistValues"
      },
      "index": {
        "description": "Constructs the value from the list of PersistValue",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fromEntityPersistValues",
        "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
        "package": "groundhog",
        "partial": "Entity Persist Values",
        "signature": "[PersistValue]-\u003em(v,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromPersistValues",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a value from a \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e. For complex datatypes it may query the database\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[PersistValue] -\u003e m (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Core.html#fromPersistValues",
        "fct-type": "method",
        "title": "fromPersistValues"
      },
      "index": {
        "description": "Constructs value from PersistValue For complex datatypes it may query the database",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fromPersistValues",
        "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
        "package": "groundhog",
        "partial": "Persist Values",
        "signature": "[PersistValue]-\u003em(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromPrimitivePersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e PersistValue -\u003e a",
        "fct-source": "src/Database-Groundhog-Core.html#fromPrimitivePersistValue",
        "fct-type": "method",
        "title": "fromPrimitivePersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fromPrimitivePersistValue",
        "normalized": "Proxy a-\u003ePersistValue-\u003eb",
        "package": "groundhog",
        "partial": "Primitive Persist Value",
        "signature": "Proxy db-\u003ePersistValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromPurePersistValues",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e [PersistValue] -\u003e (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Core.html#fromPurePersistValues",
        "fct-type": "method",
        "title": "fromPurePersistValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fromPurePersistValues",
        "normalized": "Proxy a-\u003e[PersistValue]-\u003e(b,[PersistValue])",
        "package": "groundhog",
        "partial": "Pure Persist Values",
        "signature": "Proxy db-\u003e[PersistValue]-\u003e(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromSinglePersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "PersistValue -\u003e m a",
        "fct-source": "src/Database-Groundhog-Core.html#fromSinglePersistValue",
        "fct-type": "method",
        "title": "fromSinglePersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fromSinglePersistValue",
        "normalized": "PersistValue-\u003ea b",
        "package": "groundhog",
        "partial": "Single Persist Value",
        "signature": "PersistValue-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:fromUtf8",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Utf8 -\u003e ByteString",
        "fct-source": "src/Database-Groundhog-Core.html#fromUtf8",
        "fct-type": "function",
        "title": "fromUtf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "fromUtf8",
        "normalized": "Utf-\u003eByteString",
        "package": "groundhog",
        "partial": "Utf",
        "signature": "Utf-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFetch an entity from a database\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Key v BackendSpecific -\u003e m (Maybe v)",
        "fct-source": "src/Database-Groundhog-Core.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Fetch an entity from database",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "get",
        "normalized": "Key a BackendSpecific-\u003eb(Maybe a)",
        "package": "groundhog",
        "partial": "",
        "signature": "Key v BackendSpecific-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getBy",
      "description": {
        "fct-descr": "\u003cp\u003eFetch an entity from a database by its unique key\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Key v (Unique u) -\u003e m (Maybe v)",
        "fct-source": "src/Database-Groundhog-Core.html#getBy",
        "fct-type": "method",
        "title": "getBy"
      },
      "index": {
        "description": "Fetch an entity from database by its unique key",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "getBy",
        "normalized": "Key a(Unique b)-\u003ec(Maybe a)",
        "package": "groundhog",
        "partial": "By",
        "signature": "Key v(Unique u)-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getList",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Int64 -\u003e m [a]",
        "fct-source": "src/Database-Groundhog-Core.html#getList",
        "fct-type": "method",
        "title": "getList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "getList",
        "normalized": "Int-\u003ea[b]",
        "package": "groundhog",
        "partial": "List",
        "signature": "Int-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getSelectOptions",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e SelectOptions db r (HasLimit a) (HasOffset a) (HasOrder a)",
        "fct-source": "src/Database-Groundhog-Core.html#getSelectOptions",
        "fct-type": "method",
        "title": "getSelectOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "getSelectOptions",
        "normalized": "a-\u003eSelectOptions b c(HasLimit a)(HasOffset a)(HasOrder a)",
        "package": "groundhog",
        "partial": "Select Options",
        "signature": "a-\u003eSelectOptions db r(HasLimit a)(HasOffset a)(HasOrder a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:getUniques",
      "description": {
        "fct-descr": "\u003cp\u003eReturns constructor number and a list of uniques names and corresponding field values\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e v -\u003e (Int, [(String, [PersistValue] -\u003e [PersistValue])])",
        "fct-source": "src/Database-Groundhog-Core.html#getUniques",
        "fct-type": "method",
        "title": "getUniques"
      },
      "index": {
        "description": "Returns constructor number and list of uniques names and corresponding field values",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "getUniques",
        "normalized": "Proxy a-\u003eb-\u003e(Int,[(String,[PersistValue]-\u003e[PersistValue])])",
        "package": "groundhog",
        "partial": "Uniques",
        "signature": "Proxy db-\u003ev-\u003e(Int,[(String,[PersistValue]-\u003e[PersistValue])])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new record to a database and return its autogenerated key or ()\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m (AutoKey v)",
        "fct-source": "src/Database-Groundhog-Core.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert new record to database and return its autogenerated key or",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "insert",
        "normalized": "a-\u003eb(AutoKey a)",
        "package": "groundhog",
        "partial": "",
        "signature": "v-\u003em(AutoKey v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insertBy",
      "description": {
        "fct-descr": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for the given constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "u (UniqueMarker v) -\u003e v -\u003e m (Either (AutoKey v) (AutoKey v))",
        "fct-source": "src/Database-Groundhog-Core.html#insertBy",
        "fct-type": "method",
        "title": "insertBy"
      },
      "index": {
        "description": "Try to insert record and return Right newkey If there is constraint violation for the given constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "insertBy",
        "normalized": "a(UniqueMarker b)-\u003eb-\u003ec(Either(AutoKey b)(AutoKey b))",
        "package": "groundhog",
        "partial": "By",
        "signature": "u(UniqueMarker v)-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insertByAll",
      "description": {
        "fct-descr": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for any constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values. Note that if several constraints are violated, a key of an arbitrary matching record is returned.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m (Either (AutoKey v) (AutoKey v))",
        "fct-source": "src/Database-Groundhog-Core.html#insertByAll",
        "fct-type": "method",
        "title": "insertByAll"
      },
      "index": {
        "description": "Try to insert record and return Right newkey If there is constraint violation for any constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values Note that if several constraints are violated key of an arbitrary matching record is returned",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "insertByAll",
        "normalized": "a-\u003eb(Either(AutoKey a)(AutoKey a))",
        "package": "groundhog",
        "partial": "By All",
        "signature": "v-\u003em(Either(AutoKey v)(AutoKey v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insertList",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[a] -\u003e m Int64",
        "fct-source": "src/Database-Groundhog-Core.html#insertList",
        "fct-type": "method",
        "title": "insertList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "insertList",
        "normalized": "[a]-\u003eb Int",
        "package": "groundhog",
        "partial": "List",
        "signature": "[a]-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:insert_",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new record to a database. For some backends it may be faster than \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#insert_",
        "fct-type": "method",
        "title": "insert_"
      },
      "index": {
        "description": "Insert new record to database For some backends it may be faster than insert",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "insert_",
        "normalized": "a-\u003eb()",
        "package": "groundhog",
        "partial": "",
        "signature": "v-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:limitOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Database-Groundhog-Core.html#SelectOptions",
        "fct-type": "function",
        "title": "limitOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "limitOptions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:limitTo",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Int -\u003e SelectOptions db r HTrue (HasOffset a) (HasOrder a)",
        "fct-source": "src/Database-Groundhog-Core.html#limitTo",
        "fct-type": "function",
        "title": "limitTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "limitTo",
        "normalized": "a-\u003eInt-\u003eSelectOptions b c HTrue(HasOffset a)(HasOrder a)",
        "package": "groundhog",
        "partial": "To",
        "signature": "a-\u003eInt-\u003eSelectOptions db r HTrue(HasOffset a)(HasOrder a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:migrate",
      "description": {
        "fct-descr": "\u003cp\u003eCheck database schema and create migrations for the entity and the entities it contains\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e Migration m",
        "fct-source": "src/Database-Groundhog-Core.html#migrate",
        "fct-type": "method",
        "title": "migrate"
      },
      "index": {
        "description": "Check database schema and create migrations for the entity and the entities it contains",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "migrate",
        "normalized": "a-\u003eMigration b",
        "package": "groundhog",
        "partial": "",
        "signature": "v-\u003eMigration m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:offsetBy",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Int -\u003e SelectOptions db r (HasLimit a) HTrue (HasOrder a)",
        "fct-source": "src/Database-Groundhog-Core.html#offsetBy",
        "fct-type": "function",
        "title": "offsetBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "offsetBy",
        "normalized": "a-\u003eInt-\u003eSelectOptions b c(HasLimit a)HTrue(HasOrder a)",
        "package": "groundhog",
        "partial": "By",
        "signature": "a-\u003eInt-\u003eSelectOptions db r(HasLimit a)HTrue(HasOrder a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:offsetOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Database-Groundhog-Core.html#SelectOptions",
        "fct-type": "function",
        "title": "offsetOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "offsetOptions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:orderBy",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e [Order db r] -\u003e SelectOptions db r (HasLimit a) (HasOffset a) HTrue",
        "fct-source": "src/Database-Groundhog-Core.html#orderBy",
        "fct-type": "function",
        "title": "orderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "orderBy",
        "normalized": "a-\u003e[Order b c]-\u003eSelectOptions b c(HasLimit a)(HasOffset a)HTrue",
        "package": "groundhog",
        "partial": "By",
        "signature": "a-\u003e[Order db r]-\u003eSelectOptions db r(HasLimit a)(HasOffset a)HTrue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:orderOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[Order db r]",
        "fct-source": "src/Database-Groundhog-Core.html#SelectOptions",
        "fct-type": "function",
        "title": "orderOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "orderOptions",
        "normalized": "[Order a b]",
        "package": "groundhog",
        "partial": "Options",
        "signature": "[Order db r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:persistName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn name of the type. If it is polymorphic, the names of parameter types are separated with \u003ccode\u003e\u003ca\u003edelim\u003c/a\u003e\u003c/code\u003e symbol\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-Groundhog-Core.html#persistName",
        "fct-type": "method",
        "title": "persistName"
      },
      "index": {
        "description": "Return name of the type If it is polymorphic the names of parameter types are separated with delim symbol",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "persistName",
        "normalized": "a-\u003eString",
        "package": "groundhog",
        "partial": "Name",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:phantomConstrNum",
      "description": {
        "fct-descr": "\u003cp\u003eReturns constructor index which can be used to get ConstructorDef from EntityDef\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "* -\u003e *) -\u003e Int",
        "fct-source": "src/Database-Groundhog-Core.html#phantomConstrNum",
        "fct-type": "method",
        "title": "phantomConstrNum"
      },
      "index": {
        "description": "Returns constructor index which can be used to get ConstructorDef from EntityDef",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "phantomConstrNum",
        "normalized": "*-\u003e*)-\u003eInt",
        "package": "groundhog",
        "partial": "Constr Num",
        "signature": "*-\u003e*)-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eFetch projection of some fields. Example: \u003ccode\u003eproject (SecondField, ThirdField) $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `offsetBy` 100\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "p -\u003e opts -\u003e m [a]",
        "fct-source": "src/Database-Groundhog-Core.html#project",
        "fct-type": "method",
        "title": "project"
      },
      "index": {
        "description": "Fetch projection of some fields Example project SecondField ThirdField FirstField abc SecondField def orderBy Asc ThirdField offsetBy",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "project",
        "normalized": "a-\u003eb-\u003ec[d]",
        "package": "groundhog",
        "partial": "",
        "signature": "p-\u003eopts-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:projectionExprs",
      "description": {
        "fct-descr": "\u003cp\u003eIt returns multiple expressions that can be transformed into values which can be selected. Difflist is used for concatenation efficiency.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "p -\u003e [UntypedExpr db r] -\u003e [UntypedExpr db r]",
        "fct-source": "src/Database-Groundhog-Core.html#projectionExprs",
        "fct-type": "method",
        "title": "projectionExprs"
      },
      "index": {
        "description": "It returns multiple expressions that can be transformed into values which can be selected Difflist is used for concatenation efficiency",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "projectionExprs",
        "normalized": "a-\u003e[UntypedExpr b c]-\u003e[UntypedExpr b c]",
        "package": "groundhog",
        "partial": "Exprs",
        "signature": "p-\u003e[UntypedExpr db r]-\u003e[UntypedExpr db r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:projectionResult",
      "description": {
        "fct-descr": "\u003cp\u003eIt is like \u003ccode\u003e\u003ca\u003efromPersistValues\u003c/a\u003e\u003c/code\u003e. However, we cannot use it for projections in all cases. For the \u003ccode\u003e\u003ca\u003ePersistEntity\u003c/a\u003e\u003c/code\u003e instances \u003ccode\u003e\u003ca\u003efromPersistValues\u003c/a\u003e\u003c/code\u003e expects entity id instead of the entity values.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "p -\u003e [PersistValue] -\u003e m (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Core.html#projectionResult",
        "fct-type": "method",
        "title": "projectionResult"
      },
      "index": {
        "description": "It is like fromPersistValues However we cannot use it for projections in all cases For the PersistEntity instances fromPersistValues expects entity id instead of the entity values",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "projectionResult",
        "normalized": "a-\u003e[PersistValue]-\u003eb(c,[PersistValue])",
        "package": "groundhog",
        "partial": "Result",
        "signature": "p-\u003e[PersistValue]-\u003em(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:queryRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute raw query with results\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "queryRaw",
        "fct-source": "src/Database-Groundhog-Core.html#queryRaw",
        "fct-type": "method",
        "title": "queryRaw"
      },
      "index": {
        "description": "Execute raw query with results",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "queryRaw",
        "normalized": "",
        "package": "groundhog",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a record with the given autogenerated key. Result is undefined if the record does not exist.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Key v BackendSpecific -\u003e v -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#replace",
        "fct-type": "method",
        "title": "replace"
      },
      "index": {
        "description": "Replace record with the given autogenerated key Result is undefined if the record does not exist",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "replace",
        "normalized": "Key a BackendSpecific-\u003ea-\u003eb()",
        "package": "groundhog",
        "partial": "",
        "signature": "Key v BackendSpecific-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:runDbPersist",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "DbPersist conn m a -\u003e conn -\u003e m a",
        "fct-source": "src/Database-Groundhog-Core.html#runDbPersist",
        "fct-type": "function",
        "title": "runDbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "runDbPersist",
        "normalized": "DbPersist a b c-\u003ea-\u003eb c",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": "DbPersist conn m a-\u003econn-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of the records satisfying the condition. Example: \u003ccode\u003eselect $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `limitTo` 100\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "opts -\u003e m [v]",
        "fct-source": "src/Database-Groundhog-Core.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Return list of the records satisfying the condition Example select FirstField abc SecondField def orderBy Asc ThirdField limitTo",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "select",
        "normalized": "a-\u003eb[c]",
        "package": "groundhog",
        "partial": "",
        "signature": "opts-\u003em[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:selectAll",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of all records. Order is undefined. It is useful for datatypes with multiple constructors.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "m [(AutoKey v, v)]",
        "fct-source": "src/Database-Groundhog-Core.html#selectAll",
        "fct-type": "method",
        "title": "selectAll"
      },
      "index": {
        "description": "Return list of all records Order is undefined It is useful for datatypes with multiple constructors",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "selectAll",
        "normalized": "a[(AutoKey b,b)]",
        "package": "groundhog",
        "partial": "All",
        "signature": "m[(AutoKey v,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:selectorNum",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Selector v a -\u003e Int",
        "fct-source": "src/Database-Groundhog-Core.html#selectorNum",
        "fct-type": "method",
        "title": "selectorNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "selectorNum",
        "normalized": "Selector a b-\u003eInt",
        "package": "groundhog",
        "partial": "Num",
        "signature": "Selector v a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toEntityPersistValues",
      "description": {
        "fct-descr": "\u003cp\u003eMarshalls value to a list of \u003ccode\u003e\u003ca\u003ePersistValue\u003c/a\u003e\u003c/code\u003e ready for insert to a database\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m ([PersistValue] -\u003e [PersistValue])",
        "fct-source": "src/Database-Groundhog-Core.html#toEntityPersistValues",
        "fct-type": "method",
        "title": "toEntityPersistValues"
      },
      "index": {
        "description": "Marshalls value to list of PersistValue ready for insert to database",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "toEntityPersistValues",
        "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
        "package": "groundhog",
        "partial": "Entity Persist Values",
        "signature": "v-\u003em([PersistValue]-\u003e[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toPersistValues",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value into something which can be stored in a database column.\n Note that for complex datatypes it may insert them to return identifier\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
        "fct-source": "src/Database-Groundhog-Core.html#toPersistValues",
        "fct-type": "method",
        "title": "toPersistValues"
      },
      "index": {
        "description": "Convert value into something which can be stored in database column Note that for complex datatypes it may insert them to return identifier",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "toPersistValues",
        "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
        "package": "groundhog",
        "partial": "Persist Values",
        "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toPrimitivePersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e a -\u003e PersistValue",
        "fct-source": "src/Database-Groundhog-Core.html#toPrimitivePersistValue",
        "fct-type": "method",
        "title": "toPrimitivePersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "toPrimitivePersistValue",
        "normalized": "Proxy a-\u003eb-\u003ePersistValue",
        "package": "groundhog",
        "partial": "Primitive Persist Value",
        "signature": "Proxy db-\u003ea-\u003ePersistValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toPurePersistValues",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e a -\u003e [PersistValue] -\u003e [PersistValue]",
        "fct-source": "src/Database-Groundhog-Core.html#toPurePersistValues",
        "fct-type": "method",
        "title": "toPurePersistValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "toPurePersistValues",
        "normalized": "Proxy a-\u003eb-\u003e[PersistValue]-\u003e[PersistValue]",
        "package": "groundhog",
        "partial": "Pure Persist Values",
        "signature": "Proxy db-\u003ea-\u003e[PersistValue]-\u003e[PersistValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:toSinglePersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e m PersistValue",
        "fct-source": "src/Database-Groundhog-Core.html#toSinglePersistValue",
        "fct-type": "method",
        "title": "toSinglePersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "toSinglePersistValue",
        "normalized": "a-\u003eb PersistValue",
        "package": "groundhog",
        "partial": "Single Persist Value",
        "signature": "a-\u003em PersistValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:typeParams",
      "description": {
        "fct-descr": "\u003cp\u003eNamed types of the instantiated polymorphic type parameters\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[DbType]",
        "fct-source": "src/Database-Groundhog-Core.html#EntityDef",
        "fct-type": "function",
        "title": "typeParams"
      },
      "index": {
        "description": "Named types of the instantiated polymorphic type parameters",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "typeParams",
        "normalized": "[DbType]",
        "package": "groundhog",
        "partial": "Params",
        "signature": "[DbType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:unDbPersist",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "ReaderT conn m a",
        "fct-source": "src/Database-Groundhog-Core.html#DbPersist",
        "fct-type": "function",
        "title": "unDbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "unDbPersist",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[(String, DbType)]",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueDef",
        "fct-type": "function",
        "title": "uniqueFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "uniqueFields",
        "normalized": "[(String,DbType)]",
        "package": "groundhog",
        "partial": "Fields",
        "signature": "[(String,DbType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueDef",
        "fct-type": "function",
        "title": "uniqueName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "uniqueName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueNum",
      "description": {
        "fct-descr": "\u003cp\u003eOrdinal number of the unique constraint in the list returned by \u003ccode\u003e\u003ca\u003econstrUniques\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "uKey -\u003e Int",
        "fct-source": "src/Database-Groundhog-Core.html#uniqueNum",
        "fct-type": "method",
        "title": "uniqueNum"
      },
      "index": {
        "description": "Ordinal number of the unique constraint in the list returned by constrUniques",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "uniqueNum",
        "normalized": "a-\u003eInt",
        "package": "groundhog",
        "partial": "Num",
        "signature": "uKey-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:uniqueType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "UniqueType",
        "fct-source": "src/Database-Groundhog-Core.html#UniqueDef",
        "fct-type": "function",
        "title": "uniqueType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "uniqueType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the records satisfying the condition. Example: \u003ccode\u003eupdate [FirstField =. \"abc\"] $ FirstField ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "[Update (PhantomDb m) (RestrictionHolder v c)] -\u003e Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#update",
        "fct-type": "method",
        "title": "update"
      },
      "index": {
        "description": "Update the records satisfying the condition Example update FirstField abc FirstField def",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "update",
        "normalized": "[Update(PhantomDb a)(RestrictionHolder b c)]-\u003eCond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
        "package": "groundhog",
        "partial": "",
        "signature": "[Update(PhantomDb m)(RestrictionHolder v c)]-\u003eCond(PhantomDb m)(RestrictionHolder v c)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:withConn",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the connection from manager and opens the transaction.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "(conn -\u003e m a) -\u003e cm -\u003e m a",
        "fct-source": "src/Database-Groundhog-Core.html#withConn",
        "fct-type": "method",
        "title": "withConn"
      },
      "index": {
        "description": "Extracts the connection from manager and opens the transaction",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "withConn",
        "normalized": "(a-\u003eb c)-\u003ed-\u003eb c",
        "package": "groundhog",
        "partial": "Conn",
        "signature": "(conn-\u003em a)-\u003ecm-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:withConnNoTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the connection.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "(conn -\u003e m a) -\u003e cm -\u003e m a",
        "fct-source": "src/Database-Groundhog-Core.html#withConnNoTransaction",
        "fct-type": "method",
        "title": "withConnNoTransaction"
      },
      "index": {
        "description": "Extracts the connection",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "withConnNoTransaction",
        "normalized": "(a-\u003eb c)-\u003ed-\u003eb c",
        "package": "groundhog",
        "partial": "Conn No Transaction",
        "signature": "(conn-\u003em a)-\u003ecm-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Core.html#v:withConnSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eWraps the passed action into a named savepoint\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Core",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e m a -\u003e conn -\u003e m a",
        "fct-source": "src/Database-Groundhog-Core.html#withConnSavepoint",
        "fct-type": "method",
        "title": "withConnSavepoint"
      },
      "index": {
        "description": "Wraps the passed action into named savepoint",
        "hierarchy": "Database Groundhog Core",
        "module": "Database.Groundhog.Core",
        "name": "withConnSavepoint",
        "normalized": "String-\u003ea b-\u003ec-\u003ea b",
        "package": "groundhog",
        "partial": "Conn Savepoint",
        "signature": "String-\u003em a-\u003econn-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides mechanism for flexible and typesafe usage of plain data values and fields.\n The expressions can used in conditions and right part of Update statement.\n Example:\n\u003c/p\u003e\u003cpre\u003e\n StringField ==. \"abc\" &&. NumberField \u003e. (0 :: Int) ||. MaybeField ==. (Nothing :: Maybe String) ||. MaybeField ==. Just \"def\"\n\u003c/pre\u003e\u003cp\u003eNote that polymorphic values like numbers or Nothing must have a type annotation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Expression.html",
        "fct-type": "module",
        "title": "Expression"
      },
      "index": {
        "description": "This module provides mechanism for flexible and typesafe usage of plain data values and fields The expressions can used in conditions and right part of Update statement Example StringField abc NumberField Int MaybeField Nothing Maybe String MaybeField Just def Note that polymorphic values like numbers or Nothing must have type annotation",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "Expression",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#t:Expression",
      "description": {
        "fct-descr": "\u003cp\u003eInstances of this type can be converted to \u003ccode\u003e\u003ca\u003eUntypedExpr\u003c/a\u003e\u003c/code\u003e. It is useful for uniform manipulation over fields, constant values, etc.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Expression.html#Expression",
        "fct-type": "class",
        "title": "Expression"
      },
      "index": {
        "description": "Instances of this type can be converted to UntypedExpr It is useful for uniform manipulation over fields constant values etc",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "Expression",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#t:ExpressionOf",
      "description": {
        "fct-descr": "\u003cp\u003eThis helper class can make type signatures more concise\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Expression.html#ExpressionOf",
        "fct-type": "class",
        "title": "ExpressionOf"
      },
      "index": {
        "description": "This helper class can make type signatures more concise",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "ExpressionOf",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expression Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#t:Unifiable",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Expression.html#Unifiable",
        "fct-type": "class",
        "title": "Unifiable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "Unifiable",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unifiable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"or\" operator.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "Cond db r -\u003e Cond db r -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%7C%7C.",
        "fct-type": "function",
        "title": "(||.)"
      },
      "index": {
        "description": "Boolean or operator",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(||.) ||.",
        "normalized": "Cond a b-\u003eCond a b-\u003eCond a b",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond db r-\u003eCond db r-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"and\" operator.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "Cond db r -\u003e Cond db r -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%26%26.",
        "fct-type": "function",
        "title": "(&&.)"
      },
      "index": {
        "description": "Boolean and operator",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(&&.) &&.",
        "normalized": "Cond a b-\u003eCond a b-\u003eCond a b",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond db r-\u003eCond db r-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-47--61-.",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%2F%3D.",
        "fct-type": "function",
        "title": "(/=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(/=.) /=.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-60--61-.",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3C%3D.",
        "fct-type": "function",
        "title": "(\u003c=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(\u003c=.) \u003c=.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-60-.",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3C.",
        "fct-type": "function",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(\u003c.) \u003c.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-61--61-.",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3D%3D.",
        "fct-type": "function",
        "title": "(==.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(==.) ==.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-61-.",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate field\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e b -\u003e Update db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3D.",
        "fct-type": "function",
        "title": "(=.)"
      },
      "index": {
        "description": "Update field",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(=.) =.",
        "normalized": "a-\u003eb-\u003eUpdate c d",
        "package": "groundhog",
        "partial": "",
        "signature": "f-\u003eb-\u003eUpdate db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-62--61-.",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3E%3D.",
        "fct-type": "function",
        "title": "(\u003e=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(\u003e=.) \u003e=.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:-62-.",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3E.",
        "fct-type": "function",
        "title": "(\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "(\u003e.) \u003e.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:isFieldNothing",
      "description": {
        "fct-descr": "\u003cp\u003eThis function more limited than (==.), but has better type inference.\n If you want to compare your value to Nothing with \u003ccode\u003e(==.)\u003c/code\u003e operator, you have to write the types explicitly \u003ccode\u003emyExpr ==. (Nothing :: Maybe Int)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#isFieldNothing",
        "fct-type": "function",
        "title": "isFieldNothing"
      },
      "index": {
        "description": "This function more limited than but has better type inference If you want to compare your value to Nothing with operator you have to write the types explicitly myExpr Nothing Maybe Int",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "isFieldNothing",
        "normalized": "a-\u003eCond b c",
        "package": "groundhog",
        "partial": "Field Nothing",
        "signature": "f-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Expression.html#v:toExpr",
      "description": {
        "fct-module": "Database.Groundhog.Expression",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e UntypedExpr db r",
        "fct-source": "src/Database-Groundhog-Expression.html#toExpr",
        "fct-type": "method",
        "title": "toExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Expression",
        "module": "Database.Groundhog.Expression",
        "name": "toExpr",
        "normalized": "a-\u003eUntypedExpr b c",
        "package": "groundhog",
        "partial": "Expr",
        "signature": "a-\u003eUntypedExpr db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module is intended for use by the backend creators\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html",
        "fct-type": "module",
        "title": "Migration"
      },
      "index": {
        "description": "This helper module is intended for use by the backend creators",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Migration",
        "normalized": "",
        "package": "groundhog",
        "partial": "Migration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:AlterColumn",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "data",
        "title": "AlterColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AlterColumn",
        "normalized": "",
        "package": "groundhog",
        "partial": "Alter Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:AlterDB",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "data",
        "title": "AlterDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AlterDB",
        "normalized": "",
        "package": "groundhog",
        "partial": "Alter DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:AlterTable",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "data",
        "title": "AlterTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AlterTable",
        "normalized": "",
        "package": "groundhog",
        "partial": "Alter Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:Column",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Column",
        "fct-type": "data",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Column",
        "normalized": "",
        "package": "groundhog",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:MigrationPack",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "data",
        "title": "MigrationPack"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "MigrationPack",
        "normalized": "",
        "package": "groundhog",
        "partial": "Migration Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:Reference",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "data",
        "title": "Reference"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Reference",
        "normalized": "",
        "package": "groundhog",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:SchemaAnalyzer",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#SchemaAnalyzer",
        "fct-type": "class",
        "title": "SchemaAnalyzer"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "SchemaAnalyzer",
        "normalized": "",
        "package": "groundhog",
        "partial": "Schema Analyzer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:TableInfo",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
        "fct-type": "data",
        "title": "TableInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "TableInfo",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#t:UniqueDef-39-",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
        "fct-type": "data",
        "title": "UniqueDef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "UniqueDef'",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Def'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddColumn",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AddColumn Column",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "AddColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AddColumn",
        "normalized": "",
        "package": "groundhog",
        "partial": "Add Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddReference",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AddReference Reference",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "AddReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AddReference",
        "normalized": "",
        "package": "groundhog",
        "partial": "Add Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddTable",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AddTable String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "AddTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AddTable",
        "normalized": "",
        "package": "groundhog",
        "partial": "Add Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddTriggerOnDelete",
      "description": {
        "fct-descr": "\u003cp\u003eTrigger schema, trigger name, table schema, table name, body\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AddTriggerOnDelete (Maybe String) String (Maybe String) String String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "AddTriggerOnDelete"
      },
      "index": {
        "description": "Trigger schema trigger name table schema table name body",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AddTriggerOnDelete",
        "normalized": "",
        "package": "groundhog",
        "partial": "Add Trigger On Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddTriggerOnUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eTrigger schema, trigger name, table schema, table name, field name, body\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AddTriggerOnUpdate (Maybe String) String (Maybe String) String (Maybe String) String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "AddTriggerOnUpdate"
      },
      "index": {
        "description": "Trigger schema trigger name table schema table name field name body",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AddTriggerOnUpdate",
        "normalized": "",
        "package": "groundhog",
        "partial": "Add Trigger On Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AddUnique",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AddUnique UniqueDef'",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "AddUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AddUnique",
        "normalized": "",
        "package": "groundhog",
        "partial": "Add Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AlterColumn",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AlterColumn Column [AlterColumn]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "AlterColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AlterColumn",
        "normalized": "AlterColumn Column[AlterColumn]",
        "package": "groundhog",
        "partial": "Alter Column",
        "signature": "AlterColumn Column[AlterColumn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:AlterTable",
      "description": {
        "fct-descr": "\u003cp\u003eTable schema, table name, create statement, structure of table from DB, structure of table from datatype, alters\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AlterTable (Maybe String) String String TableInfo TableInfo [AlterTable]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "AlterTable"
      },
      "index": {
        "description": "Table schema table name create statement structure of table from DB structure of table from datatype alters",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "AlterTable",
        "normalized": "AlterTable(Maybe String)String String TableInfo TableInfo[AlterTable]",
        "package": "groundhog",
        "partial": "Alter Table",
        "signature": "AlterTable(Maybe String)String String TableInfo TableInfo[AlterTable]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Column",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Column",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Column",
        "fct-type": "function",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Column",
        "normalized": "",
        "package": "groundhog",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:CreateOrReplaceFunction",
      "description": {
        "fct-descr": "\u003cp\u003eStatement which creates the function\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "CreateOrReplaceFunction String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "CreateOrReplaceFunction"
      },
      "index": {
        "description": "Statement which creates the function",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "CreateOrReplaceFunction",
        "normalized": "",
        "package": "groundhog",
        "partial": "Create Or Replace Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Default",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Default String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "function",
        "title": "Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Default",
        "normalized": "",
        "package": "groundhog",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropColumn",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DropColumn String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "DropColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "DropColumn",
        "normalized": "",
        "package": "groundhog",
        "partial": "Drop Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropConstraint",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DropConstraint String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "DropConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "DropConstraint",
        "normalized": "",
        "package": "groundhog",
        "partial": "Drop Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropFunction",
      "description": {
        "fct-descr": "\u003cp\u003eFunction schema, function name\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DropFunction (Maybe String) String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "DropFunction"
      },
      "index": {
        "description": "Function schema function name",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "DropFunction",
        "normalized": "",
        "package": "groundhog",
        "partial": "Drop Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropIndex",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DropIndex String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "DropIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "DropIndex",
        "normalized": "",
        "package": "groundhog",
        "partial": "Drop Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropReference",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DropReference String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterTable",
        "fct-type": "function",
        "title": "DropReference"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "DropReference",
        "normalized": "",
        "package": "groundhog",
        "partial": "Drop Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:DropTrigger",
      "description": {
        "fct-descr": "\u003cp\u003eTrigger schema, trigger name, table schema, table name\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DropTrigger (Maybe String) String (Maybe String) String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterDB",
        "fct-type": "function",
        "title": "DropTrigger"
      },
      "index": {
        "description": "Trigger schema trigger name table schema table name",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "DropTrigger",
        "normalized": "",
        "package": "groundhog",
        "partial": "Drop Trigger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:IsNull",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "IsNull",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "function",
        "title": "IsNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "IsNull",
        "normalized": "",
        "package": "groundhog",
        "partial": "Is Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:MigrationPack",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "MigrationPack",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "MigrationPack"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "MigrationPack",
        "normalized": "",
        "package": "groundhog",
        "partial": "Migration Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:NoDefault",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "NoDefault",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "function",
        "title": "NoDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "NoDefault",
        "normalized": "",
        "package": "groundhog",
        "partial": "No Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:NotNull",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "NotNull",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "function",
        "title": "NotNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "NotNull",
        "normalized": "",
        "package": "groundhog",
        "partial": "Not Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Reference",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Reference",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "function",
        "title": "Reference"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Reference",
        "normalized": "",
        "package": "groundhog",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:TableInfo",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "TableInfo",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
        "fct-type": "function",
        "title": "TableInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "TableInfo",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:Type",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Type DbTypePrimitive",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "function",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "Type",
        "normalized": "",
        "package": "groundhog",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:UniqueDef-39-",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "UniqueDef'",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
        "fct-type": "function",
        "title": "UniqueDef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "UniqueDef'",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique Def'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:UpdateValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "UpdateValue String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#AlterColumn",
        "fct-type": "function",
        "title": "UpdateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "UpdateValue",
        "normalized": "",
        "package": "groundhog",
        "partial": "Update Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:addUniquesReferences",
      "description": {
        "fct-descr": "\u003cp\u003eSql pieces for the create table statement that add constraints and alterations for running after the table is created\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "[UniqueDef'] -\u003e [Reference] -\u003e ([String], [AlterTable])",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "addUniquesReferences"
      },
      "index": {
        "description": "Sql pieces for the create table statement that add constraints and alterations for running after the table is created",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "addUniquesReferences",
        "normalized": "[UniqueDef']-\u003e[Reference]-\u003e([String],[AlterTable])",
        "package": "groundhog",
        "partial": "Uniques References",
        "signature": "[UniqueDef']-\u003e[Reference]-\u003e([String],[AlterTable])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:analyzeFunction",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "analyzeFunction",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#analyzeFunction",
        "fct-type": "method",
        "title": "analyzeFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "analyzeFunction",
        "normalized": "",
        "package": "groundhog",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:analyzeTable",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "analyzeTable",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#analyzeTable",
        "fct-type": "method",
        "title": "analyzeTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "analyzeTable",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:analyzeTrigger",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "analyzeTrigger",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#analyzeTrigger",
        "fct-type": "method",
        "title": "analyzeTrigger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "analyzeTrigger",
        "normalized": "",
        "package": "groundhog",
        "partial": "Trigger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colDefault",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Column",
        "fct-type": "function",
        "title": "colDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "colDefault",
        "normalized": "",
        "package": "groundhog",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Column",
        "fct-type": "function",
        "title": "colName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "colName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colNull",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Bool",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Column",
        "fct-type": "function",
        "title": "colNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "colNull",
        "normalized": "",
        "package": "groundhog",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:colType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DbTypePrimitive",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Column",
        "fct-type": "function",
        "title": "colType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "colType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareDefaults",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e String -\u003e Bool",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "compareDefaults"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "compareDefaults",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "groundhog",
        "partial": "Defaults",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareRefs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "(Maybe String, Reference) -\u003e (Maybe String, Reference) -\u003e Bool",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "compareRefs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "compareRefs",
        "normalized": "(Maybe String,Reference)-\u003e(Maybe String,Reference)-\u003eBool",
        "package": "groundhog",
        "partial": "Refs",
        "signature": "(Maybe String,Reference)-\u003e(Maybe String,Reference)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareTypes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "DbTypePrimitive -\u003e DbTypePrimitive -\u003e Bool",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "compareTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "compareTypes",
        "normalized": "DbTypePrimitive-\u003eDbTypePrimitive-\u003eBool",
        "package": "groundhog",
        "partial": "Types",
        "signature": "DbTypePrimitive-\u003eDbTypePrimitive-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:compareUniqs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "UniqueDef' -\u003e UniqueDef' -\u003e Bool",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "compareUniqs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "compareUniqs",
        "normalized": "UniqueDef'-\u003eUniqueDef'-\u003eBool",
        "package": "groundhog",
        "partial": "Uniqs",
        "signature": "UniqueDef'-\u003eUniqueDef'-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:defaultMigConstr",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "MigrationPack m -\u003e EntityDef -\u003e ConstructorDef -\u003e m (Bool, SingleMigration)",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#defaultMigConstr",
        "fct-type": "function",
        "title": "defaultMigConstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "defaultMigConstr",
        "normalized": "MigrationPack a-\u003eEntityDef-\u003eConstructorDef-\u003ea(Bool,SingleMigration)",
        "package": "groundhog",
        "partial": "Mig Constr",
        "signature": "MigrationPack m-\u003eEntityDef-\u003eConstructorDef-\u003em(Bool,SingleMigration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:defaultPriority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Int",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "defaultPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "defaultPriority",
        "normalized": "",
        "package": "groundhog",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:defaultReferenceActionType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "ReferenceActionType",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "defaultReferenceActionType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "defaultReferenceActionType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Reference Action Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:escape",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "escape"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "escape",
        "normalized": "String-\u003eString",
        "package": "groundhog",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:getAlters",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "MigrationPack m-\u003e TableInfo-\u003e TableInfo-\u003e [AlterTable]",
        "fct-type": "function",
        "title": "getAlters"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "getAlters",
        "normalized": "MigrationPack a-\u003eTableInfo-\u003eTableInfo-\u003e[AlterTable]",
        "package": "groundhog",
        "partial": "Alters",
        "signature": "MigrationPack m-\u003eTableInfo-\u003eTableInfo-\u003e[AlterTable]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:listTableTriggers",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "listTableTriggers",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#listTableTriggers",
        "fct-type": "method",
        "title": "listTableTriggers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "listTableTriggers",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table Triggers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:listTables",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "listTables",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#listTables",
        "fct-type": "method",
        "title": "listTables"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "listTables",
        "normalized": "",
        "package": "groundhog",
        "partial": "Tables",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:mainTableId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "mainTableId"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "mainTableId",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migConstr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "MigrationPack m -\u003e EntityDef -\u003e ConstructorDef -\u003e m (Bool, SingleMigration)",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "migConstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "migConstr",
        "normalized": "MigrationPack a-\u003eEntityDef-\u003eConstructorDef-\u003ea(Bool,SingleMigration)",
        "package": "groundhog",
        "partial": "Constr",
        "signature": "MigrationPack m-\u003eEntityDef-\u003eConstructorDef-\u003em(Bool,SingleMigration)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migTriggerOnDelete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String -\u003e String -\u003e [(String, String)] -\u003e m (Bool, [AlterDB])",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "migTriggerOnDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "migTriggerOnDelete",
        "normalized": "Maybe String-\u003eString-\u003e[(String,String)]-\u003ea(Bool,[AlterDB])",
        "package": "groundhog",
        "partial": "Trigger On Delete",
        "signature": "Maybe String-\u003eString-\u003e[(String,String)]-\u003em(Bool,[AlterDB])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migTriggerOnUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String -\u003e String -\u003e [(String, String)] -\u003e m [(Bool, [AlterDB])]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "migTriggerOnUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "migTriggerOnUpdate",
        "normalized": "Maybe String-\u003eString-\u003e[(String,String)]-\u003ea[(Bool,[AlterDB])]",
        "package": "groundhog",
        "partial": "Trigger On Update",
        "signature": "Maybe String-\u003eString-\u003e[(String,String)]-\u003em[(Bool,[AlterDB])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migrateEntity",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "MigrationPack m -\u003e EntityDef -\u003e m SingleMigration",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#migrateEntity",
        "fct-type": "function",
        "title": "migrateEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "migrateEntity",
        "normalized": "MigrationPack a-\u003eEntityDef-\u003ea SingleMigration",
        "package": "groundhog",
        "partial": "Entity",
        "signature": "MigrationPack m-\u003eEntityDef-\u003em SingleMigration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migrateList",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "MigrationPack m -\u003e DbType -\u003e m SingleMigration",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#migrateList",
        "fct-type": "function",
        "title": "migrateList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "migrateList",
        "normalized": "MigrationPack a-\u003eDbType-\u003ea SingleMigration",
        "package": "groundhog",
        "partial": "List",
        "signature": "MigrationPack m-\u003eDbType-\u003em SingleMigration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:migrateRecursively",
      "description": {
        "fct-descr": "\u003cp\u003eCreate migration for a given entity and all entities it depends on.\n The stateful Map is used to avoid duplicate migrations when an entity type\n occurs several times in a datatype\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "(EntityDef -\u003e m SingleMigration)-\u003e (DbType -\u003e m SingleMigration)-\u003e v-\u003e StateT NamedMigrations m ()",
        "fct-type": "function",
        "title": "migrateRecursively"
      },
      "index": {
        "description": "Create migration for given entity and all entities it depends on The stateful Map is used to avoid duplicate migrations when an entity type occurs several times in datatype",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "migrateRecursively",
        "normalized": "(EntityDef-\u003ea SingleMigration)-\u003e(DbType-\u003ea SingleMigration)-\u003eb-\u003eStateT NamedMigrations a()",
        "package": "groundhog",
        "partial": "Recursively",
        "signature": "(EntityDef-\u003em SingleMigration)-\u003e(DbType-\u003em SingleMigration)-\u003ev-\u003eStateT NamedMigrations m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:mkColumns",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "(String, DbType) -\u003e [Column] -\u003e [Column]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#mkColumns",
        "fct-type": "function",
        "title": "mkColumns"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "mkColumns",
        "normalized": "(String,DbType)-\u003e[Column]-\u003e[Column]",
        "package": "groundhog",
        "partial": "Columns",
        "signature": "(String,DbType)-\u003e[Column]-\u003e[Column]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:primaryKeyTypeName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "primaryKeyTypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "primaryKeyTypeName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Key Type Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:readReferenceAction",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e Maybe ReferenceActionType",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#readReferenceAction",
        "fct-type": "function",
        "title": "readReferenceAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "readReferenceAction",
        "normalized": "String-\u003eMaybe ReferenceActionType",
        "package": "groundhog",
        "partial": "Reference Action",
        "signature": "String-\u003eMaybe ReferenceActionType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referenceOnDelete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe ReferenceActionType",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "function",
        "title": "referenceOnDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "referenceOnDelete",
        "normalized": "",
        "package": "groundhog",
        "partial": "On Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referenceOnUpdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe ReferenceActionType",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "function",
        "title": "referenceOnUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "referenceOnUpdate",
        "normalized": "",
        "package": "groundhog",
        "partial": "On Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referencedColumns",
      "description": {
        "fct-descr": "\u003cp\u003echild column, parent column\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "function",
        "title": "referencedColumns"
      },
      "index": {
        "description": "child column parent column",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "referencedColumns",
        "normalized": "[(String,String)]",
        "package": "groundhog",
        "partial": "Columns",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referencedTableName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "function",
        "title": "referencedTableName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "referencedTableName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:referencedTableSchema",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#Reference",
        "fct-type": "function",
        "title": "referencedTableSchema"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "referencedTableSchema",
        "normalized": "",
        "package": "groundhog",
        "partial": "Table Schema",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:showAlterDb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "AlterDB -\u003e SingleMigration",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "showAlterDb"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "showAlterDb",
        "normalized": "AlterDB-\u003eSingleMigration",
        "package": "groundhog",
        "partial": "Alter Db",
        "signature": "AlterDB-\u003eSingleMigration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:showColumn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Column -\u003e String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#MigrationPack",
        "fct-type": "function",
        "title": "showColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "showColumn",
        "normalized": "Column-\u003eString",
        "package": "groundhog",
        "partial": "Column",
        "signature": "Column-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:showReferenceAction",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "ReferenceActionType -\u003e String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#showReferenceAction",
        "fct-type": "function",
        "title": "showReferenceAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "showReferenceAction",
        "normalized": "ReferenceActionType-\u003eString",
        "package": "groundhog",
        "partial": "Reference Action",
        "signature": "ReferenceActionType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:tableColumns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "[Column]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
        "fct-type": "function",
        "title": "tableColumns"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "tableColumns",
        "normalized": "[Column]",
        "package": "groundhog",
        "partial": "Columns",
        "signature": "[Column]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:tableReferences",
      "description": {
        "fct-descr": "\u003cp\u003econstraint name and reference\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "[(Maybe String, Reference)]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
        "fct-type": "function",
        "title": "tableReferences"
      },
      "index": {
        "description": "constraint name and reference",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "tableReferences",
        "normalized": "[(Maybe String,Reference)]",
        "package": "groundhog",
        "partial": "References",
        "signature": "[(Maybe String,Reference)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:tableUniques",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "[UniqueDef']",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#TableInfo",
        "fct-type": "function",
        "title": "tableUniques"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "tableUniques",
        "normalized": "[UniqueDef']",
        "package": "groundhog",
        "partial": "Uniques",
        "signature": "[UniqueDef']"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:uniqueDefColumns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "[String]",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
        "fct-type": "function",
        "title": "uniqueDefColumns"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "uniqueDefColumns",
        "normalized": "[String]",
        "package": "groundhog",
        "partial": "Def Columns",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:uniqueDefName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
        "fct-type": "function",
        "title": "uniqueDefName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "uniqueDefName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Def Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Migration.html#v:uniqueDefType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Migration",
        "fct-package": "groundhog",
        "fct-signature": "UniqueType",
        "fct-source": "src/Database-Groundhog-Generic-Migration.html#UniqueDef%27",
        "fct-type": "function",
        "title": "uniqueDefType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Migration",
        "module": "Database.Groundhog.Generic.Migration",
        "name": "uniqueDefType",
        "normalized": "",
        "package": "groundhog",
        "partial": "Def Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module contains generic versions of PersistBackend functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html",
        "fct-type": "module",
        "title": "PersistBackendHelpers"
      },
      "index": {
        "description": "This helper module contains generic versions of PersistBackend functions",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "PersistBackendHelpers",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Backend Helpers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:count",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e Cond db r -\u003e m Int",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "count",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003e(Cond e f-\u003eMaybe(RenderS e f))-\u003eCond e f-\u003ec Int",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003eCond db r-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:countAll",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e v -\u003e m Int",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#countAll",
        "fct-type": "function",
        "title": "countAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "countAll",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003ee-\u003ec Int",
        "package": "groundhog",
        "partial": "All",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003ev-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:delete",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e Cond db r -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "delete",
        "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003e(Cond b c-\u003eMaybe(RenderS b c))-\u003eCond b c-\u003ea()",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003eCond db r-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:deleteByKey",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e Key v BackendSpecific -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#deleteByKey",
        "fct-type": "function",
        "title": "deleteByKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "deleteByKey",
        "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003eKey b BackendSpecific-\u003ea()",
        "package": "groundhog",
        "partial": "By Key",
        "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003eKey v BackendSpecific-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:get",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Key v BackendSpecific -\u003e m (Maybe v)",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "get",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eKey e BackendSpecific-\u003ec(Maybe e)",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eKey v BackendSpecific-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:getBy",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8)-\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a)-\u003e Key v (Unique u)-\u003e m (Maybe v)",
        "fct-type": "function",
        "title": "getBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "getBy",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eKey e(Unique f)-\u003ec(Maybe e)",
        "package": "groundhog",
        "partial": "By",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eKey v(Unique u)-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:insertBy",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Bool -\u003e u (UniqueMarker v) -\u003e v -\u003e m (Either (AutoKey v) (AutoKey v))",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "insertBy",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eBool-\u003ee(UniqueMarker f)-\u003ef-\u003ec(Either(AutoKey f)(AutoKey f))",
        "package": "groundhog",
        "partial": "By",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eBool-\u003eu(UniqueMarker v)-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:insertByAll",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8)-\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a)-\u003e Bool-\u003e v-\u003e m (Either (AutoKey v) (AutoKey v))",
        "fct-type": "function",
        "title": "insertByAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "insertByAll",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eBool-\u003ee-\u003ec(Either(AutoKey e)(AutoKey e))",
        "package": "groundhog",
        "partial": "By All",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eBool-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:project",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Utf8 -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e p -\u003e opts -\u003e m [a']",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#project",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "project",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eUtf-\u003e(Cond e f-\u003eMaybe(RenderS e f))-\u003eg-\u003eh-\u003ec[i]",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eUtf-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003ep-\u003eopts-\u003em[a']"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:replace",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e (Bool -\u003e Utf8 -\u003e ConstructorDef -\u003e [PersistValue] -\u003e RenderS db r) -\u003e Key v BackendSpecific -\u003e v -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "replace",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003e(Utf-\u003e[PersistValue]-\u003ec())-\u003e(Bool-\u003eUtf-\u003eConstructorDef-\u003e[PersistValue]-\u003eRenderS e f)-\u003eKey g BackendSpecific-\u003eg-\u003ec()",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003e(Bool-\u003eUtf-\u003eConstructorDef-\u003e[PersistValue]-\u003eRenderS db r)-\u003eKey v BackendSpecific-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:select",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e Utf8 -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e opts -\u003e m [v]",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "select",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003eUtf-\u003e(Cond e f-\u003eMaybe(RenderS e f))-\u003eg-\u003ec[h]",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003eUtf-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003eopts-\u003em[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:selectAll",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (forall a.  Utf8 -\u003e [DbType] -\u003e [PersistValue] -\u003e (RowPopper m -\u003e m a) -\u003e m a) -\u003e m [(AutoKey v, v)]",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#selectAll",
        "fct-type": "function",
        "title": "selectAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "selectAll",
        "normalized": "(Utf-\u003eUtf)-\u003e(a b Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper c-\u003ec d)-\u003ec d)-\u003ec[(AutoKey e,e)]",
        "package": "groundhog",
        "partial": "All",
        "signature": "(Utf-\u003eUtf)-\u003e(forall a. Utf-\u003e[DbType]-\u003e[PersistValue]-\u003e(RowPopper m-\u003em a)-\u003em a)-\u003em[(AutoKey v,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-PersistBackendHelpers.html#v:update",
      "description": {
        "fct-module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (Utf8 -\u003e [PersistValue] -\u003e m ()) -\u003e (Cond db r -\u003e Maybe (RenderS db r)) -\u003e [Update db r] -\u003e Cond db r -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic-PersistBackendHelpers.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic PersistBackendHelpers",
        "module": "Database.Groundhog.Generic.PersistBackendHelpers",
        "name": "update",
        "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003ea())-\u003e(Cond b c-\u003eMaybe(RenderS b c))-\u003e[Update b c]-\u003eCond b c-\u003ea()",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003e[PersistValue]-\u003em())-\u003e(Cond db r-\u003eMaybe(RenderS db r))-\u003e[Update db r]-\u003eCond db r-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module has common SQL functions and operators which are supported in the most SQL databases\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "This module has common SQL functions and operators which are supported in the most SQL databases",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "groundhog",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#t:SqlDb",
      "description": {
        "fct-descr": "\u003cp\u003eThis class distinguishes databases which support SQL-specific expressions. It contains ad hoc members for features whose syntax differs across the databases.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#SqlDb",
        "fct-type": "class",
        "title": "SqlDb"
      },
      "index": {
        "description": "This class distinguishes databases which support SQL-specific expressions It contains ad hoc members for features whose syntax differs across the databases",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "SqlDb",
        "normalized": "",
        "package": "groundhog",
        "partial": "Sql Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:append",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Expr db r String",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#append",
        "fct-type": "method",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "append",
        "normalized": "a-\u003eb-\u003eExpr c d String",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr db r String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:in_",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e [b] -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#in_",
        "fct-type": "function",
        "title": "in_"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "in_",
        "normalized": "a-\u003e[b]-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003e[b]-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:like",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e String -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#like",
        "fct-type": "function",
        "title": "like"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "like",
        "normalized": "a-\u003eString-\u003eCond b c",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eString-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:lower",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Expr db r String",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#lower",
        "fct-type": "function",
        "title": "lower"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "lower",
        "normalized": "a-\u003eExpr b c String",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eExpr db r String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:notIn_",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e [b] -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#notIn_",
        "fct-type": "function",
        "title": "notIn_"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "notIn_",
        "normalized": "a-\u003e[b]-\u003eCond c d",
        "package": "groundhog",
        "partial": "In",
        "signature": "a-\u003e[b]-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:notLike",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e String -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#notLike",
        "fct-type": "function",
        "title": "notLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "notLike",
        "normalized": "a-\u003eString-\u003eCond b c",
        "package": "groundhog",
        "partial": "Like",
        "signature": "a-\u003eString-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:toArith",
      "description": {
        "fct-descr": "\u003cp\u003eConvert field to an arithmetic value. It is kept for compatibility with older Groundhog versions and can be replaced with liftExpr.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e Expr db r a'",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#toArith",
        "fct-type": "function",
        "title": "toArith"
      },
      "index": {
        "description": "Convert field to an arithmetic value It is kept for compatibility with older Groundhog versions and can be replaced with liftExpr",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "toArith",
        "normalized": "a-\u003eExpr b c d",
        "package": "groundhog",
        "partial": "Arith",
        "signature": "f-\u003eExpr db r a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql-Functions.html#v:upper",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql.Functions",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Expr db r String",
        "fct-source": "src/Database-Groundhog-Generic-Sql-Functions.html#upper",
        "fct-type": "function",
        "title": "upper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql Functions",
        "module": "Database.Groundhog.Generic.Sql.Functions",
        "name": "upper",
        "normalized": "a-\u003eExpr b c String",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eExpr db r String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions which are used only for backends creation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html",
        "fct-type": "module",
        "title": "Sql"
      },
      "index": {
        "description": "This module defines the functions which are used only for backends creation",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "Sql",
        "normalized": "",
        "package": "groundhog",
        "partial": "Sql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:RenderS",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
        "fct-type": "data",
        "title": "RenderS"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "RenderS",
        "normalized": "",
        "package": "groundhog",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:Snippet",
      "description": {
        "fct-descr": "\u003cp\u003eEscape function, priority of the outer operator. The result is a list for the embedded data which may expand to several RenderS.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#Snippet",
        "fct-type": "newtype",
        "title": "Snippet"
      },
      "index": {
        "description": "Escape function priority of the outer operator The result is list for the embedded data which may expand to several RenderS",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "Snippet",
        "normalized": "",
        "package": "groundhog",
        "partial": "Snippet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:SqlDb",
      "description": {
        "fct-descr": "\u003cp\u003eThis class distinguishes databases which support SQL-specific expressions. It contains ad hoc members for features whose syntax differs across the databases.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#SqlDb",
        "fct-type": "class",
        "title": "SqlDb"
      },
      "index": {
        "description": "This class distinguishes databases which support SQL-specific expressions It contains ad hoc members for features whose syntax differs across the databases",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "SqlDb",
        "normalized": "",
        "package": "groundhog",
        "partial": "Sql Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:StringLike",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#StringLike",
        "fct-type": "class",
        "title": "StringLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "StringLike",
        "normalized": "",
        "package": "groundhog",
        "partial": "String Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#t:Utf8",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for incremental building SQL queries\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#Utf8",
        "fct-type": "newtype",
        "title": "Utf8"
      },
      "index": {
        "description": "Datatype for incremental building SQL queries",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "Utf8",
        "normalized": "",
        "package": "groundhog",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "groundhog",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:RenderS",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "RenderS",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
        "fct-type": "function",
        "title": "RenderS"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "RenderS",
        "normalized": "",
        "package": "groundhog",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:Snippet",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Snippet ((Utf8 -\u003e Utf8) -\u003e Int -\u003e [RenderS db r])",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#Snippet",
        "fct-type": "function",
        "title": "Snippet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "Snippet",
        "normalized": "Snippet((Utf-\u003eUtf)-\u003eInt-\u003e[RenderS a b])",
        "package": "groundhog",
        "partial": "Snippet",
        "signature": "Snippet((Utf-\u003eUtf)-\u003eInt-\u003e[RenderS db r])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:Utf8",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Utf8 Builder",
        "fct-source": "src/Database-Groundhog-Core.html#Utf8",
        "fct-type": "function",
        "title": "Utf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "Utf8",
        "normalized": "",
        "package": "groundhog",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:append",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Expr db r String",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#append",
        "fct-type": "method",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "append",
        "normalized": "a-\u003eb-\u003eExpr c d String",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eExpr db r String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:commasJoin",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "[s] -\u003e s",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#commasJoin",
        "fct-type": "function",
        "title": "commasJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "commasJoin",
        "normalized": "[a]-\u003ea",
        "package": "groundhog",
        "partial": "Join",
        "signature": "[s]-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:defaultShowPrim",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "PersistValue -\u003e String",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#defaultShowPrim",
        "fct-type": "function",
        "title": "defaultShowPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "defaultShowPrim",
        "normalized": "PersistValue-\u003eString",
        "package": "groundhog",
        "partial": "Show Prim",
        "signature": "PersistValue-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:flatten",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e (String, DbType) -\u003e [Utf8] -\u003e [Utf8]",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "flatten",
        "normalized": "(Utf-\u003eUtf)-\u003e(String,DbType)-\u003e[Utf]-\u003e[Utf]",
        "package": "groundhog",
        "partial": "",
        "signature": "(Utf-\u003eUtf)-\u003e(String,DbType)-\u003e[Utf]-\u003e[Utf]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:fromChar",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Char -\u003e a",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#fromChar",
        "fct-type": "method",
        "title": "fromChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "fromChar",
        "normalized": "Char-\u003ea",
        "package": "groundhog",
        "partial": "Char",
        "signature": "Char-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:fromString",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e a",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "groundhog",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:fromUtf8",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Utf8 -\u003e ByteString",
        "fct-source": "src/Database-Groundhog-Core.html#fromUtf8",
        "fct-type": "function",
        "title": "fromUtf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "fromUtf8",
        "normalized": "Utf-\u003eByteString",
        "package": "groundhog",
        "partial": "Utf",
        "signature": "Utf-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:function",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e [UntypedExpr db r] -\u003e Snippet db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#function",
        "fct-type": "function",
        "title": "function"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "function",
        "normalized": "String-\u003e[UntypedExpr a b]-\u003eSnippet a b",
        "package": "groundhog",
        "partial": "",
        "signature": "String-\u003e[UntypedExpr db r]-\u003eSnippet db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:getQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Utf8",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
        "fct-type": "function",
        "title": "getQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "getQuery",
        "normalized": "",
        "package": "groundhog",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:getValues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "[PersistValue] -\u003e [PersistValue]",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#RenderS",
        "fct-type": "function",
        "title": "getValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "getValues",
        "normalized": "[PersistValue]-\u003e[PersistValue]",
        "package": "groundhog",
        "partial": "Values",
        "signature": "[PersistValue]-\u003e[PersistValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:intercalateS",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "s -\u003e [s] -\u003e s",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#intercalateS",
        "fct-type": "function",
        "title": "intercalateS"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "intercalateS",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "groundhog",
        "partial": "",
        "signature": "s-\u003e[s]-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:liftExpr",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Expr db r b",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#liftExpr",
        "fct-type": "function",
        "title": "liftExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "liftExpr",
        "normalized": "a-\u003eExpr b c d",
        "package": "groundhog",
        "partial": "Expr",
        "signature": "a-\u003eExpr db r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:mainTableName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns escaped main table name optionally qualified with schema\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(s -\u003e s) -\u003e EntityDef -\u003e s",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#mainTableName",
        "fct-type": "function",
        "title": "mainTableName"
      },
      "index": {
        "description": "Returns escaped main table name optionally qualified with schema",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "mainTableName",
        "normalized": "(a-\u003ea)-\u003eEntityDef-\u003ea",
        "package": "groundhog",
        "partial": "Table Name",
        "signature": "(s-\u003es)-\u003eEntityDef-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:operator",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Int -\u003e String -\u003e a -\u003e b -\u003e Snippet db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#operator",
        "fct-type": "function",
        "title": "operator"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "operator",
        "normalized": "Int-\u003eString-\u003ea-\u003eb-\u003eSnippet c d",
        "package": "groundhog",
        "partial": "",
        "signature": "Int-\u003eString-\u003ea-\u003eb-\u003eSnippet db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:parens",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "Int -\u003e Int -\u003e RenderS db r -\u003e RenderS db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "parens",
        "normalized": "Int-\u003eInt-\u003eRenderS a b-\u003eRenderS a b",
        "package": "groundhog",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eRenderS db r-\u003eRenderS db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderChain",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e FieldChain -\u003e [Utf8] -\u003e [Utf8]",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderChain",
        "fct-type": "function",
        "title": "renderChain"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderChain",
        "normalized": "(Utf-\u003eUtf)-\u003eFieldChain-\u003e[Utf]-\u003e[Utf]",
        "package": "groundhog",
        "partial": "Chain",
        "signature": "(Utf-\u003eUtf)-\u003eFieldChain-\u003e[Utf]-\u003e[Utf]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderCond",
      "description": {
        "fct-descr": "\u003cp\u003eRenders conditions for SQL backend. Returns Nothing if the fields don't have any columns.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8)-\u003e (Utf8 -\u003e Utf8 -\u003e Utf8)-\u003e (Utf8 -\u003e Utf8 -\u003e Utf8)-\u003e Cond db r-\u003e Maybe (RenderS db r)",
        "fct-type": "function",
        "title": "renderCond"
      },
      "index": {
        "description": "Renders conditions for SQL backend Returns Nothing if the fields don have any columns",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderCond",
        "normalized": "(Utf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003eCond a b-\u003eMaybe(RenderS a b)",
        "package": "groundhog",
        "partial": "Cond",
        "signature": "(Utf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003e(Utf-\u003eUtf-\u003eUtf)-\u003eCond db r-\u003eMaybe(RenderS db r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderExpr",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e UntypedExpr db r -\u003e RenderS db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderExpr",
        "fct-type": "function",
        "title": "renderExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderExpr",
        "normalized": "(Utf-\u003eUtf)-\u003eUntypedExpr a b-\u003eRenderS a b",
        "package": "groundhog",
        "partial": "Expr",
        "signature": "(Utf-\u003eUtf)-\u003eUntypedExpr db r-\u003eRenderS db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderExprExtended",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e Int -\u003e UntypedExpr db r -\u003e [RenderS db r]",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderExprExtended",
        "fct-type": "function",
        "title": "renderExprExtended"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderExprExtended",
        "normalized": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr a b-\u003e[RenderS a b]",
        "package": "groundhog",
        "partial": "Expr Extended",
        "signature": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr db r-\u003e[RenderS db r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderExprPriority",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e Int -\u003e UntypedExpr db r -\u003e RenderS db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderExprPriority",
        "fct-type": "function",
        "title": "renderExprPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderExprPriority",
        "normalized": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr a b-\u003eRenderS a b",
        "package": "groundhog",
        "partial": "Expr Priority",
        "signature": "(Utf-\u003eUtf)-\u003eInt-\u003eUntypedExpr db r-\u003eRenderS db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderFields",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e [(String, DbType)] -\u003e Utf8",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderFields",
        "fct-type": "function",
        "title": "renderFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderFields",
        "normalized": "(Utf-\u003eUtf)-\u003e[(String,DbType)]-\u003eUtf",
        "package": "groundhog",
        "partial": "Fields",
        "signature": "(Utf-\u003eUtf)-\u003e[(String,DbType)]-\u003eUtf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderOrders",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "forall db r.  (Utf8 -\u003e Utf8) -\u003e [Order db r] -\u003e Utf8",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderOrders",
        "fct-type": "function",
        "title": "renderOrders"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderOrders",
        "normalized": "a b c(Utf-\u003eUtf)-\u003e[Order b d]-\u003eUtf",
        "package": "groundhog",
        "partial": "Orders",
        "signature": "forall db r.(Utf-\u003eUtf)-\u003e[Order db r]-\u003eUtf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "PersistValue -\u003e RenderS db r",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderPersistValue",
        "fct-type": "function",
        "title": "renderPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderPersistValue",
        "normalized": "PersistValue-\u003eRenderS a b",
        "package": "groundhog",
        "partial": "Persist Value",
        "signature": "PersistValue-\u003eRenderS db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:renderUpdates",
      "description": {
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(Utf8 -\u003e Utf8) -\u003e [Update db r] -\u003e Maybe (RenderS db r)",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#renderUpdates",
        "fct-type": "function",
        "title": "renderUpdates"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "renderUpdates",
        "normalized": "(Utf-\u003eUtf)-\u003e[Update a b]-\u003eMaybe(RenderS a b)",
        "package": "groundhog",
        "partial": "Updates",
        "signature": "(Utf-\u003eUtf)-\u003e[Update db r]-\u003eMaybe(RenderS db r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic-Sql.html#v:tableName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns escaped table name optionally qualified with schema\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic.Sql",
        "fct-package": "groundhog",
        "fct-signature": "(s -\u003e s) -\u003e EntityDef -\u003e ConstructorDef -\u003e s",
        "fct-source": "src/Database-Groundhog-Generic-Sql.html#tableName",
        "fct-type": "function",
        "title": "tableName"
      },
      "index": {
        "description": "Returns escaped table name optionally qualified with schema",
        "hierarchy": "Database Groundhog Generic Sql",
        "module": "Database.Groundhog.Generic.Sql",
        "name": "tableName",
        "normalized": "(a-\u003ea)-\u003eEntityDef-\u003eConstructorDef-\u003ea",
        "package": "groundhog",
        "partial": "Name",
        "signature": "(s-\u003es)-\u003eEntityDef-\u003eConstructorDef-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module is intended for use by the backend creators\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "This helper module is intended for use by the backend creators",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "groundhog",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#t:HasConn",
      "description": {
        "fct-descr": "\u003cp\u003eThis class helps to shorten the type signatures of user monadic code.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Generic.html#HasConn",
        "fct-type": "class",
        "title": "HasConn"
      },
      "index": {
        "description": "This class helps to shorten the type signatures of user monadic code",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "HasConn",
        "normalized": "",
        "package": "groundhog",
        "partial": "Has Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#t:PSFieldDef",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "data",
        "title": "PSFieldDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "PSFieldDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "PSField Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:PSFieldDef",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "PSFieldDef",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "PSFieldDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "PSFieldDef",
        "normalized": "",
        "package": "groundhog",
        "partial": "PSField Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:applyDbTypeSettings",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "PSFieldDef -\u003e DbType -\u003e DbType",
        "fct-source": "src/Database-Groundhog-Generic.html#applyDbTypeSettings",
        "fct-type": "function",
        "title": "applyDbTypeSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "applyDbTypeSettings",
        "normalized": "PSFieldDef-\u003eDbType-\u003eDbType",
        "package": "groundhog",
        "partial": "Db Type Settings",
        "signature": "PSFieldDef-\u003eDbType-\u003eDbType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:bracket",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "groundhog",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:createMigration",
      "description": {
        "fct-descr": "\u003cp\u003eProduce the migrations but not execute them. Fails when an unsafe migration occurs.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Migration m -\u003e m NamedMigrations",
        "fct-source": "src/Database-Groundhog-Generic.html#createMigration",
        "fct-type": "function",
        "title": "createMigration"
      },
      "index": {
        "description": "Produce the migrations but not execute them Fails when an unsafe migration occurs",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "createMigration",
        "normalized": "Migration a-\u003ea NamedMigrations",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "Migration m-\u003em NamedMigrations"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:defaultMigrationLogger",
      "description": {
        "fct-descr": "\u003cp\u003ePrints the queries to stdout\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Database-Groundhog-Generic.html#defaultMigrationLogger",
        "fct-type": "function",
        "title": "defaultMigrationLogger"
      },
      "index": {
        "description": "Prints the queries to stdout",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "defaultMigrationLogger",
        "normalized": "String-\u003eIO()",
        "package": "groundhog",
        "partial": "Migration Logger",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:executeMigration",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the migrations and log them. \n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e NamedMigrations -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#executeMigration",
        "fct-type": "function",
        "title": "executeMigration"
      },
      "index": {
        "description": "Execute the migrations and log them",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "executeMigration",
        "normalized": "(String-\u003eIO())-\u003eNamedMigrations-\u003ea()",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "(String-\u003eIO())-\u003eNamedMigrations-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:executeMigrationUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eExecute migrations and log them. Executes the unsafe migrations without warnings\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e NamedMigrations -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#executeMigrationUnsafe",
        "fct-type": "function",
        "title": "executeMigrationUnsafe"
      },
      "index": {
        "description": "Execute migrations and log them Executes the unsafe migrations without warnings",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "executeMigrationUnsafe",
        "normalized": "(String-\u003eIO())-\u003eNamedMigrations-\u003ea()",
        "package": "groundhog",
        "partial": "Migration Unsafe",
        "signature": "(String-\u003eIO())-\u003eNamedMigrations-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:failMessage",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e [PersistValue] -\u003e String",
        "fct-source": "src/Database-Groundhog-Generic.html#failMessage",
        "fct-type": "function",
        "title": "failMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "failMessage",
        "normalized": "a-\u003e[PersistValue]-\u003eString",
        "package": "groundhog",
        "partial": "Message",
        "signature": "a-\u003e[PersistValue]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:finally",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "m a-\u003e m b-\u003e m a",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "finally",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "groundhog",
        "partial": "",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:findOne",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e (a -\u003e c) -\u003e (b -\u003e c) -\u003e a -\u003e [b] -\u003e b",
        "fct-source": "src/Database-Groundhog-Generic.html#findOne",
        "fct-type": "function",
        "title": "findOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "findOne",
        "normalized": "String-\u003e(a-\u003eb)-\u003e(c-\u003eb)-\u003ea-\u003e[c]-\u003ec",
        "package": "groundhog",
        "partial": "One",
        "signature": "String-\u003e(a-\u003ec)-\u003e(b-\u003ec)-\u003ea-\u003e[b]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:fromPersistValuesUnique",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "u (UniqueMarker v) -\u003e [PersistValue] -\u003e m (v, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#fromPersistValuesUnique",
        "fct-type": "function",
        "title": "fromPersistValuesUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "fromPersistValuesUnique",
        "normalized": "a(UniqueMarker b)-\u003e[PersistValue]-\u003ec(b,[PersistValue])",
        "package": "groundhog",
        "partial": "Persist Values Unique",
        "signature": "u(UniqueMarker v)-\u003e[PersistValue]-\u003em(v,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:fromSinglePersistValueAutoKey",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "PersistValue -\u003e m v",
        "fct-source": "src/Database-Groundhog-Generic.html#fromSinglePersistValueAutoKey",
        "fct-type": "function",
        "title": "fromSinglePersistValueAutoKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "fromSinglePersistValueAutoKey",
        "normalized": "PersistValue-\u003ea b",
        "package": "groundhog",
        "partial": "Single Persist Value Auto Key",
        "signature": "PersistValue-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:fromSinglePersistValueUnique",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "u (UniqueMarker v) -\u003e PersistValue -\u003e m v",
        "fct-source": "src/Database-Groundhog-Generic.html#fromSinglePersistValueUnique",
        "fct-type": "function",
        "title": "fromSinglePersistValueUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "fromSinglePersistValueUnique",
        "normalized": "a(UniqueMarker b)-\u003ePersistValue-\u003ec b",
        "package": "groundhog",
        "partial": "Single Persist Value Unique",
        "signature": "u(UniqueMarker v)-\u003ePersistValue-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:getQueries",
      "description": {
        "fct-descr": "\u003cp\u003eReturns either a list of errors in migration or a list of queries\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Bool-\u003e SingleMigration-\u003e Either [String] [String]",
        "fct-type": "function",
        "title": "getQueries"
      },
      "index": {
        "description": "Returns either list of errors in migration or list of queries",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "getQueries",
        "normalized": "Bool-\u003eSingleMigration-\u003eEither[String][String]",
        "package": "groundhog",
        "partial": "Queries",
        "signature": "Bool-\u003eSingleMigration-\u003eEither[String][String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:haveSameElems",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e [a] -\u003e [b] -\u003e Bool",
        "fct-source": "src/Database-Groundhog-Generic.html#haveSameElems",
        "fct-type": "function",
        "title": "haveSameElems"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "haveSameElems",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eBool",
        "package": "groundhog",
        "partial": "Same Elems",
        "signature": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:isSimple",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "[ConstructorDef] -\u003e Bool",
        "fct-source": "src/Database-Groundhog-Generic.html#isSimple",
        "fct-type": "function",
        "title": "isSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "isSimple",
        "normalized": "[ConstructorDef]-\u003eBool",
        "package": "groundhog",
        "partial": "Simple",
        "signature": "[ConstructorDef]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:mapAllRows",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "([PersistValue] -\u003e m a) -\u003e RowPopper m -\u003e m [a]",
        "fct-source": "src/Database-Groundhog-Generic.html#mapAllRows",
        "fct-type": "function",
        "title": "mapAllRows"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "mapAllRows",
        "normalized": "([PersistValue]-\u003ea b)-\u003eRowPopper a-\u003ea[b]",
        "package": "groundhog",
        "partial": "All Rows",
        "signature": "([PersistValue]-\u003em a)-\u003eRowPopper m-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:matchElements",
      "description": {
        "fct-descr": "\u003cp\u003eReturns only old elements, only new elements, and matched pairs (old, new).\n The new ones exist only in datatype, the old are present only in DB, match is typically by name (the properties of the matched elements may differ).\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e [a] -\u003e [b] -\u003e ([a], [b], [(a, b)])",
        "fct-source": "src/Database-Groundhog-Generic.html#matchElements",
        "fct-type": "function",
        "title": "matchElements"
      },
      "index": {
        "description": "Returns only old elements only new elements and matched pairs old new The new ones exist only in datatype the old are present only in DB match is typically by name the properties of the matched elements may differ",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "matchElements",
        "normalized": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003e([a],[b],[(a,b)])",
        "package": "groundhog",
        "partial": "Elements",
        "signature": "(a-\u003eb-\u003eBool)-\u003e[a]-\u003e[b]-\u003e([a],[b],[(a,b)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:mergeMigrations",
      "description": {
        "fct-descr": "\u003cp\u003eJoins the migrations. The result is either all error messages or all queries\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "[SingleMigration] -\u003e SingleMigration",
        "fct-source": "src/Database-Groundhog-Generic.html#mergeMigrations",
        "fct-type": "function",
        "title": "mergeMigrations"
      },
      "index": {
        "description": "Joins the migrations The result is either all error messages or all queries",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "mergeMigrations",
        "normalized": "[SingleMigration]-\u003eSingleMigration",
        "package": "groundhog",
        "partial": "Migrations",
        "signature": "[SingleMigration]-\u003eSingleMigration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:onException",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/Database-Groundhog-Generic.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "groundhog",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:phantomDb",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "m (Proxy (PhantomDb m))",
        "fct-source": "src/Database-Groundhog-Generic.html#phantomDb",
        "fct-type": "function",
        "title": "phantomDb"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "phantomDb",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primFromPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "[PersistValue] -\u003e m (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#primFromPersistValue",
        "fct-type": "function",
        "title": "primFromPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "primFromPersistValue",
        "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
        "package": "groundhog",
        "partial": "From Persist Value",
        "signature": "[PersistValue]-\u003em(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primFromPurePersistValues",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e [PersistValue] -\u003e (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#primFromPurePersistValues",
        "fct-type": "function",
        "title": "primFromPurePersistValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "primFromPurePersistValues",
        "normalized": "Proxy a-\u003e[PersistValue]-\u003e(b,[PersistValue])",
        "package": "groundhog",
        "partial": "From Pure Persist Values",
        "signature": "Proxy db-\u003e[PersistValue]-\u003e(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primFromSinglePersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "PersistValue -\u003e m a",
        "fct-source": "src/Database-Groundhog-Generic.html#primFromSinglePersistValue",
        "fct-type": "function",
        "title": "primFromSinglePersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "primFromSinglePersistValue",
        "normalized": "PersistValue-\u003ea b",
        "package": "groundhog",
        "partial": "From Single Persist Value",
        "signature": "PersistValue-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primToPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#primToPersistValue",
        "fct-type": "function",
        "title": "primToPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "primToPersistValue",
        "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
        "package": "groundhog",
        "partial": "To Persist Value",
        "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primToPurePersistValues",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Proxy db -\u003e a -\u003e [PersistValue] -\u003e [PersistValue]",
        "fct-source": "src/Database-Groundhog-Generic.html#primToPurePersistValues",
        "fct-type": "function",
        "title": "primToPurePersistValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "primToPurePersistValues",
        "normalized": "Proxy a-\u003eb-\u003e[PersistValue]-\u003e[PersistValue]",
        "package": "groundhog",
        "partial": "To Pure Persist Values",
        "signature": "Proxy db-\u003ea-\u003e[PersistValue]-\u003e[PersistValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:primToSinglePersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e m PersistValue",
        "fct-source": "src/Database-Groundhog-Generic.html#primToSinglePersistValue",
        "fct-type": "function",
        "title": "primToSinglePersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "primToSinglePersistValue",
        "normalized": "a-\u003eb PersistValue",
        "package": "groundhog",
        "partial": "To Single Persist Value",
        "signature": "a-\u003em PersistValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:printMigration",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the migrations\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "NamedMigrations -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#printMigration",
        "fct-type": "function",
        "title": "printMigration"
      },
      "index": {
        "description": "Pretty print the migrations",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "printMigration",
        "normalized": "NamedMigrations-\u003ea()",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "NamedMigrations-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psDbFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psDbFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psDbFieldName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psDbTypeName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psDbTypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psDbTypeName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Type Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psDefaultValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psDefaultValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psDefaultValue",
        "normalized": "",
        "package": "groundhog",
        "partial": "Default Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psEmbeddedDef",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Maybe [PSFieldDef]",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psEmbeddedDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psEmbeddedDef",
        "normalized": "Maybe[PSFieldDef]",
        "package": "groundhog",
        "partial": "Embedded Def",
        "signature": "Maybe[PSFieldDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psExprName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psExprName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psExprName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Expr Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "String",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psFieldName",
        "normalized": "",
        "package": "groundhog",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:psReferenceParent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "Maybe (Maybe (Maybe String, String, [String]), Maybe ReferenceActionType, Maybe ReferenceActionType)",
        "fct-source": "src/Database-Groundhog-Generic.html#PSFieldDef",
        "fct-type": "function",
        "title": "psReferenceParent"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "psReferenceParent",
        "normalized": "Maybe(Maybe(Maybe String,String,[String]),Maybe ReferenceActionType,Maybe ReferenceActionType)",
        "package": "groundhog",
        "partial": "Reference Parent",
        "signature": "Maybe(Maybe(Maybe String,String,[String]),Maybe ReferenceActionType,Maybe ReferenceActionType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:pureFromPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "[PersistValue] -\u003e m (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#pureFromPersistValue",
        "fct-type": "function",
        "title": "pureFromPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "pureFromPersistValue",
        "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
        "package": "groundhog",
        "partial": "From Persist Value",
        "signature": "[PersistValue]-\u003em(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:pureToPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#pureToPersistValue",
        "fct-type": "function",
        "title": "pureToPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "pureToPersistValue",
        "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
        "package": "groundhog",
        "partial": "To Persist Value",
        "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:replaceOne",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e (a -\u003e c) -\u003e (b -\u003e c) -\u003e (a -\u003e b -\u003e b) -\u003e a -\u003e [b] -\u003e [b]",
        "fct-source": "src/Database-Groundhog-Generic.html#replaceOne",
        "fct-type": "function",
        "title": "replaceOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "replaceOne",
        "normalized": "String-\u003e(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003ec)-\u003ea-\u003e[c]-\u003e[c]",
        "package": "groundhog",
        "partial": "One",
        "signature": "String-\u003e(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003eb)-\u003ea-\u003e[b]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runDb",
      "description": {
        "fct-descr": "\u003cp\u003eIt helps to run database operations within your application monad.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "DbPersist conn m a -\u003e m a",
        "fct-source": "src/Database-Groundhog-Generic.html#runDb",
        "fct-type": "function",
        "title": "runDb"
      },
      "index": {
        "description": "It helps to run database operations within your application monad",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "runDb",
        "normalized": "DbPersist a b c-\u003eb c",
        "package": "groundhog",
        "partial": "Db",
        "signature": "DbPersist conn m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runDbConn",
      "description": {
        "fct-descr": "\u003cp\u003eRuns action within connection. It can handle a simple connection, a pool of them, etc.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "DbPersist conn (NoLoggingT m) a -\u003e cm -\u003e m a",
        "fct-source": "src/Database-Groundhog-Generic.html#runDbConn",
        "fct-type": "function",
        "title": "runDbConn"
      },
      "index": {
        "description": "Runs action within connection It can handle simple connection pool of them etc",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "runDbConn",
        "normalized": "DbPersist a(NoLoggingT b)c-\u003ed-\u003eb c",
        "package": "groundhog",
        "partial": "Db Conn",
        "signature": "DbPersist conn(NoLoggingT m)a-\u003ecm-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runDbConnNoTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eIt is similar to \u003ccode\u003e\u003ca\u003erunDbConn\u003c/a\u003e\u003c/code\u003e but runs action without transaction. It can be useful if you use Groundhog within IO monad or in other cases when you cannot put \u003ccode\u003e\u003ca\u003ePersistBackend\u003c/a\u003e\u003c/code\u003e instance into your monad stack.\n\u003c/p\u003e\u003cpre\u003e\n flip withConn cm $ \\conn -\u003e liftIO $ do\n   -- transaction is already opened by withConn at this point\n   someIOAction\n   getValuesFromIO $ \\value -\u003e runDbConnNoTransaction (insert_ value) conn\n\u003c/pre\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "DbPersist conn (NoLoggingT m) a -\u003e cm -\u003e m a",
        "fct-source": "src/Database-Groundhog-Generic.html#runDbConnNoTransaction",
        "fct-type": "function",
        "title": "runDbConnNoTransaction"
      },
      "index": {
        "description": "It is similar to runDbConn but runs action without transaction It can be useful if you use Groundhog within IO monad or in other cases when you cannot put PersistBackend instance into your monad stack flip withConn cm conn liftIO do transaction is already opened by withConn at this point someIOAction getValuesFromIO value runDbConnNoTransaction insert value conn",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "runDbConnNoTransaction",
        "normalized": "DbPersist a(NoLoggingT b)c-\u003ed-\u003eb c",
        "package": "groundhog",
        "partial": "Db Conn No Transaction",
        "signature": "DbPersist conn(NoLoggingT m)a-\u003ecm-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runMigration",
      "description": {
        "fct-descr": "\u003cp\u003eRun migrations and log them. Fails when an unsafe migration occurs.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e Migration m -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#runMigration",
        "fct-type": "function",
        "title": "runMigration"
      },
      "index": {
        "description": "Run migrations and log them Fails when an unsafe migration occurs",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "runMigration",
        "normalized": "(String-\u003eIO())-\u003eMigration a-\u003ea()",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "(String-\u003eIO())-\u003eMigration m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:runMigrationUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eRun migrations and log them. Executes the unsafe migrations without warnings\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e Migration m -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#runMigrationUnsafe",
        "fct-type": "function",
        "title": "runMigrationUnsafe"
      },
      "index": {
        "description": "Run migrations and log them Executes the unsafe migrations without warnings",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "runMigrationUnsafe",
        "normalized": "(String-\u003eIO())-\u003eMigration a-\u003ea()",
        "package": "groundhog",
        "partial": "Migration Unsafe",
        "signature": "(String-\u003eIO())-\u003eMigration m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:silentMigrationLogger",
      "description": {
        "fct-descr": "\u003cp\u003eNo-op\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Database-Groundhog-Generic.html#silentMigrationLogger",
        "fct-type": "function",
        "title": "silentMigrationLogger"
      },
      "index": {
        "description": "No-op",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "silentMigrationLogger",
        "normalized": "String-\u003eIO()",
        "package": "groundhog",
        "partial": "Migration Logger",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:singleFromPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "[PersistValue] -\u003e m (a, [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#singleFromPersistValue",
        "fct-type": "function",
        "title": "singleFromPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "singleFromPersistValue",
        "normalized": "[PersistValue]-\u003ea(b,[PersistValue])",
        "package": "groundhog",
        "partial": "From Persist Value",
        "signature": "[PersistValue]-\u003em(a,[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:singleToPersistValue",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e m ([PersistValue] -\u003e [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#singleToPersistValue",
        "fct-type": "function",
        "title": "singleToPersistValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "singleToPersistValue",
        "normalized": "a-\u003eb([PersistValue]-\u003e[PersistValue])",
        "package": "groundhog",
        "partial": "To Persist Value",
        "signature": "a-\u003em([PersistValue]-\u003e[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:toPersistValuesUnique",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "u (UniqueMarker v) -\u003e v -\u003e m ([PersistValue] -\u003e [PersistValue])",
        "fct-source": "src/Database-Groundhog-Generic.html#toPersistValuesUnique",
        "fct-type": "function",
        "title": "toPersistValuesUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "toPersistValuesUnique",
        "normalized": "a(UniqueMarker b)-\u003eb-\u003ec([PersistValue]-\u003e[PersistValue])",
        "package": "groundhog",
        "partial": "Persist Values Unique",
        "signature": "u(UniqueMarker v)-\u003ev-\u003em([PersistValue]-\u003e[PersistValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:toSinglePersistValueAutoKey",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m PersistValue",
        "fct-source": "src/Database-Groundhog-Generic.html#toSinglePersistValueAutoKey",
        "fct-type": "function",
        "title": "toSinglePersistValueAutoKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "toSinglePersistValueAutoKey",
        "normalized": "a-\u003eb PersistValue",
        "package": "groundhog",
        "partial": "Single Persist Value Auto Key",
        "signature": "v-\u003em PersistValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:toSinglePersistValueUnique",
      "description": {
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "u (UniqueMarker v) -\u003e v -\u003e m PersistValue",
        "fct-source": "src/Database-Groundhog-Generic.html#toSinglePersistValueUnique",
        "fct-type": "function",
        "title": "toSinglePersistValueUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "toSinglePersistValueUnique",
        "normalized": "a(UniqueMarker b)-\u003eb-\u003ec PersistValue",
        "package": "groundhog",
        "partial": "Single Persist Value Unique",
        "signature": "u(UniqueMarker v)-\u003ev-\u003em PersistValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Generic.html#v:withSavepoint",
      "description": {
        "fct-descr": "\u003cp\u003eIt helps to run \u003ccode\u003e\u003ca\u003ewithConnSavepoint\u003c/a\u003e\u003c/code\u003e within a monad.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog.Generic",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/Database-Groundhog-Generic.html#withSavepoint",
        "fct-type": "function",
        "title": "withSavepoint"
      },
      "index": {
        "description": "It helps to run withConnSavepoint within monad",
        "hierarchy": "Database Groundhog Generic",
        "module": "Database.Groundhog.Generic",
        "name": "withSavepoint",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "groundhog",
        "partial": "Savepoint",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog-Instances.html#",
      "description": {
        "fct-module": "Database.Groundhog.Instances",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog Instances",
        "module": "Database.Groundhog.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "groundhog",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the most commonly used functions and datatypes.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://github.com/lykahb/groundhog/blob/master/examples/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "module",
        "fct-source": "src/Database-Groundhog.html",
        "fct-type": "module",
        "title": "Groundhog"
      },
      "index": {
        "description": "This module exports the most commonly used functions and datatypes See http github.com lykahb groundhog blob master examples",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Groundhog",
        "normalized": "",
        "package": "groundhog",
        "partial": "Groundhog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:AutoKeyField",
      "description": {
        "fct-descr": "\u003cp\u003eIt can be used in expressions like a regular field.\n For example, \u003ccode\u003edelete (AutoKeyField ==. k)\u003c/code\u003e\n or \u003ccode\u003edelete (AutoKeyField ==. k ||. SomeField ==. \"DUPLICATE\")\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#AutoKeyField",
        "fct-type": "data",
        "title": "AutoKeyField"
      },
      "index": {
        "description": "It can be used in expressions like regular field For example delete AutoKeyField or delete AutoKeyField SomeField DUPLICATE",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "AutoKeyField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Auto Key Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:BackendSpecific",
      "description": {
        "fct-descr": "\u003cp\u003eKey marked with this type can have value for any backend\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#BackendSpecific",
        "fct-type": "data",
        "title": "BackendSpecific"
      },
      "index": {
        "description": "Key marked with this type can have value for any backend",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "BackendSpecific",
        "normalized": "",
        "package": "groundhog",
        "partial": "Backend Specific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:Cond",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents condition for a query.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "data",
        "title": "Cond"
      },
      "index": {
        "description": "Represents condition for query",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Cond",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:DbPersist",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Groundhog-Core.html#DbPersist",
        "fct-type": "newtype",
        "title": "DbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "DbPersist",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:Order",
      "description": {
        "fct-descr": "\u003cp\u003eDefines sort order of a result-set\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Order",
        "fct-type": "data",
        "title": "Order"
      },
      "index": {
        "description": "Defines sort order of result-set",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Order",
        "normalized": "",
        "package": "groundhog",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:PersistBackend",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "class",
        "fct-source": "src/Database-Groundhog-Core.html#PersistBackend",
        "fct-type": "class",
        "title": "PersistBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "PersistBackend",
        "normalized": "",
        "package": "groundhog",
        "partial": "Persist Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#t:Unique",
      "description": {
        "fct-descr": "\u003cp\u003eA holder for Unique constraints\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "data",
        "fct-source": "src/Database-Groundhog-Core.html#Unique",
        "fct-type": "data",
        "title": "Unique"
      },
      "index": {
        "description": "holder for Unique constraints",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Unique",
        "normalized": "",
        "package": "groundhog",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"or\" operator.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Cond db r -\u003e Cond db r -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%7C%7C.",
        "fct-type": "function",
        "title": "(||.)"
      },
      "index": {
        "description": "Boolean or operator",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(||.) ||.",
        "normalized": "Cond a b-\u003eCond a b-\u003eCond a b",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond db r-\u003eCond db r-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAccesses fields of the embedded datatypes. For example, \u003ccode\u003eSomeField ==. (\"abc\", \"def\") ||. SomeField ~\u003e Tuple2_0Selector ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e Selector a a' -\u003e SubField v c a'",
        "fct-source": "src/Database-Groundhog-Core.html#~%3E",
        "fct-type": "function",
        "title": "(~\u003e)"
      },
      "index": {
        "description": "Accesses fields of the embedded datatypes For example SomeField abc def SomeField Tuple2 Selector def",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(~\u003e) ~\u003e",
        "normalized": "a-\u003eSelector b c-\u003eSubField d e c",
        "package": "groundhog",
        "partial": "",
        "signature": "f-\u003eSelector a a'-\u003eSubField v c a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"and\" operator.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Cond db r -\u003e Cond db r -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%26%26.",
        "fct-type": "function",
        "title": "(&&.)"
      },
      "index": {
        "description": "Boolean and operator",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(&&.) &&.",
        "normalized": "Cond a b-\u003eCond a b-\u003eCond a b",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond db r-\u003eCond db r-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-47--61-.",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%2F%3D.",
        "fct-type": "function",
        "title": "(/=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(/=.) /=.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-60--61-.",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3C%3D.",
        "fct-type": "function",
        "title": "(\u003c=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(\u003c=.) \u003c=.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-60-.",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3C.",
        "fct-type": "function",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(\u003c.) \u003c.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-61--61-.",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3D%3D.",
        "fct-type": "function",
        "title": "(==.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(==.) ==.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-61-.",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate field\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e b -\u003e Update db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3D.",
        "fct-type": "function",
        "title": "(=.)"
      },
      "index": {
        "description": "Update field",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(=.) =.",
        "normalized": "a-\u003eb-\u003eUpdate c d",
        "package": "groundhog",
        "partial": "",
        "signature": "f-\u003eb-\u003eUpdate db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-62--61-.",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3E%3D.",
        "fct-type": "function",
        "title": "(\u003e=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(\u003e=.) \u003e=.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:-62-.",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e b -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#%3E.",
        "fct-type": "function",
        "title": "(\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "(\u003e.) \u003e.",
        "normalized": "a-\u003eb-\u003eCond c d",
        "package": "groundhog",
        "partial": "",
        "signature": "a-\u003eb-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:And",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "And (Cond db r) (Cond db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "And",
        "normalized": "",
        "package": "groundhog",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Asc",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Asc f",
        "fct-source": "src/Database-Groundhog-Core.html#Order",
        "fct-type": "function",
        "title": "Asc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Asc",
        "normalized": "",
        "package": "groundhog",
        "partial": "Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:AutoKeyField",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "AutoKeyField v c",
        "fct-source": "src/Database-Groundhog-Core.html#AutoKeyField",
        "fct-type": "function",
        "title": "AutoKeyField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "AutoKeyField",
        "normalized": "",
        "package": "groundhog",
        "partial": "Auto Key Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Compare",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Compare ExprRelation (UntypedExpr db r) (UntypedExpr db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "Compare"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Compare",
        "normalized": "",
        "package": "groundhog",
        "partial": "Compare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:CondEmpty",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "CondEmpty",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "CondEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "CondEmpty",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cond Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:CondRaw",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "CondRaw (QueryRaw db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "CondRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "CondRaw",
        "normalized": "",
        "package": "groundhog",
        "partial": "Cond Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:DbPersist",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "DbPersist",
        "fct-source": "src/Database-Groundhog-Core.html#DbPersist",
        "fct-type": "function",
        "title": "DbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "DbPersist",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Desc",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Desc f",
        "fct-source": "src/Database-Groundhog-Core.html#Order",
        "fct-type": "function",
        "title": "Desc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Desc",
        "normalized": "",
        "package": "groundhog",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Not",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Not (Cond db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Not",
        "normalized": "",
        "package": "groundhog",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:Or",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Or (Cond db r) (Cond db r)",
        "fct-source": "src/Database-Groundhog-Core.html#Cond",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "Or",
        "normalized": "",
        "package": "groundhog",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCount total number of records satisfying the condition\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m Int",
        "fct-source": "src/Database-Groundhog-Core.html#count",
        "fct-type": "method",
        "title": "count"
      },
      "index": {
        "description": "Count total number of records satisfying the condition",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "count",
        "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea Int",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:countAll",
      "description": {
        "fct-descr": "\u003cp\u003eCount total number of records with all constructors\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m Int",
        "fct-source": "src/Database-Groundhog-Core.html#countAll",
        "fct-type": "method",
        "title": "countAll"
      },
      "index": {
        "description": "Count total number of records with all constructors",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "countAll",
        "normalized": "a-\u003eb Int",
        "package": "groundhog",
        "partial": "All",
        "signature": "v-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:createMigration",
      "description": {
        "fct-descr": "\u003cp\u003eProduce the migrations but not execute them. Fails when an unsafe migration occurs.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Migration m -\u003e m NamedMigrations",
        "fct-source": "src/Database-Groundhog-Generic.html#createMigration",
        "fct-type": "function",
        "title": "createMigration"
      },
      "index": {
        "description": "Produce the migrations but not execute them Fails when an unsafe migration occurs",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "createMigration",
        "normalized": "Migration a-\u003ea NamedMigrations",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "Migration m-\u003em NamedMigrations"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:defaultMigrationLogger",
      "description": {
        "fct-descr": "\u003cp\u003ePrints the queries to stdout\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Database-Groundhog-Generic.html#defaultMigrationLogger",
        "fct-type": "function",
        "title": "defaultMigrationLogger"
      },
      "index": {
        "description": "Prints the queries to stdout",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "defaultMigrationLogger",
        "normalized": "String-\u003eIO()",
        "package": "groundhog",
        "partial": "Migration Logger",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the records satisfying the condition\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Remove the records satisfying the condition",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "delete",
        "normalized": "Cond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
        "package": "groundhog",
        "partial": "",
        "signature": "Cond(PhantomDb m)(RestrictionHolder v c)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:deleteByKey",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the record with given key. No-op if the record does not exist\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Key v BackendSpecific -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#deleteByKey",
        "fct-type": "method",
        "title": "deleteByKey"
      },
      "index": {
        "description": "Remove the record with given key No-op if the record does not exist",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "deleteByKey",
        "normalized": "Key a BackendSpecific-\u003eb()",
        "package": "groundhog",
        "partial": "By Key",
        "signature": "Key v BackendSpecific-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:executeMigration",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the migrations and log them. \n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e NamedMigrations -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#executeMigration",
        "fct-type": "function",
        "title": "executeMigration"
      },
      "index": {
        "description": "Execute the migrations and log them",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "executeMigration",
        "normalized": "(String-\u003eIO())-\u003eNamedMigrations-\u003ea()",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "(String-\u003eIO())-\u003eNamedMigrations-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:executeMigrationUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eExecute migrations and log them. Executes the unsafe migrations without warnings\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e NamedMigrations -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#executeMigrationUnsafe",
        "fct-type": "function",
        "title": "executeMigrationUnsafe"
      },
      "index": {
        "description": "Execute migrations and log them Executes the unsafe migrations without warnings",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "executeMigrationUnsafe",
        "normalized": "(String-\u003eIO())-\u003eNamedMigrations-\u003ea()",
        "package": "groundhog",
        "partial": "Migration Unsafe",
        "signature": "(String-\u003eIO())-\u003eNamedMigrations-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:executeRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute raw query\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "executeRaw",
        "fct-source": "src/Database-Groundhog-Core.html#executeRaw",
        "fct-type": "method",
        "title": "executeRaw"
      },
      "index": {
        "description": "Execute raw query",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "executeRaw",
        "normalized": "",
        "package": "groundhog",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:extractUnique",
      "description": {
        "fct-descr": "\u003cp\u003eCreates value of unique key using the data extracted from the passed value\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e uKey",
        "fct-source": "src/Database-Groundhog-Core.html#extractUnique",
        "fct-type": "function",
        "title": "extractUnique"
      },
      "index": {
        "description": "Creates value of unique key using the data extracted from the passed value",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "extractUnique",
        "normalized": "a-\u003eb",
        "package": "groundhog",
        "partial": "Unique",
        "signature": "v-\u003euKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFetch an entity from a database\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Key v BackendSpecific -\u003e m (Maybe v)",
        "fct-source": "src/Database-Groundhog-Core.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Fetch an entity from database",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "get",
        "normalized": "Key a BackendSpecific-\u003eb(Maybe a)",
        "package": "groundhog",
        "partial": "",
        "signature": "Key v BackendSpecific-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:getBy",
      "description": {
        "fct-descr": "\u003cp\u003eFetch an entity from a database by its unique key\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Key v (Unique u) -\u003e m (Maybe v)",
        "fct-source": "src/Database-Groundhog-Core.html#getBy",
        "fct-type": "method",
        "title": "getBy"
      },
      "index": {
        "description": "Fetch an entity from database by its unique key",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "getBy",
        "normalized": "Key a(Unique b)-\u003ec(Maybe a)",
        "package": "groundhog",
        "partial": "By",
        "signature": "Key v(Unique u)-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:getList",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Int64 -\u003e m [a]",
        "fct-source": "src/Database-Groundhog-Core.html#getList",
        "fct-type": "method",
        "title": "getList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "getList",
        "normalized": "Int-\u003ea[b]",
        "package": "groundhog",
        "partial": "List",
        "signature": "Int-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new record to a database and return its autogenerated key or ()\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m (AutoKey v)",
        "fct-source": "src/Database-Groundhog-Core.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert new record to database and return its autogenerated key or",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "insert",
        "normalized": "a-\u003eb(AutoKey a)",
        "package": "groundhog",
        "partial": "",
        "signature": "v-\u003em(AutoKey v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insertBy",
      "description": {
        "fct-descr": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for the given constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "u (UniqueMarker v) -\u003e v -\u003e m (Either (AutoKey v) (AutoKey v))",
        "fct-source": "src/Database-Groundhog-Core.html#insertBy",
        "fct-type": "method",
        "title": "insertBy"
      },
      "index": {
        "description": "Try to insert record and return Right newkey If there is constraint violation for the given constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "insertBy",
        "normalized": "a(UniqueMarker b)-\u003eb-\u003ec(Either(AutoKey b)(AutoKey b))",
        "package": "groundhog",
        "partial": "By",
        "signature": "u(UniqueMarker v)-\u003ev-\u003em(Either(AutoKey v)(AutoKey v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insertByAll",
      "description": {
        "fct-descr": "\u003cp\u003eTry to insert a record and return Right newkey. If there is a constraint violation for any constraint, Left oldkey is returned\n , where oldkey is an identifier of the record with the matching values. Note that if several constraints are violated, a key of an arbitrary matching record is returned.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m (Either (AutoKey v) (AutoKey v))",
        "fct-source": "src/Database-Groundhog-Core.html#insertByAll",
        "fct-type": "method",
        "title": "insertByAll"
      },
      "index": {
        "description": "Try to insert record and return Right newkey If there is constraint violation for any constraint Left oldkey is returned where oldkey is an identifier of the record with the matching values Note that if several constraints are violated key of an arbitrary matching record is returned",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "insertByAll",
        "normalized": "a-\u003eb(Either(AutoKey a)(AutoKey a))",
        "package": "groundhog",
        "partial": "By All",
        "signature": "v-\u003em(Either(AutoKey v)(AutoKey v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insertList",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "[a] -\u003e m Int64",
        "fct-source": "src/Database-Groundhog-Core.html#insertList",
        "fct-type": "method",
        "title": "insertList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "insertList",
        "normalized": "[a]-\u003eb Int",
        "package": "groundhog",
        "partial": "List",
        "signature": "[a]-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:insert_",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new record to a database. For some backends it may be faster than \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#insert_",
        "fct-type": "method",
        "title": "insert_"
      },
      "index": {
        "description": "Insert new record to database For some backends it may be faster than insert",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "insert_",
        "normalized": "a-\u003eb()",
        "package": "groundhog",
        "partial": "",
        "signature": "v-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:isFieldNothing",
      "description": {
        "fct-descr": "\u003cp\u003eThis function more limited than (==.), but has better type inference.\n If you want to compare your value to Nothing with \u003ccode\u003e(==.)\u003c/code\u003e operator, you have to write the types explicitly \u003ccode\u003emyExpr ==. (Nothing :: Maybe Int)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "f -\u003e Cond db r",
        "fct-source": "src/Database-Groundhog-Expression.html#isFieldNothing",
        "fct-type": "function",
        "title": "isFieldNothing"
      },
      "index": {
        "description": "This function more limited than but has better type inference If you want to compare your value to Nothing with operator you have to write the types explicitly myExpr Nothing Maybe Int",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "isFieldNothing",
        "normalized": "a-\u003eCond b c",
        "package": "groundhog",
        "partial": "Field Nothing",
        "signature": "f-\u003eCond db r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:limitTo",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Int -\u003e SelectOptions db r HTrue (HasOffset a) (HasOrder a)",
        "fct-source": "src/Database-Groundhog-Core.html#limitTo",
        "fct-type": "function",
        "title": "limitTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "limitTo",
        "normalized": "a-\u003eInt-\u003eSelectOptions b c HTrue(HasOffset a)(HasOrder a)",
        "package": "groundhog",
        "partial": "To",
        "signature": "a-\u003eInt-\u003eSelectOptions db r HTrue(HasOffset a)(HasOrder a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:migrate",
      "description": {
        "fct-descr": "\u003cp\u003eCheck database schema and create migrations for the entity and the entities it contains\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "v -\u003e Migration m",
        "fct-source": "src/Database-Groundhog-Core.html#migrate",
        "fct-type": "method",
        "title": "migrate"
      },
      "index": {
        "description": "Check database schema and create migrations for the entity and the entities it contains",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "migrate",
        "normalized": "a-\u003eMigration b",
        "package": "groundhog",
        "partial": "",
        "signature": "v-\u003eMigration m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:offsetBy",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e Int -\u003e SelectOptions db r (HasLimit a) HTrue (HasOrder a)",
        "fct-source": "src/Database-Groundhog-Core.html#offsetBy",
        "fct-type": "function",
        "title": "offsetBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "offsetBy",
        "normalized": "a-\u003eInt-\u003eSelectOptions b c(HasLimit a)HTrue(HasOrder a)",
        "package": "groundhog",
        "partial": "By",
        "signature": "a-\u003eInt-\u003eSelectOptions db r(HasLimit a)HTrue(HasOrder a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:orderBy",
      "description": {
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "a -\u003e [Order db r] -\u003e SelectOptions db r (HasLimit a) (HasOffset a) HTrue",
        "fct-source": "src/Database-Groundhog-Core.html#orderBy",
        "fct-type": "function",
        "title": "orderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "orderBy",
        "normalized": "a-\u003e[Order b c]-\u003eSelectOptions b c(HasLimit a)(HasOffset a)HTrue",
        "package": "groundhog",
        "partial": "By",
        "signature": "a-\u003e[Order db r]-\u003eSelectOptions db r(HasLimit a)(HasOffset a)HTrue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:printMigration",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the migrations\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "NamedMigrations -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#printMigration",
        "fct-type": "function",
        "title": "printMigration"
      },
      "index": {
        "description": "Pretty print the migrations",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "printMigration",
        "normalized": "NamedMigrations-\u003ea()",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "NamedMigrations-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eFetch projection of some fields. Example: \u003ccode\u003eproject (SecondField, ThirdField) $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `offsetBy` 100\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "p -\u003e opts -\u003e m [a]",
        "fct-source": "src/Database-Groundhog-Core.html#project",
        "fct-type": "method",
        "title": "project"
      },
      "index": {
        "description": "Fetch projection of some fields Example project SecondField ThirdField FirstField abc SecondField def orderBy Asc ThirdField offsetBy",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "project",
        "normalized": "a-\u003eb-\u003ec[d]",
        "package": "groundhog",
        "partial": "",
        "signature": "p-\u003eopts-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:queryRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute raw query with results\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "queryRaw",
        "fct-source": "src/Database-Groundhog-Core.html#queryRaw",
        "fct-type": "method",
        "title": "queryRaw"
      },
      "index": {
        "description": "Execute raw query with results",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "queryRaw",
        "normalized": "",
        "package": "groundhog",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a record with the given autogenerated key. Result is undefined if the record does not exist.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "Key v BackendSpecific -\u003e v -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#replace",
        "fct-type": "method",
        "title": "replace"
      },
      "index": {
        "description": "Replace record with the given autogenerated key Result is undefined if the record does not exist",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "replace",
        "normalized": "Key a BackendSpecific-\u003ea-\u003eb()",
        "package": "groundhog",
        "partial": "",
        "signature": "Key v BackendSpecific-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:runMigration",
      "description": {
        "fct-descr": "\u003cp\u003eRun migrations and log them. Fails when an unsafe migration occurs.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e Migration m -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#runMigration",
        "fct-type": "function",
        "title": "runMigration"
      },
      "index": {
        "description": "Run migrations and log them Fails when an unsafe migration occurs",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "runMigration",
        "normalized": "(String-\u003eIO())-\u003eMigration a-\u003ea()",
        "package": "groundhog",
        "partial": "Migration",
        "signature": "(String-\u003eIO())-\u003eMigration m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:runMigrationUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eRun migrations and log them. Executes the unsafe migrations without warnings\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "(String -\u003e IO ()) -\u003e Migration m -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Generic.html#runMigrationUnsafe",
        "fct-type": "function",
        "title": "runMigrationUnsafe"
      },
      "index": {
        "description": "Run migrations and log them Executes the unsafe migrations without warnings",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "runMigrationUnsafe",
        "normalized": "(String-\u003eIO())-\u003eMigration a-\u003ea()",
        "package": "groundhog",
        "partial": "Migration Unsafe",
        "signature": "(String-\u003eIO())-\u003eMigration m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of the records satisfying the condition. Example: \u003ccode\u003eselect $ (FirstField ==. \"abc\" &&. SecondField \u003e. \"def\") `orderBy` [Asc ThirdField] `limitTo` 100\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "opts -\u003e m [v]",
        "fct-source": "src/Database-Groundhog-Core.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Return list of the records satisfying the condition Example select FirstField abc SecondField def orderBy Asc ThirdField limitTo",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "select",
        "normalized": "a-\u003eb[c]",
        "package": "groundhog",
        "partial": "",
        "signature": "opts-\u003em[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:selectAll",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of all records. Order is undefined. It is useful for datatypes with multiple constructors.\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "m [(AutoKey v, v)]",
        "fct-source": "src/Database-Groundhog-Core.html#selectAll",
        "fct-type": "method",
        "title": "selectAll"
      },
      "index": {
        "description": "Return list of all records Order is undefined It is useful for datatypes with multiple constructors",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "selectAll",
        "normalized": "a[(AutoKey b,b)]",
        "package": "groundhog",
        "partial": "All",
        "signature": "m[(AutoKey v,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:silentMigrationLogger",
      "description": {
        "fct-descr": "\u003cp\u003eNo-op\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Database-Groundhog-Generic.html#silentMigrationLogger",
        "fct-type": "function",
        "title": "silentMigrationLogger"
      },
      "index": {
        "description": "No-op",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "silentMigrationLogger",
        "normalized": "String-\u003eIO()",
        "package": "groundhog",
        "partial": "Migration Logger",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:unDbPersist",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "ReaderT conn m a",
        "fct-source": "src/Database-Groundhog-Core.html#DbPersist",
        "fct-type": "function",
        "title": "unDbPersist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "unDbPersist",
        "normalized": "",
        "package": "groundhog",
        "partial": "Db Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/groundhog/docs/Database-Groundhog.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the records satisfying the condition. Example: \u003ccode\u003eupdate [FirstField =. \"abc\"] $ FirstField ==. \"def\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.Groundhog",
        "fct-package": "groundhog",
        "fct-signature": "[Update (PhantomDb m) (RestrictionHolder v c)] -\u003e Cond (PhantomDb m) (RestrictionHolder v c) -\u003e m ()",
        "fct-source": "src/Database-Groundhog-Core.html#update",
        "fct-type": "method",
        "title": "update"
      },
      "index": {
        "description": "Update the records satisfying the condition Example update FirstField abc FirstField def",
        "hierarchy": "Database Groundhog",
        "module": "Database.Groundhog",
        "name": "update",
        "normalized": "[Update(PhantomDb a)(RestrictionHolder b c)]-\u003eCond(PhantomDb a)(RestrictionHolder b c)-\u003ea()",
        "package": "groundhog",
        "partial": "",
        "signature": "[Update(PhantomDb m)(RestrictionHolder v c)]-\u003eCond(PhantomDb m)(RestrictionHolder v c)-\u003em()"
      }
    }
  }
]