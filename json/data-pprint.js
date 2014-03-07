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
        "word": "data-pprint"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCatch exceptions produced in pure code\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.Pure",
          "name": "Pure",
          "package": "data-pprint",
          "source": "src/Control-Exception-Pure.html",
          "type": "module"
        },
        "index": {
          "description": "Catch exceptions produced in pure code",
          "hierarchy": "Control Exception Pure",
          "module": "Control.Exception.Pure",
          "name": "Pure",
          "package": "data-pprint",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Control-Exception-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate to weak head normal form and catch \n exceptions which can be raised by errors in pure computation.\n See also the \u003ca\u003eTest.ChasingBottoms.IsBottom\u003c/a\u003e module in ChasingBottoms package.\n\u003c/p\u003e",
          "module": "Control.Exception.Pure",
          "name": "catchPureErrors",
          "package": "data-pprint",
          "signature": "a -\u003e IO (Either String a)",
          "source": "src/Control-Exception-Pure.html#catchPureErrors",
          "type": "function"
        },
        "index": {
          "description": "Evaluate to weak head normal form and catch exceptions which can be raised by errors in pure computation See also the Test.ChasingBottoms.IsBottom module in ChasingBottoms package",
          "hierarchy": "Control Exception Pure",
          "module": "Control.Exception.Pure",
          "name": "catchPureErrors",
          "normalized": "a-\u003eIO(Either String a)",
          "package": "data-pprint",
          "partial": "Pure Errors",
          "signature": "a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Control-Exception-Pure.html#v:catchPureErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure that the error message is a concrete String.\n\u003c/p\u003e",
          "module": "Control.Exception.Pure",
          "name": "catchPureErrorsSafe",
          "package": "data-pprint",
          "signature": "a -\u003e IO (Either String a)",
          "source": "src/Control-Exception-Pure.html#catchPureErrorsSafe",
          "type": "function"
        },
        "index": {
          "description": "Make sure that the error message is concrete String",
          "hierarchy": "Control Exception Pure",
          "module": "Control.Exception.Pure",
          "name": "catchPureErrorsSafe",
          "normalized": "a-\u003eIO(Either String a)",
          "package": "data-pprint",
          "partial": "Pure Errors Safe",
          "signature": "a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Control-Exception-Pure.html#v:catchPureErrorsSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e value with time and size limit\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Data.Compare",
          "name": "Compare",
          "package": "data-pprint",
          "source": "src/Data-Data-Compare.html",
          "type": "module"
        },
        "index": {
          "description": "Compare two Data value with time and size limit",
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "Compare",
          "package": "data-pprint",
          "partial": "Compare",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswer with possibility\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNo\u003c/a\u003e\u003c/code\u003e: no\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e: maybe with d possibility (0-1, 1 denotes yes)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eYes\u003c/a\u003e\u003c/code\u003e: yes\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Data.Compare",
          "name": "Answer",
          "package": "data-pprint",
          "source": "src/Data-Data-Compare.html#Answer",
          "type": "data"
        },
        "index": {
          "description": "Answer with possibility No no Maybe maybe with possibility denotes yes Yes yes",
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "Answer",
          "package": "data-pprint",
          "partial": "Answer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#t:Answer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.Compare",
          "name": "Maybe",
          "package": "data-pprint",
          "signature": "Maybe Double",
          "source": "src/Data-Data-Compare.html#Answer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "Maybe",
          "package": "data-pprint",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#v:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.Compare",
          "name": "No",
          "package": "data-pprint",
          "signature": "No",
          "source": "src/Data-Data-Compare.html#Answer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "No",
          "package": "data-pprint",
          "partial": "No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#v:No"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.Compare",
          "name": "Yes",
          "package": "data-pprint",
          "signature": "Yes",
          "source": "src/Data-Data-Compare.html#Answer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "Yes",
          "package": "data-pprint",
          "partial": "Yes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#v:Yes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e value with time and size limit.\n\u003c/p\u003e",
          "module": "Data.Data.Compare",
          "name": "compareData",
          "package": "data-pprint",
          "signature": "TimeLimit-\u003e TimeLimit-\u003e SizeLimit-\u003e a-\u003e a-\u003e IO (Answer, GenericData, GenericData)",
          "type": "function"
        },
        "index": {
          "description": "Compare two Data value with time and size limit",
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "compareData",
          "normalized": "TimeLimit-\u003eTimeLimit-\u003eSizeLimit-\u003ea-\u003ea-\u003eIO(Answer,GenericData,GenericData)",
          "package": "data-pprint",
          "partial": "Data",
          "signature": "TimeLimit-\u003eTimeLimit-\u003eSizeLimit-\u003ea-\u003ea-\u003eIO(Answer,GenericData,GenericData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#v:compareData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an \u003ccode\u003e\u003ca\u003eAnswer\u003c/a\u003e\u003c/code\u003e as an equality operator.\n\u003c/p\u003e",
          "module": "Data.Data.Compare",
          "name": "showAnswer",
          "package": "data-pprint",
          "signature": "Answer -\u003e String",
          "source": "src/Data-Data-Compare.html#showAnswer",
          "type": "function"
        },
        "index": {
          "description": "Show an Answer as an equality operator",
          "hierarchy": "Data Data Compare",
          "module": "Data.Data.Compare",
          "name": "showAnswer",
          "normalized": "Answer-\u003eString",
          "package": "data-pprint",
          "partial": "Answer",
          "signature": "Answer-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Compare.html#v:showAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion to \u003ccode\u003e\u003ca\u003eGenericData\u003c/a\u003e\u003c/code\u003e with time and space limit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Data.Eval",
          "name": "Eval",
          "package": "data-pprint",
          "source": "src/Data-Data-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion to GenericData with time and space limit",
          "hierarchy": "Data Data Eval",
          "module": "Data.Data.Eval",
          "name": "Eval",
          "package": "data-pprint",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluation with time an size limit.\n\u003c/p\u003e",
          "module": "Data.Data.Eval",
          "name": "eval",
          "package": "data-pprint",
          "signature": "TimeLimit -\u003e SizeLimit -\u003e a -\u003e IO GenericData",
          "source": "src/Data-Data-Eval.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluation with time an size limit",
          "hierarchy": "Data Data Eval",
          "module": "Data.Data.Eval",
          "name": "eval",
          "normalized": "TimeLimit-\u003eSizeLimit-\u003ea-\u003eIO GenericData",
          "package": "data-pprint",
          "signature": "TimeLimit-\u003eSizeLimit-\u003ea-\u003eIO GenericData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Eval.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives more control over the resources\n\u003c/p\u003e",
          "module": "Data.Data.Eval",
          "name": "evalWithBudget",
          "package": "data-pprint",
          "signature": "Budget -\u003e a -\u003e IO GenericData",
          "source": "src/Data-Data-Eval.html#evalWithBudget",
          "type": "function"
        },
        "index": {
          "description": "Gives more control over the resources",
          "hierarchy": "Data Data Eval",
          "module": "Data.Data.Eval",
          "name": "evalWithBudget",
          "normalized": "Budget-\u003ea-\u003eIO GenericData",
          "package": "data-pprint",
          "partial": "With Budget",
          "signature": "Budget-\u003ea-\u003eIO GenericData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-Eval.html#v:evalWithBudget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion from \u003ccode\u003e\u003ca\u003eGenericData\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Data.GenRep.Doc",
          "name": "Doc",
          "package": "data-pprint",
          "source": "src/Data-Data-GenRep-Doc.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion from GenericData to Doc",
          "hierarchy": "Data Data GenRep Doc",
          "module": "Data.Data.GenRep.Doc",
          "name": "Doc",
          "package": "data-pprint",
          "partial": "Doc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Doc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract type of documents.\n A Doc represents a *set* of layouts. A Doc with\n no occurrences of Union or NoDoc represents just one layout.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep.Doc",
          "name": "Doc",
          "package": "data-pprint",
          "type": "data"
        },
        "index": {
          "description": "The abstract type of documents Doc represents set of layouts Doc with no occurrences of Union or NoDoc represents just one layout",
          "hierarchy": "Data Data GenRep Doc",
          "module": "Data.Data.GenRep.Doc",
          "name": "Doc",
          "package": "data-pprint",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Doc.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIsString\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e\n instance IsString Doc where fromString = text\n\u003c/p\u003e\u003cp\u003eShow a character literal. Unicode characters are not escaped.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep.Doc",
          "name": "showLitCharInChar",
          "package": "data-pprint",
          "signature": "Char -\u003e String",
          "source": "src/Data-Data-GenRep-Doc.html#showLitCharInChar",
          "type": "function"
        },
        "index": {
          "description": "IsString instance for Doc instance IsString Doc where fromString text Show character literal Unicode characters are not escaped",
          "hierarchy": "Data Data GenRep Doc",
          "module": "Data.Data.GenRep.Doc",
          "name": "showLitCharInChar",
          "normalized": "Char-\u003eString",
          "package": "data-pprint",
          "partial": "Lit Char In Char",
          "signature": "Char-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Doc.html#v:showLitCharInChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a character in a string literal. Unicode characters are not escaped.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep.Doc",
          "name": "showLitCharInString",
          "package": "data-pprint",
          "signature": "Char -\u003e String",
          "source": "src/Data-Data-GenRep-Doc.html#showLitCharInString",
          "type": "function"
        },
        "index": {
          "description": "Show character in string literal Unicode characters are not escaped",
          "hierarchy": "Data Data GenRep Doc",
          "module": "Data.Data.GenRep.Doc",
          "name": "showLitCharInString",
          "normalized": "Char-\u003eString",
          "package": "data-pprint",
          "partial": "Lit Char In String",
          "signature": "Char-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Doc.html#v:showLitCharInString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eGenericData\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep.Doc",
          "name": "toDoc",
          "package": "data-pprint",
          "signature": "GenericData -\u003e Doc",
          "source": "src/Data-Data-GenRep-Doc.html#toDoc",
          "type": "function"
        },
        "index": {
          "description": "Convert GenericData to Doc",
          "hierarchy": "Data Data GenRep Doc",
          "module": "Data.Data.GenRep.Doc",
          "name": "toDoc",
          "normalized": "GenericData-\u003eDoc",
          "package": "data-pprint",
          "partial": "Doc",
          "signature": "GenericData-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Doc.html#v:toDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntended for internal use: Generic representation of \u003ccode\u003eData\u003c/code\u003e vales.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Data.GenRep.Functions",
          "name": "Functions",
          "package": "data-pprint",
          "source": "src/Data-Data-GenRep-Functions.html",
          "type": "module"
        },
        "index": {
          "description": "Intended for internal use Generic representation of Data vales",
          "hierarchy": "Data Data GenRep Functions",
          "module": "Data.Data.GenRep.Functions",
          "name": "Functions",
          "package": "data-pprint",
          "partial": "Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Functions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.GenRep.Functions",
          "name": "getErrorIndex",
          "package": "data-pprint",
          "signature": "String -\u003e State (Int, [(String, String)]) String",
          "source": "src/Data-Data-GenRep-Functions.html#getErrorIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data GenRep Functions",
          "module": "Data.Data.GenRep.Functions",
          "name": "getErrorIndex",
          "normalized": "String-\u003eState(Int,[(String,String)])String",
          "package": "data-pprint",
          "partial": "Error Index",
          "signature": "String-\u003eState(Int,[(String,String)])String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Functions.html#v:getErrorIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to hide some part of the value.\n\u003c/p\u003e\u003cp\u003eThis is used in the evaluation of exercises, when the result\n is wrong. We would like to show the erroneous part but not the whole result.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep.Functions",
          "name": "mistify",
          "package": "data-pprint",
          "signature": "GenericData -\u003e GenericData",
          "source": "src/Data-Data-GenRep-Functions.html#mistify",
          "type": "function"
        },
        "index": {
          "description": "Try to hide some part of the value This is used in the evaluation of exercises when the result is wrong We would like to show the erroneous part but not the whole result",
          "hierarchy": "Data Data GenRep Functions",
          "module": "Data.Data.GenRep.Functions",
          "name": "mistify",
          "normalized": "GenericData-\u003eGenericData",
          "package": "data-pprint",
          "signature": "GenericData-\u003eGenericData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Functions.html#v:mistify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect and number \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e values and replace them\n by an indexed bottom sign.\n Repeated errors will get the same number.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep.Functions",
          "name": "numberErrors",
          "package": "data-pprint",
          "signature": "[GenericData] -\u003e ([GenericData], [(String, String)])",
          "source": "src/Data-Data-GenRep-Functions.html#numberErrors",
          "type": "function"
        },
        "index": {
          "description": "Collect and number Error values and replace them by an indexed bottom sign Repeated errors will get the same number",
          "hierarchy": "Data Data GenRep Functions",
          "module": "Data.Data.GenRep.Functions",
          "name": "numberErrors",
          "normalized": "[GenericData]-\u003e([GenericData],[(String,String)])",
          "package": "data-pprint",
          "partial": "Errors",
          "signature": "[GenericData]-\u003e([GenericData],[(String,String)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep-Functions.html#v:numberErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntended for internal use: Generic representation of \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e vales.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Data.GenRep",
          "name": "GenRep",
          "package": "data-pprint",
          "source": "src/Data-Data-GenRep.html",
          "type": "module"
        },
        "index": {
          "description": "Intended for internal use Generic representation of Data vales",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "GenRep",
          "package": "data-pprint",
          "partial": "Gen Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName and precedence of constructors.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "ConstructorName",
          "package": "data-pprint",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "data"
        },
        "index": {
          "description": "Name and precedence of constructors",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "ConstructorName",
          "package": "data-pprint",
          "partial": "Constructor Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#t:ConstructorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "GenericData",
          "package": "data-pprint",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "data"
        },
        "index": {
          "description": "Representation of Data values",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "GenericData",
          "package": "data-pprint",
          "partial": "Generic Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#t:GenericData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echaracter literal\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Char",
          "package": "data-pprint",
          "signature": "Char Char",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "description": "character literal",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Char",
          "package": "data-pprint",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enonempty list constructor\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Cons",
          "package": "data-pprint",
          "signature": "Cons",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "description": "nonempty list constructor",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Cons",
          "package": "data-pprint",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.GenRep",
          "name": "Constructor",
          "package": "data-pprint",
          "signature": "Constructor ConstructorName [GenericData]",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Constructor",
          "normalized": "Constructor ConstructorName[GenericData]",
          "package": "data-pprint",
          "partial": "Constructor",
          "signature": "Constructor ConstructorName[GenericData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealso caused by space shortage but this omission a relevant part\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Detail",
          "package": "data-pprint",
          "signature": "Detail GenericData",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "description": "also caused by space shortage but this omission relevant part",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Detail",
          "package": "data-pprint",
          "partial": "Detail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Detail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexception error message\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Error",
          "package": "data-pprint",
          "signature": "Error String",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "description": "exception error message",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Error",
          "package": "data-pprint",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is caused space shortage, shown as three dots\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Hole",
          "package": "data-pprint",
          "signature": "Hole",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "description": "this is caused space shortage shown as three dots",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Hole",
          "package": "data-pprint",
          "partial": "Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Hole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.GenRep",
          "name": "Infix",
          "package": "data-pprint",
          "signature": "Infix Int String",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Infix",
          "package": "data-pprint",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.GenRep",
          "name": "Infixl",
          "package": "data-pprint",
          "signature": "Infixl Int String",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Infixl",
          "package": "data-pprint",
          "partial": "Infixl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Infixl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Data.GenRep",
          "name": "Infixr",
          "package": "data-pprint",
          "signature": "Infixr Int String",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Infixr",
          "package": "data-pprint",
          "partial": "Infixr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Infixr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused during show\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "ListHole",
          "package": "data-pprint",
          "signature": "ListHole",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "description": "used during show",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "ListHole",
          "package": "data-pprint",
          "partial": "List Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:ListHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror message which may contain further errors\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "NestedError",
          "package": "data-pprint",
          "signature": "NestedError GenericData",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "description": "error message which may contain further errors",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "NestedError",
          "package": "data-pprint",
          "partial": "Nested Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:NestedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty list constructor\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Nil",
          "package": "data-pprint",
          "signature": "Nil",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "description": "empty list constructor",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Nil",
          "package": "data-pprint",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused also for literals except characters\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Prefix",
          "package": "data-pprint",
          "signature": "Prefix String",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "description": "used also for literals except characters",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Prefix",
          "package": "data-pprint",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etimeout, the \u003ccode\u003eDouble\u003c/code\u003e is between 0 and 1. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0: evaluation of subexpression started at the beginning\n\u003c/li\u003e\u003cli\u003e towards 1: evaluation of subexpression started near the end of time limit\n\u003c/li\u003e\u003cli\u003e 1: evaluation of subexpression started after time limit (rare)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Data.GenRep",
          "name": "Timeout",
          "package": "data-pprint",
          "signature": "Timeout Double",
          "source": "src/Data-Data-GenRep.html#GenericData",
          "type": "function"
        },
        "index": {
          "description": "timeout the Double is between and evaluation of subexpression started at the beginning towards evaluation of subexpression started near the end of time limit evaluation of subexpression started after time limit rare",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Timeout",
          "package": "data-pprint",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etuple with n elements\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "Tuple",
          "package": "data-pprint",
          "signature": "Tuple Int",
          "source": "src/Data-Data-GenRep.html#ConstructorName",
          "type": "function"
        },
        "index": {
          "description": "tuple with elements",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "Tuple",
          "package": "data-pprint",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArity of the toplevel constructor.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "arity",
          "package": "data-pprint",
          "signature": "a -\u003e Int",
          "source": "src/Data-Data-GenRep.html#arity",
          "type": "function"
        },
        "index": {
          "description": "Arity of the toplevel constructor",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "arity",
          "normalized": "a-\u003eInt",
          "package": "data-pprint",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e value to \u003ccode\u003e\u003ca\u003eGenericData\u003c/a\u003e\u003c/code\u003e given the\n \u003ccode\u003e\u003ca\u003eGenericData\u003c/a\u003e\u003c/code\u003e representations of the value's children.\n\u003c/p\u003e",
          "module": "Data.Data.GenRep",
          "name": "constructor",
          "package": "data-pprint",
          "signature": "Budget -\u003e a -\u003e IO [GenericData] -\u003e IO GenericData",
          "source": "src/Data-Data-GenRep.html#constructor",
          "type": "function"
        },
        "index": {
          "description": "Convert Data value to GenericData given the GenericData representations of the value children",
          "hierarchy": "Data Data GenRep",
          "module": "Data.Data.GenRep",
          "name": "constructor",
          "normalized": "Budget-\u003ea-\u003eIO[GenericData]-\u003eIO GenericData",
          "package": "data-pprint",
          "signature": "Budget-\u003ea-\u003eIO[GenericData]-\u003eIO GenericData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-Data-GenRep.html#v:constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrettyprint and compare \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PPrint",
          "name": "PPrint",
          "package": "data-pprint",
          "source": "src/Data-PPrint.html",
          "type": "module"
        },
        "index": {
          "description": "Prettyprint and compare Data values",
          "hierarchy": "Data PPrint",
          "module": "Data.PPrint",
          "name": "PPrint",
          "package": "data-pprint",
          "partial": "PPrint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-PPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eThe can be yes, no or maybe.\n The differences are highlighted.\n\u003c/p\u003e\u003cp\u003eThere is a 1 second time limit and the output\n contains at most approximately 500 characters.\n\u003c/p\u003e\u003cp\u003eThe exceptions are shown as bottom signs\n followed by explanations.\n\u003c/p\u003e",
          "module": "Data.PPrint",
          "name": "(===)",
          "package": "data-pprint",
          "signature": "a -\u003e a -\u003e IO Doc",
          "source": "src/Data-PPrint.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Compare two Data values The can be yes no or maybe The differences are highlighted There is second time limit and the output contains at most approximately characters The exceptions are shown as bottom signs followed by explanations",
          "hierarchy": "Data PPrint",
          "module": "Data.PPrint",
          "name": "(===) ===",
          "normalized": "a-\u003ea-\u003eIO Doc",
          "package": "data-pprint",
          "signature": "a-\u003ea-\u003eIO Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-PPrint.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrettyprint a \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eThere is a 1 second time limit and the output\n contains at most approximately 500 characters.\n\u003c/p\u003e\u003cp\u003eThe exceptions are shown as bottom signs\n followed by explanations.\n\u003c/p\u003e",
          "module": "Data.PPrint",
          "name": "pprint",
          "package": "data-pprint",
          "signature": "a -\u003e IO Doc",
          "source": "src/Data-PPrint.html#pprint",
          "type": "function"
        },
        "index": {
          "description": "Prettyprint Data value There is second time limit and the output contains at most approximately characters The exceptions are shown as bottom signs followed by explanations",
          "hierarchy": "Data PPrint",
          "module": "Data.PPrint",
          "name": "pprint",
          "normalized": "a-\u003eIO Doc",
          "package": "data-pprint",
          "signature": "a-\u003eIO Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/Data-PPrint.html#v:pprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntended for internal use: Parallel evaluation of \u003ccode\u003eIO\u003c/code\u003e values\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Parallel",
          "name": "Parallel",
          "package": "data-pprint",
          "source": "src/System-IO-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "Intended for internal use Parallel evaluation of IO values",
          "hierarchy": "System IO Parallel",
          "module": "System.IO.Parallel",
          "name": "Parallel",
          "package": "data-pprint",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-IO-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun four \u003ccode\u003eIO\u003c/code\u003e computations in parallel and wait for the results.\n\u003c/p\u003e",
          "module": "System.IO.Parallel",
          "name": "fourParallel",
          "package": "data-pprint",
          "signature": "IO a -\u003e IO b -\u003e IO c -\u003e IO d -\u003e IO (a, b, c, d)",
          "source": "src/System-IO-Parallel.html#fourParallel",
          "type": "function"
        },
        "index": {
          "description": "Run four IO computations in parallel and wait for the results",
          "hierarchy": "System IO Parallel",
          "module": "System.IO.Parallel",
          "name": "fourParallel",
          "normalized": "IO a-\u003eIO b-\u003eIO c-\u003eIO d-\u003eIO(a,b,c,d)",
          "package": "data-pprint",
          "partial": "Parallel",
          "signature": "IO a-\u003eIO b-\u003eIO c-\u003eIO d-\u003eIO(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-IO-Parallel.html#v:fourParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun computations in parallel and wait for the results.\n\u003c/p\u003e",
          "module": "System.IO.Parallel",
          "name": "manyParallel",
          "package": "data-pprint",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/System-IO-Parallel.html#manyParallel",
          "type": "function"
        },
        "index": {
          "description": "Run computations in parallel and wait for the results",
          "hierarchy": "System IO Parallel",
          "module": "System.IO.Parallel",
          "name": "manyParallel",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "data-pprint",
          "partial": "Parallel",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-IO-Parallel.html#v:manyParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun three \u003ccode\u003eIO\u003c/code\u003e computations in parallel and wait for the results.\n\u003c/p\u003e",
          "module": "System.IO.Parallel",
          "name": "threeParallel",
          "package": "data-pprint",
          "signature": "IO a -\u003e IO b -\u003e IO c -\u003e IO (a, b, c)",
          "source": "src/System-IO-Parallel.html#threeParallel",
          "type": "function"
        },
        "index": {
          "description": "Run three IO computations in parallel and wait for the results",
          "hierarchy": "System IO Parallel",
          "module": "System.IO.Parallel",
          "name": "threeParallel",
          "normalized": "IO a-\u003eIO b-\u003eIO c-\u003eIO(a,b,c)",
          "package": "data-pprint",
          "partial": "Parallel",
          "signature": "IO a-\u003eIO b-\u003eIO c-\u003eIO(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-IO-Parallel.html#v:threeParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two \u003ccode\u003eIO\u003c/code\u003e computations in parallel and wait for the results.\n\u003c/p\u003e",
          "module": "System.IO.Parallel",
          "name": "twoParallel",
          "package": "data-pprint",
          "signature": "IO a -\u003e IO b -\u003e IO (a, b)",
          "source": "src/System-IO-Parallel.html#twoParallel",
          "type": "function"
        },
        "index": {
          "description": "Run two IO computations in parallel and wait for the results",
          "hierarchy": "System IO Parallel",
          "module": "System.IO.Parallel",
          "name": "twoParallel",
          "normalized": "IO a-\u003eIO b-\u003eIO(a,b)",
          "package": "data-pprint",
          "partial": "Parallel",
          "signature": "IO a-\u003eIO b-\u003eIO(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-IO-Parallel.html#v:twoParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTime and size limits\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "Limits",
          "package": "data-pprint",
          "source": "src/System-SimpleTimeout-Limits.html",
          "type": "module"
        },
        "index": {
          "description": "Time and size limits",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "Limits",
          "package": "data-pprint",
          "partial": "Limits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBudget\u003c/a\u003e\u003c/code\u003e contains a time and size limit.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "Budget",
          "package": "data-pprint",
          "source": "src/System-SimpleTimeout-Limits.html#Budget",
          "type": "data"
        },
        "index": {
          "description": "Budget contains time and size limit",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "Budget",
          "package": "data-pprint",
          "partial": "Budget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#t:Budget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize limit is an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e which meaning is given by \u003ccode\u003e\u003ca\u003echeckBudget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edecSizeBudget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "SizeLimit",
          "package": "data-pprint",
          "source": "src/System-SimpleTimeout-Limits.html#SizeLimit",
          "type": "type"
        },
        "index": {
          "description": "Size limit is an Int which meaning is given by checkBudget and decSizeBudget",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "SizeLimit",
          "package": "data-pprint",
          "partial": "Size Limit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#t:SizeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime limit is a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e which is the allowed time in seconds.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "TimeLimit",
          "package": "data-pprint",
          "source": "src/System-SimpleTimeout-Limits.html#TimeLimit",
          "type": "type"
        },
        "index": {
          "description": "Time limit is Double which is the allowed time in seconds",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "TimeLimit",
          "package": "data-pprint",
          "partial": "Time Limit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#t:TimeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck budget and take another action if there is no more resource.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "checkBudget",
          "package": "data-pprint",
          "signature": "Budget-\u003e Int-\u003e (Double -\u003e IO a)-\u003e IO a-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Check budget and take another action if there is no more resource",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "checkBudget",
          "normalized": "Budget-\u003eInt-\u003e(Double-\u003eIO a)-\u003eIO a-\u003eIO a-\u003eIO a",
          "package": "data-pprint",
          "partial": "Budget",
          "signature": "Budget-\u003eInt-\u003e(Double-\u003eIO a)-\u003eIO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#v:checkBudget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement free size in a budget.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "decSizeBudget",
          "package": "data-pprint",
          "signature": "Budget-\u003e (SizeLimit -\u003e (SizeLimit, a))-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Decrement free size in budget",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "decSizeBudget",
          "normalized": "Budget-\u003e(SizeLimit-\u003e(SizeLimit,a))-\u003eIO a",
          "package": "data-pprint",
          "partial": "Size Budget",
          "signature": "Budget-\u003e(SizeLimit-\u003e(SizeLimit,a))-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#v:decSizeBudget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new budget.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout.Limits",
          "name": "newBudget",
          "package": "data-pprint",
          "signature": "TimeLimit -\u003e SizeLimit -\u003e IO Budget",
          "source": "src/System-SimpleTimeout-Limits.html#newBudget",
          "type": "function"
        },
        "index": {
          "description": "Create new budget",
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "newBudget",
          "normalized": "TimeLimit-\u003eSizeLimit-\u003eIO Budget",
          "package": "data-pprint",
          "partial": "Budget",
          "signature": "TimeLimit-\u003eSizeLimit-\u003eIO Budget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#v:newBudget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.SimpleTimeout.Limits",
          "name": "showTimeout",
          "package": "data-pprint",
          "signature": "Double -\u003e String",
          "source": "src/System-SimpleTimeout-Limits.html#showTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System SimpleTimeout Limits",
          "module": "System.SimpleTimeout.Limits",
          "name": "showTimeout",
          "normalized": "Double-\u003eString",
          "package": "data-pprint",
          "partial": "Timeout",
          "signature": "Double-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout-Limits.html#v:showTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntended for internal use: Simple timeout mechanism\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.SimpleTimeout",
          "name": "SimpleTimeout",
          "package": "data-pprint",
          "source": "src/System-SimpleTimeout.html",
          "type": "module"
        },
        "index": {
          "description": "Intended for internal use Simple timeout mechanism",
          "hierarchy": "System SimpleTimeout",
          "module": "System.SimpleTimeout",
          "name": "SimpleTimeout",
          "package": "data-pprint",
          "partial": "Simple Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data structure used by \u003ccode\u003e\u003ca\u003eTimeoutHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout",
          "name": "TimeoutHandle",
          "package": "data-pprint",
          "source": "src/System-SimpleTimeout.html#TimeoutHandle",
          "type": "data"
        },
        "index": {
          "description": "Abstract data structure used by TimeoutHandle and timeout",
          "hierarchy": "System SimpleTimeout",
          "module": "System.SimpleTimeout",
          "name": "TimeoutHandle",
          "package": "data-pprint",
          "partial": "Timeout Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout.html#t:TimeoutHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop an operation at a time given by \u003ccode\u003e\u003ca\u003etimeoutHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eDouble\u003c/code\u003e parameter is a percent between 0 and 1.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0: \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e was called right after the \u003ccode\u003e\u003ca\u003eTimeoutHandle\u003c/a\u003e\u003c/code\u003e was created.\n\u003c/li\u003e\u003cli\u003e 1: \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e was called after the time of the timeout.\n\u003c/li\u003e\u003cli\u003e near to 1: \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e was called right before the time of the timeout.\n\u003c/li\u003e\u003cli\u003e Other values: proportional to the time spend by the operation.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.SimpleTimeout",
          "name": "timeout",
          "package": "data-pprint",
          "signature": "TimeoutHandle-\u003e (Double -\u003e IO a)-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Stop an operation at time given by timeoutHandle The Double parameter is percent between and timeout was called right after the TimeoutHandle was created timeout was called after the time of the timeout near to timeout was called right before the time of the timeout Other values proportional to the time spend by the operation",
          "hierarchy": "System SimpleTimeout",
          "module": "System.SimpleTimeout",
          "name": "timeout",
          "normalized": "TimeoutHandle-\u003e(Double-\u003eIO a)-\u003eIO a-\u003eIO a",
          "package": "data-pprint",
          "signature": "TimeoutHandle-\u003e(Double-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eTimeoutHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eDouble\u003c/code\u003e parameter is the time limit in seconds.\n All operations behind \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e will be stopped \n at the current time plus the time limit.\n\u003c/p\u003e",
          "module": "System.SimpleTimeout",
          "name": "timeoutHandle",
          "package": "data-pprint",
          "signature": "Double -\u003e IO TimeoutHandle",
          "source": "src/System-SimpleTimeout.html#timeoutHandle",
          "type": "function"
        },
        "index": {
          "description": "Creates TimeoutHandle The Double parameter is the time limit in seconds All operations behind timeout will be stopped at the current time plus the time limit",
          "hierarchy": "System SimpleTimeout",
          "module": "System.SimpleTimeout",
          "name": "timeoutHandle",
          "normalized": "Double-\u003eIO TimeoutHandle",
          "package": "data-pprint",
          "partial": "Handle",
          "signature": "Double-\u003eIO TimeoutHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-pprint/docs/System-SimpleTimeout.html#v:timeoutHandle"
      }
    }
  ]
]