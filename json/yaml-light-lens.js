[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses for working with YAML structures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "module",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "Lenses for working with YAML structures",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "yaml-light-lens",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#t:AsYaml",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between YAML values and common types of Haskell values.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "class",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#AsYaml",
        "fct-type": "class",
        "title": "AsYaml"
      },
      "index": {
        "description": "Convert between YAML values and common types of Haskell values",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "AsYaml",
        "normalized": "",
        "package": "yaml-light-lens",
        "partial": "As Yaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:_Yaml",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between YAML values and corresponding common Haskell\n values.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"-2.3\" ^? _Yaml :: Maybe Double\n\u003c/code\u003e\u003c/strong\u003eJust (-2.3)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"7b.3\" ^? _Yaml :: Maybe Double\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"-23\" ^? _Yaml :: Maybe Int\n\u003c/code\u003e\u003c/strong\u003eJust (-23)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"Help, I'm trapped in a haddock factory!\" ^? _Yaml :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"Help, I'm trapped in a haddock factory!\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"An integer\" ^? _Yaml :: Maybe Integer\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eIf we just want to pull out those values that were successfully\n parsed,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet nums = YSeq [YStr \"3\", YStr \"2a\", YStr \"1\"]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enums ^.. each._Yaml :: [Int]\n\u003c/code\u003e\u003c/strong\u003e[3,1]\n\u003c/pre\u003e\u003cp\u003eAlternately, we may want to fail the entire parse if any element\n fails to parse.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esequenceA $ map (preview _Yaml) (nums ^.. each) :: Maybe [Int]\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet nums' = YSeq [YStr \"3\", YStr \"2\", YStr \"1\"]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esequenceA $ map (preview _Yaml) (nums' ^.. each) :: Maybe [Int]\n\u003c/code\u003e\u003c/strong\u003eJust [3,2,1]\n\u003c/pre\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "Prism' YamlLight a",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#_Yaml",
        "fct-type": "function",
        "title": "_Yaml"
      },
      "index": {
        "description": "Convert between YAML values and corresponding common Haskell values YStr Yaml Maybe Double Just YStr b.3 Yaml Maybe Double Nothing YStr Yaml Maybe Int Just YStr Help trapped in haddock factory Yaml Maybe String Just Help trapped in haddock factory YStr An integer Yaml Maybe Integer Nothing If we just want to pull out those values that were successfully parsed let nums YSeq YStr YStr YStr nums each Yaml Int Alternately we may want to fail the entire parse if any element fails to parse sequenceA map preview Yaml nums each Maybe Int Nothing let nums YSeq YStr YStr YStr sequenceA map preview Yaml nums each Maybe Int Just",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "_Yaml",
        "normalized": "",
        "package": "yaml-light-lens",
        "partial": "Yaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:fromYaml",
      "description": {
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "YamlLight -\u003e Maybe a",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#fromYaml",
        "fct-type": "method",
        "title": "fromYaml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "fromYaml",
        "normalized": "YamlLight-\u003eMaybe a",
        "package": "yaml-light-lens",
        "partial": "Yaml",
        "signature": "YamlLight-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:key",
      "description": {
        "fct-descr": "\u003cp\u003eLens into a mapping. \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es are used as keys directly. If\n you wish to use a complex mapping key, see \u003ccode\u003e\u003ca\u003ekey'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet m = YMap $ Map.fromList [(YStr \"name\", YStr \"Tony Stark\"), (YStr \"sequels\", YStr \"2\")]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003em & key \"sequels\" . _Yaml +~ 1\n\u003c/code\u003e\u003c/strong\u003eYMap (fromList [(YStr \"name\",YStr \"Tony Stark\"),(YStr \"sequels\",YStr \"3\")])\n\u003c/pre\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "ByteString -\u003e Traversal' YamlLight YamlLight",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "Lens into mapping ByteString are used as keys directly If you wish to use complex mapping key see key let YMap Map.fromList YStr name YStr Tony Stark YStr sequels YStr key sequels Yaml YMap fromList YStr name YStr Tony Stark YStr sequels YStr",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "key",
        "normalized": "ByteString-\u003eTraversal' YamlLight YamlLight",
        "package": "yaml-light-lens",
        "partial": "",
        "signature": "ByteString-\u003eTraversal' YamlLight YamlLight"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:key-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLens into a mapping using a complex key.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "YamlLight -\u003e Traversal' YamlLight YamlLight",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#key%27",
        "fct-type": "function",
        "title": "key'"
      },
      "index": {
        "description": "Lens into mapping using complex key",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "key'",
        "normalized": "YamlLight-\u003eTraversal' YamlLight YamlLight",
        "package": "yaml-light-lens",
        "partial": "",
        "signature": "YamlLight-\u003eTraversal' YamlLight YamlLight"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:nth",
      "description": {
        "fct-descr": "\u003cp\u003eLens into a sequence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYSeq [YStr \"a\", YStr \"b\", YStr \"c\"] ^? nth 1\n\u003c/code\u003e\u003c/strong\u003eJust (YStr \"b\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYSeq [YStr \"a\", YStr \"b\", YStr \"c\"] & nth 1 .~ YStr \"B\"\n\u003c/code\u003e\u003c/strong\u003eYSeq [YStr \"a\",YStr \"B\",YStr \"c\"]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYSeq [YStr \"a\", YStr \"b\", YStr \"c\"] ^? nth 2 . _Yaml :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"c\"\n\u003c/pre\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "Int -\u003e Traversal' YamlLight YamlLight",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#nth",
        "fct-type": "function",
        "title": "nth"
      },
      "index": {
        "description": "Lens into sequence YSeq YStr YStr YStr nth Just YStr YSeq YStr YStr YStr nth YStr YSeq YStr YStr YStr YSeq YStr YStr YStr nth Yaml Maybe String Just",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "nth",
        "normalized": "Int-\u003eTraversal' YamlLight YamlLight",
        "package": "yaml-light-lens",
        "partial": "",
        "signature": "Int-\u003eTraversal' YamlLight YamlLight"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:toYaml",
      "description": {
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "a -\u003e YamlLight",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#toYaml",
        "fct-type": "method",
        "title": "toYaml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "toYaml",
        "normalized": "a-\u003eYamlLight",
        "package": "yaml-light-lens",
        "partial": "Yaml",
        "signature": "a-\u003eYamlLight"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:yamlInt",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value from a \u003ccode\u003e\u003ca\u003eYamlLight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "YamlLight -\u003e Maybe b",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#yamlInt",
        "fct-type": "function",
        "title": "yamlInt"
      },
      "index": {
        "description": "Try to parse an Integral value from YamlLight",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "yamlInt",
        "normalized": "YamlLight-\u003eMaybe a",
        "package": "yaml-light-lens",
        "partial": "Int",
        "signature": "YamlLight-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:yamlReal",
      "description": {
        "fct-descr": "\u003cp\u003eTry to parse a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eYamlLight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml.YamlLight.Lens",
        "fct-package": "yaml-light-lens",
        "fct-signature": "YamlLight -\u003e Maybe Double",
        "fct-source": "src/Data-Yaml-YamlLight-Lens.html#yamlReal",
        "fct-type": "function",
        "title": "yamlReal"
      },
      "index": {
        "description": "Try to parse Double from YamlLight",
        "hierarchy": "Data Yaml YamlLight Lens",
        "module": "Data.Yaml.YamlLight.Lens",
        "name": "yamlReal",
        "normalized": "YamlLight-\u003eMaybe Double",
        "package": "yaml-light-lens",
        "partial": "Real",
        "signature": "YamlLight-\u003eMaybe Double"
      }
    }
  }
]