[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  Based upon \u003ca\u003eData.IntMap.Lazy\u003c/a\u003e, this version uses multi\n dimensional keys and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types instead of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.  Keys are built using\n the \u003ccode\u003e\u003ca\u003e:&\u003c/a\u003e\u003c/code\u003e operator and terminated with \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e.  They are stored using \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es so 2\n keys that \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e to the same \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value will overwrite each other.  The\n intension is that the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types will actually be \u003ccode\u003enewtype \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e newtype AppleID = AppleID Int\n newtype TreeID = TreeID Int\n type Orchard = EnumMapMap (TreeID :& K AppleID) Apple\n apple = lookup (TreeID 4 :& K AppleID 32) orchard\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e type is different to that used in \u003ca\u003eData.EnumMapMap.Strict\u003c/a\u003e so only lazy\n operations can be performed on a lazy \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe functions are lazy on values, but strict on keys.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "module",
        "fct-source": "src/Data-EnumMapMap-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy EnumMapMap Based upon Data.IntMap.Lazy this version uses multi dimensional keys and Enum types instead of Int Keys are built using the operator and terminated with They are stored using Int so keys that Enum to the same Int value will overwrite each other The intension is that the Enum types will actually be newtype Int newtype AppleID AppleID Int newtype TreeID TreeID Int type Orchard EnumMapMap TreeID AppleID Apple apple lookup TreeID AppleID orchard The type is different to that used in Data.EnumMapMap.Strict so only lazy operations can be performed on lazy EnumMapMap The functions are lazy on values but strict on keys",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#t::-38-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple keys are joined by the (\u003ccode\u003e\u003ca\u003e:&\u003c/a\u003e\u003c/code\u003e) constructor.\n\u003c/p\u003e\u003cpre\u003e multiKey :: Int :& Int :& K Int\n multiKey = 5 :& 6 :& K 5\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "data",
        "fct-source": "src/Data-EnumMapMap-Base.html#%3A%26",
        "fct-type": "data",
        "title": ":&"
      },
      "index": {
        "description": "Multiple keys are joined by the constructor multiKey Int Int Int multiKey",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": ":&",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#t:IsKey",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "class",
        "fct-source": "src/Data-EnumMapMap-Base.html#IsKey",
        "fct-type": "class",
        "title": "IsKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "IsKey",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Is Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#t:K",
      "description": {
        "fct-descr": "\u003cp\u003eKeys are terminated with the \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e\u003cpre\u003e singleKey :: K Int\n singleKey = K 5\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "newtype",
        "fct-source": "src/Data-EnumMapMap-Lazy.html#K",
        "fct-type": "newtype",
        "title": "K"
      },
      "index": {
        "description": "Keys are terminated with the type singleKey Int singleKey",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "K",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#t:SubKey",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "class",
        "fct-source": "src/Data-EnumMapMap-Base.html#SubKey",
        "fct-type": "class",
        "title": "SubKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "SubKey",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Sub Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v::-38-",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "!k :& !t",
        "fct-source": "src/Data-EnumMapMap-Base.html#%3A%26",
        "fct-type": "function",
        "title": ":&"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": ":&",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:K",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "K k",
        "fct-source": "src/Data-EnumMapMap-Lazy.html#K",
        "fct-type": "function",
        "title": "K"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "K",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k emm\u003c/code\u003e) alters the value at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(Maybe v -\u003e Maybe v) -\u003e k -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#alter",
        "fct-type": "method",
        "title": "alter"
      },
      "index": {
        "description": "The expression alter emm alters the value at or absence thereof alter can be used to insert delete or update value in an EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "",
        "signature": "(Maybe v-\u003eMaybe v)-\u003ek-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d1",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after 1 key.\n\u003c/p\u003e\u003cpre\u003e emm :: EnumMapMap (T1 :& T2 :& K T3) v\n splitKey d1 emm :: EnumMapMap (T1 :& K T2) (EnumMapMap (K T3) v)\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "Z",
        "fct-source": "src/Data-EnumMapMap-Base.html#d1",
        "fct-type": "function",
        "title": "d1"
      },
      "index": {
        "description": "Split after key emm EnumMapMap T1 T2 T3 splitKey d1 emm EnumMapMap T1 T2 EnumMapMap T3",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d1",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d10",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N (N (N (N Z))))))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d10",
        "fct-type": "function",
        "title": "d10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d10",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d2",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after 2 keys.\n\u003c/p\u003e\u003cpre\u003e emm :: EnumMapMap (T1 :& T2 :& K T3) v\n splitKey d1 emm :: EnumMapMap (K T1) (EnumMapMap (T2 :& K T3) v)\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N Z",
        "fct-source": "src/Data-EnumMapMap-Base.html#d2",
        "fct-type": "function",
        "title": "d2"
      },
      "index": {
        "description": "Split after keys emm EnumMapMap T1 T2 T3 splitKey d1 emm EnumMapMap T1 EnumMapMap T2 T3",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d2",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d3",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N Z)",
        "fct-source": "src/Data-EnumMapMap-Base.html#d3",
        "fct-type": "function",
        "title": "d3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d3",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d4",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N Z))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d4",
        "fct-type": "function",
        "title": "d4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d4",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d5",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N Z)))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d5",
        "fct-type": "function",
        "title": "d5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d5",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d6",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N Z))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d6",
        "fct-type": "function",
        "title": "d6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d6",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d7",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N Z)))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d7",
        "fct-type": "function",
        "title": "d7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d7",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d8",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N (N Z))))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d8",
        "fct-type": "function",
        "title": "d8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d8",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:d9",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N (N (N Z)))))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d9",
        "fct-type": "function",
        "title": "d9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "d9",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a key and it's value from the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  If the key is not\n present the original \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Remove key and it value from the EnumMapMap If the key is not present the original EnumMapMap is returned",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "delete",
        "normalized": "a-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:deleteFindMin",
      "description": {
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e ((k, v), EnumMapMap k v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#deleteFindMin",
        "fct-type": "method",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "deleteFindMin",
        "normalized": "EnumMapMap a b-\u003e((a,b),EnumMapMap a b)",
        "package": "enummapmap",
        "partial": "Find Min",
        "signature": "EnumMapMap k v-\u003e((k,v),EnumMapMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eDifference between two \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#difference",
        "fct-type": "method",
        "title": "difference"
      },
      "index": {
        "description": "Difference between two EnumMapMap based on keys",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "difference",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:differenceSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe difference between an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e and an \u003ccode\u003eEnumMapSet\u003c/code\u003e.  If a key\n is present in the \u003ccode\u003eEnumMapSet\u003c/code\u003e it will not be present in the result.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap s () -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#differenceSet",
        "fct-type": "function",
        "title": "differenceSet"
      },
      "index": {
        "description": "The difference between an EnumMapMap and an EnumMapSet If key is present in the EnumMapSet it will not be present in the result",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "differenceSet",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap c()-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "EnumMapMap k v-\u003eEnumMapMap s()-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v1 -\u003e v2 -\u003e Maybe v1) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#differenceWith",
        "fct-type": "method",
        "title": "differenceWith"
      },
      "index": {
        "description": "Difference with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "differenceWith",
        "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eEnumMapMap b a-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003eMaybe v)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v1 -\u003e v2 -\u003e Maybe v1) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#differenceWithKey",
        "fct-type": "method",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "Difference with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "differenceWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eMaybe b)-\u003eEnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev-\u003eMaybe v)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements in ascending order of keys\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e [v]",
        "fct-source": "src/Data-EnumMapMap-Base.html#elems",
        "fct-type": "method",
        "title": "elems"
      },
      "index": {
        "description": "List of elements in ascending order of keys",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "elems",
        "normalized": "EnumMapMap a b-\u003e[b]",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003e[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "The empty EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:emptySubTrees",
      "description": {
        "fct-descr": "\u003cp\u003eNo subtrees should be empty.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if one is.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Bool",
        "fct-source": "src/Data-EnumMapMap-Base.html#emptySubTrees",
        "fct-type": "method",
        "title": "emptySubTrees"
      },
      "index": {
        "description": "No subtrees should be empty Returns True if one is",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "emptySubTrees",
        "normalized": "EnumMapMap a b-\u003eBool",
        "package": "enummapmap",
        "partial": "Sub Trees",
        "signature": "EnumMapMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003eThe minimal key and value of the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e findMin empty -- ERROR, no minimal key\n findMin $ fromList [(K 1, \"a\", K 3, \"b\")] == (K 1, a)\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e (k, v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#findMin",
        "fct-type": "method",
        "title": "findMin"
      },
      "index": {
        "description": "The minimal key and value of the EnumMapMap findMin empty ERROR no minimal key findMin fromList",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "findMin",
        "normalized": "EnumMapMap a b-\u003e(a,b)",
        "package": "enummapmap",
        "partial": "Min",
        "signature": "EnumMapMap k v-\u003e(k,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eFold the values in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e using the given\n right-associative binary operator\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e t -\u003e t) -\u003e t -\u003e EnumMapMap k v -\u003e t",
        "fct-source": "src/Data-EnumMapMap-Base.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "Fold the values in the EnumMapMap using the given right-associative binary operator",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMapMap c a-\u003eb",
        "package": "enummapmap",
        "partial": "",
        "signature": "(v-\u003et-\u003et)-\u003et-\u003eEnumMapMap k v-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eFold the keys and values in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e using the given right-associative\n binary operator.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e t -\u003e t) -\u003e t -\u003e EnumMapMap k v -\u003e t",
        "fct-source": "src/Data-EnumMapMap-Base.html#foldrWithKey",
        "fct-type": "method",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the EnumMapMap using the given right-associative binary operator",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eEnumMapMap a b-\u003ec",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003et-\u003et)-\u003et-\u003eEnumMapMap k v-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e from a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "[(k, v)] -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#fromList",
        "fct-type": "method",
        "title": "fromList"
      },
      "index": {
        "description": "Create an EnumMapMap from list of key value pairs",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "List",
        "signature": "[(k,v)]-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:fromSet",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003eEnumMapSet\u003c/code\u003e and a function which for each\n key computes it's value\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v) -\u003e EnumMapMap (Skey k) () -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#fromSet",
        "fct-type": "method",
        "title": "fromSet"
      },
      "index": {
        "description": "Build an EnumMapMap from an EnumMapSet and function which for each key computes it value",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "fromSet",
        "normalized": "(a-\u003eb)-\u003eEnumMapMap(Skey a)()-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "(k-\u003ev)-\u003eEnumMapMap(Skey k)()-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key/value pair into the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  Can also insert submaps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert new key value pair into the EnumMapMap Can also insert submaps",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "insert",
        "normalized": "a-\u003eResult a a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eResult k k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.  Can also insert submaps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(Result k1 k2 v -\u003e Result k1 k2 v -\u003e Result k1 k2 v) -\u003e k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#insertWith",
        "fct-type": "method",
        "title": "insertWith"
      },
      "index": {
        "description": "Insert with combining function Can also insert submaps",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "insertWith",
        "normalized": "(Result a a b-\u003eResult a a b-\u003eResult a a b)-\u003ea-\u003eResult a a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(Result k k v-\u003eResult k k v-\u003eResult k k v)-\u003ek-\u003eResult k k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.  Can also insert submaps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k1 -\u003e Result k1 k2 v -\u003e Result k1 k2 v -\u003e Result k1 k2 v) -\u003e k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#insertWithKey",
        "fct-type": "method",
        "title": "insertWithKey"
      },
      "index": {
        "description": "Insert with combining function Can also insert submaps",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "insertWithKey",
        "normalized": "(a-\u003eResult a a b-\u003eResult a a b-\u003eResult a a b)-\u003ea-\u003eResult a a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003eResult k k v-\u003eResult k k v-\u003eResult k k v)-\u003ek-\u003eResult k k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:intersectSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection of an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e and an \u003ccode\u003eEnumMapSet\u003c/code\u003e.  If a key is\n present in the EnumMapSet then it will be present in the resulting\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  Works with \u003ccode\u003eEnumMapSet\u003c/code\u003es that are submaps of the\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap s () -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersectSet",
        "fct-type": "function",
        "title": "intersectSet"
      },
      "index": {
        "description": "The intersection of an EnumMapMap and an EnumMapSet If key is present in the EnumMapSet then it will be present in the resulting EnumMapMap Works with EnumMapSet that are submaps of the EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "intersectSet",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap c()-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "EnumMapMap k v-\u003eEnumMapMap s()-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eThe (left-biased) intersection of two \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersection",
        "fct-type": "method",
        "title": "intersection"
      },
      "index": {
        "description": "The left-biased intersection of two EnumMapMap based on keys",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "intersection",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v1 -\u003e v2 -\u003e v3) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v3",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersectionWith",
        "fct-type": "method",
        "title": "intersectionWith"
      },
      "index": {
        "description": "The intersection with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "intersectionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMapMap b a-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:intersectionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v1 -\u003e v2 -\u003e v3) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v3",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersectionWithKey",
        "fct-type": "method",
        "title": "intersectionWithKey"
      },
      "index": {
        "description": "The intersection with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "intersectionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:joinKey",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a key so that an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es becomes an\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e newtype ID = ID Int deriving Enum\n emm :: EnumMapMap (K Int) (EnumMapMap (K ID) Bool)\n res :: EnumMapMap (Int :& K ID) Bool\n res = joinKey emm\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoinKey\u003c/a\u003e\u003c/code\u003e is the opposite of \u003ccode\u003e\u003ca\u003esplitKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e emm = empty :: EnumMapMap (Int :& Int :& K ID) Bool)\n emm == joinKey $ splitKey d2 emm\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k (EnumMapMap k2 v) -\u003e EnumMapMap (Plus k k2) v",
        "fct-source": "src/Data-EnumMapMap-Base.html#joinKey",
        "fct-type": "method",
        "title": "joinKey"
      },
      "index": {
        "description": "Join key so that an EnumMapMap of EnumMapMap becomes an EnumMapMap newtype ID ID Int deriving Enum emm EnumMapMap Int EnumMapMap ID Bool res EnumMapMap Int ID Bool res joinKey emm joinKey is the opposite of splitKey emm empty EnumMapMap Int Int ID Bool emm joinKey splitKey d2 emm",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "joinKey",
        "normalized": "EnumMapMap a(EnumMapMap a b)-\u003eEnumMapMap(Plus a a)b",
        "package": "enummapmap",
        "partial": "Key",
        "signature": "EnumMapMap k(EnumMapMap k v)-\u003eEnumMapMap(Plus k k)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eList of keys\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e [k]",
        "fct-source": "src/Data-EnumMapMap-Base.html#keys",
        "fct-type": "method",
        "title": "keys"
      },
      "index": {
        "description": "List of keys",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "keys",
        "normalized": "EnumMapMap a b-\u003e[a]",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:keysSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEnumMapSet\u003c/a\u003e\u003c/code\u003e of the keys. \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e keys can be converted into\n \u003ccode\u003e\u003ca\u003eEnumMapSet\u003c/a\u003e\u003c/code\u003e keys using \u003ccode\u003e\u003ca\u003etoS\u003c/a\u003e\u003c/code\u003e, and back again using \u003ccode\u003e\u003ca\u003etoK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap (Skey k) ()",
        "fct-source": "src/Data-EnumMapMap-Base.html#keysSet",
        "fct-type": "method",
        "title": "keysSet"
      },
      "index": {
        "description": "The EnumMapSet of the keys EnumMapMap keys can be converted into EnumMapSet keys using toS and back again using toK",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "keysSet",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap(Skey a)()",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "EnumMapMap k v-\u003eEnumMapMap(Skey k)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup up the value at a key in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e emm = fromList [(3 :& K 1, \"a\")]\n lookup (3 :& K 1) emm == Just \"a\"\n lookup (2 :& K 1) emm == Nothing\n\u003c/pre\u003e\u003cp\u003eIf the given key has less dimensions then the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e then a submap\n is returned.\n\u003c/p\u003e\u003cpre\u003e emm2 = fromList [(3 :& 2 :& K 1, \"a\"), (3 :& 2 :& K 4, \"a\")]\n lookup (3 :& K 2) emm2 == Just $ fromList [(K 1, \"a\"), (K 4, \"a\")]\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapMap k2 v -\u003e Maybe (Result k1 k2 v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup up the value at key in the EnumMapMap emm fromList lookup emm Just lookup emm Nothing If the given key has less dimensions then the EnumMapMap then submap is returned emm2 fromList lookup emm2 Just fromList",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "lookup",
        "normalized": "a-\u003eEnumMapMap a b-\u003eMaybe(Result a a b)",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapMap k v-\u003eMaybe(Result k k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#map",
        "fct-type": "method",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eEnumMapMap c a-\u003eEnumMapMap c b",
        "package": "enummapmap",
        "partial": "",
        "signature": "(v-\u003et)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMap values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e Maybe t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#mapMaybe",
        "fct-type": "method",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eEnumMapMap c a-\u003eEnumMapMap c b",
        "package": "enummapmap",
        "partial": "Maybe",
        "signature": "(v-\u003eMaybe t)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e Maybe t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#mapMaybeWithKey",
        "fct-type": "method",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Map keys values and collect the Just results",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "mapMaybeWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eEnumMapMap a b-\u003eEnumMapMap a c",
        "package": "enummapmap",
        "partial": "Maybe With Key",
        "signature": "(k-\u003ev-\u003eMaybe t)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all key/value pairs in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#mapWithKey",
        "fct-type": "method",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all key value pairs in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMapMap a b-\u003eEnumMapMap a c",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003et)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eIs the key present in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapMap k2 v -\u003e Bool",
        "fct-source": "src/Data-EnumMapMap-Base.html#member",
        "fct-type": "method",
        "title": "member"
      },
      "index": {
        "description": "Is the key present in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "member",
        "normalized": "a-\u003eEnumMapMap a b-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:minViewWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the minimal (key,value) pair of the EnumMapMap, and the\n EnumMapMap stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Maybe ((k, v), EnumMapMap k v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#minViewWithKey",
        "fct-type": "method",
        "title": "minViewWithKey"
      },
      "index": {
        "description": "Retrieves the minimal key value pair of the EnumMapMap and the EnumMapMap stripped of that element or Nothing if passed an empty map",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "minViewWithKey",
        "normalized": "EnumMapMap a b-\u003eMaybe((a,b),EnumMapMap a b)",
        "package": "enummapmap",
        "partial": "View With Key",
        "signature": "EnumMapMap k v-\u003eMaybe((k,v),EnumMapMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eIs the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e\u003cp\u003eSubmaps can never be empty, so the following should always hold true:\n\u003c/p\u003e\u003cpre\u003e emm :: EnumMapMap (Int :& Int :& K ID) Bool)\n null $ splitKey x emm == False\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Bool",
        "fct-source": "src/Data-EnumMapMap-Base.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Is the EnumMapMap empty Submaps can never be empty so the following should always hold true emm EnumMapMap Int Int ID Bool null splitKey emm False",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "null",
        "normalized": "EnumMapMap a b-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e with one element\n\u003c/p\u003e\u003cpre\u003e singleton (5 :& K 3) \"a\" == fromList [(5 :& K 3, \"a\")]\n singleton (K 5) $ singleton (K 2) \"a\" == fromList [(5 :& K 3, \"a\")]\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "An EnumMapMap with one element singleton fromList singleton singleton fromList",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "singleton",
        "normalized": "a-\u003eResult a a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eResult k k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Int",
        "fct-source": "src/Data-EnumMapMap-Base.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "Number of elements in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "size",
        "normalized": "EnumMapMap a b-\u003eInt",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:splitKey",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a key so that an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e becomes an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e newtype ID = ID Int deriving Enum\n emm = empty :: EnumMapMap (Int :& K ID) Bool\n res :: EnumMapMap (K ID) Bool\n res = lookup (K 5) $ splitKey d1 emm\n\u003c/pre\u003e\u003cp\u003eIf the level is too high then the compilation will fail with an error\n\u003c/p\u003e\u003cpre\u003e emm = empty :: EnumMapMap (Int :& Int :& K Int) Bool -- 3 levels\n res1 = splitKey d4 emm -- ERROR! Instance not found...\n res2 = splitKey d3 emm -- ERROR! Instance not found...\n res3 = splitKey d2 emm -- Good\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "z -\u003e EnumMapMap k v -\u003e EnumMapMap (Head k z) (EnumMapMap (Tail k z) v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#splitKey",
        "fct-type": "function",
        "title": "splitKey"
      },
      "index": {
        "description": "Split key so that an EnumMapMap becomes an EnumMapMap of EnumMapMap newtype ID ID Int deriving Enum emm empty EnumMapMap Int ID Bool res EnumMapMap ID Bool res lookup splitKey d1 emm If the level is too high then the compilation will fail with an error emm empty EnumMapMap Int Int Int Bool levels res1 splitKey d4 emm ERROR Instance not found res2 splitKey d3 emm ERROR Instance not found res3 splitKey d2 emm Good",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "splitKey",
        "normalized": "a-\u003eEnumMapMap b c-\u003eEnumMapMap(Head b a)(EnumMapMap(Tail b a)c)",
        "package": "enummapmap",
        "partial": "Key",
        "signature": "z-\u003eEnumMapMap k v-\u003eEnumMapMap(Head k z)(EnumMapMap(Tail k z)v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:toK",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a key terminated with \u003ccode\u003eS\u003c/code\u003e into one terminated with \u003ccode\u003eK\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e s = 1 :& 2 :& S 3\n toK s == 1 :& 2 :& K 3\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "Skey k -\u003e k",
        "fct-source": "src/Data-EnumMapMap-Base.html#toK",
        "fct-type": "function",
        "title": "toK"
      },
      "index": {
        "description": "Convert key terminated with into one terminated with toK",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "toK",
        "normalized": "Skey a-\u003ea",
        "package": "enummapmap",
        "partial": "",
        "signature": "Skey k-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e to a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e [(k, v)]",
        "fct-source": "src/Data-EnumMapMap-Base.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "Convert the EnumMapMap to list of key value pairs",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "toList",
        "normalized": "EnumMapMap a b-\u003e[(a,b)]",
        "package": "enummapmap",
        "partial": "List",
        "signature": "EnumMapMap k v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:toS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a key terminated with \u003ccode\u003eK\u003c/code\u003e into one terminated with \u003ccode\u003eS\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e k = 1 :& 2 :& 'K' 3\n toS k == 1 :& 2 :& 'S' 3\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "k -\u003e Skey k",
        "fct-source": "src/Data-EnumMapMap-Base.html#toS",
        "fct-type": "function",
        "title": "toS"
      },
      "index": {
        "description": "Convert key terminated with into one terminated with toS",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "toS",
        "normalized": "a-\u003eSkey a",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eSkey k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:traverseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTraverseWithKey\u003c/code\u003e behaves exactly like a regular \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e except that\n the traversing function also has access to the key associated with a\n value.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e a -\u003e t b) -\u003e EnumMapMap k a -\u003e t (EnumMapMap k b)",
        "fct-source": "src/Data-EnumMapMap-Base.html#traverseWithKey",
        "fct-type": "method",
        "title": "traverseWithKey"
      },
      "index": {
        "description": "TraverseWithKey behaves exactly like regular traverse except that the traversing function also has access to the key associated with value",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "traverseWithKey",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eEnumMapMap a b-\u003ec(EnumMapMap a d)",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003et b)-\u003eEnumMapMap k a-\u003et(EnumMapMap k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eThe (left-biased) union of two \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es.\n It prefers the first \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e when duplicate keys are encountered.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "The left-biased union of two EnumMapMap It prefers the first EnumMapMap when duplicate keys are encountered",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "union",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e EnumMapMap k v -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unionWith",
        "fct-type": "method",
        "title": "unionWith"
      },
      "index": {
        "description": "The union with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMapMap b a-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e v -\u003e v) -\u003e EnumMapMap k v -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unionWithKey",
        "fct-type": "method",
        "title": "unionWithKey"
      },
      "index": {
        "description": "The union with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "unionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "[EnumMapMap k v] -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unions",
        "fct-type": "method",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of maps",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "unions",
        "normalized": "[EnumMapMap a b]-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "[EnumMapMap k v]-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps with a combining function\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e [EnumMapMap k v] -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unionsWith",
        "fct-type": "method",
        "title": "unionsWith"
      },
      "index": {
        "description": "The union of list of maps with combining function",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[EnumMapMap b a]-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003e[EnumMapMap k v]-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Lazy.html#v:unsafeJoinKey",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a key so that an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es becomes an\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  The unsafe version does not check for empty subtrees, so\n it is faster.\n\u003c/p\u003e\u003cpre\u003e newtype ID = ID Int deriving Enum\n emm :: EnumMapMap (K Int) (EnumMapMap (K ID) Bool)\n res :: EnumMapMap (Int :& K ID) Bool\n res = unsafeJoinKey emm\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Lazy",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k (EnumMapMap k2 v) -\u003e EnumMapMap (Plus k k2) v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unsafeJoinKey",
        "fct-type": "method",
        "title": "unsafeJoinKey"
      },
      "index": {
        "description": "Join key so that an EnumMapMap of EnumMapMap becomes an EnumMapMap The unsafe version does not check for empty subtrees so it is faster newtype ID ID Int deriving Enum emm EnumMapMap Int EnumMapMap ID Bool res EnumMapMap Int ID Bool res unsafeJoinKey emm",
        "hierarchy": "Data EnumMapMap Lazy",
        "module": "Data.EnumMapMap.Lazy",
        "name": "unsafeJoinKey",
        "normalized": "EnumMapMap a(EnumMapMap a b)-\u003eEnumMapMap(Plus a a)b",
        "package": "enummapmap",
        "partial": "Join Key",
        "signature": "EnumMapMap k(EnumMapMap k v)-\u003eEnumMapMap(Plus k k)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  Based upon \u003ca\u003eData.IntMap.Strict\u003c/a\u003e, this version uses multi\n dimensional keys and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types instead of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.  Keys are built using\n the \u003ccode\u003e\u003ca\u003e:&\u003c/a\u003e\u003c/code\u003e operator and terminated with \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e.  They are stored using \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es so 2\n keys that \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e to the same \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value will overwrite each other.  The\n intension is that the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types will actually be \u003ccode\u003enewtype \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e newtype AppleID = AppleID Int\n newtype TreeID = TreeID Int\n type Orchard = EnumMapMap (TreeID :& K AppleID) Apple\n apple = lookup (TreeID 4 :& K AppleID 32) orchard\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e type is different to that used in \u003ca\u003eData.EnumMapMap.Lazy\u003c/a\u003e so only strict\n operations can be performed on a strict \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe functions are strict on values and keys.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "module",
        "fct-source": "src/Data-EnumMapMap-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict EnumMapMap Based upon Data.IntMap.Strict this version uses multi dimensional keys and Enum types instead of Int Keys are built using the operator and terminated with They are stored using Int so keys that Enum to the same Int value will overwrite each other The intension is that the Enum types will actually be newtype Int newtype AppleID AppleID Int newtype TreeID TreeID Int type Orchard EnumMapMap TreeID AppleID Apple apple lookup TreeID AppleID orchard The type is different to that used in Data.EnumMapMap.Lazy so only strict operations can be performed on strict EnumMapMap The functions are strict on values and keys",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#t::-38-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple keys are joined by the (\u003ccode\u003e\u003ca\u003e:&\u003c/a\u003e\u003c/code\u003e) constructor.\n\u003c/p\u003e\u003cpre\u003e multiKey :: Int :& Int :& K Int\n multiKey = 5 :& 6 :& K 5\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "data",
        "fct-source": "src/Data-EnumMapMap-Base.html#%3A%26",
        "fct-type": "data",
        "title": ":&"
      },
      "index": {
        "description": "Multiple keys are joined by the constructor multiKey Int Int Int multiKey",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": ":&",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#t:IsKey",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "class",
        "fct-source": "src/Data-EnumMapMap-Base.html#IsKey",
        "fct-type": "class",
        "title": "IsKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "IsKey",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Is Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#t:K",
      "description": {
        "fct-descr": "\u003cp\u003eKeys are terminated with the \u003ccode\u003e\u003ca\u003eK\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e\u003cpre\u003e singleKey :: K Int\n singleKey = K 5\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "newtype",
        "fct-source": "src/Data-EnumMapMap-Strict.html#K",
        "fct-type": "newtype",
        "title": "K"
      },
      "index": {
        "description": "Keys are terminated with the type singleKey Int singleKey",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "K",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#t:SubKey",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "class",
        "fct-source": "src/Data-EnumMapMap-Base.html#SubKey",
        "fct-type": "class",
        "title": "SubKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "SubKey",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Sub Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v::-38-",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "!k :& !t",
        "fct-source": "src/Data-EnumMapMap-Base.html#%3A%26",
        "fct-type": "function",
        "title": ":&"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": ":&",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:K",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "K k",
        "fct-source": "src/Data-EnumMapMap-Strict.html#K",
        "fct-type": "function",
        "title": "K"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "K",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k emm\u003c/code\u003e) alters the value at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(Maybe v -\u003e Maybe v) -\u003e k -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#alter",
        "fct-type": "method",
        "title": "alter"
      },
      "index": {
        "description": "The expression alter emm alters the value at or absence thereof alter can be used to insert delete or update value in an EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "",
        "signature": "(Maybe v-\u003eMaybe v)-\u003ek-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d1",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after 1 key.\n\u003c/p\u003e\u003cpre\u003e emm :: EnumMapMap (T1 :& T2 :& K T3) v\n splitKey d1 emm :: EnumMapMap (T1 :& K T2) (EnumMapMap (K T3) v)\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "Z",
        "fct-source": "src/Data-EnumMapMap-Base.html#d1",
        "fct-type": "function",
        "title": "d1"
      },
      "index": {
        "description": "Split after key emm EnumMapMap T1 T2 T3 splitKey d1 emm EnumMapMap T1 T2 EnumMapMap T3",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d1",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d10",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N (N (N (N Z))))))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d10",
        "fct-type": "function",
        "title": "d10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d10",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d2",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after 2 keys.\n\u003c/p\u003e\u003cpre\u003e emm :: EnumMapMap (T1 :& T2 :& K T3) v\n splitKey d1 emm :: EnumMapMap (K T1) (EnumMapMap (T2 :& K T3) v)\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N Z",
        "fct-source": "src/Data-EnumMapMap-Base.html#d2",
        "fct-type": "function",
        "title": "d2"
      },
      "index": {
        "description": "Split after keys emm EnumMapMap T1 T2 T3 splitKey d1 emm EnumMapMap T1 EnumMapMap T2 T3",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d2",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d3",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N Z)",
        "fct-source": "src/Data-EnumMapMap-Base.html#d3",
        "fct-type": "function",
        "title": "d3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d3",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d4",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N Z))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d4",
        "fct-type": "function",
        "title": "d4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d4",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d5",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N Z)))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d5",
        "fct-type": "function",
        "title": "d5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d5",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d6",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N Z))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d6",
        "fct-type": "function",
        "title": "d6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d6",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d7",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N Z)))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d7",
        "fct-type": "function",
        "title": "d7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d7",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d8",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N (N Z))))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d8",
        "fct-type": "function",
        "title": "d8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d8",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:d9",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "N (N (N (N (N (N (N (N Z)))))))",
        "fct-source": "src/Data-EnumMapMap-Base.html#d9",
        "fct-type": "function",
        "title": "d9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "d9",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a key and it's value from the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  If the key is not\n present the original \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Remove key and it value from the EnumMapMap If the key is not present the original EnumMapMap is returned",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "delete",
        "normalized": "a-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:deleteFindMin",
      "description": {
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e ((k, v), EnumMapMap k v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#deleteFindMin",
        "fct-type": "method",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "deleteFindMin",
        "normalized": "EnumMapMap a b-\u003e((a,b),EnumMapMap a b)",
        "package": "enummapmap",
        "partial": "Find Min",
        "signature": "EnumMapMap k v-\u003e((k,v),EnumMapMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eDifference between two \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#difference",
        "fct-type": "method",
        "title": "difference"
      },
      "index": {
        "description": "Difference between two EnumMapMap based on keys",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "difference",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:differenceSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe difference between an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e and an \u003ccode\u003eEnumMapSet\u003c/code\u003e.  If a key\n is present in the \u003ccode\u003eEnumMapSet\u003c/code\u003e it will not be present in the result.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap s () -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#differenceSet",
        "fct-type": "function",
        "title": "differenceSet"
      },
      "index": {
        "description": "The difference between an EnumMapMap and an EnumMapSet If key is present in the EnumMapSet it will not be present in the result",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "differenceSet",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap c()-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "EnumMapMap k v-\u003eEnumMapMap s()-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v1 -\u003e v2 -\u003e Maybe v1) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#differenceWith",
        "fct-type": "method",
        "title": "differenceWith"
      },
      "index": {
        "description": "Difference with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "differenceWith",
        "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eEnumMapMap b a-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003eMaybe v)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v1 -\u003e v2 -\u003e Maybe v1) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#differenceWithKey",
        "fct-type": "method",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "Difference with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "differenceWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eMaybe b)-\u003eEnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev-\u003eMaybe v)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements in ascending order of keys\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e [v]",
        "fct-source": "src/Data-EnumMapMap-Base.html#elems",
        "fct-type": "method",
        "title": "elems"
      },
      "index": {
        "description": "List of elements in ascending order of keys",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "elems",
        "normalized": "EnumMapMap a b-\u003e[b]",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003e[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "The empty EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "empty",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:emptySubTrees",
      "description": {
        "fct-descr": "\u003cp\u003eNo subtrees should be empty.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if one is.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Bool",
        "fct-source": "src/Data-EnumMapMap-Base.html#emptySubTrees",
        "fct-type": "method",
        "title": "emptySubTrees"
      },
      "index": {
        "description": "No subtrees should be empty Returns True if one is",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "emptySubTrees",
        "normalized": "EnumMapMap a b-\u003eBool",
        "package": "enummapmap",
        "partial": "Sub Trees",
        "signature": "EnumMapMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003eThe minimal key and value of the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e findMin empty -- ERROR, no minimal key\n findMin $ fromList [(K 1, \"a\", K 3, \"b\")] == (K 1, a)\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e (k, v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#findMin",
        "fct-type": "method",
        "title": "findMin"
      },
      "index": {
        "description": "The minimal key and value of the EnumMapMap findMin empty ERROR no minimal key findMin fromList",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "findMin",
        "normalized": "EnumMapMap a b-\u003e(a,b)",
        "package": "enummapmap",
        "partial": "Min",
        "signature": "EnumMapMap k v-\u003e(k,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eFold the values in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e using the given\n right-associative binary operator\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e t -\u003e t) -\u003e t -\u003e EnumMapMap k v -\u003e t",
        "fct-source": "src/Data-EnumMapMap-Base.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "Fold the values in the EnumMapMap using the given right-associative binary operator",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMapMap c a-\u003eb",
        "package": "enummapmap",
        "partial": "",
        "signature": "(v-\u003et-\u003et)-\u003et-\u003eEnumMapMap k v-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eFold the keys and values in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e using the given right-associative\n binary operator.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e t -\u003e t) -\u003e t -\u003e EnumMapMap k v -\u003e t",
        "fct-source": "src/Data-EnumMapMap-Base.html#foldrWithKey",
        "fct-type": "method",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Fold the keys and values in the EnumMapMap using the given right-associative binary operator",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "foldrWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eEnumMapMap a b-\u003ec",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003et-\u003et)-\u003et-\u003eEnumMapMap k v-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e from a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "[(k, v)] -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#fromList",
        "fct-type": "method",
        "title": "fromList"
      },
      "index": {
        "description": "Create an EnumMapMap from list of key value pairs",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "List",
        "signature": "[(k,v)]-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:fromSet",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003eEnumMapSet\u003c/code\u003e and a function which for each\n key computes it's value\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v) -\u003e EnumMapMap (Skey k) () -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#fromSet",
        "fct-type": "method",
        "title": "fromSet"
      },
      "index": {
        "description": "Build an EnumMapMap from an EnumMapSet and function which for each key computes it value",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "fromSet",
        "normalized": "(a-\u003eb)-\u003eEnumMapMap(Skey a)()-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "(k-\u003ev)-\u003eEnumMapMap(Skey k)()-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key/value pair into the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  Can also insert submaps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert new key value pair into the EnumMapMap Can also insert submaps",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "insert",
        "normalized": "a-\u003eResult a a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eResult k k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.  Can also insert submaps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(Result k1 k2 v -\u003e Result k1 k2 v -\u003e Result k1 k2 v) -\u003e k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#insertWith",
        "fct-type": "method",
        "title": "insertWith"
      },
      "index": {
        "description": "Insert with combining function Can also insert submaps",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "insertWith",
        "normalized": "(Result a a b-\u003eResult a a b-\u003eResult a a b)-\u003ea-\u003eResult a a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(Result k k v-\u003eResult k k v-\u003eResult k k v)-\u003ek-\u003eResult k k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.  Can also insert submaps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k1 -\u003e Result k1 k2 v -\u003e Result k1 k2 v -\u003e Result k1 k2 v) -\u003e k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#insertWithKey",
        "fct-type": "method",
        "title": "insertWithKey"
      },
      "index": {
        "description": "Insert with combining function Can also insert submaps",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "insertWithKey",
        "normalized": "(a-\u003eResult a a b-\u003eResult a a b-\u003eResult a a b)-\u003ea-\u003eResult a a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003eResult k k v-\u003eResult k k v-\u003eResult k k v)-\u003ek-\u003eResult k k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:intersectSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection of an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e and an \u003ccode\u003eEnumMapSet\u003c/code\u003e.  If a key is\n present in the EnumMapSet then it will be present in the resulting\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  Works with \u003ccode\u003eEnumMapSet\u003c/code\u003es that are submaps of the\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap s () -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersectSet",
        "fct-type": "function",
        "title": "intersectSet"
      },
      "index": {
        "description": "The intersection of an EnumMapMap and an EnumMapSet If key is present in the EnumMapSet then it will be present in the resulting EnumMapMap Works with EnumMapSet that are submaps of the EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "intersectSet",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap c()-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "EnumMapMap k v-\u003eEnumMapMap s()-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eThe (left-biased) intersection of two \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v1",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersection",
        "fct-type": "method",
        "title": "intersection"
      },
      "index": {
        "description": "The left-biased intersection of two EnumMapMap based on keys",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "intersection",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v1 -\u003e v2 -\u003e v3) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v3",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersectionWith",
        "fct-type": "method",
        "title": "intersectionWith"
      },
      "index": {
        "description": "The intersection with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "intersectionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMapMap b a-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:intersectionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe intersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v1 -\u003e v2 -\u003e v3) -\u003e EnumMapMap k v1 -\u003e EnumMapMap k v2 -\u003e EnumMapMap k v3",
        "fct-source": "src/Data-EnumMapMap-Base.html#intersectionWithKey",
        "fct-type": "method",
        "title": "intersectionWithKey"
      },
      "index": {
        "description": "The intersection with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "intersectionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:joinKey",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a key so that an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es becomes an\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e newtype ID = ID Int deriving Enum\n emm :: EnumMapMap (K Int) (EnumMapMap (K ID) Bool)\n res :: EnumMapMap (Int :& K ID) Bool\n res = joinKey emm\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ejoinKey\u003c/a\u003e\u003c/code\u003e is the opposite of \u003ccode\u003e\u003ca\u003esplitKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e emm = empty :: EnumMapMap (Int :& Int :& K ID) Bool)\n emm == joinKey $ splitKey d2 emm\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k (EnumMapMap k2 v) -\u003e EnumMapMap (Plus k k2) v",
        "fct-source": "src/Data-EnumMapMap-Base.html#joinKey",
        "fct-type": "method",
        "title": "joinKey"
      },
      "index": {
        "description": "Join key so that an EnumMapMap of EnumMapMap becomes an EnumMapMap newtype ID ID Int deriving Enum emm EnumMapMap Int EnumMapMap ID Bool res EnumMapMap Int ID Bool res joinKey emm joinKey is the opposite of splitKey emm empty EnumMapMap Int Int ID Bool emm joinKey splitKey d2 emm",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "joinKey",
        "normalized": "EnumMapMap a(EnumMapMap a b)-\u003eEnumMapMap(Plus a a)b",
        "package": "enummapmap",
        "partial": "Key",
        "signature": "EnumMapMap k(EnumMapMap k v)-\u003eEnumMapMap(Plus k k)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eList of keys\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e [k]",
        "fct-source": "src/Data-EnumMapMap-Base.html#keys",
        "fct-type": "method",
        "title": "keys"
      },
      "index": {
        "description": "List of keys",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "keys",
        "normalized": "EnumMapMap a b-\u003e[a]",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:keysSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEnumMapSet\u003c/a\u003e\u003c/code\u003e of the keys. \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e keys can be converted into\n \u003ccode\u003e\u003ca\u003eEnumMapSet\u003c/a\u003e\u003c/code\u003e keys using \u003ccode\u003e\u003ca\u003etoS\u003c/a\u003e\u003c/code\u003e, and back again using \u003ccode\u003e\u003ca\u003etoK\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap (Skey k) ()",
        "fct-source": "src/Data-EnumMapMap-Base.html#keysSet",
        "fct-type": "method",
        "title": "keysSet"
      },
      "index": {
        "description": "The EnumMapSet of the keys EnumMapMap keys can be converted into EnumMapSet keys using toS and back again using toK",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "keysSet",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap(Skey a)()",
        "package": "enummapmap",
        "partial": "Set",
        "signature": "EnumMapMap k v-\u003eEnumMapMap(Skey k)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup up the value at a key in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e emm = fromList [(3 :& K 1, \"a\")]\n lookup (3 :& K 1) emm == Just \"a\"\n lookup (2 :& K 1) emm == Nothing\n\u003c/pre\u003e\u003cp\u003eIf the given key has less dimensions then the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e then a submap\n is returned.\n\u003c/p\u003e\u003cpre\u003e emm2 = fromList [(3 :& 2 :& K 1, \"a\"), (3 :& 2 :& K 4, \"a\")]\n lookup (3 :& K 2) emm2 == Just $ fromList [(K 1, \"a\"), (K 4, \"a\")]\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapMap k2 v -\u003e Maybe (Result k1 k2 v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup up the value at key in the EnumMapMap emm fromList lookup emm Just lookup emm Nothing If the given key has less dimensions then the EnumMapMap then submap is returned emm2 fromList lookup emm2 Just fromList",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "lookup",
        "normalized": "a-\u003eEnumMapMap a b-\u003eMaybe(Result a a b)",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapMap k v-\u003eMaybe(Result k k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#map",
        "fct-type": "method",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eEnumMapMap c a-\u003eEnumMapMap c b",
        "package": "enummapmap",
        "partial": "",
        "signature": "(v-\u003et)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMap values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e Maybe t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#mapMaybe",
        "fct-type": "method",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Map values and collect the Just results",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eEnumMapMap c a-\u003eEnumMapMap c b",
        "package": "enummapmap",
        "partial": "Maybe",
        "signature": "(v-\u003eMaybe t)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e Maybe t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#mapMaybeWithKey",
        "fct-type": "method",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Map keys values and collect the Just results",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "mapMaybeWithKey",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eEnumMapMap a b-\u003eEnumMapMap a c",
        "package": "enummapmap",
        "partial": "Maybe With Key",
        "signature": "(k-\u003ev-\u003eMaybe t)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all key/value pairs in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e t) -\u003e EnumMapMap k v -\u003e EnumMapMap k t",
        "fct-source": "src/Data-EnumMapMap-Base.html#mapWithKey",
        "fct-type": "method",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all key value pairs in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMapMap a b-\u003eEnumMapMap a c",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003et)-\u003eEnumMapMap k v-\u003eEnumMapMap k t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eIs the key present in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapMap k2 v -\u003e Bool",
        "fct-source": "src/Data-EnumMapMap-Base.html#member",
        "fct-type": "method",
        "title": "member"
      },
      "index": {
        "description": "Is the key present in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "member",
        "normalized": "a-\u003eEnumMapMap a b-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:minViewWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the minimal (key,value) pair of the EnumMapMap, and the\n EnumMapMap stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Maybe ((k, v), EnumMapMap k v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#minViewWithKey",
        "fct-type": "method",
        "title": "minViewWithKey"
      },
      "index": {
        "description": "Retrieves the minimal key value pair of the EnumMapMap and the EnumMapMap stripped of that element or Nothing if passed an empty map",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "minViewWithKey",
        "normalized": "EnumMapMap a b-\u003eMaybe((a,b),EnumMapMap a b)",
        "package": "enummapmap",
        "partial": "View With Key",
        "signature": "EnumMapMap k v-\u003eMaybe((k,v),EnumMapMap k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eIs the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e\u003cp\u003eSubmaps can never be empty, so the following should always hold true:\n\u003c/p\u003e\u003cpre\u003e emm :: EnumMapMap (Int :& Int :& K ID) Bool)\n null $ splitKey x emm == False\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Bool",
        "fct-source": "src/Data-EnumMapMap-Base.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Is the EnumMapMap empty Submaps can never be empty so the following should always hold true emm EnumMapMap Int Int ID Bool null splitKey emm False",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "null",
        "normalized": "EnumMapMap a b-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e with one element\n\u003c/p\u003e\u003cpre\u003e singleton (5 :& K 3) \"a\" == fromList [(5 :& K 3, \"a\")]\n singleton (K 5) $ singleton (K 2) \"a\" == fromList [(5 :& K 3, \"a\")]\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e Result k1 k2 v -\u003e EnumMapMap k2 v",
        "fct-source": "src/Data-EnumMapMap-Base.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "An EnumMapMap with one element singleton fromList singleton singleton fromList",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "singleton",
        "normalized": "a-\u003eResult a a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eResult k k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e Int",
        "fct-source": "src/Data-EnumMapMap-Base.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "Number of elements in the EnumMapMap",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "size",
        "normalized": "EnumMapMap a b-\u003eInt",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:splitKey",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a key so that an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e becomes an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e newtype ID = ID Int deriving Enum\n emm = empty :: EnumMapMap (Int :& K ID) Bool\n res :: EnumMapMap (K ID) Bool\n res = lookup (K 5) $ splitKey d1 emm\n\u003c/pre\u003e\u003cp\u003eIf the level is too high then the compilation will fail with an error\n\u003c/p\u003e\u003cpre\u003e emm = empty :: EnumMapMap (Int :& Int :& K Int) Bool -- 3 levels\n res1 = splitKey d4 emm -- ERROR! Instance not found...\n res2 = splitKey d3 emm -- ERROR! Instance not found...\n res3 = splitKey d2 emm -- Good\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "z -\u003e EnumMapMap k v -\u003e EnumMapMap (Head k z) (EnumMapMap (Tail k z) v)",
        "fct-source": "src/Data-EnumMapMap-Base.html#splitKey",
        "fct-type": "function",
        "title": "splitKey"
      },
      "index": {
        "description": "Split key so that an EnumMapMap becomes an EnumMapMap of EnumMapMap newtype ID ID Int deriving Enum emm empty EnumMapMap Int ID Bool res EnumMapMap ID Bool res lookup splitKey d1 emm If the level is too high then the compilation will fail with an error emm empty EnumMapMap Int Int Int Bool levels res1 splitKey d4 emm ERROR Instance not found res2 splitKey d3 emm ERROR Instance not found res3 splitKey d2 emm Good",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "splitKey",
        "normalized": "a-\u003eEnumMapMap b c-\u003eEnumMapMap(Head b a)(EnumMapMap(Tail b a)c)",
        "package": "enummapmap",
        "partial": "Key",
        "signature": "z-\u003eEnumMapMap k v-\u003eEnumMapMap(Head k z)(EnumMapMap(Tail k z)v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:toK",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a key terminated with \u003ccode\u003eS\u003c/code\u003e into one terminated with \u003ccode\u003eK\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e s = 1 :& 2 :& S 3\n toK s == 1 :& 2 :& K 3\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "Skey k -\u003e k",
        "fct-source": "src/Data-EnumMapMap-Base.html#toK",
        "fct-type": "function",
        "title": "toK"
      },
      "index": {
        "description": "Convert key terminated with into one terminated with toK",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "toK",
        "normalized": "Skey a-\u003ea",
        "package": "enummapmap",
        "partial": "",
        "signature": "Skey k-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e to a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e [(k, v)]",
        "fct-source": "src/Data-EnumMapMap-Base.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "Convert the EnumMapMap to list of key value pairs",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "toList",
        "normalized": "EnumMapMap a b-\u003e[(a,b)]",
        "package": "enummapmap",
        "partial": "List",
        "signature": "EnumMapMap k v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:toS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a key terminated with \u003ccode\u003eK\u003c/code\u003e into one terminated with \u003ccode\u003eS\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e k = 1 :& 2 :& 'K' 3\n toS k == 1 :& 2 :& 'S' 3\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "k -\u003e Skey k",
        "fct-source": "src/Data-EnumMapMap-Base.html#toS",
        "fct-type": "function",
        "title": "toS"
      },
      "index": {
        "description": "Convert key terminated with into one terminated with toS",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "toS",
        "normalized": "a-\u003eSkey a",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eSkey k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:traverseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTraverseWithKey\u003c/code\u003e behaves exactly like a regular \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e except that\n the traversing function also has access to the key associated with a\n value.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e a -\u003e t b) -\u003e EnumMapMap k a -\u003e t (EnumMapMap k b)",
        "fct-source": "src/Data-EnumMapMap-Base.html#traverseWithKey",
        "fct-type": "method",
        "title": "traverseWithKey"
      },
      "index": {
        "description": "TraverseWithKey behaves exactly like regular traverse except that the traversing function also has access to the key associated with value",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "traverseWithKey",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eEnumMapMap a b-\u003ec(EnumMapMap a d)",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003et b)-\u003eEnumMapMap k a-\u003et(EnumMapMap k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eThe (left-biased) union of two \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es.\n It prefers the first \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e when duplicate keys are encountered.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k v -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "The left-biased union of two EnumMapMap It prefers the first EnumMapMap when duplicate keys are encountered",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "union",
        "normalized": "EnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e EnumMapMap k v -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unionWith",
        "fct-type": "method",
        "title": "unionWith"
      },
      "index": {
        "description": "The union with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMapMap b a-\u003eEnumMapMap b a-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e v -\u003e v -\u003e v) -\u003e EnumMapMap k v -\u003e EnumMapMap k v -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unionWithKey",
        "fct-type": "method",
        "title": "unionWithKey"
      },
      "index": {
        "description": "The union with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "unionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMapMap a b-\u003eEnumMapMap a b-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev-\u003ev)-\u003eEnumMapMap k v-\u003eEnumMapMap k v-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps.\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "[EnumMapMap k v] -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unions",
        "fct-type": "method",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of maps",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "unions",
        "normalized": "[EnumMapMap a b]-\u003eEnumMapMap a b",
        "package": "enummapmap",
        "partial": "",
        "signature": "[EnumMapMap k v]-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps with a combining function\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e [EnumMapMap k v] -\u003e EnumMapMap k v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unionsWith",
        "fct-type": "method",
        "title": "unionsWith"
      },
      "index": {
        "description": "The union of list of maps with combining function",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[EnumMapMap b a]-\u003eEnumMapMap b a",
        "package": "enummapmap",
        "partial": "With",
        "signature": "(v-\u003ev-\u003ev)-\u003e[EnumMapMap k v]-\u003eEnumMapMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapMap-Strict.html#v:unsafeJoinKey",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a key so that an \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003es becomes an\n \u003ccode\u003e\u003ca\u003eEnumMapMap\u003c/a\u003e\u003c/code\u003e.  The unsafe version does not check for empty subtrees, so\n it is faster.\n\u003c/p\u003e\u003cpre\u003e newtype ID = ID Int deriving Enum\n emm :: EnumMapMap (K Int) (EnumMapMap (K ID) Bool)\n res :: EnumMapMap (Int :& K ID) Bool\n res = unsafeJoinKey emm\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapMap.Strict",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapMap k (EnumMapMap k2 v) -\u003e EnumMapMap (Plus k k2) v",
        "fct-source": "src/Data-EnumMapMap-Base.html#unsafeJoinKey",
        "fct-type": "method",
        "title": "unsafeJoinKey"
      },
      "index": {
        "description": "Join key so that an EnumMapMap of EnumMapMap becomes an EnumMapMap The unsafe version does not check for empty subtrees so it is faster newtype ID ID Int deriving Enum emm EnumMapMap Int EnumMapMap ID Bool res EnumMapMap Int ID Bool res unsafeJoinKey emm",
        "hierarchy": "Data EnumMapMap Strict",
        "module": "Data.EnumMapMap.Strict",
        "name": "unsafeJoinKey",
        "normalized": "EnumMapMap a(EnumMapMap a b)-\u003eEnumMapMap(Plus a a)b",
        "package": "enummapmap",
        "partial": "Join Key",
        "signature": "EnumMapMap k(EnumMapMap k v)-\u003eEnumMapMap(Plus k k)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBased on \u003ca\u003eData.IntSet\u003c/a\u003e, this module provides multi-dimensional sets of\n \u003ccode\u003eEnums\u003c/code\u003e. Keys are built using \u003ccode\u003e\u003ca\u003e:&\u003c/a\u003e\u003c/code\u003e and terminated with \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e.  They are stored\n using \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es so 2 keys that \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e to the same \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value will overwrite\n each other.  The intension is that the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types will actually be \u003ccode\u003enewtype\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e newtype AppleID = AppleID Int\n newtype TreeID = TreeID Int\n type Orchard = EnumMapSet (TreeID :& S AppleID)\n applePresent = member (TreeID 4 :& K AppleID 32) orchard\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "module",
        "fct-source": "src/Data-EnumMapSet.html",
        "fct-type": "module",
        "title": "EnumMapSet"
      },
      "index": {
        "description": "Based on Data.IntSet this module provides multi-dimensional sets of Enums Keys are built using and terminated with They are stored using Int so keys that Enum to the same Int value will overwrite each other The intension is that the Enum types will actually be newtype Int newtype AppleID AppleID Int newtype TreeID TreeID Int type Orchard EnumMapSet TreeID AppleID applePresent member TreeID AppleID orchard",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "EnumMapSet",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Enum Map Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#t::-38-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple keys are joined by the (\u003ccode\u003e\u003ca\u003e:&\u003c/a\u003e\u003c/code\u003e) constructor.\n\u003c/p\u003e\u003cpre\u003e multiKey :: Int :& Int :& K Int\n multiKey = 5 :& 6 :& K 5\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "data",
        "fct-source": "src/Data-EnumMapMap-Base.html#%3A%26",
        "fct-type": "data",
        "title": ":&"
      },
      "index": {
        "description": "Multiple keys are joined by the constructor multiKey Int Int Int multiKey",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": ":&",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#t:EnumMapSet",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "type",
        "fct-source": "src/Data-EnumMapSet-Base.html#EnumMapSet",
        "fct-type": "type",
        "title": "EnumMapSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "EnumMapSet",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Enum Map Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#t:IsKey",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "class",
        "fct-source": "src/Data-EnumMapMap-Base.html#IsKey",
        "fct-type": "class",
        "title": "IsKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "IsKey",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Is Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#t:S",
      "description": {
        "fct-descr": "\u003cp\u003eKeys are terminated with the \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cpre\u003e singleKey :: S Int\n singleKey = S 5\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "newtype",
        "fct-source": "src/Data-EnumMapSet-Base.html#S",
        "fct-type": "newtype",
        "title": "S"
      },
      "index": {
        "description": "Keys are terminated with the type singleKey Int singleKey",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "S",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#t:SubKey",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "class",
        "fct-source": "src/Data-EnumMapMap-Base.html#SubKey",
        "fct-type": "class",
        "title": "SubKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "SubKey",
        "normalized": "",
        "package": "enummapmap",
        "partial": "Sub Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v::-38-",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "!k :& !t",
        "fct-source": "src/Data-EnumMapMap-Base.html#%3A%26",
        "fct-type": "function",
        "title": ":&"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": ":&",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:S",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "S k",
        "fct-source": "src/Data-EnumMapSet-Base.html#S",
        "fct-type": "function",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "S",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:all",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e Bool) -\u003e EnumMapSet k -\u003e Bool",
        "fct-source": "src/Data-EnumMapSet-Base.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eEnumMapSet a-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "(k-\u003eBool)-\u003eEnumMapSet k-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:delete",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapSet k2 -\u003e EnumMapSet k2",
        "fct-source": "src/Data-EnumMapSet-Base.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "delete",
        "normalized": "a-\u003eEnumMapSet a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapSet k-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:deleteFindMin",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e (k, EnumMapSet k)",
        "fct-source": "src/Data-EnumMapSet-Base.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "deleteFindMin",
        "normalized": "EnumMapSet a-\u003e(a,EnumMapSet a)",
        "package": "enummapmap",
        "partial": "Find Min",
        "signature": "EnumMapSet k-\u003e(k,EnumMapSet k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:difference",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e EnumMapSet k -\u003e EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "difference",
        "normalized": "EnumMapSet a-\u003eEnumMapSet a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapSet k-\u003eEnumMapSet k-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:empty",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "empty",
        "normalized": "",
        "package": "enummapmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:findMin",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e k",
        "fct-source": "src/Data-EnumMapSet-Base.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "findMin",
        "normalized": "EnumMapSet a-\u003ea",
        "package": "enummapmap",
        "partial": "Min",
        "signature": "EnumMapSet k-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:foldr",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "(k -\u003e t -\u003e t) -\u003e t -\u003e EnumMapSet k -\u003e t",
        "fct-source": "src/Data-EnumMapSet-Base.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMapSet a-\u003eb",
        "package": "enummapmap",
        "partial": "",
        "signature": "(k-\u003et-\u003et)-\u003et-\u003eEnumMapSet k-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:fromList",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "[k] -\u003e EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "fromList",
        "normalized": "[a]-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "List",
        "signature": "[k]-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:insert",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "k -\u003e EnumMapSet k -\u003e EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "insert",
        "normalized": "a-\u003eEnumMapSet a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapSet k-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:intersection",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e EnumMapSet k -\u003e EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "intersection",
        "normalized": "EnumMapSet a-\u003eEnumMapSet a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapSet k-\u003eEnumMapSet k-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:keys",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e [k]",
        "fct-source": "src/Data-EnumMapSet-Base.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "keys",
        "normalized": "EnumMapSet a-\u003e[a]",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapSet k-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a subtree in an \u003ccode\u003e\u003ca\u003eEnumMapSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ems = fromList [1 :& 2 :& K 3, 1 :& 2 :& K 4]\n lookup (1 :& K 2) ems == fromList [K 3, K 4]\n lookup (1 :& 2 :& K 3) -- ERROR: Use 'member' to check for a key.\n\u003c/pre\u003e",
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapSet k2 -\u003e Maybe (Result k1 k2 ())",
        "fct-source": "src/Data-EnumMapSet-Base.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup subtree in an EnumMapSet ems fromList lookup ems fromList lookup ERROR Use member to check for key",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "lookup",
        "normalized": "a-\u003eEnumMapSet a-\u003eMaybe(Result a a())",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapSet k-\u003eMaybe(Result k k())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the set obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt's worth noting that the size of the result may be smaller if,\n for some \u003ccode\u003e(x,y)\u003c/code\u003e, \u003ccode\u003ex /= y && f x == f y\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "(k1 -\u003e k2) -\u003e EnumMapSet k1 -\u003e EnumMapSet k2",
        "fct-source": "src/Data-EnumMapSet-Base.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map is the set obtained by applying to each element of It worth noting that the size of the result may be smaller if for some",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "map",
        "normalized": "(a-\u003ea)-\u003eEnumMapSet a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "(k-\u003ek)-\u003eEnumMapSet k-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:member",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "k1 -\u003e EnumMapSet k2 -\u003e Bool",
        "fct-source": "src/Data-EnumMapSet-Base.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "member",
        "normalized": "a-\u003eEnumMapSet a-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapSet k-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:minView",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e Maybe (k, EnumMapSet k)",
        "fct-source": "src/Data-EnumMapSet-Base.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "minView",
        "normalized": "EnumMapSet a-\u003eMaybe(a,EnumMapSet a)",
        "package": "enummapmap",
        "partial": "View",
        "signature": "EnumMapSet k-\u003eMaybe(k,EnumMapSet k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:null",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e Bool",
        "fct-source": "src/Data-EnumMapSet-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "null",
        "normalized": "EnumMapSet a-\u003eBool",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapSet k-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:singleton",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "k -\u003e EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "singleton",
        "normalized": "a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "k-\u003eEnumMapSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:size",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e Int",
        "fct-source": "src/Data-EnumMapSet-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "size",
        "normalized": "EnumMapSet a-\u003eInt",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapSet k-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:toList",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e [k]",
        "fct-source": "src/Data-EnumMapSet-Base.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "toList",
        "normalized": "EnumMapSet a-\u003e[a]",
        "package": "enummapmap",
        "partial": "List",
        "signature": "EnumMapSet k-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enummapmap/docs/Data-EnumMapSet.html#v:union",
      "description": {
        "fct-module": "Data.EnumMapSet",
        "fct-package": "enummapmap",
        "fct-signature": "EnumMapSet k -\u003e EnumMapSet k -\u003e EnumMapSet k",
        "fct-source": "src/Data-EnumMapSet-Base.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EnumMapSet",
        "module": "Data.EnumMapSet",
        "name": "union",
        "normalized": "EnumMapSet a-\u003eEnumMapSet a-\u003eEnumMapSet a",
        "package": "enummapmap",
        "partial": "",
        "signature": "EnumMapSet k-\u003eEnumMapSet k-\u003eEnumMapSet k"
      }
    }
  }
]