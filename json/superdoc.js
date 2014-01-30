[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines Superdoc's parameters, as well as the Cabal\n user hooks that do Superdoc's \"real\" work. For an explanation of\n what that work is, see here: \u003ca\u003eDistribution.Superdoc\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eFurther, this module exposes some low-level functions that are not\n exposed in \u003ca\u003eDistribution.Superdoc\u003c/a\u003e, but that may be useful for some\n specialized applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Superdoc-Hooks.html",
        "fct-type": "module",
        "title": "Hooks"
      },
      "index": {
        "description": "This module defines Superdoc parameters as well as the Cabal user hooks that do Superdoc real work For an explanation of what that work is see here Distribution.Superdoc Further this module exposes some low-level functions that are not exposed in Distribution.Superdoc but that may be useful for some specialized applications",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "Hooks",
        "normalized": "",
        "package": "superdoc",
        "partial": "Hooks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#t:ImageMissing",
      "description": {
        "fct-descr": "\u003cp\u003eThis parameter specifies what to do when the documentation links\n to an image that does not exist.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
        "fct-type": "data",
        "title": "ImageMissing"
      },
      "index": {
        "description": "This parameter specifies what to do when the documentation links to an image that does not exist",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "ImageMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Image Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#t:ImageSource",
      "description": {
        "fct-descr": "\u003cp\u003eThis parameter specifies where to find image files that are\n linked to in the documentation.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
        "fct-type": "data",
        "title": "ImageSource"
      },
      "index": {
        "description": "This parameter specifies where to find image files that are linked to in the documentation",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "ImageSource",
        "normalized": "",
        "package": "superdoc",
        "partial": "Image Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#t:SuperdocArgs",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure to hold Superdoc's parameters. Additional\n parameters may be added in the future, so to ensure forward\n compatibility, packages should always specify parameters by\n modifying \u003ccode\u003e\u003ca\u003edefaultSuperdocArgs\u003c/a\u003e\u003c/code\u003e, for example like this:\n\u003c/p\u003e\u003cpre\u003e let params = defaultSuperdocArgs { imageSource = ... }\n\u003c/pre\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "data",
        "title": "SuperdocArgs"
      },
      "index": {
        "description": "data structure to hold Superdoc parameters Additional parameters may be added in the future so to ensure forward compatibility packages should always specify parameters by modifying defaultSuperdocArgs for example like this let params defaultSuperdocArgs imageSource",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "SuperdocArgs",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:CopyFrom",
      "description": {
        "fct-descr": "\u003cp\u003eCopy image files from the specified source directory, which\n is relative to the package root. The default is \"\u003ccode\u003eimages\u003c/code\u003e\".\n Superdoc will copy the required images to their appropriate\n location within the generated HTML documentation. The image\n files should also be declared as \u003ccode\u003eextra-source-files\u003c/code\u003e in the\n \u003ccode\u003e.cabal\u003c/code\u003e file.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "CopyFrom FilePath",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
        "fct-type": "function",
        "title": "CopyFrom"
      },
      "index": {
        "description": "Copy image files from the specified source directory which is relative to the package root The default is images Superdoc will copy the required images to their appropriate location within the generated HTML documentation The image files should also be declared as extra-source-files in the cabal file",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "CopyFrom",
        "normalized": "",
        "package": "superdoc",
        "partial": "Copy From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:ExtraHtmlFiles",
      "description": {
        "fct-descr": "\u003cp\u003eAssume the images are already present in the directory where\n the Haddock documentation is being generated. This is useful if\n the images have been declared as \u003ccode\u003eextra-html-files\u003c/code\u003e in the\n \u003ccode\u003e.cabal\u003c/code\u003e file. They will then have been copied to their\n rightful location by Cabal. Superdoc will check that the\n required images are present.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "ExtraHtmlFiles",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
        "fct-type": "function",
        "title": "ExtraHtmlFiles"
      },
      "index": {
        "description": "Assume the images are already present in the directory where the Haddock documentation is being generated This is useful if the images have been declared as extra-html-files in the cabal file They will then have been copied to their rightful location by Cabal Superdoc will check that the required images are present",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "ExtraHtmlFiles",
        "normalized": "",
        "package": "superdoc",
        "partial": "Extra Html Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:FailOnMissing",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default setting. Cabal will fail with an error\n message if the documentation links to an image that does not\n exist or cannot be found.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "FailOnMissing",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
        "fct-type": "function",
        "title": "FailOnMissing"
      },
      "index": {
        "description": "This is the default setting Cabal will fail with an error message if the documentation links to an image that does not exist or cannot be found",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "FailOnMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Fail On Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:IgnoreMissing",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore missing image files. Superdoc will still generate HTML\n image tags, but will not fail if a corresponding image file\n does not exist.  This setting may be useful for testing, or to\n build documentation when the image files are incomplete or\n missing.  It is not recommended to use this setting for\n production purposes.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "IgnoreMissing",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
        "fct-type": "function",
        "title": "IgnoreMissing"
      },
      "index": {
        "description": "Ignore missing image files Superdoc will still generate HTML image tags but will not fail if corresponding image file does not exist This setting may be useful for testing or to build documentation when the image files are incomplete or missing It is not recommended to use this setting for production purposes",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "IgnoreMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Ignore Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:SuperdocArgs",
      "description": {
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "SuperdocArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "SuperdocArgs",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:bootstrap",
      "description": {
        "fct-descr": "\u003cp\u003eBootstrapping mode. Required to generate Superdoc's own\n documentation, because at that point, Superdoc is typically not\n yet installed. Other packages using Superdoc should not set this\n flag.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "Bool",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "bootstrap"
      },
      "index": {
        "description": "Bootstrapping mode Required to generate Superdoc own documentation because at that point Superdoc is typically not yet installed Other packages using Superdoc should not set this flag",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "bootstrap",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:defaultSuperdocArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe default Superdoc parameters.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#defaultSuperdocArgs",
        "fct-type": "function",
        "title": "defaultSuperdocArgs"
      },
      "index": {
        "description": "The default Superdoc parameters",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "defaultSuperdocArgs",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:do_posthaddock",
      "description": {
        "fct-descr": "\u003cp\u003eDo the actual work of the \u003ccode\u003e\u003ca\u003eposthaddock\u003c/a\u003e\u003c/code\u003e hook, given a path to the\n documentation directory.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#do_posthaddock",
        "fct-type": "function",
        "title": "do_posthaddock"
      },
      "index": {
        "description": "Do the actual work of the posthaddock hook given path to the documentation directory",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "do_posthaddock",
        "normalized": "SuperdocArgs-\u003eFilePath-\u003eIO()",
        "package": "superdoc",
        "partial": "",
        "signature": "SuperdocArgs-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:do_posthscolour",
      "description": {
        "fct-descr": "\u003cp\u003eDo the actual work of the \u003ccode\u003e\u003ca\u003eposthaddock\u003c/a\u003e\u003c/code\u003e hook, given a path to the\n documentation directory.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#do_posthscolour",
        "fct-type": "function",
        "title": "do_posthscolour"
      },
      "index": {
        "description": "Do the actual work of the posthaddock hook given path to the documentation directory",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "do_posthscolour",
        "normalized": "FilePath-\u003eIO()",
        "package": "superdoc",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:haddockhook",
      "description": {
        "fct-descr": "\u003cp\u003eA hook for Haddock. This simply adds a command line option to the\n subordinate Haddock process, instructing it to use the\n \u003ccode\u003esuperdoc-armor\u003c/code\u003e preprocessor. Its purpose is to replace\n UTF8-encoded Unicode characters by their ASCII armor.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e UserHooks -\u003e HaddockFlags -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#haddockhook",
        "fct-type": "function",
        "title": "haddockhook"
      },
      "index": {
        "description": "hook for Haddock This simply adds command line option to the subordinate Haddock process instructing it to use the superdoc-armor preprocessor Its purpose is to replace UTF8-encoded Unicode characters by their ASCII armor",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "haddockhook",
        "normalized": "SuperdocArgs-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eUserHooks-\u003eHaddockFlags-\u003eIO()",
        "package": "superdoc",
        "partial": "",
        "signature": "SuperdocArgs-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eUserHooks-\u003eHaddockFlags-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:handle_images",
      "description": {
        "fct-descr": "\u003cp\u003ePerform the action described by \u003ccode\u003e\u003ca\u003eImageSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eImageMissing\u003c/a\u003e\u003c/code\u003e,\n for the given set of images. The last argument is the path for the\n documentation directory.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "ImageSource -\u003e ImageMissing -\u003e Set FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#handle_images",
        "fct-type": "function",
        "title": "handle_images"
      },
      "index": {
        "description": "Perform the action described by ImageSource and ImageMissing for the given set of images The last argument is the path for the documentation directory",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "handle_images",
        "normalized": "ImageSource-\u003eImageMissing-\u003eSet FilePath-\u003eFilePath-\u003eIO()",
        "package": "superdoc",
        "partial": "",
        "signature": "ImageSource-\u003eImageMissing-\u003eSet FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:imageMissing",
      "description": {
        "fct-descr": "\u003cp\u003eWhat to do about missing image files.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "ImageMissing",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "imageMissing"
      },
      "index": {
        "description": "What to do about missing image files",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "imageMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:imageSource",
      "description": {
        "fct-descr": "\u003cp\u003eWhere to look for image files.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "ImageSource",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "imageSource"
      },
      "index": {
        "description": "Where to look for image files",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "imageSource",
        "normalized": "",
        "package": "superdoc",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:posthaddock",
      "description": {
        "fct-descr": "\u003cp\u003eA hook to run after Haddock completes. This resolves Superdoc\n markup and ASCII armor in all generated HTML files. It also copies\n all of the linked images to the HTML directory (depending on the\n \u003ccode\u003e\u003ca\u003eimageSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eimageMissing\u003c/a\u003e\u003c/code\u003e parameters). Finally, it checks\n for the \"\u003ccode\u003e--hyperlink-source\u003c/code\u003e\" option, and if necessary, calls\n the \u003ccode\u003e\u003ca\u003eposthscolour\u003c/a\u003e\u003c/code\u003e hook as well (because it is not run from inside\n Cabal in this situation).\n\u003c/p\u003e\u003cp\u003eThe first argument hold the Superdoc parameters, and the remaining\n arguments are as for any \u003ccode\u003e\u003ca\u003epostHaddock\u003c/a\u003e\u003c/code\u003e hook.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs -\u003e Args -\u003e HaddockFlags -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#posthaddock",
        "fct-type": "function",
        "title": "posthaddock"
      },
      "index": {
        "description": "hook to run after Haddock completes This resolves Superdoc markup and ASCII armor in all generated HTML files It also copies all of the linked images to the HTML directory depending on the imageSource and imageMissing parameters Finally it checks for the hyperlink-source option and if necessary calls the posthscolour hook as well because it is not run from inside Cabal in this situation The first argument hold the Superdoc parameters and the remaining arguments are as for any postHaddock hook",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "posthaddock",
        "normalized": "SuperdocArgs-\u003eArgs-\u003eHaddockFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
        "package": "superdoc",
        "partial": "",
        "signature": "SuperdocArgs-\u003eArgs-\u003eHaddockFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Hooks.html#v:posthscolour",
      "description": {
        "fct-descr": "\u003cp\u003eA hook to run after HsColour completes. This goes through the\n files generated by HsColour and replaces UTF8 characters by their\n corresponding HTML escapes.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Hooks",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs -\u003e Args -\u003e HscolourFlags -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#posthscolour",
        "fct-type": "function",
        "title": "posthscolour"
      },
      "index": {
        "description": "hook to run after HsColour completes This goes through the files generated by HsColour and replaces UTF8 characters by their corresponding HTML escapes",
        "hierarchy": "Distribution Superdoc Hooks",
        "module": "Distribution.Superdoc.Hooks",
        "name": "posthscolour",
        "normalized": "SuperdocArgs-\u003eArgs-\u003eHscolourFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
        "package": "superdoc",
        "partial": "",
        "signature": "SuperdocArgs-\u003eArgs-\u003eHscolourFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides conversions between various different markup\n formats. In principle, it provides four different conversions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Converting the Superdoc markup language to HTML.\n\u003c/li\u003e\u003cli\u003e Converting ASCII-armored Unicode to HTML.\n\u003c/li\u003e\u003cli\u003e Converting Unicode streams to ASCII-armor.\n\u003c/li\u003e\u003cli\u003e Converting Unicode streams to HTML.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eConversions 1 and 2 are combined into a single parser for the\n Superdoc markup language, which is exposed by the function\n \u003ccode\u003e\u003ca\u003emarkup\u003c/a\u003e\u003c/code\u003e. This is used by the post-Haddock hook.\n\u003c/p\u003e\u003cp\u003eConversion 3 is provided by the \u003ccode\u003e\u003ca\u003eto_armor\u003c/a\u003e\u003c/code\u003e function. Within the\n Superdoc workflow, this is used by the \u003ccode\u003esuperdoc-armor\u003c/code\u003e\n preprocessor, which is in turns run by the Haddock hook. It makes\n sense to keep conversions 2 and 3 in a single module, because\n they jointly define the format for the ASCII armor.\n\u003c/p\u003e\u003cp\u003eConversion 4 is provided by the \u003ccode\u003e\u003ca\u003eto_html\u003c/a\u003e\u003c/code\u003e function. It is used by\n the post-HsColour hook.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Superdoc-Markup.html",
        "fct-type": "module",
        "title": "Markup"
      },
      "index": {
        "description": "This module provides conversions between various different markup formats In principle it provides four different conversions Converting the Superdoc markup language to HTML Converting ASCII-armored Unicode to HTML Converting Unicode streams to ASCII-armor Converting Unicode streams to HTML Conversions and are combined into single parser for the Superdoc markup language which is exposed by the function markup This is used by the post-Haddock hook Conversion is provided by the to armor function Within the Superdoc workflow this is used by the superdoc-armor preprocessor which is in turns run by the Haddock hook It makes sense to keep conversions and in single module because they jointly define the format for the ASCII armor Conversion is provided by the to html function It is used by the post-HsColour hook",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "Markup",
        "normalized": "",
        "package": "superdoc",
        "partial": "Markup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#t:Filter",
      "description": {
        "fct-descr": "\u003cp\u003eA filter is basically a function from strings to strings. Ideally\n a filter is lazy, so that the input string is consumed\n incrementally; however, this is not strictly necessary.  A filter\n may also return another result in addition to a string.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "type",
        "fct-source": "src/Distribution-Superdoc-Markup.html#Filter",
        "fct-type": "type",
        "title": "Filter"
      },
      "index": {
        "description": "filter is basically function from strings to strings Ideally filter is lazy so that the input string is consumed incrementally however this is not strictly necessary filter may also return another result in addition to string",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "Filter",
        "normalized": "",
        "package": "superdoc",
        "partial": "Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a string of decimal digits as a string of symbols. See\n \u003ca\u003eASCII armor\u003c/a\u003e for the specific mapping used.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode string of decimal digits as string of symbols See ASCII armor for the specific mapping used",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "encode",
        "normalized": "String-\u003eString",
        "package": "superdoc",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_file",
      "description": {
        "fct-descr": "\u003cp\u003eRun a filter by reading from a file and writing to another file.\n We do not assume that the two files are necessarily distinct, so\n special care is taken not to overwrite the output file until after\n the input file has been read.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "Filter a -\u003e FilePath -\u003e FilePath -\u003e IO a",
        "fct-source": "src/Distribution-Superdoc-Markup.html#filter_file",
        "fct-type": "function",
        "title": "filter_file"
      },
      "index": {
        "description": "Run filter by reading from file and writing to another file We do not assume that the two files are necessarily distinct so special care is taken not to overwrite the output file until after the input file has been read",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "filter_file",
        "normalized": "Filter a-\u003eFilePath-\u003eFilePath-\u003eIO a",
        "package": "superdoc",
        "partial": "",
        "signature": "Filter a-\u003eFilePath-\u003eFilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_files",
      "description": {
        "fct-descr": "\u003cp\u003eRun a filter on a number of files, overwriting each file in\n place.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "Filter a -\u003e [FilePath] -\u003e IO [a]",
        "fct-source": "src/Distribution-Superdoc-Markup.html#filter_files",
        "fct-type": "function",
        "title": "filter_files"
      },
      "index": {
        "description": "Run filter on number of files overwriting each file in place",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "filter_files",
        "normalized": "Filter a-\u003e[FilePath]-\u003eIO[a]",
        "package": "superdoc",
        "partial": "",
        "signature": "Filter a-\u003e[FilePath]-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_handles",
      "description": {
        "fct-descr": "\u003cp\u003eRun a filter by reading from one handle and writing to another.\n The handles are set to binary mode.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "Filter a -\u003e Handle -\u003e Handle -\u003e IO a",
        "fct-source": "src/Distribution-Superdoc-Markup.html#filter_handles",
        "fct-type": "function",
        "title": "filter_handles"
      },
      "index": {
        "description": "Run filter by reading from one handle and writing to another The handles are set to binary mode",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "filter_handles",
        "normalized": "Filter a-\u003eHandle-\u003eHandle-\u003eIO a",
        "package": "superdoc",
        "partial": "",
        "signature": "Filter a-\u003eHandle-\u003eHandle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:filter_id",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity filter.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "Filter ()",
        "fct-source": "src/Distribution-Superdoc-Markup.html#filter_id",
        "fct-type": "function",
        "title": "filter_id"
      },
      "index": {
        "description": "The identity filter",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "filter_id",
        "normalized": "Filter()",
        "package": "superdoc",
        "partial": "",
        "signature": "Filter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a parser returning a string to a parser returning a string and an empty set.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String -\u003e ReadP (String, Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Lift parser returning string to parser returning string and an empty set",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "lift",
        "normalized": "ReadP String-\u003eReadP(String,Set FilePath)",
        "package": "superdoc",
        "partial": "",
        "signature": "ReadP String-\u003eReadP(String,Set FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup",
      "description": {
        "fct-descr": "\u003cp\u003eThe top-level parser for Superdoc markup and ASCII armor,\n expressed as a filter. In addition to producing HTML output, this\n filter also returns the set of all image files that were linked to.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "Filter (Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup",
        "fct-type": "function",
        "title": "markup"
      },
      "index": {
        "description": "The top-level parser for Superdoc markup and ASCII armor expressed as filter In addition to producing HTML output this filter also returns the set of all image files that were linked to",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_body",
      "description": {
        "fct-descr": "\u003cp\u003eParse a tag's body. What to do depends on the tag name.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003enested\u003c/em\u003e (for \u003cem\u003ekeyword\u003c/em\u003e = sup, super, sub, exp, bold, nobr),\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003efilename\u003c/em\u003e (for \u003cem\u003ekeyword\u003c/em\u003e = image),\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003edigit\u003c/em\u003e+ (for \u003cem\u003ekeyword\u003c/em\u003e = uni).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebody\u003c/em\u003e ::= \u003cem\u003eliteral\u003c/em\u003e (for \u003cem\u003ekeyword\u003c/em\u003e = literal).\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "String -\u003e ReadP (String, Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_body",
        "fct-type": "function",
        "title": "markup_body"
      },
      "index": {
        "description": "Parse tag body What to do depends on the tag name body nested for keyword sup super sub exp bold nobr body filename for keyword image body digit for keyword uni body literal for keyword literal",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_body",
        "normalized": "String-\u003eReadP(String,Set FilePath)",
        "package": "superdoc",
        "partial": "",
        "signature": "String-\u003eReadP(String,Set FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_bracketed",
      "description": {
        "fct-descr": "\u003cp\u003eParse bracketed text.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebracketed\u003c/em\u003e ::= \"[\" \u003cem\u003enested\u003c/em\u003e \"]\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP (String, Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_bracketed",
        "fct-type": "function",
        "title": "markup_bracketed"
      },
      "index": {
        "description": "Parse bracketed text bracketed nested",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_bracketed",
        "normalized": "ReadP(String,Set FilePath)",
        "package": "superdoc",
        "partial": "",
        "signature": "ReadP(String,Set FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_bracketed_literal",
      "description": {
        "fct-descr": "\u003cp\u003eParse any bracketed text with balanced brackets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ebracketed_literal\u003c/em\u003e ::= \"[\" \u003cem\u003eliteral\u003c/em\u003e \"]\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_bracketed_literal",
        "fct-type": "function",
        "title": "markup_bracketed_literal"
      },
      "index": {
        "description": "Parse any bracketed text with balanced brackets bracketed literal literal",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_bracketed_literal",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_char",
      "description": {
        "fct-descr": "\u003cp\u003eParse any one character.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003echar\u003c/em\u003e ::= any character.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_char",
        "fct-type": "function",
        "title": "markup_char"
      },
      "index": {
        "description": "Parse any one character char any character",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_char",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_keyword",
      "description": {
        "fct-descr": "\u003cp\u003eParse a keyword.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ekeyword\u003c/em\u003e ::= \"sup\" | \"super\" | \"sub\" | \"exp\" | \"bold\" | \"nobr\" | \"image\" | \"uni\" | \"literal\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_keyword",
        "fct-type": "function",
        "title": "markup_keyword"
      },
      "index": {
        "description": "Parse keyword keyword sup super sub exp bold nobr image uni literal",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_keyword",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_literal",
      "description": {
        "fct-descr": "\u003cp\u003eParse any text with balanced brackets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eliteral\u003c/em\u003e ::= (\u003cem\u003enonbracket\u003c/em\u003e | \u003cem\u003ebracketed_literal\u003c/em\u003e)*.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_literal",
        "fct-type": "function",
        "title": "markup_literal"
      },
      "index": {
        "description": "Parse any text with balanced brackets literal nonbracket bracketed literal",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_literal",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_nested",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emarkup\u003c/a\u003e\u003c/code\u003e, but only permit brackets \"[\" and \"]\" to occur\n in nested pairs.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003enested\u003c/em\u003e ::= (\u003cem\u003eother\u003c/em\u003e | \u003cem\u003etag\u003c/em\u003e | \u003cem\u003euni\u003c/em\u003e | \u003cem\u003ebracketed\u003c/em\u003e | \u003cem\u003eunderscore\u003c/em\u003e)*.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP (String, Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_nested",
        "fct-type": "function",
        "title": "markup_nested"
      },
      "index": {
        "description": "Like markup but only permit brackets and to occur in nested pairs nested other tag uni bracketed underscore",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_nested",
        "normalized": "ReadP(String,Set FilePath)",
        "package": "superdoc",
        "partial": "",
        "signature": "ReadP(String,Set FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_nonbracket",
      "description": {
        "fct-descr": "\u003cp\u003eParse any single character except '[' and ']'.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003enonbracket\u003c/em\u003e ::= any character besides '[', ']'.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_nonbracket",
        "fct-type": "function",
        "title": "markup_nonbracket"
      },
      "index": {
        "description": "Parse any single character except and nonbracket any character besides",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_nonbracket",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_other",
      "description": {
        "fct-descr": "\u003cp\u003eParse any sequence of non-special characters: anything but '[',\n 'u', 'U', '=', and ']'.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eother\u003c/em\u003e ::= (any character besides '[', 'u', 'U', '=', ']')+.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_other",
        "fct-type": "function",
        "title": "markup_other"
      },
      "index": {
        "description": "Parse any sequence of non-special characters anything but and other any character besides",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_other",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_symbol_digit",
      "description": {
        "fct-descr": "\u003cp\u003eParse a symbol encoding a decimal digit. See \u003ccode\u003e\u003ca\u003eto_armor\u003c/a\u003e\u003c/code\u003e for the\n encoding used.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP Char",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_symbol_digit",
        "fct-type": "function",
        "title": "markup_symbol_digit"
      },
      "index": {
        "description": "Parse symbol encoding decimal digit See to armor for the encoding used",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_symbol_digit",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_tag",
      "description": {
        "fct-descr": "\u003cp\u003eParse a tag.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003etag\u003c/em\u003e ::= \"[\" \u003cem\u003ekeyword\u003c/em\u003e \u003cem\u003ebody\u003c/em\u003e \"]\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP (String, Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_tag",
        "fct-type": "function",
        "title": "markup_tag"
      },
      "index": {
        "description": "Parse tag tag keyword body",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_tag",
        "normalized": "ReadP(String,Set FilePath)",
        "package": "superdoc",
        "partial": "",
        "signature": "ReadP(String,Set FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_top",
      "description": {
        "fct-descr": "\u003cp\u003eTop-level parser for Superdoc markup and ASCII armor.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003etop\u003c/em\u003e ::= (\u003cem\u003eother\u003c/em\u003e | \u003cem\u003etag\u003c/em\u003e | \u003cem\u003euni\u003c/em\u003e | \u003cem\u003echar\u003c/em\u003e)*.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP (String, Set FilePath)",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_top",
        "fct-type": "function",
        "title": "markup_top"
      },
      "index": {
        "description": "Top-level parser for Superdoc markup and ASCII armor top other tag uni char",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_top",
        "normalized": "ReadP(String,Set FilePath)",
        "package": "superdoc",
        "partial": "",
        "signature": "ReadP(String,Set FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_underscore",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single underscore '_'.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eunderscore\u003c/em\u003e ::= \"_\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_underscore",
        "fct-type": "function",
        "title": "markup_underscore"
      },
      "index": {
        "description": "Parse single underscore underscore",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_underscore",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni",
      "description": {
        "fct-descr": "\u003cp\u003eParse an armored Unicode character.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_uni",
        "fct-type": "function",
        "title": "markup_uni"
      },
      "index": {
        "description": "Parse an armored Unicode character",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_uni",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni_lower",
      "description": {
        "fct-descr": "\u003cp\u003eParse a lower-case Unicode letter.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003euni_lower\u003c/em\u003e ::= \"uni__\" \u003cem\u003edigit\u003c/em\u003e+ \"__\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_uni_lower",
        "fct-type": "function",
        "title": "markup_uni_lower"
      },
      "index": {
        "description": "Parse lower-case Unicode letter uni lower uni digit",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_uni_lower",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni_symbol",
      "description": {
        "fct-descr": "\u003cp\u003eParse a Unicode operator symbol.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003euni_symbol\u003c/em\u003e ::= \"==|\" \u003cem\u003esymbol_digit\u003c/em\u003e+ \"|==\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_uni_symbol",
        "fct-type": "function",
        "title": "markup_uni_symbol"
      },
      "index": {
        "description": "Parse Unicode operator symbol uni symbol symbol digit",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_uni_symbol",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:markup_uni_upper",
      "description": {
        "fct-descr": "\u003cp\u003eParse an upper-case Unicode letter.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003euni_upper\u003c/em\u003e ::= \"UNI__\" \u003cem\u003edigit\u003c/em\u003e+ \"__\".\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "ReadP String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#markup_uni_upper",
        "fct-type": "function",
        "title": "markup_uni_upper"
      },
      "index": {
        "description": "Parse an upper-case Unicode letter uni upper UNI digit",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "markup_uni_upper",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:to_armor",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a tokenized Unicode stream to ASCII armor. \n\u003c/p\u003e\u003cp\u003eThe armor is designed to preserve lexical validity: thus, the\n armored version of a valid Haskell lower-case identifier,\n upper-case identifier, or operator is again a valid identifier or\n operator of the same kind. This makes it possible to use armored\n Unicode in source code as well as documentation comments.\n\u003c/p\u003e\u003cp\u003eThe armoring is further designed to use only symbols that will not\n confuse GHC or Haddock. See \u003ca\u003eASCII armor\u003c/a\u003e for a description\n of the format.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "[Token] -\u003e String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#to_armor",
        "fct-type": "function",
        "title": "to_armor"
      },
      "index": {
        "description": "Convert tokenized Unicode stream to ASCII armor The armor is designed to preserve lexical validity thus the armored version of valid Haskell lower-case identifier upper-case identifier or operator is again valid identifier or operator of the same kind This makes it possible to use armored Unicode in source code as well as documentation comments The armoring is further designed to use only symbols that will not confuse GHC or Haddock See ASCII armor for description of the format",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "to_armor",
        "normalized": "[Token]-\u003eString",
        "package": "superdoc",
        "partial": "",
        "signature": "[Token]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-Markup.html#v:to_html",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a tokenized Unicode stream into HTML entities. Non-ASCII\n characters are represented as HTML entities of the form \u003ccode\u003e&#\u003c/code\u003e\u003cem\u003ennnn\u003c/em\u003e\u003ccode\u003e;\u003c/code\u003e.\n Any invalid characters are simply copied to the output.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.Markup",
        "fct-package": "superdoc",
        "fct-signature": "[Token] -\u003e String",
        "fct-source": "src/Distribution-Superdoc-Markup.html#to_html",
        "fct-type": "function",
        "title": "to_html"
      },
      "index": {
        "description": "Convert tokenized Unicode stream into HTML entities Non-ASCII characters are represented as HTML entities of the form nnnn Any invalid characters are simply copied to the output",
        "hierarchy": "Distribution Superdoc Markup",
        "module": "Distribution.Superdoc.Markup",
        "name": "to_html",
        "normalized": "[Token]-\u003eString",
        "package": "superdoc",
        "partial": "",
        "signature": "[Token]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simple parser for UTF8. It converts a\n string of bytes into a list of unicode tokens. Invalid input bytes\n are converted to special \u003ccode\u003e\u003ca\u003eInvalid\u003c/a\u003e\u003c/code\u003e tokens, leaving it up to the\n consuming application to decide what to do with them.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.Superdoc.UTF8",
        "fct-package": "superdoc",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Superdoc-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "This module provides simple parser for UTF8 It converts string of bytes into list of unicode tokens Invalid input bytes are converted to special Invalid tokens leaving it up to the consuming application to decide what to do with them",
        "hierarchy": "Distribution Superdoc UTF8",
        "module": "Distribution.Superdoc.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "superdoc",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eA token in a parsed UTF8 stream is either a valid Unicode\n character or an invalid input character. \n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.UTF8",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-UTF8.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "token in parsed UTF8 stream is either valid Unicode character or an invalid input character",
        "hierarchy": "Distribution Superdoc UTF8",
        "module": "Distribution.Superdoc.UTF8",
        "name": "Token",
        "normalized": "",
        "package": "superdoc",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#v:Invalid",
      "description": {
        "fct-module": "Distribution.Superdoc.UTF8",
        "fct-package": "superdoc",
        "fct-signature": "Invalid Char",
        "fct-source": "src/Distribution-Superdoc-UTF8.html#Token",
        "fct-type": "function",
        "title": "Invalid"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution Superdoc UTF8",
        "module": "Distribution.Superdoc.UTF8",
        "name": "Invalid",
        "normalized": "",
        "package": "superdoc",
        "partial": "Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#v:Unicode",
      "description": {
        "fct-module": "Distribution.Superdoc.UTF8",
        "fct-package": "superdoc",
        "fct-signature": "Unicode Char",
        "fct-source": "src/Distribution-Superdoc-UTF8.html#Token",
        "fct-type": "function",
        "title": "Unicode"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution Superdoc UTF8",
        "module": "Distribution.Superdoc.UTF8",
        "name": "Unicode",
        "normalized": "",
        "package": "superdoc",
        "partial": "Unicode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc-UTF8.html#v:parse_utf8",
      "description": {
        "fct-descr": "\u003cp\u003eParse a UTF8 stream into tokens. Rejects overlong forms and code\n points above 0x10ffff. Does not check validity of individual\n unicode code points.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc.UTF8",
        "fct-package": "superdoc",
        "fct-signature": "String -\u003e [Token]",
        "fct-source": "src/Distribution-Superdoc-UTF8.html#parse_utf8",
        "fct-type": "function",
        "title": "parse_utf8"
      },
      "index": {
        "description": "Parse UTF8 stream into tokens Rejects overlong forms and code points above x10ffff Does not check validity of individual unicode code points",
        "hierarchy": "Distribution Superdoc UTF8",
        "module": "Distribution.Superdoc.UTF8",
        "name": "parse_utf8",
        "normalized": "String-\u003e[Token]",
        "package": "superdoc",
        "partial": "",
        "signature": "String-\u003e[Token]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package extends Cabal's documentation building capabilities.\n It extends the Haddock markup language with syntax for subscripts,\n superscripts, bold text, non-breaking spaces, and images. Moreover,\n it works around various bugs in Haddock's and HsColour's Unicode\n support, making it possible to use UTF8 encodings in both source\n code and documentation comments.\n\u003c/p\u003e\u003cp\u003eThis package is designed to work transparently. It provides a\n custom main function that package maintainers can use in their\n \u003ccode\u003eSetup.hs\u003c/code\u003e file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Superdoc.html",
        "fct-type": "module",
        "title": "Superdoc"
      },
      "index": {
        "description": "This package extends Cabal documentation building capabilities It extends the Haddock markup language with syntax for subscripts superscripts bold text non-breaking spaces and images Moreover it works around various bugs in Haddock and HsColour Unicode support making it possible to use UTF8 encodings in both source code and documentation comments This package is designed to work transparently It provides custom main function that package maintainers can use in their Setup.hs file",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "Superdoc",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#t:ImageMissing",
      "description": {
        "fct-descr": "\u003cp\u003eThis parameter specifies what to do when the documentation links\n to an image that does not exist.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
        "fct-type": "data",
        "title": "ImageMissing"
      },
      "index": {
        "description": "This parameter specifies what to do when the documentation links to an image that does not exist",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "ImageMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Image Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#t:ImageSource",
      "description": {
        "fct-descr": "\u003cp\u003eThis parameter specifies where to find image files that are\n linked to in the documentation.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
        "fct-type": "data",
        "title": "ImageSource"
      },
      "index": {
        "description": "This parameter specifies where to find image files that are linked to in the documentation",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "ImageSource",
        "normalized": "",
        "package": "superdoc",
        "partial": "Image Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#t:SuperdocArgs",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure to hold Superdoc's parameters. Additional\n parameters may be added in the future, so to ensure forward\n compatibility, packages should always specify parameters by\n modifying \u003ccode\u003e\u003ca\u003edefaultSuperdocArgs\u003c/a\u003e\u003c/code\u003e, for example like this:\n\u003c/p\u003e\u003cpre\u003e let params = defaultSuperdocArgs { imageSource = ... }\n\u003c/pre\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "data",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "data",
        "title": "SuperdocArgs"
      },
      "index": {
        "description": "data structure to hold Superdoc parameters Additional parameters may be added in the future so to ensure forward compatibility packages should always specify parameters by modifying defaultSuperdocArgs for example like this let params defaultSuperdocArgs imageSource",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "SuperdocArgs",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:CopyFrom",
      "description": {
        "fct-descr": "\u003cp\u003eCopy image files from the specified source directory, which\n is relative to the package root. The default is \"\u003ccode\u003eimages\u003c/code\u003e\".\n Superdoc will copy the required images to their appropriate\n location within the generated HTML documentation. The image\n files should also be declared as \u003ccode\u003eextra-source-files\u003c/code\u003e in the\n \u003ccode\u003e.cabal\u003c/code\u003e file.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "CopyFrom FilePath",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
        "fct-type": "function",
        "title": "CopyFrom"
      },
      "index": {
        "description": "Copy image files from the specified source directory which is relative to the package root The default is images Superdoc will copy the required images to their appropriate location within the generated HTML documentation The image files should also be declared as extra-source-files in the cabal file",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "CopyFrom",
        "normalized": "",
        "package": "superdoc",
        "partial": "Copy From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:ExtraHtmlFiles",
      "description": {
        "fct-descr": "\u003cp\u003eAssume the images are already present in the directory where\n the Haddock documentation is being generated. This is useful if\n the images have been declared as \u003ccode\u003eextra-html-files\u003c/code\u003e in the\n \u003ccode\u003e.cabal\u003c/code\u003e file. They will then have been copied to their\n rightful location by Cabal. Superdoc will check that the\n required images are present.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "ExtraHtmlFiles",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageSource",
        "fct-type": "function",
        "title": "ExtraHtmlFiles"
      },
      "index": {
        "description": "Assume the images are already present in the directory where the Haddock documentation is being generated This is useful if the images have been declared as extra-html-files in the cabal file They will then have been copied to their rightful location by Cabal Superdoc will check that the required images are present",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "ExtraHtmlFiles",
        "normalized": "",
        "package": "superdoc",
        "partial": "Extra Html Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:FailOnMissing",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default setting. Cabal will fail with an error\n message if the documentation links to an image that does not\n exist or cannot be found.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "FailOnMissing",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
        "fct-type": "function",
        "title": "FailOnMissing"
      },
      "index": {
        "description": "This is the default setting Cabal will fail with an error message if the documentation links to an image that does not exist or cannot be found",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "FailOnMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Fail On Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:IgnoreMissing",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore missing image files. Superdoc will still generate HTML\n image tags, but will not fail if a corresponding image file\n does not exist.  This setting may be useful for testing, or to\n build documentation when the image files are incomplete or\n missing.  It is not recommended to use this setting for\n production purposes.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "IgnoreMissing",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#ImageMissing",
        "fct-type": "function",
        "title": "IgnoreMissing"
      },
      "index": {
        "description": "Ignore missing image files Superdoc will still generate HTML image tags but will not fail if corresponding image file does not exist This setting may be useful for testing or to build documentation when the image files are incomplete or missing It is not recommended to use this setting for production purposes",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "IgnoreMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Ignore Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:SuperdocArgs",
      "description": {
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "SuperdocArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "SuperdocArgs",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:bootstrap",
      "description": {
        "fct-descr": "\u003cp\u003eBootstrapping mode. Required to generate Superdoc's own\n documentation, because at that point, Superdoc is typically not\n yet installed. Other packages using Superdoc should not set this\n flag.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "Bool",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "bootstrap"
      },
      "index": {
        "description": "Bootstrapping mode Required to generate Superdoc own documentation because at that point Superdoc is typically not yet installed Other packages using Superdoc should not set this flag",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "bootstrap",
        "normalized": "",
        "package": "superdoc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:defaultSuperdocArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe default Superdoc parameters.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#defaultSuperdocArgs",
        "fct-type": "function",
        "title": "defaultSuperdocArgs"
      },
      "index": {
        "description": "The default Superdoc parameters",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "defaultSuperdocArgs",
        "normalized": "",
        "package": "superdoc",
        "partial": "Superdoc Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:imageMissing",
      "description": {
        "fct-descr": "\u003cp\u003eWhat to do about missing image files.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "ImageMissing",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "imageMissing"
      },
      "index": {
        "description": "What to do about missing image files",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "imageMissing",
        "normalized": "",
        "package": "superdoc",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:imageSource",
      "description": {
        "fct-descr": "\u003cp\u003eWhere to look for image files.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "ImageSource",
        "fct-source": "src/Distribution-Superdoc-Hooks.html#SuperdocArgs",
        "fct-type": "function",
        "title": "imageSource"
      },
      "index": {
        "description": "Where to look for image files",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "imageSource",
        "normalized": "",
        "package": "superdoc",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocHooks",
      "description": {
        "fct-descr": "\u003cp\u003eA predefined set of \u003ccode\u003e\u003ca\u003eUserHooks\u003c/a\u003e\u003c/code\u003e for package maintainers who need\n to use the \u003ccode\u003e\u003ca\u003edefaultMainWithHooks\u003c/a\u003e\u003c/code\u003e function from\n \u003ca\u003eDistribution.Simple\u003c/a\u003e. The following is equivalent to\n \u003ccode\u003e\u003ca\u003esuperdocMain\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple\n import Distribution.Superdoc\n main = defaultMainWithHooks superdocHooks\n\u003c/pre\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "UserHooks",
        "fct-source": "src/Distribution-Superdoc.html#superdocHooks",
        "fct-type": "function",
        "title": "superdocHooks"
      },
      "index": {
        "description": "predefined set of UserHooks for package maintainers who need to use the defaultMainWithHooks function from Distribution.Simple The following is equivalent to superdocMain import Distribution.Simple import Distribution.Superdoc main defaultMainWithHooks superdocHooks",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "superdocHooks",
        "normalized": "",
        "package": "superdoc",
        "partial": "Hooks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocHooksArgs",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esuperdocHooks\u003c/a\u003e\u003c/code\u003e, but also accept parameters in\n the form of a \u003ccode\u003e\u003ca\u003eSuperdocArgs\u003c/a\u003e\u003c/code\u003e argument. Typical use:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple\n import Distribution.Superdoc\n main = defaultMainWithHooks superdocHooksArgs { imageSource = CopyFrom \"imgdir\" }\n\u003c/pre\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs -\u003e UserHooks",
        "fct-source": "src/Distribution-Superdoc.html#superdocHooksArgs",
        "fct-type": "function",
        "title": "superdocHooksArgs"
      },
      "index": {
        "description": "Like superdocHooks but also accept parameters in the form of SuperdocArgs argument Typical use import Distribution.Simple import Distribution.Superdoc main defaultMainWithHooks superdocHooksArgs imageSource CopyFrom imgdir",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "superdocHooksArgs",
        "normalized": "SuperdocArgs-\u003eUserHooks",
        "package": "superdoc",
        "partial": "Hooks Args",
        "signature": "SuperdocArgs-\u003eUserHooks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocMain",
      "description": {
        "fct-descr": "\u003cp\u003eThe main function for a Cabal setup script. Use this instead of\n \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e in your \u003ccode\u003eSetup.hs\u003c/code\u003e to enable the Superdoc\n documentation features. Typical usage:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Superdoc\n main = superdocMain\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003eHow to use this package\u003c/a\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "IO ()",
        "fct-source": "src/Distribution-Superdoc.html#superdocMain",
        "fct-type": "function",
        "title": "superdocMain"
      },
      "index": {
        "description": "The main function for Cabal setup script Use this instead of defaultMain in your Setup.hs to enable the Superdoc documentation features Typical usage import Distribution.Superdoc main superdocMain See How to use this package for more information",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "superdocMain",
        "normalized": "IO()",
        "package": "superdoc",
        "partial": "Main",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/superdoc/docs/Distribution-Superdoc.html#v:superdocMainArgs",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esuperdocMain\u003c/a\u003e\u003c/code\u003e, but also accept parameters\n in the form of a \u003ccode\u003e\u003ca\u003eSuperdocArgs\u003c/a\u003e\u003c/code\u003e argument. Typical use:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Superdoc\n main = superdocMainWithArgs defaultSuperdocArgs { imageSource = CopyFrom \"imgdir\" }\n\u003c/pre\u003e",
        "fct-module": "Distribution.Superdoc",
        "fct-package": "superdoc",
        "fct-signature": "SuperdocArgs -\u003e IO ()",
        "fct-source": "src/Distribution-Superdoc.html#superdocMainArgs",
        "fct-type": "function",
        "title": "superdocMainArgs"
      },
      "index": {
        "description": "Like superdocMain but also accept parameters in the form of SuperdocArgs argument Typical use import Distribution.Superdoc main superdocMainWithArgs defaultSuperdocArgs imageSource CopyFrom imgdir",
        "hierarchy": "Distribution Superdoc",
        "module": "Distribution.Superdoc",
        "name": "superdocMainArgs",
        "normalized": "SuperdocArgs-\u003eIO()",
        "package": "superdoc",
        "partial": "Main Args",
        "signature": "SuperdocArgs-\u003eIO()"
      }
    }
  }
]