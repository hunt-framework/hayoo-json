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
        "word": "zip-archive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe zip-archive library provides functions for creating, modifying,\n and extracting files from zip archives.\n\u003c/p\u003e\u003cp\u003eCertain simplifying assumptions are made about the zip archives: in\n particular, there is no support for encryption, zip files that span\n multiple disks, ZIP64, OS-specific file attributes, or compression\n methods other than Deflate.  However, the library should be able to\n read the most common zip archives, and the archives it produces should\n be readable by all standard unzip programs.\n\u003c/p\u003e\u003cp\u003eAs an example of the use of the library, a standalone zip archiver\n and extracter, Zip.hs, is provided in the source distribution.\n\u003c/p\u003e\u003cp\u003eFor more information on the format of zip archives, consult\n \u003ca\u003ehttp://www.pkware.com/documents/casestudies/APPNOTE.TXT\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Archive.Zip",
          "name": "Zip",
          "package": "zip-archive",
          "source": "src/Codec-Archive-Zip.html",
          "type": "module"
        },
        "index": {
          "description": "The zip-archive library provides functions for creating modifying and extracting files from zip archives Certain simplifying assumptions are made about the zip archives in particular there is no support for encryption zip files that span multiple disks ZIP64 OS-specific file attributes or compression methods other than Deflate However the library should be able to read the most common zip archives and the archives it produces should be readable by all standard unzip programs As an example of the use of the library standalone zip archiver and extracter Zip.hs is provided in the source distribution For more information on the format of zip archives consult http www.pkware.com documents casestudies APPNOTE.TXT",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "Zip",
          "package": "zip-archive",
          "partial": "Zip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured representation of a zip archive, including directory\n information and contents (in lazy bytestrings).\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "Archive",
          "package": "zip-archive",
          "source": "src/Codec-Archive-Zip.html#Archive",
          "type": "data"
        },
        "index": {
          "description": "Structured representation of zip archive including directory information and contents in lazy bytestrings",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "Archive",
          "package": "zip-archive",
          "partial": "Archive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#t:Archive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompression methods.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "CompressionMethod",
          "package": "zip-archive",
          "source": "src/Codec-Archive-Zip.html#CompressionMethod",
          "type": "data"
        },
        "index": {
          "description": "Compression methods",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "CompressionMethod",
          "package": "zip-archive",
          "partial": "Compression Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#t:CompressionMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of an archived file, including content and metadata.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "Entry",
          "package": "zip-archive",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "Representation of an archived file including content and metadata",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "Entry",
          "package": "zip-archive",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eaddFilesToArchive\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eextractFilesFromArchive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "ZipOption",
          "package": "zip-archive",
          "source": "src/Codec-Archive-Zip.html#ZipOption",
          "type": "data"
        },
        "index": {
          "description": "Options for addFilesToArchive and extractFilesFromArchive",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "ZipOption",
          "package": "zip-archive",
          "partial": "Zip Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#t:ZipOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Zip",
          "name": "Archive",
          "package": "zip-archive",
          "signature": "Archive",
          "source": "src/Codec-Archive-Zip.html#Archive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "Archive",
          "package": "zip-archive",
          "partial": "Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:Archive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Zip",
          "name": "Deflate",
          "package": "zip-archive",
          "signature": "Deflate",
          "source": "src/Codec-Archive-Zip.html#CompressionMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "Deflate",
          "package": "zip-archive",
          "partial": "Deflate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:Deflate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Zip",
          "name": "Entry",
          "package": "zip-archive",
          "signature": "Entry",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "Entry",
          "package": "zip-archive",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Zip",
          "name": "NoCompression",
          "package": "zip-archive",
          "signature": "NoCompression",
          "source": "src/Codec-Archive-Zip.html#CompressionMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "NoCompression",
          "package": "zip-archive",
          "partial": "No Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:NoCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory in which to extract\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "OptDestination",
          "package": "zip-archive",
          "signature": "OptDestination FilePath",
          "source": "src/Codec-Archive-Zip.html#ZipOption",
          "type": "function"
        },
        "index": {
          "description": "Directory in which to extract",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "OptDestination",
          "package": "zip-archive",
          "partial": "Opt Destination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:OptDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to place file when adding files and whether to append current path\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "OptLocation",
          "package": "zip-archive",
          "signature": "OptLocation FilePath Bool",
          "source": "src/Codec-Archive-Zip.html#ZipOption",
          "type": "function"
        },
        "index": {
          "description": "Where to place file when adding files and whether to append current path",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "OptLocation",
          "package": "zip-archive",
          "partial": "Opt Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:OptLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurse into directories when adding files\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "OptRecursive",
          "package": "zip-archive",
          "signature": "OptRecursive",
          "source": "src/Codec-Archive-Zip.html#ZipOption",
          "type": "function"
        },
        "index": {
          "description": "Recurse into directories when adding files",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "OptRecursive",
          "package": "zip-archive",
          "partial": "Opt Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:OptRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint information to stderr\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "OptVerbose",
          "package": "zip-archive",
          "signature": "OptVerbose",
          "source": "src/Codec-Archive-Zip.html#ZipOption",
          "type": "function"
        },
        "index": {
          "description": "Print information to stderr",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "OptVerbose",
          "package": "zip-archive",
          "partial": "Opt Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:OptVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an entry to a zip archive, or updates an existing entry.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "addEntryToArchive",
          "package": "zip-archive",
          "signature": "Entry -\u003e Archive -\u003e Archive",
          "source": "src/Codec-Archive-Zip.html#addEntryToArchive",
          "type": "function"
        },
        "index": {
          "description": "Adds an entry to zip archive or updates an existing entry",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "addEntryToArchive",
          "normalized": "Entry-\u003eArchive-\u003eArchive",
          "package": "zip-archive",
          "partial": "Entry To Archive",
          "signature": "Entry-\u003eArchive-\u003eArchive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:addEntryToArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the specified files to an \u003ccode\u003e\u003ca\u003eArchive\u003c/a\u003e\u003c/code\u003e.  If \u003ccode\u003e\u003ca\u003eOptRecursive\u003c/a\u003e\u003c/code\u003e is specified,\n recursively add files contained in directories.  If \u003ccode\u003e\u003ca\u003eOptVerbose\u003c/a\u003e\u003c/code\u003e is specified,\n print messages to stderr.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "addFilesToArchive",
          "package": "zip-archive",
          "signature": "[ZipOption] -\u003e Archive -\u003e [FilePath] -\u003e IO Archive",
          "source": "src/Codec-Archive-Zip.html#addFilesToArchive",
          "type": "function"
        },
        "index": {
          "description": "Add the specified files to an Archive If OptRecursive is specified recursively add files contained in directories If OptVerbose is specified print messages to stderr",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "addFilesToArchive",
          "normalized": "[ZipOption]-\u003eArchive-\u003e[FilePath]-\u003eIO Archive",
          "package": "zip-archive",
          "partial": "Files To Archive",
          "signature": "[ZipOption]-\u003eArchive-\u003e[FilePath]-\u003eIO Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:addFilesToArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes an entry from a zip archive.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "deleteEntryFromArchive",
          "package": "zip-archive",
          "signature": "FilePath -\u003e Archive -\u003e Archive",
          "source": "src/Codec-Archive-Zip.html#deleteEntryFromArchive",
          "type": "function"
        },
        "index": {
          "description": "Deletes an entry from zip archive",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "deleteEntryFromArchive",
          "normalized": "FilePath-\u003eArchive-\u003eArchive",
          "package": "zip-archive",
          "partial": "Entry From Archive",
          "signature": "FilePath-\u003eArchive-\u003eArchive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:deleteEntryFromArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCRC32 checksum\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eCRC32",
          "package": "zip-archive",
          "signature": "Word32",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "CRC32 checksum",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eCRC32",
          "package": "zip-archive",
          "partial": "CRC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eCRC32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed contents of file\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eCompressedData",
          "package": "zip-archive",
          "signature": "ByteString",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Compressed contents of file",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eCompressedData",
          "package": "zip-archive",
          "partial": "Compressed Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eCompressedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed size in bytes\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eCompressedSize",
          "package": "zip-archive",
          "signature": "Word32",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Compressed size in bytes",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eCompressedSize",
          "package": "zip-archive",
          "partial": "Compressed Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eCompressedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompression method\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eCompressionMethod",
          "package": "zip-archive",
          "signature": "CompressionMethod",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Compression method",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eCompressionMethod",
          "package": "zip-archive",
          "partial": "Compression Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eCompressionMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal file attributes (system-dependent)\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eExternalFileAttributes",
          "package": "zip-archive",
          "signature": "Word32",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "External file attributes system-dependent",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eExternalFileAttributes",
          "package": "zip-archive",
          "partial": "External File Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eExternalFileAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra field - unused by this library\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eExtraField",
          "package": "zip-archive",
          "signature": "ByteString",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Extra field unused by this library",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eExtraField",
          "package": "zip-archive",
          "partial": "Extra Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eExtraField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile comment - unused by this library\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eFileComment",
          "package": "zip-archive",
          "signature": "ByteString",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "File comment unused by this library",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eFileComment",
          "package": "zip-archive",
          "partial": "File Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eFileComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal file attributes - unused by this library\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eInternalFileAttributes",
          "package": "zip-archive",
          "signature": "Word16",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Internal file attributes unused by this library",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eInternalFileAttributes",
          "package": "zip-archive",
          "partial": "Internal File Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eInternalFileAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModification time (seconds since unix epoch)\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eLastModified",
          "package": "zip-archive",
          "signature": "Integer",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Modification time seconds since unix epoch",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eLastModified",
          "package": "zip-archive",
          "partial": "Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eLastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative path, using \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e as separator\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eRelativePath",
          "package": "zip-archive",
          "signature": "FilePath",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Relative path using as separator",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eRelativePath",
          "package": "zip-archive",
          "partial": "Relative Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eRelativePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncompressed size in bytes\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "eUncompressedSize",
          "package": "zip-archive",
          "signature": "Word32",
          "source": "src/Codec-Archive-Zip.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Uncompressed size in bytes",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "eUncompressedSize",
          "package": "zip-archive",
          "partial": "Uncompressed Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:eUncompressedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA zip archive with no contents.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "emptyArchive",
          "package": "zip-archive",
          "signature": "Archive",
          "source": "src/Codec-Archive-Zip.html#emptyArchive",
          "type": "function"
        },
        "index": {
          "description": "zip archive with no contents",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "emptyArchive",
          "package": "zip-archive",
          "partial": "Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:emptyArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all files from an \u003ccode\u003e\u003ca\u003eArchive\u003c/a\u003e\u003c/code\u003e, creating directories\n as needed.  If \u003ccode\u003e\u003ca\u003eOptVerbose\u003c/a\u003e\u003c/code\u003e is specified, print messages to stderr.\n Note that the last-modified time is set correctly only in POSIX,\n not in Windows.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "extractFilesFromArchive",
          "package": "zip-archive",
          "signature": "[ZipOption] -\u003e Archive -\u003e IO ()",
          "source": "src/Codec-Archive-Zip.html#extractFilesFromArchive",
          "type": "function"
        },
        "index": {
          "description": "Extract all files from an Archive creating directories as needed If OptVerbose is specified print messages to stderr Note that the last-modified time is set correctly only in POSIX not in Windows",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "extractFilesFromArchive",
          "normalized": "[ZipOption]-\u003eArchive-\u003eIO()",
          "package": "zip-archive",
          "partial": "Files From Archive",
          "signature": "[ZipOption]-\u003eArchive-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:extractFilesFromArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of files in a zip archive.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "filesInArchive",
          "package": "zip-archive",
          "signature": "Archive -\u003e [FilePath]",
          "source": "src/Codec-Archive-Zip.html#filesInArchive",
          "type": "function"
        },
        "index": {
          "description": "Returns list of files in zip archive",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "filesInArchive",
          "normalized": "Archive-\u003e[FilePath]",
          "package": "zip-archive",
          "partial": "In Archive",
          "signature": "Archive-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:filesInArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns Just the zip entry with the specified path, or Nothing.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "findEntryByPath",
          "package": "zip-archive",
          "signature": "FilePath -\u003e Archive -\u003e Maybe Entry",
          "source": "src/Codec-Archive-Zip.html#findEntryByPath",
          "type": "function"
        },
        "index": {
          "description": "Returns Just the zip entry with the specified path or Nothing",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "findEntryByPath",
          "normalized": "FilePath-\u003eArchive-\u003eMaybe Entry",
          "package": "zip-archive",
          "partial": "Entry By Path",
          "signature": "FilePath-\u003eArchive-\u003eMaybe Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:findEntryByPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites an \u003ccode\u003e\u003ca\u003eArchive\u003c/a\u003e\u003c/code\u003e structure to a raw zip archive (in a lazy bytestring).\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "fromArchive",
          "package": "zip-archive",
          "signature": "Archive -\u003e ByteString",
          "source": "src/Codec-Archive-Zip.html#fromArchive",
          "type": "function"
        },
        "index": {
          "description": "Writes an Archive structure to raw zip archive in lazy bytestring",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "fromArchive",
          "normalized": "Archive-\u003eByteString",
          "package": "zip-archive",
          "partial": "Archive",
          "signature": "Archive-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:fromArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns uncompressed contents of zip entry.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "fromEntry",
          "package": "zip-archive",
          "signature": "Entry -\u003e ByteString",
          "source": "src/Codec-Archive-Zip.html#fromEntry",
          "type": "function"
        },
        "index": {
          "description": "Returns uncompressed contents of zip entry",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "fromEntry",
          "normalized": "Entry-\u003eByteString",
          "package": "zip-archive",
          "partial": "Entry",
          "signature": "Entry-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:fromEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e from a file or directory.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "readEntry",
          "package": "zip-archive",
          "signature": "[ZipOption] -\u003e FilePath -\u003e IO Entry",
          "source": "src/Codec-Archive-Zip.html#readEntry",
          "type": "function"
        },
        "index": {
          "description": "Generates Entry from file or directory",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "readEntry",
          "normalized": "[ZipOption]-\u003eFilePath-\u003eIO Entry",
          "package": "zip-archive",
          "partial": "Entry",
          "signature": "[ZipOption]-\u003eFilePath-\u003eIO Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:readEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an \u003ccode\u003e\u003ca\u003eArchive\u003c/a\u003e\u003c/code\u003e structure from a raw zip archive (in a lazy bytestring).\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "toArchive",
          "package": "zip-archive",
          "signature": "ByteString -\u003e Archive",
          "source": "src/Codec-Archive-Zip.html#toArchive",
          "type": "function"
        },
        "index": {
          "description": "Reads an Archive structure from raw zip archive in lazy bytestring",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "toArchive",
          "normalized": "ByteString-\u003eArchive",
          "package": "zip-archive",
          "partial": "Archive",
          "signature": "ByteString-\u003eArchive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:toArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e with specified file path, modification time, and contents.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "toEntry",
          "package": "zip-archive",
          "signature": "FilePath-\u003e Integer-\u003e ByteString-\u003e Entry",
          "type": "function"
        },
        "index": {
          "description": "Create an Entry with specified file path modification time and contents",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "toEntry",
          "normalized": "FilePath-\u003eInteger-\u003eByteString-\u003eEntry",
          "package": "zip-archive",
          "partial": "Entry",
          "signature": "FilePath-\u003eInteger-\u003eByteString-\u003eEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:toEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites contents of an \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "writeEntry",
          "package": "zip-archive",
          "signature": "[ZipOption] -\u003e Entry -\u003e IO ()",
          "source": "src/Codec-Archive-Zip.html#writeEntry",
          "type": "function"
        },
        "index": {
          "description": "Writes contents of an Entry to file",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "writeEntry",
          "normalized": "[ZipOption]-\u003eEntry-\u003eIO()",
          "package": "zip-archive",
          "partial": "Entry",
          "signature": "[ZipOption]-\u003eEntry-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:writeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment for whole zip archive\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "zComment",
          "package": "zip-archive",
          "signature": "ByteString",
          "source": "src/Codec-Archive-Zip.html#Archive",
          "type": "function"
        },
        "index": {
          "description": "Comment for whole zip archive",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "zComment",
          "package": "zip-archive",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:zComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiles in zip archive\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "zEntries",
          "package": "zip-archive",
          "signature": "[Entry]",
          "source": "src/Codec-Archive-Zip.html#Archive",
          "type": "function"
        },
        "index": {
          "description": "Files in zip archive",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "zEntries",
          "normalized": "[Entry]",
          "package": "zip-archive",
          "partial": "Entries",
          "signature": "[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:zEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDigital signature\n\u003c/p\u003e",
          "module": "Codec.Archive.Zip",
          "name": "zSignature",
          "package": "zip-archive",
          "signature": "Maybe ByteString",
          "source": "src/Codec-Archive-Zip.html#Archive",
          "type": "function"
        },
        "index": {
          "description": "Digital signature",
          "hierarchy": "Codec Archive Zip",
          "module": "Codec.Archive.Zip",
          "name": "zSignature",
          "package": "zip-archive",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zip-archive/docs/Codec-Archive-Zip.html#v:zSignature"
      }
    }
  ]
]