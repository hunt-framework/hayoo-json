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
        "word": "static-resources"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic consistency checker.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Static.Resources.Checker",
          "name": "Checker",
          "package": "static-resources",
          "source": "src/Static-Resources-Checker.html",
          "type": "module"
        },
        "index": {
          "description": "Basic consistency checker",
          "hierarchy": "Static Resources Checker",
          "module": "Static.Resources.Checker",
          "name": "Checker",
          "package": "static-resources",
          "partial": "Checker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms check. Left is error with some description.\n * Fails with css and js files avaible but not listed in spec.\n * Fails with css and js files that are in spec, but not avaible.\n\u003c/p\u003e",
          "module": "[\"Static.Resources.Checker\",\"Static.Resources\"]",
          "name": "check",
          "package": "static-resources",
          "signature": "String -\u003e ResourceSpec -\u003e IO (Either String ())",
          "source": "src/Static-Resources-Checker.html#check",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#v:check\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:check\"]"
        },
        "index": {
          "description": "Performs check Left is error with some description Fails with css and js files avaible but not listed in spec Fails with css and js files that are in spec but not avaible",
          "hierarchy": "Static Resources Checker",
          "module": "Static.Resources.Checker",
          "name": "check",
          "normalized": "String-\u003eResourceSpec-\u003eIO(Either String())",
          "package": "static-resources",
          "signature": "String-\u003eResourceSpec-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Checker",
          "name": "isStaticResourceFile",
          "package": "static-resources",
          "signature": "String -\u003e Bool",
          "source": "src/Static-Resources-Checker.html#isStaticResourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Checker",
          "module": "Static.Resources.Checker",
          "name": "isStaticResourceFile",
          "normalized": "String-\u003eBool",
          "package": "static-resources",
          "partial": "Static Resource File",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Checker.html#v:isStaticResourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for generaing joined js and css files from spec\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Static.Resources.Generation",
          "name": "Generation",
          "package": "static-resources",
          "source": "src/Static-Resources-Generation.html",
          "type": "module"
        },
        "index": {
          "description": "Module for generaing joined js and css files from spec",
          "hierarchy": "Static Resources Generation",
          "module": "Static.Resources.Generation",
          "name": "Generation",
          "package": "static-resources",
          "partial": "Generation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Generation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate each set of resources.\n\u003c/p\u003e",
          "module": "[\"Static.Resources.Generation\",\"Static.Resources\"]",
          "name": "generateResources",
          "package": "static-resources",
          "signature": "ImportType -\u003e String -\u003e ResourceSpec -\u003e FilePath -\u003e IO ResourceSetsForImport",
          "source": "src/Static-Resources-Generation.html#generateResources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Generation.html#v:generateResources\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:generateResources\"]"
        },
        "index": {
          "description": "Generate each set of resources",
          "hierarchy": "Static Resources Generation",
          "module": "Static.Resources.Generation",
          "name": "generateResources",
          "normalized": "ImportType-\u003eString-\u003eResourceSpec-\u003eFilePath-\u003eIO ResourceSetsForImport",
          "package": "static-resources",
          "partial": "Resources",
          "signature": "ImportType-\u003eString-\u003eResourceSpec-\u003eFilePath-\u003eIO ResourceSetsForImport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Generation.html#v:generateResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerating list of imports to be embedded in html\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Static.Resources.Import",
          "name": "Import",
          "package": "static-resources",
          "source": "src/Static-Resources-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Generating list of imports to be embedded in html",
          "hierarchy": "Static Resources Import",
          "module": "Static.Resources.Import",
          "name": "Import",
          "package": "static-resources",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerating import list for HTML resources\n\u003c/p\u003e",
          "module": "[\"Static.Resources.Import\",\"Static.Resources\"]",
          "name": "htmlImportList",
          "package": "static-resources",
          "signature": "String -\u003e ResourceSetsForImport -\u003e String",
          "source": "src/Static-Resources-Import.html#htmlImportList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Import.html#v:htmlImportList\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:htmlImportList\"]"
        },
        "index": {
          "description": "Generating import list for HTML resources",
          "hierarchy": "Static Resources Import",
          "module": "Static.Resources.Import",
          "name": "htmlImportList",
          "normalized": "String-\u003eResourceSetsForImport-\u003eString",
          "package": "static-resources",
          "partial": "Import List",
          "signature": "String-\u003eResourceSetsForImport-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Import.html#v:htmlImportList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing static resources spec.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Line starting with word set is start of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e definition.\n\u003c/li\u003e\u003cli\u003e Line starting css, js or jsx defines \u003ccode\u003e\u003ca\u003eResource\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Line starting with ignore defines that some file should be ignored by checker.\n\u003c/li\u003e\u003cli\u003e ALL other lines are ignored\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSample spec\n\u003c/p\u003e\u003cpre\u003e ignore main.css\n\n set a\n   js  a.js \n   css a.css\n   css common.css\n\n set b\n   js  b.js    \n   css b.css\n   css common.css\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Static.Resources.Spec",
          "name": "Spec",
          "package": "static-resources",
          "source": "src/Static-Resources-Spec.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing static resources spec Line starting with word set is start of ResourceSet definition Line starting css js or jsx defines Resource Line starting with ignore defines that some file should be ignored by checker ALL other lines are ignored Sample spec ignore main.css set js a.js css a.css css common.css set js b.js css b.css css common.css",
          "hierarchy": "Static Resources Spec",
          "module": "Static.Resources.Spec",
          "name": "Spec",
          "package": "static-resources",
          "partial": "Spec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Spec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Static.Resources.Spec\",\"Static.Resources\"]",
          "name": "parseSpec",
          "package": "static-resources",
          "signature": "FilePath -\u003e IO ResourceSpec",
          "source": "src/Static-Resources-Spec.html#parseSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Spec.html#v:parseSpec\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:parseSpec\"]"
        },
        "index": {
          "hierarchy": "Static Resources Spec",
          "module": "Static.Resources.Spec",
          "name": "parseSpec",
          "normalized": "FilePath-\u003eIO ResourceSpec",
          "package": "static-resources",
          "partial": "Spec",
          "signature": "FilePath-\u003eIO ResourceSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Spec.html#v:parseSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll types used by this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Static.Resources.Types",
          "name": "Types",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html",
          "type": "module"
        },
        "index": {
          "description": "All types used by this module",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "Types",
          "package": "static-resources",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can import resources for development (no joined, gziped or minified) or for production.               \n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "ImportType",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ImportType",
          "type": "data"
        },
        "index": {
          "description": "We can import resources for development no joined gziped or minified or for production",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ImportType",
          "package": "static-resources",
          "partial": "Import Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ImportType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResource is a file with a type.\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "Resource",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#Resource",
          "type": "data"
        },
        "index": {
          "description": "Resource is file with type",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "Resource",
          "package": "static-resources",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e is named list of resources.\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "ResourceSet",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceSet",
          "type": "data"
        },
        "index": {
          "description": "ResourceSet is named list of resources",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSet",
          "package": "static-resources",
          "partial": "Resource Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e that is ready to be imported. It's all you need to generate import list for html.\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "ResourceSetForImport",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceSetForImport",
          "type": "data"
        },
        "index": {
          "description": "ResourceSet that is ready to be imported It all you need to generate import list for html",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSetForImport",
          "package": "static-resources",
          "partial": "Resource Set For Import",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSetForImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of \u003ccode\u003e\u003ca\u003eResourceSetForImport\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "ResourceSetsForImport",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceSetsForImport",
          "type": "data"
        },
        "index": {
          "description": "Set of ResourceSetForImport",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSetsForImport",
          "package": "static-resources",
          "partial": "Resource Sets For Import",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSetsForImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSpec\u003c/a\u003e\u003c/code\u003e is a list of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e and list of files or directories that can be ignored by \u003ccode\u003echeck\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "ResourceSpec",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceSpec",
          "type": "data"
        },
        "index": {
          "description": "ResourceSpec is list of ResourceSet and list of files or directories that can be ignored by check function",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSpec",
          "package": "static-resources",
          "partial": "Resource Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll resources have to be typed\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "ResourceType",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceType",
          "type": "data"
        },
        "index": {
          "description": "All resources have to be typed",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceType",
          "package": "static-resources",
          "partial": "Resource Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#t:ResourceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSS file\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "CSS",
          "package": "static-resources",
          "signature": "CSS",
          "source": "src/Static-Resources-Types.html#ResourceType",
          "type": "function"
        },
        "index": {
          "description": "CSS file",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "CSS",
          "package": "static-resources",
          "partial": "CSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:CSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Static.Resources.Types\",\"Static.Resources\"]",
          "name": "Development",
          "package": "static-resources",
          "signature": "Development",
          "source": "src/Static-Resources-Types.html#ImportType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Development\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:Development\"]"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "Development",
          "package": "static-resources",
          "partial": "Development",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Development"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavaScript file\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "JS",
          "package": "static-resources",
          "signature": "JS",
          "source": "src/Static-Resources-Types.html#ResourceType",
          "type": "function"
        },
        "index": {
          "description": "JavaScript file",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "JS",
          "package": "static-resources",
          "partial": "JS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:JS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial JavaScript. System will not join this one with other scripts.\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "JSX",
          "package": "static-resources",
          "signature": "JSX",
          "source": "src/Static-Resources-Types.html#ResourceType",
          "type": "function"
        },
        "index": {
          "description": "Special JavaScript System will not join this one with other scripts",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "JSX",
          "package": "static-resources",
          "partial": "JSX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:JSX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLESS support. See \u003ca\u003ehttp://lesscss.org/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "LESS",
          "package": "static-resources",
          "signature": "LESS",
          "source": "src/Static-Resources-Types.html#ResourceType",
          "type": "function"
        },
        "index": {
          "description": "LESS support See http lesscss.org",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "LESS",
          "package": "static-resources",
          "partial": "LESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:LESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Static.Resources.Types\",\"Static.Resources\"]",
          "name": "Production",
          "package": "static-resources",
          "signature": "Production",
          "source": "src/Static-Resources-Types.html#ImportType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Production\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:Production\"]"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "Production",
          "package": "static-resources",
          "partial": "Production",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Production"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "Resource",
          "package": "static-resources",
          "signature": "Resource",
          "source": "src/Static-Resources-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "Resource",
          "package": "static-resources",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "ResourceSet",
          "package": "static-resources",
          "signature": "ResourceSet",
          "source": "src/Static-Resources-Types.html#ResourceSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSet",
          "package": "static-resources",
          "partial": "Resource Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "ResourceSetForImport",
          "package": "static-resources",
          "signature": "ResourceSetForImport",
          "source": "src/Static-Resources-Types.html#ResourceSetForImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSetForImport",
          "package": "static-resources",
          "partial": "Resource Set For Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSetForImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Static.Resources.Types\",\"Static.Resources\"]",
          "name": "ResourceSetsForImport",
          "package": "static-resources",
          "signature": "ResourceSetsForImport",
          "source": "src/Static-Resources-Types.html#ResourceSetsForImport",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSetsForImport\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:ResourceSetsForImport\"]"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSetsForImport",
          "package": "static-resources",
          "partial": "Resource Sets For Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSetsForImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "ResourceSpec",
          "package": "static-resources",
          "signature": "ResourceSpec",
          "source": "src/Static-Resources-Types.html#ResourceSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ResourceSpec",
          "package": "static-resources",
          "partial": "Resource Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ResourceSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Static.Resources.Types\",\"Static.Resources\"]",
          "name": "_sets",
          "package": "static-resources",
          "signature": "[ResourceSetForImport]",
          "source": "src/Static-Resources-Types.html#ResourceSetsForImport",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:_sets\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:_sets\"]"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "_sets",
          "normalized": "[ResourceSetForImport]",
          "package": "static-resources",
          "signature": "[ResourceSetForImport]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:_sets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "cssFiles",
          "package": "static-resources",
          "signature": "[FilePath]",
          "source": "src/Static-Resources-Types.html#ResourceSetForImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "cssFiles",
          "normalized": "[FilePath]",
          "package": "static-resources",
          "partial": "Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:cssFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtils for getting specyfic parts of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Static.Resources.Types",
          "name": "filterByType",
          "package": "static-resources",
          "signature": "(ResourceType -\u003e Bool) -\u003e ResourceSet -\u003e [Resource]",
          "source": "src/Static-Resources-Types.html#filterByType",
          "type": "function"
        },
        "index": {
          "description": "Utils for getting specyfic parts of ResourceSet",
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "filterByType",
          "normalized": "(ResourceType-\u003eBool)-\u003eResourceSet-\u003e[Resource]",
          "package": "static-resources",
          "partial": "By Type",
          "signature": "(ResourceType-\u003eBool)-\u003eResourceSet-\u003e[Resource]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:filterByType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Static.Resources.Types\",\"Static.Resources\"]",
          "name": "generationTime",
          "package": "static-resources",
          "signature": "UTCTime",
          "source": "src/Static-Resources-Types.html#ResourceSetsForImport",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:generationTime\",\"http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:generationTime\"]"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "generationTime",
          "package": "static-resources",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:generationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "ignored",
          "package": "static-resources",
          "signature": "[FilePath]",
          "source": "src/Static-Resources-Types.html#ResourceSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "ignored",
          "normalized": "[FilePath]",
          "package": "static-resources",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:ignored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "jsFiles",
          "package": "static-resources",
          "signature": "[FilePath]",
          "source": "src/Static-Resources-Types.html#ResourceSetForImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "jsFiles",
          "normalized": "[FilePath]",
          "package": "static-resources",
          "partial": "Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:jsFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "lessFiles",
          "package": "static-resources",
          "signature": "[FilePath]",
          "source": "src/Static-Resources-Types.html#ResourceSetForImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "lessFiles",
          "normalized": "[FilePath]",
          "package": "static-resources",
          "partial": "Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:lessFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "name",
          "package": "static-resources",
          "signature": "String",
          "source": "src/Static-Resources-Types.html#ResourceSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "name",
          "package": "static-resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "path",
          "package": "static-resources",
          "signature": "FilePath",
          "source": "src/Static-Resources-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "path",
          "package": "static-resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "resources",
          "package": "static-resources",
          "signature": "[Resource]",
          "source": "src/Static-Resources-Types.html#ResourceSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "resources",
          "normalized": "[Resource]",
          "package": "static-resources",
          "signature": "[Resource]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "rtype",
          "package": "static-resources",
          "signature": "ResourceType",
          "source": "src/Static-Resources-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "rtype",
          "package": "static-resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:rtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "set",
          "package": "static-resources",
          "signature": "ResourceSet",
          "source": "src/Static-Resources-Types.html#ResourceSetForImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "set",
          "package": "static-resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Static.Resources.Types",
          "name": "sets",
          "package": "static-resources",
          "signature": "[ResourceSet]",
          "source": "src/Static-Resources-Types.html#ResourceSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Static Resources Types",
          "module": "Static.Resources.Types",
          "name": "sets",
          "normalized": "[ResourceSet]",
          "package": "static-resources",
          "signature": "[ResourceSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources-Types.html#v:sets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePut resources.spec into your public HTTP directory. List there your\n css, less and js files. Devide them over some sets.\n\u003c/p\u003e\u003cp\u003eSample resources.spec:\n\u003c/p\u003e\u003cpre\u003e set mainPage\n  css mainPage.css\n  js  mainPage.js\n  js  jQuery.js\n\u003c/pre\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e do\n rs \u003c- getResourceSetsForImport Development \"public/resources.js\" \"\"\n return \"\u003chtml\u003e\u003chead\u003e\"++(htmlImportList \"mainPage\" rs)++\"\u003c/head\u003e\u003cbody/\u003e\u003c/html\u003e\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Static.Resources",
          "name": "Resources",
          "package": "static-resources",
          "source": "src/Static-Resources.html",
          "type": "module"
        },
        "index": {
          "description": "Put resources.spec into your public HTTP directory List there your css less and js files Devide them over some sets Sample resources.spec set mainPage css mainPage.css js mainPage.js js jQuery.js Usage do rs getResourceSetsForImport Development public resources.js return html head htmlImportList mainPage rs head body html",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "Resources",
          "package": "static-resources",
          "partial": "Resources",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can import resources for development (no joined, gziped or minified) or for production.               \n\u003c/p\u003e",
          "module": "Static.Resources",
          "name": "ImportType",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ImportType",
          "type": "data"
        },
        "index": {
          "description": "We can import resources for development no joined gziped or minified or for production",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "ImportType",
          "package": "static-resources",
          "partial": "Import Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#t:ImportType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of \u003ccode\u003e\u003ca\u003eResourceSetForImport\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Static.Resources",
          "name": "ResourceSetsForImport",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceSetsForImport",
          "type": "data"
        },
        "index": {
          "description": "Set of ResourceSetForImport",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "ResourceSetsForImport",
          "package": "static-resources",
          "partial": "Resource Sets For Import",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#t:ResourceSetsForImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResourceSpec\u003c/a\u003e\u003c/code\u003e is a list of \u003ccode\u003e\u003ca\u003eResourceSet\u003c/a\u003e\u003c/code\u003e and list of files or directories that can be ignored by \u003ccode\u003echeck\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Static.Resources",
          "name": "ResourceSpec",
          "package": "static-resources",
          "source": "src/Static-Resources-Types.html#ResourceSpec",
          "type": "data"
        },
        "index": {
          "description": "ResourceSpec is list of ResourceSet and list of files or directories that can be ignored by check function",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "ResourceSpec",
          "package": "static-resources",
          "partial": "Resource Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#t:ResourceSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCleans all files that could be created by this system based on\n spec. It requires current directory to be in specification file\n directory\n\u003c/p\u003e",
          "module": "Static.Resources",
          "name": "cleanResourceFiles",
          "package": "static-resources",
          "signature": "String -\u003e ResourceSpec -\u003e IO ()",
          "source": "src/Static-Resources.html#cleanResourceFiles",
          "type": "function"
        },
        "index": {
          "description": "Cleans all files that could be created by this system based on spec It requires current directory to be in specification file directory",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "cleanResourceFiles",
          "normalized": "String-\u003eResourceSpec-\u003eIO()",
          "package": "static-resources",
          "partial": "Resource Files",
          "signature": "String-\u003eResourceSpec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:cleanResourceFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eResourceSetsForImport\u003c/a\u003e\u003c/code\u003e ready. It will generate aggregated\n   css and js files if needed.  It will change directory to one of\n   spec file. Aggregated files will be placed there.\n   Will change back to original dir when done.\n\u003c/p\u003e",
          "module": "Static.Resources",
          "name": "getResourceSetsForImport",
          "package": "static-resources",
          "signature": "ImportType-\u003e FilePath-\u003e FilePath-\u003e IO (Either String ResourceSetsForImport)",
          "type": "function"
        },
        "index": {
          "description": "Make ResourceSetsForImport ready It will generate aggregated css and js files if needed It will change directory to one of spec file Aggregated files will be placed there Will change back to original dir when done",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "getResourceSetsForImport",
          "normalized": "ImportType-\u003eFilePath-\u003eFilePath-\u003eIO(Either String ResourceSetsForImport)",
          "package": "static-resources",
          "partial": "Resource Sets For Import",
          "signature": "ImportType-\u003eFilePath-\u003eFilePath-\u003eIO(Either String ResourceSetsForImport)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:getResourceSetsForImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime when last resource file was changed. Param is configuration file location (same that was used for generation).\n This time can be compared to \u003ccode\u003e\u003ca\u003egenerationTime\u003c/a\u003e\u003c/code\u003e of  \u003ccode\u003e\u003ca\u003eResourceSetsForImport\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Static.Resources",
          "name": "resourcesMTime",
          "package": "static-resources",
          "signature": "FilePath -\u003e IO UTCTime",
          "source": "src/Static-Resources.html#resourcesMTime",
          "type": "function"
        },
        "index": {
          "description": "Time when last resource file was changed Param is configuration file location same that was used for generation This time can be compared to generationTime of ResourceSetsForImport",
          "hierarchy": "Static Resources",
          "module": "Static.Resources",
          "name": "resourcesMTime",
          "normalized": "FilePath-\u003eIO UTCTime",
          "package": "static-resources",
          "partial": "MTime",
          "signature": "FilePath-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/static-resources/docs/Static-Resources.html#v:resourcesMTime"
      }
    }
  ]
]