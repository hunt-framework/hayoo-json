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
        "word": "hmemdb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTables of values and keys for that tables.\n\u003c/p\u003e\u003cp\u003eEach value in the table may be accompanied with references to other tables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HMemDb",
          "name": "HMemDb",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html",
          "type": "module"
        },
        "index": {
          "description": "Tables of values and keys for that tables Each value in the table may be accompanied with references to other tables",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "HMemDb",
          "package": "hmemdb",
          "partial": "HMem Db",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombining operator for reference specifications.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": ":&:",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#%3A%26%3A",
          "type": "data"
        },
        "index": {
          "description": "Combining operator for reference specifications",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": ":&:",
          "package": "hmemdb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombining operator for key specifications.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": ":+:",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Combining operator for key specifications",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": ":+:",
          "package": "hmemdb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput of the \u003ccode\u003e\u003ca\u003ecreateTable\u003c/a\u003e\u003c/code\u003e function. Contains the created table and the keys to it.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Created",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Created",
          "type": "data"
        },
        "index": {
          "description": "Output of the createTable function Contains the created table and the keys to it",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Created",
          "package": "hmemdb",
          "partial": "Created",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type, which allows us to \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e one or many values from the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of values, also same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ei\u003c/code\u003e is a type of index values, used by this key.\n Type \u003ccode\u003eu\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eMultiple\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e, depending on whether this key\n allows different values to have the same index, or not.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Key",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Abstract type which allows us to select one or many values from the Table Type is an abstract type same as in the Table Type is type of values also same as in the Table Type is type of index values used by this key Type is either Multiple or Single depending on whether this key allows different values to have the same index or not",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Key",
          "package": "hmemdb",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne key specification.\n Note that it can't be used in the \u003ccode\u003e\u003ca\u003esKeys\u003c/a\u003e\u003c/code\u003e field by itself,\n but rather should be combined with \u003ccode\u003e\u003ca\u003eKeys\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "KeyRef",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#KeyRef",
          "type": "data"
        },
        "index": {
          "description": "One key specification Note that it can be used in the sKeys field by itself but rather should be combined with Keys with the operator",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "KeyRef",
          "package": "hmemdb",
          "partial": "Key Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that is a template for the key. Used only in \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003es.\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of values in that \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ei\u003c/code\u003e is a type of index values, used by this key.\n Type \u003ccode\u003eu\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eMultiple\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e, depending on whether this key\n allows different values to have the same index, or not.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "KeySpec",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#KeySpec",
          "type": "data"
        },
        "index": {
          "description": "Type that is template for the key Used only in Spec Type is an abstract type same as in the Table Type is type of values in that Table Type is type of index values used by this key Type is either Multiple or Single depending on whether this key allows different values to have the same index or not",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "KeySpec",
          "package": "hmemdb",
          "partial": "Key Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty key specification.\n It doesn't specify any key whatsoever.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Keys",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Keys",
          "type": "data"
        },
        "index": {
          "description": "Empty key specification It doesn specify any key whatsoever",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Keys",
          "package": "hmemdb",
          "partial": "Keys",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of key specifications, used in the \u003ccode\u003e\u003ca\u003esKeys\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "KeysC",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#KeysC",
          "type": "class"
        },
        "index": {
          "description": "Class of key specifications used in the sKeys field of the Spec",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "KeysC",
          "package": "hmemdb",
          "partial": "Keys",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeysC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of the part of key specification, corresponding to one key.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "KeysComponent",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#KeysComponent",
          "type": "class"
        },
        "index": {
          "description": "Class of the part of key specification corresponding to one key",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "KeysComponent",
          "package": "hmemdb",
          "partial": "Keys Component",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeysComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e that can fail.\n Note that it doesn't revert the transaction on failure.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "MS",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#MS",
          "type": "type"
        },
        "index": {
          "description": "STM that can fail Note that it doesn revert the transaction on failure",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "MS",
          "package": "hmemdb",
          "partial": "MS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:MS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type specifies that we want multiple values.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Multiple",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Multiple",
          "type": "data"
        },
        "index": {
          "description": "This type specifies that we want multiple values",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Multiple",
          "package": "hmemdb",
          "partial": "Multiple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Multiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosed class.\n It's instances allow us to choose whether we want to get a single value\n or multiple ones.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Multitude",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Multitude",
          "type": "class"
        },
        "index": {
          "description": "Closed class It instances allow us to choose whether we want to get single value or multiple ones",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Multitude",
          "package": "hmemdb",
          "partial": "Multitude",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Multitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne table reference specification.\n Note that it can't be used in the \u003ccode\u003e\u003ca\u003esRefs\u003c/a\u003e\u003c/code\u003e field by itself,\n but rather should be combined with \u003ccode\u003e\u003ca\u003eRefs\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Ref",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "One table reference specification Note that it can be used in the sRefs field by itself but rather should be combined with Refs with the operator",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Ref",
          "package": "hmemdb",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty reference specification.\n It doesn't specify any reference whatsoever.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Refs",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Refs",
          "type": "data"
        },
        "index": {
          "description": "Empty reference specification It doesn specify any reference whatsoever",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Refs",
          "package": "hmemdb",
          "partial": "Refs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Refs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of table reference specifications, used in the \u003ccode\u003e\u003ca\u003esRefs\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "RefsC",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#RefsC",
          "type": "class"
        },
        "index": {
          "description": "Class of table reference specifications used in the sRefs field of the Spec",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "RefsC",
          "package": "hmemdb",
          "partial": "Refs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:RefsC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of the part of reference specification, corresponding to one reference.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "RefsComponent",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#RefsComponent",
          "type": "class"
        },
        "index": {
          "description": "Class of the part of reference specification corresponding to one reference",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "RefsComponent",
          "package": "hmemdb",
          "partial": "Refs Component",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:RefsComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type specifies that we want a single value.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Single",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Single",
          "type": "data"
        },
        "index": {
          "description": "This type specifies that we want single value",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Single",
          "package": "hmemdb",
          "partial": "Single",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of table specifications.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Spec",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Spec",
          "type": "data"
        },
        "index": {
          "description": "Type of table specifications",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Spec",
          "package": "hmemdb",
          "partial": "Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type, which represents a collection of values of type \u003ccode\u003ea\u003c/code\u003e,\n possibly accompanied with some references to other \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003es.\n The type \u003ccode\u003et\u003c/code\u003e is an abstract type, used to ensure that we don't confuse\n different tables with values of the same type.\n \u003ccode\u003er\u003c/code\u003e is a type of references accompanying each value.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "Table",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#Table",
          "type": "data"
        },
        "index": {
          "description": "Abstract type which represents collection of values of type possibly accompanied with some references to other Table The type is an abstract type used to ensure that we don confuse different tables with values of the same type is type of references accompanying each value",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Table",
          "package": "hmemdb",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that is a template for references to another table. Used only in \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003es.\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of values in that \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003eu\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMultiple\u003c/a\u003e\u003c/code\u003e,\n depending on whether the reference, accompanying the value,\n should be single-value or multiple-value\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "TableRef",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#TableRef",
          "type": "data"
        },
        "index": {
          "description": "Type that is template for references to another table Used only in Spec Type is an abstract type same as in the Table Type is type of values in that Table Type is either Single or Multiple depending on whether the reference accompanying the value should be single-value or multiple-value",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "TableRef",
          "package": "hmemdb",
          "partial": "Table Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to a single value in some table.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "TableVar",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#TableVar",
          "type": "type"
        },
        "index": {
          "description": "Reference to single value in some table",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "TableVar",
          "package": "hmemdb",
          "partial": "Table Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase type for \u003ccode\u003e\u003ca\u003eTableVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTableVars\u003c/a\u003e\u003c/code\u003e\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of value, which can be obtained with \u003ccode\u003eunVar\u003c/code\u003e,\n also same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "TableVarU",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#TableVarU",
          "type": "data"
        },
        "index": {
          "description": "Base type for TableVar and TableVars Type is an abstract type same as in the Table Type is type of value which can be obtained with unVar also same as in the Table",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "TableVarU",
          "package": "hmemdb",
          "partial": "Table Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableVarU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference to multiple values in a single table.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "TableVars",
          "package": "hmemdb",
          "source": "src/Data-HMemDb.html#TableVars",
          "type": "type"
        },
        "index": {
          "description": "Reference to multiple values in single table",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "TableVars",
          "package": "hmemdb",
          "partial": "Table Vars",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMemDb",
          "name": ":&:",
          "package": "hmemdb",
          "signature": "rs f -\u003e f t a u -\u003e (rs :&: Ref t a u) f",
          "source": "src/Data-HMemDb.html#%3A%26%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": ":&:",
          "normalized": "a b-\u003eb c d e-\u003e(a Ref c d e)b",
          "package": "hmemdb",
          "signature": "rs f-\u003ef t a u-\u003e(rs Ref t a u)f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMemDb",
          "name": ":+:",
          "package": "hmemdb",
          "signature": "ks f -\u003e f i u -\u003e (ks :+: KeyRef i u) f",
          "source": "src/Data-HMemDb.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": ":+:",
          "normalized": "a b-\u003eb c d-\u003e(a KeyRef c d)b",
          "package": "hmemdb",
          "signature": "ks f-\u003ef i u-\u003e(ks KeyRef i u)f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMemDb",
          "name": "Created",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e k (Key t a) -\u003e Created r k a",
          "source": "src/Data-HMemDb.html#Created",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Created",
          "normalized": "Table a b c-\u003ed(Key a c)-\u003eCreated b d c",
          "package": "hmemdb",
          "partial": "Created",
          "signature": "Table t r a-\u003ek(Key t a)-\u003eCreated r k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMemDb",
          "name": "Keys",
          "package": "hmemdb",
          "signature": "Keys",
          "source": "src/Data-HMemDb.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Keys",
          "package": "hmemdb",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMemDb",
          "name": "Refs",
          "package": "hmemdb",
          "signature": "Refs",
          "source": "src/Data-HMemDb.html#Refs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Refs",
          "package": "hmemdb",
          "partial": "Refs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Refs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMemDb",
          "name": "Spec",
          "package": "hmemdb",
          "signature": "Spec",
          "source": "src/Data-HMemDb.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "Spec",
          "package": "hmemdb",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that creates the table (along with keys and everything) based on a \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "createTable",
          "package": "hmemdb",
          "signature": "Spec r k a -\u003e STM (Created r k a)",
          "source": "src/Data-HMemDb.html#createTable",
          "type": "function"
        },
        "index": {
          "description": "Function that creates the table along with keys and everything based on Spec",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "createTable",
          "normalized": "Spec a b c-\u003eSTM(Created a b c)",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "Spec r k a-\u003eSTM(Created r k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:createTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that removes the value (along with accompanying references)\n from the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e. It only fails if the value was already removed.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "delete",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableVar t a -\u003e MS ()",
          "source": "src/Data-HMemDb.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Function that removes the value along with accompanying references from the Table It only fails if the value was already removed",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "delete",
          "normalized": "Table a b c-\u003eTableVar a c-\u003eMS()",
          "package": "hmemdb",
          "signature": "Table t r a-\u003eTableVar t a-\u003eMS()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that converts a list of single-value references\n to a single multiple-value reference.\n Normally it should only be used in \u003ccode\u003ecInsert\u003c/code\u003e statments.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "fromList",
          "package": "hmemdb",
          "signature": "[TableVar t a] -\u003e TableVars t a",
          "source": "src/Data-HMemDb.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Function that converts list of single-value references to single multiple-value reference Normally it should only be used in cInsert statments",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "fromList",
          "normalized": "[TableVar a b]-\u003eTableVars a b",
          "package": "hmemdb",
          "partial": "List",
          "signature": "[TableVar t a]-\u003eTableVars t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that makes it possible to read the table from the file or other source.\n Table should be created beforehand, as specifications are not serializable.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "getTable",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e Get (STM ())",
          "source": "src/Data-HMemDb.html#getTable",
          "type": "function"
        },
        "index": {
          "description": "Function that makes it possible to read the table from the file or other source Table should be created beforehand as specifications are not serializable",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "getTable",
          "normalized": "Table a b c-\u003eGet(STM())",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "Table t r a-\u003eGet(STM())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:getTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore generic version of \u003ccode\u003e\u003ca\u003egetTable\u003c/a\u003e\u003c/code\u003e\n that allows to change the way values are serialized.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "getTable_",
          "package": "hmemdb",
          "signature": "Get a -\u003e Table t r a -\u003e Get (STM ())",
          "source": "src/Data-HMemDb.html#getTable_",
          "type": "function"
        },
        "index": {
          "description": "More generic version of getTable that allows to change the way values are serialized",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "getTable_",
          "normalized": "Get a-\u003eTable b c a-\u003eGet(STM())",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "Get a-\u003eTable t r a-\u003eGet(STM())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:getTable_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most generic version of \u003ccode\u003e\u003ca\u003egetTable\u003c/a\u003e\u003c/code\u003e.\n Not only it allows to change the way values are serialized,\n it also permits side-effects during the deserialization.\n The table is still filled in one \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e transaction,\n thus avoiding any difficulties with multithreading.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "getTable__",
          "package": "hmemdb",
          "signature": "Get (m a) -\u003e Table t r a -\u003e Get (m ())",
          "source": "src/Data-HMemDb.html#getTable__",
          "type": "function"
        },
        "index": {
          "description": "The most generic version of getTable Not only it allows to change the way values are serialized it also permits side-effects during the deserialization The table is still filled in one STM transaction thus avoiding any difficulties with multithreading",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "getTable__",
          "normalized": "Get(a b)-\u003eTable c d b-\u003eGet(a())",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "Get(m a)-\u003eTable t r a-\u003eGet(m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:getTable__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that lets one to insert a new value to the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Of course, we have to provide accompanying references as well.\n This function can fail if some key clashes with an already existing one.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "insert",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e a -\u003e r TableVarU -\u003e MS (TableVar t a)",
          "source": "src/Data-HMemDb.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Function that lets one to insert new value to the Table Of course we have to provide accompanying references as well This function can fail if some key clashes with an already existing one",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "insert",
          "normalized": "Table a b c-\u003ec-\u003eb TableVarU-\u003eMS(TableVar a c)",
          "package": "hmemdb",
          "signature": "Table t r a-\u003ea-\u003er TableVarU-\u003eMS(TableVar t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis key will provide access to multiple values in the same \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Their indices will be calculated based on the value alone.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "multiple",
          "package": "hmemdb",
          "signature": "(a -\u003e i) -\u003e KeySpec r a i Multiple",
          "source": "src/Data-HMemDb.html#multiple",
          "type": "function"
        },
        "index": {
          "description": "This key will provide access to multiple values in the same Table Their indices will be calculated based on the value alone",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "multiple",
          "normalized": "(a-\u003eb)-\u003eKeySpec c a b Multiple",
          "package": "hmemdb",
          "signature": "(a-\u003ei)-\u003eKeySpec r a i Multiple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:multiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a more generic version of \u003ccode\u003e\u003ca\u003emultiple\u003c/a\u003e\u003c/code\u003e.\n The difference is that value index will be calculated based on both the value\n and it's accompanying references.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "multiple_",
          "package": "hmemdb",
          "signature": "(a -\u003e r TableVarU -\u003e i) -\u003e KeySpec r a i Multiple",
          "source": "src/Data-HMemDb.html#multiple_",
          "type": "function"
        },
        "index": {
          "description": "This is more generic version of multiple The difference is that value index will be calculated based on both the value and it accompanying references",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "multiple_",
          "normalized": "(a-\u003eb TableVarU-\u003ec)-\u003eKeySpec b a c Multiple",
          "package": "hmemdb",
          "signature": "(a-\u003er TableVarU-\u003ei)-\u003eKeySpec r a i Multiple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:multiple_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach value in the table-to-be should be accompanied with a single-value reference.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "only",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableRef t a Single",
          "source": "src/Data-HMemDb.html#only",
          "type": "function"
        },
        "index": {
          "description": "Each value in the table-to-be should be accompanied with single-value reference",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "only",
          "normalized": "Table a b c-\u003eTableRef a c Single",
          "package": "hmemdb",
          "signature": "Table t r a-\u003eTableRef t a Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that makes it possible to write the table to the file or other storage.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "putTable",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e STM Put",
          "source": "src/Data-HMemDb.html#putTable",
          "type": "function"
        },
        "index": {
          "description": "Function that makes it possible to write the table to the file or other storage",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "putTable",
          "normalized": "Table a b c-\u003eSTM Put",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "Table t r a-\u003eSTM Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:putTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore generic version of \u003ccode\u003e\u003ca\u003eputTable\u003c/a\u003e\u003c/code\u003e\n that allows to change the way values are serialized.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "putTable_",
          "package": "hmemdb",
          "signature": "(a -\u003e Put) -\u003e Table t r a -\u003e STM Put",
          "source": "src/Data-HMemDb.html#putTable_",
          "type": "function"
        },
        "index": {
          "description": "More generic version of putTable that allows to change the way values are serialized",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "putTable_",
          "normalized": "(a-\u003ePut)-\u003eTable b c a-\u003eSTM Put",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "(a-\u003ePut)-\u003eTable t r a-\u003eSTM Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:putTable_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most generic version of \u003ccode\u003e\u003ca\u003eputTable\u003c/a\u003e\u003c/code\u003e.\n Not only it allows to change the way values are serialized,\n it also permits side-effects during the serialization.\n The table is still read in one \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e transaction,\n thus avoiding any difficulties with multithreading.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "putTable__",
          "package": "hmemdb",
          "signature": "(a -\u003e m Put) -\u003e Table t r a -\u003e m Put",
          "source": "src/Data-HMemDb.html#putTable__",
          "type": "function"
        },
        "index": {
          "description": "The most generic version of putTable Not only it allows to change the way values are serialized it also permits side-effects during the serialization The table is still read in one STM transaction thus avoiding any difficulties with multithreading",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "putTable__",
          "normalized": "(a-\u003eb Put)-\u003eTable c d a-\u003eb Put",
          "package": "hmemdb",
          "partial": "Table",
          "signature": "(a-\u003em Put)-\u003eTable t r a-\u003em Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:putTable__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that reads all references accompanying the value.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "readRefs",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableVar t a -\u003e MS (r TableVarU)",
          "source": "src/Data-HMemDb.html#readRefs",
          "type": "function"
        },
        "index": {
          "description": "Function that reads all references accompanying the value",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "readRefs",
          "normalized": "Table a b c-\u003eTableVar a c-\u003eMS(b TableVarU)",
          "package": "hmemdb",
          "partial": "Refs",
          "signature": "Table t r a-\u003eTableVar t a-\u003eMS(r TableVarU)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:readRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that dereferences a value from table.\n Note that we have to provide the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e along with \u003ccode\u003e\u003ca\u003eTableVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "readVar",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableVar t a -\u003e MS a",
          "source": "src/Data-HMemDb.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Function that dereferences value from table Note that we have to provide the Table along with TableVar",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "readVar",
          "normalized": "Table a b c-\u003eTableVar a c-\u003eMS c",
          "package": "hmemdb",
          "partial": "Var",
          "signature": "Table t r a-\u003eTableVar t a-\u003eMS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeys for the table-to-be\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "sKeys",
          "package": "hmemdb",
          "signature": "k (KeySpec r a)",
          "source": "src/Data-HMemDb.html#Spec",
          "type": "function"
        },
        "index": {
          "description": "Keys for the table-to-be",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "sKeys",
          "package": "hmemdb",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:sKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther tables that should be referenced\n by values of this one.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "sRefs",
          "package": "hmemdb",
          "signature": "r TableRef",
          "source": "src/Data-HMemDb.html#Spec",
          "type": "function"
        },
        "index": {
          "description": "Other tables that should be referenced by values of this one",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "sRefs",
          "package": "hmemdb",
          "partial": "Refs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:sRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that selects one value from a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n Note that the value is not returned directly.\n Instead, a reference to it is returned, which allows to get other references,\n accompanying that value in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "select",
          "package": "hmemdb",
          "signature": "Key t a i Single -\u003e i -\u003e MS (TableVar t a)",
          "source": "src/Data-HMemDb.html#select",
          "type": "function"
        },
        "index": {
          "description": "Function that selects one value from Key Note that the value is not returned directly Instead reference to it is returned which allows to get other references accompanying that value in the Table",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "select",
          "normalized": "Key a b c Single-\u003ec-\u003eMS(TableVar a b)",
          "package": "hmemdb",
          "signature": "Key t a i Single-\u003ei-\u003eMS(TableVar t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eselect_\u003c/a\u003e\u003c/code\u003e, which allows to choose two bounds for the index.\n Additional boolean arguments show whether to include bounds themselves or not.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "selectBetween",
          "package": "hmemdb",
          "signature": "Key t a i u-\u003e i-\u003e Bool-\u003e i-\u003e Bool-\u003e STM [TableVar t a]",
          "type": "function"
        },
        "index": {
          "description": "variant of select which allows to choose two bounds for the index Additional boolean arguments show whether to include bounds themselves or not",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "selectBetween",
          "normalized": "Key a b c d-\u003ec-\u003eBool-\u003ec-\u003eBool-\u003eSTM[TableVar a b]",
          "package": "hmemdb",
          "partial": "Between",
          "signature": "Key t a i u-\u003ei-\u003eBool-\u003ei-\u003eBool-\u003eSTM[TableVar t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:selectBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more generic version of \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e. Instead of one value, it returns multiple ones.\n It can also select values with indices that are smaller or greater to the provided one,\n depending on the third argument, which could be anything like \u003ccode\u003e(\u003e)\u003c/code\u003e, \u003ccode\u003e(\u003c=)\u003c/code\u003e, \u003ccode\u003e(/=)\u003c/code\u003e,\n or even \u003ccode\u003ereturn True\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n select_ k i (==) ~~ [select k i]\n\u003c/pre\u003e",
          "module": "Data.HMemDb",
          "name": "select_",
          "package": "hmemdb",
          "signature": "o -\u003e o -\u003e Bool) -\u003e STM [TableVar t a]",
          "source": "src/Data-HMemDb.html#select_",
          "type": "function"
        },
        "index": {
          "description": "more generic version of select Instead of one value it returns multiple ones It can also select values with indices that are smaller or greater to the provided one depending on the third argument which could be anything like or even return True select select",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "select_",
          "normalized": "a-\u003ea-\u003eBool)-\u003eSTM[TableVar b c]",
          "package": "hmemdb",
          "signature": "o-\u003eo-\u003eBool)-\u003eSTM[TableVar t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:select_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis key will provide access to a single value within a \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n It's index will be calculated, based on this value alone.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "single",
          "package": "hmemdb",
          "signature": "(a -\u003e i) -\u003e KeySpec r a i Single",
          "source": "src/Data-HMemDb.html#single",
          "type": "function"
        },
        "index": {
          "description": "This key will provide access to single value within Table It index will be calculated based on this value alone",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "single",
          "normalized": "(a-\u003eb)-\u003eKeySpec c a b Single",
          "package": "hmemdb",
          "signature": "(a-\u003ei)-\u003eKeySpec r a i Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a more generic version of \u003ccode\u003e\u003ca\u003esingle\u003c/a\u003e\u003c/code\u003e.\n The difference is that value index will be calculated based on both the value\n and it's accompanying references.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "single_",
          "package": "hmemdb",
          "signature": "(a -\u003e r TableVarU -\u003e i) -\u003e KeySpec r a i Single",
          "source": "src/Data-HMemDb.html#single_",
          "type": "function"
        },
        "index": {
          "description": "This is more generic version of single The difference is that value index will be calculated based on both the value and it accompanying references",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "single_",
          "normalized": "(a-\u003eb TableVarU-\u003ec)-\u003eKeySpec b a c Single",
          "package": "hmemdb",
          "signature": "(a-\u003er TableVarU-\u003ei)-\u003eKeySpec r a i Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:single_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach value in the table-to-be should be accompanied with a multiple-value reference.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "some",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableRef t a Multiple",
          "source": "src/Data-HMemDb.html#some",
          "type": "function"
        },
        "index": {
          "description": "Each value in the table-to-be should be accompanied with multiple-value reference",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "some",
          "normalized": "Table a b c-\u003eTableRef a c Multiple",
          "package": "hmemdb",
          "signature": "Table t r a-\u003eTableRef t a Multiple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting keys.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "splitKey",
          "package": "hmemdb",
          "signature": "(ks :+: KeyRef i u) f -\u003e (ks f, f i u)",
          "source": "src/Data-HMemDb.html#splitKey",
          "type": "function"
        },
        "index": {
          "description": "Splitting keys",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "splitKey",
          "normalized": "(a KeyRef b c)d-\u003e(a d,d b c)",
          "package": "hmemdb",
          "partial": "Key",
          "signature": "(ks KeyRef i u)f-\u003e(ks f,f i u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:splitKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting references.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "splitRef",
          "package": "hmemdb",
          "signature": "(rs :&: Ref t a u) f -\u003e (rs f, f t a u)",
          "source": "src/Data-HMemDb.html#splitRef",
          "type": "function"
        },
        "index": {
          "description": "Splitting references",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "splitRef",
          "normalized": "(a Ref b c d)e-\u003e(a e,e b c d)",
          "package": "hmemdb",
          "partial": "Ref",
          "signature": "(rs Ref t a u)f-\u003e(rs f,f t a u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:splitRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that converts a multiple-value reference\n to a list of single-value references.\n Should be used with multiple-value references accompanying values in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "toList",
          "package": "hmemdb",
          "signature": "TableVars t a -\u003e [TableVar t a]",
          "source": "src/Data-HMemDb.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Function that converts multiple-value reference to list of single-value references Should be used with multiple-value references accompanying values in the Table",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "toList",
          "normalized": "TableVars a b-\u003e[TableVar a b]",
          "package": "hmemdb",
          "partial": "List",
          "signature": "TableVars t a-\u003e[TableVar t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction that writes another value to the referenced place in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n It doesn't change the accompanying references.\n In case that it fails due to some single-value key prohibiting the new value,\n nothing is changed, and the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e remains the same.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "update",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableVar t a -\u003e a -\u003e MS ()",
          "source": "src/Data-HMemDb.html#update",
          "type": "function"
        },
        "index": {
          "description": "Function that writes another value to the referenced place in the Table It doesn change the accompanying references In case that it fails due to some single-value key prohibiting the new value nothing is changed and the Table remains the same",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "update",
          "normalized": "Table a b c-\u003eTableVar a c-\u003ec-\u003eMS()",
          "package": "hmemdb",
          "signature": "Table t r a-\u003eTableVar t a-\u003ea-\u003eMS()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore generic version of \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e.\n It allows changing accompanying references as well as the value.\n\u003c/p\u003e",
          "module": "Data.HMemDb",
          "name": "update_",
          "package": "hmemdb",
          "signature": "Table t r a -\u003e TableVar t a -\u003e a -\u003e r TableVarU -\u003e MS ()",
          "source": "src/Data-HMemDb.html#update_",
          "type": "function"
        },
        "index": {
          "description": "More generic version of update It allows changing accompanying references as well as the value",
          "hierarchy": "Data HMemDb",
          "module": "Data.HMemDb",
          "name": "update_",
          "normalized": "Table a b c-\u003eTableVar a c-\u003ec-\u003eb TableVarU-\u003eMS()",
          "package": "hmemdb",
          "signature": "Table t r a-\u003eTableVar t a-\u003ea-\u003er TableVarU-\u003eMS()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:update_"
      }
    }
  ]
]