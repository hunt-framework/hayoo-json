[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the YAML syntax as defined in \u003ca\u003ehttp://www.yaml.org\u003c/a\u003e.\n Actually this file contains the parsing framework and includes (using CPP)\n the actual productions from \u003ccode\u003eReference.bnf\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parsing framework is fully streaming (generates output tokens\n \"immediately\").\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "module",
        "fct-source": "src/Text-Yaml-Reference.html",
        "fct-type": "module",
        "title": "Reference"
      },
      "index": {
        "description": "Implementation of the YAML syntax as defined in http www.yaml.org Actually this file contains the parsing framework and includes using CPP the actual productions from Reference.bnf The parsing framework is fully streaming generates output tokens immediately",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Reference",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Chomp",
      "description": {
        "fct-descr": "\u003cp\u003eChomp method.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "data",
        "fct-source": "src/Text-Yaml-Reference.html#Chomp",
        "fct-type": "data",
        "title": "Chomp"
      },
      "index": {
        "description": "Chomp method",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Chomp",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Chomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Code",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e codes.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "data",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "data",
        "title": "Code"
      },
      "index": {
        "description": "Token codes",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Code",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eProduction context.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "data",
        "fct-source": "src/Text-Yaml-Reference.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "Production context",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Context",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eParsed token.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "data",
        "fct-source": "src/Text-Yaml-Reference.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "Parsed token",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Token",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Tokenizer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e converts a (named) input text into a list of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e. Errors\n are reported as tokens with the \u003ccode\u003eError\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCode\u003c/a\u003e\u003c/code\u003e, and the unparsed text\n following an error may be attached as a final token (if the \u003ccode\u003eBool\u003c/code\u003e is\n \u003ccode\u003eTrue\u003c/code\u003e). Note that tokens are available \"immediately\", allowing for\n streaming of large YAML files with memory requirements depending only on the\n YAML nesting level.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "type",
        "fct-source": "src/Text-Yaml-Reference.html#Tokenizer",
        "fct-type": "type",
        "title": "Tokenizer"
      },
      "index": {
        "description": "Tokenizer converts named input text into list of Token Errors are reported as tokens with the Error Code and the unparsed text following an error may be attached as final token if the Bool is True Note that tokens are available immediately allowing for streaming of large YAML files with memory requirements depending only on the YAML nesting level",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Tokenizer",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Tokenizer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginAlias",
      "description": {
        "fct-descr": "\u003cp\u003eBegins alias.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginAlias",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginAlias"
      },
      "index": {
        "description": "Begins alias",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginAlias",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginAnchor",
      "description": {
        "fct-descr": "\u003cp\u003eBegins anchor.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginAnchor",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginAnchor"
      },
      "index": {
        "description": "Begins anchor",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginAnchor",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Anchor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginComment",
      "description": {
        "fct-descr": "\u003cp\u003eBegins comment.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginComment",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginComment"
      },
      "index": {
        "description": "Begins comment",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginComment",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginDirective",
      "description": {
        "fct-descr": "\u003cp\u003eBegins directive.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginDirective",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginDirective"
      },
      "index": {
        "description": "Begins directive",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginDirective",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Directive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginDocument",
      "description": {
        "fct-descr": "\u003cp\u003eBegins document.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginDocument",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginDocument"
      },
      "index": {
        "description": "Begins document",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginDocument",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginEscape",
      "description": {
        "fct-descr": "\u003cp\u003eBegins escape sequence.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginEscape",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginEscape"
      },
      "index": {
        "description": "Begins escape sequence",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginEscape",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginHandle",
      "description": {
        "fct-descr": "\u003cp\u003eBegins tag handle.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginHandle",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginHandle"
      },
      "index": {
        "description": "Begins tag handle",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginHandle",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginMapping",
      "description": {
        "fct-descr": "\u003cp\u003eBegins mapping content.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginMapping",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginMapping"
      },
      "index": {
        "description": "Begins mapping content",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginMapping",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginNode",
      "description": {
        "fct-descr": "\u003cp\u003eBegins complete node.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginNode",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginNode"
      },
      "index": {
        "description": "Begins complete node",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginNode",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginPair",
      "description": {
        "fct-descr": "\u003cp\u003eBegins mapping key:value pair.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginPair",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginPair"
      },
      "index": {
        "description": "Begins mapping key value pair",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginPair",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginProperties",
      "description": {
        "fct-descr": "\u003cp\u003eBegins node properties.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginProperties",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginProperties"
      },
      "index": {
        "description": "Begins node properties",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginProperties",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginScalar",
      "description": {
        "fct-descr": "\u003cp\u003eBegins scalar content.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginScalar",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginScalar"
      },
      "index": {
        "description": "Begins scalar content",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginScalar",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginSequence",
      "description": {
        "fct-descr": "\u003cp\u003eBegins sequence content.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginSequence",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginSequence"
      },
      "index": {
        "description": "Begins sequence content",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginSequence",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginStream",
      "description": {
        "fct-descr": "\u003cp\u003eBegins YAML stream.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginStream",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginStream"
      },
      "index": {
        "description": "Begins YAML stream",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginStream",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginTag",
      "description": {
        "fct-descr": "\u003cp\u003eBegins tag.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "BeginTag",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "BeginTag"
      },
      "index": {
        "description": "Begins tag",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "BeginTag",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Begin Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Bom",
      "description": {
        "fct-descr": "\u003cp\u003eBOM, contains \"\u003ccode\u003eTF8\u003c/code\u003e\", \"\u003ccode\u003eTF16LE\u003c/code\u003e\", \"\u003ccode\u003eTF32BE\u003c/code\u003e\", etc.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Bom",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Bom"
      },
      "index": {
        "description": "BOM contains TF8 TF16LE TF32BE etc",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Bom",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Bom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Break",
      "description": {
        "fct-descr": "\u003cp\u003eSeparation line break.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Break",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Break"
      },
      "index": {
        "description": "Separation line break",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Break",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Detected",
      "description": {
        "fct-descr": "\u003cp\u003eDetected parameter (for testing).\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Detected",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Detected"
      },
      "index": {
        "description": "Detected parameter for testing",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Detected",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Detected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:DirectivesEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDocument start marker.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "DirectivesEnd",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "DirectivesEnd"
      },
      "index": {
        "description": "Document start marker",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "DirectivesEnd",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Directives End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:DocumentEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDocument end marker.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "DocumentEnd",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "DocumentEnd"
      },
      "index": {
        "description": "Document end marker",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "DocumentEnd",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Document End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndAlias",
      "description": {
        "fct-descr": "\u003cp\u003eEnds alias.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndAlias",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndAlias"
      },
      "index": {
        "description": "Ends alias",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndAlias",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndAnchor",
      "description": {
        "fct-descr": "\u003cp\u003eEnds anchor.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndAnchor",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndAnchor"
      },
      "index": {
        "description": "Ends anchor",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndAnchor",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Anchor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndComment",
      "description": {
        "fct-descr": "\u003cp\u003eEnds comment.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndComment",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndComment"
      },
      "index": {
        "description": "Ends comment",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndComment",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndDirective",
      "description": {
        "fct-descr": "\u003cp\u003eEnds directive.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndDirective",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndDirective"
      },
      "index": {
        "description": "Ends directive",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndDirective",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Directive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndDocument",
      "description": {
        "fct-descr": "\u003cp\u003eEnds document.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndDocument",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndDocument"
      },
      "index": {
        "description": "Ends document",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndDocument",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndEscape",
      "description": {
        "fct-descr": "\u003cp\u003eEnds escape sequence.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndEscape",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndEscape"
      },
      "index": {
        "description": "Ends escape sequence",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndEscape",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndHandle",
      "description": {
        "fct-descr": "\u003cp\u003eEnds tag handle.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndHandle",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndHandle"
      },
      "index": {
        "description": "Ends tag handle",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndHandle",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndMapping",
      "description": {
        "fct-descr": "\u003cp\u003eEnds mapping content.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndMapping",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndMapping"
      },
      "index": {
        "description": "Ends mapping content",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndMapping",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndNode",
      "description": {
        "fct-descr": "\u003cp\u003eEnds complete node.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndNode",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndNode"
      },
      "index": {
        "description": "Ends complete node",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndNode",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndPair",
      "description": {
        "fct-descr": "\u003cp\u003eEnds mapping key:value pair.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndPair",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndPair"
      },
      "index": {
        "description": "Ends mapping key value pair",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndPair",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndProperties",
      "description": {
        "fct-descr": "\u003cp\u003eEnds node properties.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndProperties",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndProperties"
      },
      "index": {
        "description": "Ends node properties",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndProperties",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndScalar",
      "description": {
        "fct-descr": "\u003cp\u003eEnds scalar content.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndScalar",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndScalar"
      },
      "index": {
        "description": "Ends scalar content",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndScalar",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndSequence",
      "description": {
        "fct-descr": "\u003cp\u003eEnds sequence content.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndSequence",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndSequence"
      },
      "index": {
        "description": "Ends sequence content",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndSequence",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndStream",
      "description": {
        "fct-descr": "\u003cp\u003eEnds YAML stream.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndStream",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndStream"
      },
      "index": {
        "description": "Ends YAML stream",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndStream",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndTag",
      "description": {
        "fct-descr": "\u003cp\u003eEnds tag.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "EndTag",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "EndTag"
      },
      "index": {
        "description": "Ends tag",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "EndTag",
        "normalized": "",
        "package": "YamlReference",
        "partial": "End Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Error",
      "description": {
        "fct-descr": "\u003cp\u003eParsing error at this point.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Error",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "Parsing error at this point",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Error",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Indent",
      "description": {
        "fct-descr": "\u003cp\u003eIndentation spaces.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Indent",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Indent"
      },
      "index": {
        "description": "Indentation spaces",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Indent",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Indent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Indicator",
      "description": {
        "fct-descr": "\u003cp\u003eCharacter indicating structure.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Indicator",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Indicator"
      },
      "index": {
        "description": "Character indicating structure",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Indicator",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:LineFeed",
      "description": {
        "fct-descr": "\u003cp\u003eLine break normalized to content line feed.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "LineFeed",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "LineFeed"
      },
      "index": {
        "description": "Line break normalized to content line feed",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "LineFeed",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Line Feed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:LineFold",
      "description": {
        "fct-descr": "\u003cp\u003eLine break folded to content space.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "LineFold",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "LineFold"
      },
      "index": {
        "description": "Line break folded to content space",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "LineFold",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Line Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Meta",
      "description": {
        "fct-descr": "\u003cp\u003eNon-content (meta) text characters.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Meta",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Meta"
      },
      "index": {
        "description": "Non-content meta text characters",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Meta",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Text",
      "description": {
        "fct-descr": "\u003cp\u003eContent text characters.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Text",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "Content text characters",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Text",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Unparsed",
      "description": {
        "fct-descr": "\u003cp\u003eUnparsed due to errors (or at end of test).\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Unparsed",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "Unparsed"
      },
      "index": {
        "description": "Unparsed due to errors or at end of test",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "Unparsed",
        "normalized": "",
        "package": "YamlReference",
        "partial": "Unparsed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:White",
      "description": {
        "fct-descr": "\u003cp\u003eSeparation white space.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "White",
        "fct-source": "src/Text-Yaml-Reference.html#Code",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "Separation white space",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "White",
        "normalized": "",
        "package": "YamlReference",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:showTokens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eshowTokens tokens\u003c/code\u003e converts a list of \u003cem\u003etokens\u003c/em\u003e to a multi-line YEAST\n text.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "[Token] -\u003e String",
        "fct-source": "src/Text-Yaml-Reference.html#showTokens",
        "fct-type": "function",
        "title": "showTokens"
      },
      "index": {
        "description": "showTokens tokens converts list of tokens to multi-line YEAST text",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "showTokens",
        "normalized": "[Token]-\u003eString",
        "package": "YamlReference",
        "partial": "Tokens",
        "signature": "[Token]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizer name\u003c/code\u003e converts the production with the specified \u003cem\u003ename\u003c/em\u003e to a\n simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if it isn't known.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "String -\u003e Maybe Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizer",
        "fct-type": "function",
        "title": "tokenizer"
      },
      "index": {
        "description": "tokenizer name converts the production with the specified name to simple Tokenizer or Nothing if it isn known",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizer",
        "normalized": "String-\u003eMaybe Tokenizer",
        "package": "YamlReference",
        "partial": "",
        "signature": "String-\u003eMaybe Tokenizer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerNames",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizerNames\u003c/code\u003e returns the list of all productions (tokenizers).\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizerNames",
        "fct-type": "function",
        "title": "tokenizerNames"
      },
      "index": {
        "description": "tokenizerNames returns the list of all productions tokenizers",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizerNames",
        "normalized": "[String]",
        "package": "YamlReference",
        "partial": "Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizerWithC name c\u003c/code\u003e converts the production (that requires a \u003cem\u003ec\u003c/em\u003e\n argument) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if\n it isn't known.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "String -\u003e Context -\u003e Maybe Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizerWithC",
        "fct-type": "function",
        "title": "tokenizerWithC"
      },
      "index": {
        "description": "tokenizerWithC name converts the production that requires argument with the specified name to simple Tokenizer or Nothing if it isn known",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizerWithC",
        "normalized": "String-\u003eContext-\u003eMaybe Tokenizer",
        "package": "YamlReference",
        "partial": "With",
        "signature": "String-\u003eContext-\u003eMaybe Tokenizer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizerWithN name n\u003c/code\u003e converts the production (that requires an \u003cem\u003en\u003c/em\u003e\n argument) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if\n it isn't known.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "String -\u003e Int -\u003e Maybe Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizerWithN",
        "fct-type": "function",
        "title": "tokenizerWithN"
      },
      "index": {
        "description": "tokenizerWithN name converts the production that requires an argument with the specified name to simple Tokenizer or Nothing if it isn known",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizerWithN",
        "normalized": "String-\u003eInt-\u003eMaybe Tokenizer",
        "package": "YamlReference",
        "partial": "With",
        "signature": "String-\u003eInt-\u003eMaybe Tokenizer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithNC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizerWithNC name n c\u003c/code\u003e converts the production (that requires \u003cem\u003en\u003c/em\u003e and\n \u003cem\u003ec\u003c/em\u003e arguments) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003eNothing\u003c/code\u003e if it isn't known.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "String -\u003e Int -\u003e Context -\u003e Maybe Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizerWithNC",
        "fct-type": "function",
        "title": "tokenizerWithNC"
      },
      "index": {
        "description": "tokenizerWithNC name converts the production that requires and arguments with the specified name to simple Tokenizer or Nothing if it isn known",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizerWithNC",
        "normalized": "String-\u003eInt-\u003eContext-\u003eMaybe Tokenizer",
        "package": "YamlReference",
        "partial": "With NC",
        "signature": "String-\u003eInt-\u003eContext-\u003eMaybe Tokenizer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithNT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizerWithNT name n t\u003c/code\u003e converts the production (that requires \u003cem\u003en\u003c/em\u003e and\n \u003cem\u003et\u003c/em\u003e arguments) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003eNothing\u003c/code\u003e if it isn't known.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "String -\u003e Int -\u003e Chomp -\u003e Maybe Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizerWithNT",
        "fct-type": "function",
        "title": "tokenizerWithNT"
      },
      "index": {
        "description": "tokenizerWithNT name converts the production that requires and arguments with the specified name to simple Tokenizer or Nothing if it isn known",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizerWithNT",
        "normalized": "String-\u003eInt-\u003eChomp-\u003eMaybe Tokenizer",
        "package": "YamlReference",
        "partial": "With NT",
        "signature": "String-\u003eInt-\u003eChomp-\u003eMaybe Tokenizer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etokenizerWithT name t\u003c/code\u003e converts the production (that requires an \u003cem\u003et\u003c/em\u003e\n argument) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if\n it isn't known.\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "String -\u003e Chomp -\u003e Maybe Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#tokenizerWithT",
        "fct-type": "function",
        "title": "tokenizerWithT"
      },
      "index": {
        "description": "tokenizerWithT name converts the production that requires an argument with the specified name to simple Tokenizer or Nothing if it isn known",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "tokenizerWithT",
        "normalized": "String-\u003eChomp-\u003eMaybe Tokenizer",
        "package": "YamlReference",
        "partial": "With",
        "signature": "String-\u003eChomp-\u003eMaybe Tokenizer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:yaml",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eyaml name input\u003c/code\u003e converts the Unicode \u003cem\u003einput\u003c/em\u003e (called \u003cem\u003ename\u003c/em\u003e in error\n messages) to a list of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e according to the YAML spec. This is it!\n\u003c/p\u003e",
        "fct-module": "Text.Yaml.Reference",
        "fct-package": "YamlReference",
        "fct-signature": "Tokenizer",
        "fct-source": "src/Text-Yaml-Reference.html#yaml",
        "fct-type": "function",
        "title": "yaml"
      },
      "index": {
        "description": "yaml name input converts the Unicode input called name in error messages to list of Token according to the YAML spec This is it",
        "hierarchy": "Text Yaml Reference",
        "module": "Text.Yaml.Reference",
        "name": "yaml",
        "normalized": "",
        "package": "YamlReference",
        "partial": "",
        "signature": ""
      }
    }
  }
]