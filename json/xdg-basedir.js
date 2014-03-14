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
        "word": "xdg-basedir"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.XDG.BaseDir",
          "name": "BaseDir",
          "package": "xdg-basedir",
          "source": "src/System-Environment-XDG-BaseDir.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "BaseDir",
          "package": "xdg-basedir",
          "partial": "Base Dir",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all configuration directories.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllConfigDirs",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getAllConfigDirs",
          "type": "function"
        },
        "index": {
          "description": "Get list of all configuration directories",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllConfigDirs",
          "normalized": "String-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "All Config Dirs",
          "signature": "String-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getAllConfigDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all paths for a specific configuration file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllConfigFiles",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getAllConfigFiles",
          "type": "function"
        },
        "index": {
          "description": "Get list of all paths for specific configuration file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllConfigFiles",
          "normalized": "String-\u003eString-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "All Config Files",
          "signature": "String-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getAllConfigFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all data directories.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllDataDirs",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getAllDataDirs",
          "type": "function"
        },
        "index": {
          "description": "Get list of all data directories",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllDataDirs",
          "normalized": "String-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "All Data Dirs",
          "signature": "String-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getAllDataDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all paths for a specific data file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllDataFiles",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getAllDataFiles",
          "type": "function"
        },
        "index": {
          "description": "Get list of all paths for specific data file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getAllDataFiles",
          "normalized": "String-\u003eString-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "All Data Files",
          "signature": "String-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getAllDataFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the system-wide configuration directories.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemConfigDirs",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getSystemConfigDirs",
          "type": "function"
        },
        "index": {
          "description": "Get list of the system-wide configuration directories",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemConfigDirs",
          "normalized": "String-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "System Config Dirs",
          "signature": "String-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getSystemConfigDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all paths for a specific system configuration file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemConfigFiles",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getSystemConfigFiles",
          "type": "function"
        },
        "index": {
          "description": "Get list of all paths for specific system configuration file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemConfigFiles",
          "normalized": "String-\u003eString-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "System Config Files",
          "signature": "String-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getSystemConfigFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the system-wide data directories.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemDataDirs",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getSystemDataDirs",
          "type": "function"
        },
        "index": {
          "description": "Get list of the system-wide data directories",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemDataDirs",
          "normalized": "String-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "System Data Dirs",
          "signature": "String-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getSystemDataDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all paths for a specific system data file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemDataFiles",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO [FilePath]",
          "source": "src/System-Environment-XDG-BaseDir.html#getSystemDataFiles",
          "type": "function"
        },
        "index": {
          "description": "Get list of all paths for specific system data file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getSystemDataFiles",
          "normalized": "String-\u003eString-\u003eIO[FilePath]",
          "package": "xdg-basedir",
          "partial": "System Data Files",
          "signature": "String-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getSystemDataFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory for user-specific cache files.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserCacheDir",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO FilePath",
          "source": "src/System-Environment-XDG-BaseDir.html#getUserCacheDir",
          "type": "function"
        },
        "index": {
          "description": "Get the directory for user-specific cache files",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserCacheDir",
          "normalized": "String-\u003eIO FilePath",
          "package": "xdg-basedir",
          "partial": "User Cache Dir",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getUserCacheDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path to a specific user cache file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserCacheFile",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO FilePath",
          "source": "src/System-Environment-XDG-BaseDir.html#getUserCacheFile",
          "type": "function"
        },
        "index": {
          "description": "Get the path to specific user cache file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserCacheFile",
          "normalized": "String-\u003eString-\u003eIO FilePath",
          "package": "xdg-basedir",
          "partial": "User Cache File",
          "signature": "String-\u003eString-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getUserCacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory for user-specific configuration files.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserConfigDir",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO FilePath",
          "source": "src/System-Environment-XDG-BaseDir.html#getUserConfigDir",
          "type": "function"
        },
        "index": {
          "description": "Get the directory for user-specific configuration files",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserConfigDir",
          "normalized": "String-\u003eIO FilePath",
          "package": "xdg-basedir",
          "partial": "User Config Dir",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getUserConfigDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path to a specific user configuration file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserConfigFile",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO FilePath",
          "source": "src/System-Environment-XDG-BaseDir.html#getUserConfigFile",
          "type": "function"
        },
        "index": {
          "description": "Get the path to specific user configuration file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserConfigFile",
          "normalized": "String-\u003eString-\u003eIO FilePath",
          "package": "xdg-basedir",
          "partial": "User Config File",
          "signature": "String-\u003eString-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getUserConfigFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory for user-specific data files.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserDataDir",
          "package": "xdg-basedir",
          "signature": "String -\u003e IO FilePath",
          "source": "src/System-Environment-XDG-BaseDir.html#getUserDataDir",
          "type": "function"
        },
        "index": {
          "description": "Get the directory for user-specific data files",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserDataDir",
          "normalized": "String-\u003eIO FilePath",
          "package": "xdg-basedir",
          "partial": "User Data Dir",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getUserDataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path to a specific user data file.\n\u003c/p\u003e",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserDataFile",
          "package": "xdg-basedir",
          "signature": "String -\u003e String -\u003e IO FilePath",
          "source": "src/System-Environment-XDG-BaseDir.html#getUserDataFile",
          "type": "function"
        },
        "index": {
          "description": "Get the path to specific user data file",
          "hierarchy": "System Environment XDG BaseDir",
          "module": "System.Environment.XDG.BaseDir",
          "name": "getUserDataFile",
          "normalized": "String-\u003eString-\u003eIO FilePath",
          "package": "xdg-basedir",
          "partial": "User Data File",
          "signature": "String-\u003eString-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdg-basedir/docs/System-Environment-XDG-BaseDir.html#v:getUserDataFile"
      }
    }
  ]
]