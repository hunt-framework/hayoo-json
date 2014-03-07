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
        "word": "superdoc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines Superdoc's parameters, as well as the Cabal\n user hooks that do Superdoc's \"real\" work. For an explanation of\n what that work is, see here: \u003ca\u003eDistribution.Superdoc\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFurther, this module exposes some low-level functions that are not\n exposed in \u003ca\u003eDistribution.Superdoc\u003c/a\u003e, but that may be useful for some\n specialized applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "Hooks",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines Superdoc parameters as well as the Cabal user hooks that do Superdoc real work For an explanation of what that work is see here Distribution.Superdoc Further this module exposes some low-level functions that are not exposed in Distribution.Superdoc but that may be useful for some specialized applications",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "Hooks",
          "package": "superdoc",
          "partial": "Hooks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parameter specifies what to do when the documentation links\n to an image that does not exist.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "ImageMissing",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
          "type": "data"
        },
        "index": {
          "description": "This parameter specifies what to do when the documentation links to an image that does not exist",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "ImageMissing",
          "package": "superdoc",
          "partial": "Image Missing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#t:ImageMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parameter specifies where to find image files that are\n linked to in the documentation.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "ImageSource",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
          "type": "data"
        },
        "index": {
          "description": "This parameter specifies where to find image files that are linked to in the documentation",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "ImageSource",
          "package": "superdoc",
          "partial": "Image Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#t:ImageSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure to hold Superdoc's parameters. Additional\n parameters may be added in the future, so to ensure forward\n compatibility, packages should always specify parameters by\n modifying \u003ccode\u003e\u003ca\u003edefaultSuperdocArgs\u003c/a\u003e\u003c/code\u003e, for example like this:\n\u003c/p\u003e\u003cpre\u003e let params = defaultSuperdocArgs { imageSource = ... }\n\u003c/pre\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "SuperdocArgs",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
          "type": "data"
        },
        "index": {
          "description": "data structure to hold Superdoc parameters Additional parameters may be added in the future so to ensure forward compatibility packages should always specify parameters by modifying defaultSuperdocArgs for example like this let params defaultSuperdocArgs imageSource",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "SuperdocArgs",
          "package": "superdoc",
          "partial": "Superdoc Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#t:SuperdocArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy image files from the specified source directory, which\n is relative to the package root. The default is \"\u003ccode\u003eimages\u003c/code\u003e\".\n Superdoc will copy the required images to their appropriate\n location within the generated HTML documentation. The image\n files should also be declared as \u003ccode\u003eextra-source-files\u003c/code\u003e in the\n \u003ccode\u003e.cabal\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "CopyFrom",
          "package": "superdoc",
          "signature": "CopyFrom FilePath",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:CopyFrom\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:CopyFrom\"]"
        },
        "index": {
          "description": "Copy image files from the specified source directory which is relative to the package root The default is images Superdoc will copy the required images to their appropriate location within the generated HTML documentation The image files should also be declared as extra-source-files in the cabal file",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "CopyFrom",
          "package": "superdoc",
          "partial": "Copy From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:CopyFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssume the images are already present in the directory where\n the Haddock documentation is being generated. This is useful if\n the images have been declared as \u003ccode\u003eextra-html-files\u003c/code\u003e in the\n \u003ccode\u003e.cabal\u003c/code\u003e file. They will then have been copied to their\n rightful location by Cabal. Superdoc will check that the\n required images are present.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "ExtraHtmlFiles",
          "package": "superdoc",
          "signature": "ExtraHtmlFiles",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:ExtraHtmlFiles\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:ExtraHtmlFiles\"]"
        },
        "index": {
          "description": "Assume the images are already present in the directory where the Haddock documentation is being generated This is useful if the images have been declared as extra-html-files in the cabal file They will then have been copied to their rightful location by Cabal Superdoc will check that the required images are present",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "ExtraHtmlFiles",
          "package": "superdoc",
          "partial": "Extra Html Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:ExtraHtmlFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the default setting. Cabal will fail with an error\n message if the documentation links to an image that does not\n exist or cannot be found.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "FailOnMissing",
          "package": "superdoc",
          "signature": "FailOnMissing",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:FailOnMissing\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:FailOnMissing\"]"
        },
        "index": {
          "description": "This is the default setting Cabal will fail with an error message if the documentation links to an image that does not exist or cannot be found",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "FailOnMissing",
          "package": "superdoc",
          "partial": "Fail On Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:FailOnMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore missing image files. Superdoc will still generate HTML\n image tags, but will not fail if a corresponding image file\n does not exist.  This setting may be useful for testing, or to\n build documentation when the image files are incomplete or\n missing.  It is not recommended to use this setting for\n production purposes.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "IgnoreMissing",
          "package": "superdoc",
          "signature": "IgnoreMissing",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:IgnoreMissing\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:IgnoreMissing\"]"
        },
        "index": {
          "description": "Ignore missing image files Superdoc will still generate HTML image tags but will not fail if corresponding image file does not exist This setting may be useful for testing or to build documentation when the image files are incomplete or missing It is not recommended to use this setting for production purposes",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "IgnoreMissing",
          "package": "superdoc",
          "partial": "Ignore Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:IgnoreMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "SuperdocArgs",
          "package": "superdoc",
          "signature": "SuperdocArgs",
          "source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:SuperdocArgs\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:SuperdocArgs\"]"
        },
        "index": {
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "SuperdocArgs",
          "package": "superdoc",
          "partial": "Superdoc Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:SuperdocArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBootstrapping mode. Required to generate Superdoc's own\n documentation, because at that point, Superdoc is typically not\n yet installed. Other packages using Superdoc should not set this\n flag.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "bootstrap",
          "package": "superdoc",
          "signature": "Bool",
          "source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:bootstrap\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:bootstrap\"]"
        },
        "index": {
          "description": "Bootstrapping mode Required to generate Superdoc own documentation because at that point Superdoc is typically not yet installed Other packages using Superdoc should not set this flag",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "bootstrap",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:bootstrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default Superdoc parameters.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "defaultSuperdocArgs",
          "package": "superdoc",
          "signature": "SuperdocArgs",
          "source": "src/Distribution-Superdoc-Hooks.html#defaultSuperdocArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:defaultSuperdocArgs\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:defaultSuperdocArgs\"]"
        },
        "index": {
          "description": "The default Superdoc parameters",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "defaultSuperdocArgs",
          "package": "superdoc",
          "partial": "Superdoc Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:defaultSuperdocArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo the actual work of the \u003ccode\u003e\u003ca\u003eposthaddock\u003c/a\u003e\u003c/code\u003e hook, given a path to the\n documentation directory.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "do_posthaddock",
          "package": "superdoc",
          "signature": "SuperdocArgs -\u003e FilePath -\u003e IO ()",
          "source": "src/Distribution-Superdoc-Hooks.html#do_posthaddock",
          "type": "function"
        },
        "index": {
          "description": "Do the actual work of the posthaddock hook given path to the documentation directory",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "do_posthaddock",
          "normalized": "SuperdocArgs-\u003eFilePath-\u003eIO()",
          "package": "superdoc",
          "signature": "SuperdocArgs-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:do_posthaddock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo the actual work of the \u003ccode\u003e\u003ca\u003eposthaddock\u003c/a\u003e\u003c/code\u003e hook, given a path to the\n documentation directory.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "do_posthscolour",
          "package": "superdoc",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Distribution-Superdoc-Hooks.html#do_posthscolour",
          "type": "function"
        },
        "index": {
          "description": "Do the actual work of the posthaddock hook given path to the documentation directory",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "do_posthscolour",
          "normalized": "FilePath-\u003eIO()",
          "package": "superdoc",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:do_posthscolour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook for Haddock. This simply adds a command line option to the\n subordinate Haddock process, instructing it to use the\n \u003ccode\u003esuperdoc-armor\u003c/code\u003e preprocessor. Its purpose is to replace\n UTF8-encoded Unicode characters by their ASCII armor.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "haddockhook",
          "package": "superdoc",
          "signature": "SuperdocArgs -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e UserHooks -\u003e HaddockFlags -\u003e IO ()",
          "source": "src/Distribution-Superdoc-Hooks.html#haddockhook",
          "type": "function"
        },
        "index": {
          "description": "hook for Haddock This simply adds command line option to the subordinate Haddock process instructing it to use the superdoc-armor preprocessor Its purpose is to replace UTF8-encoded Unicode characters by their ASCII armor",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "haddockhook",
          "normalized": "SuperdocArgs-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eUserHooks-\u003eHaddockFlags-\u003eIO()",
          "package": "superdoc",
          "signature": "SuperdocArgs-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eUserHooks-\u003eHaddockFlags-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:haddockhook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the action described by \u003ccode\u003e\u003ca\u003eImageSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eImageMissing\u003c/a\u003e\u003c/code\u003e,\n for the given set of images. The last argument is the path for the\n documentation directory.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "handle_images",
          "package": "superdoc",
          "signature": "ImageSource -\u003e ImageMissing -\u003e Set FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Distribution-Superdoc-Hooks.html#handle_images",
          "type": "function"
        },
        "index": {
          "description": "Perform the action described by ImageSource and ImageMissing for the given set of images The last argument is the path for the documentation directory",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "handle_images",
          "normalized": "ImageSource-\u003eImageMissing-\u003eSet FilePath-\u003eFilePath-\u003eIO()",
          "package": "superdoc",
          "signature": "ImageSource-\u003eImageMissing-\u003eSet FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:handle_images"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do about missing image files.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "imageMissing",
          "package": "superdoc",
          "signature": "ImageMissing",
          "source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:imageMissing\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:imageMissing\"]"
        },
        "index": {
          "description": "What to do about missing image files",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "imageMissing",
          "package": "superdoc",
          "partial": "Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:imageMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to look for image files.\n\u003c/p\u003e",
          "module": "[\"Distribution.Superdoc.Hooks\",\"Distribution.Superdoc\"]",
          "name": "imageSource",
          "package": "superdoc",
          "signature": "ImageSource",
          "source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:imageSource\",\"http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:imageSource\"]"
        },
        "index": {
          "description": "Where to look for image files",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "imageSource",
          "package": "superdoc",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:imageSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to run after Haddock completes. This resolves Superdoc\n markup and ASCII armor in all generated HTML files. It also copies\n all of the linked images to the HTML directory (depending on the\n \u003ccode\u003e\u003ca\u003eimageSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eimageMissing\u003c/a\u003e\u003c/code\u003e parameters). Finally, it checks\n for the \"\u003ccode\u003e--hyperlink-source\u003c/code\u003e\" option, and if necessary, calls\n the \u003ccode\u003e\u003ca\u003eposthscolour\u003c/a\u003e\u003c/code\u003e hook as well (because it is not run from inside\n Cabal in this situation).\n\u003c/p\u003e\u003cp\u003eThe first argument hold the Superdoc parameters, and the remaining\n arguments are as for any \u003ccode\u003e\u003ca\u003epostHaddock\u003c/a\u003e\u003c/code\u003e hook.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "posthaddock",
          "package": "superdoc",
          "signature": "SuperdocArgs -\u003e Args -\u003e HaddockFlags -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e IO ()",
          "source": "src/Distribution-Superdoc-Hooks.html#posthaddock",
          "type": "function"
        },
        "index": {
          "description": "hook to run after Haddock completes This resolves Superdoc markup and ASCII armor in all generated HTML files It also copies all of the linked images to the HTML directory depending on the imageSource and imageMissing parameters Finally it checks for the hyperlink-source option and if necessary calls the posthscolour hook as well because it is not run from inside Cabal in this situation The first argument hold the Superdoc parameters and the remaining arguments are as for any postHaddock hook",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "posthaddock",
          "normalized": "SuperdocArgs-\u003eArgs-\u003eHaddockFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "package": "superdoc",
          "signature": "SuperdocArgs-\u003eArgs-\u003eHaddockFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:posthaddock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to run after HsColour completes. This goes through the\n files generated by HsColour and replaces UTF8 characters by their\n corresponding HTML escapes.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Hooks",
          "name": "posthscolour",
          "package": "superdoc",
          "signature": "SuperdocArgs -\u003e Args -\u003e HscolourFlags -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e IO ()",
          "source": "src/Distribution-Superdoc-Hooks.html#posthscolour",
          "type": "function"
        },
        "index": {
          "description": "hook to run after HsColour completes This goes through the files generated by HsColour and replaces UTF8 characters by their corresponding HTML escapes",
          "hierarchy": "Distribution Superdoc Hooks",
          "module": "Distribution.Superdoc.Hooks",
          "name": "posthscolour",
          "normalized": "SuperdocArgs-\u003eArgs-\u003eHscolourFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "package": "superdoc",
          "signature": "SuperdocArgs-\u003eArgs-\u003eHscolourFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:posthscolour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides conversions between various different markup\n formats. In principle, it provides four different conversions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Converting the Superdoc markup language to HTML.\n\u003c/li\u003e\u003cli\u003e Converting ASCII-armored Unicode to HTML.\n\u003c/li\u003e\u003cli\u003e Converting Unicode streams to ASCII-armor.\n\u003c/li\u003e\u003cli\u003e Converting Unicode streams to HTML.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eConversions 1 and 2 are combined into a single parser for the\n Superdoc markup language, which is exposed by the function\n \u003ccode\u003e\u003ca\u003emarkup\u003c/a\u003e\u003c/code\u003e. This is used by the post-Haddock hook.\n\u003c/p\u003e\u003cp\u003eConversion 3 is provided by the \u003ccode\u003e\u003ca\u003eto_armor\u003c/a\u003e\u003c/code\u003e function. Within the\n Superdoc workflow, this is used by the \u003ccode\u003esuperdoc-armor\u003c/code\u003e\n preprocessor, which is in turns run by the Haddock hook. It makes\n sense to keep conversions 2 and 3 in a single module, because\n they jointly define the format for the ASCII armor.\n\u003c/p\u003e\u003cp\u003eConversion 4 is provided by the \u003ccode\u003e\u003ca\u003eto_html\u003c/a\u003e\u003c/code\u003e function. It is used by\n the post-HsColour hook.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "Markup",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Markup.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides conversions between various different markup formats In principle it provides four different conversions Converting the Superdoc markup language to HTML Converting ASCII-armored Unicode to HTML Converting Unicode streams to ASCII-armor Converting Unicode streams to HTML Conversions and are combined into single parser for the Superdoc markup language which is exposed by the function markup This is used by the post-Haddock hook Conversion is provided by the to armor function Within the Superdoc workflow this is used by the superdoc-armor preprocessor which is in turns run by the Haddock hook It makes sense to keep conversions and in single module because they jointly define the format for the ASCII armor Conversion is provided by the to html function It is used by the post-HsColour hook",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "Markup",
          "package": "superdoc",
          "partial": "Markup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filter is basically a function from strings to strings. Ideally\n a filter is lazy, so that the input string is consumed\n incrementally; however, this is not strictly necessary.  A filter\n may also return another result in addition to a string.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "Filter",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Markup.html#Filter",
          "type": "type"
        },
        "index": {
          "description": "filter is basically function from strings to strings Ideally filter is lazy so that the input string is consumed incrementally however this is not strictly necessary filter may also return another result in addition to string",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "Filter",
          "package": "superdoc",
          "partial": "Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string of decimal digits as a string of symbols. See\n \u003ca\u003eASCII armor\u003c/a\u003e for the specific mapping used.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "encode",
          "package": "superdoc",
          "signature": "String -\u003e String",
          "source": "src/Distribution-Superdoc-Markup.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string of decimal digits as string of symbols See ASCII armor for the specific mapping used",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "encode",
          "normalized": "String-\u003eString",
          "package": "superdoc",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a filter by reading from a file and writing to another file.\n We do not assume that the two files are necessarily distinct, so\n special care is taken not to overwrite the output file until after\n the input file has been read.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_file",
          "package": "superdoc",
          "signature": "Filter a -\u003e FilePath -\u003e FilePath -\u003e IO a",
          "source": "src/Distribution-Superdoc-Markup.html#filter_file",
          "type": "function"
        },
        "index": {
          "description": "Run filter by reading from file and writing to another file We do not assume that the two files are necessarily distinct so special care is taken not to overwrite the output file until after the input file has been read",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_file",
          "normalized": "Filter a-\u003eFilePath-\u003eFilePath-\u003eIO a",
          "package": "superdoc",
          "signature": "Filter a-\u003eFilePath-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a filter on a number of files, overwriting each file in\n place.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_files",
          "package": "superdoc",
          "signature": "Filter a -\u003e [FilePath] -\u003e IO [a]",
          "source": "src/Distribution-Superdoc-Markup.html#filter_files",
          "type": "function"
        },
        "index": {
          "description": "Run filter on number of files overwriting each file in place",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_files",
          "normalized": "Filter a-\u003e[FilePath]-\u003eIO[a]",
          "package": "superdoc",
          "signature": "Filter a-\u003e[FilePath]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a filter by reading from one handle and writing to another.\n The handles are set to binary mode.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_handles",
          "package": "superdoc",
          "signature": "Filter a -\u003e Handle -\u003e Handle -\u003e IO a",
          "source": "src/Distribution-Superdoc-Markup.html#filter_handles",
          "type": "function"
        },
        "index": {
          "description": "Run filter by reading from one handle and writing to another The handles are set to binary mode",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_handles",
          "normalized": "Filter a-\u003eHandle-\u003eHandle-\u003eIO a",
          "package": "superdoc",
          "signature": "Filter a-\u003eHandle-\u003eHandle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_handles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity filter.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_id",
          "package": "superdoc",
          "signature": "Filter ()",
          "source": "src/Distribution-Superdoc-Markup.html#filter_id",
          "type": "function"
        },
        "index": {
          "description": "The identity filter",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "filter_id",
          "normalized": "Filter()",
          "package": "superdoc",
          "signature": "Filter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a parser returning a string to a parser returning a string and an empty set.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "lift",
          "package": "superdoc",
          "signature": "ReadP String -\u003e ReadP (String, Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#lift",
          "type": "function"
        },
        "index": {
          "description": "Lift parser returning string to parser returning string and an empty set",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "lift",
          "normalized": "ReadP String-\u003eReadP(String,Set FilePath)",
          "package": "superdoc",
          "signature": "ReadP String-\u003eReadP(String,Set FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-level parser for Superdoc markup and ASCII armor,\n expressed as a filter. In addition to producing HTML output, this\n filter also returns the set of all image files that were linked to.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup",
          "package": "superdoc",
          "signature": "Filter (Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#markup",
          "type": "function"
        },
        "index": {
          "description": "The top-level parser for Superdoc markup and ASCII armor expressed as filter In addition to producing HTML output this filter also returns the set of all image files that were linked to",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a tag's body. What to do depends on the tag name.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003enested\u003c/em\u003e (for \u003cem\u003ekeyword\u003c/em\u003e = sup, super, sub, exp, bold, center, nobr),\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003efilename\u003c/em\u003e (for \u003cem\u003ekeyword\u003c/em\u003e = image),\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003edigit\u003c/em\u003e+ (for \u003cem\u003ekeyword\u003c/em\u003e = uni).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003eliteral\u003c/em\u003e (for \u003cem\u003ekeyword\u003c/em\u003e = literal).\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_body",
          "package": "superdoc",
          "signature": "String -\u003e ReadP (String, Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#markup_body",
          "type": "function"
        },
        "index": {
          "description": "Parse tag body What to do depends on the tag name body nested for keyword sup super sub exp bold center nobr body filename for keyword image body digit for keyword uni body literal for keyword literal",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_body",
          "normalized": "String-\u003eReadP(String,Set FilePath)",
          "package": "superdoc",
          "signature": "String-\u003eReadP(String,Set FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse bracketed text.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebracketed\u003c/em\u003e ::= \"[\" \u003cem\u003enested\u003c/em\u003e \"]\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_bracketed",
          "package": "superdoc",
          "signature": "ReadP (String, Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#markup_bracketed",
          "type": "function"
        },
        "index": {
          "description": "Parse bracketed text bracketed nested",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_bracketed",
          "normalized": "ReadP(String,Set FilePath)",
          "package": "superdoc",
          "signature": "ReadP(String,Set FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_bracketed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any bracketed text with balanced brackets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebracketed_literal\u003c/em\u003e ::= \"[\" \u003cem\u003eliteral\u003c/em\u003e \"]\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_bracketed_literal",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_bracketed_literal",
          "type": "function"
        },
        "index": {
          "description": "Parse any bracketed text with balanced brackets bracketed literal literal",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_bracketed_literal",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_bracketed_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any one character.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003echar\u003c/em\u003e ::= any character.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_char",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_char",
          "type": "function"
        },
        "index": {
          "description": "Parse any one character char any character",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_char",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a keyword.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ekeyword\u003c/em\u003e ::= \"sup\" | \"super\" | \"sub\" | \"exp\" | \"bold\" | \"center\" | \"nobr\" | \"image\" | \"uni\" | \"literal\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_keyword",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_keyword",
          "type": "function"
        },
        "index": {
          "description": "Parse keyword keyword sup super sub exp bold center nobr image uni literal",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_keyword",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_keyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any text with balanced brackets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eliteral\u003c/em\u003e ::= (\u003cem\u003enonbracket\u003c/em\u003e | \u003cem\u003ebracketed_literal\u003c/em\u003e)*.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_literal",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_literal",
          "type": "function"
        },
        "index": {
          "description": "Parse any text with balanced brackets literal nonbracket bracketed literal",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_literal",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emarkup\u003c/a\u003e\u003c/code\u003e, but only permit brackets \"[\" and \"]\" to occur\n in nested pairs.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003enested\u003c/em\u003e ::= (\u003cem\u003eother\u003c/em\u003e | \u003cem\u003etag\u003c/em\u003e | \u003cem\u003euni\u003c/em\u003e | \u003cem\u003ebracketed\u003c/em\u003e | \u003cem\u003eunderscore\u003c/em\u003e)*.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_nested",
          "package": "superdoc",
          "signature": "ReadP (String, Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#markup_nested",
          "type": "function"
        },
        "index": {
          "description": "Like markup but only permit brackets and to occur in nested pairs nested other tag uni bracketed underscore",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_nested",
          "normalized": "ReadP(String,Set FilePath)",
          "package": "superdoc",
          "signature": "ReadP(String,Set FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_nested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any single character except '[' and ']'.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003enonbracket\u003c/em\u003e ::= any character besides '[', ']'.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_nonbracket",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_nonbracket",
          "type": "function"
        },
        "index": {
          "description": "Parse any single character except and nonbracket any character besides",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_nonbracket",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_nonbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any sequence of non-special characters: anything but '[',\n 'u', 'U', '=', and ']'.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eother\u003c/em\u003e ::= (any character besides '[', 'u', 'U', '=', ']')+.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_other",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_other",
          "type": "function"
        },
        "index": {
          "description": "Parse any sequence of non-special characters anything but and other any character besides",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_other",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a symbol encoding a decimal digit. See \u003ccode\u003e\u003ca\u003eto_armor\u003c/a\u003e\u003c/code\u003e for the\n encoding used.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_symbol_digit",
          "package": "superdoc",
          "signature": "ReadP Char",
          "source": "src/Distribution-Superdoc-Markup.html#markup_symbol_digit",
          "type": "function"
        },
        "index": {
          "description": "Parse symbol encoding decimal digit See to armor for the encoding used",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_symbol_digit",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_symbol_digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a tag.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003etag\u003c/em\u003e ::= \"[\" \u003cem\u003ekeyword\u003c/em\u003e \u003cem\u003ebody\u003c/em\u003e \"]\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_tag",
          "package": "superdoc",
          "signature": "ReadP (String, Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#markup_tag",
          "type": "function"
        },
        "index": {
          "description": "Parse tag tag keyword body",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_tag",
          "normalized": "ReadP(String,Set FilePath)",
          "package": "superdoc",
          "signature": "ReadP(String,Set FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level parser for Superdoc markup and ASCII armor.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003etop\u003c/em\u003e ::= (\u003cem\u003eother\u003c/em\u003e | \u003cem\u003etag\u003c/em\u003e | \u003cem\u003euni\u003c/em\u003e | \u003cem\u003echar\u003c/em\u003e)*.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_top",
          "package": "superdoc",
          "signature": "ReadP (String, Set FilePath)",
          "source": "src/Distribution-Superdoc-Markup.html#markup_top",
          "type": "function"
        },
        "index": {
          "description": "Top-level parser for Superdoc markup and ASCII armor top other tag uni char",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_top",
          "normalized": "ReadP(String,Set FilePath)",
          "package": "superdoc",
          "signature": "ReadP(String,Set FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single underscore '_'.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eunderscore\u003c/em\u003e ::= \"_\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_underscore",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_underscore",
          "type": "function"
        },
        "index": {
          "description": "Parse single underscore underscore",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_underscore",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_underscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an armored Unicode character.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_uni",
          "type": "function"
        },
        "index": {
          "description": "Parse an armored Unicode character",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lower-case Unicode letter.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003euni_lower\u003c/em\u003e ::= \"uni__\" \u003cem\u003edigit\u003c/em\u003e+ \"__\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni_lower",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_uni_lower",
          "type": "function"
        },
        "index": {
          "description": "Parse lower-case Unicode letter uni lower uni digit",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni_lower",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni_lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Unicode operator symbol.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003euni_symbol\u003c/em\u003e ::= \"==|\" \u003cem\u003esymbol_digit\u003c/em\u003e+ \"|==\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni_symbol",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_uni_symbol",
          "type": "function"
        },
        "index": {
          "description": "Parse Unicode operator symbol uni symbol symbol digit",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni_symbol",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni_symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an upper-case Unicode letter.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003euni_upper\u003c/em\u003e ::= \"UNI__\" \u003cem\u003edigit\u003c/em\u003e+ \"__\".\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni_upper",
          "package": "superdoc",
          "signature": "ReadP String",
          "source": "src/Distribution-Superdoc-Markup.html#markup_uni_upper",
          "type": "function"
        },
        "index": {
          "description": "Parse an upper-case Unicode letter uni upper UNI digit",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "markup_uni_upper",
          "package": "superdoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni_upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tokenized Unicode stream to ASCII armor. \n\u003c/p\u003e\u003cp\u003eThe armor is designed to preserve lexical validity: thus, the\n armored version of a valid Haskell lower-case identifier,\n upper-case identifier, or operator is again a valid identifier or\n operator of the same kind. This makes it possible to use armored\n Unicode in source code as well as documentation comments.\n\u003c/p\u003e\u003cp\u003eThe armoring is further designed to use only symbols that will not\n confuse GHC or Haddock. See \u003ca\u003eASCII armor\u003c/a\u003e for a description\n of the format.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "to_armor",
          "package": "superdoc",
          "signature": "[Token] -\u003e String",
          "source": "src/Distribution-Superdoc-Markup.html#to_armor",
          "type": "function"
        },
        "index": {
          "description": "Convert tokenized Unicode stream to ASCII armor The armor is designed to preserve lexical validity thus the armored version of valid Haskell lower-case identifier upper-case identifier or operator is again valid identifier or operator of the same kind This makes it possible to use armored Unicode in source code as well as documentation comments The armoring is further designed to use only symbols that will not confuse GHC or Haddock See ASCII armor for description of the format",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "to_armor",
          "normalized": "[Token]-\u003eString",
          "package": "superdoc",
          "signature": "[Token]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:to_armor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tokenized Unicode stream into HTML entities. Non-ASCII\n characters are represented as HTML entities of the form \u003ccode\u003e&#\u003c/code\u003e\u003cem\u003ennnn\u003c/em\u003e\u003ccode\u003e;\u003c/code\u003e.\n Any invalid characters are simply copied to the output.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.Markup",
          "name": "to_html",
          "package": "superdoc",
          "signature": "[Token] -\u003e String",
          "source": "src/Distribution-Superdoc-Markup.html#to_html",
          "type": "function"
        },
        "index": {
          "description": "Convert tokenized Unicode stream into HTML entities Non-ASCII characters are represented as HTML entities of the form nnnn Any invalid characters are simply copied to the output",
          "hierarchy": "Distribution Superdoc Markup",
          "module": "Distribution.Superdoc.Markup",
          "name": "to_html",
          "normalized": "[Token]-\u003eString",
          "package": "superdoc",
          "signature": "[Token]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:to_html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple parser for UTF8. It converts a\n string of bytes into a list of unicode tokens. Invalid input bytes\n are converted to special \u003ccode\u003e\u003ca\u003eInvalid\u003c/a\u003e\u003c/code\u003e tokens, leaving it up to the\n consuming application to decide what to do with them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Superdoc.UTF8",
          "name": "UTF8",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-UTF8.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides simple parser for UTF8 It converts string of bytes into list of unicode tokens Invalid input bytes are converted to special Invalid tokens leaving it up to the consuming application to decide what to do with them",
          "hierarchy": "Distribution Superdoc UTF8",
          "module": "Distribution.Superdoc.UTF8",
          "name": "UTF8",
          "package": "superdoc",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token in a parsed UTF8 stream is either a valid Unicode\n character or an invalid input character. \n\u003c/p\u003e",
          "module": "Distribution.Superdoc.UTF8",
          "name": "Token",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-UTF8.html#Token",
          "type": "data"
        },
        "index": {
          "description": "token in parsed UTF8 stream is either valid Unicode character or an invalid input character",
          "hierarchy": "Distribution Superdoc UTF8",
          "module": "Distribution.Superdoc.UTF8",
          "name": "Token",
          "package": "superdoc",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Superdoc.UTF8",
          "name": "Invalid",
          "package": "superdoc",
          "signature": "Invalid Char",
          "source": "src/Distribution-Superdoc-UTF8.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Superdoc UTF8",
          "module": "Distribution.Superdoc.UTF8",
          "name": "Invalid",
          "package": "superdoc",
          "partial": "Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#v:Invalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Superdoc.UTF8",
          "name": "Unicode",
          "package": "superdoc",
          "signature": "Unicode Char",
          "source": "src/Distribution-Superdoc-UTF8.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Superdoc UTF8",
          "module": "Distribution.Superdoc.UTF8",
          "name": "Unicode",
          "package": "superdoc",
          "partial": "Unicode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#v:Unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a UTF8 stream into tokens. Rejects overlong forms and code\n points above 0x10ffff. Does not check validity of individual\n unicode code points.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc.UTF8",
          "name": "parse_utf8",
          "package": "superdoc",
          "signature": "String -\u003e [Token]",
          "source": "src/Distribution-Superdoc-UTF8.html#parse_utf8",
          "type": "function"
        },
        "index": {
          "description": "Parse UTF8 stream into tokens Rejects overlong forms and code points above x10ffff Does not check validity of individual unicode code points",
          "hierarchy": "Distribution Superdoc UTF8",
          "module": "Distribution.Superdoc.UTF8",
          "name": "parse_utf8",
          "normalized": "String-\u003e[Token]",
          "package": "superdoc",
          "signature": "String-\u003e[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#v:parse_utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package extends Cabal's documentation building capabilities.\n It extends the Haddock markup language with syntax for subscripts,\n superscripts, bold text, non-breaking spaces, and images. Moreover,\n it works around various bugs in Haddock's and HsColour's Unicode\n support, making it possible to use UTF8 encodings in both source\n code and documentation comments.\n\u003c/p\u003e\u003cp\u003eThis package is designed to work transparently. It provides a\n custom main function that package maintainers can use in their\n \u003ccode\u003eSetup.hs\u003c/code\u003e file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Superdoc",
          "name": "Superdoc",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc.html",
          "type": "module"
        },
        "index": {
          "description": "This package extends Cabal documentation building capabilities It extends the Haddock markup language with syntax for subscripts superscripts bold text non-breaking spaces and images Moreover it works around various bugs in Haddock and HsColour Unicode support making it possible to use UTF8 encodings in both source code and documentation comments This package is designed to work transparently It provides custom main function that package maintainers can use in their Setup.hs file",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "Superdoc",
          "package": "superdoc",
          "partial": "Superdoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parameter specifies what to do when the documentation links\n to an image that does not exist.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc",
          "name": "ImageMissing",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
          "type": "data"
        },
        "index": {
          "description": "This parameter specifies what to do when the documentation links to an image that does not exist",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "ImageMissing",
          "package": "superdoc",
          "partial": "Image Missing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#t:ImageMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parameter specifies where to find image files that are\n linked to in the documentation.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc",
          "name": "ImageSource",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
          "type": "data"
        },
        "index": {
          "description": "This parameter specifies where to find image files that are linked to in the documentation",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "ImageSource",
          "package": "superdoc",
          "partial": "Image Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#t:ImageSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure to hold Superdoc's parameters. Additional\n parameters may be added in the future, so to ensure forward\n compatibility, packages should always specify parameters by\n modifying \u003ccode\u003e\u003ca\u003edefaultSuperdocArgs\u003c/a\u003e\u003c/code\u003e, for example like this:\n\u003c/p\u003e\u003cpre\u003e let params = defaultSuperdocArgs { imageSource = ... }\n\u003c/pre\u003e",
          "module": "Distribution.Superdoc",
          "name": "SuperdocArgs",
          "package": "superdoc",
          "source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
          "type": "data"
        },
        "index": {
          "description": "data structure to hold Superdoc parameters Additional parameters may be added in the future so to ensure forward compatibility packages should always specify parameters by modifying defaultSuperdocArgs for example like this let params defaultSuperdocArgs imageSource",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "SuperdocArgs",
          "package": "superdoc",
          "partial": "Superdoc Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#t:SuperdocArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predefined set of \u003ccode\u003e\u003ca\u003eUserHooks\u003c/a\u003e\u003c/code\u003e for package maintainers who need\n to use the \u003ccode\u003e\u003ca\u003edefaultMainWithHooks\u003c/a\u003e\u003c/code\u003e function from\n \u003ca\u003eDistribution.Simple\u003c/a\u003e. The following is equivalent to\n \u003ccode\u003e\u003ca\u003esuperdocMain\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple\n import Distribution.Superdoc\n main = defaultMainWithHooks superdocHooks\n\u003c/pre\u003e",
          "module": "Distribution.Superdoc",
          "name": "superdocHooks",
          "package": "superdoc",
          "signature": "UserHooks",
          "source": "src/Distribution-Superdoc.html#superdocHooks",
          "type": "function"
        },
        "index": {
          "description": "predefined set of UserHooks for package maintainers who need to use the defaultMainWithHooks function from Distribution.Simple The following is equivalent to superdocMain import Distribution.Simple import Distribution.Superdoc main defaultMainWithHooks superdocHooks",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "superdocHooks",
          "package": "superdoc",
          "partial": "Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esuperdocHooks\u003c/a\u003e\u003c/code\u003e, but also accept parameters in\n the form of a \u003ccode\u003e\u003ca\u003eSuperdocArgs\u003c/a\u003e\u003c/code\u003e argument. Typical use:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple\n import Distribution.Superdoc\n main = defaultMainWithHooks superdocHooksArgs { imageSource = CopyFrom \"imgdir\" }\n\u003c/pre\u003e",
          "module": "Distribution.Superdoc",
          "name": "superdocHooksArgs",
          "package": "superdoc",
          "signature": "SuperdocArgs -\u003e UserHooks",
          "source": "src/Distribution-Superdoc.html#superdocHooksArgs",
          "type": "function"
        },
        "index": {
          "description": "Like superdocHooks but also accept parameters in the form of SuperdocArgs argument Typical use import Distribution.Simple import Distribution.Superdoc main defaultMainWithHooks superdocHooksArgs imageSource CopyFrom imgdir",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "superdocHooksArgs",
          "normalized": "SuperdocArgs-\u003eUserHooks",
          "package": "superdoc",
          "partial": "Hooks Args",
          "signature": "SuperdocArgs-\u003eUserHooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocHooksArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main function for a Cabal setup script. Use this instead of\n \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e in your \u003ccode\u003eSetup.hs\u003c/code\u003e to enable the Superdoc\n documentation features. Typical usage:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Superdoc\n main = superdocMain\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003eHow to use this package\u003c/a\u003e for more information.\n\u003c/p\u003e",
          "module": "Distribution.Superdoc",
          "name": "superdocMain",
          "package": "superdoc",
          "signature": "IO ()",
          "source": "src/Distribution-Superdoc.html#superdocMain",
          "type": "function"
        },
        "index": {
          "description": "The main function for Cabal setup script Use this instead of defaultMain in your Setup.hs to enable the Superdoc documentation features Typical usage import Distribution.Superdoc main superdocMain See How to use this package for more information",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "superdocMain",
          "normalized": "IO()",
          "package": "superdoc",
          "partial": "Main",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esuperdocMain\u003c/a\u003e\u003c/code\u003e, but also accept parameters\n in the form of a \u003ccode\u003e\u003ca\u003eSuperdocArgs\u003c/a\u003e\u003c/code\u003e argument. Typical use:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Superdoc\n main = superdocMainWithArgs defaultSuperdocArgs { imageSource = CopyFrom \"imgdir\" }\n\u003c/pre\u003e",
          "module": "Distribution.Superdoc",
          "name": "superdocMainArgs",
          "package": "superdoc",
          "signature": "SuperdocArgs -\u003e IO ()",
          "source": "src/Distribution-Superdoc.html#superdocMainArgs",
          "type": "function"
        },
        "index": {
          "description": "Like superdocMain but also accept parameters in the form of SuperdocArgs argument Typical use import Distribution.Superdoc main superdocMainWithArgs defaultSuperdocArgs imageSource CopyFrom imgdir",
          "hierarchy": "Distribution Superdoc",
          "module": "Distribution.Superdoc",
          "name": "superdocMainArgs",
          "normalized": "SuperdocArgs-\u003eIO()",
          "package": "superdoc",
          "partial": "Main Args",
          "signature": "SuperdocArgs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocMainArgs"
      }
    }
  ]
]