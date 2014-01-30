[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Armor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese functions support a simple base-32 encoding of binary data,\n in which 5 bytes of binary data are mapped onto 8 characters from\n the set {a, ..., k, m, n, p, ..., z, 2, ..., 9} (i.e., all\n lower-case letters and digits except for l, o, 0, and 9).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003earmor32\u003c/a\u003e\u003c/code\u003e function encodes binary using this base-32 encoding,\n while \u003ccode\u003e\u003ca\u003edearmor32\u003c/a\u003e\u003c/code\u003e reverses the encoding.\n\u003c/p\u003e\u003cp\u003eBinary data is assumed to come from the \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.Armor",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-Armor.html",
        "fct-type": "module",
        "title": "Armor"
      },
      "index": {
        "description": "These functions support simple base-32 encoding of binary data in which bytes of binary data are mapped onto characters from the set i.e all lower-case letters and digits except for and The armor32 function encodes binary using this base-32 encoding while dearmor32 reverses the encoding Binary data is assumed to come from the Data.ByteString.Lazy type",
        "hierarchy": "LIO Armor",
        "module": "LIO.Armor",
        "name": "Armor",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Armor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Armor.html#v:a2b",
      "description": {
        "fct-module": "LIO.Armor",
        "fct-package": "lio-eci11",
        "fct-signature": "UArray Word8 Char",
        "fct-source": "src/LIO-Armor.html#a2b",
        "fct-type": "function",
        "title": "a2b"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Armor",
        "module": "LIO.Armor",
        "name": "a2b",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Armor.html#v:a32Valid",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the caracter could have been in the output of\n \u003ccode\u003e\u003ca\u003earmor32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.Armor",
        "fct-package": "lio-eci11",
        "fct-signature": "Char -\u003e Bool",
        "fct-source": "src/LIO-Armor.html#a32Valid",
        "fct-type": "function",
        "title": "a32Valid"
      },
      "index": {
        "description": "Return True iff the caracter could have been in the output of armor32",
        "hierarchy": "LIO Armor",
        "module": "LIO.Armor",
        "name": "a32Valid",
        "normalized": "Char-\u003eBool",
        "package": "lio-eci11",
        "partial": "Valid",
        "signature": "Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Armor.html#v:armor32",
      "description": {
        "fct-module": "LIO.Armor",
        "fct-package": "lio-eci11",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/LIO-Armor.html#armor32",
        "fct-type": "function",
        "title": "armor32"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Armor",
        "module": "LIO.Armor",
        "name": "armor32",
        "normalized": "ByteString-\u003eString",
        "package": "lio-eci11",
        "partial": "",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Armor.html#v:b2a",
      "description": {
        "fct-module": "LIO.Armor",
        "fct-package": "lio-eci11",
        "fct-signature": "UArray Char Word8",
        "fct-source": "src/LIO-Armor.html#b2a",
        "fct-type": "function",
        "title": "b2a"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Armor",
        "module": "LIO.Armor",
        "name": "b2a",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Armor.html#v:dearmor32",
      "description": {
        "fct-module": "LIO.Armor",
        "fct-package": "lio-eci11",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/LIO-Armor.html#dearmor32",
        "fct-type": "function",
        "title": "dearmor32"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Armor",
        "module": "LIO.Armor",
        "name": "dearmor32",
        "normalized": "String-\u003eByteString",
        "package": "lio-eci11",
        "partial": "",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file exports the subset of symbols in the \u003ca\u003eLIO.TCB\u003c/a\u003e module\n that are safe for untrusted code to access.  See the \u003ca\u003eLIO.TCB\u003c/a\u003e\n module for documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.Base",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "This file exports the subset of symbols in the LIO.TCB module that are safe for untrusted code to access See the LIO.TCB module for documentation",
        "hierarchy": "LIO Base",
        "module": "LIO.Base",
        "name": "Base",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-DCLabel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides bindings for the \u003ca\u003eDCLabel\u003c/a\u003e module, with some \nrenaming to resolve name clashes. The delegation of privilege and \nother trusted code is not exported by this module and code wishing to\nuse this should import \u003ca\u003eDCLabel.TCB\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.DCLabel",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-DCLabel.html",
        "fct-type": "module",
        "title": "DCLabel"
      },
      "index": {
        "description": "This module provides bindings for the DCLabel module with some renaming to resolve name clashes The delegation of privilege and other trusted code is not exported by this module and code wishing to use this should import DCLabel.TCB",
        "hierarchy": "LIO DCLabel",
        "module": "LIO.DCLabel",
        "name": "DCLabel",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "DCLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-DCLabel.html#t:DC",
      "description": {
        "fct-descr": "\u003cp\u003eThe monad for LIO computations using \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e as the label.\n\u003c/p\u003e",
        "fct-module": "LIO.DCLabel",
        "fct-package": "lio-eci11",
        "fct-signature": "type",
        "fct-source": "src/LIO-DCLabel.html#DC",
        "fct-type": "type",
        "title": "DC"
      },
      "index": {
        "description": "The monad for LIO computations using DCLabel as the label",
        "hierarchy": "LIO DCLabel",
        "module": "LIO.DCLabel",
        "name": "DC",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "DC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-DCLabel.html#t:DCCatSet",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003eDCLabel\u003c/a\u003e category set.\n\u003c/p\u003e",
        "fct-module": "LIO.DCLabel",
        "fct-package": "lio-eci11",
        "fct-signature": "type",
        "fct-source": "src/LIO-DCLabel.html#DCCatSet",
        "fct-type": "type",
        "title": "DCCatSet"
      },
      "index": {
        "description": "DCLabel category set",
        "hierarchy": "LIO DCLabel",
        "module": "LIO.DCLabel",
        "name": "DCCatSet",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "DCCat Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-DCLabel.html#t:DCPriv",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003eDCLabel\u003c/a\u003e (untrusted) privilege.\n\u003c/p\u003e",
        "fct-module": "LIO.DCLabel",
        "fct-package": "lio-eci11",
        "fct-signature": "type",
        "fct-source": "src/LIO-DCLabel.html#DCPriv",
        "fct-type": "type",
        "title": "DCPriv"
      },
      "index": {
        "description": "DCLabel untrusted privilege",
        "hierarchy": "LIO DCLabel",
        "module": "LIO.DCLabel",
        "name": "DCPriv",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "DCPriv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-DCLabel.html#t:DCPrivTCB",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003eDCLabel\u003c/a\u003e privilege.\n\u003c/p\u003e",
        "fct-module": "LIO.DCLabel",
        "fct-package": "lio-eci11",
        "fct-signature": "type",
        "fct-source": "src/LIO-DCLabel.html#DCPrivTCB",
        "fct-type": "type",
        "title": "DCPrivTCB"
      },
      "index": {
        "description": "DCLabel privilege",
        "hierarchy": "LIO DCLabel",
        "module": "LIO.DCLabel",
        "name": "DCPrivTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "DCPriv TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-DCLabel.html#v:evalDC",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a computation in the LIO Monad, returning both the\n computation's result and the label of the result.\n\u003c/p\u003e",
        "fct-module": "LIO.DCLabel",
        "fct-package": "lio-eci11",
        "fct-signature": "DC a -\u003e IO (a, DCLabel)",
        "fct-source": "src/LIO-DCLabel.html#evalDC",
        "fct-type": "function",
        "title": "evalDC"
      },
      "index": {
        "description": "Runs computation in the LIO Monad returning both the computation result and the label of the result",
        "hierarchy": "LIO DCLabel",
        "module": "LIO.DCLabel",
        "name": "evalDC",
        "normalized": "DC a-\u003eIO(a,DCLabel)",
        "package": "lio-eci11",
        "partial": "DC",
        "signature": "DC a-\u003eIO(a,DCLabel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module manages a file store in which a label is associated\n    with every file and directory.  The file store is grouped into\n    directories by label.  Files are stored under names like:\n\u003c/p\u003e\u003cpre\u003e LabelHash/OpaqueName\n\u003c/pre\u003e\u003cp\u003ewhere LabelHash is a SHA-224 hash of the label, and OpaqueName is\n    either a regular file (containing contents) or a directory\n    populated exclusively by symbolic links pointing back into\n    LabelHash directories.  Each LabelHash directory also has a file\n    called\n\u003c/p\u003e\u003cpre\u003e LabelHash/LABEL\n\u003c/pre\u003e\u003cp\u003ewhich actually contains the label of all the files in that directory.\n\u003c/p\u003e\u003cp\u003eThere is also a symbolic link \u003ccode\u003eroot\u003c/code\u003e, pointing to the root\n    directory.  For efficiency, \u003ccode\u003eLabelHash\u003c/code\u003e actually consists of\n    multiple directories.\n\u003c/p\u003e\u003cp\u003eThere are two externally-visible abstractions. The first is\n    \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, which refers to a file name in a user directory, of the\n    form:\n\u003c/p\u003e\u003cpre\u003e LabelHash/OpaqueName/UserName\n\u003c/pre\u003e\u003cp\u003eThere is also a special \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erootDir\u003c/a\u003e\u003c/code\u003e, which refers to the\n    root directory.  Untrusted user code has access to the \u003ccode\u003e\u003ca\u003erootDir\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, and can walk the tree from there using the \u003ccode\u003e\u003ca\u003elookupName\u003c/a\u003e\u003c/code\u003e\n    function.  The \u003ca\u003eLIO.Handle\u003c/a\u003e module contains functions \u003ccode\u003emkDir\u003c/code\u003e and\n    \u003ccode\u003emkLHandle\u003c/code\u003e which permit untrusted code to make new \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es as\n    well as to do handle-based IO on protected files.\n\u003c/p\u003e\u003cp\u003eThe second is \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, which refers to one of the \u003ccode\u003eOpaqueName\u003c/code\u003es\n    that \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es point to.  Currently, any functions that operate on\n    \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es are in the IO Monad so as not to be executable by\n    untrusted code.  This is important because in order to use a file,\n    someone must have the right to know know that the file exists, and\n    this requires read permission on the file's \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.  It would be\n    insecure if untrusted code could execute openNode in the LIO\n    Monad.\n\u003c/p\u003e\u003cp\u003eNote that if a machine crashes, the code in this module could\n    leave the filesystem in an inconsistent state.  However, the code\n    tries to maitain the invariant that any inconsistencies will\n    either be:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e temporary files or directories whose names end with the\n         \"\u003ccode\u003e~\u003c/code\u003e\" character, or\n\u003c/li\u003e\u003cli\u003e  dangling symbolic links.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eBoth of these inconsistencies can be checked and cleaned up\n    locally without examining the whole file system.  The code tries\n    to fix up these inconsistencies on-the-fly as it encounters them.\n    However, it could possibly lieave some stranded temporary\n    \u003ccode\u003eLABEL...~\u003c/code\u003e files.  You could also end up with some weirdness like\n    a file that shows up in getDirectoryContents, but that you can't\n    open for reading.\n\u003c/p\u003e\u003cp\u003eTo keep from having to examine the whole file system to fix\n    errors, the code tries to maintain the invariant that if a\n    'Node'\\'s file name doesn't end with \u003ccode\u003e~\u003c/code\u003e, then there must be a\n    link pointing to it somewhere.  This is why the code uses a\n    separate \u003ccode\u003eNewNode\u003c/code\u003e type to represent a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e whose name ends \u003ccode\u003e~\u003c/code\u003e.\n    The function \u003ccode\u003e\u003ca\u003elinkNode\u003c/a\u003e\u003c/code\u003e renames the \u003ccode\u003eNewNode\u003c/code\u003e to a name without a\n    trailing \u003ccode\u003e~\u003c/code\u003e only after creating a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e that points to the\n    permenent \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e path.\n\u003c/p\u003e\u003cp\u003eAssuming a file system that preserves the order of metadata\n    operations, the code should mostly be okay to recover from any\n    crashes.  If using soft updates, which can re-order metadata\n    operations, you could end up with symbolic links that point\n    nowhere.\n\u003c/p\u003e\u003cp\u003eIn the worst case scenario if inconsistencies develop, you can\n    manually fix up the file system by deleting all danglinng symbolic\n    links and all files and directories ending \u003ccode\u003e~\u003c/code\u003e.  Make sure no\n    application is concurrently accessing the file system, however.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-FS.html",
        "fct-type": "module",
        "title": "FS"
      },
      "index": {
        "description": "This module manages file store in which label is associated with every file and directory The file store is grouped into directories by label Files are stored under names like LabelHash OpaqueName where LabelHash is SHA-224 hash of the label and OpaqueName is either regular file containing contents or directory populated exclusively by symbolic links pointing back into LabelHash directories Each LabelHash directory also has file called LabelHash LABEL which actually contains the label of all the files in that directory There is also symbolic link root pointing to the root directory For efficiency LabelHash actually consists of multiple directories There are two externally-visible abstractions The first is Name which refers to file name in user directory of the form LabelHash OpaqueName UserName There is also special Name rootDir which refers to the root directory Untrusted user code has access to the rootDir Name and can walk the tree from there using the lookupName function The LIO.Handle module contains functions mkDir and mkLHandle which permit untrusted code to make new Name as well as to do handle-based IO on protected files The second is Node which refers to one of the OpaqueName that Name point to Currently any functions that operate on Node are in the IO Monad so as not to be executable by untrusted code This is important because in order to use file someone must have the right to know know that the file exists and this requires read permission on the file Name It would be insecure if untrusted code could execute openNode in the LIO Monad Note that if machine crashes the code in this module could leave the filesystem in an inconsistent state However the code tries to maitain the invariant that any inconsistencies will either be temporary files or directories whose names end with the character or dangling symbolic links Both of these inconsistencies can be checked and cleaned up locally without examining the whole file system The code tries to fix up these inconsistencies on-the-fly as it encounters them However it could possibly lieave some stranded temporary LABEL files You could also end up with some weirdness like file that shows up in getDirectoryContents but that you can open for reading To keep from having to examine the whole file system to fix errors the code tries to maintain the invariant that if Node file name doesn end with then there must be link pointing to it somewhere This is why the code uses separate NewNode type to represent Node whose name ends The function linkNode renames the NewNode to name without trailing only after creating Name that points to the permenent Node path Assuming file system that preserves the order of metadata operations the code should mostly be okay to recover from any crashes If using soft updates which can re-order metadata operations you could end up with symbolic links that point nowhere In the worst case scenario if inconsistencies develop you can manually fix up the file system by deleting all danglinng symbolic links and all files and directories ending Make sure no application is concurrently accessing the file system however",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "FS",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "FS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eName\u003c/code\u003e type represents user-chosen (non-opaque) filenames of\n symbolic links, either \u003ccode\u003e\"root\"\u003c/code\u003e or pathnames of the form\n \u003ccode\u003eLabelHash/OpaqueName/filename\u003c/code\u003e.  Intermediary components of the\n file name must not be symbolic links.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-FS.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "The Name type represents user-chosen non-opaque filenames of symbolic links either root or pathnames of the form LabelHash OpaqueName filename Intermediary components of the file name must not be symbolic links",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "Name",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eNode\u003c/code\u003e type represents filenames of the form\n \u003ccode\u003eLabelHash/OpaqueName\u003c/code\u003e.  These names must always point to regular\n files or directories (not symbolic links).  There must always exist\n a file \u003ccode\u003eLabalHash/LABEL\u003c/code\u003e specifying the label of a \u003ccode\u003eNode\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-FS.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "The Node type represents filenames of the form LabelHash OpaqueName These names must always point to regular files or directories not symbolic links There must always exist file LabalHash LABEL specifying the label of Node",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "Node",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:getDirectoryContentsNode",
      "description": {
        "fct-descr": "\u003cp\u003eThie function is a wrapper around \u003ccode\u003e\u003ca\u003egetDirectoryContents\u003c/a\u003e\u003c/code\u003e that\n tries to fixup errors analogously to \u003ccode\u003e\u003ca\u003eopenNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "Node -\u003e IO [FilePath]",
        "fct-source": "src/LIO-FS.html#getDirectoryContentsNode",
        "fct-type": "function",
        "title": "getDirectoryContentsNode"
      },
      "index": {
        "description": "Thie function is wrapper around getDirectoryContents that tries to fixup errors analogously to openNode",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "getDirectoryContentsNode",
        "normalized": "Node-\u003eIO[FilePath]",
        "package": "lio-eci11",
        "partial": "Directory Contents Node",
        "signature": "Node-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:getRootDir",
      "description": {
        "fct-descr": "\u003cp\u003eGet the root directory for a particular label.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e Name l",
        "fct-source": "src/LIO-FS.html#getRootDir",
        "fct-type": "function",
        "title": "getRootDir"
      },
      "index": {
        "description": "Get the root directory for particular label",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "getRootDir",
        "normalized": "a-\u003eName a",
        "package": "lio-eci11",
        "partial": "Root Dir",
        "signature": "l-\u003eName l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:initFS",
      "description": {
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e IO ()",
        "fct-source": "src/LIO-FS.html#initFS",
        "fct-type": "function",
        "title": "initFS"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "initFS",
        "normalized": "a-\u003eIO()",
        "package": "lio-eci11",
        "partial": "FS",
        "signature": "l-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:labelOfName",
      "description": {
        "fct-descr": "\u003cp\u003eLabel protecting the name of a file.  Note that this is the label\n of the directory containing the file name, not the label of the\n Node that the file name designates.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "Name l -\u003e IO l",
        "fct-source": "src/LIO-FS.html#labelOfName",
        "fct-type": "function",
        "title": "labelOfName"
      },
      "index": {
        "description": "Label protecting the name of file Note that this is the label of the directory containing the file name not the label of the Node that the file name designates",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "labelOfName",
        "normalized": "Name a-\u003eIO a",
        "package": "lio-eci11",
        "partial": "Of Name",
        "signature": "Name l-\u003eIO l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:labelOfNode",
      "description": {
        "fct-descr": "\u003cp\u003eLabel protecting the contents of a node.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "Node -\u003e IO l",
        "fct-source": "src/LIO-FS.html#labelOfNode",
        "fct-type": "function",
        "title": "labelOfNode"
      },
      "index": {
        "description": "Label protecting the contents of node",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "labelOfNode",
        "normalized": "Node-\u003eIO a",
        "package": "lio-eci11",
        "partial": "Of Node",
        "signature": "Node-\u003eIO l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:linkNode",
      "description": {
        "fct-descr": "\u003cp\u003eAssign a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003eNewNode\u003c/code\u003e, turning it into a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.  Note\n that unlike the Unix file system, only a single link may be created\n to each node.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "NewNode -\u003e Name l -\u003e IO Node",
        "fct-source": "src/LIO-FS.html#linkNode",
        "fct-type": "function",
        "title": "linkNode"
      },
      "index": {
        "description": "Assign Name to NewNode turning it into Node Note that unlike the Unix file system only single link may be created to each node",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "linkNode",
        "normalized": "NewNode-\u003eName a-\u003eIO Node",
        "package": "lio-eci11",
        "partial": "Node",
        "signature": "NewNode-\u003eName l-\u003eIO Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:lookupName",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up a FilePath, turning it into a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, and raising to\n current label to reflect all directories traversed.  Note that this\n only looks up a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e; it does not ensure the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e actually\n exists.  The intent is that you call \u003ccode\u003elookupName\u003c/code\u003e before creating\n or opening files.\n\u003c/p\u003e\u003cp\u003eNote that this function will touch bad parts of the file system if\n it is supplied with a malicous \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.  Thus, it is important to\n keep the constructor of \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e private, so that the only way for\n user code to generate names is to start with \u003ccode\u003e\u003ca\u003erootDir\u003c/a\u003e\u003c/code\u003e and call\n \u003ccode\u003elookupName\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e Name l-\u003e FilePath-\u003e LIO l s (Name l)",
        "fct-type": "function",
        "title": "lookupName"
      },
      "index": {
        "description": "Looks up FilePath turning it into Name and raising to current label to reflect all directories traversed Note that this only looks up Name it does not ensure the Name actually exists The intent is that you call lookupName before creating or opening files Note that this function will touch bad parts of the file system if it is supplied with malicous Name Thus it is important to keep the constructor of Name private so that the only way for user code to generate names is to start with rootDir and call lookupName",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "lookupName",
        "normalized": "a-\u003eName b-\u003eFilePath-\u003eLIO b c(Name b)",
        "package": "lio-eci11",
        "partial": "Name",
        "signature": "p-\u003eName l-\u003eFilePath-\u003eLIO l s(Name l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:lookupNode",
      "description": {
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e Name l-\u003e FilePath-\u003e Bool-\u003e LIO l s Node",
        "fct-type": "function",
        "title": "lookupNode"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "lookupNode",
        "normalized": "a-\u003eName b-\u003eFilePath-\u003eBool-\u003eLIO b c Node",
        "package": "lio-eci11",
        "partial": "Node",
        "signature": "p-\u003eName l-\u003eFilePath-\u003eBool-\u003eLIO l s Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:mkNode",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new Node in the appropriate directory for a given label.\n The node gets created with an extra ~ appended, and wrapped in the\n type \u003ccode\u003eNewNode\u003c/code\u003e to reflect this fact.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "l-\u003e (FilePath -\u003e String -\u003e IO (a, FilePath))-\u003e IO (a, NewNode)",
        "fct-type": "function",
        "title": "mkNode"
      },
      "index": {
        "description": "Create new Node in the appropriate directory for given label The node gets created with an extra appended and wrapped in the type NewNode to reflect this fact",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "mkNode",
        "normalized": "a-\u003e(FilePath-\u003eString-\u003eIO(b,FilePath))-\u003eIO(b,NewNode)",
        "package": "lio-eci11",
        "partial": "Node",
        "signature": "l-\u003e(FilePath-\u003eString-\u003eIO(a,FilePath))-\u003eIO(a,NewNode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:mkNodeDir",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around mkNode to create a directory.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e IO NewNode",
        "fct-source": "src/LIO-FS.html#mkNodeDir",
        "fct-type": "function",
        "title": "mkNodeDir"
      },
      "index": {
        "description": "Wrapper around mkNode to create directory",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "mkNodeDir",
        "normalized": "a-\u003eIO NewNode",
        "package": "lio-eci11",
        "partial": "Node Dir",
        "signature": "l-\u003eIO NewNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:mkNodeReg",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around mkNode to create a regular file.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "IOMode -\u003e l -\u003e IO (Handle, NewNode)",
        "fct-source": "src/LIO-FS.html#mkNodeReg",
        "fct-type": "function",
        "title": "mkNodeReg"
      },
      "index": {
        "description": "Wrapper around mkNode to create regular file",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "mkNodeReg",
        "normalized": "IOMode-\u003ea-\u003eIO(Handle,NewNode)",
        "package": "lio-eci11",
        "partial": "Node Reg",
        "signature": "IOMode-\u003el-\u003eIO(Handle,NewNode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:mkRootDir",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a root directory for a particular label.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e LIO l s (Name l)",
        "fct-source": "src/LIO-FS.html#mkRootDir",
        "fct-type": "function",
        "title": "mkRootDir"
      },
      "index": {
        "description": "Creates root directory for particular label",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "mkRootDir",
        "normalized": "a-\u003eb-\u003eLIO b c(Name b)",
        "package": "lio-eci11",
        "partial": "Root Dir",
        "signature": "p-\u003el-\u003eLIO l s(Name l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:mkTmpDirL",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a temporary directory in an existing directory (or\n label-specific root directory, if the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e argument comes from\n \u003ccode\u003e\u003ca\u003egetRootDir\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e l-\u003e Name l-\u003e String-\u003e LIO l s (FilePath, Name l)",
        "fct-type": "function",
        "title": "mkTmpDirL"
      },
      "index": {
        "description": "Creates temporary directory in an existing directory or label-specific root directory if the Name argument comes from getRootDir",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "mkTmpDirL",
        "normalized": "a-\u003eb-\u003eName b-\u003eString-\u003eLIO b c(FilePath,Name b)",
        "package": "lio-eci11",
        "partial": "Tmp Dir",
        "signature": "p-\u003el-\u003eName l-\u003eString-\u003eLIO l s(FilePath,Name l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:nodeOfName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e that a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e is pointing to.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "Name l -\u003e IO Node",
        "fct-source": "src/LIO-FS.html#nodeOfName",
        "fct-type": "function",
        "title": "nodeOfName"
      },
      "index": {
        "description": "Node that Name is pointing to",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "nodeOfName",
        "normalized": "Name a-\u003eIO Node",
        "package": "lio-eci11",
        "partial": "Of Name",
        "signature": "Name l-\u003eIO Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:openNode",
      "description": {
        "fct-descr": "\u003cp\u003eThie function just calls \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e on the filename in a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n However, on the off chance that the file system is in an\n inconsistent state (e.g., because of a crash during a call to\n \u003ccode\u003e\u003ca\u003elinkNode\u003c/a\u003e\u003c/code\u003e), it tries to finish creating a partially created\n \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "Node -\u003e IOMode -\u003e IO Handle",
        "fct-source": "src/LIO-FS.html#openNode",
        "fct-type": "function",
        "title": "openNode"
      },
      "index": {
        "description": "Thie function just calls openFile on the filename in Node However on the off chance that the file system is in an inconsistent state e.g because of crash during call to linkNode it tries to finish creating partially created Node",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "openNode",
        "normalized": "Node-\u003eIOMode-\u003eIO Handle",
        "package": "lio-eci11",
        "partial": "Node",
        "signature": "Node-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:rootDir",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the root directory for the default root label.  (There is\n a root directory for each label, but only one label is the\n default.)\n\u003c/p\u003e",
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s (Name l)",
        "fct-source": "src/LIO-FS.html#rootDir",
        "fct-type": "function",
        "title": "rootDir"
      },
      "index": {
        "description": "Return the root directory for the default root label There is root directory for each label but only one label is the default",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "rootDir",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-FS.html#v:tryPred",
      "description": {
        "fct-module": "LIO.FS",
        "fct-package": "lio-eci11",
        "fct-signature": "(e -\u003e Bool) -\u003e IO a -\u003e IO (Either e a)",
        "fct-source": "src/LIO-FS.html#tryPred",
        "fct-type": "function",
        "title": "tryPred"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO FS",
        "module": "LIO.FS",
        "name": "tryPred",
        "normalized": "(a-\u003eBool)-\u003eIO b-\u003eIO(Either a b)",
        "package": "lio-eci11",
        "partial": "Pred",
        "signature": "(e-\u003eBool)-\u003eIO a-\u003eIO(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module abstracts the basic \u003ccode\u003eFileHandle\u003c/code\u003e methods provided by\n the system library, and provides an \u003ccode\u003e\u003ca\u003eLHandle\u003c/a\u003e\u003c/code\u003e (Labeled Handle) type\n that can be manipulated from within the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e Monad.  Two lower\n level functions, \u003ccode\u003e\u003ca\u003emkDir\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emkLHandle\u003c/a\u003e\u003c/code\u003e may be useful for\n functions that wish to open file names that are not relative to\n \u003ccode\u003e\u003ca\u003erootDir\u003c/a\u003e\u003c/code\u003e.  (There is no notion of changeable current working\n directory in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e Monad.)\n\u003c/p\u003e\u003cp\u003eThe actual storage of labeled files is handled by the \u003ca\u003eLIO.FS\u003c/a\u003e\n module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-Handle.html",
        "fct-type": "module",
        "title": "Handle"
      },
      "index": {
        "description": "This module abstracts the basic FileHandle methods provided by the system library and provides an LHandle Labeled Handle type that can be manipulated from within the LIO Monad Two lower level functions mkDir and mkLHandle may be useful for functions that wish to open file names that are not relative to rootDir There is no notion of changeable current working directory in the LIO Monad The actual storage of labeled files is handled by the LIO.FS module",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "Handle",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#t:CloseOps",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-Handle.html#CloseOps",
        "fct-type": "class",
        "title": "CloseOps"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "CloseOps",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Close Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#t:DirectoryOps",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-Handle.html#DirectoryOps",
        "fct-type": "class",
        "title": "DirectoryOps"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "DirectoryOps",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Directory Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#t:HandleOps",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-Handle.html#HandleOps",
        "fct-type": "class",
        "title": "HandleOps"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "HandleOps",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Handle Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eSystem.IO.openFile\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "See System.IO.openFile",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "IOMode",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#t:LHandle",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-Handle.html#LHandle",
        "fct-type": "data",
        "title": "LHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "LHandle",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LHandle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:AppendMode",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "AppendMode",
        "fct-type": "function",
        "title": "AppendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "AppendMode",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:ReadMode",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "ReadMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "ReadMode",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:ReadWriteMode",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "ReadWriteMode",
        "fct-type": "function",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:WriteMode",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "WriteMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "WriteMode",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:createDirectory",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/LIO-Handle.html#createDirectory",
        "fct-type": "method",
        "title": "createDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "createDirectory",
        "normalized": "FilePath-\u003ea()",
        "package": "lio-eci11",
        "partial": "Directory",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:createDirectoryP",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e FilePath -\u003e LIO l s ()",
        "fct-source": "src/LIO-Handle.html#createDirectoryP",
        "fct-type": "function",
        "title": "createDirectoryP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "createDirectoryP",
        "normalized": "a-\u003eFilePath-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "Directory",
        "signature": "p-\u003eFilePath-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:createDirectoryPR",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e Name l -\u003e FilePath -\u003e LIO l s ()",
        "fct-source": "src/LIO-Handle.html#createDirectoryPR",
        "fct-type": "function",
        "title": "createDirectoryPR"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "createDirectoryPR",
        "normalized": "a-\u003eName b-\u003eFilePath-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "Directory PR",
        "signature": "p-\u003eName l-\u003eFilePath-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:getDirectoryContents",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath -\u003e m [FilePath]",
        "fct-source": "src/LIO-Handle.html#getDirectoryContents",
        "fct-type": "method",
        "title": "getDirectoryContents"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "getDirectoryContents",
        "normalized": "FilePath-\u003ea[FilePath]",
        "package": "lio-eci11",
        "partial": "Directory Contents",
        "signature": "FilePath-\u003em[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hClose",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e m ()",
        "fct-source": "src/LIO-Handle.html#hClose",
        "fct-type": "method",
        "title": "hClose"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hClose",
        "normalized": "a-\u003eb()",
        "package": "lio-eci11",
        "partial": "Close",
        "signature": "h-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hFlush",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e m ()",
        "fct-source": "src/LIO-Handle.html#hFlush",
        "fct-type": "method",
        "title": "hFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hFlush",
        "normalized": "a-\u003eb()",
        "package": "lio-eci11",
        "partial": "Flush",
        "signature": "h-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hGet",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e Int -\u003e m b",
        "fct-source": "src/LIO-Handle.html#hGet",
        "fct-type": "method",
        "title": "hGet"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hGet",
        "normalized": "a-\u003eInt-\u003eb c",
        "package": "lio-eci11",
        "partial": "Get",
        "signature": "h-\u003eInt-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hGetContents",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e m b",
        "fct-source": "src/LIO-Handle.html#hGetContents",
        "fct-type": "method",
        "title": "hGetContents"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hGetContents",
        "normalized": "a-\u003eb c",
        "package": "lio-eci11",
        "partial": "Get Contents",
        "signature": "h-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hGetNonBlocking",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e Int -\u003e m b",
        "fct-source": "src/LIO-Handle.html#hGetNonBlocking",
        "fct-type": "method",
        "title": "hGetNonBlocking"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hGetNonBlocking",
        "normalized": "a-\u003eInt-\u003eb c",
        "package": "lio-eci11",
        "partial": "Get Non Blocking",
        "signature": "h-\u003eInt-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hPut",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e b -\u003e m ()",
        "fct-source": "src/LIO-Handle.html#hPut",
        "fct-type": "method",
        "title": "hPut"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hPut",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "lio-eci11",
        "partial": "Put",
        "signature": "h-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hPutStrLn",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "h -\u003e b -\u003e m ()",
        "fct-source": "src/LIO-Handle.html#hPutStrLn",
        "fct-type": "method",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hPutStrLn",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "lio-eci11",
        "partial": "Put Str Ln",
        "signature": "h-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:hlabelOf",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "LHandle l h -\u003e l",
        "fct-source": "src/LIO-Handle.html#hlabelOf",
        "fct-type": "function",
        "title": "hlabelOf"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "hlabelOf",
        "normalized": "LHandle a b-\u003ea",
        "package": "lio-eci11",
        "partial": "Of",
        "signature": "LHandle l h-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:mkDir",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e l-\u003e Name l-\u003e FilePath-\u003e LIO l s ()",
        "fct-type": "function",
        "title": "mkDir"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "mkDir",
        "normalized": "a-\u003eb-\u003eName b-\u003eFilePath-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "Dir",
        "signature": "p-\u003el-\u003eName l-\u003eFilePath-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:mkLHandle",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e l-\u003e Name l-\u003e FilePath-\u003e IOMode-\u003e LIO l s (LHandle l Handle)",
        "fct-type": "function",
        "title": "mkLHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "mkLHandle",
        "normalized": "a-\u003eb-\u003eName b-\u003eFilePath-\u003eIOMode-\u003eLIO b c(LHandle b Handle)",
        "package": "lio-eci11",
        "partial": "LHandle",
        "signature": "p-\u003el-\u003eName l-\u003eFilePath-\u003eIOMode-\u003eLIO l s(LHandle l Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:openFile",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath -\u003e IOMode -\u003e m h",
        "fct-source": "src/LIO-Handle.html#openFile",
        "fct-type": "method",
        "title": "openFile"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "openFile",
        "normalized": "FilePath-\u003eIOMode-\u003ea b",
        "package": "lio-eci11",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003em h"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:openFileP",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e FilePath -\u003e IOMode -\u003e LIO l s (LHandle l Handle)",
        "fct-source": "src/LIO-Handle.html#openFileP",
        "fct-type": "function",
        "title": "openFileP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "openFileP",
        "normalized": "a-\u003eFilePath-\u003eIOMode-\u003eLIO b c(LHandle b Handle)",
        "package": "lio-eci11",
        "partial": "File",
        "signature": "p-\u003eFilePath-\u003eIOMode-\u003eLIO l s(LHandle l Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:openFilePR",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e Name l -\u003e FilePath -\u003e IOMode -\u003e LIO l s (LHandle l Handle)",
        "fct-source": "src/LIO-Handle.html#openFilePR",
        "fct-type": "function",
        "title": "openFilePR"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "openFilePR",
        "normalized": "a-\u003eName b-\u003eFilePath-\u003eIOMode-\u003eLIO b c(LHandle b Handle)",
        "package": "lio-eci11",
        "partial": "File PR",
        "signature": "p-\u003eName l-\u003eFilePath-\u003eIOMode-\u003eLIO l s(LHandle l Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:readFile",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath -\u003e m b",
        "fct-source": "src/LIO-Handle.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "readFile",
        "normalized": "FilePath-\u003ea b",
        "package": "lio-eci11",
        "partial": "File",
        "signature": "FilePath-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:writeFile",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath -\u003e b -\u003e m ()",
        "fct-source": "src/LIO-Handle.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "writeFile",
        "normalized": "FilePath-\u003ea-\u003eb()",
        "package": "lio-eci11",
        "partial": "File",
        "signature": "FilePath-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:writeFileP",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e FilePath -\u003e b -\u003e LIO l s ()",
        "fct-source": "src/LIO-Handle.html#writeFileP",
        "fct-type": "function",
        "title": "writeFileP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "writeFileP",
        "normalized": "a-\u003eFilePath-\u003eb-\u003eLIO c d()",
        "package": "lio-eci11",
        "partial": "File",
        "signature": "p-\u003eFilePath-\u003eb-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-Handle.html#v:writeFilePR",
      "description": {
        "fct-module": "LIO.Handle",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e Name l -\u003e FilePath -\u003e b -\u003e LIO l s ()",
        "fct-source": "src/LIO-Handle.html#writeFilePR",
        "fct-type": "function",
        "title": "writeFilePR"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO Handle",
        "module": "LIO.Handle",
        "name": "writeFilePR",
        "normalized": "a-\u003eName b-\u003eFilePath-\u003ec-\u003eLIO b d()",
        "package": "lio-eci11",
        "partial": "File PR",
        "signature": "p-\u003eName l-\u003eFilePath-\u003eb-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-HiStar.html",
        "fct-type": "module",
        "title": "HiStar"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HiStar",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Hi Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#t:HS",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "type",
        "fct-source": "src/LIO-HiStar.html#HS",
        "fct-type": "type",
        "title": "HS"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HS",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#t:HSCategory",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/LIO-HiStar.html#HSCategory",
        "fct-type": "newtype",
        "title": "HSCategory"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSCategory",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSCategory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#t:HSLabel",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-HiStar.html#HSLabel",
        "fct-type": "data",
        "title": "HSLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSLabel",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#t:HSLevel",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-HiStar.html#HSLevel",
        "fct-type": "data",
        "title": "HSLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSLevel",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSLevel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#t:HSPrivs",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "newtype",
        "fct-source": "src/LIO-HiStar.html#HSPrivs",
        "fct-type": "newtype",
        "title": "HSPrivs"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSPrivs",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSPrivs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#t:HSState",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-HiStar.html#HSState",
        "fct-type": "data",
        "title": "HSState"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSState",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:HSC",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSC Integer",
        "fct-source": "src/LIO-HiStar.html#HSCategory",
        "fct-type": "function",
        "title": "HSC"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSC",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:HSL",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSL (Map HSCategory HSLevel) HSLevel",
        "fct-source": "src/LIO-HiStar.html#HSLabel",
        "fct-type": "function",
        "title": "HSL"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSL",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:HSPrivs",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSPrivs [HSCategory]",
        "fct-source": "src/LIO-HiStar.html#HSPrivs",
        "fct-type": "function",
        "title": "HSPrivs"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSPrivs",
        "normalized": "HSPrivs[HSCategory]",
        "package": "lio-eci11",
        "partial": "HSPrivs",
        "signature": "HSPrivs[HSCategory]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:HSState",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSState",
        "fct-source": "src/LIO-HiStar.html#HSState",
        "fct-type": "function",
        "title": "HSState"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "HSState",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "HSState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:L0",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "L0",
        "fct-source": "src/LIO-HiStar.html#HSLevel",
        "fct-type": "function",
        "title": "L0"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "L0",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:L1",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "L1",
        "fct-source": "src/LIO-HiStar.html#HSLevel",
        "fct-type": "function",
        "title": "L1"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "L1",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:L2",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "L2",
        "fct-source": "src/LIO-HiStar.html#HSLevel",
        "fct-type": "function",
        "title": "L2"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "L2",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:L3",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "L3",
        "fct-source": "src/LIO-HiStar.html#HSLevel",
        "fct-type": "function",
        "title": "L3"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "L3",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:assocs2",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "Map k v1 -\u003e Map k v2 -\u003e [(k, Maybe v1, Maybe v2)]",
        "fct-source": "src/LIO-HiStar.html#assocs2",
        "fct-type": "function",
        "title": "assocs2"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "assocs2",
        "normalized": "Map a b-\u003eMap a b-\u003e[(a,Maybe b,Maybe b)]",
        "package": "lio-eci11",
        "partial": "",
        "signature": "Map k v-\u003eMap k v-\u003e[(k,Maybe v,Maybe v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:combineLabel",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "(HSLevel -\u003e HSLevel -\u003e HSLevel) -\u003e HSLabel -\u003e HSLabel -\u003e HSLabel",
        "fct-source": "src/LIO-HiStar.html#combineLabel",
        "fct-type": "function",
        "title": "combineLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "combineLabel",
        "normalized": "(HSLevel-\u003eHSLevel-\u003eHSLevel)-\u003eHSLabel-\u003eHSLabel-\u003eHSLabel",
        "package": "lio-eci11",
        "partial": "Label",
        "signature": "(HSLevel-\u003eHSLevel-\u003eHSLevel)-\u003eHSLabel-\u003eHSLabel-\u003eHSLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:evalHS",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HS t -\u003e IO (t, HSLabel)",
        "fct-source": "src/LIO-HiStar.html#evalHS",
        "fct-type": "function",
        "title": "evalHS"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "evalHS",
        "normalized": "HS a-\u003eIO(a,HSLabel)",
        "package": "lio-eci11",
        "partial": "HS",
        "signature": "HS t-\u003eIO(t,HSLabel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:lapply",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSLabel -\u003e HSCategory -\u003e HSLevel",
        "fct-source": "src/LIO-HiStar.html#lapply",
        "fct-type": "function",
        "title": "lapply"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "lapply",
        "normalized": "HSLabel-\u003eHSCategory-\u003eHSLevel",
        "package": "lio-eci11",
        "partial": "",
        "signature": "HSLabel-\u003eHSCategory-\u003eHSLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:lupdate",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSLabel -\u003e HSCategory -\u003e HSLevel -\u003e HSLabel",
        "fct-source": "src/LIO-HiStar.html#lupdate",
        "fct-type": "function",
        "title": "lupdate"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "lupdate",
        "normalized": "HSLabel-\u003eHSCategory-\u003eHSLevel-\u003eHSLabel",
        "package": "lio-eci11",
        "partial": "",
        "signature": "HSLabel-\u003eHSCategory-\u003eHSLevel-\u003eHSLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:lupdates",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSLabel -\u003e [HSCategory] -\u003e HSLevel -\u003e HSLabel",
        "fct-source": "src/LIO-HiStar.html#lupdates",
        "fct-type": "function",
        "title": "lupdates"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "lupdates",
        "normalized": "HSLabel-\u003e[HSCategory]-\u003eHSLevel-\u003eHSLabel",
        "package": "lio-eci11",
        "partial": "",
        "signature": "HSLabel-\u003e[HSCategory]-\u003eHSLevel-\u003eHSLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:mergeWith",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "(Maybe a -\u003e Maybe b -\u003e Maybe c) -\u003e Map k a -\u003e Map k b -\u003e Map k c",
        "fct-source": "src/LIO-HiStar.html#mergeWith",
        "fct-type": "function",
        "title": "mergeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "mergeWith",
        "normalized": "(Maybe a-\u003eMaybe b-\u003eMaybe c)-\u003eMap d a-\u003eMap d b-\u003eMap d c",
        "package": "lio-eci11",
        "partial": "With",
        "signature": "(Maybe a-\u003eMaybe b-\u003eMaybe c)-\u003eMap k a-\u003eMap k b-\u003eMap k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:newcat",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "HSLevel -\u003e HS (HSPrivs, HSLabel)",
        "fct-source": "src/LIO-HiStar.html#newcat",
        "fct-type": "function",
        "title": "newcat"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "newcat",
        "normalized": "HSLevel-\u003eHS(HSPrivs,HSLabel)",
        "package": "lio-eci11",
        "partial": "",
        "signature": "HSLevel-\u003eHS(HSPrivs,HSLabel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:nextCat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "IORef HSCategory",
        "fct-source": "src/LIO-HiStar.html#HSState",
        "fct-type": "function",
        "title": "nextCat"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "nextCat",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Cat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-HiStar.html#v:withDefaults",
      "description": {
        "fct-module": "LIO.HiStar",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e a -\u003e (a -\u003e a -\u003e b) -\u003e Maybe a -\u003e Maybe a -\u003e b",
        "fct-source": "src/LIO-HiStar.html#withDefaults",
        "fct-type": "function",
        "title": "withDefaults"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO HiStar",
        "module": "LIO.HiStar",
        "name": "withDefaults",
        "normalized": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eMaybe a-\u003eMaybe a-\u003eb",
        "package": "lio-eci11",
        "partial": "Defaults",
        "signature": "a-\u003ea-\u003e(a-\u003ea-\u003eb)-\u003eMaybe a-\u003eMaybe a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main module to be included by code using the Labeled\n   IO (LIO) library.  The core of the library is documented in the\n   \u003ca\u003eLIO.TCB\u003c/a\u003e module.  Note, however, that unprivileged code must not\n   be allowed to import \u003ca\u003eLIO.TCB\u003c/a\u003e--instead, a module \u003ca\u003eLIO.Base\u003c/a\u003e\n   exports just the safe symbols from \u003ca\u003eLIO.TCB\u003c/a\u003e.  This module,\n   \u003ca\u003eLIO.LIO\u003c/a\u003e, re-exports \u003ca\u003eLIO.Base\u003c/a\u003e as well as a few other handy\n   modules.  For many modules it should be the only import necessary.\n\u003c/p\u003e\u003cp\u003eCertain symbols in the LIO library supersede variants in the\n   standard Haskell libraries.  Thus, depending on the modules\n   imported and functions used, you may wish to import LIO with\n   commands like these:\n\u003c/p\u003e\u003cpre\u003e\n    import Prelude hiding (\u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e)\n    import Control.Exception hiding (\u003ccode\u003ethrowIO\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ehandle\u003c/code\u003e, \u003ccode\u003eonException\u003c/code\u003e\n                                    , \u003ccode\u003ebracket\u003c/code\u003e, \u003ccode\u003eblock\u003c/code\u003e, \u003ccode\u003eunblock\u003c/code\u003e)\n    import LIO.LIO\n\u003c/pre\u003e\u003cp\u003eThe LIO variants of the system functions hidden in the above import\n   commands are designed to work in both the IO and LIO monads, making\n   it easier to have both types of code in the same module.\n\u003c/p\u003e\u003cp\u003eWarning:  For security, at a minimum untrusted code must not be\n        allowed to do any of the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Import \u003ca\u003eLIO.TCB\u003c/a\u003e,\n\u003c/li\u003e\u003cli\u003e Use any symbols with names ending \u003ccode\u003e...TCB\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e Use the \u003ccode\u003eforeign\u003c/code\u003e keyword,\n\u003c/li\u003e\u003cli\u003e Use functions such as \u003ccode\u003eunsafePerformIO\u003c/code\u003e, \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e,\n            \u003ccode\u003einlinePerformIO\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e Use language extensions such as Generalized Newtype\n            Deriving and Stand-alone Deriving to extend LIO types\n            (such as by deriving an instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for \u003ccode\u003eLref\u003c/code\u003e,\n            or deriving an instance of the \u003ccode\u003e\u003ccode\u003eMonadTrans\u003c/code\u003e\u003c/code\u003e class for\n            \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e, which would allow untrusted code to bypass all\n            security with \u003ccode\u003elift\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e Manually define \u003ccode\u003etypeOf\u003c/code\u003e methods (as this would cause the\n            supposedly safe \u003ccode\u003ecast\u003c/code\u003e method to make usafe casts); automatically\n            deriving \u003ccode\u003eTypeable\u003c/code\u003e should be safe.\n\u003c/li\u003e\u003cli\u003e Define new \u003ccode\u003eIx\u003c/code\u003e instances (which could produce out of bounds\n            array references).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn general, pragmas and imports should be highly scrutinized.  For\n        example, most of the \u003ca\u003eForeign\u003c/a\u003e class of modules are probably\n        dangerous. With GHC 7.2, we will use the SafeHaskell extension \n        to enforce these.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.LIO",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-LIO.html",
        "fct-type": "module",
        "title": "LIO"
      },
      "index": {
        "description": "This is the main module to be included by code using the Labeled IO LIO library The core of the library is documented in the LIO.TCB module Note however that unprivileged code must not be allowed to import LIO.TCB instead module LIO.Base exports just the safe symbols from LIO.TCB This module LIO.LIO re-exports LIO.Base as well as few other handy modules For many modules it should be the only import necessary Certain symbols in the LIO library supersede variants in the standard Haskell libraries Thus depending on the modules imported and functions used you may wish to import LIO with commands like these import Prelude hiding readFile writeFile catch import Control.Exception hiding throwIO catch handle onException bracket block unblock import LIO.LIO The LIO variants of the system functions hidden in the above import commands are designed to work in both the IO and LIO monads making it easier to have both types of code in the same module Warning For security at minimum untrusted code must not be allowed to do any of the following Import LIO.TCB Use any symbols with names ending TCB Use the foreign keyword Use functions such as unsafePerformIO unsafeInterleaveIO inlinePerformIO Use language extensions such as Generalized Newtype Deriving and Stand-alone Deriving to extend LIO types such as by deriving an instance of Show for Lref or deriving an instance of the MonadTrans class for LIO which would allow untrusted code to bypass all security with lift Manually define typeOf methods as this would cause the supposedly safe cast method to make usafe casts automatically deriving Typeable should be safe Define new Ix instances which could produce out of bounds array references In general pragmas and imports should be highly scrutinized For example most of the Foreign class of modules are probably dangerous With GHC we will use the SafeHaskell extension to enforce these",
        "hierarchy": "LIO LIO",
        "module": "LIO.LIO",
        "name": "LIO",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements labeled IORefs.  The interface is analogous\n to \u003ca\u003eData.IORef\u003c/a\u003e, but the operations take place in the LIO monad.\n Moreover, reading the LIORef calls taint, while writing it calls\n wguard.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-LIORef.html",
        "fct-type": "module",
        "title": "LIORef"
      },
      "index": {
        "description": "This module implements labeled IORefs The interface is analogous to Data.IORef but the operations take place in the LIO monad Moreover reading the LIORef calls taint while writing it calls wguard",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "LIORef",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#t:LIORef",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-LIORef.html#LIORef",
        "fct-type": "data",
        "title": "LIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "LIORef",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:atomicModifyLIORef",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e (a -\u003e (a, b)) -\u003e LIO l s b",
        "fct-source": "src/LIO-LIORef.html#atomicModifyLIORef",
        "fct-type": "function",
        "title": "atomicModifyLIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "atomicModifyLIORef",
        "normalized": "LIORef a b-\u003e(b-\u003e(b,c))-\u003eLIO a d c",
        "package": "lio-eci11",
        "partial": "Modify LIORef",
        "signature": "LIORef l a-\u003e(a-\u003e(a,b))-\u003eLIO l s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:atomicModifyLIORefP",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e LIORef l a -\u003e (a -\u003e (a, b)) -\u003e LIO l s b",
        "fct-source": "src/LIO-LIORef.html#atomicModifyLIORefP",
        "fct-type": "function",
        "title": "atomicModifyLIORefP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "atomicModifyLIORefP",
        "normalized": "a-\u003eLIORef b c-\u003e(c-\u003e(c,d))-\u003eLIO b e d",
        "package": "lio-eci11",
        "partial": "Modify LIORef",
        "signature": "p-\u003eLIORef l a-\u003e(a-\u003e(a,b))-\u003eLIO l s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:atomicModifyLIORefTCB",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e (a -\u003e (a, b)) -\u003e LIO l s b",
        "fct-source": "src/LIO-LIORef.html#atomicModifyLIORefTCB",
        "fct-type": "function",
        "title": "atomicModifyLIORefTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "atomicModifyLIORefTCB",
        "normalized": "LIORef a b-\u003e(b-\u003e(b,c))-\u003eLIO a d c",
        "package": "lio-eci11",
        "partial": "Modify LIORef TCB",
        "signature": "LIORef l a-\u003e(a-\u003e(a,b))-\u003eLIO l s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:labelOfLIORef",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e l",
        "fct-source": "src/LIO-LIORef.html#labelOfLIORef",
        "fct-type": "function",
        "title": "labelOfLIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "labelOfLIORef",
        "normalized": "LIORef a b-\u003ea",
        "package": "lio-eci11",
        "partial": "Of LIORef",
        "signature": "LIORef l a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:newLIORef",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e a -\u003e LIO l s (LIORef l a)",
        "fct-source": "src/LIO-LIORef.html#newLIORef",
        "fct-type": "function",
        "title": "newLIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "newLIORef",
        "normalized": "a-\u003eb-\u003eLIO a c(LIORef a b)",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": "l-\u003ea-\u003eLIO l s(LIORef l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:newLIORefP",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e a -\u003e LIO l s (LIORef l a)",
        "fct-source": "src/LIO-LIORef.html#newLIORefP",
        "fct-type": "function",
        "title": "newLIORefP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "newLIORefP",
        "normalized": "a-\u003eb-\u003ec-\u003eLIO b d(LIORef b c)",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": "p-\u003el-\u003ea-\u003eLIO l s(LIORef l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:newLIORefTCB",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e a -\u003e LIO l s (LIORef l a)",
        "fct-source": "src/LIO-LIORef.html#newLIORefTCB",
        "fct-type": "function",
        "title": "newLIORefTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "newLIORefTCB",
        "normalized": "a-\u003eb-\u003eLIO a c(LIORef a b)",
        "package": "lio-eci11",
        "partial": "LIORef TCB",
        "signature": "l-\u003ea-\u003eLIO l s(LIORef l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:readLIORef",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e LIO l s a",
        "fct-source": "src/LIO-LIORef.html#readLIORef",
        "fct-type": "function",
        "title": "readLIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "readLIORef",
        "normalized": "LIORef a b-\u003eLIO a c b",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": "LIORef l a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:readLIORefP",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e LIORef l a -\u003e LIO l s a",
        "fct-source": "src/LIO-LIORef.html#readLIORefP",
        "fct-type": "function",
        "title": "readLIORefP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "readLIORefP",
        "normalized": "a-\u003eLIORef b c-\u003eLIO b d c",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": "p-\u003eLIORef l a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:readLIORefTCB",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e LIO l s a",
        "fct-source": "src/LIO-LIORef.html#readLIORefTCB",
        "fct-type": "function",
        "title": "readLIORefTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "readLIORefTCB",
        "normalized": "LIORef a b-\u003eLIO a c b",
        "package": "lio-eci11",
        "partial": "LIORef TCB",
        "signature": "LIORef l a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:writeLIORef",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e a -\u003e LIO l s ()",
        "fct-source": "src/LIO-LIORef.html#writeLIORef",
        "fct-type": "function",
        "title": "writeLIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "writeLIORef",
        "normalized": "LIORef a b-\u003eb-\u003eLIO a c()",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": "LIORef l a-\u003ea-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:writeLIORefP",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e LIORef l a -\u003e a -\u003e LIO l s ()",
        "fct-source": "src/LIO-LIORef.html#writeLIORefP",
        "fct-type": "function",
        "title": "writeLIORefP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "writeLIORefP",
        "normalized": "a-\u003eLIORef b c-\u003ec-\u003eLIO b d()",
        "package": "lio-eci11",
        "partial": "LIORef",
        "signature": "p-\u003eLIORef l a-\u003ea-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-LIORef.html#v:writeLIORefTCB",
      "description": {
        "fct-module": "LIO.LIORef",
        "fct-package": "lio-eci11",
        "fct-signature": "LIORef l a -\u003e a -\u003e LIO l s ()",
        "fct-source": "src/LIO-LIORef.html#writeLIORefTCB",
        "fct-type": "function",
        "title": "writeLIORefTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO LIORef",
        "module": "LIO.LIORef",
        "name": "writeLIORefTCB",
        "normalized": "LIORef a b-\u003eb-\u003eLIO a c()",
        "package": "lio-eci11",
        "partial": "LIORef TCB",
        "signature": "LIORef l a-\u003ea-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generalizes \u003ccode\u003ethrow\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e (from\n \u003ca\u003eControl.Exception\u003c/a\u003e) to methods that can be defined on multiple\n Monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-MonadCatch.html",
        "fct-type": "module",
        "title": "MonadCatch"
      },
      "index": {
        "description": "This module generalizes throw and catch from Control.Exception to methods that can be defined on multiple Monads",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#t:MonadCatch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadCatch\u003c/code\u003e is the class used to generalize the standard IO\n \u003ccode\u003ecatch\u003c/code\u003e and \u003ccode\u003ethrowIO\u003c/code\u003e functions to methods that can be defined in\n multiple monads.\n\u003c/p\u003e",
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-MonadCatch.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "MonadCatch is the class used to generalize the standard IO catch and throwIO functions to methods that can be defined in multiple monads",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:block",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#block",
        "fct-type": "method",
        "title": "block"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "block",
        "normalized": "a b-\u003ea b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:bracket",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "m b -\u003e (b -\u003e m c) -\u003e (b -\u003e m a) -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#bracket",
        "fct-type": "method",
        "title": "bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m b-\u003e(b-\u003em c)-\u003e(b-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:catch",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:genericBracket",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "(m b -\u003e m c -\u003e m b)-\u003e m a-\u003e (a -\u003e m c)-\u003e (a -\u003e m b)-\u003e m b",
        "fct-type": "function",
        "title": "genericBracket"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "genericBracket",
        "normalized": "(a b-\u003ea c-\u003ea b)-\u003ea d-\u003e(d-\u003ea c)-\u003e(d-\u003ea b)-\u003ea b",
        "package": "lio-eci11",
        "partial": "Bracket",
        "signature": "(m b-\u003em c-\u003em b)-\u003em a-\u003e(a-\u003em c)-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:handle",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "handle",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "lio-eci11",
        "partial": "",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:onException",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#onException",
        "fct-type": "method",
        "title": "onException"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "lio-eci11",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:throwIO",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#throwIO",
        "fct-type": "method",
        "title": "throwIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "throwIO",
        "normalized": "a-\u003eb c",
        "package": "lio-eci11",
        "partial": "IO",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadCatch.html#v:unblock",
      "description": {
        "fct-module": "LIO.MonadCatch",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#unblock",
        "fct-type": "method",
        "title": "unblock"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadCatch",
        "module": "LIO.MonadCatch",
        "name": "unblock",
        "normalized": "a b-\u003ea b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadLIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a function \u003ccode\u003e\u003ca\u003eliftLIO\u003c/a\u003e\u003c/code\u003e for executing \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e\n computations from transformed versions of the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  There\n is also a method \u003ccode\u003eliftIO\u003c/code\u003e, which is a synonym for \u003ccode\u003e\u003ca\u003eliftLIO\u003c/a\u003e\u003c/code\u003e, to\n help with porting code that expects to run in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.MonadLIO",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-MonadLIO.html",
        "fct-type": "module",
        "title": "MonadLIO"
      },
      "index": {
        "description": "This module provides function liftLIO for executing LIO computations from transformed versions of the LIO monad There is also method liftIO which is synonym for liftLIO to help with porting code that expects to run in the IO monad",
        "hierarchy": "LIO MonadLIO",
        "module": "LIO.MonadLIO",
        "name": "MonadLIO",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Monad LIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadLIO.html#t:MonadLIO",
      "description": {
        "fct-module": "LIO.MonadLIO",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-MonadLIO.html#MonadLIO",
        "fct-type": "class",
        "title": "MonadLIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadLIO",
        "module": "LIO.MonadLIO",
        "name": "MonadLIO",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Monad LIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadLIO.html#v:liftIO",
      "description": {
        "fct-module": "LIO.MonadLIO",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s a -\u003e m a",
        "fct-source": "src/LIO-MonadLIO.html#liftIO",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadLIO",
        "module": "LIO.MonadLIO",
        "name": "liftIO",
        "normalized": "LIO a b c-\u003ed c",
        "package": "lio-eci11",
        "partial": "IO",
        "signature": "LIO l s a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-MonadLIO.html#v:liftLIO",
      "description": {
        "fct-module": "LIO.MonadLIO",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s a -\u003e m a",
        "fct-source": "src/LIO-MonadLIO.html#liftLIO",
        "fct-type": "method",
        "title": "liftLIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO MonadLIO",
        "module": "LIO.MonadLIO",
        "name": "liftLIO",
        "normalized": "LIO a b c-\u003ed c",
        "package": "lio-eci11",
        "partial": "LIO",
        "signature": "LIO l s a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the core of the Labeled IO library for\n information flow control in Haskell.  It provides a monad, \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e,\n that is intended to be used as a replacement for the IO monad in\n untrusted code.  The idea is for untrusted code to provide a\n computation in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad, which trusted code can then safely\n execute through the \u003ccode\u003e\u003ca\u003eevalLIO\u003c/a\u003e\u003c/code\u003e function.  (Though usually a wrapper\n function is employed depending on the type of labels used by an\n application.  For example, with \u003ca\u003eLIO.DCLabel\u003c/a\u003e, you would use\n \u003ccode\u003eevalDC\u003c/code\u003e to execute an untrusted computation, and with \u003ca\u003eLIO.HiStar\u003c/a\u003e\n labels, the function is \u003ccode\u003eevalHS\u003c/code\u003e.  There are also abbreviations for\n the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad type of a particular label--for instance \u003ccode\u003eDC\u003c/code\u003e or\n \u003ccode\u003eHS\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eA data structure \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e (labeled value) protects access to pure\n values.  Without the appropriate privileges, one cannot produce a\n pure value that depends on a secret \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e, or conversely produce a\n high-integrity \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e based on pure data.  The function \u003ccode\u003e\u003ca\u003etoLabeled\u003c/a\u003e\u003c/code\u003e\n allows one to seal off the results of an LIO computation inside an\n \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e without tainting the current flow of execution.  \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e\n conversely allows one to use the value stored within a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny code that imports this module is part of the\n \u003cem\u003eTrusted Computing Base\u003c/em\u003e (TCB) of the system.  Hence, untrusted\n code must be prevented from importing this module.  The exported\n symbols ending ...\u003ccode\u003eTCB\u003c/code\u003e can be used to violate label protections\n even from within pure code or the LIO Monad.  A safe subset of\n these symbols is exported by the \u003ca\u003eLIO.Base\u003c/a\u003e module, which is how\n untrusted code should access the core label functionality.\n (\u003ca\u003eLIO.Base\u003c/a\u003e is also re-exported by \u003ca\u003eLIO.LIO\u003c/a\u003e, the main gateway to\n this library.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-TCB.html",
        "fct-type": "module",
        "title": "TCB"
      },
      "index": {
        "description": "This module implements the core of the Labeled IO library for information flow control in Haskell It provides monad LIO that is intended to be used as replacement for the IO monad in untrusted code The idea is for untrusted code to provide computation in the LIO monad which trusted code can then safely execute through the evalLIO function Though usually wrapper function is employed depending on the type of labels used by an application For example with LIO.DCLabel you would use evalDC to execute an untrusted computation and with LIO.HiStar labels the function is evalHS There are also abbreviations for the LIO monad type of particular label--for instance DC or HS data structure Labeled labeled value protects access to pure values Without the appropriate privileges one cannot produce pure value that depends on secret Labeled or conversely produce high-integrity Labeled based on pure data The function toLabeled allows one to seal off the results of an LIO computation inside an Labeled without tainting the current flow of execution unlabel conversely allows one to use the value stored within Labeled Any code that imports this module is part of the Trusted Computing Base TCB of the system Hence untrusted code must be prevented from importing this module The exported symbols ending TCB can be used to violate label protections even from within pure code or the LIO Monad safe subset of these symbols is exported by the LIO.Base module which is how untrusted code should access the core label functionality LIO.Base is also re-exported by LIO.LIO the main gateway to this library",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "TCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:LIO",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-TCB.html#LIO",
        "fct-type": "data",
        "title": "LIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LIO",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:LIOstate",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-TCB.html#LIOstate",
        "fct-type": "data",
        "title": "LIOstate"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LIOstate",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LIOstate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:Label",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#Label",
        "fct-type": "class",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "Label",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:LabelFault",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-TCB.html#LabelFault",
        "fct-type": "data",
        "title": "LabelFault"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LabelFault",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Label Fault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:Labeled",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eLabeled\u003c/code\u003e is a type representing labeled data.  \n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-TCB.html#Labeled",
        "fct-type": "data",
        "title": "Labeled"
      },
      "index": {
        "description": "Labeled is type representing labeled data",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "Labeled",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:MintTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#MintTCB",
        "fct-type": "class",
        "title": "MintTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "MintTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Mint TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:MonadCatch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadCatch\u003c/code\u003e is the class used to generalize the standard IO\n \u003ccode\u003ecatch\u003c/code\u003e and \u003ccode\u003ethrowIO\u003c/code\u003e functions to methods that can be defined in\n multiple monads.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-MonadCatch.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "MonadCatch is the class used to generalize the standard IO catch and throwIO functions to methods that can be defined in multiple monads",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "MonadCatch",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:NoPrivs",
      "description": {
        "fct-descr": "\u003cp\u003eA generic \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e instance that works for all \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es and confers\n no downgrading privileges.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-TCB.html#NoPrivs",
        "fct-type": "data",
        "title": "NoPrivs"
      },
      "index": {
        "description": "generic Priv instance that works for all Label and confers no downgrading privileges",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "NoPrivs",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "No Privs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:OnExceptionTCB",
      "description": {
        "fct-descr": "\u003cp\u003eFor privileged code that needs to catch all exceptions in some\n cleanup function.  Note that for the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad, these methods do\n \u003cem\u003enot\u003c/em\u003e call \u003ccode\u003e\u003ca\u003erethrowTCB\u003c/a\u003e\u003c/code\u003e to label the exceptions.  It is assumed\n that you will use \u003ccode\u003e\u003ca\u003ertioTCB\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e for IO within the\n computation arguments of these methods.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#OnExceptionTCB",
        "fct-type": "class",
        "title": "OnExceptionTCB"
      },
      "index": {
        "description": "For privileged code that needs to catch all exceptions in some cleanup function Note that for the LIO monad these methods do not call rethrowTCB to label the exceptions It is assumed that you will use rtioTCB instead of ioTCB for IO within the computation arguments of these methods",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "OnExceptionTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "On Exception TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:POrd",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#POrd",
        "fct-type": "class",
        "title": "POrd"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "POrd",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "POrd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:POrdering",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "data",
        "fct-source": "src/LIO-TCB.html#POrdering",
        "fct-type": "data",
        "title": "POrdering"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "POrdering",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "POrdering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:Priv",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#Priv",
        "fct-type": "class",
        "title": "Priv"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "Priv",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Priv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:PrivTCB",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePrivTCB\u003c/code\u003e is a method-less class whose only purpose is to be\n unavailable to unprivileged code.  Since \u003ccode\u003e(PrivTCB t) =\u003e\u003c/code\u003e is in the\n context of class \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e and unprivileged code cannot create new\n instances of the \u003ccode\u003ePrivTCB\u003c/code\u003e class, this ensures unprivileged code\n cannot create new instances of the \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e class either, even though\n the symbol \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e is exported by \u003ca\u003eLIO.Base\u003c/a\u003e and visible to\n untrusted code.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#PrivTCB",
        "fct-type": "class",
        "title": "PrivTCB"
      },
      "index": {
        "description": "PrivTCB is method-less class whose only purpose is to be unavailable to unprivileged code Since PrivTCB is in the context of class Priv and unprivileged code cannot create new instances of the PrivTCB class this ensures unprivileged code cannot create new instances of the Priv class either even though the symbol Priv is exported by LIO.Base and visible to untrusted code",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "PrivTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Priv TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:ReadTCB",
      "description": {
        "fct-descr": "\u003cp\u003eIt is useful to have the dual of \u003ccode\u003e\u003ca\u003eShowTCB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eReadTCB\u003c/code\u003e, that allows\n for the reading of \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003es that were written using \u003ccode\u003e\u003ca\u003eshowTCB\u003c/a\u003e\u003c/code\u003e. Only\n \u003ccode\u003ereadTCB\u003c/code\u003e (corresponding to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e) and \u003ccode\u003ereadsPrecTCB\u003c/code\u003e (corresponding\n to \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e) are implemented.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#ReadTCB",
        "fct-type": "class",
        "title": "ReadTCB"
      },
      "index": {
        "description": "It is useful to have the dual of ShowTCB ReadTCB that allows for the reading of Labeled that were written using showTCB Only readTCB corresponding to read and readsPrecTCB corresponding to readsPrec are implemented",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "ReadTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Read TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#t:ShowTCB",
      "description": {
        "fct-descr": "\u003cp\u003eIt would be a security issue to make certain objects a member of\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class, but nonetheless it is useful to be able to\n examine such objects from within the debugger.  The \u003ccode\u003e\u003ca\u003eshowTCB\u003c/a\u003e\u003c/code\u003e\n method can be used to examine such objects.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "class",
        "fct-source": "src/LIO-TCB.html#ShowTCB",
        "fct-type": "class",
        "title": "ShowTCB"
      },
      "index": {
        "description": "It would be security issue to make certain objects member of the Show class but nonetheless it is useful to be able to examine such objects from within the debugger The showTCB method can be used to examine such objects",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "ShowTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Show TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:LIOstate",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIOstate",
        "fct-source": "src/LIO-TCB.html#LIOstate",
        "fct-type": "function",
        "title": "LIOstate"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LIOstate",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "LIOstate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:LerrClearance",
      "description": {
        "fct-descr": "\u003cp\u003eLabel would exceed clearance\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LerrClearance",
        "fct-source": "src/LIO-TCB.html#LabelFault",
        "fct-type": "function",
        "title": "LerrClearance"
      },
      "index": {
        "description": "Label would exceed clearance",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LerrClearance",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Lerr Clearance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:LerrHigh",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent label too high\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LerrHigh",
        "fct-source": "src/LIO-TCB.html#LabelFault",
        "fct-type": "function",
        "title": "LerrHigh"
      },
      "index": {
        "description": "Current label too high",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LerrHigh",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Lerr High",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:LerrInval",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid request\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LerrInval",
        "fct-source": "src/LIO-TCB.html#LabelFault",
        "fct-type": "function",
        "title": "LerrInval"
      },
      "index": {
        "description": "Invalid request",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LerrInval",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Lerr Inval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:LerrLow",
      "description": {
        "fct-descr": "\u003cp\u003eRequested label too low\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LerrLow",
        "fct-source": "src/LIO-TCB.html#LabelFault",
        "fct-type": "function",
        "title": "LerrLow"
      },
      "index": {
        "description": "Requested label too low",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LerrLow",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Lerr Low",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:LerrPriv",
      "description": {
        "fct-descr": "\u003cp\u003eInsufficient privileges\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LerrPriv",
        "fct-source": "src/LIO-TCB.html#LabelFault",
        "fct-type": "function",
        "title": "LerrPriv"
      },
      "index": {
        "description": "Insufficient privileges",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "LerrPriv",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Lerr Priv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:NoPrivs",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "NoPrivs",
        "fct-source": "src/LIO-TCB.html#NoPrivs",
        "fct-type": "function",
        "title": "NoPrivs"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "NoPrivs",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "No Privs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:PEQ",
      "description": {
        "fct-descr": "\u003cp\u003eEqual\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "PEQ",
        "fct-source": "src/LIO-TCB.html#POrdering",
        "fct-type": "function",
        "title": "PEQ"
      },
      "index": {
        "description": "Equal",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "PEQ",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "PEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:PGT",
      "description": {
        "fct-descr": "\u003cp\u003eGreater than\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "PGT",
        "fct-source": "src/LIO-TCB.html#POrdering",
        "fct-type": "function",
        "title": "PGT"
      },
      "index": {
        "description": "Greater than",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "PGT",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "PGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:PLT",
      "description": {
        "fct-descr": "\u003cp\u003eLess than\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "PLT",
        "fct-source": "src/LIO-TCB.html#POrdering",
        "fct-type": "function",
        "title": "PLT"
      },
      "index": {
        "description": "Less than",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "PLT",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "PLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:PNE",
      "description": {
        "fct-descr": "\u003cp\u003eIncomparable (neither less than nor greater than)\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "PNE",
        "fct-source": "src/LIO-TCB.html#POrdering",
        "fct-type": "function",
        "title": "PNE"
      },
      "index": {
        "description": "Incomparable neither less than nor greater than",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "PNE",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "PNE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:aguard",
      "description": {
        "fct-descr": "\u003cp\u003eEnsures the label argument is between the current IO label and\n current IO clearance.  Use this function in code that allocates\n objects--untrusted code shouldn't be able to create an object\n labeled \u003ccode\u003el\u003c/code\u003e unless \u003ccode\u003eaguard l\u003c/code\u003e does not throw an exception.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#aguard",
        "fct-type": "function",
        "title": "aguard"
      },
      "index": {
        "description": "Ensures the label argument is between the current IO label and current IO clearance Use this function in code that allocates objects--untrusted code shouldn be able to create an object labeled unless aguard does not throw an exception",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "aguard",
        "normalized": "a-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "l-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:aguardP",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eaguardP\u003c/a\u003e\u003c/code\u003e, but takes privilege argument to be more permissive.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#aguardP",
        "fct-type": "function",
        "title": "aguardP"
      },
      "index": {
        "description": "Like aguardP but takes privilege argument to be more permissive",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "aguardP",
        "normalized": "a-\u003eb-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003el-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:block",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#block",
        "fct-type": "method",
        "title": "block"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "block",
        "normalized": "a b-\u003ea b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:bracket",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m b -\u003e (b -\u003e m c) -\u003e (b -\u003e m a) -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#bracket",
        "fct-type": "method",
        "title": "bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m b-\u003e(b-\u003em c)-\u003e(b-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:bracketP",
      "description": {
        "fct-descr": "\u003cp\u003eLike standard \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but with privileges to downgrade\n exception.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e LIO l s a -\u003e (a -\u003e LIO l s c) -\u003e (a -\u003e LIO l s b) -\u003e LIO l s b",
        "fct-source": "src/LIO-TCB.html#bracketP",
        "fct-type": "function",
        "title": "bracketP"
      },
      "index": {
        "description": "Like standard bracket but with privileges to downgrade exception",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "bracketP",
        "normalized": "a-\u003eLIO b c d-\u003e(d-\u003eLIO b c e)-\u003e(d-\u003eLIO b c f)-\u003eLIO b c f",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003eLIO l s a-\u003e(a-\u003eLIO l s c)-\u003e(a-\u003eLIO l s b)-\u003eLIO l s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:bracketTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e (a -\u003e m c) -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/LIO-TCB.html#bracketTCB",
        "fct-type": "method",
        "title": "bracketTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "bracketTCB",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "m a-\u003e(a-\u003em c)-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:catch",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:catchP",
      "description": {
        "fct-descr": "\u003cp\u003eCatches an exception, so long as the label at the point where the\n exception was thrown can flow to the label at which catchP is\n invoked, modulo the privileges specified.  Note that the handler\n receives an an extra first argument (before the exception), which\n is the label when the exception was thrown.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e LIO l s a-\u003e (l -\u003e e -\u003e LIO l s a)-\u003e LIO l s a",
        "fct-type": "function",
        "title": "catchP"
      },
      "index": {
        "description": "Catches an exception so long as the label at the point where the exception was thrown can flow to the label at which catchP is invoked modulo the privileges specified Note that the handler receives an an extra first argument before the exception which is the label when the exception was thrown",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "catchP",
        "normalized": "a-\u003eLIO b c d-\u003e(b-\u003ee-\u003eLIO b c d)-\u003eLIO b c d",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003eLIO l s a-\u003e(l-\u003ee-\u003eLIO l s a)-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:discard",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation that would raise the current label, but\n discards the result so as to keep the label the same.  Used when\n one only cares about the side effects of a computation.  For\n instance, if \u003ccode\u003elog_handle\u003c/code\u003e is an \u003ccode\u003eLHandle\u003c/code\u003e with a high label, one\n can execute\n\u003c/p\u003e\u003cpre\u003e\n   discard ltop $ \u003ccode\u003ehputStrLn\u003c/code\u003e log_handle \"Log message\"\n\u003c/pre\u003e\u003cp\u003eto create a log message without affecting the current label.  (Of\n course, if \u003ccode\u003elog_handle\u003c/code\u003e is closed and this throws an exception, it\n may not be possible to catch the exception within the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad\n without sufficient privileges--see \u003ccode\u003e\u003ca\u003ecatchP\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s a -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#discard",
        "fct-type": "function",
        "title": "discard"
      },
      "index": {
        "description": "Executes computation that would raise the current label but discards the result so as to keep the label the same Used when one only cares about the side effects of computation For instance if log handle is an LHandle with high label one can execute discard ltop hputStrLn log handle Log message to create log message without affecting the current label Of course if log handle is closed and this throws an exception it may not be possible to catch the exception within the LIO monad without sufficient privileges--see catchP",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "discard",
        "normalized": "a-\u003eLIO a b c-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "l-\u003eLIO l s a-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:evalLIO",
      "description": {
        "fct-descr": "\u003cp\u003eProduces an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that will execute a particular \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e\n computation.  Because untrusted code cannot execute \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n computations, this function should only be useful within trusted\n code.  No harm is done from exposing the \u003ccode\u003eevalLIO\u003c/code\u003e symbol to\n untrusted code.  (In general, untrusted code is free to produce\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations--it just can't execute them without access to\n \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s a-\u003e s-\u003e IO (a, l)",
        "fct-type": "function",
        "title": "evalLIO"
      },
      "index": {
        "description": "Produces an IO computation that will execute particular LIO computation Because untrusted code cannot execute IO computations this function should only be useful within trusted code No harm is done from exposing the evalLIO symbol to untrusted code In general untrusted code is free to produce IO computations--it just can execute them without access to ioTCB",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "evalLIO",
        "normalized": "LIO a b c-\u003eb-\u003eIO(c,a)",
        "package": "lio-eci11",
        "partial": "LIO",
        "signature": "LIO l s a-\u003es-\u003eIO(a,l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate in LIO.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#evaluate",
        "fct-type": "function",
        "title": "evaluate"
      },
      "index": {
        "description": "Evaluate in LIO",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "evaluate",
        "normalized": "a-\u003eLIO b c a",
        "package": "lio-eci11",
        "partial": "",
        "signature": "a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:getClearance",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current value of the thread's clearance.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s l",
        "fct-source": "src/LIO-TCB.html#getClearance",
        "fct-type": "function",
        "title": "getClearance"
      },
      "index": {
        "description": "Returns the current value of the thread clearance",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "getClearance",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Clearance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:getLabel",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current value of the thread's label.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s l",
        "fct-source": "src/LIO-TCB.html#getLabel",
        "fct-type": "function",
        "title": "getLabel"
      },
      "index": {
        "description": "Returns the current value of the thread label",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "getLabel",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:getTCB",
      "description": {
        "fct-descr": "\u003cp\u003eReturns label-specific state of the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  This is the\n data specified as the second argument of \u003ccode\u003e\u003ca\u003eevalLIO\u003c/a\u003e\u003c/code\u003e, whose type is\n \u003ccode\u003es\u003c/code\u003e in the monad \u003ccode\u003eLIO l s\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s s",
        "fct-source": "src/LIO-TCB.html#getTCB",
        "fct-type": "function",
        "title": "getTCB"
      },
      "index": {
        "description": "Returns label-specific state of the LIO monad This is the data specified as the second argument of evalLIO whose type is in the monad LIO",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "getTCB",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:glb",
      "description": {
        "fct-descr": "\u003cp\u003egreatest lower bound (meet) of two labels\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/LIO-TCB.html#glb",
        "fct-type": "method",
        "title": "glb"
      },
      "index": {
        "description": "greatest lower bound meet of two labels",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "glb",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lio-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:handle",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "handle",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "lio-eci11",
        "partial": "",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:handleP",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ecatchP\u003c/a\u003e\u003c/code\u003e with arguments swapped.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e (l -\u003e e -\u003e LIO l s a)-\u003e LIO l s a-\u003e LIO l s a",
        "fct-type": "function",
        "title": "handleP"
      },
      "index": {
        "description": "Version of catchP with arguments swapped",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "handleP",
        "normalized": "a-\u003e(b-\u003ec-\u003eLIO b d e)-\u003eLIO b d e-\u003eLIO b d e",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003e(l-\u003ee-\u003eLIO l s a)-\u003eLIO l s a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:ioTCB",
      "description": {
        "fct-descr": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation into the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  Note that\n exceptions thrown within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation cannot directly be\n caught within the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.  Thus, if you are not inside a\n \u003ccode\u003e\u003ca\u003erethrowTCB\u003c/a\u003e\u003c/code\u003e block, you will generally want to use \u003ccode\u003e\u003ca\u003ertioTCB\u003c/a\u003e\u003c/code\u003e\n instead of \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "IO a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#ioTCB",
        "fct-type": "function",
        "title": "ioTCB"
      },
      "index": {
        "description": "Lifts an IO computation into the LIO monad Note that exceptions thrown within the IO computation cannot directly be caught within the LIO computation Thus if you are not inside rethrowTCB block you will generally want to use rtioTCB instead of ioTCB",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "ioTCB",
        "normalized": "IO a-\u003eLIO b c a",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "IO a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to construct an \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e from a label and pure value.  If\n the current label is \u003ccode\u003elcurrent\u003c/code\u003e and the current clearance is\n \u003ccode\u003eccurrent\u003c/code\u003e, then the label \u003ccode\u003el\u003c/code\u003e specified must satisfy\n \u003ccode\u003elcurrent `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` l && l `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` ccurrent\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e a -\u003e LIO l s (Labeled l a)",
        "fct-source": "src/LIO-TCB.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Function to construct an Labeled from label and pure value If the current label is lcurrent and the current clearance is ccurrent then the label specified must satisfy lcurrent leq leq ccurrent",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "label",
        "normalized": "a-\u003eb-\u003eLIO a c(Labeled a b)",
        "package": "lio-eci11",
        "partial": "",
        "signature": "l-\u003ea-\u003eLIO l s(Labeled l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:labelOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns label of a \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "Labeled l a -\u003e l",
        "fct-source": "src/LIO-TCB.html#labelOf",
        "fct-type": "function",
        "title": "labelOf"
      },
      "index": {
        "description": "Returns label of Label type",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "labelOf",
        "normalized": "Labeled a b-\u003ea",
        "package": "lio-eci11",
        "partial": "Of",
        "signature": "Labeled l a-\u003el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:labelP",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e using privilege to allow the \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e's label\n to be below the current label.  If the current label is \u003ccode\u003elcurrent\u003c/code\u003e\n and the current clearance is \u003ccode\u003eccurrent\u003c/code\u003e, then the privilege \u003ccode\u003ep\u003c/code\u003e and\n label \u003ccode\u003el\u003c/code\u003e specified must satisfy\n \u003ccode\u003e(leqp p lcurrent l) && l `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` ccurrent\u003c/code\u003e.\n Note that privilege is not used to bypass the clearance.  You must\n use \u003ccode\u003e\u003ca\u003elowerClrP\u003c/a\u003e\u003c/code\u003e to raise the clearance first if you wish to\n create an \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e at a higher label than the current clearance.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e a -\u003e LIO l s (Labeled l a)",
        "fct-source": "src/LIO-TCB.html#labelP",
        "fct-type": "function",
        "title": "labelP"
      },
      "index": {
        "description": "Constructs an Labeled using privilege to allow the Labeled label to be below the current label If the current label is lcurrent and the current clearance is ccurrent then the privilege and label specified must satisfy leqp lcurrent leq ccurrent Note that privilege is not used to bypass the clearance You must use lowerClrP to raise the clearance first if you wish to create an Labeled at higher label than the current clearance",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "labelP",
        "normalized": "a-\u003eb-\u003ec-\u003eLIO b d(Labeled b c)",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003el-\u003ea-\u003eLIO l s(Labeled l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:labelState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "s",
        "fct-source": "src/LIO-TCB.html#LIOstate",
        "fct-type": "function",
        "title": "labelState"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "labelState",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:labelTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e a -\u003e Labeled l a",
        "fct-source": "src/LIO-TCB.html#labelTCB",
        "fct-type": "function",
        "title": "labelTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "labelTCB",
        "normalized": "a-\u003eb-\u003eLabeled a b",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "l-\u003ea-\u003eLabeled l a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lbot",
      "description": {
        "fct-descr": "\u003cp\u003ebottom\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a",
        "fct-source": "src/LIO-TCB.html#lbot",
        "fct-type": "method",
        "title": "lbot"
      },
      "index": {
        "description": "bottom",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lbot",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:leq",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/LIO-TCB.html#leq",
        "fct-type": "method",
        "title": "leq"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "leq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "lio-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:leqp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eleqp p l1 l2\u003c/code\u003e means that privileges \u003ccode\u003ep\u003c/code\u003e are sufficient to\n downgrade data from \u003ccode\u003el1\u003c/code\u003e to \u003ccode\u003el2\u003c/code\u003e.  Note that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e l1 l2\u003c/code\u003e\n implies \u003ccode\u003e\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e p l1 l2\u003c/code\u003e for all \u003ccode\u003ep\u003c/code\u003e, but for some labels and\n privileges, \u003ccode\u003eleqp\u003c/code\u003e will hold even where \u003ccode\u003e\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e does not.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e l -\u003e Bool",
        "fct-source": "src/LIO-TCB.html#leqp",
        "fct-type": "method",
        "title": "leqp"
      },
      "index": {
        "description": "leqp l1 l2 means that privileges are sufficient to downgrade data from l1 to l2 Note that leq l1 l2 implies leq l1 l2 for all but for some labels and privileges leqp will hold even where leq does not",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "leqp",
        "normalized": "a-\u003eb-\u003eb-\u003eBool",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003el-\u003el-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lioC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l",
        "fct-source": "src/LIO-TCB.html#LIOstate",
        "fct-type": "function",
        "title": "lioC"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lioC",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lioL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l",
        "fct-source": "src/LIO-TCB.html#LIOstate",
        "fct-type": "function",
        "title": "lioL"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lioL",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lostar",
      "description": {
        "fct-descr": "\u003cp\u003eRoughly speaking, the function\n\u003c/p\u003e\u003cpre\u003e result = lostar p label goal\n\u003c/pre\u003e\u003cp\u003ecomputes how close one can come to downgrading data labeled\n \u003ccode\u003elabel\u003c/code\u003e to \u003ccode\u003egoal\u003c/code\u003e given privileges \u003ccode\u003ep\u003c/code\u003e.  When \u003ccode\u003ep == \u003ccode\u003e\u003ca\u003eNoPrivs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n \u003ccode\u003eresult == \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e label goal\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e contains all possible\n privileges, then \u003ccode\u003eresult == goal\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore specifically, \u003ccode\u003eresult\u003c/code\u003e is the greatest lower bound of the\n set of all labels \u003ccode\u003er\u003c/code\u003e satisfying:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e goal r\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eleqp\u003c/a\u003e\u003c/code\u003e p label r\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eOperationally, \u003ccode\u003elostar\u003c/code\u003e captures the minimum change required to\n the current label when viewing data labeled \u003ccode\u003elabel\u003c/code\u003e.  A common\n pattern is to use the result of \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003egoal\u003c/code\u003e (i.e.,\n the goal is to use privileges \u003ccode\u003ep\u003c/code\u003e to avoid changing the label\n at all), and then compute \u003ccode\u003eresult\u003c/code\u003e based on the \u003ccode\u003elabel\u003c/code\u003e of data\n the code is about to observe.  For example, \u003ccode\u003e\u003ca\u003etaintP\u003c/a\u003e\u003c/code\u003e could be\n implemented as:\n\u003c/p\u003e\u003cpre\u003e\n    taintP p l = do lcurrent \u003c- \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e\n                    \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e (lostar p l lcurrent)\n\u003c/pre\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "lostar",
        "fct-source": "src/LIO-TCB.html#lostar",
        "fct-type": "method",
        "title": "lostar"
      },
      "index": {
        "description": "Roughly speaking the function result lostar label goal computes how close one can come to downgrading data labeled label to goal given privileges When NoPrivs result lub label goal If contains all possible privileges then result goal More specifically result is the greatest lower bound of the set of all labels satisfying leq goal and leqp label Operationally lostar captures the minimum change required to the current label when viewing data labeled label common pattern is to use the result of getLabel as goal i.e the goal is to use privileges to avoid changing the label at all and then compute result based on the label of data the code is about to observe For example taintP could be implemented as taintP do lcurrent getLabel taint lostar lcurrent",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lostar",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lowerClr",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the current clearance.  One cannot raise the current label\n or create object with labels higher than the current clearance.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#lowerClr",
        "fct-type": "function",
        "title": "lowerClr"
      },
      "index": {
        "description": "Reduce the current clearance One cannot raise the current label or create object with labels higher than the current clearance",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lowerClr",
        "normalized": "a-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "Clr",
        "signature": "l-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lowerClrP",
      "description": {
        "fct-descr": "\u003cp\u003eRaise the current clearance (undoing the effects of \u003ccode\u003e\u003ca\u003elowerClr\u003c/a\u003e\u003c/code\u003e).\n This requires privileges.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#lowerClrP",
        "fct-type": "function",
        "title": "lowerClrP"
      },
      "index": {
        "description": "Raise the current clearance undoing the effects of lowerClr This requires privileges",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lowerClrP",
        "normalized": "a-\u003eb-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "Clr",
        "signature": "p-\u003el-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lowerClrTCB",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current clearance to anything, with no security check.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#lowerClrTCB",
        "fct-type": "function",
        "title": "lowerClrTCB"
      },
      "index": {
        "description": "Set the current clearance to anything with no security check",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lowerClrTCB",
        "normalized": "a-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "Clr TCB",
        "signature": "l-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:ltop",
      "description": {
        "fct-descr": "\u003cp\u003etop\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a",
        "fct-source": "src/LIO-TCB.html#ltop",
        "fct-type": "method",
        "title": "ltop"
      },
      "index": {
        "description": "top",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "ltop",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:lub",
      "description": {
        "fct-descr": "\u003cp\u003eleast upper bound (join) of two labels\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/LIO-TCB.html#lub",
        "fct-type": "method",
        "title": "lub"
      },
      "index": {
        "description": "least upper bound join of two labels",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "lub",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lio-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:mintTCB",
      "description": {
        "fct-descr": "\u003cp\u003eA function that mints new objects (such as instances of\n \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e) in a way that only privileged code should be allowed to\n do.  Because the MintTCB method is only available to\n priviledged code, other modules imported by unpriviledged code\n can define instances of mintTCB.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "i -\u003e t",
        "fct-source": "src/LIO-TCB.html#mintTCB",
        "fct-type": "method",
        "title": "mintTCB"
      },
      "index": {
        "description": "function that mints new objects such as instances of Priv in way that only privileged code should be allowed to do Because the MintTCB method is only available to priviledged code other modules imported by unpriviledged code can define instances of mintTCB",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "mintTCB",
        "normalized": "a-\u003eb",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "i-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:newstate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a fresh state to pass \u003ccode\u003e\u003ca\u003erunLIO\u003c/a\u003e\u003c/code\u003e when invoking it for the\n first time.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "s -\u003e LIOstate l s",
        "fct-source": "src/LIO-TCB.html#newstate",
        "fct-type": "function",
        "title": "newstate"
      },
      "index": {
        "description": "Generate fresh state to pass runLIO when invoking it for the first time",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "newstate",
        "normalized": "a-\u003eLIOstate b a",
        "package": "lio-eci11",
        "partial": "",
        "signature": "s-\u003eLIOstate l s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:o2po",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "Ordering -\u003e POrdering",
        "fct-source": "src/LIO-TCB.html#o2po",
        "fct-type": "function",
        "title": "o2po"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "o2po",
        "normalized": "Ordering-\u003ePOrdering",
        "package": "lio-eci11",
        "partial": "",
        "signature": "Ordering-\u003ePOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:onException",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#onException",
        "fct-type": "method",
        "title": "onException"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "lio-eci11",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:onExceptionP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e cannot run its handler if the label was raised in\n the computation that threw the exception.  This variant allows\n privileges to be supplied, so as to catch exceptions thrown with a\n raised label.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e LIO l s a-\u003e LIO l s b-\u003e LIO l s a",
        "fct-type": "function",
        "title": "onExceptionP"
      },
      "index": {
        "description": "onException cannot run its handler if the label was raised in the computation that threw the exception This variant allows privileges to be supplied so as to catch exceptions thrown with raised label",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "onExceptionP",
        "normalized": "a-\u003eLIO b c d-\u003eLIO b c e-\u003eLIO b c d",
        "package": "lio-eci11",
        "partial": "Exception",
        "signature": "p-\u003eLIO l s a-\u003eLIO l s b-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:onExceptionTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/LIO-TCB.html#onExceptionTCB",
        "fct-type": "method",
        "title": "onExceptionTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "onExceptionTCB",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "lio-eci11",
        "partial": "Exception TCB",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:pcompare",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e a -\u003e POrdering",
        "fct-source": "src/LIO-TCB.html#pcompare",
        "fct-type": "method",
        "title": "pcompare"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "pcompare",
        "normalized": "a-\u003ea-\u003ePOrdering",
        "package": "lio-eci11",
        "partial": "",
        "signature": "a-\u003ea-\u003ePOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:putTCB",
      "description": {
        "fct-descr": "\u003cp\u003eSets the label-specific state of the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  See \u003ccode\u003e\u003ca\u003egetTCB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "s -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#putTCB",
        "fct-type": "function",
        "title": "putTCB"
      },
      "index": {
        "description": "Sets the label-specific state of the LIO monad See getTCB",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "putTCB",
        "normalized": "a-\u003eLIO b a()",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "s-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:readTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/LIO-TCB.html#readTCB",
        "fct-type": "method",
        "title": "readTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "readTCB",
        "normalized": "String-\u003ea",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:readsPrecTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "Int -\u003e ReadS a",
        "fct-source": "src/LIO-TCB.html#readsPrecTCB",
        "fct-type": "method",
        "title": "readsPrecTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "readsPrecTCB",
        "normalized": "Int-\u003eReadS a",
        "package": "lio-eci11",
        "partial": "Prec TCB",
        "signature": "Int-\u003eReadS a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:rethrowTCB",
      "description": {
        "fct-descr": "\u003cp\u003ePrivileged code that does IO operations may cause exceptions that\n should be caught by untrusted code in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  Such\n operations should be wrapped by \u003ccode\u003erethrowTCB\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003ertioTCB\u003c/a\u003e\u003c/code\u003e, which\n uses \u003ccode\u003erethrowTCB\u003c/code\u003e) to ensure the exception is labeled.  Note that\n it is very important that the computation executed inside\n \u003ccode\u003erethrowTCB\u003c/code\u003e not in any way change the label, as otherwise\n \u003ccode\u003erethrowTCB\u003c/code\u003e would put the wrong label on the exception.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#rethrowTCB",
        "fct-type": "function",
        "title": "rethrowTCB"
      },
      "index": {
        "description": "Privileged code that does IO operations may cause exceptions that should be caught by untrusted code in the LIO monad Such operations should be wrapped by rethrowTCB or rtioTCB which uses rethrowTCB to ensure the exception is labeled Note that it is very important that the computation executed inside rethrowTCB not in any way change the label as otherwise rethrowTCB would put the wrong label on the exception",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "rethrowTCB",
        "normalized": "LIO a b c-\u003eLIO a b c",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "LIO l s a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:rtioTCB",
      "description": {
        "fct-descr": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation into the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  If the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n computation throws an exception, it labels the exception with the\n current label so that the exception can be caught with \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003ecatchP\u003c/a\u003e\u003c/code\u003e.  This function's name stands for \"re-throw io\", because\n the functionality is a combination of \u003ccode\u003e\u003ca\u003erethrowTCB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e.\n Effectively\n\u003c/p\u003e\u003cpre\u003e\n   rtioTCB = \u003ccode\u003e\u003ca\u003erethrowTCB\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "IO a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#rtioTCB",
        "fct-type": "function",
        "title": "rtioTCB"
      },
      "index": {
        "description": "Lifts an IO computation into the LIO monad If the IO computation throws an exception it labels the exception with the current label so that the exception can be caught with catch or catchP This function name stands for re-throw io because the functionality is combination of rethrowTCB and ioTCB Effectively rtioTCB rethrowTCB ioTCB",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "rtioTCB",
        "normalized": "IO a-\u003eLIO b c a",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "IO a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:runLIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an LIO action.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "LIO l s a -\u003e LIOstate l s -\u003e IO (a, LIOstate l s)",
        "fct-source": "src/LIO-TCB.html#runLIO",
        "fct-type": "function",
        "title": "runLIO"
      },
      "index": {
        "description": "Execute an LIO action",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "runLIO",
        "normalized": "LIO a b c-\u003eLIOstate a b-\u003eIO(c,LIOstate a b)",
        "package": "lio-eci11",
        "partial": "LIO",
        "signature": "LIO l s a-\u003eLIOstate l s-\u003eIO(a,LIOstate l s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:setLabelP",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current label is \u003ccode\u003eoldLabel\u003c/code\u003e and the current clearance is\n \u003ccode\u003eclearance\u003c/code\u003e, this function allows code to raise the label to any\n value \u003ccode\u003enewLabel\u003c/code\u003e such that\n \u003ccode\u003eoldLabel `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` newLabel && newLabel `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` clearance\u003c/code\u003e.\n Note that there is no \u003ccode\u003esetLabel\u003c/code\u003e variant without the \u003ccode\u003e...P\u003c/code\u003e because\n the \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e function provides essentially the same functionality\n that \u003ccode\u003esetLabel\u003c/code\u003e would.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#setLabelP",
        "fct-type": "function",
        "title": "setLabelP"
      },
      "index": {
        "description": "If the current label is oldLabel and the current clearance is clearance this function allows code to raise the label to any value newLabel such that oldLabel leq newLabel newLabel leq clearance Note that there is no setLabel variant without the because the taint function provides essentially the same functionality that setLabel would",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "setLabelP",
        "normalized": "a-\u003eb-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "Label",
        "signature": "p-\u003el-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:setLabelTCB",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current label to anything, with no security check.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#setLabelTCB",
        "fct-type": "function",
        "title": "setLabelTCB"
      },
      "index": {
        "description": "Set the current label to anything with no security check",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "setLabelTCB",
        "normalized": "a-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "Label TCB",
        "signature": "l-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:showTCB",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/LIO-TCB.html#showTCB",
        "fct-type": "method",
        "title": "showTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "showTCB",
        "normalized": "a-\u003eString",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:taint",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003etaint l\u003c/code\u003e in trusted code before observing an object labeled\n \u003ccode\u003el\u003c/code\u003e.  This will raise the current label to a value \u003ccode\u003el'\u003c/code\u003e such that\n \u003ccode\u003el `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` l'\u003c/code\u003e, or throw \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLerrClearance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if \u003ccode\u003el'\u003c/code\u003e would have to be\n higher than the current clearance.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#taint",
        "fct-type": "function",
        "title": "taint"
      },
      "index": {
        "description": "Use taint in trusted code before observing an object labeled This will raise the current label to value such that leq or throw LerrClearance if would have to be higher than the current clearance",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "taint",
        "normalized": "a-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "l-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:taintLabeled",
      "description": {
        "fct-descr": "\u003cp\u003eRaises the label of a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e of it's current label\n and the value supplied.  The label supplied must be less than the\n current clarance, though the resulting label may not be if the\n \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e is already above the current thread's clearance.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e Labeled l a -\u003e LIO l s (Labeled l a)",
        "fct-source": "src/LIO-TCB.html#taintLabeled",
        "fct-type": "function",
        "title": "taintLabeled"
      },
      "index": {
        "description": "Raises the label of Labeled to the lub of it current label and the value supplied The label supplied must be less than the current clarance though the resulting label may not be if the Labeled is already above the current thread clearance",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "taintLabeled",
        "normalized": "a-\u003eLabeled a b-\u003eLIO a c(Labeled a b)",
        "package": "lio-eci11",
        "partial": "Labeled",
        "signature": "l-\u003eLabeled l a-\u003eLIO l s(Labeled l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:taintP",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e, but use privileges to reduce the amount of taint\n required.  Note that unlike \u003ccode\u003e\u003ca\u003esetLabelP\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003etaintP\u003c/code\u003e will never lower\n the current label.  It simply uses privileges to avoid raising the\n label as high as \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e would raise it.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p-\u003e l-\u003e LIO l s ()",
        "fct-type": "function",
        "title": "taintP"
      },
      "index": {
        "description": "Like taint but use privileges to reduce the amount of taint required Note that unlike setLabelP taintP will never lower the current label It simply uses privileges to avoid raising the label as high as taint would raise it",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "taintP",
        "normalized": "a-\u003eb-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003el-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:throwIO",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#throwIO",
        "fct-type": "method",
        "title": "throwIO"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "throwIO",
        "normalized": "a-\u003eb c",
        "package": "lio-eci11",
        "partial": "IO",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:toLabeled",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoLabeled\u003c/code\u003e is the dual of \u003ccode\u003eunlabel\u003c/code\u003e.  It allows one to invoke\n computations that would raise the current label, but without\n actually raising the label.  Instead, the result of the computation\n is packaged into a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e with a supplied label.\n Thus, to get at the result of the\n computation one will have to call \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e and raise the label, but\n this can be postponed, or done inside some other call to \u003ccode\u003e\u003ca\u003etoLabeled\u003c/a\u003e\u003c/code\u003e.\n This suggestst that the provided label must be above the current\n label and below the current clearance.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003etoLabeled\u003c/code\u003e always restores the clearance to whatever it was\n when it was invoked, regardless of what occured in the computation\n producing the value of the \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e. \n This higlights one main use of clearance: to ensure that a \u003ccode\u003eLabeled\u003c/code\u003e\n computed does not exceed a particular label.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s a -\u003e LIO l s (Labeled l a)",
        "fct-source": "src/LIO-TCB.html#toLabeled",
        "fct-type": "function",
        "title": "toLabeled"
      },
      "index": {
        "description": "toLabeled is the dual of unlabel It allows one to invoke computations that would raise the current label but without actually raising the label Instead the result of the computation is packaged into Labeled with supplied label Thus to get at the result of the computation one will have to call unlabel and raise the label but this can be postponed or done inside some other call to toLabeled This suggestst that the provided label must be above the current label and below the current clearance Note that toLabeled always restores the clearance to whatever it was when it was invoked regardless of what occured in the computation producing the value of the Labeled This higlights one main use of clearance to ensure that Labeled computed does not exceed particular label",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "toLabeled",
        "normalized": "a-\u003eLIO a b c-\u003eLIO a b(Labeled a c)",
        "package": "lio-eci11",
        "partial": "Labeled",
        "signature": "l-\u003eLIO l s a-\u003eLIO l s(Labeled l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:toLabeledP",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e LIO l s a -\u003e LIO l s (Labeled l a)",
        "fct-source": "src/LIO-TCB.html#toLabeledP",
        "fct-type": "function",
        "title": "toLabeledP"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "toLabeledP",
        "normalized": "a-\u003eb-\u003eLIO b c d-\u003eLIO b c(Labeled b d)",
        "package": "lio-eci11",
        "partial": "Labeled",
        "signature": "p-\u003el-\u003eLIO l s a-\u003eLIO l s(Labeled l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:unblock",
      "description": {
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/LIO-MonadCatch.html#unblock",
        "fct-type": "method",
        "title": "unblock"
      },
      "index": {
        "description": "",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "unblock",
        "normalized": "a b-\u003ea b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:unlabel",
      "description": {
        "fct-descr": "\u003cp\u003eWithin the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad, this function takes an \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e and returns\n the value.  Thus, in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad one can say:\n\u003c/p\u003e\u003cpre\u003e x \u003c- unlabel (xv :: Labeled SomeLabelType Int)\n\u003c/pre\u003e\u003cp\u003eAnd now it is possible to use the value of \u003ccode\u003ex\u003c/code\u003e, which is the pure\n value of what was stored in \u003ccode\u003exv\u003c/code\u003e.  Of course, \u003ccode\u003eunlabel\u003c/code\u003e also raises\n the current label.  If raising the label would exceed the current\n clearance, then \u003ccode\u003eunlabel\u003c/code\u003e throws \u003ccode\u003e\u003ca\u003eLerrClearance\u003c/a\u003e\u003c/code\u003e.\n However, you can use \u003ccode\u003e\u003ca\u003elabelOf\u003c/a\u003e\u003c/code\u003e to check if \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e will suceed without\n throwing an exception.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "Labeled l a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#unlabel",
        "fct-type": "function",
        "title": "unlabel"
      },
      "index": {
        "description": "Within the LIO monad this function takes an Labeled and returns the value Thus in the LIO monad one can say unlabel xv Labeled SomeLabelType Int And now it is possible to use the value of which is the pure value of what was stored in xv Of course unlabel also raises the current label If raising the label would exceed the current clearance then unlabel throws LerrClearance However you can use labelOf to check if unlabel will suceed without throwing an exception",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "unlabel",
        "normalized": "Labeled a b-\u003eLIO a c b",
        "package": "lio-eci11",
        "partial": "",
        "signature": "Labeled l a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:unlabelP",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the value of an \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e just like \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e, but takes a\n privilege argument to minimize the amount the current label must be\n raised.  Will still throw \u003ccode\u003e\u003ca\u003eLerrClearance\u003c/a\u003e\u003c/code\u003e under the same\n circumstances as \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e Labeled l a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#unlabelP",
        "fct-type": "function",
        "title": "unlabelP"
      },
      "index": {
        "description": "Extracts the value of an Labeled just like unlabel but takes privilege argument to minimize the amount the current label must be raised Will still throw LerrClearance under the same circumstances as unlabel",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "unlabelP",
        "normalized": "a-\u003eLabeled b c-\u003eLIO b d c",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003eLabeled l a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:unlabelTCB",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the value from an \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e, discarding the label and any\n protection.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "Labeled l a -\u003e a",
        "fct-source": "src/LIO-TCB.html#unlabelTCB",
        "fct-type": "function",
        "title": "unlabelTCB"
      },
      "index": {
        "description": "Extracts the value from an Labeled discarding the label and any protection",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "unlabelTCB",
        "normalized": "Labeled a b-\u003eb",
        "package": "lio-eci11",
        "partial": "TCB",
        "signature": "Labeled l a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:wguard",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003ewguard l\u003c/code\u003e in trusted code before modifying an object labeled\n \u003ccode\u003el\u003c/code\u003e.  If \u003ccode\u003el'\u003c/code\u003e is the current label, then this function ensures that\n \u003ccode\u003el' `\u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e` l\u003c/code\u003e before doing the same thing as \u003ccode\u003e\u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e l\u003c/code\u003e.  Throws\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLerrHigh\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the current label \u003ccode\u003el'\u003c/code\u003e is too high.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#wguard",
        "fct-type": "function",
        "title": "wguard"
      },
      "index": {
        "description": "Use wguard in trusted code before modifying an object labeled If is the current label then this function ensures that leq before doing the same thing as taint Throws LerrHigh if the current label is too high",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "wguard",
        "normalized": "a-\u003eLIO a b()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "l-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:wguardP",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewguard\u003c/a\u003e\u003c/code\u003e, but takes privilege argument to be more permissive.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "p -\u003e l -\u003e LIO l s ()",
        "fct-source": "src/LIO-TCB.html#wguardP",
        "fct-type": "function",
        "title": "wguardP"
      },
      "index": {
        "description": "Like wguard but takes privilege argument to be more permissive",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "wguardP",
        "normalized": "a-\u003eb-\u003eLIO b c()",
        "package": "lio-eci11",
        "partial": "",
        "signature": "p-\u003el-\u003eLIO l s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TCB.html#v:withClearance",
      "description": {
        "fct-descr": "\u003cp\u003eLowers the clearance of a computation, then restores the\n clearance to its previous value.  Useful to wrap around a\n computation if you want to be sure you can catch exceptions thrown\n by it.  Also useful to wrap around \u003ccode\u003e\u003ca\u003etoLabeled\u003c/a\u003e\u003c/code\u003e to ensure that the\n computation does not access data exceeding a particular label.  If\n \u003ccode\u003ewithClearance\u003c/code\u003e is given a label that can't flow to the current\n clearance, then the clearance is lowered to the greatest lower\n bound of the label supplied and the current clearance.\n\u003c/p\u003e\u003cp\u003eNote that if the computation inside \u003ccode\u003ewithClearance\u003c/code\u003e acquires any\n \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003es, it may still be able to raise its clearance above the\n supplied argument using \u003ccode\u003e\u003ca\u003elowerClrP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LIO.TCB",
        "fct-package": "lio-eci11",
        "fct-signature": "l -\u003e LIO l s a -\u003e LIO l s a",
        "fct-source": "src/LIO-TCB.html#withClearance",
        "fct-type": "function",
        "title": "withClearance"
      },
      "index": {
        "description": "Lowers the clearance of computation then restores the clearance to its previous value Useful to wrap around computation if you want to be sure you can catch exceptions thrown by it Also useful to wrap around toLabeled to ensure that the computation does not access data exceeding particular label If withClearance is given label that can flow to the current clearance then the clearance is lowered to the greatest lower bound of the label supplied and the current clearance Note that if the computation inside withClearance acquires any Priv it may still be able to raise its clearance above the supplied argument using lowerClrP",
        "hierarchy": "LIO TCB",
        "module": "LIO.TCB",
        "name": "withClearance",
        "normalized": "a-\u003eLIO a b c-\u003eLIO a b c",
        "package": "lio-eci11",
        "partial": "Clearance",
        "signature": "l-\u003eLIO l s a-\u003eLIO l s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module creates new files and directories with unique names.\n Its functionality is similary to C's mkstemp() and mkdtemp()\n functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "module",
        "fct-source": "src/LIO-TmpFile.html",
        "fct-type": "module",
        "title": "TmpFile"
      },
      "index": {
        "description": "This module creates new files and directories with unique names Its functionality is similary to mkstemp and mkdtemp functions",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "TmpFile",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Tmp File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:hSync",
      "description": {
        "fct-descr": "\u003cp\u003eFlushes a Handle to disk with fsync()\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/LIO-TmpFile.html#hSync",
        "fct-type": "function",
        "title": "hSync"
      },
      "index": {
        "description": "Flushes Handle to disk with fsync",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "hSync",
        "normalized": "Handle-\u003eIO()",
        "package": "lio-eci11",
        "partial": "Sync",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:mkTmp",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a function on temporary file names until the function\n does not throw AlreadyExistsError.  For example, \u003ccode\u003e\u003ca\u003emkTmpFile\u003c/a\u003e\u003c/code\u003e is\n defined as:\n\u003c/p\u003e\u003cpre\u003e mkTmpFile m d s = mkTmp (openFileExclusive m) d s\n\u003c/pre\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "(FilePath -\u003e IO a)-\u003e FilePath-\u003e String-\u003e IO (a, FilePath)",
        "fct-type": "function",
        "title": "mkTmp"
      },
      "index": {
        "description": "Executes function on temporary file names until the function does not throw AlreadyExistsError For example mkTmpFile is defined as mkTmpFile mkTmp openFileExclusive",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "mkTmp",
        "normalized": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eString-\u003eIO(a,FilePath)",
        "package": "lio-eci11",
        "partial": "Tmp",
        "signature": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eString-\u003eIO(a,FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:mkTmpDir",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new subdirectory with uniqe file name.  Returns the\n pathname of the new directory as the second element of a pair, just\n for consistency with the interface to \u003ccode\u003e\u003ca\u003emkTmpFile\u003c/a\u003e\u003c/code\u003e.  See\n \u003ccode\u003e\u003ca\u003emkTmpDir'\u003c/a\u003e\u003c/code\u003e if you don't want this behavior.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath-\u003e String-\u003e IO ((), FilePath)",
        "fct-type": "function",
        "title": "mkTmpDir"
      },
      "index": {
        "description": "Creates new subdirectory with uniqe file name Returns the pathname of the new directory as the second element of pair just for consistency with the interface to mkTmpFile See mkTmpDir if you don want this behavior",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "mkTmpDir",
        "normalized": "FilePath-\u003eString-\u003eIO((),FilePath)",
        "package": "lio-eci11",
        "partial": "Tmp Dir",
        "signature": "FilePath-\u003eString-\u003eIO((),FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:mkTmpDir-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkTmpDir\u003c/a\u003e\u003c/code\u003e, but just returns the pathname of the new directory.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "FilePath-\u003e String-\u003e IO FilePath",
        "fct-type": "function",
        "title": "mkTmpDir'"
      },
      "index": {
        "description": "Like mkTmpDir but just returns the pathname of the new directory",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "mkTmpDir'",
        "normalized": "FilePath-\u003eString-\u003eIO FilePath",
        "package": "lio-eci11",
        "partial": "Tmp Dir'",
        "signature": "FilePath-\u003eString-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:mkTmpFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new file with a unique name in a particular directory\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "IOMode-\u003e FilePath-\u003e String-\u003e IO (Handle, FilePath)",
        "fct-type": "function",
        "title": "mkTmpFile"
      },
      "index": {
        "description": "Creates new file with unique name in particular directory",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "mkTmpFile",
        "normalized": "IOMode-\u003eFilePath-\u003eString-\u003eIO(Handle,FilePath)",
        "package": "lio-eci11",
        "partial": "Tmp File",
        "signature": "IOMode-\u003eFilePath-\u003eString-\u003eIO(Handle,FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:nextTmpName",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the file name returned by \u003ccode\u003e\u003ca\u003etmpName\u003c/a\u003e\u003c/code\u003e already exists,\n \u003ccode\u003enextTmpName\u003c/code\u003e modifies the file name to generate a new one.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/LIO-TmpFile.html#nextTmpName",
        "fct-type": "function",
        "title": "nextTmpName"
      },
      "index": {
        "description": "When the file name returned by tmpName already exists nextTmpName modifies the file name to generate new one",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "nextTmpName",
        "normalized": "String-\u003eString",
        "package": "lio-eci11",
        "partial": "Tmp Name",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:openFileExclusive",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a file in exclusive mode, throwing AlreadyExistsError if\n the file name is already in use.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "IOMode -\u003e FilePath -\u003e IO Handle",
        "fct-source": "src/LIO-TmpFile.html#openFileExclusive",
        "fct-type": "function",
        "title": "openFileExclusive"
      },
      "index": {
        "description": "Opens file in exclusive mode throwing AlreadyExistsError if the file name is already in use",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "openFileExclusive",
        "normalized": "IOMode-\u003eFilePath-\u003eIO Handle",
        "package": "lio-eci11",
        "partial": "File Exclusive",
        "signature": "IOMode-\u003eFilePath-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:serializele",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an Integer into an array of bytes, in little-endian\n order.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "Int-\u003e Integer-\u003e [Word8]",
        "fct-type": "function",
        "title": "serializele"
      },
      "index": {
        "description": "Serialize an Integer into an array of bytes in little-endian order",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "serializele",
        "normalized": "Int-\u003eInteger-\u003e[Word]",
        "package": "lio-eci11",
        "partial": "",
        "signature": "Int-\u003eInteger-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:tmpName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a temorary file name, based on the value of the current\n time of day clock.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "IO String",
        "fct-source": "src/LIO-TmpFile.html#tmpName",
        "fct-type": "function",
        "title": "tmpName"
      },
      "index": {
        "description": "Return temorary file name based on the value of the current time of day clock",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "tmpName",
        "normalized": "",
        "package": "lio-eci11",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lio-eci11/docs/LIO-TmpFile.html#v:unserializele",
      "description": {
        "fct-descr": "\u003cp\u003eTake an array of bytes containing an Integer serialized in\n little-endian order, and return the Integer.\n\u003c/p\u003e",
        "fct-module": "LIO.TmpFile",
        "fct-package": "lio-eci11",
        "fct-signature": "[Word8] -\u003e Integer",
        "fct-source": "src/LIO-TmpFile.html#unserializele",
        "fct-type": "function",
        "title": "unserializele"
      },
      "index": {
        "description": "Take an array of bytes containing an Integer serialized in little-endian order and return the Integer",
        "hierarchy": "LIO TmpFile",
        "module": "LIO.TmpFile",
        "name": "unserializele",
        "normalized": "[Word]-\u003eInteger",
        "package": "lio-eci11",
        "partial": "",
        "signature": "[Word]-\u003eInteger"
      }
    }
  }
]