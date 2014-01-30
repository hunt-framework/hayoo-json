[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic consistency checker.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Static.Resources.Checker",
        "fct-package": "static-resources",
        "fct-signature": "module",
        "fct-source": "src/Static-Resources-Checker.html",
        "fct-type": "module",
        "title": "Checker"
      },
      "index": {
        "description": "Basic consistency checker",
        "hierarchy": "Static Resources Checker",
        "module": "Static.Resources.Checker",
        "name": "Checker",
        "normalized": "",
        "package": "static-resources",
        "partial": "Checker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms check. Left is error with some description.\n * Fails with css and js files avaible but not listed in spec.\n * Fails with css and js files that are in spec, but not avaible.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Checker",
        "fct-package": "static-resources",
        "fct-signature": "String -\u003e ResourceSpec -\u003e IO (Either String ())",
        "fct-source": "src/Static-Resources-Checker.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "Performs check Left is error with some description Fails with css and js files avaible but not listed in spec Fails with css and js files that are in spec but not avaible",
        "hierarchy": "Static Resources Checker",
        "module": "Static.Resources.Checker",
        "name": "check",
        "normalized": "String-\u003eResourceSpec-\u003eIO(Either String())",
        "package": "static-resources",
        "partial": "",
        "signature": "String-\u003eResourceSpec-\u003eIO(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#v:isStaticResourceFile",
      "description": {
        "fct-module": "Static.Resources.Checker",
        "fct-package": "static-resources",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Static-Resources-Checker.html#isStaticResourceFile",
        "fct-type": "function",
        "title": "isStaticResourceFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Checker",
        "module": "Static.Resources.Checker",
        "name": "isStaticResourceFile",
        "normalized": "String-\u003eBool",
        "package": "static-resources",
        "partial": "Static Resource File",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Generation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for generaing joined js and css files from spec\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Static.Resources.Generation",
        "fct-package": "static-resources",
        "fct-signature": "module",
        "fct-source": "src/Static-Resources-Generation.html",
        "fct-type": "module",
        "title": "Generation"
      },
      "index": {
        "description": "Module for generaing joined js and css files from spec",
        "hierarchy": "Static Resources Generation",
        "module": "Static.Resources.Generation",
        "name": "Generation",
        "normalized": "",
        "package": "static-resources",
        "partial": "Generation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Generation.html#v:generateResources",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate each set of resources.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Generation",
        "fct-package": "static-resources",
        "fct-signature": "ImportType -\u003e String -\u003e ResourceSpec -\u003e FilePath -\u003e IO ResourceSetsForImport",
        "fct-source": "src/Static-Resources-Generation.html#generateResources",
        "fct-type": "function",
        "title": "generateResources"
      },
      "index": {
        "description": "Generate each set of resources",
        "hierarchy": "Static Resources Generation",
        "module": "Static.Resources.Generation",
        "name": "generateResources",
        "normalized": "ImportType-\u003eString-\u003eResourceSpec-\u003eFilePath-\u003eIO ResourceSetsForImport",
        "package": "static-resources",
        "partial": "Resources",
        "signature": "ImportType-\u003eString-\u003eResourceSpec-\u003eFilePath-\u003eIO ResourceSetsForImport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerating list of imports to be embedded in html\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Static.Resources.Import",
        "fct-package": "static-resources",
        "fct-signature": "module",
        "fct-source": "src/Static-Resources-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Generating list of imports to be embedded in html",
        "hierarchy": "Static Resources Import",
        "module": "Static.Resources.Import",
        "name": "Import",
        "normalized": "",
        "package": "static-resources",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Import.html#v:htmlImportList",
      "description": {
        "fct-descr": "\u003cp\u003eGenerating import list for HTML resources\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Import",
        "fct-package": "static-resources",
        "fct-signature": "String -\u003e ResourceSetsForImport -\u003e String",
        "fct-source": "src/Static-Resources-Import.html#htmlImportList",
        "fct-type": "function",
        "title": "htmlImportList"
      },
      "index": {
        "description": "Generating import list for HTML resources",
        "hierarchy": "Static Resources Import",
        "module": "Static.Resources.Import",
        "name": "htmlImportList",
        "normalized": "String-\u003eResourceSetsForImport-\u003eString",
        "package": "static-resources",
        "partial": "Import List",
        "signature": "String-\u003eResourceSetsForImport-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Spec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing static resources spec.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Line starting with word set is start of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e definition.\n\u003c/li\u003e\u003cli\u003e Line starting css, js or jsx defines \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Line starting with ignore defines that some file should be ignored by checker.\n\u003c/li\u003e\u003cli\u003e ALL other lines are ignored\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSample spec\n\u003c/p\u003e\u003cpre\u003e ignore main.css\n\n set a\n   js  a.js \n   css a.css\n   css common.css\n\n set b\n   js  b.js    \n   css b.css\n   css common.css\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Static.Resources.Spec",
        "fct-package": "static-resources",
        "fct-signature": "module",
        "fct-source": "src/Static-Resources-Spec.html",
        "fct-type": "module",
        "title": "Spec"
      },
      "index": {
        "description": "Parsing static resources spec Line starting with word set is start of ResourceSet definition Line starting css js or jsx defines Resource Line starting with ignore defines that some file should be ignored by checker ALL other lines are ignored Sample spec ignore main.css set js a.js css a.css css common.css set js b.js css b.css css common.css",
        "hierarchy": "Static Resources Spec",
        "module": "Static.Resources.Spec",
        "name": "Spec",
        "normalized": "",
        "package": "static-resources",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Spec.html#v:parseSpec",
      "description": {
        "fct-module": "Static.Resources.Spec",
        "fct-package": "static-resources",
        "fct-signature": "FilePath -\u003e IO ResourceSpec",
        "fct-source": "src/Static-Resources-Spec.html#parseSpec",
        "fct-type": "function",
        "title": "parseSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Spec",
        "module": "Static.Resources.Spec",
        "name": "parseSpec",
        "normalized": "FilePath-\u003eIO ResourceSpec",
        "package": "static-resources",
        "partial": "Spec",
        "signature": "FilePath-\u003eIO ResourceSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll types used by this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "module",
        "fct-source": "src/Static-Resources-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "All types used by this module",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "Types",
        "normalized": "",
        "package": "static-resources",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ImportType",
      "description": {
        "fct-descr": "\u003cp\u003eWe can import resources for development (no joined, gziped or minified) or for production.               \n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ImportType",
        "fct-type": "data",
        "title": "ImportType"
      },
      "index": {
        "description": "We can import resources for development no joined gziped or minified or for production",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ImportType",
        "normalized": "",
        "package": "static-resources",
        "partial": "Import Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:Resource",
      "description": {
        "fct-descr": "\u003cp\u003eResource is a file with a type.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#Resource",
        "fct-type": "data",
        "title": "Resource"
      },
      "index": {
        "description": "Resource is file with type",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "Resource",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e is named list of resources.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceSet",
        "fct-type": "data",
        "title": "ResourceSet"
      },
      "index": {
        "description": "ResourceSet is named list of resources",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSet",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSetForImport",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e that is ready to be imported. It's all you need to generate import list for html.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetForImport",
        "fct-type": "data",
        "title": "ResourceSetForImport"
      },
      "index": {
        "description": "ResourceSet that is ready to be imported It all you need to generate import list for html",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSetForImport",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Set For Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSetsForImport",
      "description": {
        "fct-descr": "\u003cp\u003eSet of \u003ccode\u003e\u003ca\u003eResourceSetForImport\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "data",
        "title": "ResourceSetsForImport"
      },
      "index": {
        "description": "Set of ResourceSetForImport",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSetsForImport",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Sets For Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSpec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSpec\u003c/a\u003e\u003c/code\u003e is a list of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e and list of files or directories that can be ignored by \u003ccode\u003echeck\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceSpec",
        "fct-type": "data",
        "title": "ResourceSpec"
      },
      "index": {
        "description": "ResourceSpec is list of ResourceSet and list of files or directories that can be ignored by check function",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSpec",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceType",
      "description": {
        "fct-descr": "\u003cp\u003eAll resources have to be typed\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceType",
        "fct-type": "data",
        "title": "ResourceType"
      },
      "index": {
        "description": "All resources have to be typed",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceType",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:CSS",
      "description": {
        "fct-descr": "\u003cp\u003eCSS file\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "CSS",
        "fct-source": "src/Static-Resources-Types.html#ResourceType",
        "fct-type": "function",
        "title": "CSS"
      },
      "index": {
        "description": "CSS file",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "CSS",
        "normalized": "",
        "package": "static-resources",
        "partial": "CSS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Development",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "Development",
        "fct-source": "src/Static-Resources-Types.html#ImportType",
        "fct-type": "function",
        "title": "Development"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "Development",
        "normalized": "",
        "package": "static-resources",
        "partial": "Development",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:JS",
      "description": {
        "fct-descr": "\u003cp\u003eJavaScript file\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "JS",
        "fct-source": "src/Static-Resources-Types.html#ResourceType",
        "fct-type": "function",
        "title": "JS"
      },
      "index": {
        "description": "JavaScript file",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "JS",
        "normalized": "",
        "package": "static-resources",
        "partial": "JS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:JSX",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial JavaScript. System will not join this one with other scripts.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "JSX",
        "fct-source": "src/Static-Resources-Types.html#ResourceType",
        "fct-type": "function",
        "title": "JSX"
      },
      "index": {
        "description": "Special JavaScript System will not join this one with other scripts",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "JSX",
        "normalized": "",
        "package": "static-resources",
        "partial": "JSX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:LESS",
      "description": {
        "fct-descr": "\u003cp\u003eLESS support. See \u003ca\u003ehttp://lesscss.org/\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "LESS",
        "fct-source": "src/Static-Resources-Types.html#ResourceType",
        "fct-type": "function",
        "title": "LESS"
      },
      "index": {
        "description": "LESS support See http lesscss.org",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "LESS",
        "normalized": "",
        "package": "static-resources",
        "partial": "LESS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Production",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "Production",
        "fct-source": "src/Static-Resources-Types.html#ImportType",
        "fct-type": "function",
        "title": "Production"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "Production",
        "normalized": "",
        "package": "static-resources",
        "partial": "Production",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Resource",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "Resource",
        "fct-source": "src/Static-Resources-Types.html#Resource",
        "fct-type": "function",
        "title": "Resource"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "Resource",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSet",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "ResourceSet",
        "fct-source": "src/Static-Resources-Types.html#ResourceSet",
        "fct-type": "function",
        "title": "ResourceSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSet",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSetForImport",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "ResourceSetForImport",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetForImport",
        "fct-type": "function",
        "title": "ResourceSetForImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSetForImport",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Set For Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSetsForImport",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "ResourceSetsForImport",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "function",
        "title": "ResourceSetsForImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSetsForImport",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Sets For Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSpec",
      "description": {
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "ResourceSpec",
        "fct-source": "src/Static-Resources-Types.html#ResourceSpec",
        "fct-type": "function",
        "title": "ResourceSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ResourceSpec",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:_sets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "[ResourceSetForImport]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "function",
        "title": "_sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "_sets",
        "normalized": "[ResourceSetForImport]",
        "package": "static-resources",
        "partial": "",
        "signature": "[ResourceSetForImport]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:cssFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "![FilePath]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetForImport",
        "fct-type": "function",
        "title": "cssFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "cssFiles",
        "normalized": "[FilePath]",
        "package": "static-resources",
        "partial": "Files",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:filterByType",
      "description": {
        "fct-descr": "\u003cp\u003eUtils for getting specyfic parts of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "(ResourceType -\u003e Bool) -\u003e ResourceSet -\u003e [Resource]",
        "fct-source": "src/Static-Resources-Types.html#filterByType",
        "fct-type": "function",
        "title": "filterByType"
      },
      "index": {
        "description": "Utils for getting specyfic parts of ResourceSet",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "filterByType",
        "normalized": "(ResourceType-\u003eBool)-\u003eResourceSet-\u003e[Resource]",
        "package": "static-resources",
        "partial": "By Type",
        "signature": "(ResourceType-\u003eBool)-\u003eResourceSet-\u003e[Resource]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:generationTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "UTCTime",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "function",
        "title": "generationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "generationTime",
        "normalized": "",
        "package": "static-resources",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ignored",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "![FilePath]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSpec",
        "fct-type": "function",
        "title": "ignored"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "ignored",
        "normalized": "[FilePath]",
        "package": "static-resources",
        "partial": "",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:jsFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "![FilePath]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetForImport",
        "fct-type": "function",
        "title": "jsFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "jsFiles",
        "normalized": "[FilePath]",
        "package": "static-resources",
        "partial": "Files",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:lessFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "![FilePath]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetForImport",
        "fct-type": "function",
        "title": "lessFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "lessFiles",
        "normalized": "[FilePath]",
        "package": "static-resources",
        "partial": "Files",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "!String",
        "fct-source": "src/Static-Resources-Types.html#ResourceSet",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "name",
        "normalized": "",
        "package": "static-resources",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "!FilePath",
        "fct-source": "src/Static-Resources-Types.html#Resource",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "path",
        "normalized": "",
        "package": "static-resources",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:resources",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "![Resource]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSet",
        "fct-type": "function",
        "title": "resources"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "resources",
        "normalized": "[Resource]",
        "package": "static-resources",
        "partial": "",
        "signature": "[Resource]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:rtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "!ResourceType",
        "fct-source": "src/Static-Resources-Types.html#Resource",
        "fct-type": "function",
        "title": "rtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "rtype",
        "normalized": "",
        "package": "static-resources",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:set",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "!ResourceSet",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetForImport",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "set",
        "normalized": "",
        "package": "static-resources",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:sets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources.Types",
        "fct-package": "static-resources",
        "fct-signature": "![ResourceSet]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSpec",
        "fct-type": "function",
        "title": "sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources Types",
        "module": "Static.Resources.Types",
        "name": "sets",
        "normalized": "[ResourceSet]",
        "package": "static-resources",
        "partial": "",
        "signature": "[ResourceSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePut resources.spec into your public HTTP directory. List there your\n css, less and js files. Devide them over some sets.\n\u003c/p\u003e\u003cp\u003eSample resources.spec:\n\u003c/p\u003e\u003cpre\u003e set mainPage\n  css mainPage.css\n  js  mainPage.js\n  js  jQuery.js\n\u003c/pre\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e do\n rs \u003c- getResourceSetsForImport Development \"public/resources.js\" \"\"\n return \"\u003chtml\u003e\u003chead\u003e\"++(htmlImportList \"mainPage\" rs)++\"\u003c/head\u003e\u003cbody/\u003e\u003c/html\u003e\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "module",
        "fct-source": "src/Static-Resources.html",
        "fct-type": "module",
        "title": "Resources"
      },
      "index": {
        "description": "Put resources.spec into your public HTTP directory List there your css less and js files Devide them over some sets Sample resources.spec set mainPage css mainPage.css js mainPage.js js jQuery.js Usage do rs getResourceSetsForImport Development public resources.js return html head htmlImportList mainPage rs head body html",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "Resources",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#t:ImportType",
      "description": {
        "fct-descr": "\u003cp\u003eWe can import resources for development (no joined, gziped or minified) or for production.               \n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ImportType",
        "fct-type": "data",
        "title": "ImportType"
      },
      "index": {
        "description": "We can import resources for development no joined gziped or minified or for production",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "ImportType",
        "normalized": "",
        "package": "static-resources",
        "partial": "Import Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#t:ResourceSetsForImport",
      "description": {
        "fct-descr": "\u003cp\u003eSet of \u003ccode\u003e\u003ca\u003eResourceSetForImport\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "data",
        "title": "ResourceSetsForImport"
      },
      "index": {
        "description": "Set of ResourceSetForImport",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "ResourceSetsForImport",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Sets For Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#t:ResourceSpec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSpec\u003c/a\u003e\u003c/code\u003e is a list of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e and list of files or directories that can be ignored by \u003ccode\u003echeck\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "data",
        "fct-source": "src/Static-Resources-Types.html#ResourceSpec",
        "fct-type": "data",
        "title": "ResourceSpec"
      },
      "index": {
        "description": "ResourceSpec is list of ResourceSet and list of files or directories that can be ignored by check function",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "ResourceSpec",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:Development",
      "description": {
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "Development",
        "fct-source": "src/Static-Resources-Types.html#ImportType",
        "fct-type": "function",
        "title": "Development"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "Development",
        "normalized": "",
        "package": "static-resources",
        "partial": "Development",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:Production",
      "description": {
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "Production",
        "fct-source": "src/Static-Resources-Types.html#ImportType",
        "fct-type": "function",
        "title": "Production"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "Production",
        "normalized": "",
        "package": "static-resources",
        "partial": "Production",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:ResourceSetsForImport",
      "description": {
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "ResourceSetsForImport",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "function",
        "title": "ResourceSetsForImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "ResourceSetsForImport",
        "normalized": "",
        "package": "static-resources",
        "partial": "Resource Sets For Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:_sets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "[ResourceSetForImport]",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "function",
        "title": "_sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "_sets",
        "normalized": "[ResourceSetForImport]",
        "package": "static-resources",
        "partial": "",
        "signature": "[ResourceSetForImport]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms check. Left is error with some description.\n * Fails with css and js files avaible but not listed in spec.\n * Fails with css and js files that are in spec, but not avaible.\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "String -\u003e ResourceSpec -\u003e IO (Either String ())",
        "fct-source": "src/Static-Resources-Checker.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "Performs check Left is error with some description Fails with css and js files avaible but not listed in spec Fails with css and js files that are in spec but not avaible",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "check",
        "normalized": "String-\u003eResourceSpec-\u003eIO(Either String())",
        "package": "static-resources",
        "partial": "",
        "signature": "String-\u003eResourceSpec-\u003eIO(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:cleanResourceFiles",
      "description": {
        "fct-descr": "\u003cp\u003eCleans all files that could be created by this system based on\n spec. It requires current directory to be in specification file\n directory\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "String -\u003e ResourceSpec -\u003e IO ()",
        "fct-source": "src/Static-Resources.html#cleanResourceFiles",
        "fct-type": "function",
        "title": "cleanResourceFiles"
      },
      "index": {
        "description": "Cleans all files that could be created by this system based on spec It requires current directory to be in specification file directory",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "cleanResourceFiles",
        "normalized": "String-\u003eResourceSpec-\u003eIO()",
        "package": "static-resources",
        "partial": "Resource Files",
        "signature": "String-\u003eResourceSpec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:generateResources",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate each set of resources.\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "ImportType -\u003e String -\u003e ResourceSpec -\u003e FilePath -\u003e IO ResourceSetsForImport",
        "fct-source": "src/Static-Resources-Generation.html#generateResources",
        "fct-type": "function",
        "title": "generateResources"
      },
      "index": {
        "description": "Generate each set of resources",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "generateResources",
        "normalized": "ImportType-\u003eString-\u003eResourceSpec-\u003eFilePath-\u003eIO ResourceSetsForImport",
        "package": "static-resources",
        "partial": "Resources",
        "signature": "ImportType-\u003eString-\u003eResourceSpec-\u003eFilePath-\u003eIO ResourceSetsForImport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:generationTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "UTCTime",
        "fct-source": "src/Static-Resources-Types.html#ResourceSetsForImport",
        "fct-type": "function",
        "title": "generationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "generationTime",
        "normalized": "",
        "package": "static-resources",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:getResourceSetsForImport",
      "description": {
        "fct-descr": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eResourceSetsForImport\u003c/a\u003e\u003c/code\u003e ready. It will generate aggregated\n   css and js files if needed.  It will change directory to one of\n   spec file. Aggregated files will be placed there.\n   Will change back to original dir when done.\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "ImportType-\u003e FilePath-\u003e FilePath-\u003e IO (Either String ResourceSetsForImport)",
        "fct-type": "function",
        "title": "getResourceSetsForImport"
      },
      "index": {
        "description": "Make ResourceSetsForImport ready It will generate aggregated css and js files if needed It will change directory to one of spec file Aggregated files will be placed there Will change back to original dir when done",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "getResourceSetsForImport",
        "normalized": "ImportType-\u003eFilePath-\u003eFilePath-\u003eIO(Either String ResourceSetsForImport)",
        "package": "static-resources",
        "partial": "Resource Sets For Import",
        "signature": "ImportType-\u003eFilePath-\u003eFilePath-\u003eIO(Either String ResourceSetsForImport)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:htmlImportList",
      "description": {
        "fct-descr": "\u003cp\u003eGenerating import list for HTML resources\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "String -\u003e ResourceSetsForImport -\u003e String",
        "fct-source": "src/Static-Resources-Import.html#htmlImportList",
        "fct-type": "function",
        "title": "htmlImportList"
      },
      "index": {
        "description": "Generating import list for HTML resources",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "htmlImportList",
        "normalized": "String-\u003eResourceSetsForImport-\u003eString",
        "package": "static-resources",
        "partial": "Import List",
        "signature": "String-\u003eResourceSetsForImport-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:parseSpec",
      "description": {
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "FilePath -\u003e IO ResourceSpec",
        "fct-source": "src/Static-Resources-Spec.html#parseSpec",
        "fct-type": "function",
        "title": "parseSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "parseSpec",
        "normalized": "FilePath-\u003eIO ResourceSpec",
        "package": "static-resources",
        "partial": "Spec",
        "signature": "FilePath-\u003eIO ResourceSpec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:resourcesMTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime when last resource file was changed. Param is configuration file location (same that was used for generation).\n This time can be compared to \u003ccode\u003e\u003ca\u003egenerationTime\u003c/a\u003e\u003c/code\u003e of  \u003ccode\u003e\u003ca\u003eResourceSetsForImport\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Static.Resources",
        "fct-package": "static-resources",
        "fct-signature": "FilePath -\u003e IO UTCTime",
        "fct-source": "src/Static-Resources.html#resourcesMTime",
        "fct-type": "function",
        "title": "resourcesMTime"
      },
      "index": {
        "description": "Time when last resource file was changed Param is configuration file location same that was used for generation This time can be compared to generationTime of ResourceSetsForImport",
        "hierarchy": "Static Resources",
        "module": "Static.Resources",
        "name": "resourcesMTime",
        "normalized": "FilePath-\u003eIO UTCTime",
        "package": "static-resources",
        "partial": "MTime",
        "signature": "FilePath-\u003eIO UTCTime"
      }
    }
  }
]