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
        "word": "canonical-filepath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract data type for canonical file paths.\n\u003c/p\u003e\u003cp\u003eDue to the context sensitive way in which file paths are specified\n on today's computer systems it is useful to have the notion of a\n \u003cem\u003ecanonical\u003c/em\u003e \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe basic feature is that two canonical file paths \u003ccode\u003ecfp1\u003c/code\u003e and\n \u003ccode\u003ecfp2\u003c/code\u003e refer to the same file if and only if \u003ccode\u003ecfp1 == cfp2\u003c/code\u003e.\n This property can be achieved using \u003ccode\u003e\u003ca\u003ecanonicalizePath\u003c/a\u003e\u003c/code\u003e.\n However, if given an arbitrary \u003ccode\u003eFilePath\u003c/code\u003e we don't know whether\n it is canonical so having a separate type is useful.  Secondly,\n \u003ccode\u003ecanonicalizePath\u003c/code\u003e might fail if the target path does not exist\n on the system.\n\u003c/p\u003e\u003cp\u003eThis module therefore provides an abstract type that represents\n paths that have been canonicalised.  The intended use\n straightforward, just use \u003ccode\u003e\u003ca\u003ecanonical\u003c/a\u003e\u003c/code\u003e to create a\n \u003ccode\u003e\u003ca\u003eCanonicalFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eexample = do \n  cfp1 \u003c- \u003ccode\u003e\u003ca\u003ecanonical\u003c/a\u003e\u003c/code\u003e \"./foo\"\n  curr \u003c- getCurrentDirectory\n  cfp2 \u003c- canonical (curr \u003c/\u003e \"foo\")\n  print (cfp1 == cfp2)  -- should print \"True\"\n\u003c/pre\u003e\u003cp\u003eTo extract a canonical \u003ccode\u003eFilePath\u003c/code\u003e use \u003ccode\u003e\u003ca\u003ecanonicalFilePath\u003c/a\u003e\u003c/code\u003e (don't\n use \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FilePath.Canonical",
          "name": "Canonical",
          "package": "canonical-filepath",
          "source": "src/System-FilePath-Canonical.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract data type for canonical file paths Due to the context sensitive way in which file paths are specified on today computer systems it is useful to have the notion of canonical FilePath The basic feature is that two canonical file paths cfp1 and cfp2 refer to the same file if and only if cfp1 cfp2 This property can be achieved using canonicalizePath However if given an arbitrary FilePath we don know whether it is canonical so having separate type is useful Secondly canonicalizePath might fail if the target path does not exist on the system This module therefore provides an abstract type that represents paths that have been canonicalised The intended use straightforward just use canonical to create CanonicalFilePath example do cfp1 canonical foo curr getCurrentDirectory cfp2 canonical curr foo print cfp1 cfp2 should print True To extract canonical FilePath use canonicalFilePath don use show",
          "hierarchy": "System FilePath Canonical",
          "module": "System.FilePath.Canonical",
          "name": "Canonical",
          "package": "canonical-filepath",
          "partial": "Canonical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/canonical-filepath/docs/System-FilePath-Canonical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA canonical \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConstruct values of this type using the \u003ccode\u003e\u003ca\u003ecanonical\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eNote that it is not always possible to guarantee a truly canonical\n path due to various file system features.  For more information see\n the documentation of \u003ccode\u003erealpath\u003c/code\u003e in your favourite man page.\n\u003c/p\u003e",
          "module": "System.FilePath.Canonical",
          "name": "CanonicalFilePath",
          "package": "canonical-filepath",
          "source": "src/System-FilePath-Canonical.html#CanonicalFilePath",
          "type": "data"
        },
        "index": {
          "description": "canonical FilePath Construct values of this type using the canonical function Note that it is not always possible to guarantee truly canonical path due to various file system features For more information see the documentation of realpath in your favourite man page",
          "hierarchy": "System FilePath Canonical",
          "module": "System.FilePath.Canonical",
          "name": "CanonicalFilePath",
          "package": "canonical-filepath",
          "partial": "Canonical File Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/canonical-filepath/docs/System-FilePath-Canonical.html#t:CanonicalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a canonical file path from the given path.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003ecanonicalizePath\u003c/a\u003e\u003c/code\u003e this operation works even if the file or\n its containing directory does not exist, but it may fail due to\n other reasons (e.g., permission errors).\n\u003c/p\u003e",
          "module": "System.FilePath.Canonical",
          "name": "canonical",
          "package": "canonical-filepath",
          "signature": "FilePath -\u003e IO CanonicalFilePath",
          "source": "src/System-FilePath-Canonical.html#canonical",
          "type": "function"
        },
        "index": {
          "description": "Construct canonical file path from the given path Unlike canonicalizePath this operation works even if the file or its containing directory does not exist but it may fail due to other reasons e.g permission errors",
          "hierarchy": "System FilePath Canonical",
          "module": "System.FilePath.Canonical",
          "name": "canonical",
          "normalized": "FilePath-\u003eIO CanonicalFilePath",
          "package": "canonical-filepath",
          "signature": "FilePath-\u003eIO CanonicalFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/canonical-filepath/docs/System-FilePath-Canonical.html#v:canonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe canonical path.\n\u003c/p\u003e",
          "module": "System.FilePath.Canonical",
          "name": "canonicalFilePath",
          "package": "canonical-filepath",
          "signature": "CanonicalFilePath -\u003e FilePath",
          "source": "src/System-FilePath-Canonical.html#canonicalFilePath",
          "type": "function"
        },
        "index": {
          "description": "The canonical path",
          "hierarchy": "System FilePath Canonical",
          "module": "System.FilePath.Canonical",
          "name": "canonicalFilePath",
          "normalized": "CanonicalFilePath-\u003eFilePath",
          "package": "canonical-filepath",
          "partial": "File Path",
          "signature": "CanonicalFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/canonical-filepath/docs/System-FilePath-Canonical.html#v:canonicalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe original input to \u003ccode\u003e\u003ca\u003ecanonical\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Canonical",
          "name": "originalFilePath",
          "package": "canonical-filepath",
          "signature": "CanonicalFilePath -\u003e FilePath",
          "source": "src/System-FilePath-Canonical.html#originalFilePath",
          "type": "function"
        },
        "index": {
          "description": "The original input to canonical",
          "hierarchy": "System FilePath Canonical",
          "module": "System.FilePath.Canonical",
          "name": "originalFilePath",
          "normalized": "CanonicalFilePath-\u003eFilePath",
          "package": "canonical-filepath",
          "partial": "File Path",
          "signature": "CanonicalFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/canonical-filepath/docs/System-FilePath-Canonical.html#v:originalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely constructs a \u003ccode\u003e\u003ca\u003eCanonicalFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is unsafe in the sense that it is up to the caller to guarantee\n that the second argument is indeed a canonical file path.\n\u003c/p\u003e\u003cp\u003eThis function is intended mainly to aid in writing custom\n serialisation instances.\n\u003c/p\u003e",
          "module": "System.FilePath.Canonical",
          "name": "unsafeCanonicalise",
          "package": "canonical-filepath",
          "signature": "FilePath-\u003e FilePath-\u003e CanonicalFilePath",
          "type": "function"
        },
        "index": {
          "description": "Unsafely constructs CanonicalFilePath It is unsafe in the sense that it is up to the caller to guarantee that the second argument is indeed canonical file path This function is intended mainly to aid in writing custom serialisation instances",
          "hierarchy": "System FilePath Canonical",
          "module": "System.FilePath.Canonical",
          "name": "unsafeCanonicalise",
          "normalized": "FilePath-\u003eFilePath-\u003eCanonicalFilePath",
          "package": "canonical-filepath",
          "partial": "Canonicalise",
          "signature": "FilePath-\u003eFilePath-\u003eCanonicalFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/canonical-filepath/docs/System-FilePath-Canonical.html#v:unsafeCanonicalise"
      }
    }
  ]
]