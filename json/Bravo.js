[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBravo templates can be read from strings via the \u003ccode\u003e\u003ca\u003emkTemplates\u003c/a\u003e\u003c/code\u003e, or from files via the\n    \u003ccode\u003e\u003ca\u003emkTemplatesFromFile\u003c/a\u003e\u003c/code\u003e Template Haskell functions, so you need to enable the TemplateHaskell\n    language extension when using Bravo in your Haskell application. Each read string or file can\n    contain multiple templates and additional comments. A single template is delimitated by an\n    opening splice \u003ccode\u003e{{ tpl \u003cem\u003ename\u003c/em\u003e }}\u003c/code\u003e and a closing splice \u003ccode\u003e{{ endtpl }}\u003c/code\u003e where \u003cem\u003ename\u003c/em\u003e is an\n    identifier starting with a lowercase letter. Characters before and after these splices are\n    considered to be template comments and therefore are ignored. Between these delimiters\n    multiple inner splices are allowed, which are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Normal text, i.e. character sequences not including \u003ccode\u003e{{\u003c/code\u003e or \u003ccode\u003e}}\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Comment splices \u003ccode\u003e{{- \u003cem\u003ecomment text\u003c/em\u003e -}}\u003c/code\u003e. These splices are only for documentary purposes\n      and will not occur in the produced template text.\n\u003c/li\u003e\u003cli\u003e Expression splices \u003ccode\u003e{{: \u003cem\u003eexpression\u003c/em\u003e }}\u003c/code\u003e. Here \u003cem\u003eexpression\u003c/em\u003e can be an arbitrary Haskell\n      expression that does not require any language extensions to be parsed. The expression itself\n      is not evaluated at compile time but rather at runtime and the result of evaluation will be\n      included in the produced template text. Note that the evaluated expression must be of type\n      \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, otherwise compile errors will occur in the produced declarations. Additionally,\n      template variables of the form \u003ccode\u003e$\u003cem\u003ename\u003c/em\u003e\u003c/code\u003e or \u003ccode\u003e$(\u003cem\u003ename\u003c/em\u003e)\u003c/code\u003e can be used within an expression.\n\u003c/li\u003e\u003cli\u003e Conditional splices \u003ccode\u003e{{ if \u003cem\u003econdition_1\u003c/em\u003e }} ... [ {{ elseif \u003cem\u003econdition_2\u003c/em\u003e }} ... ]*\n      [ {{ else }} ... ] {{ endif }}\u003c/code\u003e where each \u003ccode\u003e...\u003c/code\u003e stands for an arbitrary number of inner\n      splices. Multiple \u003ccode\u003eelseif\u003c/code\u003e splices\n      and/or a single \u003ccode\u003eelse\u003c/code\u003e splice are optional. \u003cem\u003econdition_n\u003c/em\u003e are Haskell expressions similar to\n      \u003cem\u003eexpression\u003c/em\u003e in expression splices, except that they have to evaluate to a value of type\n      \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e. All conditions will be evaluated in sequence and if one condition evaluates to\n      \u003ccode\u003eTrue\u003c/code\u003e, the subsequent template splices are added to the resulting template text; all\n      other inner splices are discarded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfter successful parsing, a new record data type with a single data constructor and a\n    corresponding instance of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is created for each template. Also each used template\n    variable is transformed to a new record field of the data constructor. When parsed with default\n    options, the simple template\n\u003c/p\u003e\u003cpre\u003e\n    {{tpl simple}}{{:$name}}'s favourite song is \"{{:$song}}\"{{endtpl}}\n\u003c/pre\u003e\u003cp\u003ewill be translated to the record data type\n\u003c/p\u003e\u003cpre\u003e\n    data TplSimple = TplSimple {\n                        simpleName :: String,\n                        simpleSong :: String\n                     }.\n\u003c/pre\u003e\u003cp\u003eTo customize the created data types, the \u003ccode\u003e\u003ca\u003emkTemplatesWithOptions\u003c/a\u003e\u003c/code\u003e or\n    \u003ccode\u003e\u003ca\u003emkTemplatesFromFileWithOptions\u003c/a\u003e\u003c/code\u003e functions can be used. Finally, use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function on\n    a value of the created data type to convert it into a string.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "module",
        "fct-source": "src/Text-Bravo.html",
        "fct-type": "module",
        "title": "Bravo"
      },
      "index": {
        "description": "Bravo templates can be read from strings via the mkTemplates or from files via the mkTemplatesFromFile Template Haskell functions so you need to enable the TemplateHaskell language extension when using Bravo in your Haskell application Each read string or file can contain multiple templates and additional comments single template is delimitated by an opening splice tpl name and closing splice endtpl where name is an identifier starting with lowercase letter Characters before and after these splices are considered to be template comments and therefore are ignored Between these delimiters multiple inner splices are allowed which are Normal text i.e character sequences not including or Comment splices comment text These splices are only for documentary purposes and will not occur in the produced template text Expression splices expression Here expression can be an arbitrary Haskell expression that does not require any language extensions to be parsed The expression itself is not evaluated at compile time but rather at runtime and the result of evaluation will be included in the produced template text Note that the evaluated expression must be of type String otherwise compile errors will occur in the produced declarations Additionally template variables of the form name or name can be used within an expression Conditional splices if condition elseif condition else endif where each stands for an arbitrary number of inner splices Multiple elseif splices and or single else splice are optional condition are Haskell expressions similar to expression in expression splices except that they have to evaluate to value of type Bool All conditions will be evaluated in sequence and if one condition evaluates to True the subsequent template splices are added to the resulting template text all other inner splices are discarded After successful parsing new record data type with single data constructor and corresponding instance of class Show is created for each template Also each used template variable is transformed to new record field of the data constructor When parsed with default options the simple template tpl simple name favourite song is song endtpl will be translated to the record data type data TplSimple TplSimple simpleName String simpleSong String To customize the created data types the mkTemplatesWithOptions or mkTemplatesFromFileWithOptions functions can be used Finally use the show function on value of the created data type to convert it into string",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "Bravo",
        "normalized": "",
        "package": "Bravo",
        "partial": "Bravo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#t:TplOptions",
      "description": {
        "fct-descr": "\u003cp\u003eA set of functions to change the style of the generated templates.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "data",
        "fct-source": "src/Text-Bravo-Translate.html#TplOptions",
        "fct-type": "data",
        "title": "TplOptions"
      },
      "index": {
        "description": "set of functions to change the style of the generated templates",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "TplOptions",
        "normalized": "",
        "package": "Bravo",
        "partial": "Tpl Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:TplOptions",
      "description": {
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "TplOptions",
        "fct-source": "src/Text-Bravo-Translate.html#TplOptions",
        "fct-type": "function",
        "title": "TplOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "TplOptions",
        "normalized": "",
        "package": "Bravo",
        "partial": "Tpl Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:defaultTplOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe default template generation options used by \u003ccode\u003e\u003ca\u003emkTemplates\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emkTemplatesFromFile\u003c/a\u003e\u003c/code\u003e.\n An example:\n\u003c/p\u003e\u003cpre\u003e\n     tplMkName defaultTplOptions \"example\"              == \"TplExample\"\n     tplMkFieldName defaultTplOptions \"example\" \"field\" == \"exampleField\"\n     tplModifyText defaultTplOptions                    == id\n\u003c/pre\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "TplOptions",
        "fct-source": "src/Text-Bravo-Translate.html#defaultTplOptions",
        "fct-type": "function",
        "title": "defaultTplOptions"
      },
      "index": {
        "description": "The default template generation options used by mkTemplates and mkTemplatesFromFile An example tplMkName defaultTplOptions example TplExample tplMkFieldName defaultTplOptions example field exampleField tplModifyText defaultTplOptions id",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "defaultTplOptions",
        "normalized": "",
        "package": "Bravo",
        "partial": "Tpl Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:mkTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a string into a list of template declarations.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "String -\u003e Q [Dec]",
        "fct-source": "src/Text-Bravo-Translate.html#mkTemplates",
        "fct-type": "function",
        "title": "mkTemplates"
      },
      "index": {
        "description": "Transforms string into list of template declarations",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "mkTemplates",
        "normalized": "String-\u003eQ[Dec]",
        "package": "Bravo",
        "partial": "Templates",
        "signature": "String-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:mkTemplatesFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eReads a file and transforms the read file content into a list of template declarations.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "FilePath -\u003e Q [Dec]",
        "fct-source": "src/Text-Bravo-Translate.html#mkTemplatesFromFile",
        "fct-type": "function",
        "title": "mkTemplatesFromFile"
      },
      "index": {
        "description": "Reads file and transforms the read file content into list of template declarations",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "mkTemplatesFromFile",
        "normalized": "FilePath-\u003eQ[Dec]",
        "package": "Bravo",
        "partial": "Templates From File",
        "signature": "FilePath-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:mkTemplatesFromFileWithOptions",
      "description": {
        "fct-descr": "\u003cp\u003eReads a file and transforms the read file content into a list of template declarations, using\n custom options for the data type generation.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "TplOptions -\u003e FilePath -\u003e Q [Dec]",
        "fct-source": "src/Text-Bravo-Translate.html#mkTemplatesFromFileWithOptions",
        "fct-type": "function",
        "title": "mkTemplatesFromFileWithOptions"
      },
      "index": {
        "description": "Reads file and transforms the read file content into list of template declarations using custom options for the data type generation",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "mkTemplatesFromFileWithOptions",
        "normalized": "TplOptions-\u003eFilePath-\u003eQ[Dec]",
        "package": "Bravo",
        "partial": "Templates From File With Options",
        "signature": "TplOptions-\u003eFilePath-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:mkTemplatesWithOptions",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a string into a list of template declarations, using custom options for the\n data type generation.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "TplOptions -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/Text-Bravo-Translate.html#mkTemplatesWithOptions",
        "fct-type": "function",
        "title": "mkTemplatesWithOptions"
      },
      "index": {
        "description": "Transforms string into list of template declarations using custom options for the data type generation",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "mkTemplatesWithOptions",
        "normalized": "TplOptions-\u003eString-\u003eQ[Dec]",
        "package": "Bravo",
        "partial": "Templates With Options",
        "signature": "TplOptions-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:tplMkFieldName",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the record field name for a given template name and field name.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "String -\u003e String -\u003e String",
        "fct-source": "src/Text-Bravo-Translate.html#TplOptions",
        "fct-type": "function",
        "title": "tplMkFieldName"
      },
      "index": {
        "description": "Creates the record field name for given template name and field name",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "tplMkFieldName",
        "normalized": "String-\u003eString-\u003eString",
        "package": "Bravo",
        "partial": "Mk Field Name",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:tplMkName",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the data type and constructor name for a given template name.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-Bravo-Translate.html#TplOptions",
        "fct-type": "function",
        "title": "tplMkName"
      },
      "index": {
        "description": "Creates the data type and constructor name for given template name",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "tplMkName",
        "normalized": "String-\u003eString",
        "package": "Bravo",
        "partial": "Mk Name",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Bravo/docs/Text-Bravo.html#v:tplModifyText",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is applied to each template text splice, allowing e.g. the\n removal of extra whitespace etc.\n\u003c/p\u003e",
        "fct-module": "Text.Bravo",
        "fct-package": "Bravo",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-Bravo-Translate.html#TplOptions",
        "fct-type": "function",
        "title": "tplModifyText"
      },
      "index": {
        "description": "This function is applied to each template text splice allowing e.g the removal of extra whitespace etc",
        "hierarchy": "Text Bravo",
        "module": "Text.Bravo",
        "name": "tplModifyText",
        "normalized": "String-\u003eString",
        "package": "Bravo",
        "partial": "Modify Text",
        "signature": "String-\u003eString"
      }
    }
  }
]