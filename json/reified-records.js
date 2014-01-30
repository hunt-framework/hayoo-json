[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Reify.html#",
      "description": {
        "fct-module": "Data.Generics.Record.Reify",
        "fct-package": "reified-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Record-Reify.html",
        "fct-type": "module",
        "title": "Reify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Record Reify",
        "module": "Data.Generics.Record.Reify",
        "name": "Reify",
        "normalized": "",
        "package": "reified-records",
        "partial": "Reify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Reify.html#v:reflect",
      "description": {
        "fct-descr": "\u003cp\u003eReflect a \u003ccode\u003eMap\u003c/code\u003e of strings to an arbitrary type. If the type is a record, each of\n its field names will be looked up in the record. If any of the types don't match\n or if \u003ccode\u003ea\u003c/code\u003e isn't a record, \u003ccode\u003eNothing\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Reify",
        "fct-package": "reified-records",
        "fct-signature": "Map String Dynamic -\u003e Maybe a",
        "fct-source": "src/Data-Generics-Record-Reify.html#reflect",
        "fct-type": "function",
        "title": "reflect"
      },
      "index": {
        "description": "Reflect Map of strings to an arbitrary type If the type is record each of its field names will be looked up in the record If any of the types don match or if isn record Nothing will be returned",
        "hierarchy": "Data Generics Record Reify",
        "module": "Data.Generics.Record.Reify",
        "name": "reflect",
        "normalized": "Map String Dynamic-\u003eMaybe a",
        "package": "reified-records",
        "partial": "",
        "signature": "Map String Dynamic-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Reify.html#v:reify",
      "description": {
        "fct-descr": "\u003cp\u003eReify a record to a \u003ccode\u003eMap\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Reify",
        "fct-package": "reified-records",
        "fct-signature": "RecordT a -\u003e a -\u003e Map String Dynamic",
        "fct-source": "src/Data-Generics-Record-Reify.html#reify",
        "fct-type": "function",
        "title": "reify"
      },
      "index": {
        "description": "Reify record to Map",
        "hierarchy": "Data Generics Record Reify",
        "module": "Data.Generics.Record.Reify",
        "name": "reify",
        "normalized": "RecordT a-\u003ea-\u003eMap String Dynamic",
        "package": "reified-records",
        "partial": "",
        "signature": "RecordT a-\u003ea-\u003eMap String Dynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Reify.html#v:reifyMay",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ea\u003c/code\u003e is a record, this will return a \u003ccode\u003eMap\u003c/code\u003e where the keys\n are the field names and the values are wrapped in \u003ccode\u003etoDyn\u003c/code\u003e. Otherwise\n \u003ccode\u003eNothing\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Reify",
        "fct-package": "reified-records",
        "fct-signature": "a -\u003e Maybe (Map String Dynamic)",
        "fct-source": "src/Data-Generics-Record-Reify.html#reifyMay",
        "fct-type": "function",
        "title": "reifyMay"
      },
      "index": {
        "description": "If is record this will return Map where the keys are the field names and the values are wrapped in toDyn Otherwise Nothing will be returned",
        "hierarchy": "Data Generics Record Reify",
        "module": "Data.Generics.Record.Reify",
        "name": "reifyMay",
        "normalized": "a-\u003eMaybe(Map String Dynamic)",
        "package": "reified-records",
        "partial": "May",
        "signature": "a-\u003eMaybe(Map String Dynamic)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Subtype.html#",
      "description": {
        "fct-module": "Data.Generics.Record.Subtype",
        "fct-package": "reified-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Record-Subtype.html",
        "fct-type": "module",
        "title": "Subtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Record Subtype",
        "module": "Data.Generics.Record.Subtype",
        "name": "Subtype",
        "normalized": "",
        "package": "reified-records",
        "partial": "Subtype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Subtype.html#t::-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eA witness for a subtyping relation between two records so that \u003ccode\u003e a \u003c: b \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Subtype",
        "fct-package": "reified-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Record-Subtype.html#%3A%3C%3A",
        "fct-type": "data",
        "title": ":\u003c:"
      },
      "index": {
        "description": "witness for subtyping relation between two records so that",
        "hierarchy": "Data Generics Record Subtype",
        "module": "Data.Generics.Record.Subtype",
        "name": ":\u003c:",
        "normalized": "",
        "package": "reified-records",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Subtype.html#v:genSubtype",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a witness for a subtyping relation for \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e by traversing\n the fields of \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e and pairing each field of \u003ccode\u003ea\u003c/code\u003e with\n the first one of the same type in \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Subtype",
        "fct-package": "reified-records",
        "fct-signature": "RecordT a -\u003e RecordT b -\u003e Maybe (a :\u003c: b)",
        "fct-source": "src/Data-Generics-Record-Subtype.html#genSubtype",
        "fct-type": "function",
        "title": "genSubtype"
      },
      "index": {
        "description": "Returns witness for subtyping relation for and by traversing the fields of and and pairing each field of with the first one of the same type in",
        "hierarchy": "Data Generics Record Subtype",
        "module": "Data.Generics.Record.Subtype",
        "name": "genSubtype",
        "normalized": "RecordT a-\u003eRecordT b-\u003eMaybe(a b)",
        "package": "reified-records",
        "partial": "Subtype",
        "signature": "RecordT a-\u003eRecordT b-\u003eMaybe(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Subtype.html#v:isSubtype",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if \u003ccode\u003e a \u003c: b \u003c/code\u003e according to the algorithm for \u003ccode\u003egenSubtype\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Subtype",
        "fct-package": "reified-records",
        "fct-signature": "RecordT a -\u003e RecordT b -\u003e Bool",
        "fct-source": "src/Data-Generics-Record-Subtype.html#isSubtype",
        "fct-type": "function",
        "title": "isSubtype"
      },
      "index": {
        "description": "Returns true if according to the algorithm for genSubtype",
        "hierarchy": "Data Generics Record Subtype",
        "module": "Data.Generics.Record.Subtype",
        "name": "isSubtype",
        "normalized": "RecordT a-\u003eRecordT b-\u003eBool",
        "package": "reified-records",
        "partial": "Subtype",
        "signature": "RecordT a-\u003eRecordT b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record-Subtype.html#v:upcast",
      "description": {
        "fct-descr": "\u003cp\u003eUpcast a type according to a subtyping witness.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record.Subtype",
        "fct-package": "reified-records",
        "fct-signature": "(a :\u003c: b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Generics-Record-Subtype.html#upcast",
        "fct-type": "function",
        "title": "upcast"
      },
      "index": {
        "description": "Upcast type according to subtyping witness",
        "hierarchy": "Data Generics Record Subtype",
        "module": "Data.Generics.Record.Subtype",
        "name": "upcast",
        "normalized": "(a b)-\u003ea-\u003eb",
        "package": "reified-records",
        "partial": "",
        "signature": "(a b)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#",
      "description": {
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Record.html",
        "fct-type": "module",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "Record",
        "normalized": "",
        "package": "reified-records",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#t:RecordT",
      "description": {
        "fct-descr": "\u003cp\u003eA phantom type used to parameterize functions based on records.\n This let's us avoid passing \u003ccode\u003eundefined\u003c/code\u003es or manually creating instances\n all the time. It can only be created for types which are records and\n is used as a token to most of the API's functions.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "data",
        "fct-source": "src/Data-Generics-Record.html#RecordT",
        "fct-type": "data",
        "title": "RecordT"
      },
      "index": {
        "description": "phantom type used to parameterize functions based on records This let us avoid passing undefined or manually creating instances all the time It can only be created for types which are records and is used as token to most of the API functions",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "RecordT",
        "normalized": "",
        "package": "reified-records",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#v:emptyRecord",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a record where all fields are _|_\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "RecordT a -\u003e a",
        "fct-source": "src/Data-Generics-Record.html#emptyRecord",
        "fct-type": "function",
        "title": "emptyRecord"
      },
      "index": {
        "description": "Return record where all fields are",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "emptyRecord",
        "normalized": "RecordT a-\u003ea",
        "package": "reified-records",
        "partial": "Record",
        "signature": "RecordT a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#v:fields",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the fields for the record \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "RecordT a -\u003e [String]",
        "fct-source": "src/Data-Generics-Record.html#fields",
        "fct-type": "function",
        "title": "fields"
      },
      "index": {
        "description": "Returns the fields for the record",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "fields",
        "normalized": "RecordT a-\u003e[String]",
        "package": "reified-records",
        "partial": "",
        "signature": "RecordT a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#v:isRecord",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if \u003ccode\u003ea\u003c/code\u003e is a data type with a single constructor\n and is a record.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-Generics-Record.html#isRecord",
        "fct-type": "function",
        "title": "isRecord"
      },
      "index": {
        "description": "Returns True if is data type with single constructor and is record",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "isRecord",
        "normalized": "a-\u003eBool",
        "package": "reified-records",
        "partial": "Record",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#v:recordStructure",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a records structure of as a list of types paired with field names.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "RecordT a -\u003e [(TypeRep, String)]",
        "fct-source": "src/Data-Generics-Record.html#recordStructure",
        "fct-type": "function",
        "title": "recordStructure"
      },
      "index": {
        "description": "Return records structure of as list of types paired with field names",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "recordStructure",
        "normalized": "RecordT a-\u003e[(TypeRep,String)]",
        "package": "reified-records",
        "partial": "Structure",
        "signature": "RecordT a-\u003e[(TypeRep,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reified-records/docs/Data-Generics-Record.html#v:recordT",
      "description": {
        "fct-descr": "\u003cp\u003eThe smart constructor for \u003ccode\u003eRecordT\u003c/code\u003es. This\n will return a \u003ccode\u003eRecordT\u003c/code\u003e if and only if the type is a record.\n\u003c/p\u003e",
        "fct-module": "Data.Generics.Record",
        "fct-package": "reified-records",
        "fct-signature": "Maybe (RecordT a)",
        "fct-source": "src/Data-Generics-Record.html#recordT",
        "fct-type": "function",
        "title": "recordT"
      },
      "index": {
        "description": "The smart constructor for RecordT This will return RecordT if and only if the type is record",
        "hierarchy": "Data Generics Record",
        "module": "Data.Generics.Record",
        "name": "recordT",
        "normalized": "",
        "package": "reified-records",
        "partial": "",
        "signature": ""
      }
    }
  }
]