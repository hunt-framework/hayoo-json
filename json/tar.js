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
        "word": "tar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePerform various checks on tar file entries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "Check",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Check.html",
          "type": "module"
        },
        "index": {
          "description": "Perform various checks on tar file entries",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "Check",
          "package": "tar",
          "partial": "Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors arising from tar file names being in some way invalid or dangerous\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "FileNameError",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Check.html#FileNameError",
          "type": "data"
        },
        "index": {
          "description": "Errors arising from tar file names being in some way invalid or dangerous",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "FileNameError",
          "package": "tar",
          "partial": "File Name Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#t:FileNameError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotential portability issues in a tar archive\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "PortabilityError",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Check.html#PortabilityError",
          "type": "data"
        },
        "index": {
          "description": "Potential portability issues in tar archive",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "PortabilityError",
          "package": "tar",
          "partial": "Portability Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#t:PortabilityError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a platform that portability issues arise from\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "PortabilityPlatform",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Check.html#PortabilityPlatform",
          "type": "type"
        },
        "index": {
          "description": "The name of platform that portability issues arise from",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "PortabilityPlatform",
          "package": "tar",
          "partial": "Portability Platform",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#t:PortabilityPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error that occurs if a tar file is a \"tar bomb\" that would extract\n files outside of the intended directory.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "TarBombError",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Check.html#TarBombError",
          "type": "data"
        },
        "index": {
          "description": "An error that occurs if tar file is tar bomb that would extract files outside of the intended directory",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "TarBombError",
          "package": "tar",
          "partial": "Tar Bomb Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#t:TarBombError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "AbsoluteFileName",
          "package": "tar",
          "signature": "AbsoluteFileName FilePath",
          "source": "src/Codec-Archive-Tar-Check.html#FileNameError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "AbsoluteFileName",
          "package": "tar",
          "partial": "Absolute File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:AbsoluteFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "InvalidFileName",
          "package": "tar",
          "signature": "InvalidFileName FilePath",
          "source": "src/Codec-Archive-Tar-Check.html#FileNameError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "InvalidFileName",
          "package": "tar",
          "partial": "Invalid File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:InvalidFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableEntryNameChar",
          "package": "tar",
          "signature": "NonPortableEntryNameChar FilePath",
          "source": "src/Codec-Archive-Tar-Check.html#PortabilityError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableEntryNameChar",
          "package": "tar",
          "partial": "Non Portable Entry Name Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:NonPortableEntryNameChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableFileName",
          "package": "tar",
          "signature": "NonPortableFileName PortabilityPlatform FileNameError",
          "source": "src/Codec-Archive-Tar-Check.html#PortabilityError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableFileName",
          "package": "tar",
          "partial": "Non Portable File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:NonPortableFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableFileType",
          "package": "tar",
          "signature": "NonPortableFileType",
          "source": "src/Codec-Archive-Tar-Check.html#PortabilityError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableFileType",
          "package": "tar",
          "partial": "Non Portable File Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:NonPortableFileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableFormat",
          "package": "tar",
          "signature": "NonPortableFormat Format",
          "source": "src/Codec-Archive-Tar-Check.html#PortabilityError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "NonPortableFormat",
          "package": "tar",
          "partial": "Non Portable Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:NonPortableFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Check",
          "name": "TarBombError",
          "package": "tar",
          "signature": "TarBombError FilePath",
          "source": "src/Codec-Archive-Tar-Check.html#TarBombError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "TarBombError",
          "package": "tar",
          "partial": "Tar Bomb Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:TarBombError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function checks a sequence of tar entries for a number of portability\n issues. It will complain if:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The old \"Unix V7\" or \"gnu\" formats are used. For maximum portability\n   only the POSIX standard \"ustar\" format should be used.\n\u003c/li\u003e\u003cli\u003e A non-portable entry type is used. Only ordinary files, hard links,\n   symlinks and directories are portable. Device files, pipes and others are\n   not portable between all common operating systems.\n\u003c/li\u003e\u003cli\u003e Non-ASCII characters are used in file names. There is no agreed portable\n   convention for Unicode or other extended character sets in file names in\n   tar archives.\n\u003c/li\u003e\u003cli\u003e File names that would not be portable to both Unix and Windows. This check\n   includes characters that are valid in both systems and the '/' vs '\\'\n   directory separator conventions.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "checkPortability",
          "package": "tar",
          "signature": "Entries e -\u003e Entries (Either e PortabilityError)",
          "source": "src/Codec-Archive-Tar-Check.html#checkPortability",
          "type": "function"
        },
        "index": {
          "description": "This function checks sequence of tar entries for number of portability issues It will complain if The old Unix V7 or gnu formats are used For maximum portability only the POSIX standard ustar format should be used non-portable entry type is used Only ordinary files hard links symlinks and directories are portable Device files pipes and others are not portable between all common operating systems Non-ASCII characters are used in file names There is no agreed portable convention for Unicode or other extended character sets in file names in tar archives File names that would not be portable to both Unix and Windows This check includes characters that are valid in both systems and the vs directory separator conventions",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "checkPortability",
          "normalized": "Entries a-\u003eEntries(Either a PortabilityError)",
          "package": "tar",
          "partial": "Portability",
          "signature": "Entries e-\u003eEntries(Either e PortabilityError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:checkPortability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function checks a sequence of tar entries for file name security\n problems. It checks that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e file paths are not absolute\n\u003c/li\u003e\u003cli\u003e file paths do not contain any path components that are \"\u003ccode\u003e..\u003c/code\u003e\"\n\u003c/li\u003e\u003cli\u003e file names are valid\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese checks are from the perspective of the current OS. That means we check\n for \"\u003ccode\u003eC:blah\u003c/code\u003e\" files on Windows and \"/blah\" files on Unix. For archive\n entry types \u003ccode\u003e\u003ca\u003eHardLink\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSymbolicLink\u003c/a\u003e\u003c/code\u003e the same checks are done for the\n link target. A failure in any entry terminates the sequence of entries with\n an error.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "checkSecurity",
          "package": "tar",
          "signature": "Entries e -\u003e Entries (Either e FileNameError)",
          "source": "src/Codec-Archive-Tar-Check.html#checkSecurity",
          "type": "function"
        },
        "index": {
          "description": "This function checks sequence of tar entries for file name security problems It checks that file paths are not absolute file paths do not contain any path components that are file names are valid These checks are from the perspective of the current OS That means we check for blah files on Windows and blah files on Unix For archive entry types HardLink and SymbolicLink the same checks are done for the link target failure in any entry terminates the sequence of entries with an error",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "checkSecurity",
          "normalized": "Entries a-\u003eEntries(Either a FileNameError)",
          "package": "tar",
          "partial": "Security",
          "signature": "Entries e-\u003eEntries(Either e FileNameError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:checkSecurity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function checks a sequence of tar entries for being a \"tar bomb\".\n This means that the tar file does not follow the standard convention that\n all entries are within a single subdirectory, e.g. a file \"foo.tar\" would\n usually have all entries within the \"foo/\" subdirectory.\n\u003c/p\u003e\u003cp\u003eGiven the expected subdirectory, this function checks all entries are within\n that subdirectroy.\n\u003c/p\u003e\u003cp\u003eNote: This check must be used in conjunction with \u003ccode\u003e\u003ca\u003echeckSecurity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Check",
          "name": "checkTarbomb",
          "package": "tar",
          "signature": "FilePath -\u003e Entries e -\u003e Entries (Either e TarBombError)",
          "source": "src/Codec-Archive-Tar-Check.html#checkTarbomb",
          "type": "function"
        },
        "index": {
          "description": "This function checks sequence of tar entries for being tar bomb This means that the tar file does not follow the standard convention that all entries are within single subdirectory e.g file foo.tar would usually have all entries within the foo subdirectory Given the expected subdirectory this function checks all entries are within that subdirectroy Note This check must be used in conjunction with checkSecurity",
          "hierarchy": "Codec Archive Tar Check",
          "module": "Codec.Archive.Tar.Check",
          "name": "checkTarbomb",
          "normalized": "FilePath-\u003eEntries a-\u003eEntries(Either a TarBombError)",
          "package": "tar",
          "partial": "Tarbomb",
          "signature": "FilePath-\u003eEntries e-\u003eEntries(Either e TarBombError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Check.html#v:checkTarbomb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and functions to manipulate tar entries.\n\u003c/p\u003e\u003cp\u003eWhile the \u003ca\u003eCodec.Archive.Tar\u003c/a\u003e module provides only the simple high level\n API, this module provides full access to the details of tar entries. This\n lets you inspect all the meta-data, construct entries and handle error cases\n more precisely.\n\u003c/p\u003e\u003cp\u003eThis module uses common names and so is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e import qualified Codec.Archive.Tar       as Tar\n import qualified Codec.Archive.Tar.Entry as Tar\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Entry",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Entry.html",
          "type": "module"
        },
        "index": {
          "description": "Types and functions to manipulate tar entries While the Codec.Archive.Tar module provides only the simple high level API this module provides full access to the details of tar entries This lets you inspect all the meta-data construct entries and handle error cases more precisely This module uses common names and so is designed to be imported qualified import qualified Codec.Archive.Tar as Tar import qualified Codec.Archive.Tar.Entry as Tar",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Entry",
          "package": "tar",
          "partial": "Entry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "DevMajor",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#DevMajor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "DevMajor",
          "package": "tar",
          "partial": "Dev Major",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:DevMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "DevMinor",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#DevMinor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "DevMinor",
          "package": "tar",
          "partial": "Dev Minor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:DevMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTar archive entry.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Entry",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "Tar archive entry",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Entry",
          "package": "tar",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content of a tar archive entry, which depends on the type of entry.\n\u003c/p\u003e\u003cp\u003ePortable archives should contain only \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "EntryContent",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "data"
        },
        "index": {
          "description": "The content of tar archive entry which depends on the type of entry Portable archives should contain only NormalFile and Directory",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "EntryContent",
          "package": "tar",
          "partial": "Entry Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:EntryContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of seconds since the UNIX epoch\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "EpochTime",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#EpochTime",
          "type": "type"
        },
        "index": {
          "description": "The number of seconds since the UNIX epoch",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "EpochTime",
          "package": "tar",
          "partial": "Epoch Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:EpochTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "FileSize",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#FileSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "FileSize",
          "package": "tar",
          "partial": "File Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:FileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere have been a number of extensions to the tar file format over the\n years. They all share the basic entry fields and put more meta-data in\n different extended headers.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Format",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#Format",
          "type": "data"
        },
        "index": {
          "description": "There have been number of extensions to the tar file format over the years They all share the basic entry fields and put more meta-data in different extended headers",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Format",
          "package": "tar",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tar format allows just 100 ASCII characters for the \u003ccode\u003e\u003ca\u003eSymbolicLink\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eHardLink\u003c/a\u003e\u003c/code\u003e entry types.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "LinkTarget",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#LinkTarget",
          "type": "data"
        },
        "index": {
          "description": "The tar format allows just ASCII characters for the SymbolicLink and HardLink entry types",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "LinkTarget",
          "package": "tar",
          "partial": "Link Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:LinkTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "Ownership",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#Ownership",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Ownership",
          "package": "tar",
          "partial": "Ownership",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:Ownership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "Permissions",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#Permissions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Permissions",
          "package": "tar",
          "partial": "Permissions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:Permissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe classic tar format allowed just 100 characters for the file name. The\n USTAR format extended this with an extra 155 characters, however it uses a\n complex method of splitting the name between the two sections.\n\u003c/p\u003e\u003cp\u003eInstead of just putting any overflow into the extended area, it uses the\n extended area as a prefix. The aggravating insane bit however is that the\n prefix (if any) must only contain a directory prefix. That is the split\n between the two areas must be on a directory separator boundary. So there is\n no simple calculation to work out if a file name is too long. Instead we\n have to try to find a valid split that makes the name fit in the two areas.\n\u003c/p\u003e\u003cp\u003eThe rationale presumably was to make it a bit more compatible with old tar\n programs that only understand the classic format. A classic tar would be\n able to extract the file name and possibly some dir prefix, but not the\n full dir prefix. So the files would end up in the wrong place, but that's\n probably better than ending up with the wrong names too.\n\u003c/p\u003e\u003cp\u003eSo it's understandable but rather annoying.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Tar paths use Posix format (ie \u003ccode\u003e'/'\u003c/code\u003e directory separators), irrespective\n   of the local path conventions.\n\u003c/li\u003e\u003cli\u003e The directory separator between the prefix and name is \u003cem\u003enot\u003c/em\u003e stored.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "TarPath",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#TarPath",
          "type": "data"
        },
        "index": {
          "description": "The classic tar format allowed just characters for the file name The USTAR format extended this with an extra characters however it uses complex method of splitting the name between the two sections Instead of just putting any overflow into the extended area it uses the extended area as prefix The aggravating insane bit however is that the prefix if any must only contain directory prefix That is the split between the two areas must be on directory separator boundary So there is no simple calculation to work out if file name is too long Instead we have to try to find valid split that makes the name fit in the two areas The rationale presumably was to make it bit more compatible with old tar programs that only understand the classic format classic tar would be able to extract the file name and possibly some dir prefix but not the full dir prefix So the files would end up in the wrong place but that probably better than ending up with the wrong names too So it understandable but rather annoying Tar paths use Posix format ie directory separators irrespective of the local path conventions The directory separator between the prefix and name is not stored",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "TarPath",
          "package": "tar",
          "partial": "Tar Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:TarPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "TypeCode",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#TypeCode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "TypeCode",
          "package": "tar",
          "partial": "Type Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#t:TypeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "BlockDevice",
          "package": "tar",
          "signature": "BlockDevice !DevMajor !DevMinor",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:BlockDevice\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:BlockDevice\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "BlockDevice",
          "package": "tar",
          "partial": "Block Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:BlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "CharacterDevice",
          "package": "tar",
          "signature": "CharacterDevice !DevMajor !DevMinor",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:CharacterDevice\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:CharacterDevice\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "CharacterDevice",
          "package": "tar",
          "partial": "Character Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:CharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "Directory",
          "package": "tar",
          "signature": "Directory",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:Directory\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:Directory\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Directory",
          "package": "tar",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "Entry",
          "package": "tar",
          "signature": "Entry",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Entry",
          "package": "tar",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe GNU tar implementation also extends the classic V7 format, though\n in a slightly different way from the USTAR format. In general for new\n archives the standard USTAR/POSIX should be used.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "GnuFormat",
          "package": "tar",
          "signature": "GnuFormat",
          "source": "src/Codec-Archive-Tar-Types.html#Format",
          "type": "function"
        },
        "index": {
          "description": "The GNU tar implementation also extends the classic V7 format though in slightly different way from the USTAR format In general for new archives the standard USTAR POSIX should be used",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "GnuFormat",
          "package": "tar",
          "partial": "Gnu Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:GnuFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "HardLink",
          "package": "tar",
          "signature": "HardLink !LinkTarget",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:HardLink\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:HardLink\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "HardLink",
          "package": "tar",
          "partial": "Hard Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:HardLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "NamedPipe",
          "package": "tar",
          "signature": "NamedPipe",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:NamedPipe\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:NamedPipe\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "NamedPipe",
          "package": "tar",
          "partial": "Named Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "NormalFile",
          "package": "tar",
          "signature": "NormalFile ByteString !FileSize",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:NormalFile\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:NormalFile\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "NormalFile",
          "package": "tar",
          "partial": "Normal File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:NormalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "OtherEntryType",
          "package": "tar",
          "signature": "OtherEntryType !TypeCode ByteString !FileSize",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:OtherEntryType\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:OtherEntryType\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "OtherEntryType",
          "package": "tar",
          "partial": "Other Entry Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:OtherEntryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar.Entry",
          "name": "Ownership",
          "package": "tar",
          "signature": "Ownership",
          "source": "src/Codec-Archive-Tar-Types.html#Ownership",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "Ownership",
          "package": "tar",
          "partial": "Ownership",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:Ownership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "SymbolicLink",
          "package": "tar",
          "signature": "SymbolicLink !LinkTarget",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:SymbolicLink\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:SymbolicLink\"]"
        },
        "index": {
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "SymbolicLink",
          "package": "tar",
          "partial": "Symbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:SymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"USTAR\" format is an extension of the classic V7 format. It was\n later standardised by POSIX. It has some restrictions but is the most\n portable format.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "UstarFormat",
          "package": "tar",
          "signature": "UstarFormat",
          "source": "src/Codec-Archive-Tar-Types.html#Format",
          "type": "function"
        },
        "index": {
          "description": "The USTAR format is an extension of the classic V7 format It was later standardised by POSIX It has some restrictions but is the most portable format",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "UstarFormat",
          "package": "tar",
          "partial": "Ustar Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:UstarFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the classic Unix V7 tar format. It does not support owner and\n group names, just numeric Ids. It also does not support device numbers.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "V7Format",
          "package": "tar",
          "signature": "V7Format",
          "source": "src/Codec-Archive-Tar-Types.html#Format",
          "type": "function"
        },
        "index": {
          "description": "This is the classic Unix V7 tar format It does not support owner and group names just numeric Ids It also does not support device numbers",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "V7Format",
          "package": "tar",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:V7Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tar \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e for a directory.\n\u003c/p\u003e\u003cp\u003eEntry fields such as file permissions and ownership have default values.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "directoryEntry",
          "package": "tar",
          "signature": "TarPath -\u003e Entry",
          "source": "src/Codec-Archive-Tar-Types.html#directoryEntry",
          "type": "function"
        },
        "index": {
          "description": "tar Entry for directory Entry fields such as file permissions and ownership have default values",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "directoryEntry",
          "normalized": "TarPath-\u003eEntry",
          "package": "tar",
          "partial": "Entry",
          "signature": "TarPath-\u003eEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:directoryEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erwxr-xr-x\u003c/code\u003e for directories\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "directoryPermissions",
          "package": "tar",
          "signature": "Permissions",
          "source": "src/Codec-Archive-Tar-Types.html#directoryPermissions",
          "type": "function"
        },
        "index": {
          "description": "rwxr-xr-x for directories",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "directoryPermissions",
          "package": "tar",
          "partial": "Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:directoryPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe real content of the entry. For \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e this includes the\n file data. An entry usually contains a \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryContent",
          "package": "tar",
          "signature": "EntryContent",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The real content of the entry For NormalFile this includes the file data An entry usually contains NormalFile or Directory",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryContent",
          "package": "tar",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tar format the archive is using.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryFormat",
          "package": "tar",
          "signature": "Format",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The tar format the archive is using",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryFormat",
          "package": "tar",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user and group to which this file belongs.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryOwnership",
          "package": "tar",
          "signature": "Ownership",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The user and group to which this file belongs",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryOwnership",
          "package": "tar",
          "partial": "Ownership",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryOwnership"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e of the file or directory within the archive.\n\u003c/p\u003e",
          "module": "[\"Codec.Archive.Tar.Entry\",\"Codec.Archive.Tar\"]",
          "name": "entryPath",
          "package": "tar",
          "signature": "Entry -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#entryPath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryPath\",\"http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:entryPath\"]"
        },
        "index": {
          "description": "Native FilePath of the file or directory within the archive",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryPath",
          "normalized": "Entry-\u003eFilePath",
          "package": "tar",
          "partial": "Path",
          "signature": "Entry-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile permissions (Unix style file mode).\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryPermissions",
          "package": "tar",
          "signature": "Permissions",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "File permissions Unix style file mode",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryPermissions",
          "package": "tar",
          "partial": "Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path of the file or directory within the archive. This is in a\n tar-specific form. Use \u003ccode\u003e\u003ca\u003eentryPath\u003c/a\u003e\u003c/code\u003e to get a native \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryTarPath",
          "package": "tar",
          "signature": "TarPath",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The path of the file or directory within the archive This is in tar-specific form Use entryPath to get native FilePath",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryTarPath",
          "package": "tar",
          "partial": "Tar Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryTarPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time the file was last modified.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryTime",
          "package": "tar",
          "signature": "EpochTime",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The time the file was last modified",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "entryTime",
          "package": "tar",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:entryTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erwxr-xr-x\u003c/code\u003e for executable files\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "executableFilePermissions",
          "package": "tar",
          "signature": "Permissions",
          "source": "src/Codec-Archive-Tar-Types.html#executableFilePermissions",
          "type": "function"
        },
        "index": {
          "description": "rwxr-xr-x for executable files",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "executableFilePermissions",
          "package": "tar",
          "partial": "File Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:executableFilePermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tar \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e for a file.\n\u003c/p\u003e\u003cp\u003eEntry  fields such as file permissions and ownership have default values.\n\u003c/p\u003e\u003cp\u003eYou can use this as a basis and override specific fields. For example if you\n need an executable file you could use:\n\u003c/p\u003e\u003cpre\u003e (fileEntry name content) { fileMode = executableFileMode }\n\u003c/pre\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fileEntry",
          "package": "tar",
          "signature": "TarPath -\u003e ByteString -\u003e Entry",
          "source": "src/Codec-Archive-Tar-Types.html#fileEntry",
          "type": "function"
        },
        "index": {
          "description": "tar Entry for file Entry fields such as file permissions and ownership have default values You can use this as basis and override specific fields For example if you need an executable file you could use fileEntry name content fileMode executableFileMode",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fileEntry",
          "normalized": "TarPath-\u003eByteString-\u003eEntry",
          "package": "tar",
          "partial": "Entry",
          "signature": "TarPath-\u003eByteString-\u003eEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fileEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tar \u003ccode\u003e\u003ca\u003eLinkTarget\u003c/a\u003e\u003c/code\u003e to a native \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromLinkTarget",
          "package": "tar",
          "signature": "LinkTarget -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#fromLinkTarget",
          "type": "function"
        },
        "index": {
          "description": "Convert tar LinkTarget to native FilePath",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromLinkTarget",
          "normalized": "LinkTarget-\u003eFilePath",
          "package": "tar",
          "partial": "Link Target",
          "signature": "LinkTarget-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fromLinkTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tar \u003ccode\u003e\u003ca\u003eLinkTarget\u003c/a\u003e\u003c/code\u003e to a Unix/Posix \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromLinkTargetToPosixPath",
          "package": "tar",
          "signature": "LinkTarget -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#fromLinkTargetToPosixPath",
          "type": "function"
        },
        "index": {
          "description": "Convert tar LinkTarget to Unix Posix FilePath",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromLinkTargetToPosixPath",
          "normalized": "LinkTarget-\u003eFilePath",
          "package": "tar",
          "partial": "Link Target To Posix Path",
          "signature": "LinkTarget-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fromLinkTargetToPosixPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tar \u003ccode\u003e\u003ca\u003eLinkTarget\u003c/a\u003e\u003c/code\u003e to a Windows \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromLinkTargetToWindowsPath",
          "package": "tar",
          "signature": "LinkTarget -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#fromLinkTargetToWindowsPath",
          "type": "function"
        },
        "index": {
          "description": "Convert tar LinkTarget to Windows FilePath",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromLinkTargetToWindowsPath",
          "normalized": "LinkTarget-\u003eFilePath",
          "package": "tar",
          "partial": "Link Target To Windows Path",
          "signature": "LinkTarget-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fromLinkTargetToWindowsPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e to a native \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe native \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e will use the native directory separator but it is not\n otherwise checked for validity or sanity. In particular:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The tar path may be invalid as a native path, eg the file name \u003ccode\u003e\"nul\"\u003c/code\u003e\n   is not valid on Windows.\n\u003c/li\u003e\u003cli\u003e The tar path may be an absolute path or may contain \u003ccode\u003e\"..\"\u003c/code\u003e components.\n   For security reasons this should not usually be allowed, but it is your\n   responsibility to check for these conditions (eg using \u003ccode\u003echeckSecurity\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromTarPath",
          "package": "tar",
          "signature": "TarPath -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#fromTarPath",
          "type": "function"
        },
        "index": {
          "description": "Convert TarPath to native FilePath The native FilePath will use the native directory separator but it is not otherwise checked for validity or sanity In particular The tar path may be invalid as native path eg the file name nul is not valid on Windows The tar path may be an absolute path or may contain components For security reasons this should not usually be allowed but it is your responsibility to check for these conditions eg using checkSecurity",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromTarPath",
          "normalized": "TarPath-\u003eFilePath",
          "package": "tar",
          "partial": "Tar Path",
          "signature": "TarPath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fromTarPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e to a Unix/Posix \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe difference compared to \u003ccode\u003e\u003ca\u003efromTarPath\u003c/a\u003e\u003c/code\u003e is that it always returns a Unix\n style path irrespective of the current operating system.\n\u003c/p\u003e\u003cp\u003eThis is useful to check how a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e would be interpreted on a specific\n operating system, eg to perform portability checks.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromTarPathToPosixPath",
          "package": "tar",
          "signature": "TarPath -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#fromTarPathToPosixPath",
          "type": "function"
        },
        "index": {
          "description": "Convert TarPath to Unix Posix FilePath The difference compared to fromTarPath is that it always returns Unix style path irrespective of the current operating system This is useful to check how TarPath would be interpreted on specific operating system eg to perform portability checks",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromTarPathToPosixPath",
          "normalized": "TarPath-\u003eFilePath",
          "package": "tar",
          "partial": "Tar Path To Posix Path",
          "signature": "TarPath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fromTarPathToPosixPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e to a Windows \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe only difference compared to \u003ccode\u003e\u003ca\u003efromTarPath\u003c/a\u003e\u003c/code\u003e is that it always returns a\n Windows style path irrespective of the current operating system.\n\u003c/p\u003e\u003cp\u003eThis is useful to check how a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e would be interpreted on a specific\n operating system, eg to perform portability checks.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromTarPathToWindowsPath",
          "package": "tar",
          "signature": "TarPath -\u003e FilePath",
          "source": "src/Codec-Archive-Tar-Types.html#fromTarPathToWindowsPath",
          "type": "function"
        },
        "index": {
          "description": "Convert TarPath to Windows FilePath The only difference compared to fromTarPath is that it always returns Windows style path irrespective of the current operating system This is useful to check how TarPath would be interpreted on specific operating system eg to perform portability checks",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "fromTarPathToWindowsPath",
          "normalized": "TarPath-\u003eFilePath",
          "package": "tar",
          "partial": "Tar Path To Windows Path",
          "signature": "TarPath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:fromTarPathToWindowsPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a utility function, much like \u003ccode\u003e\u003ca\u003egetDirectoryContents\u003c/a\u003e\u003c/code\u003e. The\n difference is that it includes the contents of subdirectories.\n\u003c/p\u003e\u003cp\u003eThe paths returned are all relative to the top directory. Directory paths\n are distinguishable by having a trailing path separator\n (see \u003ccode\u003e\u003ca\u003ehasTrailingPathSeparator\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAll directories are listed before the files that they contain. Amongst the\n contents of a directory, subdirectories are listed after normal files. The\n overall result is that files within a directory will be together in a single\n contiguous group. This tends to improve file layout and IO performance when\n creating or extracting tar archives.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function returns results lazily. Subdirectories are not scanned\n until the files entries in the parent directory have been consumed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "getDirectoryContentsRecursive",
          "package": "tar",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/Codec-Archive-Tar-Pack.html#getDirectoryContentsRecursive",
          "type": "function"
        },
        "index": {
          "description": "This is utility function much like getDirectoryContents The difference is that it includes the contents of subdirectories The paths returned are all relative to the top directory Directory paths are distinguishable by having trailing path separator see hasTrailingPathSeparator All directories are listed before the files that they contain Amongst the contents of directory subdirectories are listed after normal files The overall result is that files within directory will be together in single contiguous group This tends to improve file layout and IO performance when creating or extracting tar archives This function returns results lazily Subdirectories are not scanned until the files entries in the parent directory have been consumed",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "getDirectoryContentsRecursive",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "tar",
          "partial": "Directory Contents Recursive",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:getDirectoryContentsRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric owner group id. Should be set to \u003ccode\u003e0\u003c/code\u003e if unknown.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "groupId",
          "package": "tar",
          "signature": "Int",
          "source": "src/Codec-Archive-Tar-Types.html#Ownership",
          "type": "function"
        },
        "index": {
          "description": "Numeric owner group id Should be set to if unknown",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "groupId",
          "package": "tar",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:groupId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe owner group name. Should be set to \u003ccode\u003e\"\"\u003c/code\u003e if unknown.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "groupName",
          "package": "tar",
          "signature": "String",
          "source": "src/Codec-Archive-Tar-Types.html#Ownership",
          "type": "function"
        },
        "index": {
          "description": "The owner group name Should be set to if unknown",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "groupName",
          "package": "tar",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erw-r--r--\u003c/code\u003e for normal files\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "ordinaryFilePermissions",
          "package": "tar",
          "signature": "Permissions",
          "source": "src/Codec-Archive-Tar-Types.html#ordinaryFilePermissions",
          "type": "function"
        },
        "index": {
          "description": "rw-r--r for normal files",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "ordinaryFilePermissions",
          "package": "tar",
          "partial": "File Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:ordinaryFilePermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric owner user id. Should be set to \u003ccode\u003e0\u003c/code\u003e if unknown.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "ownerId",
          "package": "tar",
          "signature": "Int",
          "source": "src/Codec-Archive-Tar-Types.html#Ownership",
          "type": "function"
        },
        "index": {
          "description": "Numeric owner user id Should be set to if unknown",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "ownerId",
          "package": "tar",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:ownerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe owner user name. Should be set to \u003ccode\u003e\"\"\u003c/code\u003e if unknown.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "ownerName",
          "package": "tar",
          "signature": "String",
          "source": "src/Codec-Archive-Tar-Types.html#Ownership",
          "type": "function"
        },
        "index": {
          "description": "The owner user name Should be set to if unknown",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "ownerName",
          "package": "tar",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:ownerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a tar \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e based on a local directory (but not its contents).\n\u003c/p\u003e\u003cp\u003eThe only attribute of the directory that is used is its modification time.\n Directory ownership and detailed permissions are not preserved.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "packDirectoryEntry",
          "package": "tar",
          "signature": "FilePath-\u003e TarPath-\u003e IO Entry",
          "type": "function"
        },
        "index": {
          "description": "Construct tar Entry based on local directory but not its contents The only attribute of the directory that is used is its modification time Directory ownership and detailed permissions are not preserved",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "packDirectoryEntry",
          "normalized": "FilePath-\u003eTarPath-\u003eIO Entry",
          "package": "tar",
          "partial": "Directory Entry",
          "signature": "FilePath-\u003eTarPath-\u003eIO Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:packDirectoryEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a tar \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e based on a local file.\n\u003c/p\u003e\u003cp\u003eThis sets the entry size, the data contained in the file and the file's\n modification time. If the file is executable then that information is also\n preserved. File ownership and detailed permissions are not preserved.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The file contents is read lazily.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "packFileEntry",
          "package": "tar",
          "signature": "FilePath-\u003e TarPath-\u003e IO Entry",
          "type": "function"
        },
        "index": {
          "description": "Construct tar Entry based on local file This sets the entry size the data contained in the file and the file modification time If the file is executable then that information is also preserved File ownership and detailed permissions are not preserved The file contents is read lazily",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "packFileEntry",
          "normalized": "FilePath-\u003eTarPath-\u003eIO Entry",
          "package": "tar",
          "partial": "File Entry",
          "signature": "FilePath-\u003eTarPath-\u003eIO Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:packFileEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEntry\u003c/a\u003e\u003c/code\u003e with all default values except for the file name and type. It\n uses the portable USTAR/POSIX format (see \u003ccode\u003eUstarHeader\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eYou can use this as a basis and override specific fields, eg:\n\u003c/p\u003e\u003cpre\u003e (emptyEntry name HardLink) { linkTarget = target }\n\u003c/pre\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "simpleEntry",
          "package": "tar",
          "signature": "TarPath -\u003e EntryContent -\u003e Entry",
          "source": "src/Codec-Archive-Tar-Types.html#simpleEntry",
          "type": "function"
        },
        "index": {
          "description": "An Entry with all default values except for the file name and type It uses the portable USTAR POSIX format see UstarHeader You can use this as basis and override specific fields eg emptyEntry name HardLink linkTarget target",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "simpleEntry",
          "normalized": "TarPath-\u003eEntryContent-\u003eEntry",
          "package": "tar",
          "partial": "Entry",
          "signature": "TarPath-\u003eEntryContent-\u003eEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:simpleEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a native \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a tar \u003ccode\u003e\u003ca\u003eLinkTarget\u003c/a\u003e\u003c/code\u003e. This may fail if the\n string is longer than 100 characters or if it contains non-portable\n characters.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "toLinkTarget",
          "package": "tar",
          "signature": "FilePath -\u003e Maybe LinkTarget",
          "source": "src/Codec-Archive-Tar-Types.html#toLinkTarget",
          "type": "function"
        },
        "index": {
          "description": "Convert native FilePath to tar LinkTarget This may fail if the string is longer than characters or if it contains non-portable characters",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "toLinkTarget",
          "normalized": "FilePath-\u003eMaybe LinkTarget",
          "package": "tar",
          "partial": "Link Target",
          "signature": "FilePath-\u003eMaybe LinkTarget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:toLinkTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a native \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe conversion may fail if the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is too long. See \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e for a\n description of the problem with splitting long \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar.Entry",
          "name": "toTarPath",
          "package": "tar",
          "signature": "Bool-\u003e FilePath-\u003e Either String TarPath",
          "type": "function"
        },
        "index": {
          "description": "Convert native FilePath to TarPath The conversion may fail if the FilePath is too long See TarPath for description of the problem with splitting long FilePath",
          "hierarchy": "Codec Archive Tar Entry",
          "module": "Codec.Archive.Tar.Entry",
          "name": "toTarPath",
          "normalized": "Bool-\u003eFilePath-\u003eEither String TarPath",
          "package": "tar",
          "partial": "Tar Path",
          "signature": "Bool-\u003eFilePath-\u003eEither String TarPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar-Entry.html#v:toTarPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading, writing and manipulating \"\u003ccode\u003e.tar\u003c/code\u003e\" archive files.\n\u003c/p\u003e\u003cp\u003eThis module uses common names and so is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e import qualified Codec.Archive.Tar as Tar\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Codec.Archive.Tar",
          "name": "Tar",
          "package": "tar",
          "source": "src/Codec-Archive-Tar.html",
          "type": "module"
        },
        "index": {
          "description": "Reading writing and manipulating tar archive files This module uses common names and so is designed to be imported qualified import qualified Codec.Archive.Tar as Tar",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "Tar",
          "package": "tar",
          "partial": "Tar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tar archive is a sequence of entries.\n\u003c/p\u003e\u003cp\u003eThe point of this type as opposed to just using a list is that it makes the\n failure case explicit. We need this because the sequence of entries we get\n from reading a tarball can include errors.\n\u003c/p\u003e\u003cp\u003eIt is a concrete data type so you can manipulate it directly but it is often\n clearer to use the provided functions for mapping, folding and unfolding.\n\u003c/p\u003e\u003cp\u003eConverting from a list can be done with just \u003ccode\u003efoldr Next Done\u003c/code\u003e. Converting\n back into a list can be done with \u003ccode\u003e\u003ca\u003efoldEntries\u003c/a\u003e\u003c/code\u003e however in that case you\n must be prepared to handle the \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e case inherent in the \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance lets you concatenate archives or append entries to an\n archive.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "Entries",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#Entries",
          "type": "data"
        },
        "index": {
          "description": "tar archive is sequence of entries The point of this type as opposed to just using list is that it makes the failure case explicit We need this because the sequence of entries we get from reading tarball can include errors It is concrete data type so you can manipulate it directly but it is often clearer to use the provided functions for mapping folding and unfolding Converting from list can be done with just foldr Next Done Converting back into list can be done with foldEntries however in that case you must be prepared to handle the Fail case inherent in the Entries type The Monoid instance lets you concatenate archives or append entries to an archive",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "Entries",
          "package": "tar",
          "partial": "Entries",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#t:Entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTar archive entry.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "Entry",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "Tar archive entry",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "Entry",
          "package": "tar",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content of a tar archive entry, which depends on the type of entry.\n\u003c/p\u003e\u003cp\u003ePortable archives should contain only \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "EntryContent",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Types.html#EntryContent",
          "type": "data"
        },
        "index": {
          "description": "The content of tar archive entry which depends on the type of entry Portable archives should contain only NormalFile and Directory",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "EntryContent",
          "package": "tar",
          "partial": "Entry Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#t:EntryContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can be encountered when parsing a Tar archive.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "FormatError",
          "package": "tar",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "data"
        },
        "index": {
          "description": "Errors that can be encountered when parsing Tar archive",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "FormatError",
          "package": "tar",
          "partial": "Format Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#t:FormatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "BadTrailer",
          "package": "tar",
          "signature": "BadTrailer",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "BadTrailer",
          "package": "tar",
          "partial": "Bad Trailer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:BadTrailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "ChecksumIncorrect",
          "package": "tar",
          "signature": "ChecksumIncorrect",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "ChecksumIncorrect",
          "package": "tar",
          "partial": "Checksum Incorrect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:ChecksumIncorrect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "Done",
          "package": "tar",
          "signature": "Done",
          "source": "src/Codec-Archive-Tar-Types.html#Entries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "Done",
          "package": "tar",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "Fail",
          "package": "tar",
          "signature": "Fail e",
          "source": "src/Codec-Archive-Tar-Types.html#Entries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "Fail",
          "package": "tar",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "HeaderBadNumericEncoding",
          "package": "tar",
          "signature": "HeaderBadNumericEncoding",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "HeaderBadNumericEncoding",
          "package": "tar",
          "partial": "Header Bad Numeric Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:HeaderBadNumericEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "Next",
          "package": "tar",
          "signature": "Next Entry (Entries e)",
          "source": "src/Codec-Archive-Tar-Types.html#Entries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "Next",
          "package": "tar",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "NotTarFormat",
          "package": "tar",
          "signature": "NotTarFormat",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "NotTarFormat",
          "package": "tar",
          "partial": "Not Tar Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:NotTarFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "ShortTrailer",
          "package": "tar",
          "signature": "ShortTrailer",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "ShortTrailer",
          "package": "tar",
          "partial": "Short Trailer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:ShortTrailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "TrailingJunk",
          "package": "tar",
          "signature": "TrailingJunk",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "TrailingJunk",
          "package": "tar",
          "partial": "Trailing Junk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:TrailingJunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "TruncatedArchive",
          "package": "tar",
          "signature": "TruncatedArchive",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "TruncatedArchive",
          "package": "tar",
          "partial": "Truncated Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:TruncatedArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Archive.Tar",
          "name": "UnrecognisedTarFormat",
          "package": "tar",
          "signature": "UnrecognisedTarFormat",
          "source": "src/Codec-Archive-Tar-Read.html#FormatError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "UnrecognisedTarFormat",
          "package": "tar",
          "partial": "Unrecognised Tar Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:UnrecognisedTarFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\".tar\"\u003c/code\u003e file from a directory of files.\n\u003c/p\u003e\u003cp\u003eIt is equivalent to calling the standard \u003ccode\u003etar\u003c/code\u003e program like so:\n\u003c/p\u003e\u003cpre\u003e$ tar -f tarball.tar -C base -c dir\u003c/pre\u003e\u003cp\u003eThis assumes a directory \u003ccode\u003e./base/dir\u003c/code\u003e with files inside, eg\n \u003ccode\u003e./base/dir/foo.txt\u003c/code\u003e. The file names inside the resulting tar file will be\n relative to \u003ccode\u003edir\u003c/code\u003e, eg \u003ccode\u003edir/foo.txt\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a high level \"all in one\" operation. Since you may need variations\n on this function it is instructive to see how it is written. It is just:\n\u003c/p\u003e\u003cpre\u003e BS.writeFile tar . Tar.write =\u003c\u003c Tar.pack base paths\n\u003c/pre\u003e\u003cp\u003eNotes:\n\u003c/p\u003e\u003cp\u003eThe files and directories must not change during this operation or the\n result is not well defined.\n\u003c/p\u003e\u003cp\u003eThe intention of this function is to create tarballs that are portable\n between systems. It is \u003cem\u003enot\u003c/em\u003e suitable for doing file system backups because\n file ownership and permissions are not fully preserved. File ownership is\n not preserved at all. File permissions are set to simple portable values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003erw-r--r--\u003c/code\u003e for normal files\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003erwxr-xr-x\u003c/code\u003e for executable files\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003erwxr-xr-x\u003c/code\u003e for directories\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar",
          "name": "create",
          "package": "tar",
          "signature": "FilePath-\u003e FilePath-\u003e [FilePath]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create new tar file from directory of files It is equivalent to calling the standard tar program like so tar tarball.tar base dir This assumes directory base dir with files inside eg base dir foo.txt The file names inside the resulting tar file will be relative to dir eg dir foo.txt This is high level all in one operation Since you may need variations on this function it is instructive to see how it is written It is just BS.writeFile tar Tar.write Tar.pack base paths Notes The files and directories must not change during this operation or the result is not well defined The intention of this function is to create tarballs that are portable between systems It is not suitable for doing file system backups because file ownership and permissions are not fully preserved File ownership is not preserved at all File permissions are set to simple portable values rw-r--r for normal files rwxr-xr-x for executable files rwxr-xr-x for directories",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "create",
          "normalized": "FilePath-\u003eFilePath-\u003e[FilePath]-\u003eIO()",
          "package": "tar",
          "signature": "FilePath-\u003eFilePath-\u003e[FilePath]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe real content of the entry. For \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e this includes the\n file data. An entry usually contains a \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "entryContent",
          "package": "tar",
          "signature": "Entry -\u003e EntryContent",
          "source": "src/Codec-Archive-Tar-Types.html#entryContent",
          "type": "function"
        },
        "index": {
          "description": "The real content of the entry For NormalFile this includes the file data An entry usually contains NormalFile or Directory",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "entryContent",
          "normalized": "Entry-\u003eEntryContent",
          "package": "tar",
          "partial": "Content",
          "signature": "Entry-\u003eEntryContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:entryContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all the files contained in a \u003ccode\u003e\".tar\"\u003c/code\u003e file.\n\u003c/p\u003e\u003cp\u003eIt is equivalent to calling the standard \u003ccode\u003etar\u003c/code\u003e program like so:\n\u003c/p\u003e\u003cpre\u003e$ tar -x -f tarball.tar -C dir\u003c/pre\u003e\u003cp\u003eSo for example if the \u003ccode\u003etarball.tar\u003c/code\u003e file contains \u003ccode\u003efoo/bar.txt\u003c/code\u003e then this\n will extract it to \u003ccode\u003edir/foo/bar.txt\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a high level \"all in one\" operation. Since you may need variations\n on this function it is instructive to see how it is written. It is just:\n\u003c/p\u003e\u003cpre\u003e Tar.unpack dir . Tar.read =\u003c\u003c BS.readFile tar\n\u003c/pre\u003e\u003cp\u003eNotes:\n\u003c/p\u003e\u003cp\u003eExtracting can fail for a number of reasons. The tarball may be incorrectly\n formatted. There may be IO or permission errors. In such cases an exception\n will be thrown and extraction will not continue.\n\u003c/p\u003e\u003cp\u003eSince the extraction may fail part way through it is not atomic. For this\n reason you may want to extract into an empty directory and, if the\n extraction fails, recursively delete the directory.\n\u003c/p\u003e\u003cp\u003eSecurity: only files inside the target directory will be written. Tarballs\n containing entries that point outside of the tarball (either absolute paths\n or relative paths) will be caught and an exception will be thrown.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "extract",
          "package": "tar",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Extract all the files contained in tar file It is equivalent to calling the standard tar program like so tar tarball.tar dir So for example if the tarball.tar file contains foo bar.txt then this will extract it to dir foo bar.txt This is high level all in one operation Since you may need variations on this function it is instructive to see how it is written It is just Tar.unpack dir Tar.read BS.readFile tar Notes Extracting can fail for number of reasons The tarball may be incorrectly formatted There may be IO or permission errors In such cases an exception will be thrown and extraction will not continue Since the extraction may fail part way through it is not atomic For this reason you may want to extract into an empty directory and if the extraction fails recursively delete the directory Security only files inside the target directory will be written Tarballs containing entries that point outside of the tarball either absolute paths or relative paths will be caught and an exception will be thrown",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "extract",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "tar",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is like the standard \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e function on lists, but for \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e.\n Compared to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e it takes an extra function to account for the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eThis is used to consume a sequence of entries. For example it could be used\n to scan a tarball for problems or to collect an index of the contents.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "foldEntries",
          "package": "tar",
          "signature": "(Entry -\u003e a -\u003e a) -\u003e a -\u003e (e -\u003e a) -\u003e Entries e -\u003e a",
          "source": "src/Codec-Archive-Tar-Types.html#foldEntries",
          "type": "function"
        },
        "index": {
          "description": "This is like the standard foldr function on lists but for Entries Compared to foldr it takes an extra function to account for the possibility of failure This is used to consume sequence of entries For example it could be used to scan tarball for problems or to collect an index of the contents",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "foldEntries",
          "normalized": "(Entry-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003eEntries b-\u003ea",
          "package": "tar",
          "partial": "Entries",
          "signature": "(Entry-\u003ea-\u003ea)-\u003ea-\u003e(e-\u003ea)-\u003eEntries e-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:foldEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is like the standard \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e function on lists, but for \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e. It\n includes failure as a extra possible outcome of the mapping function.\n\u003c/p\u003e\u003cp\u003eIf your mapping function cannot fail it may be more convenient to use\n \u003ccode\u003e\u003ca\u003emapEntriesNoFail\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "mapEntries",
          "package": "tar",
          "signature": "(Entry -\u003e Either e' Entry) -\u003e Entries e -\u003e Entries (Either e e')",
          "source": "src/Codec-Archive-Tar-Types.html#mapEntries",
          "type": "function"
        },
        "index": {
          "description": "This is like the standard map function on lists but for Entries It includes failure as extra possible outcome of the mapping function If your mapping function cannot fail it may be more convenient to use mapEntriesNoFail",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "mapEntries",
          "normalized": "(Entry-\u003eEither a Entry)-\u003eEntries b-\u003eEntries(Either b a)",
          "package": "tar",
          "partial": "Entries",
          "signature": "(Entry-\u003eEither e' Entry)-\u003eEntries e-\u003eEntries(Either e e')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:mapEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapEntries\u003c/a\u003e\u003c/code\u003e but the mapping function itself cannot fail.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "mapEntriesNoFail",
          "package": "tar",
          "signature": "(Entry -\u003e Entry) -\u003e Entries e -\u003e Entries e",
          "source": "src/Codec-Archive-Tar-Types.html#mapEntriesNoFail",
          "type": "function"
        },
        "index": {
          "description": "Like mapEntries but the mapping function itself cannot fail",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "mapEntriesNoFail",
          "normalized": "(Entry-\u003eEntry)-\u003eEntries a-\u003eEntries a",
          "package": "tar",
          "partial": "Entries No Fail",
          "signature": "(Entry-\u003eEntry)-\u003eEntries e-\u003eEntries e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:mapEntriesNoFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a tar archive from a list of directory or files. Any directories\n specified will have their contents included recursively. Paths in the\n archive will be relative to the given base directory.\n\u003c/p\u003e\u003cp\u003eThis is a portable implementation of packing suitable for portable archives.\n In particular it only constructs \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e entries. Hard\n links and symbolic links are treated like ordinary files. It cannot be used\n to pack directories containing recursive symbolic links. Special files like\n FIFOs (named pipes), sockets or device files will also cause problems.\n\u003c/p\u003e\u003cp\u003eAn exception will be thrown for any file names that are too long to\n represent as a \u003ccode\u003e\u003ca\u003eTarPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function returns results lazily. Subdirectories are scanned\n and files are read one by one as the list of entries is consumed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar",
          "name": "pack",
          "package": "tar",
          "signature": "FilePath-\u003e [FilePath]-\u003e IO [Entry]",
          "type": "function"
        },
        "index": {
          "description": "Creates tar archive from list of directory or files Any directories specified will have their contents included recursively Paths in the archive will be relative to the given base directory This is portable implementation of packing suitable for portable archives In particular it only constructs NormalFile and Directory entries Hard links and symbolic links are treated like ordinary files It cannot be used to pack directories containing recursive symbolic links Special files like FIFOs named pipes sockets or device files will also cause problems An exception will be thrown for any file names that are too long to represent as TarPath This function returns results lazily Subdirectories are scanned and files are read one by one as the list of entries is consumed",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "pack",
          "normalized": "FilePath-\u003e[FilePath]-\u003eIO[Entry]",
          "package": "tar",
          "signature": "FilePath-\u003e[FilePath]-\u003eIO[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a data stream in the tar file format into an internal data\n structure. Decoding errors are reported by the \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e constructor of the\n \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conversion is done lazily.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar",
          "name": "read",
          "package": "tar",
          "signature": "ByteString -\u003e Entries FormatError",
          "source": "src/Codec-Archive-Tar-Read.html#read",
          "type": "function"
        },
        "index": {
          "description": "Convert data stream in the tar file format into an internal data structure Decoding errors are reported by the Fail constructor of the Entries type The conversion is done lazily",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "read",
          "normalized": "ByteString-\u003eEntries FormatError",
          "package": "tar",
          "signature": "ByteString-\u003eEntries FormatError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is like the standard \u003ccode\u003eunfoldr\u003c/code\u003e function on lists, but for \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e.\n It includes failure as an extra possibility that the stepper function may\n return.\n\u003c/p\u003e\u003cp\u003eIt can be used to generate \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e from some other type. For example it is\n used internally to lazily unfold entries from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "unfoldEntries",
          "package": "tar",
          "signature": "(a -\u003e Either e (Maybe (Entry, a))) -\u003e a -\u003e Entries e",
          "source": "src/Codec-Archive-Tar-Types.html#unfoldEntries",
          "type": "function"
        },
        "index": {
          "description": "This is like the standard unfoldr function on lists but for Entries It includes failure as an extra possibility that the stepper function may return It can be used to generate Entries from some other type For example it is used internally to lazily unfold entries from ByteString",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "unfoldEntries",
          "normalized": "(a-\u003eEither b(Maybe(Entry,a)))-\u003ea-\u003eEntries b",
          "package": "tar",
          "partial": "Entries",
          "signature": "(a-\u003eEither e(Maybe(Entry,a)))-\u003ea-\u003eEntries e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:unfoldEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate local files and directories based on the entries of a tar archive.\n\u003c/p\u003e\u003cp\u003eThis is a portable implementation of unpacking suitable for portable\n archives. It handles \u003ccode\u003e\u003ca\u003eNormalFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e entries and has simulated\n support for \u003ccode\u003e\u003ca\u003eSymbolicLink\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHardLink\u003c/a\u003e\u003c/code\u003e entries. Links are implemented by\n copying the target file. This therefore works on Windows as well as Unix.\n All other entry types are ignored, that is they are not unpacked and no\n exception is raised.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e ends in an error then it is raised an an exception. Any\n files or directories that have been unpacked before the error was\n encountered will not be deleted. For this reason you may want to unpack\n into an empty directory so that you can easily clean up if unpacking fails\n part-way.\n\u003c/p\u003e\u003cp\u003eOn its own, this function only checks for security (using \u003ccode\u003e\u003ca\u003echeckSecurity\u003c/a\u003e\u003c/code\u003e).\n You can do other checks by applying checking functions to the \u003ccode\u003e\u003ca\u003eEntries\u003c/a\u003e\u003c/code\u003e that\n you pass to this function. For example:\n\u003c/p\u003e\u003cpre\u003e unpack dir (checkTarbomb expectedDir entries)\n\u003c/pre\u003e\u003cp\u003eIf you care about the priority of the reported errors then you may want to\n use \u003ccode\u003e\u003ca\u003echeckSecurity\u003c/a\u003e\u003c/code\u003e before \u003ccode\u003e\u003ca\u003echeckTarbomb\u003c/a\u003e\u003c/code\u003e or other checks.\n\u003c/p\u003e",
          "module": "Codec.Archive.Tar",
          "name": "unpack",
          "package": "tar",
          "signature": "FilePath -\u003e Entries e -\u003e IO ()",
          "source": "src/Codec-Archive-Tar-Unpack.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Create local files and directories based on the entries of tar archive This is portable implementation of unpacking suitable for portable archives It handles NormalFile and Directory entries and has simulated support for SymbolicLink and HardLink entries Links are implemented by copying the target file This therefore works on Windows as well as Unix All other entry types are ignored that is they are not unpacked and no exception is raised If the Entries ends in an error then it is raised an an exception Any files or directories that have been unpacked before the error was encountered will not be deleted For this reason you may want to unpack into an empty directory so that you can easily clean up if unpacking fails part-way On its own this function only checks for security using checkSecurity You can do other checks by applying checking functions to the Entries that you pass to this function For example unpack dir checkTarbomb expectedDir entries If you care about the priority of the reported errors then you may want to use checkSecurity before checkTarbomb or other checks",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "unpack",
          "normalized": "FilePath-\u003eEntries a-\u003eIO()",
          "package": "tar",
          "signature": "FilePath-\u003eEntries e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the external representation of a tar archive by serialising a list\n of tar entries.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conversion is done lazily.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Archive.Tar",
          "name": "write",
          "package": "tar",
          "signature": "[Entry] -\u003e ByteString",
          "source": "src/Codec-Archive-Tar-Write.html#write",
          "type": "function"
        },
        "index": {
          "description": "Create the external representation of tar archive by serialising list of tar entries The conversion is done lazily",
          "hierarchy": "Codec Archive Tar",
          "module": "Codec.Archive.Tar",
          "name": "write",
          "normalized": "[Entry]-\u003eByteString",
          "package": "tar",
          "signature": "[Entry]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tar/docs/Codec-Archive-Tar.html#v:write"
      }
    }
  ]
]