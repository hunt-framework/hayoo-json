[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskellDB is a great library for writing type-safe SQL queries. That type safety\ncomes with a significant boilerplate overhead, though. This library provides utilities\nthat help reduce that boilerplate by generating the definitions, types and instances\nthat HaskellDB expects to work with. It also provides some functions for building\nrecords for projections which otherwise can be quite cumbersome.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "module",
        "fct-source": "src/Database-HaskellDB-CodeGen.html",
        "fct-type": "module",
        "title": "CodeGen"
      },
      "index": {
        "description": "HaskellDB is great library for writing type-safe SQL queries That type safety comes with significant boilerplate overhead though This library provides utilities that help reduce that boilerplate by generating the definitions types and instances that HaskellDB expects to work with It also provides some functions for building records for projections which otherwise can be quite cumbersome",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "CodeGen",
        "normalized": "",
        "package": "haskelldb-th",
        "partial": "Code Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#t:Ppr",
      "description": {
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Ppr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "Ppr",
        "normalized": "",
        "package": "haskelldb-th",
        "partial": "Ppr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkDBDirectField",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a field definition in the style DBDirect uses. The \u003ccode\u003ecolName\u003c/code\u003e\n argument is used to create the data definition, type synonym, and field function. The \u003ccode\u003etypeQ\u003c/code\u003e argument specifies\n the type of the field. \n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003emkDBDirectField \"fooBar\" [t|Bool|]\u003c/code\u003e will produce:\n\u003c/p\u003e\u003cpre\u003e data FooBar = FooBar\n instance FieldTag FooBar where fieldName _ = \"fooBar\"\n fooBar :: Attr FooBar Bool\n fooBar = mkAttr FooBar\n\u003c/pre\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "String-\u003e TypeQ-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkDBDirectField"
      },
      "index": {
        "description": "Creates field definition in the style DBDirect uses The colName argument is used to create the data definition type synonym and field function The typeQ argument specifies the type of the field For example mkDBDirectField fooBar Bool will produce data FooBar FooBar instance FieldTag FooBar where fieldName fooBar fooBar Attr FooBar Bool fooBar mkAttr FooBar",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkDBDirectField",
        "normalized": "String-\u003eTypeQ-\u003eQ[Dec]",
        "package": "haskelldb-th",
        "partial": "DBDirect Field",
        "signature": "String-\u003eTypeQ-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkDBDirectTable",
      "description": {
        "fct-descr": "\u003cp\u003eCreates definitions for a table and all its fields in the style of DBDirect.\n Takes a table name and a list of fields (as types). Generates\n a table type and a function to construct the table. The function\n will be the tablename in lower case. The type alias will\n be the table name with the first character capitalized.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e mkDBDirectTable \"Table1\" [(\"Col1\", [t|Int|])\n                          , (\"Col2\", [t|Bool|])]\n\u003c/pre\u003e\u003cp\u003eWill produce\n\u003c/p\u003e\u003cpre\u003e type Table1 = (RecCons Col1 (Expr Int)\n                (RecCons Col2 (Expr Bool)))\n \n table1 :: Table Table1\n table1 = baseTable \"Table1\" $\n          hdbMakeEntry Col1 #\n          hdbMakeEntry Col2\n\n data Col1 = Col1\n instance FieldTag Col1 where fieldName _ = \"col1\"\n col1 :: Attr Col1 Int\n col1 = mkAttr Col1\n\n data Col2 = Col2\n instance FieldTag Col2 where fieldName _ = \"col2\"\n col2 :: Attr Col2 Int\n col2 = mkAttr Col2\n\u003c/pre\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "String-\u003e [(String, TypeQ)]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkDBDirectTable"
      },
      "index": {
        "description": "Creates definitions for table and all its fields in the style of DBDirect Takes table name and list of fields as types Generates table type and function to construct the table The function will be the tablename in lower case The type alias will be the table name with the first character capitalized For example mkDBDirectTable Table1 Col1 Int Col2 Bool Will produce type Table1 RecCons Col1 Expr Int RecCons Col2 Expr Bool table1 Table Table1 table1 baseTable Table1 hdbMakeEntry Col1 hdbMakeEntry Col2 data Col1 Col1 instance FieldTag Col1 where fieldName col1 col1 Attr Col1 Int col1 mkAttr Col1 data Col2 Col2 instance FieldTag Col2 where fieldName col2 col2 Attr Col2 Int col2 mkAttr Col2",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkDBDirectTable",
        "normalized": "String-\u003e[(String,TypeQ)]-\u003eQ[Dec]",
        "package": "haskelldb-th",
        "partial": "DBDirect Table",
        "signature": "String-\u003e[(String,TypeQ)]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkDBDirectTableType",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a type synonym for a table with the name given, using\n the list of fields given. See \u003ca\u003emkDBDirectField\u003c/a\u003e for an example, as that function\n calls this one to create the type signature.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "String-\u003e [(Name, TypeQ)]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkDBDirectTableType"
      },
      "index": {
        "description": "Creates type synonym for table with the name given using the list of fields given See mkDBDirectField for an example as that function calls this one to create the type signature",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkDBDirectTableType",
        "normalized": "String-\u003e[(Name,TypeQ)]-\u003eQ[Dec]",
        "package": "haskelldb-th",
        "partial": "DBDirect Table Type",
        "signature": "String-\u003e[(Name,TypeQ)]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkDBDirectTableWithName",
      "description": {
        "fct-descr": "\u003cp\u003eCreates definitions for a table and all its fields in the style of DBDirect.\n Takes a table name and a list of fields (as types). Generates\n a table type and a function to construct the table. The function\n will be the tablename in lower case. The type alias will\n be the table name with the first character capitalized. See \u003ca\u003emkDBirectTable\u003c/a\u003e for an example, as\n that function calls this one.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "String-\u003e String-\u003e [(String, TypeQ)]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkDBDirectTableWithName"
      },
      "index": {
        "description": "Creates definitions for table and all its fields in the style of DBDirect Takes table name and list of fields as types Generates table type and function to construct the table The function will be the tablename in lower case The type alias will be the table name with the first character capitalized See mkDBirectTable for an example as that function calls this one",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkDBDirectTableWithName",
        "normalized": "String-\u003eString-\u003e[(String,TypeQ)]-\u003eQ[Dec]",
        "package": "haskelldb-th",
        "partial": "DBDirect Table With Name",
        "signature": "String-\u003eString-\u003e[(String,TypeQ)]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkField",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a compile-time field declaration. The name given\n will be used to create the type and the name of the field returned. It\n will also be used to create a \u003cem\u003efield name\u003c/em\u003e\u003ccode\u003eField\u003c/code\u003e function which\n can be used to place the field in a projection.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003emkField \"fooBar\" [t|Int|]\u003c/code\u003e produces the following declarations:\n\u003c/p\u003e\u003cpre\u003e data FooBar = FooBar\n instance FieldTag FooBar where fieldName _ = \"fooBar\"\n fooBarField :: Attr FooBar Int\n fooBarField = mkAttr FooBar\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003emkField \"Bar_Foo\" [t|Bool|]\u003c/code\u003e would produce:\n\u003c/p\u003e\u003cpre\u003e data Bar_Foo = Bar_Foo\n instance FieldTag Bar_Foo where fieldName _ = \"bar_Foo\"\n bar_fooField :: Attr Bar_Foo Bool\n bar_fooField = mkAttr Bar_Foo\n\u003c/pre\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "String-\u003e TypeQ-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkField"
      },
      "index": {
        "description": "Creates compile-time field declaration The name given will be used to create the type and the name of the field returned It will also be used to create field name Field function which can be used to place the field in projection For example mkField fooBar Int produces the following declarations data FooBar FooBar instance FieldTag FooBar where fieldName fooBar fooBarField Attr FooBar Int fooBarField mkAttr FooBar mkField Bar Foo Bool would produce data Bar Foo Bar Foo instance FieldTag Bar Foo where fieldName bar Foo bar fooField Attr Bar Foo Bool bar fooField mkAttr Bar Foo",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkField",
        "normalized": "String-\u003eTypeQ-\u003eQ[Dec]",
        "package": "haskelldb-th",
        "partial": "Field",
        "signature": "String-\u003eTypeQ-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkFieldWithName",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a compile time field declaration using the given\n arguments for the type and column name of the field. The \u003ccode\u003etypN\u003c/code\u003e argument\n is used to produce the \u003cem\u003efield name\u003c/em\u003e\u003ccode\u003eField\u003c/code\u003e function which can be used to\n add the field to a projection.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003emkFieldWithName \"FooBar\" \"foo_bar\" [t|Int|]\u003c/code\u003e gives:\n\u003c/p\u003e\u003cpre\u003e data FooBar = FooBar\n instance FieldTag FooBar where fieldName _ = \"foo_bar\"\n fooBarField :: Attr FooBar Int\n fooBarField = mkAttr FooBar\n\u003c/pre\u003e\u003cp\u003eNote that an error will occur if \u003ccode\u003etypN\u003c/code\u003e is not a proper type/constructor name.\n\u003c/p\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "String-\u003e String-\u003e TypeQ-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkFieldWithName"
      },
      "index": {
        "description": "Creates compile time field declaration using the given arguments for the type and column name of the field The typN argument is used to produce the field name Field function which can be used to add the field to projection For example mkFieldWithName FooBar foo bar Int gives data FooBar FooBar instance FieldTag FooBar where fieldName foo bar fooBarField Attr FooBar Int fooBarField mkAttr FooBar Note that an error will occur if typN is not proper type constructor name",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkFieldWithName",
        "normalized": "String-\u003eString-\u003eTypeQ-\u003eQ[Dec]",
        "package": "haskelldb-th",
        "partial": "Field With Name",
        "signature": "String-\u003eString-\u003eTypeQ-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:mkRecord",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a record from the list of tables and fields given. The first\n element of each tuple is a table. The second is a list of fields from\n that table which will be in the new record. The record will be constructed\n in the order of tables and fields given.\n\u003c/p\u003e\u003cp\u003eThis is a Template Haskell function which must be spliced in and is\n intended to use the \u003ccode\u003e'\u003c/code\u003e (quote) facility for capturing names. An example:\n\u003c/p\u003e\u003cpre\u003e import Status_v (Status_v, status_v)\n import qualified Status_v as Status_v\n\n import Dtls_v (Dtls_v, dtls_v)\n import qualified Dtls_v as Dtls_v\n\n \n  qry = do\n    status \u003c- table status_v;\n    dtls \u003c- table dtls_v;\n    project $(mkRecord [('dtls, ['Dtls_v.desc\n                         , 'Dtls_v.hdr_id\n                         , 'Dtls_v.prt_id\n                         , 'Dtls_v.dtl_id])\n                       ,('status, ['Status_v.stat_nbr])])\n\u003c/pre\u003e\u003cp\u003eThe type of qry is then\n\u003c/p\u003e\u003cpre\u003e          (RecCons Dtls_v.Desc (Expr (Maybe BStr40))\n          (RecCons Dtls_v.Hdr_id (Expr (Maybe Int))\n          (RecCons Dtls_v.Prt_id (Expr (Maybe BStr30))\n          (RecCons Dtls_v.Dtl_id (Expr (Maybe Int))\n          (RecCons Status_v.Stat_nbr (Expr (Maybe Int)) RecNil))))))\n\u003c/pre\u003e\u003cp\u003eIf other fields need to be added to the record, they must come before the call\nto mkRecord:\n\u003c/p\u003e\u003cpre\u003e    project $ filtered \u003c\u003c someTable ! someField #\n              $(mkRecord [('dtls, ['Dtls_v.prt_desc\n                                    , 'Dtls.hdr_id\n                                    , 'Dtls.prt_id\n                                    , 'Dtls.dtl_id])\n                          ,('status, ['Status_v.stat_nbr])])\n\u003c/pre\u003e",
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "[(Name, [Name])] -\u003e ExpQ",
        "fct-source": "src/Database-HaskellDB-CodeGen.html#mkRecord",
        "fct-type": "function",
        "title": "mkRecord"
      },
      "index": {
        "description": "Create record from the list of tables and fields given The first element of each tuple is table The second is list of fields from that table which will be in the new record The record will be constructed in the order of tables and fields given This is Template Haskell function which must be spliced in and is intended to use the quote facility for capturing names An example import Status Status status import qualified Status as Status import Dtls Dtls dtls import qualified Dtls as Dtls qry do status table status dtls table dtls project mkRecord dtls Dtls v.desc Dtls v.hdr id Dtls v.prt id Dtls v.dtl id status Status v.stat nbr The type of qry is then RecCons Dtls v.Desc Expr Maybe BStr40 RecCons Dtls v.Hdr id Expr Maybe Int RecCons Dtls v.Prt id Expr Maybe BStr30 RecCons Dtls v.Dtl id Expr Maybe Int RecCons Status v.Stat nbr Expr Maybe Int RecNil If other fields need to be added to the record they must come before the call to mkRecord project filtered someTable someField mkRecord dtls Dtls v.prt desc Dtls.hdr id Dtls.prt id Dtls.dtl id status Status v.stat nbr",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "mkRecord",
        "normalized": "[(Name,[Name])]-\u003eExpQ",
        "package": "haskelldb-th",
        "partial": "Record",
        "signature": "[(Name,[Name])]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskelldb-th/docs/Database-HaskellDB-CodeGen.html#v:printQ",
      "description": {
        "fct-module": "Database.HaskellDB.CodeGen",
        "fct-package": "haskelldb-th",
        "fct-signature": "Q a -\u003e IO ()",
        "fct-source": "src/Database-HaskellDB-CodeGen.html#printQ",
        "fct-type": "function",
        "title": "printQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HaskellDB CodeGen",
        "module": "Database.HaskellDB.CodeGen",
        "name": "printQ",
        "normalized": "Q a-\u003eIO()",
        "package": "haskelldb-th",
        "partial": "",
        "signature": "Q a-\u003eIO()"
      }
    }
  }
]