[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8208;aware wrappers around standard \u003ca\u003eSystem.IO\u003c/a\u003e\n computations. These wrappers are designed to work as similarly as\n possible across various versions of GHC.\n\u003c/p\u003e\u003cp\u003eIn particular, they do not require POSIX file paths to be valid strings,\n and can therefore open paths regardless of the current locale encoding.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "module",
        "fct-source": "src/Filesystem.html",
        "fct-type": "module",
        "title": "Filesystem"
      },
      "index": {
        "description": "Simple FilePath aware wrappers around standard System.IO computations These wrappers are designed to work as similarly as possible across various versions of GHC In particular they do not require POSIX file paths to be valid strings and can therefore open paths regardless of the current locale encoding",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "Filesystem",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Filesystem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#t:Handle",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "Handle",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "See openFile",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "IOMode",
        "normalized": "",
        "package": "system-fileio",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:AppendMode",
      "description": {
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "AppendMode",
        "fct-type": "function",
        "title": "AppendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "AppendMode",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:ReadMode",
      "description": {
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "ReadMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "ReadMode",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:ReadWriteMode",
      "description": {
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "ReadWriteMode",
        "fct-type": "function",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:WriteMode",
      "description": {
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "WriteMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "WriteMode",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file. If the file does not exist, it will\n be created.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Filesystem.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Append ByteString to file If the file does not exist it will be created This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "appendFile",
        "normalized": "FilePath-\u003eByteString-\u003eIO()",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:appendTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppend \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to a file. If the file does not exist, it will\n be created.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Filesystem.html#appendTextFile",
        "fct-type": "function",
        "title": "appendTextFile"
      },
      "index": {
        "description": "Append Text to file If the file does not exist it will be created This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "appendTextFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "system-fileio",
        "partial": "Text File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:canonicalizePath",
      "description": {
        "fct-descr": "\u003cp\u003eResolve symlinks and \"..\" path elements to return a canonical path.\n It is intended that two paths referring to the same object will always\n resolve to the same canonical path.\n\u003c/p\u003e\u003cp\u003eNote that on many operating systems, it is impossible to guarantee that\n two paths to the same file will resolve to the same canonical path.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO FilePath",
        "fct-source": "src/Filesystem.html#canonicalizePath",
        "fct-type": "function",
        "title": "canonicalizePath"
      },
      "index": {
        "description": "Resolve symlinks and path elements to return canonical path It is intended that two paths referring to the same object will always resolve to the same canonical path Note that on many operating systems it is impossible to guarantee that two paths to the same file will resolve to the same canonical path This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "canonicalizePath",
        "normalized": "FilePath-\u003eIO FilePath",
        "package": "system-fileio",
        "partial": "Path",
        "signature": "FilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:copyFile",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the content and permissions of a file to a new entry in the\n filesystem. If a file already exists at the new location, it will be\n replaced. Copying a file is not atomic.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "copyFile"
      },
      "index": {
        "description": "Copy the content and permissions of file to new entry in the filesystem If file already exists at the new location it will be replaced Copying file is not atomic This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "copyFile",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:copyFileContent",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the content of a file to a new entry in the filesystem. If a\n file already exists at the new location, it will be replaced. Copying\n a file is not atomic.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2.4 / 0.3.4\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "copyFileContent"
      },
      "index": {
        "description": "Copy the content of file to new entry in the filesystem If file already exists at the new location it will be replaced Copying file is not atomic This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "copyFileContent",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "File Content",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:copyPermissions",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the permissions from one path to another. Both paths must already\n exist.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2.4 / 0.3.4\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "copyPermissions"
      },
      "index": {
        "description": "Copy the permissions from one path to another Both paths must already exist This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "copyPermissions",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "Permissions",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:createDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a directory at a given path. The user may choose whether it is\n an error for a directory to already exist at that path.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "Bool-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "createDirectory"
      },
      "index": {
        "description": "Create directory at given path The user may choose whether it is an error for directory to already exist at that path This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "createDirectory",
        "normalized": "Bool-\u003eFilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "Directory",
        "signature": "Bool-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:createTree",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a directory at a given path, including any parents which might\n be missing.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Filesystem.html#createTree",
        "fct-type": "function",
        "title": "createTree"
      },
      "index": {
        "description": "Create directory at given path including any parents which might be missing This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "createTree",
        "normalized": "FilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "Tree",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getAppCacheDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user&#8217;s application cache directory, given an application\n label. This directory is where applications should store caches, which\n might be large and can be safely deleted.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "Text -\u003e IO FilePath",
        "fct-source": "src/Filesystem.html#getAppCacheDirectory",
        "fct-type": "function",
        "title": "getAppCacheDirectory"
      },
      "index": {
        "description": "Get the user application cache directory given an application label This directory is where applications should store caches which might be large and can be safely deleted This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getAppCacheDirectory",
        "normalized": "Text-\u003eIO FilePath",
        "package": "system-fileio",
        "partial": "App Cache Directory",
        "signature": "Text-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getAppConfigDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user&#8217;s application configuration directory, given an\n application label. This directory is where applications should store their\n configurations and settings.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "Text -\u003e IO FilePath",
        "fct-source": "src/Filesystem.html#getAppConfigDirectory",
        "fct-type": "function",
        "title": "getAppConfigDirectory"
      },
      "index": {
        "description": "Get the user application configuration directory given an application label This directory is where applications should store their configurations and settings This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getAppConfigDirectory",
        "normalized": "Text-\u003eIO FilePath",
        "package": "system-fileio",
        "partial": "App Config Directory",
        "signature": "Text-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getAppDataDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user&#8217;s application data directory, given an application\n label. This directory is where applications should store data the user did\n not explicitly create, such as databases and automatic saves.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "Text -\u003e IO FilePath",
        "fct-source": "src/Filesystem.html#getAppDataDirectory",
        "fct-type": "function",
        "title": "getAppDataDirectory"
      },
      "index": {
        "description": "Get the user application data directory given an application label This directory is where applications should store data the user did not explicitly create such as databases and automatic saves This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getAppDataDirectory",
        "normalized": "Text-\u003eIO FilePath",
        "package": "system-fileio",
        "partial": "App Data Directory",
        "signature": "Text-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getDesktopDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user&#8217;s desktop directory. This is a good starting point for\n file dialogs and other user queries. For data files the user does not\n explicitly create, such as automatic saves, use \u003ccode\u003e\u003ca\u003egetAppDataDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Filesystem.html#getDesktopDirectory",
        "fct-type": "function",
        "title": "getDesktopDirectory"
      },
      "index": {
        "description": "Get the user desktop directory This is good starting point for file dialogs and other user queries For data files the user does not explicitly create such as automatic saves use getAppDataDirectory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getDesktopDirectory",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Desktop Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getDocumentsDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user&#8217;s documents directory. This is a good place to save\n user&#8208;created files. For data files the user does not explicitly\n create, such as automatic saves, use \u003ccode\u003e\u003ca\u003egetAppDataDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Filesystem.html#getDocumentsDirectory",
        "fct-type": "function",
        "title": "getDocumentsDirectory"
      },
      "index": {
        "description": "Get the user documents directory This is good place to save user created files For data files the user does not explicitly create such as automatic saves use getAppDataDirectory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getDocumentsDirectory",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Documents Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getHomeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the user&#8217;s home directory. This is useful for building paths\n to more specific directories.\n\u003c/p\u003e\u003cp\u003eFor directing the user to open or safe a document, use\n \u003ccode\u003e\u003ca\u003egetDocumentsDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor data files the user does not explicitly create, such as automatic\n saves, use \u003ccode\u003e\u003ca\u003egetAppDataDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Filesystem.html#getHomeDirectory",
        "fct-type": "function",
        "title": "getHomeDirectory"
      },
      "index": {
        "description": "Get the user home directory This is useful for building paths to more specific directories For directing the user to open or safe document use getDocumentsDirectory For data files the user does not explicitly create such as automatic saves use getAppDataDirectory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getHomeDirectory",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Home Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getModified",
      "description": {
        "fct-descr": "\u003cp\u003eGet when the object at a given path was last modified.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO UTCTime",
        "fct-source": "src/Filesystem.html#getModified",
        "fct-type": "function",
        "title": "getModified"
      },
      "index": {
        "description": "Get when the object at given path was last modified This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getModified",
        "normalized": "FilePath-\u003eIO UTCTime",
        "package": "system-fileio",
        "partial": "Modified",
        "signature": "FilePath-\u003eIO UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size of an object at a given path. For special objects like\n links or directories, the size is filesystem&#8208; and\n platform&#8208;dependent.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO Integer",
        "fct-source": "src/Filesystem.html#getSize",
        "fct-type": "function",
        "title": "getSize"
      },
      "index": {
        "description": "Get the size of an object at given path For special objects like links or directories the size is filesystem and platform dependent This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getSize",
        "normalized": "FilePath-\u003eIO Integer",
        "package": "system-fileio",
        "partial": "Size",
        "signature": "FilePath-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getWorkingDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current working directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "IO FilePath",
        "fct-source": "src/Filesystem.html#getWorkingDirectory",
        "fct-type": "function",
        "title": "getWorkingDirectory"
      },
      "index": {
        "description": "Get the current working directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "getWorkingDirectory",
        "normalized": "",
        "package": "system-fileio",
        "partial": "Working Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:isDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a directory exists at the given path.\n\u003c/p\u003e\u003cp\u003eSymbolic links are resolved to their targets before checking their type.\n\u003c/p\u003e\u003cp\u003eThis computation does not throw exceptions.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/Filesystem.html#isDirectory",
        "fct-type": "function",
        "title": "isDirectory"
      },
      "index": {
        "description": "Check if directory exists at the given path Symbolic links are resolved to their targets before checking their type This computation does not throw exceptions",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "isDirectory",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "system-fileio",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:isFile",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a file exists at the given path.\n\u003c/p\u003e\u003cp\u003eAny non&#8208;directory object, including devices and pipes, are\n considered to be files. Symbolic links are resolved to their targets\n before checking their type.\n\u003c/p\u003e\u003cp\u003eThis computation does not throw exceptions.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/Filesystem.html#isFile",
        "fct-type": "function",
        "title": "isFile"
      },
      "index": {
        "description": "Check if file exists at the given path Any non directory object including devices and pipes are considered to be files Symbolic links are resolved to their targets before checking their type This computation does not throw exceptions",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "isFile",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:listDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eList objects in a directory, excluding \u003ccode\u003e\".\"\u003c/code\u003e and \u003ccode\u003e\"..\"\u003c/code\u003e. Each\n returned \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e includes the path of the directory. Entries are not\n sorted.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO [FilePath]",
        "fct-source": "src/Filesystem.html#listDirectory",
        "fct-type": "function",
        "title": "listDirectory"
      },
      "index": {
        "description": "List objects in directory excluding and Each returned FilePath includes the path of the directory Entries are not sorted This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "listDirectory",
        "normalized": "FilePath-\u003eIO[FilePath]",
        "package": "system-fileio",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:openFile",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file in binary mode, and return an open \u003ccode\u003eHandle\u003c/code\u003e. The \u003ccode\u003eHandle\u003c/code\u003e\n should be closed with \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e when it is no longer needed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e is easier to use, because it will handle the \u003ccode\u003eHandle\u003c/code\u003e&#8217;s\n lifetime automatically.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IOMode -\u003e IO Handle",
        "fct-source": "src/Filesystem.html#openFile",
        "fct-type": "function",
        "title": "openFile"
      },
      "index": {
        "description": "Open file in binary mode and return an open Handle The Handle should be closed with hClose when it is no longer needed withFile is easier to use because it will handle the Handle lifetime automatically This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "openFile",
        "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:openTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file in text mode, and return an open \u003ccode\u003eHandle\u003c/code\u003e. The \u003ccode\u003eHandle\u003c/code\u003e\n should be closed with \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e when it is no longer needed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithTextFile\u003c/a\u003e\u003c/code\u003e is easier to use, because it will handle the\n \u003ccode\u003eHandle\u003c/code\u003e&#8217;s lifetime automatically.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IOMode -\u003e IO Handle",
        "fct-source": "src/Filesystem.html#openTextFile",
        "fct-type": "function",
        "title": "openTextFile"
      },
      "index": {
        "description": "Open file in text mode and return an open Handle The Handle should be closed with hClose when it is no longer needed withTextFile is easier to use because it will handle the Handle lifetime automatically This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "openTextFile",
        "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
        "package": "system-fileio",
        "partial": "Text File",
        "signature": "FilePath-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead in the entire content of a binary file.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO ByteString",
        "fct-source": "src/Filesystem.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Read in the entire content of binary file This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO ByteString",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:readTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead in the entire content of a text file.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO Text",
        "fct-source": "src/Filesystem.html#readTextFile",
        "fct-type": "function",
        "title": "readTextFile"
      },
      "index": {
        "description": "Read in the entire content of text file This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "readTextFile",
        "normalized": "FilePath-\u003eIO Text",
        "package": "system-fileio",
        "partial": "Text File",
        "signature": "FilePath-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:removeDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an empty directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Filesystem.html#removeDirectory",
        "fct-type": "function",
        "title": "removeDirectory"
      },
      "index": {
        "description": "Remove an empty directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "removeDirectory",
        "normalized": "FilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "Directory",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:removeFile",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a file. This will fail if the file does not exist.\n\u003c/p\u003e\u003cp\u003eThis computation cannot remove directories. For that, use \u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eremoveTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Filesystem.html#removeFile",
        "fct-type": "function",
        "title": "removeFile"
      },
      "index": {
        "description": "Remove file This will fail if the file does not exist This computation cannot remove directories For that use removeDirectory or removeTree This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "removeFile",
        "normalized": "FilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:removeTree",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively remove a directory tree rooted at the given path.\n\u003c/p\u003e\u003cp\u003eThis computation does not follow symlinks. If the tree contains symlinks,\n the links themselves will be removed, but not the objects they point to.\n\u003c/p\u003e\u003cp\u003eIf the root path is a symlink, then it will be treated as if it were a\n regular directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Filesystem.html#removeTree",
        "fct-type": "function",
        "title": "removeTree"
      },
      "index": {
        "description": "Recursively remove directory tree rooted at the given path This computation does not follow symlinks If the tree contains symlinks the links themselves will be removed but not the objects they point to If the root path is symlink then it will be treated as if it were regular directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "removeTree",
        "normalized": "FilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "Tree",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:rename",
      "description": {
        "fct-descr": "\u003cp\u003eRename a filesystem object.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Filesystem.html#rename",
        "fct-type": "function",
        "title": "rename"
      },
      "index": {
        "description": "Rename filesystem object This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "rename",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:setWorkingDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current working directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Filesystem.html#setWorkingDirectory",
        "fct-type": "function",
        "title": "setWorkingDirectory"
      },
      "index": {
        "description": "Set the current working directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "setWorkingDirectory",
        "normalized": "FilePath-\u003eIO()",
        "package": "system-fileio",
        "partial": "Working Directory",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:withFile",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file in binary mode, and pass its \u003ccode\u003eHandle\u003c/code\u003e to a provided\n computation. The \u003ccode\u003eHandle\u003c/code\u003e will be automatically closed when the\n computation returns.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Filesystem.html#withFile",
        "fct-type": "function",
        "title": "withFile"
      },
      "index": {
        "description": "Open file in binary mode and pass its Handle to provided computation The Handle will be automatically closed when the computation returns This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "withFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:withTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file in text mode, and pass its \u003ccode\u003eHandle\u003c/code\u003e to a provided\n computation. The \u003ccode\u003eHandle\u003c/code\u003e will be automatically closed when the\n computation returns.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Filesystem.html#withTextFile",
        "fct-type": "function",
        "title": "withTextFile"
      },
      "index": {
        "description": "Open file in text mode and pass its Handle to provided computation The Handle will be automatically closed when the computation returns This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "withTextFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "system-fileio",
        "partial": "Text File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the entire content of a binary file with the provided\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Filesystem.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Replace the entire content of binary file with the provided ByteString This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "writeFile",
        "normalized": "FilePath-\u003eByteString-\u003eIO()",
        "package": "system-fileio",
        "partial": "File",
        "signature": "FilePath-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:writeTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the entire content of a text file with the provided\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
        "fct-module": "Filesystem",
        "fct-package": "system-fileio",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Filesystem.html#writeTextFile",
        "fct-type": "function",
        "title": "writeTextFile"
      },
      "index": {
        "description": "Replace the entire content of text file with the provided Text This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
        "hierarchy": "Filesystem",
        "module": "Filesystem",
        "name": "writeTextFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "system-fileio",
        "partial": "Text File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  }
]