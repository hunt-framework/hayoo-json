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
        "word": "hashed-storage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements relative paths within a Tree. All paths are\n anchored at a certain root (this is usually the Tree root). They are\n represented by a list of Names (these are just strict bytestrings).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "AnchoredPath",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-AnchoredPath.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements relative paths within Tree All paths are anchored at certain root this is usually the Tree root They are represented by list of Names these are just strict bytestrings",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "AnchoredPath",
          "package": "hashed-storage",
          "partial": "Anchored Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a type of \u003ca\u003esane\u003c/a\u003e file paths. These are always canonic in the sense\n that there are no stray slashes, no \u003ca\u003e..\u003c/a\u003e components and similar. They are\n usually used to refer to a location within a Tree, but a relative filesystem\n path works just as well. These are either constructed from individual name\n components (using \u003ca\u003eappendPath\u003c/a\u003e, \u003ca\u003ecatPaths\u003c/a\u003e and \u003ca\u003emakeName\u003c/a\u003e), or converted\n from a FilePath (\u003ca\u003efloatPath\u003c/a\u003e -- but take care when doing that) or .\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "AnchoredPath",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-AnchoredPath.html#AnchoredPath",
          "type": "newtype"
        },
        "index": {
          "description": "This is type of sane file paths These are always canonic in the sense that there are no stray slashes no components and similar They are usually used to refer to location within Tree but relative filesystem path works just as well These are either constructed from individual name components using appendPath catPaths and makeName or converted from FilePath floatPath but take care when doing that or",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "AnchoredPath",
          "package": "hashed-storage",
          "partial": "Anchored Path",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#t:AnchoredPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.AnchoredPath",
          "name": "Name",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-AnchoredPath.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "Name",
          "package": "hashed-storage",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.AnchoredPath",
          "name": "AnchoredPath",
          "package": "hashed-storage",
          "signature": "AnchoredPath [Name]",
          "source": "src/Storage-Hashed-AnchoredPath.html#AnchoredPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "AnchoredPath",
          "normalized": "AnchoredPath[Name]",
          "package": "hashed-storage",
          "partial": "Anchored Path",
          "signature": "AnchoredPath[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:AnchoredPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.AnchoredPath",
          "name": "Name",
          "package": "hashed-storage",
          "signature": "Name ByteString",
          "source": "src/Storage-Hashed-AnchoredPath.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "Name",
          "package": "hashed-storage",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ca\u003eroot\u003c/a\u003e directory and an anchored path and produce a full\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e. Moreover, you can use \u003ccode\u003eanchorPath \"\"\u003c/code\u003e to get a relative\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "anchorPath",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e AnchoredPath -\u003e FilePath",
          "source": "src/Storage-Hashed-AnchoredPath.html#anchorPath",
          "type": "function"
        },
        "index": {
          "description": "Take root directory and an anchored path and produce full FilePath Moreover you can use anchorPath to get relative FilePath",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "anchorPath",
          "normalized": "FilePath-\u003eAnchoredPath-\u003eFilePath",
          "package": "hashed-storage",
          "partial": "Path",
          "signature": "FilePath-\u003eAnchoredPath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:anchorPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.AnchoredPath",
          "name": "anchoredRoot",
          "package": "hashed-storage",
          "signature": "AnchoredPath",
          "source": "src/Storage-Hashed-AnchoredPath.html#anchoredRoot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "anchoredRoot",
          "package": "hashed-storage",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:anchoredRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend an element to the end of a path.\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "appendPath",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e Name -\u003e AnchoredPath",
          "source": "src/Storage-Hashed-AnchoredPath.html#appendPath",
          "type": "function"
        },
        "index": {
          "description": "Append an element to the end of path",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "appendPath",
          "normalized": "AnchoredPath-\u003eName-\u003eAnchoredPath",
          "package": "hashed-storage",
          "partial": "Path",
          "signature": "AnchoredPath-\u003eName-\u003eAnchoredPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:appendPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatenate two paths together. Not very safe, but sometimes useful\n (e.g. when you are representing paths relative to a different point than a\n Tree root).\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "catPaths",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e AnchoredPath -\u003e AnchoredPath",
          "source": "src/Storage-Hashed-AnchoredPath.html#catPaths",
          "type": "function"
        },
        "index": {
          "description": "Catenate two paths together Not very safe but sometimes useful e.g when you are representing paths relative to different point than Tree root",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "catPaths",
          "normalized": "AnchoredPath-\u003eAnchoredPath-\u003eAnchoredPath",
          "package": "hashed-storage",
          "partial": "Paths",
          "signature": "AnchoredPath-\u003eAnchoredPath-\u003eAnchoredPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:catPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.AnchoredPath",
          "name": "flatten",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e ByteString",
          "source": "src/Storage-Hashed-AnchoredPath.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "flatten",
          "normalized": "AnchoredPath-\u003eByteString",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe. Only ever use on bytestrings that came from flatten on a\n pre-existing AnchoredPath.\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "floatBS",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e AnchoredPath",
          "source": "src/Storage-Hashed-AnchoredPath.html#floatBS",
          "type": "function"
        },
        "index": {
          "description": "Unsafe Only ever use on bytestrings that came from flatten on pre-existing AnchoredPath",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "floatBS",
          "normalized": "ByteString-\u003eAnchoredPath",
          "package": "hashed-storage",
          "partial": "BS",
          "signature": "ByteString-\u003eAnchoredPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:floatBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a relative FilePath and turn it into an AnchoredPath. The operation\n is (relatively) unsafe. Basically, by using floatPath, you are testifying\n that the argument is a path relative to some common root -- i.e. the root of\n the associated \u003ca\u003eTree\u003c/a\u003e object. Also, there are certain invariants about\n AnchoredPath that this function tries hard to preserve, but probably cannot\n guarantee (i.e. this is a best-effort thing). You should sanitize any\n FilePaths before you declare them \u003ca\u003egood\u003c/a\u003e by converting into AnchoredPath\n (using this function).\n\u003c/p\u003e",
          "module": "[\"Storage.Hashed.AnchoredPath\",\"Storage.Hashed\"]",
          "name": "floatPath",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e AnchoredPath",
          "source": "src/Storage-Hashed-AnchoredPath.html#floatPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:floatPath\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:floatPath\"]"
        },
        "index": {
          "description": "Take relative FilePath and turn it into an AnchoredPath The operation is relatively unsafe Basically by using floatPath you are testifying that the argument is path relative to some common root i.e the root of the associated Tree object Also there are certain invariants about AnchoredPath that this function tries hard to preserve but probably cannot guarantee i.e this is best-effort thing You should sanitize any FilePaths before you declare them good by converting into AnchoredPath using this function",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "floatPath",
          "normalized": "FilePath-\u003eAnchoredPath",
          "package": "hashed-storage",
          "partial": "Path",
          "signature": "FilePath-\u003eAnchoredPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:floatPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a path is a prefix of another path.\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "isPrefix",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e AnchoredPath -\u003e Bool",
          "source": "src/Storage-Hashed-AnchoredPath.html#isPrefix",
          "type": "function"
        },
        "index": {
          "description": "Check whether path is prefix of another path",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "isPrefix",
          "normalized": "AnchoredPath-\u003eAnchoredPath-\u003eBool",
          "package": "hashed-storage",
          "partial": "Prefix",
          "signature": "AnchoredPath-\u003eAnchoredPath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:isPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.AnchoredPath",
          "name": "makeName",
          "package": "hashed-storage",
          "signature": "String -\u003e Name",
          "source": "src/Storage-Hashed-AnchoredPath.html#makeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "makeName",
          "normalized": "String-\u003eName",
          "package": "hashed-storage",
          "partial": "Name",
          "signature": "String-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:makeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet parent (path) of a given path. foo\u003cem\u003ebar\u003c/em\u003ebaz -\u003e foo/bar\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "parent",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e AnchoredPath",
          "source": "src/Storage-Hashed-AnchoredPath.html#parent",
          "type": "function"
        },
        "index": {
          "description": "Get parent path of given path foo bar baz foo bar",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "parent",
          "normalized": "AnchoredPath-\u003eAnchoredPath",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003eAnchoredPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all parents of a given path. foo\u003cem\u003ebar\u003c/em\u003ebaz -\u003e [foo, foo/bar]\n\u003c/p\u003e",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "parents",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e [AnchoredPath]",
          "source": "src/Storage-Hashed-AnchoredPath.html#parents",
          "type": "function"
        },
        "index": {
          "description": "List all parents of given path foo bar baz foo foo bar",
          "hierarchy": "Storage Hashed AnchoredPath",
          "module": "Storage.Hashed.AnchoredPath",
          "name": "parents",
          "normalized": "AnchoredPath-\u003e[AnchoredPath]",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003e[AnchoredPath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-AnchoredPath.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few darcs-specific utility functions. These are used for reading and\n writing darcs and darcs-compatible hashed trees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "Darcs",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Darcs.html",
          "type": "module"
        },
        "index": {
          "description": "few darcs-specific utility functions These are used for reading and writing darcs and darcs-compatible hashed trees",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "Darcs",
          "package": "hashed-storage",
          "partial": "Darcs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsAddMissingHashes",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Darcs.html#darcsAddMissingHashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsAddMissingHashes",
          "normalized": "Tree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Add Missing Hashes",
          "signature": "Tree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsAddMissingHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsCheckExpand",
          "package": "hashed-storage",
          "signature": "Tree IO -\u003e IO (Either [(FilePath, Hash, Maybe Hash)] (Tree IO))",
          "source": "src/Storage-Hashed-Darcs.html#darcsCheckExpand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsCheckExpand",
          "normalized": "Tree IO-\u003eIO(Either[(FilePath,Hash,Maybe Hash)](Tree IO))",
          "package": "hashed-storage",
          "partial": "Check Expand",
          "signature": "Tree IO-\u003eIO(Either[(FilePath,Hash,Maybe Hash)](Tree IO))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsCheckExpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edarcsDecodeWhite\u003c/a\u003e\u003c/code\u003e interprets the Darcs-specific \"encoded\" filenames\n   produced by \u003ccode\u003e\u003ca\u003edarcsEncodeWhite\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e darcsDecodeWhite \"hello\\32\\there\" == \"hello there\"\n darcsDecodeWhite \"hello\\92\\there\" == \"hello\\there\"\n darcsDecodeWhite \"hello\\there\"    == error \"malformed filename\"\n\u003c/pre\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsDecodeWhite",
          "package": "hashed-storage",
          "signature": "String -\u003e FilePath",
          "source": "src/Storage-Hashed-Darcs.html#darcsDecodeWhite",
          "type": "function"
        },
        "index": {
          "description": "darcsDecodeWhite interprets the Darcs-specific encoded filenames produced by darcsEncodeWhite darcsDecodeWhite hello there hello there darcsDecodeWhite hello there hello there darcsDecodeWhite hello there error malformed filename",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsDecodeWhite",
          "normalized": "String-\u003eFilePath",
          "package": "hashed-storage",
          "partial": "Decode White",
          "signature": "String-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsDecodeWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edarcsEncodeWhite\u003c/a\u003e\u003c/code\u003e translates whitespace in filenames to a darcs-specific\n   format (backslash followed by numerical representation according to \u003ccode\u003e\u003ca\u003eord\u003c/a\u003e\u003c/code\u003e).\n   Note that backslashes are also escaped since they are used in the encoding.\n\u003c/p\u003e\u003cpre\u003e darcsEncodeWhite \"hello there\" == \"hello\\32\\there\"\n darcsEncodeWhite \"hello\\there\" == \"hello\\92\\there\"\n\u003c/pre\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsEncodeWhite",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e String",
          "source": "src/Storage-Hashed-Darcs.html#darcsEncodeWhite",
          "type": "function"
        },
        "index": {
          "description": "darcsEncodeWhite translates whitespace in filenames to darcs-specific format backslash followed by numerical representation according to ord Note that backslashes are also escaped since they are used in the encoding darcsEncodeWhite hello there hello there darcsEncodeWhite hello there hello there",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsEncodeWhite",
          "normalized": "FilePath-\u003eString",
          "package": "hashed-storage",
          "partial": "Encode White",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsEncodeWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsEncodeWhiteBS",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Storage-Hashed-Darcs.html#darcsEncodeWhiteBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsEncodeWhiteBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "hashed-storage",
          "partial": "Encode White BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsEncodeWhiteBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsFormatDir",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Maybe ByteString",
          "source": "src/Storage-Hashed-Darcs.html#darcsFormatDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsFormatDir",
          "normalized": "Tree a-\u003eMaybe ByteString",
          "package": "hashed-storage",
          "partial": "Format Dir",
          "signature": "Tree m-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsFormatDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsHash",
          "package": "hashed-storage",
          "signature": "TreeItem m -\u003e m Hash",
          "source": "src/Storage-Hashed-Darcs.html#darcsHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsHash",
          "normalized": "TreeItem a-\u003ea Hash",
          "package": "hashed-storage",
          "partial": "Hash",
          "signature": "TreeItem m-\u003em Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsLocation",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e (Maybe Int, Hash) -\u003e FileSegment",
          "source": "src/Storage-Hashed-Darcs.html#darcsLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsLocation",
          "normalized": "FilePath-\u003e(Maybe Int,Hash)-\u003eFileSegment",
          "package": "hashed-storage",
          "partial": "Location",
          "signature": "FilePath-\u003e(Maybe Int,Hash)-\u003eFileSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsParseDir",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e [(ItemType, Name, Maybe Int, Hash)]",
          "source": "src/Storage-Hashed-Darcs.html#darcsParseDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsParseDir",
          "normalized": "ByteString-\u003e[(ItemType,Name,Maybe Int,Hash)]",
          "package": "hashed-storage",
          "partial": "Parse Dir",
          "signature": "ByteString-\u003e[(ItemType,Name,Maybe Int,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsParseDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsPristineRefs",
          "package": "hashed-storage",
          "signature": "FileSegment -\u003e IO [Hash]",
          "source": "src/Storage-Hashed-Darcs.html#darcsPristineRefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsPristineRefs",
          "normalized": "FileSegment-\u003eIO[Hash]",
          "package": "hashed-storage",
          "partial": "Pristine Refs",
          "signature": "FileSegment-\u003eIO[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsPristineRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a darcs-compatible hash value for a tree-like structure.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsTreeHash",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Hash",
          "source": "src/Storage-Hashed-Darcs.html#darcsTreeHash",
          "type": "function"
        },
        "index": {
          "description": "Compute darcs-compatible hash value for tree-like structure",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsTreeHash",
          "normalized": "Tree a-\u003eHash",
          "package": "hashed-storage",
          "partial": "Tree Hash",
          "signature": "Tree m-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsTreeHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsUpdateDirHashes",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Tree m",
          "source": "src/Storage-Hashed-Darcs.html#darcsUpdateDirHashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsUpdateDirHashes",
          "normalized": "Tree a-\u003eTree a",
          "package": "hashed-storage",
          "partial": "Update Dir Hashes",
          "signature": "Tree m-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsUpdateDirHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcsUpdateHashes",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Darcs.html#darcsUpdateHashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcsUpdateHashes",
          "normalized": "Tree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Update Hashes",
          "signature": "Tree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcsUpdateHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "darcshash",
          "package": "hashed-storage",
          "signature": "t -\u003e m Hash",
          "source": "src/Storage-Hashed-Darcs.html#darcshash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "darcshash",
          "normalized": "a-\u003eb Hash",
          "package": "hashed-storage",
          "signature": "t-\u003em Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:darcshash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "decodeDarcsHash",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Hash",
          "source": "src/Storage-Hashed-Darcs.html#decodeDarcsHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "decodeDarcsHash",
          "normalized": "ByteString-\u003eHash",
          "package": "hashed-storage",
          "partial": "Darcs Hash",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:decodeDarcsHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "decodeDarcsSize",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Maybe Int",
          "source": "src/Storage-Hashed-Darcs.html#decodeDarcsSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "decodeDarcsSize",
          "normalized": "ByteString-\u003eMaybe Int",
          "package": "hashed-storage",
          "partial": "Darcs Size",
          "signature": "ByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:decodeDarcsSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a hashed file from a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and content. In case the file exists\n it is kept untouched and is assumed to have the right content. XXX Corrupt\n files should be probably renamed out of the way automatically or something\n (probably when they are being read though).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "fsCreateHashedFile",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e ByteString -\u003e TreeIO ()",
          "source": "src/Storage-Hashed-Darcs.html#fsCreateHashedFile",
          "type": "function"
        },
        "index": {
          "description": "Create hashed file from FilePath and content In case the file exists it is kept untouched and is assumed to have the right content XXX Corrupt files should be probably renamed out of the way automatically or something probably when they are being read though",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "fsCreateHashedFile",
          "normalized": "FilePath-\u003eByteString-\u003eTreeIO()",
          "package": "hashed-storage",
          "partial": "Create Hashed File",
          "signature": "FilePath-\u003eByteString-\u003eTreeIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:fsCreateHashedFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eTreeIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eaction\u003c/code\u003e in a hashed setting. The \u003ccode\u003einitial\u003c/code\u003e tree is assumed\n to be fully available from the \u003ccode\u003edirectory\u003c/code\u003e, and any changes will be written\n out to same. Please note that actual filesystem files are never removed.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "hashedTreeIO",
          "package": "hashed-storage",
          "signature": "TreeIO a-\u003e Tree IO-\u003e FilePath-\u003e IO (a, Tree IO)",
          "type": "function"
        },
        "index": {
          "description": "Run TreeIO action in hashed setting The initial tree is assumed to be fully available from the directory and any changes will be written out to same Please note that actual filesystem files are never removed",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "hashedTreeIO",
          "normalized": "TreeIO a-\u003eTree IO-\u003eFilePath-\u003eIO(a,Tree IO)",
          "package": "hashed-storage",
          "partial": "Tree IO",
          "signature": "TreeIO a-\u003eTree IO-\u003eFilePath-\u003eIO(a,Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:hashedTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Storage.Hashed.Darcs\",\"Storage.Hashed\"]",
          "name": "readDarcsHashed",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e (Maybe Int, Hash) -\u003e IO (Tree IO)",
          "source": "src/Storage-Hashed-Darcs.html#readDarcsHashed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:readDarcsHashed\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:readDarcsHashed\"]"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashed",
          "normalized": "FilePath-\u003e(Maybe Int,Hash)-\u003eIO(Tree IO)",
          "package": "hashed-storage",
          "partial": "Darcs Hashed",
          "signature": "FilePath-\u003e(Maybe Int,Hash)-\u003eIO(Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:readDarcsHashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a darcs-style hashed tree. This is mainly useful for reading\n \"pristine.hashed\". You need to provide the root hash you are interested in\n (found in _darcs/hashed_inventory).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashed'",
          "package": "hashed-storage",
          "signature": "Bool -\u003e FilePath -\u003e (Maybe Int, Hash) -\u003e IO (Tree IO)",
          "source": "src/Storage-Hashed-Darcs.html#readDarcsHashed%27",
          "type": "function"
        },
        "index": {
          "description": "Read in darcs-style hashed tree This is mainly useful for reading pristine.hashed You need to provide the root hash you are interested in found in darcs hashed inventory",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashed'",
          "normalized": "Bool-\u003eFilePath-\u003e(Maybe Int,Hash)-\u003eIO(Tree IO)",
          "package": "hashed-storage",
          "partial": "Darcs Hashed'",
          "signature": "Bool-\u003eFilePath-\u003e(Maybe Int,Hash)-\u003eIO(Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:readDarcsHashed-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead and parse a darcs-style hashed directory listing from a given \u003ccode\u003edir\u003c/code\u003e\n and with a given \u003ccode\u003ehash\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashedDir",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e (Maybe Int, Hash) -\u003e IO [(ItemType, Name, Maybe Int, Hash)]",
          "source": "src/Storage-Hashed-Darcs.html#readDarcsHashedDir",
          "type": "function"
        },
        "index": {
          "description": "Read and parse darcs-style hashed directory listing from given dir and with given hash",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashedDir",
          "normalized": "FilePath-\u003e(Maybe Int,Hash)-\u003eIO[(ItemType,Name,Maybe Int,Hash)]",
          "package": "hashed-storage",
          "partial": "Darcs Hashed Dir",
          "signature": "FilePath-\u003e(Maybe Int,Hash)-\u003eIO[(ItemType,Name,Maybe Int,Hash)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:readDarcsHashedDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashedNosize",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e Hash -\u003e IO (Tree IO)",
          "source": "src/Storage-Hashed-Darcs.html#readDarcsHashedNosize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "readDarcsHashedNosize",
          "normalized": "FilePath-\u003eHash-\u003eIO(Tree IO)",
          "package": "hashed-storage",
          "partial": "Darcs Hashed Nosize",
          "signature": "FilePath-\u003eHash-\u003eIO(Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:readDarcsHashedNosize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Tree in the darcs hashed format from an object storage. This is\n basically the same as readDarcsHashed from Storage.Hashed, but uses an\n object storage instead of traditional darcs filesystem layout. Requires the\n tree root hash as a starting point.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "readPackedDarcsPristine",
          "package": "hashed-storage",
          "signature": "OS -\u003e Hash -\u003e IO (Tree IO)",
          "source": "src/Storage-Hashed-Darcs.html#readPackedDarcsPristine",
          "type": "function"
        },
        "index": {
          "description": "Read Tree in the darcs hashed format from an object storage This is basically the same as readDarcsHashed from Storage.Hashed but uses an object storage instead of traditional darcs filesystem layout Requires the tree root hash as starting point",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "readPackedDarcsPristine",
          "normalized": "OS-\u003eHash-\u003eIO(Tree IO)",
          "package": "hashed-storage",
          "partial": "Packed Darcs Pristine",
          "signature": "OS-\u003eHash-\u003eIO(Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:readPackedDarcsPristine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Darcs",
          "name": "storePackedDarcsPristine",
          "package": "hashed-storage",
          "signature": "Tree IO -\u003e OS -\u003e IO (OS, Hash)",
          "source": "src/Storage-Hashed-Darcs.html#storePackedDarcsPristine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "storePackedDarcsPristine",
          "normalized": "Tree IO-\u003eOS-\u003eIO(OS,Hash)",
          "package": "hashed-storage",
          "partial": "Packed Darcs Pristine",
          "signature": "Tree IO-\u003eOS-\u003eIO(OS,Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:storePackedDarcsPristine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Tree into a darcs-style hashed directory.\n\u003c/p\u003e",
          "module": "[\"Storage.Hashed.Darcs\",\"Storage.Hashed\"]",
          "name": "writeDarcsHashed",
          "package": "hashed-storage",
          "signature": "Tree IO -\u003e FilePath -\u003e IO Hash",
          "source": "src/Storage-Hashed-Darcs.html#writeDarcsHashed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:writeDarcsHashed\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:writeDarcsHashed\"]"
        },
        "index": {
          "description": "Write Tree into darcs-style hashed directory",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "writeDarcsHashed",
          "normalized": "Tree IO-\u003eFilePath-\u003eIO Hash",
          "package": "hashed-storage",
          "partial": "Darcs Hashed",
          "signature": "Tree IO-\u003eFilePath-\u003eIO Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:writeDarcsHashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Tree into an object storage, using the darcs-style directory\n formatting (and therefore darcs-style hashes). Gives back the object storage\n and the root hash of the stored Tree. NB. The function expects that the Tree\n comes equipped with darcs-style hashes already!\n\u003c/p\u003e",
          "module": "Storage.Hashed.Darcs",
          "name": "writePackedDarcsPristine",
          "package": "hashed-storage",
          "signature": "Tree IO -\u003e OS -\u003e IO (OS, Hash)",
          "source": "src/Storage-Hashed-Darcs.html#writePackedDarcsPristine",
          "type": "function"
        },
        "index": {
          "description": "Write Tree into an object storage using the darcs-style directory formatting and therefore darcs-style hashes Gives back the object storage and the root hash of the stored Tree NB The function expects that the Tree comes equipped with darcs-style hashes already",
          "hierarchy": "Storage Hashed Darcs",
          "module": "Storage.Hashed.Darcs",
          "name": "writePackedDarcsPristine",
          "normalized": "Tree IO-\u003eOS-\u003eIO(OS,Hash)",
          "package": "hashed-storage",
          "partial": "Packed Darcs Pristine",
          "signature": "Tree IO-\u003eOS-\u003eIO(OS,Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Darcs.html#v:writePackedDarcsPristine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Hash",
          "name": "Hash",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Hash.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "Hash",
          "package": "hashed-storage",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Hash",
          "name": "Hash",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Hash.html#Hash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "Hash",
          "package": "hashed-storage",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Storage.Hashed.Hash\",\"Storage.Hashed.Tree\"]",
          "name": "NoHash",
          "package": "hashed-storage",
          "signature": "NoHash",
          "source": "src/Storage-Hashed-Hash.html#Hash",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:NoHash\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:NoHash\"]"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "NoHash",
          "package": "hashed-storage",
          "partial": "No Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:NoHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Storage.Hashed.Hash\",\"Storage.Hashed.Tree\"]",
          "name": "SHA1",
          "package": "hashed-storage",
          "signature": "SHA1 !ByteString",
          "source": "src/Storage-Hashed-Hash.html#Hash",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:SHA1\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:SHA1\"]"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "SHA1",
          "package": "hashed-storage",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Storage.Hashed.Hash\",\"Storage.Hashed.Tree\"]",
          "name": "SHA256",
          "package": "hashed-storage",
          "signature": "SHA256 !ByteString",
          "source": "src/Storage-Hashed-Hash.html#Hash",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:SHA256\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:SHA256\"]"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "SHA256",
          "package": "hashed-storage",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:SHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a base16-encoded string and decode it as a \u003ca\u003eHash\u003c/a\u003e. If the string is\n malformed, yields NoHash.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Hash",
          "name": "decodeBase16",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Hash",
          "source": "src/Storage-Hashed-Hash.html#decodeBase16",
          "type": "function"
        },
        "index": {
          "description": "Take base16-encoded string and decode it as Hash If the string is malformed yields NoHash",
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "decodeBase16",
          "normalized": "ByteString-\u003eHash",
          "package": "hashed-storage",
          "partial": "Base",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:decodeBase16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a base64/url-encoded string and decode it as a \u003ca\u003eHash\u003c/a\u003e. If the string\n is malformed, yields NoHash.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Hash",
          "name": "decodeBase64u",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Hash",
          "source": "src/Storage-Hashed-Hash.html#decodeBase64u",
          "type": "function"
        },
        "index": {
          "description": "Take base64 url-encoded string and decode it as Hash If the string is malformed yields NoHash",
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "decodeBase64u",
          "normalized": "ByteString-\u003eHash",
          "package": "hashed-storage",
          "partial": "Base",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:decodeBase64u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a base16 (ascii-hex) encoded string from a hash. This can be\n turned back into a Hash (see \u003ca\u003edecodeBase16\u003c/a\u003e. This is a loss-less process.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Hash",
          "name": "encodeBase16",
          "package": "hashed-storage",
          "signature": "Hash -\u003e ByteString",
          "source": "src/Storage-Hashed-Hash.html#encodeBase16",
          "type": "function"
        },
        "index": {
          "description": "Produce base16 ascii-hex encoded string from hash This can be turned back into Hash see decodeBase16 This is loss-less process",
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "encodeBase16",
          "normalized": "Hash-\u003eByteString",
          "package": "hashed-storage",
          "partial": "Base",
          "signature": "Hash-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:encodeBase16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Hash",
          "name": "encodeBase64u",
          "package": "hashed-storage",
          "signature": "Hash -\u003e ByteString",
          "source": "src/Storage-Hashed-Hash.html#encodeBase64u",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "encodeBase64u",
          "normalized": "Hash-\u003eByteString",
          "package": "hashed-storage",
          "partial": "Base",
          "signature": "Hash-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:encodeBase64u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Hash",
          "name": "match",
          "package": "hashed-storage",
          "signature": "Hash -\u003e Hash -\u003e Bool",
          "source": "src/Storage-Hashed-Hash.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "match",
          "normalized": "Hash-\u003eHash-\u003eBool",
          "package": "hashed-storage",
          "signature": "Hash-\u003eHash-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Hash",
          "name": "rawHash",
          "package": "hashed-storage",
          "signature": "Hash -\u003e ByteString",
          "source": "src/Storage-Hashed-Hash.html#rawHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "rawHash",
          "normalized": "Hash-\u003eByteString",
          "package": "hashed-storage",
          "partial": "Hash",
          "signature": "Hash-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:rawHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a sha256 of a (lazy) ByteString. However, although this works\n correctly for any bytestring, it is only efficient if the bytestring only\n has a sigle chunk.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Hash",
          "name": "sha256",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Hash",
          "source": "src/Storage-Hashed-Hash.html#sha256",
          "type": "function"
        },
        "index": {
          "description": "Compute sha256 of lazy ByteString However although this works correctly for any bytestring it is only efficient if the bytestring only has sigle chunk",
          "hierarchy": "Storage Hashed Hash",
          "module": "Storage.Hashed.Hash",
          "name": "sha256",
          "normalized": "ByteString-\u003eHash",
          "package": "hashed-storage",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Hash.html#v:sha256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains plain tree indexing code. The index itself is a\n CACHE: you should only ever use it as an optimisation and never as a primary\n storage. In practice, this means that when we change index format, the\n application is expected to throw the old index away and build a fresh\n index. Please note that tracking index validity is out of scope for this\n library: this is responsibility of your application. It is advisable that in\n your validity tracking code, you also check for format validity (see\n \u003ccode\u003e\u003ca\u003eindexFormatValid\u003c/a\u003e\u003c/code\u003e) and scrap and re-create index when needed.\n\u003c/p\u003e\u003cp\u003eThe index is a binary file that overlays a hashed tree over the working\n copy. This means that every working file and directory has an entry in the\n index, that contains its path and hash and validity data. The validity data\n is a timestamp plus the file size. The file hashes are sha256's of the\n file's content.\n\u003c/p\u003e\u003cp\u003eThere are two entry types, a file entry and a directory entry. Both have a\n common binary format (see \u003ccode\u003eItem\u003c/code\u003e). The on-disk format is best described by\n the section \u003cem\u003eIndex format\u003c/em\u003e below.\n\u003c/p\u003e\u003cp\u003eFor each file, the index has a copy of the file's last modification\n timestamp taken at the instant when the hash has been computed. This means\n that when file size and timestamp of a file in working copy matches those in\n the index, we assume that the hash stored in the index for given file is\n valid. These hashes are then exposed in the resulting \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e object, and can\n be leveraged by eg.  \u003ccode\u003e\u003ca\u003ediffTrees\u003c/a\u003e\u003c/code\u003e to compare many files quickly.\n\u003c/p\u003e\u003cp\u003eYou may have noticed that we also keep hashes of directories. These are\n assumed to be valid whenever the complete subtree has been valid. At any\n point, as soon as a size or timestamp mismatch is found, the working file in\n question is opened, its hash (and timestamp and size) is recomputed and\n updated in-place in the index file (everything lives at a fixed offset and\n is fixed size, so this isn't an issue). This is also true of directories:\n when a file in a directory changes hash, this triggers recomputation of all\n of its parent directory hashes; moreover this is done efficiently -- each\n directory is updated at most once during an update run.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eIndex format\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe Index is organised into \"lines\" where each line describes a single\n indexed item. Cf. \u003ccode\u003eItem\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe first word on the index \"line\" is the length of the file path (which is\n the only variable-length part of the line). Then comes the path itself, then\n fixed-length hash (sha256) of the file in question, then two words, one for\n size and one \u003ca\u003eaux\u003c/a\u003e, which is used differently for directories and for files.\n\u003c/p\u003e\u003cp\u003eWith directories, this aux holds the offset of the next sibling line in the\n index, so we can efficiently skip reading the whole subtree starting at a\n given directory (by just seeking aux bytes forward). The lines are\n pre-ordered with respect to directory structure -- the directory comes first\n and after it come all its items. Cf. \u003ccode\u003ereadIndex'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor files, the aux field holds a timestamp.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.Index",
          "name": "Index",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Index.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains plain tree indexing code The index itself is CACHE you should only ever use it as an optimisation and never as primary storage In practice this means that when we change index format the application is expected to throw the old index away and build fresh index Please note that tracking index validity is out of scope for this library this is responsibility of your application It is advisable that in your validity tracking code you also check for format validity see indexFormatValid and scrap and re-create index when needed The index is binary file that overlays hashed tree over the working copy This means that every working file and directory has an entry in the index that contains its path and hash and validity data The validity data is timestamp plus the file size The file hashes are sha256 of the file content There are two entry types file entry and directory entry Both have common binary format see Item The on-disk format is best described by the section Index format below For each file the index has copy of the file last modification timestamp taken at the instant when the hash has been computed This means that when file size and timestamp of file in working copy matches those in the index we assume that the hash stored in the index for given file is valid These hashes are then exposed in the resulting Tree object and can be leveraged by eg diffTrees to compare many files quickly You may have noticed that we also keep hashes of directories These are assumed to be valid whenever the complete subtree has been valid At any point as soon as size or timestamp mismatch is found the working file in question is opened its hash and timestamp and size is recomputed and updated in-place in the index file everything lives at fixed offset and is fixed size so this isn an issue This is also true of directories when file in directory changes hash this triggers recomputation of all of its parent directory hashes moreover this is done efficiently each directory is updated at most once during an update run Index format The Index is organised into lines where each line describes single indexed item Cf Item The first word on the index line is the length of the file path which is the only variable-length part of the line Then comes the path itself then fixed-length hash sha256 of the file in question then two words one for size and one aux which is used differently for directories and for files With directories this aux holds the offset of the next sibling line in the index so we can efficiently skip reading the whole subtree starting at given directory by just seeking aux bytes forward The lines are pre-ordered with respect to directory structure the directory comes first and after it come all its items Cf readIndex For files the aux field holds timestamp",
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "Index",
          "package": "hashed-storage",
          "partial": "Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Index",
          "name": "Index",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Index.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "Index",
          "package": "hashed-storage",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003epred tree\u003c/code\u003e, produce a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e that only has items for which\n \u003ccode\u003epred\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e.\n The tree might contain stubs. When expanded, these will be subject to\n filtering as well.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Index",
          "name": "filter",
          "package": "hashed-storage",
          "signature": "(AnchoredPath -\u003e TreeItem m -\u003e Bool) -\u003e a m -\u003e a m",
          "source": "src/Storage-Hashed-Tree.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Given pred tree produce Tree that only has items for which pred returns True The tree might contain stubs When expanded these will be subject to filtering as well",
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "filter",
          "normalized": "(AnchoredPath-\u003eTreeItem a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "hashed-storage",
          "signature": "(AnchoredPath-\u003eTreeItem m-\u003eBool)-\u003ea m-\u003ea m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that a given file is an index file with a format we can handle. You\n should remove and re-create the index whenever this is not true.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Index",
          "name": "indexFormatValid",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/Storage-Hashed-Index.html#indexFormatValid",
          "type": "function"
        },
        "index": {
          "description": "Check that given file is an index file with format we can handle You should remove and re-create the index whenever this is not true",
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "indexFormatValid",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "hashed-storage",
          "partial": "Format Valid",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#v:indexFormatValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an index and build up a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e object from it, referring to current\n working directory. The initial Index object returned by readIndex is not\n directly useful. However, you can use \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e on it. Either way, to\n obtain the actual Tree object, call update.\n\u003c/p\u003e\u003cp\u003eThe usual use pattern is this:\n\u003c/p\u003e\u003cpre\u003e do (idx, update) \u003c- readIndex\n    tree \u003c- update =\u003c\u003c filter predicate idx\n\u003c/pre\u003e\u003cp\u003eThe resulting tree will be fully expanded.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Index",
          "name": "readIndex",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e (Tree IO -\u003e Hash) -\u003e IO Index",
          "source": "src/Storage-Hashed-Index.html#readIndex",
          "type": "function"
        },
        "index": {
          "description": "Read an index and build up Tree object from it referring to current working directory The initial Index object returned by readIndex is not directly useful However you can use filter on it Either way to obtain the actual Tree object call update The usual use pattern is this do idx update readIndex tree update filter predicate idx The resulting tree will be fully expanded",
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "readIndex",
          "normalized": "FilePath-\u003e(Tree IO-\u003eHash)-\u003eIO Index",
          "package": "hashed-storage",
          "partial": "Index",
          "signature": "FilePath-\u003e(Tree IO-\u003eHash)-\u003eIO Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#v:readIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Index",
          "name": "updateIndex",
          "package": "hashed-storage",
          "signature": "Index -\u003e IO (Tree IO)",
          "source": "src/Storage-Hashed-Index.html#updateIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "updateIndex",
          "normalized": "Index-\u003eIO(Tree IO)",
          "package": "hashed-storage",
          "partial": "Index",
          "signature": "Index-\u003eIO(Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#v:updateIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill add and remove files in index to make it match the \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e object\n given (it is an error for the \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e to contain a file or directory that\n does not exist in a plain form in current working directory).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Index",
          "name": "updateIndexFrom",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e (Tree IO -\u003e Hash) -\u003e Tree IO -\u003e IO Index",
          "source": "src/Storage-Hashed-Index.html#updateIndexFrom",
          "type": "function"
        },
        "index": {
          "description": "Will add and remove files in index to make it match the Tree object given it is an error for the Tree to contain file or directory that does not exist in plain form in current working directory",
          "hierarchy": "Storage Hashed Index",
          "module": "Storage.Hashed.Index",
          "name": "updateIndexFrom",
          "normalized": "FilePath-\u003e(Tree IO-\u003eHash)-\u003eTree IO-\u003eIO Index",
          "package": "hashed-storage",
          "partial": "Index From",
          "signature": "FilePath-\u003e(Tree IO-\u003eHash)-\u003eTree IO-\u003eIO Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Index.html#v:updateIndexFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn experimental monadic interface to Tree mutation. The main idea is to\n simulate IO-ish manipulation of real filesystem (that's the state part of\n the monad), and to keep memory usage down by reasonably often dumping the\n intermediate data to disk and forgetting it. The monad interface itself is\n generic, and a number of actual implementations can be used. This module\n provides just \u003ccode\u003e\u003ca\u003evirtualTreeIO\u003c/a\u003e\u003c/code\u003e that never writes any changes, but may trigger\n filesystem reads as appropriate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "Monad",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "An experimental monadic interface to Tree mutation The main idea is to simulate IO-ish manipulation of real filesystem that the state part of the monad and to keep memory usage down by reasonably often dumping the intermediate data to disk and forgetting it The monad interface itself is generic and number of actual implementations can be used This module provides just virtualTreeIO that never writes any changes but may trigger filesystem reads as appropriate",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "Monad",
          "package": "hashed-storage",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "TreeIO",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Monad.html#TreeIO",
          "type": "type"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "TreeIO",
          "package": "hashed-storage",
          "partial": "Tree IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#t:TreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTreeIO\u003c/a\u003e\u003c/code\u003e monad. A sort of like IO but it keeps a \u003ccode\u003e\u003ca\u003eTreeState\u003c/a\u003e\u003c/code\u003e around as well,\n which is a sort of virtual filesystem. Depending on how you obtained your\n \u003ccode\u003e\u003ca\u003eTreeIO\u003c/a\u003e\u003c/code\u003e, the actions in your virtual filesystem get somehow reflected in the\n actual real filesystem. For \u003ccode\u003e\u003ca\u003evirtualTreeIO\u003c/a\u003e\u003c/code\u003e, nothing happens in real\n filesystem, however with \u003ccode\u003eplainTreeIO\u003c/code\u003e, the plain tree will be updated every\n now and then, and with \u003ccode\u003ehashedTreeIO\u003c/code\u003e a darcs-style hashed tree will get\n updated.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "TreeMonad",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Monad.html#TreeMonad",
          "type": "type"
        },
        "index": {
          "description": "TreeIO monad sort of like IO but it keeps TreeState around as well which is sort of virtual filesystem Depending on how you obtained your TreeIO the actions in your virtual filesystem get somehow reflected in the actual real filesystem For virtualTreeIO nothing happens in real filesystem however with plainTreeIO the plain tree will be updated every now and then and with hashedTreeIO darcs-style hashed tree will get updated",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "TreeMonad",
          "package": "hashed-storage",
          "partial": "Tree Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#t:TreeMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "TreeRO",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Monad.html#TreeRO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "TreeRO",
          "package": "hashed-storage",
          "partial": "Tree RO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#t:TreeRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "TreeRW",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Monad.html#TreeRW",
          "type": "class"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "TreeRW",
          "package": "hashed-storage",
          "partial": "Tree RW",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#t:TreeRW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state of the \u003ccode\u003e\u003ca\u003eTreeIO\u003c/a\u003e\u003c/code\u003e monad. Keeps track of the current Tree\n content, unsync'd changes and a current working directory (of the monad).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "TreeState",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Monad.html#TreeState",
          "type": "data"
        },
        "index": {
          "description": "Internal state of the TreeIO monad Keeps track of the current Tree content unsync changes and current working directory of the monad",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "TreeState",
          "package": "hashed-storage",
          "partial": "Tree State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#t:TreeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "copy",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e AnchoredPath -\u003e m ()",
          "source": "src/Storage-Hashed-Monad.html#copy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "copy",
          "normalized": "AnchoredPath-\u003eAnchoredPath-\u003ea()",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003eAnchoredPath-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "createDirectory",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m ()",
          "source": "src/Storage-Hashed-Monad.html#createDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "createDirectory",
          "normalized": "AnchoredPath-\u003ea()",
          "package": "hashed-storage",
          "partial": "Directory",
          "signature": "AnchoredPath-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "currentDirectory",
          "package": "hashed-storage",
          "signature": "m AnchoredPath",
          "source": "src/Storage-Hashed-Monad.html#currentDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "currentDirectory",
          "package": "hashed-storage",
          "partial": "Directory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:currentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for existence of a directory.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "directoryExists",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m Bool",
          "source": "src/Storage-Hashed-Monad.html#directoryExists",
          "type": "method"
        },
        "index": {
          "description": "Check for existence of directory",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "directoryExists",
          "normalized": "AnchoredPath-\u003ea Bool",
          "package": "hashed-storage",
          "partial": "Exists",
          "signature": "AnchoredPath-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:directoryExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for existence of a node (file or directory, doesn't matter).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "exists",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m Bool",
          "source": "src/Storage-Hashed-Monad.html#exists",
          "type": "method"
        },
        "index": {
          "description": "Check for existence of node file or directory doesn matter",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "exists",
          "normalized": "AnchoredPath-\u003ea Bool",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for existence of a file.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "fileExists",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m Bool",
          "source": "src/Storage-Hashed-Monad.html#fileExists",
          "type": "method"
        },
        "index": {
          "description": "Check for existence of file",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "fileExists",
          "normalized": "AnchoredPath-\u003ea Bool",
          "package": "hashed-storage",
          "partial": "Exists",
          "signature": "AnchoredPath-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:fileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "findFileM",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e m (Maybe (Blob m))",
          "source": "src/Storage-Hashed-Monad.html#findFileM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "findFileM",
          "normalized": "Tree a-\u003eAnchoredPath-\u003ea(Maybe(Blob a))",
          "package": "hashed-storage",
          "partial": "File",
          "signature": "Tree m-\u003eAnchoredPath-\u003em(Maybe(Blob m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:findFileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "findM",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e m (Maybe (TreeItem m))",
          "source": "src/Storage-Hashed-Monad.html#findM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "findM",
          "normalized": "Tree a-\u003eAnchoredPath-\u003ea(Maybe(TreeItem a))",
          "package": "hashed-storage",
          "signature": "Tree m-\u003eAnchoredPath-\u003em(Maybe(TreeItem m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:findM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "findTreeM",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e m (Maybe (Tree m))",
          "source": "src/Storage-Hashed-Monad.html#findTreeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "findTreeM",
          "normalized": "Tree a-\u003eAnchoredPath-\u003ea(Maybe(Tree a))",
          "package": "hashed-storage",
          "partial": "Tree",
          "signature": "Tree m-\u003eAnchoredPath-\u003em(Maybe(Tree m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:findTreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "initialState",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e (TreeItem m -\u003e m Hash) -\u003e (AnchoredPath -\u003e TreeItem m -\u003e TreeMonad m (TreeItem m)) -\u003e TreeState m",
          "source": "src/Storage-Hashed-Monad.html#initialState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "initialState",
          "normalized": "Tree a-\u003e(TreeItem a-\u003ea Hash)-\u003e(AnchoredPath-\u003eTreeItem a-\u003eTreeMonad a(TreeItem a))-\u003eTreeState a",
          "package": "hashed-storage",
          "partial": "State",
          "signature": "Tree m-\u003e(TreeItem m-\u003em Hash)-\u003e(AnchoredPath-\u003eTreeItem m-\u003eTreeMonad m(TreeItem m))-\u003eTreeState m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:initialState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab content of a file in the current Tree at the given path.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "readFile",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m ByteString",
          "source": "src/Storage-Hashed-Monad.html#readFile",
          "type": "method"
        },
        "index": {
          "description": "Grab content of file in the current Tree at the given path",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "readFile",
          "normalized": "AnchoredPath-\u003ea ByteString",
          "package": "hashed-storage",
          "partial": "File",
          "signature": "AnchoredPath-\u003em ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "rename",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e AnchoredPath -\u003e m ()",
          "source": "src/Storage-Hashed-Monad.html#rename",
          "type": "method"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "rename",
          "normalized": "AnchoredPath-\u003eAnchoredPath-\u003ea()",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003eAnchoredPath-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace an item with a new version without modifying the content of the\n tree. This does not do any change tracking. Ought to be only used from a\n \u003ccode\u003esync\u003c/code\u003e implementation for a particular storage format. The presumed use-case\n is that an existing in-memory Blob is replaced with a one referring to an\n on-disk file.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "replaceItem",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e Maybe (TreeItem m) -\u003e TreeMonad m ()",
          "source": "src/Storage-Hashed-Monad.html#replaceItem",
          "type": "function"
        },
        "index": {
          "description": "Replace an item with new version without modifying the content of the tree This does not do any change tracking Ought to be only used from sync implementation for particular storage format The presumed use-case is that an existing in-memory Blob is replaced with one referring to an on-disk file",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "replaceItem",
          "normalized": "AnchoredPath-\u003eMaybe(TreeItem a)-\u003eTreeMonad a()",
          "package": "hashed-storage",
          "partial": "Item",
          "signature": "AnchoredPath-\u003eMaybe(TreeItem m)-\u003eTreeMonad m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:replaceItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "runTreeMonad",
          "package": "hashed-storage",
          "signature": "TreeMonad m a -\u003e TreeState m -\u003e m (a, Tree m)",
          "source": "src/Storage-Hashed-Monad.html#runTreeMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "runTreeMonad",
          "normalized": "TreeMonad a b-\u003eTreeState a-\u003ea(b,Tree a)",
          "package": "hashed-storage",
          "partial": "Tree Monad",
          "signature": "TreeMonad m a-\u003eTreeState m-\u003em(a,Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:runTreeMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "tree",
          "package": "hashed-storage",
          "signature": "TreeState m -\u003e Tree m",
          "source": "src/Storage-Hashed-Monad.html#tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "tree",
          "normalized": "TreeState a-\u003eTree a",
          "package": "hashed-storage",
          "signature": "TreeState m-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "unlink",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m ()",
          "source": "src/Storage-Hashed-Monad.html#unlink",
          "type": "method"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "unlink",
          "normalized": "AnchoredPath-\u003ea()",
          "package": "hashed-storage",
          "signature": "AnchoredPath-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:unlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "virtualTreeIO",
          "package": "hashed-storage",
          "signature": "TreeIO a -\u003e Tree IO -\u003e IO (a, Tree IO)",
          "source": "src/Storage-Hashed-Monad.html#virtualTreeIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "virtualTreeIO",
          "normalized": "TreeIO a-\u003eTree IO-\u003eIO(a,Tree IO)",
          "package": "hashed-storage",
          "partial": "Tree IO",
          "signature": "TreeIO a-\u003eTree IO-\u003eIO(a,Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:virtualTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a TreeIO action without storing any changes. This is useful for\n running monadic tree mutations for obtaining the resulting Tree (as opposed\n to their effect of writing a modified tree to disk). The actions can do both\n read and write -- reads are passed through to the actual filesystem, but the\n writes are held in memory in a form of modified Tree.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "virtualTreeMonad",
          "package": "hashed-storage",
          "signature": "TreeMonad m a -\u003e Tree m -\u003e m (a, Tree m)",
          "source": "src/Storage-Hashed-Monad.html#virtualTreeMonad",
          "type": "function"
        },
        "index": {
          "description": "Run TreeIO action without storing any changes This is useful for running monadic tree mutations for obtaining the resulting Tree as opposed to their effect of writing modified tree to disk The actions can do both read and write reads are passed through to the actual filesystem but the writes are held in memory in form of modified Tree",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "virtualTreeMonad",
          "normalized": "TreeMonad a b-\u003eTree a-\u003ea(b,Tree a)",
          "package": "hashed-storage",
          "partial": "Tree Monad",
          "signature": "TreeMonad m a-\u003eTree m-\u003em(a,Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:virtualTreeMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Monad",
          "name": "withDirectory",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e m a -\u003e m a",
          "source": "src/Storage-Hashed-Monad.html#withDirectory",
          "type": "method"
        },
        "index": {
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "withDirectory",
          "normalized": "AnchoredPath-\u003ea b-\u003ea b",
          "package": "hashed-storage",
          "partial": "Directory",
          "signature": "AnchoredPath-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:withDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange content of a file at a given path. The change will be\n eventually flushed to disk, but might be buffered for some time.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Monad",
          "name": "writeFile",
          "package": "hashed-storage",
          "signature": "AnchoredPath -\u003e ByteString -\u003e m ()",
          "source": "src/Storage-Hashed-Monad.html#writeFile",
          "type": "method"
        },
        "index": {
          "description": "Change content of file at given path The change will be eventually flushed to disk but might be buffered for some time",
          "hierarchy": "Storage Hashed Monad",
          "module": "Storage.Hashed.Monad",
          "name": "writeFile",
          "normalized": "AnchoredPath-\u003eByteString-\u003ea()",
          "package": "hashed-storage",
          "partial": "File",
          "signature": "AnchoredPath-\u003eByteString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Monad.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an \u003ca\u003eobject storage\u003c/a\u003e. This is a directory on disk\n containing a content-addressed storage. This is useful for storing all kinds\n of things, particularly filesystem trees, or darcs pristine caches and patch\n objects. However, this is an abstract, flat storage: no tree semantics are\n provided. You just need to provide a reference-collecting functionality,\n computing a list of references for any given object. The system provides\n transparent garbage collection and packing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "Packed",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Packed.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements an object storage This is directory on disk containing content-addressed storage This is useful for storing all kinds of things particularly filesystem trees or darcs pristine caches and patch objects However this is an abstract flat storage no tree semantics are provided You just need to provide reference-collecting functionality computing list of references for any given object The system provides transparent garbage collection and packing",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "Packed",
          "package": "hashed-storage",
          "partial": "Packed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject storage block. When used as a hatchery, the loose or compact format\n are preferable, while for mature space, the pack format is more useful.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "Block",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Packed.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Object storage block When used as hatchery the loose or compact format are preferable while for mature space the pack format is more useful",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "Block",
          "package": "hashed-storage",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn-disk format for object storage: we implement a completely loose format\n (one file per object), a compact format stored in a single append-only file\n and an immutable \"pack\" format.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "Format",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Packed.html#Format",
          "type": "data"
        },
        "index": {
          "description": "On-disk format for object storage we implement completely loose format one file per object compact format stored in single append-only file and an immutable pack format",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "Format",
          "package": "hashed-storage",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject storage. Contains a single \"hatchery\" and possibly a number of\n mature space blocks, usually in form of packs. It also keeps a list of root\n pointers and has a way to extract pointers from objects (externally\n supplied). These last two things are used to implement a simple GC.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "OS",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Packed.html#OS",
          "type": "data"
        },
        "index": {
          "description": "Object storage Contains single hatchery and possibly number of mature space blocks usually in form of packs It also keeps list of root pointers and has way to extract pointers from objects externally supplied These last two things are used to implement simple GC",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "OS",
          "package": "hashed-storage",
          "partial": "OS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#t:OS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "Compact",
          "package": "hashed-storage",
          "signature": "Compact",
          "source": "src/Storage-Hashed-Packed.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "Compact",
          "package": "hashed-storage",
          "partial": "Compact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:Compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "Loose",
          "package": "hashed-storage",
          "signature": "Loose",
          "source": "src/Storage-Hashed-Packed.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "Loose",
          "package": "hashed-storage",
          "partial": "Loose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:Loose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "Pack",
          "package": "hashed-storage",
          "signature": "Pack",
          "source": "src/Storage-Hashed-Packed.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "Pack",
          "package": "hashed-storage",
          "partial": "Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:Pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "blockLookup",
          "package": "hashed-storage",
          "signature": "Block -\u003e Hash -\u003e IO (Maybe FileSegment)",
          "source": "src/Storage-Hashed-Packed.html#blockLookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "blockLookup",
          "normalized": "Block-\u003eHash-\u003eIO(Maybe FileSegment)",
          "package": "hashed-storage",
          "partial": "Lookup",
          "signature": "Block-\u003eHash-\u003eIO(Maybe FileSegment)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:blockLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove things from hatchery into a (new) pack.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "compact",
          "package": "hashed-storage",
          "signature": "OS -\u003e IO OS",
          "source": "src/Storage-Hashed-Packed.html#compact",
          "type": "function"
        },
        "index": {
          "description": "Move things from hatchery into new pack",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "compact",
          "normalized": "OS-\u003eIO OS",
          "package": "hashed-storage",
          "signature": "OS-\u003eIO OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty object storage in given directory, with a hatchery of\n given format. The directory is created if needed, but is assumed to be\n empty.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "create",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e Format -\u003e IO OS",
          "source": "src/Storage-Hashed-Packed.html#create",
          "type": "function"
        },
        "index": {
          "description": "Create an empty object storage in given directory with hatchery of given format The directory is created if needed but is assumed to be empty",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "create",
          "normalized": "FilePath-\u003eFormat-\u003eIO OS",
          "package": "hashed-storage",
          "signature": "FilePath-\u003eFormat-\u003eIO OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "format",
          "package": "hashed-storage",
          "signature": "Block -\u003e Format",
          "source": "src/Storage-Hashed-Packed.html#format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "format",
          "normalized": "Block-\u003eFormat",
          "package": "hashed-storage",
          "signature": "Block-\u003eFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd new objects to the object storage (i.e. put them into hatchery). It is\n safe to call this even on objects that are already present in the storage:\n such objects will be skipped.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "hatch",
          "package": "hashed-storage",
          "signature": "OS -\u003e [ByteString] -\u003e IO OS",
          "source": "src/Storage-Hashed-Packed.html#hatch",
          "type": "function"
        },
        "index": {
          "description": "Add new objects to the object storage i.e put them into hatchery It is safe to call this even on objects that are already present in the storage such objects will be skipped",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "hatch",
          "normalized": "OS-\u003e[ByteString]-\u003eIO OS",
          "package": "hashed-storage",
          "signature": "OS-\u003e[ByteString]-\u003eIO OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:hatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "hatchery",
          "package": "hashed-storage",
          "signature": "OS -\u003e Block",
          "source": "src/Storage-Hashed-Packed.html#hatchery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "hatchery",
          "normalized": "OS-\u003eBlock",
          "package": "hashed-storage",
          "signature": "OS-\u003eBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:hatchery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a map of live objects (i.e. those reachable from the given roots) in\n a given list of Blocks.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "live",
          "package": "hashed-storage",
          "signature": "OS -\u003e [Block] -\u003e IO (Map Hash FileSegment)",
          "source": "src/Storage-Hashed-Packed.html#live",
          "type": "function"
        },
        "index": {
          "description": "Build map of live objects i.e those reachable from the given roots in given list of Blocks",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "live",
          "normalized": "OS-\u003e[Block]-\u003eIO(Map Hash FileSegment)",
          "package": "hashed-storage",
          "signature": "OS-\u003e[Block]-\u003eIO(Map Hash FileSegment)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:live"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "load",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e IO OS",
          "source": "src/Storage-Hashed-Packed.html#load",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "load",
          "normalized": "FilePath-\u003eIO OS",
          "package": "hashed-storage",
          "signature": "FilePath-\u003eIO OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "lookup",
          "package": "hashed-storage",
          "signature": "OS -\u003e Hash -\u003e IO (Maybe FileSegment)",
          "source": "src/Storage-Hashed-Packed.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "lookup",
          "normalized": "OS-\u003eHash-\u003eIO(Maybe FileSegment)",
          "package": "hashed-storage",
          "signature": "OS-\u003eHash-\u003eIO(Maybe FileSegment)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "mature",
          "package": "hashed-storage",
          "signature": "OS -\u003e [Block]",
          "source": "src/Storage-Hashed-Packed.html#mature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "mature",
          "normalized": "OS-\u003e[Block]",
          "package": "hashed-storage",
          "signature": "OS-\u003e[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:mature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "references",
          "package": "hashed-storage",
          "signature": "OS -\u003e FileSegment -\u003e IO [Hash]",
          "source": "src/Storage-Hashed-Packed.html#references",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "references",
          "normalized": "OS-\u003eFileSegment-\u003eIO[Hash]",
          "package": "hashed-storage",
          "signature": "OS-\u003eFileSegment-\u003eIO[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:references"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce number of packs in the object storage. This may both recombine\n packs to eliminate dead objects and join some packs to form bigger packs.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Packed",
          "name": "repack",
          "package": "hashed-storage",
          "signature": "OS -\u003e IO OS",
          "source": "src/Storage-Hashed-Packed.html#repack",
          "type": "function"
        },
        "index": {
          "description": "Reduce number of packs in the object storage This may both recombine packs to eliminate dead objects and join some packs to form bigger packs",
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "repack",
          "normalized": "OS-\u003eIO OS",
          "package": "hashed-storage",
          "signature": "OS-\u003eIO OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:repack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "rootdir",
          "package": "hashed-storage",
          "signature": "OS -\u003e FilePath",
          "source": "src/Storage-Hashed-Packed.html#rootdir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "rootdir",
          "normalized": "OS-\u003eFilePath",
          "package": "hashed-storage",
          "signature": "OS-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:rootdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Packed",
          "name": "roots",
          "package": "hashed-storage",
          "signature": "OS -\u003e [Hash]",
          "source": "src/Storage-Hashed-Packed.html#roots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Packed",
          "module": "Storage.Hashed.Packed",
          "name": "roots",
          "normalized": "OS-\u003e[Hash]",
          "package": "hashed-storage",
          "signature": "OS-\u003e[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Packed.html#v:roots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe plain format implementation resides in this module. The plain format\n does not use any hashing and basically just wraps a normal filesystem tree\n in the hashed-storage API.\n\u003c/p\u003e\u003cp\u003eNB. The \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function on Blobs coming from a plain tree is susceptible to\n file content changes. Since we use mmap in \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e, this will break\n referential transparency and produce unexpected results. Please always make\n sure that all parallel access to the underlying filesystem tree never\n mutates files. Unlink + recreate is fine though (in other words, the\n \u003ccode\u003e\u003ca\u003ewritePlainTree\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eplainTreeIO\u003c/a\u003e\u003c/code\u003e implemented in this module are safe in\n this respect).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.Plain",
          "name": "Plain",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Plain.html",
          "type": "module"
        },
        "index": {
          "description": "The plain format implementation resides in this module The plain format does not use any hashing and basically just wraps normal filesystem tree in the hashed-storage API NB The read function on Blobs coming from plain tree is susceptible to file content changes Since we use mmap in read this will break referential transparency and produce unexpected results Please always make sure that all parallel access to the underlying filesystem tree never mutates files Unlink recreate is fine though in other words the writePlainTree and plainTreeIO implemented in this module are safe in this respect",
          "hierarchy": "Storage Hashed Plain",
          "module": "Storage.Hashed.Plain",
          "name": "Plain",
          "package": "hashed-storage",
          "partial": "Plain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Plain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eTreeIO\u003c/a\u003e\u003c/code\u003e action in a plain tree setting. Writes out changes to the\n plain tree every now and then (after the action is finished, the last tree\n state is always flushed to disk). XXX Modify the tree with filesystem\n reading and put it back into st (ie. replace the in-memory Blobs with normal\n ones, so the memory can be GCd).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Plain",
          "name": "plainTreeIO",
          "package": "hashed-storage",
          "signature": "TreeIO a -\u003e Tree IO -\u003e FilePath -\u003e IO (a, Tree IO)",
          "source": "src/Storage-Hashed-Plain.html#plainTreeIO",
          "type": "function"
        },
        "index": {
          "description": "Run TreeIO action in plain tree setting Writes out changes to the plain tree every now and then after the action is finished the last tree state is always flushed to disk XXX Modify the tree with filesystem reading and put it back into st ie replace the in-memory Blobs with normal ones so the memory can be GCd",
          "hierarchy": "Storage Hashed Plain",
          "module": "Storage.Hashed.Plain",
          "name": "plainTreeIO",
          "normalized": "TreeIO a-\u003eTree IO-\u003eFilePath-\u003eIO(a,Tree IO)",
          "package": "hashed-storage",
          "partial": "Tree IO",
          "signature": "TreeIO a-\u003eTree IO-\u003eFilePath-\u003eIO(a,Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Plain.html#v:plainTreeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Storage.Hashed.Plain\",\"Storage.Hashed\"]",
          "name": "readPlainTree",
          "package": "hashed-storage",
          "signature": "FilePath -\u003e IO (Tree IO)",
          "source": "src/Storage-Hashed-Plain.html#readPlainTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Plain.html#v:readPlainTree\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:readPlainTree\"]"
        },
        "index": {
          "hierarchy": "Storage Hashed Plain",
          "module": "Storage.Hashed.Plain",
          "name": "readPlainTree",
          "normalized": "FilePath-\u003eIO(Tree IO)",
          "package": "hashed-storage",
          "partial": "Plain Tree",
          "signature": "FilePath-\u003eIO(Tree IO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Plain.html#v:readPlainTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out \u003cem\u003efull\u003c/em\u003e tree to a plain directory structure. If you instead want\n to make incremental updates, refer to \u003ca\u003eStorage.Hashed.Monad\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Storage.Hashed.Plain\",\"Storage.Hashed\"]",
          "name": "writePlainTree",
          "package": "hashed-storage",
          "signature": "Tree IO -\u003e FilePath -\u003e IO ()",
          "source": "src/Storage-Hashed-Plain.html#writePlainTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Plain.html#v:writePlainTree\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:writePlainTree\"]"
        },
        "index": {
          "description": "Write out full tree to plain directory structure If you instead want to make incremental updates refer to Storage.Hashed.Monad",
          "hierarchy": "Storage Hashed Plain",
          "module": "Storage.Hashed.Plain",
          "name": "writePlainTree",
          "normalized": "Tree IO-\u003eFilePath-\u003eIO()",
          "package": "hashed-storage",
          "partial": "Plain Tree",
          "signature": "Tree IO-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Plain.html#v:writePlainTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe abstract representation of a Tree and useful abstract utilities to\n handle those.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "Tree",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "The abstract representation of Tree and useful abstract utilities to handle those",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "Tree",
          "package": "hashed-storage",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "Blob",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Tree.html#Blob",
          "type": "data"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "Blob",
          "package": "hashed-storage",
          "partial": "Blob",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#t:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "FilterTree",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Tree.html#FilterTree",
          "type": "class"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "FilterTree",
          "package": "hashed-storage",
          "partial": "Filter Tree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#t:FilterTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "Hash",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Hash.html#Hash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "Hash",
          "package": "hashed-storage",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "ItemType",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Tree.html#ItemType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "ItemType",
          "package": "hashed-storage",
          "partial": "Item Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#t:ItemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstraction of a filesystem tree.\n Please note that the Tree returned by the respective read operations will\n have TreeStub items in it. To obtain a Tree without such stubs, call\n expand on it, eg.:\n\u003c/p\u003e\u003cpre\u003e tree \u003c- readDarcsPristine \".\" \u003e\u003e= expand\n\u003c/pre\u003e\u003cp\u003eWhen a Tree is expanded, it becomes \"final\". All stubs are forced and the\n Tree can be traversed purely. Access to actual file contents stays in IO\n though.\n\u003c/p\u003e\u003cp\u003eA Tree may have a Hash associated with it. A pair of Tree's is identical\n whenever their hashes are (the reverse need not hold, since not all Trees\n come equipped with a hash).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "Tree",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Tree.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Abstraction of filesystem tree Please note that the Tree returned by the respective read operations will have TreeStub items in it To obtain Tree without such stubs call expand on it eg tree readDarcsPristine expand When Tree is expanded it becomes final All stubs are forced and the Tree can be traversed purely Access to actual file contents stays in IO though Tree may have Hash associated with it pair of Tree is identical whenever their hashes are the reverse need not hold since not all Trees come equipped with hash",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "Tree",
          "package": "hashed-storage",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "TreeItem",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed-Tree.html#TreeItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "TreeItem",
          "package": "hashed-storage",
          "partial": "Tree Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#t:TreeItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "Blob",
          "package": "hashed-storage",
          "signature": "Blob !(m ByteString) !Hash",
          "source": "src/Storage-Hashed-Tree.html#Blob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "Blob",
          "package": "hashed-storage",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:Blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "BlobType",
          "package": "hashed-storage",
          "signature": "BlobType",
          "source": "src/Storage-Hashed-Tree.html#ItemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "BlobType",
          "package": "hashed-storage",
          "partial": "Blob Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:BlobType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "File",
          "package": "hashed-storage",
          "signature": "File !(Blob m)",
          "source": "src/Storage-Hashed-Tree.html#TreeItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "File",
          "package": "hashed-storage",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "Stub",
          "package": "hashed-storage",
          "signature": "Stub !(m (Tree m)) !Hash",
          "source": "src/Storage-Hashed-Tree.html#TreeItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "Stub",
          "package": "hashed-storage",
          "partial": "Stub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:Stub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "SubTree",
          "package": "hashed-storage",
          "signature": "SubTree !(Tree m)",
          "source": "src/Storage-Hashed-Tree.html#TreeItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "SubTree",
          "package": "hashed-storage",
          "partial": "Sub Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:SubTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "TreeType",
          "package": "hashed-storage",
          "signature": "TreeType",
          "source": "src/Storage-Hashed-Tree.html#ItemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "TreeType",
          "package": "hashed-storage",
          "partial": "Tree Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:TreeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "addMissingHashes",
          "package": "hashed-storage",
          "signature": "(TreeItem m -\u003e m Hash) -\u003e Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#addMissingHashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "addMissingHashes",
          "normalized": "(TreeItem a-\u003ea Hash)-\u003eTree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Missing Hashes",
          "signature": "(TreeItem m-\u003em Hash)-\u003eTree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:addMissingHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the disk version of a Tree: expands it, and checks each\n hash. Returns either the expanded tree or a list of AnchoredPaths\n where there are problems. The first argument is the hashing function\n used to create the tree.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "checkExpand",
          "package": "hashed-storage",
          "signature": "(TreeItem IO -\u003e IO Hash) -\u003e Tree IO -\u003e IO (Either [(AnchoredPath, Hash, Maybe Hash)] (Tree IO))",
          "source": "src/Storage-Hashed-Tree.html#checkExpand",
          "type": "function"
        },
        "index": {
          "description": "Check the disk version of Tree expands it and checks each hash Returns either the expanded tree or list of AnchoredPaths where there are problems The first argument is the hashing function used to create the tree",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "checkExpand",
          "normalized": "(TreeItem IO-\u003eIO Hash)-\u003eTree IO-\u003eIO(Either[(AnchoredPath,Hash,Maybe Hash)](Tree IO))",
          "package": "hashed-storage",
          "partial": "Expand",
          "signature": "(TreeItem IO-\u003eIO Hash)-\u003eTree IO-\u003eIO(Either[(AnchoredPath,Hash,Maybe Hash)](Tree IO))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:checkExpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCautiously extracts differing subtrees from a pair of Trees. It will never\n do any unneccessary expanding. Tree hashes are used to cut the comparison as\n high up the Tree branches as possible. The result is a pair of trees that do\n not share any identical subtrees. They are derived from the first and second\n parameters respectively and they are always fully expanded. It might be\n advantageous to feed the result into \u003ccode\u003e\u003ca\u003ezipFiles\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ezipTrees\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "diffTrees",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Tree m -\u003e m (Tree m, Tree m)",
          "source": "src/Storage-Hashed-Tree.html#diffTrees",
          "type": "function"
        },
        "index": {
          "description": "Cautiously extracts differing subtrees from pair of Trees It will never do any unneccessary expanding Tree hashes are used to cut the comparison as high up the Tree branches as possible The result is pair of trees that do not share any identical subtrees They are derived from the first and second parameters respectively and they are always fully expanded It might be advantageous to feed the result into zipFiles or zipTrees",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "diffTrees",
          "normalized": "Tree a-\u003eTree a-\u003ea(Tree a,Tree a)",
          "package": "hashed-storage",
          "partial": "Trees",
          "signature": "Tree m-\u003eTree m-\u003em(Tree m,Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:diffTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "emptyBlob",
          "package": "hashed-storage",
          "signature": "Blob m",
          "source": "src/Storage-Hashed-Tree.html#emptyBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "emptyBlob",
          "package": "hashed-storage",
          "partial": "Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:emptyBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "emptyTree",
          "package": "hashed-storage",
          "signature": "Tree m",
          "source": "src/Storage-Hashed-Tree.html#emptyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "emptyTree",
          "package": "hashed-storage",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:emptyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand a stubbed Tree into a one with no stubs in it. You might want to\n filter the tree before expanding to save IO. This is the basic\n implementation, which may be overriden by some Tree instances (this is\n especially true of the Index case).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "expand",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#expand",
          "type": "function"
        },
        "index": {
          "description": "Expand stubbed Tree into one with no stubs in it You might want to filter the tree before expanding to save IO This is the basic implementation which may be overriden by some Tree instances this is especially true of the Index case",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "expand",
          "normalized": "Tree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "signature": "Tree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold a path in a (stubbed) Tree, such that the leaf node of the path is\n reachable without crossing any stubs. Moreover, the leaf ought not be a Stub\n in the resulting Tree. A non-existent path is expanded as far as it can be.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "expandPath",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#expandPath",
          "type": "function"
        },
        "index": {
          "description": "Unfold path in stubbed Tree such that the leaf node of the path is reachable without crossing any stubs Moreover the leaf ought not be Stub in the resulting Tree non-existent path is expanded as far as it can be",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "expandPath",
          "normalized": "Tree a-\u003eAnchoredPath-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Path",
          "signature": "Tree m-\u003eAnchoredPath-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:expandPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "expandUpdate",
          "package": "hashed-storage",
          "signature": "(AnchoredPath -\u003e Tree m -\u003e m (Tree m)) -\u003e Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#expandUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "expandUpdate",
          "normalized": "(AnchoredPath-\u003eTree a-\u003ea(Tree a))-\u003eTree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Update",
          "signature": "(AnchoredPath-\u003eTree m-\u003em(Tree m))-\u003eTree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:expandUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003epred tree\u003c/code\u003e, produce a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e that only has items for which\n \u003ccode\u003epred\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e.\n The tree might contain stubs. When expanded, these will be subject to\n filtering as well.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "filter",
          "package": "hashed-storage",
          "signature": "(AnchoredPath -\u003e TreeItem m -\u003e Bool) -\u003e a m -\u003e a m",
          "source": "src/Storage-Hashed-Tree.html#filter",
          "type": "method"
        },
        "index": {
          "description": "Given pred tree produce Tree that only has items for which pred returns True The tree might contain stubs When expanded these will be subject to filtering as well",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "filter",
          "normalized": "(AnchoredPath-\u003eTreeItem a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "hashed-storage",
          "signature": "(AnchoredPath-\u003eTreeItem m-\u003eBool)-\u003ea m-\u003ea m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a \u003ccode\u003e\u003ca\u003eTreeItem\u003c/a\u003e\u003c/code\u003e by its path. Gives \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the path is invalid.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "find",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e Maybe (TreeItem m)",
          "source": "src/Storage-Hashed-Tree.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find TreeItem by its path Gives Nothing if the path is invalid",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "find",
          "normalized": "Tree a-\u003eAnchoredPath-\u003eMaybe(TreeItem a)",
          "package": "hashed-storage",
          "signature": "Tree m-\u003eAnchoredPath-\u003eMaybe(TreeItem m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a \u003ccode\u003e\u003ca\u003eBlob\u003c/a\u003e\u003c/code\u003e by its path. Gives \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the path is invalid, or does\n not point to a Blob.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "findFile",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e Maybe (Blob m)",
          "source": "src/Storage-Hashed-Tree.html#findFile",
          "type": "function"
        },
        "index": {
          "description": "Find Blob by its path Gives Nothing if the path is invalid or does not point to Blob",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "findFile",
          "normalized": "Tree a-\u003eAnchoredPath-\u003eMaybe(Blob a)",
          "package": "hashed-storage",
          "partial": "File",
          "signature": "Tree m-\u003eAnchoredPath-\u003eMaybe(Blob m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:findFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e by its path. Gives \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the path is invalid, or does\n not point to a Tree.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "findTree",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e Maybe (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#findTree",
          "type": "function"
        },
        "index": {
          "description": "Find Tree by its path Gives Nothing if the path is invalid or does not point to Tree",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "findTree",
          "normalized": "Tree a-\u003eAnchoredPath-\u003eMaybe(Tree a)",
          "package": "hashed-storage",
          "partial": "Tree",
          "signature": "Tree m-\u003eAnchoredPath-\u003eMaybe(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:findTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a hash of a TreeItem. May be Nothing.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "itemHash",
          "package": "hashed-storage",
          "signature": "TreeItem m -\u003e Hash",
          "source": "src/Storage-Hashed-Tree.html#itemHash",
          "type": "function"
        },
        "index": {
          "description": "Get hash of TreeItem May be Nothing",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "itemHash",
          "normalized": "TreeItem a-\u003eHash",
          "package": "hashed-storage",
          "partial": "Hash",
          "signature": "TreeItem m-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:itemHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "itemType",
          "package": "hashed-storage",
          "signature": "TreeItem m -\u003e ItemType",
          "source": "src/Storage-Hashed-Tree.html#itemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "itemType",
          "normalized": "TreeItem a-\u003eItemType",
          "package": "hashed-storage",
          "partial": "Type",
          "signature": "TreeItem m-\u003eItemType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:itemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "items",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Map Name (TreeItem m)",
          "source": "src/Storage-Hashed-Tree.html#items",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "items",
          "normalized": "Tree a-\u003eMap Name(TreeItem a)",
          "package": "hashed-storage",
          "signature": "Tree m-\u003eMap Name(TreeItem m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all contents of a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "list",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e [(AnchoredPath, TreeItem m)]",
          "source": "src/Storage-Hashed-Tree.html#list",
          "type": "function"
        },
        "index": {
          "description": "List all contents of Tree",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "list",
          "normalized": "Tree a-\u003e[(AnchoredPath,TreeItem a)]",
          "package": "hashed-storage",
          "signature": "Tree m-\u003e[(AnchoredPath,TreeItem m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "listImmediate",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e [(Name, TreeItem m)]",
          "source": "src/Storage-Hashed-Tree.html#listImmediate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "listImmediate",
          "normalized": "Tree a-\u003e[(Name,TreeItem a)]",
          "package": "hashed-storage",
          "partial": "Immediate",
          "signature": "Tree m-\u003e[(Name,TreeItem m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:listImmediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e item (an immediate subtree or blob).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "lookup",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Name -\u003e Maybe (TreeItem m)",
          "source": "src/Storage-Hashed-Tree.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up Tree item an immediate subtree or blob",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "lookup",
          "normalized": "Tree a-\u003eName-\u003eMaybe(TreeItem a)",
          "package": "hashed-storage",
          "signature": "Tree m-\u003eName-\u003eMaybe(TreeItem m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "makeBlob",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Blob m",
          "source": "src/Storage-Hashed-Tree.html#makeBlob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "makeBlob",
          "normalized": "ByteString-\u003eBlob a",
          "package": "hashed-storage",
          "partial": "Blob",
          "signature": "ByteString-\u003eBlob m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:makeBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "makeBlobBS",
          "package": "hashed-storage",
          "signature": "ByteString -\u003e Blob m",
          "source": "src/Storage-Hashed-Tree.html#makeBlobBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "makeBlobBS",
          "normalized": "ByteString-\u003eBlob a",
          "package": "hashed-storage",
          "partial": "Blob BS",
          "signature": "ByteString-\u003eBlob m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:makeBlobBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "makeTree",
          "package": "hashed-storage",
          "signature": "[(Name, TreeItem m)] -\u003e Tree m",
          "source": "src/Storage-Hashed-Tree.html#makeTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "makeTree",
          "normalized": "[(Name,TreeItem a)]-\u003eTree a",
          "package": "hashed-storage",
          "partial": "Tree",
          "signature": "[(Name,TreeItem m)]-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:makeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "makeTreeWithHash",
          "package": "hashed-storage",
          "signature": "[(Name, TreeItem m)] -\u003e Hash -\u003e Tree m",
          "source": "src/Storage-Hashed-Tree.html#makeTreeWithHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "makeTreeWithHash",
          "normalized": "[(Name,TreeItem a)]-\u003eHash-\u003eTree a",
          "package": "hashed-storage",
          "partial": "Tree With Hash",
          "signature": "[(Name,TreeItem m)]-\u003eHash-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:makeTreeWithHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a Tree (by replacing, or removing or adding items).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "modifyTree",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e AnchoredPath -\u003e Maybe (TreeItem m) -\u003e Tree m",
          "source": "src/Storage-Hashed-Tree.html#modifyTree",
          "type": "function"
        },
        "index": {
          "description": "Modify Tree by replacing or removing or adding items",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "modifyTree",
          "normalized": "Tree a-\u003eAnchoredPath-\u003eMaybe(TreeItem a)-\u003eTree a",
          "package": "hashed-storage",
          "partial": "Tree",
          "signature": "Tree m-\u003eAnchoredPath-\u003eMaybe(TreeItem m)-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:modifyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLay one tree over another. The resulting Tree will look like the base (1st\n parameter) Tree, although any items also present in the overlay Tree will be\n taken from the overlay. It is not allowed to overlay a different kind of an\n object, nor it is allowed for the overlay to add new objects to base.  This\n means that the overlay Tree should be a subset of the base Tree (although\n any extraneous items will be ignored by the implementation).\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "overlay",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Tree m -\u003e Tree m",
          "source": "src/Storage-Hashed-Tree.html#overlay",
          "type": "function"
        },
        "index": {
          "description": "Lay one tree over another The resulting Tree will look like the base st parameter Tree although any items also present in the overlay Tree will be taken from the overlay It is not allowed to overlay different kind of an object nor it is allowed for the overlay to add new objects to base This means that the overlay Tree should be subset of the base Tree although any extraneous items will be ignored by the implementation",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "overlay",
          "normalized": "Tree a-\u003eTree a-\u003eTree a",
          "package": "hashed-storage",
          "signature": "Tree m-\u003eTree m-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:overlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes \u003cem\u003enot\u003c/em\u003e expand the tree.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "partiallyUpdateTree",
          "package": "hashed-storage",
          "signature": "(TreeItem m -\u003e m (TreeItem m)) -\u003e (AnchoredPath -\u003e TreeItem m -\u003e Bool) -\u003e Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#partiallyUpdateTree",
          "type": "function"
        },
        "index": {
          "description": "Does not expand the tree",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "partiallyUpdateTree",
          "normalized": "(TreeItem a-\u003ea(TreeItem a))-\u003e(AnchoredPath-\u003eTreeItem a-\u003eBool)-\u003eTree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Update Tree",
          "signature": "(TreeItem m-\u003em(TreeItem m))-\u003e(AnchoredPath-\u003eTreeItem m-\u003eBool)-\u003eTree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:partiallyUpdateTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Blob into a Lazy ByteString. Might be backed by an mmap, use with\n care.\n\u003c/p\u003e",
          "module": "[\"Storage.Hashed.Tree\",\"Storage.Hashed\"]",
          "name": "readBlob",
          "package": "hashed-storage",
          "signature": "Blob m -\u003e m ByteString",
          "source": "src/Storage-Hashed-Tree.html#readBlob",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:readBlob\",\"http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:readBlob\"]"
        },
        "index": {
          "description": "Read Blob into Lazy ByteString Might be backed by an mmap use with care",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "readBlob",
          "normalized": "Blob a-\u003ea ByteString",
          "package": "hashed-storage",
          "partial": "Blob",
          "signature": "Blob m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:readBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two Trees, a \u003ccode\u003eguide\u003c/code\u003e and a \u003ccode\u003etree\u003c/code\u003e, produces a new Tree that is a\n identical to \u003ccode\u003etree\u003c/code\u003e, but only has those items that are present in both\n \u003ccode\u003etree\u003c/code\u003e and \u003ccode\u003eguide\u003c/code\u003e. The \u003ccode\u003eguide\u003c/code\u003e Tree may not contain any stubs.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "restrict",
          "package": "hashed-storage",
          "signature": "Tree n -\u003e t m -\u003e t m",
          "source": "src/Storage-Hashed-Tree.html#restrict",
          "type": "function"
        },
        "index": {
          "description": "Given two Trees guide and tree produces new Tree that is identical to tree but only has those items that are present in both tree and guide The guide Tree may not contain any stubs",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "restrict",
          "normalized": "Tree a-\u003eb c-\u003eb c",
          "package": "hashed-storage",
          "signature": "Tree n-\u003et m-\u003et m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:restrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet hash of a Tree. This is guaranteed to uniquely\n identify the Tree (including any blob content), as far as\n cryptographic hashes are concerned. Sha256 is recommended.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "treeHash",
          "package": "hashed-storage",
          "signature": "Tree m -\u003e Hash",
          "source": "src/Storage-Hashed-Tree.html#treeHash",
          "type": "function"
        },
        "index": {
          "description": "Get hash of Tree This is guaranteed to uniquely identify the Tree including any blob content as far as cryptographic hashes are concerned Sha256 is recommended",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "treeHash",
          "normalized": "Tree a-\u003eHash",
          "package": "hashed-storage",
          "partial": "Hash",
          "signature": "Tree m-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:treeHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "updateSubtrees",
          "package": "hashed-storage",
          "signature": "(Tree m -\u003e Tree m) -\u003e Tree m -\u003e Tree m",
          "source": "src/Storage-Hashed-Tree.html#updateSubtrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "updateSubtrees",
          "normalized": "(Tree a-\u003eTree a)-\u003eTree a-\u003eTree a",
          "package": "hashed-storage",
          "partial": "Subtrees",
          "signature": "(Tree m-\u003eTree m)-\u003eTree m-\u003eTree m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:updateSubtrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes \u003cem\u003enot\u003c/em\u003e expand the tree.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "updateTree",
          "package": "hashed-storage",
          "signature": "(TreeItem m -\u003e m (TreeItem m)) -\u003e Tree m -\u003e m (Tree m)",
          "source": "src/Storage-Hashed-Tree.html#updateTree",
          "type": "function"
        },
        "index": {
          "description": "Does not expand the tree",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "updateTree",
          "normalized": "(TreeItem a-\u003ea(TreeItem a))-\u003eTree a-\u003ea(Tree a)",
          "package": "hashed-storage",
          "partial": "Tree",
          "signature": "(TreeItem m-\u003em(TreeItem m))-\u003eTree m-\u003em(Tree m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:updateTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor every pair of corresponding blobs from the two supplied trees,\n evaluate the supplied function and accumulate the results in a list. Hint:\n to get IO actions through, just use sequence on the resulting list.\n NB. This won't expand any stubs.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "zipCommonFiles",
          "package": "hashed-storage",
          "signature": "(AnchoredPath -\u003e Blob m -\u003e Blob m -\u003e a) -\u003e Tree m -\u003e Tree m -\u003e [a]",
          "source": "src/Storage-Hashed-Tree.html#zipCommonFiles",
          "type": "function"
        },
        "index": {
          "description": "For every pair of corresponding blobs from the two supplied trees evaluate the supplied function and accumulate the results in list Hint to get IO actions through just use sequence on the resulting list NB This won expand any stubs",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "zipCommonFiles",
          "normalized": "(AnchoredPath-\u003eBlob a-\u003eBlob a-\u003eb)-\u003eTree a-\u003eTree a-\u003e[b]",
          "package": "hashed-storage",
          "partial": "Common Files",
          "signature": "(AnchoredPath-\u003eBlob m-\u003eBlob m-\u003ea)-\u003eTree m-\u003eTree m-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:zipCommonFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each file in each of the two supplied trees, evaluate the supplied\n function (supplying the corresponding file from the other tree, or Nothing)\n and accumulate the results in a list. Hint: to get IO actions through, just\n use sequence on the resulting list.  NB. This won't expand any stubs.\n\u003c/p\u003e",
          "module": "Storage.Hashed.Tree",
          "name": "zipFiles",
          "package": "hashed-storage",
          "signature": "(AnchoredPath -\u003e Maybe (Blob m) -\u003e Maybe (Blob m) -\u003e a) -\u003e Tree m -\u003e Tree m -\u003e [a]",
          "source": "src/Storage-Hashed-Tree.html#zipFiles",
          "type": "function"
        },
        "index": {
          "description": "For each file in each of the two supplied trees evaluate the supplied function supplying the corresponding file from the other tree or Nothing and accumulate the results in list Hint to get IO actions through just use sequence on the resulting list NB This won expand any stubs",
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "zipFiles",
          "normalized": "(AnchoredPath-\u003eMaybe(Blob a)-\u003eMaybe(Blob a)-\u003eb)-\u003eTree a-\u003eTree a-\u003e[b]",
          "package": "hashed-storage",
          "partial": "Files",
          "signature": "(AnchoredPath-\u003eMaybe(Blob m)-\u003eMaybe(Blob m)-\u003ea)-\u003eTree m-\u003eTree m-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:zipFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed.Tree",
          "name": "zipTrees",
          "package": "hashed-storage",
          "signature": "(AnchoredPath -\u003e Maybe (TreeItem m) -\u003e Maybe (TreeItem m) -\u003e a) -\u003e Tree m -\u003e Tree m -\u003e [a]",
          "source": "src/Storage-Hashed-Tree.html#zipTrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "Storage Hashed Tree",
          "module": "Storage.Hashed.Tree",
          "name": "zipTrees",
          "normalized": "(AnchoredPath-\u003eMaybe(TreeItem a)-\u003eMaybe(TreeItem a)-\u003eb)-\u003eTree a-\u003eTree a-\u003e[b]",
          "package": "hashed-storage",
          "partial": "Trees",
          "signature": "(AnchoredPath-\u003eMaybe(TreeItem m)-\u003eMaybe(TreeItem m)-\u003ea)-\u003eTree m-\u003eTree m-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed-Tree.html#v:zipTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storage.Hashed",
          "name": "Hashed",
          "package": "hashed-storage",
          "source": "src/Storage-Hashed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Storage Hashed",
          "module": "Storage.Hashed",
          "name": "Hashed",
          "package": "hashed-storage",
          "partial": "Hashed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a relative FilePath within a Tree and print the contents of the\n object there. Useful for exploration, less so for serious programming.\n\u003c/p\u003e",
          "module": "Storage.Hashed",
          "name": "printPath",
          "package": "hashed-storage",
          "signature": "Tree IO -\u003e FilePath -\u003e IO ()",
          "source": "src/Storage-Hashed.html#printPath",
          "type": "function"
        },
        "index": {
          "description": "Take relative FilePath within Tree and print the contents of the object there Useful for exploration less so for serious programming",
          "hierarchy": "Storage Hashed",
          "module": "Storage.Hashed",
          "name": "printPath",
          "normalized": "Tree IO-\u003eFilePath-\u003eIO()",
          "package": "hashed-storage",
          "partial": "Path",
          "signature": "Tree IO-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashed-storage/docs/Storage-Hashed.html#v:printPath"
      }
    }
  ]
]