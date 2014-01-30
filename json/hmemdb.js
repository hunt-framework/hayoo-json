[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTables of values and keys for that tables.\n\u003c/p\u003e\u003cp\u003eEach value in the table may be accompanied with references to other tables.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "module",
        "fct-source": "src/Data-HMemDb.html",
        "fct-type": "module",
        "title": "HMemDb"
      },
      "index": {
        "description": "Tables of values and keys for that tables Each value in the table may be accompanied with references to other tables",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "HMemDb",
        "normalized": "",
        "package": "hmemdb",
        "partial": "HMem Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t::-38-:",
      "description": {
        "fct-descr": "\u003cp\u003eCombining operator for reference specifications.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#%3A%26%3A",
        "fct-type": "data",
        "title": ":&:"
      },
      "index": {
        "description": "Combining operator for reference specifications",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": ":&:",
        "normalized": "",
        "package": "hmemdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t::-43-:",
      "description": {
        "fct-descr": "\u003cp\u003eCombining operator for key specifications.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "Combining operator for key specifications",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": ":+:",
        "normalized": "",
        "package": "hmemdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Created",
      "description": {
        "fct-descr": "\u003cp\u003eOutput of the \u003ccode\u003e\u003ca\u003ecreateTable\u003c/a\u003e\u003c/code\u003e function. Contains the created table and the keys to it.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Created",
        "fct-type": "data",
        "title": "Created"
      },
      "index": {
        "description": "Output of the createTable function Contains the created table and the keys to it",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Created",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Created",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type, which allows us to \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e one or many values from the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of values, also same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ei\u003c/code\u003e is a type of index values, used by this key.\n Type \u003ccode\u003eu\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eMultiple\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e, depending on whether this key\n allows different values to have the same index, or not.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Abstract type which allows us to select one or many values from the Table Type is an abstract type same as in the Table Type is type of values also same as in the Table Type is type of index values used by this key Type is either Multiple or Single depending on whether this key allows different values to have the same index or not",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Key",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeyRef",
      "description": {
        "fct-descr": "\u003cp\u003eOne key specification.\n Note that it can't be used in the \u003ccode\u003e\u003ca\u003esKeys\u003c/a\u003e\u003c/code\u003e field by itself,\n but rather should be combined with \u003ccode\u003e\u003ca\u003eKeys\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003e:+:\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#KeyRef",
        "fct-type": "data",
        "title": "KeyRef"
      },
      "index": {
        "description": "One key specification Note that it can be used in the sKeys field by itself but rather should be combined with Keys with the operator",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "KeyRef",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Key Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeySpec",
      "description": {
        "fct-descr": "\u003cp\u003eType that is a template for the key. Used only in \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003es.\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of values in that \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ei\u003c/code\u003e is a type of index values, used by this key.\n Type \u003ccode\u003eu\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eMultiple\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e, depending on whether this key\n allows different values to have the same index, or not.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#KeySpec",
        "fct-type": "data",
        "title": "KeySpec"
      },
      "index": {
        "description": "Type that is template for the key Used only in Spec Type is an abstract type same as in the Table Type is type of values in that Table Type is type of index values used by this key Type is either Multiple or Single depending on whether this key allows different values to have the same index or not",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "KeySpec",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Key Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Keys",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty key specification.\n It doesn't specify any key whatsoever.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Keys",
        "fct-type": "data",
        "title": "Keys"
      },
      "index": {
        "description": "Empty key specification It doesn specify any key whatsoever",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Keys",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeysC",
      "description": {
        "fct-descr": "\u003cp\u003eClass of key specifications, used in the \u003ccode\u003e\u003ca\u003esKeys\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "class",
        "fct-source": "src/Data-HMemDb.html#KeysC",
        "fct-type": "class",
        "title": "KeysC"
      },
      "index": {
        "description": "Class of key specifications used in the sKeys field of the Spec",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "KeysC",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:KeysComponent",
      "description": {
        "fct-descr": "\u003cp\u003eClass of the part of key specification, corresponding to one key.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "class",
        "fct-source": "src/Data-HMemDb.html#KeysComponent",
        "fct-type": "class",
        "title": "KeysComponent"
      },
      "index": {
        "description": "Class of the part of key specification corresponding to one key",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "KeysComponent",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Keys Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:MS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e that can fail.\n Note that it doesn't revert the transaction on failure.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "type",
        "fct-source": "src/Data-HMemDb.html#MS",
        "fct-type": "type",
        "title": "MS"
      },
      "index": {
        "description": "STM that can fail Note that it doesn revert the transaction on failure",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "MS",
        "normalized": "",
        "package": "hmemdb",
        "partial": "MS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Multiple",
      "description": {
        "fct-descr": "\u003cp\u003eThis type specifies that we want multiple values.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Multiple",
        "fct-type": "data",
        "title": "Multiple"
      },
      "index": {
        "description": "This type specifies that we want multiple values",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Multiple",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Multiple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Multitude",
      "description": {
        "fct-descr": "\u003cp\u003eClosed class.\n It's instances allow us to choose whether we want to get a single value\n or multiple ones.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "class",
        "fct-source": "src/Data-HMemDb.html#Multitude",
        "fct-type": "class",
        "title": "Multitude"
      },
      "index": {
        "description": "Closed class It instances allow us to choose whether we want to get single value or multiple ones",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Multitude",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Multitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Ref",
      "description": {
        "fct-descr": "\u003cp\u003eOne table reference specification.\n Note that it can't be used in the \u003ccode\u003e\u003ca\u003esRefs\u003c/a\u003e\u003c/code\u003e field by itself,\n but rather should be combined with \u003ccode\u003e\u003ca\u003eRefs\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003e:&:\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "One table reference specification Note that it can be used in the sRefs field by itself but rather should be combined with Refs with the operator",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Ref",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Refs",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty reference specification.\n It doesn't specify any reference whatsoever.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Refs",
        "fct-type": "data",
        "title": "Refs"
      },
      "index": {
        "description": "Empty reference specification It doesn specify any reference whatsoever",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Refs",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Refs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:RefsC",
      "description": {
        "fct-descr": "\u003cp\u003eClass of table reference specifications, used in the \u003ccode\u003e\u003ca\u003esRefs\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "class",
        "fct-source": "src/Data-HMemDb.html#RefsC",
        "fct-type": "class",
        "title": "RefsC"
      },
      "index": {
        "description": "Class of table reference specifications used in the sRefs field of the Spec",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "RefsC",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Refs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:RefsComponent",
      "description": {
        "fct-descr": "\u003cp\u003eClass of the part of reference specification, corresponding to one reference.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "class",
        "fct-source": "src/Data-HMemDb.html#RefsComponent",
        "fct-type": "class",
        "title": "RefsComponent"
      },
      "index": {
        "description": "Class of the part of reference specification corresponding to one reference",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "RefsComponent",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Refs Component",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Single",
      "description": {
        "fct-descr": "\u003cp\u003eThis type specifies that we want a single value.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Single",
        "fct-type": "data",
        "title": "Single"
      },
      "index": {
        "description": "This type specifies that we want single value",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Single",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Spec",
      "description": {
        "fct-descr": "\u003cp\u003eType of table specifications.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Spec",
        "fct-type": "data",
        "title": "Spec"
      },
      "index": {
        "description": "Type of table specifications",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Spec",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type, which represents a collection of values of type \u003ccode\u003ea\u003c/code\u003e,\n possibly accompanied with some references to other \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003es.\n The type \u003ccode\u003et\u003c/code\u003e is an abstract type, used to ensure that we don't confuse\n different tables with values of the same type.\n \u003ccode\u003er\u003c/code\u003e is a type of references accompanying each value.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#Table",
        "fct-type": "data",
        "title": "Table"
      },
      "index": {
        "description": "Abstract type which represents collection of values of type possibly accompanied with some references to other Table The type is an abstract type used to ensure that we don confuse different tables with values of the same type is type of references accompanying each value",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Table",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableRef",
      "description": {
        "fct-descr": "\u003cp\u003eType that is a template for references to another table. Used only in \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003es.\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of values in that \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003eu\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMultiple\u003c/a\u003e\u003c/code\u003e,\n depending on whether the reference, accompanying the value,\n should be single-value or multiple-value\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#TableRef",
        "fct-type": "data",
        "title": "TableRef"
      },
      "index": {
        "description": "Type that is template for references to another table Used only in Spec Type is an abstract type same as in the Table Type is type of values in that Table Type is either Single or Multiple depending on whether the reference accompanying the value should be single-value or multiple-value",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "TableRef",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Table Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableVar",
      "description": {
        "fct-descr": "\u003cp\u003eReference to a single value in some table.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "type",
        "fct-source": "src/Data-HMemDb.html#TableVar",
        "fct-type": "type",
        "title": "TableVar"
      },
      "index": {
        "description": "Reference to single value in some table",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "TableVar",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Table Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableVarU",
      "description": {
        "fct-descr": "\u003cp\u003eBase type for \u003ccode\u003e\u003ca\u003eTableVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTableVars\u003c/a\u003e\u003c/code\u003e\n Type \u003ccode\u003et\u003c/code\u003e is an abstract type, same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Type \u003ccode\u003ea\u003c/code\u003e is a type of value, which can be obtained with \u003ccode\u003eunVar\u003c/code\u003e,\n also same as in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "data",
        "fct-source": "src/Data-HMemDb.html#TableVarU",
        "fct-type": "data",
        "title": "TableVarU"
      },
      "index": {
        "description": "Base type for TableVar and TableVars Type is an abstract type same as in the Table Type is type of value which can be obtained with unVar also same as in the Table",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "TableVarU",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Table Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#t:TableVars",
      "description": {
        "fct-descr": "\u003cp\u003eReference to multiple values in a single table.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "type",
        "fct-source": "src/Data-HMemDb.html#TableVars",
        "fct-type": "type",
        "title": "TableVars"
      },
      "index": {
        "description": "Reference to multiple values in single table",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "TableVars",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Table Vars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v::-38-:",
      "description": {
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "rs f -\u003e f t a u -\u003e (rs :&: Ref t a u) f",
        "fct-source": "src/Data-HMemDb.html#%3A%26%3A",
        "fct-type": "function",
        "title": ":&:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": ":&:",
        "normalized": "a b-\u003eb c d e-\u003e(a Ref c d e)b",
        "package": "hmemdb",
        "partial": "",
        "signature": "rs f-\u003ef t a u-\u003e(rs Ref t a u)f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v::-43-:",
      "description": {
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "ks f -\u003e f i u -\u003e (ks :+: KeyRef i u) f",
        "fct-source": "src/Data-HMemDb.html#%3A%2B%3A",
        "fct-type": "function",
        "title": ":+:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": ":+:",
        "normalized": "a b-\u003eb c d-\u003e(a KeyRef c d)b",
        "package": "hmemdb",
        "partial": "",
        "signature": "ks f-\u003ef i u-\u003e(ks KeyRef i u)f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Created",
      "description": {
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e k (Key t a) -\u003e Created r k a",
        "fct-source": "src/Data-HMemDb.html#Created",
        "fct-type": "function",
        "title": "Created"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Created",
        "normalized": "Table a b c-\u003ed(Key a c)-\u003eCreated b d c",
        "package": "hmemdb",
        "partial": "Created",
        "signature": "Table t r a-\u003ek(Key t a)-\u003eCreated r k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Keys",
      "description": {
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Keys",
        "fct-source": "src/Data-HMemDb.html#Keys",
        "fct-type": "function",
        "title": "Keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Keys",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Refs",
      "description": {
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Refs",
        "fct-source": "src/Data-HMemDb.html#Refs",
        "fct-type": "function",
        "title": "Refs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Refs",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Refs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:Spec",
      "description": {
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Spec",
        "fct-source": "src/Data-HMemDb.html#Spec",
        "fct-type": "function",
        "title": "Spec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "Spec",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:createTable",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that creates the table (along with keys and everything) based on a \u003ccode\u003e\u003ca\u003eSpec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Spec r k a -\u003e STM (Created r k a)",
        "fct-source": "src/Data-HMemDb.html#createTable",
        "fct-type": "function",
        "title": "createTable"
      },
      "index": {
        "description": "Function that creates the table along with keys and everything based on Spec",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "createTable",
        "normalized": "Spec a b c-\u003eSTM(Created a b c)",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "Spec r k a-\u003eSTM(Created r k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that removes the value (along with accompanying references)\n from the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e. It only fails if the value was already removed.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableVar t a -\u003e MS ()",
        "fct-source": "src/Data-HMemDb.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Function that removes the value along with accompanying references from the Table It only fails if the value was already removed",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "delete",
        "normalized": "Table a b c-\u003eTableVar a c-\u003eMS()",
        "package": "hmemdb",
        "partial": "",
        "signature": "Table t r a-\u003eTableVar t a-\u003eMS()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that converts a list of single-value references\n to a single multiple-value reference.\n Normally it should only be used in \u003ccode\u003ecInsert\u003c/code\u003e statments.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "[TableVar t a] -\u003e TableVars t a",
        "fct-source": "src/Data-HMemDb.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Function that converts list of single-value references to single multiple-value reference Normally it should only be used in cInsert statments",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "fromList",
        "normalized": "[TableVar a b]-\u003eTableVars a b",
        "package": "hmemdb",
        "partial": "List",
        "signature": "[TableVar t a]-\u003eTableVars t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:getTable",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that makes it possible to read the table from the file or other source.\n Table should be created beforehand, as specifications are not serializable.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e Get (STM ())",
        "fct-source": "src/Data-HMemDb.html#getTable",
        "fct-type": "function",
        "title": "getTable"
      },
      "index": {
        "description": "Function that makes it possible to read the table from the file or other source Table should be created beforehand as specifications are not serializable",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "getTable",
        "normalized": "Table a b c-\u003eGet(STM())",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "Table t r a-\u003eGet(STM())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:getTable_",
      "description": {
        "fct-descr": "\u003cp\u003eMore generic version of \u003ccode\u003e\u003ca\u003egetTable\u003c/a\u003e\u003c/code\u003e\n that allows to change the way values are serialized.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Get a -\u003e Table t r a -\u003e Get (STM ())",
        "fct-source": "src/Data-HMemDb.html#getTable_",
        "fct-type": "function",
        "title": "getTable_"
      },
      "index": {
        "description": "More generic version of getTable that allows to change the way values are serialized",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "getTable_",
        "normalized": "Get a-\u003eTable b c a-\u003eGet(STM())",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "Get a-\u003eTable t r a-\u003eGet(STM())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:getTable__",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generic version of \u003ccode\u003e\u003ca\u003egetTable\u003c/a\u003e\u003c/code\u003e.\n Not only it allows to change the way values are serialized,\n it also permits side-effects during the deserialization.\n The table is still filled in one \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e transaction,\n thus avoiding any difficulties with multithreading.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Get (m a) -\u003e Table t r a -\u003e Get (m ())",
        "fct-source": "src/Data-HMemDb.html#getTable__",
        "fct-type": "function",
        "title": "getTable__"
      },
      "index": {
        "description": "The most generic version of getTable Not only it allows to change the way values are serialized it also permits side-effects during the deserialization The table is still filled in one STM transaction thus avoiding any difficulties with multithreading",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "getTable__",
        "normalized": "Get(a b)-\u003eTable c d b-\u003eGet(a())",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "Get(m a)-\u003eTable t r a-\u003eGet(m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that lets one to insert a new value to the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Of course, we have to provide accompanying references as well.\n This function can fail if some key clashes with an already existing one.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e a -\u003e r TableVarU -\u003e MS (TableVar t a)",
        "fct-source": "src/Data-HMemDb.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Function that lets one to insert new value to the Table Of course we have to provide accompanying references as well This function can fail if some key clashes with an already existing one",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "insert",
        "normalized": "Table a b c-\u003ec-\u003eb TableVarU-\u003eMS(TableVar a c)",
        "package": "hmemdb",
        "partial": "",
        "signature": "Table t r a-\u003ea-\u003er TableVarU-\u003eMS(TableVar t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:multiple",
      "description": {
        "fct-descr": "\u003cp\u003eThis key will provide access to multiple values in the same \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n Their indices will be calculated based on the value alone.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(a -\u003e i) -\u003e KeySpec r a i Multiple",
        "fct-source": "src/Data-HMemDb.html#multiple",
        "fct-type": "function",
        "title": "multiple"
      },
      "index": {
        "description": "This key will provide access to multiple values in the same Table Their indices will be calculated based on the value alone",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "multiple",
        "normalized": "(a-\u003eb)-\u003eKeySpec c a b Multiple",
        "package": "hmemdb",
        "partial": "",
        "signature": "(a-\u003ei)-\u003eKeySpec r a i Multiple"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:multiple_",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a more generic version of \u003ccode\u003e\u003ca\u003emultiple\u003c/a\u003e\u003c/code\u003e.\n The difference is that value index will be calculated based on both the value\n and it's accompanying references.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(a -\u003e r TableVarU -\u003e i) -\u003e KeySpec r a i Multiple",
        "fct-source": "src/Data-HMemDb.html#multiple_",
        "fct-type": "function",
        "title": "multiple_"
      },
      "index": {
        "description": "This is more generic version of multiple The difference is that value index will be calculated based on both the value and it accompanying references",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "multiple_",
        "normalized": "(a-\u003eb TableVarU-\u003ec)-\u003eKeySpec b a c Multiple",
        "package": "hmemdb",
        "partial": "",
        "signature": "(a-\u003er TableVarU-\u003ei)-\u003eKeySpec r a i Multiple"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:only",
      "description": {
        "fct-descr": "\u003cp\u003eEach value in the table-to-be should be accompanied with a single-value reference.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableRef t a Single",
        "fct-source": "src/Data-HMemDb.html#only",
        "fct-type": "function",
        "title": "only"
      },
      "index": {
        "description": "Each value in the table-to-be should be accompanied with single-value reference",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "only",
        "normalized": "Table a b c-\u003eTableRef a c Single",
        "package": "hmemdb",
        "partial": "",
        "signature": "Table t r a-\u003eTableRef t a Single"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:putTable",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that makes it possible to write the table to the file or other storage.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e STM Put",
        "fct-source": "src/Data-HMemDb.html#putTable",
        "fct-type": "function",
        "title": "putTable"
      },
      "index": {
        "description": "Function that makes it possible to write the table to the file or other storage",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "putTable",
        "normalized": "Table a b c-\u003eSTM Put",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "Table t r a-\u003eSTM Put"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:putTable_",
      "description": {
        "fct-descr": "\u003cp\u003eMore generic version of \u003ccode\u003e\u003ca\u003eputTable\u003c/a\u003e\u003c/code\u003e\n that allows to change the way values are serialized.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(a -\u003e Put) -\u003e Table t r a -\u003e STM Put",
        "fct-source": "src/Data-HMemDb.html#putTable_",
        "fct-type": "function",
        "title": "putTable_"
      },
      "index": {
        "description": "More generic version of putTable that allows to change the way values are serialized",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "putTable_",
        "normalized": "(a-\u003ePut)-\u003eTable b c a-\u003eSTM Put",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "(a-\u003ePut)-\u003eTable t r a-\u003eSTM Put"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:putTable__",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generic version of \u003ccode\u003e\u003ca\u003eputTable\u003c/a\u003e\u003c/code\u003e.\n Not only it allows to change the way values are serialized,\n it also permits side-effects during the serialization.\n The table is still read in one \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e transaction,\n thus avoiding any difficulties with multithreading.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(a -\u003e m Put) -\u003e Table t r a -\u003e m Put",
        "fct-source": "src/Data-HMemDb.html#putTable__",
        "fct-type": "function",
        "title": "putTable__"
      },
      "index": {
        "description": "The most generic version of putTable Not only it allows to change the way values are serialized it also permits side-effects during the serialization The table is still read in one STM transaction thus avoiding any difficulties with multithreading",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "putTable__",
        "normalized": "(a-\u003eb Put)-\u003eTable c d a-\u003eb Put",
        "package": "hmemdb",
        "partial": "Table",
        "signature": "(a-\u003em Put)-\u003eTable t r a-\u003em Put"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:readRefs",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that reads all references accompanying the value.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableVar t a -\u003e MS (r TableVarU)",
        "fct-source": "src/Data-HMemDb.html#readRefs",
        "fct-type": "function",
        "title": "readRefs"
      },
      "index": {
        "description": "Function that reads all references accompanying the value",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "readRefs",
        "normalized": "Table a b c-\u003eTableVar a c-\u003eMS(b TableVarU)",
        "package": "hmemdb",
        "partial": "Refs",
        "signature": "Table t r a-\u003eTableVar t a-\u003eMS(r TableVarU)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:readVar",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that dereferences a value from table.\n Note that we have to provide the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e along with \u003ccode\u003e\u003ca\u003eTableVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableVar t a -\u003e MS a",
        "fct-source": "src/Data-HMemDb.html#readVar",
        "fct-type": "function",
        "title": "readVar"
      },
      "index": {
        "description": "Function that dereferences value from table Note that we have to provide the Table along with TableVar",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "readVar",
        "normalized": "Table a b c-\u003eTableVar a c-\u003eMS c",
        "package": "hmemdb",
        "partial": "Var",
        "signature": "Table t r a-\u003eTableVar t a-\u003eMS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:sKeys",
      "description": {
        "fct-descr": "\u003cp\u003eKeys for the table-to-be\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "k (KeySpec r a)",
        "fct-source": "src/Data-HMemDb.html#Spec",
        "fct-type": "function",
        "title": "sKeys"
      },
      "index": {
        "description": "Keys for the table-to-be",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "sKeys",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:sRefs",
      "description": {
        "fct-descr": "\u003cp\u003eOther tables that should be referenced\n by values of this one.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "r TableRef",
        "fct-source": "src/Data-HMemDb.html#Spec",
        "fct-type": "function",
        "title": "sRefs"
      },
      "index": {
        "description": "Other tables that should be referenced by values of this one",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "sRefs",
        "normalized": "",
        "package": "hmemdb",
        "partial": "Refs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that selects one value from a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n Note that the value is not returned directly.\n Instead, a reference to it is returned, which allows to get other references,\n accompanying that value in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Key t a i Single -\u003e i -\u003e MS (TableVar t a)",
        "fct-source": "src/Data-HMemDb.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Function that selects one value from Key Note that the value is not returned directly Instead reference to it is returned which allows to get other references accompanying that value in the Table",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "select",
        "normalized": "Key a b c Single-\u003ec-\u003eMS(TableVar a b)",
        "package": "hmemdb",
        "partial": "",
        "signature": "Key t a i Single-\u003ei-\u003eMS(TableVar t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:selectBetween",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eselect_\u003c/a\u003e\u003c/code\u003e, which allows to choose two bounds for the index.\n Additional boolean arguments show whether to include bounds themselves or not.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Key t a i u-\u003e i-\u003e Bool-\u003e i-\u003e Bool-\u003e STM [TableVar t a]",
        "fct-type": "function",
        "title": "selectBetween"
      },
      "index": {
        "description": "variant of select which allows to choose two bounds for the index Additional boolean arguments show whether to include bounds themselves or not",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "selectBetween",
        "normalized": "Key a b c d-\u003ec-\u003eBool-\u003ec-\u003eBool-\u003eSTM[TableVar a b]",
        "package": "hmemdb",
        "partial": "Between",
        "signature": "Key t a i u-\u003ei-\u003eBool-\u003ei-\u003eBool-\u003eSTM[TableVar t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:select_",
      "description": {
        "fct-descr": "\u003cp\u003eA more generic version of \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e. Instead of one value, it returns multiple ones.\n It can also select values with indices that are smaller or greater to the provided one,\n depending on the third argument, which could be anything like \u003ccode\u003e(\u003e)\u003c/code\u003e, \u003ccode\u003e(\u003c=)\u003c/code\u003e, \u003ccode\u003e(/=)\u003c/code\u003e,\n or even \u003ccode\u003ereturn True\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n select_ k i (==) ~~ [select k i]\n\u003c/pre\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "o -\u003e o -\u003e Bool) -\u003e STM [TableVar t a]",
        "fct-source": "src/Data-HMemDb.html#select_",
        "fct-type": "function",
        "title": "select_"
      },
      "index": {
        "description": "more generic version of select Instead of one value it returns multiple ones It can also select values with indices that are smaller or greater to the provided one depending on the third argument which could be anything like or even return True select select",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "select_",
        "normalized": "a-\u003ea-\u003eBool)-\u003eSTM[TableVar b c]",
        "package": "hmemdb",
        "partial": "",
        "signature": "o-\u003eo-\u003eBool)-\u003eSTM[TableVar t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:single",
      "description": {
        "fct-descr": "\u003cp\u003eThis key will provide access to a single value within a \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n It's index will be calculated, based on this value alone.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(a -\u003e i) -\u003e KeySpec r a i Single",
        "fct-source": "src/Data-HMemDb.html#single",
        "fct-type": "function",
        "title": "single"
      },
      "index": {
        "description": "This key will provide access to single value within Table It index will be calculated based on this value alone",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "single",
        "normalized": "(a-\u003eb)-\u003eKeySpec c a b Single",
        "package": "hmemdb",
        "partial": "",
        "signature": "(a-\u003ei)-\u003eKeySpec r a i Single"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:single_",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a more generic version of \u003ccode\u003e\u003ca\u003esingle\u003c/a\u003e\u003c/code\u003e.\n The difference is that value index will be calculated based on both the value\n and it's accompanying references.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(a -\u003e r TableVarU -\u003e i) -\u003e KeySpec r a i Single",
        "fct-source": "src/Data-HMemDb.html#single_",
        "fct-type": "function",
        "title": "single_"
      },
      "index": {
        "description": "This is more generic version of single The difference is that value index will be calculated based on both the value and it accompanying references",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "single_",
        "normalized": "(a-\u003eb TableVarU-\u003ec)-\u003eKeySpec b a c Single",
        "package": "hmemdb",
        "partial": "",
        "signature": "(a-\u003er TableVarU-\u003ei)-\u003eKeySpec r a i Single"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:some",
      "description": {
        "fct-descr": "\u003cp\u003eEach value in the table-to-be should be accompanied with a multiple-value reference.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableRef t a Multiple",
        "fct-source": "src/Data-HMemDb.html#some",
        "fct-type": "function",
        "title": "some"
      },
      "index": {
        "description": "Each value in the table-to-be should be accompanied with multiple-value reference",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "some",
        "normalized": "Table a b c-\u003eTableRef a c Multiple",
        "package": "hmemdb",
        "partial": "",
        "signature": "Table t r a-\u003eTableRef t a Multiple"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:splitKey",
      "description": {
        "fct-descr": "\u003cp\u003eSplitting keys.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(ks :+: KeyRef i u) f -\u003e (ks f, f i u)",
        "fct-source": "src/Data-HMemDb.html#splitKey",
        "fct-type": "function",
        "title": "splitKey"
      },
      "index": {
        "description": "Splitting keys",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "splitKey",
        "normalized": "(a KeyRef b c)d-\u003e(a d,d b c)",
        "package": "hmemdb",
        "partial": "Key",
        "signature": "(ks KeyRef i u)f-\u003e(ks f,f i u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:splitRef",
      "description": {
        "fct-descr": "\u003cp\u003eSplitting references.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "(rs :&: Ref t a u) f -\u003e (rs f, f t a u)",
        "fct-source": "src/Data-HMemDb.html#splitRef",
        "fct-type": "function",
        "title": "splitRef"
      },
      "index": {
        "description": "Splitting references",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "splitRef",
        "normalized": "(a Ref b c d)e-\u003e(a e,e b c d)",
        "package": "hmemdb",
        "partial": "Ref",
        "signature": "(rs Ref t a u)f-\u003e(rs f,f t a u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that converts a multiple-value reference\n to a list of single-value references.\n Should be used with multiple-value references accompanying values in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "TableVars t a -\u003e [TableVar t a]",
        "fct-source": "src/Data-HMemDb.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Function that converts multiple-value reference to list of single-value references Should be used with multiple-value references accompanying values in the Table",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "toList",
        "normalized": "TableVars a b-\u003e[TableVar a b]",
        "package": "hmemdb",
        "partial": "List",
        "signature": "TableVars t a-\u003e[TableVar t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eFunction that writes another value to the referenced place in the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e.\n It doesn't change the accompanying references.\n In case that it fails due to some single-value key prohibiting the new value,\n nothing is changed, and the \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e remains the same.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableVar t a -\u003e a -\u003e MS ()",
        "fct-source": "src/Data-HMemDb.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Function that writes another value to the referenced place in the Table It doesn change the accompanying references In case that it fails due to some single-value key prohibiting the new value nothing is changed and the Table remains the same",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "update",
        "normalized": "Table a b c-\u003eTableVar a c-\u003ec-\u003eMS()",
        "package": "hmemdb",
        "partial": "",
        "signature": "Table t r a-\u003eTableVar t a-\u003ea-\u003eMS()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hmemdb/docs/Data-HMemDb.html#v:update_",
      "description": {
        "fct-descr": "\u003cp\u003eMore generic version of \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e.\n It allows changing accompanying references as well as the value.\n\u003c/p\u003e",
        "fct-module": "Data.HMemDb",
        "fct-package": "hmemdb",
        "fct-signature": "Table t r a -\u003e TableVar t a -\u003e a -\u003e r TableVarU -\u003e MS ()",
        "fct-source": "src/Data-HMemDb.html#update_",
        "fct-type": "function",
        "title": "update_"
      },
      "index": {
        "description": "More generic version of update It allows changing accompanying references as well as the value",
        "hierarchy": "Data HMemDb",
        "module": "Data.HMemDb",
        "name": "update_",
        "normalized": "Table a b c-\u003eTableVar a c-\u003ec-\u003eb TableVarU-\u003eMS()",
        "package": "hmemdb",
        "partial": "",
        "signature": "Table t r a-\u003eTableVar t a-\u003ea-\u003er TableVarU-\u003eMS()"
      }
    }
  }
]