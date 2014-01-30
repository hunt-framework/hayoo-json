[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Data-ByteString-Lazy-UTF8-Unified.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module unifies some parts of \u003ccode\u003ebytestring\u003c/code\u003e (as is in \u003ccode\u003e0.9.1.5\u003c/code\u003e\n version) and \u003ccode\u003eutf8-string\u003c/code\u003e (as is in \u003ccode\u003e0.3.6\u003c/code\u003e version) packages - it\n exports \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e, \u003ca\u003eData.ByteString.Lazy.UTF8\u003c/a\u003e and\n \u003ca\u003eSystem.IO.UTF8\u003c/a\u003e, while hiding from the first everything that is\n to be found in latter two. Ofcourse \u003ca\u003eSystem.IO.UTF8\u003c/a\u003e routines\n are wrapped to work with lazy \u003ccode\u003eByteStrings\u003c/code\u003e instead of \u003ccode\u003eStrings\u003c/code\u003e.\n This way we get a module an \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e alternative\n that won't corrupt Unicode symbols, an that will make\n a proper IO with them.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified, to avoid name\n clashes with Prelude functions. eg.\n\u003c/p\u003e\u003cpre\u003eimport qualified Data.ByteString.Lazy.UTF8.Unified as B\u003c/pre\u003e\u003cp\u003eor even\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Lazy.UTF8.Unified as Lazy     (ByteString)\n import qualified Data.ByteString.Lazy.UTF8.Unified as B hiding (ByteString)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8.Unified",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lazy-UTF8-Unified.html",
        "fct-type": "module",
        "title": "Unified"
      },
      "index": {
        "description": "This module unifies some parts of bytestring as is in version and utf8-string as is in version packages it exports Data.ByteString.Lazy.Char8 Data.ByteString.Lazy.UTF8 and System.IO.UTF8 while hiding from the first everything that is to be found in latter two Ofcourse System.IO.UTF8 routines are wrapped to work with lazy ByteStrings instead of Strings This way we get module an Data.ByteString.Lazy.Char8 alternative that won corrupt Unicode symbols an that will make proper IO with them This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.ByteString.Lazy.UTF8.Unified as or even import qualified Data.ByteString.Lazy.UTF8.Unified as Lazy ByteString import qualified Data.ByteString.Lazy.UTF8.Unified as hiding ByteString",
        "hierarchy": "Data ByteString Lazy UTF8 Unified",
        "module": "Data.ByteString.Lazy.UTF8.Unified",
        "name": "Unified",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe analogue to ordinary lazy \u003ccode\u003eByteString\u003c/code\u003e, but with a constraint on size,\n and some routines, thet respects the constraint.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-ConstraintedLBS.html",
        "fct-type": "module",
        "title": "ConstraintedLBS"
      },
      "index": {
        "description": "The analogue to ordinary lazy ByteString but with constraint on size and some routines thet respects the constraint",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "ConstraintedLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "Constrainted LBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:CLBS",
      "description": {
        "fct-descr": "\u003cp\u003eThe analogue to ordinary lazy \u003ccode\u003eByteString\u003c/code\u003e, but with a constraint on size.\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-ConstraintedLBS.html#CLBS",
        "fct-type": "data",
        "title": "CLBS"
      },
      "index": {
        "description": "The analogue to ordinary lazy ByteString but with constraint on size",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "CLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "CLBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:StdErr_CLBS",
      "description": {
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-ConstraintedLBS.html#StdErr_CLBS",
        "fct-type": "type",
        "title": "StdErr_CLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "StdErr_CLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "Std Err CLBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:StdOutAndErr_CLBS",
      "description": {
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-ConstraintedLBS.html#StdOutAndErr_CLBS",
        "fct-type": "type",
        "title": "StdOutAndErr_CLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "StdOutAndErr_CLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "Std Out And Err CLBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:StdOut_CLBS",
      "description": {
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-ConstraintedLBS.html#StdOut_CLBS",
        "fct-type": "type",
        "title": "StdOut_CLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "StdOut_CLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "Std Out CLBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:CLBS",
      "description": {
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#CLBS",
        "fct-type": "function",
        "title": "CLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "CLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "CLBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:addToCLBS_1",
      "description": {
        "fct-descr": "\u003cp\u003eAppend first lazy \u003ccode\u003eByteString\u003c/code\u003e (given in tuple with\n it's (trusted) length) to a \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e. If the result of appending\n violates clbsMaxLen constraint, then the content gets truncated,\n tailed with \"...\" and CLBS is finalized (nothing more can be added to it)\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "(ByteString, Int64) -\u003e CLBS -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#addToCLBS_1",
        "fct-type": "function",
        "title": "addToCLBS_1"
      },
      "index": {
        "description": "Append first lazy ByteString given in tuple with it trusted length to CLBS If the result of appending violates clbsMaxLen constraint then the content gets truncated tailed with and CLBS is finalized nothing more can be added to it",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "addToCLBS_1",
        "normalized": "(ByteString,Int)-\u003eCLBS-\u003eCLBS",
        "package": "PCLT",
        "partial": "To CLBS",
        "signature": "(ByteString,Int)-\u003eCLBS-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:addToCLBS_2",
      "description": {
        "fct-descr": "\u003cp\u003eAppend first to second. If the result of appending\n violates clbsMaxLen constraint, then the content gets truncated,\n tailed with \"...\" and CLBS is finalized (nothing more can be added to it)\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "CLBS -\u003e CLBS -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#addToCLBS_2",
        "fct-type": "function",
        "title": "addToCLBS_2"
      },
      "index": {
        "description": "Append first to second If the result of appending violates clbsMaxLen constraint then the content gets truncated tailed with and CLBS is finalized nothing more can be added to it",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "addToCLBS_2",
        "normalized": "CLBS-\u003eCLBS-\u003eCLBS",
        "package": "PCLT",
        "partial": "To CLBS",
        "signature": "CLBS-\u003eCLBS-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:adjustCLBS_to",
      "description": {
        "fct-descr": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e contain specified \u003ccode\u003eByteString\u003c/code\u003e, keeping the length constraint.\n If the specified bytestring violates clbsMaxLen constraint, then\n the content gets truncated, tailed with \"...\"\n and CLBS is finalized (nothing more can be added to it)\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "CLBS -\u003e ByteString -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#adjustCLBS_to",
        "fct-type": "function",
        "title": "adjustCLBS_to"
      },
      "index": {
        "description": "Make CLBS contain specified ByteString keeping the length constraint If the specified bytestring violates clbsMaxLen constraint then the content gets truncated tailed with and CLBS is finalized nothing more can be added to it",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "adjustCLBS_to",
        "normalized": "CLBS-\u003eByteString-\u003eCLBS",
        "package": "PCLT",
        "partial": "CLBS",
        "signature": "CLBS-\u003eByteString-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsFinalized_isit",
      "description": {
        "fct-descr": "\u003cp\u003eBytestring is finalized, when something is appended to it,\n that makes \u003ccode\u003eclbsMaxLen\u003c/code\u003e to be reached. The last 3 bytes\n of a finalized bytestring are always made \"...\"\n (by routines of this module, that manage finalization).\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ConstraintedLBS.html#CLBS",
        "fct-type": "function",
        "title": "clbsFinalized_isit"
      },
      "index": {
        "description": "Bytestring is finalized when something is appended to it that makes clbsMaxLen to be reached The last bytes of finalized bytestring are always made by routines of this module that manage finalization",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "clbsFinalized_isit",
        "normalized": "",
        "package": "PCLT",
        "partial": "Finalized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsFreeSpaceLeft",
      "description": {
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "CLBS -\u003e Int64",
        "fct-source": "src/Text-ConstraintedLBS.html#clbsFreeSpaceLeft",
        "fct-type": "function",
        "title": "clbsFreeSpaceLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "clbsFreeSpaceLeft",
        "normalized": "CLBS-\u003eInt",
        "package": "PCLT",
        "partial": "Free Space Left",
        "signature": "CLBS-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsLBS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-ConstraintedLBS.html#CLBS",
        "fct-type": "function",
        "title": "clbsLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "clbsLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "LBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsLen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "Int64",
        "fct-source": "src/Text-ConstraintedLBS.html#CLBS",
        "fct-type": "function",
        "title": "clbsLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "clbsLen",
        "normalized": "",
        "package": "PCLT",
        "partial": "Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsMaxLen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "Int64",
        "fct-source": "src/Text-ConstraintedLBS.html#CLBS",
        "fct-type": "function",
        "title": "clbsMaxLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "clbsMaxLen",
        "normalized": "",
        "package": "PCLT",
        "partial": "Max Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:concatTruncedLiteraryLBS",
      "description": {
        "fct-descr": "\u003cp\u003eAppend to first lazy bytestring the second one. The available space\n for append is constrainted by the 3rd argument. Every bytestring must\n be specified in tuple together with it's length (this is done to\n speed up by reducing repeating \u003ccode\u003elength\u003c/code\u003e calls), which is trusted.\n If length of added string is bigger then available for append,\n the result will be truncated and will have a \"...\" tail.\n\u003c/p\u003e\u003cp\u003eFunction returns resulting ByteString, it's length and boolean indicating\n if length of added string was bigger than available for append space.\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "(ByteString, Int64) -\u003e (ByteString, Int64) -\u003e Int64 -\u003e (ByteString, Int64, Bool)",
        "fct-source": "src/Text-ConstraintedLBS.html#concatTruncedLiteraryLBS",
        "fct-type": "function",
        "title": "concatTruncedLiteraryLBS"
      },
      "index": {
        "description": "Append to first lazy bytestring the second one The available space for append is constrainted by the rd argument Every bytestring must be specified in tuple together with it length this is done to speed up by reducing repeating length calls which is trusted If length of added string is bigger then available for append the result will be truncated and will have tail Function returns resulting ByteString it length and boolean indicating if length of added string was bigger than available for append space",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "concatTruncedLiteraryLBS",
        "normalized": "(ByteString,Int)-\u003e(ByteString,Int)-\u003eInt-\u003e(ByteString,Int,Bool)",
        "package": "PCLT",
        "partial": "Trunced Literary LBS",
        "signature": "(ByteString,Int)-\u003e(ByteString,Int)-\u003eInt-\u003e(ByteString,Int,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:freeSpaceCLBS",
      "description": {
        "fct-descr": "\u003cp\u003eProduce an empty \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e, that would have the maximum of length equal\n to free space left available in specified \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "CLBS -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#freeSpaceCLBS",
        "fct-type": "function",
        "title": "freeSpaceCLBS"
      },
      "index": {
        "description": "Produce an empty CLBS that would have the maximum of length equal to free space left available in specified CLBS",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "freeSpaceCLBS",
        "normalized": "CLBS-\u003eCLBS",
        "package": "PCLT",
        "partial": "Space CLBS",
        "signature": "CLBS-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:insertInsteadOf_inCLBS",
      "description": {
        "fct-descr": "\u003cp\u003eGiven \u003ccode\u003einsertInsteadOf_inCLBS (old_separator, new_separator) clbs\u003c/code\u003e,\n function replaces every occurence of \u003ccode\u003eold_separator\u003c/code\u003e on \u003ccode\u003enew_separator\u003c/code\u003e\n respecting length constraint (and possibly finalizing \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "(ByteString, ByteString) -\u003e CLBS -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#insertInsteadOf_inCLBS",
        "fct-type": "function",
        "title": "insertInsteadOf_inCLBS"
      },
      "index": {
        "description": "Given insertInsteadOf inCLBS old separator new separator clbs function replaces every occurence of old separator on new separator respecting length constraint and possibly finalizing CLBS",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "insertInsteadOf_inCLBS",
        "normalized": "(ByteString,ByteString)-\u003eCLBS-\u003eCLBS",
        "package": "PCLT",
        "partial": "Instead Of CLBS",
        "signature": "(ByteString,ByteString)-\u003eCLBS-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:newCLBS",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e with a specified maximum on length.\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "Int64 -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#newCLBS",
        "fct-type": "function",
        "title": "newCLBS"
      },
      "index": {
        "description": "Make CLBS with specified maximum on length",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "newCLBS",
        "normalized": "Int-\u003eCLBS",
        "package": "PCLT",
        "partial": "CLBS",
        "signature": "Int-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:resetCLBS",
      "description": {
        "fct-descr": "\u003cp\u003eEmpify, and if finalized, make not.\n\u003c/p\u003e",
        "fct-module": "Text.ConstraintedLBS",
        "fct-package": "PCLT",
        "fct-signature": "CLBS -\u003e CLBS",
        "fct-source": "src/Text-ConstraintedLBS.html#resetCLBS",
        "fct-type": "function",
        "title": "resetCLBS"
      },
      "index": {
        "description": "Empify and if finalized make not",
        "hierarchy": "Text ConstraintedLBS",
        "module": "Text.ConstraintedLBS",
        "name": "resetCLBS",
        "normalized": "CLBS-\u003eCLBS",
        "package": "PCLT",
        "partial": "CLBS",
        "signature": "CLBS-\u003eCLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-Catalog.html",
        "fct-type": "module",
        "title": "Catalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "Catalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:AddedUnit_SDL",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Catalog.html#AddedUnit_SDL",
        "fct-type": "type",
        "title": "AddedUnit_SDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "AddedUnit_SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "Added Unit SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:CompositionCycle_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#CompositionCycle_PCLTE",
        "fct-type": "data",
        "title": "CompositionCycle_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "CompositionCycle_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Composition Cycle PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
        "fct-type": "data",
        "title": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:DifferentSDLs_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#DifferentSDLs_PCLTE",
        "fct-type": "data",
        "title": "DifferentSDLs_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "DifferentSDLs_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Different SDLs PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:ErrorWithPCSCatalog",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#ErrorWithPCSCatalog",
        "fct-type": "data",
        "title": "ErrorWithPCSCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "ErrorWithPCSCatalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "Error With PCSCatalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:MainUnit_SDL",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Catalog.html#MainUnit_SDL",
        "fct-type": "type",
        "title": "MainUnit_SDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "MainUnit_SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "Main Unit SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:PCLT_Catalog",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
        "fct-type": "data",
        "title": "PCLT_Catalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "PCLT_Catalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:PCLT_CatalogID",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Catalog.html#PCLT_CatalogID",
        "fct-type": "type",
        "title": "PCLT_CatalogID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "PCLT_CatalogID",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Catalog ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:RequiredByRequirerCompositeIsMissing_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#RequiredByRequirerCompositeIsMissing_PCLTE",
        "fct-type": "data",
        "title": "RequiredByRequirerCompositeIsMissing_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "RequiredByRequirerCompositeIsMissing_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required By Requirer Composite Is Missing PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:RequiredCompositeIsMissing_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#RequiredCompositeIsMissing_PCLTE",
        "fct-type": "data",
        "title": "RequiredCompositeIsMissing_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "RequiredCompositeIsMissing_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:TplDefaultLngIsMissing_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#TplDefaultLngIsMissing_PCLTE",
        "fct-type": "data",
        "title": "TplDefaultLngIsMissing_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "TplDefaultLngIsMissing_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl Default Lng Is Missing PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:TplUniquenessViol_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Catalog.html#TplUniquenessViol_PCLTE",
        "fct-type": "data",
        "title": "TplUniquenessViol_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "TplUniquenessViol_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl Uniqueness Viol PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:CompositionCycle_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "CompositionCycle_PCLTE PCLT_CompositeKey [PCLT_CompositeKey]",
        "fct-source": "src/Text-PCLT-Catalog.html#CompositionCycle_PCLTE",
        "fct-type": "function",
        "title": "CompositionCycle_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "CompositionCycle_PCLTE",
        "normalized": "CompositionCycle_PCLTE PCLT_CompositeKey[PCLT_CompositeKey]",
        "package": "PCLT",
        "partial": "Composition Cycle PCLTE",
        "signature": "CompositionCycle_PCLTE PCLT_CompositeKey[PCLT_CompositeKey]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE PCLT_CompositeKey LanguageName",
        "fct-source": "src/Text-PCLT-Catalog.html#DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
        "fct-type": "function",
        "title": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:DifferentSDLs_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "DifferentSDLs_PCLTE PCLT_ID (MainUnit_SDL, AddedUnit_SDL)",
        "fct-source": "src/Text-PCLT-Catalog.html#DifferentSDLs_PCLTE",
        "fct-type": "function",
        "title": "DifferentSDLs_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "DifferentSDLs_PCLTE",
        "normalized": "DifferentSDLs_PCLTE PCLT_ID(MainUnit_SDL,AddedUnit_SDL)",
        "package": "PCLT",
        "partial": "Different SDLs PCLTE",
        "signature": "DifferentSDLs_PCLTE PCLT_ID(MainUnit_SDL,AddedUnit_SDL)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:ErrorWithPCSCatalog",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "ErrorWithPCSCatalog PCLT_CatalogID a",
        "fct-source": "src/Text-PCLT-Catalog.html#ErrorWithPCSCatalog",
        "fct-type": "function",
        "title": "ErrorWithPCSCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "ErrorWithPCSCatalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "Error With PCSCatalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:PCLT_Catalog",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_Catalog",
        "fct-source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
        "fct-type": "function",
        "title": "PCLT_Catalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "PCLT_Catalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:RequiredByRequirerCompositeIsMissing_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "RequiredByRequirerCompositeIsMissing_PCLTE RequirerCompositeKey RequiredCompositeIsMissing_PCLTE",
        "fct-source": "src/Text-PCLT-Catalog.html#RequiredByRequirerCompositeIsMissing_PCLTE",
        "fct-type": "function",
        "title": "RequiredByRequirerCompositeIsMissing_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "RequiredByRequirerCompositeIsMissing_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required By Requirer Composite Is Missing PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:RequiredCompositeIsMissing_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_PCLTE RequiredCompositeKey",
        "fct-source": "src/Text-PCLT-Catalog.html#RequiredCompositeIsMissing_PCLTE",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "RequiredCompositeIsMissing_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:TplDefaultLngIsMissing_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "TplDefaultLngIsMissing_PCLTE PCLT_CompositeKey",
        "fct-source": "src/Text-PCLT-Catalog.html#TplDefaultLngIsMissing_PCLTE",
        "fct-type": "function",
        "title": "TplDefaultLngIsMissing_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "TplDefaultLngIsMissing_PCLTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl Default Lng Is Missing PCLTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:TplUniquenessViol_PCLTE",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "TplUniquenessViol_PCLTE PCLT_ID [LanguageName]",
        "fct-source": "src/Text-PCLT-Catalog.html#TplUniquenessViol_PCLTE",
        "fct-type": "function",
        "title": "TplUniquenessViol_PCLTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "TplUniquenessViol_PCLTE",
        "normalized": "TplUniquenessViol_PCLTE PCLT_ID[LanguageName]",
        "package": "PCLT",
        "partial": "Tpl Uniqueness Viol PCLTE",
        "signature": "TplUniquenessViol_PCLTE PCLT_ID[LanguageName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catDfltLng",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_Catalog -\u003e LanguageName",
        "fct-source": "src/Text-PCLT-Catalog.html#catDfltLng",
        "fct-type": "function",
        "title": "catDfltLng"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "catDfltLng",
        "normalized": "PCLT_Catalog-\u003eLanguageName",
        "package": "PCLT",
        "partial": "Dflt Lng",
        "signature": "PCLT_Catalog-\u003eLanguageName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catInstMaxLen",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_Catalog -\u003e Int64",
        "fct-source": "src/Text-PCLT-Catalog.html#catInstMaxLen",
        "fct-type": "function",
        "title": "catInstMaxLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "catInstMaxLen",
        "normalized": "PCLT_Catalog-\u003eInt",
        "package": "PCLT",
        "partial": "Inst Max Len",
        "signature": "PCLT_Catalog-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catSize",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_Catalog -\u003e Int",
        "fct-source": "src/Text-PCLT-Catalog.html#catSize",
        "fct-type": "function",
        "title": "catSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "catSize",
        "normalized": "PCLT_Catalog-\u003eInt",
        "package": "PCLT",
        "partial": "Size",
        "signature": "PCLT_Catalog-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catStrictOrient",
      "description": {
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_Catalog -\u003e StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-source": "src/Text-PCLT-Catalog.html#catStrictOrient",
        "fct-type": "function",
        "title": "catStrictOrient"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "catStrictOrient",
        "normalized": "PCLT_Catalog-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "package": "PCLT",
        "partial": "Strict Orient",
        "signature": "PCLT_Catalog-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:pcltcCatalogID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_CatalogID",
        "fct-source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
        "fct-type": "function",
        "title": "pcltcCatalogID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "pcltcCatalogID",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:pcltcCatalogMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_CatalogMap",
        "fct-source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
        "fct-type": "function",
        "title": "pcltcCatalogMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "pcltcCatalogMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:pcltcInnerConfig",
      "description": {
        "fct-descr": "\u003cp\u003eIt is highly recommended not to change this param\n values after catalog is formed, since it's easy to\n spoil catalog content that way.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Catalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig",
        "fct-source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
        "fct-type": "function",
        "title": "pcltcInnerConfig"
      },
      "index": {
        "description": "It is highly recommended not to change this param values after catalog is formed since it easy to spoil catalog content that way",
        "hierarchy": "Text PCLT Catalog",
        "module": "Text.PCLT.Catalog",
        "name": "pcltcInnerConfig",
        "normalized": "",
        "package": "PCLT",
        "partial": "Inner Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools to use \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e class instances in order to build up\n a catalog. (\"FromHSRT\" in module name means \u003ca\u003efrom a given instance of\n HasStaticRawPCLTs class\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html",
        "fct-type": "module",
        "title": "CatalogFromHSRT"
      },
      "index": {
        "description": "Tools to use HasStaticRawPCLTs class instances in order to build up catalog FromHSRT in module name means from given instance of HasStaticRawPCLTs class",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "CatalogFromHSRT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog From HSRT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#t:CatalogFromHSRTInitErrors",
      "description": {
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
        "fct-type": "data",
        "title": "CatalogFromHSRTInitErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "CatalogFromHSRTInitErrors",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog From HSRTInit Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:CatalogFromHSRTInitErrors",
      "description": {
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "CatalogFromHSRTInitErrors",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
        "fct-type": "function",
        "title": "CatalogFromHSRTInitErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "CatalogFromHSRTInitErrors",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog From HSRTInit Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:addFromHSRTToCatalog",
      "description": {
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "a -\u003e PCLT_Catalog -\u003e (PCLT_Catalog, CatalogFromHSRTInitErrors)",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#addFromHSRTToCatalog",
        "fct-type": "function",
        "title": "addFromHSRTToCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "addFromHSRTToCatalog",
        "normalized": "a-\u003ePCLT_Catalog-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
        "package": "PCLT",
        "partial": "From HSRTTo Catalog",
        "signature": "a-\u003ePCLT_Catalog-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:addFromHSRTToCatalog_2",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eaddFromHSRTToCatalog\u003c/a\u003e\u003c/code\u003e function.\n For case, when all errors are to be represented at once.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "a -\u003e PCLT_Catalog -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#addFromHSRTToCatalog_2",
        "fct-type": "function",
        "title": "addFromHSRTToCatalog_2"
      },
      "index": {
        "description": "wrapper around addFromHSRTToCatalog function For case when all errors are to be represented at once",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "addFromHSRTToCatalog_2",
        "normalized": "a-\u003ePCLT_Catalog-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
        "package": "PCLT",
        "partial": "From HSRTTo Catalog",
        "signature": "a-\u003ePCLT_Catalog-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:cfhieCatReadErrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
        "fct-type": "function",
        "title": "cfhieCatReadErrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "cfhieCatReadErrs",
        "normalized": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
        "package": "PCLT",
        "partial": "Cat Read Errs",
        "signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:cfhieCatalogID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_CatalogID",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
        "fct-type": "function",
        "title": "cfhieCatalogID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "cfhieCatalogID",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:cfhieCollectionErrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "[AddPCLT_toPCLT_Error]",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
        "fct-type": "function",
        "title": "cfhieCollectionErrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "cfhieCollectionErrs",
        "normalized": "[AddPCLT_toPCLT_Error]",
        "package": "PCLT",
        "partial": "Collection Errs",
        "signature": "[AddPCLT_toPCLT_Error]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:defaultCatalogFromHSRTInitErrors",
      "description": {
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_CatalogID -\u003e CatalogFromHSRTInitErrors",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#defaultCatalogFromHSRTInitErrors",
        "fct-type": "function",
        "title": "defaultCatalogFromHSRTInitErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "defaultCatalogFromHSRTInitErrors",
        "normalized": "PCLT_CatalogID-\u003eCatalogFromHSRTInitErrors",
        "package": "PCLT",
        "partial": "Catalog From HSRTInit Errors",
        "signature": "PCLT_CatalogID-\u003eCatalogFromHSRTInitErrors"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:initCatalogFromHSRT",
      "description": {
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "a -\u003e PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (PCLT_Catalog, CatalogFromHSRTInitErrors)",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#initCatalogFromHSRT",
        "fct-type": "function",
        "title": "initCatalogFromHSRT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "initCatalogFromHSRT",
        "normalized": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
        "package": "PCLT",
        "partial": "Catalog From HSRT",
        "signature": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:initCatalogFromHSRT_2",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003einitCatalogFromHSRT\u003c/a\u003e\u003c/code\u003e function.\n For case, when all errors are to be represented at once.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CatalogFromHSRT",
        "fct-package": "PCLT",
        "fct-signature": "a -\u003e PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
        "fct-source": "src/Text-PCLT-CatalogFromHSRT.html#initCatalogFromHSRT_2",
        "fct-type": "function",
        "title": "initCatalogFromHSRT_2"
      },
      "index": {
        "description": "wrapper around initCatalogFromHSRT function For case when all errors are to be represented at once",
        "hierarchy": "Text PCLT CatalogFromHSRT",
        "module": "Text.PCLT.CatalogFromHSRT",
        "name": "initCatalogFromHSRT_2",
        "normalized": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
        "package": "PCLT",
        "partial": "Catalog From HSRT",
        "signature": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions from this module isn't used for catalog formation.\n It's not very wise to have two similar codes of catalog maths here and\n in module \u003ca\u003eText.PCLT.MakeCatalog\u003c/a\u003e, since it raises double maintenence\n problem. Perhaps the problem will be solved in future versions.\n\u003c/p\u003e\u003cp\u003eThe math's errors, however, seems to be of use in other modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-CatalogMaths.html",
        "fct-type": "module",
        "title": "CatalogMaths"
      },
      "index": {
        "description": "Functions from this module isn used for catalog formation It not very wise to have two similar codes of catalog maths here and in module Text.PCLT.MakeCatalog since it raises double maintenence problem Perhaps the problem will be solved in future versions The math errors however seems to be of use in other modules",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "CatalogMaths",
        "normalized": "",
        "package": "PCLT",
        "partial": "Catalog Maths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#t:AddLngTpl_toPCLT_Error",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003eaddLngTpl_toPCLT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#AddLngTpl_toPCLT_Error",
        "fct-type": "data",
        "title": "AddLngTpl_toPCLT_Error"
      },
      "index": {
        "description": "Error type for addLngTpl toPCLT",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "AddLngTpl_toPCLT_Error",
        "normalized": "",
        "package": "PCLT",
        "partial": "Add Lng Tpl PCLT Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#t:AddPCLT_toPCLT_Error",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003eaddPCLT_toPCLT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#AddPCLT_toPCLT_Error",
        "fct-type": "data",
        "title": "AddPCLT_toPCLT_Error"
      },
      "index": {
        "description": "Error type for addPCLT toPCLT",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "AddPCLT_toPCLT_Error",
        "normalized": "",
        "package": "PCLT",
        "partial": "Add PCLT PCLT Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:AddLngTpl_toPCLT_Error_APTTPTE",
      "description": {
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "AddLngTpl_toPCLT_Error_APTTPTE AddLngTpl_toPCLT_Error",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#AddPCLT_toPCLT_Error",
        "fct-type": "function",
        "title": "AddLngTpl_toPCLT_Error_APTTPTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "AddLngTpl_toPCLT_Error_APTTPTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Add Lng Tpl PCLT Error APTTPTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE",
      "description": {
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#AddLngTpl_toPCLT_Error",
        "fct-type": "function",
        "title": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault APSTPTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:DifferentSDLs_APTTPTE",
      "description": {
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "DifferentSDLs_APTTPTE DifferentSDLs_PCLTE",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#AddPCLT_toPCLT_Error",
        "fct-type": "function",
        "title": "DifferentSDLs_APTTPTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "DifferentSDLs_APTTPTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Different SDLs APTTPTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:TplUniquenessViol_APSTPTE",
      "description": {
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "TplUniquenessViol_APSTPTE TplUniquenessViol_PCLTE",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#AddLngTpl_toPCLT_Error",
        "fct-type": "function",
        "title": "TplUniquenessViol_APSTPTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "TplUniquenessViol_APSTPTE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl Uniqueness Viol APSTPTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:addLngTpl_toPCLT",
      "description": {
        "fct-descr": "\u003cp\u003eAdds localized template as a special case of localizable template.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID -\u003e (LanguageName, LocalizedTemplate) -\u003e LocalizableTemplate -\u003e PCLT_InnerConfig -\u003e (LocalizableTemplate, [AddLngTpl_toPCLT_Error])",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#addLngTpl_toPCLT",
        "fct-type": "function",
        "title": "addLngTpl_toPCLT"
      },
      "index": {
        "description": "Adds localized template as special case of localizable template",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "addLngTpl_toPCLT",
        "normalized": "PCLT_ID-\u003e(LanguageName,LocalizedTemplate)-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddLngTpl_toPCLT_Error])",
        "package": "PCLT",
        "partial": "Lng Tpl PCLT",
        "signature": "PCLT_ID-\u003e(LanguageName,LocalizedTemplate)-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddLngTpl_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:addPCLT_toPCLT",
      "description": {
        "fct-descr": "\u003cp\u003eAdds up localizable templates, their localized cases.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CatalogMaths",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID -\u003e LocalizableTemplate -\u003e LocalizableTemplate -\u003e PCLT_InnerConfig -\u003e (LocalizableTemplate, [AddPCLT_toPCLT_Error])",
        "fct-source": "src/Text-PCLT-CatalogMaths.html#addPCLT_toPCLT",
        "fct-type": "function",
        "title": "addPCLT_toPCLT"
      },
      "index": {
        "description": "Adds up localizable templates their localized cases",
        "hierarchy": "Text PCLT CatalogMaths",
        "module": "Text.PCLT.CatalogMaths",
        "name": "addPCLT_toPCLT",
        "normalized": "PCLT_ID-\u003eLocalizableTemplate-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddPCLT_toPCLT_Error])",
        "package": "PCLT",
        "partial": "PCLT PCLT",
        "signature": "PCLT_ID-\u003eLocalizableTemplate-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddPCLT_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-CommonTypes.html",
        "fct-type": "module",
        "title": "CommonTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "CommonTypes",
        "normalized": "",
        "package": "PCLT",
        "partial": "Common Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:LanguageName",
      "description": {
        "fct-descr": "\u003cp\u003eIt is highly recommended to use \u003cem\u003eISO 639-3\u003c/em\u003e here - I mean\n it was originally intended to do so, and now a related package PCLT-DB\n works only with 3-letters (not bigger) languages names -\n there is a constraint in DB for that.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#LanguageName",
        "fct-type": "type",
        "title": "LanguageName"
      },
      "index": {
        "description": "It is highly recommended to use ISO here mean it was originally intended to do so and now related package PCLT-DB works only with letters not bigger languages names there is constraint in DB for that",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "LanguageName",
        "normalized": "",
        "package": "PCLT",
        "partial": "Language Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_CompositeKey",
      "description": {
        "fct-descr": "\u003cp\u003eHere and in many places of package by\n \"composite\" is meant \"template which is included in\n composed template\".\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#PCLT_CompositeKey",
        "fct-type": "type",
        "title": "PCLT_CompositeKey"
      },
      "index": {
        "description": "Here and in many places of package by composite is meant template which is included in composed template",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "PCLT_CompositeKey",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Composite Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_ID",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#PCLT_ID",
        "fct-type": "type",
        "title": "PCLT_ID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "PCLT_ID",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_ParamKey",
      "description": {
        "fct-descr": "\u003cp\u003eLocalizable template ID.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#PCLT_ParamKey",
        "fct-type": "type",
        "title": "PCLT_ParamKey"
      },
      "index": {
        "description": "Localizable template ID",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "PCLT_ParamKey",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Param Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_SubCompositeKey",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#PCLT_SubCompositeKey",
        "fct-type": "type",
        "title": "PCLT_SubCompositeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "PCLT_SubCompositeKey",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Sub Composite Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_SuperCompositeKey",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#PCLT_SuperCompositeKey",
        "fct-type": "type",
        "title": "PCLT_SuperCompositeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "PCLT_SuperCompositeKey",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Super Composite Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:ParamName_LBS",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#ParamName_LBS",
        "fct-type": "type",
        "title": "ParamName_LBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "ParamName_LBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "Param Name LBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:RequiredCompositeKey",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#RequiredCompositeKey",
        "fct-type": "type",
        "title": "RequiredCompositeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "RequiredCompositeKey",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:RequirerCompositeKey",
      "description": {
        "fct-module": "Text.PCLT.CommonTypes",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-CommonTypes.html#RequirerCompositeKey",
        "fct-type": "type",
        "title": "RequirerCompositeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT CommonTypes",
        "module": "Text.PCLT.CommonTypes",
        "name": "RequirerCompositeKey",
        "normalized": "",
        "package": "PCLT",
        "partial": "Requirer Composite Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#",
      "description": {
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "Config",
        "normalized": "",
        "package": "PCLT",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:PCLT_InnerConfig",
      "description": {
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "data",
        "title": "PCLT_InnerConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "PCLT_InnerConfig",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Inner Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:PCLT_InnerConfigID",
      "description": {
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfigID",
        "fct-type": "type",
        "title": "PCLT_InnerConfigID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "PCLT_InnerConfigID",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Inner Config ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:ReparsingDepth",
      "description": {
        "fct-descr": "\u003cp\u003eNOT USED, RESERVED FOR FUTURE VERSIONS OF PCLT!\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Config.html#ReparsingDepth",
        "fct-type": "type",
        "title": "ReparsingDepth"
      },
      "index": {
        "description": "NOT USED RESERVED FOR FUTURE VERSIONS OF PCLT",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "ReparsingDepth",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparsing Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
      "description": {
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "data",
        "title": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "normalized": "",
        "package": "PCLT",
        "partial": "Strict Orient Params And Cmpsts Dflt Lng Tpls Sets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:PCLT_InnerConfig",
      "description": {
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "PCLT_InnerConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "PCLT_InnerConfig",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Inner Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
      "description": {
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "normalized": "",
        "package": "PCLT",
        "partial": "Strict Orient Params And Cmpsts Dflt Lng Tpls Sets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:defaultPCLTInnerConfig",
      "description": {
        "fct-descr": "\u003cpre\u003e  PCLT_InnerConfig {\n            pcsInnerConfigID = 0\n          , pcsCompositePlaceholderWrapper = B.pack \"##|\"\n          , pcsParameterPlaceholderWrapper = B.pack \"@@|\"\n          , pcsInsuficientDetLevelPlaceholder = B.pack \"#x#\"\n          , pcsMarkingErrorPlaceholderWrapper = B.pack \"/!E!\\\"\n          , pcsDefaultLanguage                = \"eng\"\n          , pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets =\n                    StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets {\n                              soStrict_IsIt = True\n                            , soExcludingInComposites   = []\n                            , soExcludingComposites     = []\n                            , soExcludingParameters     = []\n                            , soExcludingCompComposites = []\n                            , soExcludingCompParameters = []\n                    }\n          , pcsAllowUntemplatedMessages                = True\n          , pcsAllowUntemplatedLocalizationsOfMessages = True\n          , pcsShowAdhocParamsInResultOfUntemplated    = True\n          , pcsInstaniationResultMaxSize               = 10000000\n          , pcsAllowEmptySDL_parseItByModusMargin      = False\n          , pcsAllowUnreadableSDL_parseIdByModusMargin = False\n          , pcsAllowFailureToDetermineSDL_parseIdByModusMargin = False\n          , pcsNewlineLBS                              = B.pack \"\\n\"\n    }\n\u003c/pre\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig",
        "fct-source": "src/Text-PCLT-Config.html#defaultPCLTInnerConfig",
        "fct-type": "function",
        "title": "defaultPCLTInnerConfig"
      },
      "index": {
        "description": "PCLT InnerConfig pcsInnerConfigID pcsCompositePlaceholderWrapper B.pack pcsParameterPlaceholderWrapper B.pack pcsInsuficientDetLevelPlaceholder B.pack pcsMarkingErrorPlaceholderWrapper B.pack pcsDefaultLanguage eng pcsStrictOrient ofParamsAndCmpsts onDfltLngTplsSets StrictOrient ofParamsAndCmpsts onDfltLngTplsSets soStrict IsIt True soExcludingInComposites soExcludingComposites soExcludingParameters soExcludingCompComposites soExcludingCompParameters pcsAllowUntemplatedMessages True pcsAllowUntemplatedLocalizationsOfMessages True pcsShowAdhocParamsInResultOfUntemplated True pcsInstaniationResultMaxSize pcsAllowEmptySDL parseItByModusMargin False pcsAllowUnreadableSDL parseIdByModusMargin False pcsAllowFailureToDetermineSDL parseIdByModusMargin False pcsNewlineLBS B.pack",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "defaultPCLTInnerConfig",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTInner Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowEmptySDL_parseItByModusMargin",
      "description": {
        "fct-descr": "\u003cp\u003eIs it allowed to give an empty value to the field\n \"representation detailization level\" (\u003ca\u003eText.PCLT.SDL\u003c/a\u003e)?\n If allowed, then it's value will be chosen automatically\n by the margin\n depending on modus: maximal (\"+inf\") in case, when it's a\n requirement by a template, or minimal (\"zero\"), when it's\n an assigment to a reciever of representation\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsAllowEmptySDL_parseItByModusMargin"
      },
      "index": {
        "description": "Is it allowed to give an empty value to the field representation detailization level Text.PCLT.SDL If allowed then it value will be chosen automatically by the margin depending on modus maximal inf in case when it requirement by template or minimal zero when it an assigment to reciever of representation",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsAllowEmptySDL_parseItByModusMargin",
        "normalized": "",
        "package": "PCLT",
        "partial": "Allow Empty SDL It By Modus Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowFailureToDetermineSDL_parseIdByModusMargin",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003epcsi2text\u003c/code\u003e (\u003ca\u003eText.PCLT.MakeMessage\u003c/a\u003e) function fails to\n determine an SDL requiered by used template (due to\n referential cycle, missing referenced template,\n \u003ccode\u003ePCLT_SDL_Errornous\u003c/code\u003e or other reason) - should this failure\n lead to absolute denial to represent problem template, or\n should the \u003ccode\u003epcsi2text\u003c/code\u003e treat it like \"+inf\"\n (\u003ccode\u003ePCLT_SDL InfinitelyBig_SDL\u003c/code\u003e)? The error will be returned\n anyway, but question is purely about output representation.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsAllowFailureToDetermineSDL_parseIdByModusMargin"
      },
      "index": {
        "description": "If pcsi2text Text.PCLT.MakeMessage function fails to determine an SDL requiered by used template due to referential cycle missing referenced template PCLT SDL Errornous or other reason should this failure lead to absolute denial to represent problem template or should the pcsi2text treat it like inf PCLT SDL InfinitelyBig SDL The error will be returned anyway but question is purely about output representation",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsAllowFailureToDetermineSDL_parseIdByModusMargin",
        "normalized": "",
        "package": "PCLT",
        "partial": "Allow Failure To Determine SDL Id By Modus Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowUnreadableSDL_parseIdByModusMargin",
      "description": {
        "fct-descr": "\u003cp\u003eIs it allowed to give an unreadable value to the field\n \"representation detailization level\" (\u003ca\u003eText.PCLT.SDL\u003c/a\u003e)?\n If allowed,\n then it's value will be chosen automatically by the margin\n depending on modus: maximal (\"+inf\") in case, when it's a\n requirement by a template, or minimal (\"zero\"), when it's\n an assigment to a reciever of representation\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsAllowUnreadableSDL_parseIdByModusMargin"
      },
      "index": {
        "description": "Is it allowed to give an unreadable value to the field representation detailization level Text.PCLT.SDL If allowed then it value will be chosen automatically by the margin depending on modus maximal inf in case when it requirement by template or minimal zero when it an assigment to reciever of representation",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsAllowUnreadableSDL_parseIdByModusMargin",
        "normalized": "",
        "package": "PCLT",
        "partial": "Allow Unreadable SDL Id By Modus Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowUntemplatedLocalizationsOfMessages",
      "description": {
        "fct-descr": "\u003cp\u003eIs it allowed to demand representations from catalog, when\n referenced template/composite ID is persistent in catalog,\n but not in representation language?\n In case, if allowed, on place of unknown composite\n the engine (when making representation) will simply put\n it's (unknown) ID (given that recievers detailization level\n statisfies a requirement: it must be maximal (infinitely\n big)), followed by (if enabled by other config parameter)\n all the parameters used by current instaniation.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsAllowUntemplatedLocalizationsOfMessages"
      },
      "index": {
        "description": "Is it allowed to demand representations from catalog when referenced template composite ID is persistent in catalog but not in representation language In case if allowed on place of unknown composite the engine when making representation will simply put it unknown ID given that recievers detailization level statisfies requirement it must be maximal infinitely big followed by if enabled by other config parameter all the parameters used by current instaniation",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsAllowUntemplatedLocalizationsOfMessages",
        "normalized": "",
        "package": "PCLT",
        "partial": "Allow Untemplated Localizations Of Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowUntemplatedMessages",
      "description": {
        "fct-descr": "\u003cp\u003eIs it allowed to demand representations from catalog, when\n referenced template/composite ID isn't known in given\n catalog?\n In case, if allowed, on place of unknown composite\n the engine (when making representation) will simply put\n it's (unknown) ID (given that recievers detailization level\n statisfies a requirement: it must be maximal (infinitely\n big)), followed by (if enabled by other config parameter)\n all the parameters used by current instaniation.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsAllowUntemplatedMessages"
      },
      "index": {
        "description": "Is it allowed to demand representations from catalog when referenced template composite ID isn known in given catalog In case if allowed on place of unknown composite the engine when making representation will simply put it unknown ID given that recievers detailization level statisfies requirement it must be maximal infinitely big followed by if enabled by other config parameter all the parameters used by current instaniation",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsAllowUntemplatedMessages",
        "normalized": "",
        "package": "PCLT",
        "partial": "Allow Untemplated Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsCompositePlaceholderWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eSymbols sequence denoting wrapping parentheses (identical\n for both - openning ang closing), that are to be put\n around *composite* name in a template text.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsCompositePlaceholderWrapper"
      },
      "index": {
        "description": "Symbols sequence denoting wrapping parentheses identical for both openning ang closing that are to be put around composite name in template text",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsCompositePlaceholderWrapper",
        "normalized": "",
        "package": "PCLT",
        "partial": "Composite Placeholder Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsDefaultLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eCatalog default (primary) language.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "LanguageName",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsDefaultLanguage"
      },
      "index": {
        "description": "Catalog default primary language",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsDefaultLanguage",
        "normalized": "",
        "package": "PCLT",
        "partial": "Default Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsInnerConfigID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfigID",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsInnerConfigID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsInnerConfigID",
        "normalized": "",
        "package": "PCLT",
        "partial": "Inner Config ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsInstaniationResultMaxSize",
      "description": {
        "fct-descr": "\u003cp\u003eDEFAULT maximal allowed size of representation resulting from\n instaniation of a single PCSI. If user gives on the input\n his ConstraintedLBS with different constraint on size, then his\n constraint is used instead.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Int64",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsInstaniationResultMaxSize"
      },
      "index": {
        "description": "DEFAULT maximal allowed size of representation resulting from instaniation of single PCSI If user gives on the input his ConstraintedLBS with different constraint on size then his constraint is used instead",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsInstaniationResultMaxSize",
        "normalized": "",
        "package": "PCLT",
        "partial": "Instaniation Result Max Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsInsuficientDetLevelPlaceholder",
      "description": {
        "fct-descr": "\u003cp\u003eFor case, when representation reciever uses detalization\n level, that isn't enough to meet requirement specified by\n the template (from which representation was to be made):\n symbols sequence, that PCLT engine must place\n instead of content from template/composite.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsInsuficientDetLevelPlaceholder"
      },
      "index": {
        "description": "For case when representation reciever uses detalization level that isn enough to meet requirement specified by the template from which representation was to be made symbols sequence that PCLT engine must place instead of content from template composite",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsInsuficientDetLevelPlaceholder",
        "normalized": "",
        "package": "PCLT",
        "partial": "Insuficient Det Level Placeholder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsMarkingErrorPlaceholderWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eSymbols sequence denoting wrapping parentheses (identical\n for both - openning ang closing), that are to be put\n (by PCLT engine) in representation, where it failed to\n make a proper representation from a template piece\n (composite or parameter).\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsMarkingErrorPlaceholderWrapper"
      },
      "index": {
        "description": "Symbols sequence denoting wrapping parentheses identical for both openning ang closing that are to be put by PCLT engine in representation where it failed to make proper representation from template piece composite or parameter",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsMarkingErrorPlaceholderWrapper",
        "normalized": "",
        "package": "PCLT",
        "partial": "Marking Error Placeholder Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsNewlineLBS",
      "description": {
        "fct-descr": "\u003cp\u003eSequence of symbols used, when representing a specialcase\n of parameter value - \u003ccode\u003eNewline_PV\u003c/code\u003e (\u003ca\u003eText.PCLT.PCSI\u003c/a\u003e).\n (Different OSes use different newline strings: in Linux it's\n #10, in M$ - #13#10, MacOS - #13)\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsNewlineLBS"
      },
      "index": {
        "description": "Sequence of symbols used when representing specialcase of parameter value Newline PV Text.PCLT.PCSI Different OSes use different newline strings in Linux it in MacOS",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsNewlineLBS",
        "normalized": "",
        "package": "PCLT",
        "partial": "Newline LBS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsParameterPlaceholderWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eSymbols sequence denoting wrapping parentheses (identical\n for both - openning ang closing), that are to be put\n around *parameter* name in a template text.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsParameterPlaceholderWrapper"
      },
      "index": {
        "description": "Symbols sequence denoting wrapping parentheses identical for both openning ang closing that are to be put around parameter name in template text",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsParameterPlaceholderWrapper",
        "normalized": "",
        "package": "PCLT",
        "partial": "Parameter Placeholder Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsReparseParameterContentMaxSize",
      "description": {
        "fct-descr": "\u003cp\u003eNOT USED, RESERVED FOR FUTURE VERSIONS OF PCLT!\n Maximal allowed size of representation resuling from\n instaniating a reparsing result.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Int64",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsReparseParameterContentMaxSize"
      },
      "index": {
        "description": "NOT USED RESERVED FOR FUTURE VERSIONS OF PCLT Maximal allowed size of representation resuling from instaniating reparsing result",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsReparseParameterContentMaxSize",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparse Parameter Content Max Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsReparsingDepthMax",
      "description": {
        "fct-descr": "\u003cp\u003eNOT USED, RESERVED FOR FUTURE VERSIONS OF PCLT!\n Maximal allowed depth of reparsing.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "ReparsingDepth",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsReparsingDepthMax"
      },
      "index": {
        "description": "NOT USED RESERVED FOR FUTURE VERSIONS OF PCLT Maximal allowed depth of reparsing",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsReparsingDepthMax",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparsing Depth Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsShowAdhocParamsInResultOfUntemplated",
      "description": {
        "fct-descr": "\u003cp\u003eIf it's allowed to require representation of\n a template/composite (or it's localisation), that is absent\n in catalog then (given that reciever's detailization level\n statisfies a requirement: it must be maximal (infinitely\n big)) together with it's (unknown composite) ID:\n should there also be put all the parameters (array of\n name:value pairs), used by current instaniation?\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsShowAdhocParamsInResultOfUntemplated"
      },
      "index": {
        "description": "If it allowed to require representation of template composite or it localisation that is absent in catalog then given that reciever detailization level statisfies requirement it must be maximal infinitely big together with it unknown composite ID should there also be put all the parameters array of name value pairs used by current instaniation",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsShowAdhocParamsInResultOfUntemplated",
        "normalized": "",
        "package": "PCLT",
        "partial": "Show Adhoc Params In Result Of Untemplated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
      "description": {
        "fct-descr": "\u003cp\u003eObject:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Should all localizations of template be strictly oriented\n on localization in default (primary) language? (in case of\n such orientation, NO template localized in a nondefault\n language is allowed to have sets of composites and\n parameters different from ones specified for template\n localization in the default language)\n\u003c/li\u003e\u003cli\u003e Exclusions - when not to be strict with templates\n structures, - if strictness is on;\n or when to be strict, - if strictness is off.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
        "fct-type": "function",
        "title": "pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      },
      "index": {
        "description": "Object Should all localizations of template be strictly oriented on localization in default primary language in case of such orientation NO template localized in nondefault language is allowed to have sets of composites and parameters different from ones specified for template localization in the default language Exclusions when not to be strict with templates structures if strictness is on or when to be strict if strictness is off",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "normalized": "",
        "package": "PCLT",
        "partial": "Strict Orient Params And Cmpsts Dflt Lng Tpls Sets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingCompComposites",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with      these\n referenced parameters in referenced templates;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with ONLY these\n referenced parameters in referenced templates\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "[(PCLT_ID, PCLT_ID)]",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "soExcludingCompComposites"
      },
      "index": {
        "description": "if SO is True don be strict with these referenced parameters in referenced templates if SO is False be strict with ONLY these referenced parameters in referenced templates",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "soExcludingCompComposites",
        "normalized": "[(PCLT_ID,PCLT_ID)]",
        "package": "PCLT",
        "partial": "Excluding Comp Composites",
        "signature": "[(PCLT_ID,PCLT_ID)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingCompParameters",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with      these\n referenced composites in referenced templates;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with ONLY these\n referenced composites in referenced templates\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "[(PCLT_ID, PCLT_ParamKey)]",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "soExcludingCompParameters"
      },
      "index": {
        "description": "if SO is True don be strict with these referenced composites in referenced templates if SO is False be strict with ONLY these referenced composites in referenced templates",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "soExcludingCompParameters",
        "normalized": "[(PCLT_ID,PCLT_ParamKey)]",
        "package": "PCLT",
        "partial": "Excluding Comp Parameters",
        "signature": "[(PCLT_ID,PCLT_ParamKey)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingComposites",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with occurences of\n      these templates as composites;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with occurences of\n ONLY these templates as composites\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "[PCLT_ID]",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "soExcludingComposites"
      },
      "index": {
        "description": "if SO is True don be strict with occurences of these templates as composites if SO is False be strict with occurences of ONLY these templates as composites",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "soExcludingComposites",
        "normalized": "[PCLT_ID]",
        "package": "PCLT",
        "partial": "Excluding Composites",
        "signature": "[PCLT_ID]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingInComposites",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with contents of\n      these templates;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with contents of\n ONLY these templates\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "[PCLT_ID]",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "soExcludingInComposites"
      },
      "index": {
        "description": "if SO is True don be strict with contents of these templates if SO is False be strict with contents of ONLY these templates",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "soExcludingInComposites",
        "normalized": "[PCLT_ID]",
        "package": "PCLT",
        "partial": "Excluding In Composites",
        "signature": "[PCLT_ID]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingParameters",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with\n      these parameters;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with\n ONLY these parameters\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "[PCLT_ParamKey]",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "soExcludingParameters"
      },
      "index": {
        "description": "if SO is True don be strict with these parameters if SO is False be strict with ONLY these parameters",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "soExcludingParameters",
        "normalized": "[PCLT_ParamKey]",
        "package": "PCLT",
        "partial": "Excluding Parameters",
        "signature": "[PCLT_ParamKey]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soStrict_IsIt",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation = \"SO\". The exclusions has opposite\n roles for different values of this parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if SO is True ,       be strict with templates\n (when adding them and to a catalog) in such manner,\n that set of composite and set of parameters MUST be\n the same for ALL language localizations under\n one template ID; if for a template any set (of\n parameters or of composites) is different from one\n determined for template in default language, then this\n template will be discarded (not included in catalog)\n\u003c/li\u003e\u003cli\u003e if SO is False, don't be strict with templates -\n different language versions of one same template are\n allowed to have different sets of composites and\n parameters\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Config",
        "fct-package": "PCLT",
        "fct-signature": "Bool",
        "fct-source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
        "fct-type": "function",
        "title": "soStrict_IsIt"
      },
      "index": {
        "description": "Abbreviation SO The exclusions has opposite roles for different values of this parameter if SO is True be strict with templates when adding them and to catalog in such manner that set of composite and set of parameters MUST be the same for ALL language localizations under one template ID if for template any set of parameters or of composites is different from one determined for template in default language then this template will be discarded not included in catalog if SO is False don be strict with templates different language versions of one same template are allowed to have different sets of composites and parameters",
        "hierarchy": "Text PCLT Config",
        "module": "Text.PCLT.Config",
        "name": "soStrict_IsIt",
        "normalized": "",
        "package": "PCLT",
        "partial": "Strict Is It",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA way to store templates is by assigning them to types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html",
        "fct-type": "module",
        "title": "HasStaticRawPCLTs"
      },
      "index": {
        "description": "way to store templates is by assigning them to types",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "HasStaticRawPCLTs",
        "normalized": "",
        "package": "PCLT",
        "partial": "Has Static Raw PCLTs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#t:HasStaticRawPCLTs",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "class",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#HasStaticRawPCLTs",
        "fct-type": "class",
        "title": "HasStaticRawPCLTs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "HasStaticRawPCLTs",
        "normalized": "",
        "package": "PCLT",
        "partial": "Has Static Raw PCLTs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#t:RawPCLTsSetWideness",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
        "fct-type": "data",
        "title": "RawPCLTsSetWideness"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "RawPCLTsSetWideness",
        "normalized": "",
        "package": "PCLT",
        "partial": "Raw PCLTs Set Wideness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:AlgebraicDataType_RPSW",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "AlgebraicDataType_RPSW",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
        "fct-type": "function",
        "title": "AlgebraicDataType_RPSW"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "AlgebraicDataType_RPSW",
        "normalized": "",
        "package": "PCLT",
        "partial": "Algebraic Data Type RPSW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:Module_RPSW",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "Module_RPSW",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
        "fct-type": "function",
        "title": "Module_RPSW"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "Module_RPSW",
        "normalized": "",
        "package": "PCLT",
        "partial": "Module RPSW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:Package_RPSW",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "Package_RPSW",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
        "fct-type": "function",
        "title": "Package_RPSW"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "Package_RPSW",
        "normalized": "",
        "package": "PCLT",
        "partial": "Package RPSW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:System_RPSW",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "System_RPSW",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
        "fct-type": "function",
        "title": "System_RPSW"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "System_RPSW",
        "normalized": "",
        "package": "PCLT",
        "partial": "System RPSW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:getStaticRawPCLTs",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig -\u003e t -\u003e (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#getStaticRawPCLTs",
        "fct-type": "method",
        "title": "getStaticRawPCLTs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "getStaticRawPCLTs",
        "normalized": "PCLT_InnerConfig-\u003ea-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
        "package": "PCLT",
        "partial": "Static Raw PCLTs",
        "signature": "PCLT_InnerConfig-\u003et-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:mergeRawCatalogDataSets",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "Bool -\u003e [PCLT_RawCatalogData] -\u003e (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#mergeRawCatalogDataSets",
        "fct-type": "function",
        "title": "mergeRawCatalogDataSets"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "mergeRawCatalogDataSets",
        "normalized": "Bool-\u003e[PCLT_RawCatalogData]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
        "package": "PCLT",
        "partial": "Raw Catalog Data Sets",
        "signature": "Bool-\u003e[PCLT_RawCatalogData]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:mergeRawCatalogDataSets2",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "Bool -\u003e [(PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])] -\u003e (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#mergeRawCatalogDataSets2",
        "fct-type": "function",
        "title": "mergeRawCatalogDataSets2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "mergeRawCatalogDataSets2",
        "normalized": "Bool-\u003e[(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
        "package": "PCLT",
        "partial": "Raw Catalog Data Sets",
        "signature": "Bool-\u003e[(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:widenessOfStaticRawPCLTsSet",
      "description": {
        "fct-module": "Text.PCLT.HasStaticRawPCLTs",
        "fct-package": "PCLT",
        "fct-signature": "t -\u003e RawPCLTsSetWideness",
        "fct-source": "src/Text-PCLT-HasStaticRawPCLTs.html#widenessOfStaticRawPCLTsSet",
        "fct-type": "method",
        "title": "widenessOfStaticRawPCLTsSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT HasStaticRawPCLTs",
        "module": "Text.PCLT.HasStaticRawPCLTs",
        "name": "widenessOfStaticRawPCLTsSet",
        "normalized": "a-\u003eRawPCLTsSetWideness",
        "package": "PCLT",
        "partial": "Of Static Raw PCLTs Set",
        "signature": "t-\u003eRawPCLTsSetWideness"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#",
      "description": {
        "fct-module": "Text.PCLT.InitialDefaultCatalog",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-InitialDefaultCatalog.html",
        "fct-type": "module",
        "title": "InitialDefaultCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT InitialDefaultCatalog",
        "module": "Text.PCLT.InitialDefaultCatalog",
        "name": "InitialDefaultCatalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "Initial Default Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#t:PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is a special instance of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e - it accumulates\n all other instances of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e from the whole PCLT package\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.InitialDefaultCatalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-InitialDefaultCatalog.html#PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
        "fct-type": "data",
        "title": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog"
      },
      "index": {
        "description": "This type is special instance of HasStaticRawPCLTs it accumulates all other instances of HasStaticRawPCLTs from the whole PCLT package",
        "hierarchy": "Text PCLT InitialDefaultCatalog",
        "module": "Text.PCLT.InitialDefaultCatalog",
        "name": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTRaw Catalog Text PCLT Initial Default Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
      "description": {
        "fct-module": "Text.PCLT.InitialDefaultCatalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
        "fct-source": "src/Text-PCLT-InitialDefaultCatalog.html#PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
        "fct-type": "function",
        "title": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT InitialDefaultCatalog",
        "module": "Text.PCLT.InitialDefaultCatalog",
        "name": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTRaw Catalog Text PCLT Initial Default Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:initDefaultCatalog",
      "description": {
        "fct-module": "Text.PCLT.InitialDefaultCatalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (PCLT_Catalog, CatalogFromHSRTInitErrors)",
        "fct-source": "src/Text-PCLT-InitialDefaultCatalog.html#initDefaultCatalog",
        "fct-type": "function",
        "title": "initDefaultCatalog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT InitialDefaultCatalog",
        "module": "Text.PCLT.InitialDefaultCatalog",
        "name": "initDefaultCatalog",
        "normalized": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
        "package": "PCLT",
        "partial": "Default Catalog",
        "signature": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:initDefaultCatalog_2",
      "description": {
        "fct-module": "Text.PCLT.InitialDefaultCatalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
        "fct-source": "src/Text-PCLT-InitialDefaultCatalog.html#initDefaultCatalog_2",
        "fct-type": "function",
        "title": "initDefaultCatalog_2"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT InitialDefaultCatalog",
        "module": "Text.PCLT.InitialDefaultCatalog",
        "name": "initDefaultCatalog_2",
        "normalized": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
        "package": "PCLT",
        "partial": "Default Catalog",
        "signature": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:initDefaultCatalog_3",
      "description": {
        "fct-module": "Text.PCLT.InitialDefaultCatalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
        "fct-source": "src/Text-PCLT-InitialDefaultCatalog.html#initDefaultCatalog_3",
        "fct-type": "function",
        "title": "initDefaultCatalog_3"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT InitialDefaultCatalog",
        "module": "Text.PCLT.InitialDefaultCatalog",
        "name": "initDefaultCatalog_3",
        "normalized": "PCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
        "package": "PCLT",
        "partial": "Default Catalog",
        "signature": "PCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module around comlex function \u003ccode\u003e\u003ca\u003e_readPCLTCatalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-MakeCatalog.html",
        "fct-type": "module",
        "title": "MakeCatalog"
      },
      "index": {
        "description": "module around comlex function readPCLTCatalog",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "MakeCatalog",
        "normalized": "",
        "package": "PCLT",
        "partial": "Make Catalog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:AHSTR2LngTpl_Error",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003eadhoc_str2ldt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#AHSTR2LngTpl_Error",
        "fct-type": "data",
        "title": "AHSTR2LngTpl_Error"
      },
      "index": {
        "description": "Error type for adhoc str2ldt",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "AHSTR2LngTpl_Error",
        "normalized": "",
        "package": "PCLT",
        "partial": "AHSTR Lng Tpl Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:DRL_NormalizationError",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003enormalizeReferentialSDLs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#DRL_NormalizationError",
        "fct-type": "data",
        "title": "DRL_NormalizationError"
      },
      "index": {
        "description": "Error type for normalizeReferentialSDLs",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "DRL_NormalizationError",
        "normalized": "",
        "package": "PCLT",
        "partial": "DRL Normalization Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:Parsed_DidWe",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#Parsed_DidWe",
        "fct-type": "type",
        "title": "Parsed_DidWe"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "Parsed_DidWe",
        "normalized": "",
        "package": "PCLT",
        "partial": "Parsed Did We",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:ReadPCSCatalogError",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003e_readPCLTCatalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDescriptios for some value constructors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n For more information about this error see\n \u003ccode\u003e\u003ca\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDifferentSDLs_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n This may occur in case when some \u003ccode\u003e\u003ca\u003ePCLT_RawCatalogData\u003c/a\u003e\u003c/code\u003e is\n added to a nonempty \u003ccode\u003e\u003ca\u003ePCLT_Catalog\u003c/a\u003e\u003c/code\u003e, and same templates in both\n places has different SDL requirements.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTplUniquenessViol_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n This may occur in case when some \u003ccode\u003e\u003ca\u003ePCLT_RawCatalogData\u003c/a\u003e\u003c/code\u003e is\n added to a nonempty \u003ccode\u003e\u003ca\u003ePCLT_Catalog\u003c/a\u003e\u003c/code\u003e, and there isan intersection\n between their {(Template ID, Language)} sets.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSDL_ToCompositeLinkRefsToNonexistent_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n SDL requirement specification\n (\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e) for a template is of type\n \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e and references to\n a template which is not persistant in catalog or raw input data.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "data",
        "title": "ReadPCSCatalogError"
      },
      "index": {
        "description": "Error type for readPCLTCatalog Descriptios for some value constructors DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault RPCSCE For more information about this error see StrictOrient ofParamsAndCmpsts onDfltLngTplsSets DifferentSDLs RPCSCE This may occur in case when some PCLT RawCatalogData is added to nonempty PCLT Catalog and same templates in both places has different SDL requirements TplUniquenessViol RPCSCE This may occur in case when some PCLT RawCatalogData is added to nonempty PCLT Catalog and there isan intersection between their Template ID Language sets SDL ToCompositeLinkRefsToNonexistent RPCSCE SDL requirement specification pcltRequiredSDL for template is of type PCLT SDL ToTemplateLink and references to template which is not persistant in catalog or raw input data",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "ReadPCSCatalogError",
        "normalized": "",
        "package": "PCLT",
        "partial": "Read PCSCatalog Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:CompositionCycle_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "CompositionCycle_RPCSCE CompositionCycle_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "CompositionCycle_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "CompositionCycle_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Composition Cycle RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:DRL_NormalizationError_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "DRL_NormalizationError_RPCSCE DRL_NormalizationError",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "DRL_NormalizationError_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "DRL_NormalizationError_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "DRL Normalization Error RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:DifferentSDLs_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "DifferentSDLs_RPCSCE DifferentSDLs_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "DifferentSDLs_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "DifferentSDLs_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Different SDLs RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:ParseFailedForDefaultLng_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "ParseFailedForDefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe [PCLT_ParserLowLevelFailure]",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "ParseFailedForDefaultLng_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "ParseFailedForDefaultLng_RPCSCE",
        "normalized": "ParseFailedForDefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe[PCLT_ParserLowLevelFailure]",
        "package": "PCLT",
        "partial": "Parse Failed For Default Lng RPCSCE",
        "signature": "ParseFailedForDefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe[PCLT_ParserLowLevelFailure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:ParseFailedForNondefaultLng_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "ParseFailedForNondefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe LanguageName [PCLT_ParserLowLevelFailure]",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "ParseFailedForNondefaultLng_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "ParseFailedForNondefaultLng_RPCSCE",
        "normalized": "ParseFailedForNondefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe LanguageName[PCLT_ParserLowLevelFailure]",
        "package": "PCLT",
        "partial": "Parse Failed For Nondefault Lng RPCSCE",
        "signature": "ParseFailedForNondefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe LanguageName[PCLT_ParserLowLevelFailure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:ParseFailure_AHS2PE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "ParseFailure_AHS2PE [PCLT_ParserLowLevelFailure]",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#AHSTR2LngTpl_Error",
        "fct-type": "function",
        "title": "ParseFailure_AHS2PE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "ParseFailure_AHS2PE",
        "normalized": "ParseFailure_AHS PE[PCLT_ParserLowLevelFailure]",
        "package": "PCLT",
        "partial": "Parse Failure AHS PE",
        "signature": "ParseFailure_AHS PE[PCLT_ParserLowLevelFailure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:RequiredCompositeIsMissing_AHS2PE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_AHS2PE RequiredCompositeIsMissing_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#AHSTR2LngTpl_Error",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_AHS2PE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "RequiredCompositeIsMissing_AHS2PE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing AHS PE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:RequiredCompositeIsMissing_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_RPCSCE RequiredByRequirerCompositeIsMissing_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "RequiredCompositeIsMissing_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:RequiredCompositeIsUnparsable_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsUnparsable_RPCSCE RequirerCompositeKey RequiredCompositeKey",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "RequiredCompositeIsUnparsable_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "RequiredCompositeIsUnparsable_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Unparsable RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE RequirerCompositeKey RequiredCompositeKey",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#DRL_NormalizationError",
        "fct-type": "function",
        "title": "SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL Det Fail To Composite Link Refs To Nonexistent DRLNE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:SDL_ToCompositeLinkRefsToNonexistent_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "SDL_ToCompositeLinkRefsToNonexistent_RPCSCE RequirerCompositeKey RequiredCompositeKey",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "SDL_ToCompositeLinkRefsToNonexistent_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "SDL_ToCompositeLinkRefsToNonexistent_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL To Composite Link Refs To Nonexistent RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:SDL_ToCompositeLinksCycle_DRLNE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "SDL_ToCompositeLinksCycle_DRLNE [PCLT_CompositeKey]",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#DRL_NormalizationError",
        "fct-type": "function",
        "title": "SDL_ToCompositeLinksCycle_DRLNE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "SDL_ToCompositeLinksCycle_DRLNE",
        "normalized": "SDL_ToCompositeLinksCycle_DRLNE[PCLT_CompositeKey]",
        "package": "PCLT",
        "partial": "SDL To Composite Links Cycle DRLNE",
        "signature": "SDL_ToCompositeLinksCycle_DRLNE[PCLT_CompositeKey]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:TplDefaultLngIsMissing_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "TplDefaultLngIsMissing_RPCSCE TplDefaultLngIsMissing_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "TplDefaultLngIsMissing_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "TplDefaultLngIsMissing_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl Default Lng Is Missing RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:TplUniquenessViol_RPCSCE",
      "description": {
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "TplUniquenessViol_RPCSCE TplUniquenessViol_PCLTE",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
        "fct-type": "function",
        "title": "TplUniquenessViol_RPCSCE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "TplUniquenessViol_RPCSCE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl Uniqueness Viol RPCSCE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:_readPCLTCatalog",
      "description": {
        "fct-descr": "\u003cp\u003eTake a bunch of raw templates, parse them into normal templates and add\n them to a catalog.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "(PCLT_Catalog, [ReadPCSCatalogError]) -\u003e PCLT_RawCatalogData -\u003e (PCLT_Catalog, [ErrorWithPCSCatalog ReadPCSCatalogError])",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#_readPCLTCatalog",
        "fct-type": "function",
        "title": "_readPCLTCatalog"
      },
      "index": {
        "description": "Take bunch of raw templates parse them into normal templates and add them to catalog",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "_readPCLTCatalog",
        "normalized": "(PCLT_Catalog,[ReadPCSCatalogError])-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])",
        "package": "PCLT",
        "partial": "PCLTCatalog",
        "signature": "(PCLT_Catalog,[ReadPCSCatalogError])-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:adhoc_str2ldt",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eLocalizedTemplate\u003c/a\u003e\u003c/code\u003e\n out of a single \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "(ByteString, LanguageName) -\u003e PCLT_Catalog -\u003e Either AHSTR2LngTpl_Error LocalizedTemplate",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#adhoc_str2ldt",
        "fct-type": "function",
        "title": "adhoc_str2ldt"
      },
      "index": {
        "description": "Make LocalizedTemplate out of single ByteString",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "adhoc_str2ldt",
        "normalized": "(ByteString,LanguageName)-\u003ePCLT_Catalog-\u003eEither AHSTR LngTpl_Error LocalizedTemplate",
        "package": "PCLT",
        "partial": "",
        "signature": "(ByteString,LanguageName)-\u003ePCLT_Catalog-\u003eEither AHSTR LngTpl_Error LocalizedTemplate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:normalizeReferentialSDLs",
      "description": {
        "fct-descr": "\u003cp\u003eUnder \"Referential SDLs normalization\" here is understood the following.\n Now consider paths like:\n\u003c/p\u003e\u003cpre\u003e Tpl_1.\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e -\u003e Tpl_2.\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003ewhich means \u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eTpl_1\u003c/code\u003e is specified (using\n \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e) to be the same as for \u003ccode\u003eTpl_2\u003c/code\u003e. Here we can\n reduce the \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eTpl_1\u003c/code\u003e by assinging instead of it\n \u003ccode\u003eTpl_2.\u003c/code\u003e\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e value. Data consistency is respected. We win in\n speed of \u003ccode\u003eTpl_1.\u003c/code\u003e\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e determination. The negative side of this,\n is that we can't change \u003ccode\u003eTpl_2.\u003c/code\u003e\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e anymore without spoiling\n data consistency. That's another reason why a PCLT catalog is so hard to\n modify. Perhaps the problem will be solved in future versions of PCLT.\n\u003c/p\u003e\u003cp\u003eSo this function reduces all \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003es in a given\n \u003ccode\u003e\u003ca\u003ePCLT_CatalogMap\u003c/a\u003e\u003c/code\u003e, BUT, only where they lead to \u003ccode\u003e\u003ca\u003ePCLT_SDL\u003c/a\u003e\u003c/code\u003es or\n to other \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003es (which recursively gets considered\n to be reduced), not when it leads to \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003ePCLT_SDL_Errornous\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_CatalogMap -\u003e (PCLT_CatalogMap, [DRL_NormalizationError])",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#normalizeReferentialSDLs",
        "fct-type": "function",
        "title": "normalizeReferentialSDLs"
      },
      "index": {
        "description": "Under Referential SDLs normalization here is understood the following Now consider paths like Tpl pcltRequiredSDL Tpl pcltRequiredSDL which means pcltRequiredSDL of Tpl is specified using PCLT SDL ToTemplateLink to be the same as for Tpl Here we can reduce the PCLT SDL ToTemplateLink of Tpl by assinging instead of it Tpl pcltRequiredSDL value Data consistency is respected We win in speed of Tpl pcltRequiredSDL determination The negative side of this is that we can change Tpl pcltRequiredSDL anymore without spoiling data consistency That another reason why PCLT catalog is so hard to modify Perhaps the problem will be solved in future versions of PCLT So this function reduces all PCLT SDL ToTemplateLink in given PCLT CatalogMap BUT only where they lead to PCLT SDL or to other PCLT SDL ToTemplateLink which recursively gets considered to be reduced not when it leads to PCLT SDL ToParamCompositeLink or PCLT SDL Errornous",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "normalizeReferentialSDLs",
        "normalized": "PCLT_CatalogMap-\u003e(PCLT_CatalogMap,[DRL_NormalizationError])",
        "package": "PCLT",
        "partial": "Referential SDLs",
        "signature": "PCLT_CatalogMap-\u003e(PCLT_CatalogMap,[DRL_NormalizationError])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:readPCLTCatalog",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003e_readPCLTCatalog\u003c/a\u003e\u003c/code\u003e. To be used when starting with an empty catalog.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e PCLT_RawCatalogData -\u003e (PCLT_Catalog, [ErrorWithPCSCatalog ReadPCSCatalogError])",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#readPCLTCatalog",
        "fct-type": "function",
        "title": "readPCLTCatalog"
      },
      "index": {
        "description": "Wrapper around readPCLTCatalog To be used when starting with an empty catalog",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "readPCLTCatalog",
        "normalized": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])",
        "package": "PCLT",
        "partial": "PCLTCatalog",
        "signature": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:str2pclt",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eLocalizableTemplate\u003c/a\u003e\u003c/code\u003e\n out of a single \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "(PCLT_ID, PCLT_AllocatedShowDetalizationLevel) -\u003e (LanguageName, ByteString) -\u003e PCLT_Catalog -\u003e Either (ErrorWithPCSCatalog ReadPCSCatalogError) LocalizableTemplate",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#str2pclt",
        "fct-type": "function",
        "title": "str2pclt"
      },
      "index": {
        "description": "Make LocalizableTemplate out of single ByteString",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "str2pclt",
        "normalized": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003e(LanguageName,ByteString)-\u003ePCLT_Catalog-\u003eEither(ErrorWithPCSCatalog ReadPCSCatalogError)LocalizableTemplate",
        "package": "PCLT",
        "partial": "",
        "signature": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003e(LanguageName,ByteString)-\u003ePCLT_Catalog-\u003eEither(ErrorWithPCSCatalog ReadPCSCatalogError)LocalizableTemplate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:str_list2pclt",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eLocalizableTemplate\u003c/a\u003e\u003c/code\u003e out of list\n of \u003ccode\u003eByteString\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeCatalog",
        "fct-package": "PCLT",
        "fct-signature": "(PCLT_ID, PCLT_AllocatedShowDetalizationLevel) -\u003e Map LanguageName ByteString -\u003e PCLT_Catalog -\u003e (LocalizableTemplate, [ErrorWithPCSCatalog ReadPCSCatalogError])",
        "fct-source": "src/Text-PCLT-MakeCatalog.html#str_list2pclt",
        "fct-type": "function",
        "title": "str_list2pclt"
      },
      "index": {
        "description": "Make LocalizableTemplate out of list of ByteString",
        "hierarchy": "Text PCLT MakeCatalog",
        "module": "Text.PCLT.MakeCatalog",
        "name": "str_list2pclt",
        "normalized": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003eMap LanguageName ByteString-\u003ePCLT_Catalog-\u003e(LocalizableTemplate,[ErrorWithPCSCatalog ReadPCSCatalogError])",
        "package": "PCLT",
        "partial": "",
        "signature": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003eMap LanguageName ByteString-\u003ePCLT_Catalog-\u003e(LocalizableTemplate,[ErrorWithPCSCatalog ReadPCSCatalogError])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule around \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e function, which generates a message out of \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePCLT_Catalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-MakeMessage.html",
        "fct-type": "module",
        "title": "MakeMessage"
      },
      "index": {
        "description": "Module around pcsi2text function which generates message out of PCSI and PCLT Catalog",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "MakeMessage",
        "normalized": "",
        "package": "PCLT",
        "partial": "Make Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:ForInstaniationUsedChunkLength",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-MakeMessage.html#ForInstaniationUsedChunkLength",
        "fct-type": "type",
        "title": "ForInstaniationUsedChunkLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ForInstaniationUsedChunkLength",
        "normalized": "",
        "package": "PCLT",
        "partial": "For Instaniation Used Chunk Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:PCSI2Text_Error",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "data",
        "title": "PCSI2Text_Error"
      },
      "index": {
        "description": "Error type for pcsi2text",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "PCSI2Text_Error",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI Text Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:PCSI2Text_Error_Type",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003ePCSI2Text_Error\u003c/a\u003e\u003c/code\u003e. Stripping arguments.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "data",
        "title": "PCSI2Text_Error_Type"
      },
      "index": {
        "description": "Type of PCSI2Text Error Stripping arguments",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "PCSI2Text_Error_Type",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI Text Error Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:SDL_DeterminationFailure",
      "description": {
        "fct-descr": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003egivenSDL_statisfies\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "data",
        "title": "SDL_DeterminationFailure"
      },
      "index": {
        "description": "Error type for givenSDL statisfies",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SDL_DeterminationFailure",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL Determination Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:SDL_DeterminationFailure_Type",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eSDL_DeterminationFailure\u003c/a\u003e\u003c/code\u003e. Stripping arguments.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "data",
        "title": "SDL_DeterminationFailure_Type"
      },
      "index": {
        "description": "Type of SDL DeterminationFailure Stripping arguments",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SDL_DeterminationFailure_Type",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL Determination Failure Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:SpaceAvailableForPCSIInstaniation",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SpaceAvailableForPCSIInstaniation",
        "fct-type": "type",
        "title": "SpaceAvailableForPCSIInstaniation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SpaceAvailableForPCSIInstaniation",
        "normalized": "",
        "package": "PCLT",
        "partial": "Space Available For PCSIInstaniation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:CompositionCycle_P2TE",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "CompositionCycle_P2TE CompositionCycle_PCLTE",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "CompositionCycle_P2TE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "CompositionCycle_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Composition Cycle TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:CompositionCycle_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "CompositionCycle_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "CompositionCycle_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "CompositionCycle_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Composition Cycle TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ErrornousSDL_SDLDF",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ErrornousSDL_SDLDF PCLT_CompositeKey PCLT_ErrornousSDL",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "function",
        "title": "ErrornousSDL_SDLDF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ErrornousSDL_SDLDF",
        "normalized": "",
        "package": "PCLT",
        "partial": "Errornous SDL SDLDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ErrornousSDL_SDLDFT",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ErrornousSDL_SDLDFT",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "function",
        "title": "ErrornousSDL_SDLDFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ErrornousSDL_SDLDFT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Errornous SDL SDLDFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:InstaniationLengthMaxReached_P2TE",
      "description": {
        "fct-descr": "\u003cp\u003eNo more free space in resulting \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "InstaniationLengthMaxReached_P2TE PCLT_ID LanguageName ForInstaniationUsedChunkLength",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "InstaniationLengthMaxReached_P2TE"
      },
      "index": {
        "description": "No more free space in resulting CLBS",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "InstaniationLengthMaxReached_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Instaniation Length Max Reached TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:InstaniationLengthMaxReached_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "InstaniationLengthMaxReached_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "InstaniationLengthMaxReached_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "InstaniationLengthMaxReached_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Instaniation Length Max Reached TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:MissingParam_SDLByParamCompositeLink_SDLDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe SDL of template is specified\n (using \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e) to be the same as is\n one of a template, that must have been put\n under a parameter (using \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e), but referenced parameter\n is missing in given \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "MissingParam_SDLByParamCompositeLink_SDLDF PCLT_CompositeKey PCLT_ParamKey",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "function",
        "title": "MissingParam_SDLByParamCompositeLink_SDLDF"
      },
      "index": {
        "description": "The SDL of template is specified using PCLT SDL ToParamCompositeLink to be the same as is one of template that must have been put under parameter using PCSI PV but referenced parameter is missing in given PCSI",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "MissingParam_SDLByParamCompositeLink_SDLDF",
        "normalized": "",
        "package": "PCLT",
        "partial": "Missing Param SDLBy Param Composite Link SDLDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:MissingParam_SDLByParamCompositeLink_SDLDFT",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "MissingParam_SDLByParamCompositeLink_SDLDFT",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "function",
        "title": "MissingParam_SDLByParamCompositeLink_SDLDFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "MissingParam_SDLByParamCompositeLink_SDLDFT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Missing Param SDLBy Param Composite Link SDLDFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:NoValueForParameter_P2TE",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "NoValueForParameter_P2TE PCLT_ID LanguageName PCLT_ParamKey",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "NoValueForParameter_P2TE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "NoValueForParameter_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "No Value For Parameter TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:NoValueForParameter_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "NoValueForParameter_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "NoValueForParameter_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "NoValueForParameter_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "No Value For Parameter TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingDepthMaxReached_P2TE",
      "description": {
        "fct-descr": "\u003cp\u003eNot used, reserved for future versions.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ReparsingDepthMaxReached_P2TE PCLT_ID LanguageName PCLT_ParamKey ReparsingDepth",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "ReparsingDepthMaxReached_P2TE"
      },
      "index": {
        "description": "Not used reserved for future versions",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ReparsingDepthMaxReached_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparsing Depth Max Reached TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingDepthMaxReached_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ReparsingDepthMaxReached_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "ReparsingDepthMaxReached_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ReparsingDepthMaxReached_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparsing Depth Max Reached TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingLengthMaxReached_P2TE",
      "description": {
        "fct-descr": "\u003cp\u003eNot used, reserved for future versions.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ReparsingLengthMaxReached_P2TE PCLT_ID LanguageName PCLT_ParamKey ForInstaniationUsedChunkLength",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "ReparsingLengthMaxReached_P2TE"
      },
      "index": {
        "description": "Not used reserved for future versions",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ReparsingLengthMaxReached_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparsing Length Max Reached TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingLengthMaxReached_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ReparsingLengthMaxReached_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "ReparsingLengthMaxReached_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "ReparsingLengthMaxReached_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Reparsing Length Max Reached TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_P2TE",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_P2TE RequiredByRequirerCompositeIsMissing_PCLTE",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_P2TE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "RequiredCompositeIsMissing_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "RequiredCompositeIsMissing_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_SDLDF",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_SDLDF RequiredByRequirerCompositeIsMissing_PCLTE",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_SDLDF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "RequiredCompositeIsMissing_SDLDF",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing SDLDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_SDLDFT",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeIsMissing_SDLDFT",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "function",
        "title": "RequiredCompositeIsMissing_SDLDFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "RequiredCompositeIsMissing_SDLDFT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Is Missing SDLDFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeLoclizationIsMissing_P2TE",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeLoclizationIsMissing_P2TE RequiredByRequirerCompositeIsMissing_PCLTE LanguageName",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "RequiredCompositeLoclizationIsMissing_P2TE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "RequiredCompositeLoclizationIsMissing_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Loclization Is Missing TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeLoclizationIsMissing_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "RequiredCompositeLoclizationIsMissing_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "RequiredCompositeLoclizationIsMissing_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "RequiredCompositeLoclizationIsMissing_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required Composite Loclization Is Missing TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDLReferentialCycle_SDLDF",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "SDLReferentialCycle_SDLDF PCLT_CompositeKey [PCLT_ID]",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "function",
        "title": "SDLReferentialCycle_SDLDF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SDLReferentialCycle_SDLDF",
        "normalized": "SDLReferentialCycle_SDLDF PCLT_CompositeKey[PCLT_ID]",
        "package": "PCLT",
        "partial": "SDLReferential Cycle SDLDF",
        "signature": "SDLReferentialCycle_SDLDF PCLT_CompositeKey[PCLT_ID]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDLReferentialCycle_SDLDFT",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "SDLReferentialCycle_SDLDFT",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "function",
        "title": "SDLReferentialCycle_SDLDFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SDLReferentialCycle_SDLDFT",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDLReferential Cycle SDLDFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDL_DeterminationFailure_P2TE",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "SDL_DeterminationFailure_P2TE PCLT_ID SDL_DeterminationFailure",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "SDL_DeterminationFailure_P2TE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SDL_DeterminationFailure_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL Determination Failure TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDL_DeterminationFailure_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "SDL_DeterminationFailure_P2TET SDL_DeterminationFailure_Type",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "SDL_DeterminationFailure_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "SDL_DeterminationFailure_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL Determination Failure TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnderAccordingParamReparsingFailure_P2TE",
      "description": {
        "fct-descr": "\u003cp\u003eNot used, reserved for future versions.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "UnderAccordingParamReparsingFailure_P2TE PCLT_ID LanguageName PCLT_ParamKey ReadPCSCatalogError",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "UnderAccordingParamReparsingFailure_P2TE"
      },
      "index": {
        "description": "Not used reserved for future versions",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "UnderAccordingParamReparsingFailure_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Under According Param Reparsing Failure TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnderAccordingParamReparsingFailure_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "UnderAccordingParamReparsingFailure_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "UnderAccordingParamReparsingFailure_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "UnderAccordingParamReparsingFailure_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Under According Param Reparsing Failure TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnknownComposite_SDLByParamCompositeLink_SDLDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe SDL of template is specified\n (using \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e) to be the same as is\n one of a template, that must have been put\n under a parameter (using \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e), but the \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e under this\n parameter references some unknown (to catalog) template.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "UnknownComposite_SDLByParamCompositeLink_SDLDF PCLT_CompositeKey PCLT_ParamKey PCLT_CompositeKey",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "function",
        "title": "UnknownComposite_SDLByParamCompositeLink_SDLDF"
      },
      "index": {
        "description": "The SDL of template is specified using PCLT SDL ToParamCompositeLink to be the same as is one of template that must have been put under parameter using PCSI PV but the PCSI under this parameter references some unknown to catalog template",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "UnknownComposite_SDLByParamCompositeLink_SDLDF",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unknown Composite SDLBy Param Composite Link SDLDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnknownComposite_SDLByParamCompositeLink_SDLDFT",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "UnknownComposite_SDLByParamCompositeLink_SDLDFT",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "function",
        "title": "UnknownComposite_SDLByParamCompositeLink_SDLDFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "UnknownComposite_SDLByParamCompositeLink_SDLDFT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unknown Composite SDLBy Param Composite Link SDLDFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnsupportedMarker_P2TE",
      "description": {
        "fct-descr": "\u003cp\u003eThis error is possible only if program is wrong.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "UnsupportedMarker_P2TE SeparatedSectorMarker ByteString PCLT_ID LanguageName",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
        "fct-type": "function",
        "title": "UnsupportedMarker_P2TE"
      },
      "index": {
        "description": "This error is possible only if program is wrong",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "UnsupportedMarker_P2TE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unsupported Marker TE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnsupportedMarker_P2TET",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "UnsupportedMarker_P2TET",
        "fct-source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
        "fct-type": "function",
        "title": "UnsupportedMarker_P2TET"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "UnsupportedMarker_P2TET",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unsupported Marker TET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:WrongParamType_SDLByParamCompositeLink_SDLDF",
      "description": {
        "fct-descr": "\u003cp\u003eThe SDL of template is specified\n (using \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e) to be the same as is\n one of a template, that must have been put\n under a parameter (using \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e), but referenced parameter\n value is constructed using not \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "WrongParamType_SDLByParamCompositeLink_SDLDF PCLT_CompositeKey PCLT_ParamKey",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
        "fct-type": "function",
        "title": "WrongParamType_SDLByParamCompositeLink_SDLDF"
      },
      "index": {
        "description": "The SDL of template is specified using PCLT SDL ToParamCompositeLink to be the same as is one of template that must have been put under parameter using PCSI PV but referenced parameter value is constructed using not PCSI PV",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "WrongParamType_SDLByParamCompositeLink_SDLDF",
        "normalized": "",
        "package": "PCLT",
        "partial": "Wrong Param Type SDLBy Param Composite Link SDLDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:WrongParamType_SDLByParamCompositeLink_SDLDFT",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "WrongParamType_SDLByParamCompositeLink_SDLDFT",
        "fct-source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
        "fct-type": "function",
        "title": "WrongParamType_SDLByParamCompositeLink_SDLDFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "WrongParamType_SDLByParamCompositeLink_SDLDFT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Wrong Param Type SDLBy Param Composite Link SDLDFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:givenSDL_statisfies",
      "description": {
        "fct-descr": "\u003cp\u003eA test, if a given reciever's detalization level is enough\n to represent a given \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "ShowDetalizationLevel -\u003e PCSI -\u003e PCLT_ShowDetalizationLevel -\u003e PCLT_CatalogMap -\u003e Either SDL_DeterminationFailure Bool",
        "fct-source": "src/Text-PCLT-MakeMessage.html#givenSDL_statisfies",
        "fct-type": "function",
        "title": "givenSDL_statisfies"
      },
      "index": {
        "description": "test if given reciever detalization level is enough to represent given PCSI",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "givenSDL_statisfies",
        "normalized": "ShowDetalizationLevel-\u003ePCSI-\u003ePCLT_ShowDetalizationLevel-\u003ePCLT_CatalogMap-\u003eEither SDL_DeterminationFailure Bool",
        "package": "PCLT",
        "partial": "SDL",
        "signature": "ShowDetalizationLevel-\u003ePCSI-\u003ePCLT_ShowDetalizationLevel-\u003ePCLT_CatalogMap-\u003eEither SDL_DeterminationFailure Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:includeAsAnError",
      "description": {
        "fct-descr": "\u003cp\u003eWhenever representation generator can't make representation\n for a template due to some error, it puts there (instead of representation)\n an error marking (\u003ccode\u003e\u003ca\u003epcsMarkingErrorPlaceholderWrapper\u003c/a\u003e\u003c/code\u003e) with an abbreviation (see \u003ccode\u003e\u003ca\u003eshortOf_PCSI2Text_Error\u003c/a\u003e\u003c/code\u003e)\n of error type and template ID.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig -\u003e PCSI2Text_Error -\u003e String -\u003e (ByteString, ForInstaniationUsedChunkLength)",
        "fct-source": "src/Text-PCLT-MakeMessage.html#includeAsAnError",
        "fct-type": "function",
        "title": "includeAsAnError"
      },
      "index": {
        "description": "Whenever representation generator can make representation for template due to some error it puts there instead of representation an error marking pcsMarkingErrorPlaceholderWrapper with an abbreviation see shortOf PCSI2Text Error of error type and template ID",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "includeAsAnError",
        "normalized": "PCLT_InnerConfig-\u003ePCSI Text_Error-\u003eString-\u003e(ByteString,ForInstaniationUsedChunkLength)",
        "package": "PCLT",
        "partial": "As An Error",
        "signature": "PCLT_InnerConfig-\u003ePCSI Text_Error-\u003eString-\u003e(ByteString,ForInstaniationUsedChunkLength)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:p2teType",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "PCSI2Text_Error -\u003e PCSI2Text_Error_Type",
        "fct-source": "src/Text-PCLT-MakeMessage.html#p2teType",
        "fct-type": "function",
        "title": "p2teType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "p2teType",
        "normalized": "PCSI Text_Error-\u003ePCSI Text_Error_Type",
        "package": "PCLT",
        "partial": "Type",
        "signature": "PCSI Text_Error-\u003ePCSI Text_Error_Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:pcsi2new_text",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e for cases, when new \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e for output\n is to be created. It's maximal length is set to be same\n as configured in parameter \u003ccode\u003e\u003ca\u003epcsInstaniationResultMaxSize\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, [ErrorWithPCSCatalog PCSI2Text_Error])",
        "fct-source": "src/Text-PCLT-MakeMessage.html#pcsi2new_text",
        "fct-type": "function",
        "title": "pcsi2new_text"
      },
      "index": {
        "description": "Wrapper around pcsi2text for cases when new CLBS for output is to be created It maximal length is set to be same as configured in parameter pcsInstaniationResultMaxSize",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "pcsi2new_text",
        "normalized": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])",
        "package": "PCLT",
        "partial": "",
        "signature": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:pcsi2text",
      "description": {
        "fct-descr": "\u003cp\u003eMake a representation out of \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e in specified detailization level,\n in specified language, using specified catalog. And append result\n to a specified \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "StdOut_CLBS -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, [ErrorWithPCSCatalog PCSI2Text_Error])",
        "fct-source": "src/Text-PCLT-MakeMessage.html#pcsi2text",
        "fct-type": "function",
        "title": "pcsi2text"
      },
      "index": {
        "description": "Make representation out of PCSI in specified detailization level in specified language using specified catalog And append result to specified CLBS",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "pcsi2text",
        "normalized": "StdOut_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])",
        "package": "PCLT",
        "partial": "",
        "signature": "StdOut_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:sdldfType",
      "description": {
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "SDL_DeterminationFailure -\u003e SDL_DeterminationFailure_Type",
        "fct-source": "src/Text-PCLT-MakeMessage.html#sdldfType",
        "fct-type": "function",
        "title": "sdldfType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "sdldfType",
        "normalized": "SDL_DeterminationFailure-\u003eSDL_DeterminationFailure_Type",
        "package": "PCLT",
        "partial": "Type",
        "signature": "SDL_DeterminationFailure-\u003eSDL_DeterminationFailure_Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:shortOf_PCSI2Text_Error",
      "description": {
        "fct-descr": "\u003cp\u003eTemplate representation generation errors types abbreviations:\n\u003c/p\u003e\u003cpre\u003e       RequiredCompositeIsMissing_P2TET            -\u003e \"CM\"\n       RequiredCompositeLoclizationIsMissing_P2TET -\u003e \"CLM\"\n       CompositionCycle_P2TET                      -\u003e \"CC\"\n       SDL_DeterminationFailure_P2TET       sdldft -\u003e \"SF\" ++\n           case sdldft of\n               RequiredCompositeIsMissing_SDLDFT               -\u003e \"(CM)\"\n               MissingParam_SDLByParamCompositeLink_SDLDFT     -\u003e \"(LMP)\"\n               WrongParamType_SDLByParamCompositeLink_SDLDFT   -\u003e \"(LWPT)\"\n               UnknownComposite_SDLByParamCompositeLink_SDLDFT -\u003e \"(LUC)\"\n               SDLReferentialCycle_SDLDFT                      -\u003e \"(CC)\"\n               ErrornousSDL_SDLDFT                             -\u003e \"(ES)\"\n       UnsupportedMarker_P2TET                     -\u003e \"UM\"\n       NoValueForParameter_P2TET                   -\u003e \"NV\"\n       UnderAccordingParamReparsingFailure_P2TET   -\u003e \"RF\"\n       ReparsingDepthMaxReached_P2TET              -\u003e \"RDM\"\n       ReparsingLengthMaxReached_P2TET             -\u003e \"RLM\"\n       InstaniationLengthMaxReached_P2TET          -\u003e \"ILM\"\n\u003c/pre\u003e",
        "fct-module": "Text.PCLT.MakeMessage",
        "fct-package": "PCLT",
        "fct-signature": "PCSI2Text_Error -\u003e ByteString",
        "fct-source": "src/Text-PCLT-MakeMessage.html#shortOf_PCSI2Text_Error",
        "fct-type": "function",
        "title": "shortOf_PCSI2Text_Error"
      },
      "index": {
        "description": "Template representation generation errors types abbreviations RequiredCompositeIsMissing P2TET CM RequiredCompositeLoclizationIsMissing P2TET CLM CompositionCycle P2TET CC SDL DeterminationFailure P2TET sdldft SF case sdldft of RequiredCompositeIsMissing SDLDFT CM MissingParam SDLByParamCompositeLink SDLDFT LMP WrongParamType SDLByParamCompositeLink SDLDFT LWPT UnknownComposite SDLByParamCompositeLink SDLDFT LUC SDLReferentialCycle SDLDFT CC ErrornousSDL SDLDFT ES UnsupportedMarker P2TET UM NoValueForParameter P2TET NV UnderAccordingParamReparsingFailure P2TET RF ReparsingDepthMaxReached P2TET RDM ReparsingLengthMaxReached P2TET RLM InstaniationLengthMaxReached P2TET ILM",
        "hierarchy": "Text PCLT MakeMessage",
        "module": "Text.PCLT.MakeMessage",
        "name": "shortOf_PCSI2Text_Error",
        "normalized": "PCSI Text_Error-\u003eByteString",
        "package": "PCLT",
        "partial": "Of PCSI Text Error",
        "signature": "PCSI Text_Error-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAddition to \u003ca\u003eText.PCLT.MakeMessage\u003c/a\u003e module. Some wrappers around \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.MakeMessage2",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-MakeMessage2.html",
        "fct-type": "module",
        "title": "MakeMessage2"
      },
      "index": {
        "description": "Addition to Text.PCLT.MakeMessage module Some wrappers around pcsi2text function",
        "hierarchy": "Text PCLT MakeMessage2",
        "module": "Text.PCLT.MakeMessage2",
        "name": "MakeMessage2",
        "normalized": "",
        "package": "PCLT",
        "partial": "Make Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2new_text_plus_errs_1",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003epcsi2text_plus_errs_1\u003c/a\u003e\u003c/code\u003e for cases, when new \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e\n is to be created. It's maximal length is set to be same\n as configured in parameter \u003ccode\u003e\u003ca\u003epcsInstaniationResultMaxSize\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.MakeMessage2",
        "fct-package": "PCLT",
        "fct-signature": "PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e StdOutAndErr_CLBS",
        "fct-source": "src/Text-PCLT-MakeMessage2.html#pcsi2new_text_plus_errs_1",
        "fct-type": "function",
        "title": "pcsi2new_text_plus_errs_1"
      },
      "index": {
        "description": "Wrapper around pcsi2text plus errs for cases when new CLBS is to be created It maximal length is set to be same as configured in parameter pcsInstaniationResultMaxSize",
        "hierarchy": "Text PCLT MakeMessage2",
        "module": "Text.PCLT.MakeMessage2",
        "name": "pcsi2new_text_plus_errs_1",
        "normalized": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS",
        "package": "PCLT",
        "partial": "",
        "signature": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2new_text_plus_errs_2",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003epcsi2text_plus_errs_2\u003c/a\u003e\u003c/code\u003e for cases, when new \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003es\n are to be created:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e One - for representation of normal output. It's maximal length is set\n to be same as configured in parameter \u003ccode\u003e\u003ca\u003epcsInstaniationResultMaxSize\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Another - for representation of errors. It's maximal size is specified\n in the first argument of function.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.MakeMessage2",
        "fct-package": "PCLT",
        "fct-signature": "Int64 -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, StdErr_CLBS)",
        "fct-source": "src/Text-PCLT-MakeMessage2.html#pcsi2new_text_plus_errs_2",
        "fct-type": "function",
        "title": "pcsi2new_text_plus_errs_2"
      },
      "index": {
        "description": "Wrapper around pcsi2text plus errs for cases when new CLBS are to be created One for representation of normal output It maximal length is set to be same as configured in parameter pcsInstaniationResultMaxSize Another for representation of errors It maximal size is specified in the first argument of function",
        "hierarchy": "Text PCLT MakeMessage2",
        "module": "Text.PCLT.MakeMessage2",
        "name": "pcsi2new_text_plus_errs_2",
        "normalized": "Int-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)",
        "package": "PCLT",
        "partial": "",
        "signature": "Int-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2text_plus_errs_1",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e generates message from given PCSI\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (1))\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (2))\n\u003c/li\u003e\u003cli\u003e appends text result of step (3) to given CLBS\n\u003c/li\u003e\u003cli\u003e appends text result of step (2) to given CLBS\n\u003c/li\u003e\u003cli\u003e appends text result of step (1) to given CLBS\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Text.PCLT.MakeMessage2",
        "fct-package": "PCLT",
        "fct-signature": "StdOutAndErr_CLBS -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e StdOutAndErr_CLBS",
        "fct-source": "src/Text-PCLT-MakeMessage2.html#pcsi2text_plus_errs_1",
        "fct-type": "function",
        "title": "pcsi2text_plus_errs_1"
      },
      "index": {
        "description": "generates message from given PCSI generates representation of errors list that occurred when doing step generates representation of errors list that occurred when doing step appends text result of step to given CLBS appends text result of step to given CLBS appends text result of step to given CLBS",
        "hierarchy": "Text PCLT MakeMessage2",
        "module": "Text.PCLT.MakeMessage2",
        "name": "pcsi2text_plus_errs_1",
        "normalized": "StdOutAndErr_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS",
        "package": "PCLT",
        "partial": "",
        "signature": "StdOutAndErr_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2text_plus_errs_2",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e generates message from given PCSI\n\u003c/li\u003e\u003cli\u003e appends text result of step (1) to given CLBS_1\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (1))\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (3))\n\u003c/li\u003e\u003cli\u003e appends text result of step (4) to given CLBS_2\n\u003c/li\u003e\u003cli\u003e appends text result of step (3) to given CLBS_2\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Text.PCLT.MakeMessage2",
        "fct-package": "PCLT",
        "fct-signature": "(StdOut_CLBS, StdErr_CLBS) -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, StdErr_CLBS)",
        "fct-source": "src/Text-PCLT-MakeMessage2.html#pcsi2text_plus_errs_2",
        "fct-type": "function",
        "title": "pcsi2text_plus_errs_2"
      },
      "index": {
        "description": "generates message from given PCSI appends text result of step to given CLBS generates representation of errors list that occurred when doing step generates representation of errors list that occurred when doing step appends text result of step to given CLBS appends text result of step to given CLBS",
        "hierarchy": "Text PCLT MakeMessage2",
        "module": "Text.PCLT.MakeMessage2",
        "name": "pcsi2text_plus_errs_2",
        "normalized": "(StdOut_CLBS,StdErr_CLBS)-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)",
        "package": "PCLT",
        "partial": "",
        "signature": "(StdOut_CLBS,StdErr_CLBS)-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe abbreviation \"PCSI\" means \"Parametric Composable String\n Instaniation\". Agree, not a very clear name, a more apropriate would be\n something like that: \"Input Data for Template Representation\", but\n clear name came to my head when millions (dozens) of ants (variables) were\n already bearing this name. And I'm a bit lazy to rename everything to sound\n apropriate, sorry.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-PCSI.html",
        "fct-type": "module",
        "title": "PCSI"
      },
      "index": {
        "description": "The abbreviation PCSI means Parametric Composable String Instaniation Agree not very clear name more apropriate would be something like that Input Data for Template Representation but clear name came to my head when millions dozens of ants variables were already bearing this name And bit lazy to rename everything to sound apropriate sorry",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#t:PCLT_ParamVal",
      "description": {
        "fct-descr": "\u003cp\u003eBy these user fills parameters of templates.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "data",
        "title": "PCLT_ParamVal"
      },
      "index": {
        "description": "By these user fills parameters of templates",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCLT_ParamVal",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Param Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#t:PCSI",
      "description": {
        "fct-descr": "\u003cp\u003ePCSI is an output of our extended Show (to which this package\n is dedicated). And an input to generate a message using catalog.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-PCSI.html#PCSI",
        "fct-type": "data",
        "title": "PCSI"
      },
      "index": {
        "description": "PCSI is an output of our extended Show to which this package is dedicated And an input to generate message using catalog",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#t:PCSI_ParamsValuesMap",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-PCSI.html#PCSI_ParamsValuesMap",
        "fct-type": "type",
        "title": "PCSI_ParamsValuesMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCSI_ParamsValuesMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI Params Values Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:Indented_PV",
      "description": {
        "fct-descr": "\u003cp\u003eIn message generation procedure this stands for a value of\n 2nd argument in which every occurence of newline (as is configured in\n \u003ca\u003eText.PCLT.Config\u003c/a\u003e in config's parameter \u003ccode\u003epcsNewlineLBS\u003c/code\u003e)\n is substituded by \u003ccode\u003enewline ++ (replicate n ' ')\u003c/code\u003e,\n where n is the 1st argument\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "Indented_PV Int PCLT_ParamVal",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "Indented_PV"
      },
      "index": {
        "description": "In message generation procedure this stands for value of nd argument in which every occurence of newline as is configured in Text.PCLT.Config in config parameter pcsNewlineLBS is substituded by newline replicate where is the st argument",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "Indented_PV",
        "normalized": "",
        "package": "PCLT",
        "partial": "Indented PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:NewLine_PV",
      "description": {
        "fct-descr": "\u003cp\u003eIn message generation procedure this stands for a value of\n \u003ccode\u003epcsNewlineLBS\u003c/code\u003e parameter declared in \u003ca\u003eText.PCLT.Config\u003c/a\u003e.\n Different systems means different symbol sequences\n under \"newline\"...\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "NewLine_PV",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "NewLine_PV"
      },
      "index": {
        "description": "In message generation procedure this stands for value of pcsNewlineLBS parameter declared in Text.PCLT.Config Different systems means different symbol sequences under newline",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "NewLine_PV",
        "normalized": "",
        "package": "PCLT",
        "partial": "New Line PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:Nothing_PV",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "Nothing_PV",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "Nothing_PV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "Nothing_PV",
        "normalized": "",
        "package": "PCLT",
        "partial": "Nothing PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PCSI",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCSI",
        "fct-source": "src/Text-PCLT-PCSI.html#PCSI",
        "fct-type": "function",
        "title": "PCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PCSIList_PV",
      "description": {
        "fct-descr": "\u003cp\u003eSecond argument is a separator between \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003es in first argument\n Here representation generator automatically adds to each PCSI in\n list an implicit parameter \u003ccode\u003e__row_idx\u003c/code\u003e, which holds a value\n of current PCSI index in list, starting from 1.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCSIList_PV [PCSI] PCLT_ParamVal",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "PCSIList_PV"
      },
      "index": {
        "description": "Second argument is separator between PCSI in first argument Here representation generator automatically adds to each PCSI in list an implicit parameter row idx which holds value of current PCSI index in list starting from",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCSIList_PV",
        "normalized": "PCSIList_PV[PCSI]PCLT_ParamVal",
        "package": "PCLT",
        "partial": "PCSIList PV",
        "signature": "PCSIList_PV[PCSI]PCLT_ParamVal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PCSI_PV",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCSI_PV PCSI",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "PCSI_PV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PCSI_PV",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCSI PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PVList_PV",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PVList_PV [PCLT_ParamVal]",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "PVList_PV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PVList_PV",
        "normalized": "PVList_PV[PCLT_ParamVal]",
        "package": "PCLT",
        "partial": "PVList PV",
        "signature": "PVList_PV[PCLT_ParamVal]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PlainTextLBS_PV",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PlainTextLBS_PV ByteString",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "PlainTextLBS_PV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PlainTextLBS_PV",
        "normalized": "",
        "package": "PCLT",
        "partial": "Plain Text LBS PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PlainText_PV",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PlainText_PV String",
        "fct-source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
        "fct-type": "function",
        "title": "PlainText_PV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "PlainText_PV",
        "normalized": "",
        "package": "PCLT",
        "partial": "Plain Text PV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:addPVs2PCSI",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "[(PCLT_ParamKey, PCLT_ParamVal)] -\u003e PCSI -\u003e PCSI",
        "fct-source": "src/Text-PCLT-PCSI.html#addPVs2PCSI",
        "fct-type": "function",
        "title": "addPVs2PCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "addPVs2PCSI",
        "normalized": "[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI-\u003ePCSI",
        "package": "PCLT",
        "partial": "PVs PCSI",
        "signature": "[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI-\u003ePCSI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:addToPCSI",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "[PCSI] -\u003e PCSI -\u003e PCSI",
        "fct-source": "src/Text-PCLT-PCSI.html#addToPCSI",
        "fct-type": "function",
        "title": "addToPCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "addToPCSI",
        "normalized": "[PCSI]-\u003ePCSI-\u003ePCSI",
        "package": "PCLT",
        "partial": "To PCSI",
        "signature": "[PCSI]-\u003ePCSI-\u003ePCSI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:empPCSI",
      "description": {
        "fct-descr": "\u003cp\u003ePCSI with an empty set of parameters values.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID -\u003e PCSI",
        "fct-source": "src/Text-PCLT-PCSI.html#empPCSI",
        "fct-type": "function",
        "title": "empPCSI"
      },
      "index": {
        "description": "PCSI with an empty set of parameters values",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "empPCSI",
        "normalized": "PCLT_ID-\u003ePCSI",
        "package": "PCLT",
        "partial": "PCSI",
        "signature": "PCLT_ID-\u003ePCSI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:pcsiParamsValsMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCSI_ParamsValuesMap",
        "fct-source": "src/Text-PCLT-PCSI.html#PCSI",
        "fct-type": "function",
        "title": "pcsiParamsValsMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "pcsiParamsValsMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "Params Vals Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:pcsiTplID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID",
        "fct-source": "src/Text-PCLT-PCSI.html#PCSI",
        "fct-type": "function",
        "title": "pcsiTplID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "pcsiTplID",
        "normalized": "",
        "package": "PCLT",
        "partial": "Tpl ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:sumPCSI_PVMs",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCSI_ParamsValuesMap -\u003e PCSI_ParamsValuesMap -\u003e PCSI_ParamsValuesMap",
        "fct-source": "src/Text-PCLT-PCSI.html#sumPCSI_PVMs",
        "fct-type": "function",
        "title": "sumPCSI_PVMs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "sumPCSI_PVMs",
        "normalized": "PCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap",
        "package": "PCLT",
        "partial": "PCSI PVMs",
        "signature": "PCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:thePCSI",
      "description": {
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID -\u003e [(PCLT_ParamKey, PCLT_ParamVal)] -\u003e PCSI",
        "fct-source": "src/Text-PCLT-PCSI.html#thePCSI",
        "fct-type": "function",
        "title": "thePCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "thePCSI",
        "normalized": "PCLT_ID-\u003e[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI",
        "package": "PCLT",
        "partial": "PCSI",
        "signature": "PCLT_ID-\u003e[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:usualSeparatorInPCSIList",
      "description": {
        "fct-descr": "\u003cp\u003eIt's used in some places of package in errors' representations\n (in instances of \u003ccode\u003eShowAsPCSI\u003c/code\u003e - class declared in \u003ca\u003eText.PCLT.ShowAsPCSI\u003c/a\u003e).\n \u003ccode\u003eusualSeparatorInPCSIList = PVList_PV [NewLine_PV, PlainText_PV \u003ca\u003e|----\u003c/a\u003e, NewLine_PV]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.PCSI",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ParamVal",
        "fct-source": "src/Text-PCLT-PCSI.html#usualSeparatorInPCSIList",
        "fct-type": "function",
        "title": "usualSeparatorInPCSIList"
      },
      "index": {
        "description": "It used in some places of package in errors representations in instances of ShowAsPCSI class declared in Text.PCLT.ShowAsPCSI usualSeparatorInPCSIList PVList PV NewLine PV PlainText PV NewLine PV",
        "hierarchy": "Text PCLT PCSI",
        "module": "Text.PCLT.PCSI",
        "name": "usualSeparatorInPCSIList",
        "normalized": "",
        "package": "PCLT",
        "partial": "Separator In PCSIList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html",
        "fct-type": "module",
        "title": "AdvancedSepBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "AdvancedSepBy",
        "normalized": "",
        "package": "PCLT",
        "partial": "Advanced Sep By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:ChunkIndexInList_",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#ChunkIndexInList_",
        "fct-type": "type",
        "title": "ChunkIndexInList_"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "ChunkIndexInList_",
        "normalized": "",
        "package": "PCLT",
        "partial": "Chunk Index In List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:Current_Chunk_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#Current_Chunk_SSM",
        "fct-type": "type",
        "title": "Current_Chunk_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "Current_Chunk_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Current Chunk SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:Current_Sep_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#Current_Sep_SSM",
        "fct-type": "type",
        "title": "Current_Sep_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "Current_Sep_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Current Sep SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:MarkedChunkLength",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#MarkedChunkLength",
        "fct-type": "type",
        "title": "MarkedChunkLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "MarkedChunkLength",
        "normalized": "",
        "package": "PCLT",
        "partial": "Marked Chunk Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:New_Active_Sep_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#New_Active_Sep_SSM",
        "fct-type": "type",
        "title": "New_Active_Sep_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "New_Active_Sep_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "New Active Sep SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:Previous_Active_Sep_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#Previous_Active_Sep_SSM",
        "fct-type": "type",
        "title": "Previous_Active_Sep_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "Previous_Active_Sep_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Previous Active Sep SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:SectorMarkingStrategy",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SectorMarkingStrategy",
        "fct-type": "type",
        "title": "SectorMarkingStrategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "SectorMarkingStrategy",
        "normalized": "",
        "package": "PCLT",
        "partial": "Sector Marking Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:SeparatedSectorMarker",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
        "fct-type": "data",
        "title": "SeparatedSectorMarker"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "SeparatedSectorMarker",
        "normalized": "",
        "package": "PCLT",
        "partial": "Separated Sector Marker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:SeparationMarkerIdx",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparationMarkerIdx",
        "fct-type": "type",
        "title": "SeparationMarkerIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "SeparationMarkerIdx",
        "normalized": "",
        "package": "PCLT",
        "partial": "Separation Marker Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:StandartMarkingStrategyError",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "data",
        "title": "StandartMarkingStrategyError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "StandartMarkingStrategyError",
        "normalized": "",
        "package": "PCLT",
        "partial": "Standart Marking Strategy Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:BeginningMNotInTheBeginning_SMSE",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "BeginningMNotInTheBeginning_SMSE",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "function",
        "title": "BeginningMNotInTheBeginning_SMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "BeginningMNotInTheBeginning_SMSE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Beginning MNot In The Beginning SMSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:Beginning_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "Beginning_SSM",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
        "fct-type": "function",
        "title": "Beginning_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "Beginning_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Beginning SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:EOF_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "EOF_SSM",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
        "fct-type": "function",
        "title": "EOF_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "EOF_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "EOF SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:Error_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "Error_SSM StandartMarkingStrategyError",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
        "fct-type": "function",
        "title": "Error_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "Error_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Error SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:InnerMarker_SSM",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "InnerMarker_SSM SeparationMarkerIdx",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
        "fct-type": "function",
        "title": "InnerMarker_SSM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "InnerMarker_SSM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Inner Marker SSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:InputAfterEOF_SMSE",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "InputAfterEOF_SMSE",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "function",
        "title": "InputAfterEOF_SMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "InputAfterEOF_SMSE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Input After EOF SMSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:OpenMarkerAtEOF_SMSE",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "OpenMarkerAtEOF_SMSE SeparationMarkerIdx",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "function",
        "title": "OpenMarkerAtEOF_SMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "OpenMarkerAtEOF_SMSE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Open Marker At EOF SMSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:OverlappingMarkedChunks_SMSE",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "OverlappingMarkedChunks_SMSE",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "function",
        "title": "OverlappingMarkedChunks_SMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "OverlappingMarkedChunks_SMSE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Overlapping Marked Chunks SMSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:UnallowedCharacter_SMSE",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "UnallowedCharacter_SMSE Char",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "function",
        "title": "UnallowedCharacter_SMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "UnallowedCharacter_SMSE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unallowed Character SMSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:UnsupportedMarkersSequence_SMSE",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "UnsupportedMarkersSequence_SMSE SeparatedSectorMarker SeparatedSectorMarker",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
        "fct-type": "function",
        "title": "UnsupportedMarkersSequence_SMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "UnsupportedMarkersSequence_SMSE",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unsupported Markers Sequence SMSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:getListOfMarkings",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "Map SeparatedSectorMarker [(ByteString, ChunkIndexInList_)] -\u003e Int -\u003e [(ByteString, ChunkIndexInList_)]",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#getListOfMarkings",
        "fct-type": "function",
        "title": "getListOfMarkings"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "getListOfMarkings",
        "normalized": "Map SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]-\u003eInt-\u003e[(ByteString,ChunkIndexInList_)]",
        "package": "PCLT",
        "partial": "List Of Markings",
        "signature": "Map SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]-\u003eInt-\u003e[(ByteString,ChunkIndexInList_)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:insertInsteadOf_inLBS",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "(ByteString, ByteString) -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#insertInsteadOf_inLBS",
        "fct-type": "function",
        "title": "insertInsteadOf_inLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "insertInsteadOf_inLBS",
        "normalized": "(ByteString,ByteString)-\u003eByteString-\u003eByteString",
        "package": "PCLT",
        "partial": "Instead Of LBS",
        "signature": "(ByteString,ByteString)-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:manyTill_EOForEitherOf",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "Parser Char -\u003e [Parser ByteString] -\u003e Parser (SeparatedSectorMarker, ByteString, MarkedChunkLength)",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#manyTill_EOForEitherOf",
        "fct-type": "function",
        "title": "manyTill_EOForEitherOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "manyTill_EOForEitherOf",
        "normalized": "Parser Char-\u003e[Parser ByteString]-\u003eParser(SeparatedSectorMarker,ByteString,MarkedChunkLength)",
        "package": "PCLT",
        "partial": "Till EOFor Either Of",
        "signature": "Parser Char-\u003e[Parser ByteString]-\u003eParser(SeparatedSectorMarker,ByteString,MarkedChunkLength)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:retrieveErrorsMarkingsList",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "[(SeparatedSectorMarker, ByteString, MarkedChunkLength)] -\u003e [(SeparatedSectorMarker, ByteString, ChunkIndexInList_)]",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#retrieveErrorsMarkingsList",
        "fct-type": "function",
        "title": "retrieveErrorsMarkingsList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "retrieveErrorsMarkingsList",
        "normalized": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,ChunkIndexInList_)]",
        "package": "PCLT",
        "partial": "Errors Markings List",
        "signature": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,ChunkIndexInList_)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:retrieveNonPlainMarkingsMap",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "[(SeparatedSectorMarker, ByteString, MarkedChunkLength)] -\u003e Map SeparatedSectorMarker [(ByteString, ChunkIndexInList_)]",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#retrieveNonPlainMarkingsMap",
        "fct-type": "function",
        "title": "retrieveNonPlainMarkingsMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "retrieveNonPlainMarkingsMap",
        "normalized": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003eMap SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]",
        "package": "PCLT",
        "partial": "Non Plain Markings Map",
        "signature": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003eMap SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:sepBySome",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "Parser Char -\u003e SectorMarkingStrategy -\u003e [Parser ByteString] -\u003e Parser [(SeparatedSectorMarker, ByteString, MarkedChunkLength)]",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#sepBySome",
        "fct-type": "function",
        "title": "sepBySome"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "sepBySome",
        "normalized": "Parser Char-\u003eSectorMarkingStrategy-\u003e[Parser ByteString]-\u003eParser[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]",
        "package": "PCLT",
        "partial": "By Some",
        "signature": "Parser Char-\u003eSectorMarkingStrategy-\u003e[Parser ByteString]-\u003eParser[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:standardMarkingStrategy",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "SectorMarkingStrategy",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#standardMarkingStrategy",
        "fct-type": "function",
        "title": "standardMarkingStrategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "standardMarkingStrategy",
        "normalized": "",
        "package": "PCLT",
        "partial": "Marking Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:standardMarkingStrategyFix_StripEmptyChunks",
      "description": {
        "fct-module": "Text.PCLT.Parser.AdvancedSepBy",
        "fct-package": "PCLT",
        "fct-signature": "[(SeparatedSectorMarker, ByteString, MarkedChunkLength)] -\u003e [(SeparatedSectorMarker, ByteString, MarkedChunkLength)]",
        "fct-source": "src/Text-PCLT-Parser-AdvancedSepBy.html#standardMarkingStrategyFix_StripEmptyChunks",
        "fct-type": "function",
        "title": "standardMarkingStrategyFix_StripEmptyChunks"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Parser AdvancedSepBy",
        "module": "Text.PCLT.Parser.AdvancedSepBy",
        "name": "standardMarkingStrategyFix_StripEmptyChunks",
        "normalized": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]",
        "package": "PCLT",
        "partial": "Marking Strategy Fix Strip Empty Chunks",
        "signature": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimply saying: with SDL we regulate, how much some Reader (of our\n generated messages) wishes (is allowed) to see.\n\u003c/p\u003e\u003cp\u003e\"SDL\" is an abbreviation for \"Show Detalization Level\".\n Perhaps it better sound \"Representation Detalization Level\", but it\n was too late to change term - too many variables has names \u003ccode\u003esdl\u003c/code\u003e,\n and author is too lazy to change them on \u003ccode\u003erdl\u003c/code\u003es.\n However, \"Representation Detalization Level\" version is sometimes used -\n it is to be understood as synonym to SDL.\n Term \"Detailizable content (message)\" in this package has a following\n meaning: some content, representing which it is possible to regulate,\n in how much of details it is to be represented.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-SDL.html",
        "fct-type": "module",
        "title": "SDL"
      },
      "index": {
        "description": "Simply saying with SDL we regulate how much some Reader of our generated messages wishes is allowed to see SDL is an abbreviation for Show Detalization Level Perhaps it better sound Representation Detalization Level but it was too late to change term too many variables has names sdl and author is too lazy to change them on rdl However Representation Detalization Level version is sometimes used it is to be understood as synonym to SDL Term Detailizable content message in this package has following meaning some content representing which it is possible to regulate in how much of details it is to be represented",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#t:SDLModus",
      "description": {
        "fct-descr": "\u003cp\u003eSDL may be seen in two different moduses:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e as a requirement for representation by a localizable template:\n \"SDL of repesentation reciever must be equal or bigger then that,\n orelse message from this template won't be generated\"\n\u003c/li\u003e\u003cli\u003e as an allocateion to a repesentation reciever.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-SDL.html#SDLModus",
        "fct-type": "data",
        "title": "SDLModus"
      },
      "index": {
        "description": "SDL may be seen in two different moduses as requirement for representation by localizable template SDL of repesentation reciever must be equal or bigger then that orelse message from this template won be generated as an allocateion to repesentation reciever",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "SDLModus",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDLModus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#t:ShowDetalizationLevel",
      "description": {
        "fct-descr": "\u003cpre\u003eZero_SDL \u003c One_SDL \u003c SDL Int \u003c InfinitelyBig_SDL\u003c/pre\u003e",
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
        "fct-type": "data",
        "title": "ShowDetalizationLevel"
      },
      "index": {
        "description": "Zero SDL One SDL SDL Int InfinitelyBig SDL",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "ShowDetalizationLevel",
        "normalized": "",
        "package": "PCLT",
        "partial": "Show Detalization Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:Allocated_SDLM",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "Allocated_SDLM",
        "fct-source": "src/Text-PCLT-SDL.html#SDLModus",
        "fct-type": "function",
        "title": "Allocated_SDLM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "Allocated_SDLM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Allocated SDLM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:InfinitelyBig_SDL",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "InfinitelyBig_SDL",
        "fct-source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
        "fct-type": "function",
        "title": "InfinitelyBig_SDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "InfinitelyBig_SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "Infinitely Big SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:One_SDL",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "One_SDL",
        "fct-source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
        "fct-type": "function",
        "title": "One_SDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "One_SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "One SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:Required_SDLM",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "Required_SDLM",
        "fct-source": "src/Text-PCLT-SDL.html#SDLModus",
        "fct-type": "function",
        "title": "Required_SDLM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "Required_SDLM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required SDLM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:SDL",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "SDL Int",
        "fct-source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
        "fct-type": "function",
        "title": "SDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:Zero_SDL",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "Zero_SDL",
        "fct-source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
        "fct-type": "function",
        "title": "Zero_SDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "Zero_SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "Zero SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:marginOfSDLModus",
      "description": {
        "fct-descr": "\u003cp\u003eIn case, if SDL (of reciever of template requirement) is unclear,\n and if it is allowed by config - then SDL gets assigned according to margin:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if modus is allocation to reciever - the we give him \u003ccode\u003eZero_SDL\u003c/code\u003e (minimum)\n\u003c/li\u003e\u003cli\u003e if modus is requirement by template - the we give\n him \u003ccode\u003eInfinitelyBig_SDL\u003c/code\u003e (maximum)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "SDLModus -\u003e ShowDetalizationLevel",
        "fct-source": "src/Text-PCLT-SDL.html#marginOfSDLModus",
        "fct-type": "function",
        "title": "marginOfSDLModus"
      },
      "index": {
        "description": "In case if SDL of reciever of template requirement is unclear and if it is allowed by config then SDL gets assigned according to margin if modus is allocation to reciever the we give him Zero SDL minimum if modus is requirement by template the we give him InfinitelyBig SDL maximum",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "marginOfSDLModus",
        "normalized": "SDLModus-\u003eShowDetalizationLevel",
        "package": "PCLT",
        "partial": "Of SDLModus",
        "signature": "SDLModus-\u003eShowDetalizationLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:strict_str2sdl",
      "description": {
        "fct-module": "Text.PCLT.SDL",
        "fct-package": "PCLT",
        "fct-signature": "String -\u003e Maybe ShowDetalizationLevel",
        "fct-source": "src/Text-PCLT-SDL.html#strict_str2sdl",
        "fct-type": "function",
        "title": "strict_str2sdl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT SDL",
        "module": "Text.PCLT.SDL",
        "name": "strict_str2sdl",
        "normalized": "String-\u003eMaybe ShowDetalizationLevel",
        "package": "PCLT",
        "partial": "",
        "signature": "String-\u003eMaybe ShowDetalizationLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SH__.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a usual set for modules, that are to be imported by modules\n dedicated to declaring \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.SH__",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-SH__.html",
        "fct-type": "module",
        "title": "SH__"
      },
      "index": {
        "description": "This is usual set for modules that are to be imported by modules dedicated to declaring ShowAsPCSI and HasStaticRawPCLTs instances",
        "hierarchy": "Text PCLT SH__",
        "module": "Text.PCLT.SH__",
        "name": "SH__",
        "normalized": "",
        "package": "PCLT",
        "partial": "SH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-ShowAsPCSI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWARNING: Creating an instance of \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eByteString\u003c/code\u003es\n and/or other text types is not recommended. Use of such instaniations\n would dread strictness of templates catalog structure - make it's\n use workaroundish, less systematic and less strict, which is a way\n to badmade applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.ShowAsPCSI",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-ShowAsPCSI.html",
        "fct-type": "module",
        "title": "ShowAsPCSI"
      },
      "index": {
        "description": "WARNING Creating an instance of ShowAsPCSI for String ByteString and or other text types is not recommended Use of such instaniations would dread strictness of templates catalog structure make it use workaroundish less systematic and less strict which is way to badmade applications",
        "hierarchy": "Text PCLT ShowAsPCSI",
        "module": "Text.PCLT.ShowAsPCSI",
        "name": "ShowAsPCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "Show As PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-ShowAsPCSI.html#t:ShowAsPCSI",
      "description": {
        "fct-descr": "\u003cp\u003eOur extended version of \u003ccode\u003eShow\u003c/code\u003e class\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.ShowAsPCSI",
        "fct-package": "PCLT",
        "fct-signature": "class",
        "fct-source": "src/Text-PCLT-ShowAsPCSI.html#ShowAsPCSI",
        "fct-type": "class",
        "title": "ShowAsPCSI"
      },
      "index": {
        "description": "Our extended version of Show class",
        "hierarchy": "Text PCLT ShowAsPCSI",
        "module": "Text.PCLT.ShowAsPCSI",
        "name": "ShowAsPCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "Show As PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-ShowAsPCSI.html#v:showAsPCSI",
      "description": {
        "fct-module": "Text.PCLT.ShowAsPCSI",
        "fct-package": "PCLT",
        "fct-signature": "t -\u003e PCSI",
        "fct-source": "src/Text-PCLT-ShowAsPCSI.html#showAsPCSI",
        "fct-type": "method",
        "title": "showAsPCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT ShowAsPCSI",
        "module": "Text.PCLT.ShowAsPCSI",
        "name": "showAsPCSI",
        "normalized": "a-\u003ePCSI",
        "package": "PCLT",
        "partial": "As PCSI",
        "signature": "t-\u003ePCSI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere are declared \u003ccode\u003e\u003ca\u003eLocalizableTemplate\u003c/a\u003e\u003c/code\u003e (also called PCLT)\n and \u003ccode\u003e\u003ca\u003eLocalizedTemplate\u003c/a\u003e\u003c/code\u003e.\n Here by localization is meant localization in languages.\n First (localizable template) is above languages,\n while second (localized template) is a template version\n in a concrete language.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT-Template.html",
        "fct-type": "module",
        "title": "Template"
      },
      "index": {
        "description": "Here are declared LocalizableTemplate also called PCLT and LocalizedTemplate Here by localization is meant localization in languages First localizable template is above languages while second localized template is template version in concrete language",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "Template",
        "normalized": "",
        "package": "PCLT",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:DefaultLngTpl",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#DefaultLngTpl",
        "fct-type": "type",
        "title": "DefaultLngTpl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "DefaultLngTpl",
        "normalized": "",
        "package": "PCLT",
        "partial": "Default Lng Tpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LngTpl_AbstractedString",
      "description": {
        "fct-descr": "\u003cp\u003eTemplate content.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#LngTpl_AbstractedString",
        "fct-type": "type",
        "title": "LngTpl_AbstractedString"
      },
      "index": {
        "description": "Template content",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "LngTpl_AbstractedString",
        "normalized": "",
        "package": "PCLT",
        "partial": "Lng Tpl Abstracted String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LngTpl_SubCompositesMap",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#LngTpl_SubCompositesMap",
        "fct-type": "type",
        "title": "LngTpl_SubCompositesMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "LngTpl_SubCompositesMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "Lng Tpl Sub Composites Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LocalizableTemplate",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#LocalizableTemplate",
        "fct-type": "data",
        "title": "LocalizableTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "LocalizableTemplate",
        "normalized": "",
        "package": "PCLT",
        "partial": "Localizable Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LocalizedTemplate",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#LocalizedTemplate",
        "fct-type": "data",
        "title": "LocalizedTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "LocalizedTemplate",
        "normalized": "",
        "package": "PCLT",
        "partial": "Localized Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:NondefaultLngTpl",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#NondefaultLngTpl",
        "fct-type": "type",
        "title": "NondefaultLngTpl"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "NondefaultLngTpl",
        "normalized": "",
        "package": "PCLT",
        "partial": "Nondefault Lng Tpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_AllocatedShowDetalizationLevel",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_AllocatedShowDetalizationLevel",
        "fct-type": "type",
        "title": "PCLT_AllocatedShowDetalizationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_AllocatedShowDetalizationLevel",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Allocated Show Detalization Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_CatalogMap",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_CatalogMap",
        "fct-type": "type",
        "title": "PCLT_CatalogMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_CatalogMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Catalog Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_ErrornousSDL",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a bad result of parsing some \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n into \u003ccode\u003e\u003ca\u003ePCLT_ShowDetalizationLevel\u003c/a\u003e\u003c/code\u003e. The second argument is this bad input.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ErrornousSDL",
        "fct-type": "data",
        "title": "PCLT_ErrornousSDL"
      },
      "index": {
        "description": "This is bad result of parsing some String into PCLT ShowDetalizationLevel The second argument is this bad input",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_ErrornousSDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Errornous SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_ParserLowLevelFailure",
      "description": {
        "fct-descr": "\u003cp\u003eThese errors are possible only if program is wrong.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ParserLowLevelFailure",
        "fct-type": "data",
        "title": "PCLT_ParserLowLevelFailure"
      },
      "index": {
        "description": "These errors are possible only if program is wrong",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_ParserLowLevelFailure",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Parser Low Level Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_RawCatalogData",
      "description": {
        "fct-descr": "\u003cp\u003eRaw templates (both localizeds, and localizables).\n Input data for catalog formation. Used by \u003ccode\u003eHasStaticRawPCLTs\u003c/code\u003e class\n (declared in \u003ca\u003eText.PCLT.HasStaticRawPCLTs\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_RawCatalogData",
        "fct-type": "data",
        "title": "PCLT_RawCatalogData"
      },
      "index": {
        "description": "Raw templates both localizeds and localizables Input data for catalog formation Used by HasStaticRawPCLTs class declared in Text.PCLT.HasStaticRawPCLTs",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_RawCatalogData",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Raw Catalog Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_RequiredShowDetalizationLevel",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_RequiredShowDetalizationLevel",
        "fct-type": "type",
        "title": "PCLT_RequiredShowDetalizationLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_RequiredShowDetalizationLevel",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Required Show Detalization Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_ShowDetalizationLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an extending wrapper around SDL. It is used for specification\n of requirement for making representation from template. This specification\n is attached to every localizable template in PCLT catalog\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
        "fct-type": "data",
        "title": "PCLT_ShowDetalizationLevel"
      },
      "index": {
        "description": "This is an extending wrapper around SDL It is used for specification of requirement for making representation from template This specification is attached to every localizable template in PCLT catalog",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_ShowDetalizationLevel",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT Show Detalization Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCS_SpecificMarkings",
      "description": {
        "fct-descr": "\u003cp\u003eThese are types of template pieces. They are made by \u003ccode\u003e\u003ca\u003essm2ldtm\u003c/a\u003e\u003c/code\u003e\n from \u003ccode\u003e\u003ca\u003eSeparatedSectorMarker\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
        "fct-type": "data",
        "title": "PCS_SpecificMarkings"
      },
      "index": {
        "description": "These are types of template pieces They are made by ssm2ldtm from SeparatedSectorMarker",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCS_SpecificMarkings",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCS Specific Markings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:ParserBadResult",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "type",
        "fct-source": "src/Text-PCLT-Template.html#ParserBadResult",
        "fct-type": "type",
        "title": "ParserBadResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "ParserBadResult",
        "normalized": "",
        "package": "PCLT",
        "partial": "Parser Bad Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:BadMarker_PLLF_PCLT",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "BadMarker_PLLF_PCLT SeparatedSectorMarker ByteString ChunkIndexInList_",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ParserLowLevelFailure",
        "fct-type": "function",
        "title": "BadMarker_PLLF_PCLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "BadMarker_PLLF_PCLT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Bad Marker PLLF PCLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:Composite_LngTplM",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "Composite_LngTplM",
        "fct-source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
        "fct-type": "function",
        "title": "Composite_LngTplM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "Composite_LngTplM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Composite Lng Tpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:LocalizableTemplate",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "LocalizableTemplate",
        "fct-source": "src/Text-PCLT-Template.html#LocalizableTemplate",
        "fct-type": "function",
        "title": "LocalizableTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "LocalizableTemplate",
        "normalized": "",
        "package": "PCLT",
        "partial": "Localizable Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:LocalizedTemplate",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "LocalizedTemplate",
        "fct-source": "src/Text-PCLT-Template.html#LocalizedTemplate",
        "fct-type": "function",
        "title": "LocalizedTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "LocalizedTemplate",
        "normalized": "",
        "package": "PCLT",
        "partial": "Localized Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_RawCatalogData",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_RawCatalogData (Map PCLT_ID (Map LanguageName ByteString, PCLT_RequiredShowDetalizationLevel))",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_RawCatalogData",
        "fct-type": "function",
        "title": "PCLT_RawCatalogData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_RawCatalogData",
        "normalized": "PCLT_RawCatalogData(Map PCLT_ID(Map LanguageName ByteString,PCLT_RequiredShowDetalizationLevel))",
        "package": "PCLT",
        "partial": "PCLT Raw Catalog Data",
        "signature": "PCLT_RawCatalogData(Map PCLT_ID(Map LanguageName ByteString,PCLT_RequiredShowDetalizationLevel))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL",
      "description": {
        "fct-descr": "\u003cp\u003ePlain SDL, nominal. If SDL of representation reciever\n is less then that, then template cann't be used in representation\n generation.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_SDL ShowDetalizationLevel",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
        "fct-type": "function",
        "title": "PCLT_SDL"
      },
      "index": {
        "description": "Plain SDL nominal If SDL of representation reciever is less then that then template cann be used in representation generation",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_SDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL_Errornous",
      "description": {
        "fct-descr": "\u003cp\u003eIn input data for catalog formation the given specification\n is errornous.\n If config's (\u003ca\u003eText.PCLT.Config\u003c/a\u003e) parameters\n \u003ccode\u003e\u003ca\u003epcsAllowEmptySDL_parseItByModusMargin\u003c/a\u003e\u003c/code\u003e and/or\n \u003ccode\u003e\u003ca\u003epcsAllowUnreadableSDL_parseIdByModusMargin\u003c/a\u003e\u003c/code\u003e are\n positive, then instead of \u003ccode\u003ePCLT_SDL_Errornous\u003c/code\u003e the parser\n (\u003ccode\u003e\u003ca\u003estr2PCLT_SDL\u003c/a\u003e\u003c/code\u003e) will use \u003ccode\u003e\u003ca\u003emarginOfSDLModus\u003c/a\u003e\u003c/code\u003e to set\n valid specification. When representation generator meets\n \u003ccode\u003ePCLT_SDL_Errornous\u003c/code\u003e it won't use template, and return an error.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_SDL_Errornous PCLT_ErrornousSDL",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
        "fct-type": "function",
        "title": "PCLT_SDL_Errornous"
      },
      "index": {
        "description": "In input data for catalog formation the given specification is errornous If config Text.PCLT.Config parameters pcsAllowEmptySDL parseItByModusMargin and or pcsAllowUnreadableSDL parseIdByModusMargin are positive then instead of PCLT SDL Errornous the parser str2PCLT SDL will use marginOfSDLModus to set valid specification When representation generator meets PCLT SDL Errornous it won use template and return an error",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_SDL_Errornous",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT SDL Errornous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL_ToParamCompositeLink",
      "description": {
        "fct-descr": "\u003cp\u003e\"The requirement is the same as is specified a for referenced\n template, which is referenced by a \u003ccode\u003ePCSI_PV\u003c/code\u003e value of referenced\n parameter (of current template)\".\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_SDL_ToParamCompositeLink PCLT_ParamKey",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
        "fct-type": "function",
        "title": "PCLT_SDL_ToParamCompositeLink"
      },
      "index": {
        "description": "The requirement is the same as is specified for referenced template which is referenced by PCSI PV value of referenced parameter of current template",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_SDL_ToParamCompositeLink",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT SDL To Param Composite Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL_ToTemplateLink",
      "description": {
        "fct-descr": "\u003cp\u003e\"The requirement is the same as is specified\n for referenced template\".\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_SDL_ToTemplateLink PCLT_ID",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
        "fct-type": "function",
        "title": "PCLT_SDL_ToTemplateLink"
      },
      "index": {
        "description": "The requirement is the same as is specified for referenced template",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PCLT_SDL_ToTemplateLink",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT SDL To Template Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:Parameter_LngTplM",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "Parameter_LngTplM",
        "fct-source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
        "fct-type": "function",
        "title": "Parameter_LngTplM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "Parameter_LngTplM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Parameter Lng Tpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PlainText_LngTplM",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PlainText_LngTplM",
        "fct-source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
        "fct-type": "function",
        "title": "PlainText_LngTplM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "PlainText_LngTplM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Plain Text Lng Tpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:UnexpectedParserResult_PLLF_PCLT",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "UnexpectedParserResult_PLLF_PCLT ParserBadResult",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ParserLowLevelFailure",
        "fct-type": "function",
        "title": "UnexpectedParserResult_PLLF_PCLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "UnexpectedParserResult_PLLF_PCLT",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unexpected Parser Result PLLF PCLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:UnreadableSDL_ESDL",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "UnreadableSDL_ESDL SDLModus String",
        "fct-source": "src/Text-PCLT-Template.html#PCLT_ErrornousSDL",
        "fct-type": "function",
        "title": "UnreadableSDL_ESDL"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "UnreadableSDL_ESDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unreadable SDL ESDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:Unsupported_LngTplM",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "Unsupported_LngTplM SeparatedSectorMarker",
        "fct-source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
        "fct-type": "function",
        "title": "Unsupported_LngTplM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "Unsupported_LngTplM",
        "normalized": "",
        "package": "PCLT",
        "partial": "Unsupported Lng Tpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:__const_esdl_rawinputshowsize_inShowAsPCSI",
      "description": {
        "fct-descr": "\u003cp\u003eA constant currently set to 25. It is used in a parser \u003ccode\u003e\u003ca\u003estr2PCLT_SDL\u003c/a\u003e\u003c/code\u003e:\n if the input is errornous, this much symbols of input are saved\n in \u003ccode\u003e\u003ca\u003eUnreadableSDL_ESDL\u003c/a\u003e\u003c/code\u003e. If input is bigger, then the saved trunc is\n tailed with \"...\"\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "Int",
        "fct-source": "src/Text-PCLT-Template.html#__const_esdl_rawinputshowsize_inShowAsPCSI",
        "fct-type": "function",
        "title": "__const_esdl_rawinputshowsize_inShowAsPCSI"
      },
      "index": {
        "description": "constant currently set to It is used in parser str2PCLT SDL if the input is errornous this much symbols of input are saved in UnreadableSDL ESDL If input is bigger then the saved trunc is tailed with",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "__const_esdl_rawinputshowsize_inShowAsPCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "Show As PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:_compareStrictOrientationOnDefault",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID -\u003e StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets -\u003e ([PCLT_ID], [ParamName_LBS]) -\u003e ([PCLT_ID], [ParamName_LBS]) -\u003e Bool",
        "fct-source": "src/Text-PCLT-Template.html#_compareStrictOrientationOnDefault",
        "fct-type": "function",
        "title": "_compareStrictOrientationOnDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "_compareStrictOrientationOnDefault",
        "normalized": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003e([PCLT_ID],[ParamName_LBS])-\u003e([PCLT_ID],[ParamName_LBS])-\u003eBool",
        "package": "PCLT",
        "partial": "Strict Orientation On Default",
        "signature": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003e([PCLT_ID],[ParamName_LBS])-\u003e([PCLT_ID],[ParamName_LBS])-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:compareStrictOrientationOnDefault",
      "description": {
        "fct-descr": "\u003cp\u003eCarrying strict orientation routines. See description of\n \u003ccode\u003e\u003ca\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_ID -\u003e StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets -\u003e NondefaultLngTpl -\u003e DefaultLngTpl -\u003e Bool",
        "fct-source": "src/Text-PCLT-Template.html#compareStrictOrientationOnDefault",
        "fct-type": "function",
        "title": "compareStrictOrientationOnDefault"
      },
      "index": {
        "description": "Carrying strict orientation routines See description of StrictOrient ofParamsAndCmpsts onDfltLngTplsSets",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "compareStrictOrientationOnDefault",
        "normalized": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003eNondefaultLngTpl-\u003eDefaultLngTpl-\u003eBool",
        "package": "PCLT",
        "partial": "Strict Orientation On Default",
        "signature": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003eNondefaultLngTpl-\u003eDefaultLngTpl-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:doTheParse",
      "description": {
        "fct-descr": "\u003cp\u003eThe parsing uses parameters\n \u003ccode\u003eTest.PCLT.Config.pcsParameterPlaceholderWrapper\u003c/code\u003e and\n \u003ccode\u003eTest.PCLT.Config.pcsCompositePlaceholderWrapper\u003c/code\u003e of\n \u003ccode\u003eTest.PCLT.Config.PCLT_InnerConfig\u003c/code\u003e.\n The list \u003ccode\u003e[PCLT_CompositeKey]\u003c/code\u003e in the result is a list of composite keys\n (template IDs, used by template as inclusions)\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_InnerConfig -\u003e ByteString -\u003e ([PCLT_ParserLowLevelFailure], Maybe (LngTpl_AbstractedString, [PCLT_CompositeKey]))",
        "fct-source": "src/Text-PCLT-Template.html#doTheParse",
        "fct-type": "function",
        "title": "doTheParse"
      },
      "index": {
        "description": "The parsing uses parameters Test.PCLT.Config.pcsParameterPlaceholderWrapper and Test.PCLT.Config.pcsCompositePlaceholderWrapper of Test.PCLT.Config.PCLT InnerConfig The list PCLT CompositeKey in the result is list of composite keys template IDs used by template as inclusions",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "doTheParse",
        "normalized": "PCLT_InnerConfig-\u003eByteString-\u003e([PCLT_ParserLowLevelFailure],Maybe(LngTpl_AbstractedString,[PCLT_CompositeKey]))",
        "package": "PCLT",
        "partial": "The Parse",
        "signature": "PCLT_InnerConfig-\u003eByteString-\u003e([PCLT_ParserLowLevelFailure],Maybe(LngTpl_AbstractedString,[PCLT_CompositeKey]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:ldtAbstractedString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "LngTpl_AbstractedString",
        "fct-source": "src/Text-PCLT-Template.html#LocalizedTemplate",
        "fct-type": "function",
        "title": "ldtAbstractedString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "ldtAbstractedString",
        "normalized": "",
        "package": "PCLT",
        "partial": "Abstracted String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:ldtSubcompositesMap",
      "description": {
        "fct-descr": "\u003cp\u003eEach composition tree is kept together with each\n localization. This is done for speedup and is a source\n of complexities, when forming a catalog and sustaining it's\n data consistency. So it comes to this:\n templates are purely-referenced by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e catalog (\u003ccode\u003e\u003ca\u003ePCLT_CatalogMap\u003c/a\u003e\u003c/code\u003e) and\n\u003c/li\u003e\u003cli\u003e templates, that uses them as composites\n (\u003ccode\u003e\u003ca\u003eLngTpl_SubCompositesMap\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBy \"purely-reference\" here is meant, that templates are\n formed only once, they have one instace in memory, but\n are referenced twice - from composeds and from catalog map\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "LngTpl_SubCompositesMap",
        "fct-source": "src/Text-PCLT-Template.html#LocalizedTemplate",
        "fct-type": "function",
        "title": "ldtSubcompositesMap"
      },
      "index": {
        "description": "Each composition tree is kept together with each localization This is done for speedup and is source of complexities when forming catalog and sustaining it data consistency So it comes to this templates are purely-referenced by catalog PCLT CatalogMap and templates that uses them as composites LngTpl SubCompositesMap By purely-reference here is meant that templates are formed only once they have one instace in memory but are referenced twice from composeds and from catalog map",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "ldtSubcompositesMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "Subcomposites Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:listOfParams",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a list of parameter names from a template content.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "LngTpl_AbstractedString -\u003e [ParamName_LBS]",
        "fct-source": "src/Text-PCLT-Template.html#listOfParams",
        "fct-type": "function",
        "title": "listOfParams"
      },
      "index": {
        "description": "Extract list of parameter names from template content",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "listOfParams",
        "normalized": "LngTpl_AbstractedString-\u003e[ParamName_LBS]",
        "package": "PCLT",
        "partial": "Of Params",
        "signature": "LngTpl_AbstractedString-\u003e[ParamName_LBS]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:pcltLocalizationsMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "Map LanguageName LocalizedTemplate",
        "fct-source": "src/Text-PCLT-Template.html#LocalizableTemplate",
        "fct-type": "function",
        "title": "pcltLocalizationsMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "pcltLocalizationsMap",
        "normalized": "",
        "package": "PCLT",
        "partial": "Localizations Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:pcltRequiredSDL",
      "description": {
        "fct-descr": "\u003cp\u003eIf SDL of representation reciever\n is less then that, then template cann't be used in representation\n generation.\n\u003c/p\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "PCLT_RequiredShowDetalizationLevel",
        "fct-source": "src/Text-PCLT-Template.html#LocalizableTemplate",
        "fct-type": "function",
        "title": "pcltRequiredSDL"
      },
      "index": {
        "description": "If SDL of representation reciever is less then that then template cann be used in representation generation",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "pcltRequiredSDL",
        "normalized": "",
        "package": "PCLT",
        "partial": "Required SDL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:ssm2ldtm",
      "description": {
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "SeparatedSectorMarker -\u003e PCS_SpecificMarkings",
        "fct-source": "src/Text-PCLT-Template.html#ssm2ldtm",
        "fct-type": "function",
        "title": "ssm2ldtm"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "ssm2ldtm",
        "normalized": "SeparatedSectorMarker-\u003ePCS_SpecificMarkings",
        "package": "PCLT",
        "partial": "",
        "signature": "SeparatedSectorMarker-\u003ePCS_SpecificMarkings"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:str2PCLT_SDL",
      "description": {
        "fct-descr": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003ePCLT_ShowDetalizationLevel\u003c/a\u003e\u003c/code\u003e. First of all parser\n tries \u003ccode\u003e\u003ca\u003estrict_str2sdl\u003c/a\u003e\u003c/code\u003e. Then, if failed, parser uses following\n config entries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsParameterPlaceholderWrapper\u003c/a\u003e\u003c/code\u003e -\n if prefix and postfix of input is this (by default it is \"@@|\"),\n then it is parsed into \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsCompositePlaceholderWrapper\u003c/a\u003e\u003c/code\u003e -\n if prefix and postfix of input is this (by default it is \"##|\"),\n then it is parsed into \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsAllowEmptySDL_parseItByModusMargin\u003c/a\u003e\u003c/code\u003e -\n if it is positive and input is empty, then it gets parsed into\n (\u003ccode\u003ePCLT_SDL $ \u003ccode\u003e\u003ca\u003emarginOfSDLModus\u003c/a\u003e\u003c/code\u003e modus\u003c/code\u003e), where modus\n is first argument; esle, if parameter is negative and input is empty,\n it is parsed to \u003ccode\u003e\u003ca\u003ePCLT_SDL_Errornous\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsAllowUnreadableSDL_parseIdByModusMargin\u003c/a\u003e\u003c/code\u003e -\n if it is positive and input is unparsable, then it gets parsed into\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePCLT_SDL\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003emarginOfSDLModus\u003c/a\u003e\u003c/code\u003e modus\u003c/code\u003e, where modus\n is first argument; esle, if parameter is negative and input is unparsable,\n it is parsed to \u003ccode\u003e\u003ca\u003ePCLT_SDL_Errornous\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.PCLT.Template",
        "fct-package": "PCLT",
        "fct-signature": "SDLModus -\u003e String -\u003e PCLT_InnerConfig -\u003e PCLT_ShowDetalizationLevel",
        "fct-source": "src/Text-PCLT-Template.html#str2PCLT_SDL",
        "fct-type": "function",
        "title": "str2PCLT_SDL"
      },
      "index": {
        "description": "Parse String into PCLT ShowDetalizationLevel First of all parser tries strict str2sdl Then if failed parser uses following config entries pcsParameterPlaceholderWrapper if prefix and postfix of input is this by default it is then it is parsed into PCLT SDL ToParamCompositeLink pcsCompositePlaceholderWrapper if prefix and postfix of input is this by default it is then it is parsed into PCLT SDL ToTemplateLink pcsAllowEmptySDL parseItByModusMargin if it is positive and input is empty then it gets parsed into PCLT SDL marginOfSDLModus modus where modus is first argument esle if parameter is negative and input is empty it is parsed to PCLT SDL Errornous pcsAllowUnreadableSDL parseIdByModusMargin if it is positive and input is unparsable then it gets parsed into PCLT SDL marginOfSDLModus modus where modus is first argument esle if parameter is negative and input is unparsable it is parsed to PCLT SDL Errornous",
        "hierarchy": "Text PCLT Template",
        "module": "Text.PCLT.Template",
        "name": "str2PCLT_SDL",
        "normalized": "SDLModus-\u003eString-\u003ePCLT_InnerConfig-\u003ePCLT_ShowDetalizationLevel",
        "package": "PCLT",
        "partial": "PCLT SDL",
        "signature": "SDLModus-\u003eString-\u003ePCLT_InnerConfig-\u003ePCLT_ShowDetalizationLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is thought to be imported outside of PCLT package by modules,\n that use PCLT logics (catalog formation routines and\n messages generation routines)\n\u003c/p\u003e\u003cp\u003eAnd another briefing on what is PCLT. First is in the top level of\n Haddock documentation provided for the package.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.SH__\"\n\u003c/pre\u003e\u003cp\u003eThis module provides interfaces to the classes \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e an all the routines, that usually are used for\n declaration of their instanitations.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.ConstraintedLBS\"\n\u003c/pre\u003e\u003cp\u003eA constrainting (the constraint here is on it's size) wrapper for a\n lazy \u003ccode\u003eByteString\u003c/code\u003e (LBS) - this container is used for messages\n generated from PCLT templates\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.InitialDefaultCatalog\"\n\u003c/pre\u003e\u003cpre\u003e initDefaultCatalog_3 :: Text.PCLT.Catalog.PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)\n\u003c/pre\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.Catalog\"\n\u003c/pre\u003e\u003cp\u003eCatalog is a unit with 3 fields: catalog ID, config, and a map by\n template_IDs of templates, where each template is: minimal SDL required\n to represent message from this template, and a maps by languages of\n localized templates.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.CatalogFromHSRT\"\n\u003c/pre\u003e\u003cp\u003eWe want to add to the default catalog some our application specific\n entries (templates)\n\u003c/p\u003e\u003cpre\u003e addFromHSRTToCatalog_2 :: HasStaticRawPCLTs a =\u003e a -\u003e PCLT_Catalog -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)\n\u003c/pre\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.CommonTypes\"\n\u003c/pre\u003e\u003cp\u003eSome type aliases, like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLanguageName\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.Config\"\n\u003c/pre\u003e\u003cp\u003eConfiguration that influences the behaviour of catalog formation routines\n and messages generation routines.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.MakeMessage\"\n\u003c/pre\u003e\u003cp\u003ePCSI(template_id + params) + language_name + recepient_SDL + catalog \u003e---(Text.PCLT.MakeMessage)---\u003e message\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.MakeMessage2\"\n\u003c/pre\u003e\u003cp\u003eSome comfort wrappers for \u003ca\u003eText.PCLT.MakeMessage\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.SDL\"\n\u003c/pre\u003e\u003cp\u003eSDL (Show Detalization Level) is a 1-dimensional variable type, built\n on Int, but extended with additional values:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eZero_SDL\u003c/code\u003e (absolute minimal level) \u003ccode\u003e\u003c One_SDL\u003c/code\u003e (minimal something) \u003ccode\u003e\u003c SDL Int \u003c InfinitelyBig_SDL\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWith SDL we regulate, how much some Reader (of our generated messages)\n wishes (is allowed) to see.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.ShowAsPCSI__\"\n\u003c/pre\u003e\u003cp\u003eSome general instances of \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e class are to be found here\n (Bool, ShowAsPCSI a =\u003e Maybe a, SomeException)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "module",
        "fct-source": "src/Text-PCLT.html",
        "fct-type": "module",
        "title": "PCLT"
      },
      "index": {
        "description": "This is thought to be imported outside of PCLT package by modules that use PCLT logics catalog formation routines and messages generation routines And another briefing on what is PCLT First is in the top level of Haddock documentation provided for the package export Text.PCLT.SH This module provides interfaces to the classes ShowAsPCSI and HasStaticRawPCLTs an all the routines that usually are used for declaration of their instanitations export Text.ConstraintedLBS constrainting the constraint here is on it size wrapper for lazy ByteString LBS this container is used for messages generated from PCLT templates export Text.PCLT.InitialDefaultCatalog initDefaultCatalog Text.PCLT.Catalog.PCLT CatalogID StdErr CLBS ShowDetalizationLevel LanguageName PCLT Catalog StdErr CLBS export Text.PCLT.Catalog Catalog is unit with fields catalog ID config and map by template IDs of templates where each template is minimal SDL required to represent message from this template and maps by languages of localized templates export Text.PCLT.CatalogFromHSRT We want to add to the default catalog some our application specific entries templates addFromHSRTToCatalog HasStaticRawPCLTs PCLT Catalog StdErr CLBS ShowDetalizationLevel LanguageName PCLT Catalog StdErr CLBS export Text.PCLT.CommonTypes Some type aliases like LanguageName String export Text.PCLT.Config Configuration that influences the behaviour of catalog formation routines and messages generation routines export Text.PCLT.MakeMessage PCSI template id params language name recepient SDL catalog Text.PCLT.MakeMessage message export Text.PCLT.MakeMessage2 Some comfort wrappers for Text.PCLT.MakeMessage export Text.PCLT.SDL SDL Show Detalization Level is dimensional variable type built on Int but extended with additional values Zero SDL absolute minimal level One SDL minimal something SDL Int InfinitelyBig SDL With SDL we regulate how much some Reader of our generated messages wishes is allowed to see export Text.PCLT.ShowAsPCSI Some general instances of ShowAsPCSI class are to be found here Bool ShowAsPCSI Maybe SomeException",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "PCLT",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
        "fct-type": "data",
        "title": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTRaw Catalog Text PCLT Show As PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
        "fct-type": "data",
        "title": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTRaw Catalog Text PCLT Show As PCSI General Commons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:SeparatedSectorMarker_PCSIWrapped",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#SeparatedSectorMarker_PCSIWrapped",
        "fct-type": "data",
        "title": "SeparatedSectorMarker_PCSIWrapped"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "SeparatedSectorMarker_PCSIWrapped",
        "normalized": "",
        "package": "PCLT",
        "partial": "Separated Sector Marker PCSIWrapped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:StandartMarkingStrategyError_PCSIWrapped",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "data",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#StandartMarkingStrategyError_PCSIWrapped",
        "fct-type": "data",
        "title": "StandartMarkingStrategyError_PCSIWrapped"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "StandartMarkingStrategyError_PCSIWrapped",
        "normalized": "",
        "package": "PCLT",
        "partial": "Standart Marking Strategy Error PCSIWrapped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
        "fct-type": "function",
        "title": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTRaw Catalog Text PCLT Show As PCSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
        "fct-type": "function",
        "title": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
        "normalized": "",
        "package": "PCLT",
        "partial": "PCLTRaw Catalog Text PCLT Show As PCSI General Commons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:SeparatedSectorMarker_PCSIWrapped",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "SeparatedSectorMarker_PCSIWrapped SeparatedSectorMarker",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#SeparatedSectorMarker_PCSIWrapped",
        "fct-type": "function",
        "title": "SeparatedSectorMarker_PCSIWrapped"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "SeparatedSectorMarker_PCSIWrapped",
        "normalized": "",
        "package": "PCLT",
        "partial": "Separated Sector Marker PCSIWrapped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:StandartMarkingStrategyError_PCSIWrapped",
      "description": {
        "fct-module": "Text.PCLT",
        "fct-package": "PCLT",
        "fct-signature": "StandartMarkingStrategyError_PCSIWrapped StandartMarkingStrategyError",
        "fct-source": "src/Text-PCLT-ShowAsPCSI__.html#StandartMarkingStrategyError_PCSIWrapped",
        "fct-type": "function",
        "title": "StandartMarkingStrategyError_PCSIWrapped"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PCLT",
        "module": "Text.PCLT",
        "name": "StandartMarkingStrategyError_PCSIWrapped",
        "normalized": "",
        "package": "PCLT",
        "partial": "Standart Marking Strategy Error PCSIWrapped",
        "signature": ""
      }
    }
  }
]