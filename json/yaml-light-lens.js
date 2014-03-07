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
        "word": "yaml-light-lens"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses for working with YAML structures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "Lens",
          "package": "yaml-light-lens",
          "source": "src/Data-Yaml-YamlLight-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "Lenses for working with YAML structures",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "Lens",
          "package": "yaml-light-lens",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between YAML values and common types of Haskell values.\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "AsYaml",
          "package": "yaml-light-lens",
          "source": "src/Data-Yaml-YamlLight-Lens.html#AsYaml",
          "type": "class"
        },
        "index": {
          "description": "Convert between YAML values and common types of Haskell values",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "AsYaml",
          "package": "yaml-light-lens",
          "partial": "As Yaml",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#t:AsYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between YAML values and corresponding common Haskell\n values.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"-2.3\" ^? _Yaml :: Maybe Double\n\u003c/code\u003e\u003c/strong\u003eJust (-2.3)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"7b.3\" ^? _Yaml :: Maybe Double\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"-23\" ^? _Yaml :: Maybe Int\n\u003c/code\u003e\u003c/strong\u003eJust (-23)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"Help, I'm trapped in a haddock factory!\" ^? _Yaml :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"Help, I'm trapped in a haddock factory!\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYStr \"An integer\" ^? _Yaml :: Maybe Integer\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eIf we just want to pull out those values that were successfully\n parsed,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet nums = YSeq [YStr \"3\", YStr \"2a\", YStr \"1\"]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enums ^.. each._Yaml :: [Int]\n\u003c/code\u003e\u003c/strong\u003e[3,1]\n\u003c/pre\u003e\u003cp\u003eAlternately, we may want to fail the entire parse if any element\n fails to parse.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esequenceA $ map (preview _Yaml) (nums ^.. each) :: Maybe [Int]\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet nums' = YSeq [YStr \"3\", YStr \"2\", YStr \"1\"]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esequenceA $ map (preview _Yaml) (nums' ^.. each) :: Maybe [Int]\n\u003c/code\u003e\u003c/strong\u003eJust [3,2,1]\n\u003c/pre\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "_Yaml",
          "package": "yaml-light-lens",
          "signature": "Prism' YamlLight a",
          "source": "src/Data-Yaml-YamlLight-Lens.html#_Yaml",
          "type": "function"
        },
        "index": {
          "description": "Convert between YAML values and corresponding common Haskell values YStr Yaml Maybe Double Just YStr b.3 Yaml Maybe Double Nothing YStr Yaml Maybe Int Just YStr Help trapped in haddock factory Yaml Maybe String Just Help trapped in haddock factory YStr An integer Yaml Maybe Integer Nothing If we just want to pull out those values that were successfully parsed let nums YSeq YStr YStr YStr nums each Yaml Int Alternately we may want to fail the entire parse if any element fails to parse sequenceA map preview Yaml nums each Maybe Int Nothing let nums YSeq YStr YStr YStr sequenceA map preview Yaml nums each Maybe Int Just",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "_Yaml",
          "package": "yaml-light-lens",
          "partial": "Yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:_Yaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "fromYaml",
          "package": "yaml-light-lens",
          "signature": "YamlLight -\u003e Maybe a",
          "source": "src/Data-Yaml-YamlLight-Lens.html#fromYaml",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "fromYaml",
          "normalized": "YamlLight-\u003eMaybe a",
          "package": "yaml-light-lens",
          "partial": "Yaml",
          "signature": "YamlLight-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:fromYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into a mapping. \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es are used as keys directly. If\n you wish to use a complex mapping key, see \u003ccode\u003e\u003ca\u003ekey'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet m = YMap $ Map.fromList [(YStr \"name\", YStr \"Tony Stark\"), (YStr \"sequels\", YStr \"2\")]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003em & key \"sequels\" . _Yaml +~ 1\n\u003c/code\u003e\u003c/strong\u003eYMap (fromList [(YStr \"name\",YStr \"Tony Stark\"),(YStr \"sequels\",YStr \"3\")])\n\u003c/pre\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "key",
          "package": "yaml-light-lens",
          "signature": "ByteString -\u003e Traversal' YamlLight YamlLight",
          "source": "src/Data-Yaml-YamlLight-Lens.html#key",
          "type": "function"
        },
        "index": {
          "description": "Lens into mapping ByteString are used as keys directly If you wish to use complex mapping key see key let YMap Map.fromList YStr name YStr Tony Stark YStr sequels YStr key sequels Yaml YMap fromList YStr name YStr Tony Stark YStr sequels YStr",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "key",
          "normalized": "ByteString-\u003eTraversal' YamlLight YamlLight",
          "package": "yaml-light-lens",
          "signature": "ByteString-\u003eTraversal' YamlLight YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into a mapping using a complex key.\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "key'",
          "package": "yaml-light-lens",
          "signature": "YamlLight -\u003e Traversal' YamlLight YamlLight",
          "source": "src/Data-Yaml-YamlLight-Lens.html#key%27",
          "type": "function"
        },
        "index": {
          "description": "Lens into mapping using complex key",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "key'",
          "normalized": "YamlLight-\u003eTraversal' YamlLight YamlLight",
          "package": "yaml-light-lens",
          "signature": "YamlLight-\u003eTraversal' YamlLight YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:key-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into a sequence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYSeq [YStr \"a\", YStr \"b\", YStr \"c\"] ^? nth 1\n\u003c/code\u003e\u003c/strong\u003eJust (YStr \"b\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYSeq [YStr \"a\", YStr \"b\", YStr \"c\"] & nth 1 .~ YStr \"B\"\n\u003c/code\u003e\u003c/strong\u003eYSeq [YStr \"a\",YStr \"B\",YStr \"c\"]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eYSeq [YStr \"a\", YStr \"b\", YStr \"c\"] ^? nth 2 . _Yaml :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"c\"\n\u003c/pre\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "nth",
          "package": "yaml-light-lens",
          "signature": "Int -\u003e Traversal' YamlLight YamlLight",
          "source": "src/Data-Yaml-YamlLight-Lens.html#nth",
          "type": "function"
        },
        "index": {
          "description": "Lens into sequence YSeq YStr YStr YStr nth Just YStr YSeq YStr YStr YStr nth YStr YSeq YStr YStr YStr YSeq YStr YStr YStr nth Yaml Maybe String Just",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "nth",
          "normalized": "Int-\u003eTraversal' YamlLight YamlLight",
          "package": "yaml-light-lens",
          "signature": "Int-\u003eTraversal' YamlLight YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:nth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "toYaml",
          "package": "yaml-light-lens",
          "signature": "a -\u003e YamlLight",
          "source": "src/Data-Yaml-YamlLight-Lens.html#toYaml",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "toYaml",
          "normalized": "a-\u003eYamlLight",
          "package": "yaml-light-lens",
          "partial": "Yaml",
          "signature": "a-\u003eYamlLight",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:toYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value from a \u003ccode\u003e\u003ca\u003eYamlLight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "yamlInt",
          "package": "yaml-light-lens",
          "signature": "YamlLight -\u003e Maybe b",
          "source": "src/Data-Yaml-YamlLight-Lens.html#yamlInt",
          "type": "function"
        },
        "index": {
          "description": "Try to parse an Integral value from YamlLight",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "yamlInt",
          "normalized": "YamlLight-\u003eMaybe a",
          "package": "yaml-light-lens",
          "partial": "Int",
          "signature": "YamlLight-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:yamlInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eYamlLight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "yamlReal",
          "package": "yaml-light-lens",
          "signature": "YamlLight -\u003e Maybe Double",
          "source": "src/Data-Yaml-YamlLight-Lens.html#yamlReal",
          "type": "function"
        },
        "index": {
          "description": "Try to parse Double from YamlLight",
          "hierarchy": "Data Yaml YamlLight Lens",
          "module": "Data.Yaml.YamlLight.Lens",
          "name": "yamlReal",
          "normalized": "YamlLight-\u003eMaybe Double",
          "package": "yaml-light-lens",
          "partial": "Real",
          "signature": "YamlLight-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light-lens/docs/Data-Yaml-YamlLight-Lens.html#v:yamlReal"
      }
    }
  ]
]