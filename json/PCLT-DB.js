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
        "word": "PCLT-DB"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome instances of \u003ccode\u003e\u003ca\u003eReadableFromDB\u003c/a\u003e\u003c/code\u003e for reading\n PCLT catalog and related objects from DB.\n\u003c/p\u003e\u003cp\u003eDBMS is PostgreSQL v8.4. Not earlier, since PCLT-DB relies on a feature that\n appeared in PostgresSQL only in v8.4. - the \u003ccode\u003eWITH\u003c/code\u003e clause for \u003ccode\u003eSELECT\u003c/code\u003e query\n (also \u003ccode\u003eWITH RECURSIVE\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "InterfaceWithDB",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html",
          "type": "module"
        },
        "index": {
          "description": "Some instances of ReadableFromDB for reading PCLT catalog and related objects from DB DBMS is PostgreSQL v8.4 Not earlier since PCLT-DB relies on feature that appeared in PostgresSQL only in v8.4 the WITH clause for SELECT query also WITH RECURSIVE",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "InterfaceWithDB",
          "package": "PCLT-DB",
          "partial": "Interface With DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003eDropFlag_CatalogNeedsToBeUpdated_Error\u003c/a\u003e\u003c/code\u003e,\n added \u003ccode\u003e\u003ca\u003ePCLT_CatalogID\u003c/a\u003e\u003c/code\u003e, for which \"drop flag\" operation failed.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html#AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "type": "data"
        },
        "index": {
          "description": "Wrapper around DropFlag CatalogNeedsToBeUpdated Error added PCLT CatalogID for which drop flag operation failed",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "package": "PCLT-DB",
          "partial": "Addressed Drop Flag Catalog Needs To Be Updated Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:AddressedDropFlag_CatalogNeedsToBeUpdated_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for a flag, that is read from DB.\n\u003c/p\u003e\u003cp\u003eFor each catalog in DB there is stored a special flag \"catalog data\n or config changed\". The flag gets raised by an army of triggers,\n that watches every table, and is thought to get dropped by a program,\n which uses DB catalog. Drop the flag right before catalog update\n from DB.\n\u003c/p\u003e\u003cp\u003eUnfortunately, the current implementation of this flagging system\n constraints the number of agents that update their catalogs from DB\n by only one (because, when agent updates it's catalog, it drops\n the flag, and other agents don't know that flag was risen, so they\n can't know if version of catalog in their operative memory is older\n then in DB or is it not).\n\u003c/p\u003e\u003cp\u003eBut this limitation removal is planned as a first ToDo in the next\n version of PCLT-DB.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogNeedsToBeUpdated_DoesIt",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogNeedsToBeUpdated_DoesIt",
          "type": "newtype"
        },
        "index": {
          "description": "Container for flag that is read from DB For each catalog in DB there is stored special flag catalog data or config changed The flag gets raised by an army of triggers that watches every table and is thought to get dropped by program which uses DB catalog Drop the flag right before catalog update from DB Unfortunately the current implementation of this flagging system constraints the number of agents that update their catalogs from DB by only one because when agent updates it catalog it drops the flag and other agents don know that flag was risen so they can know if version of catalog in their operative memory is older then in DB or is it not But this limitation removal is planned as first ToDo in the next version of PCLT-DB",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogNeedsToBeUpdated_DoesIt",
          "package": "PCLT-DB",
          "partial": "Catalog Needs To Be Updated Does It",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:CatalogNeedsToBeUpdated_DoesIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for PCLT catalog, that is read from DB.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogReadFromDBResult",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogReadFromDBResult",
          "type": "newtype"
        },
        "index": {
          "description": "Container for PCLT catalog that is read from DB",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogReadFromDBResult",
          "package": "PCLT-DB",
          "partial": "Catalog Read From DBResult",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:CatalogReadFromDBResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe container for all types of errors that may result, when trying\n to update a catalog from DB.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "data"
        },
        "index": {
          "description": "The container for all types of errors that may result when trying to update catalog from DB",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "partial": "Catalog Update From DBErrors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:CatalogUpdateFromDBErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that may occur, when performing \u003ccode\u003e\u003ca\u003edropFlag_CatalogNeedsToBeUpdated\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "DropFlag_CatalogNeedsToBeUpdated_Error",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html#DropFlag_CatalogNeedsToBeUpdated_Error",
          "type": "data"
        },
        "index": {
          "description": "Errors that may occur when performing dropFlag CatalogNeedsToBeUpdated",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "DropFlag_CatalogNeedsToBeUpdated_Error",
          "package": "PCLT-DB",
          "partial": "Drop Flag Catalog Needs To Be Updated Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:DropFlag_CatalogNeedsToBeUpdated_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for data, that is read from DB, that goes on input to\n catalog formation routine.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "RawCatalogDataReadFromDBResult",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-InterfaceWithDB.html#RawCatalogDataReadFromDBResult",
          "type": "newtype"
        },
        "index": {
          "description": "Container for data that is read from DB that goes on input to catalog formation routine",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "RawCatalogDataReadFromDBResult",
          "package": "PCLT-DB",
          "partial": "Raw Catalog Data Read From DBResult",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#t:RawCatalogDataReadFromDBResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "package": "PCLT-DB",
          "signature": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error DropFlag_CatalogNeedsToBeUpdated_Error PCLT_CatalogID",
          "source": "src/Database-PCLT-InterfaceWithDB.html#AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "package": "PCLT-DB",
          "partial": "Addressed Drop Flag Catalog Needs To Be Updated Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:AddressedDropFlag_CatalogNeedsToBeUpdated_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogNeedsToBeUpdated_DoesIt",
          "package": "PCLT-DB",
          "signature": "CatalogNeedsToBeUpdated_DoesIt Bool",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogNeedsToBeUpdated_DoesIt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogNeedsToBeUpdated_DoesIt",
          "package": "PCLT-DB",
          "partial": "Catalog Needs To Be Updated Does It",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:CatalogNeedsToBeUpdated_DoesIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogReadFromDBResult",
          "package": "PCLT-DB",
          "signature": "CatalogReadFromDBResult (PCLT_Catalog, [ErrorWithPCSCatalog ReadPCSCatalogError], [AddPCLT_toPCLT_Error])",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogReadFromDBResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogReadFromDBResult",
          "normalized": "CatalogReadFromDBResult(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError],[AddPCLT_toPCLT_Error])",
          "package": "PCLT-DB",
          "partial": "Catalog Read From DBResult",
          "signature": "CatalogReadFromDBResult(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError],[AddPCLT_toPCLT_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:CatalogReadFromDBResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "signature": "CatalogUpdateFromDBErrors",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "CatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "partial": "Catalog Update From DBErrors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:CatalogUpdateFromDBErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "DBError_DFCNTBUE",
          "package": "PCLT-DB",
          "signature": "DBError_DFCNTBUE SqlError",
          "source": "src/Database-PCLT-InterfaceWithDB.html#DropFlag_CatalogNeedsToBeUpdated_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "DBError_DFCNTBUE",
          "package": "PCLT-DB",
          "partial": "DBError DFCNTBUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:DBError_DFCNTBUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "NotModified_DFCNTBUE",
          "package": "PCLT-DB",
          "signature": "NotModified_DFCNTBUE",
          "source": "src/Database-PCLT-InterfaceWithDB.html#DropFlag_CatalogNeedsToBeUpdated_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "NotModified_DFCNTBUE",
          "package": "PCLT-DB",
          "partial": "Not Modified DFCNTBUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:NotModified_DFCNTBUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "RawCatalogDataReadFromDBResult",
          "package": "PCLT-DB",
          "signature": "RawCatalogDataReadFromDBResult (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
          "source": "src/Database-PCLT-InterfaceWithDB.html#RawCatalogDataReadFromDBResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "RawCatalogDataReadFromDBResult",
          "normalized": "RawCatalogDataReadFromDBResult(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "package": "PCLT-DB",
          "partial": "Raw Catalog Data Read From DBResult",
          "signature": "RawCatalogDataReadFromDBResult(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:RawCatalogDataReadFromDBResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a one way relation from\n \u003ccode\u003e\u003ca\u003eCatalogFromHSRTInitErrors\u003c/a\u003e\u003c/code\u003e\n to \u003ccode\u003e\u003ca\u003eCatalogUpdateFromDBErrors\u003c/a\u003e\u003c/code\u003e. That's because subject operations are\n similar it their abstractions.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cfhie2cue",
          "package": "PCLT-DB",
          "signature": "CatalogFromHSRTInitErrors -\u003e CatalogUpdateFromDBErrors",
          "source": "src/Database-PCLT-InterfaceWithDB.html#cfhie2cue",
          "type": "function"
        },
        "index": {
          "description": "There is one way relation from CatalogFromHSRTInitErrors to CatalogUpdateFromDBErrors That because subject operations are similar it their abstractions",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cfhie2cue",
          "normalized": "CatalogFromHSRTInitErrors-\u003eCatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "signature": "CatalogFromHSRTInitErrors-\u003eCatalogUpdateFromDBErrors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cfhie2cue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the flag \"catalog data or config changed\" is up in DB.\n If so, drop it and try to read from DB\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePCLT_InnerConfig\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRawCatalogDataReadFromDBResult\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCatalogReadFromDBResult\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "considerCatalogUpdate",
          "package": "PCLT-DB",
          "signature": "Connection -\u003e PCLT_CatalogID -\u003e IO (Maybe PCLT_Catalog, Maybe CatalogUpdateFromDBErrors)",
          "source": "src/Database-PCLT-InterfaceWithDB.html#considerCatalogUpdate",
          "type": "function"
        },
        "index": {
          "description": "Check if the flag catalog data or config changed is up in DB If so drop it and try to read from DB PCLT InnerConfig RawCatalogDataReadFromDBResult CatalogReadFromDBResult",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "considerCatalogUpdate",
          "normalized": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe PCLT_Catalog,Maybe CatalogUpdateFromDBErrors)",
          "package": "PCLT-DB",
          "partial": "Catalog Update",
          "signature": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe PCLT_Catalog,Maybe CatalogUpdateFromDBErrors)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:considerCatalogUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueARFDBE",
          "package": "PCLT-DB",
          "signature": "Maybe AddressedReadFromDBError",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueARFDBE",
          "package": "PCLT-DB",
          "partial": "ARFDBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueARFDBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCatReadErrs",
          "package": "PCLT-DB",
          "signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCatReadErrs",
          "normalized": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
          "package": "PCLT-DB",
          "partial": "Cat Read Errs",
          "signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCatReadErrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCatalogID",
          "package": "PCLT-DB",
          "signature": "PCLT_CatalogID",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCatalogID",
          "package": "PCLT-DB",
          "partial": "Catalog ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCatalogID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCatalogRead",
          "package": "PCLT-DB",
          "signature": "Bool",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCatalogRead",
          "package": "PCLT-DB",
          "partial": "Catalog Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCatalogRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCollectionErrs",
          "package": "PCLT-DB",
          "signature": "[AddPCLT_toPCLT_Error]",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueCollectionErrs",
          "normalized": "[AddPCLT_toPCLT_Error]",
          "package": "PCLT-DB",
          "partial": "Collection Errs",
          "signature": "[AddPCLT_toPCLT_Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueCollectionErrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueDropCNTBUFlag",
          "package": "PCLT-DB",
          "signature": "Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error",
          "source": "src/Database-PCLT-InterfaceWithDB.html#CatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "cueDropCNTBUFlag",
          "package": "PCLT-DB",
          "partial": "Drop CNTBUFlag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:cueDropCNTBUFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty form to be filled.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "defaultCatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "signature": "PCLT_CatalogID -\u003e CatalogUpdateFromDBErrors",
          "source": "src/Database-PCLT-InterfaceWithDB.html#defaultCatalogUpdateFromDBErrors",
          "type": "function"
        },
        "index": {
          "description": "An empty form to be filled",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "defaultCatalogUpdateFromDBErrors",
          "normalized": "PCLT_CatalogID-\u003eCatalogUpdateFromDBErrors",
          "package": "PCLT-DB",
          "partial": "Catalog Update From DBErrors",
          "signature": "PCLT_CatalogID-\u003eCatalogUpdateFromDBErrors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:defaultCatalogUpdateFromDBErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop that flag in DB.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "dropFlag_CatalogNeedsToBeUpdated",
          "package": "PCLT-DB",
          "signature": "Connection -\u003e PCLT_CatalogID -\u003e IO (Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error)",
          "source": "src/Database-PCLT-InterfaceWithDB.html#dropFlag_CatalogNeedsToBeUpdated",
          "type": "function"
        },
        "index": {
          "description": "Drop that flag in DB",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "dropFlag_CatalogNeedsToBeUpdated",
          "normalized": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error)",
          "package": "PCLT-DB",
          "partial": "Flag Catalog Needs To Be Updated",
          "signature": "Connection-\u003ePCLT_CatalogID-\u003eIO(Maybe AddressedDropFlag_CatalogNeedsToBeUpdated_Error)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:dropFlag_CatalogNeedsToBeUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if catalog is read without a single error.\n\u003c/p\u003e",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "emptyCUE",
          "package": "PCLT-DB",
          "signature": "CatalogUpdateFromDBErrors -\u003e Bool",
          "source": "src/Database-PCLT-InterfaceWithDB.html#emptyCUE",
          "type": "function"
        },
        "index": {
          "description": "Checks if catalog is read without single error",
          "hierarchy": "Database PCLT InterfaceWithDB",
          "module": "Database.PCLT.InterfaceWithDB",
          "name": "emptyCUE",
          "normalized": "CatalogUpdateFromDBErrors-\u003eBool",
          "package": "PCLT-DB",
          "partial": "CUE",
          "signature": "CatalogUpdateFromDBErrors-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-InterfaceWithDB.html#v:emptyCUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module around a thread that considers updating catalog, when commanded\n to do so.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "UpdatableCatalog",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-UpdatableCatalog.html",
          "type": "module"
        },
        "index": {
          "description": "module around thread that considers updating catalog when commanded to do so",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "UpdatableCatalog",
          "package": "PCLT-DB",
          "partial": "Updatable Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias used by \u003ccode\u003e\u003ca\u003erunCatalogUpdatorService\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "DisconnectDBConnWhenFinished_shouldwe",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-UpdatableCatalog.html#DisconnectDBConnWhenFinished_shouldwe",
          "type": "type"
        },
        "index": {
          "description": "Type alias used by runCatalogUpdatorService",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "DisconnectDBConnWhenFinished_shouldwe",
          "package": "PCLT-DB",
          "partial": "Disconnect DBConn When Finished",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#t:DisconnectDBConnWhenFinished_shouldwe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias used by \u003ccode\u003e\u003ca\u003erunCatalogUpdatorService\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "MakeIterationAndContinueCycle_shouldwe",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-UpdatableCatalog.html#MakeIterationAndContinueCycle_shouldwe",
          "type": "type"
        },
        "index": {
          "description": "Type alias used by runCatalogUpdatorService",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "MakeIterationAndContinueCycle_shouldwe",
          "package": "PCLT-DB",
          "partial": "Make Iteration And Continue Cycle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#t:MakeIterationAndContinueCycle_shouldwe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is a special instance of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e - it accumulates\n all other instances of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e from the whole PCLT-DB package,\n and also from PCLT package.\n\u003c/p\u003e\u003cp\u003eThis instance is best to be used as an intial input for the catalog\n formation in your applications.\n\u003c/p\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT-UpdatableCatalog.html#PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "type": "data"
        },
        "index": {
          "description": "This type is special instance of HasStaticRawPCLTs it accumulates all other instances of HasStaticRawPCLTs from the whole PCLT-DB package and also from PCLT package This instance is best to be used as an intial input for the catalog formation in your applications",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "package": "PCLT-DB",
          "partial": "PCLTRaw Catalog Database PCLT Updatable Catalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#t:PCLTRawCatalog__Database_PCLT_UpdatableCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "package": "PCLT-DB",
          "signature": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "source": "src/Database-PCLT-UpdatableCatalog.html#PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "PCLTRawCatalog__Database_PCLT_UpdatableCatalog",
          "package": "PCLT-DB",
          "partial": "PCLTRaw Catalog Database PCLT Updatable Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:PCLTRawCatalog__Database_PCLT_UpdatableCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput contains current catalog version. If the update failed\n and returned no new catalog version, or if update isn't needed,\n then current catalog version is returned.\n\u003c/p\u003e\u003cp\u003eIf there appeared any errors, they get acted with. The action is\n specified by user.\n\u003c/p\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "catalogUpdatorIteration",
          "package": "PCLT-DB",
          "signature": "Connection -\u003e PCLT_CatalogID -\u003e (PCLT_Catalog -\u003e CatalogUpdateFromDBErrors -\u003e IO ()) -\u003e PCLT_Catalog -\u003e IO (Maybe PCLT_Catalog)",
          "source": "src/Database-PCLT-UpdatableCatalog.html#catalogUpdatorIteration",
          "type": "function"
        },
        "index": {
          "description": "Input contains current catalog version If the update failed and returned no new catalog version or if update isn needed then current catalog version is returned If there appeared any errors they get acted with The action is specified by user",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "catalogUpdatorIteration",
          "normalized": "Connection-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003ePCLT_Catalog-\u003eIO(Maybe PCLT_Catalog)",
          "package": "PCLT-DB",
          "partial": "Updator Iteration",
          "signature": "Connection-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003ePCLT_Catalog-\u003eIO(Maybe PCLT_Catalog)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:catalogUpdatorIteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first version of catalog, that service forms is always\n from nonDB source, but is from specified in the first triple\n \u003cem\u003e(catalog ID, config and some instance of HasStaticRawPCLTs)\u003c/em\u003e.\n That way, even if DB never responds, service always\n has at least this version of catalog available.\n\u003c/p\u003e\u003cp\u003eIn the 3rd argument user specifies action, that has a role of errors\n processor (reporter).\n\u003c/p\u003e\u003cp\u003eThe 4th argument is a \u003ccode\u003eChan\u003c/code\u003e, which this service listens to.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003eTrue\u003c/code\u003e comes, service makes iteration (reads catalog from DB if needed,\n and writes new version into the MVar), and continues cycle.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003eFalse\u003c/code\u003e comes, service stops.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe returned MVar is created by service itself and is a container,\n where it keeps last version of catalog.\n\u003c/p\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "runCatalogUpdatorService",
          "package": "PCLT-DB",
          "signature": "(PCLT_CatalogID, PCLT_InnerConfig, a) -\u003e (Connection, DisconnectDBConnWhenFinished_shouldwe) -\u003e (PCLT_Catalog -\u003e CatalogUpdateFromDBErrors -\u003e IO ()) -\u003e Chan MakeIterationAndContinueCycle_shouldwe -\u003e IO (MVar PCLT_Catalog, ThreadId)",
          "source": "src/Database-PCLT-UpdatableCatalog.html#runCatalogUpdatorService",
          "type": "function"
        },
        "index": {
          "description": "The first version of catalog that service forms is always from nonDB source but is from specified in the first triple catalog ID config and some instance of HasStaticRawPCLTs That way even if DB never responds service always has at least this version of catalog available In the rd argument user specifies action that has role of errors processor reporter The th argument is Chan which this service listens to If True comes service makes iteration reads catalog from DB if needed and writes new version into the MVar and continues cycle If False comes service stops The returned MVar is created by service itself and is container where it keeps last version of catalog",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "runCatalogUpdatorService",
          "normalized": "(PCLT_CatalogID,PCLT_InnerConfig,a)-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)",
          "package": "PCLT-DB",
          "partial": "Catalog Updator Service",
          "signature": "(PCLT_CatalogID,PCLT_InnerConfig,a)-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:runCatalogUpdatorService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003erunCatalogUpdatorService\u003c/a\u003e\u003c/code\u003e. The service starts from\n default config (\u003ccode\u003e\u003ca\u003edefaultPCLTInnerConfig\u003c/a\u003e\u003c/code\u003e) and\n default set of templates (\u003ccode\u003e\u003ca\u003ePCLTRawCatalog__Database_PCLT_UpdatableCatalog\u003c/a\u003e\u003c/code\u003e).\n But updates from DB orienting on given \u003ccode\u003e\u003ca\u003ePCLT_CatalogID\u003c/a\u003e\u003c/code\u003e,\n which may be different set of templates and different config.\n\u003c/p\u003e",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "runCatalogUpdatorService_wDefaultInitial",
          "package": "PCLT-DB",
          "signature": "PCLT_CatalogID -\u003e (Connection, DisconnectDBConnWhenFinished_shouldwe) -\u003e (PCLT_Catalog -\u003e CatalogUpdateFromDBErrors -\u003e IO ()) -\u003e Chan MakeIterationAndContinueCycle_shouldwe -\u003e IO (MVar PCLT_Catalog, ThreadId)",
          "source": "src/Database-PCLT-UpdatableCatalog.html#runCatalogUpdatorService_wDefaultInitial",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around runCatalogUpdatorService The service starts from default config defaultPCLTInnerConfig and default set of templates PCLTRawCatalog Database PCLT UpdatableCatalog But updates from DB orienting on given PCLT CatalogID which may be different set of templates and different config",
          "hierarchy": "Database PCLT UpdatableCatalog",
          "module": "Database.PCLT.UpdatableCatalog",
          "name": "runCatalogUpdatorService_wDefaultInitial",
          "normalized": "PCLT_CatalogID-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)",
          "package": "PCLT-DB",
          "partial": "Catalog Updator Service Default Initial",
          "signature": "PCLT_CatalogID-\u003e(Connection,DisconnectDBConnWhenFinished_shouldwe)-\u003e(PCLT_Catalog-\u003eCatalogUpdateFromDBErrors-\u003eIO())-\u003eChan MakeIterationAndContinueCycle_shouldwe-\u003eIO(MVar PCLT_Catalog,ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT-UpdatableCatalog.html#v:runCatalogUpdatorService_wDefaultInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PCLT",
          "name": "PCLT",
          "package": "PCLT-DB",
          "source": "src/Database-PCLT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database PCLT",
          "module": "Database.PCLT",
          "name": "PCLT",
          "package": "PCLT-DB",
          "partial": "PCLT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-PCLT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn attemt of generalization of \"read from DB\" operation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.ReadableFromDB",
          "name": "ReadableFromDB",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html",
          "type": "module"
        },
        "index": {
          "description": "An attemt of generalization of read from DB operation",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "ReadableFromDB",
          "package": "PCLT-DB",
          "partial": "Readable From DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eReadFromDBError\u003c/a\u003e\u003c/code\u003e, added information about type of\n read subject and by showing the primary key.\n\u003c/p\u003e\u003cp\u003e___________\n\u003c/p\u003e\u003cp\u003eIf PCLT is to be used for representation of \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e\n then user must declare an additional localizable template in his PCLT\n catalog with ID of form:\n\u003c/p\u003e\u003cpre\u003e\"ARFDBE_SDLR.\" ++ (show $ \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e err)\u003c/pre\u003e\u003cp\u003e, where the \u003ccode\u003eshow \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e will include full modules path\n of type. The templete content if not important - leave it empty, but what\n is important - is it's SDL requirement. This SDL requirement wil be in\n effect for the representation of \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor more information on that, see description for \u003ccode\u003eShowAsPCSI\u003c/code\u003e instance for\n \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e - in module \u003ca\u003eDatabase.ReadableFromDB__\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "AddressedReadFromDBError",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
          "type": "data"
        },
        "index": {
          "description": "wrapper around ReadFromDBError added information about type of read subject and by showing the primary key If PCLT is to be used for representation of AddressedReadFromDBError then user must declare an additional localizable template in his PCLT catalog with ID of form ARFDBE SDLR show arfdbeEntityType err where the show arfdbeEntityType will include full modules path of type The templete content if not important leave it empty but what is important is it SDL requirement This SDL requirement wil be in effect for the representation of AddressedReadFromDBError For more information on that see description for ShowAsPCSI instance for AddressedReadFromDBError in module Database.ReadableFromDB",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "AddressedReadFromDBError",
          "package": "PCLT-DB",
          "partial": "Addressed Read From DBError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:AddressedReadFromDBError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType aliase for use by \u003ccode\u003e\u003ca\u003eTooManyResultsFoundInDB_RFDBE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "AllowedMaximumOfRowsCount",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html#AllowedMaximumOfRowsCount",
          "type": "type"
        },
        "index": {
          "description": "Type aliase for use by TooManyResultsFoundInDB RFDBE",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "AllowedMaximumOfRowsCount",
          "package": "PCLT-DB",
          "partial": "Allowed Maximum Of Rows Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:AllowedMaximumOfRowsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "FieldName",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html#FieldName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "FieldName",
          "package": "PCLT-DB",
          "partial": "Field Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:FieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType aliase for use by \u003ccode\u003e\u003ca\u003ereadOneFromDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "NoMoreThanOne_shoulditbe",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html#NoMoreThanOne_shoulditbe",
          "type": "type"
        },
        "index": {
          "description": "Type aliase for use by readOneFromDB",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "NoMoreThanOne_shoulditbe",
          "package": "PCLT-DB",
          "partial": "No More Than One",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:NoMoreThanOne_shoulditbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat kind of errors are possible in the result\n of \"read from DB\" operation\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "ReadFromDBError",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html#ReadFromDBError",
          "type": "data"
        },
        "index": {
          "description": "What kind of errors are possible in the result of read from DB operation",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "ReadFromDBError",
          "package": "PCLT-DB",
          "partial": "Read From DBError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:ReadFromDBError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt's recommended to use newtypes for subject type variable (\"readable\"),\n when it is composite (like tuple, Either, Map or other). Reason for that\n is described near the \u003ccode\u003eShowAsPCSI\u003c/code\u003e instaniation\n for \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "ReadableFromDB",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB.html#ReadableFromDB",
          "type": "class"
        },
        "index": {
          "description": "It recommended to use newtypes for subject type variable readable when it is composite like tuple Either Map or other Reason for that is described near the ShowAsPCSI instaniation for AddressedReadFromDBError",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "ReadableFromDB",
          "package": "PCLT-DB",
          "partial": "Readable From DB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#t:ReadableFromDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "AddressedReadFromDBError",
          "package": "PCLT-DB",
          "signature": "AddressedReadFromDBError",
          "source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "AddressedReadFromDBError",
          "package": "PCLT-DB",
          "partial": "Addressed Read From DBError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:AddressedReadFromDBError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "NotFoundInDB_RFDBE",
          "package": "PCLT-DB",
          "signature": "NotFoundInDB_RFDBE",
          "source": "src/Database-ReadableFromDB.html#ReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "NotFoundInDB_RFDBE",
          "package": "PCLT-DB",
          "partial": "Not Found In DB RFDBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:NotFoundInDB_RFDBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "RecieveError_RFDBE",
          "package": "PCLT-DB",
          "signature": "RecieveError_RFDBE SqlError",
          "source": "src/Database-ReadableFromDB.html#ReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "RecieveError_RFDBE",
          "package": "PCLT-DB",
          "partial": "Recieve Error RFDBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:RecieveError_RFDBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "RowParseError_RFDBE",
          "package": "PCLT-DB",
          "signature": "RowParseError_RFDBE SomeException",
          "source": "src/Database-ReadableFromDB.html#ReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "RowParseError_RFDBE",
          "package": "PCLT-DB",
          "partial": "Row Parse Error RFDBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:RowParseError_RFDBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "SubReadError_RFDBE",
          "package": "PCLT-DB",
          "signature": "SubReadError_RFDBE AddressedReadFromDBError",
          "source": "src/Database-ReadableFromDB.html#ReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "SubReadError_RFDBE",
          "package": "PCLT-DB",
          "partial": "Sub Read Error RFDBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:SubReadError_RFDBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "TooManyResultsFoundInDB_RFDBE",
          "package": "PCLT-DB",
          "signature": "TooManyResultsFoundInDB_RFDBE AllowedMaximumOfRowsCount",
          "source": "src/Database-ReadableFromDB.html#ReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "TooManyResultsFoundInDB_RFDBE",
          "package": "PCLT-DB",
          "partial": "Too Many Results Found In DB RFDBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:TooManyResultsFoundInDB_RFDBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "arfdbeEntityType",
          "package": "PCLT-DB",
          "signature": "TypeRep",
          "source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "arfdbeEntityType",
          "package": "PCLT-DB",
          "partial": "Entity Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:arfdbeEntityType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "arfdbeErr",
          "package": "PCLT-DB",
          "signature": "ReadFromDBError",
          "source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "arfdbeErr",
          "package": "PCLT-DB",
          "partial": "Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:arfdbeErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "arfdbePK",
          "package": "PCLT-DB",
          "signature": "String",
          "source": "src/Database-ReadableFromDB.html#AddressedReadFromDBError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "arfdbePK",
          "package": "PCLT-DB",
          "partial": "PK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:arfdbePK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e liftInList a = a : []\n\u003c/pre\u003e",
          "module": "Database.ReadableFromDB",
          "name": "liftInList",
          "package": "PCLT-DB",
          "signature": "a -\u003e [a]",
          "source": "src/Database-ReadableFromDB.html#liftInList",
          "type": "function"
        },
        "index": {
          "description": "liftInList",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "liftInList",
          "normalized": "a-\u003e[a]",
          "package": "PCLT-DB",
          "partial": "In List",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:liftInList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB",
          "name": "parseDBrow",
          "package": "PCLT-DB",
          "signature": "Connection -\u003e pk -\u003e Map FieldName SqlValue -\u003e IO (Either AddressedReadFromDBError readable)",
          "source": "src/Database-ReadableFromDB.html#parseDBrow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "parseDBrow",
          "normalized": "Connection-\u003ea-\u003eMap FieldName SqlValue-\u003eIO(Either AddressedReadFromDBError b)",
          "package": "PCLT-DB",
          "partial": "DBrow",
          "signature": "Connection-\u003epk-\u003eMap FieldName SqlValue-\u003eIO(Either AddressedReadFromDBError readable)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:parseDBrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead rows from DB and parse each at once\n using \u003ccode\u003e\u003ca\u003eparseDBrow\u003c/a\u003e\u003c/code\u003e class method\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "readFromDB",
          "package": "PCLT-DB",
          "signature": "Connection -\u003e pk -\u003e IO [Either AddressedReadFromDBError readable]",
          "source": "src/Database-ReadableFromDB.html#readFromDB",
          "type": "method"
        },
        "index": {
          "description": "Read rows from DB and parse each at once using parseDBrow class method",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "readFromDB",
          "normalized": "Connection-\u003ea-\u003eIO[Either AddressedReadFromDBError b]",
          "package": "PCLT-DB",
          "partial": "From DB",
          "signature": "Connection-\u003epk-\u003eIO[Either AddressedReadFromDBError readable]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:readFromDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass method derived from \u003ccode\u003e\u003ca\u003ereadFromDB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparseDBrow\u003c/a\u003e\u003c/code\u003e.\n No need to overload it, if not for special cases.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "readOneFromDB",
          "package": "PCLT-DB",
          "signature": "Connection -\u003e pk -\u003e NoMoreThanOne_shoulditbe -\u003e IO (Either AddressedReadFromDBError readable)",
          "source": "src/Database-ReadableFromDB.html#readOneFromDB",
          "type": "method"
        },
        "index": {
          "description": "Class method derived from readFromDB and parseDBrow No need to overload it if not for special cases",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "readOneFromDB",
          "normalized": "Connection-\u003ea-\u003eNoMoreThanOne_shoulditbe-\u003eIO(Either AddressedReadFromDBError b)",
          "package": "PCLT-DB",
          "partial": "One From DB",
          "signature": "Connection-\u003epk-\u003eNoMoreThanOne_shoulditbe-\u003eIO(Either AddressedReadFromDBError readable)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:readOneFromDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e of what can be under \u003ccode\u003eRight\u003c/code\u003e in \u003ccode\u003eEither\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "rightType_formReadResOrErr",
          "package": "PCLT-DB",
          "signature": "Either left right -\u003e TypeRep",
          "source": "src/Database-ReadableFromDB.html#rightType_formReadResOrErr",
          "type": "function"
        },
        "index": {
          "description": "Return the TypeRep of what can be under Right in Either",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "rightType_formReadResOrErr",
          "normalized": "Either a b-\u003eTypeRep",
          "package": "PCLT-DB",
          "partial": "Type Read Res Or Err",
          "signature": "Either left right-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:rightType_formReadResOrErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is better than \u003ccode\u003erow ! field_name\u003c/code\u003e, because if an error occurs\n (field not found), then it returns in error message this field name.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "takeFieldValue",
          "package": "PCLT-DB",
          "signature": "FieldName -\u003e Map FieldName SqlValue -\u003e a",
          "source": "src/Database-ReadableFromDB.html#takeFieldValue",
          "type": "function"
        },
        "index": {
          "description": "This is better than row field name because if an error occurs field not found then it returns in error message this field name",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "takeFieldValue",
          "normalized": "FieldName-\u003eMap FieldName SqlValue-\u003ea",
          "package": "PCLT-DB",
          "partial": "Field Value",
          "signature": "FieldName-\u003eMap FieldName SqlValue-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:takeFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUppercase given field name, and apply it with \u003ccode\u003e\u003ca\u003etakeFieldValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "takeUFieldValue",
          "package": "PCLT-DB",
          "signature": "FieldName -\u003e Map FieldName SqlValue -\u003e a",
          "source": "src/Database-ReadableFromDB.html#takeUFieldValue",
          "type": "function"
        },
        "index": {
          "description": "Uppercase given field name and apply it with takeFieldValue",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "takeUFieldValue",
          "normalized": "FieldName-\u003eMap FieldName SqlValue-\u003ea",
          "package": "PCLT-DB",
          "partial": "UField Value",
          "signature": "FieldName-\u003eMap FieldName SqlValue-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:takeUFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWARNING !!!\n HDBC lowercases field names, when using \u003ccode\u003efetchAllRowsMap\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "uppercaseMapKeys",
          "package": "PCLT-DB",
          "signature": "Map String a -\u003e Map String a",
          "source": "src/Database-ReadableFromDB.html#uppercaseMapKeys",
          "type": "function"
        },
        "index": {
          "description": "WARNING HDBC lowercases field names when using fetchAllRowsMap",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "uppercaseMapKeys",
          "normalized": "Map String a-\u003eMap String a",
          "package": "PCLT-DB",
          "partial": "Map Keys",
          "signature": "Map String a-\u003eMap String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:uppercaseMapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case of error it wraps it \u003ccode\u003e\u003ca\u003eReadFromDBError\u003c/a\u003e\u003c/code\u003e\n into \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "wrapParseResult_1row",
          "package": "PCLT-DB",
          "signature": "pk -\u003e Either ReadFromDBError readable -\u003e Either AddressedReadFromDBError readable",
          "source": "src/Database-ReadableFromDB.html#wrapParseResult_1row",
          "type": "function"
        },
        "index": {
          "description": "In case of error it wraps it ReadFromDBError into AddressedReadFromDBError",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "wrapParseResult_1row",
          "normalized": "a-\u003eEither ReadFromDBError b-\u003eEither AddressedReadFromDBError b",
          "package": "PCLT-DB",
          "partial": "Parse Result",
          "signature": "pk-\u003eEither ReadFromDBError readable-\u003eEither AddressedReadFromDBError readable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:wrapParseResult_1row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003ewrapParseResult_1row\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.ReadableFromDB",
          "name": "wrapParseResult_Nrows",
          "package": "PCLT-DB",
          "signature": "pk -\u003e [Either ReadFromDBError a] -\u003e [Either AddressedReadFromDBError a]",
          "source": "src/Database-ReadableFromDB.html#wrapParseResult_Nrows",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around wrapParseResult row",
          "hierarchy": "Database ReadableFromDB",
          "module": "Database.ReadableFromDB",
          "name": "wrapParseResult_Nrows",
          "normalized": "a-\u003e[Either ReadFromDBError b]-\u003e[Either AddressedReadFromDBError b]",
          "package": "PCLT-DB",
          "partial": "Parse Result Nrows",
          "signature": "pk-\u003e[Either ReadFromDBError a]-\u003e[Either AddressedReadFromDBError a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB.html#v:wrapParseResult_Nrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor representation of \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e a special trick is used.\n SDL requirements for representation of error is referenced to be\n the same as specified for template with such ID:\n\u003c/p\u003e\u003cpre\u003e\"ARFDBE_SDLR.\" ++ (show $ \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e err)\u003c/pre\u003e\u003cp\u003eSo, whenever an instance of \u003ccode\u003e\u003ca\u003eReadableFromDB\u003c/a\u003e\u003c/code\u003e\n is declared, in order to make \u003ccode\u003e\u003ca\u003eAddressedReadFromDBError\u003c/a\u003e\u003c/code\u003e show correctly,\n developer must also add an empty template with corresponding ID to PCLT\n catalog.\n\u003c/p\u003e\u003cp\u003eFor example, template with ID\n \u003ccode\u003e\"ARFDBE_SDLR.Text.PCLT.Config.PCLT_InnerConfig\"\u003c/code\u003e is to be added, when\n \u003ccode\u003ePCLT_InnerConfig\u003c/code\u003e is made an instance of\n \u003ccode\u003e\u003ca\u003eReadableFromDB\u003c/a\u003e\u003c/code\u003e.\n The content of this template is not important - just leave it empty, it's\n never shown. Only it's SDL requirement is important and is used.\n\u003c/p\u003e\u003cp\u003eIn order to keep \u003ccode\u003e(show $ \u003ccode\u003e\u003ca\u003earfdbeEntityType\u003c/a\u003e\u003c/code\u003e err)\u003c/code\u003e string as short\n as possible it's recommended to use \u003ccode\u003enewtype\u003c/code\u003e, when type is composite,\n like tuple, Either, Map etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.ReadableFromDB__",
          "name": "ReadableFromDB__",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB__.html",
          "type": "module"
        },
        "index": {
          "description": "For representation of AddressedReadFromDBError special trick is used SDL requirements for representation of error is referenced to be the same as specified for template with such ID ARFDBE SDLR show arfdbeEntityType err So whenever an instance of ReadableFromDB is declared in order to make AddressedReadFromDBError show correctly developer must also add an empty template with corresponding ID to PCLT catalog For example template with ID ARFDBE SDLR.Text.PCLT.Config.PCLT InnerConfig is to be added when PCLT InnerConfig is made an instance of ReadableFromDB The content of this template is not important just leave it empty it never shown Only it SDL requirement is important and is used In order to keep show arfdbeEntityType err string as short as possible it recommended to use newtype when type is composite like tuple Either Map etc",
          "hierarchy": "Database ReadableFromDB__",
          "module": "Database.ReadableFromDB__",
          "name": "ReadableFromDB__",
          "package": "PCLT-DB",
          "partial": "Readable From DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB__.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB__",
          "name": "PCLTRawCatalog__Database_ReadableFromDB",
          "package": "PCLT-DB",
          "source": "src/Database-ReadableFromDB__.html#PCLTRawCatalog__Database_ReadableFromDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB__",
          "module": "Database.ReadableFromDB__",
          "name": "PCLTRawCatalog__Database_ReadableFromDB",
          "package": "PCLT-DB",
          "partial": "PCLTRaw Catalog Database Readable From DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB__.html#t:PCLTRawCatalog__Database_ReadableFromDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.ReadableFromDB__",
          "name": "PCLTRawCatalog__Database_ReadableFromDB",
          "package": "PCLT-DB",
          "signature": "PCLTRawCatalog__Database_ReadableFromDB",
          "source": "src/Database-ReadableFromDB__.html#PCLTRawCatalog__Database_ReadableFromDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database ReadableFromDB__",
          "module": "Database.ReadableFromDB__",
          "name": "PCLTRawCatalog__Database_ReadableFromDB",
          "package": "PCLT-DB",
          "partial": "PCLTRaw Catalog Database Readable From DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT-DB/docs/Database-ReadableFromDB__.html#v:PCLTRawCatalog__Database_ReadableFromDB"
      }
    }
  ]
]