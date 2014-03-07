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
        "word": "Webrexp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Eval",
          "name": "Eval",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Eval.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Webrexp Eval",
          "module": "Text.Webrexp.Eval",
          "name": "Eval",
          "package": "Webrexp",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate embedded action in WebRexp\n\u003c/p\u003e",
          "module": "Text.Webrexp.Eval",
          "name": "evalAction",
          "package": "Webrexp",
          "signature": "ActionExpr -\u003e Maybe (EvalState node rezPath) -\u003e WebContextT array node rezPath m (ActionValue, Maybe (EvalState node rezPath))",
          "source": "src/Text-Webrexp-Eval-Action.html#evalAction",
          "type": "function"
        },
        "index": {
          "description": "Evaluate embedded action in WebRexp",
          "hierarchy": "Text Webrexp Eval",
          "module": "Text.Webrexp.Eval",
          "name": "evalAction",
          "normalized": "ActionExpr-\u003eMaybe(EvalState a b)-\u003eWebContextT c a b d(ActionValue,Maybe(EvalState a b))",
          "package": "Webrexp",
          "partial": "Action",
          "signature": "ActionExpr-\u003eMaybe(EvalState node rezPath)-\u003eWebContextT array node rezPath m(ActionValue,Maybe(EvalState node rezPath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Eval.html#v:evalAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the leaf nodes of a webrexp, this way the code\n can be shared between the Breadth first evaluator and the\n Depth first one.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Eval",
          "name": "evalWebRexpFor",
          "package": "Webrexp",
          "signature": "WebRexp -\u003e EvalState node rezPath -\u003e WebContextT array node rezPath m (Bool, [EvalState node rezPath])",
          "source": "src/Text-Webrexp-Eval.html#evalWebRexpFor",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the leaf nodes of webrexp this way the code can be shared between the Breadth first evaluator and the Depth first one",
          "hierarchy": "Text Webrexp Eval",
          "module": "Text.Webrexp.Eval",
          "name": "evalWebRexpFor",
          "normalized": "WebRexp-\u003eEvalState a b-\u003eWebContextT c a b d(Bool,[EvalState a b])",
          "package": "Webrexp",
          "partial": "Web Rexp For",
          "signature": "WebRexp-\u003eEvalState node rezPath-\u003eWebContextT array node rezPath m(Bool,[EvalState node rezPath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Eval.html#v:evalWebRexpFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatypes used to describe webrexps, and some helper functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Exprtypes",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html",
          "type": "module"
        },
        "index": {
          "description": "Datatypes used to describe webrexps and some helper functions",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Exprtypes",
          "package": "Webrexp",
          "partial": "Exprtypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent an action Each production\n of the grammar more or less map to a\n data constructor of this type.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ActionExpr",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "data"
        },
        "index": {
          "description": "Represent an action Each production of the grammar more or less map to data constructor of this type",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ActionExpr",
          "package": "Webrexp",
          "partial": "Action Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:ActionExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType used to index built-in functions \n in actions.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinFunc",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "data"
        },
        "index": {
          "description": "Type used to index built-in functions in actions",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinFunc",
          "package": "Webrexp",
          "partial": "Builtin Func",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:BuiltinFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRanges to be able to filter nodes by position.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NodeRange",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#NodeRange",
          "type": "data"
        },
        "index": {
          "description": "Ranges to be able to filter nodes by position",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NodeRange",
          "package": "Webrexp",
          "partial": "Node Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:NodeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinitions of the operators available in\n the actions of the webrexp.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Op",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "data"
        },
        "index": {
          "description": "Definitions of the operators available in the actions of the webrexp",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Op",
          "package": "Webrexp",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatCount",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatCount",
          "package": "Webrexp",
          "partial": "Repeat Count",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:RepeatCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent an element\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "WebRef",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRef",
          "type": "data"
        },
        "index": {
          "description": "represent an element",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "WebRef",
          "package": "Webrexp",
          "partial": "Web Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:WebRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of web-regexp,\n main type.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "WebRexp",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "data"
        },
        "index": {
          "description": "Type representation of web-regexp main type",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "WebRexp",
          "package": "Webrexp",
          "partial": "Web Rexp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#t:WebRexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a value of a given attribute for\n the current element.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ARef",
          "package": "Webrexp",
          "signature": "ARef String",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "Find value of given attribute for the current element",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ARef",
          "package": "Webrexp",
          "partial": "ARef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:ARef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"{ ... }\"\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Action",
          "package": "Webrexp",
          "signature": "Action ActionExpr",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Action",
          "package": "Webrexp",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e{ ... ; ... ; ... ; ... }\n A list of action to execute, each\n one must return a \u003ccode\u003evalid\u003c/code\u003e value to\n continue the evaluation\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ActionExprs",
          "package": "Webrexp",
          "signature": "ActionExprs [ActionExpr]",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "list of action to execute each one must return valid value to continue the evaluation",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ActionExprs",
          "normalized": "ActionExprs[ActionExpr]",
          "package": "Webrexp",
          "partial": "Action Exprs",
          "signature": "ActionExprs[ActionExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:ActionExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'|' Represent two alternative path, if\n the first fail, the second one is taken\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Alternative",
          "package": "Webrexp",
          "signature": "Alternative WebRexp WebRexp",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "Represent two alternative path if the first fail the second one is taken",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Alternative",
          "package": "Webrexp",
          "partial": "Alternative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Alternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e@... Check for the presence of an attribute\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Attrib",
          "package": "Webrexp",
          "signature": "Attrib WebRef String",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRef",
          "type": "function"
        },
        "index": {
          "description": "Check for the presence of an attribute",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Attrib",
          "package": "Webrexp",
          "partial": "Attrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Attrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic binary opertor application\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BinOp",
          "package": "Webrexp",
          "signature": "BinOp Op ActionExpr ActionExpr",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "Basic binary opertor application",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BinOp",
          "package": "Webrexp",
          "partial": "Bin Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e( ... ; ... ; ... )\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Branch",
          "package": "Webrexp",
          "signature": "Branch [WebRexp]",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Branch",
          "normalized": "Branch[WebRexp]",
          "package": "Webrexp",
          "partial": "Branch",
          "signature": "Branch[WebRexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinFormat",
          "package": "Webrexp",
          "signature": "BuiltinFormat",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinFormat",
          "package": "Webrexp",
          "partial": "Builtin Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinSubsitute",
          "package": "Webrexp",
          "signature": "BuiltinSubsitute",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinSubsitute",
          "package": "Webrexp",
          "partial": "Builtin Subsitute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinSubsitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinSystem",
          "package": "Webrexp",
          "signature": "BuiltinSystem",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinSystem",
          "package": "Webrexp",
          "partial": "Builtin System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinToNum",
          "package": "Webrexp",
          "signature": "BuiltinToNum",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinToNum",
          "package": "Webrexp",
          "partial": "Builtin To Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinToNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinToString",
          "package": "Webrexp",
          "signature": "BuiltinToString",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinToString",
          "package": "Webrexp",
          "partial": "Builtin To String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinTrim",
          "package": "Webrexp",
          "signature": "BuiltinTrim",
          "source": "src/Text-Webrexp-Exprtypes.html#BuiltinFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "BuiltinTrim",
          "package": "Webrexp",
          "partial": "Builtin Trim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:BuiltinTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efuncName(..., ...)\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Call",
          "package": "Webrexp",
          "signature": "Call BuiltinFunc [ActionExpr]",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "funcName",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Call",
          "normalized": "Call BuiltinFunc[ActionExpr]",
          "package": "Webrexp",
          "partial": "Call",
          "signature": "Call BuiltinFunc[ActionExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis constructor is an optimisation, it\n combine an Ref followed by an action, where\n every action is a predicate. Help pruning\n quickly the evaluation tree in DFS evaluation.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ConstrainedRef",
          "package": "Webrexp",
          "signature": "ConstrainedRef WebRef ActionExpr",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "This constructor is an optimisation it combine an Ref followed by an action where every action is predicate Help pruning quickly the evaluation tree in DFS evaluation",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "ConstrainedRef",
          "package": "Webrexp",
          "partial": "Constrained Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:ConstrainedRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer constant.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "CstI",
          "package": "Webrexp",
          "signature": "CstI Int",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "An integer constant",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "CstI",
          "package": "Webrexp",
          "partial": "Cst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:CstI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string constant\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "CstS",
          "package": "Webrexp",
          "signature": "CstS String",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "string constant",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "CstS",
          "package": "Webrexp",
          "partial": "Cst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:CstS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a node and all it's children into text.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DeepOutputAction",
          "package": "Webrexp",
          "signature": "DeepOutputAction",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "Translate node and all it children into text",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DeepOutputAction",
          "package": "Webrexp",
          "partial": "Deep Output Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DeepOutputAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003e\u003e' operator in the language, used\n to follow hyper link\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DiggLink",
          "package": "Webrexp",
          "signature": "DiggLink",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "operator in the language used to follow hyper link",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DiggLink",
          "package": "Webrexp",
          "partial": "Digg Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DiggLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind children who are the different descendent of\n the current nodes.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DirectChild",
          "package": "Webrexp",
          "signature": "DirectChild WebRef",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "Find children who are the different descendent of the current nodes",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DirectChild",
          "package": "Webrexp",
          "partial": "Direct Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DirectChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'-\u003e' operator in the language, used to\n follow hyper link and dump the resulting\n content on hard drive (if permited).\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DumpLink",
          "package": "Webrexp",
          "signature": "DumpLink",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "operator in the language used to follow hyper link and dump the resulting content on hard drive if permited",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "DumpLink",
          "package": "Webrexp",
          "partial": "Dump Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:DumpLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... Search for a named element.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Elem",
          "package": "Webrexp",
          "signature": "Elem String",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRef",
          "type": "function"
        },
        "index": {
          "description": "Search for named element",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Elem",
          "package": "Webrexp",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e...\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Index",
          "package": "Webrexp",
          "signature": "Index Int",
          "source": "src/Text-Webrexp-Exprtypes.html#NodeRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Index",
          "package": "Webrexp",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emin-max\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Interval",
          "package": "Webrexp",
          "signature": "Interval Int Int",
          "source": "src/Text-Webrexp-Exprtypes.html#NodeRange",
          "type": "function"
        },
        "index": {
          "description": "min-max",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Interval",
          "package": "Webrexp",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... ... (each action followed, no rollback)\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "List",
          "package": "Webrexp",
          "signature": "List [WebRexp]",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "each action followed no rollback",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "List",
          "normalized": "List[WebRexp]",
          "package": "Webrexp",
          "partial": "List",
          "signature": "List[WebRexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'+' operator in the language, used\n to select the next sibling node.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NextSibling",
          "package": "Webrexp",
          "signature": "NextSibling",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "operator in the language used to select the next sibling node",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NextSibling",
          "package": "Webrexp",
          "partial": "Next Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:NextSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a node name\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NodeNameOutputAction",
          "package": "Webrexp",
          "signature": "NodeNameOutputAction",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "Retrieve node name",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NodeNameOutputAction",
          "package": "Webrexp",
          "partial": "Node Name Output Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:NodeNameOutputAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'$'... operator\n Used to put the action value back into\n the evaluation pipeline.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NodeReplace",
          "package": "Webrexp",
          "signature": "NodeReplace ActionExpr",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "operator Used to put the action value back into the evaluation pipeline",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "NodeReplace",
          "package": "Webrexp",
          "partial": "Node Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:NodeReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... . ...  Check the value of the 'class' attribute\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OfClass",
          "package": "Webrexp",
          "signature": "OfClass WebRef String",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRef",
          "type": "function"
        },
        "index": {
          "description": "Check the value of the class attribute",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OfClass",
          "package": "Webrexp",
          "partial": "Of Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OfClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e#...  Check the value of the 'id' attribute\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OfName",
          "package": "Webrexp",
          "signature": "OfName WebRef String",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRef",
          "type": "function"
        },
        "index": {
          "description": "Check the value of the id attribute",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OfName",
          "package": "Webrexp",
          "partial": "Of Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpAdd",
          "package": "Webrexp",
          "signature": "OpAdd",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpAdd",
          "package": "Webrexp",
          "partial": "Op Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'&' (\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e in Haksell)\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpAnd",
          "package": "Webrexp",
          "signature": "OpAnd",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "in Haksell",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpAnd",
          "package": "Webrexp",
          "partial": "Op And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'^=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpBegin",
          "package": "Webrexp",
          "signature": "OpBegin",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "op beginning as the CSS3 operator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpBegin",
          "package": "Webrexp",
          "partial": "Op Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e':' concatenate two strings\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpConcat",
          "package": "Webrexp",
          "signature": "OpConcat",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "concatenate two strings",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpConcat",
          "package": "Webrexp",
          "partial": "Op Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'~=' op contain, as the CSS3 operator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpContain",
          "package": "Webrexp",
          "signature": "OpContain",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "op contain as the CSS3 operator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpContain",
          "package": "Webrexp",
          "partial": "Op Contain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpContain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpDiv",
          "package": "Webrexp",
          "signature": "OpDiv",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "div",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpDiv",
          "package": "Webrexp",
          "partial": "Op Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'$=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpEnd",
          "package": "Webrexp",
          "signature": "OpEnd",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "op beginning as the CSS3 operator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpEnd",
          "package": "Webrexp",
          "partial": "Op End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'=' in webrexp (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e in Haskell)\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpEq",
          "package": "Webrexp",
          "signature": "OpEq",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "in webrexp in Haskell",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpEq",
          "package": "Webrexp",
          "partial": "Op Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpGe",
          "package": "Webrexp",
          "signature": "OpGe",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpGe",
          "package": "Webrexp",
          "partial": "Op Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpGe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpGt",
          "package": "Webrexp",
          "signature": "OpGt",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpGt",
          "package": "Webrexp",
          "partial": "Op Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'|=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpHyphenBegin",
          "package": "Webrexp",
          "signature": "OpHyphenBegin",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "op beginning as the CSS3 operator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpHyphenBegin",
          "package": "Webrexp",
          "partial": "Op Hyphen Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpHyphenBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpLe",
          "package": "Webrexp",
          "signature": "OpLe",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpLe",
          "package": "Webrexp",
          "partial": "Op Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpLe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpLt",
          "package": "Webrexp",
          "signature": "OpLt",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpLt",
          "package": "Webrexp",
          "partial": "Op Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'=~' regexp matching\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpMatch",
          "package": "Webrexp",
          "signature": "OpMatch",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "regexp matching",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpMatch",
          "package": "Webrexp",
          "partial": "Op Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpMul",
          "package": "Webrexp",
          "signature": "OpMul",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpMul",
          "package": "Webrexp",
          "partial": "Op Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'!=' (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e in Haskell)\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpNe",
          "package": "Webrexp",
          "signature": "OpNe",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "in Haskell",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpNe",
          "package": "Webrexp",
          "partial": "Op Ne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpNe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'|' (\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e in Haskell)\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpOr",
          "package": "Webrexp",
          "signature": "OpOr",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "in Haskell",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpOr",
          "package": "Webrexp",
          "partial": "Op Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpSub",
          "package": "Webrexp",
          "signature": "OpSub",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpSub",
          "package": "Webrexp",
          "partial": "Op Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'^=' op beginning, as the CSS3 operator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpSubstring",
          "package": "Webrexp",
          "signature": "OpSubstring",
          "source": "src/Text-Webrexp-Exprtypes.html#Op",
          "type": "function"
        },
        "index": {
          "description": "op beginning as the CSS3 operator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OpSubstring",
          "package": "Webrexp",
          "partial": "Op Substring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OpSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e action. Dump the content of\n the current element.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OutputAction",
          "package": "Webrexp",
          "signature": "OutputAction",
          "source": "src/Text-Webrexp-Exprtypes.html#ActionExpr",
          "type": "function"
        },
        "index": {
          "description": "the action Dump the content of the current element",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "OutputAction",
          "package": "Webrexp",
          "partial": "Output Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:OutputAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\u003c' operator in the language. \n Select the parent node\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Parent",
          "package": "Webrexp",
          "signature": "Parent",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "operator in the language Select the parent node",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Parent",
          "package": "Webrexp",
          "partial": "Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'~' operator in the language, used\n to select the previous sibling node.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "PreviousSibling",
          "package": "Webrexp",
          "signature": "PreviousSibling",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "operator in the language used to select the previous sibling node",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "PreviousSibling",
          "package": "Webrexp",
          "partial": "Previous Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:PreviousSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'[ ... ]' Filtering Range\n The Int is used as an index for a counter \n in the DFS evaluator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Range",
          "package": "Webrexp",
          "signature": "Range Int [NodeRange]",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "Filtering Range The Int is used as an index for counter in the DFS evaluator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Range",
          "normalized": "Range Int[NodeRange]",
          "package": "Webrexp",
          "partial": "Range",
          "signature": "Range Int[NodeRange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevery tag/class name\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Ref",
          "package": "Webrexp",
          "signature": "Ref WebRef",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "every tag class name",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Ref",
          "package": "Webrexp",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... #{  }\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Repeat",
          "package": "Webrexp",
          "signature": "Repeat RepeatCount WebRexp",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Repeat",
          "package": "Webrexp",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatAtLeast",
          "package": "Webrexp",
          "signature": "RepeatAtLeast Int",
          "source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatAtLeast",
          "package": "Webrexp",
          "partial": "Repeat At Least",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:RepeatAtLeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatBetween",
          "package": "Webrexp",
          "signature": "RepeatBetween Int Int",
          "source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatBetween",
          "package": "Webrexp",
          "partial": "Repeat Between",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:RepeatBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatTimes",
          "package": "Webrexp",
          "signature": "RepeatTimes Int",
          "source": "src/Text-Webrexp-Exprtypes.html#RepeatCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "RepeatTimes",
          "package": "Webrexp",
          "partial": "Repeat Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:RepeatTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e... *\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Star",
          "package": "Webrexp",
          "signature": "Star WebRexp",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Star",
          "package": "Webrexp",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"...\" A string constant in the source expression.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Str",
          "package": "Webrexp",
          "signature": "Str String",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "string constant in the source expression",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Str",
          "package": "Webrexp",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e( ... , ... , ... )\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Unions",
          "package": "Webrexp",
          "signature": "Unions [WebRexp]",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Unions",
          "normalized": "Unions[WebRexp]",
          "package": "Webrexp",
          "partial": "Unions",
          "signature": "Unions[WebRexp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'!'\n Possess an unique index to differentiate all the differents\n uniques. Negative value are considered invalid, all positive or\n null one are accepted.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Unique",
          "package": "Webrexp",
          "signature": "Unique Int",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRexp",
          "type": "function"
        },
        "index": {
          "description": "Possess an unique index to differentiate all the differents uniques Negative value are considered invalid all positive or null one are accepted",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Unique",
          "package": "Webrexp",
          "partial": "Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'*' Any subelement.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Wildcard",
          "package": "Webrexp",
          "signature": "Wildcard",
          "source": "src/Text-Webrexp-Exprtypes.html#WebRef",
          "type": "function"
        },
        "index": {
          "description": "Any subelement",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "Wildcard",
          "package": "Webrexp",
          "partial": "Wildcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:Wildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreparation function for webrexp, assign all indices\n used for evaluation as an automata.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "assignWebrexpIndices",
          "package": "Webrexp",
          "signature": "WebRexp -\u003e (Int, Int, WebRexp)",
          "source": "src/Text-Webrexp-Exprtypes.html#assignWebrexpIndices",
          "type": "function"
        },
        "index": {
          "description": "Preparation function for webrexp assign all indices used for evaluation as an automata",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "assignWebrexpIndices",
          "normalized": "WebRexp-\u003e(Int,Int,WebRexp)",
          "package": "Webrexp",
          "partial": "Webrexp Indices",
          "signature": "WebRexp-\u003e(Int,Int,WebRexp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:assignWebrexpIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function permit the rewriting of a wabrexp in a depth-first\n fashion while carying out an accumulator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "foldWebRexp",
          "package": "Webrexp",
          "signature": "(a -\u003e WebRexp -\u003e (a, WebRexp)) -\u003e a -\u003e WebRexp -\u003e (a, WebRexp)",
          "source": "src/Text-Webrexp-Exprtypes.html#foldWebRexp",
          "type": "function"
        },
        "index": {
          "description": "This function permit the rewriting of wabrexp in depth-first fashion while carying out an accumulator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "foldWebRexp",
          "normalized": "(a-\u003eWebRexp-\u003e(a,WebRexp))-\u003ea-\u003eWebRexp-\u003e(a,WebRexp)",
          "package": "Webrexp",
          "partial": "Web Rexp",
          "signature": "(a-\u003eWebRexp-\u003e(a,WebRexp))-\u003ea-\u003eWebRexp-\u003e(a,WebRexp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:foldWebRexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell if an action is a predicate and is only\n used to filter nodes. Expression can be modified\n with this information to help prunning as soon\n as possible with the DFS evaluator.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "isActionPredicate",
          "package": "Webrexp",
          "signature": "ActionExpr -\u003e Bool",
          "source": "src/Text-Webrexp-Exprtypes.html#isActionPredicate",
          "type": "function"
        },
        "index": {
          "description": "Tell if an action is predicate and is only used to filter nodes Expression can be modified with this information to help prunning as soon as possible with the DFS evaluator",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "isActionPredicate",
          "normalized": "ActionExpr-\u003eBool",
          "package": "Webrexp",
          "partial": "Action Predicate",
          "signature": "ActionExpr-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:isActionPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to check if a given in dex is within\n all the ranges\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "isInNodeRange",
          "package": "Webrexp",
          "signature": "Int -\u003e [NodeRange] -\u003e Bool",
          "source": "src/Text-Webrexp-Exprtypes.html#isInNodeRange",
          "type": "function"
        },
        "index": {
          "description": "Helper function to check if given in dex is within all the ranges",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "isInNodeRange",
          "normalized": "Int-\u003e[NodeRange]-\u003eBool",
          "package": "Webrexp",
          "partial": "In Node Range",
          "signature": "Int-\u003e[NodeRange]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:isInNodeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell if an action operator return a boolean\n operation. Useful to tell if an action is a\n predicate. See \u003ccode\u003e\u003ca\u003eisActionPredicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "isOperatorBoolean",
          "package": "Webrexp",
          "signature": "Op -\u003e Bool",
          "source": "src/Text-Webrexp-Exprtypes.html#isOperatorBoolean",
          "type": "function"
        },
        "index": {
          "description": "Tell if an action operator return boolean operation Useful to tell if an action is predicate See isActionPredicate",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "isOperatorBoolean",
          "normalized": "Op-\u003eBool",
          "package": "Webrexp",
          "partial": "Operator Boolean",
          "signature": "Op-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:isOperatorBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Exprtypes",
          "name": "packRefFiltering",
          "package": "Webrexp",
          "signature": "WebRexp -\u003e WebRexp",
          "source": "src/Text-Webrexp-Exprtypes.html#packRefFiltering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "packRefFiltering",
          "normalized": "WebRexp-\u003eWebRexp",
          "package": "Webrexp",
          "partial": "Ref Filtering",
          "signature": "WebRexp-\u003eWebRexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:packRefFiltering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing for \u003ccode\u003e\u003ca\u003eWebRef\u003c/a\u003e\u003c/code\u003e. It's should be reparsable\n by the WebRexp parser.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "prettyShowWebRef",
          "package": "Webrexp",
          "signature": "WebRef -\u003e String",
          "source": "src/Text-Webrexp-Exprtypes.html#prettyShowWebRef",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing for WebRef It should be reparsable by the WebRexp parser",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "prettyShowWebRef",
          "normalized": "WebRef-\u003eString",
          "package": "Webrexp",
          "partial": "Show Web Ref",
          "signature": "WebRef-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:prettyShowWebRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is an helper function to simplify\n the handling the node range. After simplification,\n the ranges are sorted in ascending order and no\n node range overlap.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Exprtypes",
          "name": "simplifyNodeRanges",
          "package": "Webrexp",
          "signature": "[NodeRange] -\u003e [NodeRange]",
          "source": "src/Text-Webrexp-Exprtypes.html#simplifyNodeRanges",
          "type": "function"
        },
        "index": {
          "description": "This function is an helper function to simplify the handling the node range After simplification the ranges are sorted in ascending order and no node range overlap",
          "hierarchy": "Text Webrexp Exprtypes",
          "module": "Text.Webrexp.Exprtypes",
          "name": "simplifyNodeRanges",
          "normalized": "[NodeRange]-\u003e[NodeRange]",
          "package": "Webrexp",
          "partial": "Node Ranges",
          "signature": "[NodeRange]-\u003e[NodeRange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Exprtypes.html#v:simplifyNodeRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module store the interface between the evaluator\n and the manipulated graph.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "GraphWalker",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html",
          "type": "module"
        },
        "index": {
          "description": "This module store the interface between the evaluator and the manipulated graph",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "GraphWalker",
          "package": "Webrexp",
          "partial": "Graph Walker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of indirect access demand.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "AccessResult",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
          "type": "data"
        },
        "index": {
          "description": "Result of indirect access demand",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "AccessResult",
          "package": "Webrexp",
          "partial": "Access Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:AccessResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent indirect links or links which\n necessitate the use of the IO monad to walk\n around the graph.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "GraphPath",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html#GraphPath",
          "type": "class"
        },
        "index": {
          "description": "Represent indirect links or links which necessitate the use of the IO monad to walk around the graph",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "GraphPath",
          "package": "Webrexp",
          "partial": "Graph Path",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:GraphPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aim of this typeclass is to permit\n the use of different html/xml parser if\n if the first one is found to be bad. All\n the logic should use this interface.\n\u003c/p\u003e\u003cp\u003eMinimal implementation : everything but deepValueOf.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "GraphWalker",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html#GraphWalker",
          "type": "class"
        },
        "index": {
          "description": "The aim of this typeclass is to permit the use of different html xml parser if if the first one is found to be bad All the logic should use this interface Minimal implementation everything but deepValueOf",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "GraphWalker",
          "package": "Webrexp",
          "partial": "Graph Walker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:GraphWalker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType used to propagate different logging\n level across the software.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "Logger",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html#Logger",
          "type": "type"
        },
        "index": {
          "description": "Type used to propagate different logging level across the software",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "Logger",
          "package": "Webrexp",
          "partial": "Logger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal\u003cem\u003eErr\u003c/em\u003everbose loggers.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "Loggers",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html#Loggers",
          "type": "type"
        },
        "index": {
          "description": "Normal Err verbose loggers",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "Loggers",
          "package": "Webrexp",
          "partial": "Loggers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:Loggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent the path used to find the node\n from the starting point of the graph.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "NodePath",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-GraphWalker.html#NodePath",
          "type": "type"
        },
        "index": {
          "description": "Represent the path used to find the node from the starting point of the graph",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "NodePath",
          "package": "Webrexp",
          "partial": "Node Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#t:NodePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two path togethers, you can think\n of the \u003ca\u003e/\u003c/a\u003e operator for an equivalence.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "(\u003c//\u003e)",
          "package": "Webrexp",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-Webrexp-GraphWalker.html#%3C%2F%2F%3E",
          "type": "method"
        },
        "index": {
          "description": "Combine two path togethers you can think of the operator for an equivalence",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "(\u003c//\u003e) \u003c//\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Webrexp",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:-60--47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCannot access the resource.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "AccessError",
          "package": "Webrexp",
          "signature": "AccessError",
          "source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
          "type": "function"
        },
        "index": {
          "description": "Cannot access the resource",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "AccessError",
          "package": "Webrexp",
          "partial": "Access Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:AccessError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe got something, but we can't interpret\n it, so we return a binary blob.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "DataBlob",
          "package": "Webrexp",
          "signature": "DataBlob rezPath ByteString",
          "source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
          "type": "function"
        },
        "index": {
          "description": "We got something but we can interpret it so we return binary blob",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "DataBlob",
          "package": "Webrexp",
          "partial": "Data Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:DataBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe got a result and parsed it, maybe\n it has changed of location, so we give\n back the location\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "Result",
          "package": "Webrexp",
          "signature": "Result rezPath a",
          "source": "src/Text-Webrexp-GraphWalker.html#AccessResult",
          "type": "function"
        },
        "index": {
          "description": "We got result and parsed it maybe it has changed of location so we give back the location",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "Result",
          "package": "Webrexp",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe idea behind link following.\n The graph engine may have another name for the\n resource, so an updated name can be given.\n The given function is there to log information,\n the second is to log errors\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "accessGraph",
          "package": "Webrexp",
          "signature": "Loggers m -\u003e rezPath -\u003e m (AccessResult a rezPath)",
          "source": "src/Text-Webrexp-GraphWalker.html#accessGraph",
          "type": "method"
        },
        "index": {
          "description": "The idea behind link following The graph engine may have another name for the resource so an updated name can be given The given function is there to log information the second is to log errors",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "accessGraph",
          "normalized": "Loggers a-\u003eb-\u003ea(AccessResult c b)",
          "package": "Webrexp",
          "partial": "Graph",
          "signature": "Loggers m-\u003erezPath-\u003em(AccessResult a rezPath)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:accessGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet back an attribute of the node\n if it exists\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "attribOf",
          "package": "Webrexp",
          "signature": "String -\u003e a -\u003e Maybe String",
          "source": "src/Text-Webrexp-GraphWalker.html#attribOf",
          "type": "method"
        },
        "index": {
          "description": "Get back an attribute of the node if it exists",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "attribOf",
          "normalized": "String-\u003ea-\u003eMaybe String",
          "package": "Webrexp",
          "partial": "Of",
          "signature": "String-\u003ea-\u003eMaybe String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:attribOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the children of the current\n node.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "childrenOf",
          "package": "Webrexp",
          "signature": "a -\u003e m [a]",
          "source": "src/Text-Webrexp-GraphWalker.html#childrenOf",
          "type": "method"
        },
        "index": {
          "description": "Get all the children of the current node",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "childrenOf",
          "normalized": "a-\u003eb[a]",
          "package": "Webrexp",
          "partial": "Of",
          "signature": "a-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:childrenOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike value of, but force the node to collect the\n value of all it's children in the process.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "deepValueOf",
          "package": "Webrexp",
          "signature": "a -\u003e m String",
          "source": "src/Text-Webrexp-GraphWalker.html#deepValueOf",
          "type": "method"
        },
        "index": {
          "description": "Like value of but force the node to collect the value of all it children in the process",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "deepValueOf",
          "normalized": "a-\u003eb String",
          "package": "Webrexp",
          "partial": "Value Of",
          "signature": "a-\u003em String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:deepValueOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all the \u003ca\u003echildren\u003c/a\u003e/linked node of a given node.\n The given node is not included in the list.\n A list of node with the taken path is returned.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "descendants",
          "package": "Webrexp",
          "signature": "a -\u003e m [(a, [(a, Int)])]",
          "source": "src/Text-Webrexp-GraphWalker.html#descendants",
          "type": "function"
        },
        "index": {
          "description": "Return list of all the children linked node of given node The given node is not included in the list list of node with the taken path is returned",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "descendants",
          "normalized": "a-\u003eb[(a,[(a,Int)])]",
          "package": "Webrexp",
          "signature": "a-\u003em[(a,[(a,Int)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:descendants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove semantic, try to dump the pointed\n resource to the current folder.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "dumpDataAtPath",
          "package": "Webrexp",
          "signature": "Loggers m -\u003e a -\u003e m ()",
          "source": "src/Text-Webrexp-GraphWalker.html#dumpDataAtPath",
          "type": "method"
        },
        "index": {
          "description": "Move semantic try to dump the pointed resource to the current folder",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "dumpDataAtPath",
          "normalized": "Loggers a-\u003eb-\u003ea()",
          "package": "Webrexp",
          "partial": "Data At Path",
          "signature": "Loggers m-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:dumpDataAtPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first found node if any.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findFirstNamed",
          "package": "Webrexp",
          "signature": "String -\u003e [a] -\u003e m (Maybe (a, [(a, Int)]))",
          "source": "src/Text-Webrexp-GraphWalker.html#findFirstNamed",
          "type": "function"
        },
        "index": {
          "description": "Return the first found node if any",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findFirstNamed",
          "normalized": "String-\u003e[a]-\u003eb(Maybe(a,[(a,Int)]))",
          "package": "Webrexp",
          "partial": "First Named",
          "signature": "String-\u003e[a]-\u003em(Maybe(a,[(a,Int)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findFirstNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindFirstNamed\u003c/a\u003e\u003c/code\u003e, but without the monadic interface.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findFirstNamedPure",
          "package": "Webrexp",
          "signature": "(a -\u003e [a]) -\u003e String -\u003e [a] -\u003e Maybe (a, [(a, Int)])",
          "source": "src/Text-Webrexp-GraphWalker.html#findFirstNamedPure",
          "type": "function"
        },
        "index": {
          "description": "Like findFirstNamed but without the monadic interface",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findFirstNamedPure",
          "normalized": "(a-\u003e[a])-\u003eString-\u003e[a]-\u003eMaybe(a,[(a,Int)])",
          "package": "Webrexp",
          "partial": "First Named Pure",
          "signature": "(a-\u003e[a])-\u003eString-\u003e[a]-\u003eMaybe(a,[(a,Int)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findFirstNamedPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a tag and a name, retrieve\n the first matching tags in the hierarchy.\n It must return the list of ancestors permitting\n the acess to the path used to find children\n\u003c/p\u003e\u003cp\u003ethe returned list must contain : the node itself if\n it match the name, and all the children containing the\n good name.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findNamed",
          "package": "Webrexp",
          "signature": "String -\u003e a -\u003e m [(a, [(a, Int)])]",
          "source": "src/Text-Webrexp-GraphWalker.html#findNamed",
          "type": "function"
        },
        "index": {
          "description": "Given tag and name retrieve the first matching tags in the hierarchy It must return the list of ancestors permitting the acess to the path used to find children the returned list must contain the node itself if it match the name and all the children containing the good name",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findNamed",
          "normalized": "String-\u003ea-\u003eb[(a,[(a,Int)])]",
          "package": "Webrexp",
          "partial": "Named",
          "signature": "String-\u003ea-\u003em[(a,[(a,Int)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindNamed\u003c/a\u003e\u003c/code\u003e but without the monadic interface.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findNamedPure",
          "package": "Webrexp",
          "signature": "(a -\u003e [a]) -\u003e String -\u003e a -\u003e [(a, [(a, Int)])]",
          "source": "src/Text-Webrexp-GraphWalker.html#findNamedPure",
          "type": "function"
        },
        "index": {
          "description": "Like findNamed but without the monadic interface",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "findNamedPure",
          "normalized": "(a-\u003e[a])-\u003eString-\u003ea-\u003e[(a,[(a,Int)])]",
          "package": "Webrexp",
          "partial": "Named Pure",
          "signature": "(a-\u003e[a])-\u003eString-\u003ea-\u003e[(a,[(a,Int)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:findNamedPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion to be used to import path\n from attributes/document (not really\n well specified).\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "importPath",
          "package": "Webrexp",
          "signature": "String -\u003e Maybe a",
          "source": "src/Text-Webrexp-GraphWalker.html#importPath",
          "type": "method"
        },
        "index": {
          "description": "conversion to be used to import path from attributes document not really well specified",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "importPath",
          "normalized": "String-\u003eMaybe a",
          "package": "Webrexp",
          "partial": "Path",
          "signature": "String-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:importPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all the indirectly linked content\n of a node, can be used for element like an\n HTML link or an linked image/obj\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "indirectLinks",
          "package": "Webrexp",
          "signature": "a -\u003e [rezPath]",
          "source": "src/Text-Webrexp-GraphWalker.html#indirectLinks",
          "type": "method"
        },
        "index": {
          "description": "Retrieve all the indirectly linked content of node can be used for element like an HTML link or an linked image obj",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "indirectLinks",
          "normalized": "a-\u003e[b]",
          "package": "Webrexp",
          "partial": "Links",
          "signature": "a-\u003e[rezPath]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:indirectLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell if the history associated is fixed or not.\n If the history is not fixed and can change (if you\n are querying the filesystem for example, it should\n return False)\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "isHistoryMutable",
          "package": "Webrexp",
          "signature": "a -\u003e Bool",
          "source": "src/Text-Webrexp-GraphWalker.html#isHistoryMutable",
          "type": "method"
        },
        "index": {
          "description": "Tell if the history associated is fixed or not If the history is not fixed and can change if you are querying the filesystem for example it should return False",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "isHistoryMutable",
          "normalized": "a-\u003eBool",
          "package": "Webrexp",
          "partial": "History Mutable",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:isHistoryMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a graphpath, transform it to\n a filepath which can be used to store\n a node.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "localizePath",
          "package": "Webrexp",
          "signature": "a -\u003e FilePath",
          "source": "src/Text-Webrexp-GraphWalker.html#localizePath",
          "type": "method"
        },
        "index": {
          "description": "Given graphpath transform it to filepath which can be used to store node",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "localizePath",
          "normalized": "a-\u003eFilePath",
          "package": "Webrexp",
          "partial": "Path",
          "signature": "a-\u003eFilePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:localizePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current node is named, return\n it's name, otherwise return Nothing.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "nameOf",
          "package": "Webrexp",
          "signature": "a -\u003e Maybe String",
          "source": "src/Text-Webrexp-GraphWalker.html#nameOf",
          "type": "method"
        },
        "index": {
          "description": "If the current node is named return it name otherwise return Nothing",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "nameOf",
          "normalized": "a-\u003eMaybe String",
          "package": "Webrexp",
          "partial": "Of",
          "signature": "a-\u003eMaybe String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:nameOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003edescendants\u003c/a\u003e\u003c/code\u003e, but without the monadic interface.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "pureDescendants",
          "package": "Webrexp",
          "signature": "(a -\u003e [a]) -\u003e a -\u003e [(a, [(a, Int)])]",
          "source": "src/Text-Webrexp-GraphWalker.html#pureDescendants",
          "type": "function"
        },
        "index": {
          "description": "like descendants but without the monadic interface",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "pureDescendants",
          "normalized": "(a-\u003e[a])-\u003ea-\u003e[(a,[(a,Int)])]",
          "package": "Webrexp",
          "partial": "Descendants",
          "signature": "(a-\u003e[a])-\u003ea-\u003e[(a,[(a,Int)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:pureDescendants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as accessGraph, but don't try to return\n a structured result, only blobs.\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "rawAccess",
          "package": "Webrexp",
          "signature": "Loggers m -\u003e rezPath -\u003e m (AccessResult a rezPath)",
          "source": "src/Text-Webrexp-GraphWalker.html#rawAccess",
          "type": "method"
        },
        "index": {
          "description": "Same as accessGraph but don try to return structured result only blobs",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "rawAccess",
          "normalized": "Loggers a-\u003eb-\u003ea(AccessResult c b)",
          "package": "Webrexp",
          "partial": "Access",
          "signature": "Loggers m-\u003erezPath-\u003em(AccessResult a rezPath)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:rawAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value of the tag (textual)\n\u003c/p\u003e",
          "module": "Text.Webrexp.GraphWalker",
          "name": "valueOf",
          "package": "Webrexp",
          "signature": "a -\u003e String",
          "source": "src/Text-Webrexp-GraphWalker.html#valueOf",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the value of the tag textual",
          "hierarchy": "Text Webrexp GraphWalker",
          "module": "Text.Webrexp.GraphWalker",
          "name": "valueOf",
          "normalized": "a-\u003eString",
          "package": "Webrexp",
          "partial": "Of",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-GraphWalker.html#v:valueOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing the parsing of webrexp.\n It shouldn't be used directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Webrexp.Parser",
          "name": "Parser",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Module implementing the parsing of webrexp It shouldn be used directly",
          "hierarchy": "Text Webrexp Parser",
          "module": "Text.Webrexp.Parser",
          "name": "Parser",
          "package": "Webrexp",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser used to parse a webrexp.\n Use just like any \u003ccode\u003e\u003ca\u003eParsec\u003c/a\u003e\u003c/code\u003e 3.0 parser.\n\u003c/p\u003e",
          "module": "Text.Webrexp.Parser",
          "name": "webRexpParser",
          "package": "Webrexp",
          "signature": "ParsecT String st Identity WebRexp",
          "source": "src/Text-Webrexp-Parser.html#webRexpParser",
          "type": "function"
        },
        "index": {
          "description": "Parser used to parse webrexp Use just like any Parsec parser",
          "hierarchy": "Text Webrexp Parser",
          "module": "Text.Webrexp.Parser",
          "name": "webRexpParser",
          "package": "Webrexp",
          "partial": "Rexp Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Parser.html#v:webRexpParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.Quote",
          "name": "Quote",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Quote.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Webrexp Quote",
          "module": "Text.Webrexp.Quote",
          "name": "Quote",
          "package": "Webrexp",
          "partial": "Quote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Quote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasi quote to transform a webrexp into it's compiled representation.\n You can use it the following way :\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n import Text.Webrexp.Quote\n\n [webrexpCompile| some webrexp [.] |]\n\u003c/pre\u003e",
          "module": "Text.Webrexp.Quote",
          "name": "webrexpCompile",
          "package": "Webrexp",
          "signature": "QuasiQuoter",
          "source": "src/Text-Webrexp-Quote.html#webrexpCompile",
          "type": "function"
        },
        "index": {
          "description": "Quasi quote to transform webrexp into it compiled representation You can use it the following way LANGUAGE QuasiQuotes import Text.Webrexp.Quote webrexpCompile some webrexp",
          "hierarchy": "Text Webrexp Quote",
          "module": "Text.Webrexp.Quote",
          "name": "webrexpCompile",
          "package": "Webrexp",
          "partial": "Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Quote.html#v:webrexpCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuotation to transform a webrexp to\n it's AST representation, resulting type is :: Webrexp.\n You can use it the following way :\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n import Text.Webrexp.Quote\n\n [webrexpParse| some webrexp [.] |]\n\u003c/pre\u003e",
          "module": "Text.Webrexp.Quote",
          "name": "webrexpParse",
          "package": "Webrexp",
          "signature": "QuasiQuoter",
          "source": "src/Text-Webrexp-Quote.html#webrexpParse",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuotation to transform webrexp to it AST representation resulting type is Webrexp You can use it the following way LANGUAGE QuasiQuotes import Text.Webrexp.Quote webrexpParse some webrexp",
          "hierarchy": "Text Webrexp Quote",
          "module": "Text.Webrexp.Quote",
          "name": "webrexpParse",
          "package": "Webrexp",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-Quote.html#v:webrexpParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing plumbing to get a unified path locator,\n handling URI & local path. Implement the \u003ccode\u003e\u003ca\u003eGraphPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGraphWalker\u003c/a\u003e\u003c/code\u003e\n typeclass with \u003ccode\u003eHxtNode\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "ResourcePath",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-ResourcePath.html",
          "type": "module"
        },
        "index": {
          "description": "Module implementing plumbing to get unified path locator handling URI local path Implement the GraphPath and GraphWalker typeclass with HxtNode",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "ResourcePath",
          "package": "Webrexp",
          "partial": "Resource Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain data type\n\u003c/p\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "ResourcePath",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-ResourcePath.html#ResourcePath",
          "type": "data"
        },
        "index": {
          "description": "Main data type",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "ResourcePath",
          "package": "Webrexp",
          "partial": "Resource Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#t:ResourcePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a file stored on the hard-drive of this\n machine.\n\u003c/p\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "Local",
          "package": "Webrexp",
          "signature": "Local FilePath",
          "source": "src/Text-Webrexp-ResourcePath.html#ResourcePath",
          "type": "function"
        },
        "index": {
          "description": "Represent file stored on the hard-drive of this machine",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "Local",
          "package": "Webrexp",
          "partial": "Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a ressource spread on internet.\n\u003c/p\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "Remote",
          "package": "Webrexp",
          "signature": "Remote URI",
          "source": "src/Text-Webrexp-ResourcePath.html#ResourcePath",
          "type": "function"
        },
        "index": {
          "description": "Represent ressource spread on internet",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "Remote",
          "package": "Webrexp",
          "partial": "Remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:Remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp.ResourcePath",
          "name": "accessResourcePath",
          "package": "Webrexp",
          "signature": "Loggers m -\u003e ResourcePath -\u003e m (AccessResult a ResourcePath)",
          "source": "src/Text-Webrexp-ResourcePath.html#accessResourcePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "accessResourcePath",
          "normalized": "Loggers a-\u003eResourcePath-\u003ea(AccessResult b ResourcePath)",
          "package": "Webrexp",
          "partial": "Resource Path",
          "signature": "Loggers m-\u003eResourcePath-\u003em(AccessResult a ResourcePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:accessResourcePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to grab a resource on internet and returning\n it's binary representation, and it's real place if any.\n\u003c/p\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "downloadBinary",
          "package": "Webrexp",
          "signature": "Loggers m -\u003e URI -\u003e m (URI, Response ByteString)",
          "source": "src/Text-Webrexp-ResourcePath.html#downloadBinary",
          "type": "function"
        },
        "index": {
          "description": "Helper function to grab resource on internet and returning it binary representation and it real place if any",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "downloadBinary",
          "normalized": "Loggers a-\u003eURI-\u003ea(URI,Response ByteString)",
          "package": "Webrexp",
          "partial": "Binary",
          "signature": "Loggers m-\u003eURI-\u003em(URI,Response ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:downloadBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a blob of data from a resourcepath and return\n the result.\n\u003c/p\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "rawLoadData",
          "package": "Webrexp",
          "signature": "Loggers m -\u003e ResourcePath -\u003e m (Maybe ByteString)",
          "source": "src/Text-Webrexp-ResourcePath.html#rawLoadData",
          "type": "function"
        },
        "index": {
          "description": "Extract blob of data from resourcepath and return the result",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "rawLoadData",
          "normalized": "Loggers a-\u003eResourcePath-\u003ea(Maybe ByteString)",
          "package": "Webrexp",
          "partial": "Load Data",
          "signature": "Loggers m-\u003eResourcePath-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:rawLoadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a ressource, transforme it to a string\n representation. This function should be used instead\n of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, which is aimed at debugging\n only.\n\u003c/p\u003e",
          "module": "Text.Webrexp.ResourcePath",
          "name": "rezPathToString",
          "package": "Webrexp",
          "signature": "ResourcePath -\u003e String",
          "source": "src/Text-Webrexp-ResourcePath.html#rezPathToString",
          "type": "function"
        },
        "index": {
          "description": "Given ressource transforme it to string representation This function should be used instead of the Show instance which is aimed at debugging only",
          "hierarchy": "Text Webrexp ResourcePath",
          "module": "Text.Webrexp.ResourcePath",
          "name": "rezPathToString",
          "normalized": "ResourcePath-\u003eString",
          "package": "Webrexp",
          "partial": "Path To String",
          "signature": "ResourcePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp-ResourcePath.html#v:rezPathToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric module for using Webrexp as a user.\n the main functions for the user are queryDocument to perform an in-memory\n evaluation, and evalWebRexpDepthFirst\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Webrexp",
          "name": "Webrexp",
          "package": "Webrexp",
          "source": "src/Text-Webrexp.html",
          "type": "module"
        },
        "index": {
          "description": "Generic module for using Webrexp as user the main functions for the user are queryDocument to perform an in-memory evaluation and evalWebRexpDepthFirst",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "Webrexp",
          "package": "Webrexp",
          "partial": "Webrexp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "Conf",
          "package": "Webrexp",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "Conf",
          "package": "Webrexp",
          "partial": "Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#t:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe different kind of content parser usable\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "ParseableType",
          "package": "Webrexp",
          "source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
          "type": "data"
        },
        "index": {
          "description": "Describe different kind of content parser usable",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "ParseableType",
          "package": "Webrexp",
          "partial": "Parseable Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#t:ParseableType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "Conf",
          "package": "Webrexp",
          "signature": "Conf",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "Conf",
          "package": "Webrexp",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate a parser which must be tolerant enough\n to parse HTML\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "ParseableHTML",
          "package": "Webrexp",
          "signature": "ParseableHTML",
          "source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
          "type": "function"
        },
        "index": {
          "description": "Indicate parser which must be tolerant enough to parse HTML",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "ParseableHTML",
          "package": "Webrexp",
          "partial": "Parseable HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:ParseableHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo what you want with it for now.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "ParseableJson",
          "package": "Webrexp",
          "signature": "ParseableJson",
          "source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
          "type": "function"
        },
        "index": {
          "description": "Do what you want with it for now",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "ParseableJson",
          "package": "Webrexp",
          "partial": "Parseable Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:ParseableJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou can go ahead and use a rather strict parser.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "ParseableXML",
          "package": "Webrexp",
          "signature": "ParseableXML",
          "source": "src/Text-Webrexp-Remote-MimeTypes.html#ParseableType",
          "type": "function"
        },
        "index": {
          "description": "You can go ahead and use rather strict parser",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "ParseableXML",
          "package": "Webrexp",
          "partial": "Parseable XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:ParseableXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "defaultConf",
          "package": "Webrexp",
          "signature": "Conf",
          "source": "src/Text-Webrexp.html#defaultConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "defaultConf",
          "package": "Webrexp",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:defaultConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "depthEvaluation",
          "package": "Webrexp",
          "signature": "Bool",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "depthEvaluation",
          "package": "Webrexp",
          "partial": "Evaluation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:depthEvaluation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluation for pre-parsed webrexp.\n Best method if a webrexp has to be evaluated\n many times. Evaluated using breadth first method.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "evalParsedWebRexp",
          "package": "Webrexp",
          "signature": "WebRexp -\u003e IO Bool",
          "source": "src/Text-Webrexp.html#evalParsedWebRexp",
          "type": "function"
        },
        "index": {
          "description": "Evaluation for pre-parsed webrexp Best method if webrexp has to be evaluated many times Evaluated using breadth first method",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "evalParsedWebRexp",
          "normalized": "WebRexp-\u003eIO Bool",
          "package": "Webrexp",
          "partial": "Parsed Web Rexp",
          "signature": "WebRexp-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalParsedWebRexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple evaluation function, evaluation is\n the breadth first type.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "evalWebRexp",
          "package": "Webrexp",
          "signature": "String -\u003e IO Bool",
          "source": "src/Text-Webrexp.html#evalWebRexp",
          "type": "function"
        },
        "index": {
          "description": "Simple evaluation function evaluation is the breadth first type",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "evalWebRexp",
          "normalized": "String-\u003eIO Bool",
          "package": "Webrexp",
          "partial": "Web Rexp",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalWebRexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a webrexp in depth first fashion, returning a success\n status telling if the evaluation got up to the end.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "evalWebRexpDepthFirst",
          "package": "Webrexp",
          "signature": "String -\u003e IO Bool",
          "source": "src/Text-Webrexp.html#evalWebRexpDepthFirst",
          "type": "function"
        },
        "index": {
          "description": "Evaluate webrexp in depth first fashion returning success status telling if the evaluation got up to the end",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "evalWebRexpDepthFirst",
          "normalized": "String-\u003eIO Bool",
          "package": "Webrexp",
          "partial": "Web Rexp Depth First",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalWebRexpDepthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction used in the command line program.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "evalWebRexpWithConf",
          "package": "Webrexp",
          "signature": "Conf -\u003e IO Bool",
          "source": "src/Text-Webrexp.html#evalWebRexpWithConf",
          "type": "function"
        },
        "index": {
          "description": "Function used in the command line program",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "evalWebRexpWithConf",
          "normalized": "Conf-\u003eIO Bool",
          "package": "Webrexp",
          "partial": "Web Rexp With Conf",
          "signature": "Conf-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:evalWebRexpWithConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a webrexp and return all the dumped text as \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n and all errors as \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. Evaluated using depth first method.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "executeParsedWebRexp",
          "package": "Webrexp",
          "signature": "WebRexp -\u003e IO [Either String String]",
          "source": "src/Text-Webrexp.html#executeParsedWebRexp",
          "type": "function"
        },
        "index": {
          "description": "Evaluate webrexp and return all the dumped text as Right and all errors as Left Evaluated using depth first method",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "executeParsedWebRexp",
          "normalized": "WebRexp-\u003eIO[Either String String]",
          "package": "Webrexp",
          "partial": "Parsed Web Rexp",
          "signature": "WebRexp-\u003eIO[Either String String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:executeParsedWebRexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "expr",
          "package": "Webrexp",
          "signature": "String",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "expr",
          "package": "Webrexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "hammeringDelay",
          "package": "Webrexp",
          "signature": "Int",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "hammeringDelay",
          "package": "Webrexp",
          "partial": "Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:hammeringDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "output",
          "package": "Webrexp",
          "signature": "Handle",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "output",
          "package": "Webrexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "outputGraphViz",
          "package": "Webrexp",
          "signature": "Bool",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "outputGraphViz",
          "package": "Webrexp",
          "partial": "Graph Viz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:outputGraphViz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a webrexp.\n This function is useful if the expression has\n to be applied many times.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "parseWebRexp",
          "package": "Webrexp",
          "signature": "String -\u003e Maybe WebRexp",
          "source": "src/Text-Webrexp.html#parseWebRexp",
          "type": "function"
        },
        "index": {
          "description": "Prepare webrexp This function is useful if the expression has to be applied many times",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "parseWebRexp",
          "normalized": "String-\u003eMaybe WebRexp",
          "package": "Webrexp",
          "partial": "Web Rexp",
          "signature": "String-\u003eMaybe WebRexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:parseWebRexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery a document in memory and retrieve the results, you can use it in combination\n to the quasiquoting facility to embed the webrexp in haskell :\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes #-}\n import Text.Webrexp\n import Text.Webrexp.Quote\n import qualified Data.ByteString.Char8 as B\n\n main :: IO ()\n main = print $ queryDocument ParseableJson document [webrexpParse| some things [.] |]\n     where document = B.pack \"{ \\\"some\\\": { \\\"things\\\": \\\"a phrase\\\" } }\"\n\u003c/pre\u003e\u003cp\u003eThe returned values contain possible errors as \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and real value as 'Right.\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "queryDocument",
          "package": "Webrexp",
          "signature": "ParseableType -\u003e ByteString -\u003e WebRexp -\u003e [Either String String]",
          "source": "src/Text-Webrexp.html#queryDocument",
          "type": "function"
        },
        "index": {
          "description": "Query document in memory and retrieve the results you can use it in combination to the quasiquoting facility to embed the webrexp in haskell LANGUAGE QuasiQuotes import Text.Webrexp import Text.Webrexp.Quote import qualified Data.ByteString.Char8 as main IO main print queryDocument ParseableJson document webrexpParse some things where document B.pack some things phrase The returned values contain possible errors as Left and real value as Right",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "queryDocument",
          "normalized": "ParseableType-\u003eByteString-\u003eWebRexp-\u003e[Either String String]",
          "package": "Webrexp",
          "partial": "Document",
          "signature": "ParseableType-\u003eByteString-\u003eWebRexp-\u003e[Either String String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:queryDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly same thing as \u003ccode\u003e\u003ca\u003equeryDocument\u003c/a\u003e\u003c/code\u003e, but in ST\n\u003c/p\u003e",
          "module": "Text.Webrexp",
          "name": "queryDocumentM",
          "package": "Webrexp",
          "signature": "forall s.  ParseableType -\u003e ByteString -\u003e WebRexp -\u003e ST s [Either String String]",
          "source": "src/Text-Webrexp.html#queryDocumentM",
          "type": "function"
        },
        "index": {
          "description": "Exactly same thing as queryDocument but in ST",
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "queryDocumentM",
          "normalized": "a b ParseableType-\u003eByteString-\u003eWebRexp-\u003eST c[Either String String]",
          "package": "Webrexp",
          "partial": "Document",
          "signature": "forall s. ParseableType-\u003eByteString-\u003eWebRexp-\u003eST s[Either String String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:queryDocumentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "quiet",
          "package": "Webrexp",
          "signature": "Bool",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "quiet",
          "package": "Webrexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "showHelp",
          "package": "Webrexp",
          "signature": "Bool",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "showHelp",
          "package": "Webrexp",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:showHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "userAgent",
          "package": "Webrexp",
          "signature": "String",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "userAgent",
          "package": "Webrexp",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:userAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Webrexp",
          "name": "verbose",
          "package": "Webrexp",
          "signature": "Bool",
          "source": "src/Text-Webrexp.html#Conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Webrexp",
          "module": "Text.Webrexp",
          "name": "verbose",
          "package": "Webrexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Webrexp/docs/Text-Webrexp.html#v:verbose"
      }
    }
  ]
]