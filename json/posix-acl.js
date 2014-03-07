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
        "word": "posix-acl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for POSIX.1e \u003cem\u003eAccess Control Lists\u003c/em\u003e (ACL), defined in\n section 23 of the draft standard IEEE Std 1003.1e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.ACL",
          "name": "ACL",
          "package": "posix-acl",
          "source": "src/System-Posix-ACL.html",
          "type": "module"
        },
        "index": {
          "description": "Support for POSIX.1e Access Control Lists ACL defined in section of the draft standard IEEE Std",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "ACL",
          "package": "posix-acl",
          "partial": "ACL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a valid ACL as defined in POSIX.1e. The \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n instance is defined to output the \u003cem\u003eLong Text Form\u003c/em\u003e of the ACL\n (section 23.3.1), while the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance is defined to be able\n to parse both the long and short text form.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "ACL",
          "package": "posix-acl",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "data"
        },
        "index": {
          "description": "Represent valid ACL as defined in POSIX.1e The Show instance is defined to output the Long Text Form of the ACL section while the Read instance is defined to be able to parse both the long and short text form",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "ACL",
          "package": "posix-acl",
          "partial": "ACL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#t:ACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combination of read, write and execute permissions.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "Permset",
          "package": "posix-acl",
          "source": "src/System-Posix-ACL.html#Permset",
          "type": "data"
        },
        "index": {
          "description": "combination of read write and execute permissions",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "Permset",
          "package": "posix-acl",
          "partial": "Permset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#t:Permset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "ExtendedACL",
          "package": "posix-acl",
          "signature": "ExtendedACL",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "ExtendedACL",
          "package": "posix-acl",
          "partial": "Extended ACL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:ExtendedACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "MinimumACL",
          "package": "posix-acl",
          "signature": "MinimumACL",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "MinimumACL",
          "package": "posix-acl",
          "partial": "Minimum ACL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:MinimumACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "Permset",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#Permset",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "Permset",
          "package": "posix-acl",
          "partial": "Permset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:Permset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the default ACL from a directory.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "deleteDefaultACL",
          "package": "posix-acl",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Posix-ACL-Internals.html#deleteDefaultACL",
          "type": "function"
        },
        "index": {
          "description": "Delete the default ACL from directory",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "deleteDefaultACL",
          "normalized": "FilePath-\u003eIO()",
          "package": "posix-acl",
          "partial": "Default ACL",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:deleteDefaultACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo permission.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "emptyPermset",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#emptyPermset",
          "type": "function"
        },
        "index": {
          "description": "No permission",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "emptyPermset",
          "package": "posix-acl",
          "partial": "Permset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:emptyPermset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the ACL from a file, given its file descriptor.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "fdGetACL",
          "package": "posix-acl",
          "signature": "Fd -\u003e IO ACL",
          "source": "src/System-Posix-ACL.html#fdGetACL",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the ACL from file given its file descriptor",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "fdGetACL",
          "normalized": "Fd-\u003eIO ACL",
          "package": "posix-acl",
          "partial": "Get ACL",
          "signature": "Fd-\u003eIO ACL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:fdGetACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the ACL for a file, given its file descriptor.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "fdSetACL",
          "package": "posix-acl",
          "signature": "Fd -\u003e ACL -\u003e IO ()",
          "source": "src/System-Posix-ACL.html#fdSetACL",
          "type": "function"
        },
        "index": {
          "description": "Set the ACL for file given its file descriptor",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "fdSetACL",
          "normalized": "Fd-\u003eACL-\u003eIO()",
          "package": "posix-acl",
          "partial": "Set ACL",
          "signature": "Fd-\u003eACL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:fdSetACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead, write and execute permissions.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "fullPermset",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#fullPermset",
          "type": "function"
        },
        "index": {
          "description": "Read write and execute permissions",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "fullPermset",
          "package": "posix-acl",
          "partial": "Permset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:fullPermset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the ACL from a file.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "getACL",
          "package": "posix-acl",
          "signature": "FilePath -\u003e IO ACL",
          "source": "src/System-Posix-ACL.html#getACL",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the ACL from file",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "getACL",
          "normalized": "FilePath-\u003eIO ACL",
          "package": "posix-acl",
          "partial": "ACL",
          "signature": "FilePath-\u003eIO ACL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:getACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the default ACL from a directory.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "getDefaultACL",
          "package": "posix-acl",
          "signature": "FilePath -\u003e IO ACL",
          "source": "src/System-Posix-ACL.html#getDefaultACL",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the default ACL from directory",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "getDefaultACL",
          "normalized": "FilePath-\u003eIO ACL",
          "package": "posix-acl",
          "partial": "Default ACL",
          "signature": "FilePath-\u003eIO ACL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:getDefaultACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "groupsPerms",
          "package": "posix-acl",
          "signature": "Map GroupID Permset",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "groupsPerms",
          "package": "posix-acl",
          "partial": "Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:groupsPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "hasExecute",
          "package": "posix-acl",
          "signature": "Bool",
          "source": "src/System-Posix-ACL.html#Permset",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "hasExecute",
          "package": "posix-acl",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:hasExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "hasRead",
          "package": "posix-acl",
          "signature": "Bool",
          "source": "src/System-Posix-ACL.html#Permset",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "hasRead",
          "package": "posix-acl",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:hasRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "hasWrite",
          "package": "posix-acl",
          "signature": "Bool",
          "source": "src/System-Posix-ACL.html#Permset",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "hasWrite",
          "package": "posix-acl",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:hasWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a permission if both the arguments grant that permission.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "intersectPermsets",
          "package": "posix-acl",
          "signature": "Permset -\u003e Permset -\u003e Permset",
          "source": "src/System-Posix-ACL.html#intersectPermsets",
          "type": "function"
        },
        "index": {
          "description": "Give permission if both the arguments grant that permission",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "intersectPermsets",
          "normalized": "Permset-\u003ePermset-\u003ePermset",
          "package": "posix-acl",
          "partial": "Permsets",
          "signature": "Permset-\u003ePermset-\u003ePermset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:intersectPermsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an ACL to its \u003cem\u003eLong Text Form\u003c/em\u003e (see section 23.3.1 of\n IEEE Std 1003.1e).\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "longTextForm",
          "package": "posix-acl",
          "signature": "ACL -\u003e String",
          "source": "src/System-Posix-ACL.html#longTextForm",
          "type": "function"
        },
        "index": {
          "description": "Convert an ACL to its Long Text Form see section of IEEE Std",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "longTextForm",
          "normalized": "ACL-\u003eString",
          "package": "posix-acl",
          "partial": "Text Form",
          "signature": "ACL-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:longTextForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "mask",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "mask",
          "package": "posix-acl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "otherPerms",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "otherPerms",
          "package": "posix-acl",
          "partial": "Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:otherPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "ownerPerms",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "ownerPerms",
          "package": "posix-acl",
          "partial": "Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:ownerPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "owningGroupPerms",
          "package": "posix-acl",
          "signature": "Permset",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "owningGroupPerms",
          "package": "posix-acl",
          "partial": "Group Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:owningGroupPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the ACL for a file.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "setACL",
          "package": "posix-acl",
          "signature": "FilePath -\u003e ACL -\u003e IO ()",
          "source": "src/System-Posix-ACL.html#setACL",
          "type": "function"
        },
        "index": {
          "description": "Set the ACL for file",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "setACL",
          "normalized": "FilePath-\u003eACL-\u003eIO()",
          "package": "posix-acl",
          "partial": "ACL",
          "signature": "FilePath-\u003eACL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:setACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the default ACL for a directory.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "setDefaultACL",
          "package": "posix-acl",
          "signature": "FilePath -\u003e ACL -\u003e IO ()",
          "source": "src/System-Posix-ACL.html#setDefaultACL",
          "type": "function"
        },
        "index": {
          "description": "Set the default ACL for directory",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "setDefaultACL",
          "normalized": "FilePath-\u003eACL-\u003eIO()",
          "package": "posix-acl",
          "partial": "Default ACL",
          "signature": "FilePath-\u003eACL-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:setDefaultACL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an ACL to its \u003cem\u003eShort Text Form\u003c/em\u003e (see section 23.3.2 of\n IEEE Std 1003.1e).\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "shortTextFrom",
          "package": "posix-acl",
          "signature": "ACL -\u003e String",
          "source": "src/System-Posix-ACL.html#shortTextFrom",
          "type": "function"
        },
        "index": {
          "description": "Convert an ACL to its Short Text Form see section of IEEE Std",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "shortTextFrom",
          "normalized": "ACL-\u003eString",
          "package": "posix-acl",
          "partial": "Text From",
          "signature": "ACL-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:shortTextFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a permission if any of the two arguments grant that permission.\n\u003c/p\u003e",
          "module": "System.Posix.ACL",
          "name": "unionPermsets",
          "package": "posix-acl",
          "signature": "Permset -\u003e Permset -\u003e Permset",
          "source": "src/System-Posix-ACL.html#unionPermsets",
          "type": "function"
        },
        "index": {
          "description": "Give permission if any of the two arguments grant that permission",
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "unionPermsets",
          "normalized": "Permset-\u003ePermset-\u003ePermset",
          "package": "posix-acl",
          "partial": "Permsets",
          "signature": "Permset-\u003ePermset-\u003ePermset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:unionPermsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ACL",
          "name": "usersPerms",
          "package": "posix-acl",
          "signature": "Map UserID Permset",
          "source": "src/System-Posix-ACL.html#ACL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ACL",
          "module": "System.Posix.ACL",
          "name": "usersPerms",
          "package": "posix-acl",
          "partial": "Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-acl/docs/System-Posix-ACL.html#v:usersPerms"
      }
    }
  ]
]