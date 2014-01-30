[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#",
      "description": {
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Temp.html",
        "fct-type": "module",
        "title": "Temp"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "Temp",
        "normalized": "",
        "package": "temporary",
        "partial": "Temp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:createTempDirectory",
      "description": {
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "FilePath -\u003e String -\u003e IO FilePath",
        "fct-source": "src/Distribution-Compat-TempFile.html#createTempDirectory",
        "fct-type": "function",
        "title": "createTempDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "createTempDirectory",
        "normalized": "FilePath-\u003eString-\u003eIO FilePath",
        "package": "temporary",
        "partial": "Temp Directory",
        "signature": "FilePath-\u003eString-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:openBinaryTempFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eopenTempFile\u003c/a\u003e\u003c/code\u003e, but opens the file in binary mode. See \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e for more comments.\n\u003c/p\u003e",
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle)",
        "fct-type": "function",
        "title": "openBinaryTempFile"
      },
      "index": {
        "description": "Like openTempFile but opens the file in binary mode See openBinaryFile for more comments",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "openBinaryTempFile",
        "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
        "package": "temporary",
        "partial": "Binary Temp File",
        "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:openNewBinaryFile",
      "description": {
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle)",
        "fct-source": "src/Distribution-Compat-TempFile.html#openNewBinaryFile",
        "fct-type": "function",
        "title": "openNewBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "openNewBinaryFile",
        "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
        "package": "temporary",
        "partial": "New Binary File",
        "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:openTempFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe function creates a temporary file in ReadWrite mode.\n The created file isn't deleted automatically, so you need to delete it manually.\n\u003c/p\u003e\u003cp\u003eThe file is creates with permissions such that only the current\n user can read/write it.\n\u003c/p\u003e\u003cp\u003eWith some exceptions (see below), the file will be created securely\n in the sense that an attacker should not be able to cause\n openTempFile to overwrite another file on the filesystem using your\n credentials, by putting symbolic links (on Unix) in the place where\n the temporary file is to be created.  On Unix the \u003ccode\u003eO_CREAT\u003c/code\u003e and\n \u003ccode\u003eO_EXCL\u003c/code\u003e flags are used to prevent this attack, but note that\n \u003ccode\u003eO_EXCL\u003c/code\u003e is sometimes not supported on NFS filesystems, so if you\n rely on this behaviour it is best to use local filesystems only.\n\u003c/p\u003e",
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "FilePath-\u003e String-\u003e IO (FilePath, Handle)",
        "fct-type": "function",
        "title": "openTempFile"
      },
      "index": {
        "description": "The function creates temporary file in ReadWrite mode The created file isn deleted automatically so you need to delete it manually The file is creates with permissions such that only the current user can read write it With some exceptions see below the file will be created securely in the sense that an attacker should not be able to cause openTempFile to overwrite another file on the filesystem using your credentials by putting symbolic links on Unix in the place where the temporary file is to be created On Unix the CREAT and EXCL flags are used to prevent this attack but note that EXCL is sometimes not supported on NFS filesystems so if you rely on this behaviour it is best to use local filesystems only",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "openTempFile",
        "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
        "package": "temporary",
        "partial": "Temp File",
        "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:withSystemTempDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and use a temporary directory in the system standard temporary directory.\n\u003c/p\u003e\u003cp\u003eBehaves exactly the same as \u003ccode\u003e\u003ca\u003ewithTempDirectory\u003c/a\u003e\u003c/code\u003e, except that the parent temporary directory\n will be that returned by \u003ccode\u003e\u003ca\u003egetTemporaryDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "String-\u003e (FilePath -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withSystemTempDirectory"
      },
      "index": {
        "description": "Create and use temporary directory in the system standard temporary directory Behaves exactly the same as withTempDirectory except that the parent temporary directory will be that returned by getTemporaryDirectory",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "withSystemTempDirectory",
        "normalized": "String-\u003e(FilePath-\u003ea b)-\u003ea b",
        "package": "temporary",
        "partial": "System Temp Directory",
        "signature": "String-\u003e(FilePath-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:withSystemTempFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and use a temporary directory in the system standard temporary directory.\n\u003c/p\u003e\u003cp\u003eBehaves exactly the same as \u003ccode\u003e\u003ca\u003ewithTempFile\u003c/a\u003e\u003c/code\u003e, except that the parent temporary directory\n will be that returned by \u003ccode\u003e\u003ca\u003egetTemporaryDirectory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "String-\u003e (FilePath -\u003e Handle -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withSystemTempFile"
      },
      "index": {
        "description": "Create and use temporary directory in the system standard temporary directory Behaves exactly the same as withTempFile except that the parent temporary directory will be that returned by getTemporaryDirectory",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "withSystemTempFile",
        "normalized": "String-\u003e(FilePath-\u003eHandle-\u003ea b)-\u003ea b",
        "package": "temporary",
        "partial": "System Temp File",
        "signature": "String-\u003e(FilePath-\u003eHandle-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:withTempDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and use a temporary directory.\n\u003c/p\u003e\u003cp\u003eCreates a new temporary directory inside the given directory, making use\n of the template. The temp directory is deleted after use. For example:\n\u003c/p\u003e\u003cpre\u003e withTempDirectory \"src\" \"sdist.\" $ \\tmpDir -\u003e do ...\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003etmpDir\u003c/code\u003e will be a new subdirectory of the given directory, e.g.\n \u003ccode\u003esrc/sdist.342\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "FilePath-\u003e String-\u003e (FilePath -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withTempDirectory"
      },
      "index": {
        "description": "Create and use temporary directory Creates new temporary directory inside the given directory making use of the template The temp directory is deleted after use For example withTempDirectory src sdist tmpDir do The tmpDir will be new subdirectory of the given directory e.g src sdist.342",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "withTempDirectory",
        "normalized": "FilePath-\u003eString-\u003e(FilePath-\u003ea b)-\u003ea b",
        "package": "temporary",
        "partial": "Temp Directory",
        "signature": "FilePath-\u003eString-\u003e(FilePath-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporary/docs/System-IO-Temp.html#v:withTempFile",
      "description": {
        "fct-descr": "\u003cp\u003eUse a temporary filename that doesn't already exist.\n\u003c/p\u003e\u003cp\u003eCreates a new temporary file inside the given directory, making use of the\n template. The temp file is deleted after use. For example:\n\u003c/p\u003e\u003cpre\u003e withTempFile \"src\" \"sdist.\" $ \\tmpFile hFile -\u003e do ...\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003etmpFlie\u003c/code\u003e will be file in the given directory, e.g.\n \u003ccode\u003esrc/sdist.342\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Temp",
        "fct-package": "temporary",
        "fct-signature": "FilePath-\u003e String-\u003e (FilePath -\u003e Handle -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "withTempFile"
      },
      "index": {
        "description": "Use temporary filename that doesn already exist Creates new temporary file inside the given directory making use of the template The temp file is deleted after use For example withTempFile src sdist tmpFile hFile do The tmpFlie will be file in the given directory e.g src sdist.342",
        "hierarchy": "System IO Temp",
        "module": "System.IO.Temp",
        "name": "withTempFile",
        "normalized": "FilePath-\u003eString-\u003e(FilePath-\u003eHandle-\u003ea b)-\u003ea b",
        "package": "temporary",
        "partial": "Temp File",
        "signature": "FilePath-\u003eString-\u003e(FilePath-\u003eHandle-\u003em a)-\u003em a"
      }
    }
  }
]