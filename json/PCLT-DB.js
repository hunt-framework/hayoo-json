[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome instances of \u003ccode\u003e\u003ca\u003eReadableFromDB\u003c/a\u003e\u003c/code\u003e for reading\n PCLT catalog and related objects from DB.\n\u003c/p\u003e\u003cp\u003eDBMS is PostgreSQL v8.4. Not earlier, since PCLT-DB relies on a feature that\n appeared in PostgresSQL only in v8.4. - the \u003ccode\u003eWITH\u003c/code\u003e clause for \u003ccode\u003eSELECT\u003c/code\u003e query\n (also \u003ccode\u003eWITH RECURSIVE\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "module",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html",
        "fct-type": "module",
        "title": "InterfaceWithDB"
      },
      "index": {
        "description": "Some instances of ReadableFromDB for reading PCLT catalog and related objects from DB DBMS is PostgreSQL v8.4 Not earlier since PCLT-DB relies on feature that appeared in PostgresSQL only in v8.4 the WITH clause for SELECT query also WITH RECURSIVE",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "InterfaceWithDB",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Interface With DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003eDropFlag_CatalogNeedsToBeUpdated_Error\u003c/a\u003e\u003c/code\u003e,\n added \u003ccode\u003e\u003ca\u003ePCLT_CatalogID\u003c/a\u003e\u003c/code\u003e, for which \"drop flag\" operation failed.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
        "fct-type": "data",
        "title": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error"
      },
      "index": {
        "description": "Wrapper around DropFlag CatalogNeedsToBeUpdated Error added PCLT CatalogID for which drop flag operation failed",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Addressed Drop Flag Catalog Needs To Be Updated Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:CatalogNeedsToBeUpdated_DoesIt",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for a flag, that is read from DB.\n\u003c/p\u003e\u003cp\u003eFor each catalog in DB there is stored a special flag \"catalog data\n or config changed\". The flag gets raised by an army of triggers,\n that watches every table, and is thought to get dropped by a program,\n which uses DB catalog. Drop the flag right before catalog update\n from DB.\n\u003c/p\u003e\u003cp\u003eUnfortunately, the current implementation of this flagging system\n constraints the number of agents that update their catalogs from DB\n by only one (because, when agent updates it's catalog, it drops\n the flag, and other agents don't know that flag was risen, so they\n can't know if version of catalog in their operative memory is older\n then in DB or is it not).\n\u003c/p\u003e\u003cp\u003eBut this limitation removal is planned as a first ToDo in the next\n version of PCLT-DB.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogNeedsToBeUpdated_DoesIt",
        "fct-type": "newtype",
        "title": "CatalogNeedsToBeUpdated_DoesIt"
      },
      "index": {
        "description": "Container for flag that is read from DB For each catalog in DB there is stored special flag catalog data or config changed The flag gets raised by an army of triggers that watches every table and is thought to get dropped by program which uses DB catalog Drop the flag right before catalog update from DB Unfortunately the current implementation of this flagging system constraints the number of agents that update their catalogs from DB by only one because when agent updates it catalog it drops the flag and other agents don know that flag was risen so they can know if version of catalog in their operative memory is older then in DB or is it not But this limitation removal is planned as first ToDo in the next version of PCLT-DB",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "CatalogNeedsToBeUpdated_DoesIt",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog Needs To Be Updated Does It",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:CatalogReadFromDBResult",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for PCLT catalog, that is read from DB.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogReadFromDBResult",
        "fct-type": "newtype",
        "title": "CatalogReadFromDBResult"
      },
      "index": {
        "description": "Container for PCLT catalog that is read from DB",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "CatalogReadFromDBResult",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog Read From DBResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:CatalogUpdateFromDBErrors",
      "description": {
        "fct-descr": "\u003cp\u003eThe container for all types of errors that may result, when trying\n to update a catalog from DB.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "data",
        "title": "CatalogUpdateFromDBErrors"
      },
      "index": {
        "description": "The container for all types of errors that may result when trying to update catalog from DB",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "CatalogUpdateFromDBErrors",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog Update From DBErrors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:DropFlag_CatalogNeedsToBeUpdated_Error",
      "description": {
        "fct-descr": "\u003cp\u003eErrors that may occur, when performing \u003ccode\u003e\u003ca\u003edropFlag_CatalogNeedsToBeUpdated\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#DropFlag_CatalogNeedsToBeUpdated_Error",
        "fct-type": "data",
        "title": "DropFlag_CatalogNeedsToBeUpdated_Error"
      },
      "index": {
        "description": "Errors that may occur when performing dropFlag CatalogNeedsToBeUpdated",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "DropFlag_CatalogNeedsToBeUpdated_Error",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Drop Flag Catalog Needs To Be Updated Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:RawCatalogDataReadFromDBResult",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for data, that is read from DB, that goes on input to\n catalog formation routine.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#RawCatalogDataReadFromDBResult",
        "fct-type": "newtype",
        "title": "RawCatalogDataReadFromDBResult"
      },
      "index": {
        "description": "Container for data that is read from DB that goes on input to catalog formation routine",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "RawCatalogDataReadFromDBResult",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Raw Catalog Data Read From DBResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error DropFlag_CatalogNeedsToBeUpdated_Error PCLT_CatalogID",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
        "fct-type": "function",
        "title": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Addressed Drop Flag Catalog Needs To Be Updated Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:CatalogNeedsToBeUpdated_DoesIt",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "CatalogNeedsToBeUpdated_DoesIt Bool",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogNeedsToBeUpdated_DoesIt",
        "fct-type": "function",
        "title": "CatalogNeedsToBeUpdated_DoesIt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "CatalogNeedsToBeUpdated_DoesIt",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog Needs To Be Updated Does It",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:CatalogReadFromDBResult",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "CatalogReadFromDBResult (PCLT_Catalog, [ErrorWithPCSCatalog ReadPCSCatalogError], [AddPCLT_toPCLT_Error])",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogReadFromDBResult",
        "fct-type": "function",
        "title": "CatalogReadFromDBResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "CatalogReadFromDBResult",
        "normalized": "CatalogReadFromDBResult(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError],[AddPCLT_toPCLT_Error])",
        "package": "PCLT-DB",
        "partial": "Catalog Read From DBResult",
        "signature": "CatalogReadFromDBResult(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError],[AddPCLT_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:CatalogUpdateFromDBErrors",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "CatalogUpdateFromDBErrors",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "CatalogUpdateFromDBErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "CatalogUpdateFromDBErrors",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog Update From DBErrors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:DBError_DFCNTBUE",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "DBError_DFCNTBUE SqlError",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#DropFlag_CatalogNeedsToBeUpdated_Error",
        "fct-type": "function",
        "title": "DBError_DFCNTBUE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "DBError_DFCNTBUE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "DBError DFCNTBUE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:NotModified_DFCNTBUE",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "NotModified_DFCNTBUE",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#DropFlag_CatalogNeedsToBeUpdated_Error",
        "fct-type": "function",
        "title": "NotModified_DFCNTBUE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "NotModified_DFCNTBUE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Not Modified DFCNTBUE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:RawCatalogDataReadFromDBResult",
      "description": {
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "RawCatalogDataReadFromDBResult (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#RawCatalogDataReadFromDBResult",
        "fct-type": "function",
        "title": "RawCatalogDataReadFromDBResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "RawCatalogDataReadFromDBResult",
        "normalized": "RawCatalogDataReadFromDBResult(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
        "package": "PCLT-DB",
        "partial": "Raw Catalog Data Read From DBResult",
        "signature": "RawCatalogDataReadFromDBResult(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cfhie2cue",
      "description": {
        "fct-descr": "\u003cp\u003eThere is a one way relation from\n \u003ccode\u003e\u003ca\u003eCatalogFromHSRTInitErrors\u003c/a\u003e\u003c/code\u003e\n to \u003ccode\u003e\u003ca\u003eCatalogUpdateFromDBErrors\u003c/a\u003e\u003c/code\u003e. That's because subject operations are\n similar it their abstractions.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "CatalogFromHSRTInitErrors -\u003e CatalogUpdateFromDBErrors",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#cfhie2cue",
        "fct-type": "function",
        "title": "cfhie2cue"
      },
      "index": {
        "description": "There is one way relation from CatalogFromHSRTInitErrors to CatalogUpdateFromDBErrors That because subject operations are similar it their abstractions",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cfhie2cue",
        "normalized": "CatalogFromHSRTInitErrors-\u003eCatalogUpdateFromDBErrors",
        "package": "PCLT-DB",
        "partial": "",
        "signature": "CatalogFromHSRTInitErrors-\u003eCatalogUpdateFromDBErrors"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:considerCatalogUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the flag \"catalog data or config changed\" is up in DB.\n If so, drop it and try to read from DB\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePCLT_InnerConfig\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRawCatalogDataReadFromDBResult\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCatalogReadFromDBResult\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Connection -\u003e PCLT_CatalogID -\u003e IO (Maybe PCLT_Catalog, Maybe CatalogUpdateFromDBErrors)",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#considerCatalogUpdate",
        "fct-type": "function",
        "title": "considerCatalogUpdate"
      },
      "index": {
        "description": "Check if the flag catalog data or config changed is up in DB If so drop it and try to read from DB PCLT InnerConfig RawCatalogDataReadFromDBResult CatalogReadFromDBResult",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "considerCatalogUpdate",
        "normalized": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe PCLT_Catalog,Maybe CatalogUpdateFromDBErrors)",
        "package": "PCLT-DB",
        "partial": "Catalog Update",
        "signature": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe PCLT_Catalog,Maybe CatalogUpdateFromDBErrors)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueARFDBE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Maybe AddressedReadFromDBError",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "cueARFDBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cueARFDBE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "ARFDBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCatReadErrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "cueCatReadErrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cueCatReadErrs",
        "normalized": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
        "package": "PCLT-DB",
        "partial": "Cat Read Errs",
        "signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCatalogID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "PCLT_CatalogID",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "cueCatalogID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cueCatalogID",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCatalogRead",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Bool",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "cueCatalogRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cueCatalogRead",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Catalog Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCollectionErrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "[AddPCLT_toPCLT_Error]",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "cueCollectionErrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cueCollectionErrs",
        "normalized": "[AddPCLT_toPCLT_Error]",
        "package": "PCLT-DB",
        "partial": "Collection Errs",
        "signature": "[AddPCLT_toPCLT_Error]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueDropCNTBUFlag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "cueDropCNTBUFlag"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "cueDropCNTBUFlag",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Drop CNTBUFlag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:defaultCatalogUpdateFromDBErrors",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty form to be filled.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "PCLT_CatalogID -\u003e CatalogUpdateFromDBErrors",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#defaultCatalogUpdateFromDBErrors",
        "fct-type": "function",
        "title": "defaultCatalogUpdateFromDBErrors"
      },
      "index": {
        "description": "An empty form to be filled",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "defaultCatalogUpdateFromDBErrors",
        "normalized": "PCLT_CatalogID-\u003eCatalogUpdateFromDBErrors",
        "package": "PCLT-DB",
        "partial": "Catalog Update From DBErrors",
        "signature": "PCLT_CatalogID-\u003eCatalogUpdateFromDBErrors"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:dropFlag_CatalogNeedsToBeUpdated",
      "description": {
        "fct-descr": "\u003cp\u003eDrop that flag in DB.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Connection -\u003e PCLT_CatalogID -\u003e IO (Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error)",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#dropFlag_CatalogNeedsToBeUpdated",
        "fct-type": "function",
        "title": "dropFlag_CatalogNeedsToBeUpdated"
      },
      "index": {
        "description": "Drop that flag in DB",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "dropFlag_CatalogNeedsToBeUpdated",
        "normalized": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error)",
        "package": "PCLT-DB",
        "partial": "Flag Catalog Needs To Be Updated",
        "signature": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:emptyCUE",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if catalog is read without a single error.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.InterfaceWithDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "CatalogUpdateFromDBErrors -\u003e Bool",
        "fct-source": "src/Database-PCLT-InterfaceWithDB.html#emptyCUE",
        "fct-type": "function",
        "title": "emptyCUE"
      },
      "index": {
        "description": "Checks if catalog is read without single error",
        "hierarchy": "Database PCLT InterfaceWithDB",
        "module": "Database.PCLT.InterfaceWithDB",
        "name": "emptyCUE",
        "normalized": "CatalogUpdateFromDBErrors-\u003eBool",
        "package": "PCLT-DB",
        "partial": "CUE",
        "signature": "CatalogUpdateFromDBErrors-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module around a thread that considers updating catalog, when commanded\n to do so.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "module",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html",
        "fct-type": "module",
        "title": "UpdatableCatalog"
      },
      "index": {
        "description": "module around thread that considers updating catalog when commanded to do so",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "UpdatableCatalog",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Updatable Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#t:DisconnectDBConnWhenFinished_shouldwe",
      "description": {
        "fct-descr": "\u003cp\u003eType alias used by \u003ccode\u003e\u003ca\u003erunCatalogUpdatorService\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "type",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#DisconnectDBConnWhenFinished_shouldwe",
        "fct-type": "type",
        "title": "DisconnectDBConnWhenFinished_shouldwe"
      },
      "index": {
        "description": "Type alias used by runCatalogUpdatorService",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "DisconnectDBConnWhenFinished_shouldwe",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Disconnect DBConn When Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#t:MakeIterationAndContinueCycle_shouldwe",
      "description": {
        "fct-descr": "\u003cp\u003eType alias used by \u003ccode\u003e\u003ca\u003erunCatalogUpdatorService\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "type",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#MakeIterationAndContinueCycle_shouldwe",
        "fct-type": "type",
        "title": "MakeIterationAndContinueCycle_shouldwe"
      },
      "index": {
        "description": "Type alias used by runCatalogUpdatorService",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "MakeIterationAndContinueCycle_shouldwe",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Make Iteration And Continue Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#t:PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is a special instance of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e - it accumulates\n all other instances of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e from the whole PCLT-DB package,\n and also from PCLT package.\n\u003c/p\u003e\u003cp\u003eThis instance is best to be used as an intial input for the catalog\n formation in your applications.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
        "fct-type": "data",
        "title": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog"
      },
      "index": {
        "description": "This type is special instance of HasStaticRawPCLTs it accumulates all other instances of HasStaticRawPCLTs from the whole PCLT-DB package and also from PCLT package This instance is best to be used as an intial input for the catalog formation in your applications",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "PCLTRaw Catalog Database PCLT Updatable Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
      "description": {
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
        "fct-type": "function",
        "title": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "PCLTRaw Catalog Database PCLT Updatable Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:catalogUpdatorIteration",
      "description": {
        "fct-descr": "\u003cp\u003eInput contains current catalog version. If the update failed\n and returned no new catalog version, or if update isn't needed,\n then current catalog version is returned.\n\u003c/p\u003e\u003cp\u003eIf there appeared any errors, they get acted with. The action is\n specified by user.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "Connection -\u003e PCLT_CatalogID -\u003e (PCLT_Catalog -\u003e CatalogUpdateFromDBErrors -\u003e IO ()) -\u003e PCLT_Catalog -\u003e IO (Maybe PCLT_Catalog)",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#catalogUpdatorIteration",
        "fct-type": "function",
        "title": "catalogUpdatorIteration"
      },
      "index": {
        "description": "Input contains current catalog version If the update failed and returned no new catalog version or if update isn needed then current catalog version is returned If there appeared any errors they get acted with The action is specified by user",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "catalogUpdatorIteration",
        "normalized": "Connection-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003ePCLT_Catalog-\u003eIO(Maybe PCLT_Catalog)",
        "package": "PCLT-DB",
        "partial": "Updator Iteration",
        "signature": "Connection-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003ePCLT_Catalog-\u003eIO(Maybe PCLT_Catalog)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:runCatalogUpdatorService",
      "description": {
        "fct-descr": "\u003cp\u003eThe first version of catalog, that service forms is always\n from nonDB source, but is from specified in the first triple\n \u003cem\u003e(catalog ID, config and some instance of HasStaticRawPCLTs)\u003c/em\u003e.\n That way, even if DB never responds, service always\n has at least this version of catalog available.\n\u003c/p\u003e\u003cp\u003eIn the 3rd argument user specifies action, that has a role of errors\n processor (reporter).\n\u003c/p\u003e\u003cp\u003eThe 4th argument is a \u003ccode\u003eChan\u003c/code\u003e, which this service listens to.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003eTrue\u003c/code\u003e comes, service makes iteration (reads catalog from DB if needed,\n and writes new version into the MVar), and continues cycle.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003eFalse\u003c/code\u003e comes, service stops.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe returned MVar is created by service itself and is a container,\n where it keeps last version of catalog.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "(PCLT_CatalogID, PCLT_InnerConfig, a) -\u003e (Connection, DisconnectDBConnWhenFinished_shouldwe) -\u003e (PCLT_Catalog -\u003e CatalogUpdateFromDBErrors -\u003e IO ()) -\u003e Chan MakeIterationAndContinueCycle_shouldwe -\u003e IO (MVar PCLT_Catalog, ThreadId)",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#runCatalogUpdatorService",
        "fct-type": "function",
        "title": "runCatalogUpdatorService"
      },
      "index": {
        "description": "The first version of catalog that service forms is always from nonDB source but is from specified in the first triple catalog ID config and some instance of HasStaticRawPCLTs That way even if DB never responds service always has at least this version of catalog available In the rd argument user specifies action that has role of errors processor reporter The th argument is Chan which this service listens to If True comes service makes iteration reads catalog from DB if needed and writes new version into the MVar and continues cycle If False comes service stops The returned MVar is created by service itself and is container where it keeps last version of catalog",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "runCatalogUpdatorService",
        "normalized": "(PCLT_CatalogID,PCLT_InnerConfig,a)-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)",
        "package": "PCLT-DB",
        "partial": "Catalog Updator Service",
        "signature": "(PCLT_CatalogID,PCLT_InnerConfig,a)-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:runCatalogUpdatorService_wDefaultInitial",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003erunCatalogUpdatorService\u003c/a\u003e\u003c/code\u003e. The service starts from\n default config (\u003ccode\u003e\u003ca\u003edefaultPCLTInnerConfig\u003c/a\u003e\u003c/code\u003e) and\n default set of templates (\u003ccode\u003e\u003ca\u003ePCLTRawCatalog__Database_PCLT_UpdatableCatalog\u003c/a\u003e\u003c/code\u003e).\n But updates from DB orienting on given \u003ccode\u003e\u003ca\u003ePCLT_CatalogID\u003c/a\u003e\u003c/code\u003e,\n which may be different set of templates and different config.\n\u003c/p\u003e",
        "fct-module": "Database.PCLT.UpdatableCatalog",
        "fct-package": "PCLT-DB",
        "fct-signature": "PCLT_CatalogID -\u003e (Connection, DisconnectDBConnWhenFinished_shouldwe) -\u003e (PCLT_Catalog -\u003e CatalogUpdateFromDBErrors -\u003e IO ()) -\u003e Chan MakeIterationAndContinueCycle_shouldwe -\u003e IO (MVar PCLT_Catalog, ThreadId)",
        "fct-source": "src/Database-PCLT-UpdatableCatalog.html#runCatalogUpdatorService_wDefaultInitial",
        "fct-type": "function",
        "title": "runCatalogUpdatorService_wDefaultInitial"
      },
      "index": {
        "description": "Wrapper around runCatalogUpdatorService The service starts from default config defaultPCLTInnerConfig and default set of templates PCLTRawCatalog Database PCLT UpdatableCatalog But updates from DB orienting on given PCLT CatalogID which may be different set of templates and different config",
        "hierarchy": "Database PCLT UpdatableCatalog",
        "module": "Database.PCLT.UpdatableCatalog",
        "name": "runCatalogUpdatorService_wDefaultInitial",
        "normalized": "PCLT_CatalogID-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)",
        "package": "PCLT-DB",
        "partial": "Catalog Updator Service Default Initial",
        "signature": "PCLT_CatalogID-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT.html#",
      "description": {
        "fct-module": "Database.PCLT",
        "fct-package": "PCLT-DB",
        "fct-signature": "module",
        "fct-source": "src/Database-PCLT.html",
        "fct-type": "module",
        "title": "PCLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PCLT",
        "module": "Database.PCLT",
        "name": "PCLT",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "PCLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn attemt of generalization of \"read from DB\" operation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "module",
        "fct-source": "src/Database-ReadableFromDB.html",
        "fct-type": "module",
        "title": "ReadableFromDB"
      },
      "index": {
        "description": "An attemt of generalization of read from DB operation",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "ReadableFromDB",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Readable From DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:AddressedReadFromDBError",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eReadFromDBError\u003c/a\u003e\u003c/code\u003e, added information about type of\n read subject and by showing the primary key.\n\u003c/p\u003e\u003cp\u003e___________\n\u003c/p\u003e\u003cp\u003eIf PCLT is to be used for representation of \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e\n then user must declare an additional localizable template in his PCLT\n catalog with ID of form:\n\u003c/p\u003e\u003cpre\u003e\"ARFDBE_SDLR.\" ++ (show $ \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e err)\u003c/pre\u003e\u003cp\u003e, where the \u003ccode\u003eshow \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e will include full modules path\n of type. The templete content if not important - leave it empty, but what\n is important - is it's SDL requirement. This SDL requirement wil be in\n effect for the representation of \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor more information on that, see description for \u003ccode\u003eShowAsPCSI\u003c/code\u003e instance for\n \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e - in module \u003ca\u003eDatabase.ReadableFromDB__\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
        "fct-type": "data",
        "title": "AddressedReadFromDBError"
      },
      "index": {
        "description": "wrapper around ReadFromDBError added information about type of read subject and by showing the primary key If PCLT is to be used for representation of AddressedReadFromDBError then user must declare an additional localizable template in his PCLT catalog with ID of form ARFDBE SDLR show arfdbeEntityType err where the show arfdbeEntityType will include full modules path of type The templete content if not important leave it empty but what is important is it SDL requirement This SDL requirement wil be in effect for the representation of AddressedReadFromDBError For more information on that see description for ShowAsPCSI instance for AddressedReadFromDBError in module Database.ReadableFromDB",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "AddressedReadFromDBError",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Addressed Read From DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:AllowedMaximumOfRowsCount",
      "description": {
        "fct-descr": "\u003cp\u003eType aliase for use by \u003ccode\u003e\u003ca\u003eTooManyResultsFoundInDB_RFDBE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "type",
        "fct-source": "src/Database-ReadableFromDB.html#AllowedMaximumOfRowsCount",
        "fct-type": "type",
        "title": "AllowedMaximumOfRowsCount"
      },
      "index": {
        "description": "Type aliase for use by TooManyResultsFoundInDB RFDBE",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "AllowedMaximumOfRowsCount",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Allowed Maximum Of Rows Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:FieldName",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "type",
        "fct-source": "src/Database-ReadableFromDB.html#FieldName",
        "fct-type": "type",
        "title": "FieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "FieldName",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:NoMoreThanOne_shoulditbe",
      "description": {
        "fct-descr": "\u003cp\u003eType aliase for use by \u003ccode\u003e\u003ca\u003ereadOneFromDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "type",
        "fct-source": "src/Database-ReadableFromDB.html#NoMoreThanOne_shoulditbe",
        "fct-type": "type",
        "title": "NoMoreThanOne_shoulditbe"
      },
      "index": {
        "description": "Type aliase for use by readOneFromDB",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "NoMoreThanOne_shoulditbe",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "No More Than One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:ReadFromDBError",
      "description": {
        "fct-descr": "\u003cp\u003eWhat kind of errors are possible in the result\n of \"read from DB\" operation\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-ReadableFromDB.html#ReadFromDBError",
        "fct-type": "data",
        "title": "ReadFromDBError"
      },
      "index": {
        "description": "What kind of errors are possible in the result of read from DB operation",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "ReadFromDBError",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Read From DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:ReadableFromDB",
      "description": {
        "fct-descr": "\u003cp\u003eIt's recommended to use newtypes for subject type variable (\"readable\"),\n when it is composite (like tuple, Either, Map or other). Reason for that\n is described near the \u003ccode\u003eShowAsPCSI\u003c/code\u003e instaniation\n for \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "class",
        "fct-source": "src/Database-ReadableFromDB.html#ReadableFromDB",
        "fct-type": "class",
        "title": "ReadableFromDB"
      },
      "index": {
        "description": "It recommended to use newtypes for subject type variable readable when it is composite like tuple Either Map or other Reason for that is described near the ShowAsPCSI instaniation for AddressedReadFromDBError",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "ReadableFromDB",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Readable From DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:AddressedReadFromDBError",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "AddressedReadFromDBError",
        "fct-source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
        "fct-type": "function",
        "title": "AddressedReadFromDBError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "AddressedReadFromDBError",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Addressed Read From DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:NotFoundInDB_RFDBE",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "NotFoundInDB_RFDBE",
        "fct-source": "src/Database-ReadableFromDB.html#ReadFromDBError",
        "fct-type": "function",
        "title": "NotFoundInDB_RFDBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "NotFoundInDB_RFDBE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Not Found In DB RFDBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:RecieveError_RFDBE",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "RecieveError_RFDBE SqlError",
        "fct-source": "src/Database-ReadableFromDB.html#ReadFromDBError",
        "fct-type": "function",
        "title": "RecieveError_RFDBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "RecieveError_RFDBE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Recieve Error RFDBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:RowParseError_RFDBE",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "RowParseError_RFDBE SomeException",
        "fct-source": "src/Database-ReadableFromDB.html#ReadFromDBError",
        "fct-type": "function",
        "title": "RowParseError_RFDBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "RowParseError_RFDBE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Row Parse Error RFDBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:SubReadError_RFDBE",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "SubReadError_RFDBE AddressedReadFromDBError",
        "fct-source": "src/Database-ReadableFromDB.html#ReadFromDBError",
        "fct-type": "function",
        "title": "SubReadError_RFDBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "SubReadError_RFDBE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Sub Read Error RFDBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:TooManyResultsFoundInDB_RFDBE",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "TooManyResultsFoundInDB_RFDBE AllowedMaximumOfRowsCount",
        "fct-source": "src/Database-ReadableFromDB.html#ReadFromDBError",
        "fct-type": "function",
        "title": "TooManyResultsFoundInDB_RFDBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "TooManyResultsFoundInDB_RFDBE",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Too Many Results Found In DB RFDBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:arfdbeEntityType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "TypeRep",
        "fct-source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
        "fct-type": "function",
        "title": "arfdbeEntityType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "arfdbeEntityType",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Entity Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:arfdbeErr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "ReadFromDBError",
        "fct-source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
        "fct-type": "function",
        "title": "arfdbeErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "arfdbeErr",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:arfdbePK",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "String",
        "fct-source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
        "fct-type": "function",
        "title": "arfdbePK"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "arfdbePK",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "PK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:liftInList",
      "description": {
        "fct-descr": "\u003cpre\u003e liftInList a = a : []\n\u003c/pre\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Database-ReadableFromDB.html#liftInList",
        "fct-type": "function",
        "title": "liftInList"
      },
      "index": {
        "description": "liftInList",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "liftInList",
        "normalized": "a-\u003e[a]",
        "package": "PCLT-DB",
        "partial": "In List",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:parseDBrow",
      "description": {
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Connection -\u003e pk -\u003e Map FieldName SqlValue -\u003e IO (Either AddressedReadFromDBError readable)",
        "fct-source": "src/Database-ReadableFromDB.html#parseDBrow",
        "fct-type": "method",
        "title": "parseDBrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "parseDBrow",
        "normalized": "Connection-\u003ea-\u003eMap FieldName SqlValue-\u003eIO(Either AddressedReadFromDBError b)",
        "package": "PCLT-DB",
        "partial": "DBrow",
        "signature": "Connection-\u003epk-\u003eMap FieldName SqlValue-\u003eIO(Either AddressedReadFromDBError readable)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:readFromDB",
      "description": {
        "fct-descr": "\u003cp\u003eRead rows from DB and parse each at once\n using \u003ccode\u003e\u003ca\u003eparseDBrow\u003c/a\u003e\u003c/code\u003e class method\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Connection -\u003e pk -\u003e IO [Either AddressedReadFromDBError readable]",
        "fct-source": "src/Database-ReadableFromDB.html#readFromDB",
        "fct-type": "method",
        "title": "readFromDB"
      },
      "index": {
        "description": "Read rows from DB and parse each at once using parseDBrow class method",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "readFromDB",
        "normalized": "Connection-\u003ea-\u003eIO[Either AddressedReadFromDBError b]",
        "package": "PCLT-DB",
        "partial": "From DB",
        "signature": "Connection-\u003epk-\u003eIO[Either AddressedReadFromDBError readable]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:readOneFromDB",
      "description": {
        "fct-descr": "\u003cp\u003eClass method derived from \u003ccode\u003e\u003ca\u003ereadFromDB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparseDBrow\u003c/a\u003e\u003c/code\u003e.\n No need to overload it, if not for special cases.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Connection -\u003e pk -\u003e NoMoreThanOne_shoulditbe -\u003e IO (Either AddressedReadFromDBError readable)",
        "fct-source": "src/Database-ReadableFromDB.html#readOneFromDB",
        "fct-type": "method",
        "title": "readOneFromDB"
      },
      "index": {
        "description": "Class method derived from readFromDB and parseDBrow No need to overload it if not for special cases",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "readOneFromDB",
        "normalized": "Connection-\u003ea-\u003eNoMoreThanOne_shoulditbe-\u003eIO(Either AddressedReadFromDBError b)",
        "package": "PCLT-DB",
        "partial": "One From DB",
        "signature": "Connection-\u003epk-\u003eNoMoreThanOne_shoulditbe-\u003eIO(Either AddressedReadFromDBError readable)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:rightType_formReadResOrErr",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e of what can be under \u003ccode\u003eRight\u003c/code\u003e in \u003ccode\u003eEither\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Either left right -\u003e TypeRep",
        "fct-source": "src/Database-ReadableFromDB.html#rightType_formReadResOrErr",
        "fct-type": "function",
        "title": "rightType_formReadResOrErr"
      },
      "index": {
        "description": "Return the TypeRep of what can be under Right in Either",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "rightType_formReadResOrErr",
        "normalized": "Either a b-\u003eTypeRep",
        "package": "PCLT-DB",
        "partial": "Type Read Res Or Err",
        "signature": "Either left right-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:takeFieldValue",
      "description": {
        "fct-descr": "\u003cp\u003eThis is better than \u003ccode\u003erow ! field_name\u003c/code\u003e, because if an error occurs\n (field not found), then it returns in error message this field name.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "FieldName -\u003e Map FieldName SqlValue -\u003e a",
        "fct-source": "src/Database-ReadableFromDB.html#takeFieldValue",
        "fct-type": "function",
        "title": "takeFieldValue"
      },
      "index": {
        "description": "This is better than row field name because if an error occurs field not found then it returns in error message this field name",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "takeFieldValue",
        "normalized": "FieldName-\u003eMap FieldName SqlValue-\u003ea",
        "package": "PCLT-DB",
        "partial": "Field Value",
        "signature": "FieldName-\u003eMap FieldName SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:takeUFieldValue",
      "description": {
        "fct-descr": "\u003cp\u003eUppercase given field name, and apply it with \u003ccode\u003e\u003ca\u003etakeFieldValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "FieldName -\u003e Map FieldName SqlValue -\u003e a",
        "fct-source": "src/Database-ReadableFromDB.html#takeUFieldValue",
        "fct-type": "function",
        "title": "takeUFieldValue"
      },
      "index": {
        "description": "Uppercase given field name and apply it with takeFieldValue",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "takeUFieldValue",
        "normalized": "FieldName-\u003eMap FieldName SqlValue-\u003ea",
        "package": "PCLT-DB",
        "partial": "UField Value",
        "signature": "FieldName-\u003eMap FieldName SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:uppercaseMapKeys",
      "description": {
        "fct-descr": "\u003cp\u003eWARNING !!!\n HDBC lowercases field names, when using \u003ccode\u003efetchAllRowsMap\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "Map String a -\u003e Map String a",
        "fct-source": "src/Database-ReadableFromDB.html#uppercaseMapKeys",
        "fct-type": "function",
        "title": "uppercaseMapKeys"
      },
      "index": {
        "description": "WARNING HDBC lowercases field names when using fetchAllRowsMap",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "uppercaseMapKeys",
        "normalized": "Map String a-\u003eMap String a",
        "package": "PCLT-DB",
        "partial": "Map Keys",
        "signature": "Map String a-\u003eMap String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:wrapParseResult_1row",
      "description": {
        "fct-descr": "\u003cp\u003eIn case of error it wraps it \u003ccode\u003e\u003ca\u003eReadFromDBError\u003c/a\u003e\u003c/code\u003e\n into \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "pk -\u003e Either ReadFromDBError readable -\u003e Either AddressedReadFromDBError readable",
        "fct-source": "src/Database-ReadableFromDB.html#wrapParseResult_1row",
        "fct-type": "function",
        "title": "wrapParseResult_1row"
      },
      "index": {
        "description": "In case of error it wraps it ReadFromDBError into AddressedReadFromDBError",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "wrapParseResult_1row",
        "normalized": "a-\u003eEither ReadFromDBError b-\u003eEither AddressedReadFromDBError b",
        "package": "PCLT-DB",
        "partial": "Parse Result",
        "signature": "pk-\u003eEither ReadFromDBError readable-\u003eEither AddressedReadFromDBError readable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:wrapParseResult_Nrows",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003ewrapParseResult_1row\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.ReadableFromDB",
        "fct-package": "PCLT-DB",
        "fct-signature": "pk -\u003e [Either ReadFromDBError a] -\u003e [Either AddressedReadFromDBError a]",
        "fct-source": "src/Database-ReadableFromDB.html#wrapParseResult_Nrows",
        "fct-type": "function",
        "title": "wrapParseResult_Nrows"
      },
      "index": {
        "description": "Wrapper around wrapParseResult row",
        "hierarchy": "Database ReadableFromDB",
        "module": "Database.ReadableFromDB",
        "name": "wrapParseResult_Nrows",
        "normalized": "a-\u003e[Either ReadFromDBError b]-\u003e[Either AddressedReadFromDBError b]",
        "package": "PCLT-DB",
        "partial": "Parse Result Nrows",
        "signature": "pk-\u003e[Either ReadFromDBError a]-\u003e[Either AddressedReadFromDBError a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB__.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor representation of \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e a special trick is used.\n SDL requirements for representation of error is referenced to be\n the same as specified for template with such ID:\n\u003c/p\u003e\u003cpre\u003e\"ARFDBE_SDLR.\" ++ (show $ \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e err)\u003c/pre\u003e\u003cp\u003eSo, whenever an instance of \u003ccode\u003e\u003ca\u003eReadableFromDB\u003c/a\u003e\u003c/code\u003e\n is declared, in order to make \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e show correctly,\n developer must also add an empty template with corresponding ID to PCLT\n catalog.\n\u003c/p\u003e\u003cp\u003eFor example, template with ID\n \u003ccode\u003e\"ARFDBE_SDLR.Text.PCLT.Config.PCLT_InnerConfig\"\u003c/code\u003e is to be added, when\n \u003ccode\u003ePCLT_InnerConfig\u003c/code\u003e is made an instance of\n \u003ccode\u003e\u003ca\u003eReadableFromDB\u003c/a\u003e\u003c/code\u003e.\n The content of this template is not important - just leave it empty, it's\n never shown. Only it's SDL requirement is important and is used.\n\u003c/p\u003e\u003cp\u003eIn order to keep \u003ccode\u003e(show $ \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e err)\u003c/code\u003e string as short\n as possible it's recommended to use \u003ccode\u003enewtype\u003c/code\u003e, when type is composite,\n like tuple, Either, Map etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.ReadableFromDB__",
        "fct-package": "PCLT-DB",
        "fct-signature": "module",
        "fct-source": "src/Database-ReadableFromDB__.html",
        "fct-type": "module",
        "title": "ReadableFromDB__"
      },
      "index": {
        "description": "For representation of AddressedReadFromDBError special trick is used SDL requirements for representation of error is referenced to be the same as specified for template with such ID ARFDBE SDLR show arfdbeEntityType err So whenever an instance of ReadableFromDB is declared in order to make AddressedReadFromDBError show correctly developer must also add an empty template with corresponding ID to PCLT catalog For example template with ID ARFDBE SDLR.Text.PCLT.Config.PCLT InnerConfig is to be added when PCLT InnerConfig is made an instance of ReadableFromDB The content of this template is not important just leave it empty it never shown Only it SDL requirement is important and is used In order to keep show arfdbeEntityType err string as short as possible it recommended to use newtype when type is composite like tuple Either Map etc",
        "hierarchy": "Database ReadableFromDB__",
        "module": "Database.ReadableFromDB__",
        "name": "ReadableFromDB__",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "Readable From DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB__.html#t:PCLTRawCatalog__Database_ReadableFromDB",
      "description": {
        "fct-module": "Database.ReadableFromDB__",
        "fct-package": "PCLT-DB",
        "fct-signature": "data",
        "fct-source": "src/Database-ReadableFromDB__.html#PCLTRawCatalog__Database_ReadableFromDB",
        "fct-type": "data",
        "title": "PCLTRawCatalog__Database_ReadableFromDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB__",
        "module": "Database.ReadableFromDB__",
        "name": "PCLTRawCatalog__Database_ReadableFromDB",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "PCLTRaw Catalog Database Readable From DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB__.html#v:PCLTRawCatalog__Database_ReadableFromDB",
      "description": {
        "fct-module": "Database.ReadableFromDB__",
        "fct-package": "PCLT-DB",
        "fct-signature": "PCLTRawCatalog__Database_ReadableFromDB",
        "fct-source": "src/Database-ReadableFromDB__.html#PCLTRawCatalog__Database_ReadableFromDB",
        "fct-type": "function",
        "title": "PCLTRawCatalog__Database_ReadableFromDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database ReadableFromDB__",
        "module": "Database.ReadableFromDB__",
        "name": "PCLTRawCatalog__Database_ReadableFromDB",
        "normalized": "",
        "package": "PCLT-DB",
        "partial": "PCLTRaw Catalog Database Readable From DB",
        "signature": ""
      }
    }
  }
]