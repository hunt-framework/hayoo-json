[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#",
      "description": {
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html",
        "fct-type": "module",
        "title": "AnnotatePrims"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "AnnotatePrims",
        "normalized": "",
        "package": "ycextra",
        "partial": "Annotate Prims",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#t:CoreStrictness",
      "description": {
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "newtype",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#CoreStrictness",
        "fct-type": "newtype",
        "title": "CoreStrictness"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "CoreStrictness",
        "normalized": "",
        "package": "ycextra",
        "partial": "Core Strictness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#t:CoreTypeSig",
      "description": {
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "newtype",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#CoreTypeSig",
        "fct-type": "newtype",
        "title": "CoreTypeSig"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "CoreTypeSig",
        "normalized": "",
        "package": "ycextra",
        "partial": "Core Type Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:CoreStrictness",
      "description": {
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "CoreStrictness [Bool]",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#CoreStrictness",
        "fct-type": "function",
        "title": "CoreStrictness"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "CoreStrictness",
        "normalized": "CoreStrictness[Bool]",
        "package": "ycextra",
        "partial": "Core Strictness",
        "signature": "CoreStrictness[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:CoreTypeSig",
      "description": {
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "CoreTypeSig String",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#CoreTypeSig",
        "fct-type": "function",
        "title": "CoreTypeSig"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "CoreTypeSig",
        "normalized": "",
        "package": "ycextra",
        "partial": "Core Type Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:buildNormPrimAnno",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the linked Core, build annotations for all normal primitives\n that is, belonging to the \u003ccode\u003e\u003ca\u003enormPrimSpecMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "Core -\u003e CoreAnnotations",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#buildNormPrimAnno",
        "fct-type": "function",
        "title": "buildNormPrimAnno"
      },
      "index": {
        "description": "Given the linked Core build annotations for all normal primitives that is belonging to the normPrimSpecMap",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "buildNormPrimAnno",
        "normalized": "Core-\u003eCoreAnnotations",
        "package": "ycextra",
        "partial": "Norm Prim Anno",
        "signature": "Core-\u003eCoreAnnotations"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:buildPrimAnno",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the linked Core, build annotations for all primitives defined\n that belong to the given set of primitives, that is, their names\n are member keys of the given primitives specification map.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "Map String [String] -\u003e Core -\u003e CoreAnnotations",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#buildPrimAnno",
        "fct-type": "function",
        "title": "buildPrimAnno"
      },
      "index": {
        "description": "Given the linked Core build annotations for all primitives defined that belong to the given set of primitives that is their names are member keys of the given primitives specification map",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "buildPrimAnno",
        "normalized": "Map String[String]-\u003eCore-\u003eCoreAnnotations",
        "package": "ycextra",
        "partial": "Prim Anno",
        "signature": "Map String[String]-\u003eCore-\u003eCoreAnnotations"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:buildPrimSpecMap",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a map of primitive specifications given the list of\n primitive description records. This as well may be used by frontends.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "[[String]] -\u003e Map String [String]",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#buildPrimSpecMap",
        "fct-type": "function",
        "title": "buildPrimSpecMap"
      },
      "index": {
        "description": "Build map of primitive specifications given the list of primitive description records This as well may be used by frontends",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "buildPrimSpecMap",
        "normalized": "[[String]]-\u003eMap String[String]",
        "package": "ycextra",
        "partial": "Prim Spec Map",
        "signature": "[[String]]-\u003eMap String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:normPrimSpecMap",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifications map of normal primitives\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.AnnotatePrims",
        "fct-package": "ycextra",
        "fct-signature": "Map String [String]",
        "fct-source": "src/Yhc-Core-AnnotatePrims.html#normPrimSpecMap",
        "fct-type": "function",
        "title": "normPrimSpecMap"
      },
      "index": {
        "description": "Specifications map of normal primitives",
        "hierarchy": "Yhc Core AnnotatePrims",
        "module": "Yhc.Core.AnnotatePrims",
        "name": "normPrimSpecMap",
        "normalized": "Map String[String]",
        "package": "ycextra",
        "partial": "Prim Spec Map",
        "signature": "Map String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#",
      "description": {
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Annotation.html",
        "fct-type": "module",
        "title": "Annotation"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "Annotation",
        "normalized": "",
        "package": "ycextra",
        "partial": "Annotation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#t:CoreAnnotable",
      "description": {
        "fct-descr": "\u003cp\u003eFor each annotable object, unique key should be generated, to be used\n with the top level map in the annotations database.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-Annotation.html#CoreAnnotable",
        "fct-type": "class",
        "title": "CoreAnnotable"
      },
      "index": {
        "description": "For each annotable object unique key should be generated to be used with the top level map in the annotations database",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "CoreAnnotable",
        "normalized": "",
        "package": "ycextra",
        "partial": "Core Annotable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#t:CoreAnnotations",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotations database: a two-level map to hold property mappings \n for each of annotated objects.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "type",
        "fct-source": "src/Yhc-Core-Annotation.html#CoreAnnotations",
        "fct-type": "type",
        "title": "CoreAnnotations"
      },
      "index": {
        "description": "Annotations database two-level map to hold property mappings for each of annotated objects",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "CoreAnnotations",
        "normalized": "",
        "package": "ycextra",
        "partial": "Core Annotations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#t:CoreProperty",
      "description": {
        "fct-descr": "\u003cp\u003eFor each property, an encoding (to String) and decoding (from String)\n functions should be defined.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "class",
        "fct-source": "src/Yhc-Core-Annotation.html#CoreProperty",
        "fct-type": "class",
        "title": "CoreProperty"
      },
      "index": {
        "description": "For each property an encoding to String and decoding from String functions should be defined",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "CoreProperty",
        "normalized": "",
        "package": "ycextra",
        "partial": "Core Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:addAnnotation",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an annotable object, append a property with given name and value\n to the existing annotations database.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "a-\u003e (String, p)-\u003e CoreAnnotations-\u003e CoreAnnotations",
        "fct-type": "function",
        "title": "addAnnotation"
      },
      "index": {
        "description": "Given an annotable object append property with given name and value to the existing annotations database",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "addAnnotation",
        "normalized": "a-\u003e(String,b)-\u003eCoreAnnotations-\u003eCoreAnnotations",
        "package": "ycextra",
        "partial": "Annotation",
        "signature": "a-\u003e(String,p)-\u003eCoreAnnotations-\u003eCoreAnnotations"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:combineAnnotations",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the two annotation sets, combine them into one. If the same object \n is annotated in both sets, annotations are combines for such object, \n and left annotations take precedence.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "CoreAnnotations -\u003e CoreAnnotations -\u003e CoreAnnotations",
        "fct-source": "src/Yhc-Core-Annotation.html#combineAnnotations",
        "fct-type": "function",
        "title": "combineAnnotations"
      },
      "index": {
        "description": "Given the two annotation sets combine them into one If the same object is annotated in both sets annotations are combines for such object and left annotations take precedence",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "combineAnnotations",
        "normalized": "CoreAnnotations-\u003eCoreAnnotations-\u003eCoreAnnotations",
        "package": "ycextra",
        "partial": "Annotations",
        "signature": "CoreAnnotations-\u003eCoreAnnotations-\u003eCoreAnnotations"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:fromAnnString",
      "description": {
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "fromAnnString",
        "fct-source": "src/Yhc-Core-Annotation.html#fromAnnString",
        "fct-type": "method",
        "title": "fromAnnString"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "fromAnnString",
        "normalized": "",
        "package": "ycextra",
        "partial": "Ann String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:getAnnotation",
      "description": {
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "a-\u003e String-\u003e CoreAnnotations-\u003e Maybe p",
        "fct-type": "function",
        "title": "getAnnotation"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "getAnnotation",
        "normalized": "a-\u003eString-\u003eCoreAnnotations-\u003eMaybe b",
        "package": "ycextra",
        "partial": "Annotation",
        "signature": "a-\u003eString-\u003eCoreAnnotations-\u003eMaybe p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:toAnnString",
      "description": {
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "toAnnString",
        "fct-source": "src/Yhc-Core-Annotation.html#toAnnString",
        "fct-type": "method",
        "title": "toAnnString"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "toAnnString",
        "normalized": "",
        "package": "ycextra",
        "partial": "Ann String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:toAnnotationKey",
      "description": {
        "fct-module": "Yhc.Core.Annotation",
        "fct-package": "ycextra",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Yhc-Core-Annotation.html#toAnnotationKey",
        "fct-type": "method",
        "title": "toAnnotationKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Annotation",
        "module": "Yhc.Core.Annotation",
        "name": "toAnnotationKey",
        "normalized": "a-\u003eString",
        "package": "ycextra",
        "partial": "Annotation Key",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Extra.html#",
      "description": {
        "fct-module": "Yhc.Core.Extra",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Extra",
        "module": "Yhc.Core.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "ycextra",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Extra.html#v:coreCtorMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eNon-crashing version of coreCtor\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Extra",
        "fct-package": "ycextra",
        "fct-signature": "Core -\u003e CoreCtorName -\u003e Maybe CoreCtor",
        "fct-source": "src/Yhc-Core-Extra.html#coreCtorMaybe",
        "fct-type": "function",
        "title": "coreCtorMaybe"
      },
      "index": {
        "description": "Non-crashing version of coreCtor",
        "hierarchy": "Yhc Core Extra",
        "module": "Yhc.Core.Extra",
        "name": "coreCtorMaybe",
        "normalized": "Core-\u003eCoreCtorName-\u003eMaybe CoreCtor",
        "package": "ycextra",
        "partial": "Ctor Maybe",
        "signature": "Core-\u003eCoreCtorName-\u003eMaybe CoreCtor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Extra.html#v:coreDataMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eNon-crashing version of coreData\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Extra",
        "fct-package": "ycextra",
        "fct-signature": "Core -\u003e CoreDataName -\u003e Maybe CoreData",
        "fct-source": "src/Yhc-Core-Extra.html#coreDataMaybe",
        "fct-type": "function",
        "title": "coreDataMaybe"
      },
      "index": {
        "description": "Non-crashing version of coreData",
        "hierarchy": "Yhc Core Extra",
        "module": "Yhc.Core.Extra",
        "name": "coreDataMaybe",
        "normalized": "Core-\u003eCoreDataName-\u003eMaybe CoreData",
        "package": "ycextra",
        "partial": "Data Maybe",
        "signature": "Core-\u003eCoreDataName-\u003eMaybe CoreData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRename all functions and data constructors given a map of names\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.MapNames",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-MapNames.html",
        "fct-type": "module",
        "title": "MapNames"
      },
      "index": {
        "description": "Rename all functions and data constructors given map of names",
        "hierarchy": "Yhc Core MapNames",
        "module": "Yhc.Core.MapNames",
        "name": "MapNames",
        "normalized": "",
        "package": "ycextra",
        "partial": "Map Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#v:mapConNames",
      "description": {
        "fct-descr": "\u003cp\u003eRename all data constructors in the Core given the map of old to new names.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.MapNames",
        "fct-package": "ycextra",
        "fct-signature": "Map CoreCtorName CoreCtorName -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-MapNames.html#mapConNames",
        "fct-type": "function",
        "title": "mapConNames"
      },
      "index": {
        "description": "Rename all data constructors in the Core given the map of old to new names",
        "hierarchy": "Yhc Core MapNames",
        "module": "Yhc.Core.MapNames",
        "name": "mapConNames",
        "normalized": "Map CoreCtorName CoreCtorName-\u003eCore-\u003eCore",
        "package": "ycextra",
        "partial": "Con Names",
        "signature": "Map CoreCtorName CoreCtorName-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#v:mapDataNames",
      "description": {
        "fct-descr": "\u003cp\u003eRename all data objects (LHS of data XXX) given the map of old to new names.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.MapNames",
        "fct-package": "ycextra",
        "fct-signature": "Map CoreDataName CoreDataName -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-MapNames.html#mapDataNames",
        "fct-type": "function",
        "title": "mapDataNames"
      },
      "index": {
        "description": "Rename all data objects LHS of data XXX given the map of old to new names",
        "hierarchy": "Yhc Core MapNames",
        "module": "Yhc.Core.MapNames",
        "name": "mapDataNames",
        "normalized": "Map CoreDataName CoreDataName-\u003eCore-\u003eCore",
        "package": "ycextra",
        "partial": "Data Names",
        "signature": "Map CoreDataName CoreDataName-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#v:mapFunNames",
      "description": {
        "fct-descr": "\u003cp\u003eRename all functions in the Core given the map of old to new names.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.MapNames",
        "fct-package": "ycextra",
        "fct-signature": "Map CoreFuncName CoreFuncName -\u003e Core -\u003e Core",
        "fct-source": "src/Yhc-Core-MapNames.html#mapFunNames",
        "fct-type": "function",
        "title": "mapFunNames"
      },
      "index": {
        "description": "Rename all functions in the Core given the map of old to new names",
        "hierarchy": "Yhc Core MapNames",
        "module": "Yhc.Core.MapNames",
        "name": "mapFunNames",
        "normalized": "Map CoreFuncName CoreFuncName-\u003eCore-\u003eCore",
        "package": "ycextra",
        "partial": "Fun Names",
        "signature": "Map CoreFuncName CoreFuncName-\u003eCore-\u003eCore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Selector.html#",
      "description": {
        "fct-module": "Yhc.Core.Selector",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Selector.html",
        "fct-type": "module",
        "title": "Selector"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Selector",
        "module": "Yhc.Core.Selector",
        "name": "Selector",
        "normalized": "",
        "package": "ycextra",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Selector.html#v:coreSelectorIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an expr (normally a CoreApp)\n  tell if it is an application of a selector function\n  to a data object. Selector functions consist of a single\n  CoreCase statement with the only alternative. Application\n  must be exactly to one argument. The case alternative must\n  be a constructor application to field selectors, and \n  the return value must be one of the selectors.\n  If the analysis condition is satisfied, constructor name and\n  a field index are returned. Otherwise empty string and -1 are returned.\n  The index returned is zero-based.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Selector",
        "fct-package": "ycextra",
        "fct-signature": "Core -\u003e CoreFuncName -\u003e (CoreCtorName, Int)",
        "fct-source": "src/Yhc-Core-Selector.html#coreSelectorIndex",
        "fct-type": "function",
        "title": "coreSelectorIndex"
      },
      "index": {
        "description": "Given an expr normally CoreApp tell if it is an application of selector function to data object Selector functions consist of single CoreCase statement with the only alternative Application must be exactly to one argument The case alternative must be constructor application to field selectors and the return value must be one of the selectors If the analysis condition is satisfied constructor name and field index are returned Otherwise empty string and are returned The index returned is zero-based",
        "hierarchy": "Yhc Core Selector",
        "module": "Yhc.Core.Selector",
        "name": "coreSelectorIndex",
        "normalized": "Core-\u003eCoreFuncName-\u003e(CoreCtorName,Int)",
        "package": "ycextra",
        "partial": "Selector Index",
        "signature": "Core-\u003eCoreFuncName-\u003e(CoreCtorName,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-StrictAnno.html#",
      "description": {
        "fct-module": "Yhc.Core.StrictAnno",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-StrictAnno.html",
        "fct-type": "module",
        "title": "StrictAnno"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core StrictAnno",
        "module": "Yhc.Core.StrictAnno",
        "name": "StrictAnno",
        "normalized": "",
        "package": "ycextra",
        "partial": "Strict Anno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-StrictAnno.html#v:coreStrictAnno",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function, return a list of arguments.\n   True is strict in that argument, False is not.\n   [] is unknown strictness\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.StrictAnno",
        "fct-package": "ycextra",
        "fct-signature": "CoreAnnotations -\u003e Core -\u003e CoreFuncName -\u003e [Bool]",
        "fct-source": "src/Yhc-Core-StrictAnno.html#coreStrictAnno",
        "fct-type": "function",
        "title": "coreStrictAnno"
      },
      "index": {
        "description": "Given function return list of arguments True is strict in that argument False is not is unknown strictness",
        "hierarchy": "Yhc Core StrictAnno",
        "module": "Yhc.Core.StrictAnno",
        "name": "coreStrictAnno",
        "normalized": "CoreAnnotations-\u003eCore-\u003eCoreFuncName-\u003e[Bool]",
        "package": "ycextra",
        "partial": "Strict Anno",
        "signature": "CoreAnnotations-\u003eCore-\u003eCoreFuncName-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Unreachable.html#",
      "description": {
        "fct-module": "Yhc.Core.Unreachable",
        "fct-package": "ycextra",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-Unreachable.html",
        "fct-type": "module",
        "title": "Unreachable"
      },
      "index": {
        "description": "",
        "hierarchy": "Yhc Core Unreachable",
        "module": "Yhc.Core.Unreachable",
        "name": "Unreachable",
        "normalized": "",
        "package": "ycextra",
        "partial": "Unreachable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Unreachable.html#v:coreUnreachableDatas",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine missing (unreachable) data constructors.\n \u003cem\u003eAll ctors called\\\u003c/em\u003eused in patterns\u003cem\u003e except \u003c/em\u003eAll ctors defined/\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Unreachable",
        "fct-package": "ycextra",
        "fct-signature": "Core -\u003e [CoreCtorName]",
        "fct-source": "src/Yhc-Core-Unreachable.html#coreUnreachableDatas",
        "fct-type": "function",
        "title": "coreUnreachableDatas"
      },
      "index": {
        "description": "Determine missing unreachable data constructors All ctors called used in patterns except All ctors defined",
        "hierarchy": "Yhc Core Unreachable",
        "module": "Yhc.Core.Unreachable",
        "name": "coreUnreachableDatas",
        "normalized": "Core-\u003e[CoreCtorName]",
        "package": "ycextra",
        "partial": "Unreachable Datas",
        "signature": "Core-\u003e[CoreCtorName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Unreachable.html#v:coreUnreachableFuncs",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine missing (unreachable) functions.\n  \u003cem\u003eAll functions called\u003c/em\u003e except \u003cem\u003eAll functions defined\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.Unreachable",
        "fct-package": "ycextra",
        "fct-signature": "Core -\u003e [CoreFuncName]",
        "fct-source": "src/Yhc-Core-Unreachable.html#coreUnreachableFuncs",
        "fct-type": "function",
        "title": "coreUnreachableFuncs"
      },
      "index": {
        "description": "Determine missing unreachable functions All functions called except All functions defined",
        "hierarchy": "Yhc Core Unreachable",
        "module": "Yhc.Core.Unreachable",
        "name": "coreUnreachableFuncs",
        "normalized": "Core-\u003e[CoreFuncName]",
        "package": "ycextra",
        "partial": "Unreachable Funcs",
        "signature": "Core-\u003e[CoreFuncName]"
      }
    }
  }
]