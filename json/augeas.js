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
        "word": "augeas"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides FFI bindings for the Augeas API (\u003ca\u003ehttp://augeas.net/docs/api.html\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote aug_close is not surfaced in the API because because the ForeignPtr returned by\u003c/em\u003e\n  \u003cem\u003eaug_init uses aug_close as its finializer.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Augeas",
          "name": "Augeas",
          "package": "augeas",
          "source": "src/System-Augeas.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides FFI bindings for the Augeas API http augeas.net docs api.html Note aug close is not surfaced in the API because because the ForeignPtr returned by aug init uses aug close as its finializer",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "Augeas",
          "package": "augeas",
          "partial": "Augeas",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible BEFORE values fro the aug_insert function\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "AugBefore",
          "package": "augeas",
          "source": "src/System-Augeas.html#AugBefore",
          "type": "newtype"
        },
        "index": {
          "description": "The possible BEFORE values fro the aug insert function",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugBefore",
          "package": "augeas",
          "partial": "Aug Before",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#t:AugBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "AugErrCode",
          "package": "augeas",
          "source": "src/System-AugeasHsc.html#AugErrCode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugErrCode",
          "package": "augeas",
          "partial": "Aug Err Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#t:AugErrCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "AugFlag",
          "package": "augeas",
          "source": "src/System-AugeasHsc.html#AugFlag",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugFlag",
          "package": "augeas",
          "partial": "Aug Flag",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#t:AugFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible \u003ccode\u003e\u003ca\u003eaug_get\u003c/a\u003e\u003c/code\u003e return values.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "AugMatch",
          "package": "augeas",
          "source": "src/System-Augeas.html#AugMatch",
          "type": "data"
        },
        "index": {
          "description": "The possible aug get return values",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugMatch",
          "package": "augeas",
          "partial": "Aug Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#t:AugMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible return values for the \u003ccode\u003e\u003ca\u003eaug_set\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaug_insert\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaug_mv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaug_save\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eaug_print\u003c/a\u003e\u003c/code\u003e functions\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "AugRet",
          "package": "augeas",
          "source": "src/System-Augeas.html#AugRet",
          "type": "newtype"
        },
        "index": {
          "description": "The possible return values for the aug set aug insert aug mv aug save and aug print functions",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugRet",
          "package": "augeas",
          "partial": "Aug Ret",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#t:AugRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to the Augeas tree structure\n   Not using a typed pointer (as per RWH p416) because of the compiler warning\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "Augeas",
          "package": "augeas",
          "source": "src/System-Augeas.html#Augeas",
          "type": "type"
        },
        "index": {
          "description": "pointer to the Augeas tree structure Not using typed pointer as per RWH p416 because of the compiler warning",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "Augeas",
          "package": "augeas",
          "partial": "Augeas",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#t:Augeas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "AugBefore",
          "package": "augeas",
          "signature": "AugBefore CInt",
          "source": "src/System-Augeas.html#AugBefore",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugBefore",
          "package": "augeas",
          "partial": "Aug Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:AugBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "AugErrCode",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#AugErrCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugErrCode",
          "package": "augeas",
          "partial": "Aug Err Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:AugErrCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "AugFlag",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#AugFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugFlag",
          "package": "augeas",
          "partial": "Aug Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:AugFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "AugRet",
          "package": "augeas",
          "signature": "AugRet CInt",
          "source": "src/System-Augeas.html#AugRet",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "AugRet",
          "package": "augeas",
          "partial": "Aug Ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:AugRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction: aug_defnode\n\u003c/p\u003e\u003cp\u003eDefine a variable NAME whose value is the result of evaluating EXPR,\n which must be non-NULL and evaluate to a nodeset. If a variable NAME\n already exists, its name will be replaced with the result of evaluating\n EXPR.\n\u003c/p\u003e\u003cp\u003eIf EXPR evaluates to an empty nodeset, a node is created, equivalent to\n calling AUG_SET(AUG, EXPR, VALUE) and NAME will be the nodeset containing\n that single node.\n\u003c/p\u003e\u003cp\u003eIf CREATED is non-NULL, it is set to 1 if a node was created, and 0 if\n it already existed.\n\u003c/p\u003e\u003cp\u003eReturns -1 on error; on success, returns the number of nodes in the\n nodeset \n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_defnode",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e ByteString-\u003e ByteString-\u003e IO (AugRet, Maybe Bool)",
          "type": "function"
        },
        "index": {
          "description": "Function aug defnode Define variable NAME whose value is the result of evaluating EXPR which must be non-NULL and evaluate to nodeset If variable NAME already exists its name will be replaced with the result of evaluating EXPR If EXPR evaluates to an empty nodeset node is created equivalent to calling AUG SET AUG EXPR VALUE and NAME will be the nodeset containing that single node If CREATED is non-NULL it is set to if node was created and if it already existed Returns on error on success returns the number of nodes in the nodeset",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_defnode",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eByteString-\u003eIO(AugRet,Maybe Bool)",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eByteString-\u003eIO(AugRet,Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_defnode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction: aug_defvar\n\u003c/p\u003e\u003cp\u003eDefine a variable NAME whose value is the result of evaluating EXPR. If\n   a variable NAME already exists, its name will be replaced with the\n   result of evaluating EXPR.  Context will not be applied to EXPR.\n\u003c/p\u003e\u003cp\u003eIf (Maybe EXPR) is Nothing, the variable NAME will be removed if it is defined.\n\u003c/p\u003e\u003cp\u003ePath variables can be used in path expressions later on by prefixing\n   them with \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns -1 on error; on success, returns 0 if EXPR evaluates to anything\n   other than a nodeset, and the number of nodes if EXPR evaluates to a\n   nodeset\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_defvar",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e Maybe ByteString-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Function aug defvar Define variable NAME whose value is the result of evaluating EXPR If variable NAME already exists its name will be replaced with the result of evaluating EXPR Context will not be applied to EXPR If Maybe EXPR is Nothing the variable NAME will be removed if it is defined Path variables can be used in path expressions later on by prefixing them with Returns on error on success returns if EXPR evaluates to anything other than nodeset and the number of nodes if EXPR evaluates to nodeset",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_defvar",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eMaybe ByteString-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eMaybe ByteString-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_defvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a human-readable message for the error code */\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_error",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e IO AugErrCode",
          "type": "function"
        },
        "index": {
          "description": "Return human-readable message for the error code",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_error",
          "normalized": "Ptr Augeas-\u003eIO AugErrCode",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eIO AugErrCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn details about the error, which might be NULL. For example, for\n AUG_EPATHX, indicates where in the path expression the error\n occurred. The returned value can only be used until the next API call\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_error_details",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Return details about the error which might be NULL For example for AUG EPATHX indicates where in the path expression the error occurred The returned value can only be used until the next API call",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_error_details",
          "normalized": "Ptr Augeas-\u003eIO ByteString",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_error_details"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a human-readable message for the error code */\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_error_message",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Return human-readable message for the error code",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_error_message",
          "normalized": "Ptr Augeas-\u003eIO ByteString",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_error_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a human-readable message elaborating the error code; might be\n NULL. For example, when the error code is AUG_EPATHX, this will explain\n how the path expression is invalid */\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_error_minor_message",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Return human-readable message elaborating the error code might be NULL For example when the error code is AUG EPATHX this will explain how the path expression is invalid",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_error_minor_message",
          "normalized": "Ptr Augeas-\u003eIO ByteString",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_error_minor_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value associated with PATH. VALUE can be NULL, in which case\n  it is ignored. If VALUE is not NULL, it is used to return a pointer to\n  the value associated with PATH if PATH matches exactly one node. If PATH\n  matches no nodes or more than one node, *VALUE is set to NULL. Note that\n  it is perfectly legal for nodes to have a NULL value, and that that by \n  itself does not indicate an error.\n\u003c/p\u003e\u003cp\u003eReturn AugMatch.exactly_one if there is exactly one node matching PATH, AugMatch.no_match if there is none,\n  and AugMatch.invalid_match if there is more than one node matching PATH, or if\n  PATH is not a legal path expression.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_get",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e IO (Either AugMatch (Maybe String))",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value associated with PATH VALUE can be NULL in which case it is ignored If VALUE is not NULL it is used to return pointer to the value associated with PATH if PATH matches exactly one node If PATH matches no nodes or more than one node VALUE is set to NULL Note that it is perfectly legal for nodes to have NULL value and that that by itself does not indicate an error Return AugMatch.exactly one if there is exactly one node matching PATH AugMatch.no match if there is none and AugMatch.invalid match if there is more than one node matching PATH or if PATH is not legal path expression",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_get",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eIO(Either AugMatch(Maybe String))",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eIO(Either AugMatch(Maybe String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the library.\n\u003c/p\u003e\u003cp\u003eUse ROOT as the filesystem root. If ROOT is NULL, use the value of the\n environment variable AUGEAS_ROOT. If that doesn't exist either, use \"/\".\n\u003c/p\u003e\u003cp\u003eLOADPATH is a colon-spearated list of directories that modules should be\n searched in. This is in addition to the standard load path and the\n directories in AUGEAS_LENS_LIB\n\u003c/p\u003e\u003cp\u003eFLAGS is a list of AugFlags\n\u003c/p\u003e\u003cp\u003eReturn a ForeignPtr to the Augeas tree upon success. If initialization\n fails, returns Nothing.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote that the ForeignPtr returned by the function is using aug_close  as a finializer,\u003c/em\u003e\n \u003cem\u003eso aug_close is called automatically when the Augeas pointer goes out of scope.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTherefore, there is no need to surface aug_close in the library.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_init",
          "package": "augeas",
          "signature": "ByteString-\u003e ByteString-\u003e [AugFlag]-\u003e IO (Maybe (ForeignPtr Augeas))",
          "type": "function"
        },
        "index": {
          "description": "Initialize the library Use ROOT as the filesystem root If ROOT is NULL use the value of the environment variable AUGEAS ROOT If that doesn exist either use LOADPATH is colon-spearated list of directories that modules should be searched in This is in addition to the standard load path and the directories in AUGEAS LENS LIB FLAGS is list of AugFlags Return ForeignPtr to the Augeas tree upon success If initialization fails returns Nothing Note that the ForeignPtr returned by the function is using aug close as finializer so aug close is called automatically when the Augeas pointer goes out of scope Therefore there is no need to surface aug close in the library",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_init",
          "normalized": "ByteString-\u003eByteString-\u003e[AugFlag]-\u003eIO(Maybe(ForeignPtr Augeas))",
          "package": "augeas",
          "signature": "ByteString-\u003eByteString-\u003e[AugFlag]-\u003eIO(Maybe(ForeignPtr Augeas))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new sibling LABEL for PATH by inserting into the tree just\n before PATH if BEFORE == just_before or just after PATH if BEFORE == just_after.\n\u003c/p\u003e\u003cp\u003ePATH must match exactly one existing node in the tree, and LABEL must be\n a label, i.e. not contain a \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e or end with a bracketed index\n '[N]'.\n\u003c/p\u003e\u003cp\u003eReturn AugRet.success on success, and AugRet.error if the insertion fails.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_insert",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e ByteString-\u003e AugBefore-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Create new sibling LABEL for PATH by inserting into the tree just before PATH if BEFORE just before or just after PATH if BEFORE just after PATH must match exactly one existing node in the tree and LABEL must be label i.e not contain or end with bracketed index Return AugRet.success on success and AugRet.error if the insertion fails",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_insert",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eAugBefore-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eAugBefore-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction: aug_load\n\u003c/p\u003e\u003cp\u003eLoad files into the tree. Which files to load and what lenses to use on\n them is specified under \u003cem\u003eaugeas\u003c/em\u003eload in the tree; each entry\n \u003cem\u003eaugeas\u003c/em\u003eload/NAME specifies a \u003ccode\u003etransform\u003c/code\u003e, by having itself exactly one\n child \u003ccode\u003elens\u003c/code\u003e and any number of children labelled \u003ccode\u003eincl\u003c/code\u003e and \u003ccode\u003eexcl\u003c/code\u003e. The\n value of NAME has no meaning.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003elens\u003c/code\u003e grandchild of \u003cem\u003eaugeas\u003c/em\u003eload specifies which lens to use, and\n can either be the fully qualified name of a lens \u003ccode\u003e\u003ca\u003elens\u003c/a\u003e\u003c/code\u003e or\n '@Module'. The latter form means that the lens from the transform marked\n for autoloading in MODULE should be used.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eincl\u003c/code\u003e and \u003ccode\u003eexcl\u003c/code\u003e grandchildren of \u003cem\u003eaugeas\u003c/em\u003eload indicate which files\n to transform. Their value are used as glob patterns. Any file that\n matches at least one \u003ccode\u003eincl\u003c/code\u003e pattern and no \u003ccode\u003eexcl\u003c/code\u003e pattern is\n transformed. The order of \u003ccode\u003eincl\u003c/code\u003e and \u003ccode\u003eexcl\u003c/code\u003e entries is irrelevant.\n\u003c/p\u003e\u003cp\u003eWhen AUG_INIT is first called, it populates \u003cem\u003eaugeas\u003c/em\u003eload with the\n transforms marked for autoloading in all the modules it finds.\n\u003c/p\u003e\u003cp\u003eBefore loading any files, AUG_LOAD will remove everything underneath\n \u003cem\u003eaugeas\u003c/em\u003efiles and /files, regardless of whether any entries have been\n modified or not.\n\u003c/p\u003e\u003cp\u003eReturns -1 on error, 0 on success. Note that success includes the case\n where some files could not be loaded. Details of such files can be found\n as '/augeas//error'.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_load",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Function aug load Load files into the tree Which files to load and what lenses to use on them is specified under augeas load in the tree each entry augeas load NAME specifies transform by having itself exactly one child lens and any number of children labelled incl and excl The value of NAME has no meaning The lens grandchild of augeas load specifies which lens to use and can either be the fully qualified name of lens lens or Module The latter form means that the lens from the transform marked for autoloading in MODULE should be used The incl and excl grandchildren of augeas load indicate which files to transform Their value are used as glob patterns Any file that matches at least one incl pattern and no excl pattern is transformed The order of incl and excl entries is irrelevant When AUG INIT is first called it populates augeas load with the transforms marked for autoloading in all the modules it finds Before loading any files AUG LOAD will remove everything underneath augeas files and files regardless of whether any entries have been modified or not Returns on error on success Note that success includes the case where some files could not be loaded Details of such files can be found as augeas error",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_load",
          "normalized": "Ptr Augeas-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of matches of the path expression PATH in AUG. If\n MATCHES is non-NULL, an array with the returned number of elements will\n be allocated and filled with the paths of the matches. The caller must\n free both the array and the entries in it. The returned paths are\n sufficiently qualified to make sure that they match exactly one node in\n the current tree.\n\u003c/p\u003e\u003cp\u003eIf MATCHES is NULL, nothing is allocated and only the number\n of matches is returned.\n\u003c/p\u003e\u003cp\u003eReturns -1 on error, or the total number of matches (which might be 0).\n\u003c/p\u003e\u003cp\u003ePath expressions use a very simple subset of XPath: the path PATH\n consists of a number of segments, separated by \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e; each segment can\n either be a \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e, matching any tree node, or a string, optionally\n followed by an index in brackets, matching tree nodes labelled with\n exactly that string. If no index is specified, the expression matches\n all nodes with that label; the index can be a positive number N, which\n matches exactly the Nth node with that label (counting from 1), or the\n special expression 'last()' which matches the last node with the given\n label. All matches are done in fixed positions in the tree, and nothing\n matches more than one path segment.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_match",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e IO (Int, Maybe [String])",
          "type": "function"
        },
        "index": {
          "description": "Return the number of matches of the path expression PATH in AUG If MATCHES is non-NULL an array with the returned number of elements will be allocated and filled with the paths of the matches The caller must free both the array and the entries in it The returned paths are sufficiently qualified to make sure that they match exactly one node in the current tree If MATCHES is NULL nothing is allocated and only the number of matches is returned Returns on error or the total number of matches which might be Path expressions use very simple subset of XPath the path PATH consists of number of segments separated by each segment can either be matching any tree node or string optionally followed by an index in brackets matching tree nodes labelled with exactly that string If no index is specified the expression matches all nodes with that label the index can be positive number which matches exactly the Nth node with that label counting from or the special expression last which matches the last node with the given label All matches are done in fixed positions in the tree and nothing matches more than one path segment",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_match",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eIO(Int,Maybe[String])",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eIO(Int,Maybe[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the node SRC to DST. SRC must match exactly one node in the\n tree. DST must either match exactly one node in the tree, or may not\n exist yet. If DST exists already, it and all its descendants are\n deleted. If DST does not exist yet, it and all its missing ancestors are\n created.\n\u003c/p\u003e\u003cp\u003eNote that the node SRC always becomes the node DST: when you move /a/b\n to /x, the node /a/b is now called /x, no matter whether /x existed\n initially or not.\n\u003c/p\u003e\u003cp\u003eReturn AugRet.success on success and AugRet.error on failure.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_mv",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e ByteString-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Move the node SRC to DST SRC must match exactly one node in the tree DST must either match exactly one node in the tree or may not exist yet If DST exists already it and all its descendants are deleted If DST does not exist yet it and all its missing ancestors are created Note that the node SRC always becomes the node DST when you move to the node is now called no matter whether existed initially or not Return AugRet.success on success and AugRet.error on failure",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_mv",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint each node matching PATH and its descendants to OUT.\n Return AugRet.success on success, or AugRet.error on failure\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_print",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e Handle-\u003e ByteString-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Print each node matching PATH and its descendants to OUT Return AugRet.success on success or AugRet.error on failure",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_print",
          "normalized": "Ptr Augeas-\u003eHandle-\u003eByteString-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eHandle-\u003eByteString-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove path and all its children. Returns the number of entries removed.\n All nodes that match PATH, and their descendants, are removed.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_rm",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "description": "Remove path and all its children Returns the number of entries removed All nodes that match PATH and their descendants are removed",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_rm",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eIO CInt",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite all pending changes to disk. \n\u003c/p\u003e\u003cp\u003eReturn AugRet.error if an error is encountered, AugRet.success on success. \n Only files that had any changes made to them are written.\n\u003c/p\u003e\u003cp\u003eIf AUG_SAVE_NEWFILE is set in the FLAGS passed to AUG_INIT, create\n changed files as new files with the extension \u003ca\u003e.augnew\u003c/a\u003e, and leave the\n original file unmodified.\n\u003c/p\u003e\u003cp\u003eOtherwise, if AUG_SAVE_BACKUP is set in the FLAGS passed to AUG_INIT,\n move the original file to a new file with extension \u003ca\u003e.augsave\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf neither of these flags is set, overwrite the original file.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_save",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Write all pending changes to disk Return AugRet.error if an error is encountered AugRet.success on success Only files that had any changes made to them are written If AUG SAVE NEWFILE is set in the FLAGS passed to AUG INIT create changed files as new files with the extension augnew and leave the original file unmodified Otherwise if AUG SAVE BACKUP is set in the FLAGS passed to AUG INIT move the original file to new file with extension augsave If neither of these flags is set overwrite the original file",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_save",
          "normalized": "Ptr Augeas-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value associated with PATH to VALUE. VALUE is copied into the\n internal data structure. Intermediate entries are created if they don't\n exist. \n\u003c/p\u003e\u003cp\u003eReturn AugRet.success on success, AugRet.error on error. It is an error if more than one\n node matches PATH.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_set",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e ByteString-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Set the value associated with PATH to VALUE VALUE is copied into the internal data structure Intermediate entries are created if they don exist Return AugRet.success on success AugRet.error on error It is an error if more than one node matches PATH",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_set",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eByteString-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of multiple nodes in one operation. Find or create a node\n matching SUB by interpreting SUB as a path expression relative to each\n node matching BASE. SUB may be NULL, in which case all the nodes\n matching BASE will be modified.\n\u003c/p\u003e\u003cp\u003eReturns:\n number of modified nodes on success, -1 on error\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_setm",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e Maybe ByteString-\u003e ByteString-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Set the value of multiple nodes in one operation Find or create node matching SUB by interpreting SUB as path expression relative to each node matching BASE SUB may be NULL in which case all the nodes matching BASE will be modified Returns number of modified nodes on success on error",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_setm",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eMaybe ByteString-\u003eByteString-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eMaybe ByteString-\u003eByteString-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_setm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction: aug_span\n\u003c/p\u003e\u003cp\u003eGet the span according to input file of the node associated with PATH. If\n the node is associated with a file, the filename, label and value start and\n end positions are set, and return value is 0. The caller is responsible for\n freeing returned filename. If an argument for return value is NULL, then the\n corresponding value is not set. If the node associated with PATH doesn't\n belong to a file or is doesn't exists, filename and span are not set and\n return value is Nothing.\n\u003c/p\u003e\u003cp\u003eReturns:\n    on success Just (filename, label_start, label_stop, value_start, value_end, start_span, end_span)\n    on error Nothing\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_span",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e ByteString-\u003e IO (Maybe (String, CInt, CInt, CInt, CInt, CInt, CInt))",
          "type": "function"
        },
        "index": {
          "description": "Function aug span Get the span according to input file of the node associated with PATH If the node is associated with file the filename label and value start and end positions are set and return value is The caller is responsible for freeing returned filename If an argument for return value is NULL then the corresponding value is not set If the node associated with PATH doesn belong to file or is doesn exists filename and span are not set and return value is Nothing Returns on success Just filename label start label stop value start value end start span end span on error Nothing",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_span",
          "normalized": "Ptr Augeas-\u003eByteString-\u003eIO(Maybe(String,CInt,CInt,CInt,CInt,CInt,CInt))",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eByteString-\u003eIO(Maybe(String,CInt,CInt,CInt,CInt,CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction: aug_srun\n\u003c/p\u003e\u003cp\u003eRun one or more newline-separated commands. The output of the commands\n  will be printed to OUT. Running just \u003ccode\u003ehelp\u003c/code\u003e will print what commands are\n  available. Commands accepted by this are identical to what augtool\n  accepts.\n\u003c/p\u003e\u003cp\u003eReturns:\n  the number of executed commands on success, -1 on failure, and -2 if a\n  \u003ccode\u003equit\u003c/code\u003e command was encountered\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "aug_srun",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003e Handle-\u003e ByteString-\u003e IO AugRet",
          "type": "function"
        },
        "index": {
          "description": "Function aug srun Run one or more newline-separated commands The output of the commands will be printed to OUT Running just help will print what commands are available Commands accepted by this are identical to what augtool accepts Returns the number of executed commands on success on failure and if quit command was encountered",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "aug_srun",
          "normalized": "Ptr Augeas-\u003eHandle-\u003eByteString-\u003eIO AugRet",
          "package": "augeas",
          "signature": "Ptr Augeas-\u003eHandle-\u003eByteString-\u003eIO AugRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:aug_srun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "enable_span",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#enable_span",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "enable_span",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:enable_span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_bad_path",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_bad_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_bad_path",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_bad_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_cmd_run",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_cmd_run",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_cmd_run",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_cmd_run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_internal",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_internal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_internal",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_multi_matches",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_multi_matches",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_multi_matches",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_multi_matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_multi_xfm",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_multi_xfm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_multi_xfm",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_multi_xfm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_mv_desc",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_mv_desc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_mv_desc",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_mv_desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_no_lens",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_no_lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_no_lens",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_no_lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_no_match",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_no_match",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_no_match",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_no_match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_no_memory",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_no_memory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_no_memory",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_no_memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_no_span",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_no_span",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_no_span",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_no_span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "err_syntax",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#err_syntax",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "err_syntax",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:err_syntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function failed\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "error",
          "package": "augeas",
          "signature": "AugRet",
          "source": "src/System-Augeas.html#error",
          "type": "function"
        },
        "index": {
          "description": "The function failed",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "error",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly one match was found.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "exactly_one",
          "package": "augeas",
          "signature": "AugMatch",
          "source": "src/System-Augeas.html#exactly_one",
          "type": "function"
        },
        "index": {
          "description": "Exactly one match was found",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "exactly_one",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:exactly_one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither an invalid paths, or multiple matches were found.\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "invalid_match",
          "package": "augeas",
          "signature": "AugMatch",
          "source": "src/System-Augeas.html#invalid_match",
          "type": "function"
        },
        "index": {
          "description": "Either an invalid paths or multiple matches were found",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "invalid_match",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:invalid_match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the LABEL just after the PATH\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "just_after",
          "package": "augeas",
          "signature": "AugBefore",
          "source": "src/System-Augeas.html#just_after",
          "type": "function"
        },
        "index": {
          "description": "Insert the LABEL just after the PATH",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "just_after",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:just_after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the LABEL just before the PATH\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "just_before",
          "package": "augeas",
          "signature": "AugBefore",
          "source": "src/System-Augeas.html#just_before",
          "type": "function"
        },
        "index": {
          "description": "Insert the LABEL just before the PATH",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "just_before",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:just_before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "no_error",
          "package": "augeas",
          "signature": "AugErrCode",
          "source": "src/System-AugeasHsc.html#no_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "no_error",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:no_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "no_load",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#no_load",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "no_load",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:no_load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo matches were found\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "no_match",
          "package": "augeas",
          "signature": "AugMatch",
          "source": "src/System-Augeas.html#no_match",
          "type": "function"
        },
        "index": {
          "description": "No matches were found",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "no_match",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:no_match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "no_modl_autoload",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#no_modl_autoload",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "no_modl_autoload",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:no_modl_autoload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "no_stdinc",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#no_stdinc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "no_stdinc",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:no_stdinc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "none",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#none",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "none",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "one",
          "package": "augeas",
          "signature": "AugRet",
          "source": "src/System-Augeas.html#one",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "one",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "save_backup",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#save_backup",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "save_backup",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:save_backup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "save_newfile",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#save_newfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "save_newfile",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:save_newfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "save_noop",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#save_noop",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "save_noop",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:save_noop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function worked as expected\n\u003c/p\u003e",
          "module": "System.Augeas",
          "name": "success",
          "package": "augeas",
          "signature": "AugRet",
          "source": "src/System-Augeas.html#success",
          "type": "function"
        },
        "index": {
          "description": "The function worked as expected",
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "success",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "type_check",
          "package": "augeas",
          "signature": "AugFlag",
          "source": "src/System-AugeasHsc.html#type_check",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "type_check",
          "package": "augeas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:type_check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "unAugErrCode",
          "package": "augeas",
          "signature": "CInt",
          "source": "src/System-AugeasHsc.html#AugErrCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "unAugErrCode",
          "package": "augeas",
          "partial": "Aug Err Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:unAugErrCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Augeas",
          "name": "unAugFlag",
          "package": "augeas",
          "signature": "CInt",
          "source": "src/System-AugeasHsc.html#AugFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Augeas",
          "module": "System.Augeas",
          "name": "unAugFlag",
          "package": "augeas",
          "partial": "Aug Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/augeas/docs/System-Augeas.html#v:unAugFlag"
      }
    }
  ]
]