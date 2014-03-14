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
        "word": "hit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Delta",
          "name": "Delta",
          "package": "hit",
          "source": "src/Data-Git-Delta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "Delta",
          "package": "hit",
          "partial": "Delta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea delta is a source size, a destination size and a list of delta cmd\n\u003c/p\u003e",
          "module": "Data.Git.Delta",
          "name": "Delta",
          "package": "hit",
          "source": "src/Data-Git-Delta.html#Delta",
          "type": "data"
        },
        "index": {
          "description": "delta is source size destination size and list of delta cmd",
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "Delta",
          "package": "hit",
          "partial": "Delta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#t:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epossible commands in a delta\n\u003c/p\u003e",
          "module": "Data.Git.Delta",
          "name": "DeltaCmd",
          "package": "hit",
          "source": "src/Data-Git-Delta.html#DeltaCmd",
          "type": "data"
        },
        "index": {
          "description": "possible commands in delta",
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "DeltaCmd",
          "package": "hit",
          "partial": "Delta Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#t:DeltaCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Delta",
          "name": "Delta",
          "package": "hit",
          "signature": "Delta Word64 Word64 [DeltaCmd]",
          "source": "src/Data-Git-Delta.html#Delta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "Delta",
          "normalized": "Delta Word Word[DeltaCmd]",
          "package": "hit",
          "partial": "Delta",
          "signature": "Delta Word Word[DeltaCmd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:Delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Delta",
          "name": "DeltaCopy",
          "package": "hit",
          "signature": "DeltaCopy ByteString",
          "source": "src/Data-Git-Delta.html#DeltaCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "DeltaCopy",
          "package": "hit",
          "partial": "Delta Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:DeltaCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Delta",
          "name": "DeltaSrc",
          "package": "hit",
          "signature": "DeltaSrc Word64 Word64",
          "source": "src/Data-Git-Delta.html#DeltaCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "DeltaSrc",
          "package": "hit",
          "partial": "Delta Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:DeltaSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a delta on a lazy bytestring, returning a new bytestring.\n\u003c/p\u003e",
          "module": "Data.Git.Delta",
          "name": "deltaApply",
          "package": "hit",
          "signature": "ByteString -\u003e Delta -\u003e ByteString",
          "source": "src/Data-Git-Delta.html#deltaApply",
          "type": "function"
        },
        "index": {
          "description": "apply delta on lazy bytestring returning new bytestring",
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "deltaApply",
          "normalized": "ByteString-\u003eDelta-\u003eByteString",
          "package": "hit",
          "partial": "Apply",
          "signature": "ByteString-\u003eDelta-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:deltaApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a delta.\n format is 2 variable sizes, followed by delta cmds. for each cmd:\n * if first byte MSB is set, we copy from source.\n * otherwise, we copy from delta.\n * extensions are not handled.\n\u003c/p\u003e",
          "module": "Data.Git.Delta",
          "name": "deltaParse",
          "package": "hit",
          "signature": "Parser ByteString Delta",
          "source": "src/Data-Git-Delta.html#deltaParse",
          "type": "function"
        },
        "index": {
          "description": "parse delta format is variable sizes followed by delta cmds for each cmd if first byte MSB is set we copy from source otherwise we copy from delta extensions are not handled",
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "deltaParse",
          "package": "hit",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:deltaParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread one delta from a lazy bytestring.\n\u003c/p\u003e",
          "module": "Data.Git.Delta",
          "name": "deltaRead",
          "package": "hit",
          "signature": "ByteString -\u003e Maybe Delta",
          "source": "src/Data-Git-Delta.html#deltaRead",
          "type": "function"
        },
        "index": {
          "description": "read one delta from lazy bytestring",
          "hierarchy": "Data Git Delta",
          "module": "Data.Git.Delta",
          "name": "deltaRead",
          "normalized": "ByteString-\u003eMaybe Delta",
          "package": "hit",
          "partial": "Read",
          "signature": "ByteString-\u003eMaybe Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:deltaRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic Git diff methods.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Git.Diff",
          "name": "Diff",
          "package": "hit",
          "source": "src/Data-Git-Diff.html",
          "type": "module"
        },
        "index": {
          "description": "Basic Git diff methods",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "Diff",
          "package": "hit",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresents a blob's content (i.e., the content of a file at a given\n reference).\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "BlobContent",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#BlobContent",
          "type": "data"
        },
        "index": {
          "description": "represents blob content i.e the content of file at given reference",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "BlobContent",
          "package": "hit",
          "partial": "Blob Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:BlobContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a blob description at a given state (revision)\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "BlobState",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#BlobState",
          "type": "data"
        },
        "index": {
          "description": "This is blob description at given state revision",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "BlobState",
          "package": "hit",
          "partial": "Blob State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:BlobState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a file state between two revisions\n A file (a blob) can be present in the first Tree's revision but not in the\n second one, then it has been deleted. If only in the second Tree's revision,\n then it has been created. If it is in the both, maybe it has been changed.\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "BlobStateDiff",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#BlobStateDiff",
          "type": "data"
        },
        "index": {
          "description": "Represents file state between two revisions file blob can be present in the first Tree revision but not in the second one then it has been deleted If only in the second Tree revision then it has been created If it is in the both maybe it has been changed",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "BlobStateDiff",
          "package": "hit",
          "partial": "Blob State Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:BlobStateDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "FilteredDiff",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#FilteredDiff",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "FilteredDiff",
          "package": "hit",
          "partial": "Filtered Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:FilteredDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a proposed diff records for a given file.\n It contains useful information:\n   * the filename (with its path in the root project)\n   * a file diff (with the Data.Algorythm.Patience method)\n   * the file's mode (i.e. the file priviledge)\n   * the file's ref\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "HitDiff",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#HitDiff",
          "type": "data"
        },
        "index": {
          "description": "This is proposed diff records for given file It contains useful information the filename with its path in the root project file diff with the Data.Algorythm.Patience method the file mode i.e the file priviledge the file ref",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "HitDiff",
          "package": "hit",
          "partial": "Hit Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:HitDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "HitFileContent",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "HitFileContent",
          "package": "hit",
          "partial": "Hit File Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:HitFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "HitFileMode",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#HitFileMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "HitFileMode",
          "package": "hit",
          "partial": "Hit File Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:HitFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "HitFileRef",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#HitFileRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "HitFileRef",
          "package": "hit",
          "partial": "Hit File Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:HitFileRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "TextLine",
          "package": "hit",
          "source": "src/Data-Git-Diff.html#TextLine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "TextLine",
          "package": "hit",
          "partial": "Text Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:TextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary content\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "BinaryContent",
          "package": "hit",
          "signature": "BinaryContent ByteString",
          "source": "src/Data-Git-Diff.html#BlobContent",
          "type": "function"
        },
        "index": {
          "description": "Binary content",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "BinaryContent",
          "package": "hit",
          "partial": "Binary Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:BinaryContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "BlobState",
          "package": "hit",
          "signature": "BlobState",
          "source": "src/Data-Git-Diff.html#BlobState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "BlobState",
          "package": "hit",
          "partial": "Blob State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:BlobState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText file's lines\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "FileContent",
          "package": "hit",
          "signature": "FileContent [ByteString]",
          "source": "src/Data-Git-Diff.html#BlobContent",
          "type": "function"
        },
        "index": {
          "description": "Text file lines",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "FileContent",
          "normalized": "FileContent[ByteString]",
          "package": "hit",
          "partial": "File Content",
          "signature": "FileContent[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:FileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "HitDiff",
          "package": "hit",
          "signature": "HitDiff",
          "source": "src/Data-Git-Diff.html#HitDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "HitDiff",
          "package": "hit",
          "partial": "Hit Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "ModifiedBinaryFile",
          "package": "hit",
          "signature": "ModifiedBinaryFile",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "ModifiedBinaryFile",
          "package": "hit",
          "partial": "Modified Binary File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:ModifiedBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "ModifiedFile",
          "package": "hit",
          "signature": "ModifiedFile [FilteredDiff]",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "ModifiedFile",
          "normalized": "ModifiedFile[FilteredDiff]",
          "package": "hit",
          "partial": "Modified File",
          "signature": "ModifiedFile[FilteredDiff]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:ModifiedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "ModifiedMode",
          "package": "hit",
          "signature": "ModifiedMode ModePerm ModePerm",
          "source": "src/Data-Git-Diff.html#HitFileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "ModifiedMode",
          "package": "hit",
          "partial": "Modified Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:ModifiedMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "ModifiedRef",
          "package": "hit",
          "signature": "ModifiedRef Ref Ref",
          "source": "src/Data-Git-Diff.html#HitFileRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "ModifiedRef",
          "package": "hit",
          "partial": "Modified Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:ModifiedRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "NewBinaryFile",
          "package": "hit",
          "signature": "NewBinaryFile",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "NewBinaryFile",
          "package": "hit",
          "partial": "New Binary File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:NewBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "NewMode",
          "package": "hit",
          "signature": "NewMode ModePerm",
          "source": "src/Data-Git-Diff.html#HitFileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "NewMode",
          "package": "hit",
          "partial": "New Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:NewMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "NewRef",
          "package": "hit",
          "signature": "NewRef Ref",
          "source": "src/Data-Git-Diff.html#HitFileRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "NewRef",
          "package": "hit",
          "partial": "New Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:NewRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "NewTextFile",
          "package": "hit",
          "signature": "NewTextFile [TextLine]",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "NewTextFile",
          "normalized": "NewTextFile[TextLine]",
          "package": "hit",
          "partial": "New Text File",
          "signature": "NewTextFile[TextLine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:NewTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "NormalLine",
          "package": "hit",
          "signature": "NormalLine (Item TextLine)",
          "source": "src/Data-Git-Diff.html#FilteredDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "NormalLine",
          "package": "hit",
          "partial": "Normal Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:NormalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OldAndNew",
          "package": "hit",
          "signature": "OldAndNew BlobState BlobState",
          "source": "src/Data-Git-Diff.html#BlobStateDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OldAndNew",
          "package": "hit",
          "partial": "Old And New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OldAndNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OldBinaryFile",
          "package": "hit",
          "signature": "OldBinaryFile",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OldBinaryFile",
          "package": "hit",
          "partial": "Old Binary File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OldBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OldMode",
          "package": "hit",
          "signature": "OldMode ModePerm",
          "source": "src/Data-Git-Diff.html#HitFileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OldMode",
          "package": "hit",
          "partial": "Old Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OldMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OldRef",
          "package": "hit",
          "signature": "OldRef Ref",
          "source": "src/Data-Git-Diff.html#HitFileRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OldRef",
          "package": "hit",
          "partial": "Old Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OldRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OldTextFile",
          "package": "hit",
          "signature": "OldTextFile [TextLine]",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OldTextFile",
          "normalized": "OldTextFile[TextLine]",
          "package": "hit",
          "partial": "Old Text File",
          "signature": "OldTextFile[TextLine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OldTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OnlyNew",
          "package": "hit",
          "signature": "OnlyNew BlobState",
          "source": "src/Data-Git-Diff.html#BlobStateDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OnlyNew",
          "package": "hit",
          "partial": "Only New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OnlyNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "OnlyOld",
          "package": "hit",
          "signature": "OnlyOld BlobState",
          "source": "src/Data-Git-Diff.html#BlobStateDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "OnlyOld",
          "package": "hit",
          "partial": "Only Old",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OnlyOld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "Separator",
          "package": "hit",
          "signature": "Separator",
          "source": "src/Data-Git-Diff.html#FilteredDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "Separator",
          "package": "hit",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:Separator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "TextLine",
          "package": "hit",
          "signature": "TextLine",
          "source": "src/Data-Git-Diff.html#TextLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "TextLine",
          "package": "hit",
          "partial": "Text Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:TextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "UnModifiedFile",
          "package": "hit",
          "signature": "UnModifiedFile",
          "source": "src/Data-Git-Diff.html#HitFileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "UnModifiedFile",
          "package": "hit",
          "partial": "Un Modified File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:UnModifiedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "UnModifiedMode",
          "package": "hit",
          "signature": "UnModifiedMode ModePerm",
          "source": "src/Data-Git-Diff.html#HitFileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "UnModifiedMode",
          "package": "hit",
          "partial": "Un Modified Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:UnModifiedMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "UnModifiedRef",
          "package": "hit",
          "signature": "UnModifiedRef Ref",
          "source": "src/Data-Git-Diff.html#HitFileRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "UnModifiedRef",
          "package": "hit",
          "partial": "Un Modified Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:UnModifiedRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "bsContent",
          "package": "hit",
          "signature": "BlobContent",
          "source": "src/Data-Git-Diff.html#BlobState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "bsContent",
          "package": "hit",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "bsFilename",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Diff.html#BlobState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "bsFilename",
          "package": "hit",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "bsMode",
          "package": "hit",
          "signature": "ModePerm",
          "source": "src/Data-Git-Diff.html#BlobState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "bsMode",
          "package": "hit",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "bsRef",
          "package": "hit",
          "signature": "Ref",
          "source": "src/Data-Git-Diff.html#BlobState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "bsRef",
          "package": "hit",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default diff helper. It is an example about how you can write your own\n diff helper or you can use it if you want to get all of differences.\n\u003c/p\u003e",
          "module": "Data.Git.Diff",
          "name": "defaultDiff",
          "package": "hit",
          "signature": "Int-\u003e BlobStateDiff-\u003e [HitDiff]-\u003e [HitDiff]",
          "type": "function"
        },
        "index": {
          "description": "default diff helper It is an example about how you can write your own diff helper or you can use it if you want to get all of differences",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "defaultDiff",
          "normalized": "Int-\u003eBlobStateDiff-\u003e[HitDiff]-\u003e[HitDiff]",
          "package": "hit",
          "partial": "Diff",
          "signature": "Int-\u003eBlobStateDiff-\u003e[HitDiff]-\u003e[HitDiff]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:defaultDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default Diff getter which returns all diff information (Mode, Content\n and Binary) with a context of 5 lines.\n\u003c/p\u003e\u003cpre\u003e getDiff = getDiffWith (defaultDiff 5) []\n\u003c/pre\u003e",
          "module": "Data.Git.Diff",
          "name": "getDiff",
          "package": "hit",
          "signature": "Ref -\u003e Ref -\u003e Git -\u003e IO [HitDiff]",
          "source": "src/Data-Git-Diff.html#getDiff",
          "type": "function"
        },
        "index": {
          "description": "default Diff getter which returns all diff information Mode Content and Binary with context of lines getDiff getDiffWith defaultDiff",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "getDiff",
          "normalized": "Ref-\u003eRef-\u003eGit-\u003eIO[HitDiff]",
          "package": "hit",
          "partial": "Diff",
          "signature": "Ref-\u003eRef-\u003eGit-\u003eIO[HitDiff]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:getDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a diff list between two revisions with a given diff helper.\n\u003c/p\u003e\u003cp\u003eUseful to extract any kind of information from two different revisions.\n For example you can get the number of deleted files:\n\u003c/p\u003e\u003cpre\u003e getdiffwith f 0 head^ head git\n     where f (OnlyOld _) acc = acc+1\n           f _           acc = acc\n\u003c/pre\u003e\u003cp\u003eOr save the list of new files:\n\u003c/p\u003e\u003cpre\u003e getdiffwith f [] head^ head git\n     where f (OnlyNew bs) acc = (bsFilename bs):acc\n           f _            acc = acc\n\u003c/pre\u003e",
          "module": "Data.Git.Diff",
          "name": "getDiffWith",
          "package": "hit",
          "signature": "(BlobStateDiff -\u003e a -\u003e a)-\u003e a-\u003e Ref-\u003e Ref-\u003e Git-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "generate diff list between two revisions with given diff helper Useful to extract any kind of information from two different revisions For example you can get the number of deleted files getdiffwith head head git where OnlyOld acc acc acc acc Or save the list of new files getdiffwith head head git where OnlyNew bs acc bsFilename bs acc acc acc",
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "getDiffWith",
          "normalized": "(BlobStateDiff-\u003ea-\u003ea)-\u003ea-\u003eRef-\u003eRef-\u003eGit-\u003eIO a",
          "package": "hit",
          "partial": "Diff With",
          "signature": "(BlobStateDiff-\u003ea-\u003ea)-\u003ea-\u003eRef-\u003eRef-\u003eGit-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:getDiffWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "hFileContent",
          "package": "hit",
          "signature": "HitFileContent",
          "source": "src/Data-Git-Diff.html#HitDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "hFileContent",
          "package": "hit",
          "partial": "File Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:hFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "hFileMode",
          "package": "hit",
          "signature": "HitFileMode",
          "source": "src/Data-Git-Diff.html#HitDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "hFileMode",
          "package": "hit",
          "partial": "File Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:hFileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "hFileName",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Diff.html#HitDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "hFileName",
          "package": "hit",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:hFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "hFileRef",
          "package": "hit",
          "signature": "HitFileRef",
          "source": "src/Data-Git-Diff.html#HitDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "hFileRef",
          "package": "hit",
          "partial": "File Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:hFileRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "lineContent",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Diff.html#TextLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "lineContent",
          "package": "hit",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:lineContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Diff",
          "name": "lineNumber",
          "package": "hit",
          "signature": "Integer",
          "source": "src/Data-Git-Diff.html#TextLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Diff",
          "module": "Data.Git.Diff",
          "name": "lineNumber",
          "package": "hit",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:lineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManipulation of named references\n * reading packed-refs file\n * reading single heads\u003cem\u003etags\u003c/em\u003eremote file\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Git.Named",
          "name": "Named",
          "package": "hit",
          "source": "src/Data-Git-Named.html",
          "type": "module"
        },
        "index": {
          "description": "Manipulation of named references reading packed-refs file reading single heads tags remote file",
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "Named",
          "package": "hit",
          "partial": "Named",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtent of a ref file.\n\u003c/p\u003e",
          "module": "Data.Git.Named",
          "name": "RefContentTy",
          "package": "hit",
          "source": "src/Data-Git-Named.html#RefContentTy",
          "type": "data"
        },
        "index": {
          "description": "content of ref file",
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefContentTy",
          "package": "hit",
          "partial": "Ref Content Ty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#t:RefContentTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefName",
          "package": "hit",
          "source": "src/Data-Git-Named.html#RefName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefName",
          "package": "hit",
          "partial": "Ref Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#t:RefName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a named specifier.\n\u003c/p\u003e",
          "module": "Data.Git.Named",
          "name": "RefSpecTy",
          "package": "hit",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "data"
        },
        "index": {
          "description": "Represent named specifier",
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefSpecTy",
          "package": "hit",
          "partial": "Ref Spec Ty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#t:RefSpecTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefBranch",
          "package": "hit",
          "signature": "RefBranch RefName",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefBranch",
          "package": "hit",
          "partial": "Ref Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefContentUnknown",
          "package": "hit",
          "signature": "RefContentUnknown ByteString",
          "source": "src/Data-Git-Named.html#RefContentTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefContentUnknown",
          "package": "hit",
          "partial": "Ref Content Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefContentUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefDirect",
          "package": "hit",
          "signature": "RefDirect Ref",
          "source": "src/Data-Git-Named.html#RefContentTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefDirect",
          "package": "hit",
          "partial": "Ref Direct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefDirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefFetchHead",
          "package": "hit",
          "signature": "RefFetchHead",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefFetchHead",
          "package": "hit",
          "partial": "Ref Fetch Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefFetchHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefHead",
          "package": "hit",
          "signature": "RefHead",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefHead",
          "package": "hit",
          "partial": "Ref Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefLink",
          "package": "hit",
          "signature": "RefLink RefSpecTy",
          "source": "src/Data-Git-Named.html#RefContentTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefLink",
          "package": "hit",
          "partial": "Ref Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefName",
          "package": "hit",
          "signature": "RefName",
          "source": "src/Data-Git-Named.html#RefName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefName",
          "package": "hit",
          "partial": "Ref Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefOrigHead",
          "package": "hit",
          "signature": "RefOrigHead",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefOrigHead",
          "package": "hit",
          "partial": "Ref Orig Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefOrigHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefOther",
          "package": "hit",
          "signature": "RefOther String",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefOther",
          "package": "hit",
          "partial": "Ref Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefPatches",
          "package": "hit",
          "signature": "RefPatches String",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefPatches",
          "package": "hit",
          "partial": "Ref Patches",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefPatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefRemote",
          "package": "hit",
          "signature": "RefRemote RefName",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefRemote",
          "package": "hit",
          "partial": "Ref Remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefRemote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefStash",
          "package": "hit",
          "signature": "RefStash",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefStash",
          "package": "hit",
          "partial": "Ref Stash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefStash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "RefTag",
          "package": "hit",
          "signature": "RefTag RefName",
          "source": "src/Data-Git-Named.html#RefSpecTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "RefTag",
          "package": "hit",
          "partial": "Ref Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "existsRefFile",
          "package": "hit",
          "signature": "FilePath -\u003e RefSpecTy -\u003e IO Bool",
          "source": "src/Data-Git-Named.html#existsRefFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "existsRefFile",
          "normalized": "FilePath-\u003eRefSpecTy-\u003eIO Bool",
          "package": "hit",
          "partial": "Ref File",
          "signature": "FilePath-\u003eRefSpecTy-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:existsRefFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "headsList",
          "package": "hit",
          "signature": "FilePath -\u003e IO [RefName]",
          "source": "src/Data-Git-Named.html#headsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "headsList",
          "normalized": "FilePath-\u003eIO[RefName]",
          "package": "hit",
          "partial": "List",
          "signature": "FilePath-\u003eIO[RefName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:headsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "readPackedRefs",
          "package": "hit",
          "signature": "FilePath -\u003e IO [(RefSpecTy, Ref)]",
          "source": "src/Data-Git-Named.html#readPackedRefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "readPackedRefs",
          "normalized": "FilePath-\u003eIO[(RefSpecTy,Ref)]",
          "package": "hit",
          "partial": "Packed Refs",
          "signature": "FilePath-\u003eIO[(RefSpecTy,Ref)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:readPackedRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "readRefFile",
          "package": "hit",
          "signature": "FilePath -\u003e RefSpecTy -\u003e IO RefContentTy",
          "source": "src/Data-Git-Named.html#readRefFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "readRefFile",
          "normalized": "FilePath-\u003eRefSpecTy-\u003eIO RefContentTy",
          "package": "hit",
          "partial": "Ref File",
          "signature": "FilePath-\u003eRefSpecTy-\u003eIO RefContentTy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:readRefFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "refNameRaw",
          "package": "hit",
          "signature": "String",
          "source": "src/Data-Git-Named.html#RefName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "refNameRaw",
          "package": "hit",
          "partial": "Name Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:refNameRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "remotesList",
          "package": "hit",
          "signature": "FilePath -\u003e IO [RefName]",
          "source": "src/Data-Git-Named.html#remotesList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "remotesList",
          "normalized": "FilePath-\u003eIO[RefName]",
          "package": "hit",
          "partial": "List",
          "signature": "FilePath-\u003eIO[RefName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:remotesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "tagsList",
          "package": "hit",
          "signature": "FilePath -\u003e IO [RefName]",
          "source": "src/Data-Git-Named.html#tagsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "tagsList",
          "normalized": "FilePath-\u003eIO[RefName]",
          "package": "hit",
          "partial": "List",
          "signature": "FilePath-\u003eIO[RefName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:tagsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Named",
          "name": "writeRefFile",
          "package": "hit",
          "signature": "FilePath -\u003e RefSpecTy -\u003e RefContentTy -\u003e IO ()",
          "source": "src/Data-Git-Named.html#writeRefFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Named",
          "module": "Data.Git.Named",
          "name": "writeRefFile",
          "normalized": "FilePath-\u003eRefSpecTy-\u003eRefContentTy-\u003eIO()",
          "package": "hit",
          "partial": "Ref File",
          "signature": "FilePath-\u003eRefSpecTy-\u003eRefContentTy-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:writeRefFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Ref",
          "name": "Ref",
          "package": "hit",
          "source": "src/Data-Git-Ref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "Ref",
          "package": "hit",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a git reference (SHA1)\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "Ref",
          "package": "hit",
          "source": "src/Data-Git-Ref.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "represent git reference SHA1",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "Ref",
          "package": "hit",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid Reference exception raised when\n using something that is not a ref as a ref.\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "RefInvalid",
          "package": "hit",
          "source": "src/Data-Git-Ref.html#RefInvalid",
          "type": "data"
        },
        "index": {
          "description": "Invalid Reference exception raised when using something that is not ref as ref",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "RefInvalid",
          "package": "hit",
          "partial": "Ref Invalid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#t:RefInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference wasn't found\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "RefNotFound",
          "package": "hit",
          "source": "src/Data-Git-Ref.html#RefNotFound",
          "type": "data"
        },
        "index": {
          "description": "Reference wasn found",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "RefNotFound",
          "package": "hit",
          "partial": "Ref Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#t:RefNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Ref",
          "name": "RefInvalid",
          "package": "hit",
          "signature": "RefInvalid ByteString",
          "source": "src/Data-Git-Ref.html#RefInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "RefInvalid",
          "package": "hit",
          "partial": "Ref Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:RefInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Ref",
          "name": "RefNotFound",
          "package": "hit",
          "signature": "RefNotFound Ref",
          "source": "src/Data-Git-Ref.html#RefNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "RefNotFound",
          "package": "hit",
          "partial": "Ref Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:RefNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompare prefix\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "cmpPrefix",
          "package": "hit",
          "signature": "String -\u003e Ref -\u003e Ordering",
          "source": "src/Data-Git-Ref.html#cmpPrefix",
          "type": "function"
        },
        "index": {
          "description": "compare prefix",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "cmpPrefix",
          "normalized": "String-\u003eRef-\u003eOrdering",
          "package": "hit",
          "partial": "Prefix",
          "signature": "String-\u003eRef-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:cmpPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a bytestring that represent a binary bytestring\n and returns a ref.\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "fromBinary",
          "package": "hit",
          "signature": "ByteString -\u003e Ref",
          "source": "src/Data-Git-Ref.html#fromBinary",
          "type": "function"
        },
        "index": {
          "description": "transform bytestring that represent binary bytestring and returns ref",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "fromBinary",
          "normalized": "ByteString-\u003eRef",
          "package": "hit",
          "partial": "Binary",
          "signature": "ByteString-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:fromBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etake a hexadecimal bytestring that represent a reference\n and turn into a ref\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "fromHex",
          "package": "hit",
          "signature": "ByteString -\u003e Ref",
          "source": "src/Data-Git-Ref.html#fromHex",
          "type": "function"
        },
        "index": {
          "description": "take hexadecimal bytestring that represent reference and turn into ref",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "fromHex",
          "normalized": "ByteString-\u003eRef",
          "package": "hit",
          "partial": "Hex",
          "signature": "ByteString-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:fromHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etake a hexadecimal string that represent a reference\n and turn into a ref\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "fromHexString",
          "package": "hit",
          "signature": "String -\u003e Ref",
          "source": "src/Data-Git-Ref.html#fromHexString",
          "type": "function"
        },
        "index": {
          "description": "take hexadecimal string that represent reference and turn into ref",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "fromHexString",
          "normalized": "String-\u003eRef",
          "package": "hit",
          "partial": "Hex String",
          "signature": "String-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:fromHexString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a bytestring into a reference\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "hash",
          "package": "hit",
          "signature": "ByteString -\u003e Ref",
          "source": "src/Data-Git-Ref.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash bytestring into reference",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "hash",
          "normalized": "ByteString-\u003eRef",
          "package": "hit",
          "signature": "ByteString-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a reference\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "hashLBS",
          "package": "hit",
          "signature": "ByteString -\u003e Ref",
          "source": "src/Data-Git-Ref.html#hashLBS",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into reference",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "hashLBS",
          "normalized": "ByteString-\u003eRef",
          "package": "hit",
          "partial": "LBS",
          "signature": "ByteString-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:hashLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Ref",
          "name": "isHex",
          "package": "hit",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Data-Git-Ref.html#isHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "isHex",
          "normalized": "ByteString-\u003eBool",
          "package": "hit",
          "partial": "Hex",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:isHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Ref",
          "name": "isHexString",
          "package": "hit",
          "signature": "[Char] -\u003e Bool",
          "source": "src/Data-Git-Ref.html#isHexString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "isHexString",
          "normalized": "[Char]-\u003eBool",
          "package": "hit",
          "partial": "Hex String",
          "signature": "[Char]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:isHexString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the prefix (leading byte) of this reference\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "refPrefix",
          "package": "hit",
          "signature": "Ref -\u003e Int",
          "source": "src/Data-Git-Ref.html#refPrefix",
          "type": "function"
        },
        "index": {
          "description": "returns the prefix leading byte of this reference",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "refPrefix",
          "normalized": "Ref-\u003eInt",
          "package": "hit",
          "partial": "Prefix",
          "signature": "Ref-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:refPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn a reference into a binary bytestring\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "toBinary",
          "package": "hit",
          "signature": "Ref -\u003e ByteString",
          "source": "src/Data-Git-Ref.html#toBinary",
          "type": "function"
        },
        "index": {
          "description": "turn reference into binary bytestring",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "toBinary",
          "normalized": "Ref-\u003eByteString",
          "package": "hit",
          "partial": "Binary",
          "signature": "Ref-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the splitted format \u003ca\u003eprefix/suffix\u003c/a\u003e for addressing the loose object database\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "toFilePathParts",
          "package": "hit",
          "signature": "Ref -\u003e (String, String)",
          "source": "src/Data-Git-Ref.html#toFilePathParts",
          "type": "function"
        },
        "index": {
          "description": "returns the splitted format prefix suffix for addressing the loose object database",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "toFilePathParts",
          "normalized": "Ref-\u003e(String,String)",
          "package": "hit",
          "partial": "File Path Parts",
          "signature": "Ref-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toFilePathParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a ref into an hexadecimal bytestring\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "toHex",
          "package": "hit",
          "signature": "Ref -\u003e ByteString",
          "source": "src/Data-Git-Ref.html#toHex",
          "type": "function"
        },
        "index": {
          "description": "transform ref into an hexadecimal bytestring",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "toHex",
          "normalized": "Ref-\u003eByteString",
          "package": "hit",
          "partial": "Hex",
          "signature": "Ref-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a ref into an hexadecimal string\n\u003c/p\u003e",
          "module": "Data.Git.Ref",
          "name": "toHexString",
          "package": "hit",
          "signature": "Ref -\u003e String",
          "source": "src/Data-Git-Ref.html#toHexString",
          "type": "function"
        },
        "index": {
          "description": "transform ref into an hexadecimal string",
          "hierarchy": "Data Git Ref",
          "module": "Data.Git.Ref",
          "name": "toHexString",
          "normalized": "Ref-\u003eString",
          "package": "hit",
          "partial": "Hex String",
          "signature": "Ref-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toHexString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Repository",
          "name": "Repository",
          "package": "hit",
          "source": "src/Data-Git-Repository.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "Repository",
          "package": "hit",
          "partial": "Repository",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a git repo, with possibly already opened filereaders\n for indexes and packs\n\u003c/p\u003e",
          "module": "Data.Git.Repository",
          "name": "Git",
          "package": "hit",
          "source": "src/Data-Git-Storage.html#Git",
          "type": "data"
        },
        "index": {
          "description": "represent git repo with possibly already opened filereaders for indexes and packs",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "Git",
          "package": "hit",
          "partial": "Git",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#t:Git"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Repository",
          "name": "HTree",
          "package": "hit",
          "source": "src/Data-Git-Repository.html#HTree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "HTree",
          "package": "hit",
          "partial": "HTree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#t:HTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehierarchy tree, either a reference to a blob (file) or a tree (directory).\n\u003c/p\u003e",
          "module": "Data.Git.Repository",
          "name": "HTreeEnt",
          "package": "hit",
          "source": "src/Data-Git-Repository.html#HTreeEnt",
          "type": "data"
        },
        "index": {
          "description": "hierarchy tree either reference to blob file or tree directory",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "HTreeEnt",
          "package": "hit",
          "partial": "HTree Ent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#t:HTreeEnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Repository",
          "name": "TreeDir",
          "package": "hit",
          "signature": "TreeDir Ref HTree",
          "source": "src/Data-Git-Repository.html#HTreeEnt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "TreeDir",
          "package": "hit",
          "partial": "Tree Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:TreeDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Repository",
          "name": "TreeFile",
          "package": "hit",
          "signature": "TreeFile Ref",
          "source": "src/Data-Git-Repository.html#HTreeEnt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "TreeFile",
          "package": "hit",
          "partial": "Tree File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:TreeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild a hierarchy tree from a tree object\n\u003c/p\u003e",
          "module": "Data.Git.Repository",
          "name": "buildHTree",
          "package": "hit",
          "signature": "Git -\u003e Tree -\u003e IO HTree",
          "source": "src/Data-Git-Repository.html#buildHTree",
          "type": "function"
        },
        "index": {
          "description": "build hierarchy tree from tree object",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "buildHTree",
          "normalized": "Git-\u003eTree-\u003eIO HTree",
          "package": "hit",
          "partial": "HTree",
          "signature": "Git-\u003eTree-\u003eIO HTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:buildHTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a specified commit but raises an exception if doesn't exists or type is not appropriate\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git\"]",
          "name": "getCommit",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO Commit",
          "source": "src/Data-Git-Repository.html#getCommit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getCommit\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getCommit\"]"
        },
        "index": {
          "description": "get specified commit but raises an exception if doesn exists or type is not appropriate",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "getCommit",
          "normalized": "Git-\u003eRef-\u003eIO Commit",
          "package": "hit",
          "partial": "Commit",
          "signature": "Git-\u003eRef-\u003eIO Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a specified commit\n\u003c/p\u003e",
          "module": "Data.Git.Repository",
          "name": "getCommitMaybe",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO (Maybe Commit)",
          "source": "src/Data-Git-Repository.html#getCommitMaybe",
          "type": "function"
        },
        "index": {
          "description": "get specified commit",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "getCommitMaybe",
          "normalized": "Git-\u003eRef-\u003eIO(Maybe Commit)",
          "package": "hit",
          "partial": "Commit Maybe",
          "signature": "Git-\u003eRef-\u003eIO(Maybe Commit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getCommitMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a specified tree but raise\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git\"]",
          "name": "getTree",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO Tree",
          "source": "src/Data-Git-Repository.html#getTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getTree\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getTree\"]"
        },
        "index": {
          "description": "get specified tree but raise",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "getTree",
          "normalized": "Git-\u003eRef-\u003eIO Tree",
          "package": "hit",
          "partial": "Tree",
          "signature": "Git-\u003eRef-\u003eIO Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a specified tree\n\u003c/p\u003e",
          "module": "Data.Git.Repository",
          "name": "getTreeMaybe",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO (Maybe Tree)",
          "source": "src/Data-Git-Repository.html#getTreeMaybe",
          "type": "function"
        },
        "index": {
          "description": "get specified tree",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "getTreeMaybe",
          "normalized": "Git-\u003eRef-\u003eIO(Maybe Tree)",
          "package": "hit",
          "partial": "Tree Maybe",
          "signature": "Git-\u003eRef-\u003eIO(Maybe Tree)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getTreeMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitialize a new repository at a specific location.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "initRepo",
          "package": "hit",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Data-Git-Storage.html#initRepo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:initRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:initRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:initRepo\"]"
        },
        "index": {
          "description": "initialize new repository at specific location",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "initRepo",
          "normalized": "FilePath-\u003eIO()",
          "package": "hit",
          "partial": "Repo",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:initRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebasic checks to see if a specific path looks like a git repo.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "isRepo",
          "package": "hit",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/Data-Git-Storage.html#isRepo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:isRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:isRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:isRepo\"]"
        },
        "index": {
          "description": "basic checks to see if specific path looks like git repo",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "isRepo",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "hit",
          "partial": "Repo",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:isRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresolve the ref (tree or blob) related to a path at a specific commit ref\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git\"]",
          "name": "resolvePath",
          "package": "hit",
          "signature": "Git-\u003e Ref-\u003e [ByteString]-\u003e IO (Maybe Ref)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolvePath\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:resolvePath\"]"
        },
        "index": {
          "description": "resolve the ref tree or blob related to path at specific commit ref",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "resolvePath",
          "normalized": "Git-\u003eRef-\u003e[ByteString]-\u003eIO(Maybe Ref)",
          "package": "hit",
          "partial": "Path",
          "signature": "Git-\u003eRef-\u003e[ByteString]-\u003eIO(Maybe Ref)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolvePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to resolve a string to a specific commit ref\n for example: HEAD, HEAD^, master~3, shortRef\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git\"]",
          "name": "resolveRevision",
          "package": "hit",
          "signature": "Git -\u003e Revision -\u003e IO (Maybe Ref)",
          "source": "src/Data-Git-Repository.html#resolveRevision",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolveRevision\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:resolveRevision\"]"
        },
        "index": {
          "description": "try to resolve string to specific commit ref for example HEAD HEAD master shortRef",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "resolveRevision",
          "normalized": "Git-\u003eRevision-\u003eIO(Maybe Ref)",
          "package": "hit",
          "partial": "Revision",
          "signature": "Git-\u003eRevision-\u003eIO(Maybe Ref)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolveRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a tree from a ref that might be either a commit, a tree or a tag.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git\"]",
          "name": "resolveTreeish",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO (Maybe Tree)",
          "source": "src/Data-Git-Repository.html#resolveTreeish",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolveTreeish\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:resolveTreeish\"]"
        },
        "index": {
          "description": "returns tree from ref that might be either commit tree or tag",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "resolveTreeish",
          "normalized": "Git-\u003eRef-\u003eIO(Maybe Tree)",
          "package": "hit",
          "partial": "Treeish",
          "signature": "Git-\u003eRef-\u003eIO(Maybe Tree)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolveTreeish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite a set of commits from a revision and returns the new ref.\n\u003c/p\u003e\u003cp\u003eIf during revision traversal (diving) there's a commit with zero or multiple\n parents then the traversal will stop regardless of the amount of parent requested.\n\u003c/p\u003e\u003cp\u003ecalling \u003ca\u003erewrite f 2 (revisionOf d)\u003c/a\u003e on the following tree:\n\u003c/p\u003e\u003cp\u003ea \u003c-- b \u003c-- c \u003c-- d\n\u003c/p\u003e\u003cp\u003eresult in the following tree after mapping with f:\n\u003c/p\u003e\u003cp\u003ea \u003c-- f(b) \u003c-- f(c) \u003c-- f(d)\n\u003c/p\u003e",
          "module": "[\"Data.Git.Repository\",\"Data.Git\"]",
          "name": "rewrite",
          "package": "hit",
          "signature": "Git-\u003e (Commit -\u003e IO Commit)-\u003e Revision-\u003e Int-\u003e IO Ref",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:rewrite\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:rewrite\"]"
        },
        "index": {
          "description": "Rewrite set of commits from revision and returns the new ref If during revision traversal diving there commit with zero or multiple parents then the traversal will stop regardless of the amount of parent requested calling rewrite revisionOf on the following tree result in the following tree after mapping with",
          "hierarchy": "Data Git Repository",
          "module": "Data.Git.Repository",
          "name": "rewrite",
          "normalized": "Git-\u003e(Commit-\u003eIO Commit)-\u003eRevision-\u003eInt-\u003eIO Ref",
          "package": "hit",
          "signature": "Git-\u003e(Commit-\u003eIO Commit)-\u003eRevision-\u003eInt-\u003eIO Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "Revision",
          "package": "hit",
          "source": "src/Data-Git-Revision.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "Revision",
          "package": "hit",
          "partial": "Revision",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA modifier to a revision, which is\n a function apply of a revision\n\u003c/p\u003e",
          "module": "Data.Git.Revision",
          "name": "RevModifier",
          "package": "hit",
          "source": "src/Data-Git-Revision.html#RevModifier",
          "type": "data"
        },
        "index": {
          "description": "modifier to revision which is function apply of revision",
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevModifier",
          "package": "hit",
          "partial": "Rev Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#t:RevModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA git revision. this can be many things:\n    * a shorten ref\n    * a ref\n    * a named branch or tag\n  followed by optional modifiers \u003ccode\u003e\u003ca\u003eRevModifier\u003c/a\u003e\u003c/code\u003e that can represent:\n    * parenting\n    * type\n    * date\n\u003c/p\u003e",
          "module": "Data.Git.Revision",
          "name": "Revision",
          "package": "hit",
          "source": "src/Data-Git-Revision.html#Revision",
          "type": "data"
        },
        "index": {
          "description": "git revision this can be many things shorten ref ref named branch or tag followed by optional modifiers RevModifier that can represent parenting type date",
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "Revision",
          "package": "hit",
          "partial": "Revision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#t:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException when a revision cannot be resolved to a reference\n\u003c/p\u003e",
          "module": "Data.Git.Revision",
          "name": "RevisionNotFound",
          "package": "hit",
          "source": "src/Data-Git-Revision.html#RevisionNotFound",
          "type": "data"
        },
        "index": {
          "description": "Exception when revision cannot be resolved to reference",
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevisionNotFound",
          "package": "hit",
          "partial": "Revision Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#t:RevisionNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "RevModAtDate",
          "package": "hit",
          "signature": "RevModAtDate String",
          "source": "src/Data-Git-Revision.html#RevModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevModAtDate",
          "package": "hit",
          "partial": "Rev Mod At Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModAtDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "RevModAtN",
          "package": "hit",
          "signature": "RevModAtN Int",
          "source": "src/Data-Git-Revision.html#RevModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevModAtN",
          "package": "hit",
          "partial": "Rev Mod At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModAtN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "RevModAtType",
          "package": "hit",
          "signature": "RevModAtType String",
          "source": "src/Data-Git-Revision.html#RevModifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevModAtType",
          "package": "hit",
          "partial": "Rev Mod At Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModAtType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparent accessor ^\u003ca\u003en\u003c/a\u003e and ^\n\u003c/p\u003e",
          "module": "Data.Git.Revision",
          "name": "RevModParent",
          "package": "hit",
          "signature": "RevModParent Int",
          "source": "src/Data-Git-Revision.html#RevModifier",
          "type": "function"
        },
        "index": {
          "description": "parent accessor and",
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevModParent",
          "package": "hit",
          "partial": "Rev Mod Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparent accessor ~\u003ca\u003en\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Git.Revision",
          "name": "RevModParentFirstN",
          "package": "hit",
          "signature": "RevModParentFirstN Int",
          "source": "src/Data-Git-Revision.html#RevModifier",
          "type": "function"
        },
        "index": {
          "description": "parent accessor",
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevModParentFirstN",
          "package": "hit",
          "partial": "Rev Mod Parent First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModParentFirstN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "Revision",
          "package": "hit",
          "signature": "Revision String [RevModifier]",
          "source": "src/Data-Git-Revision.html#Revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "Revision",
          "normalized": "Revision String[RevModifier]",
          "package": "hit",
          "partial": "Revision",
          "signature": "Revision String[RevModifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "RevisionNotFound",
          "package": "hit",
          "signature": "RevisionNotFound Revision",
          "source": "src/Data-Git-Revision.html#RevisionNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "RevisionNotFound",
          "package": "hit",
          "partial": "Revision Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevisionNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Revision",
          "name": "fromString",
          "package": "hit",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Revision",
          "module": "Data.Git.Revision",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "hit",
          "partial": "String",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Loose",
          "name": "Loose",
          "package": "hit",
          "source": "src/Data-Git-Storage-Loose.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "Loose",
          "package": "hit",
          "partial": "Loose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Loose",
          "name": "Zipped",
          "package": "hit",
          "source": "src/Data-Git-Internal.html#Zipped",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "Zipped",
          "package": "hit",
          "partial": "Zipped",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#t:Zipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Loose",
          "name": "Zipped",
          "package": "hit",
          "signature": "Zipped",
          "source": "src/Data-Git-Internal.html#Zipped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "Zipped",
          "package": "hit",
          "partial": "Zipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:Zipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Loose",
          "name": "getZippedData",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Internal.html#Zipped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "getZippedData",
          "package": "hit",
          "partial": "Zipped Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:getZippedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumarate all prefixes available in the object store.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseEnumeratePrefixes",
          "package": "hit",
          "signature": "FilePath -\u003e IO [[Char]]",
          "source": "src/Data-Git-Storage-Loose.html#looseEnumeratePrefixes",
          "type": "function"
        },
        "index": {
          "description": "enumarate all prefixes available in the object store",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseEnumeratePrefixes",
          "normalized": "FilePath-\u003eIO[[Char]]",
          "package": "hit",
          "partial": "Enumerate Prefixes",
          "signature": "FilePath-\u003eIO[[Char]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseEnumeratePrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Loose",
          "name": "looseEnumerateWithPrefix",
          "package": "hit",
          "signature": "FilePath -\u003e String -\u003e IO [Ref]",
          "source": "src/Data-Git-Storage-Loose.html#looseEnumerateWithPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseEnumerateWithPrefix",
          "normalized": "FilePath-\u003eString-\u003eIO[Ref]",
          "package": "hit",
          "partial": "Enumerate With Prefix",
          "signature": "FilePath-\u003eString-\u003eIO[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseEnumerateWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumerate all references available with a specific prefix.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseEnumerateWithPrefixFilter",
          "package": "hit",
          "signature": "FilePath -\u003e String -\u003e (Ref -\u003e Bool) -\u003e IO [Ref]",
          "source": "src/Data-Git-Storage-Loose.html#looseEnumerateWithPrefixFilter",
          "type": "function"
        },
        "index": {
          "description": "enumerate all references available with specific prefix",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseEnumerateWithPrefixFilter",
          "normalized": "FilePath-\u003eString-\u003e(Ref-\u003eBool)-\u003eIO[Ref]",
          "package": "hit",
          "partial": "Enumerate With Prefix Filter",
          "signature": "FilePath-\u003eString-\u003e(Ref-\u003eBool)-\u003eIO[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseEnumerateWithPrefixFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck if a specific ref exists as loose object\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseExists",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO Bool",
          "source": "src/Data-Git-Storage-Loose.html#looseExists",
          "type": "function"
        },
        "index": {
          "description": "check if specific ref exists as loose object",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseExists",
          "normalized": "FilePath-\u003eRef-\u003eIO Bool",
          "package": "hit",
          "partial": "Exists",
          "signature": "FilePath-\u003eRef-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emarshall as lazy bytestring an object except deltas.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseMarshall",
          "package": "hit",
          "signature": "Object -\u003e ByteString",
          "source": "src/Data-Git-Storage-Loose.html#looseMarshall",
          "type": "function"
        },
        "index": {
          "description": "marshall as lazy bytestring an object except deltas",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseMarshall",
          "normalized": "Object-\u003eByteString",
          "package": "hit",
          "partial": "Marshall",
          "signature": "Object-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseMarshall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a specific ref from a loose object and returns an object\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseRead",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO Object",
          "source": "src/Data-Git-Storage-Loose.html#looseRead",
          "type": "function"
        },
        "index": {
          "description": "read specific ref from loose object and returns an object",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseRead",
          "normalized": "FilePath-\u003eRef-\u003eIO Object",
          "package": "hit",
          "partial": "Read",
          "signature": "FilePath-\u003eRef-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread only the header of a loose object.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseReadHeader",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO (ObjectType, Word64, Maybe a)",
          "source": "src/Data-Git-Storage-Loose.html#looseReadHeader",
          "type": "function"
        },
        "index": {
          "description": "read only the header of loose object",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseReadHeader",
          "normalized": "FilePath-\u003eRef-\u003eIO(ObjectType,Word,Maybe a)",
          "package": "hit",
          "partial": "Read Header",
          "signature": "FilePath-\u003eRef-\u003eIO(ObjectType,Word,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a specific ref from a loose object and returns an header and data.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseReadRaw",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO (ObjectHeader, ObjectData)",
          "source": "src/Data-Git-Storage-Loose.html#looseReadRaw",
          "type": "function"
        },
        "index": {
          "description": "read specific ref from loose object and returns an header and data",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseReadRaw",
          "normalized": "FilePath-\u003eRef-\u003eIO(ObjectHeader,ObjectData)",
          "package": "hit",
          "partial": "Read Raw",
          "signature": "FilePath-\u003eRef-\u003eIO(ObjectHeader,ObjectData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseReadRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunmarshall an object (with header) from a bytestring.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshall",
          "package": "hit",
          "signature": "ByteString -\u003e Object",
          "source": "src/Data-Git-Storage-Loose.html#looseUnmarshall",
          "type": "function"
        },
        "index": {
          "description": "unmarshall an object with header from bytestring",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshall",
          "normalized": "ByteString-\u003eObject",
          "package": "hit",
          "partial": "Unmarshall",
          "signature": "ByteString-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunmarshall an object as (header, data) tuple from a bytestring\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshallRaw",
          "package": "hit",
          "signature": "ByteString -\u003e (ObjectHeader, ObjectData)",
          "source": "src/Data-Git-Storage-Loose.html#looseUnmarshallRaw",
          "type": "function"
        },
        "index": {
          "description": "unmarshall an object as header data tuple from bytestring",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshallRaw",
          "normalized": "ByteString-\u003e(ObjectHeader,ObjectData)",
          "package": "hit",
          "partial": "Unmarshall Raw",
          "signature": "ByteString-\u003e(ObjectHeader,ObjectData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshallRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunmarshall an object (with header) from a zipped stream.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshallZipped",
          "package": "hit",
          "signature": "Zipped -\u003e Object",
          "source": "src/Data-Git-Storage-Loose.html#looseUnmarshallZipped",
          "type": "function"
        },
        "index": {
          "description": "unmarshall an object with header from zipped stream",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshallZipped",
          "normalized": "Zipped-\u003eObject",
          "package": "hit",
          "partial": "Unmarshall Zipped",
          "signature": "Zipped-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshallZipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunmarshall an object as (header, data) tuple from a zipped stream\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshallZippedRaw",
          "package": "hit",
          "signature": "Zipped -\u003e (ObjectHeader, ObjectData)",
          "source": "src/Data-Git-Storage-Loose.html#looseUnmarshallZippedRaw",
          "type": "function"
        },
        "index": {
          "description": "unmarshall an object as header data tuple from zipped stream",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseUnmarshallZippedRaw",
          "normalized": "Zipped-\u003e(ObjectHeader,ObjectData)",
          "package": "hit",
          "partial": "Unmarshall Zipped Raw",
          "signature": "Zipped-\u003e(ObjectHeader,ObjectData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshallZippedRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite an object to disk as a loose reference.\n use looseWriteBlobFromFile for efficiently writing blobs when being commited from a file.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseWrite",
          "package": "hit",
          "signature": "FilePath -\u003e Object -\u003e IO Ref",
          "source": "src/Data-Git-Storage-Loose.html#looseWrite",
          "type": "function"
        },
        "index": {
          "description": "write an object to disk as loose reference use looseWriteBlobFromFile for efficiently writing blobs when being commited from file",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseWrite",
          "normalized": "FilePath-\u003eObject-\u003eIO Ref",
          "package": "hit",
          "partial": "Write",
          "signature": "FilePath-\u003eObject-\u003eIO Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new blob on a temporary location and on success move it to\n the object store with its digest name.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Loose",
          "name": "looseWriteBlobFromFile",
          "package": "hit",
          "signature": "FilePath -\u003e FilePath -\u003e IO Ref",
          "source": "src/Data-Git-Storage-Loose.html#looseWriteBlobFromFile",
          "type": "function"
        },
        "index": {
          "description": "create new blob on temporary location and on success move it to the object store with its digest name",
          "hierarchy": "Data Git Storage Loose",
          "module": "Data.Git.Storage.Loose",
          "name": "looseWriteBlobFromFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Ref",
          "package": "hit",
          "partial": "Write Blob From File",
          "signature": "FilePath-\u003eFilePath-\u003eIO Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseWriteBlobFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "Object",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "Object",
          "package": "hit",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edescribe a git object, that could of 6 differents types:\n tree, blob, commit, tag and deltas (offset or ref).\n the deltas one are only available in packs.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "Object",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "data"
        },
        "index": {
          "description": "describe git object that could of differents types tree blob commit tag and deltas offset or ref the deltas one are only available in packs",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "Object",
          "package": "hit",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjectData",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#ObjectData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectData",
          "package": "hit",
          "partial": "Object Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjectHeader",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#ObjectHeader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectHeader",
          "package": "hit",
          "partial": "Object Header",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw objects infos have an header (type, size, ptr),\n the data and a pointers chains to parents for resolved objects.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectInfo",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#ObjectInfo",
          "type": "data"
        },
        "index": {
          "description": "Raw objects infos have an header type size ptr the data and pointers chains to parents for resolved objects",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectInfo",
          "package": "hit",
          "partial": "Object Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of an object in the database\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectLocation",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#ObjectLocation",
          "type": "data"
        },
        "index": {
          "description": "location of an object in the database",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectLocation",
          "package": "hit",
          "partial": "Object Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta objects points to some others objects in the database\n either as offset in the pack or as a direct reference.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectPtr",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#ObjectPtr",
          "type": "data"
        },
        "index": {
          "description": "Delta objects points to some others objects in the database either as offset in the pack or as direct reference",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectPtr",
          "package": "hit",
          "partial": "Object Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of a git object.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectType",
          "package": "hit",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "data"
        },
        "index": {
          "description": "type of git object",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectType",
          "package": "hit",
          "partial": "Object Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "Objectable",
          "package": "hit",
          "source": "src/Data-Git-Storage-Object.html#Objectable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "Objectable",
          "package": "hit",
          "partial": "Objectable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:Objectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "Loose",
          "package": "hit",
          "signature": "Loose Ref",
          "source": "src/Data-Git-Storage-Object.html#ObjectLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "Loose",
          "package": "hit",
          "partial": "Loose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:Loose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "NotFound",
          "package": "hit",
          "signature": "NotFound",
          "source": "src/Data-Git-Storage-Object.html#ObjectLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "NotFound",
          "package": "hit",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjBlob",
          "package": "hit",
          "signature": "ObjBlob Blob",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjBlob",
          "package": "hit",
          "partial": "Obj Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjCommit",
          "package": "hit",
          "signature": "ObjCommit Commit",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjCommit",
          "package": "hit",
          "partial": "Obj Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjDeltaOfs",
          "package": "hit",
          "signature": "ObjDeltaOfs DeltaOfs",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjDeltaOfs",
          "package": "hit",
          "partial": "Obj Delta Ofs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjDeltaOfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjDeltaRef",
          "package": "hit",
          "signature": "ObjDeltaRef DeltaRef",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjDeltaRef",
          "package": "hit",
          "partial": "Obj Delta Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjDeltaRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjTag",
          "package": "hit",
          "signature": "ObjTag Tag",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjTag",
          "package": "hit",
          "partial": "Obj Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjTree",
          "package": "hit",
          "signature": "ObjTree Tree",
          "source": "src/Data-Git-Storage-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjTree",
          "package": "hit",
          "partial": "Obj Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "ObjectInfo",
          "package": "hit",
          "signature": "ObjectInfo",
          "source": "src/Data-Git-Storage-Object.html#ObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "ObjectInfo",
          "package": "hit",
          "partial": "Object Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "Packed",
          "package": "hit",
          "signature": "Packed Ref Word64",
          "source": "src/Data-Git-Storage-Object.html#ObjectLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "Packed",
          "package": "hit",
          "partial": "Packed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:Packed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "PtrOfs",
          "package": "hit",
          "signature": "PtrOfs Word64",
          "source": "src/Data-Git-Storage-Object.html#ObjectPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "PtrOfs",
          "package": "hit",
          "partial": "Ptr Ofs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:PtrOfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "PtrRef",
          "package": "hit",
          "signature": "PtrRef Ref",
          "source": "src/Data-Git-Storage-Object.html#ObjectPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "PtrRef",
          "package": "hit",
          "partial": "Ptr Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:PtrRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Storage.Object\",\"Data.Git.Types\"]",
          "name": "TypeBlob",
          "package": "hit",
          "signature": "TypeBlob",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeBlob\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeBlob\"]"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "TypeBlob",
          "package": "hit",
          "partial": "Type Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Storage.Object\",\"Data.Git.Types\"]",
          "name": "TypeCommit",
          "package": "hit",
          "signature": "TypeCommit",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeCommit\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeCommit\"]"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "TypeCommit",
          "package": "hit",
          "partial": "Type Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Storage.Object\",\"Data.Git.Types\"]",
          "name": "TypeDeltaOff",
          "package": "hit",
          "signature": "TypeDeltaOff",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeDeltaOff\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeDeltaOff\"]"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "TypeDeltaOff",
          "package": "hit",
          "partial": "Type Delta Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeDeltaOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Storage.Object\",\"Data.Git.Types\"]",
          "name": "TypeDeltaRef",
          "package": "hit",
          "signature": "TypeDeltaRef",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeDeltaRef\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeDeltaRef\"]"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "TypeDeltaRef",
          "package": "hit",
          "partial": "Type Delta Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeDeltaRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Storage.Object\",\"Data.Git.Types\"]",
          "name": "TypeTag",
          "package": "hit",
          "signature": "TypeTag",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeTag\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeTag\"]"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "TypeTag",
          "package": "hit",
          "partial": "Type Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Storage.Object\",\"Data.Git.Types\"]",
          "name": "TypeTree",
          "package": "hit",
          "signature": "TypeTree",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeTree\",\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeTree\"]"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "TypeTree",
          "package": "hit",
          "partial": "Type Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a blob content\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "blobParse",
          "package": "hit",
          "signature": "Parser ByteString Blob",
          "source": "src/Data-Git-Storage-Object.html#blobParse",
          "type": "function"
        },
        "index": {
          "description": "parse blob content",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "blobParse",
          "package": "hit",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:blobParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a commit content\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "commitParse",
          "package": "hit",
          "signature": "Parser ByteString Commit",
          "source": "src/Data-Git-Storage-Object.html#commitParse",
          "type": "function"
        },
        "index": {
          "description": "parse commit content",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "commitParse",
          "package": "hit",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:commitParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "getRaw",
          "package": "hit",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Git-Storage-Object.html#getRaw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "getRaw",
          "normalized": "a-\u003eByteString",
          "package": "hit",
          "partial": "Raw",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:getRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "getType",
          "package": "hit",
          "signature": "a -\u003e ObjectType",
          "source": "src/Data-Git-Storage-Object.html#getType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "getType",
          "normalized": "a-\u003eObjectType",
          "package": "hit",
          "partial": "Type",
          "signature": "a-\u003eObjectType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "isDelta",
          "package": "hit",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Git-Storage-Object.html#isDelta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "isDelta",
          "normalized": "a-\u003eBool",
          "package": "hit",
          "partial": "Delta",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:isDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectHash",
          "package": "hit",
          "signature": "ObjectType -\u003e Word64 -\u003e ByteString -\u003e Ref",
          "source": "src/Data-Git-Storage-Object.html#objectHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectHash",
          "normalized": "ObjectType-\u003eWord-\u003eByteString-\u003eRef",
          "package": "hit",
          "partial": "Hash",
          "signature": "ObjectType-\u003eWord-\u003eByteString-\u003eRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectIsDelta",
          "package": "hit",
          "signature": "Object -\u003e Bool",
          "source": "src/Data-Git-Storage-Object.html#objectIsDelta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectIsDelta",
          "normalized": "Object-\u003eBool",
          "package": "hit",
          "partial": "Is Delta",
          "signature": "Object-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectIsDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectParseBlob",
          "package": "hit",
          "signature": "Parser ByteString Object",
          "source": "src/Data-Git-Storage-Object.html#objectParseBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectParseBlob",
          "package": "hit",
          "partial": "Parse Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectParseCommit",
          "package": "hit",
          "signature": "Parser ByteString Object",
          "source": "src/Data-Git-Storage-Object.html#objectParseCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectParseCommit",
          "package": "hit",
          "partial": "Parse Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectParseTag",
          "package": "hit",
          "signature": "Parser ByteString Object",
          "source": "src/Data-Git-Storage-Object.html#objectParseTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectParseTag",
          "package": "hit",
          "partial": "Parse Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectParseTree",
          "package": "hit",
          "signature": "Parser ByteString Object",
          "source": "src/Data-Git-Storage-Object.html#objectParseTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectParseTree",
          "package": "hit",
          "partial": "Parse Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectToBlob",
          "package": "hit",
          "signature": "Object -\u003e Maybe Blob",
          "source": "src/Data-Git-Storage-Object.html#objectToBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectToBlob",
          "normalized": "Object-\u003eMaybe Blob",
          "package": "hit",
          "partial": "To Blob",
          "signature": "Object-\u003eMaybe Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectToCommit",
          "package": "hit",
          "signature": "Object -\u003e Maybe Commit",
          "source": "src/Data-Git-Storage-Object.html#objectToCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectToCommit",
          "normalized": "Object-\u003eMaybe Commit",
          "package": "hit",
          "partial": "To Commit",
          "signature": "Object-\u003eMaybe Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectToTag",
          "package": "hit",
          "signature": "Object -\u003e Maybe Tag",
          "source": "src/Data-Git-Storage-Object.html#objectToTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectToTag",
          "normalized": "Object-\u003eMaybe Tag",
          "package": "hit",
          "partial": "To Tag",
          "signature": "Object-\u003eMaybe Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectToTree",
          "package": "hit",
          "signature": "Object -\u003e Maybe Tree",
          "source": "src/Data-Git-Storage-Object.html#objectToTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectToTree",
          "normalized": "Object-\u003eMaybe Tree",
          "package": "hit",
          "partial": "To Tree",
          "signature": "Object-\u003eMaybe Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectToType",
          "package": "hit",
          "signature": "Object -\u003e ObjectType",
          "source": "src/Data-Git-Storage-Object.html#objectToType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectToType",
          "normalized": "Object-\u003eObjectType",
          "package": "hit",
          "partial": "To Type",
          "signature": "Object-\u003eObjectType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectTypeIsDelta",
          "package": "hit",
          "signature": "ObjectType -\u003e Bool",
          "source": "src/Data-Git-Storage-Object.html#objectTypeIsDelta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectTypeIsDelta",
          "normalized": "ObjectType-\u003eBool",
          "package": "hit",
          "partial": "Type Is Delta",
          "signature": "ObjectType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectTypeIsDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectTypeMarshall",
          "package": "hit",
          "signature": "ObjectType -\u003e String",
          "source": "src/Data-Git-Storage-Object.html#objectTypeMarshall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectTypeMarshall",
          "normalized": "ObjectType-\u003eString",
          "package": "hit",
          "partial": "Type Marshall",
          "signature": "ObjectType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectTypeMarshall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectTypeUnmarshall",
          "package": "hit",
          "signature": "String -\u003e ObjectType",
          "source": "src/Data-Git-Storage-Object.html#objectTypeUnmarshall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectTypeUnmarshall",
          "normalized": "String-\u003eObjectType",
          "package": "hit",
          "partial": "Type Unmarshall",
          "signature": "String-\u003eObjectType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectTypeUnmarshall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectWrite",
          "package": "hit",
          "signature": "Object -\u003e ByteString",
          "source": "src/Data-Git-Storage-Object.html#objectWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectWrite",
          "normalized": "Object-\u003eByteString",
          "package": "hit",
          "partial": "Write",
          "signature": "Object-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "objectWriteHeader",
          "package": "hit",
          "signature": "ObjectType -\u003e Word64 -\u003e ByteString",
          "source": "src/Data-Git-Storage-Object.html#objectWriteHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "objectWriteHeader",
          "normalized": "ObjectType-\u003eWord-\u003eByteString",
          "package": "hit",
          "partial": "Write Header",
          "signature": "ObjectType-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectWriteHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "oiChains",
          "package": "hit",
          "signature": "[ObjectPtr]",
          "source": "src/Data-Git-Storage-Object.html#ObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "oiChains",
          "normalized": "[ObjectPtr]",
          "package": "hit",
          "partial": "Chains",
          "signature": "[ObjectPtr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:oiChains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "oiData",
          "package": "hit",
          "signature": "ObjectData",
          "source": "src/Data-Git-Storage-Object.html#ObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "oiData",
          "package": "hit",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:oiData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "oiHeader",
          "package": "hit",
          "signature": "ObjectHeader",
          "source": "src/Data-Git-Storage-Object.html#ObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "oiHeader",
          "package": "hit",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:oiHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a tag content\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "tagParse",
          "package": "hit",
          "signature": "Parser ByteString Tag",
          "source": "src/Data-Git-Storage-Object.html#tagParse",
          "type": "function"
        },
        "index": {
          "description": "parse tag content",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "tagParse",
          "package": "hit",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:tagParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Object",
          "name": "toObject",
          "package": "hit",
          "signature": "a -\u003e Object",
          "source": "src/Data-Git-Storage-Object.html#toObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "toObject",
          "normalized": "a-\u003eObject",
          "package": "hit",
          "partial": "Object",
          "signature": "a-\u003eObject",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:toObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a tree content\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Object",
          "name": "treeParse",
          "package": "hit",
          "signature": "Parser ByteString Tree",
          "source": "src/Data-Git-Storage-Object.html#treeParse",
          "type": "function"
        },
        "index": {
          "description": "parse tree content",
          "hierarchy": "Data Git Storage Object",
          "module": "Data.Git.Storage.Object",
          "name": "treeParse",
          "package": "hit",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:treeParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "Pack",
          "package": "hit",
          "source": "src/Data-Git-Storage-Pack.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "Pack",
          "package": "hit",
          "partial": "Pack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "PackedObjectInfo",
          "package": "hit",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "PackedObjectInfo",
          "package": "hit",
          "partial": "Packed Object Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#t:PackedObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "PackedObjectRaw",
          "package": "hit",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectRaw",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "PackedObjectRaw",
          "package": "hit",
          "partial": "Packed Object Raw",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#t:PackedObjectRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "PackedObjectInfo",
          "package": "hit",
          "signature": "PackedObjectInfo",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "PackedObjectInfo",
          "package": "hit",
          "partial": "Packed Object Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:PackedObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose a pack\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packClose",
          "package": "hit",
          "signature": "FileReader -\u003e IO ()",
          "source": "src/Data-Git-Storage-Pack.html#packClose",
          "type": "function"
        },
        "index": {
          "description": "close pack",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packClose",
          "normalized": "FileReader-\u003eIO()",
          "package": "hit",
          "partial": "Close",
          "signature": "FileReader-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the pack refs available in this repository.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packEnumerate",
          "package": "hit",
          "signature": "FilePath -\u003e IO [Ref]",
          "source": "src/Data-Git-Storage-Pack.html#packEnumerate",
          "type": "function"
        },
        "index": {
          "description": "Enumerate the pack refs available in this repository",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packEnumerate",
          "normalized": "FilePath-\u003eIO[Ref]",
          "package": "hit",
          "partial": "Enumerate",
          "signature": "FilePath-\u003eIO[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packEnumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumerate all objects in this pack and callback to f for reach raw objects\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packEnumerateObjects",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e Int -\u003e (PackedObjectRaw -\u003e IO a) -\u003e IO ()",
          "source": "src/Data-Git-Storage-Pack.html#packEnumerateObjects",
          "type": "function"
        },
        "index": {
          "description": "enumerate all objects in this pack and callback to for reach raw objects",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packEnumerateObjects",
          "normalized": "FilePath-\u003eRef-\u003eInt-\u003e(PackedObjectRaw-\u003eIO a)-\u003eIO()",
          "package": "hit",
          "partial": "Enumerate Objects",
          "signature": "FilePath-\u003eRef-\u003eInt-\u003e(PackedObjectRaw-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packEnumerateObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "packObjectFromRaw",
          "package": "hit",
          "signature": "(ObjectType, Maybe ObjectPtr, ByteString) -\u003e Maybe Object",
          "source": "src/Data-Git-Storage-Pack.html#packObjectFromRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packObjectFromRaw",
          "normalized": "(ObjectType,Maybe ObjectPtr,ByteString)-\u003eMaybe Object",
          "package": "hit",
          "partial": "Object From Raw",
          "signature": "(ObjectType,Maybe ObjectPtr,ByteString)-\u003eMaybe Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packObjectFromRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopen a pack\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packOpen",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO FileReader",
          "source": "src/Data-Git-Storage-Pack.html#packOpen",
          "type": "function"
        },
        "index": {
          "description": "open pack",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packOpen",
          "normalized": "FilePath-\u003eRef-\u003eIO FileReader",
          "package": "hit",
          "partial": "Open",
          "signature": "FilePath-\u003eRef-\u003eIO FileReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread an object at a specific position\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadAtOffset",
          "package": "hit",
          "signature": "FileReader -\u003e Word64 -\u003e IO (Maybe Object)",
          "source": "src/Data-Git-Storage-Pack.html#packReadAtOffset",
          "type": "function"
        },
        "index": {
          "description": "read an object at specific position",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadAtOffset",
          "normalized": "FileReader-\u003eWord-\u003eIO(Maybe Object)",
          "package": "hit",
          "partial": "Read At Offset",
          "signature": "FileReader-\u003eWord-\u003eIO(Maybe Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadAtOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the number of entries in this pack\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadHeader",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO Word32",
          "source": "src/Data-Git-Storage-Pack.html#packReadHeader",
          "type": "function"
        },
        "index": {
          "description": "return the number of entries in this pack",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadHeader",
          "normalized": "FilePath-\u003eRef-\u003eIO Word",
          "package": "hit",
          "partial": "Read Header",
          "signature": "FilePath-\u003eRef-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread an object at a specific position using a map function on the objectData\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadMapAtOffset",
          "package": "hit",
          "signature": "FileReader -\u003e Word64 -\u003e (ByteString -\u003e ByteString) -\u003e IO (Maybe Object)",
          "source": "src/Data-Git-Storage-Pack.html#packReadMapAtOffset",
          "type": "function"
        },
        "index": {
          "description": "read an object at specific position using map function on the objectData",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadMapAtOffset",
          "normalized": "FileReader-\u003eWord-\u003e(ByteString-\u003eByteString)-\u003eIO(Maybe Object)",
          "package": "hit",
          "partial": "Read Map At Offset",
          "signature": "FileReader-\u003eWord-\u003e(ByteString-\u003eByteString)-\u003eIO(Maybe Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadMapAtOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a raw representation at a specific position\n\u003c/p\u003e",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadRawAtOffset",
          "package": "hit",
          "signature": "FileReader -\u003e Word64 -\u003e IO PackedObjectRaw",
          "source": "src/Data-Git-Storage-Pack.html#packReadRawAtOffset",
          "type": "function"
        },
        "index": {
          "description": "read raw representation at specific position",
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packReadRawAtOffset",
          "normalized": "FileReader-\u003eWord-\u003eIO PackedObjectRaw",
          "package": "hit",
          "partial": "Read Raw At Offset",
          "signature": "FileReader-\u003eWord-\u003eIO PackedObjectRaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadRawAtOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "packedObjectToObject",
          "package": "hit",
          "signature": "(PackedObjectInfo, ByteString) -\u003e Maybe Object",
          "source": "src/Data-Git-Storage-Pack.html#packedObjectToObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "packedObjectToObject",
          "normalized": "(PackedObjectInfo,ByteString)-\u003eMaybe Object",
          "package": "hit",
          "partial": "Object To Object",
          "signature": "(PackedObjectInfo,ByteString)-\u003eMaybe Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packedObjectToObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "poiActualSize",
          "package": "hit",
          "signature": "Word64",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "poiActualSize",
          "package": "hit",
          "partial": "Actual Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiActualSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "poiExtra",
          "package": "hit",
          "signature": "Maybe ObjectPtr",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "poiExtra",
          "package": "hit",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "poiOffset",
          "package": "hit",
          "signature": "Word64",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "poiOffset",
          "package": "hit",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "poiSize",
          "package": "hit",
          "signature": "Word64",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "poiSize",
          "package": "hit",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.Pack",
          "name": "poiType",
          "package": "hit",
          "signature": "ObjectType",
          "source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage Pack",
          "module": "Data.Git.Storage.Pack",
          "name": "poiType",
          "package": "hit",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndex",
          "package": "hit",
          "source": "src/Data-Git-Storage-PackIndex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndex",
          "package": "hit",
          "partial": "Pack Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndex",
          "package": "hit",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndex",
          "package": "hit",
          "partial": "Pack Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#t:PackIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent an packIndex header with the version and the fanout table\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndexHeader",
          "package": "hit",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndexHeader",
          "type": "data"
        },
        "index": {
          "description": "represent an packIndex header with the version and the fanout table",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndexHeader",
          "package": "hit",
          "partial": "Pack Index Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#t:PackIndexHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndex",
          "package": "hit",
          "signature": "PackIndex",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndex",
          "package": "hit",
          "partial": "Pack Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:PackIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndexHeader",
          "package": "hit",
          "signature": "PackIndexHeader !Word32 !(Vector Word32)",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndexHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "PackIndexHeader",
          "package": "hit",
          "partial": "Pack Index Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:PackIndexHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexCRCs",
          "package": "hit",
          "signature": "Vector Word32",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexCRCs",
          "package": "hit",
          "partial": "Index CRCs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexCRCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexChecksum",
          "package": "hit",
          "signature": "Ref",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexChecksum",
          "package": "hit",
          "partial": "Index Checksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose an index\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexClose",
          "package": "hit",
          "signature": "FileReader -\u003e IO ()",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexClose",
          "type": "function"
        },
        "index": {
          "description": "close an index",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexClose",
          "normalized": "FileReader-\u003eIO()",
          "package": "hit",
          "partial": "Index Close",
          "signature": "FileReader-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumerate every indexes file in the pack directory\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexEnumerate",
          "package": "hit",
          "signature": "FilePath -\u003e IO [Ref]",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexEnumerate",
          "type": "function"
        },
        "index": {
          "description": "enumerate every indexes file in the pack directory",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexEnumerate",
          "normalized": "FilePath-\u003eIO[Ref]",
          "package": "hit",
          "partial": "Index Enumerate",
          "signature": "FilePath-\u003eIO[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexEnumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget index header from an index reference\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexGetHeader",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO PackIndexHeader",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexGetHeader",
          "type": "function"
        },
        "index": {
          "description": "get index header from an index reference",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexGetHeader",
          "normalized": "FilePath-\u003eRef-\u003eIO PackIndexHeader",
          "package": "hit",
          "partial": "Index Get Header",
          "signature": "FilePath-\u003eRef-\u003eIO PackIndexHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexGetHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the reference offset in the packfile if found\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexGetReferenceLocation",
          "package": "hit",
          "signature": "PackIndexHeader -\u003e FileReader -\u003e Ref -\u003e IO (Maybe Word64)",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexGetReferenceLocation",
          "type": "function"
        },
        "index": {
          "description": "return the reference offset in the packfile if found",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexGetReferenceLocation",
          "normalized": "PackIndexHeader-\u003eFileReader-\u003eRef-\u003eIO(Maybe Word)",
          "package": "hit",
          "partial": "Index Get Reference Location",
          "signature": "PackIndexHeader-\u003eFileReader-\u003eRef-\u003eIO(Maybe Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexGetReferenceLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all references that start by prefix.\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexGetReferencesWithPrefix",
          "package": "hit",
          "signature": "PackIndexHeader -\u003e FileReader -\u003e String -\u003e IO [Ref]",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexGetReferencesWithPrefix",
          "type": "function"
        },
        "index": {
          "description": "get all references that start by prefix",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexGetReferencesWithPrefix",
          "normalized": "PackIndexHeader-\u003eFileReader-\u003eString-\u003eIO[Ref]",
          "package": "hit",
          "partial": "Index Get References With Prefix",
          "signature": "PackIndexHeader-\u003eFileReader-\u003eString-\u003eIO[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexGetReferencesWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the number of reference in this index with a specific prefix\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexHeaderGetNbWithPrefix",
          "package": "hit",
          "signature": "PackIndexHeader -\u003e Int -\u003e Word32",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexHeaderGetNbWithPrefix",
          "type": "function"
        },
        "index": {
          "description": "get the number of reference in this index with specific prefix",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexHeaderGetNbWithPrefix",
          "normalized": "PackIndexHeader-\u003eInt-\u003eWord",
          "package": "hit",
          "partial": "Index Header Get Nb With Prefix",
          "signature": "PackIndexHeader-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexHeaderGetNbWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopen an index\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexOpen",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO FileReader",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexOpen",
          "type": "function"
        },
        "index": {
          "description": "open an index",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexOpen",
          "normalized": "FilePath-\u003eRef-\u003eIO FileReader",
          "package": "hit",
          "partial": "Index Open",
          "signature": "FilePath-\u003eRef-\u003eIO FileReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexPackChecksum",
          "package": "hit",
          "signature": "Ref",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexPackChecksum",
          "package": "hit",
          "partial": "Index Pack Checksum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexPackChecksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexPackoffs",
          "package": "hit",
          "signature": "Vector Word32",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexPackoffs",
          "package": "hit",
          "partial": "Index Packoffs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexPackoffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread all index\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexRead",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e IO (PackIndexHeader, (Vector Ref, Vector Word32, Vector Word32, [ByteString], Ref, Ref))",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexRead",
          "type": "function"
        },
        "index": {
          "description": "read all index",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexRead",
          "normalized": "FilePath-\u003eRef-\u003eIO(PackIndexHeader,(Vector Ref,Vector Word,Vector Word,[ByteString],Ref,Ref))",
          "package": "hit",
          "partial": "Index Read",
          "signature": "FilePath-\u003eRef-\u003eIO(PackIndexHeader,(Vector Ref,Vector Word,Vector Word,[ByteString],Ref,Ref))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread index header from an index filereader\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexReadHeader",
          "package": "hit",
          "signature": "FileReader -\u003e IO PackIndexHeader",
          "source": "src/Data-Git-Storage-PackIndex.html#packIndexReadHeader",
          "type": "function"
        },
        "index": {
          "description": "read index header from an index filereader",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexReadHeader",
          "normalized": "FileReader-\u003eIO PackIndexHeader",
          "package": "hit",
          "partial": "Index Read Header",
          "signature": "FileReader-\u003eIO PackIndexHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexSha1s",
          "package": "hit",
          "signature": "Vector Ref",
          "source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "packIndexSha1s",
          "package": "hit",
          "partial": "Index Sha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexSha1s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariant of withFile on the index file and with a FileReader\n\u003c/p\u003e",
          "module": "Data.Git.Storage.PackIndex",
          "name": "withPackIndex",
          "package": "hit",
          "signature": "FilePath -\u003e Ref -\u003e (FileReader -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Git-Storage-PackIndex.html#withPackIndex",
          "type": "function"
        },
        "index": {
          "description": "variant of withFile on the index file and with FileReader",
          "hierarchy": "Data Git Storage PackIndex",
          "module": "Data.Git.Storage.PackIndex",
          "name": "withPackIndex",
          "normalized": "FilePath-\u003eRef-\u003e(FileReader-\u003eIO a)-\u003eIO a",
          "package": "hit",
          "partial": "Pack Index",
          "signature": "FilePath-\u003eRef-\u003e(FileReader-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:withPackIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage",
          "name": "Storage",
          "package": "hit",
          "source": "src/Data-Git-Storage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "Storage",
          "package": "hit",
          "partial": "Storage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a git repo, with possibly already opened filereaders\n for indexes and packs\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "Git",
          "package": "hit",
          "source": "src/Data-Git-Storage.html#Git",
          "type": "data"
        },
        "index": {
          "description": "represent git repo with possibly already opened filereaders for indexes and packs",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "Git",
          "package": "hit",
          "partial": "Git",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#t:Git"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose a git repository context, closing all remaining fileReaders.\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "closeRepo",
          "package": "hit",
          "signature": "Git -\u003e IO ()",
          "source": "src/Data-Git-Storage.html#closeRepo",
          "type": "function"
        },
        "index": {
          "description": "close git repository context closing all remaining fileReaders",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "closeRepo",
          "normalized": "Git-\u003eIO()",
          "package": "hit",
          "partial": "Repo",
          "signature": "Git-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:closeRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the object location of a specific reference\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "findReference",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO ObjectLocation",
          "source": "src/Data-Git-Storage.html#findReference",
          "type": "function"
        },
        "index": {
          "description": "Get the object location of specific reference",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "findReference",
          "normalized": "Git-\u003eRef-\u003eIO ObjectLocation",
          "package": "hit",
          "partial": "Reference",
          "signature": "Git-\u003eRef-\u003eIO ObjectLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all the references that start by a specific prefix\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "findReferencesWithPrefix",
          "package": "hit",
          "signature": "Git -\u003e String -\u003e IO [Ref]",
          "source": "src/Data-Git-Storage.html#findReferencesWithPrefix",
          "type": "function"
        },
        "index": {
          "description": "get all the references that start by specific prefix",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "findReferencesWithPrefix",
          "normalized": "Git-\u003eString-\u003eIO[Ref]",
          "package": "hit",
          "partial": "References With Prefix",
          "signature": "Git-\u003eString-\u003eIO[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findReferencesWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the git repository from the current directory.\n\u003c/p\u003e\u003cp\u003eIf the environment variable GIT_DIR is set then it's used,\n otherwise iterate from current directory, up to 128 parents for a .git directory\n\u003c/p\u003e",
          "module": "[\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "findRepo",
          "package": "hit",
          "signature": "IO FilePath",
          "source": "src/Data-Git-Storage.html#findRepo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:findRepo\"]"
        },
        "index": {
          "description": "Find the git repository from the current directory If the environment variable GIT DIR is set then it used otherwise iterate from current directory up to parents for git directory",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "findRepo",
          "package": "hit",
          "partial": "Repo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the git repository from the current directory.\n\u003c/p\u003e\u003cp\u003eIf the environment variable GIT_DIR is set then it's used,\n otherwise iterate from current directory, up to 128 parents for a .git directory\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "findRepoMaybe",
          "package": "hit",
          "signature": "IO (Maybe FilePath)",
          "source": "src/Data-Git-Storage.html#findRepoMaybe",
          "type": "function"
        },
        "index": {
          "description": "Find the git repository from the current directory If the environment variable GIT DIR is set then it used otherwise iterate from current directory up to parents for git directory",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "findRepoMaybe",
          "package": "hit",
          "partial": "Repo Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findRepoMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the repository's description\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "getDescription",
          "package": "hit",
          "signature": "Git -\u003e IO (Maybe String)",
          "source": "src/Data-Git-Storage.html#getDescription",
          "type": "function"
        },
        "index": {
          "description": "read the repository description",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getDescription",
          "normalized": "Git-\u003eIO(Maybe String)",
          "package": "hit",
          "partial": "Description",
          "signature": "Git-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget an object from repository using a ref.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "getObject",
          "package": "hit",
          "signature": "Git-\u003e Ref-\u003e Bool-\u003e IO (Maybe Object)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObject\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getObject\"]"
        },
        "index": {
          "description": "get an object from repository using ref",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getObject",
          "normalized": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe Object)",
          "package": "hit",
          "partial": "Object",
          "signature": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget an object from repository using a location to reference it.\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "getObjectAt",
          "package": "hit",
          "signature": "Git -\u003e ObjectLocation -\u003e Bool -\u003e IO (Maybe Object)",
          "source": "src/Data-Git-Storage.html#getObjectAt",
          "type": "function"
        },
        "index": {
          "description": "get an object from repository using location to reference it",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getObjectAt",
          "normalized": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe Object)",
          "package": "hit",
          "partial": "Object At",
          "signature": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe Object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget an object from repository\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "getObjectRaw",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e Bool -\u003e IO (Maybe ObjectInfo)",
          "source": "src/Data-Git-Storage.html#getObjectRaw",
          "type": "function"
        },
        "index": {
          "description": "get an object from repository",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getObjectRaw",
          "normalized": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe ObjectInfo)",
          "package": "hit",
          "partial": "Object Raw",
          "signature": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe ObjectInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget an object from repository\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "getObjectRawAt",
          "package": "hit",
          "signature": "Git -\u003e ObjectLocation -\u003e Bool -\u003e IO (Maybe ObjectInfo)",
          "source": "src/Data-Git-Storage.html#getObjectRawAt",
          "type": "function"
        },
        "index": {
          "description": "get an object from repository",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getObjectRawAt",
          "normalized": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe ObjectInfo)",
          "package": "hit",
          "partial": "Object Raw At",
          "signature": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe ObjectInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectRawAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget an object type from repository\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "getObjectType",
          "package": "hit",
          "signature": "Git -\u003e Ref -\u003e IO (Maybe ObjectType)",
          "source": "src/Data-Git-Storage.html#getObjectType",
          "type": "function"
        },
        "index": {
          "description": "get an object type from repository",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getObjectType",
          "normalized": "Git-\u003eRef-\u003eIO(Maybe ObjectType)",
          "package": "hit",
          "partial": "Object Type",
          "signature": "Git-\u003eRef-\u003eIO(Maybe ObjectType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003egetObject\u003c/a\u003e\u003c/code\u003e but will raise a RefNotFound exception if the\n reference cannot be found.\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "getObject_",
          "package": "hit",
          "signature": "Git-\u003e Ref-\u003e Bool-\u003e IO Object",
          "type": "function"
        },
        "index": {
          "description": "Just like getObject but will raise RefNotFound exception if the reference cannot be found",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "getObject_",
          "normalized": "Git-\u003eRef-\u003eBool-\u003eIO Object",
          "package": "hit",
          "partial": "Object",
          "signature": "Git-\u003eRef-\u003eBool-\u003eIO Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObject_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage",
          "name": "gitRepoPath",
          "package": "hit",
          "signature": "Git -\u003e FilePath",
          "source": "src/Data-Git-Storage.html#gitRepoPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "gitRepoPath",
          "normalized": "Git-\u003eFilePath",
          "package": "hit",
          "partial": "Repo Path",
          "signature": "Git-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:gitRepoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage",
          "name": "iterateIndexes",
          "package": "hit",
          "signature": "Git -\u003e (b -\u003e (Ref, PackIndexReader) -\u003e IO (b, Bool)) -\u003e b -\u003e IO b",
          "source": "src/Data-Git-Storage.html#iterateIndexes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "iterateIndexes",
          "normalized": "Git-\u003e(a-\u003e(Ref,PackIndexReader)-\u003eIO(a,Bool))-\u003ea-\u003eIO a",
          "package": "hit",
          "partial": "Indexes",
          "signature": "Git-\u003e(b-\u003e(Ref,PackIndexReader)-\u003eIO(b,Bool))-\u003eb-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:iterateIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopen a new git repository context\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "openRepo",
          "package": "hit",
          "signature": "FilePath -\u003e IO Git",
          "source": "src/Data-Git-Storage.html#openRepo",
          "type": "function"
        },
        "index": {
          "description": "open new git repository context",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "openRepo",
          "normalized": "FilePath-\u003eIO Git",
          "package": "hit",
          "partial": "Repo",
          "signature": "FilePath-\u003eIO Git",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:openRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Storage",
          "name": "packedNamed",
          "package": "hit",
          "signature": "Git -\u003e PackedRef",
          "source": "src/Data-Git-Storage.html#packedNamed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "packedNamed",
          "normalized": "Git-\u003ePackedRef",
          "package": "hit",
          "partial": "Named",
          "signature": "Git-\u003ePackedRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:packedNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the repository's description\n\u003c/p\u003e",
          "module": "Data.Git.Storage",
          "name": "setDescription",
          "package": "hit",
          "signature": "Git -\u003e String -\u003e IO ()",
          "source": "src/Data-Git-Storage.html#setDescription",
          "type": "function"
        },
        "index": {
          "description": "set the repository description",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "setDescription",
          "normalized": "Git-\u003eString-\u003eIO()",
          "package": "hit",
          "partial": "Description",
          "signature": "Git-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:setDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset an object in the store and returns the new ref\n this is always going to create a loose object.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "setObject",
          "package": "hit",
          "signature": "Git -\u003e Object -\u003e IO Ref",
          "source": "src/Data-Git-Storage.html#setObject",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:setObject\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:setObject\"]"
        },
        "index": {
          "description": "set an object in the store and returns the new ref this is always going to create loose object",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "setObject",
          "normalized": "Git-\u003eObject-\u003eIO Ref",
          "package": "hit",
          "partial": "Object",
          "signature": "Git-\u003eObject-\u003eIO Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:setObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecute a function on the current repository.\n\u003c/p\u003e\u003cp\u003echeck findRepo to see how the git repository is found.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "withCurrentRepo",
          "package": "hit",
          "signature": "(Git -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Git-Storage.html#withCurrentRepo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:withCurrentRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:withCurrentRepo\"]"
        },
        "index": {
          "description": "execute function on the current repository check findRepo to see how the git repository is found",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "withCurrentRepo",
          "normalized": "(Git-\u003eIO a)-\u003eIO a",
          "package": "hit",
          "partial": "Current Repo",
          "signature": "(Git-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:withCurrentRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecute a function f with a git context.\n\u003c/p\u003e",
          "module": "[\"Data.Git.Storage\",\"Data.Git\"]",
          "name": "withRepo",
          "package": "hit",
          "signature": "FilePath -\u003e (Git -\u003e IO c) -\u003e IO c",
          "source": "src/Data-Git-Storage.html#withRepo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:withRepo\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:withRepo\"]"
        },
        "index": {
          "description": "execute function with git context",
          "hierarchy": "Data Git Storage",
          "module": "Data.Git.Storage",
          "name": "withRepo",
          "normalized": "FilePath-\u003e(Git-\u003eIO a)-\u003eIO a",
          "package": "hit",
          "partial": "Repo",
          "signature": "FilePath-\u003e(Git-\u003eIO c)-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:withRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "Types",
          "package": "hit",
          "source": "src/Data-Git-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Types",
          "package": "hit",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a binary blob.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "Blob",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Blob",
          "type": "data"
        },
        "index": {
          "description": "Represent binary blob",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Blob",
          "package": "hit",
          "partial": "Blob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a commit object.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "Commit",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "data"
        },
        "index": {
          "description": "Represent commit object",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Commit",
          "package": "hit",
          "partial": "Commit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "CommitExtra",
          "package": "hit",
          "source": "src/Data-Git-Types.html#CommitExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "CommitExtra",
          "package": "hit",
          "partial": "Commit Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:CommitExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta pointing to an offset.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "DeltaOfs",
          "package": "hit",
          "source": "src/Data-Git-Types.html#DeltaOfs",
          "type": "data"
        },
        "index": {
          "description": "Delta pointing to an offset",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "DeltaOfs",
          "package": "hit",
          "partial": "Delta Ofs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:DeltaOfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta pointing to a ref.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "DeltaRef",
          "package": "hit",
          "source": "src/Data-Git-Types.html#DeltaRef",
          "type": "data"
        },
        "index": {
          "description": "Delta pointing to ref",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "DeltaRef",
          "package": "hit",
          "partial": "Delta Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:DeltaRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etraditional unix permission for owner, group and permissions\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "FilePermissions",
          "package": "hit",
          "source": "src/Data-Git-Types.html#FilePermissions",
          "type": "data"
        },
        "index": {
          "description": "traditional unix permission for owner group and permissions",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "FilePermissions",
          "package": "hit",
          "partial": "File Permissions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:FilePermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGit time is number of seconds since unix epoch with a timezone\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "GitTime",
          "package": "hit",
          "source": "src/Data-Git-Types.html#GitTime",
          "type": "data"
        },
        "index": {
          "description": "Git time is number of seconds since unix epoch with timezone",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "GitTime",
          "package": "hit",
          "partial": "Git Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:GitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "ModePerm",
          "package": "hit",
          "source": "src/Data-Git-Types.html#ModePerm",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "ModePerm",
          "package": "hit",
          "partial": "Mode Perm",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:ModePerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGit object file type\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "ObjectFileType",
          "package": "hit",
          "source": "src/Data-Git-Types.html#ObjectFileType",
          "type": "data"
        },
        "index": {
          "description": "Git object file type",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "ObjectFileType",
          "package": "hit",
          "partial": "Object File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:ObjectFileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of a git object.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "ObjectType",
          "package": "hit",
          "source": "src/Data-Git-Types.html#ObjectType",
          "type": "data"
        },
        "index": {
          "description": "type of git object",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "ObjectType",
          "package": "hit",
          "partial": "Object Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:ObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean author or committer line\n has the format: name \u003ca\u003eemail\u003c/a\u003e time timezone\n FIXME: should be a string, but I don't know if the data is stored\n consistantly in one encoding (UTF8)\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "Person",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Person",
          "type": "data"
        },
        "index": {
          "description": "an author or committer line has the format name email time timezone FIXME should be string but don know if the data is stored consistantly in one encoding UTF8",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Person",
          "package": "hit",
          "partial": "Person",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a signed tag.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "Tag",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "Represent signed tag",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Tag",
          "package": "hit",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a root tree with zero to many tree entries.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "Tree",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Represent root tree with zero to many tree entries",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Tree",
          "package": "hit",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent one entry in the tree\n (permission,file or directory name,blob or tree ref)\n name should maybe a filepath, but not sure about the encoding.\n\u003c/p\u003e",
          "module": "Data.Git.Types",
          "name": "TreeEnt",
          "package": "hit",
          "source": "src/Data-Git-Types.html#TreeEnt",
          "type": "type"
        },
        "index": {
          "description": "represent one entry in the tree permission file or directory name blob or tree ref name should maybe filepath but not sure about the encoding",
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "TreeEnt",
          "package": "hit",
          "partial": "Tree Ent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:TreeEnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "Blob",
          "package": "hit",
          "signature": "Blob",
          "source": "src/Data-Git-Types.html#Blob",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Blob\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Blob\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Blob",
          "package": "hit",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "Commit",
          "package": "hit",
          "signature": "Commit",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Commit\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Commit\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Commit",
          "package": "hit",
          "partial": "Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "CommitExtra",
          "package": "hit",
          "signature": "CommitExtra",
          "source": "src/Data-Git-Types.html#CommitExtra",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:CommitExtra\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:CommitExtra\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "CommitExtra",
          "package": "hit",
          "partial": "Commit Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:CommitExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "DeltaOfs",
          "package": "hit",
          "signature": "DeltaOfs Word64 Delta",
          "source": "src/Data-Git-Types.html#DeltaOfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "DeltaOfs",
          "package": "hit",
          "partial": "Delta Ofs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:DeltaOfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "DeltaRef",
          "package": "hit",
          "signature": "DeltaRef Ref Delta",
          "source": "src/Data-Git-Types.html#DeltaRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "DeltaRef",
          "package": "hit",
          "partial": "Delta Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:DeltaRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "FilePermissions",
          "package": "hit",
          "signature": "FilePermissions",
          "source": "src/Data-Git-Types.html#FilePermissions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FilePermissions\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:FilePermissions\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "FilePermissions",
          "package": "hit",
          "partial": "File Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FilePermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "FileTypeDirectory",
          "package": "hit",
          "signature": "FileTypeDirectory",
          "source": "src/Data-Git-Types.html#ObjectFileType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeDirectory\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:FileTypeDirectory\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "FileTypeDirectory",
          "package": "hit",
          "partial": "File Type Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "FileTypeGitLink",
          "package": "hit",
          "signature": "FileTypeGitLink",
          "source": "src/Data-Git-Types.html#ObjectFileType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeGitLink\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:FileTypeGitLink\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "FileTypeGitLink",
          "package": "hit",
          "partial": "File Type Git Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeGitLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "FileTypeRegularFile",
          "package": "hit",
          "signature": "FileTypeRegularFile",
          "source": "src/Data-Git-Types.html#ObjectFileType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeRegularFile\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:FileTypeRegularFile\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "FileTypeRegularFile",
          "package": "hit",
          "partial": "File Type Regular File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeRegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "FileTypeSymbolicLink",
          "package": "hit",
          "signature": "FileTypeSymbolicLink",
          "source": "src/Data-Git-Types.html#ObjectFileType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeSymbolicLink\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:FileTypeSymbolicLink\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "FileTypeSymbolicLink",
          "package": "hit",
          "partial": "File Type Symbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:FileTypeSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "GitTime",
          "package": "hit",
          "signature": "GitTime Integer Int",
          "source": "src/Data-Git-Types.html#GitTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:GitTime\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:GitTime\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "GitTime",
          "package": "hit",
          "partial": "Git Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:GitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "ModePerm",
          "package": "hit",
          "signature": "ModePerm Word32",
          "source": "src/Data-Git-Types.html#ModePerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:ModePerm\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:ModePerm\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "ModePerm",
          "package": "hit",
          "partial": "Mode Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:ModePerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "Person",
          "package": "hit",
          "signature": "Person",
          "source": "src/Data-Git-Types.html#Person",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Person\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Person\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Person",
          "package": "hit",
          "partial": "Person",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "Tag",
          "package": "hit",
          "signature": "Tag",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Tag\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Tag\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Tag",
          "package": "hit",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "Tree",
          "package": "hit",
          "signature": "Tree",
          "source": "src/Data-Git-Types.html#Tree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Tree\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Tree\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "Tree",
          "package": "hit",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "blobGetContent",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#Blob",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:blobGetContent\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:blobGetContent\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "blobGetContent",
          "package": "hit",
          "partial": "Get Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:blobGetContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitAuthor",
          "package": "hit",
          "signature": "Person",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitAuthor\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitAuthor\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitAuthor",
          "package": "hit",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitCommitter",
          "package": "hit",
          "signature": "Person",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitCommitter\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitCommitter\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitCommitter",
          "package": "hit",
          "partial": "Committer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitCommitter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitEncoding",
          "package": "hit",
          "signature": "Maybe ByteString",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitEncoding\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitEncoding\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitEncoding",
          "package": "hit",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitExtraKey",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#CommitExtra",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtraKey\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitExtraKey\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitExtraKey",
          "package": "hit",
          "partial": "Extra Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtraKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitExtraValue",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#CommitExtra",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtraValue\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitExtraValue\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitExtraValue",
          "package": "hit",
          "partial": "Extra Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtraValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitExtras",
          "package": "hit",
          "signature": "[CommitExtra]",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtras\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitExtras\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitExtras",
          "normalized": "[CommitExtra]",
          "package": "hit",
          "partial": "Extras",
          "signature": "[CommitExtra]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtras"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitMessage",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitMessage\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitMessage\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitMessage",
          "package": "hit",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitParents",
          "package": "hit",
          "signature": "[Ref]",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitParents\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitParents\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitParents",
          "normalized": "[Ref]",
          "package": "hit",
          "partial": "Parents",
          "signature": "[Ref]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "commitTreeish",
          "package": "hit",
          "signature": "Ref",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitTreeish\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitTreeish\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "commitTreeish",
          "package": "hit",
          "partial": "Treeish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitTreeish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "getFiletype",
          "package": "hit",
          "signature": "ModePerm -\u003e ObjectFileType",
          "source": "src/Data-Git-Types.html#getFiletype",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getFiletype\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getFiletype\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "getFiletype",
          "normalized": "ModePerm-\u003eObjectFileType",
          "package": "hit",
          "partial": "Filetype",
          "signature": "ModePerm-\u003eObjectFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getFiletype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "getGroupPerm",
          "package": "hit",
          "signature": "Perm",
          "source": "src/Data-Git-Types.html#FilePermissions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getGroupPerm\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getGroupPerm\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "getGroupPerm",
          "package": "hit",
          "partial": "Group Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getGroupPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "getOtherPerm",
          "package": "hit",
          "signature": "Perm",
          "source": "src/Data-Git-Types.html#FilePermissions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getOtherPerm\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getOtherPerm\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "getOtherPerm",
          "package": "hit",
          "partial": "Other Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getOtherPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "getOwnerPerm",
          "package": "hit",
          "signature": "Perm",
          "source": "src/Data-Git-Types.html#FilePermissions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getOwnerPerm\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getOwnerPerm\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "getOwnerPerm",
          "package": "hit",
          "partial": "Owner Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getOwnerPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "getPermission",
          "package": "hit",
          "signature": "ModePerm -\u003e FilePermissions",
          "source": "src/Data-Git-Types.html#getPermission",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getPermission\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getPermission\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "getPermission",
          "normalized": "ModePerm-\u003eFilePermissions",
          "package": "hit",
          "partial": "Permission",
          "signature": "ModePerm-\u003eFilePermissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:getPermission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "personEmail",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#Person",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personEmail\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:personEmail\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "personEmail",
          "package": "hit",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "personName",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#Person",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personName\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:personName\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "personName",
          "package": "hit",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "personTime",
          "package": "hit",
          "signature": "GitTime",
          "source": "src/Data-Git-Types.html#Person",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personTime\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:personTime\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "personTime",
          "package": "hit",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "tagBlob",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagBlob\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagBlob\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "tagBlob",
          "package": "hit",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "tagName",
          "package": "hit",
          "signature": "Person",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagName\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagName\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "tagName",
          "package": "hit",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "tagObjectType",
          "package": "hit",
          "signature": "ObjectType",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagObjectType\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagObjectType\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "tagObjectType",
          "package": "hit",
          "partial": "Object Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "tagRef",
          "package": "hit",
          "signature": "Ref",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagRef\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagRef\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "tagRef",
          "package": "hit",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "tagS",
          "package": "hit",
          "signature": "ByteString",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagS\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagS\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "tagS",
          "package": "hit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "toPOSIXTime",
          "package": "hit",
          "signature": "GitTime -\u003e POSIXTime",
          "source": "src/Data-Git-Types.html#toPOSIXTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "toPOSIXTime",
          "normalized": "GitTime-\u003ePOSIXTime",
          "package": "hit",
          "partial": "POSIXTime",
          "signature": "GitTime-\u003ePOSIXTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:toPOSIXTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "toUTCTime",
          "package": "hit",
          "signature": "GitTime -\u003e UTCTime",
          "source": "src/Data-Git-Types.html#toUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "toUTCTime",
          "normalized": "GitTime-\u003eUTCTime",
          "package": "hit",
          "partial": "UTCTime",
          "signature": "GitTime-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:toUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git.Types",
          "name": "toZonedTime",
          "package": "hit",
          "signature": "GitTime -\u003e ZonedTime",
          "source": "src/Data-Git-Types.html#toZonedTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "toZonedTime",
          "normalized": "GitTime-\u003eZonedTime",
          "package": "hit",
          "partial": "Zoned Time",
          "signature": "GitTime-\u003eZonedTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:toZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Git.Types\",\"Data.Git\"]",
          "name": "treeGetEnts",
          "package": "hit",
          "signature": "[TreeEnt]",
          "source": "src/Data-Git-Types.html#Tree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:treeGetEnts\",\"http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:treeGetEnts\"]"
        },
        "index": {
          "hierarchy": "Data Git Types",
          "module": "Data.Git.Types",
          "name": "treeGetEnts",
          "normalized": "[TreeEnt]",
          "package": "hit",
          "partial": "Get Ents",
          "signature": "[TreeEnt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:treeGetEnts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git",
          "name": "Git",
          "package": "hit",
          "source": "src/Data-Git.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Git",
          "package": "hit",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a binary blob.\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Blob",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Blob",
          "type": "data"
        },
        "index": {
          "description": "Represent binary blob",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Blob",
          "package": "hit",
          "partial": "Blob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a commit object.\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Commit",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Commit",
          "type": "data"
        },
        "index": {
          "description": "Represent commit object",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Commit",
          "package": "hit",
          "partial": "Commit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git",
          "name": "CommitExtra",
          "package": "hit",
          "source": "src/Data-Git-Types.html#CommitExtra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "CommitExtra",
          "package": "hit",
          "partial": "Commit Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:CommitExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etraditional unix permission for owner, group and permissions\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "FilePermissions",
          "package": "hit",
          "source": "src/Data-Git-Types.html#FilePermissions",
          "type": "data"
        },
        "index": {
          "description": "traditional unix permission for owner group and permissions",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "FilePermissions",
          "package": "hit",
          "partial": "File Permissions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:FilePermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGit time is number of seconds since unix epoch with a timezone\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "GitTime",
          "package": "hit",
          "source": "src/Data-Git-Types.html#GitTime",
          "type": "data"
        },
        "index": {
          "description": "Git time is number of seconds since unix epoch with timezone",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "GitTime",
          "package": "hit",
          "partial": "Git Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:GitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Git",
          "name": "ModePerm",
          "package": "hit",
          "source": "src/Data-Git-Types.html#ModePerm",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "ModePerm",
          "package": "hit",
          "partial": "Mode Perm",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:ModePerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGit object file type\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "ObjectFileType",
          "package": "hit",
          "source": "src/Data-Git-Types.html#ObjectFileType",
          "type": "data"
        },
        "index": {
          "description": "Git object file type",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "ObjectFileType",
          "package": "hit",
          "partial": "Object File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:ObjectFileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean author or committer line\n has the format: name \u003ca\u003eemail\u003c/a\u003e time timezone\n FIXME: should be a string, but I don't know if the data is stored\n consistantly in one encoding (UTF8)\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Person",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Person",
          "type": "data"
        },
        "index": {
          "description": "an author or committer line has the format name email time timezone FIXME should be string but don know if the data is stored consistantly in one encoding UTF8",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Person",
          "package": "hit",
          "partial": "Person",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Person"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a git reference (SHA1)\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Ref",
          "package": "hit",
          "source": "src/Data-Git-Ref.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "represent git reference SHA1",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Ref",
          "package": "hit",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA git revision. this can be many things:\n    * a shorten ref\n    * a ref\n    * a named branch or tag\n  followed by optional modifiers \u003ccode\u003e\u003ca\u003eRevModifier\u003c/a\u003e\u003c/code\u003e that can represent:\n    * parenting\n    * type\n    * date\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Revision",
          "package": "hit",
          "source": "src/Data-Git-Revision.html#Revision",
          "type": "data"
        },
        "index": {
          "description": "git revision this can be many things shorten ref ref named branch or tag followed by optional modifiers RevModifier that can represent parenting type date",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Revision",
          "package": "hit",
          "partial": "Revision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a signed tag.\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Tag",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "Represent signed tag",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Tag",
          "package": "hit",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a root tree with zero to many tree entries.\n\u003c/p\u003e",
          "module": "Data.Git",
          "name": "Tree",
          "package": "hit",
          "source": "src/Data-Git-Types.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Represent root tree with zero to many tree entries",
          "hierarchy": "Data Git",
          "module": "Data.Git",
          "name": "Tree",
          "package": "hit",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Tree"
      }
    }
  ]
]