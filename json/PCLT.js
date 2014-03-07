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
        "word": "PCLT"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module unifies some parts of \u003ccode\u003ebytestring\u003c/code\u003e (as is in \u003ccode\u003e0.9.1.5\u003c/code\u003e\n version) and \u003ccode\u003eutf8-string\u003c/code\u003e (as is in \u003ccode\u003e0.3.6\u003c/code\u003e version) packages - it\n exports \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e, \u003ca\u003eData.ByteString.Lazy.UTF8\u003c/a\u003e and\n \u003ca\u003eSystem.IO.UTF8\u003c/a\u003e, while hiding from the first everything that is\n to be found in latter two. Ofcourse \u003ca\u003eSystem.IO.UTF8\u003c/a\u003e routines\n are wrapped to work with lazy \u003ccode\u003eByteStrings\u003c/code\u003e instead of \u003ccode\u003eStrings\u003c/code\u003e.\n This way we get a module an \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e alternative\n that won't corrupt Unicode symbols, an that will make\n a proper IO with them.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified, to avoid name\n clashes with Prelude functions. eg.\n\u003c/p\u003e\u003cpre\u003eimport qualified Data.ByteString.Lazy.UTF8.Unified as B\u003c/pre\u003e\u003cp\u003eor even\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Lazy.UTF8.Unified as Lazy     (ByteString)\n import qualified Data.ByteString.Lazy.UTF8.Unified as B hiding (ByteString)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Lazy.UTF8.Unified",
          "name": "Unified",
          "package": "PCLT",
          "source": "src/Data-ByteString-Lazy-UTF8-Unified.html",
          "type": "module"
        },
        "index": {
          "description": "This module unifies some parts of bytestring as is in version and utf8-string as is in version packages it exports Data.ByteString.Lazy.Char8 Data.ByteString.Lazy.UTF8 and System.IO.UTF8 while hiding from the first everything that is to be found in latter two Ofcourse System.IO.UTF8 routines are wrapped to work with lazy ByteStrings instead of Strings This way we get module an Data.ByteString.Lazy.Char8 alternative that won corrupt Unicode symbols an that will make proper IO with them This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.ByteString.Lazy.UTF8.Unified as or even import qualified Data.ByteString.Lazy.UTF8.Unified as Lazy ByteString import qualified Data.ByteString.Lazy.UTF8.Unified as hiding ByteString",
          "hierarchy": "Data ByteString Lazy UTF8 Unified",
          "module": "Data.ByteString.Lazy.UTF8.Unified",
          "name": "Unified",
          "package": "PCLT",
          "partial": "Unified",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Data-ByteString-Lazy-UTF8-Unified.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe analogue to ordinary lazy \u003ccode\u003eByteString\u003c/code\u003e, but with a constraint on size,\n and some routines, thet respects the constraint.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "ConstraintedLBS",
          "package": "PCLT",
          "source": "src/Text-ConstraintedLBS.html",
          "type": "module"
        },
        "index": {
          "description": "The analogue to ordinary lazy ByteString but with constraint on size and some routines thet respects the constraint",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "ConstraintedLBS",
          "package": "PCLT",
          "partial": "Constrainted LBS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe analogue to ordinary lazy \u003ccode\u003eByteString\u003c/code\u003e, but with a constraint on size.\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "CLBS",
          "package": "PCLT",
          "source": "src/Text-ConstraintedLBS.html#CLBS",
          "type": "data"
        },
        "index": {
          "description": "The analogue to ordinary lazy ByteString but with constraint on size",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "CLBS",
          "package": "PCLT",
          "partial": "CLBS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:CLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "StdErr_CLBS",
          "package": "PCLT",
          "source": "src/Text-ConstraintedLBS.html#StdErr_CLBS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "StdErr_CLBS",
          "package": "PCLT",
          "partial": "Std Err CLBS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:StdErr_CLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "StdOutAndErr_CLBS",
          "package": "PCLT",
          "source": "src/Text-ConstraintedLBS.html#StdOutAndErr_CLBS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "StdOutAndErr_CLBS",
          "package": "PCLT",
          "partial": "Std Out And Err CLBS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:StdOutAndErr_CLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "StdOut_CLBS",
          "package": "PCLT",
          "source": "src/Text-ConstraintedLBS.html#StdOut_CLBS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "StdOut_CLBS",
          "package": "PCLT",
          "partial": "Std Out CLBS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#t:StdOut_CLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "CLBS",
          "package": "PCLT",
          "signature": "CLBS",
          "source": "src/Text-ConstraintedLBS.html#CLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "CLBS",
          "package": "PCLT",
          "partial": "CLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:CLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend first lazy \u003ccode\u003eByteString\u003c/code\u003e (given in tuple with\n it's (trusted) length) to a \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e. If the result of appending\n violates clbsMaxLen constraint, then the content gets truncated,\n tailed with \"...\" and CLBS is finalized (nothing more can be added to it)\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "addToCLBS_1",
          "package": "PCLT",
          "signature": "(ByteString, Int64) -\u003e CLBS -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#addToCLBS_1",
          "type": "function"
        },
        "index": {
          "description": "Append first lazy ByteString given in tuple with it trusted length to CLBS If the result of appending violates clbsMaxLen constraint then the content gets truncated tailed with and CLBS is finalized nothing more can be added to it",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "addToCLBS_1",
          "normalized": "(ByteString,Int)-\u003eCLBS-\u003eCLBS",
          "package": "PCLT",
          "partial": "To CLBS",
          "signature": "(ByteString,Int)-\u003eCLBS-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:addToCLBS_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend first to second. If the result of appending\n violates clbsMaxLen constraint, then the content gets truncated,\n tailed with \"...\" and CLBS is finalized (nothing more can be added to it)\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "addToCLBS_2",
          "package": "PCLT",
          "signature": "CLBS -\u003e CLBS -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#addToCLBS_2",
          "type": "function"
        },
        "index": {
          "description": "Append first to second If the result of appending violates clbsMaxLen constraint then the content gets truncated tailed with and CLBS is finalized nothing more can be added to it",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "addToCLBS_2",
          "normalized": "CLBS-\u003eCLBS-\u003eCLBS",
          "package": "PCLT",
          "partial": "To CLBS",
          "signature": "CLBS-\u003eCLBS-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:addToCLBS_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e contain specified \u003ccode\u003eByteString\u003c/code\u003e, keeping the length constraint.\n If the specified bytestring violates clbsMaxLen constraint, then\n the content gets truncated, tailed with \"...\"\n and CLBS is finalized (nothing more can be added to it)\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "adjustCLBS_to",
          "package": "PCLT",
          "signature": "CLBS -\u003e ByteString -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#adjustCLBS_to",
          "type": "function"
        },
        "index": {
          "description": "Make CLBS contain specified ByteString keeping the length constraint If the specified bytestring violates clbsMaxLen constraint then the content gets truncated tailed with and CLBS is finalized nothing more can be added to it",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "adjustCLBS_to",
          "normalized": "CLBS-\u003eByteString-\u003eCLBS",
          "package": "PCLT",
          "partial": "CLBS",
          "signature": "CLBS-\u003eByteString-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:adjustCLBS_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBytestring is finalized, when something is appended to it,\n that makes \u003ccode\u003eclbsMaxLen\u003c/code\u003e to be reached. The last 3 bytes\n of a finalized bytestring are always made \"...\"\n (by routines of this module, that manage finalization).\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "clbsFinalized_isit",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-ConstraintedLBS.html#CLBS",
          "type": "function"
        },
        "index": {
          "description": "Bytestring is finalized when something is appended to it that makes clbsMaxLen to be reached The last bytes of finalized bytestring are always made by routines of this module that manage finalization",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "clbsFinalized_isit",
          "package": "PCLT",
          "partial": "Finalized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsFinalized_isit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "clbsFreeSpaceLeft",
          "package": "PCLT",
          "signature": "CLBS -\u003e Int64",
          "source": "src/Text-ConstraintedLBS.html#clbsFreeSpaceLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "clbsFreeSpaceLeft",
          "normalized": "CLBS-\u003eInt",
          "package": "PCLT",
          "partial": "Free Space Left",
          "signature": "CLBS-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsFreeSpaceLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "clbsLBS",
          "package": "PCLT",
          "signature": "ByteString",
          "source": "src/Text-ConstraintedLBS.html#CLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "clbsLBS",
          "package": "PCLT",
          "partial": "LBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "clbsLen",
          "package": "PCLT",
          "signature": "Int64",
          "source": "src/Text-ConstraintedLBS.html#CLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "clbsLen",
          "package": "PCLT",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ConstraintedLBS",
          "name": "clbsMaxLen",
          "package": "PCLT",
          "signature": "Int64",
          "source": "src/Text-ConstraintedLBS.html#CLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "clbsMaxLen",
          "package": "PCLT",
          "partial": "Max Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:clbsMaxLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend to first lazy bytestring the second one. The available space\n for append is constrainted by the 3rd argument. Every bytestring must\n be specified in tuple together with it's length (this is done to\n speed up by reducing repeating \u003ccode\u003elength\u003c/code\u003e calls), which is trusted.\n If length of added string is bigger then available for append,\n the result will be truncated and will have a \"...\" tail.\n\u003c/p\u003e\u003cp\u003eFunction returns resulting ByteString, it's length and boolean indicating\n if length of added string was bigger than available for append space.\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "concatTruncedLiteraryLBS",
          "package": "PCLT",
          "signature": "(ByteString, Int64) -\u003e (ByteString, Int64) -\u003e Int64 -\u003e (ByteString, Int64, Bool)",
          "source": "src/Text-ConstraintedLBS.html#concatTruncedLiteraryLBS",
          "type": "function"
        },
        "index": {
          "description": "Append to first lazy bytestring the second one The available space for append is constrainted by the rd argument Every bytestring must be specified in tuple together with it length this is done to speed up by reducing repeating length calls which is trusted If length of added string is bigger then available for append the result will be truncated and will have tail Function returns resulting ByteString it length and boolean indicating if length of added string was bigger than available for append space",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "concatTruncedLiteraryLBS",
          "normalized": "(ByteString,Int)-\u003e(ByteString,Int)-\u003eInt-\u003e(ByteString,Int,Bool)",
          "package": "PCLT",
          "partial": "Trunced Literary LBS",
          "signature": "(ByteString,Int)-\u003e(ByteString,Int)-\u003eInt-\u003e(ByteString,Int,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:concatTruncedLiteraryLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an empty \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e, that would have the maximum of length equal\n to free space left available in specified \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "freeSpaceCLBS",
          "package": "PCLT",
          "signature": "CLBS -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#freeSpaceCLBS",
          "type": "function"
        },
        "index": {
          "description": "Produce an empty CLBS that would have the maximum of length equal to free space left available in specified CLBS",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "freeSpaceCLBS",
          "normalized": "CLBS-\u003eCLBS",
          "package": "PCLT",
          "partial": "Space CLBS",
          "signature": "CLBS-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:freeSpaceCLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003einsertInsteadOf_inCLBS (old_separator, new_separator) clbs\u003c/code\u003e,\n function replaces every occurence of \u003ccode\u003eold_separator\u003c/code\u003e on \u003ccode\u003enew_separator\u003c/code\u003e\n respecting length constraint (and possibly finalizing \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "insertInsteadOf_inCLBS",
          "package": "PCLT",
          "signature": "(ByteString, ByteString) -\u003e CLBS -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#insertInsteadOf_inCLBS",
          "type": "function"
        },
        "index": {
          "description": "Given insertInsteadOf inCLBS old separator new separator clbs function replaces every occurence of old separator on new separator respecting length constraint and possibly finalizing CLBS",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "insertInsteadOf_inCLBS",
          "normalized": "(ByteString,ByteString)-\u003eCLBS-\u003eCLBS",
          "package": "PCLT",
          "partial": "Instead Of CLBS",
          "signature": "(ByteString,ByteString)-\u003eCLBS-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:insertInsteadOf_inCLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e with a specified maximum on length.\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "newCLBS",
          "package": "PCLT",
          "signature": "Int64 -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#newCLBS",
          "type": "function"
        },
        "index": {
          "description": "Make CLBS with specified maximum on length",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "newCLBS",
          "normalized": "Int-\u003eCLBS",
          "package": "PCLT",
          "partial": "CLBS",
          "signature": "Int-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:newCLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpify, and if finalized, make not.\n\u003c/p\u003e",
          "module": "Text.ConstraintedLBS",
          "name": "resetCLBS",
          "package": "PCLT",
          "signature": "CLBS -\u003e CLBS",
          "source": "src/Text-ConstraintedLBS.html#resetCLBS",
          "type": "function"
        },
        "index": {
          "description": "Empify and if finalized make not",
          "hierarchy": "Text ConstraintedLBS",
          "module": "Text.ConstraintedLBS",
          "name": "resetCLBS",
          "normalized": "CLBS-\u003eCLBS",
          "package": "PCLT",
          "partial": "CLBS",
          "signature": "CLBS-\u003eCLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-ConstraintedLBS.html#v:resetCLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "Catalog",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "Catalog",
          "package": "PCLT",
          "partial": "Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "AddedUnit_SDL",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#AddedUnit_SDL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "AddedUnit_SDL",
          "package": "PCLT",
          "partial": "Added Unit SDL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:AddedUnit_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "CompositionCycle_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#CompositionCycle_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "CompositionCycle_PCLTE",
          "package": "PCLT",
          "partial": "Composition Cycle PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:CompositionCycle_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "package": "PCLT",
          "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "DifferentSDLs_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#DifferentSDLs_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "DifferentSDLs_PCLTE",
          "package": "PCLT",
          "partial": "Different SDLs PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:DifferentSDLs_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "ErrorWithPCSCatalog",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#ErrorWithPCSCatalog",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "ErrorWithPCSCatalog",
          "package": "PCLT",
          "partial": "Error With PCSCatalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:ErrorWithPCSCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "MainUnit_SDL",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#MainUnit_SDL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "MainUnit_SDL",
          "package": "PCLT",
          "partial": "Main Unit SDL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:MainUnit_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "PCLT_Catalog",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "PCLT_Catalog",
          "package": "PCLT",
          "partial": "PCLT Catalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:PCLT_Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "PCLT_CatalogID",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#PCLT_CatalogID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "PCLT_CatalogID",
          "package": "PCLT",
          "partial": "PCLT Catalog ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:PCLT_CatalogID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "RequiredByRequirerCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#RequiredByRequirerCompositeIsMissing_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "RequiredByRequirerCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "partial": "Required By Requirer Composite Is Missing PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:RequiredByRequirerCompositeIsMissing_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "RequiredCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#RequiredCompositeIsMissing_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "RequiredCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "partial": "Required Composite Is Missing PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:RequiredCompositeIsMissing_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "TplDefaultLngIsMissing_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#TplDefaultLngIsMissing_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "TplDefaultLngIsMissing_PCLTE",
          "package": "PCLT",
          "partial": "Tpl Default Lng Is Missing PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:TplDefaultLngIsMissing_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "TplUniquenessViol_PCLTE",
          "package": "PCLT",
          "source": "src/Text-PCLT-Catalog.html#TplUniquenessViol_PCLTE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "TplUniquenessViol_PCLTE",
          "package": "PCLT",
          "partial": "Tpl Uniqueness Viol PCLTE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#t:TplUniquenessViol_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "CompositionCycle_PCLTE",
          "package": "PCLT",
          "signature": "CompositionCycle_PCLTE PCLT_CompositeKey [PCLT_CompositeKey]",
          "source": "src/Text-PCLT-Catalog.html#CompositionCycle_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "CompositionCycle_PCLTE",
          "normalized": "CompositionCycle_PCLTE PCLT_CompositeKey[PCLT_CompositeKey]",
          "package": "PCLT",
          "partial": "Composition Cycle PCLTE",
          "signature": "CompositionCycle_PCLTE PCLT_CompositeKey[PCLT_CompositeKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:CompositionCycle_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "package": "PCLT",
          "signature": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE PCLT_CompositeKey LanguageName",
          "source": "src/Text-PCLT-Catalog.html#DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "package": "PCLT",
          "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault PCLTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "DifferentSDLs_PCLTE",
          "package": "PCLT",
          "signature": "DifferentSDLs_PCLTE PCLT_ID (MainUnit_SDL, AddedUnit_SDL)",
          "source": "src/Text-PCLT-Catalog.html#DifferentSDLs_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "DifferentSDLs_PCLTE",
          "normalized": "DifferentSDLs_PCLTE PCLT_ID(MainUnit_SDL,AddedUnit_SDL)",
          "package": "PCLT",
          "partial": "Different SDLs PCLTE",
          "signature": "DifferentSDLs_PCLTE PCLT_ID(MainUnit_SDL,AddedUnit_SDL)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:DifferentSDLs_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "ErrorWithPCSCatalog",
          "package": "PCLT",
          "signature": "ErrorWithPCSCatalog PCLT_CatalogID a",
          "source": "src/Text-PCLT-Catalog.html#ErrorWithPCSCatalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "ErrorWithPCSCatalog",
          "package": "PCLT",
          "partial": "Error With PCSCatalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:ErrorWithPCSCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "PCLT_Catalog",
          "package": "PCLT",
          "signature": "PCLT_Catalog",
          "source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "PCLT_Catalog",
          "package": "PCLT",
          "partial": "PCLT Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:PCLT_Catalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "RequiredByRequirerCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "signature": "RequiredByRequirerCompositeIsMissing_PCLTE RequirerCompositeKey RequiredCompositeIsMissing_PCLTE",
          "source": "src/Text-PCLT-Catalog.html#RequiredByRequirerCompositeIsMissing_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "RequiredByRequirerCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "partial": "Required By Requirer Composite Is Missing PCLTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:RequiredByRequirerCompositeIsMissing_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "RequiredCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_PCLTE RequiredCompositeKey",
          "source": "src/Text-PCLT-Catalog.html#RequiredCompositeIsMissing_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "RequiredCompositeIsMissing_PCLTE",
          "package": "PCLT",
          "partial": "Required Composite Is Missing PCLTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:RequiredCompositeIsMissing_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "TplDefaultLngIsMissing_PCLTE",
          "package": "PCLT",
          "signature": "TplDefaultLngIsMissing_PCLTE PCLT_CompositeKey",
          "source": "src/Text-PCLT-Catalog.html#TplDefaultLngIsMissing_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "TplDefaultLngIsMissing_PCLTE",
          "package": "PCLT",
          "partial": "Tpl Default Lng Is Missing PCLTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:TplDefaultLngIsMissing_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "TplUniquenessViol_PCLTE",
          "package": "PCLT",
          "signature": "TplUniquenessViol_PCLTE PCLT_ID [LanguageName]",
          "source": "src/Text-PCLT-Catalog.html#TplUniquenessViol_PCLTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "TplUniquenessViol_PCLTE",
          "normalized": "TplUniquenessViol_PCLTE PCLT_ID[LanguageName]",
          "package": "PCLT",
          "partial": "Tpl Uniqueness Viol PCLTE",
          "signature": "TplUniquenessViol_PCLTE PCLT_ID[LanguageName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:TplUniquenessViol_PCLTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "catDfltLng",
          "package": "PCLT",
          "signature": "PCLT_Catalog -\u003e LanguageName",
          "source": "src/Text-PCLT-Catalog.html#catDfltLng",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "catDfltLng",
          "normalized": "PCLT_Catalog-\u003eLanguageName",
          "package": "PCLT",
          "partial": "Dflt Lng",
          "signature": "PCLT_Catalog-\u003eLanguageName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catDfltLng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "catInstMaxLen",
          "package": "PCLT",
          "signature": "PCLT_Catalog -\u003e Int64",
          "source": "src/Text-PCLT-Catalog.html#catInstMaxLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "catInstMaxLen",
          "normalized": "PCLT_Catalog-\u003eInt",
          "package": "PCLT",
          "partial": "Inst Max Len",
          "signature": "PCLT_Catalog-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catInstMaxLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "catSize",
          "package": "PCLT",
          "signature": "PCLT_Catalog -\u003e Int",
          "source": "src/Text-PCLT-Catalog.html#catSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "catSize",
          "normalized": "PCLT_Catalog-\u003eInt",
          "package": "PCLT",
          "partial": "Size",
          "signature": "PCLT_Catalog-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "catStrictOrient",
          "package": "PCLT",
          "signature": "PCLT_Catalog -\u003e StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "source": "src/Text-PCLT-Catalog.html#catStrictOrient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "catStrictOrient",
          "normalized": "PCLT_Catalog-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "partial": "Strict Orient",
          "signature": "PCLT_Catalog-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:catStrictOrient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "pcltcCatalogID",
          "package": "PCLT",
          "signature": "PCLT_CatalogID",
          "source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "pcltcCatalogID",
          "package": "PCLT",
          "partial": "Catalog ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:pcltcCatalogID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Catalog",
          "name": "pcltcCatalogMap",
          "package": "PCLT",
          "signature": "PCLT_CatalogMap",
          "source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "pcltcCatalogMap",
          "package": "PCLT",
          "partial": "Catalog Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:pcltcCatalogMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is highly recommended not to change this param\n values after catalog is formed, since it's easy to\n spoil catalog content that way.\n\u003c/p\u003e",
          "module": "Text.PCLT.Catalog",
          "name": "pcltcInnerConfig",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig",
          "source": "src/Text-PCLT-Catalog.html#PCLT_Catalog",
          "type": "function"
        },
        "index": {
          "description": "It is highly recommended not to change this param values after catalog is formed since it easy to spoil catalog content that way",
          "hierarchy": "Text PCLT Catalog",
          "module": "Text.PCLT.Catalog",
          "name": "pcltcInnerConfig",
          "package": "PCLT",
          "partial": "Inner Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Catalog.html#v:pcltcInnerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools to use \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e class instances in order to build up\n a catalog. (\"FromHSRT\" in module name means \u003ca\u003efrom a given instance of\n HasStaticRawPCLTs class\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "CatalogFromHSRT",
          "package": "PCLT",
          "source": "src/Text-PCLT-CatalogFromHSRT.html",
          "type": "module"
        },
        "index": {
          "description": "Tools to use HasStaticRawPCLTs class instances in order to build up catalog FromHSRT in module name means from given instance of HasStaticRawPCLTs class",
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "CatalogFromHSRT",
          "package": "PCLT",
          "partial": "Catalog From HSRT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "CatalogFromHSRTInitErrors",
          "package": "PCLT",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "CatalogFromHSRTInitErrors",
          "package": "PCLT",
          "partial": "Catalog From HSRTInit Errors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#t:CatalogFromHSRTInitErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "CatalogFromHSRTInitErrors",
          "package": "PCLT",
          "signature": "CatalogFromHSRTInitErrors",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "CatalogFromHSRTInitErrors",
          "package": "PCLT",
          "partial": "Catalog From HSRTInit Errors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:CatalogFromHSRTInitErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "addFromHSRTToCatalog",
          "package": "PCLT",
          "signature": "a -\u003e PCLT_Catalog -\u003e (PCLT_Catalog, CatalogFromHSRTInitErrors)",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#addFromHSRTToCatalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "addFromHSRTToCatalog",
          "normalized": "a-\u003ePCLT_Catalog-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
          "package": "PCLT",
          "partial": "From HSRTTo Catalog",
          "signature": "a-\u003ePCLT_Catalog-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:addFromHSRTToCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eaddFromHSRTToCatalog\u003c/a\u003e\u003c/code\u003e function.\n For case, when all errors are to be represented at once.\n\u003c/p\u003e",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "addFromHSRTToCatalog_2",
          "package": "PCLT",
          "signature": "a -\u003e PCLT_Catalog -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#addFromHSRTToCatalog_2",
          "type": "function"
        },
        "index": {
          "description": "wrapper around addFromHSRTToCatalog function For case when all errors are to be represented at once",
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "addFromHSRTToCatalog_2",
          "normalized": "a-\u003ePCLT_Catalog-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "package": "PCLT",
          "partial": "From HSRTTo Catalog",
          "signature": "a-\u003ePCLT_Catalog-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:addFromHSRTToCatalog_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "cfhieCatReadErrs",
          "package": "PCLT",
          "signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "cfhieCatReadErrs",
          "normalized": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
          "package": "PCLT",
          "partial": "Cat Read Errs",
          "signature": "[ErrorWithPCSCatalog ReadPCSCatalogError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:cfhieCatReadErrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "cfhieCatalogID",
          "package": "PCLT",
          "signature": "PCLT_CatalogID",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "cfhieCatalogID",
          "package": "PCLT",
          "partial": "Catalog ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:cfhieCatalogID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "cfhieCollectionErrs",
          "package": "PCLT",
          "signature": "[AddPCLT_toPCLT_Error]",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#CatalogFromHSRTInitErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "cfhieCollectionErrs",
          "normalized": "[AddPCLT_toPCLT_Error]",
          "package": "PCLT",
          "partial": "Collection Errs",
          "signature": "[AddPCLT_toPCLT_Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:cfhieCollectionErrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "defaultCatalogFromHSRTInitErrors",
          "package": "PCLT",
          "signature": "PCLT_CatalogID -\u003e CatalogFromHSRTInitErrors",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#defaultCatalogFromHSRTInitErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "defaultCatalogFromHSRTInitErrors",
          "normalized": "PCLT_CatalogID-\u003eCatalogFromHSRTInitErrors",
          "package": "PCLT",
          "partial": "Catalog From HSRTInit Errors",
          "signature": "PCLT_CatalogID-\u003eCatalogFromHSRTInitErrors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:defaultCatalogFromHSRTInitErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "initCatalogFromHSRT",
          "package": "PCLT",
          "signature": "a -\u003e PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (PCLT_Catalog, CatalogFromHSRTInitErrors)",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#initCatalogFromHSRT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "initCatalogFromHSRT",
          "normalized": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
          "package": "PCLT",
          "partial": "Catalog From HSRT",
          "signature": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:initCatalogFromHSRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003einitCatalogFromHSRT\u003c/a\u003e\u003c/code\u003e function.\n For case, when all errors are to be represented at once.\n\u003c/p\u003e",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "initCatalogFromHSRT_2",
          "package": "PCLT",
          "signature": "a -\u003e PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
          "source": "src/Text-PCLT-CatalogFromHSRT.html#initCatalogFromHSRT_2",
          "type": "function"
        },
        "index": {
          "description": "wrapper around initCatalogFromHSRT function For case when all errors are to be represented at once",
          "hierarchy": "Text PCLT CatalogFromHSRT",
          "module": "Text.PCLT.CatalogFromHSRT",
          "name": "initCatalogFromHSRT_2",
          "normalized": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "package": "PCLT",
          "partial": "Catalog From HSRT",
          "signature": "a-\u003ePCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogFromHSRT.html#v:initCatalogFromHSRT_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions from this module isn't used for catalog formation.\n It's not very wise to have two similar codes of catalog maths here and\n in module \u003ca\u003eText.PCLT.MakeCatalog\u003c/a\u003e, since it raises double maintenence\n problem. Perhaps the problem will be solved in future versions.\n\u003c/p\u003e\u003cp\u003eThe math's errors, however, seems to be of use in other modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.CatalogMaths",
          "name": "CatalogMaths",
          "package": "PCLT",
          "source": "src/Text-PCLT-CatalogMaths.html",
          "type": "module"
        },
        "index": {
          "description": "Functions from this module isn used for catalog formation It not very wise to have two similar codes of catalog maths here and in module Text.PCLT.MakeCatalog since it raises double maintenence problem Perhaps the problem will be solved in future versions The math errors however seems to be of use in other modules",
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "CatalogMaths",
          "package": "PCLT",
          "partial": "Catalog Maths",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003eaddLngTpl_toPCLT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.CatalogMaths",
          "name": "AddLngTpl_toPCLT_Error",
          "package": "PCLT",
          "source": "src/Text-PCLT-CatalogMaths.html#AddLngTpl_toPCLT_Error",
          "type": "data"
        },
        "index": {
          "description": "Error type for addLngTpl toPCLT",
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "AddLngTpl_toPCLT_Error",
          "package": "PCLT",
          "partial": "Add Lng Tpl PCLT Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#t:AddLngTpl_toPCLT_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003eaddPCLT_toPCLT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.CatalogMaths",
          "name": "AddPCLT_toPCLT_Error",
          "package": "PCLT",
          "source": "src/Text-PCLT-CatalogMaths.html#AddPCLT_toPCLT_Error",
          "type": "data"
        },
        "index": {
          "description": "Error type for addPCLT toPCLT",
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "AddPCLT_toPCLT_Error",
          "package": "PCLT",
          "partial": "Add PCLT PCLT Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#t:AddPCLT_toPCLT_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogMaths",
          "name": "AddLngTpl_toPCLT_Error_APTTPTE",
          "package": "PCLT",
          "signature": "AddLngTpl_toPCLT_Error_APTTPTE AddLngTpl_toPCLT_Error",
          "source": "src/Text-PCLT-CatalogMaths.html#AddPCLT_toPCLT_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "AddLngTpl_toPCLT_Error_APTTPTE",
          "package": "PCLT",
          "partial": "Add Lng Tpl PCLT Error APTTPTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:AddLngTpl_toPCLT_Error_APTTPTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogMaths",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE",
          "package": "PCLT",
          "signature": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "source": "src/Text-PCLT-CatalogMaths.html#AddLngTpl_toPCLT_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE",
          "package": "PCLT",
          "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault APSTPTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_APSTPTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogMaths",
          "name": "DifferentSDLs_APTTPTE",
          "package": "PCLT",
          "signature": "DifferentSDLs_APTTPTE DifferentSDLs_PCLTE",
          "source": "src/Text-PCLT-CatalogMaths.html#AddPCLT_toPCLT_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "DifferentSDLs_APTTPTE",
          "package": "PCLT",
          "partial": "Different SDLs APTTPTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:DifferentSDLs_APTTPTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CatalogMaths",
          "name": "TplUniquenessViol_APSTPTE",
          "package": "PCLT",
          "signature": "TplUniquenessViol_APSTPTE TplUniquenessViol_PCLTE",
          "source": "src/Text-PCLT-CatalogMaths.html#AddLngTpl_toPCLT_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "TplUniquenessViol_APSTPTE",
          "package": "PCLT",
          "partial": "Tpl Uniqueness Viol APSTPTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:TplUniquenessViol_APSTPTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds localized template as a special case of localizable template.\n\u003c/p\u003e",
          "module": "Text.PCLT.CatalogMaths",
          "name": "addLngTpl_toPCLT",
          "package": "PCLT",
          "signature": "PCLT_ID -\u003e (LanguageName, LocalizedTemplate) -\u003e LocalizableTemplate -\u003e PCLT_InnerConfig -\u003e (LocalizableTemplate, [AddLngTpl_toPCLT_Error])",
          "source": "src/Text-PCLT-CatalogMaths.html#addLngTpl_toPCLT",
          "type": "function"
        },
        "index": {
          "description": "Adds localized template as special case of localizable template",
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "addLngTpl_toPCLT",
          "normalized": "PCLT_ID-\u003e(LanguageName,LocalizedTemplate)-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddLngTpl_toPCLT_Error])",
          "package": "PCLT",
          "partial": "Lng Tpl PCLT",
          "signature": "PCLT_ID-\u003e(LanguageName,LocalizedTemplate)-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddLngTpl_toPCLT_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:addLngTpl_toPCLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds up localizable templates, their localized cases.\n\u003c/p\u003e",
          "module": "Text.PCLT.CatalogMaths",
          "name": "addPCLT_toPCLT",
          "package": "PCLT",
          "signature": "PCLT_ID -\u003e LocalizableTemplate -\u003e LocalizableTemplate -\u003e PCLT_InnerConfig -\u003e (LocalizableTemplate, [AddPCLT_toPCLT_Error])",
          "source": "src/Text-PCLT-CatalogMaths.html#addPCLT_toPCLT",
          "type": "function"
        },
        "index": {
          "description": "Adds up localizable templates their localized cases",
          "hierarchy": "Text PCLT CatalogMaths",
          "module": "Text.PCLT.CatalogMaths",
          "name": "addPCLT_toPCLT",
          "normalized": "PCLT_ID-\u003eLocalizableTemplate-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddPCLT_toPCLT_Error])",
          "package": "PCLT",
          "partial": "PCLT PCLT",
          "signature": "PCLT_ID-\u003eLocalizableTemplate-\u003eLocalizableTemplate-\u003ePCLT_InnerConfig-\u003e(LocalizableTemplate,[AddPCLT_toPCLT_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CatalogMaths.html#v:addPCLT_toPCLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "CommonTypes",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "CommonTypes",
          "package": "PCLT",
          "partial": "Common Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is highly recommended to use \u003cem\u003eISO 639-3\u003c/em\u003e here - I mean\n it was originally intended to do so, and now a related package PCLT-DB\n works only with 3-letters (not bigger) languages names -\n there is a constraint in DB for that.\n\u003c/p\u003e",
          "module": "Text.PCLT.CommonTypes",
          "name": "LanguageName",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#LanguageName",
          "type": "type"
        },
        "index": {
          "description": "It is highly recommended to use ISO here mean it was originally intended to do so and now related package PCLT-DB works only with letters not bigger languages names there is constraint in DB for that",
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "LanguageName",
          "package": "PCLT",
          "partial": "Language Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:LanguageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHere and in many places of package by\n \"composite\" is meant \"template which is included in\n composed template\".\n\u003c/p\u003e",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_CompositeKey",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#PCLT_CompositeKey",
          "type": "type"
        },
        "index": {
          "description": "Here and in many places of package by composite is meant template which is included in composed template",
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_CompositeKey",
          "package": "PCLT",
          "partial": "PCLT Composite Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_CompositeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_ID",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#PCLT_ID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_ID",
          "package": "PCLT",
          "partial": "PCLT ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocalizable template ID.\n\u003c/p\u003e",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_ParamKey",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#PCLT_ParamKey",
          "type": "type"
        },
        "index": {
          "description": "Localizable template ID",
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_ParamKey",
          "package": "PCLT",
          "partial": "PCLT Param Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_ParamKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_SubCompositeKey",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#PCLT_SubCompositeKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_SubCompositeKey",
          "package": "PCLT",
          "partial": "PCLT Sub Composite Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_SubCompositeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_SuperCompositeKey",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#PCLT_SuperCompositeKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "PCLT_SuperCompositeKey",
          "package": "PCLT",
          "partial": "PCLT Super Composite Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:PCLT_SuperCompositeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "ParamName_LBS",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#ParamName_LBS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "ParamName_LBS",
          "package": "PCLT",
          "partial": "Param Name LBS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:ParamName_LBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "RequiredCompositeKey",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#RequiredCompositeKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "RequiredCompositeKey",
          "package": "PCLT",
          "partial": "Required Composite Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:RequiredCompositeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.CommonTypes",
          "name": "RequirerCompositeKey",
          "package": "PCLT",
          "source": "src/Text-PCLT-CommonTypes.html#RequirerCompositeKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT CommonTypes",
          "module": "Text.PCLT.CommonTypes",
          "name": "RequirerCompositeKey",
          "package": "PCLT",
          "partial": "Requirer Composite Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-CommonTypes.html#t:RequirerCompositeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "Config",
          "package": "PCLT",
          "source": "src/Text-PCLT-Config.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "Config",
          "package": "PCLT",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "PCLT_InnerConfig",
          "package": "PCLT",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "PCLT_InnerConfig",
          "package": "PCLT",
          "partial": "PCLT Inner Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:PCLT_InnerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "PCLT_InnerConfigID",
          "package": "PCLT",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfigID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "PCLT_InnerConfigID",
          "package": "PCLT",
          "partial": "PCLT Inner Config ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:PCLT_InnerConfigID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOT USED, RESERVED FOR FUTURE VERSIONS OF PCLT!\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "ReparsingDepth",
          "package": "PCLT",
          "source": "src/Text-PCLT-Config.html#ReparsingDepth",
          "type": "type"
        },
        "index": {
          "description": "NOT USED RESERVED FOR FUTURE VERSIONS OF PCLT",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "ReparsingDepth",
          "package": "PCLT",
          "partial": "Reparsing Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:ReparsingDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "partial": "Strict Orient Params And Cmpsts Dflt Lng Tpls Sets",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#t:StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "PCLT_InnerConfig",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "PCLT_InnerConfig",
          "package": "PCLT",
          "partial": "PCLT Inner Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:PCLT_InnerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "signature": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "partial": "Strict Orient Params And Cmpsts Dflt Lng Tpls Sets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e  PCLT_InnerConfig {\n            pcsInnerConfigID = 0\n          , pcsCompositePlaceholderWrapper = B.pack \"##|\"\n          , pcsParameterPlaceholderWrapper = B.pack \"@@|\"\n          , pcsInsuficientDetLevelPlaceholder = B.pack \"#x#\"\n          , pcsMarkingErrorPlaceholderWrapper = B.pack \"/!E!\\\"\n          , pcsDefaultLanguage                = \"eng\"\n          , pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets =\n                    StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets {\n                              soStrict_IsIt = True\n                            , soExcludingInComposites   = []\n                            , soExcludingComposites     = []\n                            , soExcludingParameters     = []\n                            , soExcludingCompComposites = []\n                            , soExcludingCompParameters = []\n                    }\n          , pcsAllowUntemplatedMessages                = True\n          , pcsAllowUntemplatedLocalizationsOfMessages = True\n          , pcsShowAdhocParamsInResultOfUntemplated    = True\n          , pcsInstaniationResultMaxSize               = 10000000\n          , pcsAllowEmptySDL_parseItByModusMargin      = False\n          , pcsAllowUnreadableSDL_parseIdByModusMargin = False\n          , pcsAllowFailureToDetermineSDL_parseIdByModusMargin = False\n          , pcsNewlineLBS                              = B.pack \"\\n\"\n    }\n\u003c/pre\u003e",
          "module": "Text.PCLT.Config",
          "name": "defaultPCLTInnerConfig",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig",
          "source": "src/Text-PCLT-Config.html#defaultPCLTInnerConfig",
          "type": "function"
        },
        "index": {
          "description": "PCLT InnerConfig pcsInnerConfigID pcsCompositePlaceholderWrapper B.pack pcsParameterPlaceholderWrapper B.pack pcsInsuficientDetLevelPlaceholder B.pack pcsMarkingErrorPlaceholderWrapper B.pack pcsDefaultLanguage eng pcsStrictOrient ofParamsAndCmpsts onDfltLngTplsSets StrictOrient ofParamsAndCmpsts onDfltLngTplsSets soStrict IsIt True soExcludingInComposites soExcludingComposites soExcludingParameters soExcludingCompComposites soExcludingCompParameters pcsAllowUntemplatedMessages True pcsAllowUntemplatedLocalizationsOfMessages True pcsShowAdhocParamsInResultOfUntemplated True pcsInstaniationResultMaxSize pcsAllowEmptySDL parseItByModusMargin False pcsAllowUnreadableSDL parseIdByModusMargin False pcsAllowFailureToDetermineSDL parseIdByModusMargin False pcsNewlineLBS B.pack",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "defaultPCLTInnerConfig",
          "package": "PCLT",
          "partial": "PCLTInner Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:defaultPCLTInnerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it allowed to give an empty value to the field\n \"representation detailization level\" (\u003ca\u003eText.PCLT.SDL\u003c/a\u003e)?\n If allowed, then it's value will be chosen automatically\n by the margin\n depending on modus: maximal (\"+inf\") in case, when it's a\n requirement by a template, or minimal (\"zero\"), when it's\n an assigment to a reciever of representation\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowEmptySDL_parseItByModusMargin",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Is it allowed to give an empty value to the field representation detailization level Text.PCLT.SDL If allowed then it value will be chosen automatically by the margin depending on modus maximal inf in case when it requirement by template or minimal zero when it an assigment to reciever of representation",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowEmptySDL_parseItByModusMargin",
          "package": "PCLT",
          "partial": "Allow Empty SDL It By Modus Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowEmptySDL_parseItByModusMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003epcsi2text\u003c/code\u003e (\u003ca\u003eText.PCLT.MakeMessage\u003c/a\u003e) function fails to\n determine an SDL requiered by used template (due to\n referential cycle, missing referenced template,\n \u003ccode\u003ePCLT_SDL_Errornous\u003c/code\u003e or other reason) - should this failure\n lead to absolute denial to represent problem template, or\n should the \u003ccode\u003epcsi2text\u003c/code\u003e treat it like \"+inf\"\n (\u003ccode\u003ePCLT_SDL InfinitelyBig_SDL\u003c/code\u003e)? The error will be returned\n anyway, but question is purely about output representation.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowFailureToDetermineSDL_parseIdByModusMargin",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "If pcsi2text Text.PCLT.MakeMessage function fails to determine an SDL requiered by used template due to referential cycle missing referenced template PCLT SDL Errornous or other reason should this failure lead to absolute denial to represent problem template or should the pcsi2text treat it like inf PCLT SDL InfinitelyBig SDL The error will be returned anyway but question is purely about output representation",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowFailureToDetermineSDL_parseIdByModusMargin",
          "package": "PCLT",
          "partial": "Allow Failure To Determine SDL Id By Modus Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowFailureToDetermineSDL_parseIdByModusMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it allowed to give an unreadable value to the field\n \"representation detailization level\" (\u003ca\u003eText.PCLT.SDL\u003c/a\u003e)?\n If allowed,\n then it's value will be chosen automatically by the margin\n depending on modus: maximal (\"+inf\") in case, when it's a\n requirement by a template, or minimal (\"zero\"), when it's\n an assigment to a reciever of representation\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowUnreadableSDL_parseIdByModusMargin",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Is it allowed to give an unreadable value to the field representation detailization level Text.PCLT.SDL If allowed then it value will be chosen automatically by the margin depending on modus maximal inf in case when it requirement by template or minimal zero when it an assigment to reciever of representation",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowUnreadableSDL_parseIdByModusMargin",
          "package": "PCLT",
          "partial": "Allow Unreadable SDL Id By Modus Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowUnreadableSDL_parseIdByModusMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it allowed to demand representations from catalog, when\n referenced template/composite ID is persistent in catalog,\n but not in representation language?\n In case, if allowed, on place of unknown composite\n the engine (when making representation) will simply put\n it's (unknown) ID (given that recievers detailization level\n statisfies a requirement: it must be maximal (infinitely\n big)), followed by (if enabled by other config parameter)\n all the parameters used by current instaniation.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowUntemplatedLocalizationsOfMessages",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Is it allowed to demand representations from catalog when referenced template composite ID is persistent in catalog but not in representation language In case if allowed on place of unknown composite the engine when making representation will simply put it unknown ID given that recievers detailization level statisfies requirement it must be maximal infinitely big followed by if enabled by other config parameter all the parameters used by current instaniation",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowUntemplatedLocalizationsOfMessages",
          "package": "PCLT",
          "partial": "Allow Untemplated Localizations Of Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowUntemplatedLocalizationsOfMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs it allowed to demand representations from catalog, when\n referenced template/composite ID isn't known in given\n catalog?\n In case, if allowed, on place of unknown composite\n the engine (when making representation) will simply put\n it's (unknown) ID (given that recievers detailization level\n statisfies a requirement: it must be maximal (infinitely\n big)), followed by (if enabled by other config parameter)\n all the parameters used by current instaniation.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowUntemplatedMessages",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Is it allowed to demand representations from catalog when referenced template composite ID isn known in given catalog In case if allowed on place of unknown composite the engine when making representation will simply put it unknown ID given that recievers detailization level statisfies requirement it must be maximal infinitely big followed by if enabled by other config parameter all the parameters used by current instaniation",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsAllowUntemplatedMessages",
          "package": "PCLT",
          "partial": "Allow Untemplated Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsAllowUntemplatedMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbols sequence denoting wrapping parentheses (identical\n for both - openning ang closing), that are to be put\n around *composite* name in a template text.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsCompositePlaceholderWrapper",
          "package": "PCLT",
          "signature": "ByteString",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Symbols sequence denoting wrapping parentheses identical for both openning ang closing that are to be put around composite name in template text",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsCompositePlaceholderWrapper",
          "package": "PCLT",
          "partial": "Composite Placeholder Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsCompositePlaceholderWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatalog default (primary) language.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsDefaultLanguage",
          "package": "PCLT",
          "signature": "LanguageName",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Catalog default primary language",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsDefaultLanguage",
          "package": "PCLT",
          "partial": "Default Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsDefaultLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Config",
          "name": "pcsInnerConfigID",
          "package": "PCLT",
          "signature": "PCLT_InnerConfigID",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsInnerConfigID",
          "package": "PCLT",
          "partial": "Inner Config ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsInnerConfigID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDEFAULT maximal allowed size of representation resulting from\n instaniation of a single PCSI. If user gives on the input\n his ConstraintedLBS with different constraint on size, then his\n constraint is used instead.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsInstaniationResultMaxSize",
          "package": "PCLT",
          "signature": "Int64",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "DEFAULT maximal allowed size of representation resulting from instaniation of single PCSI If user gives on the input his ConstraintedLBS with different constraint on size then his constraint is used instead",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsInstaniationResultMaxSize",
          "package": "PCLT",
          "partial": "Instaniation Result Max Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsInstaniationResultMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor case, when representation reciever uses detalization\n level, that isn't enough to meet requirement specified by\n the template (from which representation was to be made):\n symbols sequence, that PCLT engine must place\n instead of content from template/composite.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsInsuficientDetLevelPlaceholder",
          "package": "PCLT",
          "signature": "ByteString",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "For case when representation reciever uses detalization level that isn enough to meet requirement specified by the template from which representation was to be made symbols sequence that PCLT engine must place instead of content from template composite",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsInsuficientDetLevelPlaceholder",
          "package": "PCLT",
          "partial": "Insuficient Det Level Placeholder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsInsuficientDetLevelPlaceholder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbols sequence denoting wrapping parentheses (identical\n for both - openning ang closing), that are to be put\n (by PCLT engine) in representation, where it failed to\n make a proper representation from a template piece\n (composite or parameter).\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsMarkingErrorPlaceholderWrapper",
          "package": "PCLT",
          "signature": "ByteString",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Symbols sequence denoting wrapping parentheses identical for both openning ang closing that are to be put by PCLT engine in representation where it failed to make proper representation from template piece composite or parameter",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsMarkingErrorPlaceholderWrapper",
          "package": "PCLT",
          "partial": "Marking Error Placeholder Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsMarkingErrorPlaceholderWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence of symbols used, when representing a specialcase\n of parameter value - \u003ccode\u003eNewline_PV\u003c/code\u003e (\u003ca\u003eText.PCLT.PCSI\u003c/a\u003e).\n (Different OSes use different newline strings: in Linux it's\n #10, in M$ - #13#10, MacOS - #13)\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsNewlineLBS",
          "package": "PCLT",
          "signature": "ByteString",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Sequence of symbols used when representing specialcase of parameter value Newline PV Text.PCLT.PCSI Different OSes use different newline strings in Linux it in MacOS",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsNewlineLBS",
          "package": "PCLT",
          "partial": "Newline LBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsNewlineLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbols sequence denoting wrapping parentheses (identical\n for both - openning ang closing), that are to be put\n around *parameter* name in a template text.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsParameterPlaceholderWrapper",
          "package": "PCLT",
          "signature": "ByteString",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Symbols sequence denoting wrapping parentheses identical for both openning ang closing that are to be put around parameter name in template text",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsParameterPlaceholderWrapper",
          "package": "PCLT",
          "partial": "Parameter Placeholder Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsParameterPlaceholderWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOT USED, RESERVED FOR FUTURE VERSIONS OF PCLT!\n Maximal allowed size of representation resuling from\n instaniating a reparsing result.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsReparseParameterContentMaxSize",
          "package": "PCLT",
          "signature": "Int64",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "NOT USED RESERVED FOR FUTURE VERSIONS OF PCLT Maximal allowed size of representation resuling from instaniating reparsing result",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsReparseParameterContentMaxSize",
          "package": "PCLT",
          "partial": "Reparse Parameter Content Max Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsReparseParameterContentMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNOT USED, RESERVED FOR FUTURE VERSIONS OF PCLT!\n Maximal allowed depth of reparsing.\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsReparsingDepthMax",
          "package": "PCLT",
          "signature": "ReparsingDepth",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "NOT USED RESERVED FOR FUTURE VERSIONS OF PCLT Maximal allowed depth of reparsing",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsReparsingDepthMax",
          "package": "PCLT",
          "partial": "Reparsing Depth Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsReparsingDepthMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf it's allowed to require representation of\n a template/composite (or it's localisation), that is absent\n in catalog then (given that reciever's detailization level\n statisfies a requirement: it must be maximal (infinitely\n big)) together with it's (unknown composite) ID:\n should there also be put all the parameters (array of\n name:value pairs), used by current instaniation?\n\u003c/p\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsShowAdhocParamsInResultOfUntemplated",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "If it allowed to require representation of template composite or it localisation that is absent in catalog then given that reciever detailization level statisfies requirement it must be maximal infinitely big together with it unknown composite ID should there also be put all the parameters array of name value pairs used by current instaniation",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsShowAdhocParamsInResultOfUntemplated",
          "package": "PCLT",
          "partial": "Show Adhoc Params In Result Of Untemplated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsShowAdhocParamsInResultOfUntemplated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Should all localizations of template be strictly oriented\n on localization in default (primary) language? (in case of\n such orientation, NO template localized in a nondefault\n language is allowed to have sets of composites and\n parameters different from ones specified for template\n localization in the default language)\n\u003c/li\u003e\u003cli\u003e Exclusions - when not to be strict with templates\n structures, - if strictness is on;\n or when to be strict, - if strictness is off.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.PCLT.Config",
          "name": "pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "signature": "StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "source": "src/Text-PCLT-Config.html#PCLT_InnerConfig",
          "type": "function"
        },
        "index": {
          "description": "Object Should all localizations of template be strictly oriented on localization in default primary language in case of such orientation NO template localized in nondefault language is allowed to have sets of composites and parameters different from ones specified for template localization in the default language Exclusions when not to be strict with templates structures if strictness is on or when to be strict if strictness is off",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "package": "PCLT",
          "partial": "Strict Orient Params And Cmpsts Dflt Lng Tpls Sets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:pcsStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with      these\n referenced parameters in referenced templates;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with ONLY these\n referenced parameters in referenced templates\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Config",
          "name": "soExcludingCompComposites",
          "package": "PCLT",
          "signature": "[(PCLT_ID, PCLT_ID)]",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "description": "if SO is True don be strict with these referenced parameters in referenced templates if SO is False be strict with ONLY these referenced parameters in referenced templates",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "soExcludingCompComposites",
          "normalized": "[(PCLT_ID,PCLT_ID)]",
          "package": "PCLT",
          "partial": "Excluding Comp Composites",
          "signature": "[(PCLT_ID,PCLT_ID)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingCompComposites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with      these\n referenced composites in referenced templates;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with ONLY these\n referenced composites in referenced templates\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Config",
          "name": "soExcludingCompParameters",
          "package": "PCLT",
          "signature": "[(PCLT_ID, PCLT_ParamKey)]",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "description": "if SO is True don be strict with these referenced composites in referenced templates if SO is False be strict with ONLY these referenced composites in referenced templates",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "soExcludingCompParameters",
          "normalized": "[(PCLT_ID,PCLT_ParamKey)]",
          "package": "PCLT",
          "partial": "Excluding Comp Parameters",
          "signature": "[(PCLT_ID,PCLT_ParamKey)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingCompParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with occurences of\n      these templates as composites;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with occurences of\n ONLY these templates as composites\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Config",
          "name": "soExcludingComposites",
          "package": "PCLT",
          "signature": "[PCLT_ID]",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "description": "if SO is True don be strict with occurences of these templates as composites if SO is False be strict with occurences of ONLY these templates as composites",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "soExcludingComposites",
          "normalized": "[PCLT_ID]",
          "package": "PCLT",
          "partial": "Excluding Composites",
          "signature": "[PCLT_ID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingComposites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with contents of\n      these templates;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with contents of\n ONLY these templates\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Config",
          "name": "soExcludingInComposites",
          "package": "PCLT",
          "signature": "[PCLT_ID]",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "description": "if SO is True don be strict with contents of these templates if SO is False be strict with contents of ONLY these templates",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "soExcludingInComposites",
          "normalized": "[PCLT_ID]",
          "package": "PCLT",
          "partial": "Excluding In Composites",
          "signature": "[PCLT_ID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingInComposites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e if SO is True , don't be strict with\n      these parameters;\n\u003c/li\u003e\u003cli\u003e if SO is False,       be strict with\n ONLY these parameters\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Config",
          "name": "soExcludingParameters",
          "package": "PCLT",
          "signature": "[PCLT_ParamKey]",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "description": "if SO is True don be strict with these parameters if SO is False be strict with ONLY these parameters",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "soExcludingParameters",
          "normalized": "[PCLT_ParamKey]",
          "package": "PCLT",
          "partial": "Excluding Parameters",
          "signature": "[PCLT_ParamKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soExcludingParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbbreviation = \"SO\". The exclusions has opposite\n roles for different values of this parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if SO is True ,       be strict with templates\n (when adding them and to a catalog) in such manner,\n that set of composite and set of parameters MUST be\n the same for ALL language localizations under\n one template ID; if for a template any set (of\n parameters or of composites) is different from one\n determined for template in default language, then this\n template will be discarded (not included in catalog)\n\u003c/li\u003e\u003cli\u003e if SO is False, don't be strict with templates -\n different language versions of one same template are\n allowed to have different sets of composites and\n parameters\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Config",
          "name": "soStrict_IsIt",
          "package": "PCLT",
          "signature": "Bool",
          "source": "src/Text-PCLT-Config.html#StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets",
          "type": "function"
        },
        "index": {
          "description": "Abbreviation SO The exclusions has opposite roles for different values of this parameter if SO is True be strict with templates when adding them and to catalog in such manner that set of composite and set of parameters MUST be the same for ALL language localizations under one template ID if for template any set of parameters or of composites is different from one determined for template in default language then this template will be discarded not included in catalog if SO is False don be strict with templates different language versions of one same template are allowed to have different sets of composites and parameters",
          "hierarchy": "Text PCLT Config",
          "module": "Text.PCLT.Config",
          "name": "soStrict_IsIt",
          "package": "PCLT",
          "partial": "Strict Is It",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Config.html#v:soStrict_IsIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA way to store templates is by assigning them to types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "HasStaticRawPCLTs",
          "package": "PCLT",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html",
          "type": "module"
        },
        "index": {
          "description": "way to store templates is by assigning them to types",
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "HasStaticRawPCLTs",
          "package": "PCLT",
          "partial": "Has Static Raw PCLTs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "HasStaticRawPCLTs",
          "package": "PCLT",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#HasStaticRawPCLTs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "HasStaticRawPCLTs",
          "package": "PCLT",
          "partial": "Has Static Raw PCLTs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#t:HasStaticRawPCLTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "RawPCLTsSetWideness",
          "package": "PCLT",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "RawPCLTsSetWideness",
          "package": "PCLT",
          "partial": "Raw PCLTs Set Wideness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#t:RawPCLTsSetWideness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "AlgebraicDataType_RPSW",
          "package": "PCLT",
          "signature": "AlgebraicDataType_RPSW",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "AlgebraicDataType_RPSW",
          "package": "PCLT",
          "partial": "Algebraic Data Type RPSW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:AlgebraicDataType_RPSW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "Module_RPSW",
          "package": "PCLT",
          "signature": "Module_RPSW",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "Module_RPSW",
          "package": "PCLT",
          "partial": "Module RPSW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:Module_RPSW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "Package_RPSW",
          "package": "PCLT",
          "signature": "Package_RPSW",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "Package_RPSW",
          "package": "PCLT",
          "partial": "Package RPSW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:Package_RPSW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "System_RPSW",
          "package": "PCLT",
          "signature": "System_RPSW",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#RawPCLTsSetWideness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "System_RPSW",
          "package": "PCLT",
          "partial": "System RPSW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:System_RPSW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "getStaticRawPCLTs",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig -\u003e t -\u003e (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#getStaticRawPCLTs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "getStaticRawPCLTs",
          "normalized": "PCLT_InnerConfig-\u003ea-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "package": "PCLT",
          "partial": "Static Raw PCLTs",
          "signature": "PCLT_InnerConfig-\u003et-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:getStaticRawPCLTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "mergeRawCatalogDataSets",
          "package": "PCLT",
          "signature": "Bool -\u003e [PCLT_RawCatalogData] -\u003e (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#mergeRawCatalogDataSets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "mergeRawCatalogDataSets",
          "normalized": "Bool-\u003e[PCLT_RawCatalogData]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "package": "PCLT",
          "partial": "Raw Catalog Data Sets",
          "signature": "Bool-\u003e[PCLT_RawCatalogData]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:mergeRawCatalogDataSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "mergeRawCatalogDataSets2",
          "package": "PCLT",
          "signature": "Bool -\u003e [(PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])] -\u003e (PCLT_RawCatalogData, [AddPCLT_toPCLT_Error])",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#mergeRawCatalogDataSets2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "mergeRawCatalogDataSets2",
          "normalized": "Bool-\u003e[(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "package": "PCLT",
          "partial": "Raw Catalog Data Sets",
          "signature": "Bool-\u003e[(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])]-\u003e(PCLT_RawCatalogData,[AddPCLT_toPCLT_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:mergeRawCatalogDataSets2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "widenessOfStaticRawPCLTsSet",
          "package": "PCLT",
          "signature": "t -\u003e RawPCLTsSetWideness",
          "source": "src/Text-PCLT-HasStaticRawPCLTs.html#widenessOfStaticRawPCLTsSet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PCLT HasStaticRawPCLTs",
          "module": "Text.PCLT.HasStaticRawPCLTs",
          "name": "widenessOfStaticRawPCLTsSet",
          "normalized": "a-\u003eRawPCLTsSetWideness",
          "package": "PCLT",
          "partial": "Of Static Raw PCLTs Set",
          "signature": "t-\u003eRawPCLTsSetWideness",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-HasStaticRawPCLTs.html#v:widenessOfStaticRawPCLTsSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "InitialDefaultCatalog",
          "package": "PCLT",
          "source": "src/Text-PCLT-InitialDefaultCatalog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PCLT InitialDefaultCatalog",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "InitialDefaultCatalog",
          "package": "PCLT",
          "partial": "Initial Default Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is a special instance of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e - it accumulates\n all other instances of \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e from the whole PCLT package\n\u003c/p\u003e",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "package": "PCLT",
          "source": "src/Text-PCLT-InitialDefaultCatalog.html#PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "type": "data"
        },
        "index": {
          "description": "This type is special instance of HasStaticRawPCLTs it accumulates all other instances of HasStaticRawPCLTs from the whole PCLT package",
          "hierarchy": "Text PCLT InitialDefaultCatalog",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "package": "PCLT",
          "partial": "PCLTRaw Catalog Text PCLT Initial Default Catalog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#t:PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "package": "PCLT",
          "signature": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "source": "src/Text-PCLT-InitialDefaultCatalog.html#PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT InitialDefaultCatalog",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog",
          "package": "PCLT",
          "partial": "PCLTRaw Catalog Text PCLT Initial Default Catalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:PCLTRawCatalog__Text_PCLT_InitialDefaultCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "initDefaultCatalog",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (PCLT_Catalog, CatalogFromHSRTInitErrors)",
          "source": "src/Text-PCLT-InitialDefaultCatalog.html#initDefaultCatalog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT InitialDefaultCatalog",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "initDefaultCatalog",
          "normalized": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
          "package": "PCLT",
          "partial": "Default Catalog",
          "signature": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(PCLT_Catalog,CatalogFromHSRTInitErrors)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:initDefaultCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "initDefaultCatalog_2",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
          "source": "src/Text-PCLT-InitialDefaultCatalog.html#initDefaultCatalog_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT InitialDefaultCatalog",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "initDefaultCatalog_2",
          "normalized": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "package": "PCLT",
          "partial": "Default Catalog",
          "signature": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:initDefaultCatalog_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "initDefaultCatalog_3",
          "package": "PCLT",
          "signature": "PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)",
          "source": "src/Text-PCLT-InitialDefaultCatalog.html#initDefaultCatalog_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT InitialDefaultCatalog",
          "module": "Text.PCLT.InitialDefaultCatalog",
          "name": "initDefaultCatalog_3",
          "normalized": "PCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "package": "PCLT",
          "partial": "Default Catalog",
          "signature": "PCLT_CatalogID-\u003e(StdErr_CLBS,ShowDetalizationLevel,LanguageName)-\u003e(PCLT_Catalog,StdErr_CLBS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-InitialDefaultCatalog.html#v:initDefaultCatalog_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module around comlex function \u003ccode\u003e\u003ca\u003e_readPCLTCatalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "MakeCatalog",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeCatalog.html",
          "type": "module"
        },
        "index": {
          "description": "module around comlex function readPCLTCatalog",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "MakeCatalog",
          "package": "PCLT",
          "partial": "Make Catalog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003eadhoc_str2ldt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "AHSTR2LngTpl_Error",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeCatalog.html#AHSTR2LngTpl_Error",
          "type": "data"
        },
        "index": {
          "description": "Error type for adhoc str2ldt",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "AHSTR2LngTpl_Error",
          "package": "PCLT",
          "partial": "AHSTR Lng Tpl Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:AHSTR2LngTpl_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003enormalizeReferentialSDLs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "DRL_NormalizationError",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeCatalog.html#DRL_NormalizationError",
          "type": "data"
        },
        "index": {
          "description": "Error type for normalizeReferentialSDLs",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "DRL_NormalizationError",
          "package": "PCLT",
          "partial": "DRL Normalization Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:DRL_NormalizationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "Parsed_DidWe",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeCatalog.html#Parsed_DidWe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "Parsed_DidWe",
          "package": "PCLT",
          "partial": "Parsed Did We",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:Parsed_DidWe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003e_readPCLTCatalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDescriptios for some value constructors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n For more information about this error see\n \u003ccode\u003e\u003ca\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDifferentSDLs_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n This may occur in case when some \u003ccode\u003e\u003ca\u003ePCLT_RawCatalogData\u003c/a\u003e\u003c/code\u003e is\n added to a nonempty \u003ccode\u003e\u003ca\u003ePCLT_Catalog\u003c/a\u003e\u003c/code\u003e, and same templates in both\n places has different SDL requirements.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTplUniquenessViol_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n This may occur in case when some \u003ccode\u003e\u003ca\u003ePCLT_RawCatalogData\u003c/a\u003e\u003c/code\u003e is\n added to a nonempty \u003ccode\u003e\u003ca\u003ePCLT_Catalog\u003c/a\u003e\u003c/code\u003e, and there isan intersection\n between their {(Template ID, Language)} sets.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSDL_ToCompositeLinkRefsToNonexistent_RPCSCE\u003c/a\u003e\u003c/code\u003e:\n SDL requirement specification\n (\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e) for a template is of type\n \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e and references to\n a template which is not persistant in catalog or raw input data.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "ReadPCSCatalogError",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "data"
        },
        "index": {
          "description": "Error type for readPCLTCatalog Descriptios for some value constructors DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault RPCSCE For more information about this error see StrictOrient ofParamsAndCmpsts onDfltLngTplsSets DifferentSDLs RPCSCE This may occur in case when some PCLT RawCatalogData is added to nonempty PCLT Catalog and same templates in both places has different SDL requirements TplUniquenessViol RPCSCE This may occur in case when some PCLT RawCatalogData is added to nonempty PCLT Catalog and there isan intersection between their Template ID Language sets SDL ToCompositeLinkRefsToNonexistent RPCSCE SDL requirement specification pcltRequiredSDL for template is of type PCLT SDL ToTemplateLink and references to template which is not persistant in catalog or raw input data",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "ReadPCSCatalogError",
          "package": "PCLT",
          "partial": "Read PCSCatalog Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#t:ReadPCSCatalogError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "CompositionCycle_RPCSCE",
          "package": "PCLT",
          "signature": "CompositionCycle_RPCSCE CompositionCycle_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "CompositionCycle_RPCSCE",
          "package": "PCLT",
          "partial": "Composition Cycle RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:CompositionCycle_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "DRL_NormalizationError_RPCSCE",
          "package": "PCLT",
          "signature": "DRL_NormalizationError_RPCSCE DRL_NormalizationError",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "DRL_NormalizationError_RPCSCE",
          "package": "PCLT",
          "partial": "DRL Normalization Error RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:DRL_NormalizationError_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE",
          "package": "PCLT",
          "signature": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE",
          "package": "PCLT",
          "partial": "Default Lng Tpl Components Params Sets Differs From Ones Of Nondefault RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:DefaultLngTplComponentsParamsSetsDiffersFromOnesOfNondefault_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "DifferentSDLs_RPCSCE",
          "package": "PCLT",
          "signature": "DifferentSDLs_RPCSCE DifferentSDLs_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "DifferentSDLs_RPCSCE",
          "package": "PCLT",
          "partial": "Different SDLs RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:DifferentSDLs_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "ParseFailedForDefaultLng_RPCSCE",
          "package": "PCLT",
          "signature": "ParseFailedForDefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe [PCLT_ParserLowLevelFailure]",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "ParseFailedForDefaultLng_RPCSCE",
          "normalized": "ParseFailedForDefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe[PCLT_ParserLowLevelFailure]",
          "package": "PCLT",
          "partial": "Parse Failed For Default Lng RPCSCE",
          "signature": "ParseFailedForDefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe[PCLT_ParserLowLevelFailure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:ParseFailedForDefaultLng_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "ParseFailedForNondefaultLng_RPCSCE",
          "package": "PCLT",
          "signature": "ParseFailedForNondefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe LanguageName [PCLT_ParserLowLevelFailure]",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "ParseFailedForNondefaultLng_RPCSCE",
          "normalized": "ParseFailedForNondefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe LanguageName[PCLT_ParserLowLevelFailure]",
          "package": "PCLT",
          "partial": "Parse Failed For Nondefault Lng RPCSCE",
          "signature": "ParseFailedForNondefaultLng_RPCSCE PCLT_CompositeKey Parsed_DidWe LanguageName[PCLT_ParserLowLevelFailure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:ParseFailedForNondefaultLng_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "ParseFailure_AHS2PE",
          "package": "PCLT",
          "signature": "ParseFailure_AHS2PE [PCLT_ParserLowLevelFailure]",
          "source": "src/Text-PCLT-MakeCatalog.html#AHSTR2LngTpl_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "ParseFailure_AHS2PE",
          "normalized": "ParseFailure_AHS PE[PCLT_ParserLowLevelFailure]",
          "package": "PCLT",
          "partial": "Parse Failure AHS PE",
          "signature": "ParseFailure_AHS PE[PCLT_ParserLowLevelFailure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:ParseFailure_AHS2PE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "RequiredCompositeIsMissing_AHS2PE",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_AHS2PE RequiredCompositeIsMissing_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#AHSTR2LngTpl_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "RequiredCompositeIsMissing_AHS2PE",
          "package": "PCLT",
          "partial": "Required Composite Is Missing AHS PE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:RequiredCompositeIsMissing_AHS2PE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "RequiredCompositeIsMissing_RPCSCE",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_RPCSCE RequiredByRequirerCompositeIsMissing_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "RequiredCompositeIsMissing_RPCSCE",
          "package": "PCLT",
          "partial": "Required Composite Is Missing RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:RequiredCompositeIsMissing_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "RequiredCompositeIsUnparsable_RPCSCE",
          "package": "PCLT",
          "signature": "RequiredCompositeIsUnparsable_RPCSCE RequirerCompositeKey RequiredCompositeKey",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "RequiredCompositeIsUnparsable_RPCSCE",
          "package": "PCLT",
          "partial": "Required Composite Is Unparsable RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:RequiredCompositeIsUnparsable_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE",
          "package": "PCLT",
          "signature": "SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE RequirerCompositeKey RequiredCompositeKey",
          "source": "src/Text-PCLT-MakeCatalog.html#DRL_NormalizationError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE",
          "package": "PCLT",
          "partial": "SDL Det Fail To Composite Link Refs To Nonexistent DRLNE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:SDL_DetFail_ToCompositeLinkRefsToNonexistent_DRLNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "SDL_ToCompositeLinkRefsToNonexistent_RPCSCE",
          "package": "PCLT",
          "signature": "SDL_ToCompositeLinkRefsToNonexistent_RPCSCE RequirerCompositeKey RequiredCompositeKey",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "SDL_ToCompositeLinkRefsToNonexistent_RPCSCE",
          "package": "PCLT",
          "partial": "SDL To Composite Link Refs To Nonexistent RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:SDL_ToCompositeLinkRefsToNonexistent_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "SDL_ToCompositeLinksCycle_DRLNE",
          "package": "PCLT",
          "signature": "SDL_ToCompositeLinksCycle_DRLNE [PCLT_CompositeKey]",
          "source": "src/Text-PCLT-MakeCatalog.html#DRL_NormalizationError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "SDL_ToCompositeLinksCycle_DRLNE",
          "normalized": "SDL_ToCompositeLinksCycle_DRLNE[PCLT_CompositeKey]",
          "package": "PCLT",
          "partial": "SDL To Composite Links Cycle DRLNE",
          "signature": "SDL_ToCompositeLinksCycle_DRLNE[PCLT_CompositeKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:SDL_ToCompositeLinksCycle_DRLNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "TplDefaultLngIsMissing_RPCSCE",
          "package": "PCLT",
          "signature": "TplDefaultLngIsMissing_RPCSCE TplDefaultLngIsMissing_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "TplDefaultLngIsMissing_RPCSCE",
          "package": "PCLT",
          "partial": "Tpl Default Lng Is Missing RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:TplDefaultLngIsMissing_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeCatalog",
          "name": "TplUniquenessViol_RPCSCE",
          "package": "PCLT",
          "signature": "TplUniquenessViol_RPCSCE TplUniquenessViol_PCLTE",
          "source": "src/Text-PCLT-MakeCatalog.html#ReadPCSCatalogError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "TplUniquenessViol_RPCSCE",
          "package": "PCLT",
          "partial": "Tpl Uniqueness Viol RPCSCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:TplUniquenessViol_RPCSCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a bunch of raw templates, parse them into normal templates and add\n them to a catalog.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "_readPCLTCatalog",
          "package": "PCLT",
          "signature": "(PCLT_Catalog, [ReadPCSCatalogError]) -\u003e PCLT_RawCatalogData -\u003e (PCLT_Catalog, [ErrorWithPCSCatalog ReadPCSCatalogError])",
          "source": "src/Text-PCLT-MakeCatalog.html#_readPCLTCatalog",
          "type": "function"
        },
        "index": {
          "description": "Take bunch of raw templates parse them into normal templates and add them to catalog",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "_readPCLTCatalog",
          "normalized": "(PCLT_Catalog,[ReadPCSCatalogError])-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])",
          "package": "PCLT",
          "partial": "PCLTCatalog",
          "signature": "(PCLT_Catalog,[ReadPCSCatalogError])-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:_readPCLTCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eLocalizedTemplate\u003c/a\u003e\u003c/code\u003e\n out of a single \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "adhoc_str2ldt",
          "package": "PCLT",
          "signature": "(ByteString, LanguageName) -\u003e PCLT_Catalog -\u003e Either AHSTR2LngTpl_Error LocalizedTemplate",
          "source": "src/Text-PCLT-MakeCatalog.html#adhoc_str2ldt",
          "type": "function"
        },
        "index": {
          "description": "Make LocalizedTemplate out of single ByteString",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "adhoc_str2ldt",
          "normalized": "(ByteString,LanguageName)-\u003ePCLT_Catalog-\u003eEither AHSTR LngTpl_Error LocalizedTemplate",
          "package": "PCLT",
          "signature": "(ByteString,LanguageName)-\u003ePCLT_Catalog-\u003eEither AHSTR LngTpl_Error LocalizedTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:adhoc_str2ldt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnder \"Referential SDLs normalization\" here is understood the following.\n Now consider paths like:\n\u003c/p\u003e\u003cpre\u003e Tpl_1.\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e -\u003e Tpl_2.\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003ewhich means \u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eTpl_1\u003c/code\u003e is specified (using\n \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e) to be the same as for \u003ccode\u003eTpl_2\u003c/code\u003e. Here we can\n reduce the \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003eTpl_1\u003c/code\u003e by assinging instead of it\n \u003ccode\u003eTpl_2.\u003c/code\u003e\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e value. Data consistency is respected. We win in\n speed of \u003ccode\u003eTpl_1.\u003c/code\u003e\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e determination. The negative side of this,\n is that we can't change \u003ccode\u003eTpl_2.\u003c/code\u003e\u003ccode\u003e\u003ca\u003epcltRequiredSDL\u003c/a\u003e\u003c/code\u003e anymore without spoiling\n data consistency. That's another reason why a PCLT catalog is so hard to\n modify. Perhaps the problem will be solved in future versions of PCLT.\n\u003c/p\u003e\u003cp\u003eSo this function reduces all \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003es in a given\n \u003ccode\u003e\u003ca\u003ePCLT_CatalogMap\u003c/a\u003e\u003c/code\u003e, BUT, only where they lead to \u003ccode\u003e\u003ca\u003ePCLT_SDL\u003c/a\u003e\u003c/code\u003es or\n to other \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003es (which recursively gets considered\n to be reduced), not when it leads to \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003ePCLT_SDL_Errornous\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "normalizeReferentialSDLs",
          "package": "PCLT",
          "signature": "PCLT_CatalogMap -\u003e (PCLT_CatalogMap, [DRL_NormalizationError])",
          "source": "src/Text-PCLT-MakeCatalog.html#normalizeReferentialSDLs",
          "type": "function"
        },
        "index": {
          "description": "Under Referential SDLs normalization here is understood the following Now consider paths like Tpl pcltRequiredSDL Tpl pcltRequiredSDL which means pcltRequiredSDL of Tpl is specified using PCLT SDL ToTemplateLink to be the same as for Tpl Here we can reduce the PCLT SDL ToTemplateLink of Tpl by assinging instead of it Tpl pcltRequiredSDL value Data consistency is respected We win in speed of Tpl pcltRequiredSDL determination The negative side of this is that we can change Tpl pcltRequiredSDL anymore without spoiling data consistency That another reason why PCLT catalog is so hard to modify Perhaps the problem will be solved in future versions of PCLT So this function reduces all PCLT SDL ToTemplateLink in given PCLT CatalogMap BUT only where they lead to PCLT SDL or to other PCLT SDL ToTemplateLink which recursively gets considered to be reduced not when it leads to PCLT SDL ToParamCompositeLink or PCLT SDL Errornous",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "normalizeReferentialSDLs",
          "normalized": "PCLT_CatalogMap-\u003e(PCLT_CatalogMap,[DRL_NormalizationError])",
          "package": "PCLT",
          "partial": "Referential SDLs",
          "signature": "PCLT_CatalogMap-\u003e(PCLT_CatalogMap,[DRL_NormalizationError])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:normalizeReferentialSDLs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003e_readPCLTCatalog\u003c/a\u003e\u003c/code\u003e. To be used when starting with an empty catalog.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "readPCLTCatalog",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig -\u003e PCLT_CatalogID -\u003e PCLT_RawCatalogData -\u003e (PCLT_Catalog, [ErrorWithPCSCatalog ReadPCSCatalogError])",
          "source": "src/Text-PCLT-MakeCatalog.html#readPCLTCatalog",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around readPCLTCatalog To be used when starting with an empty catalog",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "readPCLTCatalog",
          "normalized": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])",
          "package": "PCLT",
          "partial": "PCLTCatalog",
          "signature": "PCLT_InnerConfig-\u003ePCLT_CatalogID-\u003ePCLT_RawCatalogData-\u003e(PCLT_Catalog,[ErrorWithPCSCatalog ReadPCSCatalogError])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:readPCLTCatalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eLocalizableTemplate\u003c/a\u003e\u003c/code\u003e\n out of a single \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "str2pclt",
          "package": "PCLT",
          "signature": "(PCLT_ID, PCLT_AllocatedShowDetalizationLevel) -\u003e (LanguageName, ByteString) -\u003e PCLT_Catalog -\u003e Either (ErrorWithPCSCatalog ReadPCSCatalogError) LocalizableTemplate",
          "source": "src/Text-PCLT-MakeCatalog.html#str2pclt",
          "type": "function"
        },
        "index": {
          "description": "Make LocalizableTemplate out of single ByteString",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "str2pclt",
          "normalized": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003e(LanguageName,ByteString)-\u003ePCLT_Catalog-\u003eEither(ErrorWithPCSCatalog ReadPCSCatalogError)LocalizableTemplate",
          "package": "PCLT",
          "signature": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003e(LanguageName,ByteString)-\u003ePCLT_Catalog-\u003eEither(ErrorWithPCSCatalog ReadPCSCatalogError)LocalizableTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:str2pclt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003eLocalizableTemplate\u003c/a\u003e\u003c/code\u003e out of list\n of \u003ccode\u003eByteString\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeCatalog",
          "name": "str_list2pclt",
          "package": "PCLT",
          "signature": "(PCLT_ID, PCLT_AllocatedShowDetalizationLevel) -\u003e Map LanguageName ByteString -\u003e PCLT_Catalog -\u003e (LocalizableTemplate, [ErrorWithPCSCatalog ReadPCSCatalogError])",
          "source": "src/Text-PCLT-MakeCatalog.html#str_list2pclt",
          "type": "function"
        },
        "index": {
          "description": "Make LocalizableTemplate out of list of ByteString",
          "hierarchy": "Text PCLT MakeCatalog",
          "module": "Text.PCLT.MakeCatalog",
          "name": "str_list2pclt",
          "normalized": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003eMap LanguageName ByteString-\u003ePCLT_Catalog-\u003e(LocalizableTemplate,[ErrorWithPCSCatalog ReadPCSCatalogError])",
          "package": "PCLT",
          "signature": "(PCLT_ID,PCLT_AllocatedShowDetalizationLevel)-\u003eMap LanguageName ByteString-\u003ePCLT_Catalog-\u003e(LocalizableTemplate,[ErrorWithPCSCatalog ReadPCSCatalogError])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeCatalog.html#v:str_list2pclt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule around \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e function, which generates a message out of \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePCLT_Catalog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "MakeMessage",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html",
          "type": "module"
        },
        "index": {
          "description": "Module around pcsi2text function which generates message out of PCSI and PCLT Catalog",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "MakeMessage",
          "package": "PCLT",
          "partial": "Make Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "ForInstaniationUsedChunkLength",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html#ForInstaniationUsedChunkLength",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ForInstaniationUsedChunkLength",
          "package": "PCLT",
          "partial": "For Instaniation Used Chunk Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:ForInstaniationUsedChunkLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "PCSI2Text_Error",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "data"
        },
        "index": {
          "description": "Error type for pcsi2text",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "PCSI2Text_Error",
          "package": "PCLT",
          "partial": "PCSI Text Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:PCSI2Text_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003ePCSI2Text_Error\u003c/a\u003e\u003c/code\u003e. Stripping arguments.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "PCSI2Text_Error_Type",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "data"
        },
        "index": {
          "description": "Type of PCSI2Text Error Stripping arguments",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "PCSI2Text_Error_Type",
          "package": "PCLT",
          "partial": "PCSI Text Error Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:PCSI2Text_Error_Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type for \u003ccode\u003e\u003ca\u003egivenSDL_statisfies\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "data"
        },
        "index": {
          "description": "Error type for givenSDL statisfies",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure",
          "package": "PCLT",
          "partial": "SDL Determination Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:SDL_DeterminationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eSDL_DeterminationFailure\u003c/a\u003e\u003c/code\u003e. Stripping arguments.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure_Type",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "data"
        },
        "index": {
          "description": "Type of SDL DeterminationFailure Stripping arguments",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure_Type",
          "package": "PCLT",
          "partial": "SDL Determination Failure Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:SDL_DeterminationFailure_Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "SpaceAvailableForPCSIInstaniation",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage.html#SpaceAvailableForPCSIInstaniation",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SpaceAvailableForPCSIInstaniation",
          "package": "PCLT",
          "partial": "Space Available For PCSIInstaniation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#t:SpaceAvailableForPCSIInstaniation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "CompositionCycle_P2TE",
          "package": "PCLT",
          "signature": "CompositionCycle_P2TE CompositionCycle_PCLTE",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "CompositionCycle_P2TE",
          "package": "PCLT",
          "partial": "Composition Cycle TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:CompositionCycle_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "CompositionCycle_P2TET",
          "package": "PCLT",
          "signature": "CompositionCycle_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "CompositionCycle_P2TET",
          "package": "PCLT",
          "partial": "Composition Cycle TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:CompositionCycle_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "ErrornousSDL_SDLDF",
          "package": "PCLT",
          "signature": "ErrornousSDL_SDLDF PCLT_CompositeKey PCLT_ErrornousSDL",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ErrornousSDL_SDLDF",
          "package": "PCLT",
          "partial": "Errornous SDL SDLDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ErrornousSDL_SDLDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "ErrornousSDL_SDLDFT",
          "package": "PCLT",
          "signature": "ErrornousSDL_SDLDFT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ErrornousSDL_SDLDFT",
          "package": "PCLT",
          "partial": "Errornous SDL SDLDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ErrornousSDL_SDLDFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo more free space in resulting \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "InstaniationLengthMaxReached_P2TE",
          "package": "PCLT",
          "signature": "InstaniationLengthMaxReached_P2TE PCLT_ID LanguageName ForInstaniationUsedChunkLength",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "description": "No more free space in resulting CLBS",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "InstaniationLengthMaxReached_P2TE",
          "package": "PCLT",
          "partial": "Instaniation Length Max Reached TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:InstaniationLengthMaxReached_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "InstaniationLengthMaxReached_P2TET",
          "package": "PCLT",
          "signature": "InstaniationLengthMaxReached_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "InstaniationLengthMaxReached_P2TET",
          "package": "PCLT",
          "partial": "Instaniation Length Max Reached TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:InstaniationLengthMaxReached_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SDL of template is specified\n (using \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e) to be the same as is\n one of a template, that must have been put\n under a parameter (using \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e), but referenced parameter\n is missing in given \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "MissingParam_SDLByParamCompositeLink_SDLDF",
          "package": "PCLT",
          "signature": "MissingParam_SDLByParamCompositeLink_SDLDF PCLT_CompositeKey PCLT_ParamKey",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "function"
        },
        "index": {
          "description": "The SDL of template is specified using PCLT SDL ToParamCompositeLink to be the same as is one of template that must have been put under parameter using PCSI PV but referenced parameter is missing in given PCSI",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "MissingParam_SDLByParamCompositeLink_SDLDF",
          "package": "PCLT",
          "partial": "Missing Param SDLBy Param Composite Link SDLDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:MissingParam_SDLByParamCompositeLink_SDLDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "MissingParam_SDLByParamCompositeLink_SDLDFT",
          "package": "PCLT",
          "signature": "MissingParam_SDLByParamCompositeLink_SDLDFT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "MissingParam_SDLByParamCompositeLink_SDLDFT",
          "package": "PCLT",
          "partial": "Missing Param SDLBy Param Composite Link SDLDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:MissingParam_SDLByParamCompositeLink_SDLDFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "NoValueForParameter_P2TE",
          "package": "PCLT",
          "signature": "NoValueForParameter_P2TE PCLT_ID LanguageName PCLT_ParamKey",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "NoValueForParameter_P2TE",
          "package": "PCLT",
          "partial": "No Value For Parameter TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:NoValueForParameter_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "NoValueForParameter_P2TET",
          "package": "PCLT",
          "signature": "NoValueForParameter_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "NoValueForParameter_P2TET",
          "package": "PCLT",
          "partial": "No Value For Parameter TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:NoValueForParameter_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot used, reserved for future versions.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingDepthMaxReached_P2TE",
          "package": "PCLT",
          "signature": "ReparsingDepthMaxReached_P2TE PCLT_ID LanguageName PCLT_ParamKey ReparsingDepth",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "description": "Not used reserved for future versions",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingDepthMaxReached_P2TE",
          "package": "PCLT",
          "partial": "Reparsing Depth Max Reached TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingDepthMaxReached_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingDepthMaxReached_P2TET",
          "package": "PCLT",
          "signature": "ReparsingDepthMaxReached_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingDepthMaxReached_P2TET",
          "package": "PCLT",
          "partial": "Reparsing Depth Max Reached TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingDepthMaxReached_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot used, reserved for future versions.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingLengthMaxReached_P2TE",
          "package": "PCLT",
          "signature": "ReparsingLengthMaxReached_P2TE PCLT_ID LanguageName PCLT_ParamKey ForInstaniationUsedChunkLength",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "description": "Not used reserved for future versions",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingLengthMaxReached_P2TE",
          "package": "PCLT",
          "partial": "Reparsing Length Max Reached TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingLengthMaxReached_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingLengthMaxReached_P2TET",
          "package": "PCLT",
          "signature": "ReparsingLengthMaxReached_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "ReparsingLengthMaxReached_P2TET",
          "package": "PCLT",
          "partial": "Reparsing Length Max Reached TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:ReparsingLengthMaxReached_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_P2TE",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_P2TE RequiredByRequirerCompositeIsMissing_PCLTE",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_P2TE",
          "package": "PCLT",
          "partial": "Required Composite Is Missing TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_P2TET",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_P2TET",
          "package": "PCLT",
          "partial": "Required Composite Is Missing TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_SDLDF",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_SDLDF RequiredByRequirerCompositeIsMissing_PCLTE",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_SDLDF",
          "package": "PCLT",
          "partial": "Required Composite Is Missing SDLDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_SDLDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_SDLDFT",
          "package": "PCLT",
          "signature": "RequiredCompositeIsMissing_SDLDFT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeIsMissing_SDLDFT",
          "package": "PCLT",
          "partial": "Required Composite Is Missing SDLDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeIsMissing_SDLDFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeLoclizationIsMissing_P2TE",
          "package": "PCLT",
          "signature": "RequiredCompositeLoclizationIsMissing_P2TE RequiredByRequirerCompositeIsMissing_PCLTE LanguageName",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeLoclizationIsMissing_P2TE",
          "package": "PCLT",
          "partial": "Required Composite Loclization Is Missing TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeLoclizationIsMissing_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeLoclizationIsMissing_P2TET",
          "package": "PCLT",
          "signature": "RequiredCompositeLoclizationIsMissing_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "RequiredCompositeLoclizationIsMissing_P2TET",
          "package": "PCLT",
          "partial": "Required Composite Loclization Is Missing TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:RequiredCompositeLoclizationIsMissing_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "SDLReferentialCycle_SDLDF",
          "package": "PCLT",
          "signature": "SDLReferentialCycle_SDLDF PCLT_CompositeKey [PCLT_ID]",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDLReferentialCycle_SDLDF",
          "normalized": "SDLReferentialCycle_SDLDF PCLT_CompositeKey[PCLT_ID]",
          "package": "PCLT",
          "partial": "SDLReferential Cycle SDLDF",
          "signature": "SDLReferentialCycle_SDLDF PCLT_CompositeKey[PCLT_ID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDLReferentialCycle_SDLDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "SDLReferentialCycle_SDLDFT",
          "package": "PCLT",
          "signature": "SDLReferentialCycle_SDLDFT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDLReferentialCycle_SDLDFT",
          "package": "PCLT",
          "partial": "SDLReferential Cycle SDLDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDLReferentialCycle_SDLDFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure_P2TE",
          "package": "PCLT",
          "signature": "SDL_DeterminationFailure_P2TE PCLT_ID SDL_DeterminationFailure",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure_P2TE",
          "package": "PCLT",
          "partial": "SDL Determination Failure TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDL_DeterminationFailure_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure_P2TET",
          "package": "PCLT",
          "signature": "SDL_DeterminationFailure_P2TET SDL_DeterminationFailure_Type",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "SDL_DeterminationFailure_P2TET",
          "package": "PCLT",
          "partial": "SDL Determination Failure TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:SDL_DeterminationFailure_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot used, reserved for future versions.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnderAccordingParamReparsingFailure_P2TE",
          "package": "PCLT",
          "signature": "UnderAccordingParamReparsingFailure_P2TE PCLT_ID LanguageName PCLT_ParamKey ReadPCSCatalogError",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "description": "Not used reserved for future versions",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnderAccordingParamReparsingFailure_P2TE",
          "package": "PCLT",
          "partial": "Under According Param Reparsing Failure TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnderAccordingParamReparsingFailure_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "UnderAccordingParamReparsingFailure_P2TET",
          "package": "PCLT",
          "signature": "UnderAccordingParamReparsingFailure_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnderAccordingParamReparsingFailure_P2TET",
          "package": "PCLT",
          "partial": "Under According Param Reparsing Failure TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnderAccordingParamReparsingFailure_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SDL of template is specified\n (using \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e) to be the same as is\n one of a template, that must have been put\n under a parameter (using \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e), but the \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e under this\n parameter references some unknown (to catalog) template.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnknownComposite_SDLByParamCompositeLink_SDLDF",
          "package": "PCLT",
          "signature": "UnknownComposite_SDLByParamCompositeLink_SDLDF PCLT_CompositeKey PCLT_ParamKey PCLT_CompositeKey",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "function"
        },
        "index": {
          "description": "The SDL of template is specified using PCLT SDL ToParamCompositeLink to be the same as is one of template that must have been put under parameter using PCSI PV but the PCSI under this parameter references some unknown to catalog template",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnknownComposite_SDLByParamCompositeLink_SDLDF",
          "package": "PCLT",
          "partial": "Unknown Composite SDLBy Param Composite Link SDLDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnknownComposite_SDLByParamCompositeLink_SDLDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "UnknownComposite_SDLByParamCompositeLink_SDLDFT",
          "package": "PCLT",
          "signature": "UnknownComposite_SDLByParamCompositeLink_SDLDFT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnknownComposite_SDLByParamCompositeLink_SDLDFT",
          "package": "PCLT",
          "partial": "Unknown Composite SDLBy Param Composite Link SDLDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnknownComposite_SDLByParamCompositeLink_SDLDFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error is possible only if program is wrong.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnsupportedMarker_P2TE",
          "package": "PCLT",
          "signature": "UnsupportedMarker_P2TE SeparatedSectorMarker ByteString PCLT_ID LanguageName",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "description": "This error is possible only if program is wrong",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnsupportedMarker_P2TE",
          "package": "PCLT",
          "partial": "Unsupported Marker TE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnsupportedMarker_P2TE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "UnsupportedMarker_P2TET",
          "package": "PCLT",
          "signature": "UnsupportedMarker_P2TET",
          "source": "src/Text-PCLT-MakeMessage.html#PCSI2Text_Error_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "UnsupportedMarker_P2TET",
          "package": "PCLT",
          "partial": "Unsupported Marker TET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:UnsupportedMarker_P2TET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SDL of template is specified\n (using \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e) to be the same as is\n one of a template, that must have been put\n under a parameter (using \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e), but referenced parameter\n value is constructed using not \u003ccode\u003e\u003ca\u003ePCSI_PV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "WrongParamType_SDLByParamCompositeLink_SDLDF",
          "package": "PCLT",
          "signature": "WrongParamType_SDLByParamCompositeLink_SDLDF PCLT_CompositeKey PCLT_ParamKey",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure",
          "type": "function"
        },
        "index": {
          "description": "The SDL of template is specified using PCLT SDL ToParamCompositeLink to be the same as is one of template that must have been put under parameter using PCSI PV but referenced parameter value is constructed using not PCSI PV",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "WrongParamType_SDLByParamCompositeLink_SDLDF",
          "package": "PCLT",
          "partial": "Wrong Param Type SDLBy Param Composite Link SDLDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:WrongParamType_SDLByParamCompositeLink_SDLDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "WrongParamType_SDLByParamCompositeLink_SDLDFT",
          "package": "PCLT",
          "signature": "WrongParamType_SDLByParamCompositeLink_SDLDFT",
          "source": "src/Text-PCLT-MakeMessage.html#SDL_DeterminationFailure_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "WrongParamType_SDLByParamCompositeLink_SDLDFT",
          "package": "PCLT",
          "partial": "Wrong Param Type SDLBy Param Composite Link SDLDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:WrongParamType_SDLByParamCompositeLink_SDLDFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA test, if a given reciever's detalization level is enough\n to represent a given \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "givenSDL_statisfies",
          "package": "PCLT",
          "signature": "ShowDetalizationLevel -\u003e PCSI -\u003e PCLT_ShowDetalizationLevel -\u003e PCLT_CatalogMap -\u003e Either SDL_DeterminationFailure Bool",
          "source": "src/Text-PCLT-MakeMessage.html#givenSDL_statisfies",
          "type": "function"
        },
        "index": {
          "description": "test if given reciever detalization level is enough to represent given PCSI",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "givenSDL_statisfies",
          "normalized": "ShowDetalizationLevel-\u003ePCSI-\u003ePCLT_ShowDetalizationLevel-\u003ePCLT_CatalogMap-\u003eEither SDL_DeterminationFailure Bool",
          "package": "PCLT",
          "partial": "SDL",
          "signature": "ShowDetalizationLevel-\u003ePCSI-\u003ePCLT_ShowDetalizationLevel-\u003ePCLT_CatalogMap-\u003eEither SDL_DeterminationFailure Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:givenSDL_statisfies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhenever representation generator can't make representation\n for a template due to some error, it puts there (instead of representation)\n an error marking (\u003ccode\u003e\u003ca\u003epcsMarkingErrorPlaceholderWrapper\u003c/a\u003e\u003c/code\u003e) with an abbreviation (see \u003ccode\u003e\u003ca\u003eshortOf_PCSI2Text_Error\u003c/a\u003e\u003c/code\u003e)\n of error type and template ID.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "includeAsAnError",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig -\u003e PCSI2Text_Error -\u003e String -\u003e (ByteString, ForInstaniationUsedChunkLength)",
          "source": "src/Text-PCLT-MakeMessage.html#includeAsAnError",
          "type": "function"
        },
        "index": {
          "description": "Whenever representation generator can make representation for template due to some error it puts there instead of representation an error marking pcsMarkingErrorPlaceholderWrapper with an abbreviation see shortOf PCSI2Text Error of error type and template ID",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "includeAsAnError",
          "normalized": "PCLT_InnerConfig-\u003ePCSI Text_Error-\u003eString-\u003e(ByteString,ForInstaniationUsedChunkLength)",
          "package": "PCLT",
          "partial": "As An Error",
          "signature": "PCLT_InnerConfig-\u003ePCSI Text_Error-\u003eString-\u003e(ByteString,ForInstaniationUsedChunkLength)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:includeAsAnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "p2teType",
          "package": "PCLT",
          "signature": "PCSI2Text_Error -\u003e PCSI2Text_Error_Type",
          "source": "src/Text-PCLT-MakeMessage.html#p2teType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "p2teType",
          "normalized": "PCSI Text_Error-\u003ePCSI Text_Error_Type",
          "package": "PCLT",
          "partial": "Type",
          "signature": "PCSI Text_Error-\u003ePCSI Text_Error_Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:p2teType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e for cases, when new \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e for output\n is to be created. It's maximal length is set to be same\n as configured in parameter \u003ccode\u003e\u003ca\u003epcsInstaniationResultMaxSize\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "pcsi2new_text",
          "package": "PCLT",
          "signature": "PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, [ErrorWithPCSCatalog PCSI2Text_Error])",
          "source": "src/Text-PCLT-MakeMessage.html#pcsi2new_text",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around pcsi2text for cases when new CLBS for output is to be created It maximal length is set to be same as configured in parameter pcsInstaniationResultMaxSize",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "pcsi2new_text",
          "normalized": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])",
          "package": "PCLT",
          "signature": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:pcsi2new_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a representation out of \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003e in specified detailization level,\n in specified language, using specified catalog. And append result\n to a specified \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "pcsi2text",
          "package": "PCLT",
          "signature": "StdOut_CLBS -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, [ErrorWithPCSCatalog PCSI2Text_Error])",
          "source": "src/Text-PCLT-MakeMessage.html#pcsi2text",
          "type": "function"
        },
        "index": {
          "description": "Make representation out of PCSI in specified detailization level in specified language using specified catalog And append result to specified CLBS",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "pcsi2text",
          "normalized": "StdOut_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])",
          "package": "PCLT",
          "signature": "StdOut_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,[ErrorWithPCSCatalog PCSI Text_Error])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:pcsi2text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.MakeMessage",
          "name": "sdldfType",
          "package": "PCLT",
          "signature": "SDL_DeterminationFailure -\u003e SDL_DeterminationFailure_Type",
          "source": "src/Text-PCLT-MakeMessage.html#sdldfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "sdldfType",
          "normalized": "SDL_DeterminationFailure-\u003eSDL_DeterminationFailure_Type",
          "package": "PCLT",
          "partial": "Type",
          "signature": "SDL_DeterminationFailure-\u003eSDL_DeterminationFailure_Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:sdldfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate representation generation errors types abbreviations:\n\u003c/p\u003e\u003cpre\u003e       RequiredCompositeIsMissing_P2TET            -\u003e \"CM\"\n       RequiredCompositeLoclizationIsMissing_P2TET -\u003e \"CLM\"\n       CompositionCycle_P2TET                      -\u003e \"CC\"\n       SDL_DeterminationFailure_P2TET       sdldft -\u003e \"SF\" ++\n           case sdldft of\n               RequiredCompositeIsMissing_SDLDFT               -\u003e \"(CM)\"\n               MissingParam_SDLByParamCompositeLink_SDLDFT     -\u003e \"(LMP)\"\n               WrongParamType_SDLByParamCompositeLink_SDLDFT   -\u003e \"(LWPT)\"\n               UnknownComposite_SDLByParamCompositeLink_SDLDFT -\u003e \"(LUC)\"\n               SDLReferentialCycle_SDLDFT                      -\u003e \"(CC)\"\n               ErrornousSDL_SDLDFT                             -\u003e \"(ES)\"\n       UnsupportedMarker_P2TET                     -\u003e \"UM\"\n       NoValueForParameter_P2TET                   -\u003e \"NV\"\n       UnderAccordingParamReparsingFailure_P2TET   -\u003e \"RF\"\n       ReparsingDepthMaxReached_P2TET              -\u003e \"RDM\"\n       ReparsingLengthMaxReached_P2TET             -\u003e \"RLM\"\n       InstaniationLengthMaxReached_P2TET          -\u003e \"ILM\"\n\u003c/pre\u003e",
          "module": "Text.PCLT.MakeMessage",
          "name": "shortOf_PCSI2Text_Error",
          "package": "PCLT",
          "signature": "PCSI2Text_Error -\u003e ByteString",
          "source": "src/Text-PCLT-MakeMessage.html#shortOf_PCSI2Text_Error",
          "type": "function"
        },
        "index": {
          "description": "Template representation generation errors types abbreviations RequiredCompositeIsMissing P2TET CM RequiredCompositeLoclizationIsMissing P2TET CLM CompositionCycle P2TET CC SDL DeterminationFailure P2TET sdldft SF case sdldft of RequiredCompositeIsMissing SDLDFT CM MissingParam SDLByParamCompositeLink SDLDFT LMP WrongParamType SDLByParamCompositeLink SDLDFT LWPT UnknownComposite SDLByParamCompositeLink SDLDFT LUC SDLReferentialCycle SDLDFT CC ErrornousSDL SDLDFT ES UnsupportedMarker P2TET UM NoValueForParameter P2TET NV UnderAccordingParamReparsingFailure P2TET RF ReparsingDepthMaxReached P2TET RDM ReparsingLengthMaxReached P2TET RLM InstaniationLengthMaxReached P2TET ILM",
          "hierarchy": "Text PCLT MakeMessage",
          "module": "Text.PCLT.MakeMessage",
          "name": "shortOf_PCSI2Text_Error",
          "normalized": "PCSI Text_Error-\u003eByteString",
          "package": "PCLT",
          "partial": "Of PCSI Text Error",
          "signature": "PCSI Text_Error-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage.html#v:shortOf_PCSI2Text_Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAddition to \u003ca\u003eText.PCLT.MakeMessage\u003c/a\u003e module. Some wrappers around \u003ccode\u003e\u003ca\u003epcsi2text\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.MakeMessage2",
          "name": "MakeMessage2",
          "package": "PCLT",
          "source": "src/Text-PCLT-MakeMessage2.html",
          "type": "module"
        },
        "index": {
          "description": "Addition to Text.PCLT.MakeMessage module Some wrappers around pcsi2text function",
          "hierarchy": "Text PCLT MakeMessage2",
          "module": "Text.PCLT.MakeMessage2",
          "name": "MakeMessage2",
          "package": "PCLT",
          "partial": "Make Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003epcsi2text_plus_errs_1\u003c/a\u003e\u003c/code\u003e for cases, when new \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003e\n is to be created. It's maximal length is set to be same\n as configured in parameter \u003ccode\u003e\u003ca\u003epcsInstaniationResultMaxSize\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2new_text_plus_errs_1",
          "package": "PCLT",
          "signature": "PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e StdOutAndErr_CLBS",
          "source": "src/Text-PCLT-MakeMessage2.html#pcsi2new_text_plus_errs_1",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around pcsi2text plus errs for cases when new CLBS is to be created It maximal length is set to be same as configured in parameter pcsInstaniationResultMaxSize",
          "hierarchy": "Text PCLT MakeMessage2",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2new_text_plus_errs_1",
          "normalized": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS",
          "package": "PCLT",
          "signature": "PCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2new_text_plus_errs_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003epcsi2text_plus_errs_2\u003c/a\u003e\u003c/code\u003e for cases, when new \u003ccode\u003e\u003ca\u003eCLBS\u003c/a\u003e\u003c/code\u003es\n are to be created:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e One - for representation of normal output. It's maximal length is set\n to be same as configured in parameter \u003ccode\u003e\u003ca\u003epcsInstaniationResultMaxSize\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Another - for representation of errors. It's maximal size is specified\n in the first argument of function.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2new_text_plus_errs_2",
          "package": "PCLT",
          "signature": "Int64 -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, StdErr_CLBS)",
          "source": "src/Text-PCLT-MakeMessage2.html#pcsi2new_text_plus_errs_2",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around pcsi2text plus errs for cases when new CLBS are to be created One for representation of normal output It maximal length is set to be same as configured in parameter pcsInstaniationResultMaxSize Another for representation of errors It maximal size is specified in the first argument of function",
          "hierarchy": "Text PCLT MakeMessage2",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2new_text_plus_errs_2",
          "normalized": "Int-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)",
          "package": "PCLT",
          "signature": "Int-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2new_text_plus_errs_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e generates message from given PCSI\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (1))\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (2))\n\u003c/li\u003e\u003cli\u003e appends text result of step (3) to given CLBS\n\u003c/li\u003e\u003cli\u003e appends text result of step (2) to given CLBS\n\u003c/li\u003e\u003cli\u003e appends text result of step (1) to given CLBS\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2text_plus_errs_1",
          "package": "PCLT",
          "signature": "StdOutAndErr_CLBS -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e StdOutAndErr_CLBS",
          "source": "src/Text-PCLT-MakeMessage2.html#pcsi2text_plus_errs_1",
          "type": "function"
        },
        "index": {
          "description": "generates message from given PCSI generates representation of errors list that occurred when doing step generates representation of errors list that occurred when doing step appends text result of step to given CLBS appends text result of step to given CLBS appends text result of step to given CLBS",
          "hierarchy": "Text PCLT MakeMessage2",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2text_plus_errs_1",
          "normalized": "StdOutAndErr_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS",
          "package": "PCLT",
          "signature": "StdOutAndErr_CLBS-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003eStdOutAndErr_CLBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2text_plus_errs_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e generates message from given PCSI\n\u003c/li\u003e\u003cli\u003e appends text result of step (1) to given CLBS_1\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (1))\n\u003c/li\u003e\u003cli\u003e generates representation of errors list (that occurred, when doing step (3))\n\u003c/li\u003e\u003cli\u003e appends text result of step (4) to given CLBS_2\n\u003c/li\u003e\u003cli\u003e appends text result of step (3) to given CLBS_2\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2text_plus_errs_2",
          "package": "PCLT",
          "signature": "(StdOut_CLBS, StdErr_CLBS) -\u003e PCSI -\u003e (ShowDetalizationLevel, LanguageName) -\u003e PCLT_Catalog -\u003e (StdOut_CLBS, StdErr_CLBS)",
          "source": "src/Text-PCLT-MakeMessage2.html#pcsi2text_plus_errs_2",
          "type": "function"
        },
        "index": {
          "description": "generates message from given PCSI appends text result of step to given CLBS generates representation of errors list that occurred when doing step generates representation of errors list that occurred when doing step appends text result of step to given CLBS appends text result of step to given CLBS",
          "hierarchy": "Text PCLT MakeMessage2",
          "module": "Text.PCLT.MakeMessage2",
          "name": "pcsi2text_plus_errs_2",
          "normalized": "(StdOut_CLBS,StdErr_CLBS)-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)",
          "package": "PCLT",
          "signature": "(StdOut_CLBS,StdErr_CLBS)-\u003ePCSI-\u003e(ShowDetalizationLevel,LanguageName)-\u003ePCLT_Catalog-\u003e(StdOut_CLBS,StdErr_CLBS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-MakeMessage2.html#v:pcsi2text_plus_errs_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe abbreviation \"PCSI\" means \"Parametric Composable String\n Instaniation\". Agree, not a very clear name, a more apropriate would be\n something like that: \"Input Data for Template Representation\", but\n clear name came to my head when millions (dozens) of ants (variables) were\n already bearing this name. And I'm a bit lazy to rename everything to sound\n apropriate, sorry.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI",
          "package": "PCLT",
          "source": "src/Text-PCLT-PCSI.html",
          "type": "module"
        },
        "index": {
          "description": "The abbreviation PCSI means Parametric Composable String Instaniation Agree not very clear name more apropriate would be something like that Input Data for Template Representation but clear name came to my head when millions dozens of ants variables were already bearing this name And bit lazy to rename everything to sound apropriate sorry",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI",
          "package": "PCLT",
          "partial": "PCSI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy these user fills parameters of templates.\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "PCLT_ParamVal",
          "package": "PCLT",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "data"
        },
        "index": {
          "description": "By these user fills parameters of templates",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCLT_ParamVal",
          "package": "PCLT",
          "partial": "PCLT Param Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#t:PCLT_ParamVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePCSI is an output of our extended Show (to which this package\n is dedicated). And an input to generate a message using catalog.\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI",
          "package": "PCLT",
          "source": "src/Text-PCLT-PCSI.html#PCSI",
          "type": "data"
        },
        "index": {
          "description": "PCSI is an output of our extended Show to which this package is dedicated And an input to generate message using catalog",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI",
          "package": "PCLT",
          "partial": "PCSI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#t:PCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "PCSI_ParamsValuesMap",
          "package": "PCLT",
          "source": "src/Text-PCLT-PCSI.html#PCSI_ParamsValuesMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI_ParamsValuesMap",
          "package": "PCLT",
          "partial": "PCSI Params Values Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#t:PCSI_ParamsValuesMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn message generation procedure this stands for a value of\n 2nd argument in which every occurence of newline (as is configured in\n \u003ca\u003eText.PCLT.Config\u003c/a\u003e in config's parameter \u003ccode\u003epcsNewlineLBS\u003c/code\u003e)\n is substituded by \u003ccode\u003enewline ++ (replicate n ' ')\u003c/code\u003e,\n where n is the 1st argument\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "Indented_PV",
          "package": "PCLT",
          "signature": "Indented_PV Int PCLT_ParamVal",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "description": "In message generation procedure this stands for value of nd argument in which every occurence of newline as is configured in Text.PCLT.Config in config parameter pcsNewlineLBS is substituded by newline replicate where is the st argument",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "Indented_PV",
          "package": "PCLT",
          "partial": "Indented PV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:Indented_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn message generation procedure this stands for a value of\n \u003ccode\u003epcsNewlineLBS\u003c/code\u003e parameter declared in \u003ca\u003eText.PCLT.Config\u003c/a\u003e.\n Different systems means different symbol sequences\n under \"newline\"...\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "NewLine_PV",
          "package": "PCLT",
          "signature": "NewLine_PV",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "description": "In message generation procedure this stands for value of pcsNewlineLBS parameter declared in Text.PCLT.Config Different systems means different symbol sequences under newline",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "NewLine_PV",
          "package": "PCLT",
          "partial": "New Line PV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:NewLine_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "Nothing_PV",
          "package": "PCLT",
          "signature": "Nothing_PV",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "Nothing_PV",
          "package": "PCLT",
          "partial": "Nothing PV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:Nothing_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "PCSI",
          "package": "PCLT",
          "signature": "PCSI",
          "source": "src/Text-PCLT-PCSI.html#PCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI",
          "package": "PCLT",
          "partial": "PCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond argument is a separator between \u003ccode\u003e\u003ca\u003ePCSI\u003c/a\u003e\u003c/code\u003es in first argument\n Here representation generator automatically adds to each PCSI in\n list an implicit parameter \u003ccode\u003e__row_idx\u003c/code\u003e, which holds a value\n of current PCSI index in list, starting from 1.\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "PCSIList_PV",
          "package": "PCLT",
          "signature": "PCSIList_PV [PCSI] PCLT_ParamVal",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "description": "Second argument is separator between PCSI in first argument Here representation generator automatically adds to each PCSI in list an implicit parameter row idx which holds value of current PCSI index in list starting from",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCSIList_PV",
          "normalized": "PCSIList_PV[PCSI]PCLT_ParamVal",
          "package": "PCLT",
          "partial": "PCSIList PV",
          "signature": "PCSIList_PV[PCSI]PCLT_ParamVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PCSIList_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "PCSI_PV",
          "package": "PCLT",
          "signature": "PCSI_PV PCSI",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PCSI_PV",
          "package": "PCLT",
          "partial": "PCSI PV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PCSI_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "PVList_PV",
          "package": "PCLT",
          "signature": "PVList_PV [PCLT_ParamVal]",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PVList_PV",
          "normalized": "PVList_PV[PCLT_ParamVal]",
          "package": "PCLT",
          "partial": "PVList PV",
          "signature": "PVList_PV[PCLT_ParamVal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PVList_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "PlainTextLBS_PV",
          "package": "PCLT",
          "signature": "PlainTextLBS_PV ByteString",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PlainTextLBS_PV",
          "package": "PCLT",
          "partial": "Plain Text LBS PV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PlainTextLBS_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "PlainText_PV",
          "package": "PCLT",
          "signature": "PlainText_PV String",
          "source": "src/Text-PCLT-PCSI.html#PCLT_ParamVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "PlainText_PV",
          "package": "PCLT",
          "partial": "Plain Text PV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:PlainText_PV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "addPVs2PCSI",
          "package": "PCLT",
          "signature": "[(PCLT_ParamKey, PCLT_ParamVal)] -\u003e PCSI -\u003e PCSI",
          "source": "src/Text-PCLT-PCSI.html#addPVs2PCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "addPVs2PCSI",
          "normalized": "[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI-\u003ePCSI",
          "package": "PCLT",
          "partial": "PVs PCSI",
          "signature": "[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI-\u003ePCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:addPVs2PCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "addToPCSI",
          "package": "PCLT",
          "signature": "[PCSI] -\u003e PCSI -\u003e PCSI",
          "source": "src/Text-PCLT-PCSI.html#addToPCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "addToPCSI",
          "normalized": "[PCSI]-\u003ePCSI-\u003ePCSI",
          "package": "PCLT",
          "partial": "To PCSI",
          "signature": "[PCSI]-\u003ePCSI-\u003ePCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:addToPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePCSI with an empty set of parameters values.\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "empPCSI",
          "package": "PCLT",
          "signature": "PCLT_ID -\u003e PCSI",
          "source": "src/Text-PCLT-PCSI.html#empPCSI",
          "type": "function"
        },
        "index": {
          "description": "PCSI with an empty set of parameters values",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "empPCSI",
          "normalized": "PCLT_ID-\u003ePCSI",
          "package": "PCLT",
          "partial": "PCSI",
          "signature": "PCLT_ID-\u003ePCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:empPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "pcsiParamsValsMap",
          "package": "PCLT",
          "signature": "PCSI_ParamsValuesMap",
          "source": "src/Text-PCLT-PCSI.html#PCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "pcsiParamsValsMap",
          "package": "PCLT",
          "partial": "Params Vals Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:pcsiParamsValsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "pcsiTplID",
          "package": "PCLT",
          "signature": "PCLT_ID",
          "source": "src/Text-PCLT-PCSI.html#PCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "pcsiTplID",
          "package": "PCLT",
          "partial": "Tpl ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:pcsiTplID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "sumPCSI_PVMs",
          "package": "PCLT",
          "signature": "PCSI_ParamsValuesMap -\u003e PCSI_ParamsValuesMap -\u003e PCSI_ParamsValuesMap",
          "source": "src/Text-PCLT-PCSI.html#sumPCSI_PVMs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "sumPCSI_PVMs",
          "normalized": "PCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap",
          "package": "PCLT",
          "partial": "PCSI PVMs",
          "signature": "PCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap-\u003ePCSI_ParamsValuesMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:sumPCSI_PVMs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.PCSI",
          "name": "thePCSI",
          "package": "PCLT",
          "signature": "PCLT_ID -\u003e [(PCLT_ParamKey, PCLT_ParamVal)] -\u003e PCSI",
          "source": "src/Text-PCLT-PCSI.html#thePCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "thePCSI",
          "normalized": "PCLT_ID-\u003e[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI",
          "package": "PCLT",
          "partial": "PCSI",
          "signature": "PCLT_ID-\u003e[(PCLT_ParamKey,PCLT_ParamVal)]-\u003ePCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:thePCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt's used in some places of package in errors' representations\n (in instances of \u003ccode\u003eShowAsPCSI\u003c/code\u003e - class declared in \u003ca\u003eText.PCLT.ShowAsPCSI\u003c/a\u003e).\n \u003ccode\u003eusualSeparatorInPCSIList = PVList_PV [NewLine_PV, PlainText_PV \u003ca\u003e|----\u003c/a\u003e, NewLine_PV]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.PCLT.PCSI",
          "name": "usualSeparatorInPCSIList",
          "package": "PCLT",
          "signature": "PCLT_ParamVal",
          "source": "src/Text-PCLT-PCSI.html#usualSeparatorInPCSIList",
          "type": "function"
        },
        "index": {
          "description": "It used in some places of package in errors representations in instances of ShowAsPCSI class declared in Text.PCLT.ShowAsPCSI usualSeparatorInPCSIList PVList PV NewLine PV PlainText PV NewLine PV",
          "hierarchy": "Text PCLT PCSI",
          "module": "Text.PCLT.PCSI",
          "name": "usualSeparatorInPCSIList",
          "package": "PCLT",
          "partial": "Separator In PCSIList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-PCSI.html#v:usualSeparatorInPCSIList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "AdvancedSepBy",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "AdvancedSepBy",
          "package": "PCLT",
          "partial": "Advanced Sep By",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "ChunkIndexInList_",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#ChunkIndexInList_",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "ChunkIndexInList_",
          "package": "PCLT",
          "partial": "Chunk Index In List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:ChunkIndexInList_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Current_Chunk_SSM",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#Current_Chunk_SSM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Current_Chunk_SSM",
          "package": "PCLT",
          "partial": "Current Chunk SSM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:Current_Chunk_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Current_Sep_SSM",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#Current_Sep_SSM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Current_Sep_SSM",
          "package": "PCLT",
          "partial": "Current Sep SSM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:Current_Sep_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "MarkedChunkLength",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#MarkedChunkLength",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "MarkedChunkLength",
          "package": "PCLT",
          "partial": "Marked Chunk Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:MarkedChunkLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "New_Active_Sep_SSM",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#New_Active_Sep_SSM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "New_Active_Sep_SSM",
          "package": "PCLT",
          "partial": "New Active Sep SSM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:New_Active_Sep_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Previous_Active_Sep_SSM",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#Previous_Active_Sep_SSM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Previous_Active_Sep_SSM",
          "package": "PCLT",
          "partial": "Previous Active Sep SSM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:Previous_Active_Sep_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "SectorMarkingStrategy",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SectorMarkingStrategy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "SectorMarkingStrategy",
          "package": "PCLT",
          "partial": "Sector Marking Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:SectorMarkingStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "SeparatedSectorMarker",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "SeparatedSectorMarker",
          "package": "PCLT",
          "partial": "Separated Sector Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:SeparatedSectorMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "SeparationMarkerIdx",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparationMarkerIdx",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "SeparationMarkerIdx",
          "package": "PCLT",
          "partial": "Separation Marker Idx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:SeparationMarkerIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "StandartMarkingStrategyError",
          "package": "PCLT",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "StandartMarkingStrategyError",
          "package": "PCLT",
          "partial": "Standart Marking Strategy Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#t:StandartMarkingStrategyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "BeginningMNotInTheBeginning_SMSE",
          "package": "PCLT",
          "signature": "BeginningMNotInTheBeginning_SMSE",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "BeginningMNotInTheBeginning_SMSE",
          "package": "PCLT",
          "partial": "Beginning MNot In The Beginning SMSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:BeginningMNotInTheBeginning_SMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Beginning_SSM",
          "package": "PCLT",
          "signature": "Beginning_SSM",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Beginning_SSM",
          "package": "PCLT",
          "partial": "Beginning SSM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:Beginning_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "EOF_SSM",
          "package": "PCLT",
          "signature": "EOF_SSM",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "EOF_SSM",
          "package": "PCLT",
          "partial": "EOF SSM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:EOF_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Error_SSM",
          "package": "PCLT",
          "signature": "Error_SSM StandartMarkingStrategyError",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "Error_SSM",
          "package": "PCLT",
          "partial": "Error SSM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:Error_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "InnerMarker_SSM",
          "package": "PCLT",
          "signature": "InnerMarker_SSM SeparationMarkerIdx",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#SeparatedSectorMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "InnerMarker_SSM",
          "package": "PCLT",
          "partial": "Inner Marker SSM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:InnerMarker_SSM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "InputAfterEOF_SMSE",
          "package": "PCLT",
          "signature": "InputAfterEOF_SMSE",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "InputAfterEOF_SMSE",
          "package": "PCLT",
          "partial": "Input After EOF SMSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:InputAfterEOF_SMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "OpenMarkerAtEOF_SMSE",
          "package": "PCLT",
          "signature": "OpenMarkerAtEOF_SMSE SeparationMarkerIdx",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "OpenMarkerAtEOF_SMSE",
          "package": "PCLT",
          "partial": "Open Marker At EOF SMSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:OpenMarkerAtEOF_SMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "OverlappingMarkedChunks_SMSE",
          "package": "PCLT",
          "signature": "OverlappingMarkedChunks_SMSE",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "OverlappingMarkedChunks_SMSE",
          "package": "PCLT",
          "partial": "Overlapping Marked Chunks SMSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:OverlappingMarkedChunks_SMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "UnallowedCharacter_SMSE",
          "package": "PCLT",
          "signature": "UnallowedCharacter_SMSE Char",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "UnallowedCharacter_SMSE",
          "package": "PCLT",
          "partial": "Unallowed Character SMSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:UnallowedCharacter_SMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "UnsupportedMarkersSequence_SMSE",
          "package": "PCLT",
          "signature": "UnsupportedMarkersSequence_SMSE SeparatedSectorMarker SeparatedSectorMarker",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#StandartMarkingStrategyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "UnsupportedMarkersSequence_SMSE",
          "package": "PCLT",
          "partial": "Unsupported Markers Sequence SMSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:UnsupportedMarkersSequence_SMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "getListOfMarkings",
          "package": "PCLT",
          "signature": "Map SeparatedSectorMarker [(ByteString, ChunkIndexInList_)] -\u003e Int -\u003e [(ByteString, ChunkIndexInList_)]",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#getListOfMarkings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "getListOfMarkings",
          "normalized": "Map SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]-\u003eInt-\u003e[(ByteString,ChunkIndexInList_)]",
          "package": "PCLT",
          "partial": "List Of Markings",
          "signature": "Map SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]-\u003eInt-\u003e[(ByteString,ChunkIndexInList_)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:getListOfMarkings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "insertInsteadOf_inLBS",
          "package": "PCLT",
          "signature": "(ByteString, ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#insertInsteadOf_inLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "insertInsteadOf_inLBS",
          "normalized": "(ByteString,ByteString)-\u003eByteString-\u003eByteString",
          "package": "PCLT",
          "partial": "Instead Of LBS",
          "signature": "(ByteString,ByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:insertInsteadOf_inLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "manyTill_EOForEitherOf",
          "package": "PCLT",
          "signature": "Parser Char -\u003e [Parser ByteString] -\u003e Parser (SeparatedSectorMarker, ByteString, MarkedChunkLength)",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#manyTill_EOForEitherOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "manyTill_EOForEitherOf",
          "normalized": "Parser Char-\u003e[Parser ByteString]-\u003eParser(SeparatedSectorMarker,ByteString,MarkedChunkLength)",
          "package": "PCLT",
          "partial": "Till EOFor Either Of",
          "signature": "Parser Char-\u003e[Parser ByteString]-\u003eParser(SeparatedSectorMarker,ByteString,MarkedChunkLength)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:manyTill_EOForEitherOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "retrieveErrorsMarkingsList",
          "package": "PCLT",
          "signature": "[(SeparatedSectorMarker, ByteString, MarkedChunkLength)] -\u003e [(SeparatedSectorMarker, ByteString, ChunkIndexInList_)]",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#retrieveErrorsMarkingsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "retrieveErrorsMarkingsList",
          "normalized": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,ChunkIndexInList_)]",
          "package": "PCLT",
          "partial": "Errors Markings List",
          "signature": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,ChunkIndexInList_)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:retrieveErrorsMarkingsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "retrieveNonPlainMarkingsMap",
          "package": "PCLT",
          "signature": "[(SeparatedSectorMarker, ByteString, MarkedChunkLength)] -\u003e Map SeparatedSectorMarker [(ByteString, ChunkIndexInList_)]",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#retrieveNonPlainMarkingsMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "retrieveNonPlainMarkingsMap",
          "normalized": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003eMap SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]",
          "package": "PCLT",
          "partial": "Non Plain Markings Map",
          "signature": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003eMap SeparatedSectorMarker[(ByteString,ChunkIndexInList_)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:retrieveNonPlainMarkingsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "sepBySome",
          "package": "PCLT",
          "signature": "Parser Char -\u003e SectorMarkingStrategy -\u003e [Parser ByteString] -\u003e Parser [(SeparatedSectorMarker, ByteString, MarkedChunkLength)]",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#sepBySome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "sepBySome",
          "normalized": "Parser Char-\u003eSectorMarkingStrategy-\u003e[Parser ByteString]-\u003eParser[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]",
          "package": "PCLT",
          "partial": "By Some",
          "signature": "Parser Char-\u003eSectorMarkingStrategy-\u003e[Parser ByteString]-\u003eParser[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:sepBySome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "standardMarkingStrategy",
          "package": "PCLT",
          "signature": "SectorMarkingStrategy",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#standardMarkingStrategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "standardMarkingStrategy",
          "package": "PCLT",
          "partial": "Marking Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:standardMarkingStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "standardMarkingStrategyFix_StripEmptyChunks",
          "package": "PCLT",
          "signature": "[(SeparatedSectorMarker, ByteString, MarkedChunkLength)] -\u003e [(SeparatedSectorMarker, ByteString, MarkedChunkLength)]",
          "source": "src/Text-PCLT-Parser-AdvancedSepBy.html#standardMarkingStrategyFix_StripEmptyChunks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Parser AdvancedSepBy",
          "module": "Text.PCLT.Parser.AdvancedSepBy",
          "name": "standardMarkingStrategyFix_StripEmptyChunks",
          "normalized": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]",
          "package": "PCLT",
          "partial": "Marking Strategy Fix Strip Empty Chunks",
          "signature": "[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]-\u003e[(SeparatedSectorMarker,ByteString,MarkedChunkLength)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Parser-AdvancedSepBy.html#v:standardMarkingStrategyFix_StripEmptyChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimply saying: with SDL we regulate, how much some Reader (of our\n generated messages) wishes (is allowed) to see.\n\u003c/p\u003e\u003cp\u003e\"SDL\" is an abbreviation for \"Show Detalization Level\".\n Perhaps it better sound \"Representation Detalization Level\", but it\n was too late to change term - too many variables has names \u003ccode\u003esdl\u003c/code\u003e,\n and author is too lazy to change them on \u003ccode\u003erdl\u003c/code\u003es.\n However, \"Representation Detalization Level\" version is sometimes used -\n it is to be understood as synonym to SDL.\n Term \"Detailizable content (message)\" in this package has a following\n meaning: some content, representing which it is possible to regulate,\n in how much of details it is to be represented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.SDL",
          "name": "SDL",
          "package": "PCLT",
          "source": "src/Text-PCLT-SDL.html",
          "type": "module"
        },
        "index": {
          "description": "Simply saying with SDL we regulate how much some Reader of our generated messages wishes is allowed to see SDL is an abbreviation for Show Detalization Level Perhaps it better sound Representation Detalization Level but it was too late to change term too many variables has names sdl and author is too lazy to change them on rdl However Representation Detalization Level version is sometimes used it is to be understood as synonym to SDL Term Detailizable content message in this package has following meaning some content representing which it is possible to regulate in how much of details it is to be represented",
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "SDL",
          "package": "PCLT",
          "partial": "SDL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDL may be seen in two different moduses:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e as a requirement for representation by a localizable template:\n \"SDL of repesentation reciever must be equal or bigger then that,\n orelse message from this template won't be generated\"\n\u003c/li\u003e\u003cli\u003e as an allocateion to a repesentation reciever.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.SDL",
          "name": "SDLModus",
          "package": "PCLT",
          "source": "src/Text-PCLT-SDL.html#SDLModus",
          "type": "data"
        },
        "index": {
          "description": "SDL may be seen in two different moduses as requirement for representation by localizable template SDL of repesentation reciever must be equal or bigger then that orelse message from this template won be generated as an allocateion to repesentation reciever",
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "SDLModus",
          "package": "PCLT",
          "partial": "SDLModus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#t:SDLModus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eZero_SDL \u003c One_SDL \u003c SDL Int \u003c InfinitelyBig_SDL\u003c/pre\u003e",
          "module": "Text.PCLT.SDL",
          "name": "ShowDetalizationLevel",
          "package": "PCLT",
          "source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
          "type": "data"
        },
        "index": {
          "description": "Zero SDL One SDL SDL Int InfinitelyBig SDL",
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "ShowDetalizationLevel",
          "package": "PCLT",
          "partial": "Show Detalization Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#t:ShowDetalizationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "Allocated_SDLM",
          "package": "PCLT",
          "signature": "Allocated_SDLM",
          "source": "src/Text-PCLT-SDL.html#SDLModus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "Allocated_SDLM",
          "package": "PCLT",
          "partial": "Allocated SDLM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:Allocated_SDLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "InfinitelyBig_SDL",
          "package": "PCLT",
          "signature": "InfinitelyBig_SDL",
          "source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "InfinitelyBig_SDL",
          "package": "PCLT",
          "partial": "Infinitely Big SDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:InfinitelyBig_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "One_SDL",
          "package": "PCLT",
          "signature": "One_SDL",
          "source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "One_SDL",
          "package": "PCLT",
          "partial": "One SDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:One_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "Required_SDLM",
          "package": "PCLT",
          "signature": "Required_SDLM",
          "source": "src/Text-PCLT-SDL.html#SDLModus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "Required_SDLM",
          "package": "PCLT",
          "partial": "Required SDLM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:Required_SDLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "SDL",
          "package": "PCLT",
          "signature": "SDL Int",
          "source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "SDL",
          "package": "PCLT",
          "partial": "SDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "Zero_SDL",
          "package": "PCLT",
          "signature": "Zero_SDL",
          "source": "src/Text-PCLT-SDL.html#ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "Zero_SDL",
          "package": "PCLT",
          "partial": "Zero SDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:Zero_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case, if SDL (of reciever of template requirement) is unclear,\n and if it is allowed by config - then SDL gets assigned according to margin:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if modus is allocation to reciever - the we give him \u003ccode\u003eZero_SDL\u003c/code\u003e (minimum)\n\u003c/li\u003e\u003cli\u003e if modus is requirement by template - the we give\n him \u003ccode\u003eInfinitelyBig_SDL\u003c/code\u003e (maximum)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.SDL",
          "name": "marginOfSDLModus",
          "package": "PCLT",
          "signature": "SDLModus -\u003e ShowDetalizationLevel",
          "source": "src/Text-PCLT-SDL.html#marginOfSDLModus",
          "type": "function"
        },
        "index": {
          "description": "In case if SDL of reciever of template requirement is unclear and if it is allowed by config then SDL gets assigned according to margin if modus is allocation to reciever the we give him Zero SDL minimum if modus is requirement by template the we give him InfinitelyBig SDL maximum",
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "marginOfSDLModus",
          "normalized": "SDLModus-\u003eShowDetalizationLevel",
          "package": "PCLT",
          "partial": "Of SDLModus",
          "signature": "SDLModus-\u003eShowDetalizationLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:marginOfSDLModus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.SDL",
          "name": "strict_str2sdl",
          "package": "PCLT",
          "signature": "String -\u003e Maybe ShowDetalizationLevel",
          "source": "src/Text-PCLT-SDL.html#strict_str2sdl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT SDL",
          "module": "Text.PCLT.SDL",
          "name": "strict_str2sdl",
          "normalized": "String-\u003eMaybe ShowDetalizationLevel",
          "package": "PCLT",
          "signature": "String-\u003eMaybe ShowDetalizationLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SDL.html#v:strict_str2sdl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a usual set for modules, that are to be imported by modules\n dedicated to declaring \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.SH__",
          "name": "SH__",
          "package": "PCLT",
          "source": "src/Text-PCLT-SH__.html",
          "type": "module"
        },
        "index": {
          "description": "This is usual set for modules that are to be imported by modules dedicated to declaring ShowAsPCSI and HasStaticRawPCLTs instances",
          "hierarchy": "Text PCLT SH__",
          "module": "Text.PCLT.SH__",
          "name": "SH__",
          "package": "PCLT",
          "partial": "SH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-SH__.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWARNING: Creating an instance of \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eByteString\u003c/code\u003es\n and/or other text types is not recommended. Use of such instaniations\n would dread strictness of templates catalog structure - make it's\n use workaroundish, less systematic and less strict, which is a way\n to badmade applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.ShowAsPCSI",
          "name": "ShowAsPCSI",
          "package": "PCLT",
          "source": "src/Text-PCLT-ShowAsPCSI.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING Creating an instance of ShowAsPCSI for String ByteString and or other text types is not recommended Use of such instaniations would dread strictness of templates catalog structure make it use workaroundish less systematic and less strict which is way to badmade applications",
          "hierarchy": "Text PCLT ShowAsPCSI",
          "module": "Text.PCLT.ShowAsPCSI",
          "name": "ShowAsPCSI",
          "package": "PCLT",
          "partial": "Show As PCSI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-ShowAsPCSI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur extended version of \u003ccode\u003eShow\u003c/code\u003e class\n\u003c/p\u003e",
          "module": "Text.PCLT.ShowAsPCSI",
          "name": "ShowAsPCSI",
          "package": "PCLT",
          "source": "src/Text-PCLT-ShowAsPCSI.html#ShowAsPCSI",
          "type": "class"
        },
        "index": {
          "description": "Our extended version of Show class",
          "hierarchy": "Text PCLT ShowAsPCSI",
          "module": "Text.PCLT.ShowAsPCSI",
          "name": "ShowAsPCSI",
          "package": "PCLT",
          "partial": "Show As PCSI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-ShowAsPCSI.html#t:ShowAsPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.ShowAsPCSI",
          "name": "showAsPCSI",
          "package": "PCLT",
          "signature": "t -\u003e PCSI",
          "source": "src/Text-PCLT-ShowAsPCSI.html#showAsPCSI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text PCLT ShowAsPCSI",
          "module": "Text.PCLT.ShowAsPCSI",
          "name": "showAsPCSI",
          "normalized": "a-\u003ePCSI",
          "package": "PCLT",
          "partial": "As PCSI",
          "signature": "t-\u003ePCSI",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-ShowAsPCSI.html#v:showAsPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere are declared \u003ccode\u003e\u003ca\u003eLocalizableTemplate\u003c/a\u003e\u003c/code\u003e (also called PCLT)\n and \u003ccode\u003e\u003ca\u003eLocalizedTemplate\u003c/a\u003e\u003c/code\u003e.\n Here by localization is meant localization in languages.\n First (localizable template) is above languages,\n while second (localized template) is a template version\n in a concrete language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT.Template",
          "name": "Template",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html",
          "type": "module"
        },
        "index": {
          "description": "Here are declared LocalizableTemplate also called PCLT and LocalizedTemplate Here by localization is meant localization in languages First localizable template is above languages while second localized template is template version in concrete language",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "Template",
          "package": "PCLT",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "DefaultLngTpl",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#DefaultLngTpl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "DefaultLngTpl",
          "package": "PCLT",
          "partial": "Default Lng Tpl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:DefaultLngTpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate content.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "LngTpl_AbstractedString",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#LngTpl_AbstractedString",
          "type": "type"
        },
        "index": {
          "description": "Template content",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "LngTpl_AbstractedString",
          "package": "PCLT",
          "partial": "Lng Tpl Abstracted String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LngTpl_AbstractedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "LngTpl_SubCompositesMap",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#LngTpl_SubCompositesMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "LngTpl_SubCompositesMap",
          "package": "PCLT",
          "partial": "Lng Tpl Sub Composites Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LngTpl_SubCompositesMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "LocalizableTemplate",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#LocalizableTemplate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "LocalizableTemplate",
          "package": "PCLT",
          "partial": "Localizable Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LocalizableTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "LocalizedTemplate",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#LocalizedTemplate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "LocalizedTemplate",
          "package": "PCLT",
          "partial": "Localized Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:LocalizedTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "NondefaultLngTpl",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#NondefaultLngTpl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "NondefaultLngTpl",
          "package": "PCLT",
          "partial": "Nondefault Lng Tpl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:NondefaultLngTpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "PCLT_AllocatedShowDetalizationLevel",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_AllocatedShowDetalizationLevel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_AllocatedShowDetalizationLevel",
          "package": "PCLT",
          "partial": "PCLT Allocated Show Detalization Level",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_AllocatedShowDetalizationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "PCLT_CatalogMap",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_CatalogMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_CatalogMap",
          "package": "PCLT",
          "partial": "PCLT Catalog Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_CatalogMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a bad result of parsing some \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n into \u003ccode\u003e\u003ca\u003ePCLT_ShowDetalizationLevel\u003c/a\u003e\u003c/code\u003e. The second argument is this bad input.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_ErrornousSDL",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_ErrornousSDL",
          "type": "data"
        },
        "index": {
          "description": "This is bad result of parsing some String into PCLT ShowDetalizationLevel The second argument is this bad input",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_ErrornousSDL",
          "package": "PCLT",
          "partial": "PCLT Errornous SDL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_ErrornousSDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese errors are possible only if program is wrong.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_ParserLowLevelFailure",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_ParserLowLevelFailure",
          "type": "data"
        },
        "index": {
          "description": "These errors are possible only if program is wrong",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_ParserLowLevelFailure",
          "package": "PCLT",
          "partial": "PCLT Parser Low Level Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_ParserLowLevelFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw templates (both localizeds, and localizables).\n Input data for catalog formation. Used by \u003ccode\u003eHasStaticRawPCLTs\u003c/code\u003e class\n (declared in \u003ca\u003eText.PCLT.HasStaticRawPCLTs\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_RawCatalogData",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_RawCatalogData",
          "type": "data"
        },
        "index": {
          "description": "Raw templates both localizeds and localizables Input data for catalog formation Used by HasStaticRawPCLTs class declared in Text.PCLT.HasStaticRawPCLTs",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_RawCatalogData",
          "package": "PCLT",
          "partial": "PCLT Raw Catalog Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_RawCatalogData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "PCLT_RequiredShowDetalizationLevel",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_RequiredShowDetalizationLevel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_RequiredShowDetalizationLevel",
          "package": "PCLT",
          "partial": "PCLT Required Show Detalization Level",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_RequiredShowDetalizationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an extending wrapper around SDL. It is used for specification\n of requirement for making representation from template. This specification\n is attached to every localizable template in PCLT catalog\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_ShowDetalizationLevel",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
          "type": "data"
        },
        "index": {
          "description": "This is an extending wrapper around SDL It is used for specification of requirement for making representation from template This specification is attached to every localizable template in PCLT catalog",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_ShowDetalizationLevel",
          "package": "PCLT",
          "partial": "PCLT Show Detalization Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCLT_ShowDetalizationLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are types of template pieces. They are made by \u003ccode\u003e\u003ca\u003essm2ldtm\u003c/a\u003e\u003c/code\u003e\n from \u003ccode\u003e\u003ca\u003eSeparatedSectorMarker\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCS_SpecificMarkings",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
          "type": "data"
        },
        "index": {
          "description": "These are types of template pieces They are made by ssm2ldtm from SeparatedSectorMarker",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCS_SpecificMarkings",
          "package": "PCLT",
          "partial": "PCS Specific Markings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:PCS_SpecificMarkings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "ParserBadResult",
          "package": "PCLT",
          "source": "src/Text-PCLT-Template.html#ParserBadResult",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "ParserBadResult",
          "package": "PCLT",
          "partial": "Parser Bad Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#t:ParserBadResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "BadMarker_PLLF_PCLT",
          "package": "PCLT",
          "signature": "BadMarker_PLLF_PCLT SeparatedSectorMarker ByteString ChunkIndexInList_",
          "source": "src/Text-PCLT-Template.html#PCLT_ParserLowLevelFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "BadMarker_PLLF_PCLT",
          "package": "PCLT",
          "partial": "Bad Marker PLLF PCLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:BadMarker_PLLF_PCLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "Composite_LngTplM",
          "package": "PCLT",
          "signature": "Composite_LngTplM",
          "source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "Composite_LngTplM",
          "package": "PCLT",
          "partial": "Composite Lng Tpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:Composite_LngTplM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "LocalizableTemplate",
          "package": "PCLT",
          "signature": "LocalizableTemplate",
          "source": "src/Text-PCLT-Template.html#LocalizableTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "LocalizableTemplate",
          "package": "PCLT",
          "partial": "Localizable Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:LocalizableTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "LocalizedTemplate",
          "package": "PCLT",
          "signature": "LocalizedTemplate",
          "source": "src/Text-PCLT-Template.html#LocalizedTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "LocalizedTemplate",
          "package": "PCLT",
          "partial": "Localized Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:LocalizedTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "PCLT_RawCatalogData",
          "package": "PCLT",
          "signature": "PCLT_RawCatalogData (Map PCLT_ID (Map LanguageName ByteString, PCLT_RequiredShowDetalizationLevel))",
          "source": "src/Text-PCLT-Template.html#PCLT_RawCatalogData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_RawCatalogData",
          "normalized": "PCLT_RawCatalogData(Map PCLT_ID(Map LanguageName ByteString,PCLT_RequiredShowDetalizationLevel))",
          "package": "PCLT",
          "partial": "PCLT Raw Catalog Data",
          "signature": "PCLT_RawCatalogData(Map PCLT_ID(Map LanguageName ByteString,PCLT_RequiredShowDetalizationLevel))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_RawCatalogData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain SDL, nominal. If SDL of representation reciever\n is less then that, then template cann't be used in representation\n generation.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL",
          "package": "PCLT",
          "signature": "PCLT_SDL ShowDetalizationLevel",
          "source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "description": "Plain SDL nominal If SDL of representation reciever is less then that then template cann be used in representation generation",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL",
          "package": "PCLT",
          "partial": "PCLT SDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn input data for catalog formation the given specification\n is errornous.\n If config's (\u003ca\u003eText.PCLT.Config\u003c/a\u003e) parameters\n \u003ccode\u003e\u003ca\u003epcsAllowEmptySDL_parseItByModusMargin\u003c/a\u003e\u003c/code\u003e and/or\n \u003ccode\u003e\u003ca\u003epcsAllowUnreadableSDL_parseIdByModusMargin\u003c/a\u003e\u003c/code\u003e are\n positive, then instead of \u003ccode\u003ePCLT_SDL_Errornous\u003c/code\u003e the parser\n (\u003ccode\u003e\u003ca\u003estr2PCLT_SDL\u003c/a\u003e\u003c/code\u003e) will use \u003ccode\u003e\u003ca\u003emarginOfSDLModus\u003c/a\u003e\u003c/code\u003e to set\n valid specification. When representation generator meets\n \u003ccode\u003ePCLT_SDL_Errornous\u003c/code\u003e it won't use template, and return an error.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL_Errornous",
          "package": "PCLT",
          "signature": "PCLT_SDL_Errornous PCLT_ErrornousSDL",
          "source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "description": "In input data for catalog formation the given specification is errornous If config Text.PCLT.Config parameters pcsAllowEmptySDL parseItByModusMargin and or pcsAllowUnreadableSDL parseIdByModusMargin are positive then instead of PCLT SDL Errornous the parser str2PCLT SDL will use marginOfSDLModus to set valid specification When representation generator meets PCLT SDL Errornous it won use template and return an error",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL_Errornous",
          "package": "PCLT",
          "partial": "PCLT SDL Errornous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL_Errornous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"The requirement is the same as is specified a for referenced\n template, which is referenced by a \u003ccode\u003ePCSI_PV\u003c/code\u003e value of referenced\n parameter (of current template)\".\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL_ToParamCompositeLink",
          "package": "PCLT",
          "signature": "PCLT_SDL_ToParamCompositeLink PCLT_ParamKey",
          "source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "description": "The requirement is the same as is specified for referenced template which is referenced by PCSI PV value of referenced parameter of current template",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL_ToParamCompositeLink",
          "package": "PCLT",
          "partial": "PCLT SDL To Param Composite Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL_ToParamCompositeLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"The requirement is the same as is specified\n for referenced template\".\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL_ToTemplateLink",
          "package": "PCLT",
          "signature": "PCLT_SDL_ToTemplateLink PCLT_ID",
          "source": "src/Text-PCLT-Template.html#PCLT_ShowDetalizationLevel",
          "type": "function"
        },
        "index": {
          "description": "The requirement is the same as is specified for referenced template",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PCLT_SDL_ToTemplateLink",
          "package": "PCLT",
          "partial": "PCLT SDL To Template Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PCLT_SDL_ToTemplateLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "Parameter_LngTplM",
          "package": "PCLT",
          "signature": "Parameter_LngTplM",
          "source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "Parameter_LngTplM",
          "package": "PCLT",
          "partial": "Parameter Lng Tpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:Parameter_LngTplM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "PlainText_LngTplM",
          "package": "PCLT",
          "signature": "PlainText_LngTplM",
          "source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "PlainText_LngTplM",
          "package": "PCLT",
          "partial": "Plain Text Lng Tpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:PlainText_LngTplM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "UnexpectedParserResult_PLLF_PCLT",
          "package": "PCLT",
          "signature": "UnexpectedParserResult_PLLF_PCLT ParserBadResult",
          "source": "src/Text-PCLT-Template.html#PCLT_ParserLowLevelFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "UnexpectedParserResult_PLLF_PCLT",
          "package": "PCLT",
          "partial": "Unexpected Parser Result PLLF PCLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:UnexpectedParserResult_PLLF_PCLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "UnreadableSDL_ESDL",
          "package": "PCLT",
          "signature": "UnreadableSDL_ESDL SDLModus String",
          "source": "src/Text-PCLT-Template.html#PCLT_ErrornousSDL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "UnreadableSDL_ESDL",
          "package": "PCLT",
          "partial": "Unreadable SDL ESDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:UnreadableSDL_ESDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "Unsupported_LngTplM",
          "package": "PCLT",
          "signature": "Unsupported_LngTplM SeparatedSectorMarker",
          "source": "src/Text-PCLT-Template.html#PCS_SpecificMarkings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "Unsupported_LngTplM",
          "package": "PCLT",
          "partial": "Unsupported Lng Tpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:Unsupported_LngTplM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constant currently set to 25. It is used in a parser \u003ccode\u003e\u003ca\u003estr2PCLT_SDL\u003c/a\u003e\u003c/code\u003e:\n if the input is errornous, this much symbols of input are saved\n in \u003ccode\u003e\u003ca\u003eUnreadableSDL_ESDL\u003c/a\u003e\u003c/code\u003e. If input is bigger, then the saved trunc is\n tailed with \"...\"\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "__const_esdl_rawinputshowsize_inShowAsPCSI",
          "package": "PCLT",
          "signature": "Int",
          "source": "src/Text-PCLT-Template.html#__const_esdl_rawinputshowsize_inShowAsPCSI",
          "type": "function"
        },
        "index": {
          "description": "constant currently set to It is used in parser str2PCLT SDL if the input is errornous this much symbols of input are saved in UnreadableSDL ESDL If input is bigger then the saved trunc is tailed with",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "__const_esdl_rawinputshowsize_inShowAsPCSI",
          "package": "PCLT",
          "partial": "Show As PCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:__const_esdl_rawinputshowsize_inShowAsPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "_compareStrictOrientationOnDefault",
          "package": "PCLT",
          "signature": "PCLT_ID -\u003e StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets -\u003e ([PCLT_ID], [ParamName_LBS]) -\u003e ([PCLT_ID], [ParamName_LBS]) -\u003e Bool",
          "source": "src/Text-PCLT-Template.html#_compareStrictOrientationOnDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "_compareStrictOrientationOnDefault",
          "normalized": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003e([PCLT_ID],[ParamName_LBS])-\u003e([PCLT_ID],[ParamName_LBS])-\u003eBool",
          "package": "PCLT",
          "partial": "Strict Orientation On Default",
          "signature": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003e([PCLT_ID],[ParamName_LBS])-\u003e([PCLT_ID],[ParamName_LBS])-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:_compareStrictOrientationOnDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCarrying strict orientation routines. See description of\n \u003ccode\u003e\u003ca\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "compareStrictOrientationOnDefault",
          "package": "PCLT",
          "signature": "PCLT_ID -\u003e StrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets -\u003e NondefaultLngTpl -\u003e DefaultLngTpl -\u003e Bool",
          "source": "src/Text-PCLT-Template.html#compareStrictOrientationOnDefault",
          "type": "function"
        },
        "index": {
          "description": "Carrying strict orientation routines See description of StrictOrient ofParamsAndCmpsts onDfltLngTplsSets",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "compareStrictOrientationOnDefault",
          "normalized": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003eNondefaultLngTpl-\u003eDefaultLngTpl-\u003eBool",
          "package": "PCLT",
          "partial": "Strict Orientation On Default",
          "signature": "PCLT_ID-\u003eStrictOrient_ofParamsAndCmpsts_onDfltLngTplsSets-\u003eNondefaultLngTpl-\u003eDefaultLngTpl-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:compareStrictOrientationOnDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parsing uses parameters\n \u003ccode\u003eTest.PCLT.Config.pcsParameterPlaceholderWrapper\u003c/code\u003e and\n \u003ccode\u003eTest.PCLT.Config.pcsCompositePlaceholderWrapper\u003c/code\u003e of\n \u003ccode\u003eTest.PCLT.Config.PCLT_InnerConfig\u003c/code\u003e.\n The list \u003ccode\u003e[PCLT_CompositeKey]\u003c/code\u003e in the result is a list of composite keys\n (template IDs, used by template as inclusions)\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "doTheParse",
          "package": "PCLT",
          "signature": "PCLT_InnerConfig -\u003e ByteString -\u003e ([PCLT_ParserLowLevelFailure], Maybe (LngTpl_AbstractedString, [PCLT_CompositeKey]))",
          "source": "src/Text-PCLT-Template.html#doTheParse",
          "type": "function"
        },
        "index": {
          "description": "The parsing uses parameters Test.PCLT.Config.pcsParameterPlaceholderWrapper and Test.PCLT.Config.pcsCompositePlaceholderWrapper of Test.PCLT.Config.PCLT InnerConfig The list PCLT CompositeKey in the result is list of composite keys template IDs used by template as inclusions",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "doTheParse",
          "normalized": "PCLT_InnerConfig-\u003eByteString-\u003e([PCLT_ParserLowLevelFailure],Maybe(LngTpl_AbstractedString,[PCLT_CompositeKey]))",
          "package": "PCLT",
          "partial": "The Parse",
          "signature": "PCLT_InnerConfig-\u003eByteString-\u003e([PCLT_ParserLowLevelFailure],Maybe(LngTpl_AbstractedString,[PCLT_CompositeKey]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:doTheParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "ldtAbstractedString",
          "package": "PCLT",
          "signature": "LngTpl_AbstractedString",
          "source": "src/Text-PCLT-Template.html#LocalizedTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "ldtAbstractedString",
          "package": "PCLT",
          "partial": "Abstracted String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:ldtAbstractedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach composition tree is kept together with each\n localization. This is done for speedup and is a source\n of complexities, when forming a catalog and sustaining it's\n data consistency. So it comes to this:\n templates are purely-referenced by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e catalog (\u003ccode\u003e\u003ca\u003ePCLT_CatalogMap\u003c/a\u003e\u003c/code\u003e) and\n\u003c/li\u003e\u003cli\u003e templates, that uses them as composites\n (\u003ccode\u003e\u003ca\u003eLngTpl_SubCompositesMap\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBy \"purely-reference\" here is meant, that templates are\n formed only once, they have one instace in memory, but\n are referenced twice - from composeds and from catalog map\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "ldtSubcompositesMap",
          "package": "PCLT",
          "signature": "LngTpl_SubCompositesMap",
          "source": "src/Text-PCLT-Template.html#LocalizedTemplate",
          "type": "function"
        },
        "index": {
          "description": "Each composition tree is kept together with each localization This is done for speedup and is source of complexities when forming catalog and sustaining it data consistency So it comes to this templates are purely-referenced by catalog PCLT CatalogMap and templates that uses them as composites LngTpl SubCompositesMap By purely-reference here is meant that templates are formed only once they have one instace in memory but are referenced twice from composeds and from catalog map",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "ldtSubcompositesMap",
          "package": "PCLT",
          "partial": "Subcomposites Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:ldtSubcompositesMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a list of parameter names from a template content.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "listOfParams",
          "package": "PCLT",
          "signature": "LngTpl_AbstractedString -\u003e [ParamName_LBS]",
          "source": "src/Text-PCLT-Template.html#listOfParams",
          "type": "function"
        },
        "index": {
          "description": "Extract list of parameter names from template content",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "listOfParams",
          "normalized": "LngTpl_AbstractedString-\u003e[ParamName_LBS]",
          "package": "PCLT",
          "partial": "Of Params",
          "signature": "LngTpl_AbstractedString-\u003e[ParamName_LBS]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:listOfParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "pcltLocalizationsMap",
          "package": "PCLT",
          "signature": "Map LanguageName LocalizedTemplate",
          "source": "src/Text-PCLT-Template.html#LocalizableTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "pcltLocalizationsMap",
          "package": "PCLT",
          "partial": "Localizations Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:pcltLocalizationsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf SDL of representation reciever\n is less then that, then template cann't be used in representation\n generation.\n\u003c/p\u003e",
          "module": "Text.PCLT.Template",
          "name": "pcltRequiredSDL",
          "package": "PCLT",
          "signature": "PCLT_RequiredShowDetalizationLevel",
          "source": "src/Text-PCLT-Template.html#LocalizableTemplate",
          "type": "function"
        },
        "index": {
          "description": "If SDL of representation reciever is less then that then template cann be used in representation generation",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "pcltRequiredSDL",
          "package": "PCLT",
          "partial": "Required SDL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:pcltRequiredSDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT.Template",
          "name": "ssm2ldtm",
          "package": "PCLT",
          "signature": "SeparatedSectorMarker -\u003e PCS_SpecificMarkings",
          "source": "src/Text-PCLT-Template.html#ssm2ldtm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "ssm2ldtm",
          "normalized": "SeparatedSectorMarker-\u003ePCS_SpecificMarkings",
          "package": "PCLT",
          "signature": "SeparatedSectorMarker-\u003ePCS_SpecificMarkings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:ssm2ldtm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003ePCLT_ShowDetalizationLevel\u003c/a\u003e\u003c/code\u003e. First of all parser\n tries \u003ccode\u003e\u003ca\u003estrict_str2sdl\u003c/a\u003e\u003c/code\u003e. Then, if failed, parser uses following\n config entries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsParameterPlaceholderWrapper\u003c/a\u003e\u003c/code\u003e -\n if prefix and postfix of input is this (by default it is \"@@|\"),\n then it is parsed into \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToParamCompositeLink\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsCompositePlaceholderWrapper\u003c/a\u003e\u003c/code\u003e -\n if prefix and postfix of input is this (by default it is \"##|\"),\n then it is parsed into \u003ccode\u003e\u003ca\u003ePCLT_SDL_ToTemplateLink\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsAllowEmptySDL_parseItByModusMargin\u003c/a\u003e\u003c/code\u003e -\n if it is positive and input is empty, then it gets parsed into\n (\u003ccode\u003ePCLT_SDL $ \u003ccode\u003e\u003ca\u003emarginOfSDLModus\u003c/a\u003e\u003c/code\u003e modus\u003c/code\u003e), where modus\n is first argument; esle, if parameter is negative and input is empty,\n it is parsed to \u003ccode\u003e\u003ca\u003ePCLT_SDL_Errornous\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epcsAllowUnreadableSDL_parseIdByModusMargin\u003c/a\u003e\u003c/code\u003e -\n if it is positive and input is unparsable, then it gets parsed into\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePCLT_SDL\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003emarginOfSDLModus\u003c/a\u003e\u003c/code\u003e modus\u003c/code\u003e, where modus\n is first argument; esle, if parameter is negative and input is unparsable,\n it is parsed to \u003ccode\u003e\u003ca\u003ePCLT_SDL_Errornous\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.PCLT.Template",
          "name": "str2PCLT_SDL",
          "package": "PCLT",
          "signature": "SDLModus -\u003e String -\u003e PCLT_InnerConfig -\u003e PCLT_ShowDetalizationLevel",
          "source": "src/Text-PCLT-Template.html#str2PCLT_SDL",
          "type": "function"
        },
        "index": {
          "description": "Parse String into PCLT ShowDetalizationLevel First of all parser tries strict str2sdl Then if failed parser uses following config entries pcsParameterPlaceholderWrapper if prefix and postfix of input is this by default it is then it is parsed into PCLT SDL ToParamCompositeLink pcsCompositePlaceholderWrapper if prefix and postfix of input is this by default it is then it is parsed into PCLT SDL ToTemplateLink pcsAllowEmptySDL parseItByModusMargin if it is positive and input is empty then it gets parsed into PCLT SDL marginOfSDLModus modus where modus is first argument esle if parameter is negative and input is empty it is parsed to PCLT SDL Errornous pcsAllowUnreadableSDL parseIdByModusMargin if it is positive and input is unparsable then it gets parsed into PCLT SDL marginOfSDLModus modus where modus is first argument esle if parameter is negative and input is unparsable it is parsed to PCLT SDL Errornous",
          "hierarchy": "Text PCLT Template",
          "module": "Text.PCLT.Template",
          "name": "str2PCLT_SDL",
          "normalized": "SDLModus-\u003eString-\u003ePCLT_InnerConfig-\u003ePCLT_ShowDetalizationLevel",
          "package": "PCLT",
          "partial": "PCLT SDL",
          "signature": "SDLModus-\u003eString-\u003ePCLT_InnerConfig-\u003ePCLT_ShowDetalizationLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT-Template.html#v:str2PCLT_SDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is thought to be imported outside of PCLT package by modules,\n that use PCLT logics (catalog formation routines and\n messages generation routines)\n\u003c/p\u003e\u003cp\u003eAnd another briefing on what is PCLT. First is in the top level of\n Haddock documentation provided for the package.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.SH__\"\n\u003c/pre\u003e\u003cp\u003eThis module provides interfaces to the classes \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eHasStaticRawPCLTs\u003c/a\u003e\u003c/code\u003e an all the routines, that usually are used for\n declaration of their instanitations.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.ConstraintedLBS\"\n\u003c/pre\u003e\u003cp\u003eA constrainting (the constraint here is on it's size) wrapper for a\n lazy \u003ccode\u003eByteString\u003c/code\u003e (LBS) - this container is used for messages\n generated from PCLT templates\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.InitialDefaultCatalog\"\n\u003c/pre\u003e\u003cpre\u003e initDefaultCatalog_3 :: Text.PCLT.Catalog.PCLT_CatalogID -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)\n\u003c/pre\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.Catalog\"\n\u003c/pre\u003e\u003cp\u003eCatalog is a unit with 3 fields: catalog ID, config, and a map by\n template_IDs of templates, where each template is: minimal SDL required\n to represent message from this template, and a maps by languages of\n localized templates.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.CatalogFromHSRT\"\n\u003c/pre\u003e\u003cp\u003eWe want to add to the default catalog some our application specific\n entries (templates)\n\u003c/p\u003e\u003cpre\u003e addFromHSRTToCatalog_2 :: HasStaticRawPCLTs a =\u003e a -\u003e PCLT_Catalog -\u003e (StdErr_CLBS, ShowDetalizationLevel, LanguageName) -\u003e (PCLT_Catalog, StdErr_CLBS)\n\u003c/pre\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.CommonTypes\"\n\u003c/pre\u003e\u003cp\u003eSome type aliases, like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLanguageName\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.Config\"\n\u003c/pre\u003e\u003cp\u003eConfiguration that influences the behaviour of catalog formation routines\n and messages generation routines.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.MakeMessage\"\n\u003c/pre\u003e\u003cp\u003ePCSI(template_id + params) + language_name + recepient_SDL + catalog \u003e---(Text.PCLT.MakeMessage)---\u003e message\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.MakeMessage2\"\n\u003c/pre\u003e\u003cp\u003eSome comfort wrappers for \u003ca\u003eText.PCLT.MakeMessage\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.SDL\"\n\u003c/pre\u003e\u003cp\u003eSDL (Show Detalization Level) is a 1-dimensional variable type, built\n on Int, but extended with additional values:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eZero_SDL\u003c/code\u003e (absolute minimal level) \u003ccode\u003e\u003c One_SDL\u003c/code\u003e (minimal something) \u003ccode\u003e\u003c SDL Int \u003c InfinitelyBig_SDL\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eWith SDL we regulate, how much some Reader (of our generated messages)\n wishes (is allowed) to see.\n\u003c/p\u003e\u003cp\u003e_______________\n\u003c/p\u003e\u003cpre\u003e export \"Text.PCLT.ShowAsPCSI__\"\n\u003c/pre\u003e\u003cp\u003eSome general instances of \u003ccode\u003e\u003ca\u003eShowAsPCSI\u003c/a\u003e\u003c/code\u003e class are to be found here\n (Bool, ShowAsPCSI a =\u003e Maybe a, SomeException)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PCLT",
          "name": "PCLT",
          "package": "PCLT",
          "source": "src/Text-PCLT.html",
          "type": "module"
        },
        "index": {
          "description": "This is thought to be imported outside of PCLT package by modules that use PCLT logics catalog formation routines and messages generation routines And another briefing on what is PCLT First is in the top level of Haddock documentation provided for the package export Text.PCLT.SH This module provides interfaces to the classes ShowAsPCSI and HasStaticRawPCLTs an all the routines that usually are used for declaration of their instanitations export Text.ConstraintedLBS constrainting the constraint here is on it size wrapper for lazy ByteString LBS this container is used for messages generated from PCLT templates export Text.PCLT.InitialDefaultCatalog initDefaultCatalog Text.PCLT.Catalog.PCLT CatalogID StdErr CLBS ShowDetalizationLevel LanguageName PCLT Catalog StdErr CLBS export Text.PCLT.Catalog Catalog is unit with fields catalog ID config and map by template IDs of templates where each template is minimal SDL required to represent message from this template and maps by languages of localized templates export Text.PCLT.CatalogFromHSRT We want to add to the default catalog some our application specific entries templates addFromHSRTToCatalog HasStaticRawPCLTs PCLT Catalog StdErr CLBS ShowDetalizationLevel LanguageName PCLT Catalog StdErr CLBS export Text.PCLT.CommonTypes Some type aliases like LanguageName String export Text.PCLT.Config Configuration that influences the behaviour of catalog formation routines and messages generation routines export Text.PCLT.MakeMessage PCSI template id params language name recepient SDL catalog Text.PCLT.MakeMessage message export Text.PCLT.MakeMessage2 Some comfort wrappers for Text.PCLT.MakeMessage export Text.PCLT.SDL SDL Show Detalization Level is dimensional variable type built on Int but extended with additional values Zero SDL absolute minimal level One SDL minimal something SDL Int InfinitelyBig SDL With SDL we regulate how much some Reader of our generated messages wishes is allowed to see export Text.PCLT.ShowAsPCSI Some general instances of ShowAsPCSI class are to be found here Bool ShowAsPCSI Maybe SomeException",
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "PCLT",
          "package": "PCLT",
          "partial": "PCLT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "package": "PCLT",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "package": "PCLT",
          "partial": "PCLTRaw Catalog Text PCLT Show As PCSI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:PCLTRawCatalog__Text_PCLT_ShowAsPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "package": "PCLT",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "package": "PCLT",
          "partial": "PCLTRaw Catalog Text PCLT Show As PCSI General Commons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "SeparatedSectorMarker_PCSIWrapped",
          "package": "PCLT",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#SeparatedSectorMarker_PCSIWrapped",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "SeparatedSectorMarker_PCSIWrapped",
          "package": "PCLT",
          "partial": "Separated Sector Marker PCSIWrapped",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:SeparatedSectorMarker_PCSIWrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "StandartMarkingStrategyError_PCSIWrapped",
          "package": "PCLT",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#StandartMarkingStrategyError_PCSIWrapped",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "StandartMarkingStrategyError_PCSIWrapped",
          "package": "PCLT",
          "partial": "Standart Marking Strategy Error PCSIWrapped",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#t:StandartMarkingStrategyError_PCSIWrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "package": "PCLT",
          "signature": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI",
          "package": "PCLT",
          "partial": "PCLTRaw Catalog Text PCLT Show As PCSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:PCLTRawCatalog__Text_PCLT_ShowAsPCSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "package": "PCLT",
          "signature": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons",
          "package": "PCLT",
          "partial": "PCLTRaw Catalog Text PCLT Show As PCSI General Commons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:PCLTRawCatalog__Text_PCLT_ShowAsPCSI_GeneralCommons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "SeparatedSectorMarker_PCSIWrapped",
          "package": "PCLT",
          "signature": "SeparatedSectorMarker_PCSIWrapped SeparatedSectorMarker",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#SeparatedSectorMarker_PCSIWrapped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "SeparatedSectorMarker_PCSIWrapped",
          "package": "PCLT",
          "partial": "Separated Sector Marker PCSIWrapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:SeparatedSectorMarker_PCSIWrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PCLT",
          "name": "StandartMarkingStrategyError_PCSIWrapped",
          "package": "PCLT",
          "signature": "StandartMarkingStrategyError_PCSIWrapped StandartMarkingStrategyError",
          "source": "src/Text-PCLT-ShowAsPCSI__.html#StandartMarkingStrategyError_PCSIWrapped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PCLT",
          "module": "Text.PCLT",
          "name": "StandartMarkingStrategyError_PCSIWrapped",
          "package": "PCLT",
          "partial": "Standart Marking Strategy Error PCSIWrapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PCLT/docs/Text-PCLT.html#v:StandartMarkingStrategyError_PCSIWrapped"
      }
    }
  ]
]