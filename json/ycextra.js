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
        "word": "ycextra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.AnnotatePrims",
          "name": "AnnotatePrims",
          "package": "ycextra",
          "source": "src/Yhc-Core-AnnotatePrims.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "AnnotatePrims",
          "package": "ycextra",
          "partial": "Annotate Prims",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreStrictness",
          "package": "ycextra",
          "source": "src/Yhc-Core-AnnotatePrims.html#CoreStrictness",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreStrictness",
          "package": "ycextra",
          "partial": "Core Strictness",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#t:CoreStrictness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreTypeSig",
          "package": "ycextra",
          "source": "src/Yhc-Core-AnnotatePrims.html#CoreTypeSig",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreTypeSig",
          "package": "ycextra",
          "partial": "Core Type Sig",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#t:CoreTypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreStrictness",
          "package": "ycextra",
          "signature": "CoreStrictness [Bool]",
          "source": "src/Yhc-Core-AnnotatePrims.html#CoreStrictness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreStrictness",
          "normalized": "CoreStrictness[Bool]",
          "package": "ycextra",
          "partial": "Core Strictness",
          "signature": "CoreStrictness[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:CoreStrictness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreTypeSig",
          "package": "ycextra",
          "signature": "CoreTypeSig String",
          "source": "src/Yhc-Core-AnnotatePrims.html#CoreTypeSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "CoreTypeSig",
          "package": "ycextra",
          "partial": "Core Type Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:CoreTypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the linked Core, build annotations for all normal primitives\n that is, belonging to the \u003ccode\u003e\u003ca\u003enormPrimSpecMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "buildNormPrimAnno",
          "package": "ycextra",
          "signature": "Core -\u003e CoreAnnotations",
          "source": "src/Yhc-Core-AnnotatePrims.html#buildNormPrimAnno",
          "type": "function"
        },
        "index": {
          "description": "Given the linked Core build annotations for all normal primitives that is belonging to the normPrimSpecMap",
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "buildNormPrimAnno",
          "normalized": "Core-\u003eCoreAnnotations",
          "package": "ycextra",
          "partial": "Norm Prim Anno",
          "signature": "Core-\u003eCoreAnnotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:buildNormPrimAnno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the linked Core, build annotations for all primitives defined\n that belong to the given set of primitives, that is, their names\n are member keys of the given primitives specification map.\n\u003c/p\u003e",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "buildPrimAnno",
          "package": "ycextra",
          "signature": "Map String [String] -\u003e Core -\u003e CoreAnnotations",
          "source": "src/Yhc-Core-AnnotatePrims.html#buildPrimAnno",
          "type": "function"
        },
        "index": {
          "description": "Given the linked Core build annotations for all primitives defined that belong to the given set of primitives that is their names are member keys of the given primitives specification map",
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "buildPrimAnno",
          "normalized": "Map String[String]-\u003eCore-\u003eCoreAnnotations",
          "package": "ycextra",
          "partial": "Prim Anno",
          "signature": "Map String[String]-\u003eCore-\u003eCoreAnnotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:buildPrimAnno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a map of primitive specifications given the list of\n primitive description records. This as well may be used by frontends.\n\u003c/p\u003e",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "buildPrimSpecMap",
          "package": "ycextra",
          "signature": "[[String]] -\u003e Map String [String]",
          "source": "src/Yhc-Core-AnnotatePrims.html#buildPrimSpecMap",
          "type": "function"
        },
        "index": {
          "description": "Build map of primitive specifications given the list of primitive description records This as well may be used by frontends",
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "buildPrimSpecMap",
          "normalized": "[[String]]-\u003eMap String[String]",
          "package": "ycextra",
          "partial": "Prim Spec Map",
          "signature": "[[String]]-\u003eMap String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:buildPrimSpecMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifications map of normal primitives\n\u003c/p\u003e",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "normPrimSpecMap",
          "package": "ycextra",
          "signature": "Map String [String]",
          "source": "src/Yhc-Core-AnnotatePrims.html#normPrimSpecMap",
          "type": "function"
        },
        "index": {
          "description": "Specifications map of normal primitives",
          "hierarchy": "Yhc Core AnnotatePrims",
          "module": "Yhc.Core.AnnotatePrims",
          "name": "normPrimSpecMap",
          "normalized": "Map String[String]",
          "package": "ycextra",
          "partial": "Prim Spec Map",
          "signature": "Map String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-AnnotatePrims.html#v:normPrimSpecMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Annotation",
          "name": "Annotation",
          "package": "ycextra",
          "source": "src/Yhc-Core-Annotation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "Annotation",
          "package": "ycextra",
          "partial": "Annotation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each annotable object, unique key should be generated, to be used\n with the top level map in the annotations database.\n\u003c/p\u003e",
          "module": "Yhc.Core.Annotation",
          "name": "CoreAnnotable",
          "package": "ycextra",
          "source": "src/Yhc-Core-Annotation.html#CoreAnnotable",
          "type": "class"
        },
        "index": {
          "description": "For each annotable object unique key should be generated to be used with the top level map in the annotations database",
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "CoreAnnotable",
          "package": "ycextra",
          "partial": "Core Annotable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#t:CoreAnnotable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotations database: a two-level map to hold property mappings \n for each of annotated objects.\n\u003c/p\u003e",
          "module": "Yhc.Core.Annotation",
          "name": "CoreAnnotations",
          "package": "ycextra",
          "source": "src/Yhc-Core-Annotation.html#CoreAnnotations",
          "type": "type"
        },
        "index": {
          "description": "Annotations database two-level map to hold property mappings for each of annotated objects",
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "CoreAnnotations",
          "package": "ycextra",
          "partial": "Core Annotations",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#t:CoreAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each property, an encoding (to String) and decoding (from String)\n functions should be defined.\n\u003c/p\u003e",
          "module": "Yhc.Core.Annotation",
          "name": "CoreProperty",
          "package": "ycextra",
          "source": "src/Yhc-Core-Annotation.html#CoreProperty",
          "type": "class"
        },
        "index": {
          "description": "For each property an encoding to String and decoding from String functions should be defined",
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "CoreProperty",
          "package": "ycextra",
          "partial": "Core Property",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#t:CoreProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an annotable object, append a property with given name and value\n to the existing annotations database.\n\u003c/p\u003e",
          "module": "Yhc.Core.Annotation",
          "name": "addAnnotation",
          "package": "ycextra",
          "signature": "a-\u003e (String, p)-\u003e CoreAnnotations-\u003e CoreAnnotations",
          "type": "function"
        },
        "index": {
          "description": "Given an annotable object append property with given name and value to the existing annotations database",
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "addAnnotation",
          "normalized": "a-\u003e(String,b)-\u003eCoreAnnotations-\u003eCoreAnnotations",
          "package": "ycextra",
          "partial": "Annotation",
          "signature": "a-\u003e(String,p)-\u003eCoreAnnotations-\u003eCoreAnnotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:addAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the two annotation sets, combine them into one. If the same object \n is annotated in both sets, annotations are combines for such object, \n and left annotations take precedence.\n\u003c/p\u003e",
          "module": "Yhc.Core.Annotation",
          "name": "combineAnnotations",
          "package": "ycextra",
          "signature": "CoreAnnotations -\u003e CoreAnnotations -\u003e CoreAnnotations",
          "source": "src/Yhc-Core-Annotation.html#combineAnnotations",
          "type": "function"
        },
        "index": {
          "description": "Given the two annotation sets combine them into one If the same object is annotated in both sets annotations are combines for such object and left annotations take precedence",
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "combineAnnotations",
          "normalized": "CoreAnnotations-\u003eCoreAnnotations-\u003eCoreAnnotations",
          "package": "ycextra",
          "partial": "Annotations",
          "signature": "CoreAnnotations-\u003eCoreAnnotations-\u003eCoreAnnotations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:combineAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Annotation",
          "name": "fromAnnString",
          "package": "ycextra",
          "signature": "fromAnnString",
          "source": "src/Yhc-Core-Annotation.html#fromAnnString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "fromAnnString",
          "package": "ycextra",
          "partial": "Ann String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:fromAnnString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Annotation",
          "name": "getAnnotation",
          "package": "ycextra",
          "signature": "a-\u003e String-\u003e CoreAnnotations-\u003e Maybe p",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "getAnnotation",
          "normalized": "a-\u003eString-\u003eCoreAnnotations-\u003eMaybe b",
          "package": "ycextra",
          "partial": "Annotation",
          "signature": "a-\u003eString-\u003eCoreAnnotations-\u003eMaybe p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:getAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Annotation",
          "name": "toAnnString",
          "package": "ycextra",
          "signature": "toAnnString",
          "source": "src/Yhc-Core-Annotation.html#toAnnString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "toAnnString",
          "package": "ycextra",
          "partial": "Ann String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:toAnnString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Annotation",
          "name": "toAnnotationKey",
          "package": "ycextra",
          "signature": "a -\u003e String",
          "source": "src/Yhc-Core-Annotation.html#toAnnotationKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yhc Core Annotation",
          "module": "Yhc.Core.Annotation",
          "name": "toAnnotationKey",
          "normalized": "a-\u003eString",
          "package": "ycextra",
          "partial": "Annotation Key",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Annotation.html#v:toAnnotationKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Extra",
          "name": "Extra",
          "package": "ycextra",
          "source": "src/Yhc-Core-Extra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Extra",
          "module": "Yhc.Core.Extra",
          "name": "Extra",
          "package": "ycextra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-crashing version of coreCtor\n\u003c/p\u003e",
          "module": "Yhc.Core.Extra",
          "name": "coreCtorMaybe",
          "package": "ycextra",
          "signature": "Core -\u003e CoreCtorName -\u003e Maybe CoreCtor",
          "source": "src/Yhc-Core-Extra.html#coreCtorMaybe",
          "type": "function"
        },
        "index": {
          "description": "Non-crashing version of coreCtor",
          "hierarchy": "Yhc Core Extra",
          "module": "Yhc.Core.Extra",
          "name": "coreCtorMaybe",
          "normalized": "Core-\u003eCoreCtorName-\u003eMaybe CoreCtor",
          "package": "ycextra",
          "partial": "Ctor Maybe",
          "signature": "Core-\u003eCoreCtorName-\u003eMaybe CoreCtor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Extra.html#v:coreCtorMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-crashing version of coreData\n\u003c/p\u003e",
          "module": "Yhc.Core.Extra",
          "name": "coreDataMaybe",
          "package": "ycextra",
          "signature": "Core -\u003e CoreDataName -\u003e Maybe CoreData",
          "source": "src/Yhc-Core-Extra.html#coreDataMaybe",
          "type": "function"
        },
        "index": {
          "description": "Non-crashing version of coreData",
          "hierarchy": "Yhc Core Extra",
          "module": "Yhc.Core.Extra",
          "name": "coreDataMaybe",
          "normalized": "Core-\u003eCoreDataName-\u003eMaybe CoreData",
          "package": "ycextra",
          "partial": "Data Maybe",
          "signature": "Core-\u003eCoreDataName-\u003eMaybe CoreData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Extra.html#v:coreDataMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRename all functions and data constructors given a map of names\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.MapNames",
          "name": "MapNames",
          "package": "ycextra",
          "source": "src/Yhc-Core-MapNames.html",
          "type": "module"
        },
        "index": {
          "description": "Rename all functions and data constructors given map of names",
          "hierarchy": "Yhc Core MapNames",
          "module": "Yhc.Core.MapNames",
          "name": "MapNames",
          "package": "ycextra",
          "partial": "Map Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename all data constructors in the Core given the map of old to new names.\n\u003c/p\u003e",
          "module": "Yhc.Core.MapNames",
          "name": "mapConNames",
          "package": "ycextra",
          "signature": "Map CoreCtorName CoreCtorName -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-MapNames.html#mapConNames",
          "type": "function"
        },
        "index": {
          "description": "Rename all data constructors in the Core given the map of old to new names",
          "hierarchy": "Yhc Core MapNames",
          "module": "Yhc.Core.MapNames",
          "name": "mapConNames",
          "normalized": "Map CoreCtorName CoreCtorName-\u003eCore-\u003eCore",
          "package": "ycextra",
          "partial": "Con Names",
          "signature": "Map CoreCtorName CoreCtorName-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#v:mapConNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename all data objects (LHS of data XXX) given the map of old to new names.\n\u003c/p\u003e",
          "module": "Yhc.Core.MapNames",
          "name": "mapDataNames",
          "package": "ycextra",
          "signature": "Map CoreDataName CoreDataName -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-MapNames.html#mapDataNames",
          "type": "function"
        },
        "index": {
          "description": "Rename all data objects LHS of data XXX given the map of old to new names",
          "hierarchy": "Yhc Core MapNames",
          "module": "Yhc.Core.MapNames",
          "name": "mapDataNames",
          "normalized": "Map CoreDataName CoreDataName-\u003eCore-\u003eCore",
          "package": "ycextra",
          "partial": "Data Names",
          "signature": "Map CoreDataName CoreDataName-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#v:mapDataNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename all functions in the Core given the map of old to new names.\n\u003c/p\u003e",
          "module": "Yhc.Core.MapNames",
          "name": "mapFunNames",
          "package": "ycextra",
          "signature": "Map CoreFuncName CoreFuncName -\u003e Core -\u003e Core",
          "source": "src/Yhc-Core-MapNames.html#mapFunNames",
          "type": "function"
        },
        "index": {
          "description": "Rename all functions in the Core given the map of old to new names",
          "hierarchy": "Yhc Core MapNames",
          "module": "Yhc.Core.MapNames",
          "name": "mapFunNames",
          "normalized": "Map CoreFuncName CoreFuncName-\u003eCore-\u003eCore",
          "package": "ycextra",
          "partial": "Fun Names",
          "signature": "Map CoreFuncName CoreFuncName-\u003eCore-\u003eCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-MapNames.html#v:mapFunNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Selector",
          "name": "Selector",
          "package": "ycextra",
          "source": "src/Yhc-Core-Selector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Selector",
          "module": "Yhc.Core.Selector",
          "name": "Selector",
          "package": "ycextra",
          "partial": "Selector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Selector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an expr (normally a CoreApp)\n  tell if it is an application of a selector function\n  to a data object. Selector functions consist of a single\n  CoreCase statement with the only alternative. Application\n  must be exactly to one argument. The case alternative must\n  be a constructor application to field selectors, and \n  the return value must be one of the selectors.\n  If the analysis condition is satisfied, constructor name and\n  a field index are returned. Otherwise empty string and -1 are returned.\n  The index returned is zero-based.\n\u003c/p\u003e",
          "module": "Yhc.Core.Selector",
          "name": "coreSelectorIndex",
          "package": "ycextra",
          "signature": "Core -\u003e CoreFuncName -\u003e (CoreCtorName, Int)",
          "source": "src/Yhc-Core-Selector.html#coreSelectorIndex",
          "type": "function"
        },
        "index": {
          "description": "Given an expr normally CoreApp tell if it is an application of selector function to data object Selector functions consist of single CoreCase statement with the only alternative Application must be exactly to one argument The case alternative must be constructor application to field selectors and the return value must be one of the selectors If the analysis condition is satisfied constructor name and field index are returned Otherwise empty string and are returned The index returned is zero-based",
          "hierarchy": "Yhc Core Selector",
          "module": "Yhc.Core.Selector",
          "name": "coreSelectorIndex",
          "normalized": "Core-\u003eCoreFuncName-\u003e(CoreCtorName,Int)",
          "package": "ycextra",
          "partial": "Selector Index",
          "signature": "Core-\u003eCoreFuncName-\u003e(CoreCtorName,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Selector.html#v:coreSelectorIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.StrictAnno",
          "name": "StrictAnno",
          "package": "ycextra",
          "source": "src/Yhc-Core-StrictAnno.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core StrictAnno",
          "module": "Yhc.Core.StrictAnno",
          "name": "StrictAnno",
          "package": "ycextra",
          "partial": "Strict Anno",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-StrictAnno.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function, return a list of arguments.\n   True is strict in that argument, False is not.\n   [] is unknown strictness\n\u003c/p\u003e",
          "module": "Yhc.Core.StrictAnno",
          "name": "coreStrictAnno",
          "package": "ycextra",
          "signature": "CoreAnnotations -\u003e Core -\u003e CoreFuncName -\u003e [Bool]",
          "source": "src/Yhc-Core-StrictAnno.html#coreStrictAnno",
          "type": "function"
        },
        "index": {
          "description": "Given function return list of arguments True is strict in that argument False is not is unknown strictness",
          "hierarchy": "Yhc Core StrictAnno",
          "module": "Yhc.Core.StrictAnno",
          "name": "coreStrictAnno",
          "normalized": "CoreAnnotations-\u003eCore-\u003eCoreFuncName-\u003e[Bool]",
          "package": "ycextra",
          "partial": "Strict Anno",
          "signature": "CoreAnnotations-\u003eCore-\u003eCoreFuncName-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-StrictAnno.html#v:coreStrictAnno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yhc.Core.Unreachable",
          "name": "Unreachable",
          "package": "ycextra",
          "source": "src/Yhc-Core-Unreachable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yhc Core Unreachable",
          "module": "Yhc.Core.Unreachable",
          "name": "Unreachable",
          "package": "ycextra",
          "partial": "Unreachable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Unreachable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine missing (unreachable) data constructors.\n \u003cem\u003eAll ctors called\\\u003c/em\u003eused in patterns\u003cem\u003e except \u003c/em\u003eAll ctors defined/\n\u003c/p\u003e",
          "module": "Yhc.Core.Unreachable",
          "name": "coreUnreachableDatas",
          "package": "ycextra",
          "signature": "Core -\u003e [CoreCtorName]",
          "source": "src/Yhc-Core-Unreachable.html#coreUnreachableDatas",
          "type": "function"
        },
        "index": {
          "description": "Determine missing unreachable data constructors All ctors called used in patterns except All ctors defined",
          "hierarchy": "Yhc Core Unreachable",
          "module": "Yhc.Core.Unreachable",
          "name": "coreUnreachableDatas",
          "normalized": "Core-\u003e[CoreCtorName]",
          "package": "ycextra",
          "partial": "Unreachable Datas",
          "signature": "Core-\u003e[CoreCtorName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Unreachable.html#v:coreUnreachableDatas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine missing (unreachable) functions.\n  \u003cem\u003eAll functions called\u003c/em\u003e except \u003cem\u003eAll functions defined\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Yhc.Core.Unreachable",
          "name": "coreUnreachableFuncs",
          "package": "ycextra",
          "signature": "Core -\u003e [CoreFuncName]",
          "source": "src/Yhc-Core-Unreachable.html#coreUnreachableFuncs",
          "type": "function"
        },
        "index": {
          "description": "Determine missing unreachable functions All functions called except All functions defined",
          "hierarchy": "Yhc Core Unreachable",
          "module": "Yhc.Core.Unreachable",
          "name": "coreUnreachableFuncs",
          "normalized": "Core-\u003e[CoreFuncName]",
          "package": "ycextra",
          "partial": "Unreachable Funcs",
          "signature": "Core-\u003e[CoreFuncName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ycextra/docs/Yhc-Core-Unreachable.html#v:coreUnreachableFuncs"
      }
    }
  ]
]