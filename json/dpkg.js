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
        "word": "dpkg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "DB",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-DB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "DB",
          "package": "dpkg",
          "partial": "DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "c'dpkg_version_compare",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version -\u003e Ptr C'dpkg_version -\u003e IO CInt",
          "source": "src/Debian-Dpkg-DB.html#c%27dpkg_version_compare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "c'dpkg_version_compare",
          "normalized": "Ptr C'dpkg_version-\u003ePtr C'dpkg_version-\u003eIO CInt",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version-\u003ePtr C'dpkg_version-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#v:c-39-dpkg_version_compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "c'parseversion",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version -\u003e CString -\u003e Ptr C'dpkg_error -\u003e IO CInt",
          "source": "src/Debian-Dpkg-DB.html#c%27parseversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "c'parseversion",
          "normalized": "Ptr C'dpkg_version-\u003eCString-\u003ePtr C'dpkg_error-\u003eIO CInt",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version-\u003eCString-\u003ePtr C'dpkg_error-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#v:c-39-parseversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "msdbInit",
          "package": "dpkg",
          "signature": "IO ()",
          "source": "src/Debian-Dpkg-DB.html#msdbInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "msdbInit",
          "normalized": "IO()",
          "package": "dpkg",
          "partial": "Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#v:msdbInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "parseVersion",
          "package": "dpkg",
          "signature": "ByteString -\u003e IO (Either String C'dpkg_version)",
          "source": "src/Debian-Dpkg-DB.html#parseVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "parseVersion",
          "normalized": "ByteString-\u003eIO(Either String C'dpkg_version)",
          "package": "dpkg",
          "partial": "Version",
          "signature": "ByteString-\u003eIO(Either String C'dpkg_version)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#v:parseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "pkgList",
          "package": "dpkg",
          "signature": "IO [C'pkginfo]",
          "source": "src/Debian-Dpkg-DB.html#pkgList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "pkgList",
          "normalized": "IO[C'pkginfo]",
          "package": "dpkg",
          "partial": "List",
          "signature": "IO[C'pkginfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#v:pkgList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DB",
          "name": "setDbDir",
          "package": "dpkg",
          "signature": "String -\u003e IO ()",
          "source": "src/Debian-Dpkg-DB.html#setDbDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DB",
          "module": "Debian.Dpkg.DB",
          "name": "setDbDir",
          "normalized": "String-\u003eIO()",
          "package": "dpkg",
          "partial": "Db Dir",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DB.html#v:setDbDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "DpkgVersion",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-DpkgVersion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "DpkgVersion",
          "package": "dpkg",
          "partial": "Dpkg Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "DpkgVersion",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-DpkgVersion.html#DpkgVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "DpkgVersion",
          "package": "dpkg",
          "partial": "Dpkg Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#t:DpkgVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "DpkgVersion",
          "package": "dpkg",
          "signature": "DpkgVersion",
          "source": "src/Debian-Dpkg-DpkgVersion.html#DpkgVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "DpkgVersion",
          "package": "dpkg",
          "partial": "Dpkg Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#v:DpkgVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "getConfigVersion",
          "package": "dpkg",
          "signature": "C'pkginfo -\u003e IO String",
          "source": "src/Debian-Dpkg-DpkgVersion.html#getConfigVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "getConfigVersion",
          "normalized": "C'pkginfo-\u003eIO String",
          "package": "dpkg",
          "partial": "Config Version",
          "signature": "C'pkginfo-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#v:getConfigVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "peekDpkgVersion",
          "package": "dpkg",
          "signature": "C'dpkg_version -\u003e IO DpkgVersion",
          "source": "src/Debian-Dpkg-DpkgVersion.html#peekDpkgVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "peekDpkgVersion",
          "normalized": "C'dpkg_version-\u003eIO DpkgVersion",
          "package": "dpkg",
          "partial": "Dpkg Version",
          "signature": "C'dpkg_version-\u003eIO DpkgVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#v:peekDpkgVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "vr_epoch",
          "package": "dpkg",
          "signature": "Int",
          "source": "src/Debian-Dpkg-DpkgVersion.html#DpkgVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "vr_epoch",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#v:vr_epoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "vr_revision",
          "package": "dpkg",
          "signature": "ByteString",
          "source": "src/Debian-Dpkg-DpkgVersion.html#DpkgVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "vr_revision",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#v:vr_revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "vr_version",
          "package": "dpkg",
          "signature": "ByteString",
          "source": "src/Debian-Dpkg-DpkgVersion.html#DpkgVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg DpkgVersion",
          "module": "Debian.Dpkg.DpkgVersion",
          "name": "vr_version",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-DpkgVersion.html#v:vr_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Enums",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Enums.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Enums",
          "package": "dpkg",
          "partial": "Enums",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "PkgEflag",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Enums.html#PkgEflag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "PkgEflag",
          "package": "dpkg",
          "partial": "Pkg Eflag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#t:PkgEflag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "PkgPriority",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "PkgPriority",
          "package": "dpkg",
          "partial": "Pkg Priority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#t:PkgPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "PkgStatus",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "PkgStatus",
          "package": "dpkg",
          "partial": "Pkg Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#t:PkgStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "PkgWant",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "PkgWant",
          "package": "dpkg",
          "partial": "Pkg Want",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#t:PkgWant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Eflag_ok",
          "package": "dpkg",
          "signature": "Eflag_ok",
          "source": "src/Debian-Dpkg-Enums.html#PkgEflag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Eflag_ok",
          "package": "dpkg",
          "partial": "Eflag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Eflag_ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Eflag_reinstreq",
          "package": "dpkg",
          "signature": "Eflag_reinstreq",
          "source": "src/Debian-Dpkg-Enums.html#PkgEflag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Eflag_reinstreq",
          "package": "dpkg",
          "partial": "Eflag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Eflag_reinstreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_extra",
          "package": "dpkg",
          "signature": "Pri_extra",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_extra",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_important",
          "package": "dpkg",
          "signature": "Pri_important",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_important",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_important"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_optional",
          "package": "dpkg",
          "signature": "Pri_optional",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_optional",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_other",
          "package": "dpkg",
          "signature": "Pri_other",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_other",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_required",
          "package": "dpkg",
          "signature": "Pri_required",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_required",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_standard",
          "package": "dpkg",
          "signature": "Pri_standard",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_standard",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_standard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_unknown",
          "package": "dpkg",
          "signature": "Pri_unknown",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_unknown",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_unset",
          "package": "dpkg",
          "signature": "Pri_unset",
          "source": "src/Debian-Dpkg-Enums.html#PkgPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Pri_unset",
          "package": "dpkg",
          "partial": "Pri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Pri_unset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_configfiles",
          "package": "dpkg",
          "signature": "Stat_configfiles",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_configfiles",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_configfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_halfconfigured",
          "package": "dpkg",
          "signature": "Stat_halfconfigured",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_halfconfigured",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_halfconfigured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_halfinstalled",
          "package": "dpkg",
          "signature": "Stat_halfinstalled",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_halfinstalled",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_halfinstalled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_installed",
          "package": "dpkg",
          "signature": "Stat_installed",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_installed",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_installed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_notinstalled",
          "package": "dpkg",
          "signature": "Stat_notinstalled",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_notinstalled",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_notinstalled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_triggersawaited",
          "package": "dpkg",
          "signature": "Stat_triggersawaited",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_triggersawaited",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_triggersawaited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_triggerspending",
          "package": "dpkg",
          "signature": "Stat_triggerspending",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_triggerspending",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_triggerspending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_unpacked",
          "package": "dpkg",
          "signature": "Stat_unpacked",
          "source": "src/Debian-Dpkg-Enums.html#PkgStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Stat_unpacked",
          "package": "dpkg",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Stat_unpacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Want_deinstall",
          "package": "dpkg",
          "signature": "Want_deinstall",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Want_deinstall",
          "package": "dpkg",
          "partial": "Want",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Want_deinstall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Want_hold",
          "package": "dpkg",
          "signature": "Want_hold",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Want_hold",
          "package": "dpkg",
          "partial": "Want",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Want_hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Want_install",
          "package": "dpkg",
          "signature": "Want_install",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Want_install",
          "package": "dpkg",
          "partial": "Want",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Want_install"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Want_purge",
          "package": "dpkg",
          "signature": "Want_purge",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Want_purge",
          "package": "dpkg",
          "partial": "Want",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Want_purge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Want_sentinel",
          "package": "dpkg",
          "signature": "Want_sentinel",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Want_sentinel",
          "package": "dpkg",
          "partial": "Want",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Want_sentinel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Enums",
          "name": "Want_unknown",
          "package": "dpkg",
          "signature": "Want_unknown",
          "source": "src/Debian-Dpkg-Enums.html#PkgWant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Enums",
          "module": "Debian.Dpkg.Enums",
          "name": "Want_unknown",
          "package": "dpkg",
          "partial": "Want",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Enums.html#v:Want_unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.PkgSpec",
          "name": "PkgSpec",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-PkgSpec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Dpkg PkgSpec",
          "module": "Debian.Dpkg.PkgSpec",
          "name": "PkgSpec",
          "package": "dpkg",
          "partial": "Pkg Spec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-PkgSpec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.PkgSpec",
          "name": "pkgSpecParsePkg",
          "package": "dpkg",
          "signature": "String -\u003e IO C'pkginfo",
          "source": "src/Debian-Dpkg-PkgSpec.html#pkgSpecParsePkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg PkgSpec",
          "module": "Debian.Dpkg.PkgSpec",
          "name": "pkgSpecParsePkg",
          "normalized": "String-\u003eIO C'pkginfo",
          "package": "dpkg",
          "partial": "Spec Parse Pkg",
          "signature": "String-\u003eIO C'pkginfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-PkgSpec.html#v:pkgSpecParsePkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "Types",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "Types",
          "package": "dpkg",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_error",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_error",
          "package": "dpkg",
          "partial": "C'dpkg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-dpkg_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_msg_type",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_msg_type",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_msg_type",
          "package": "dpkg",
          "partial": "C'dpkg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-dpkg_msg_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_version",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_version",
          "package": "dpkg",
          "partial": "C'dpkg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-dpkg_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'filedetails",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'filedetails",
          "package": "dpkg",
          "partial": "C'filedetails",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-filedetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'perpackagestate",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27perpackagestate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'perpackagestate",
          "package": "dpkg",
          "partial": "C'perpackagestate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-perpackagestate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgbin",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgbin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgbin",
          "package": "dpkg",
          "partial": "C'pkgbin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgbin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgeflag",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgeflag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgeflag",
          "package": "dpkg",
          "partial": "C'pkgeflag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgeflag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkginfo",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkginfo",
          "package": "dpkg",
          "partial": "C'pkginfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkginfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgiterator",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgiterator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgiterator",
          "package": "dpkg",
          "partial": "C'pkgiterator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgiterator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgpriority",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgpriority",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgpriority",
          "package": "dpkg",
          "partial": "C'pkgpriority",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgpriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgset",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgset",
          "package": "dpkg",
          "partial": "C'pkgset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgstatus",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgstatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgstatus",
          "package": "dpkg",
          "partial": "C'pkgstatus",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgstatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgwant",
          "package": "dpkg",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgwant",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgwant",
          "package": "dpkg",
          "partial": "C'pkgwant",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#t:C-39-pkgwant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_error",
          "package": "dpkg",
          "signature": "C'dpkg_error",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_error",
          "package": "dpkg",
          "partial": "C'dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-dpkg_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_version",
          "package": "dpkg",
          "signature": "C'dpkg_version",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'dpkg_version",
          "package": "dpkg",
          "partial": "C'dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-dpkg_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'filedetails",
          "package": "dpkg",
          "signature": "C'filedetails",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'filedetails",
          "package": "dpkg",
          "partial": "C'filedetails",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-filedetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'perpackagestate",
          "package": "dpkg",
          "signature": "C'perpackagestate",
          "source": "src/Debian-Dpkg-Types.html#C%27perpackagestate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'perpackagestate",
          "package": "dpkg",
          "partial": "C'perpackagestate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-perpackagestate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgbin",
          "package": "dpkg",
          "signature": "C'pkgbin",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgbin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgbin",
          "package": "dpkg",
          "partial": "C'pkgbin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-pkgbin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkginfo",
          "package": "dpkg",
          "signature": "C'pkginfo",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkginfo",
          "package": "dpkg",
          "partial": "C'pkginfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-pkginfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgiterator",
          "package": "dpkg",
          "signature": "C'pkgiterator",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgiterator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgiterator",
          "package": "dpkg",
          "partial": "C'pkgiterator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-pkgiterator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgset",
          "package": "dpkg",
          "signature": "C'pkgset",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "C'pkgset",
          "package": "dpkg",
          "partial": "C'pkgset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:C-39-pkgset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_error'str",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_error'str",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-dpkg_error-39-str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_error'type",
          "package": "dpkg",
          "signature": "C'dpkg_msg_type",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_error'type",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-dpkg_error-39-type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_version'epoch",
          "package": "dpkg",
          "signature": "CInt",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_version'epoch",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-dpkg_version-39-epoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_version'revision",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_version'revision",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-dpkg_version-39-revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_version'version",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27dpkg_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'dpkg_version'version",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-dpkg_version-39-version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'md5sum",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'md5sum",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-filedetails-39-md5sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'msdosname",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'msdosname",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-filedetails-39-msdosname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'name",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'name",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-filedetails-39-name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'next",
          "package": "dpkg",
          "signature": "Ptr C'filedetails",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'next",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-filedetails-39-next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'size",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27filedetails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'filedetails'size",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-filedetails-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'arch_next",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'arch_next",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-arch_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'available",
          "package": "dpkg",
          "signature": "C'pkgbin",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'available",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-available"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'clientdata",
          "package": "dpkg",
          "signature": "Ptr C'perpackagestate",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'clientdata",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-clientdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'configversion",
          "package": "dpkg",
          "signature": "C'dpkg_version",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'configversion",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-configversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'eflag",
          "package": "dpkg",
          "signature": "C'pkgeflag",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'eflag",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-eflag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'files",
          "package": "dpkg",
          "signature": "Ptr C'filedetails",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'files",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'installed",
          "package": "dpkg",
          "signature": "C'pkgbin",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'installed",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-installed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'otherpriority",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'otherpriority",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-otherpriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'priority",
          "package": "dpkg",
          "signature": "C'pkgpriority",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'priority",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'section",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'section",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'set",
          "package": "dpkg",
          "signature": "Ptr C'pkgset",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'set",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'status",
          "package": "dpkg",
          "signature": "C'pkgstatus",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'status",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'want",
          "package": "dpkg",
          "signature": "C'pkgwant",
          "source": "src/Debian-Dpkg-Types.html#C%27pkginfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkginfo'want",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkginfo-39-want"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkgset'name",
          "package": "dpkg",
          "signature": "CString",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkgset'name",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkgset-39-name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkgset'next",
          "package": "dpkg",
          "signature": "Ptr C'pkgset",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkgset'next",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkgset-39-next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "c'pkgset'pkg",
          "package": "dpkg",
          "signature": "C'pkginfo",
          "source": "src/Debian-Dpkg-Types.html#C%27pkgset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "c'pkgset'pkg",
          "package": "dpkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:c-39-pkgset-39-pkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_error'str",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_error -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27dpkg_error%27str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_error'str",
          "normalized": "Ptr C'dpkg_error-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_error-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-dpkg_error-39-str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_error'type",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_error -\u003e Ptr C'dpkg_msg_type",
          "source": "src/Debian-Dpkg-Types.html#p%27dpkg_error%27type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_error'type",
          "normalized": "Ptr C'dpkg_error-\u003ePtr C'dpkg_msg_type",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_error-\u003ePtr C'dpkg_msg_type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-dpkg_error-39-type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_version'epoch",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version -\u003e Ptr CInt",
          "source": "src/Debian-Dpkg-Types.html#p%27dpkg_version%27epoch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_version'epoch",
          "normalized": "Ptr C'dpkg_version-\u003ePtr CInt",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version-\u003ePtr CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-dpkg_version-39-epoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_version'revision",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27dpkg_version%27revision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_version'revision",
          "normalized": "Ptr C'dpkg_version-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-dpkg_version-39-revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_version'version",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27dpkg_version%27version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'dpkg_version'version",
          "normalized": "Ptr C'dpkg_version-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'dpkg_version-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-dpkg_version-39-version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'md5sum",
          "package": "dpkg",
          "signature": "Ptr C'filedetails -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27filedetails%27md5sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'md5sum",
          "normalized": "Ptr C'filedetails-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'filedetails-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-filedetails-39-md5sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'msdosname",
          "package": "dpkg",
          "signature": "Ptr C'filedetails -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27filedetails%27msdosname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'msdosname",
          "normalized": "Ptr C'filedetails-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'filedetails-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-filedetails-39-msdosname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'name",
          "package": "dpkg",
          "signature": "Ptr C'filedetails -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27filedetails%27name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'name",
          "normalized": "Ptr C'filedetails-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'filedetails-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-filedetails-39-name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'next",
          "package": "dpkg",
          "signature": "Ptr C'filedetails -\u003e Ptr (Ptr C'filedetails)",
          "source": "src/Debian-Dpkg-Types.html#p%27filedetails%27next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'next",
          "normalized": "Ptr C'filedetails-\u003ePtr(Ptr C'filedetails)",
          "package": "dpkg",
          "signature": "Ptr C'filedetails-\u003ePtr(Ptr C'filedetails)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-filedetails-39-next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'size",
          "package": "dpkg",
          "signature": "Ptr C'filedetails -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27filedetails%27size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'filedetails'size",
          "normalized": "Ptr C'filedetails-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'filedetails-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-filedetails-39-size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'arch_next",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr (Ptr C'pkginfo)",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27arch_next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'arch_next",
          "normalized": "Ptr C'pkginfo-\u003ePtr(Ptr C'pkginfo)",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr(Ptr C'pkginfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-arch_next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'available",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'pkgbin",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27available",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'available",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'pkgbin",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'pkgbin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-available"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'clientdata",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr (Ptr C'perpackagestate)",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27clientdata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'clientdata",
          "normalized": "Ptr C'pkginfo-\u003ePtr(Ptr C'perpackagestate)",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr(Ptr C'perpackagestate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-clientdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'configversion",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'dpkg_version",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27configversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'configversion",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'dpkg_version",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'dpkg_version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-configversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'eflag",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'pkgeflag",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27eflag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'eflag",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'pkgeflag",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'pkgeflag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-eflag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'files",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr (Ptr C'filedetails)",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27files",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'files",
          "normalized": "Ptr C'pkginfo-\u003ePtr(Ptr C'filedetails)",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr(Ptr C'filedetails)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'installed",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'pkgbin",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27installed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'installed",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'pkgbin",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'pkgbin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-installed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'otherpriority",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27otherpriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'otherpriority",
          "normalized": "Ptr C'pkginfo-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-otherpriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'priority",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'pkgpriority",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27priority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'priority",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'pkgpriority",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'pkgpriority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'section",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'section",
          "normalized": "Ptr C'pkginfo-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'set",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr (Ptr C'pkgset)",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'set",
          "normalized": "Ptr C'pkginfo-\u003ePtr(Ptr C'pkgset)",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr(Ptr C'pkgset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'status",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'pkgstatus",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'status",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'pkgstatus",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'pkgstatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'want",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo -\u003e Ptr C'pkgwant",
          "source": "src/Debian-Dpkg-Types.html#p%27pkginfo%27want",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkginfo'want",
          "normalized": "Ptr C'pkginfo-\u003ePtr C'pkgwant",
          "package": "dpkg",
          "signature": "Ptr C'pkginfo-\u003ePtr C'pkgwant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkginfo-39-want"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkgset'name",
          "package": "dpkg",
          "signature": "Ptr C'pkgset -\u003e Ptr CString",
          "source": "src/Debian-Dpkg-Types.html#p%27pkgset%27name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkgset'name",
          "normalized": "Ptr C'pkgset-\u003ePtr CString",
          "package": "dpkg",
          "signature": "Ptr C'pkgset-\u003ePtr CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkgset-39-name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkgset'next",
          "package": "dpkg",
          "signature": "Ptr C'pkgset -\u003e Ptr (Ptr C'pkgset)",
          "source": "src/Debian-Dpkg-Types.html#p%27pkgset%27next",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkgset'next",
          "normalized": "Ptr C'pkgset-\u003ePtr(Ptr C'pkgset)",
          "package": "dpkg",
          "signature": "Ptr C'pkgset-\u003ePtr(Ptr C'pkgset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkgset-39-next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg.Types",
          "name": "p'pkgset'pkg",
          "package": "dpkg",
          "signature": "Ptr C'pkgset -\u003e Ptr C'pkginfo",
          "source": "src/Debian-Dpkg-Types.html#p%27pkgset%27pkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Dpkg Types",
          "module": "Debian.Dpkg.Types",
          "name": "p'pkgset'pkg",
          "normalized": "Ptr C'pkgset-\u003ePtr C'pkginfo",
          "package": "dpkg",
          "signature": "Ptr C'pkgset-\u003ePtr C'pkginfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg-Types.html#v:p-39-pkgset-39-pkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Dpkg",
          "name": "Dpkg",
          "package": "dpkg",
          "source": "src/Debian-Dpkg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Dpkg",
          "module": "Debian.Dpkg",
          "name": "Dpkg",
          "package": "dpkg",
          "partial": "Dpkg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dpkg/docs/Debian-Dpkg.html#"
      }
    }
  ]
]