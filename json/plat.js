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
        "word": "plat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlat is a template engine, and, as such, it is designed to help you present your data\n as simple text with the markup of your choice.\n\u003c/p\u003e\u003cp\u003eIn order to use it, you'll have to do three things.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Prepare your data;\n\u003c/li\u003e\u003cli\u003e Create a template to insert this data into; and\n\u003c/li\u003e\u003cli\u003e Render the template with this data.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee the following sections for explanations and examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Plat",
          "name": "Plat",
          "package": "plat",
          "source": "src/Plat.html",
          "type": "module"
        },
        "index": {
          "description": "Plat is template engine and as such it is designed to help you present your data as simple text with the markup of your choice In order to use it you ll have to do three things Prepare your data Create template to insert this data into and Render the template with this data See the following sections for explanations and examples",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "Plat",
          "package": "plat",
          "partial": "Plat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plat",
          "name": "CharNumber",
          "package": "plat",
          "source": "src/Plat-Utils.html#CharNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "CharNumber",
          "package": "plat",
          "partial": "Char Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:CharNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the type of contexts. The type 'a' here doesn't matter; it's only present\n so that it would be possible to use the 'do' syntax.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "Context",
          "package": "plat",
          "source": "src/Plat-Context.html#Context",
          "type": "data"
        },
        "index": {
          "description": "This is the type of contexts The type here doesn matter it only present so that it would be possible to use the do syntax",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "Context",
          "package": "plat",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a universal type for everything that can be assigned to a field in the\n context. Normally you won't need this, and this type is subject to change, so,\n it's internals are hidden. The only way to create values of this type is to use\n the \u003ccode\u003e\u003ca\u003eec\u003c/a\u003e\u003c/code\u003e (or the \u003ccode\u003e\u003ca\u003eecs\u003c/a\u003e\u003c/code\u003e) function. The only way to use them is to insert them into the\n \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003e=:\u003c/a\u003e\u003c/code\u003e operator and then render into the template.\n\u003c/p\u003e\u003cp\u003eOne possible use of this type is to create a heterogeneous array. If you want\n an array in your context, containing, for example, both strings and booleans,\n you can do it like that: '\u003ccode\u003e[ec \"foo\", ec True]\u003c/code\u003e'.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ContextElement",
          "package": "plat",
          "source": "src/Plat-Context.html#ContextElement",
          "type": "data"
        },
        "index": {
          "description": "This is universal type for everything that can be assigned to field in the context Normally you won need this and this type is subject to change so it internals are hidden The only way to create values of this type is to use the ec or the ecs function The only way to use them is to insert them into the Context with the operator and then render into the template One possible use of this type is to create heterogeneous array If you want an array in your context containing for example both strings and booleans you can do it like that ec foo ec True",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ContextElement",
          "package": "plat",
          "partial": "Context Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:ContextElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an auxiliary type, which indicates what is the type we expected,\n or what is the actual type we've got.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ContextType",
          "package": "plat",
          "source": "src/Plat-Rendering-Errors.html#ContextType",
          "type": "data"
        },
        "index": {
          "description": "This is an auxiliary type which indicates what is the type we expected or what is the actual type we ve got",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ContextType",
          "package": "plat",
          "partial": "Context Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:ContextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the class of all types that can be used as values in the context. You can\n create additional ones, although we strictly discourage that.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ElementC",
          "package": "plat",
          "source": "src/Plat-Context.html#ElementC",
          "type": "class"
        },
        "index": {
          "description": "This is the class of all types that can be used as values in the context You can create additional ones although we strictly discourage that",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ElementC",
          "package": "plat",
          "partial": "Element",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:ElementC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plat",
          "name": "LineNumber",
          "package": "plat",
          "source": "src/Plat-Utils.html#LineNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "LineNumber",
          "package": "plat",
          "partial": "Line Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:LineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type indicates some position in the template.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "Pos",
          "package": "plat",
          "source": "src/Plat-Utils.html#Pos",
          "type": "type"
        },
        "index": {
          "description": "This type indicates some position in the template",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "Pos",
          "package": "plat",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents a rendering error. Note that we provide a \u003ccode\u003e\u003ca\u003erenderErr\u003c/a\u003e\u003c/code\u003e function\n which can be used if you want to present an error to the user.\n\u003c/p\u003e\u003cp\u003eThis type internals are exposed for you to pattern-match on them, although they can\n change in the future versions.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "RenderErr",
          "package": "plat",
          "source": "src/Plat-Rendering-Errors.html#RenderErr",
          "type": "data"
        },
        "index": {
          "description": "This type represents rendering error Note that we provide renderErr function which can be used if you want to present an error to the user This type internals are exposed for you to pattern-match on them although they can change in the future versions",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "RenderErr",
          "package": "plat",
          "partial": "Render Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:RenderErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBefore using the template, it should be compiled, so that compilation would not\n happen each time the template is used. This is the type of the compiled template.\n It's internals aren't exported, as they are subject to change in future versions.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "Template",
          "package": "plat",
          "source": "src/Plat-Template.html#Template",
          "type": "data"
        },
        "index": {
          "description": "Before using the template it should be compiled so that compilation would not happen each time the template is used This is the type of the compiled template It internals aren exported as they are subject to change in future versions",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "Template",
          "package": "plat",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a type of error messages you get when you're trying to compile\n a syntactically incorrect template. It's quite possible that you'll want to\n pattern-match on it, so it's internals are completely exposed, althoug it might\n change in future versions. Note that we also provide a function \u003ccode\u003e\u003ca\u003etemplateErr\u003c/a\u003e\u003c/code\u003e,\n which allows you to display errors with any formatting you like.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "TemplateErr",
          "package": "plat",
          "source": "src/Plat-Template-Errors.html#TemplateErr",
          "type": "data"
        },
        "index": {
          "description": "This is type of error messages you get when you re trying to compile syntactically incorrect template It quite possible that you ll want to pattern-match on it so it internals are completely exposed althoug it might change in future versions Note that we also provide function templateErr which allows you to display errors with any formatting you like",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "TemplateErr",
          "package": "plat",
          "partial": "Template Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:TemplateErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the part of an error message, which represents an erroneous opening\n command.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "TemplateErrLeft",
          "package": "plat",
          "source": "src/Plat-Template-Errors.html#TemplateErrLeft",
          "type": "data"
        },
        "index": {
          "description": "This is the part of an error message which represents an erroneous opening command",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "TemplateErrLeft",
          "package": "plat",
          "partial": "Template Err Left",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:TemplateErrLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the part of an error message which represents an erroneous command,\n which should follow some specific opening one.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "TemplateErrRight",
          "package": "plat",
          "source": "src/Plat-Template-Errors.html#TemplateErrRight",
          "type": "data"
        },
        "index": {
          "description": "This is the part of an error message which represents an erroneous command which should follow some specific opening one",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "TemplateErrRight",
          "package": "plat",
          "partial": "Template Err Right",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#t:TemplateErrRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn only \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e-specific operator.\n\u003c/p\u003e\u003cp\u003e'\u003ccode\u003ename =: value\u003c/code\u003e' tells render that '\u003ccode\u003evalue\u003c/code\u003e' should be substituted for\n '\u003ccode\u003ename\u003c/code\u003e' in a template.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "(=:)",
          "package": "plat",
          "signature": "String -\u003e a -\u003e Context ()",
          "source": "src/Plat-Context.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "An only Context specific operator name value tells render that value should be substituted for name in template",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "(=:) =:",
          "normalized": "String-\u003ea-\u003eContext()",
          "package": "plat",
          "signature": "String-\u003ea-\u003eContext()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plat",
          "name": "CtxArray",
          "package": "plat",
          "signature": "CtxArray",
          "source": "src/Plat-Rendering-Errors.html#ContextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "CtxArray",
          "package": "plat",
          "partial": "Ctx Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:CtxArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plat",
          "name": "CtxBool",
          "package": "plat",
          "signature": "CtxBool",
          "source": "src/Plat-Rendering-Errors.html#ContextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "CtxBool",
          "package": "plat",
          "partial": "Ctx Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:CtxBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plat",
          "name": "CtxRecord",
          "package": "plat",
          "signature": "CtxRecord",
          "source": "src/Plat-Rendering-Errors.html#ContextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "CtxRecord",
          "package": "plat",
          "partial": "Ctx Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:CtxRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plat",
          "name": "CtxString",
          "package": "plat",
          "signature": "CtxString",
          "source": "src/Plat-Rendering-Errors.html#ContextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "CtxString",
          "package": "plat",
          "partial": "Ctx String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:CtxString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate asks to check for some boolean expression, which happened to be false.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ErrorCheck",
          "package": "plat",
          "signature": "ErrorCheck Pos [ByteString]",
          "source": "src/Plat-Rendering-Errors.html#RenderErr",
          "type": "function"
        },
        "index": {
          "description": "Template asks to check for some boolean expression which happened to be false",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ErrorCheck",
          "normalized": "ErrorCheck Pos[ByteString]",
          "package": "plat",
          "partial": "Error Check",
          "signature": "ErrorCheck Pos[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:ErrorCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression can't be evaluated, since there is no field with the given name\n in the record.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ErrorField",
          "package": "plat",
          "signature": "ErrorField ContextType Pos [ByteString]",
          "source": "src/Plat-Rendering-Errors.html#RenderErr",
          "type": "function"
        },
        "index": {
          "description": "The expression can be evaluated since there is no field with the given name in the record",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ErrorField",
          "normalized": "ErrorField ContextType Pos[ByteString]",
          "package": "plat",
          "partial": "Error Field",
          "signature": "ErrorField ContextType Pos[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:ErrorField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are several options in the template, but all of them failed for some reason.\n\u003c/p\u003e\u003cp\u003eError messages for all options are listed here.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ErrorOption",
          "package": "plat",
          "signature": "ErrorOption (Pos, Pos) [RenderErr]",
          "source": "src/Plat-Rendering-Errors.html#RenderErr",
          "type": "function"
        },
        "index": {
          "description": "There are several options in the template but all of them failed for some reason Error messages for all options are listed here",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ErrorOption",
          "normalized": "ErrorOption(Pos,Pos)[RenderErr]",
          "package": "plat",
          "partial": "Error Option",
          "signature": "ErrorOption(Pos,Pos)[RenderErr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:ErrorOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression evaluates to something of the wrong type.\n\u003c/p\u003e\u003cp\u003eHere, first type is the actual one, while the second is the expected one.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ErrorType",
          "package": "plat",
          "signature": "ErrorType ContextType ContextType Pos [ByteString]",
          "source": "src/Plat-Rendering-Errors.html#RenderErr",
          "type": "function"
        },
        "index": {
          "description": "The expression evaluates to something of the wrong type Here first type is the actual one while the second is the expected one",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ErrorType",
          "normalized": "ErrorType ContextType ContextType Pos[ByteString]",
          "package": "plat",
          "partial": "Error Type",
          "signature": "ErrorType ContextType ContextType Pos[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:ErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an error with the '@[' command.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "LoopLeftTag",
          "package": "plat",
          "signature": "LoopLeftTag",
          "source": "src/Plat-Template-Errors.html#TemplateErrLeft",
          "type": "function"
        },
        "index": {
          "description": "There is an error with the command",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "LoopLeftTag",
          "package": "plat",
          "partial": "Loop Left Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:LoopLeftTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an error with the '@]' command.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "LoopRightTag",
          "package": "plat",
          "signature": "LoopRightTag",
          "source": "src/Plat-Template-Errors.html#TemplateErrRight",
          "type": "function"
        },
        "index": {
          "description": "There is an error with the command",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "LoopRightTag",
          "package": "plat",
          "partial": "Loop Right Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:LoopRightTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an opening command and a closing command, and they should match,\n but they don't.\n\u003c/p\u003e\u003cp\u003eIf, for example, you close a branching, started by '@{' command, with '@]'\n command, you get this error.\n\u003c/p\u003e\u003cp\u003eThere are two positions in this error message; the first is the position of the\n opening command, and the second is the position of the closing one.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "MismatchedTags",
          "package": "plat",
          "signature": "MismatchedTags TemplateErrLeft Pos TemplateErrRight Pos",
          "source": "src/Plat-Template-Errors.html#TemplateErr",
          "type": "function"
        },
        "index": {
          "description": "There is an opening command and closing command and they should match but they don If for example you close branching started by command with command you get this error There are two positions in this error message the first is the position of the opening command and the second is the position of the closing one",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "MismatchedTags",
          "package": "plat",
          "partial": "Mismatched Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:MismatchedTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is a command which should follow a specific opening command, like '@{'\n or '@[', but the latter could not be found.\n\u003c/p\u003e\u003cp\u003eFor example, if your template is '\u003ccode\u003efoo@|\u003c/code\u003e', then that's an error you'll get,\n as '@|' command should be between '@{' and '@}'.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "NoLeftTag",
          "package": "plat",
          "signature": "NoLeftTag TemplateErrRight Pos",
          "source": "src/Plat-Template-Errors.html#TemplateErr",
          "type": "function"
        },
        "index": {
          "description": "There is command which should follow specific opening command like or but the latter could not be found For example if your template is foo then that an error you ll get as command should be between and",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "NoLeftTag",
          "package": "plat",
          "partial": "No Left Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:NoLeftTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an opening command without a matching closing one.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "NoRightTag",
          "package": "plat",
          "signature": "NoRightTag TemplateErrLeft Pos",
          "source": "src/Plat-Template-Errors.html#TemplateErr",
          "type": "function"
        },
        "index": {
          "description": "There is an opening command without matching closing one",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "NoRightTag",
          "package": "plat",
          "partial": "No Right Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:NoRightTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an error with the '@|' command.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "OrRightTag",
          "package": "plat",
          "signature": "OrRightTag",
          "source": "src/Plat-Template-Errors.html#TemplateErrRight",
          "type": "function"
        },
        "index": {
          "description": "There is an error with the command",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "OrRightTag",
          "package": "plat",
          "partial": "Or Right Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:OrRightTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an error with the '@{' command.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "TryLeftTag",
          "package": "plat",
          "signature": "TryLeftTag",
          "source": "src/Plat-Template-Errors.html#TemplateErrLeft",
          "type": "function"
        },
        "index": {
          "description": "There is an error with the command",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "TryLeftTag",
          "package": "plat",
          "partial": "Try Left Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:TryLeftTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is an error with the '@}' command.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "TryRightTag",
          "package": "plat",
          "signature": "TryRightTag",
          "source": "src/Plat-Template-Errors.html#TemplateErrRight",
          "type": "function"
        },
        "index": {
          "description": "There is an error with the command",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "TryRightTag",
          "package": "plat",
          "partial": "Try Right Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:TryRightTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is something you should implement yourself, if you decide to\n create your own instance of \u003ccode\u003e\u003ca\u003eElementC\u003c/a\u003e\u003c/code\u003e. It converts the given value to the\n element that could be used in the context. Normally you can just go with the\n \u003ccode\u003e\u003ca\u003e=:\u003c/a\u003e\u003c/code\u003e operator without calling this function explicitly.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ec",
          "package": "plat",
          "signature": "c -\u003e ContextElement",
          "source": "src/Plat-Context.html#ec",
          "type": "method"
        },
        "index": {
          "description": "This function is something you should implement yourself if you decide to create your own instance of ElementC It converts the given value to the element that could be used in the context Normally you can just go with the operator without calling this function explicitly",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ec",
          "normalized": "a-\u003eContextElement",
          "package": "plat",
          "signature": "c-\u003eContextElement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:ec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is here for the same reason the \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e function is in the\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class &#8212; to allow \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, which are lists of characters, to be used\n differently from other lists.\n\u003c/p\u003e\u003cp\u003eIf you decide to create your own instance of \u003ccode\u003e\u003ca\u003eElementC\u003c/a\u003e\u003c/code\u003e, there is no need to\n implement this function, as it has the default implementation.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "ecs",
          "package": "plat",
          "signature": "[c] -\u003e ContextElement",
          "source": "src/Plat-Context.html#ecs",
          "type": "method"
        },
        "index": {
          "description": "This function is here for the same reason the showList function is in the Show class to allow String which are lists of characters to be used differently from other lists If you decide to create your own instance of ElementC there is no need to implement this function as it has the default implementation",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "ecs",
          "normalized": "[a]-\u003eContextElement",
          "package": "plat",
          "signature": "[c]-\u003eContextElement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:ecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is here for convenience only. If you have a list of elements\n that can be inserted in the template, this function gives you an array of records,\n one for each element of the original list, where each record contains the corresponding\n element in it's 'item' field. Additionally, it gives you boolean 'first' and\n 'last' fields, true for the first and last elements of the list respectively,\n and the 'only' field that is true if and only if the list contains just one element.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "listValues",
          "package": "plat",
          "signature": "[a] -\u003e [Context ()]",
          "source": "src/Plat-Context.html#listValues",
          "type": "function"
        },
        "index": {
          "description": "This function is here for convenience only If you have list of elements that can be inserted in the template this function gives you an array of records one for each element of the original list where each record contains the corresponding element in it item field Additionally it gives you boolean first and last fields true for the first and last elements of the list respectively and the only field that is true if and only if the list contains just one element",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "listValues",
          "normalized": "[a]-\u003e[Context()]",
          "package": "plat",
          "partial": "Values",
          "signature": "[a]-\u003e[Context()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:listValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is used by Plat to display the position. It gives you the record\n with two fields, \"line\" and \"column\", indicating the line number and the column\n number respectively.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "posContext",
          "package": "plat",
          "signature": "Pos -\u003e Context ()",
          "source": "src/Plat-Utils.html#posContext",
          "type": "function"
        },
        "index": {
          "description": "This function is used by Plat to display the position It gives you the record with two fields line and column indicating the line number and the column number respectively",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "posContext",
          "normalized": "Pos-\u003eContext()",
          "package": "plat",
          "partial": "Context",
          "signature": "Pos-\u003eContext()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:posContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the rendering functions. It substitutes values from the given \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e\n into the \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003e, returning result as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e or indicating a failure.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "render",
          "package": "plat",
          "signature": "Template -\u003e Context a -\u003e Either RenderErr ByteString",
          "source": "src/Plat-Rendering.html#render",
          "type": "function"
        },
        "index": {
          "description": "This is the rendering functions It substitutes values from the given Context into the Template returning result as ByteString or indicating failure",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "render",
          "normalized": "Template-\u003eContext a-\u003eEither RenderErr ByteString",
          "package": "plat",
          "signature": "Template-\u003eContext a-\u003eEither RenderErr ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is similar to \u003ccode\u003etemplateErr\u003c/code\u003e. It allows you to show the rendering error\n to the user. The context it generates always has a value named \"\u003ccode\u003epos\u003c/code\u003e\", indicating\n the position where an error occured; if multiple branches failed, there is also a value\n \"endpos\", which indicates the position where the list of branches ends. Positions are\n presented with the \u003ccode\u003e\u003ca\u003eposContext\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eOther field depend on the error. For a type mismatch, there are values \"expected\" and\n \"actual\", which are the strings 'string', 'boolean', 'array' or 'record',\n depending on what type the value should have and what type it actually has;\n there is also the \"expr\" field, which presents the list of names in the failing\n expression with the function \u003ccode\u003e\u003ca\u003elistValues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the required field wasn't found in the record, then there is the value \"field\",\n which is a list of names in the failing expression, and the value \"type\", which\n shows what type that expression should have.\n\u003c/p\u003e\u003cp\u003eIf there were multiple branches, all of them failing, then, apart from \"pos\" and\n \"endpos\" fields, there is a list of errors, one for each of the branches. These\n errors are presented using the \u003ccode\u003e\u003ca\u003erenderErr\u003c/a\u003e\u003c/code\u003e function recursively.\n\u003c/p\u003e\u003cp\u003eFinally, if the boolean value was checked and happened to be false, there would be\n the field \"check\", which, again, is a list of names in the expression, which\n evaluated to false.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "renderErr",
          "package": "plat",
          "signature": "RenderErr -\u003e Context ()",
          "source": "src/Plat-Rendering-Errors.html#renderErr",
          "type": "function"
        },
        "index": {
          "description": "This function is similar to templateErr It allows you to show the rendering error to the user The context it generates always has value named pos indicating the position where an error occured if multiple branches failed there is also value endpos which indicates the position where the list of branches ends Positions are presented with the posContext function Other field depend on the error For type mismatch there are values expected and actual which are the strings string boolean array or record depending on what type the value should have and what type it actually has there is also the expr field which presents the list of names in the failing expression with the function listValues If the required field wasn found in the record then there is the value field which is list of names in the failing expression and the value type which shows what type that expression should have If there were multiple branches all of them failing then apart from pos and endpos fields there is list of errors one for each of the branches These errors are presented using the renderErr function recursively Finally if the boolean value was checked and happened to be false there would be the field check which again is list of names in the expression which evaluated to false",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "renderErr",
          "normalized": "RenderErr-\u003eContext()",
          "package": "plat",
          "partial": "Err",
          "signature": "RenderErr-\u003eContext()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:renderErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is provided for convenience only. It does the same as the\n \u003ccode\u003e\u003ca\u003etemplateE\u003c/a\u003e\u003c/code\u003e function, except that instead of returning an error message\n it just throws a run-time error with the textual representation of that message.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "template",
          "package": "plat",
          "signature": "ByteString -\u003e Template",
          "source": "src/Plat-Template.html#template",
          "type": "function"
        },
        "index": {
          "description": "This function is provided for convenience only It does the same as the templateE function except that instead of returning an error message it just throws run-time error with the textual representation of that message",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "template",
          "normalized": "ByteString-\u003eTemplate",
          "package": "plat",
          "signature": "ByteString-\u003eTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a compilation function. It returns error message if the input string\n has syntax errors.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "templateE",
          "package": "plat",
          "signature": "ByteString -\u003e Either TemplateErr Template",
          "source": "src/Plat-Template.html#templateE",
          "type": "function"
        },
        "index": {
          "description": "This is compilation function It returns error message if the input string has syntax errors",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "templateE",
          "normalized": "ByteString-\u003eEither TemplateErr Template",
          "package": "plat",
          "signature": "ByteString-\u003eEither TemplateErr Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:templateE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you want to present your error to the user for some reason, you can do this\n with Plat itself. You'll need to create a template, as only you can know for sure\n how this error message should be rendered, but the context is here. It gives you\n \"left\" (respectively \"right\") field if there is the problem with the opening\n (respectively closing or separating) command, which is also a record with\n \"loop\", \"try\" and \"or\" boolean fields (the latter being absent in the\n \"left\" record) whose values depend on the command in question, and a \"pos\" field\n indicating the position of this command. It's possible to have both \"left\" and\n \"right\" fields present, if there are an opening and closing commands that don't\n match; obviously, in this case both \"left\" and \"right\" fields would have there\n own \"pos\" subfields.\n\u003c/p\u003e\u003cp\u003eThe position(s) is presented using the \u003ccode\u003e\u003ca\u003eposContext\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Plat",
          "name": "templateErr",
          "package": "plat",
          "signature": "TemplateErr -\u003e Context ()",
          "source": "src/Plat-Template-Errors.html#templateErr",
          "type": "function"
        },
        "index": {
          "description": "If you want to present your error to the user for some reason you can do this with Plat itself You ll need to create template as only you can know for sure how this error message should be rendered but the context is here It gives you left respectively right field if there is the problem with the opening respectively closing or separating command which is also record with loop try and or boolean fields the latter being absent in the left record whose values depend on the command in question and pos field indicating the position of this command It possible to have both left and right fields present if there are an opening and closing commands that don match obviously in this case both left and right fields would have there own pos subfields The position is presented using the posContext function",
          "hierarchy": "Plat",
          "module": "Plat",
          "name": "templateErr",
          "normalized": "TemplateErr-\u003eContext()",
          "package": "plat",
          "partial": "Err",
          "signature": "TemplateErr-\u003eContext()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plat/docs/Plat.html#v:templateErr"
      }
    }
  ]
]