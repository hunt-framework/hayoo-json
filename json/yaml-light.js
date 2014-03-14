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
        "word": "yaml-light"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA light-weight wrapper with utility functions around HsSyck\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "YamlLight",
          "package": "yaml-light",
          "source": "src/Data-Yaml-YamlLight.html",
          "type": "module"
        },
        "index": {
          "description": "light-weight wrapper with utility functions around HsSyck",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "YamlLight",
          "package": "yaml-light",
          "partial": "Yaml Light",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA light-weight, single ADT representation of a yaml document in contrast with what is provided by HsSyck.\n       Note that the YMap is an actual Map from\n       Data.Map, so behavior with respect to identical keys and ordering of entries will behave as Data.Map\n       dictates. This behavior is also in compliance with the Yaml spec. If you currently rely on HsSyck's\n       preservation of ordering, you can also consider representing\n       such maps as sequences of single entry maps. See the examples of \"Ordered Mappings\" in the Yaml\n       spec: \u003ca\u003ehttp://www.yaml.org/spec/1.2/spec.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "YamlLight",
          "package": "yaml-light",
          "source": "src/Data-Yaml-YamlLight.html#YamlLight",
          "type": "data"
        },
        "index": {
          "description": "light-weight single ADT representation of yaml document in contrast with what is provided by HsSyck Note that the YMap is an actual Map from Data.Map so behavior with respect to identical keys and ordering of entries will behave as Data.Map dictates This behavior is also in compliance with the Yaml spec If you currently rely on HsSyck preservation of ordering you can also consider representing such maps as sequences of single entry maps See the examples of Ordered Mappings in the Yaml spec http www.yaml.org spec spec.html",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "YamlLight",
          "package": "yaml-light",
          "partial": "Yaml Light",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#t:YamlLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.YamlLight",
          "name": "YMap",
          "package": "yaml-light",
          "signature": "YMap (Map YamlLight YamlLight)",
          "source": "src/Data-Yaml-YamlLight.html#YamlLight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "YMap",
          "package": "yaml-light",
          "partial": "YMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:YMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.YamlLight",
          "name": "YNil",
          "package": "yaml-light",
          "signature": "YNil",
          "source": "src/Data-Yaml-YamlLight.html#YamlLight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "YNil",
          "package": "yaml-light",
          "partial": "YNil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:YNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.YamlLight",
          "name": "YSeq",
          "package": "yaml-light",
          "signature": "YSeq [YamlLight]",
          "source": "src/Data-Yaml-YamlLight.html#YamlLight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "YSeq",
          "normalized": "YSeq[YamlLight]",
          "package": "yaml-light",
          "partial": "YSeq",
          "signature": "YSeq[YamlLight]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:YSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.YamlLight",
          "name": "YStr",
          "package": "yaml-light",
          "signature": "YStr ByteString",
          "source": "src/Data-Yaml-YamlLight.html#YamlLight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "YStr",
          "package": "yaml-light",
          "partial": "YStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:YStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a YamlLight that is a YMap of keys to YSeqs, and return a list of (key,elem) pairs, where elem is an element\n       of the YSeq under key.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     key1: [val1, val2, val3]\n     key2: [val4, val5]\n\u003c/pre\u003e\u003cp\u003eWould become:\n\u003c/p\u003e\u003cpre\u003e\n     [(key1,val1),(key1,val2),(key1,val3),(key2,val4),(key2,val5)]\n\u003c/pre\u003e\u003cp\u003ewhere the precise ordering of the key1 and key2 pairs depends on the ordering of Data.Map.\n     Any values of keys that are not sequences will not appear in the output list.\n     Returns Nothing if not called on a YMap.\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "combineMappedSequences",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e Maybe [(YamlLight, YamlLight)]",
          "source": "src/Data-Yaml-YamlLight.html#combineMappedSequences",
          "type": "function"
        },
        "index": {
          "description": "Take YamlLight that is YMap of keys to YSeqs and return list of key elem pairs where elem is an element of the YSeq under key Example key1 val1 val2 val3 key2 val4 val5 Would become key1 val1 key1 val2 key1 val3 key2 val4 key2 val5 where the precise ordering of the key1 and key2 pairs depends on the ordering of Data.Map Any values of keys that are not sequences will not appear in the output list Returns Nothing if not called on YMap",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "combineMappedSequences",
          "normalized": "YamlLight-\u003eMaybe[(YamlLight,YamlLight)]",
          "package": "yaml-light",
          "partial": "Mapped Sequences",
          "signature": "YamlLight-\u003eMaybe[(YamlLight,YamlLight)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:combineMappedSequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine a sequence of YMaps into a list of (key,value) pairs. The ordering of the result preserves the ordering\n     of the sequence, but the ordering of the individual maps is as Data.Map handles it.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     - key1: val1\n       key2: val2\n     - key3: val3\n\u003c/pre\u003e\u003cp\u003eWould become:\n\u003c/p\u003e\u003cpre\u003e\n     [(key1,val1),(key2,val2),(key3,val3)]\n\u003c/pre\u003e\u003cp\u003ewhere key1 and key2 might be arranged differently as Data.Map would\n     arrange them. This does not enforce uniqueness of keys across different maps.\n     Any items of the sequence that are not maps will not be present in the output list.\n     Returns Nothing if not called on a Sequence\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "combineSequencedMaps",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e Maybe [(YamlLight, YamlLight)]",
          "source": "src/Data-Yaml-YamlLight.html#combineSequencedMaps",
          "type": "function"
        },
        "index": {
          "description": "Combine sequence of YMaps into list of key value pairs The ordering of the result preserves the ordering of the sequence but the ordering of the individual maps is as Data.Map handles it Example key1 val1 key2 val2 key3 val3 Would become key1 val1 key2 val2 key3 val3 where key1 and key2 might be arranged differently as Data.Map would arrange them This does not enforce uniqueness of keys across different maps Any items of the sequence that are not maps will not be present in the output list Returns Nothing if not called on Sequence",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "combineSequencedMaps",
          "normalized": "YamlLight-\u003eMaybe[(YamlLight,YamlLight)]",
          "package": "yaml-light",
          "partial": "Sequenced Maps",
          "signature": "YamlLight-\u003eMaybe[(YamlLight,YamlLight)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:combineSequencedMaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Syck YamlNode to a YamlLight\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "fromYamlNode",
          "package": "yaml-light",
          "signature": "YamlNode -\u003e YamlLight",
          "source": "src/Data-Yaml-YamlLight.html#fromYamlNode",
          "type": "function"
        },
        "index": {
          "description": "Convert Syck YamlNode to YamlLight",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "fromYamlNode",
          "normalized": "YamlNode-\u003eYamlLight",
          "package": "yaml-light",
          "partial": "Yaml Node",
          "signature": "YamlNode-\u003eYamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:fromYamlNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of all the terminal YStrs in a YamlLight tree, and couple them with a list of all the keys\n       above them.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n        - key1:\n            key1_1:\n              - \"str1\"\n              - \"str2\"\n            key1_2:\n              - \"str2\"\n              - \"str3\"\n        - key2:\n            \"str4\"\n        - \"str5\"\n\u003c/pre\u003e\u003cp\u003eWould become:\n\u003c/p\u003e\u003cpre\u003e\n        [(\"str1\",[key1_1, key1]), (\"str2\", [key1_1, key1]), (\"str2\", [key1_2, key1]), (\"str3\",[key1_2, key1]), (\"str4\",[key2]), (\"str5\",[])\n\u003c/pre\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "getTerminalsKeys",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e [(ByteString, [YamlLight])]",
          "source": "src/Data-Yaml-YamlLight.html#getTerminalsKeys",
          "type": "function"
        },
        "index": {
          "description": "Create list of all the terminal YStrs in YamlLight tree and couple them with list of all the keys above them Example key1 key1 str1 str2 key1 str2 str3 key2 str4 str5 Would become str1 key1 key1 str2 key1 key1 str2 key1 key1 str3 key1 key1 str4 key2 str5",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "getTerminalsKeys",
          "normalized": "YamlLight-\u003e[(ByteString,[YamlLight])]",
          "package": "yaml-light",
          "partial": "Terminals Keys",
          "signature": "YamlLight-\u003e[(ByteString,[YamlLight])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:getTerminalsKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the key's corresponding value in a Map. Returns Nothing if the YamlLight is not a map, or if\n the key is not found\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "lookupYL",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e YamlLight -\u003e Maybe YamlLight",
          "source": "src/Data-Yaml-YamlLight.html#lookupYL",
          "type": "function"
        },
        "index": {
          "description": "Lookup the key corresponding value in Map Returns Nothing if the YamlLight is not map or if the key is not found",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "lookupYL",
          "normalized": "YamlLight-\u003eYamlLight-\u003eMaybe YamlLight",
          "package": "yaml-light",
          "partial": "YL",
          "signature": "YamlLight-\u003eYamlLight-\u003eMaybe YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:lookupYL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral form of lookup. Will return the first element that satisfies predicate p, otherwise Nothing\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "lookupYLWith",
          "package": "yaml-light",
          "signature": "(YamlLight -\u003e Bool) -\u003e YamlLight -\u003e Maybe YamlLight",
          "source": "src/Data-Yaml-YamlLight.html#lookupYLWith",
          "type": "function"
        },
        "index": {
          "description": "General form of lookup Will return the first element that satisfies predicate otherwise Nothing",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "lookupYLWith",
          "normalized": "(YamlLight-\u003eBool)-\u003eYamlLight-\u003eMaybe YamlLight",
          "package": "yaml-light",
          "partial": "YLWith",
          "signature": "(YamlLight-\u003eBool)-\u003eYamlLight-\u003eMaybe YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:lookupYLWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a regular Haskell string\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "parseYaml",
          "package": "yaml-light",
          "signature": "String -\u003e IO YamlLight",
          "source": "src/Data-Yaml-YamlLight.html#parseYaml",
          "type": "function"
        },
        "index": {
          "description": "Parse regular Haskell string",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "parseYaml",
          "normalized": "String-\u003eIO YamlLight",
          "package": "yaml-light",
          "partial": "Yaml",
          "signature": "String-\u003eIO YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:parseYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a ByteString buffer (this is faster)\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "parseYamlBytes",
          "package": "yaml-light",
          "signature": "ByteString -\u003e IO YamlLight",
          "source": "src/Data-Yaml-YamlLight.html#parseYamlBytes",
          "type": "function"
        },
        "index": {
          "description": "Parse ByteString buffer this is faster",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "parseYamlBytes",
          "normalized": "ByteString-\u003eIO YamlLight",
          "package": "yaml-light",
          "partial": "Yaml Bytes",
          "signature": "ByteString-\u003eIO YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:parseYamlBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a file name, parse contents of file\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "parseYamlFile",
          "package": "yaml-light",
          "signature": "String -\u003e IO YamlLight",
          "source": "src/Data-Yaml-YamlLight.html#parseYamlFile",
          "type": "function"
        },
        "index": {
          "description": "Given file name parse contents of file",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "parseYamlFile",
          "normalized": "String-\u003eIO YamlLight",
          "package": "yaml-light",
          "partial": "Yaml File",
          "signature": "String-\u003eIO YamlLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:parseYamlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the contents of a map\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "unMap",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e Maybe (Map YamlLight YamlLight)",
          "source": "src/Data-Yaml-YamlLight.html#unMap",
          "type": "function"
        },
        "index": {
          "description": "Get the contents of map",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "unMap",
          "normalized": "YamlLight-\u003eMaybe(Map YamlLight YamlLight)",
          "package": "yaml-light",
          "partial": "Map",
          "signature": "YamlLight-\u003eMaybe(Map YamlLight YamlLight)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:unMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the contents of a sequence\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "unSeq",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e Maybe [YamlLight]",
          "source": "src/Data-Yaml-YamlLight.html#unSeq",
          "type": "function"
        },
        "index": {
          "description": "Get the contents of sequence",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "unSeq",
          "normalized": "YamlLight-\u003eMaybe[YamlLight]",
          "package": "yaml-light",
          "partial": "Seq",
          "signature": "YamlLight-\u003eMaybe[YamlLight]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:unSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the contents of a string\n\u003c/p\u003e",
          "module": "Data.Yaml.YamlLight",
          "name": "unStr",
          "package": "yaml-light",
          "signature": "YamlLight -\u003e Maybe ByteString",
          "source": "src/Data-Yaml-YamlLight.html#unStr",
          "type": "function"
        },
        "index": {
          "description": "Get the contents of string",
          "hierarchy": "Data Yaml YamlLight",
          "module": "Data.Yaml.YamlLight",
          "name": "unStr",
          "normalized": "YamlLight-\u003eMaybe ByteString",
          "package": "yaml-light",
          "partial": "Str",
          "signature": "YamlLight-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-light/docs/Data-Yaml-YamlLight.html#v:unStr"
      }
    }
  ]
]