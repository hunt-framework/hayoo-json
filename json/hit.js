[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#",
      "description": {
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Delta.html",
        "fct-type": "module",
        "title": "Delta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "Delta",
        "normalized": "",
        "package": "hit",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#t:Delta",
      "description": {
        "fct-descr": "\u003cp\u003ea delta is a source size, a destination size and a list of delta cmd\n\u003c/p\u003e",
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Delta.html#Delta",
        "fct-type": "data",
        "title": "Delta"
      },
      "index": {
        "description": "delta is source size destination size and list of delta cmd",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "Delta",
        "normalized": "",
        "package": "hit",
        "partial": "Delta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#t:DeltaCmd",
      "description": {
        "fct-descr": "\u003cp\u003epossible commands in a delta\n\u003c/p\u003e",
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Delta.html#DeltaCmd",
        "fct-type": "data",
        "title": "DeltaCmd"
      },
      "index": {
        "description": "possible commands in delta",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "DeltaCmd",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Cmd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:Delta",
      "description": {
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "Delta Word64 Word64 [DeltaCmd]",
        "fct-source": "src/Data-Git-Delta.html#Delta",
        "fct-type": "function",
        "title": "Delta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "Delta",
        "normalized": "Delta Word Word[DeltaCmd]",
        "package": "hit",
        "partial": "Delta",
        "signature": "Delta Word Word[DeltaCmd]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:DeltaCopy",
      "description": {
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "DeltaCopy ByteString",
        "fct-source": "src/Data-Git-Delta.html#DeltaCmd",
        "fct-type": "function",
        "title": "DeltaCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "DeltaCopy",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:DeltaSrc",
      "description": {
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "DeltaSrc Word64 Word64",
        "fct-source": "src/Data-Git-Delta.html#DeltaCmd",
        "fct-type": "function",
        "title": "DeltaSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "DeltaSrc",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:deltaApply",
      "description": {
        "fct-descr": "\u003cp\u003eapply a delta on a lazy bytestring, returning a new bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Delta -\u003e ByteString",
        "fct-source": "src/Data-Git-Delta.html#deltaApply",
        "fct-type": "function",
        "title": "deltaApply"
      },
      "index": {
        "description": "apply delta on lazy bytestring returning new bytestring",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "deltaApply",
        "normalized": "ByteString-\u003eDelta-\u003eByteString",
        "package": "hit",
        "partial": "Apply",
        "signature": "ByteString-\u003eDelta-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:deltaParse",
      "description": {
        "fct-descr": "\u003cp\u003eparse a delta.\n format is 2 variable sizes, followed by delta cmds. for each cmd:\n * if first byte MSB is set, we copy from source.\n * otherwise, we copy from delta.\n * extensions are not handled.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Delta",
        "fct-source": "src/Data-Git-Delta.html#deltaParse",
        "fct-type": "function",
        "title": "deltaParse"
      },
      "index": {
        "description": "parse delta format is variable sizes followed by delta cmds for each cmd if first byte MSB is set we copy from source otherwise we copy from delta extensions are not handled",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "deltaParse",
        "normalized": "",
        "package": "hit",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Delta.html#v:deltaRead",
      "description": {
        "fct-descr": "\u003cp\u003eread one delta from a lazy bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Delta",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Maybe Delta",
        "fct-source": "src/Data-Git-Delta.html#deltaRead",
        "fct-type": "function",
        "title": "deltaRead"
      },
      "index": {
        "description": "read one delta from lazy bytestring",
        "hierarchy": "Data Git Delta",
        "module": "Data.Git.Delta",
        "name": "deltaRead",
        "normalized": "ByteString-\u003eMaybe Delta",
        "package": "hit",
        "partial": "Read",
        "signature": "ByteString-\u003eMaybe Delta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic Git diff methods.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Diff.html",
        "fct-type": "module",
        "title": "Diff"
      },
      "index": {
        "description": "Basic Git diff methods",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "Diff",
        "normalized": "",
        "package": "hit",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:BlobContent",
      "description": {
        "fct-descr": "\u003cp\u003erepresents a blob's content (i.e., the content of a file at a given\n reference).\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Diff.html#BlobContent",
        "fct-type": "data",
        "title": "BlobContent"
      },
      "index": {
        "description": "represents blob content i.e the content of file at given reference",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "BlobContent",
        "normalized": "",
        "package": "hit",
        "partial": "Blob Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:BlobState",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a blob description at a given state (revision)\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Diff.html#BlobState",
        "fct-type": "data",
        "title": "BlobState"
      },
      "index": {
        "description": "This is blob description at given state revision",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "BlobState",
        "normalized": "",
        "package": "hit",
        "partial": "Blob State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:BlobStateDiff",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a file state between two revisions\n A file (a blob) can be present in the first Tree's revision but not in the\n second one, then it has been deleted. If only in the second Tree's revision,\n then it has been created. If it is in the both, maybe it has been changed.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Diff.html#BlobStateDiff",
        "fct-type": "data",
        "title": "BlobStateDiff"
      },
      "index": {
        "description": "Represents file state between two revisions file blob can be present in the first Tree revision but not in the second one then it has been deleted If only in the second Tree revision then it has been created If it is in the both maybe it has been changed",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "BlobStateDiff",
        "normalized": "",
        "package": "hit",
        "partial": "Blob State Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:HitDiff",
      "description": {
        "fct-descr": "\u003cp\u003eThis represents a diff.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Diff.html#HitDiff",
        "fct-type": "data",
        "title": "HitDiff"
      },
      "index": {
        "description": "This represents diff",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiff",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#t:HitDiffContent",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an example of how you can use Hit to get all of information\n between different revision.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "data",
        "title": "HitDiffContent"
      },
      "index": {
        "description": "This is an example of how you can use Hit to get all of information between different revision",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffContent",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:BinaryContent",
      "description": {
        "fct-descr": "\u003cp\u003eBinary content\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "BinaryContent ByteString",
        "fct-source": "src/Data-Git-Diff.html#BlobContent",
        "fct-type": "function",
        "title": "BinaryContent"
      },
      "index": {
        "description": "Binary content",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "BinaryContent",
        "normalized": "",
        "package": "hit",
        "partial": "Binary Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:BlobState",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "BlobState",
        "fct-source": "src/Data-Git-Diff.html#BlobState",
        "fct-type": "function",
        "title": "BlobState"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "BlobState",
        "normalized": "",
        "package": "hit",
        "partial": "Blob State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:FileContent",
      "description": {
        "fct-descr": "\u003cp\u003eText file's lines\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "FileContent [ByteString]",
        "fct-source": "src/Data-Git-Diff.html#BlobContent",
        "fct-type": "function",
        "title": "FileContent"
      },
      "index": {
        "description": "Text file lines",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "FileContent",
        "normalized": "FileContent[ByteString]",
        "package": "hit",
        "partial": "File Content",
        "signature": "FileContent[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiff",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiff",
        "fct-source": "src/Data-Git-Diff.html#HitDiff",
        "fct-type": "function",
        "title": "HitDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiff",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiffAddition",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiffAddition BlobState",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "function",
        "title": "HitDiffAddition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffAddition",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff Addition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiffBinChange",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiffBinChange",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "function",
        "title": "HitDiffBinChange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffBinChange",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff Bin Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiffChange",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiffChange [Item ByteString]",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "function",
        "title": "HitDiffChange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffChange",
        "normalized": "HitDiffChange[Item ByteString]",
        "package": "hit",
        "partial": "Hit Diff Change",
        "signature": "HitDiffChange[Item ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiffDeletion",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiffDeletion BlobState",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "function",
        "title": "HitDiffDeletion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffDeletion",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff Deletion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiffMode",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiffMode Int Int",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "function",
        "title": "HitDiffMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffMode",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:HitDiffRefs",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "HitDiffRefs Ref Ref",
        "fct-source": "src/Data-Git-Diff.html#HitDiffContent",
        "fct-type": "function",
        "title": "HitDiffRefs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "HitDiffRefs",
        "normalized": "",
        "package": "hit",
        "partial": "Hit Diff Refs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OldAndNew",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "OldAndNew BlobState BlobState",
        "fct-source": "src/Data-Git-Diff.html#BlobStateDiff",
        "fct-type": "function",
        "title": "OldAndNew"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "OldAndNew",
        "normalized": "",
        "package": "hit",
        "partial": "Old And New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OnlyNew",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "OnlyNew BlobState",
        "fct-source": "src/Data-Git-Diff.html#BlobStateDiff",
        "fct-type": "function",
        "title": "OnlyNew"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "OnlyNew",
        "normalized": "",
        "package": "hit",
        "partial": "Only New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:OnlyOld",
      "description": {
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "OnlyOld BlobState",
        "fct-source": "src/Data-Git-Diff.html#BlobStateDiff",
        "fct-type": "function",
        "title": "OnlyOld"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "OnlyOld",
        "normalized": "",
        "package": "hit",
        "partial": "Only Old",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "BlobContent",
        "fct-source": "src/Data-Git-Diff.html#BlobState",
        "fct-type": "function",
        "title": "bsContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "bsContent",
        "normalized": "",
        "package": "hit",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsFilename",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Diff.html#BlobState",
        "fct-type": "function",
        "title": "bsFilename"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "bsFilename",
        "normalized": "",
        "package": "hit",
        "partial": "Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "Int",
        "fct-source": "src/Data-Git-Diff.html#BlobState",
        "fct-type": "function",
        "title": "bsMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "bsMode",
        "normalized": "",
        "package": "hit",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:bsRef",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Diff.html#BlobState",
        "fct-type": "function",
        "title": "bsRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "bsRef",
        "normalized": "",
        "package": "hit",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:defaultDiff",
      "description": {
        "fct-descr": "\u003cp\u003eA default diff helper. It is an example about how you can write your own\n diff helper or you can use it if you want to get all of differences.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "BlobStateDiff -\u003e [HitDiff] -\u003e [HitDiff]",
        "fct-source": "src/Data-Git-Diff.html#defaultDiff",
        "fct-type": "function",
        "title": "defaultDiff"
      },
      "index": {
        "description": "default diff helper It is an example about how you can write your own diff helper or you can use it if you want to get all of differences",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "defaultDiff",
        "normalized": "BlobStateDiff-\u003e[HitDiff]-\u003e[HitDiff]",
        "package": "hit",
        "partial": "Diff",
        "signature": "BlobStateDiff-\u003e[HitDiff]-\u003e[HitDiff]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:getDiff",
      "description": {
        "fct-descr": "\u003cp\u003eA default Diff getter which returns all diff information (Mode, Content\n and Binary).\n\u003c/p\u003e\u003cpre\u003e getDiff = getDiffWith defaultDiff\n\u003c/pre\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "Ref-\u003e Ref-\u003e Git-\u003e IO [HitDiff]",
        "fct-type": "function",
        "title": "getDiff"
      },
      "index": {
        "description": "default Diff getter which returns all diff information Mode Content and Binary getDiff getDiffWith defaultDiff",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "getDiff",
        "normalized": "Ref-\u003eRef-\u003eGit-\u003eIO[HitDiff]",
        "package": "hit",
        "partial": "Diff",
        "signature": "Ref-\u003eRef-\u003eGit-\u003eIO[HitDiff]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:getDiffWith",
      "description": {
        "fct-descr": "\u003cp\u003egenerate a diff list between two revisions with a given diff helper.\n\u003c/p\u003e\u003cp\u003eUseful to extract any kind of information from two different revisions.\n For example you can get the number of deleted files:\n\u003c/p\u003e\u003cpre\u003e getdiffwith f 0 head^ head git\n     where f (OnlyOld _) acc = acc+1\n           f _           acc = acc\n\u003c/pre\u003e\u003cp\u003eOr save the list of new files:\n\u003c/p\u003e\u003cpre\u003e getdiffwith f [] head^ head git\n     where f (OnlyNew bs) acc = (bsFilename bs):acc\n           f _            acc = acc\n\u003c/pre\u003e",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "(BlobStateDiff -\u003e a -\u003e a)-\u003e a-\u003e Ref-\u003e Ref-\u003e Git-\u003e IO a",
        "fct-type": "function",
        "title": "getDiffWith"
      },
      "index": {
        "description": "generate diff list between two revisions with given diff helper Useful to extract any kind of information from two different revisions For example you can get the number of deleted files getdiffwith head head git where OnlyOld acc acc acc acc Or save the list of new files getdiffwith head head git where OnlyNew bs acc bsFilename bs acc acc acc",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "getDiffWith",
        "normalized": "(BlobStateDiff-\u003ea-\u003ea)-\u003ea-\u003eRef-\u003eRef-\u003eGit-\u003eIO a",
        "package": "hit",
        "partial": "Diff With",
        "signature": "(BlobStateDiff-\u003ea-\u003ea)-\u003ea-\u003eRef-\u003eRef-\u003eGit-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:hitDiff",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "[HitDiffContent]",
        "fct-source": "src/Data-Git-Diff.html#HitDiff",
        "fct-type": "function",
        "title": "hitDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "hitDiff",
        "normalized": "[HitDiffContent]",
        "package": "hit",
        "partial": "Diff",
        "signature": "[HitDiffContent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Diff.html#v:hitFilename",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Diff",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Diff.html#HitDiff",
        "fct-type": "function",
        "title": "hitFilename"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Diff",
        "module": "Data.Git.Diff",
        "name": "hitFilename",
        "normalized": "",
        "package": "hit",
        "partial": "Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Named.html",
        "fct-type": "module",
        "title": "Named"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "Named",
        "normalized": "",
        "package": "hit",
        "partial": "Named",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#t:RefContentTy",
      "description": {
        "fct-descr": "\u003cp\u003econtent of a ref file.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Named.html#RefContentTy",
        "fct-type": "data",
        "title": "RefContentTy"
      },
      "index": {
        "description": "content of ref file",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefContentTy",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Content Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#t:RefSpecTy",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a named specifier.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "data",
        "title": "RefSpecTy"
      },
      "index": {
        "description": "Represent named specifier",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefSpecTy",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Spec Ty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefBranch",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefBranch String",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefBranch",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefContentUnknown",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefContentUnknown ByteString",
        "fct-source": "src/Data-Git-Named.html#RefContentTy",
        "fct-type": "function",
        "title": "RefContentUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefContentUnknown",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Content Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefDirect",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefDirect Ref",
        "fct-source": "src/Data-Git-Named.html#RefContentTy",
        "fct-type": "function",
        "title": "RefDirect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefDirect",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Direct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefFetchHead",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefFetchHead",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefFetchHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefFetchHead",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Fetch Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefHead",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefHead",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefHead",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefLink",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefLink RefSpecTy",
        "fct-source": "src/Data-Git-Named.html#RefContentTy",
        "fct-type": "function",
        "title": "RefLink"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefLink",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefOrigHead",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefOrigHead",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefOrigHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefOrigHead",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Orig Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefOther",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefOther String",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefOther",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefPatches",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefPatches String",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefPatches"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefPatches",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Patches",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefRemote",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefRemote String",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefRemote"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefRemote",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Remote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefStash",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefStash",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefStash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefStash",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Stash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:RefTag",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "RefTag String",
        "fct-source": "src/Data-Git-Named.html#RefSpecTy",
        "fct-type": "function",
        "title": "RefTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "RefTag",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:existsRefFile",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e RefSpecTy -\u003e IO Bool",
        "fct-source": "src/Data-Git-Named.html#existsRefFile",
        "fct-type": "function",
        "title": "existsRefFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "existsRefFile",
        "normalized": "FilePath-\u003eRefSpecTy-\u003eIO Bool",
        "package": "hit",
        "partial": "Ref File",
        "signature": "FilePath-\u003eRefSpecTy-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:readPackedRefs",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO [(RefSpecTy, Ref)]",
        "fct-source": "src/Data-Git-Named.html#readPackedRefs",
        "fct-type": "function",
        "title": "readPackedRefs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "readPackedRefs",
        "normalized": "FilePath-\u003eIO[(RefSpecTy,Ref)]",
        "package": "hit",
        "partial": "Packed Refs",
        "signature": "FilePath-\u003eIO[(RefSpecTy,Ref)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:readRefFile",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e RefSpecTy -\u003e IO RefContentTy",
        "fct-source": "src/Data-Git-Named.html#readRefFile",
        "fct-type": "function",
        "title": "readRefFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "readRefFile",
        "normalized": "FilePath-\u003eRefSpecTy-\u003eIO RefContentTy",
        "package": "hit",
        "partial": "Ref File",
        "signature": "FilePath-\u003eRefSpecTy-\u003eIO RefContentTy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Named.html#v:writeRefFile",
      "description": {
        "fct-module": "Data.Git.Named",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e RefSpecTy -\u003e RefContentTy -\u003e IO ()",
        "fct-source": "src/Data-Git-Named.html#writeRefFile",
        "fct-type": "function",
        "title": "writeRefFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Named",
        "module": "Data.Git.Named",
        "name": "writeRefFile",
        "normalized": "FilePath-\u003eRefSpecTy-\u003eRefContentTy-\u003eIO()",
        "package": "hit",
        "partial": "Ref File",
        "signature": "FilePath-\u003eRefSpecTy-\u003eRefContentTy-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#",
      "description": {
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Ref.html",
        "fct-type": "module",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "hit",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#t:Ref",
      "description": {
        "fct-descr": "\u003cp\u003erepresent a git reference (SHA1)\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Ref.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "represent git reference SHA1",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "hit",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#t:RefInvalid",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid Reference exception raised when\n using something that is not a ref as a ref.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Ref.html#RefInvalid",
        "fct-type": "data",
        "title": "RefInvalid"
      },
      "index": {
        "description": "Invalid Reference exception raised when using something that is not ref as ref",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "RefInvalid",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#t:RefNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eReference wasn't found\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Ref.html#RefNotFound",
        "fct-type": "data",
        "title": "RefNotFound"
      },
      "index": {
        "description": "Reference wasn found",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "RefNotFound",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:RefInvalid",
      "description": {
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "RefInvalid ByteString",
        "fct-source": "src/Data-Git-Ref.html#RefInvalid",
        "fct-type": "function",
        "title": "RefInvalid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "RefInvalid",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:RefNotFound",
      "description": {
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "RefNotFound Ref",
        "fct-source": "src/Data-Git-Ref.html#RefNotFound",
        "fct-type": "function",
        "title": "RefNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "RefNotFound",
        "normalized": "",
        "package": "hit",
        "partial": "Ref Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:cmpPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ecompare prefix\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "String -\u003e Ref -\u003e Ordering",
        "fct-source": "src/Data-Git-Ref.html#cmpPrefix",
        "fct-type": "function",
        "title": "cmpPrefix"
      },
      "index": {
        "description": "compare prefix",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "cmpPrefix",
        "normalized": "String-\u003eRef-\u003eOrdering",
        "package": "hit",
        "partial": "Prefix",
        "signature": "String-\u003eRef-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:fromBinary",
      "description": {
        "fct-descr": "\u003cp\u003etransform a bytestring that represent a binary bytestring\n and returns a ref.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Ref",
        "fct-source": "src/Data-Git-Ref.html#fromBinary",
        "fct-type": "function",
        "title": "fromBinary"
      },
      "index": {
        "description": "transform bytestring that represent binary bytestring and returns ref",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "fromBinary",
        "normalized": "ByteString-\u003eRef",
        "package": "hit",
        "partial": "Binary",
        "signature": "ByteString-\u003eRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:fromHex",
      "description": {
        "fct-descr": "\u003cp\u003etake a hexadecimal bytestring that represent a reference\n and turn into a ref\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Ref",
        "fct-source": "src/Data-Git-Ref.html#fromHex",
        "fct-type": "function",
        "title": "fromHex"
      },
      "index": {
        "description": "take hexadecimal bytestring that represent reference and turn into ref",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "fromHex",
        "normalized": "ByteString-\u003eRef",
        "package": "hit",
        "partial": "Hex",
        "signature": "ByteString-\u003eRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:fromHexString",
      "description": {
        "fct-descr": "\u003cp\u003etake a hexadecimal string that represent a reference\n and turn into a ref\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "String -\u003e Ref",
        "fct-source": "src/Data-Git-Ref.html#fromHexString",
        "fct-type": "function",
        "title": "fromHexString"
      },
      "index": {
        "description": "take hexadecimal string that represent reference and turn into ref",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "fromHexString",
        "normalized": "String-\u003eRef",
        "package": "hit",
        "partial": "Hex String",
        "signature": "String-\u003eRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003ehash a bytestring into a reference\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Ref",
        "fct-source": "src/Data-Git-Ref.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "hash bytestring into reference",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "hash",
        "normalized": "ByteString-\u003eRef",
        "package": "hit",
        "partial": "",
        "signature": "ByteString-\u003eRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:hashLBS",
      "description": {
        "fct-descr": "\u003cp\u003ehash a lazy bytestring into a reference\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Ref",
        "fct-source": "src/Data-Git-Ref.html#hashLBS",
        "fct-type": "function",
        "title": "hashLBS"
      },
      "index": {
        "description": "hash lazy bytestring into reference",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "hashLBS",
        "normalized": "ByteString-\u003eRef",
        "package": "hit",
        "partial": "LBS",
        "signature": "ByteString-\u003eRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:isHex",
      "description": {
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-source": "src/Data-Git-Ref.html#isHex",
        "fct-type": "function",
        "title": "isHex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "isHex",
        "normalized": "ByteString-\u003eBool",
        "package": "hit",
        "partial": "Hex",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:isHexString",
      "description": {
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "[Char] -\u003e Bool",
        "fct-source": "src/Data-Git-Ref.html#isHexString",
        "fct-type": "function",
        "title": "isHexString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "isHexString",
        "normalized": "[Char]-\u003eBool",
        "package": "hit",
        "partial": "Hex String",
        "signature": "[Char]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:refPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the prefix (leading byte) of this reference\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "Ref -\u003e Int",
        "fct-source": "src/Data-Git-Ref.html#refPrefix",
        "fct-type": "function",
        "title": "refPrefix"
      },
      "index": {
        "description": "returns the prefix leading byte of this reference",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "refPrefix",
        "normalized": "Ref-\u003eInt",
        "package": "hit",
        "partial": "Prefix",
        "signature": "Ref-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toBinary",
      "description": {
        "fct-descr": "\u003cp\u003eturn a reference into a binary bytestring\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "Ref -\u003e ByteString",
        "fct-source": "src/Data-Git-Ref.html#toBinary",
        "fct-type": "function",
        "title": "toBinary"
      },
      "index": {
        "description": "turn reference into binary bytestring",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "toBinary",
        "normalized": "Ref-\u003eByteString",
        "package": "hit",
        "partial": "Binary",
        "signature": "Ref-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toFilePathParts",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the splitted format \u003ca\u003eprefix/suffix\u003c/a\u003e for addressing the loose object database\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "Ref -\u003e (String, String)",
        "fct-source": "src/Data-Git-Ref.html#toFilePathParts",
        "fct-type": "function",
        "title": "toFilePathParts"
      },
      "index": {
        "description": "returns the splitted format prefix suffix for addressing the loose object database",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "toFilePathParts",
        "normalized": "Ref-\u003e(String,String)",
        "package": "hit",
        "partial": "File Path Parts",
        "signature": "Ref-\u003e(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toHex",
      "description": {
        "fct-descr": "\u003cp\u003etransform a ref into an hexadecimal bytestring\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "Ref -\u003e ByteString",
        "fct-source": "src/Data-Git-Ref.html#toHex",
        "fct-type": "function",
        "title": "toHex"
      },
      "index": {
        "description": "transform ref into an hexadecimal bytestring",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "toHex",
        "normalized": "Ref-\u003eByteString",
        "package": "hit",
        "partial": "Hex",
        "signature": "Ref-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Ref.html#v:toHexString",
      "description": {
        "fct-descr": "\u003cp\u003etransform a ref into an hexadecimal string\n\u003c/p\u003e",
        "fct-module": "Data.Git.Ref",
        "fct-package": "hit",
        "fct-signature": "Ref -\u003e String",
        "fct-source": "src/Data-Git-Ref.html#toHexString",
        "fct-type": "function",
        "title": "toHexString"
      },
      "index": {
        "description": "transform ref into an hexadecimal string",
        "hierarchy": "Data Git Ref",
        "module": "Data.Git.Ref",
        "name": "toHexString",
        "normalized": "Ref-\u003eString",
        "package": "hit",
        "partial": "Hex String",
        "signature": "Ref-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#",
      "description": {
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Repository.html",
        "fct-type": "module",
        "title": "Repository"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "Repository",
        "normalized": "",
        "package": "hit",
        "partial": "Repository",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#t:Git",
      "description": {
        "fct-descr": "\u003cp\u003erepresent a git repo, with possibly already opened filereaders\n for indexes and packs\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage.html#Git",
        "fct-type": "data",
        "title": "Git"
      },
      "index": {
        "description": "represent git repo with possibly already opened filereaders for indexes and packs",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "Git",
        "normalized": "",
        "package": "hit",
        "partial": "Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#t:HTree",
      "description": {
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "type",
        "fct-source": "src/Data-Git-Repository.html#HTree",
        "fct-type": "type",
        "title": "HTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "HTree",
        "normalized": "",
        "package": "hit",
        "partial": "HTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#t:HTreeEnt",
      "description": {
        "fct-descr": "\u003cp\u003ehierarchy tree, either a reference to a blob (file) or a tree (directory).\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Repository.html#HTreeEnt",
        "fct-type": "data",
        "title": "HTreeEnt"
      },
      "index": {
        "description": "hierarchy tree either reference to blob file or tree directory",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "HTreeEnt",
        "normalized": "",
        "package": "hit",
        "partial": "HTree Ent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:TreeDir",
      "description": {
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "TreeDir Ref HTree",
        "fct-source": "src/Data-Git-Repository.html#HTreeEnt",
        "fct-type": "function",
        "title": "TreeDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "TreeDir",
        "normalized": "",
        "package": "hit",
        "partial": "Tree Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:TreeFile",
      "description": {
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "TreeFile Ref",
        "fct-source": "src/Data-Git-Repository.html#HTreeEnt",
        "fct-type": "function",
        "title": "TreeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "TreeFile",
        "normalized": "",
        "package": "hit",
        "partial": "Tree File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:buildHTree",
      "description": {
        "fct-descr": "\u003cp\u003ebuild a hierarchy tree from a tree object\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Tree -\u003e IO HTree",
        "fct-source": "src/Data-Git-Repository.html#buildHTree",
        "fct-type": "function",
        "title": "buildHTree"
      },
      "index": {
        "description": "build hierarchy tree from tree object",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "buildHTree",
        "normalized": "Git-\u003eTree-\u003eIO HTree",
        "package": "hit",
        "partial": "HTree",
        "signature": "Git-\u003eTree-\u003eIO HTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getCommit",
      "description": {
        "fct-descr": "\u003cp\u003eget a specified commit but raises an exception if doesn't exists or type is not appropriate\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO Commit",
        "fct-source": "src/Data-Git-Repository.html#getCommit",
        "fct-type": "function",
        "title": "getCommit"
      },
      "index": {
        "description": "get specified commit but raises an exception if doesn exists or type is not appropriate",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "getCommit",
        "normalized": "Git-\u003eRef-\u003eIO Commit",
        "package": "hit",
        "partial": "Commit",
        "signature": "Git-\u003eRef-\u003eIO Commit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getCommitMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eget a specified commit\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO (Maybe Commit)",
        "fct-source": "src/Data-Git-Repository.html#getCommitMaybe",
        "fct-type": "function",
        "title": "getCommitMaybe"
      },
      "index": {
        "description": "get specified commit",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "getCommitMaybe",
        "normalized": "Git-\u003eRef-\u003eIO(Maybe Commit)",
        "package": "hit",
        "partial": "Commit Maybe",
        "signature": "Git-\u003eRef-\u003eIO(Maybe Commit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getTree",
      "description": {
        "fct-descr": "\u003cp\u003eget a specified tree but raise\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO Tree",
        "fct-source": "src/Data-Git-Repository.html#getTree",
        "fct-type": "function",
        "title": "getTree"
      },
      "index": {
        "description": "get specified tree but raise",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "getTree",
        "normalized": "Git-\u003eRef-\u003eIO Tree",
        "package": "hit",
        "partial": "Tree",
        "signature": "Git-\u003eRef-\u003eIO Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:getTreeMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eget a specified tree\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO (Maybe Tree)",
        "fct-source": "src/Data-Git-Repository.html#getTreeMaybe",
        "fct-type": "function",
        "title": "getTreeMaybe"
      },
      "index": {
        "description": "get specified tree",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "getTreeMaybe",
        "normalized": "Git-\u003eRef-\u003eIO(Maybe Tree)",
        "package": "hit",
        "partial": "Tree Maybe",
        "signature": "Git-\u003eRef-\u003eIO(Maybe Tree)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:initRepo",
      "description": {
        "fct-descr": "\u003cp\u003einitialize a new repository at a specific location.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage.html#initRepo",
        "fct-type": "function",
        "title": "initRepo"
      },
      "index": {
        "description": "initialize new repository at specific location",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "initRepo",
        "normalized": "FilePath-\u003eIO()",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:isRepo",
      "description": {
        "fct-descr": "\u003cp\u003ebasic checks to see if a specific path looks like a git repo.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/Data-Git-Storage.html#isRepo",
        "fct-type": "function",
        "title": "isRepo"
      },
      "index": {
        "description": "basic checks to see if specific path looks like git repo",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "isRepo",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolvePath",
      "description": {
        "fct-descr": "\u003cp\u003eresolve the ref (tree or blob) related to a path at a specific commit ref\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e Ref-\u003e [ByteString]-\u003e IO (Maybe Ref)",
        "fct-type": "function",
        "title": "resolvePath"
      },
      "index": {
        "description": "resolve the ref tree or blob related to path at specific commit ref",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "resolvePath",
        "normalized": "Git-\u003eRef-\u003e[ByteString]-\u003eIO(Maybe Ref)",
        "package": "hit",
        "partial": "Path",
        "signature": "Git-\u003eRef-\u003e[ByteString]-\u003eIO(Maybe Ref)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolveRevision",
      "description": {
        "fct-descr": "\u003cp\u003etry to resolve a string to a specific commit ref\n for example: HEAD, HEAD^, master~3, shortRef\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Revision -\u003e IO (Maybe Ref)",
        "fct-source": "src/Data-Git-Repository.html#resolveRevision",
        "fct-type": "function",
        "title": "resolveRevision"
      },
      "index": {
        "description": "try to resolve string to specific commit ref for example HEAD HEAD master shortRef",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "resolveRevision",
        "normalized": "Git-\u003eRevision-\u003eIO(Maybe Ref)",
        "package": "hit",
        "partial": "Revision",
        "signature": "Git-\u003eRevision-\u003eIO(Maybe Ref)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:resolveTreeish",
      "description": {
        "fct-descr": "\u003cp\u003ereturns a tree from a ref that might be either a commit, a tree or a tag.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO (Maybe Tree)",
        "fct-source": "src/Data-Git-Repository.html#resolveTreeish",
        "fct-type": "function",
        "title": "resolveTreeish"
      },
      "index": {
        "description": "returns tree from ref that might be either commit tree or tag",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "resolveTreeish",
        "normalized": "Git-\u003eRef-\u003eIO(Maybe Tree)",
        "package": "hit",
        "partial": "Treeish",
        "signature": "Git-\u003eRef-\u003eIO(Maybe Tree)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Repository.html#v:rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite a set of commits from a revision and returns the new ref.\n\u003c/p\u003e\u003cp\u003eIf during revision traversal (diving) there's a commit with zero or multiple\n parents then the traversal will stop regardless of the amount of parent requested.\n\u003c/p\u003e\u003cp\u003ecalling \u003ca\u003erewrite f 2 (revisionOf d)\u003c/a\u003e on the following tree:\n\u003c/p\u003e\u003cp\u003ea \u003c-- b \u003c-- c \u003c-- d\n\u003c/p\u003e\u003cp\u003eresult in the following tree after mapping with f:\n\u003c/p\u003e\u003cp\u003ea \u003c-- f(b) \u003c-- f(c) \u003c-- f(d)\n\u003c/p\u003e",
        "fct-module": "Data.Git.Repository",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e (Commit -\u003e IO Commit)-\u003e Revision-\u003e Int-\u003e IO Ref",
        "fct-type": "function",
        "title": "rewrite"
      },
      "index": {
        "description": "Rewrite set of commits from revision and returns the new ref If during revision traversal diving there commit with zero or multiple parents then the traversal will stop regardless of the amount of parent requested calling rewrite revisionOf on the following tree result in the following tree after mapping with",
        "hierarchy": "Data Git Repository",
        "module": "Data.Git.Repository",
        "name": "rewrite",
        "normalized": "Git-\u003e(Commit-\u003eIO Commit)-\u003eRevision-\u003eInt-\u003eIO Ref",
        "package": "hit",
        "partial": "",
        "signature": "Git-\u003e(Commit-\u003eIO Commit)-\u003eRevision-\u003eInt-\u003eIO Ref"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Revision.html",
        "fct-type": "module",
        "title": "Revision"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "Revision",
        "normalized": "",
        "package": "hit",
        "partial": "Revision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#t:RevModifier",
      "description": {
        "fct-descr": "\u003cp\u003eA modifier to a revision, which is\n a function apply of a revision\n\u003c/p\u003e",
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Revision.html#RevModifier",
        "fct-type": "data",
        "title": "RevModifier"
      },
      "index": {
        "description": "modifier to revision which is function apply of revision",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevModifier",
        "normalized": "",
        "package": "hit",
        "partial": "Rev Modifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#t:Revision",
      "description": {
        "fct-descr": "\u003cp\u003eA git revision. this can be many things:\n    * a shorten ref\n    * a ref\n    * a named branch or tag\n  followed by optional modifiers \u003ccode\u003e\u003ca\u003eRevModifier\u003c/a\u003e\u003c/code\u003e that can represent:\n    * parenting\n    * type\n    * date\n\u003c/p\u003e",
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Revision.html#Revision",
        "fct-type": "data",
        "title": "Revision"
      },
      "index": {
        "description": "git revision this can be many things shorten ref ref named branch or tag followed by optional modifiers RevModifier that can represent parenting type date",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "Revision",
        "normalized": "",
        "package": "hit",
        "partial": "Revision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#t:RevisionNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eException when a revision cannot be resolved to a reference\n\u003c/p\u003e",
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Revision.html#RevisionNotFound",
        "fct-type": "data",
        "title": "RevisionNotFound"
      },
      "index": {
        "description": "Exception when revision cannot be resolved to reference",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevisionNotFound",
        "normalized": "",
        "package": "hit",
        "partial": "Revision Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModAtDate",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "RevModAtDate String",
        "fct-source": "src/Data-Git-Revision.html#RevModifier",
        "fct-type": "function",
        "title": "RevModAtDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevModAtDate",
        "normalized": "",
        "package": "hit",
        "partial": "Rev Mod At Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModAtN",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "RevModAtN Int",
        "fct-source": "src/Data-Git-Revision.html#RevModifier",
        "fct-type": "function",
        "title": "RevModAtN"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevModAtN",
        "normalized": "",
        "package": "hit",
        "partial": "Rev Mod At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModAtType",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "RevModAtType String",
        "fct-source": "src/Data-Git-Revision.html#RevModifier",
        "fct-type": "function",
        "title": "RevModAtType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevModAtType",
        "normalized": "",
        "package": "hit",
        "partial": "Rev Mod At Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModParent",
      "description": {
        "fct-descr": "\u003cp\u003eparent accessor ^\u003ca\u003en\u003c/a\u003e and ^\n\u003c/p\u003e",
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "RevModParent Int",
        "fct-source": "src/Data-Git-Revision.html#RevModifier",
        "fct-type": "function",
        "title": "RevModParent"
      },
      "index": {
        "description": "parent accessor and",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevModParent",
        "normalized": "",
        "package": "hit",
        "partial": "Rev Mod Parent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevModParentFirstN",
      "description": {
        "fct-descr": "\u003cp\u003eparent accessor ~\u003ca\u003en\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "RevModParentFirstN Int",
        "fct-source": "src/Data-Git-Revision.html#RevModifier",
        "fct-type": "function",
        "title": "RevModParentFirstN"
      },
      "index": {
        "description": "parent accessor",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevModParentFirstN",
        "normalized": "",
        "package": "hit",
        "partial": "Rev Mod Parent First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:Revision",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "Revision String [RevModifier]",
        "fct-source": "src/Data-Git-Revision.html#Revision",
        "fct-type": "function",
        "title": "Revision"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "Revision",
        "normalized": "Revision String[RevModifier]",
        "package": "hit",
        "partial": "Revision",
        "signature": "Revision String[RevModifier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:RevisionNotFound",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "RevisionNotFound Revision",
        "fct-source": "src/Data-Git-Revision.html#RevisionNotFound",
        "fct-type": "function",
        "title": "RevisionNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "RevisionNotFound",
        "normalized": "",
        "package": "hit",
        "partial": "Revision Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Revision.html#v:fromString",
      "description": {
        "fct-module": "Data.Git.Revision",
        "fct-package": "hit",
        "fct-signature": "String -\u003e a",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Revision",
        "module": "Data.Git.Revision",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "hit",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#",
      "description": {
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Storage-Loose.html",
        "fct-type": "module",
        "title": "Loose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "Loose",
        "normalized": "",
        "package": "hit",
        "partial": "Loose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#t:Zipped",
      "description": {
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Git-Internal.html#Zipped",
        "fct-type": "newtype",
        "title": "Zipped"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "Zipped",
        "normalized": "",
        "package": "hit",
        "partial": "Zipped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:Zipped",
      "description": {
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "Zipped",
        "fct-source": "src/Data-Git-Internal.html#Zipped",
        "fct-type": "function",
        "title": "Zipped"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "Zipped",
        "normalized": "",
        "package": "hit",
        "partial": "Zipped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:getZippedData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Internal.html#Zipped",
        "fct-type": "function",
        "title": "getZippedData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "getZippedData",
        "normalized": "",
        "package": "hit",
        "partial": "Zipped Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseEnumeratePrefixes",
      "description": {
        "fct-descr": "\u003cp\u003eenumarate all prefixes available in the object store.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO [[Char]]",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseEnumeratePrefixes",
        "fct-type": "function",
        "title": "looseEnumeratePrefixes"
      },
      "index": {
        "description": "enumarate all prefixes available in the object store",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseEnumeratePrefixes",
        "normalized": "FilePath-\u003eIO[[Char]]",
        "package": "hit",
        "partial": "Enumerate Prefixes",
        "signature": "FilePath-\u003eIO[[Char]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseEnumerateWithPrefix",
      "description": {
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e String -\u003e IO [Ref]",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseEnumerateWithPrefix",
        "fct-type": "function",
        "title": "looseEnumerateWithPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseEnumerateWithPrefix",
        "normalized": "FilePath-\u003eString-\u003eIO[Ref]",
        "package": "hit",
        "partial": "Enumerate With Prefix",
        "signature": "FilePath-\u003eString-\u003eIO[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseEnumerateWithPrefixFilter",
      "description": {
        "fct-descr": "\u003cp\u003eenumerate all references available with a specific prefix.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e String -\u003e (Ref -\u003e Bool) -\u003e IO [Ref]",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseEnumerateWithPrefixFilter",
        "fct-type": "function",
        "title": "looseEnumerateWithPrefixFilter"
      },
      "index": {
        "description": "enumerate all references available with specific prefix",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseEnumerateWithPrefixFilter",
        "normalized": "FilePath-\u003eString-\u003e(Ref-\u003eBool)-\u003eIO[Ref]",
        "package": "hit",
        "partial": "Enumerate With Prefix Filter",
        "signature": "FilePath-\u003eString-\u003e(Ref-\u003eBool)-\u003eIO[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseExists",
      "description": {
        "fct-descr": "\u003cp\u003echeck if a specific ref exists as loose object\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO Bool",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseExists",
        "fct-type": "function",
        "title": "looseExists"
      },
      "index": {
        "description": "check if specific ref exists as loose object",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseExists",
        "normalized": "FilePath-\u003eRef-\u003eIO Bool",
        "package": "hit",
        "partial": "Exists",
        "signature": "FilePath-\u003eRef-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseMarshall",
      "description": {
        "fct-descr": "\u003cp\u003emarshall as lazy bytestring an object except deltas.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e ByteString",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseMarshall",
        "fct-type": "function",
        "title": "looseMarshall"
      },
      "index": {
        "description": "marshall as lazy bytestring an object except deltas",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseMarshall",
        "normalized": "Object-\u003eByteString",
        "package": "hit",
        "partial": "Marshall",
        "signature": "Object-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseRead",
      "description": {
        "fct-descr": "\u003cp\u003eread a specific ref from a loose object and returns an object\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO Object",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseRead",
        "fct-type": "function",
        "title": "looseRead"
      },
      "index": {
        "description": "read specific ref from loose object and returns an object",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseRead",
        "normalized": "FilePath-\u003eRef-\u003eIO Object",
        "package": "hit",
        "partial": "Read",
        "signature": "FilePath-\u003eRef-\u003eIO Object"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseReadHeader",
      "description": {
        "fct-descr": "\u003cp\u003eread only the header of a loose object.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO (ObjectType, Word64, Maybe a)",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseReadHeader",
        "fct-type": "function",
        "title": "looseReadHeader"
      },
      "index": {
        "description": "read only the header of loose object",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseReadHeader",
        "normalized": "FilePath-\u003eRef-\u003eIO(ObjectType,Word,Maybe a)",
        "package": "hit",
        "partial": "Read Header",
        "signature": "FilePath-\u003eRef-\u003eIO(ObjectType,Word,Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseReadRaw",
      "description": {
        "fct-descr": "\u003cp\u003eread a specific ref from a loose object and returns an header and data.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO (ObjectHeader, ObjectData)",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseReadRaw",
        "fct-type": "function",
        "title": "looseReadRaw"
      },
      "index": {
        "description": "read specific ref from loose object and returns an header and data",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseReadRaw",
        "normalized": "FilePath-\u003eRef-\u003eIO(ObjectHeader,ObjectData)",
        "package": "hit",
        "partial": "Read Raw",
        "signature": "FilePath-\u003eRef-\u003eIO(ObjectHeader,ObjectData)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshall",
      "description": {
        "fct-descr": "\u003cp\u003eunmarshall an object (with header) from a bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e Object",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseUnmarshall",
        "fct-type": "function",
        "title": "looseUnmarshall"
      },
      "index": {
        "description": "unmarshall an object with header from bytestring",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseUnmarshall",
        "normalized": "ByteString-\u003eObject",
        "package": "hit",
        "partial": "Unmarshall",
        "signature": "ByteString-\u003eObject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshallRaw",
      "description": {
        "fct-descr": "\u003cp\u003eunmarshall an object as (header, data) tuple from a bytestring\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "ByteString -\u003e (ObjectHeader, ObjectData)",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseUnmarshallRaw",
        "fct-type": "function",
        "title": "looseUnmarshallRaw"
      },
      "index": {
        "description": "unmarshall an object as header data tuple from bytestring",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseUnmarshallRaw",
        "normalized": "ByteString-\u003e(ObjectHeader,ObjectData)",
        "package": "hit",
        "partial": "Unmarshall Raw",
        "signature": "ByteString-\u003e(ObjectHeader,ObjectData)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshallZipped",
      "description": {
        "fct-descr": "\u003cp\u003eunmarshall an object (with header) from a zipped stream.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "Zipped -\u003e Object",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseUnmarshallZipped",
        "fct-type": "function",
        "title": "looseUnmarshallZipped"
      },
      "index": {
        "description": "unmarshall an object with header from zipped stream",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseUnmarshallZipped",
        "normalized": "Zipped-\u003eObject",
        "package": "hit",
        "partial": "Unmarshall Zipped",
        "signature": "Zipped-\u003eObject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseUnmarshallZippedRaw",
      "description": {
        "fct-descr": "\u003cp\u003eunmarshall an object as (header, data) tuple from a zipped stream\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "Zipped -\u003e (ObjectHeader, ObjectData)",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseUnmarshallZippedRaw",
        "fct-type": "function",
        "title": "looseUnmarshallZippedRaw"
      },
      "index": {
        "description": "unmarshall an object as header data tuple from zipped stream",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseUnmarshallZippedRaw",
        "normalized": "Zipped-\u003e(ObjectHeader,ObjectData)",
        "package": "hit",
        "partial": "Unmarshall Zipped Raw",
        "signature": "Zipped-\u003e(ObjectHeader,ObjectData)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseWrite",
      "description": {
        "fct-descr": "\u003cp\u003ewrite an object to disk as a loose reference.\n use looseWriteBlobFromFile for efficiently writing blobs when being commited from a file.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Object -\u003e IO Ref",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseWrite",
        "fct-type": "function",
        "title": "looseWrite"
      },
      "index": {
        "description": "write an object to disk as loose reference use looseWriteBlobFromFile for efficiently writing blobs when being commited from file",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseWrite",
        "normalized": "FilePath-\u003eObject-\u003eIO Ref",
        "package": "hit",
        "partial": "Write",
        "signature": "FilePath-\u003eObject-\u003eIO Ref"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Loose.html#v:looseWriteBlobFromFile",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a new blob on a temporary location and on success move it to\n the object store with its digest name.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Loose",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO Ref",
        "fct-source": "src/Data-Git-Storage-Loose.html#looseWriteBlobFromFile",
        "fct-type": "function",
        "title": "looseWriteBlobFromFile"
      },
      "index": {
        "description": "create new blob on temporary location and on success move it to the object store with its digest name",
        "hierarchy": "Data Git Storage Loose",
        "module": "Data.Git.Storage.Loose",
        "name": "looseWriteBlobFromFile",
        "normalized": "FilePath-\u003eFilePath-\u003eIO Ref",
        "package": "hit",
        "partial": "Write Blob From File",
        "signature": "FilePath-\u003eFilePath-\u003eIO Ref"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Storage-Object.html",
        "fct-type": "module",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "Object",
        "normalized": "",
        "package": "hit",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003edescribe a git object, that could of 6 differents types:\n tree, blob, commit, tag and deltas (offset or ref).\n the deltas one are only available in packs.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "data",
        "title": "Object"
      },
      "index": {
        "description": "describe git object that could of differents types tree blob commit tag and deltas offset or ref the deltas one are only available in packs",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "Object",
        "normalized": "",
        "package": "hit",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectData",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "type",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectData",
        "fct-type": "type",
        "title": "ObjectData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectData",
        "normalized": "",
        "package": "hit",
        "partial": "Object Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectHeader",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "type",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectHeader",
        "fct-type": "type",
        "title": "ObjectHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectHeader",
        "normalized": "",
        "package": "hit",
        "partial": "Object Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRaw objects infos have an header (type, size, ptr),\n the data and a pointers chains to parents for resolved objects.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectInfo",
        "fct-type": "data",
        "title": "ObjectInfo"
      },
      "index": {
        "description": "Raw objects infos have an header type size ptr the data and pointers chains to parents for resolved objects",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectInfo",
        "normalized": "",
        "package": "hit",
        "partial": "Object Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectLocation",
      "description": {
        "fct-descr": "\u003cp\u003elocation of an object in the database\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectLocation",
        "fct-type": "data",
        "title": "ObjectLocation"
      },
      "index": {
        "description": "location of an object in the database",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectLocation",
        "normalized": "",
        "package": "hit",
        "partial": "Object Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectPtr",
      "description": {
        "fct-descr": "\u003cp\u003eDelta objects points to some others objects in the database\n either as offset in the pack or as a direct reference.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectPtr",
        "fct-type": "data",
        "title": "ObjectPtr"
      },
      "index": {
        "description": "Delta objects points to some others objects in the database either as offset in the pack or as direct reference",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectPtr",
        "normalized": "",
        "package": "hit",
        "partial": "Object Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:ObjectType",
      "description": {
        "fct-descr": "\u003cp\u003etype of a git object.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "data",
        "title": "ObjectType"
      },
      "index": {
        "description": "type of git object",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectType",
        "normalized": "",
        "package": "hit",
        "partial": "Object Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#t:Objectable",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "class",
        "fct-source": "src/Data-Git-Storage-Object.html#Objectable",
        "fct-type": "class",
        "title": "Objectable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "Objectable",
        "normalized": "",
        "package": "hit",
        "partial": "Objectable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:Loose",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Loose Ref",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectLocation",
        "fct-type": "function",
        "title": "Loose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "Loose",
        "normalized": "",
        "package": "hit",
        "partial": "Loose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:NotFound",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "NotFound",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectLocation",
        "fct-type": "function",
        "title": "NotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "NotFound",
        "normalized": "",
        "package": "hit",
        "partial": "Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjBlob",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjBlob Blob",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "function",
        "title": "ObjBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjBlob",
        "normalized": "",
        "package": "hit",
        "partial": "Obj Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjCommit",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjCommit Commit",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "function",
        "title": "ObjCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjCommit",
        "normalized": "",
        "package": "hit",
        "partial": "Obj Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjDeltaOfs",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjDeltaOfs DeltaOfs",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "function",
        "title": "ObjDeltaOfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjDeltaOfs",
        "normalized": "",
        "package": "hit",
        "partial": "Obj Delta Ofs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjDeltaRef",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjDeltaRef DeltaRef",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "function",
        "title": "ObjDeltaRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjDeltaRef",
        "normalized": "",
        "package": "hit",
        "partial": "Obj Delta Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjTag",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjTag Tag",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "function",
        "title": "ObjTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjTag",
        "normalized": "",
        "package": "hit",
        "partial": "Obj Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjTree",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjTree Tree",
        "fct-source": "src/Data-Git-Storage-Object.html#Object",
        "fct-type": "function",
        "title": "ObjTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjTree",
        "normalized": "",
        "package": "hit",
        "partial": "Obj Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:ObjectInfo",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectInfo",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectInfo",
        "fct-type": "function",
        "title": "ObjectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "ObjectInfo",
        "normalized": "",
        "package": "hit",
        "partial": "Object Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:Packed",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Packed Ref Word64",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectLocation",
        "fct-type": "function",
        "title": "Packed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "Packed",
        "normalized": "",
        "package": "hit",
        "partial": "Packed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:PtrOfs",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "PtrOfs Word64",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectPtr",
        "fct-type": "function",
        "title": "PtrOfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "PtrOfs",
        "normalized": "",
        "package": "hit",
        "partial": "Ptr Ofs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:PtrRef",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "PtrRef Ref",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectPtr",
        "fct-type": "function",
        "title": "PtrRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "PtrRef",
        "normalized": "",
        "package": "hit",
        "partial": "Ptr Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeBlob",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "TypeBlob",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "TypeBlob",
        "normalized": "",
        "package": "hit",
        "partial": "Type Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeCommit",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "TypeCommit",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "TypeCommit",
        "normalized": "",
        "package": "hit",
        "partial": "Type Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeDeltaOff",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "TypeDeltaOff",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeDeltaOff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "TypeDeltaOff",
        "normalized": "",
        "package": "hit",
        "partial": "Type Delta Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeDeltaRef",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "TypeDeltaRef",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeDeltaRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "TypeDeltaRef",
        "normalized": "",
        "package": "hit",
        "partial": "Type Delta Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeTag",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "TypeTag",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "TypeTag",
        "normalized": "",
        "package": "hit",
        "partial": "Type Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:TypeTree",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "TypeTree",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "TypeTree",
        "normalized": "",
        "package": "hit",
        "partial": "Type Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:blobParse",
      "description": {
        "fct-descr": "\u003cp\u003eparse a blob content\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Blob",
        "fct-source": "src/Data-Git-Storage-Object.html#blobParse",
        "fct-type": "function",
        "title": "blobParse"
      },
      "index": {
        "description": "parse blob content",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "blobParse",
        "normalized": "",
        "package": "hit",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:commitParse",
      "description": {
        "fct-descr": "\u003cp\u003eparse a commit content\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Commit",
        "fct-source": "src/Data-Git-Storage-Object.html#commitParse",
        "fct-type": "function",
        "title": "commitParse"
      },
      "index": {
        "description": "parse commit content",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "commitParse",
        "normalized": "",
        "package": "hit",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:getRaw",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Git-Storage-Object.html#getRaw",
        "fct-type": "method",
        "title": "getRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "getRaw",
        "normalized": "a-\u003eByteString",
        "package": "hit",
        "partial": "Raw",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:getType",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "a -\u003e ObjectType",
        "fct-source": "src/Data-Git-Storage-Object.html#getType",
        "fct-type": "method",
        "title": "getType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "getType",
        "normalized": "a-\u003eObjectType",
        "package": "hit",
        "partial": "Type",
        "signature": "a-\u003eObjectType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:isDelta",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-Git-Storage-Object.html#isDelta",
        "fct-type": "method",
        "title": "isDelta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "isDelta",
        "normalized": "a-\u003eBool",
        "package": "hit",
        "partial": "Delta",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectHash",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectType -\u003e Word64 -\u003e ByteString -\u003e Ref",
        "fct-source": "src/Data-Git-Storage-Object.html#objectHash",
        "fct-type": "function",
        "title": "objectHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectHash",
        "normalized": "ObjectType-\u003eWord-\u003eByteString-\u003eRef",
        "package": "hit",
        "partial": "Hash",
        "signature": "ObjectType-\u003eWord-\u003eByteString-\u003eRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectIsDelta",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e Bool",
        "fct-source": "src/Data-Git-Storage-Object.html#objectIsDelta",
        "fct-type": "function",
        "title": "objectIsDelta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectIsDelta",
        "normalized": "Object-\u003eBool",
        "package": "hit",
        "partial": "Is Delta",
        "signature": "Object-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseBlob",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Object",
        "fct-source": "src/Data-Git-Storage-Object.html#objectParseBlob",
        "fct-type": "function",
        "title": "objectParseBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectParseBlob",
        "normalized": "",
        "package": "hit",
        "partial": "Parse Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseCommit",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Object",
        "fct-source": "src/Data-Git-Storage-Object.html#objectParseCommit",
        "fct-type": "function",
        "title": "objectParseCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectParseCommit",
        "normalized": "",
        "package": "hit",
        "partial": "Parse Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseTag",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Object",
        "fct-source": "src/Data-Git-Storage-Object.html#objectParseTag",
        "fct-type": "function",
        "title": "objectParseTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectParseTag",
        "normalized": "",
        "package": "hit",
        "partial": "Parse Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectParseTree",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Object",
        "fct-source": "src/Data-Git-Storage-Object.html#objectParseTree",
        "fct-type": "function",
        "title": "objectParseTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectParseTree",
        "normalized": "",
        "package": "hit",
        "partial": "Parse Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToBlob",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e Maybe Blob",
        "fct-source": "src/Data-Git-Storage-Object.html#objectToBlob",
        "fct-type": "function",
        "title": "objectToBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectToBlob",
        "normalized": "Object-\u003eMaybe Blob",
        "package": "hit",
        "partial": "To Blob",
        "signature": "Object-\u003eMaybe Blob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToCommit",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e Maybe Commit",
        "fct-source": "src/Data-Git-Storage-Object.html#objectToCommit",
        "fct-type": "function",
        "title": "objectToCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectToCommit",
        "normalized": "Object-\u003eMaybe Commit",
        "package": "hit",
        "partial": "To Commit",
        "signature": "Object-\u003eMaybe Commit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToTag",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e Maybe Tag",
        "fct-source": "src/Data-Git-Storage-Object.html#objectToTag",
        "fct-type": "function",
        "title": "objectToTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectToTag",
        "normalized": "Object-\u003eMaybe Tag",
        "package": "hit",
        "partial": "To Tag",
        "signature": "Object-\u003eMaybe Tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToTree",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e Maybe Tree",
        "fct-source": "src/Data-Git-Storage-Object.html#objectToTree",
        "fct-type": "function",
        "title": "objectToTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectToTree",
        "normalized": "Object-\u003eMaybe Tree",
        "package": "hit",
        "partial": "To Tree",
        "signature": "Object-\u003eMaybe Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectToType",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e ObjectType",
        "fct-source": "src/Data-Git-Storage-Object.html#objectToType",
        "fct-type": "function",
        "title": "objectToType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectToType",
        "normalized": "Object-\u003eObjectType",
        "package": "hit",
        "partial": "To Type",
        "signature": "Object-\u003eObjectType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectTypeIsDelta",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectType -\u003e Bool",
        "fct-source": "src/Data-Git-Storage-Object.html#objectTypeIsDelta",
        "fct-type": "function",
        "title": "objectTypeIsDelta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectTypeIsDelta",
        "normalized": "ObjectType-\u003eBool",
        "package": "hit",
        "partial": "Type Is Delta",
        "signature": "ObjectType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectTypeMarshall",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectType -\u003e String",
        "fct-source": "src/Data-Git-Storage-Object.html#objectTypeMarshall",
        "fct-type": "function",
        "title": "objectTypeMarshall"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectTypeMarshall",
        "normalized": "ObjectType-\u003eString",
        "package": "hit",
        "partial": "Type Marshall",
        "signature": "ObjectType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectTypeUnmarshall",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "String -\u003e ObjectType",
        "fct-source": "src/Data-Git-Storage-Object.html#objectTypeUnmarshall",
        "fct-type": "function",
        "title": "objectTypeUnmarshall"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectTypeUnmarshall",
        "normalized": "String-\u003eObjectType",
        "package": "hit",
        "partial": "Type Unmarshall",
        "signature": "String-\u003eObjectType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectWrite",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Object -\u003e ByteString",
        "fct-source": "src/Data-Git-Storage-Object.html#objectWrite",
        "fct-type": "function",
        "title": "objectWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectWrite",
        "normalized": "Object-\u003eByteString",
        "package": "hit",
        "partial": "Write",
        "signature": "Object-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:objectWriteHeader",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectType -\u003e Word64 -\u003e ByteString",
        "fct-source": "src/Data-Git-Storage-Object.html#objectWriteHeader",
        "fct-type": "function",
        "title": "objectWriteHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "objectWriteHeader",
        "normalized": "ObjectType-\u003eWord-\u003eByteString",
        "package": "hit",
        "partial": "Write Header",
        "signature": "ObjectType-\u003eWord-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:oiChains",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "[ObjectPtr]",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectInfo",
        "fct-type": "function",
        "title": "oiChains"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "oiChains",
        "normalized": "[ObjectPtr]",
        "package": "hit",
        "partial": "Chains",
        "signature": "[ObjectPtr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:oiData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectData",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectInfo",
        "fct-type": "function",
        "title": "oiData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "oiData",
        "normalized": "",
        "package": "hit",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:oiHeader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "ObjectHeader",
        "fct-source": "src/Data-Git-Storage-Object.html#ObjectInfo",
        "fct-type": "function",
        "title": "oiHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "oiHeader",
        "normalized": "",
        "package": "hit",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:tagParse",
      "description": {
        "fct-descr": "\u003cp\u003eparse a tag content\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Tag",
        "fct-source": "src/Data-Git-Storage-Object.html#tagParse",
        "fct-type": "function",
        "title": "tagParse"
      },
      "index": {
        "description": "parse tag content",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "tagParse",
        "normalized": "",
        "package": "hit",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:toObject",
      "description": {
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "a -\u003e Object",
        "fct-source": "src/Data-Git-Storage-Object.html#toObject",
        "fct-type": "method",
        "title": "toObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "toObject",
        "normalized": "a-\u003eObject",
        "package": "hit",
        "partial": "Object",
        "signature": "a-\u003eObject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Object.html#v:treeParse",
      "description": {
        "fct-descr": "\u003cp\u003eparse a tree content\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Object",
        "fct-package": "hit",
        "fct-signature": "Parser ByteString Tree",
        "fct-source": "src/Data-Git-Storage-Object.html#treeParse",
        "fct-type": "function",
        "title": "treeParse"
      },
      "index": {
        "description": "parse tree content",
        "hierarchy": "Data Git Storage Object",
        "module": "Data.Git.Storage.Object",
        "name": "treeParse",
        "normalized": "",
        "package": "hit",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#",
      "description": {
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Storage-Pack.html",
        "fct-type": "module",
        "title": "Pack"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "Pack",
        "normalized": "",
        "package": "hit",
        "partial": "Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#t:PackedObjectInfo",
      "description": {
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "data",
        "title": "PackedObjectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "PackedObjectInfo",
        "normalized": "",
        "package": "hit",
        "partial": "Packed Object Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#t:PackedObjectRaw",
      "description": {
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "type",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectRaw",
        "fct-type": "type",
        "title": "PackedObjectRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "PackedObjectRaw",
        "normalized": "",
        "package": "hit",
        "partial": "Packed Object Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:PackedObjectInfo",
      "description": {
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "PackedObjectInfo",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "function",
        "title": "PackedObjectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "PackedObjectInfo",
        "normalized": "",
        "package": "hit",
        "partial": "Packed Object Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packClose",
      "description": {
        "fct-descr": "\u003cp\u003eclose a pack\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FileReader -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage-Pack.html#packClose",
        "fct-type": "function",
        "title": "packClose"
      },
      "index": {
        "description": "close pack",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packClose",
        "normalized": "FileReader-\u003eIO()",
        "package": "hit",
        "partial": "Close",
        "signature": "FileReader-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packEnumerate",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate the pack refs available in this repository.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO [Ref]",
        "fct-source": "src/Data-Git-Storage-Pack.html#packEnumerate",
        "fct-type": "function",
        "title": "packEnumerate"
      },
      "index": {
        "description": "Enumerate the pack refs available in this repository",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packEnumerate",
        "normalized": "FilePath-\u003eIO[Ref]",
        "package": "hit",
        "partial": "Enumerate",
        "signature": "FilePath-\u003eIO[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packEnumerateObjects",
      "description": {
        "fct-descr": "\u003cp\u003eenumerate all objects in this pack and callback to f for reach raw objects\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e Int -\u003e (PackedObjectRaw -\u003e IO a) -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage-Pack.html#packEnumerateObjects",
        "fct-type": "function",
        "title": "packEnumerateObjects"
      },
      "index": {
        "description": "enumerate all objects in this pack and callback to for reach raw objects",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packEnumerateObjects",
        "normalized": "FilePath-\u003eRef-\u003eInt-\u003e(PackedObjectRaw-\u003eIO a)-\u003eIO()",
        "package": "hit",
        "partial": "Enumerate Objects",
        "signature": "FilePath-\u003eRef-\u003eInt-\u003e(PackedObjectRaw-\u003eIO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packObjectFromRaw",
      "description": {
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "(ObjectType, Maybe ObjectPtr, ByteString) -\u003e Maybe Object",
        "fct-source": "src/Data-Git-Storage-Pack.html#packObjectFromRaw",
        "fct-type": "function",
        "title": "packObjectFromRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packObjectFromRaw",
        "normalized": "(ObjectType,Maybe ObjectPtr,ByteString)-\u003eMaybe Object",
        "package": "hit",
        "partial": "Object From Raw",
        "signature": "(ObjectType,Maybe ObjectPtr,ByteString)-\u003eMaybe Object"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packOpen",
      "description": {
        "fct-descr": "\u003cp\u003eopen a pack\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO FileReader",
        "fct-source": "src/Data-Git-Storage-Pack.html#packOpen",
        "fct-type": "function",
        "title": "packOpen"
      },
      "index": {
        "description": "open pack",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packOpen",
        "normalized": "FilePath-\u003eRef-\u003eIO FileReader",
        "package": "hit",
        "partial": "Open",
        "signature": "FilePath-\u003eRef-\u003eIO FileReader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadAtOffset",
      "description": {
        "fct-descr": "\u003cp\u003eread an object at a specific position\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FileReader -\u003e Word64 -\u003e IO (Maybe Object)",
        "fct-source": "src/Data-Git-Storage-Pack.html#packReadAtOffset",
        "fct-type": "function",
        "title": "packReadAtOffset"
      },
      "index": {
        "description": "read an object at specific position",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packReadAtOffset",
        "normalized": "FileReader-\u003eWord-\u003eIO(Maybe Object)",
        "package": "hit",
        "partial": "Read At Offset",
        "signature": "FileReader-\u003eWord-\u003eIO(Maybe Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadHeader",
      "description": {
        "fct-descr": "\u003cp\u003ereturn the number of entries in this pack\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO Word32",
        "fct-source": "src/Data-Git-Storage-Pack.html#packReadHeader",
        "fct-type": "function",
        "title": "packReadHeader"
      },
      "index": {
        "description": "return the number of entries in this pack",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packReadHeader",
        "normalized": "FilePath-\u003eRef-\u003eIO Word",
        "package": "hit",
        "partial": "Read Header",
        "signature": "FilePath-\u003eRef-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadMapAtOffset",
      "description": {
        "fct-descr": "\u003cp\u003eread an object at a specific position using a map function on the objectData\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FileReader -\u003e Word64 -\u003e (ByteString -\u003e ByteString) -\u003e IO (Maybe Object)",
        "fct-source": "src/Data-Git-Storage-Pack.html#packReadMapAtOffset",
        "fct-type": "function",
        "title": "packReadMapAtOffset"
      },
      "index": {
        "description": "read an object at specific position using map function on the objectData",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packReadMapAtOffset",
        "normalized": "FileReader-\u003eWord-\u003e(ByteString-\u003eByteString)-\u003eIO(Maybe Object)",
        "package": "hit",
        "partial": "Read Map At Offset",
        "signature": "FileReader-\u003eWord-\u003e(ByteString-\u003eByteString)-\u003eIO(Maybe Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packReadRawAtOffset",
      "description": {
        "fct-descr": "\u003cp\u003eread a raw representation at a specific position\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "FileReader -\u003e Word64 -\u003e IO PackedObjectRaw",
        "fct-source": "src/Data-Git-Storage-Pack.html#packReadRawAtOffset",
        "fct-type": "function",
        "title": "packReadRawAtOffset"
      },
      "index": {
        "description": "read raw representation at specific position",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packReadRawAtOffset",
        "normalized": "FileReader-\u003eWord-\u003eIO PackedObjectRaw",
        "package": "hit",
        "partial": "Read Raw At Offset",
        "signature": "FileReader-\u003eWord-\u003eIO PackedObjectRaw"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:packedObjectToObject",
      "description": {
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "(PackedObjectInfo, ByteString) -\u003e Maybe Object",
        "fct-source": "src/Data-Git-Storage-Pack.html#packedObjectToObject",
        "fct-type": "function",
        "title": "packedObjectToObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "packedObjectToObject",
        "normalized": "(PackedObjectInfo,ByteString)-\u003eMaybe Object",
        "package": "hit",
        "partial": "Object To Object",
        "signature": "(PackedObjectInfo,ByteString)-\u003eMaybe Object"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiActualSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "Word64",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "function",
        "title": "poiActualSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "poiActualSize",
        "normalized": "",
        "package": "hit",
        "partial": "Actual Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiExtra",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "Maybe ObjectPtr",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "function",
        "title": "poiExtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "poiExtra",
        "normalized": "",
        "package": "hit",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "Word64",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "function",
        "title": "poiOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "poiOffset",
        "normalized": "",
        "package": "hit",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "Word64",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "function",
        "title": "poiSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "poiSize",
        "normalized": "",
        "package": "hit",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-Pack.html#v:poiType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.Pack",
        "fct-package": "hit",
        "fct-signature": "ObjectType",
        "fct-source": "src/Data-Git-Storage-Pack.html#PackedObjectInfo",
        "fct-type": "function",
        "title": "poiType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage Pack",
        "module": "Data.Git.Storage.Pack",
        "name": "poiType",
        "normalized": "",
        "package": "hit",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#",
      "description": {
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Storage-PackIndex.html",
        "fct-type": "module",
        "title": "PackIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "PackIndex",
        "normalized": "",
        "package": "hit",
        "partial": "Pack Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#t:PackIndex",
      "description": {
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "data",
        "title": "PackIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "PackIndex",
        "normalized": "",
        "package": "hit",
        "partial": "Pack Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#t:PackIndexHeader",
      "description": {
        "fct-descr": "\u003cp\u003erepresent an packIndex header with the version and the fanout table\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndexHeader",
        "fct-type": "data",
        "title": "PackIndexHeader"
      },
      "index": {
        "description": "represent an packIndex header with the version and the fanout table",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "PackIndexHeader",
        "normalized": "",
        "package": "hit",
        "partial": "Pack Index Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:PackIndex",
      "description": {
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "PackIndex",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "function",
        "title": "PackIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "PackIndex",
        "normalized": "",
        "package": "hit",
        "partial": "Pack Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:PackIndexHeader",
      "description": {
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "PackIndexHeader !Word32 !(Vector Word32)",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndexHeader",
        "fct-type": "function",
        "title": "PackIndexHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "PackIndexHeader",
        "normalized": "",
        "package": "hit",
        "partial": "Pack Index Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexCRCs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "Vector Word32",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "function",
        "title": "packIndexCRCs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexCRCs",
        "normalized": "",
        "package": "hit",
        "partial": "Index CRCs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexChecksum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "function",
        "title": "packIndexChecksum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexChecksum",
        "normalized": "",
        "package": "hit",
        "partial": "Index Checksum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexClose",
      "description": {
        "fct-descr": "\u003cp\u003eclose an index\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FileReader -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexClose",
        "fct-type": "function",
        "title": "packIndexClose"
      },
      "index": {
        "description": "close an index",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexClose",
        "normalized": "FileReader-\u003eIO()",
        "package": "hit",
        "partial": "Index Close",
        "signature": "FileReader-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexEnumerate",
      "description": {
        "fct-descr": "\u003cp\u003eenumerate every indexes file in the pack directory\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO [Ref]",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexEnumerate",
        "fct-type": "function",
        "title": "packIndexEnumerate"
      },
      "index": {
        "description": "enumerate every indexes file in the pack directory",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexEnumerate",
        "normalized": "FilePath-\u003eIO[Ref]",
        "package": "hit",
        "partial": "Index Enumerate",
        "signature": "FilePath-\u003eIO[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexGetHeader",
      "description": {
        "fct-descr": "\u003cp\u003eget index header from an index reference\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO PackIndexHeader",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexGetHeader",
        "fct-type": "function",
        "title": "packIndexGetHeader"
      },
      "index": {
        "description": "get index header from an index reference",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexGetHeader",
        "normalized": "FilePath-\u003eRef-\u003eIO PackIndexHeader",
        "package": "hit",
        "partial": "Index Get Header",
        "signature": "FilePath-\u003eRef-\u003eIO PackIndexHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexGetReferenceLocation",
      "description": {
        "fct-descr": "\u003cp\u003ereturn the reference offset in the packfile if found\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "PackIndexHeader -\u003e FileReader -\u003e Ref -\u003e IO (Maybe Word64)",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexGetReferenceLocation",
        "fct-type": "function",
        "title": "packIndexGetReferenceLocation"
      },
      "index": {
        "description": "return the reference offset in the packfile if found",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexGetReferenceLocation",
        "normalized": "PackIndexHeader-\u003eFileReader-\u003eRef-\u003eIO(Maybe Word)",
        "package": "hit",
        "partial": "Index Get Reference Location",
        "signature": "PackIndexHeader-\u003eFileReader-\u003eRef-\u003eIO(Maybe Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexGetReferencesWithPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eget all references that start by prefix.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "PackIndexHeader -\u003e FileReader -\u003e String -\u003e IO [Ref]",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexGetReferencesWithPrefix",
        "fct-type": "function",
        "title": "packIndexGetReferencesWithPrefix"
      },
      "index": {
        "description": "get all references that start by prefix",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexGetReferencesWithPrefix",
        "normalized": "PackIndexHeader-\u003eFileReader-\u003eString-\u003eIO[Ref]",
        "package": "hit",
        "partial": "Index Get References With Prefix",
        "signature": "PackIndexHeader-\u003eFileReader-\u003eString-\u003eIO[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexHeaderGetNbWithPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eget the number of reference in this index with a specific prefix\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "PackIndexHeader -\u003e Int -\u003e Word32",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexHeaderGetNbWithPrefix",
        "fct-type": "function",
        "title": "packIndexHeaderGetNbWithPrefix"
      },
      "index": {
        "description": "get the number of reference in this index with specific prefix",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexHeaderGetNbWithPrefix",
        "normalized": "PackIndexHeader-\u003eInt-\u003eWord",
        "package": "hit",
        "partial": "Index Header Get Nb With Prefix",
        "signature": "PackIndexHeader-\u003eInt-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexOpen",
      "description": {
        "fct-descr": "\u003cp\u003eopen an index\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO FileReader",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexOpen",
        "fct-type": "function",
        "title": "packIndexOpen"
      },
      "index": {
        "description": "open an index",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexOpen",
        "normalized": "FilePath-\u003eRef-\u003eIO FileReader",
        "package": "hit",
        "partial": "Index Open",
        "signature": "FilePath-\u003eRef-\u003eIO FileReader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexPackChecksum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "function",
        "title": "packIndexPackChecksum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexPackChecksum",
        "normalized": "",
        "package": "hit",
        "partial": "Index Pack Checksum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexPackoffs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "Vector Word32",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "function",
        "title": "packIndexPackoffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexPackoffs",
        "normalized": "",
        "package": "hit",
        "partial": "Index Packoffs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexRead",
      "description": {
        "fct-descr": "\u003cp\u003eread all index\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e IO (PackIndexHeader, (Vector Ref, Vector Word32, Vector Word32, [ByteString], Ref, Ref))",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexRead",
        "fct-type": "function",
        "title": "packIndexRead"
      },
      "index": {
        "description": "read all index",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexRead",
        "normalized": "FilePath-\u003eRef-\u003eIO(PackIndexHeader,(Vector Ref,Vector Word,Vector Word,[ByteString],Ref,Ref))",
        "package": "hit",
        "partial": "Index Read",
        "signature": "FilePath-\u003eRef-\u003eIO(PackIndexHeader,(Vector Ref,Vector Word,Vector Word,[ByteString],Ref,Ref))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexReadHeader",
      "description": {
        "fct-descr": "\u003cp\u003eread index header from an index filereader\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FileReader -\u003e IO PackIndexHeader",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#packIndexReadHeader",
        "fct-type": "function",
        "title": "packIndexReadHeader"
      },
      "index": {
        "description": "read index header from an index filereader",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexReadHeader",
        "normalized": "FileReader-\u003eIO PackIndexHeader",
        "package": "hit",
        "partial": "Index Read Header",
        "signature": "FileReader-\u003eIO PackIndexHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:packIndexSha1s",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "Vector Ref",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#PackIndex",
        "fct-type": "function",
        "title": "packIndexSha1s"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "packIndexSha1s",
        "normalized": "",
        "package": "hit",
        "partial": "Index Sha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage-PackIndex.html#v:withPackIndex",
      "description": {
        "fct-descr": "\u003cp\u003evariant of withFile on the index file and with a FileReader\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage.PackIndex",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e Ref -\u003e (FileReader -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Git-Storage-PackIndex.html#withPackIndex",
        "fct-type": "function",
        "title": "withPackIndex"
      },
      "index": {
        "description": "variant of withFile on the index file and with FileReader",
        "hierarchy": "Data Git Storage PackIndex",
        "module": "Data.Git.Storage.PackIndex",
        "name": "withPackIndex",
        "normalized": "FilePath-\u003eRef-\u003e(FileReader-\u003eIO a)-\u003eIO a",
        "package": "hit",
        "partial": "Pack Index",
        "signature": "FilePath-\u003eRef-\u003e(FileReader-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#",
      "description": {
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Storage.html",
        "fct-type": "module",
        "title": "Storage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "Storage",
        "normalized": "",
        "package": "hit",
        "partial": "Storage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#t:Git",
      "description": {
        "fct-descr": "\u003cp\u003erepresent a git repo, with possibly already opened filereaders\n for indexes and packs\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Storage.html#Git",
        "fct-type": "data",
        "title": "Git"
      },
      "index": {
        "description": "represent git repo with possibly already opened filereaders for indexes and packs",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "Git",
        "normalized": "",
        "package": "hit",
        "partial": "Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:closeRepo",
      "description": {
        "fct-descr": "\u003cp\u003eclose a git repository context, closing all remaining fileReaders.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage.html#closeRepo",
        "fct-type": "function",
        "title": "closeRepo"
      },
      "index": {
        "description": "close git repository context closing all remaining fileReaders",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "closeRepo",
        "normalized": "Git-\u003eIO()",
        "package": "hit",
        "partial": "Repo",
        "signature": "Git-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findReference",
      "description": {
        "fct-descr": "\u003cp\u003eGet the object location of a specific reference\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO ObjectLocation",
        "fct-source": "src/Data-Git-Storage.html#findReference",
        "fct-type": "function",
        "title": "findReference"
      },
      "index": {
        "description": "Get the object location of specific reference",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "findReference",
        "normalized": "Git-\u003eRef-\u003eIO ObjectLocation",
        "package": "hit",
        "partial": "Reference",
        "signature": "Git-\u003eRef-\u003eIO ObjectLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findReferencesWithPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eget all the references that start by a specific prefix\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e String -\u003e IO [Ref]",
        "fct-source": "src/Data-Git-Storage.html#findReferencesWithPrefix",
        "fct-type": "function",
        "title": "findReferencesWithPrefix"
      },
      "index": {
        "description": "get all the references that start by specific prefix",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "findReferencesWithPrefix",
        "normalized": "Git-\u003eString-\u003eIO[Ref]",
        "package": "hit",
        "partial": "References With Prefix",
        "signature": "Git-\u003eString-\u003eIO[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findRepo",
      "description": {
        "fct-descr": "\u003cp\u003eFind the git repository from the current directory.\n\u003c/p\u003e\u003cp\u003eIf the environment variable GIT_DIR is set then it's used,\n otherwise iterate from current directory, up to 128 parents for a .git directory\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Data-Git-Storage.html#findRepo",
        "fct-type": "function",
        "title": "findRepo"
      },
      "index": {
        "description": "Find the git repository from the current directory If the environment variable GIT DIR is set then it used otherwise iterate from current directory up to parents for git directory",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "findRepo",
        "normalized": "",
        "package": "hit",
        "partial": "Repo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:findRepoMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eFind the git repository from the current directory.\n\u003c/p\u003e\u003cp\u003eIf the environment variable GIT_DIR is set then it's used,\n otherwise iterate from current directory, up to 128 parents for a .git directory\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "IO (Maybe FilePath)",
        "fct-source": "src/Data-Git-Storage.html#findRepoMaybe",
        "fct-type": "function",
        "title": "findRepoMaybe"
      },
      "index": {
        "description": "Find the git repository from the current directory If the environment variable GIT DIR is set then it used otherwise iterate from current directory up to parents for git directory",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "findRepoMaybe",
        "normalized": "",
        "package": "hit",
        "partial": "Repo Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getDescription",
      "description": {
        "fct-descr": "\u003cp\u003eread the repository's description\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e IO (Maybe String)",
        "fct-source": "src/Data-Git-Storage.html#getDescription",
        "fct-type": "function",
        "title": "getDescription"
      },
      "index": {
        "description": "read the repository description",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getDescription",
        "normalized": "Git-\u003eIO(Maybe String)",
        "package": "hit",
        "partial": "Description",
        "signature": "Git-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObject",
      "description": {
        "fct-descr": "\u003cp\u003eget an object from repository using a ref.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e Ref-\u003e Bool-\u003e IO (Maybe Object)",
        "fct-type": "function",
        "title": "getObject"
      },
      "index": {
        "description": "get an object from repository using ref",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getObject",
        "normalized": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe Object)",
        "package": "hit",
        "partial": "Object",
        "signature": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectAt",
      "description": {
        "fct-descr": "\u003cp\u003eget an object from repository using a location to reference it.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e ObjectLocation -\u003e Bool -\u003e IO (Maybe Object)",
        "fct-source": "src/Data-Git-Storage.html#getObjectAt",
        "fct-type": "function",
        "title": "getObjectAt"
      },
      "index": {
        "description": "get an object from repository using location to reference it",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getObjectAt",
        "normalized": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe Object)",
        "package": "hit",
        "partial": "Object At",
        "signature": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectRaw",
      "description": {
        "fct-descr": "\u003cp\u003eget an object from repository\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e Bool -\u003e IO (Maybe ObjectInfo)",
        "fct-source": "src/Data-Git-Storage.html#getObjectRaw",
        "fct-type": "function",
        "title": "getObjectRaw"
      },
      "index": {
        "description": "get an object from repository",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getObjectRaw",
        "normalized": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe ObjectInfo)",
        "package": "hit",
        "partial": "Object Raw",
        "signature": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe ObjectInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectRawAt",
      "description": {
        "fct-descr": "\u003cp\u003eget an object from repository\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e ObjectLocation -\u003e Bool -\u003e IO (Maybe ObjectInfo)",
        "fct-source": "src/Data-Git-Storage.html#getObjectRawAt",
        "fct-type": "function",
        "title": "getObjectRawAt"
      },
      "index": {
        "description": "get an object from repository",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getObjectRawAt",
        "normalized": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe ObjectInfo)",
        "package": "hit",
        "partial": "Object Raw At",
        "signature": "Git-\u003eObjectLocation-\u003eBool-\u003eIO(Maybe ObjectInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObjectType",
      "description": {
        "fct-descr": "\u003cp\u003eget an object type from repository\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO (Maybe ObjectType)",
        "fct-source": "src/Data-Git-Storage.html#getObjectType",
        "fct-type": "function",
        "title": "getObjectType"
      },
      "index": {
        "description": "get an object type from repository",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getObjectType",
        "normalized": "Git-\u003eRef-\u003eIO(Maybe ObjectType)",
        "package": "hit",
        "partial": "Object Type",
        "signature": "Git-\u003eRef-\u003eIO(Maybe ObjectType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:getObject_",
      "description": {
        "fct-descr": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003egetObject\u003c/a\u003e\u003c/code\u003e but will raise a RefNotFound exception if the\n reference cannot be found.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e Ref-\u003e Bool-\u003e IO Object",
        "fct-type": "function",
        "title": "getObject_"
      },
      "index": {
        "description": "Just like getObject but will raise RefNotFound exception if the reference cannot be found",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "getObject_",
        "normalized": "Git-\u003eRef-\u003eBool-\u003eIO Object",
        "package": "hit",
        "partial": "Object",
        "signature": "Git-\u003eRef-\u003eBool-\u003eIO Object"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:gitRepoPath",
      "description": {
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e FilePath",
        "fct-source": "src/Data-Git-Storage.html#gitRepoPath",
        "fct-type": "function",
        "title": "gitRepoPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "gitRepoPath",
        "normalized": "Git-\u003eFilePath",
        "package": "hit",
        "partial": "Repo Path",
        "signature": "Git-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:initRepo",
      "description": {
        "fct-descr": "\u003cp\u003einitialize a new repository at a specific location.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage.html#initRepo",
        "fct-type": "function",
        "title": "initRepo"
      },
      "index": {
        "description": "initialize new repository at specific location",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "initRepo",
        "normalized": "FilePath-\u003eIO()",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:isRepo",
      "description": {
        "fct-descr": "\u003cp\u003ebasic checks to see if a specific path looks like a git repo.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/Data-Git-Storage.html#isRepo",
        "fct-type": "function",
        "title": "isRepo"
      },
      "index": {
        "description": "basic checks to see if specific path looks like git repo",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "isRepo",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:iterateIndexes",
      "description": {
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e (b -\u003e (Ref, PackIndexReader) -\u003e IO (b, Bool)) -\u003e b -\u003e IO b",
        "fct-source": "src/Data-Git-Storage.html#iterateIndexes",
        "fct-type": "function",
        "title": "iterateIndexes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "iterateIndexes",
        "normalized": "Git-\u003e(a-\u003e(Ref,PackIndexReader)-\u003eIO(a,Bool))-\u003ea-\u003eIO a",
        "package": "hit",
        "partial": "Indexes",
        "signature": "Git-\u003e(b-\u003e(Ref,PackIndexReader)-\u003eIO(b,Bool))-\u003eb-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:openRepo",
      "description": {
        "fct-descr": "\u003cp\u003eopen a new git repository context\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO Git",
        "fct-source": "src/Data-Git-Storage.html#openRepo",
        "fct-type": "function",
        "title": "openRepo"
      },
      "index": {
        "description": "open new git repository context",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "openRepo",
        "normalized": "FilePath-\u003eIO Git",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO Git"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:packedNamed",
      "description": {
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e PackedRef",
        "fct-source": "src/Data-Git-Storage.html#packedNamed",
        "fct-type": "function",
        "title": "packedNamed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "packedNamed",
        "normalized": "Git-\u003ePackedRef",
        "package": "hit",
        "partial": "Named",
        "signature": "Git-\u003ePackedRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:setDescription",
      "description": {
        "fct-descr": "\u003cp\u003eset the repository's description\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e String -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage.html#setDescription",
        "fct-type": "function",
        "title": "setDescription"
      },
      "index": {
        "description": "set the repository description",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "setDescription",
        "normalized": "Git-\u003eString-\u003eIO()",
        "package": "hit",
        "partial": "Description",
        "signature": "Git-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:setObject",
      "description": {
        "fct-descr": "\u003cp\u003eset an object in the store and returns the new ref\n this is always going to create a loose object.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Object -\u003e IO Ref",
        "fct-source": "src/Data-Git-Storage.html#setObject",
        "fct-type": "function",
        "title": "setObject"
      },
      "index": {
        "description": "set an object in the store and returns the new ref this is always going to create loose object",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "setObject",
        "normalized": "Git-\u003eObject-\u003eIO Ref",
        "package": "hit",
        "partial": "Object",
        "signature": "Git-\u003eObject-\u003eIO Ref"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:withCurrentRepo",
      "description": {
        "fct-descr": "\u003cp\u003eexecute a function on the current repository.\n\u003c/p\u003e\u003cp\u003echeck findRepo to see how the git repository is found.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "(Git -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Git-Storage.html#withCurrentRepo",
        "fct-type": "function",
        "title": "withCurrentRepo"
      },
      "index": {
        "description": "execute function on the current repository check findRepo to see how the git repository is found",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "withCurrentRepo",
        "normalized": "(Git-\u003eIO a)-\u003eIO a",
        "package": "hit",
        "partial": "Current Repo",
        "signature": "(Git-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Storage.html#v:withRepo",
      "description": {
        "fct-descr": "\u003cp\u003eexecute a function f with a git context.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Storage",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e (Git -\u003e IO c) -\u003e IO c",
        "fct-source": "src/Data-Git-Storage.html#withRepo",
        "fct-type": "function",
        "title": "withRepo"
      },
      "index": {
        "description": "execute function with git context",
        "hierarchy": "Data Git Storage",
        "module": "Data.Git.Storage",
        "name": "withRepo",
        "normalized": "FilePath-\u003e(Git-\u003eIO a)-\u003eIO a",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003e(Git-\u003eIO c)-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Types",
        "normalized": "",
        "package": "hit",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Blob",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a binary blob.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Blob",
        "fct-type": "data",
        "title": "Blob"
      },
      "index": {
        "description": "Represent binary blob",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Blob",
        "normalized": "",
        "package": "hit",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Commit",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a commit object.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "data",
        "title": "Commit"
      },
      "index": {
        "description": "Represent commit object",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Commit",
        "normalized": "",
        "package": "hit",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:CommitExtra",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "data",
        "title": "CommitExtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "CommitExtra",
        "normalized": "",
        "package": "hit",
        "partial": "Commit Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:DeltaOfs",
      "description": {
        "fct-descr": "\u003cp\u003eDelta pointing to an offset.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#DeltaOfs",
        "fct-type": "data",
        "title": "DeltaOfs"
      },
      "index": {
        "description": "Delta pointing to an offset",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "DeltaOfs",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Ofs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:DeltaRef",
      "description": {
        "fct-descr": "\u003cp\u003eDelta pointing to a ref.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#DeltaRef",
        "fct-type": "data",
        "title": "DeltaRef"
      },
      "index": {
        "description": "Delta pointing to ref",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "DeltaRef",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:GitTime",
      "description": {
        "fct-descr": "\u003cp\u003eGit time is number of seconds since unix epoch with a timezone\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#GitTime",
        "fct-type": "data",
        "title": "GitTime"
      },
      "index": {
        "description": "Git time is number of seconds since unix epoch with timezone",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "GitTime",
        "normalized": "",
        "package": "hit",
        "partial": "Git Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:ObjectType",
      "description": {
        "fct-descr": "\u003cp\u003etype of a git object.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "data",
        "title": "ObjectType"
      },
      "index": {
        "description": "type of git object",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "ObjectType",
        "normalized": "",
        "package": "hit",
        "partial": "Object Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Person",
      "description": {
        "fct-descr": "\u003cp\u003ean author or committer line\n has the format: name \u003ca\u003eemail\u003c/a\u003e time timezone\n FIXME: should be a string, but I don't know if the data is stored\n consistantly in one encoding (UTF8)\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "data",
        "title": "Person"
      },
      "index": {
        "description": "an author or committer line has the format name email time timezone FIXME should be string but don know if the data is stored consistantly in one encoding UTF8",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Person",
        "normalized": "",
        "package": "hit",
        "partial": "Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a signed tag.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "Represent signed tag",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Tag",
        "normalized": "",
        "package": "hit",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a root tree with zero to many tree entries.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "Represent root tree with zero to many tree entries",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Tree",
        "normalized": "",
        "package": "hit",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#t:TreeEnt",
      "description": {
        "fct-descr": "\u003cp\u003erepresent one entry in the tree\n (permission,file or directory name,blob or tree ref)\n name should maybe a filepath, but not sure about the encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "type",
        "fct-source": "src/Data-Git-Types.html#TreeEnt",
        "fct-type": "type",
        "title": "TreeEnt"
      },
      "index": {
        "description": "represent one entry in the tree permission file or directory name blob or tree ref name should maybe filepath but not sure about the encoding",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TreeEnt",
        "normalized": "",
        "package": "hit",
        "partial": "Tree Ent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Blob",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Blob",
        "fct-source": "src/Data-Git-Types.html#Blob",
        "fct-type": "function",
        "title": "Blob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Blob",
        "normalized": "",
        "package": "hit",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Commit",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Commit",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "Commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Commit",
        "normalized": "",
        "package": "hit",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:CommitExtra",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "CommitExtra",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "function",
        "title": "CommitExtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "CommitExtra",
        "normalized": "",
        "package": "hit",
        "partial": "Commit Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:DeltaOfs",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "DeltaOfs Word64 Delta",
        "fct-source": "src/Data-Git-Types.html#DeltaOfs",
        "fct-type": "function",
        "title": "DeltaOfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "DeltaOfs",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Ofs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:DeltaRef",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "DeltaRef Ref Delta",
        "fct-source": "src/Data-Git-Types.html#DeltaRef",
        "fct-type": "function",
        "title": "DeltaRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "DeltaRef",
        "normalized": "",
        "package": "hit",
        "partial": "Delta Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:GitTime",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "GitTime Integer Int",
        "fct-source": "src/Data-Git-Types.html#GitTime",
        "fct-type": "function",
        "title": "GitTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "GitTime",
        "normalized": "",
        "package": "hit",
        "partial": "Git Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Person",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "Person"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Person",
        "normalized": "",
        "package": "hit",
        "partial": "Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Tag",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Tag",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Tag",
        "normalized": "",
        "package": "hit",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:Tree",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Tree",
        "fct-source": "src/Data-Git-Types.html#Tree",
        "fct-type": "function",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "Tree",
        "normalized": "",
        "package": "hit",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeBlob",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "TypeBlob",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TypeBlob",
        "normalized": "",
        "package": "hit",
        "partial": "Type Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeCommit",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "TypeCommit",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeCommit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TypeCommit",
        "normalized": "",
        "package": "hit",
        "partial": "Type Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeDeltaOff",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "TypeDeltaOff",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeDeltaOff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TypeDeltaOff",
        "normalized": "",
        "package": "hit",
        "partial": "Type Delta Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeDeltaRef",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "TypeDeltaRef",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeDeltaRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TypeDeltaRef",
        "normalized": "",
        "package": "hit",
        "partial": "Type Delta Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeTag",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "TypeTag",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TypeTag",
        "normalized": "",
        "package": "hit",
        "partial": "Type Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:TypeTree",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "TypeTree",
        "fct-source": "src/Data-Git-Types.html#ObjectType",
        "fct-type": "function",
        "title": "TypeTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "TypeTree",
        "normalized": "",
        "package": "hit",
        "partial": "Type Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:blobGetContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Blob",
        "fct-type": "function",
        "title": "blobGetContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "blobGetContent",
        "normalized": "",
        "package": "hit",
        "partial": "Get Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitAuthor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitAuthor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitAuthor",
        "normalized": "",
        "package": "hit",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitCommitter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitCommitter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitCommitter",
        "normalized": "",
        "package": "hit",
        "partial": "Committer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitEncoding",
        "normalized": "",
        "package": "hit",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtraKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "function",
        "title": "commitExtraKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitExtraKey",
        "normalized": "",
        "package": "hit",
        "partial": "Extra Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtraValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "function",
        "title": "commitExtraValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitExtraValue",
        "normalized": "",
        "package": "hit",
        "partial": "Extra Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitExtras",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "[CommitExtra]",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitExtras"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitExtras",
        "normalized": "[CommitExtra]",
        "package": "hit",
        "partial": "Extras",
        "signature": "[CommitExtra]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitMessage",
        "normalized": "",
        "package": "hit",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitParents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "[Ref]",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitParents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitParents",
        "normalized": "[Ref]",
        "package": "hit",
        "partial": "Parents",
        "signature": "[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:commitTreeish",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitTreeish"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "commitTreeish",
        "normalized": "",
        "package": "hit",
        "partial": "Treeish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "personEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "personEmail",
        "normalized": "",
        "package": "hit",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "personName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "personName",
        "normalized": "",
        "package": "hit",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:personTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "GitTime",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "personTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "personTime",
        "normalized": "",
        "package": "hit",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagBlob",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "tagBlob",
        "normalized": "",
        "package": "hit",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "tagName",
        "normalized": "",
        "package": "hit",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagObjectType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ObjectType",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagObjectType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "tagObjectType",
        "normalized": "",
        "package": "hit",
        "partial": "Object Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagRef",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "tagRef",
        "normalized": "",
        "package": "hit",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:tagS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "tagS",
        "normalized": "",
        "package": "hit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:toPOSIXTime",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "GitTime -\u003e POSIXTime",
        "fct-source": "src/Data-Git-Types.html#toPOSIXTime",
        "fct-type": "function",
        "title": "toPOSIXTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "toPOSIXTime",
        "normalized": "GitTime-\u003ePOSIXTime",
        "package": "hit",
        "partial": "POSIXTime",
        "signature": "GitTime-\u003ePOSIXTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:toUTCTime",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "GitTime -\u003e UTCTime",
        "fct-source": "src/Data-Git-Types.html#toUTCTime",
        "fct-type": "function",
        "title": "toUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "toUTCTime",
        "normalized": "GitTime-\u003eUTCTime",
        "package": "hit",
        "partial": "UTCTime",
        "signature": "GitTime-\u003eUTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:toZonedTime",
      "description": {
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "GitTime -\u003e ZonedTime",
        "fct-source": "src/Data-Git-Types.html#toZonedTime",
        "fct-type": "function",
        "title": "toZonedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "toZonedTime",
        "normalized": "GitTime-\u003eZonedTime",
        "package": "hit",
        "partial": "Zoned Time",
        "signature": "GitTime-\u003eZonedTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git-Types.html#v:treeGetEnts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git.Types",
        "fct-package": "hit",
        "fct-signature": "[TreeEnt]",
        "fct-source": "src/Data-Git-Types.html#Tree",
        "fct-type": "function",
        "title": "treeGetEnts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git Types",
        "module": "Data.Git.Types",
        "name": "treeGetEnts",
        "normalized": "[TreeEnt]",
        "package": "hit",
        "partial": "Get Ents",
        "signature": "[TreeEnt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "module",
        "fct-source": "src/Data-Git.html",
        "fct-type": "module",
        "title": "Git"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Git",
        "normalized": "",
        "package": "hit",
        "partial": "Git",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Blob",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a binary blob.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Blob",
        "fct-type": "data",
        "title": "Blob"
      },
      "index": {
        "description": "Represent binary blob",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Blob",
        "normalized": "",
        "package": "hit",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Commit",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a commit object.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "data",
        "title": "Commit"
      },
      "index": {
        "description": "Represent commit object",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Commit",
        "normalized": "",
        "package": "hit",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:CommitExtra",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "data",
        "title": "CommitExtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "CommitExtra",
        "normalized": "",
        "package": "hit",
        "partial": "Commit Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:GitTime",
      "description": {
        "fct-descr": "\u003cp\u003eGit time is number of seconds since unix epoch with a timezone\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#GitTime",
        "fct-type": "data",
        "title": "GitTime"
      },
      "index": {
        "description": "Git time is number of seconds since unix epoch with timezone",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "GitTime",
        "normalized": "",
        "package": "hit",
        "partial": "Git Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Person",
      "description": {
        "fct-descr": "\u003cp\u003ean author or committer line\n has the format: name \u003ca\u003eemail\u003c/a\u003e time timezone\n FIXME: should be a string, but I don't know if the data is stored\n consistantly in one encoding (UTF8)\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "data",
        "title": "Person"
      },
      "index": {
        "description": "an author or committer line has the format name email time timezone FIXME should be string but don know if the data is stored consistantly in one encoding UTF8",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Person",
        "normalized": "",
        "package": "hit",
        "partial": "Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Ref",
      "description": {
        "fct-descr": "\u003cp\u003erepresent a git reference (SHA1)\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Ref.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "represent git reference SHA1",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Ref",
        "normalized": "",
        "package": "hit",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Revision",
      "description": {
        "fct-descr": "\u003cp\u003eA git revision. this can be many things:\n    * a shorten ref\n    * a ref\n    * a named branch or tag\n  followed by optional modifiers \u003ccode\u003e\u003ca\u003eRevModifier\u003c/a\u003e\u003c/code\u003e that can represent:\n    * parenting\n    * type\n    * date\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Revision.html#Revision",
        "fct-type": "data",
        "title": "Revision"
      },
      "index": {
        "description": "git revision this can be many things shorten ref ref named branch or tag followed by optional modifiers RevModifier that can represent parenting type date",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Revision",
        "normalized": "",
        "package": "hit",
        "partial": "Revision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a signed tag.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "Represent signed tag",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Tag",
        "normalized": "",
        "package": "hit",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a root tree with zero to many tree entries.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "data",
        "fct-source": "src/Data-Git-Types.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "Represent root tree with zero to many tree entries",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Tree",
        "normalized": "",
        "package": "hit",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Blob",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Blob",
        "fct-source": "src/Data-Git-Types.html#Blob",
        "fct-type": "function",
        "title": "Blob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Blob",
        "normalized": "",
        "package": "hit",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Commit",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Commit",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "Commit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Commit",
        "normalized": "",
        "package": "hit",
        "partial": "Commit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:CommitExtra",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "CommitExtra",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "function",
        "title": "CommitExtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "CommitExtra",
        "normalized": "",
        "package": "hit",
        "partial": "Commit Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:GitTime",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "GitTime Integer Int",
        "fct-source": "src/Data-Git-Types.html#GitTime",
        "fct-type": "function",
        "title": "GitTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "GitTime",
        "normalized": "",
        "package": "hit",
        "partial": "Git Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Person",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "Person"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Person",
        "normalized": "",
        "package": "hit",
        "partial": "Person",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Tag",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Tag",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Tag",
        "normalized": "",
        "package": "hit",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:Tree",
      "description": {
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Tree",
        "fct-source": "src/Data-Git-Types.html#Tree",
        "fct-type": "function",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "Tree",
        "normalized": "",
        "package": "hit",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:blobGetContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Blob",
        "fct-type": "function",
        "title": "blobGetContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "blobGetContent",
        "normalized": "",
        "package": "hit",
        "partial": "Get Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitAuthor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitAuthor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitAuthor",
        "normalized": "",
        "package": "hit",
        "partial": "Author",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitCommitter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitCommitter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitCommitter",
        "normalized": "",
        "package": "hit",
        "partial": "Committer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitEncoding",
        "normalized": "",
        "package": "hit",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitExtraKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "function",
        "title": "commitExtraKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitExtraKey",
        "normalized": "",
        "package": "hit",
        "partial": "Extra Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitExtraValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#CommitExtra",
        "fct-type": "function",
        "title": "commitExtraValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitExtraValue",
        "normalized": "",
        "package": "hit",
        "partial": "Extra Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitExtras",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "[CommitExtra]",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitExtras"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitExtras",
        "normalized": "[CommitExtra]",
        "package": "hit",
        "partial": "Extras",
        "signature": "[CommitExtra]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitMessage",
        "normalized": "",
        "package": "hit",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitParents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "[Ref]",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitParents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitParents",
        "normalized": "[Ref]",
        "package": "hit",
        "partial": "Parents",
        "signature": "[Ref]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:commitTreeish",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Types.html#Commit",
        "fct-type": "function",
        "title": "commitTreeish"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "commitTreeish",
        "normalized": "",
        "package": "hit",
        "partial": "Treeish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:findRepo",
      "description": {
        "fct-descr": "\u003cp\u003eFind the git repository from the current directory.\n\u003c/p\u003e\u003cp\u003eIf the environment variable GIT_DIR is set then it's used,\n otherwise iterate from current directory, up to 128 parents for a .git directory\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Data-Git-Storage.html#findRepo",
        "fct-type": "function",
        "title": "findRepo"
      },
      "index": {
        "description": "Find the git repository from the current directory If the environment variable GIT DIR is set then it used otherwise iterate from current directory up to parents for git directory",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "findRepo",
        "normalized": "",
        "package": "hit",
        "partial": "Repo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getCommit",
      "description": {
        "fct-descr": "\u003cp\u003eget a specified commit but raises an exception if doesn't exists or type is not appropriate\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO Commit",
        "fct-source": "src/Data-Git-Repository.html#getCommit",
        "fct-type": "function",
        "title": "getCommit"
      },
      "index": {
        "description": "get specified commit but raises an exception if doesn exists or type is not appropriate",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "getCommit",
        "normalized": "Git-\u003eRef-\u003eIO Commit",
        "package": "hit",
        "partial": "Commit",
        "signature": "Git-\u003eRef-\u003eIO Commit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getObject",
      "description": {
        "fct-descr": "\u003cp\u003eget an object from repository using a ref.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e Ref-\u003e Bool-\u003e IO (Maybe Object)",
        "fct-type": "function",
        "title": "getObject"
      },
      "index": {
        "description": "get an object from repository using ref",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "getObject",
        "normalized": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe Object)",
        "package": "hit",
        "partial": "Object",
        "signature": "Git-\u003eRef-\u003eBool-\u003eIO(Maybe Object)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:getTree",
      "description": {
        "fct-descr": "\u003cp\u003eget a specified tree but raise\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO Tree",
        "fct-source": "src/Data-Git-Repository.html#getTree",
        "fct-type": "function",
        "title": "getTree"
      },
      "index": {
        "description": "get specified tree but raise",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "getTree",
        "normalized": "Git-\u003eRef-\u003eIO Tree",
        "package": "hit",
        "partial": "Tree",
        "signature": "Git-\u003eRef-\u003eIO Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:initRepo",
      "description": {
        "fct-descr": "\u003cp\u003einitialize a new repository at a specific location.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Data-Git-Storage.html#initRepo",
        "fct-type": "function",
        "title": "initRepo"
      },
      "index": {
        "description": "initialize new repository at specific location",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "initRepo",
        "normalized": "FilePath-\u003eIO()",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:isRepo",
      "description": {
        "fct-descr": "\u003cp\u003ebasic checks to see if a specific path looks like a git repo.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/Data-Git-Storage.html#isRepo",
        "fct-type": "function",
        "title": "isRepo"
      },
      "index": {
        "description": "basic checks to see if specific path looks like git repo",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "isRepo",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:personEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "personEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "personEmail",
        "normalized": "",
        "package": "hit",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:personName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "personName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "personName",
        "normalized": "",
        "package": "hit",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:personTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "GitTime",
        "fct-source": "src/Data-Git-Types.html#Person",
        "fct-type": "function",
        "title": "personTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "personTime",
        "normalized": "",
        "package": "hit",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:resolvePath",
      "description": {
        "fct-descr": "\u003cp\u003eresolve the ref (tree or blob) related to a path at a specific commit ref\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e Ref-\u003e [ByteString]-\u003e IO (Maybe Ref)",
        "fct-type": "function",
        "title": "resolvePath"
      },
      "index": {
        "description": "resolve the ref tree or blob related to path at specific commit ref",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "resolvePath",
        "normalized": "Git-\u003eRef-\u003e[ByteString]-\u003eIO(Maybe Ref)",
        "package": "hit",
        "partial": "Path",
        "signature": "Git-\u003eRef-\u003e[ByteString]-\u003eIO(Maybe Ref)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:resolveRevision",
      "description": {
        "fct-descr": "\u003cp\u003etry to resolve a string to a specific commit ref\n for example: HEAD, HEAD^, master~3, shortRef\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Revision -\u003e IO (Maybe Ref)",
        "fct-source": "src/Data-Git-Repository.html#resolveRevision",
        "fct-type": "function",
        "title": "resolveRevision"
      },
      "index": {
        "description": "try to resolve string to specific commit ref for example HEAD HEAD master shortRef",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "resolveRevision",
        "normalized": "Git-\u003eRevision-\u003eIO(Maybe Ref)",
        "package": "hit",
        "partial": "Revision",
        "signature": "Git-\u003eRevision-\u003eIO(Maybe Ref)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:resolveTreeish",
      "description": {
        "fct-descr": "\u003cp\u003ereturns a tree from a ref that might be either a commit, a tree or a tag.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Ref -\u003e IO (Maybe Tree)",
        "fct-source": "src/Data-Git-Repository.html#resolveTreeish",
        "fct-type": "function",
        "title": "resolveTreeish"
      },
      "index": {
        "description": "returns tree from ref that might be either commit tree or tag",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "resolveTreeish",
        "normalized": "Git-\u003eRef-\u003eIO(Maybe Tree)",
        "package": "hit",
        "partial": "Treeish",
        "signature": "Git-\u003eRef-\u003eIO(Maybe Tree)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite a set of commits from a revision and returns the new ref.\n\u003c/p\u003e\u003cp\u003eIf during revision traversal (diving) there's a commit with zero or multiple\n parents then the traversal will stop regardless of the amount of parent requested.\n\u003c/p\u003e\u003cp\u003ecalling \u003ca\u003erewrite f 2 (revisionOf d)\u003c/a\u003e on the following tree:\n\u003c/p\u003e\u003cp\u003ea \u003c-- b \u003c-- c \u003c-- d\n\u003c/p\u003e\u003cp\u003eresult in the following tree after mapping with f:\n\u003c/p\u003e\u003cp\u003ea \u003c-- f(b) \u003c-- f(c) \u003c-- f(d)\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git-\u003e (Commit -\u003e IO Commit)-\u003e Revision-\u003e Int-\u003e IO Ref",
        "fct-type": "function",
        "title": "rewrite"
      },
      "index": {
        "description": "Rewrite set of commits from revision and returns the new ref If during revision traversal diving there commit with zero or multiple parents then the traversal will stop regardless of the amount of parent requested calling rewrite revisionOf on the following tree result in the following tree after mapping with",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "rewrite",
        "normalized": "Git-\u003e(Commit-\u003eIO Commit)-\u003eRevision-\u003eInt-\u003eIO Ref",
        "package": "hit",
        "partial": "",
        "signature": "Git-\u003e(Commit-\u003eIO Commit)-\u003eRevision-\u003eInt-\u003eIO Ref"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:setObject",
      "description": {
        "fct-descr": "\u003cp\u003eset an object in the store and returns the new ref\n this is always going to create a loose object.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Git -\u003e Object -\u003e IO Ref",
        "fct-source": "src/Data-Git-Storage.html#setObject",
        "fct-type": "function",
        "title": "setObject"
      },
      "index": {
        "description": "set an object in the store and returns the new ref this is always going to create loose object",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "setObject",
        "normalized": "Git-\u003eObject-\u003eIO Ref",
        "package": "hit",
        "partial": "Object",
        "signature": "Git-\u003eObject-\u003eIO Ref"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagBlob",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "tagBlob",
        "normalized": "",
        "package": "hit",
        "partial": "Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Person",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "tagName",
        "normalized": "",
        "package": "hit",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagObjectType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ObjectType",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagObjectType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "tagObjectType",
        "normalized": "",
        "package": "hit",
        "partial": "Object Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagRef",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "Ref",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "tagRef",
        "normalized": "",
        "package": "hit",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:tagS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Git-Types.html#Tag",
        "fct-type": "function",
        "title": "tagS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "tagS",
        "normalized": "",
        "package": "hit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:treeGetEnts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "[TreeEnt]",
        "fct-source": "src/Data-Git-Types.html#Tree",
        "fct-type": "function",
        "title": "treeGetEnts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "treeGetEnts",
        "normalized": "[TreeEnt]",
        "package": "hit",
        "partial": "Get Ents",
        "signature": "[TreeEnt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:withCurrentRepo",
      "description": {
        "fct-descr": "\u003cp\u003eexecute a function on the current repository.\n\u003c/p\u003e\u003cp\u003echeck findRepo to see how the git repository is found.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "(Git -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Git-Storage.html#withCurrentRepo",
        "fct-type": "function",
        "title": "withCurrentRepo"
      },
      "index": {
        "description": "execute function on the current repository check findRepo to see how the git repository is found",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "withCurrentRepo",
        "normalized": "(Git-\u003eIO a)-\u003eIO a",
        "package": "hit",
        "partial": "Current Repo",
        "signature": "(Git-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hit/docs/Data-Git.html#v:withRepo",
      "description": {
        "fct-descr": "\u003cp\u003eexecute a function f with a git context.\n\u003c/p\u003e",
        "fct-module": "Data.Git",
        "fct-package": "hit",
        "fct-signature": "FilePath -\u003e (Git -\u003e IO c) -\u003e IO c",
        "fct-source": "src/Data-Git-Storage.html#withRepo",
        "fct-type": "function",
        "title": "withRepo"
      },
      "index": {
        "description": "execute function with git context",
        "hierarchy": "Data Git",
        "module": "Data.Git",
        "name": "withRepo",
        "normalized": "FilePath-\u003e(Git-\u003eIO a)-\u003eIO a",
        "package": "hit",
        "partial": "Repo",
        "signature": "FilePath-\u003e(Git-\u003eIO c)-\u003eIO c"
      }
    }
  }
]