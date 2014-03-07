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
        "word": "system-fileio"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8208;aware wrappers around standard \u003ca\u003eSystem.IO\u003c/a\u003e\n computations. These wrappers are designed to work as similarly as\n possible across various versions of GHC.\n\u003c/p\u003e\u003cp\u003eIn particular, they do not require POSIX file paths to be valid strings,\n and can therefore open paths regardless of the current locale encoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Filesystem",
          "name": "Filesystem",
          "package": "system-fileio",
          "source": "src/Filesystem.html",
          "type": "module"
        },
        "index": {
          "description": "Simple FilePath aware wrappers around standard System.IO computations These wrappers are designed to work as similarly as possible across various versions of GHC In particular they do not require POSIX file paths to be valid strings and can therefore open paths regardless of the current locale encoding",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "Filesystem",
          "package": "system-fileio",
          "partial": "Filesystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "Handle",
          "package": "system-fileio",
          "type": "data"
        },
        "index": {
          "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "Handle",
          "package": "system-fileio",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "IOMode",
          "package": "system-fileio",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "IOMode",
          "package": "system-fileio",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Filesystem",
          "name": "AppendMode",
          "package": "system-fileio",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "AppendMode",
          "package": "system-fileio",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Filesystem",
          "name": "ReadMode",
          "package": "system-fileio",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "ReadMode",
          "package": "system-fileio",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Filesystem",
          "name": "ReadWriteMode",
          "package": "system-fileio",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "ReadWriteMode",
          "package": "system-fileio",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Filesystem",
          "name": "WriteMode",
          "package": "system-fileio",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "WriteMode",
          "package": "system-fileio",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file. If the file does not exist, it will\n be created.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "appendFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Filesystem.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file If the file does not exist it will be created This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to a file. If the file does not exist, it will\n be created.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "appendTextFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e Text -\u003e IO ()",
          "source": "src/Filesystem.html#appendTextFile",
          "type": "function"
        },
        "index": {
          "description": "Append Text to file If the file does not exist it will be created This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "appendTextFile",
          "normalized": "FilePath-\u003eText-\u003eIO()",
          "package": "system-fileio",
          "partial": "Text File",
          "signature": "FilePath-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:appendTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve symlinks and \"..\" path elements to return a canonical path.\n It is intended that two paths referring to the same object will always\n resolve to the same canonical path.\n\u003c/p\u003e\u003cp\u003eNote that on many operating systems, it is impossible to guarantee that\n two paths to the same file will resolve to the same canonical path.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "canonicalizePath",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO FilePath",
          "source": "src/Filesystem.html#canonicalizePath",
          "type": "function"
        },
        "index": {
          "description": "Resolve symlinks and path elements to return canonical path It is intended that two paths referring to the same object will always resolve to the same canonical path Note that on many operating systems it is impossible to guarantee that two paths to the same file will resolve to the same canonical path This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "canonicalizePath",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "system-fileio",
          "partial": "Path",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:canonicalizePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content and permissions of a file to a new entry in the\n filesystem. If a file already exists at the new location, it will be\n replaced. Copying a file is not atomic.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "copyFile",
          "package": "system-fileio",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the content and permissions of file to new entry in the filesystem If file already exists at the new location it will be replaced Copying file is not atomic This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "copyFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:copyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the content of a file to a new entry in the filesystem. If a\n file already exists at the new location, it will be replaced. Copying\n a file is not atomic.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2.4 / 0.3.4\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "copyFileContent",
          "package": "system-fileio",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the content of file to new entry in the filesystem If file already exists at the new location it will be replaced Copying file is not atomic This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "copyFileContent",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "File Content",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:copyFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the permissions from one path to another. Both paths must already\n exist.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2.4 / 0.3.4\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "copyPermissions",
          "package": "system-fileio",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the permissions from one path to another Both paths must already exist This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "copyPermissions",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "Permissions",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:copyPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a directory at a given path. The user may choose whether it is\n an error for a directory to already exist at that path.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "createDirectory",
          "package": "system-fileio",
          "signature": "Bool-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create directory at given path The user may choose whether it is an error for directory to already exist at that path This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "createDirectory",
          "normalized": "Bool-\u003eFilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "Directory",
          "signature": "Bool-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a directory at a given path, including any parents which might\n be missing.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "createTree",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Filesystem.html#createTree",
          "type": "function"
        },
        "index": {
          "description": "Create directory at given path including any parents which might be missing This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "createTree",
          "normalized": "FilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "Tree",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:createTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user&#8217;s application cache directory, given an application\n label. This directory is where applications should store caches, which\n might be large and can be safely deleted.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getAppCacheDirectory",
          "package": "system-fileio",
          "signature": "Text -\u003e IO FilePath",
          "source": "src/Filesystem.html#getAppCacheDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the user application cache directory given an application label This directory is where applications should store caches which might be large and can be safely deleted This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getAppCacheDirectory",
          "normalized": "Text-\u003eIO FilePath",
          "package": "system-fileio",
          "partial": "App Cache Directory",
          "signature": "Text-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getAppCacheDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user&#8217;s application configuration directory, given an\n application label. This directory is where applications should store their\n configurations and settings.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getAppConfigDirectory",
          "package": "system-fileio",
          "signature": "Text -\u003e IO FilePath",
          "source": "src/Filesystem.html#getAppConfigDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the user application configuration directory given an application label This directory is where applications should store their configurations and settings This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getAppConfigDirectory",
          "normalized": "Text-\u003eIO FilePath",
          "package": "system-fileio",
          "partial": "App Config Directory",
          "signature": "Text-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getAppConfigDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user&#8217;s application data directory, given an application\n label. This directory is where applications should store data the user did\n not explicitly create, such as databases and automatic saves.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getAppDataDirectory",
          "package": "system-fileio",
          "signature": "Text -\u003e IO FilePath",
          "source": "src/Filesystem.html#getAppDataDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the user application data directory given an application label This directory is where applications should store data the user did not explicitly create such as databases and automatic saves This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getAppDataDirectory",
          "normalized": "Text-\u003eIO FilePath",
          "package": "system-fileio",
          "partial": "App Data Directory",
          "signature": "Text-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getAppDataDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user&#8217;s desktop directory. This is a good starting point for\n file dialogs and other user queries. For data files the user does not\n explicitly create, such as automatic saves, use \u003ccode\u003e\u003ca\u003egetAppDataDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getDesktopDirectory",
          "package": "system-fileio",
          "signature": "IO FilePath",
          "source": "src/Filesystem.html#getDesktopDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the user desktop directory This is good starting point for file dialogs and other user queries For data files the user does not explicitly create such as automatic saves use getAppDataDirectory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getDesktopDirectory",
          "package": "system-fileio",
          "partial": "Desktop Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getDesktopDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user&#8217;s documents directory. This is a good place to save\n user&#8208;created files. For data files the user does not explicitly\n create, such as automatic saves, use \u003ccode\u003e\u003ca\u003egetAppDataDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getDocumentsDirectory",
          "package": "system-fileio",
          "signature": "IO FilePath",
          "source": "src/Filesystem.html#getDocumentsDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the user documents directory This is good place to save user created files For data files the user does not explicitly create such as automatic saves use getAppDataDirectory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getDocumentsDirectory",
          "package": "system-fileio",
          "partial": "Documents Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getDocumentsDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the user&#8217;s home directory. This is useful for building paths\n to more specific directories.\n\u003c/p\u003e\u003cp\u003eFor directing the user to open or safe a document, use\n \u003ccode\u003e\u003ca\u003egetDocumentsDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor data files the user does not explicitly create, such as automatic\n saves, use \u003ccode\u003e\u003ca\u003egetAppDataDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getHomeDirectory",
          "package": "system-fileio",
          "signature": "IO FilePath",
          "source": "src/Filesystem.html#getHomeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the user home directory This is useful for building paths to more specific directories For directing the user to open or safe document use getDocumentsDirectory For data files the user does not explicitly create such as automatic saves use getAppDataDirectory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getHomeDirectory",
          "package": "system-fileio",
          "partial": "Home Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getHomeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet when the object at a given path was last modified.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getModified",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO UTCTime",
          "source": "src/Filesystem.html#getModified",
          "type": "function"
        },
        "index": {
          "description": "Get when the object at given path was last modified This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getModified",
          "normalized": "FilePath-\u003eIO UTCTime",
          "package": "system-fileio",
          "partial": "Modified",
          "signature": "FilePath-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of an object at a given path. For special objects like\n links or directories, the size is filesystem&#8208; and\n platform&#8208;dependent.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getSize",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO Integer",
          "source": "src/Filesystem.html#getSize",
          "type": "function"
        },
        "index": {
          "description": "Get the size of an object at given path For special objects like links or directories the size is filesystem and platform dependent This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured Since",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getSize",
          "normalized": "FilePath-\u003eIO Integer",
          "package": "system-fileio",
          "partial": "Size",
          "signature": "FilePath-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current working directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "getWorkingDirectory",
          "package": "system-fileio",
          "signature": "IO FilePath",
          "source": "src/Filesystem.html#getWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the current working directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "getWorkingDirectory",
          "package": "system-fileio",
          "partial": "Working Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:getWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a directory exists at the given path.\n\u003c/p\u003e\u003cp\u003eSymbolic links are resolved to their targets before checking their type.\n\u003c/p\u003e\u003cp\u003eThis computation does not throw exceptions.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "isDirectory",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/Filesystem.html#isDirectory",
          "type": "function"
        },
        "index": {
          "description": "Check if directory exists at the given path Symbolic links are resolved to their targets before checking their type This computation does not throw exceptions",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "isDirectory",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "system-fileio",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a file exists at the given path.\n\u003c/p\u003e\u003cp\u003eAny non&#8208;directory object, including devices and pipes, are\n considered to be files. Symbolic links are resolved to their targets\n before checking their type.\n\u003c/p\u003e\u003cp\u003eThis computation does not throw exceptions.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "isFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO Bool",
          "source": "src/Filesystem.html#isFile",
          "type": "function"
        },
        "index": {
          "description": "Check if file exists at the given path Any non directory object including devices and pipes are considered to be files Symbolic links are resolved to their targets before checking their type This computation does not throw exceptions",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "isFile",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:isFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList objects in a directory, excluding \u003ccode\u003e\".\"\u003c/code\u003e and \u003ccode\u003e\"..\"\u003c/code\u003e. Each\n returned \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e includes the path of the directory. Entries are not\n sorted.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "listDirectory",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/Filesystem.html#listDirectory",
          "type": "function"
        },
        "index": {
          "description": "List objects in directory excluding and Each returned FilePath includes the path of the directory Entries are not sorted This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "listDirectory",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "system-fileio",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:listDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file in binary mode, and return an open \u003ccode\u003eHandle\u003c/code\u003e. The \u003ccode\u003eHandle\u003c/code\u003e\n should be closed with \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e when it is no longer needed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e is easier to use, because it will handle the \u003ccode\u003eHandle\u003c/code\u003e&#8217;s\n lifetime automatically.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "openFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "source": "src/Filesystem.html#openFile",
          "type": "function"
        },
        "index": {
          "description": "Open file in binary mode and return an open Handle The Handle should be closed with hClose when it is no longer needed withFile is easier to use because it will handle the Handle lifetime automatically This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file in text mode, and return an open \u003ccode\u003eHandle\u003c/code\u003e. The \u003ccode\u003eHandle\u003c/code\u003e\n should be closed with \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e when it is no longer needed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithTextFile\u003c/a\u003e\u003c/code\u003e is easier to use, because it will handle the\n \u003ccode\u003eHandle\u003c/code\u003e&#8217;s lifetime automatically.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "openTextFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "source": "src/Filesystem.html#openTextFile",
          "type": "function"
        },
        "index": {
          "description": "Open file in text mode and return an open Handle The Handle should be closed with hClose when it is no longer needed withTextFile is easier to use because it will handle the Handle lifetime automatically This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "openTextFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "system-fileio",
          "partial": "Text File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:openTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in the entire content of a binary file.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "readFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Filesystem.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read in the entire content of binary file This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in the entire content of a text file.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "readTextFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO Text",
          "source": "src/Filesystem.html#readTextFile",
          "type": "function"
        },
        "index": {
          "description": "Read in the entire content of text file This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "readTextFile",
          "normalized": "FilePath-\u003eIO Text",
          "package": "system-fileio",
          "partial": "Text File",
          "signature": "FilePath-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:readTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an empty directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "removeDirectory",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Filesystem.html#removeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Remove an empty directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "removeDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file. This will fail if the file does not exist.\n\u003c/p\u003e\u003cp\u003eThis computation cannot remove directories. For that, use \u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eremoveTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "removeFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Filesystem.html#removeFile",
          "type": "function"
        },
        "index": {
          "description": "Remove file This will fail if the file does not exist This computation cannot remove directories For that use removeDirectory or removeTree This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "removeFile",
          "normalized": "FilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:removeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively remove a directory tree rooted at the given path.\n\u003c/p\u003e\u003cp\u003eThis computation does not follow symlinks. If the tree contains symlinks,\n the links themselves will be removed, but not the objects they point to.\n\u003c/p\u003e\u003cp\u003eIf the root path is a symlink, then it will be treated as if it were a\n regular directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "removeTree",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Filesystem.html#removeTree",
          "type": "function"
        },
        "index": {
          "description": "Recursively remove directory tree rooted at the given path This computation does not follow symlinks If the tree contains symlinks the links themselves will be removed but not the objects they point to If the root path is symlink then it will be treated as if it were regular directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "removeTree",
          "normalized": "FilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "Tree",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:removeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a filesystem object.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "rename",
          "package": "system-fileio",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Filesystem.html#rename",
          "type": "function"
        },
        "index": {
          "description": "Rename filesystem object This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "rename",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "system-fileio",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current working directory.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "setWorkingDirectory",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Filesystem.html#setWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "Set the current working directory This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "setWorkingDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "system-fileio",
          "partial": "Working Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:setWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file in binary mode, and pass its \u003ccode\u003eHandle\u003c/code\u003e to a provided\n computation. The \u003ccode\u003eHandle\u003c/code\u003e will be automatically closed when the\n computation returns.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "withFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/Filesystem.html#withFile",
          "type": "function"
        },
        "index": {
          "description": "Open file in binary mode and pass its Handle to provided computation The Handle will be automatically closed when the computation returns This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "withFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:withFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file in text mode, and pass its \u003ccode\u003eHandle\u003c/code\u003e to a provided\n computation. The \u003ccode\u003eHandle\u003c/code\u003e will be automatically closed when the\n computation returns.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "withTextFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/Filesystem.html#withTextFile",
          "type": "function"
        },
        "index": {
          "description": "Open file in text mode and pass its Handle to provided computation The Handle will be automatically closed when the computation returns This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "withTextFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "system-fileio",
          "partial": "Text File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:withTextFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the entire content of a binary file with the provided\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "writeFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Filesystem.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Replace the entire content of binary file with the provided ByteString This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "system-fileio",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the entire content of a text file with the provided\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation throws \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e on failure. See &#8220;Classifying\n I/O errors&#8221; in the \u003ca\u003eSystem.IO.Error\u003c/a\u003e documentation for information on\n why the failure occured.\n\u003c/p\u003e",
          "module": "Filesystem",
          "name": "writeTextFile",
          "package": "system-fileio",
          "signature": "FilePath -\u003e Text -\u003e IO ()",
          "source": "src/Filesystem.html#writeTextFile",
          "type": "function"
        },
        "index": {
          "description": "Replace the entire content of text file with the provided Text This computation throws IOError on failure See Classifying errors in the System.IO.Error documentation for information on why the failure occured",
          "hierarchy": "Filesystem",
          "module": "Filesystem",
          "name": "writeTextFile",
          "normalized": "FilePath-\u003eText-\u003eIO()",
          "package": "system-fileio",
          "partial": "Text File",
          "signature": "FilePath-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-fileio/docs/Filesystem.html#v:writeTextFile"
      }
    }
  ]
]