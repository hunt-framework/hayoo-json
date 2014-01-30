[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Eval.html#",
      "description": {
        "fct-module": "Text.Webrexp.Eval",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp-Eval.html",
        "fct-type": "module",
        "title": "Eval"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Eval",
        "module": "Text.Webrexp.Eval",
        "name": "Eval",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Eval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Eval.html#v:evalAction",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate embedded action in WebRexp\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Eval",
        "fct-package": "Webrexp",
        "fct-signature": "ActionExpr -\u003e Maybe (EvalState node rezPath) -\u003e WebContextT array node rezPath m (ActionValue, Maybe (EvalState node rezPath))",
        "fct-source": "src/Text-Webrexp-Eval-Action.html#evalAction",
        "fct-type": "function",
        "title": "evalAction"
      },
      "index": {
        "description": "Evaluate embedded action in WebRexp",
        "hierarchy": "Text Webrexp Eval",
        "module": "Text.Webrexp.Eval",
        "name": "evalAction",
        "normalized": "ActionExpr-\u003eMaybe(EvalState a b)-\u003eWebContextT c a b d(ActionValue,Maybe(EvalState a b))",
        "package": "Webrexp",
        "partial": "Action",
        "signature": "ActionExpr-\u003eMaybe(EvalState node rezPath)-\u003eWebContextT array node rezPath m(ActionValue,Maybe(EvalState node rezPath))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Eval.html#v:evalWebRexpFor",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the leaf nodes of a webrexp, this way the code\n can be shared between the Breadth first evaluator and the\n Depth first one.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Eval",
        "fct-package": "Webrexp",
        "fct-signature": "WebRexp -\u003e EvalState node rezPath -\u003e WebContextT array node rezPath m (Bool, [EvalState node rezPath])",
        "fct-source": "src/Text-Webrexp-Eval.html#evalWebRexpFor",
        "fct-type": "function",
        "title": "evalWebRexpFor"
      },
      "index": {
        "description": "Evaluate the leaf nodes of webrexp this way the code can be shared between the Breadth first evaluator and the Depth first one",
        "hierarchy": "Text Webrexp Eval",
        "module": "Text.Webrexp.Eval",
        "name": "evalWebRexpFor",
        "normalized": "WebRexp-\u003eEvalState a b-\u003eWebContextT c a b d(Bool,[EvalState a b])",
        "package": "Webrexp",
        "partial": "Web Rexp For",
        "signature": "WebRexp-\u003eEvalState node rezPath-\u003eWebContextT array node rezPath m(Bool,[EvalState node rezPath])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatypes used to describe webrexps, and some helper functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp-Exprtypes.html",
        "fct-type": "module",
        "title": "Exprtypes"
      },
      "index": {
        "description": "Datatypes used to describe webrexps and some helper functions",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Exprtypes",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Exprtypes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:ActionExpr",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent an action Each production\n of the grammar more or less map to a\n data constructor of this type.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "data",
        "title": "ActionExpr"
      },
      "index": {
        "description": "Represent an action Each production of the grammar more or less map to data constructor of this type",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "ActionExpr",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Action Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:BuiltinFunc",
      "description": {
        "fct-descr": "\u003cp\u003eType used to index built-in functions \n in actions.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "data",
        "title": "BuiltinFunc"
      },
      "index": {
        "description": "Type used to index built-in functions in actions",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinFunc",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:NodeRange",
      "description": {
        "fct-descr": "\u003cp\u003eRanges to be able to filter nodes by position.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#NodeRange",
        "fct-type": "data",
        "title": "NodeRange"
      },
      "index": {
        "description": "Ranges to be able to filter nodes by position",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "NodeRange",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Node Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:Op",
      "description": {
        "fct-descr": "\u003cp\u003eDefinitions of the operators available in\n the actions of the webrexp.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "Definitions of the operators available in the actions of the webrexp",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Op",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:RepeatCount",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
        "fct-type": "data",
        "title": "RepeatCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "RepeatCount",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Repeat Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:WebRef",
      "description": {
        "fct-descr": "\u003cp\u003erepresent an element\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRef",
        "fct-type": "data",
        "title": "WebRef"
      },
      "index": {
        "description": "represent an element",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "WebRef",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Web Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:WebRexp",
      "description": {
        "fct-descr": "\u003cp\u003eType representation of web-regexp,\n main type.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "data",
        "title": "WebRexp"
      },
      "index": {
        "description": "Type representation of web-regexp main type",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "WebRexp",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Web Rexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:ARef",
      "description": {
        "fct-descr": "\u003cp\u003eFind a value of a given attribute for\n the current element.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "ARef String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "ARef"
      },
      "index": {
        "description": "Find value of given attribute for the current element",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "ARef",
        "normalized": "",
        "package": "Webrexp",
        "partial": "ARef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Action",
      "description": {
        "fct-descr": "\u003cp\u003e\"{ ... }\"\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Action ActionExpr",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Action",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:ActionExprs",
      "description": {
        "fct-descr": "\u003cp\u003e{ ... ; ... ; ... ; ... }\n A list of action to execute, each\n one must return a \u003ccode\u003evalid\u003c/code\u003e value to\n continue the evaluation\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "ActionExprs [ActionExpr]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "ActionExprs"
      },
      "index": {
        "description": "list of action to execute each one must return valid value to continue the evaluation",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "ActionExprs",
        "normalized": "ActionExprs[ActionExpr]",
        "package": "Webrexp",
        "partial": "Action Exprs",
        "signature": "ActionExprs[ActionExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Alternative",
      "description": {
        "fct-descr": "\u003cp\u003e'|' Represent two alternative path, if\n the first fail, the second one is taken\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Alternative WebRexp WebRexp",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Alternative"
      },
      "index": {
        "description": "Represent two alternative path if the first fail the second one is taken",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Alternative",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Alternative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Attrib",
      "description": {
        "fct-descr": "\u003cp\u003e@... Check for the presence of an attribute\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Attrib WebRef String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRef",
        "fct-type": "function",
        "title": "Attrib"
      },
      "index": {
        "description": "Check for the presence of an attribute",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Attrib",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BinOp",
      "description": {
        "fct-descr": "\u003cp\u003eBasic binary opertor application\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BinOp Op ActionExpr ActionExpr",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "BinOp"
      },
      "index": {
        "description": "Basic binary opertor application",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BinOp",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Bin Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Branch",
      "description": {
        "fct-descr": "\u003cp\u003e( ... ; ... ; ... )\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Branch [WebRexp]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Branch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Branch",
        "normalized": "Branch[WebRexp]",
        "package": "Webrexp",
        "partial": "Branch",
        "signature": "Branch[WebRexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinFormat",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BuiltinFormat",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "function",
        "title": "BuiltinFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinFormat",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinSubsitute",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BuiltinSubsitute",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "function",
        "title": "BuiltinSubsitute"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinSubsitute",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin Subsitute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinSystem",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BuiltinSystem",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "function",
        "title": "BuiltinSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinSystem",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinToNum",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BuiltinToNum",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "function",
        "title": "BuiltinToNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinToNum",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin To Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinToString",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BuiltinToString",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "function",
        "title": "BuiltinToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinToString",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin To String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinTrim",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "BuiltinTrim",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
        "fct-type": "function",
        "title": "BuiltinTrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "BuiltinTrim",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Builtin Trim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Call",
      "description": {
        "fct-descr": "\u003cp\u003efuncName(..., ...)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Call BuiltinFunc [ActionExpr]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "Call"
      },
      "index": {
        "description": "funcName",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Call",
        "normalized": "Call BuiltinFunc[ActionExpr]",
        "package": "Webrexp",
        "partial": "Call",
        "signature": "Call BuiltinFunc[ActionExpr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:ConstrainedRef",
      "description": {
        "fct-descr": "\u003cp\u003eThis constructor is an optimisation, it\n combine an Ref followed by an action, where\n every action is a predicate. Help pruning\n quickly the evaluation tree in DFS evaluation.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "ConstrainedRef WebRef ActionExpr",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "ConstrainedRef"
      },
      "index": {
        "description": "This constructor is an optimisation it combine an Ref followed by an action where every action is predicate Help pruning quickly the evaluation tree in DFS evaluation",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "ConstrainedRef",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Constrained Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:CstI",
      "description": {
        "fct-descr": "\u003cp\u003eAn integer constant.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "CstI Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "CstI"
      },
      "index": {
        "description": "An integer constant",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "CstI",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Cst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:CstS",
      "description": {
        "fct-descr": "\u003cp\u003eA string constant\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "CstS String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "CstS"
      },
      "index": {
        "description": "string constant",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "CstS",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Cst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DeepOutputAction",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a node and all it's children into text.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "DeepOutputAction",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "DeepOutputAction"
      },
      "index": {
        "description": "Translate node and all it children into text",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "DeepOutputAction",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Deep Output Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DiggLink",
      "description": {
        "fct-descr": "\u003cp\u003e'\u003e\u003e' operator in the language, used\n to follow hyper link\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "DiggLink",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "DiggLink"
      },
      "index": {
        "description": "operator in the language used to follow hyper link",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "DiggLink",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Digg Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DirectChild",
      "description": {
        "fct-descr": "\u003cp\u003eFind children who are the different descendent of\n the current nodes.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "DirectChild WebRef",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "DirectChild"
      },
      "index": {
        "description": "Find children who are the different descendent of the current nodes",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "DirectChild",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Direct Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DumpLink",
      "description": {
        "fct-descr": "\u003cp\u003e'-\u003e' operator in the language, used to\n follow hyper link and dump the resulting\n content on hard drive (if permited).\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "DumpLink",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "DumpLink"
      },
      "index": {
        "description": "operator in the language used to follow hyper link and dump the resulting content on hard drive if permited",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "DumpLink",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Dump Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Elem",
      "description": {
        "fct-descr": "\u003cp\u003e... Search for a named element.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Elem String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRef",
        "fct-type": "function",
        "title": "Elem"
      },
      "index": {
        "description": "Search for named element",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Elem",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Index",
      "description": {
        "fct-descr": "\u003cp\u003e...\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Index Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#NodeRange",
        "fct-type": "function",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Index",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Interval",
      "description": {
        "fct-descr": "\u003cp\u003emin-max\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Interval Int Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#NodeRange",
        "fct-type": "function",
        "title": "Interval"
      },
      "index": {
        "description": "min-max",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Interval",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:List",
      "description": {
        "fct-descr": "\u003cp\u003e... ... (each action followed, no rollback)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "List [WebRexp]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "each action followed no rollback",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "List",
        "normalized": "List[WebRexp]",
        "package": "Webrexp",
        "partial": "List",
        "signature": "List[WebRexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:NextSibling",
      "description": {
        "fct-descr": "\u003cp\u003e'+' operator in the language, used\n to select the next sibling node.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "NextSibling",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "NextSibling"
      },
      "index": {
        "description": "operator in the language used to select the next sibling node",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "NextSibling",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Next Sibling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:NodeNameOutputAction",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a node name\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "NodeNameOutputAction",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "NodeNameOutputAction"
      },
      "index": {
        "description": "Retrieve node name",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "NodeNameOutputAction",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Node Name Output Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:NodeReplace",
      "description": {
        "fct-descr": "\u003cp\u003e'$'... operator\n Used to put the action value back into\n the evaluation pipeline.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "NodeReplace ActionExpr",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "NodeReplace"
      },
      "index": {
        "description": "operator Used to put the action value back into the evaluation pipeline",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "NodeReplace",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Node Replace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OfClass",
      "description": {
        "fct-descr": "\u003cp\u003e... . ...  Check the value of the 'class' attribute\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OfClass WebRef String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRef",
        "fct-type": "function",
        "title": "OfClass"
      },
      "index": {
        "description": "Check the value of the class attribute",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OfClass",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Of Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OfName",
      "description": {
        "fct-descr": "\u003cp\u003e#...  Check the value of the 'id' attribute\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OfName WebRef String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRef",
        "fct-type": "function",
        "title": "OfName"
      },
      "index": {
        "description": "Check the value of the id attribute",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OfName",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Of Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpAdd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpAdd",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpAdd",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpAnd",
      "description": {
        "fct-descr": "\u003cp\u003e'&' (\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e in Haksell)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpAnd",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpAnd"
      },
      "index": {
        "description": "in Haksell",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpAnd",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpBegin",
      "description": {
        "fct-descr": "\u003cp\u003e'^=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpBegin",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpBegin"
      },
      "index": {
        "description": "op beginning as the CSS3 operator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpBegin",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpConcat",
      "description": {
        "fct-descr": "\u003cp\u003e':' concatenate two strings\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpConcat",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpConcat"
      },
      "index": {
        "description": "concatenate two strings",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpConcat",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Concat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpContain",
      "description": {
        "fct-descr": "\u003cp\u003e'~=' op contain, as the CSS3 operator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpContain",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpContain"
      },
      "index": {
        "description": "op contain as the CSS3 operator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpContain",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Contain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpDiv",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpDiv",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpDiv"
      },
      "index": {
        "description": "div",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpDiv",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpEnd",
      "description": {
        "fct-descr": "\u003cp\u003e'$=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpEnd",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpEnd"
      },
      "index": {
        "description": "op beginning as the CSS3 operator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpEnd",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpEq",
      "description": {
        "fct-descr": "\u003cp\u003e'=' in webrexp (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e in Haskell)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpEq",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpEq"
      },
      "index": {
        "description": "in webrexp in Haskell",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpEq",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpGe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpGe",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpGe"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpGe",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Ge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpGt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpGt",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpGt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpGt",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Gt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpHyphenBegin",
      "description": {
        "fct-descr": "\u003cp\u003e'|=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpHyphenBegin",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpHyphenBegin"
      },
      "index": {
        "description": "op beginning as the CSS3 operator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpHyphenBegin",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Hyphen Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpLe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpLe",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpLe"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpLe",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Le",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpLt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpLt",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpLt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpLt",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Lt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpMatch",
      "description": {
        "fct-descr": "\u003cp\u003e'=~' regexp matching\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpMatch",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpMatch"
      },
      "index": {
        "description": "regexp matching",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpMatch",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpMul",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpMul",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpMul",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpNe",
      "description": {
        "fct-descr": "\u003cp\u003e'!=' (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e in Haskell)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpNe",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpNe"
      },
      "index": {
        "description": "in Haskell",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpNe",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Ne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpOr",
      "description": {
        "fct-descr": "\u003cp\u003e'|' (\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e in Haskell)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpOr",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpOr"
      },
      "index": {
        "description": "in Haskell",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpOr",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpSub",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpSub",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpSub",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpSubstring",
      "description": {
        "fct-descr": "\u003cp\u003e'^=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OpSubstring",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#Op",
        "fct-type": "function",
        "title": "OpSubstring"
      },
      "index": {
        "description": "op beginning as the CSS3 operator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OpSubstring",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Op Substring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OutputAction",
      "description": {
        "fct-descr": "\u003cp\u003ethe \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e action. Dump the content of\n the current element.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "OutputAction",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
        "fct-type": "function",
        "title": "OutputAction"
      },
      "index": {
        "description": "the action Dump the content of the current element",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "OutputAction",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Output Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Parent",
      "description": {
        "fct-descr": "\u003cp\u003e'\u003c' operator in the language. \n Select the parent node\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Parent",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Parent"
      },
      "index": {
        "description": "operator in the language Select the parent node",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Parent",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:PreviousSibling",
      "description": {
        "fct-descr": "\u003cp\u003e'~' operator in the language, used\n to select the previous sibling node.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "PreviousSibling",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "PreviousSibling"
      },
      "index": {
        "description": "operator in the language used to select the previous sibling node",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "PreviousSibling",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Previous Sibling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Range",
      "description": {
        "fct-descr": "\u003cp\u003e'[ ... ]' Filtering Range\n The Int is used as an index for a counter \n in the DFS evaluator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Range Int [NodeRange]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "Filtering Range The Int is used as an index for counter in the DFS evaluator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Range",
        "normalized": "Range Int[NodeRange]",
        "package": "Webrexp",
        "partial": "Range",
        "signature": "Range Int[NodeRange]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Ref",
      "description": {
        "fct-descr": "\u003cp\u003eevery tag/class name\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Ref WebRef",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Ref"
      },
      "index": {
        "description": "every tag class name",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Ref",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Repeat",
      "description": {
        "fct-descr": "\u003cp\u003e... #{  }\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Repeat RepeatCount WebRexp",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Repeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Repeat",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Repeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:RepeatAtLeast",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "RepeatAtLeast Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
        "fct-type": "function",
        "title": "RepeatAtLeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "RepeatAtLeast",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Repeat At Least",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:RepeatBetween",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "RepeatBetween Int Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
        "fct-type": "function",
        "title": "RepeatBetween"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "RepeatBetween",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Repeat Between",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:RepeatTimes",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "RepeatTimes Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
        "fct-type": "function",
        "title": "RepeatTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "RepeatTimes",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Repeat Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Star",
      "description": {
        "fct-descr": "\u003cp\u003e... *\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Star WebRexp",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Star"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Star",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Str",
      "description": {
        "fct-descr": "\u003cp\u003e\"...\" A string constant in the source expression.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Str String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "string constant in the source expression",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Str",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Unions",
      "description": {
        "fct-descr": "\u003cp\u003e( ... , ... , ... )\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Unions [WebRexp]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Unions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Unions",
        "normalized": "Unions[WebRexp]",
        "package": "Webrexp",
        "partial": "Unions",
        "signature": "Unions[WebRexp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Unique",
      "description": {
        "fct-descr": "\u003cp\u003e'!'\n Possess an unique index to differentiate all the differents\n uniques. Negative value are considered invalid, all positive or\n null one are accepted.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Unique Int",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
        "fct-type": "function",
        "title": "Unique"
      },
      "index": {
        "description": "Possess an unique index to differentiate all the differents uniques Negative value are considered invalid all positive or null one are accepted",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Unique",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Wildcard",
      "description": {
        "fct-descr": "\u003cp\u003e'*' Any subelement.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Wildcard",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#WebRef",
        "fct-type": "function",
        "title": "Wildcard"
      },
      "index": {
        "description": "Any subelement",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "Wildcard",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Wildcard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:assignWebrexpIndices",
      "description": {
        "fct-descr": "\u003cp\u003ePreparation function for webrexp, assign all indices\n used for evaluation as an automata.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "WebRexp -\u003e (Int, Int, WebRexp)",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#assignWebrexpIndices",
        "fct-type": "function",
        "title": "assignWebrexpIndices"
      },
      "index": {
        "description": "Preparation function for webrexp assign all indices used for evaluation as an automata",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "assignWebrexpIndices",
        "normalized": "WebRexp-\u003e(Int,Int,WebRexp)",
        "package": "Webrexp",
        "partial": "Webrexp Indices",
        "signature": "WebRexp-\u003e(Int,Int,WebRexp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:foldWebRexp",
      "description": {
        "fct-descr": "\u003cp\u003eThis function permit the rewriting of a wabrexp in a depth-first\n fashion while carying out an accumulator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "(a -\u003e WebRexp -\u003e (a, WebRexp)) -\u003e a -\u003e WebRexp -\u003e (a, WebRexp)",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#foldWebRexp",
        "fct-type": "function",
        "title": "foldWebRexp"
      },
      "index": {
        "description": "This function permit the rewriting of wabrexp in depth-first fashion while carying out an accumulator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "foldWebRexp",
        "normalized": "(a-\u003eWebRexp-\u003e(a,WebRexp))-\u003ea-\u003eWebRexp-\u003e(a,WebRexp)",
        "package": "Webrexp",
        "partial": "Web Rexp",
        "signature": "(a-\u003eWebRexp-\u003e(a,WebRexp))-\u003ea-\u003eWebRexp-\u003e(a,WebRexp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:isActionPredicate",
      "description": {
        "fct-descr": "\u003cp\u003eTell if an action is a predicate and is only\n used to filter nodes. Expression can be modified\n with this information to help prunning as soon\n as possible with the DFS evaluator.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "ActionExpr -\u003e Bool",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#isActionPredicate",
        "fct-type": "function",
        "title": "isActionPredicate"
      },
      "index": {
        "description": "Tell if an action is predicate and is only used to filter nodes Expression can be modified with this information to help prunning as soon as possible with the DFS evaluator",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "isActionPredicate",
        "normalized": "ActionExpr-\u003eBool",
        "package": "Webrexp",
        "partial": "Action Predicate",
        "signature": "ActionExpr-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:isInNodeRange",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to check if a given in dex is within\n all the ranges\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Int -\u003e [NodeRange] -\u003e Bool",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#isInNodeRange",
        "fct-type": "function",
        "title": "isInNodeRange"
      },
      "index": {
        "description": "Helper function to check if given in dex is within all the ranges",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "isInNodeRange",
        "normalized": "Int-\u003e[NodeRange]-\u003eBool",
        "package": "Webrexp",
        "partial": "In Node Range",
        "signature": "Int-\u003e[NodeRange]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:isOperatorBoolean",
      "description": {
        "fct-descr": "\u003cp\u003eTell if an action operator return a boolean\n operation. Useful to tell if an action is a\n predicate. See \u003ccode\u003e\u003ca\u003eisActionPredicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "Op -\u003e Bool",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#isOperatorBoolean",
        "fct-type": "function",
        "title": "isOperatorBoolean"
      },
      "index": {
        "description": "Tell if an action operator return boolean operation Useful to tell if an action is predicate See isActionPredicate",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "isOperatorBoolean",
        "normalized": "Op-\u003eBool",
        "package": "Webrexp",
        "partial": "Operator Boolean",
        "signature": "Op-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:packRefFiltering",
      "description": {
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "WebRexp -\u003e WebRexp",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#packRefFiltering",
        "fct-type": "function",
        "title": "packRefFiltering"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "packRefFiltering",
        "normalized": "WebRexp-\u003eWebRexp",
        "package": "Webrexp",
        "partial": "Ref Filtering",
        "signature": "WebRexp-\u003eWebRexp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:prettyShowWebRef",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printing for \u003ccode\u003e\u003ca\u003eWebRef\u003c/a\u003e\u003c/code\u003e. It's should be reparsable\n by the WebRexp parser.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "WebRef -\u003e String",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#prettyShowWebRef",
        "fct-type": "function",
        "title": "prettyShowWebRef"
      },
      "index": {
        "description": "Pretty printing for WebRef It should be reparsable by the WebRexp parser",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "prettyShowWebRef",
        "normalized": "WebRef-\u003eString",
        "package": "Webrexp",
        "partial": "Show Web Ref",
        "signature": "WebRef-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:simplifyNodeRanges",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is an helper function to simplify\n the handling the node range. After simplification,\n the ranges are sorted in ascending order and no\n node range overlap.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Exprtypes",
        "fct-package": "Webrexp",
        "fct-signature": "[NodeRange] -\u003e [NodeRange]",
        "fct-source": "src/Text-Webrexp-Exprtypes.html#simplifyNodeRanges",
        "fct-type": "function",
        "title": "simplifyNodeRanges"
      },
      "index": {
        "description": "This function is an helper function to simplify the handling the node range After simplification the ranges are sorted in ascending order and no node range overlap",
        "hierarchy": "Text Webrexp Exprtypes",
        "module": "Text.Webrexp.Exprtypes",
        "name": "simplifyNodeRanges",
        "normalized": "[NodeRange]-\u003e[NodeRange]",
        "package": "Webrexp",
        "partial": "Node Ranges",
        "signature": "[NodeRange]-\u003e[NodeRange]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module store the interface between the evaluator\n and the manipulated graph.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp-GraphWalker.html",
        "fct-type": "module",
        "title": "GraphWalker"
      },
      "index": {
        "description": "This module store the interface between the evaluator and the manipulated graph",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "GraphWalker",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Graph Walker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:AccessResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of indirect access demand.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
        "fct-type": "data",
        "title": "AccessResult"
      },
      "index": {
        "description": "Result of indirect access demand",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "AccessResult",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Access Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:GraphPath",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent indirect links or links which\n necessitate the use of the IO monad to walk\n around the graph.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "class",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#GraphPath",
        "fct-type": "class",
        "title": "GraphPath"
      },
      "index": {
        "description": "Represent indirect links or links which necessitate the use of the IO monad to walk around the graph",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "GraphPath",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Graph Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:GraphWalker",
      "description": {
        "fct-descr": "\u003cp\u003eThe aim of this typeclass is to permit\n the use of different html/xml parser if\n if the first one is found to be bad. All\n the logic should use this interface.\n\u003c/p\u003e\u003cp\u003eMinimal implementation : everything but deepValueOf.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "class",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#GraphWalker",
        "fct-type": "class",
        "title": "GraphWalker"
      },
      "index": {
        "description": "The aim of this typeclass is to permit the use of different html xml parser if if the first one is found to be bad All the logic should use this interface Minimal implementation everything but deepValueOf",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "GraphWalker",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Graph Walker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:Logger",
      "description": {
        "fct-descr": "\u003cp\u003eType used to propagate different logging\n level across the software.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "type",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#Logger",
        "fct-type": "type",
        "title": "Logger"
      },
      "index": {
        "description": "Type used to propagate different logging level across the software",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "Logger",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:Loggers",
      "description": {
        "fct-descr": "\u003cp\u003eNormal\u003cem\u003eErr\u003c/em\u003everbose loggers.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "type",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#Loggers",
        "fct-type": "type",
        "title": "Loggers"
      },
      "index": {
        "description": "Normal Err verbose loggers",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "Loggers",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Loggers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:NodePath",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent the path used to find the node\n from the starting point of the graph.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "type",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#NodePath",
        "fct-type": "type",
        "title": "NodePath"
      },
      "index": {
        "description": "Represent the path used to find the node from the starting point of the graph",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "NodePath",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Node Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:-60--47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two path togethers, you can think\n of the \u003ca\u003e/\u003c/a\u003e operator for an equivalence.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#%3C%2F%2F%3E",
        "fct-type": "method",
        "title": "(\u003c//\u003e)"
      },
      "index": {
        "description": "Combine two path togethers you can think of the operator for an equivalence",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "(\u003c//\u003e) \u003c//\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Webrexp",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:AccessError",
      "description": {
        "fct-descr": "\u003cp\u003eCannot access the resource.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "AccessError",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
        "fct-type": "function",
        "title": "AccessError"
      },
      "index": {
        "description": "Cannot access the resource",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "AccessError",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Access Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:DataBlob",
      "description": {
        "fct-descr": "\u003cp\u003eWe got something, but we can't interpret\n it, so we return a binary blob.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "DataBlob rezPath ByteString",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
        "fct-type": "function",
        "title": "DataBlob"
      },
      "index": {
        "description": "We got something but we can interpret it so we return binary blob",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "DataBlob",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Data Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:Result",
      "description": {
        "fct-descr": "\u003cp\u003eWe got a result and parsed it, maybe\n it has changed of location, so we give\n back the location\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "Result rezPath a",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "We got result and parsed it maybe it has changed of location so we give back the location",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "Result",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:accessGraph",
      "description": {
        "fct-descr": "\u003cp\u003eThe idea behind link following.\n The graph engine may have another name for the\n resource, so an updated name can be given.\n The given function is there to log information,\n the second is to log errors\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "Loggers m -\u003e rezPath -\u003e m (AccessResult a rezPath)",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#accessGraph",
        "fct-type": "method",
        "title": "accessGraph"
      },
      "index": {
        "description": "The idea behind link following The graph engine may have another name for the resource so an updated name can be given The given function is there to log information the second is to log errors",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "accessGraph",
        "normalized": "Loggers a-\u003eb-\u003ea(AccessResult c b)",
        "package": "Webrexp",
        "partial": "Graph",
        "signature": "Loggers m-\u003erezPath-\u003em(AccessResult a rezPath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:attribOf",
      "description": {
        "fct-descr": "\u003cp\u003eGet back an attribute of the node\n if it exists\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e a -\u003e Maybe String",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#attribOf",
        "fct-type": "method",
        "title": "attribOf"
      },
      "index": {
        "description": "Get back an attribute of the node if it exists",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "attribOf",
        "normalized": "String-\u003ea-\u003eMaybe String",
        "package": "Webrexp",
        "partial": "Of",
        "signature": "String-\u003ea-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:childrenOf",
      "description": {
        "fct-descr": "\u003cp\u003eGet all the children of the current\n node.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e m [a]",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#childrenOf",
        "fct-type": "method",
        "title": "childrenOf"
      },
      "index": {
        "description": "Get all the children of the current node",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "childrenOf",
        "normalized": "a-\u003eb[a]",
        "package": "Webrexp",
        "partial": "Of",
        "signature": "a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:deepValueOf",
      "description": {
        "fct-descr": "\u003cp\u003eLike value of, but force the node to collect the\n value of all it's children in the process.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e m String",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#deepValueOf",
        "fct-type": "method",
        "title": "deepValueOf"
      },
      "index": {
        "description": "Like value of but force the node to collect the value of all it children in the process",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "deepValueOf",
        "normalized": "a-\u003eb String",
        "package": "Webrexp",
        "partial": "Value Of",
        "signature": "a-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:descendants",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of all the \u003ca\u003echildren\u003c/a\u003e/linked node of a given node.\n The given node is not included in the list.\n A list of node with the taken path is returned.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e m [(a, [(a, Int)])]",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#descendants",
        "fct-type": "function",
        "title": "descendants"
      },
      "index": {
        "description": "Return list of all the children linked node of given node The given node is not included in the list list of node with the taken path is returned",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "descendants",
        "normalized": "a-\u003eb[(a,[(a,Int)])]",
        "package": "Webrexp",
        "partial": "",
        "signature": "a-\u003em[(a,[(a,Int)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:dumpDataAtPath",
      "description": {
        "fct-descr": "\u003cp\u003eMove semantic, try to dump the pointed\n resource to the current folder.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "Loggers m -\u003e a -\u003e m ()",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#dumpDataAtPath",
        "fct-type": "method",
        "title": "dumpDataAtPath"
      },
      "index": {
        "description": "Move semantic try to dump the pointed resource to the current folder",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "dumpDataAtPath",
        "normalized": "Loggers a-\u003eb-\u003ea()",
        "package": "Webrexp",
        "partial": "Data At Path",
        "signature": "Loggers m-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findFirstNamed",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first found node if any.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e [a] -\u003e m (Maybe (a, [(a, Int)]))",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#findFirstNamed",
        "fct-type": "function",
        "title": "findFirstNamed"
      },
      "index": {
        "description": "Return the first found node if any",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "findFirstNamed",
        "normalized": "String-\u003e[a]-\u003eb(Maybe(a,[(a,Int)]))",
        "package": "Webrexp",
        "partial": "First Named",
        "signature": "String-\u003e[a]-\u003em(Maybe(a,[(a,Int)]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findFirstNamedPure",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindFirstNamed\u003c/a\u003e\u003c/code\u003e, but without the monadic interface.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "(a -\u003e [a]) -\u003e String -\u003e [a] -\u003e Maybe (a, [(a, Int)])",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#findFirstNamedPure",
        "fct-type": "function",
        "title": "findFirstNamedPure"
      },
      "index": {
        "description": "Like findFirstNamed but without the monadic interface",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "findFirstNamedPure",
        "normalized": "(a-\u003e[a])-\u003eString-\u003e[a]-\u003eMaybe(a,[(a,Int)])",
        "package": "Webrexp",
        "partial": "First Named Pure",
        "signature": "(a-\u003e[a])-\u003eString-\u003e[a]-\u003eMaybe(a,[(a,Int)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findNamed",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a tag and a name, retrieve\n the first matching tags in the hierarchy.\n It must return the list of ancestors permitting\n the acess to the path used to find children\n\u003c/p\u003e\u003cp\u003ethe returned list must contain : the node itself if\n it match the name, and all the children containing the\n good name.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e a -\u003e m [(a, [(a, Int)])]",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#findNamed",
        "fct-type": "function",
        "title": "findNamed"
      },
      "index": {
        "description": "Given tag and name retrieve the first matching tags in the hierarchy It must return the list of ancestors permitting the acess to the path used to find children the returned list must contain the node itself if it match the name and all the children containing the good name",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "findNamed",
        "normalized": "String-\u003ea-\u003eb[(a,[(a,Int)])]",
        "package": "Webrexp",
        "partial": "Named",
        "signature": "String-\u003ea-\u003em[(a,[(a,Int)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findNamedPure",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindNamed\u003c/a\u003e\u003c/code\u003e but without the monadic interface.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "(a -\u003e [a]) -\u003e String -\u003e a -\u003e [(a, [(a, Int)])]",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#findNamedPure",
        "fct-type": "function",
        "title": "findNamedPure"
      },
      "index": {
        "description": "Like findNamed but without the monadic interface",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "findNamedPure",
        "normalized": "(a-\u003e[a])-\u003eString-\u003ea-\u003e[(a,[(a,Int)])]",
        "package": "Webrexp",
        "partial": "Named Pure",
        "signature": "(a-\u003e[a])-\u003eString-\u003ea-\u003e[(a,[(a,Int)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:importPath",
      "description": {
        "fct-descr": "\u003cp\u003econversion to be used to import path\n from attributes/document (not really\n well specified).\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#importPath",
        "fct-type": "method",
        "title": "importPath"
      },
      "index": {
        "description": "conversion to be used to import path from attributes document not really well specified",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "importPath",
        "normalized": "String-\u003eMaybe a",
        "package": "Webrexp",
        "partial": "Path",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:indirectLinks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve all the indirectly linked content\n of a node, can be used for element like an\n HTML link or an linked image/obj\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e [rezPath]",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#indirectLinks",
        "fct-type": "method",
        "title": "indirectLinks"
      },
      "index": {
        "description": "Retrieve all the indirectly linked content of node can be used for element like an HTML link or an linked image obj",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "indirectLinks",
        "normalized": "a-\u003e[b]",
        "package": "Webrexp",
        "partial": "Links",
        "signature": "a-\u003e[rezPath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:isHistoryMutable",
      "description": {
        "fct-descr": "\u003cp\u003eTell if the history associated is fixed or not.\n If the history is not fixed and can change (if you\n are querying the filesystem for example, it should\n return False)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#isHistoryMutable",
        "fct-type": "method",
        "title": "isHistoryMutable"
      },
      "index": {
        "description": "Tell if the history associated is fixed or not If the history is not fixed and can change if you are querying the filesystem for example it should return False",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "isHistoryMutable",
        "normalized": "a-\u003eBool",
        "package": "Webrexp",
        "partial": "History Mutable",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:localizePath",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a graphpath, transform it to\n a filepath which can be used to store\n a node.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e FilePath",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#localizePath",
        "fct-type": "method",
        "title": "localizePath"
      },
      "index": {
        "description": "Given graphpath transform it to filepath which can be used to store node",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "localizePath",
        "normalized": "a-\u003eFilePath",
        "package": "Webrexp",
        "partial": "Path",
        "signature": "a-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:nameOf",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current node is named, return\n it's name, otherwise return Nothing.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e Maybe String",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#nameOf",
        "fct-type": "method",
        "title": "nameOf"
      },
      "index": {
        "description": "If the current node is named return it name otherwise return Nothing",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "nameOf",
        "normalized": "a-\u003eMaybe String",
        "package": "Webrexp",
        "partial": "Of",
        "signature": "a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:pureDescendants",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003edescendants\u003c/a\u003e\u003c/code\u003e, but without the monadic interface.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "(a -\u003e [a]) -\u003e a -\u003e [(a, [(a, Int)])]",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#pureDescendants",
        "fct-type": "function",
        "title": "pureDescendants"
      },
      "index": {
        "description": "like descendants but without the monadic interface",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "pureDescendants",
        "normalized": "(a-\u003e[a])-\u003ea-\u003e[(a,[(a,Int)])]",
        "package": "Webrexp",
        "partial": "Descendants",
        "signature": "(a-\u003e[a])-\u003ea-\u003e[(a,[(a,Int)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:rawAccess",
      "description": {
        "fct-descr": "\u003cp\u003eSame as accessGraph, but don't try to return\n a structured result, only blobs.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "Loggers m -\u003e rezPath -\u003e m (AccessResult a rezPath)",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#rawAccess",
        "fct-type": "method",
        "title": "rawAccess"
      },
      "index": {
        "description": "Same as accessGraph but don try to return structured result only blobs",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "rawAccess",
        "normalized": "Loggers a-\u003eb-\u003ea(AccessResult c b)",
        "package": "Webrexp",
        "partial": "Access",
        "signature": "Loggers m-\u003erezPath-\u003em(AccessResult a rezPath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:valueOf",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value of the tag (textual)\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.GraphWalker",
        "fct-package": "Webrexp",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-Webrexp-GraphWalker.html#valueOf",
        "fct-type": "method",
        "title": "valueOf"
      },
      "index": {
        "description": "Retrieve the value of the tag textual",
        "hierarchy": "Text Webrexp GraphWalker",
        "module": "Text.Webrexp.GraphWalker",
        "name": "valueOf",
        "normalized": "a-\u003eString",
        "package": "Webrexp",
        "partial": "Of",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing the parsing of webrexp.\n It shouldn't be used directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Webrexp.Parser",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Module implementing the parsing of webrexp It shouldn be used directly",
        "hierarchy": "Text Webrexp Parser",
        "module": "Text.Webrexp.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Parser.html#v:webRexpParser",
      "description": {
        "fct-descr": "\u003cp\u003eParser used to parse a webrexp.\n Use just like any \u003ccode\u003e\u003ca\u003eParsec\u003c/a\u003e\u003c/code\u003e 3.0 parser.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.Parser",
        "fct-package": "Webrexp",
        "fct-signature": "ParsecT String st Identity WebRexp",
        "fct-source": "src/Text-Webrexp-Parser.html#webRexpParser",
        "fct-type": "function",
        "title": "webRexpParser"
      },
      "index": {
        "description": "Parser used to parse webrexp Use just like any Parsec parser",
        "hierarchy": "Text Webrexp Parser",
        "module": "Text.Webrexp.Parser",
        "name": "webRexpParser",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Rexp Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Quote.html#",
      "description": {
        "fct-module": "Text.Webrexp.Quote",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp-Quote.html",
        "fct-type": "module",
        "title": "Quote"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp Quote",
        "module": "Text.Webrexp.Quote",
        "name": "Quote",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Quote.html#v:webrexpCompile",
      "description": {
        "fct-descr": "\u003cp\u003eQuasi quote to transform a webrexp into it's compiled representation.\n You can use it the following way :\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n import Text.Webrexp.Quote\n\n [webrexpCompile| some webrexp [.] |]\n\u003c/pre\u003e",
        "fct-module": "Text.Webrexp.Quote",
        "fct-package": "Webrexp",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Webrexp-Quote.html#webrexpCompile",
        "fct-type": "function",
        "title": "webrexpCompile"
      },
      "index": {
        "description": "Quasi quote to transform webrexp into it compiled representation You can use it the following way LANGUAGE QuasiQuotes import Text.Webrexp.Quote webrexpCompile some webrexp",
        "hierarchy": "Text Webrexp Quote",
        "module": "Text.Webrexp.Quote",
        "name": "webrexpCompile",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Compile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Quote.html#v:webrexpParse",
      "description": {
        "fct-descr": "\u003cp\u003eQuasiQuotation to transform a webrexp to\n it's AST representation, resulting type is :: Webrexp.\n You can use it the following way :\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n import Text.Webrexp.Quote\n\n [webrexpParse| some webrexp [.] |]\n\u003c/pre\u003e",
        "fct-module": "Text.Webrexp.Quote",
        "fct-package": "Webrexp",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Webrexp-Quote.html#webrexpParse",
        "fct-type": "function",
        "title": "webrexpParse"
      },
      "index": {
        "description": "QuasiQuotation to transform webrexp to it AST representation resulting type is Webrexp You can use it the following way LANGUAGE QuasiQuotes import Text.Webrexp.Quote webrexpParse some webrexp",
        "hierarchy": "Text Webrexp Quote",
        "module": "Text.Webrexp.Quote",
        "name": "webrexpParse",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing plumbing to get a unified path locator,\n handling URI & local path. Implement the \u003ccode\u003e\u003ca\u003eGraphPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGraphWalker\u003c/a\u003e\u003c/code\u003e\n typeclass with \u003ccode\u003eHxtNode\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp-ResourcePath.html",
        "fct-type": "module",
        "title": "ResourcePath"
      },
      "index": {
        "description": "Module implementing plumbing to get unified path locator handling URI local path Implement the GraphPath and GraphWalker typeclass with HxtNode",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "ResourcePath",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Resource Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#t:ResourcePath",
      "description": {
        "fct-descr": "\u003cp\u003eMain data type\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#ResourcePath",
        "fct-type": "data",
        "title": "ResourcePath"
      },
      "index": {
        "description": "Main data type",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "ResourcePath",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Resource Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:Local",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a file stored on the hard-drive of this\n machine.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "Local FilePath",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#ResourcePath",
        "fct-type": "function",
        "title": "Local"
      },
      "index": {
        "description": "Represent file stored on the hard-drive of this machine",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "Local",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:Remote",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent a ressource spread on internet.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "Remote URI",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#ResourcePath",
        "fct-type": "function",
        "title": "Remote"
      },
      "index": {
        "description": "Represent ressource spread on internet",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "Remote",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Remote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:accessResourcePath",
      "description": {
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "Loggers m -\u003e ResourcePath -\u003e m (AccessResult a ResourcePath)",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#accessResourcePath",
        "fct-type": "function",
        "title": "accessResourcePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "accessResourcePath",
        "normalized": "Loggers a-\u003eResourcePath-\u003ea(AccessResult b ResourcePath)",
        "package": "Webrexp",
        "partial": "Resource Path",
        "signature": "Loggers m-\u003eResourcePath-\u003em(AccessResult a ResourcePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:downloadBinary",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to grab a resource on internet and returning\n it's binary representation, and it's real place if any.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "Loggers m -\u003e URI -\u003e m (URI, Response ByteString)",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#downloadBinary",
        "fct-type": "function",
        "title": "downloadBinary"
      },
      "index": {
        "description": "Helper function to grab resource on internet and returning it binary representation and it real place if any",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "downloadBinary",
        "normalized": "Loggers a-\u003eURI-\u003ea(URI,Response ByteString)",
        "package": "Webrexp",
        "partial": "Binary",
        "signature": "Loggers m-\u003eURI-\u003em(URI,Response ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:rawLoadData",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a blob of data from a resourcepath and return\n the result.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "Loggers m -\u003e ResourcePath -\u003e m (Maybe ByteString)",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#rawLoadData",
        "fct-type": "function",
        "title": "rawLoadData"
      },
      "index": {
        "description": "Extract blob of data from resourcepath and return the result",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "rawLoadData",
        "normalized": "Loggers a-\u003eResourcePath-\u003ea(Maybe ByteString)",
        "package": "Webrexp",
        "partial": "Load Data",
        "signature": "Loggers m-\u003eResourcePath-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:rezPathToString",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a ressource, transforme it to a string\n representation. This function should be used instead\n of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, which is aimed at debugging\n only.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp.ResourcePath",
        "fct-package": "Webrexp",
        "fct-signature": "ResourcePath -\u003e String",
        "fct-source": "src/Text-Webrexp-ResourcePath.html#rezPathToString",
        "fct-type": "function",
        "title": "rezPathToString"
      },
      "index": {
        "description": "Given ressource transforme it to string representation This function should be used instead of the Show instance which is aimed at debugging only",
        "hierarchy": "Text Webrexp ResourcePath",
        "module": "Text.Webrexp.ResourcePath",
        "name": "rezPathToString",
        "normalized": "ResourcePath-\u003eString",
        "package": "Webrexp",
        "partial": "Path To String",
        "signature": "ResourcePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric module for using Webrexp as a user.\n the main functions for the user are queryDocument to perform an in-memory\n evaluation, and evalWebRexpDepthFirst\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "module",
        "fct-source": "src/Text-Webrexp.html",
        "fct-type": "module",
        "title": "Webrexp"
      },
      "index": {
        "description": "Generic module for using Webrexp as user the main functions for the user are queryDocument to perform an in-memory evaluation and evalWebRexpDepthFirst",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "Webrexp",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Webrexp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#t:Conf",
      "description": {
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "data",
        "title": "Conf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "Conf",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#t:ParseableType",
      "description": {
        "fct-descr": "\u003cp\u003eDescribe different kind of content parser usable\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "data",
        "fct-source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
        "fct-type": "data",
        "title": "ParseableType"
      },
      "index": {
        "description": "Describe different kind of content parser usable",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "ParseableType",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parseable Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:Conf",
      "description": {
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Conf",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "Conf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "Conf",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:ParseableHTML",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate a parser which must be tolerant enough\n to parse HTML\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "ParseableHTML",
        "fct-source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
        "fct-type": "function",
        "title": "ParseableHTML"
      },
      "index": {
        "description": "Indicate parser which must be tolerant enough to parse HTML",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "ParseableHTML",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parseable HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:ParseableJson",
      "description": {
        "fct-descr": "\u003cp\u003eDo what you want with it for now.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "ParseableJson",
        "fct-source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
        "fct-type": "function",
        "title": "ParseableJson"
      },
      "index": {
        "description": "Do what you want with it for now",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "ParseableJson",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parseable Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:ParseableXML",
      "description": {
        "fct-descr": "\u003cp\u003eYou can go ahead and use a rather strict parser.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "ParseableXML",
        "fct-source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
        "fct-type": "function",
        "title": "ParseableXML"
      },
      "index": {
        "description": "You can go ahead and use rather strict parser",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "ParseableXML",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Parseable XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:defaultConf",
      "description": {
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Conf",
        "fct-source": "src/Text-Webrexp.html#defaultConf",
        "fct-type": "function",
        "title": "defaultConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "defaultConf",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:depthEvaluation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "depthEvaluation"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "depthEvaluation",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Evaluation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalParsedWebRexp",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluation for pre-parsed webrexp.\n Best method if a webrexp has to be evaluated\n many times. Evaluated using breadth first method.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "WebRexp -\u003e IO Bool",
        "fct-source": "src/Text-Webrexp.html#evalParsedWebRexp",
        "fct-type": "function",
        "title": "evalParsedWebRexp"
      },
      "index": {
        "description": "Evaluation for pre-parsed webrexp Best method if webrexp has to be evaluated many times Evaluated using breadth first method",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "evalParsedWebRexp",
        "normalized": "WebRexp-\u003eIO Bool",
        "package": "Webrexp",
        "partial": "Parsed Web Rexp",
        "signature": "WebRexp-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalWebRexp",
      "description": {
        "fct-descr": "\u003cp\u003eSimple evaluation function, evaluation is\n the breadth first type.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e IO Bool",
        "fct-source": "src/Text-Webrexp.html#evalWebRexp",
        "fct-type": "function",
        "title": "evalWebRexp"
      },
      "index": {
        "description": "Simple evaluation function evaluation is the breadth first type",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "evalWebRexp",
        "normalized": "String-\u003eIO Bool",
        "package": "Webrexp",
        "partial": "Web Rexp",
        "signature": "String-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalWebRexpDepthFirst",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a webrexp in depth first fashion, returning a success\n status telling if the evaluation got up to the end.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e IO Bool",
        "fct-source": "src/Text-Webrexp.html#evalWebRexpDepthFirst",
        "fct-type": "function",
        "title": "evalWebRexpDepthFirst"
      },
      "index": {
        "description": "Evaluate webrexp in depth first fashion returning success status telling if the evaluation got up to the end",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "evalWebRexpDepthFirst",
        "normalized": "String-\u003eIO Bool",
        "package": "Webrexp",
        "partial": "Web Rexp Depth First",
        "signature": "String-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalWebRexpWithConf",
      "description": {
        "fct-descr": "\u003cp\u003eFunction used in the command line program.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Conf -\u003e IO Bool",
        "fct-source": "src/Text-Webrexp.html#evalWebRexpWithConf",
        "fct-type": "function",
        "title": "evalWebRexpWithConf"
      },
      "index": {
        "description": "Function used in the command line program",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "evalWebRexpWithConf",
        "normalized": "Conf-\u003eIO Bool",
        "package": "Webrexp",
        "partial": "Web Rexp With Conf",
        "signature": "Conf-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:executeParsedWebRexp",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a webrexp and return all the dumped text as \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n and all errors as \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. Evaluated using depth first method.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "WebRexp -\u003e IO [Either String String]",
        "fct-source": "src/Text-Webrexp.html#executeParsedWebRexp",
        "fct-type": "function",
        "title": "executeParsedWebRexp"
      },
      "index": {
        "description": "Evaluate webrexp and return all the dumped text as Right and all errors as Left Evaluated using depth first method",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "executeParsedWebRexp",
        "normalized": "WebRexp-\u003eIO[Either String String]",
        "package": "Webrexp",
        "partial": "Parsed Web Rexp",
        "signature": "WebRexp-\u003eIO[Either String String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:expr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "String",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "expr",
        "normalized": "",
        "package": "Webrexp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:hammeringDelay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Int",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "hammeringDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "hammeringDelay",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:output",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Handle",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "output"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "output",
        "normalized": "",
        "package": "Webrexp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:outputGraphViz",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "outputGraphViz"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "outputGraphViz",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Graph Viz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:parseWebRexp",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a webrexp.\n This function is useful if the expression has\n to be applied many times.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "String -\u003e Maybe WebRexp",
        "fct-source": "src/Text-Webrexp.html#parseWebRexp",
        "fct-type": "function",
        "title": "parseWebRexp"
      },
      "index": {
        "description": "Prepare webrexp This function is useful if the expression has to be applied many times",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "parseWebRexp",
        "normalized": "String-\u003eMaybe WebRexp",
        "package": "Webrexp",
        "partial": "Web Rexp",
        "signature": "String-\u003eMaybe WebRexp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:queryDocument",
      "description": {
        "fct-descr": "\u003cp\u003eQuery a document in memory and retrieve the results, you can use it in combination\n to the quasiquoting facility to embed the webrexp in haskell :\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n import Text.Webrexp\n import Text.Webrexp.Quote\n import qualified Data.ByteString.Char8 as B\n\n main :: IO ()\n main = print $ queryDocument ParseableJson document [webrexpParse| some things [.] |]\n     where document = B.pack \"{ \\\"some\\\": { \\\"things\\\": \\\"a phrase\\\" } }\"\n\u003c/pre\u003e\u003cp\u003eThe returned values contain possible errors as \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and real value as 'Right.\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "ParseableType -\u003e ByteString -\u003e WebRexp -\u003e [Either String String]",
        "fct-source": "src/Text-Webrexp.html#queryDocument",
        "fct-type": "function",
        "title": "queryDocument"
      },
      "index": {
        "description": "Query document in memory and retrieve the results you can use it in combination to the quasiquoting facility to embed the webrexp in haskell LANGUAGE QuasiQuotes import Text.Webrexp import Text.Webrexp.Quote import qualified Data.ByteString.Char8 as main IO main print queryDocument ParseableJson document webrexpParse some things where document B.pack some things phrase The returned values contain possible errors as Left and real value as Right",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "queryDocument",
        "normalized": "ParseableType-\u003eByteString-\u003eWebRexp-\u003e[Either String String]",
        "package": "Webrexp",
        "partial": "Document",
        "signature": "ParseableType-\u003eByteString-\u003eWebRexp-\u003e[Either String String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:queryDocumentM",
      "description": {
        "fct-descr": "\u003cp\u003eExactly same thing as \u003ccode\u003e\u003ca\u003equeryDocument\u003c/a\u003e\u003c/code\u003e, but in ST\n\u003c/p\u003e",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "forall s.  ParseableType -\u003e ByteString -\u003e WebRexp -\u003e ST s [Either String String]",
        "fct-source": "src/Text-Webrexp.html#queryDocumentM",
        "fct-type": "function",
        "title": "queryDocumentM"
      },
      "index": {
        "description": "Exactly same thing as queryDocument but in ST",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "queryDocumentM",
        "normalized": "a b ParseableType-\u003eByteString-\u003eWebRexp-\u003eST c[Either String String]",
        "package": "Webrexp",
        "partial": "Document",
        "signature": "forall s. ParseableType-\u003eByteString-\u003eWebRexp-\u003eST s[Either String String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:quiet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "quiet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "quiet",
        "normalized": "",
        "package": "Webrexp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:showHelp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "showHelp"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "showHelp",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:userAgent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "String",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "userAgent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "userAgent",
        "normalized": "",
        "package": "Webrexp",
        "partial": "Agent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:verbose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Webrexp",
        "fct-package": "Webrexp",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Webrexp.html#Conf",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Webrexp",
        "module": "Text.Webrexp",
        "name": "verbose",
        "normalized": "",
        "package": "Webrexp",
        "partial": "",
        "signature": ""
      }
    }
  }
]