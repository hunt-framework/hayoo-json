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
        "word": "vhd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd.Lowlevel",
          "name": "Lowlevel",
          "package": "vhd",
          "source": "src/Data-Vhd-Lowlevel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vhd Lowlevel",
          "module": "Data.Vhd.Lowlevel",
          "name": "Lowlevel",
          "package": "vhd",
          "partial": "Lowlevel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Lowlevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread footer directly from a vhd file.\n\u003c/p\u003e",
          "module": "Data.Vhd.Lowlevel",
          "name": "readFooter",
          "package": "vhd",
          "signature": "FilePath -\u003e IO (Either String Footer)",
          "source": "src/Data-Vhd-Lowlevel.html#readFooter",
          "type": "function"
        },
        "index": {
          "description": "read footer directly from vhd file",
          "hierarchy": "Data Vhd Lowlevel",
          "module": "Data.Vhd.Lowlevel",
          "name": "readFooter",
          "normalized": "FilePath-\u003eIO(Either String Footer)",
          "package": "vhd",
          "partial": "Footer",
          "signature": "FilePath-\u003eIO(Either String Footer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Lowlevel.html#v:readFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread header directly from a vhd file\n\u003c/p\u003e",
          "module": "Data.Vhd.Lowlevel",
          "name": "readHeader",
          "package": "vhd",
          "signature": "FilePath -\u003e IO (Either String Header)",
          "source": "src/Data-Vhd-Lowlevel.html#readHeader",
          "type": "function"
        },
        "index": {
          "description": "read header directly from vhd file",
          "hierarchy": "Data Vhd Lowlevel",
          "module": "Data.Vhd.Lowlevel",
          "name": "readHeader",
          "normalized": "FilePath-\u003eIO(Either String Header)",
          "package": "vhd",
          "partial": "Header",
          "signature": "FilePath-\u003eIO(Either String Header)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Lowlevel.html#v:readHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ere-write both footer in a VHD file\n\u003c/p\u003e",
          "module": "Data.Vhd.Lowlevel",
          "name": "writeFooter",
          "package": "vhd",
          "signature": "FilePath -\u003e Footer -\u003e IO ()",
          "source": "src/Data-Vhd-Lowlevel.html#writeFooter",
          "type": "function"
        },
        "index": {
          "description": "re-write both footer in VHD file",
          "hierarchy": "Data Vhd Lowlevel",
          "module": "Data.Vhd.Lowlevel",
          "name": "writeFooter",
          "normalized": "FilePath-\u003eFooter-\u003eIO()",
          "package": "vhd",
          "partial": "Footer",
          "signature": "FilePath-\u003eFooter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Lowlevel.html#v:writeFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ere-write an header in a VHD file\n\u003c/p\u003e",
          "module": "Data.Vhd.Lowlevel",
          "name": "writeHeader",
          "package": "vhd",
          "signature": "FilePath -\u003e Header -\u003e IO ()",
          "source": "src/Data-Vhd-Lowlevel.html#writeHeader",
          "type": "function"
        },
        "index": {
          "description": "re-write an header in VHD file",
          "hierarchy": "Data Vhd Lowlevel",
          "module": "Data.Vhd.Lowlevel",
          "name": "writeHeader",
          "normalized": "FilePath-\u003eHeader-\u003eIO()",
          "package": "vhd",
          "partial": "Header",
          "signature": "FilePath-\u003eHeader-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Lowlevel.html#v:writeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd.Time",
          "name": "Time",
          "package": "vhd",
          "source": "src/Data-Vhd-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vhd Time",
          "module": "Data.Vhd.Time",
          "name": "Time",
          "package": "vhd",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent number of seconds since VHD epoch.\n\u003c/p\u003e",
          "module": "Data.Vhd.Time",
          "name": "VhdDiffTime",
          "package": "vhd",
          "source": "src/Data-Vhd-Time.html#VhdDiffTime",
          "type": "newtype"
        },
        "index": {
          "description": "Represent number of seconds since VHD epoch",
          "hierarchy": "Data Vhd Time",
          "module": "Data.Vhd.Time",
          "name": "VhdDiffTime",
          "package": "vhd",
          "partial": "Vhd Diff Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Time.html#t:VhdDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd.Time",
          "name": "VhdDiffTime",
          "package": "vhd",
          "signature": "VhdDiffTime Word32",
          "source": "src/Data-Vhd-Time.html#VhdDiffTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd Time",
          "module": "Data.Vhd.Time",
          "name": "VhdDiffTime",
          "package": "vhd",
          "partial": "Vhd Diff Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Time.html#v:VhdDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the current time in vhd epoch time.\n\u003c/p\u003e",
          "module": "Data.Vhd.Time",
          "name": "getVHDTime",
          "package": "vhd",
          "signature": "IO VhdDiffTime",
          "source": "src/Data-Vhd-Time.html#getVHDTime",
          "type": "function"
        },
        "index": {
          "description": "return the current time in vhd epoch time",
          "hierarchy": "Data Vhd Time",
          "module": "Data.Vhd.Time",
          "name": "getVHDTime",
          "package": "vhd",
          "partial": "VHDTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Time.html#v:getVHDTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd.Time",
          "name": "toPosixSeconds",
          "package": "vhd",
          "signature": "VhdDiffTime -\u003e POSIXTime",
          "source": "src/Data-Vhd-Time.html#toPosixSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd Time",
          "module": "Data.Vhd.Time",
          "name": "toPosixSeconds",
          "normalized": "VhdDiffTime-\u003ePOSIXTime",
          "package": "vhd",
          "partial": "Posix Seconds",
          "signature": "VhdDiffTime-\u003ePOSIXTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Time.html#v:toPosixSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd.Time",
          "name": "toUTCTime",
          "package": "vhd",
          "signature": "VhdDiffTime -\u003e UTCTime",
          "source": "src/Data-Vhd-Time.html#toUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd Time",
          "module": "Data.Vhd.Time",
          "name": "toUTCTime",
          "normalized": "VhdDiffTime-\u003eUTCTime",
          "package": "vhd",
          "partial": "UTCTime",
          "signature": "VhdDiffTime-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd-Time.html#v:toUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Vhd",
          "package": "vhd",
          "source": "src/Data-Vhd.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Vhd",
          "package": "vhd",
          "partial": "Vhd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe offset from the beginning of a block in bytes\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "BlockByteAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#BlockByteAddress",
          "type": "newtype"
        },
        "index": {
          "description": "The offset from the beginning of block in bytes",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "BlockByteAddress",
          "package": "vhd",
          "partial": "Block Byte Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:BlockByteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe offset from the beginning of a block in sectors\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "BlockSectorAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#BlockSectorAddress",
          "type": "newtype"
        },
        "index": {
          "description": "The offset from the beginning of block in sectors",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "BlockSectorAddress",
          "package": "vhd",
          "partial": "Block Sector Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:BlockSectorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock size\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "BlockSize",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#BlockSize",
          "type": "newtype"
        },
        "index": {
          "description": "block size",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "BlockSize",
          "package": "vhd",
          "partial": "Block Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:BlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CheckSumable",
          "package": "vhd",
          "source": "src/Data-Vhd-Checksum.html#CheckSumable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CheckSumable",
          "package": "vhd",
          "partial": "Check Sumable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:CheckSumable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Checksum",
          "package": "vhd",
          "source": "src/Data-Vhd-Checksum.html#Checksum",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Checksum",
          "package": "vhd",
          "partial": "Checksum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:Checksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Cookie",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#Cookie",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Cookie",
          "package": "vhd",
          "partial": "Cookie",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreateParameters",
          "package": "vhd",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreateParameters",
          "package": "vhd",
          "partial": "Create Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:CreateParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreatorApplication",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#CreatorApplication",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreatorApplication",
          "package": "vhd",
          "partial": "Creator Application",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:CreatorApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreatorHostOs",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#CreatorHostOs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreatorHostOs",
          "package": "vhd",
          "partial": "Creator Host Os",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:CreatorHostOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskGeometry",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#DiskGeometry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskGeometry",
          "package": "vhd",
          "partial": "Disk Geometry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:DiskGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskGeometryCylinders",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#DiskGeometryCylinders",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskGeometryCylinders",
          "package": "vhd",
          "partial": "Disk Geometry Cylinders",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:DiskGeometryCylinders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskGeometryHeads",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#DiskGeometryHeads",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskGeometryHeads",
          "package": "vhd",
          "partial": "Disk Geometry Heads",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:DiskGeometryHeads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskGeometrySectorsPerTrack",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#DiskGeometrySectorsPerTrack",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskGeometrySectorsPerTrack",
          "package": "vhd",
          "partial": "Disk Geometry Sectors Per Track",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:DiskGeometrySectorsPerTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskType",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#DiskType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskType",
          "package": "vhd",
          "partial": "Disk Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:DiskType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Footer",
          "package": "vhd",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Footer",
          "package": "vhd",
          "partial": "Footer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:Footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Header",
          "package": "vhd",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Header",
          "package": "vhd",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "ParentLocatorEntries",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntries",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "ParentLocatorEntries",
          "package": "vhd",
          "partial": "Parent Locator Entries",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:ParentLocatorEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "ParentLocatorEntry",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "ParentLocatorEntry",
          "package": "vhd",
          "partial": "Parent Locator Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:ParentLocatorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "ParentUnicodeName",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#ParentUnicodeName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "ParentUnicodeName",
          "package": "vhd",
          "partial": "Parent Unicode Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:ParentUnicodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "PhysicalByteAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#PhysicalByteAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "PhysicalByteAddress",
          "package": "vhd",
          "partial": "Physical Byte Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:PhysicalByteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "PhysicalByteCount",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#PhysicalByteCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "PhysicalByteCount",
          "package": "vhd",
          "partial": "Physical Byte Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:PhysicalByteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "PhysicalSectorAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#PhysicalSectorAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "PhysicalSectorAddress",
          "package": "vhd",
          "partial": "Physical Sector Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:PhysicalSectorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "PhysicalSectorCount",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#PhysicalSectorCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "PhysicalSectorCount",
          "package": "vhd",
          "partial": "Physical Sector Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:PhysicalSectorCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Sized",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#Sized",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Sized",
          "package": "vhd",
          "partial": "Sized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:Sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "UniqueId",
          "package": "vhd",
          "source": "src/Data-Vhd-UniqueId.html#UniqueId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "UniqueId",
          "package": "vhd",
          "partial": "Unique Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:UniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Version",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#Version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Version",
          "package": "vhd",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VersionMajor",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VersionMajor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VersionMajor",
          "package": "vhd",
          "partial": "Version Major",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VersionMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VersionMinor",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VersionMinor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VersionMinor",
          "package": "vhd",
          "partial": "Version Minor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VersionMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe absolute number of the block\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "VirtualBlockAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VirtualBlockAddress",
          "type": "newtype"
        },
        "index": {
          "description": "The absolute number of the block",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualBlockAddress",
          "package": "vhd",
          "partial": "Virtual Block Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VirtualBlockAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VirtualBlockCount",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VirtualBlockCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualBlockCount",
          "package": "vhd",
          "partial": "Virtual Block Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VirtualBlockCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn absolute address in byte in the vhd content space\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "VirtualByteAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VirtualByteAddress",
          "type": "newtype"
        },
        "index": {
          "description": "An absolute address in byte in the vhd content space",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualByteAddress",
          "package": "vhd",
          "partial": "Virtual Byte Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VirtualByteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VirtualByteCount",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VirtualByteCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualByteCount",
          "package": "vhd",
          "partial": "Virtual Byte Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VirtualByteCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VirtualSectorAddress",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VirtualSectorAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualSectorAddress",
          "package": "vhd",
          "partial": "Virtual Sector Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VirtualSectorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VirtualSectorCount",
          "package": "vhd",
          "source": "src/Data-Vhd-Types.html#VirtualSectorCount",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualSectorCount",
          "package": "vhd",
          "partial": "Virtual Sector Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#t:VirtualSectorCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "BlockByteAddress",
          "package": "vhd",
          "signature": "BlockByteAddress Word32",
          "source": "src/Data-Vhd-Types.html#BlockByteAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "BlockByteAddress",
          "package": "vhd",
          "partial": "Block Byte Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:BlockByteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "BlockSectorAddress",
          "package": "vhd",
          "signature": "BlockSectorAddress Word32",
          "source": "src/Data-Vhd-Types.html#BlockSectorAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "BlockSectorAddress",
          "package": "vhd",
          "partial": "Block Sector Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:BlockSectorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "BlockSize",
          "package": "vhd",
          "signature": "BlockSize Word32",
          "source": "src/Data-Vhd-Types.html#BlockSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "BlockSize",
          "package": "vhd",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:BlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Checksum",
          "package": "vhd",
          "signature": "Checksum Word32",
          "source": "src/Data-Vhd-Checksum.html#Checksum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Checksum",
          "package": "vhd",
          "partial": "Checksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:Checksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Cookie",
          "package": "vhd",
          "signature": "Cookie ByteString",
          "source": "src/Data-Vhd-Types.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Cookie",
          "package": "vhd",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreateParameters",
          "package": "vhd",
          "signature": "CreateParameters",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreateParameters",
          "package": "vhd",
          "partial": "Create Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:CreateParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreatorApplication",
          "package": "vhd",
          "signature": "CreatorApplication ByteString",
          "source": "src/Data-Vhd-Types.html#CreatorApplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreatorApplication",
          "package": "vhd",
          "partial": "Creator Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:CreatorApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreatorHostOsMacintosh",
          "package": "vhd",
          "signature": "CreatorHostOsMacintosh",
          "source": "src/Data-Vhd-Types.html#CreatorHostOs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreatorHostOsMacintosh",
          "package": "vhd",
          "partial": "Creator Host Os Macintosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:CreatorHostOsMacintosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreatorHostOsUnknown",
          "package": "vhd",
          "signature": "CreatorHostOsUnknown",
          "source": "src/Data-Vhd-Types.html#CreatorHostOs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreatorHostOsUnknown",
          "package": "vhd",
          "partial": "Creator Host Os Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:CreatorHostOsUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "CreatorHostOsWindows",
          "package": "vhd",
          "signature": "CreatorHostOsWindows",
          "source": "src/Data-Vhd-Types.html#CreatorHostOs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "CreatorHostOsWindows",
          "package": "vhd",
          "partial": "Creator Host Os Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:CreatorHostOsWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskGeometry",
          "package": "vhd",
          "signature": "DiskGeometry DiskGeometryCylinders DiskGeometryHeads DiskGeometrySectorsPerTrack",
          "source": "src/Data-Vhd-Types.html#DiskGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskGeometry",
          "package": "vhd",
          "partial": "Disk Geometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:DiskGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskTypeDifferencing",
          "package": "vhd",
          "signature": "DiskTypeDifferencing",
          "source": "src/Data-Vhd-Types.html#DiskType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskTypeDifferencing",
          "package": "vhd",
          "partial": "Disk Type Differencing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:DiskTypeDifferencing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskTypeDynamic",
          "package": "vhd",
          "signature": "DiskTypeDynamic",
          "source": "src/Data-Vhd-Types.html#DiskType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskTypeDynamic",
          "package": "vhd",
          "partial": "Disk Type Dynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:DiskTypeDynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "DiskTypeFixed",
          "package": "vhd",
          "signature": "DiskTypeFixed",
          "source": "src/Data-Vhd-Types.html#DiskType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "DiskTypeFixed",
          "package": "vhd",
          "partial": "Disk Type Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:DiskTypeFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Footer",
          "package": "vhd",
          "signature": "Footer",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Footer",
          "package": "vhd",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:Footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Header",
          "package": "vhd",
          "signature": "Header",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Header",
          "package": "vhd",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "ParentLocatorEntries",
          "package": "vhd",
          "signature": "ParentLocatorEntries [ParentLocatorEntry]",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "ParentLocatorEntries",
          "normalized": "ParentLocatorEntries[ParentLocatorEntry]",
          "package": "vhd",
          "partial": "Parent Locator Entries",
          "signature": "ParentLocatorEntries[ParentLocatorEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:ParentLocatorEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "ParentLocatorEntry",
          "package": "vhd",
          "signature": "ParentLocatorEntry",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "ParentLocatorEntry",
          "package": "vhd",
          "partial": "Parent Locator Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:ParentLocatorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "ParentUnicodeName",
          "package": "vhd",
          "signature": "ParentUnicodeName String",
          "source": "src/Data-Vhd-Types.html#ParentUnicodeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "ParentUnicodeName",
          "package": "vhd",
          "partial": "Parent Unicode Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:ParentUnicodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "Version",
          "package": "vhd",
          "signature": "Version VersionMajor VersionMinor",
          "source": "src/Data-Vhd-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "Version",
          "package": "vhd",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VirtualBlockAddress",
          "package": "vhd",
          "signature": "VirtualBlockAddress Word32",
          "source": "src/Data-Vhd-Types.html#VirtualBlockAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualBlockAddress",
          "package": "vhd",
          "partial": "Virtual Block Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:VirtualBlockAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "VirtualByteAddress",
          "package": "vhd",
          "signature": "VirtualByteAddress Word64",
          "source": "src/Data-Vhd-Types.html#VirtualByteAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "VirtualByteAddress",
          "package": "vhd",
          "partial": "Virtual Byte Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:VirtualByteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "addrToSector",
          "package": "vhd",
          "signature": "Word64 -\u003e PhysicalSectorAddress",
          "source": "src/Data-Vhd-Types.html#addrToSector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "addrToSector",
          "normalized": "Word-\u003ePhysicalSectorAddress",
          "package": "vhd",
          "partial": "To Sector",
          "signature": "Word-\u003ePhysicalSectorAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:addrToSector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "adjustChecksum",
          "package": "vhd",
          "signature": "a -\u003e a",
          "source": "src/Data-Vhd-Checksum.html#adjustChecksum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "adjustChecksum",
          "normalized": "a-\u003ea",
          "package": "vhd",
          "partial": "Checksum",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:adjustChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "calculateChecksum",
          "package": "vhd",
          "signature": "a -\u003e Checksum",
          "source": "src/Data-Vhd-Checksum.html#calculateChecksum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "calculateChecksum",
          "normalized": "a-\u003eChecksum",
          "package": "vhd",
          "partial": "Checksum",
          "signature": "a-\u003eChecksum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:calculateChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "checksumCalculate",
          "package": "vhd",
          "signature": "ByteString -\u003e Checksum",
          "source": "src/Data-Vhd-Checksum.html#checksumCalculate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "checksumCalculate",
          "normalized": "ByteString-\u003eChecksum",
          "package": "vhd",
          "partial": "Calculate",
          "signature": "ByteString-\u003eChecksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:checksumCalculate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esmart constructor for Cookie\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "cookie",
          "package": "vhd",
          "signature": "ByteString -\u003e Cookie",
          "source": "src/Data-Vhd-Types.html#cookie",
          "type": "function"
        },
        "index": {
          "description": "smart constructor for Cookie",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "cookie",
          "normalized": "ByteString-\u003eCookie",
          "package": "vhd",
          "signature": "ByteString-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an empty VHD file with the specified parameters.\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "create",
          "package": "vhd",
          "signature": "FilePath -\u003e CreateParameters -\u003e IO ()",
          "source": "src/Data-Vhd.html#create",
          "type": "function"
        },
        "index": {
          "description": "Creates an empty VHD file with the specified parameters",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "create",
          "normalized": "FilePath-\u003eCreateParameters-\u003eIO()",
          "package": "vhd",
          "signature": "FilePath-\u003eCreateParameters-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createBlockSize",
          "package": "vhd",
          "signature": "BlockSize",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createBlockSize",
          "package": "vhd",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createDiskType",
          "package": "vhd",
          "signature": "DiskType",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createDiskType",
          "package": "vhd",
          "partial": "Disk Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createDiskType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createParentTimeStamp",
          "package": "vhd",
          "signature": "Maybe VhdDiffTime",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createParentTimeStamp",
          "package": "vhd",
          "partial": "Parent Time Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createParentTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createParentUnicodeName",
          "package": "vhd",
          "signature": "Maybe ParentUnicodeName",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createParentUnicodeName",
          "package": "vhd",
          "partial": "Parent Unicode Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createParentUnicodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createParentUniqueId",
          "package": "vhd",
          "signature": "Maybe UniqueId",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createParentUniqueId",
          "package": "vhd",
          "partial": "Parent Unique Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createParentUniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createTimeStamp",
          "package": "vhd",
          "signature": "Maybe VhdDiffTime",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createTimeStamp",
          "package": "vhd",
          "partial": "Time Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createUseBatmap",
          "package": "vhd",
          "signature": "Bool",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createUseBatmap",
          "package": "vhd",
          "partial": "Use Batmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createUseBatmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createUuid",
          "package": "vhd",
          "signature": "Maybe UniqueId",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createUuid",
          "package": "vhd",
          "partial": "Uuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createUuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "createVirtualSize",
          "package": "vhd",
          "signature": "VirtualByteCount",
          "source": "src/Data-Vhd.html#CreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "createVirtualSize",
          "package": "vhd",
          "partial": "Virtual Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:createVirtualSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esmart constructor for CreatorApplication\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "creatorApplication",
          "package": "vhd",
          "signature": "ByteString -\u003e CreatorApplication",
          "source": "src/Data-Vhd-Types.html#creatorApplication",
          "type": "function"
        },
        "index": {
          "description": "smart constructor for CreatorApplication",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "creatorApplication",
          "normalized": "ByteString-\u003eCreatorApplication",
          "package": "vhd",
          "partial": "Application",
          "signature": "ByteString-\u003eCreatorApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:creatorApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "defaultCreateParameters",
          "package": "vhd",
          "signature": "CreateParameters",
          "source": "src/Data-Vhd.html#defaultCreateParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "defaultCreateParameters",
          "package": "vhd",
          "partial": "Create Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:defaultCreateParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerChecksum",
          "package": "vhd",
          "signature": "Checksum",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerChecksum",
          "package": "vhd",
          "partial": "Checksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerCookie",
          "package": "vhd",
          "signature": "Cookie",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerCookie",
          "package": "vhd",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerCreatorApplication",
          "package": "vhd",
          "signature": "CreatorApplication",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerCreatorApplication",
          "package": "vhd",
          "partial": "Creator Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerCreatorApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerCreatorHostOs",
          "package": "vhd",
          "signature": "CreatorHostOs",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerCreatorHostOs",
          "package": "vhd",
          "partial": "Creator Host Os",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerCreatorHostOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerCreatorVersion",
          "package": "vhd",
          "signature": "Version",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerCreatorVersion",
          "package": "vhd",
          "partial": "Creator Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerCreatorVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerCurrentSize",
          "package": "vhd",
          "signature": "VirtualByteCount",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerCurrentSize",
          "package": "vhd",
          "partial": "Current Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerCurrentSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerDataOffset",
          "package": "vhd",
          "signature": "PhysicalByteAddress",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerDataOffset",
          "package": "vhd",
          "partial": "Data Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerDataOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerDiskGeometry",
          "package": "vhd",
          "signature": "DiskGeometry",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerDiskGeometry",
          "package": "vhd",
          "partial": "Disk Geometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerDiskGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerDiskType",
          "package": "vhd",
          "signature": "DiskType",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerDiskType",
          "package": "vhd",
          "partial": "Disk Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerDiskType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerFormatVersion",
          "package": "vhd",
          "signature": "Version",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerFormatVersion",
          "package": "vhd",
          "partial": "Format Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerFormatVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerIsSavedState",
          "package": "vhd",
          "signature": "Bool",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerIsSavedState",
          "package": "vhd",
          "partial": "Is Saved State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerIsSavedState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerIsTemporaryDisk",
          "package": "vhd",
          "signature": "Bool",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerIsTemporaryDisk",
          "package": "vhd",
          "partial": "Is Temporary Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerIsTemporaryDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerOriginalSize",
          "package": "vhd",
          "signature": "VirtualByteCount",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerOriginalSize",
          "package": "vhd",
          "partial": "Original Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerOriginalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerTimeStamp",
          "package": "vhd",
          "signature": "VhdDiffTime",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerTimeStamp",
          "package": "vhd",
          "partial": "Time Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "footerUniqueId",
          "package": "vhd",
          "signature": "UniqueId",
          "source": "src/Data-Vhd-Footer.html#Footer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "footerUniqueId",
          "package": "vhd",
          "partial": "Unique Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:footerUniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "getChecksum",
          "package": "vhd",
          "signature": "a -\u003e Checksum",
          "source": "src/Data-Vhd-Checksum.html#getChecksum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "getChecksum",
          "normalized": "a-\u003eChecksum",
          "package": "vhd",
          "partial": "Checksum",
          "signature": "a-\u003eChecksum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:getChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the header and footer from a VHD file.\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "getInfo",
          "package": "vhd",
          "signature": "FilePath -\u003e IO (Either String (Header, Footer))",
          "source": "src/Data-Vhd.html#getInfo",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the header and footer from VHD file",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "getInfo",
          "normalized": "FilePath-\u003eIO(Either String(Header,Footer))",
          "package": "vhd",
          "partial": "Info",
          "signature": "FilePath-\u003eIO(Either String(Header,Footer))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:getInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerBlockSize",
          "package": "vhd",
          "signature": "BlockSize",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerBlockSize",
          "package": "vhd",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerChecksum",
          "package": "vhd",
          "signature": "Checksum",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerChecksum",
          "package": "vhd",
          "partial": "Checksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerCookie",
          "package": "vhd",
          "signature": "Cookie",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerCookie",
          "package": "vhd",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerDataOffset",
          "package": "vhd",
          "signature": "PhysicalByteAddress",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerDataOffset",
          "package": "vhd",
          "partial": "Data Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerDataOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerMaxTableEntries",
          "package": "vhd",
          "signature": "VirtualBlockCount",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerMaxTableEntries",
          "package": "vhd",
          "partial": "Max Table Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerMaxTableEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerParentLocatorEntries",
          "package": "vhd",
          "signature": "ParentLocatorEntries",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerParentLocatorEntries",
          "package": "vhd",
          "partial": "Parent Locator Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerParentLocatorEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerParentTimeStamp",
          "package": "vhd",
          "signature": "VhdDiffTime",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerParentTimeStamp",
          "package": "vhd",
          "partial": "Parent Time Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerParentTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerParentUnicodeName",
          "package": "vhd",
          "signature": "ParentUnicodeName",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerParentUnicodeName",
          "package": "vhd",
          "partial": "Parent Unicode Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerParentUnicodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerParentUniqueId",
          "package": "vhd",
          "signature": "UniqueId",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerParentUniqueId",
          "package": "vhd",
          "partial": "Parent Unique Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerParentUniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerReserved1",
          "package": "vhd",
          "signature": "ByteString",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerReserved1",
          "package": "vhd",
          "partial": "Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerReserved1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerTableOffset",
          "package": "vhd",
          "signature": "PhysicalByteAddress",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerTableOffset",
          "package": "vhd",
          "partial": "Table Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerTableOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "headerVersion",
          "package": "vhd",
          "signature": "Version",
          "source": "src/Data-Vhd-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "headerVersion",
          "package": "vhd",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:headerVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "locatorCode",
          "package": "vhd",
          "signature": "Word32",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "locatorCode",
          "package": "vhd",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:locatorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "locatorDataLength",
          "package": "vhd",
          "signature": "Word32",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "locatorDataLength",
          "package": "vhd",
          "partial": "Data Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:locatorDataLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "locatorDataOffset",
          "package": "vhd",
          "signature": "Word64",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "locatorDataOffset",
          "package": "vhd",
          "partial": "Data Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:locatorDataOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "locatorDataSpace",
          "package": "vhd",
          "signature": "Word32",
          "source": "src/Data-Vhd-Types.html#ParentLocatorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "locatorDataSpace",
          "package": "vhd",
          "partial": "Data Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:locatorDataSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "nullParentLocatorEntry",
          "package": "vhd",
          "signature": "ParentLocatorEntry",
          "source": "src/Data-Vhd-Types.html#nullParentLocatorEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "nullParentLocatorEntry",
          "package": "vhd",
          "partial": "Parent Locator Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:nullParentLocatorEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esmart constructor for ParentLocatorEntries\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "parentLocatorEntries",
          "package": "vhd",
          "signature": "[ParentLocatorEntry] -\u003e ParentLocatorEntries",
          "source": "src/Data-Vhd-Types.html#parentLocatorEntries",
          "type": "function"
        },
        "index": {
          "description": "smart constructor for ParentLocatorEntries",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "parentLocatorEntries",
          "normalized": "[ParentLocatorEntry]-\u003eParentLocatorEntries",
          "package": "vhd",
          "partial": "Locator Entries",
          "signature": "[ParentLocatorEntry]-\u003eParentLocatorEntries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:parentLocatorEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "parentUnicodeName",
          "package": "vhd",
          "signature": "[Char] -\u003e ParentUnicodeName",
          "source": "src/Data-Vhd-Types.html#parentUnicodeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "parentUnicodeName",
          "normalized": "[Char]-\u003eParentUnicodeName",
          "package": "vhd",
          "partial": "Unicode Name",
          "signature": "[Char]-\u003eParentUnicodeName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:parentUnicodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "randomUniqueId",
          "package": "vhd",
          "signature": "IO UniqueId",
          "source": "src/Data-Vhd-UniqueId.html#randomUniqueId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "randomUniqueId",
          "package": "vhd",
          "partial": "Unique Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:randomUniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads data from the whole virtual address space of the given VHD.\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "readData",
          "package": "vhd",
          "signature": "Vhd -\u003e IO ByteString",
          "source": "src/Data-Vhd.html#readData",
          "type": "function"
        },
        "index": {
          "description": "Reads data from the whole virtual address space of the given VHD",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "readData",
          "normalized": "Vhd-\u003eIO ByteString",
          "package": "vhd",
          "partial": "Data",
          "signature": "Vhd-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:readData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads data from the given virtual address range of the given VHD.\n\u003c/p\u003e\u003cp\u003eTODO: modify this function to read sub-blocks where appropriate.\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "readDataRange",
          "package": "vhd",
          "signature": "Vhd-\u003e Word64-\u003e Word64-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Reads data from the given virtual address range of the given VHD TODO modify this function to read sub-blocks where appropriate",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "readDataRange",
          "normalized": "Vhd-\u003eWord-\u003eWord-\u003eIO ByteString",
          "package": "vhd",
          "partial": "Data Range",
          "signature": "Vhd-\u003eWord-\u003eWord-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:readDataRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "setChecksum",
          "package": "vhd",
          "signature": "Checksum -\u003e a -\u003e a",
          "source": "src/Data-Vhd-Checksum.html#setChecksum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "setChecksum",
          "normalized": "Checksum-\u003ea-\u003ea",
          "package": "vhd",
          "partial": "Checksum",
          "signature": "Checksum-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:setChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "sized",
          "package": "vhd",
          "signature": "a -\u003e n",
          "source": "src/Data-Vhd-Types.html#sized",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "sized",
          "normalized": "a-\u003eb",
          "package": "vhd",
          "signature": "a-\u003en",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "snapshot",
          "package": "vhd",
          "signature": "Vhd -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-Vhd.html#snapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "snapshot",
          "normalized": "Vhd-\u003eFilePath-\u003eIO()",
          "package": "vhd",
          "signature": "Vhd-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esmart constructor for uniqueId\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "uniqueId",
          "package": "vhd",
          "signature": "ByteString -\u003e UniqueId",
          "source": "src/Data-Vhd-UniqueId.html#uniqueId",
          "type": "function"
        },
        "index": {
          "description": "smart constructor for uniqueId",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "uniqueId",
          "normalized": "ByteString-\u003eUniqueId",
          "package": "vhd",
          "partial": "Id",
          "signature": "ByteString-\u003eUniqueId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:uniqueId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eincrement the virtual address to align to the next block\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "vaddrNextBlock",
          "package": "vhd",
          "signature": "VirtualByteAddress -\u003e BlockSize -\u003e VirtualByteAddress",
          "source": "src/Data-Vhd-Types.html#vaddrNextBlock",
          "type": "function"
        },
        "index": {
          "description": "increment the virtual address to align to the next block",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "vaddrNextBlock",
          "normalized": "VirtualByteAddress-\u003eBlockSize-\u003eVirtualByteAddress",
          "package": "vhd",
          "partial": "Next Block",
          "signature": "VirtualByteAddress-\u003eBlockSize-\u003eVirtualByteAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:vaddrNextBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "vaddrPlus",
          "package": "vhd",
          "signature": "VirtualByteAddress -\u003e Word64 -\u003e VirtualByteAddress",
          "source": "src/Data-Vhd-Types.html#vaddrPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "vaddrPlus",
          "normalized": "VirtualByteAddress-\u003eWord-\u003eVirtualByteAddress",
          "package": "vhd",
          "partial": "Plus",
          "signature": "VirtualByteAddress-\u003eWord-\u003eVirtualByteAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:vaddrPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "vaddrToBlock",
          "package": "vhd",
          "signature": "VirtualByteAddress -\u003e BlockSize -\u003e (VirtualBlockAddress, BlockByteAddress, Word32)",
          "source": "src/Data-Vhd-Types.html#vaddrToBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "vaddrToBlock",
          "normalized": "VirtualByteAddress-\u003eBlockSize-\u003e(VirtualBlockAddress,BlockByteAddress,Word)",
          "package": "vhd",
          "partial": "To Block",
          "signature": "VirtualByteAddress-\u003eBlockSize-\u003e(VirtualBlockAddress,BlockByteAddress,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:vaddrToBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "verifyChecksum",
          "package": "vhd",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Vhd-Checksum.html#verifyChecksum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "verifyChecksum",
          "normalized": "a-\u003eBool",
          "package": "vhd",
          "partial": "Checksum",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:verifyChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vhd",
          "name": "withVhd",
          "package": "vhd",
          "signature": "FilePath -\u003e (Vhd -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Vhd.html#withVhd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "withVhd",
          "normalized": "FilePath-\u003e(Vhd-\u003eIO a)-\u003eIO a",
          "package": "vhd",
          "partial": "Vhd",
          "signature": "FilePath-\u003e(Vhd-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:withVhd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites data to the given virtual address of the given VHD.\n\u003c/p\u003e",
          "module": "Data.Vhd",
          "name": "writeDataRange",
          "package": "vhd",
          "signature": "Vhd-\u003e Word64-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Writes data to the given virtual address of the given VHD",
          "hierarchy": "Data Vhd",
          "module": "Data.Vhd",
          "name": "writeDataRange",
          "normalized": "Vhd-\u003eWord-\u003eByteString-\u003eIO()",
          "package": "vhd",
          "partial": "Data Range",
          "signature": "Vhd-\u003eWord-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vhd/docs/Data-Vhd.html#v:writeDataRange"
      }
    }
  ]
]