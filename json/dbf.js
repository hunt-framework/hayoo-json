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
        "word": "dbf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "Handle",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Handle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "Handle",
          "package": "dbf",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "DbfFieldHandle",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Handle.html#DbfFieldHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "DbfFieldHandle",
          "package": "dbf",
          "partial": "Dbf Field Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#t:DbfFieldHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "DbfHandle",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Handle.html#DbfHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "DbfHandle",
          "package": "dbf",
          "partial": "Dbf Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#t:DbfHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "DbfRecHandle",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Handle.html#DbfRecHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "DbfRecHandle",
          "package": "dbf",
          "partial": "Dbf Rec Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#t:DbfRecHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "closeDbf",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO ()",
          "source": "src/Database-XBase-Dbf-Handle.html#closeDbf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "closeDbf",
          "normalized": "DbfHandle-\u003eIO()",
          "package": "dbf",
          "partial": "Dbf",
          "signature": "DbfHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:closeDbf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfFields",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO [DbfFieldHandle]",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfFields",
          "normalized": "DbfHandle-\u003eIO[DbfFieldHandle]",
          "package": "dbf",
          "partial": "Fields",
          "signature": "DbfHandle-\u003eIO[DbfFieldHandle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfGetField",
          "package": "dbf",
          "signature": "DbfHandle -\u003e Int -\u003e IO DbfFieldHandle",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfGetField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfGetField",
          "normalized": "DbfHandle-\u003eInt-\u003eIO DbfFieldHandle",
          "package": "dbf",
          "partial": "Get Field",
          "signature": "DbfHandle-\u003eInt-\u003eIO DbfFieldHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfGetField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfGetRecord",
          "package": "dbf",
          "signature": "DbfHandle -\u003e Integer -\u003e IO (Maybe DbfRecHandle)",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfGetRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfGetRecord",
          "normalized": "DbfHandle-\u003eInteger-\u003eIO(Maybe DbfRecHandle)",
          "package": "dbf",
          "partial": "Get Record",
          "signature": "DbfHandle-\u003eInteger-\u003eIO(Maybe DbfRecHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfGetRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfHeader",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO DbfFileHeader",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfHeader",
          "normalized": "DbfHandle-\u003eIO DbfFileHeader",
          "package": "dbf",
          "partial": "Header",
          "signature": "DbfHandle-\u003eIO DbfFileHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfIsOpen",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO Bool",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfIsOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfIsOpen",
          "normalized": "DbfHandle-\u003eIO Bool",
          "package": "dbf",
          "partial": "Is Open",
          "signature": "DbfHandle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfLookupField",
          "package": "dbf",
          "signature": "DbfHandle -\u003e String -\u003e IO (Maybe DbfFieldHandle)",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfLookupField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfLookupField",
          "normalized": "DbfHandle-\u003eString-\u003eIO(Maybe DbfFieldHandle)",
          "package": "dbf",
          "partial": "Lookup Field",
          "signature": "DbfHandle-\u003eString-\u003eIO(Maybe DbfFieldHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfLookupField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfNumFields",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO Int",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfNumFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfNumFields",
          "normalized": "DbfHandle-\u003eIO Int",
          "package": "dbf",
          "partial": "Num Fields",
          "signature": "DbfHandle-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfNumFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfNumRecords",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO Integer",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfNumRecords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfNumRecords",
          "normalized": "DbfHandle-\u003eIO Integer",
          "package": "dbf",
          "partial": "Num Records",
          "signature": "DbfHandle-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfNumRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfRecords",
          "package": "dbf",
          "signature": "DbfHandle -\u003e IO [DbfRecHandle]",
          "source": "src/Database-XBase-Dbf-Handle.html#dbfRecords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "dbfRecords",
          "normalized": "DbfHandle-\u003eIO[DbfRecHandle]",
          "package": "dbf",
          "partial": "Records",
          "signature": "DbfHandle-\u003eIO[DbfRecHandle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:dbfRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "fieldDesc",
          "package": "dbf",
          "signature": "DbfFieldHandle -\u003e DbfFieldDescriptor",
          "source": "src/Database-XBase-Dbf-Handle.html#fieldDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "fieldDesc",
          "normalized": "DbfFieldHandle-\u003eDbfFieldDescriptor",
          "package": "dbf",
          "partial": "Desc",
          "signature": "DbfFieldHandle-\u003eDbfFieldDescriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:fieldDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "fieldName",
          "package": "dbf",
          "signature": "DbfFieldHandle -\u003e String",
          "source": "src/Database-XBase-Dbf-Handle.html#fieldName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "fieldName",
          "normalized": "DbfFieldHandle-\u003eString",
          "package": "dbf",
          "partial": "Name",
          "signature": "DbfFieldHandle-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "fieldNum",
          "package": "dbf",
          "signature": "DbfFieldHandle -\u003e Int",
          "source": "src/Database-XBase-Dbf-Handle.html#fieldNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "fieldNum",
          "normalized": "DbfFieldHandle-\u003eInt",
          "package": "dbf",
          "partial": "Num",
          "signature": "DbfFieldHandle-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:fieldNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "openDbf",
          "package": "dbf",
          "signature": "FilePath -\u003e Bool -\u003e IO DbfHandle",
          "source": "src/Database-XBase-Dbf-Handle.html#openDbf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "openDbf",
          "normalized": "FilePath-\u003eBool-\u003eIO DbfHandle",
          "package": "dbf",
          "partial": "Dbf",
          "signature": "FilePath-\u003eBool-\u003eIO DbfHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:openDbf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "readDbfField",
          "package": "dbf",
          "signature": "DbfRecHandle -\u003e DbfFieldHandle -\u003e IO ByteString",
          "source": "src/Database-XBase-Dbf-Handle.html#readDbfField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "readDbfField",
          "normalized": "DbfRecHandle-\u003eDbfFieldHandle-\u003eIO ByteString",
          "package": "dbf",
          "partial": "Dbf Field",
          "signature": "DbfRecHandle-\u003eDbfFieldHandle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:readDbfField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Handle",
          "name": "recNum",
          "package": "dbf",
          "signature": "DbfRecHandle -\u003e Int",
          "source": "src/Database-XBase-Dbf-Handle.html#recNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Handle",
          "module": "Database.XBase.Dbf.Handle",
          "name": "recNum",
          "normalized": "DbfRecHandle-\u003eInt",
          "package": "dbf",
          "partial": "Num",
          "signature": "DbfRecHandle-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Handle.html#v:recNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "Structures",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Structures.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "Structures",
          "package": "dbf",
          "partial": "Structures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfDatabaseContainer",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfDatabaseContainer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfDatabaseContainer",
          "package": "dbf",
          "partial": "Dbf Database Container",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#t:DbfDatabaseContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfDate",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfDate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfDate",
          "package": "dbf",
          "partial": "Dbf Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#t:DbfDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFieldDescriptor",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFieldDescriptor",
          "package": "dbf",
          "partial": "Dbf Field Descriptor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#t:DbfFieldDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFileHeader",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFileHeader",
          "package": "dbf",
          "partial": "Dbf File Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#t:DbfFileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfRecord",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfRecord",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfRecord",
          "package": "dbf",
          "partial": "Dbf Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#t:DbfRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfDate",
          "package": "dbf",
          "signature": "DbfDate",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfDate",
          "package": "dbf",
          "partial": "Dbf Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:DbfDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFieldDescriptor",
          "package": "dbf",
          "signature": "DbfFieldDescriptor",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFieldDescriptor",
          "package": "dbf",
          "partial": "Dbf Field Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:DbfFieldDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFileHeader",
          "package": "dbf",
          "signature": "DbfFileHeader",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfFileHeader",
          "package": "dbf",
          "partial": "Dbf File Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:DbfFileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfRecord",
          "package": "dbf",
          "signature": "DbfRecord",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "DbfRecord",
          "package": "dbf",
          "partial": "Dbf Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:DbfRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfDay",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfDay",
          "package": "dbf",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldAddress",
          "package": "dbf",
          "signature": "Word32",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldAddress",
          "package": "dbf",
          "partial": "Field Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldDecimals",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldDecimals",
          "package": "dbf",
          "partial": "Field Decimals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldDecimals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldIndexedFlag",
          "package": "dbf",
          "signature": "Bool",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldIndexedFlag",
          "package": "dbf",
          "partial": "Field Indexed Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldIndexedFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldLength",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldLength",
          "package": "dbf",
          "partial": "Field Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldName",
          "package": "dbf",
          "signature": "ByteString",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldName",
          "package": "dbf",
          "partial": "Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldSetFieldsFlag",
          "package": "dbf",
          "signature": "Bool",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldSetFieldsFlag",
          "package": "dbf",
          "partial": "Field Set Fields Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldSetFieldsFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldType",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldType",
          "package": "dbf",
          "partial": "Field Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldWorkArea",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFieldWorkArea",
          "package": "dbf",
          "partial": "Field Work Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFieldWorkArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileDbContainer",
          "package": "dbf",
          "signature": "Maybe DbfDatabaseContainer",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileDbContainer",
          "package": "dbf",
          "partial": "File Db Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileDbContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileEncr",
          "package": "dbf",
          "signature": "Bool",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileEncr",
          "package": "dbf",
          "partial": "File Encr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileEncr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileFields",
          "package": "dbf",
          "signature": "[DbfFieldDescriptor]",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileFields",
          "normalized": "[DbfFieldDescriptor]",
          "package": "dbf",
          "partial": "File Fields",
          "signature": "[DbfFieldDescriptor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileHdrLength",
          "package": "dbf",
          "signature": "Word16",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileHdrLength",
          "package": "dbf",
          "partial": "File Hdr Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileHdrLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileLangCode",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileLangCode",
          "package": "dbf",
          "partial": "File Lang Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileLangCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileMDX",
          "package": "dbf",
          "signature": "Bool",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileMDX",
          "package": "dbf",
          "partial": "File MDX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileMDX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileNumRecords",
          "package": "dbf",
          "signature": "Word32",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileNumRecords",
          "package": "dbf",
          "partial": "File Num Records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileNumRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileRecLength",
          "package": "dbf",
          "signature": "Word16",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileRecLength",
          "package": "dbf",
          "partial": "File Rec Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileRecLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileSignature",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileSignature",
          "package": "dbf",
          "partial": "File Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileTxInc",
          "package": "dbf",
          "signature": "Bool",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileTxInc",
          "package": "dbf",
          "partial": "File Tx Inc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileTxInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileUpdateDate",
          "package": "dbf",
          "signature": "DbfDate Year8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfFileUpdateDate",
          "package": "dbf",
          "partial": "File Update Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfFileUpdateDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfMonth",
          "package": "dbf",
          "signature": "Word8",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfMonth",
          "package": "dbf",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfRecData",
          "package": "dbf",
          "signature": "ByteString",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfRecData",
          "package": "dbf",
          "partial": "Rec Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfRecData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfRecDeleted",
          "package": "dbf",
          "signature": "Bool",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfRecDeleted",
          "package": "dbf",
          "partial": "Rec Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfRecDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfYear",
          "package": "dbf",
          "signature": "yearType",
          "source": "src/Database-XBase-Dbf-Structures.html#DbfDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "dbfYear",
          "package": "dbf",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:dbfYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFieldDescriptor",
          "package": "dbf",
          "signature": "Get DbfFieldDescriptor",
          "source": "src/Database-XBase-Dbf-Structures.html#getDbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFieldDescriptor",
          "package": "dbf",
          "partial": "Dbf Field Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:getDbfFieldDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFieldName",
          "package": "dbf",
          "signature": "Get ByteString",
          "source": "src/Database-XBase-Dbf-Structures.html#getDbfFieldName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFieldName",
          "package": "dbf",
          "partial": "Dbf Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:getDbfFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFile",
          "package": "dbf",
          "signature": "Get (DbfFileHeader, [DbfRecord])",
          "source": "src/Database-XBase-Dbf-Structures.html#getDbfFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFile",
          "normalized": "Get(DbfFileHeader,[DbfRecord])",
          "package": "dbf",
          "partial": "Dbf File",
          "signature": "Get(DbfFileHeader,[DbfRecord])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:getDbfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFileHeader",
          "package": "dbf",
          "signature": "Get DbfFileHeader",
          "source": "src/Database-XBase-Dbf-Structures.html#getDbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfFileHeader",
          "package": "dbf",
          "partial": "Dbf File Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:getDbfFileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfRecord",
          "package": "dbf",
          "signature": "Int64 -\u003e Get (Maybe DbfRecord)",
          "source": "src/Database-XBase-Dbf-Structures.html#getDbfRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfRecord",
          "normalized": "Int-\u003eGet(Maybe DbfRecord)",
          "package": "dbf",
          "partial": "Dbf Record",
          "signature": "Int-\u003eGet(Maybe DbfRecord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:getDbfRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfShortDate",
          "package": "dbf",
          "signature": "Get (DbfDate Year8)",
          "source": "src/Database-XBase-Dbf-Structures.html#getDbfShortDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "getDbfShortDate",
          "package": "dbf",
          "partial": "Dbf Short Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:getDbfShortDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFieldDescriptor",
          "package": "dbf",
          "signature": "DbfFieldDescriptor -\u003e PutM ()",
          "source": "src/Database-XBase-Dbf-Structures.html#putDbfFieldDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFieldDescriptor",
          "normalized": "DbfFieldDescriptor-\u003ePutM()",
          "package": "dbf",
          "partial": "Dbf Field Descriptor",
          "signature": "DbfFieldDescriptor-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:putDbfFieldDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFieldName",
          "package": "dbf",
          "signature": "ByteString -\u003e PutM ()",
          "source": "src/Database-XBase-Dbf-Structures.html#putDbfFieldName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFieldName",
          "normalized": "ByteString-\u003ePutM()",
          "package": "dbf",
          "partial": "Dbf Field Name",
          "signature": "ByteString-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:putDbfFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFile",
          "package": "dbf",
          "signature": "DbfFileHeader -\u003e [DbfRecord] -\u003e PutM ()",
          "source": "src/Database-XBase-Dbf-Structures.html#putDbfFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFile",
          "normalized": "DbfFileHeader-\u003e[DbfRecord]-\u003ePutM()",
          "package": "dbf",
          "partial": "Dbf File",
          "signature": "DbfFileHeader-\u003e[DbfRecord]-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:putDbfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFileHeader",
          "package": "dbf",
          "signature": "DbfFileHeader -\u003e PutM ()",
          "source": "src/Database-XBase-Dbf-Structures.html#putDbfFileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfFileHeader",
          "normalized": "DbfFileHeader-\u003ePutM()",
          "package": "dbf",
          "partial": "Dbf File Header",
          "signature": "DbfFileHeader-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:putDbfFileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfRecord",
          "package": "dbf",
          "signature": "DbfRecord -\u003e PutM ()",
          "source": "src/Database-XBase-Dbf-Structures.html#putDbfRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfRecord",
          "normalized": "DbfRecord-\u003ePutM()",
          "package": "dbf",
          "partial": "Dbf Record",
          "signature": "DbfRecord-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:putDbfRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfShortDate",
          "package": "dbf",
          "signature": "DbfDate Year8 -\u003e PutM ()",
          "source": "src/Database-XBase-Dbf-Structures.html#putDbfShortDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Structures",
          "module": "Database.XBase.Dbf.Structures",
          "name": "putDbfShortDate",
          "normalized": "DbfDate Year-\u003ePutM()",
          "package": "dbf",
          "partial": "Dbf Short Date",
          "signature": "DbfDate Year-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Structures.html#v:putDbfShortDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Year8",
          "name": "Year8",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Year8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Year8",
          "module": "Database.XBase.Dbf.Year8",
          "name": "Year8",
          "package": "dbf",
          "partial": "Year",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Year8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Year8",
          "name": "Year8",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf-Year8.html#Year8",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Year8",
          "module": "Database.XBase.Dbf.Year8",
          "name": "Year8",
          "package": "dbf",
          "partial": "Year",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Year8.html#t:Year8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Year8",
          "name": "getYear8",
          "package": "dbf",
          "signature": "Get Year8",
          "source": "src/Database-XBase-Dbf-Year8.html#getYear8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Year8",
          "module": "Database.XBase.Dbf.Year8",
          "name": "getYear8",
          "package": "dbf",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Year8.html#v:getYear8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf.Year8",
          "name": "putYear8",
          "package": "dbf",
          "signature": "Year8 -\u003e Put",
          "source": "src/Database-XBase-Dbf-Year8.html#putYear8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf Year8",
          "module": "Database.XBase.Dbf.Year8",
          "name": "putYear8",
          "normalized": "Year-\u003ePut",
          "package": "dbf",
          "partial": "Year",
          "signature": "Year-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf-Year8.html#v:putYear8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf",
          "name": "Dbf",
          "package": "dbf",
          "source": "src/Database-XBase-Dbf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database XBase Dbf",
          "module": "Database.XBase.Dbf",
          "name": "Dbf",
          "package": "dbf",
          "partial": "Dbf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf",
          "name": "readDbfFile",
          "package": "dbf",
          "signature": "FilePath -\u003e IO (DbfFileHeader, [DbfRecord])",
          "source": "src/Database-XBase-Dbf.html#readDbfFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf",
          "module": "Database.XBase.Dbf",
          "name": "readDbfFile",
          "normalized": "FilePath-\u003eIO(DbfFileHeader,[DbfRecord])",
          "package": "dbf",
          "partial": "Dbf File",
          "signature": "FilePath-\u003eIO(DbfFileHeader,[DbfRecord])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf.html#v:readDbfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.XBase.Dbf",
          "name": "writeDbfFile",
          "package": "dbf",
          "signature": "FilePath -\u003e (DbfFileHeader, [DbfRecord]) -\u003e IO ()",
          "source": "src/Database-XBase-Dbf.html#writeDbfFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database XBase Dbf",
          "module": "Database.XBase.Dbf",
          "name": "writeDbfFile",
          "normalized": "FilePath-\u003e(DbfFileHeader,[DbfRecord])-\u003eIO()",
          "package": "dbf",
          "partial": "Dbf File",
          "signature": "FilePath-\u003e(DbfFileHeader,[DbfRecord])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dbf/docs/Database-XBase-Dbf.html#v:writeDbfFile"
      }
    }
  ]
]