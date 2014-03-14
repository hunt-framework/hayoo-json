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
        "word": "denominate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to assist in renaming of directories and files into a\nstandard, normalized format.\n\u003c/p\u003e\u003cp\u003eThis module defines several functions supporting renaming of files\nand directories, and is especially useful for doing a bulk renaming\nof all files and directories, recursively, in a given base directory.\n\u003c/p\u003e\u003cp\u003eThe primary functions of interest are \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erenameAll\u003c/a\u003e\u003c/code\u003e, both\nof which accept a function for creating the new filename based on its\ncurrent name. The user may supply a custom filename converter function,\nor may use the pre-defined function that this module defines.\n\u003c/p\u003e\u003cp\u003eThe standard pre-defined converter determines the new name for a file\nor directory using the following rules:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e all letters are converted to lowercase;\n\u003c/li\u003e\u003cli\u003e all non-alphanumeric characters at the beginning of a file or\n     directory name are removed (with the exception of an initial \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e);\n\u003c/li\u003e\u003cli\u003e all non-alphanumeric characters at the end of a directory name\n     or the end of a filename (before the extension) are removed;\n\u003c/li\u003e\u003cli\u003e all other blocks of one or more non-alphanumeric characters are\n     converted to a single hyphen.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSee the documentation of the exported functions for more information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Denominate",
          "name": "Denominate",
          "package": "denominate",
          "source": "src/System-Denominate.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to assist in renaming of directories and files into standard normalized format This module defines several functions supporting renaming of files and directories and is especially useful for doing bulk renaming of all files and directories recursively in given base directory The primary functions of interest are rename and renameAll both of which accept function for creating the new filename based on its current name The user may supply custom filename converter function or may use the pre-defined function that this module defines The standard pre-defined converter determines the new name for file or directory using the following rules all letters are converted to lowercase all non-alphanumeric characters at the beginning of file or directory name are removed with the exception of an initial all non-alphanumeric characters at the end of directory name or the end of filename before the extension are removed all other blocks of one or more non-alphanumeric characters are converted to single hyphen See the documentation of the exported functions for more information",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "Denominate",
          "package": "denominate",
          "partial": "Denominate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the type of a file or directory. These are exhaustive,\n as for purposes of this module, we consider everything that isn't\n a directory to be a file.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "FileType",
          "package": "denominate",
          "source": "src/System-Denominate.html#FileType",
          "type": "data"
        },
        "index": {
          "description": "Represents the type of file or directory These are exhaustive as for purposes of this module we consider everything that isn directory to be file",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "FileType",
          "package": "denominate",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#t:FileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filename converter maps an old filename to a new filename. A converter\n takes a typed file representing a directory name or a filename without\n extension, and only needs to determine the new name based on the old name.\n It does not need to worry about extracting the file path from an absolute\n path or determining the file extension, as all functions in this module\n that use a FilenameConverter will only pass in typed files containing\n the last directory (if a directory) or the filename without extension\n if a file.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "FilenameConverter",
          "package": "denominate",
          "source": "src/System-Denominate.html#FilenameConverter",
          "type": "type"
        },
        "index": {
          "description": "filename converter maps an old filename to new filename converter takes typed file representing directory name or filename without extension and only needs to determine the new name based on the old name It does not need to worry about extracting the file path from an absolute path or determining the file extension as all functions in this module that use FilenameConverter will only pass in typed files containing the last directory if directory or the filename without extension if file",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "FilenameConverter",
          "package": "denominate",
          "partial": "Filename Converter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#t:FilenameConverter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the result of a rename attempt, which either fails or\n succeeds. In both cases, the typed file path is that of the file\n for which a rename attempt was made. Upon failure, the string\n parameter contains information about the error (may have been an\n os-level error or user error); upon success, the string parameter\n is the name to which the file was renamed (which includes the case\n that no change was performed because old and new names were equal).\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "RenameResult",
          "package": "denominate",
          "source": "src/System-Denominate.html#RenameResult",
          "type": "data"
        },
        "index": {
          "description": "Represents the result of rename attempt which either fails or succeeds In both cases the typed file path is that of the file for which rename attempt was made Upon failure the string parameter contains information about the error may have been an os-level error or user error upon success the string parameter is the name to which the file was renamed which includes the case that no change was performed because old and new names were equal",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "RenameResult",
          "package": "denominate",
          "partial": "Rename Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#t:RenameResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a filepath together with the type of file to which \n the path refers.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "TypedFilePath",
          "package": "denominate",
          "source": "src/System-Denominate.html#TypedFilePath",
          "type": "type"
        },
        "index": {
          "description": "Represents filepath together with the type of file to which the path refers",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "TypedFilePath",
          "package": "denominate",
          "partial": "Typed File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#t:TypedFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Denominate",
          "name": "Directory",
          "package": "denominate",
          "signature": "Directory",
          "source": "src/System-Denominate.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "Directory",
          "package": "denominate",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Denominate",
          "name": "Failure",
          "package": "denominate",
          "signature": "Failure TypedFilePath String",
          "source": "src/System-Denominate.html#RenameResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "Failure",
          "package": "denominate",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Denominate",
          "name": "File",
          "package": "denominate",
          "signature": "File",
          "source": "src/System-Denominate.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "File",
          "package": "denominate",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Denominate",
          "name": "Success",
          "package": "denominate",
          "signature": "Success TypedFilePath String",
          "source": "src/System-Denominate.html#RenameResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "Success",
          "package": "denominate",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a list of all files and directories below the given directory,\n in depth-first order such that all files in a given directory appear\n before the directory or any of its parent directories.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "allFilepaths",
          "package": "denominate",
          "signature": "FilePath -\u003e IO [TypedFilePath]",
          "source": "src/System-Denominate.html#allFilepaths",
          "type": "function"
        },
        "index": {
          "description": "Generate list of all files and directories below the given directory in depth-first order such that all files in given directory appear before the directory or any of its parent directories",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "allFilepaths",
          "normalized": "FilePath-\u003eIO[TypedFilePath]",
          "package": "denominate",
          "partial": "Filepaths",
          "signature": "FilePath-\u003eIO[TypedFilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:allFilepaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default filename converter, which normalizes a filename by\n converting letters to lowercase and converting one or more undesirable\n characters into a single hyphen (or removing altogether if at the\n beginning or the end of the name). The only exception to these rules\n is that an initial dot of a filename is not removed.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "defaultFilenameConverter",
          "package": "denominate",
          "signature": "FilenameConverter",
          "source": "src/System-Denominate.html#defaultFilenameConverter",
          "type": "function"
        },
        "index": {
          "description": "The default filename converter which normalizes filename by converting letters to lowercase and converting one or more undesirable characters into single hyphen or removing altogether if at the beginning or the end of the name The only exception to these rules is that an initial dot of filename is not removed",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "defaultFilenameConverter",
          "package": "denominate",
          "partial": "Filename Converter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:defaultFilenameConverter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a filepath to a TypedFilePath. A Directory is a file\n for which Directory.doesDirectoryExist returns true. If the path\n does not represent a directory, it is considered a file, and there\n is no further testing to verify that a file with that path actually\n exists.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "fileToTypedFilePath",
          "package": "denominate",
          "signature": "FilePath -\u003e IO TypedFilePath",
          "source": "src/System-Denominate.html#fileToTypedFilePath",
          "type": "function"
        },
        "index": {
          "description": "Convert filepath to TypedFilePath Directory is file for which Directory.doesDirectoryExist returns true If the path does not represent directory it is considered file and there is no further testing to verify that file with that path actually exists",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "fileToTypedFilePath",
          "normalized": "FilePath-\u003eIO TypedFilePath",
          "package": "denominate",
          "partial": "To Typed File Path",
          "signature": "FilePath-\u003eIO TypedFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:fileToTypedFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize the filename of the given typed file path using the\n supplied FilenameConverter function, which will be passed the\n directory name (without parent directories) in case of a directory\n or the filename (without any parent directories or the extension)\n in case of a file. This function takes care of extracting the part\n of the path that is to be normalized, calling the user-supplied\n function with only that part, and then reassembling the\n result of the filename converter into a full path again.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "normalizeFilename",
          "package": "denominate",
          "signature": "FilenameConverter -\u003e TypedFilePath -\u003e String",
          "source": "src/System-Denominate.html#normalizeFilename",
          "type": "function"
        },
        "index": {
          "description": "Normalize the filename of the given typed file path using the supplied FilenameConverter function which will be passed the directory name without parent directories in case of directory or the filename without any parent directories or the extension in case of file This function takes care of extracting the part of the path that is to be normalized calling the user-supplied function with only that part and then reassembling the result of the filename converter into full path again",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "normalizeFilename",
          "normalized": "FilenameConverter-\u003eTypedFilePath-\u003eString",
          "package": "denominate",
          "partial": "Filename",
          "signature": "FilenameConverter-\u003eTypedFilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:normalizeFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a single file or directory using the supplied filename converter,\n which will be passed just the directory name (without any parent\n directories or a terminal slash) in the case of a directory or just\n the filename without the extension in the case of a file. If there\n already exists a file with the intended new name, nothing is done. If\n the new name is the same as the old name (not considering file extension),\n then the function successfully returns without touching the filesystem.\n In all cases where a file is renamed, the extension of a file will be\n automatically converted to lowercase but otherwise remains the\n same (no characters are ever removed from the extension).\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "rename",
          "package": "denominate",
          "signature": "FilenameConverter -\u003e TypedFilePath -\u003e IO RenameResult",
          "source": "src/System-Denominate.html#rename",
          "type": "function"
        },
        "index": {
          "description": "Rename single file or directory using the supplied filename converter which will be passed just the directory name without any parent directories or terminal slash in the case of directory or just the filename without the extension in the case of file If there already exists file with the intended new name nothing is done If the new name is the same as the old name not considering file extension then the function successfully returns without touching the filesystem In all cases where file is renamed the extension of file will be automatically converted to lowercase but otherwise remains the same no characters are ever removed from the extension",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "rename",
          "normalized": "FilenameConverter-\u003eTypedFilePath-\u003eIO RenameResult",
          "package": "denominate",
          "signature": "FilenameConverter-\u003eTypedFilePath-\u003eIO RenameResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename all files and directories, recursively, in the given directory,\n using the supplied filename converter to determine the new name of each\n file or directory. The converter function will be called once for each\n file or directory, and will be passed just the directory name (without\n the parent directories) in the case of a directory or just the filename\n without the extension in the case of a file. The extension of files (but\n not directories if they seem to have an extension) will be converted to\n lower case, but is not otherwise changed. There will be one RenameResult\n for each success or failure, and an indication of the reason for failure\n for failures, or the new name in case of success.\n\u003c/p\u003e",
          "module": "System.Denominate",
          "name": "renameAll",
          "package": "denominate",
          "signature": "FilenameConverter -\u003e TypedFilePath -\u003e IO [RenameResult]",
          "source": "src/System-Denominate.html#renameAll",
          "type": "function"
        },
        "index": {
          "description": "Rename all files and directories recursively in the given directory using the supplied filename converter to determine the new name of each file or directory The converter function will be called once for each file or directory and will be passed just the directory name without the parent directories in the case of directory or just the filename without the extension in the case of file The extension of files but not directories if they seem to have an extension will be converted to lower case but is not otherwise changed There will be one RenameResult for each success or failure and an indication of the reason for failure for failures or the new name in case of success",
          "hierarchy": "System Denominate",
          "module": "System.Denominate",
          "name": "renameAll",
          "normalized": "FilenameConverter-\u003eTypedFilePath-\u003eIO[RenameResult]",
          "package": "denominate",
          "partial": "All",
          "signature": "FilenameConverter-\u003eTypedFilePath-\u003eIO[RenameResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/denominate/docs/System-Denominate.html#v:renameAll"
      }
    }
  ]
]