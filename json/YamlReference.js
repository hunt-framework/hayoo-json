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
        "word": "YamlReference"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the YAML syntax as defined in \u003ca\u003ehttp://www.yaml.org\u003c/a\u003e.\n Actually this file contains the parsing framework and includes (using CPP)\n the actual productions from \u003ccode\u003eReference.bnf\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parsing framework is fully streaming (generates output tokens\n \"immediately\").\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Reference",
          "package": "YamlReference",
          "source": "src/Text-Yaml-Reference.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of the YAML syntax as defined in http www.yaml.org Actually this file contains the parsing framework and includes using CPP the actual productions from Reference.bnf The parsing framework is fully streaming generates output tokens immediately",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Reference",
          "package": "YamlReference",
          "partial": "Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChomp method.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Chomp",
          "package": "YamlReference",
          "source": "src/Text-Yaml-Reference.html#Chomp",
          "type": "data"
        },
        "index": {
          "description": "Chomp method",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Chomp",
          "package": "YamlReference",
          "partial": "Chomp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Chomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e codes.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Code",
          "package": "YamlReference",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "data"
        },
        "index": {
          "description": "Token codes",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Code",
          "package": "YamlReference",
          "partial": "Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduction context.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Context",
          "package": "YamlReference",
          "source": "src/Text-Yaml-Reference.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Production context",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Context",
          "package": "YamlReference",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed token.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Token",
          "package": "YamlReference",
          "source": "src/Text-Yaml-Reference.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Parsed token",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Token",
          "package": "YamlReference",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e converts a (named) input text into a list of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e. Errors\n are reported as tokens with the \u003ccode\u003eError\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCode\u003c/a\u003e\u003c/code\u003e, and the unparsed text\n following an error may be attached as a final token (if the \u003ccode\u003eBool\u003c/code\u003e is\n \u003ccode\u003eTrue\u003c/code\u003e). Note that tokens are available \"immediately\", allowing for\n streaming of large YAML files with memory requirements depending only on the\n YAML nesting level.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Tokenizer",
          "package": "YamlReference",
          "source": "src/Text-Yaml-Reference.html#Tokenizer",
          "type": "type"
        },
        "index": {
          "description": "Tokenizer converts named input text into list of Token Errors are reported as tokens with the Error Code and the unparsed text following an error may be attached as final token if the Bool is True Note that tokens are available immediately allowing for streaming of large YAML files with memory requirements depending only on the YAML nesting level",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Tokenizer",
          "package": "YamlReference",
          "partial": "Tokenizer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#t:Tokenizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins alias.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginAlias",
          "package": "YamlReference",
          "signature": "BeginAlias",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins alias",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginAlias",
          "package": "YamlReference",
          "partial": "Begin Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins anchor.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginAnchor",
          "package": "YamlReference",
          "signature": "BeginAnchor",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins anchor",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginAnchor",
          "package": "YamlReference",
          "partial": "Begin Anchor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins comment.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginComment",
          "package": "YamlReference",
          "signature": "BeginComment",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins comment",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginComment",
          "package": "YamlReference",
          "partial": "Begin Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins directive.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginDirective",
          "package": "YamlReference",
          "signature": "BeginDirective",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins directive",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginDirective",
          "package": "YamlReference",
          "partial": "Begin Directive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginDirective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins document.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginDocument",
          "package": "YamlReference",
          "signature": "BeginDocument",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins document",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginDocument",
          "package": "YamlReference",
          "partial": "Begin Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins escape sequence.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginEscape",
          "package": "YamlReference",
          "signature": "BeginEscape",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins escape sequence",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginEscape",
          "package": "YamlReference",
          "partial": "Begin Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins tag handle.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginHandle",
          "package": "YamlReference",
          "signature": "BeginHandle",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins tag handle",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginHandle",
          "package": "YamlReference",
          "partial": "Begin Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins mapping content.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginMapping",
          "package": "YamlReference",
          "signature": "BeginMapping",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins mapping content",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginMapping",
          "package": "YamlReference",
          "partial": "Begin Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins complete node.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginNode",
          "package": "YamlReference",
          "signature": "BeginNode",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins complete node",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginNode",
          "package": "YamlReference",
          "partial": "Begin Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins mapping key:value pair.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginPair",
          "package": "YamlReference",
          "signature": "BeginPair",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins mapping key value pair",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginPair",
          "package": "YamlReference",
          "partial": "Begin Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins node properties.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginProperties",
          "package": "YamlReference",
          "signature": "BeginProperties",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins node properties",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginProperties",
          "package": "YamlReference",
          "partial": "Begin Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins scalar content.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginScalar",
          "package": "YamlReference",
          "signature": "BeginScalar",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins scalar content",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginScalar",
          "package": "YamlReference",
          "partial": "Begin Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins sequence content.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginSequence",
          "package": "YamlReference",
          "signature": "BeginSequence",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins sequence content",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginSequence",
          "package": "YamlReference",
          "partial": "Begin Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins YAML stream.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginStream",
          "package": "YamlReference",
          "signature": "BeginStream",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins YAML stream",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginStream",
          "package": "YamlReference",
          "partial": "Begin Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins tag.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "BeginTag",
          "package": "YamlReference",
          "signature": "BeginTag",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Begins tag",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "BeginTag",
          "package": "YamlReference",
          "partial": "Begin Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:BeginTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBOM, contains \"\u003ccode\u003eTF8\u003c/code\u003e\", \"\u003ccode\u003eTF16LE\u003c/code\u003e\", \"\u003ccode\u003eTF32BE\u003c/code\u003e\", etc.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Bom",
          "package": "YamlReference",
          "signature": "Bom",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "BOM contains TF8 TF16LE TF32BE etc",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Bom",
          "package": "YamlReference",
          "partial": "Bom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Bom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparation line break.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Break",
          "package": "YamlReference",
          "signature": "Break",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Separation line break",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Break",
          "package": "YamlReference",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetected parameter (for testing).\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Detected",
          "package": "YamlReference",
          "signature": "Detected",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Detected parameter for testing",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Detected",
          "package": "YamlReference",
          "partial": "Detected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Detected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument start marker.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "DirectivesEnd",
          "package": "YamlReference",
          "signature": "DirectivesEnd",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Document start marker",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "DirectivesEnd",
          "package": "YamlReference",
          "partial": "Directives End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:DirectivesEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument end marker.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "DocumentEnd",
          "package": "YamlReference",
          "signature": "DocumentEnd",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Document end marker",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "DocumentEnd",
          "package": "YamlReference",
          "partial": "Document End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:DocumentEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds alias.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndAlias",
          "package": "YamlReference",
          "signature": "EndAlias",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends alias",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndAlias",
          "package": "YamlReference",
          "partial": "End Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds anchor.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndAnchor",
          "package": "YamlReference",
          "signature": "EndAnchor",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends anchor",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndAnchor",
          "package": "YamlReference",
          "partial": "End Anchor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds comment.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndComment",
          "package": "YamlReference",
          "signature": "EndComment",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends comment",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndComment",
          "package": "YamlReference",
          "partial": "End Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds directive.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndDirective",
          "package": "YamlReference",
          "signature": "EndDirective",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends directive",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndDirective",
          "package": "YamlReference",
          "partial": "End Directive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndDirective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds document.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndDocument",
          "package": "YamlReference",
          "signature": "EndDocument",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends document",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndDocument",
          "package": "YamlReference",
          "partial": "End Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds escape sequence.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndEscape",
          "package": "YamlReference",
          "signature": "EndEscape",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends escape sequence",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndEscape",
          "package": "YamlReference",
          "partial": "End Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds tag handle.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndHandle",
          "package": "YamlReference",
          "signature": "EndHandle",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends tag handle",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndHandle",
          "package": "YamlReference",
          "partial": "End Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds mapping content.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndMapping",
          "package": "YamlReference",
          "signature": "EndMapping",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends mapping content",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndMapping",
          "package": "YamlReference",
          "partial": "End Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds complete node.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndNode",
          "package": "YamlReference",
          "signature": "EndNode",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends complete node",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndNode",
          "package": "YamlReference",
          "partial": "End Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds mapping key:value pair.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndPair",
          "package": "YamlReference",
          "signature": "EndPair",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends mapping key value pair",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndPair",
          "package": "YamlReference",
          "partial": "End Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds node properties.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndProperties",
          "package": "YamlReference",
          "signature": "EndProperties",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends node properties",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndProperties",
          "package": "YamlReference",
          "partial": "End Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds scalar content.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndScalar",
          "package": "YamlReference",
          "signature": "EndScalar",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends scalar content",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndScalar",
          "package": "YamlReference",
          "partial": "End Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds sequence content.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndSequence",
          "package": "YamlReference",
          "signature": "EndSequence",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends sequence content",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndSequence",
          "package": "YamlReference",
          "partial": "End Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds YAML stream.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndStream",
          "package": "YamlReference",
          "signature": "EndStream",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends YAML stream",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndStream",
          "package": "YamlReference",
          "partial": "End Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds tag.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "EndTag",
          "package": "YamlReference",
          "signature": "EndTag",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Ends tag",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "EndTag",
          "package": "YamlReference",
          "partial": "End Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:EndTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing error at this point.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Error",
          "package": "YamlReference",
          "signature": "Error",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Parsing error at this point",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Error",
          "package": "YamlReference",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation spaces.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Indent",
          "package": "YamlReference",
          "signature": "Indent",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Indentation spaces",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Indent",
          "package": "YamlReference",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter indicating structure.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Indicator",
          "package": "YamlReference",
          "signature": "Indicator",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Character indicating structure",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Indicator",
          "package": "YamlReference",
          "partial": "Indicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Indicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine break normalized to content line feed.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "LineFeed",
          "package": "YamlReference",
          "signature": "LineFeed",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Line break normalized to content line feed",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "LineFeed",
          "package": "YamlReference",
          "partial": "Line Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:LineFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine break folded to content space.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "LineFold",
          "package": "YamlReference",
          "signature": "LineFold",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Line break folded to content space",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "LineFold",
          "package": "YamlReference",
          "partial": "Line Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:LineFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-content (meta) text characters.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Meta",
          "package": "YamlReference",
          "signature": "Meta",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Non-content meta text characters",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Meta",
          "package": "YamlReference",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent text characters.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Text",
          "package": "YamlReference",
          "signature": "Text",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Content text characters",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Text",
          "package": "YamlReference",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnparsed due to errors (or at end of test).\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "Unparsed",
          "package": "YamlReference",
          "signature": "Unparsed",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Unparsed due to errors or at end of test",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "Unparsed",
          "package": "YamlReference",
          "partial": "Unparsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:Unparsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparation white space.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "White",
          "package": "YamlReference",
          "signature": "White",
          "source": "src/Text-Yaml-Reference.html#Code",
          "type": "function"
        },
        "index": {
          "description": "Separation white space",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "White",
          "package": "YamlReference",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eshowTokens tokens\u003c/code\u003e converts a list of \u003cem\u003etokens\u003c/em\u003e to a multi-line YEAST\n text.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "showTokens",
          "package": "YamlReference",
          "signature": "[Token] -\u003e String",
          "source": "src/Text-Yaml-Reference.html#showTokens",
          "type": "function"
        },
        "index": {
          "description": "showTokens tokens converts list of tokens to multi-line YEAST text",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "showTokens",
          "normalized": "[Token]-\u003eString",
          "package": "YamlReference",
          "partial": "Tokens",
          "signature": "[Token]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:showTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizer name\u003c/code\u003e converts the production with the specified \u003cem\u003ename\u003c/em\u003e to a\n simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if it isn't known.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizer",
          "package": "YamlReference",
          "signature": "String -\u003e Maybe Tokenizer",
          "source": "src/Text-Yaml-Reference.html#tokenizer",
          "type": "function"
        },
        "index": {
          "description": "tokenizer name converts the production with the specified name to simple Tokenizer or Nothing if it isn known",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizer",
          "normalized": "String-\u003eMaybe Tokenizer",
          "package": "YamlReference",
          "signature": "String-\u003eMaybe Tokenizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizerNames\u003c/code\u003e returns the list of all productions (tokenizers).\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerNames",
          "package": "YamlReference",
          "signature": "[String]",
          "source": "src/Text-Yaml-Reference.html#tokenizerNames",
          "type": "function"
        },
        "index": {
          "description": "tokenizerNames returns the list of all productions tokenizers",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerNames",
          "normalized": "[String]",
          "package": "YamlReference",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizerWithC name c\u003c/code\u003e converts the production (that requires a \u003cem\u003ec\u003c/em\u003e\n argument) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if\n it isn't known.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithC",
          "package": "YamlReference",
          "signature": "String -\u003e Context -\u003e Maybe Tokenizer",
          "source": "src/Text-Yaml-Reference.html#tokenizerWithC",
          "type": "function"
        },
        "index": {
          "description": "tokenizerWithC name converts the production that requires argument with the specified name to simple Tokenizer or Nothing if it isn known",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithC",
          "normalized": "String-\u003eContext-\u003eMaybe Tokenizer",
          "package": "YamlReference",
          "partial": "With",
          "signature": "String-\u003eContext-\u003eMaybe Tokenizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizerWithN name n\u003c/code\u003e converts the production (that requires an \u003cem\u003en\u003c/em\u003e\n argument) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if\n it isn't known.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithN",
          "package": "YamlReference",
          "signature": "String -\u003e Int -\u003e Maybe Tokenizer",
          "source": "src/Text-Yaml-Reference.html#tokenizerWithN",
          "type": "function"
        },
        "index": {
          "description": "tokenizerWithN name converts the production that requires an argument with the specified name to simple Tokenizer or Nothing if it isn known",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithN",
          "normalized": "String-\u003eInt-\u003eMaybe Tokenizer",
          "package": "YamlReference",
          "partial": "With",
          "signature": "String-\u003eInt-\u003eMaybe Tokenizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizerWithNC name n c\u003c/code\u003e converts the production (that requires \u003cem\u003en\u003c/em\u003e and\n \u003cem\u003ec\u003c/em\u003e arguments) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003eNothing\u003c/code\u003e if it isn't known.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithNC",
          "package": "YamlReference",
          "signature": "String -\u003e Int -\u003e Context -\u003e Maybe Tokenizer",
          "source": "src/Text-Yaml-Reference.html#tokenizerWithNC",
          "type": "function"
        },
        "index": {
          "description": "tokenizerWithNC name converts the production that requires and arguments with the specified name to simple Tokenizer or Nothing if it isn known",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithNC",
          "normalized": "String-\u003eInt-\u003eContext-\u003eMaybe Tokenizer",
          "package": "YamlReference",
          "partial": "With NC",
          "signature": "String-\u003eInt-\u003eContext-\u003eMaybe Tokenizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithNC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizerWithNT name n t\u003c/code\u003e converts the production (that requires \u003cem\u003en\u003c/em\u003e and\n \u003cem\u003et\u003c/em\u003e arguments) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003eNothing\u003c/code\u003e if it isn't known.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithNT",
          "package": "YamlReference",
          "signature": "String -\u003e Int -\u003e Chomp -\u003e Maybe Tokenizer",
          "source": "src/Text-Yaml-Reference.html#tokenizerWithNT",
          "type": "function"
        },
        "index": {
          "description": "tokenizerWithNT name converts the production that requires and arguments with the specified name to simple Tokenizer or Nothing if it isn known",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithNT",
          "normalized": "String-\u003eInt-\u003eChomp-\u003eMaybe Tokenizer",
          "package": "YamlReference",
          "partial": "With NT",
          "signature": "String-\u003eInt-\u003eChomp-\u003eMaybe Tokenizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etokenizerWithT name t\u003c/code\u003e converts the production (that requires an \u003cem\u003et\u003c/em\u003e\n argument) with the specified \u003cem\u003ename\u003c/em\u003e to a simple \u003ccode\u003e\u003ca\u003eTokenizer\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eNothing\u003c/code\u003e if\n it isn't known.\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithT",
          "package": "YamlReference",
          "signature": "String -\u003e Chomp -\u003e Maybe Tokenizer",
          "source": "src/Text-Yaml-Reference.html#tokenizerWithT",
          "type": "function"
        },
        "index": {
          "description": "tokenizerWithT name converts the production that requires an argument with the specified name to simple Tokenizer or Nothing if it isn known",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "tokenizerWithT",
          "normalized": "String-\u003eChomp-\u003eMaybe Tokenizer",
          "package": "YamlReference",
          "partial": "With",
          "signature": "String-\u003eChomp-\u003eMaybe Tokenizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:tokenizerWithT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eyaml name input\u003c/code\u003e converts the Unicode \u003cem\u003einput\u003c/em\u003e (called \u003cem\u003ename\u003c/em\u003e in error\n messages) to a list of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e according to the YAML spec. This is it!\n\u003c/p\u003e",
          "module": "Text.Yaml.Reference",
          "name": "yaml",
          "package": "YamlReference",
          "signature": "Tokenizer",
          "source": "src/Text-Yaml-Reference.html#yaml",
          "type": "function"
        },
        "index": {
          "description": "yaml name input converts the Unicode input called name in error messages to list of Token according to the YAML spec This is it",
          "hierarchy": "Text Yaml Reference",
          "module": "Text.Yaml.Reference",
          "name": "yaml",
          "package": "YamlReference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/YamlReference/docs/Text-Yaml-Reference.html#v:yaml"
      }
    }
  ]
]