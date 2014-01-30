[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn Chapter 2 of \"JavaScript: The Good Parts\", Douglas Crockford presents a\n concrete grammar for \"the good parts\" of JavaScript.\n\u003c/p\u003e\u003cp\u003eThis module provides an abstract grammar for those good parts. Henceforth, we abbreviate this\n language to JS:TGP\n\u003c/p\u003e\u003cp\u003eCrockford presents the grammar as a series of railroad diagrams.\n The correspondence between the concrete grammar and the abstract grammar\n in this module is NOT one-to-one. However, the following property does hold: the\n pretty printing of an abstract syntax tree will be parseable by the concrete grammar. i.e.\n For each valid program produced by the concrete grammar there is a corresponding\n abstract syntax tree that when pretty printed will produce that program (modulo whitespace).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe abstract grammar\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e removes unnecessary characters such as parentheses (normal, curly and square)\n\u003c/li\u003e\u003cli\u003e represents JavaScript's string, name and number literals directly in Haskell as\n     \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eConventions for concrete syntax\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  Non-terminals appear in angle brackets e.g. \u003cName\u003e\n\u003c/li\u003e\u003cli\u003e  ? means zero or one. e.g. \u003cExpr\u003e?\n\u003c/li\u003e\u003cli\u003e  * means zero or more e.g. \u003cStmt\u003e*\n\u003c/li\u003e\u003cli\u003e  + means one  or more e.g. \u003cStmt\u003e+\n\u003c/li\u003e\u003cli\u003e  ( ) are meta-brackets used to enclose a concrete-syntax expression so that ?,* or +\n     can be applied. e.g. (= \u003cExpr\u003e)*\n     This means zero or more repetitions of: = \u003cExpr\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis library was designed so that it would be impossible, save for name, string literals\n to construct an incorrect JS:TGP program. To this end some of the data structures may look like\n they contain redundancy. For instance, consider the \u003ccode\u003e\u003ca\u003eESDelete\u003c/a\u003e\u003c/code\u003e constructor which is defined\n\u003c/p\u003e\u003cpre\u003eESDelete Expr Invocation\u003c/pre\u003e\u003cp\u003eWhy not just define it as \u003ccode\u003eESDelete Expr\u003c/code\u003e since type \u003ccode\u003eExpr\u003c/code\u003e\n has a constructor defined as \u003ccode\u003eExprInvocation Expr Invocation\u003c/code\u003e?\n The reason is that this would allow incorrect programs. A \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e is\n not necessarily a \u003ccode\u003e\u003ca\u003eInvocation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eA note on precedence of JavaScript operators\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eInterestingly, the precedence of JavaScript operators is\n not defined in the ECMAScript standard. The precedence used in this library comes from\n the Mozilla Developer's Network pages.\n (https:\u003cem/\u003edeveloper.mozilla.org\u003cem\u003een\u003c/em\u003eJavaScript\u003cem\u003eReference\u003c/em\u003eOperators/Operator_Precedence)\n\u003c/p\u003e\u003cp\u003eI have not used the precise precedence numbers from that page since in this module\n a lower precedence means the operator binds more tightly (as opposed to the page where\n a higher precedence does the same). Also, we have need for less precedence values so they\n have been normalised to what we are using in JS:TGP\n\u003c/p\u003e\u003cp\u003eYou will also note that we don't even consider the associativity/precedence of\n \"=\", \"+=\", \"-=\" etc. In JS:TGP the notion of expression statements is quite different\n to that of expressions. It simply isn't legal to write an expression statement like\n\u003c/p\u003e\u003cpre\u003e(a += 2) -= 3\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003ea = (b = c) = (c = d)\u003c/pre\u003e\u003cp\u003ealthough it is perfectly legal to write\n\u003c/p\u003e\u003cpre\u003ea = b = c = d += 2\u003c/pre\u003e\u003cp\u003ewhich if we add brackets to disambiguate is really\n\u003c/p\u003e\u003cpre\u003ea = (b = (c = (d += 2)))\u003c/pre\u003e\u003cp\u003eInteresting aspects of \"the good parts\":\n\u003c/p\u003e\u003cp\u003eA JS:TGP program is a collection of statements. You'll note that there is no\n statement to declare a function in JS:TGP. However you can assign a function literal\n to a variable.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cpre\u003evar fun = function(x) { return x + 1;}\u003c/pre\u003e\u003cp\u003eWhat about recursive functions then? There is the option to give the function a name which is\n local to the literal.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cpre\u003evar factorial = function f(n) {\n                    if ( n \u003e 0 ) {\n                      return n * f(n - 1);\n                    } else {\n                      return 1;\n                    }\n                  }\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ef\u003c/code\u003e is local. It will not be in scope outside of the function body.\n\u003c/p\u003e\u003cp\u003eAbbreviations:\n\u003c/p\u003e\u003cpre\u003e Stmt = Statement, Expr = Expression, Fn = Function, Decl = Declaration\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "module",
        "fct-source": "src/Language-JavaScript-AST.html",
        "fct-type": "module",
        "title": "AST"
      },
      "index": {
        "description": "In Chapter of JavaScript The Good Parts Douglas Crockford presents concrete grammar for the good parts of JavaScript This module provides an abstract grammar for those good parts Henceforth we abbreviate this language to JS TGP Crockford presents the grammar as series of railroad diagrams The correspondence between the concrete grammar and the abstract grammar in this module is NOT one-to-one However the following property does hold the pretty printing of an abstract syntax tree will be parseable by the concrete grammar i.e For each valid program produced by the concrete grammar there is corresponding abstract syntax tree that when pretty printed will produce that program modulo whitespace The abstract grammar removes unnecessary characters such as parentheses normal curly and square represents JavaScript string name and number literals directly in Haskell as String String and Double respectively Conventions for concrete syntax Non-terminals appear in angle brackets e.g Name means zero or one e.g Expr means zero or more e.g Stmt means one or more e.g Stmt are meta-brackets used to enclose concrete-syntax expression so that or can be applied e.g Expr This means zero or more repetitions of Expr This library was designed so that it would be impossible save for name string literals to construct an incorrect JS TGP program To this end some of the data structures may look like they contain redundancy For instance consider the ESDelete constructor which is defined ESDelete Expr Invocation Why not just define it as ESDelete Expr since type Expr has constructor defined as ExprInvocation Expr Invocation The reason is that this would allow incorrect programs Expr is not necessarily Invocation note on precedence of JavaScript operators Interestingly the precedence of JavaScript operators is not defined in the ECMAScript standard The precedence used in this library comes from the Mozilla Developer Network pages https developer.mozilla.org en JavaScript Reference Operators Operator Precedence have not used the precise precedence numbers from that page since in this module lower precedence means the operator binds more tightly as opposed to the page where higher precedence does the same Also we have need for less precedence values so they have been normalised to what we are using in JS TGP You will also note that we don even consider the associativity precedence of etc In JS TGP the notion of expression statements is quite different to that of expressions It simply isn legal to write an expression statement like or although it is perfectly legal to write which if we add brackets to disambiguate is really Interesting aspects of the good parts JS TGP program is collection of statements You ll note that there is no statement to declare function in JS TGP However you can assign function literal to variable e.g var fun function return What about recursive functions then There is the option to give the function name which is local to the literal e.g var factorial function if return else return is local It will not be in scope outside of the function body Abbreviations Stmt Statement Expr Expression Fn Function Decl Declaration",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "AST",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ArrayLit",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[]\u003c/code\u003e -- empty array\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003cExpr\u003e (, \u003cExpr\u003e*) ]\u003c/code\u003e -- non empty array\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ArrayLit",
        "fct-type": "data",
        "title": "ArrayLit"
      },
      "index": {
        "description": "Concrete syntax empty array or Expr Expr non empty array",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ArrayLit",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Array Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:BreakStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ebreak \u003cName\u003e?;\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ebreak;\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ebreak some_label;\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#BreakStmt",
        "fct-type": "data",
        "title": "BreakStmt"
      },
      "index": {
        "description": "Concrete syntax break Name e.g break break some label",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "BreakStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Break Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:CaseAndDisruptive",
      "description": {
        "fct-descr": "\u003cp\u003eA case clause followed by a disruptive statement\n\u003c/p\u003e\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cCaseClause\u003e \u003cDisruptiveStmt\u003e\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n \u003ccode\u003e\n case 2:\n   y = 2;\n   break;\n \u003c/code\u003e\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#CaseAndDisruptive",
        "fct-type": "data",
        "title": "CaseAndDisruptive"
      },
      "index": {
        "description": "case clause followed by disruptive statement Concrete syntax CaseClause DisruptiveStmt e.g case break",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "CaseAndDisruptive",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Case And Disruptive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:CaseClause",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ecase \u003cExpr\u003e : \u003cStmt\u003e*\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003ecase 2:   // zero statements following the case expression is valid.\u003c/pre\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n case 2:\n   y = 1;\n\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#CaseClause",
        "fct-type": "data",
        "title": "CaseClause"
      },
      "index": {
        "description": "Concrete syntax case Expr Stmt e.g case zero statements following the case expression is valid case",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "CaseClause",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Case Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:DisruptiveStmt",
      "description": {
        "fct-descr": "\u003cp\u003eDisruptive statements\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
        "fct-type": "data",
        "title": "DisruptiveStmt"
      },
      "index": {
        "description": "Disruptive statements",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "DisruptiveStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Disruptive Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:DoStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003edo { \u003cStmt\u003e* } while ( \u003cExpr\u003e );\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#DoStmt",
        "fct-type": "data",
        "title": "DoStmt"
      },
      "index": {
        "description": "Concrete syntax do Stmt while Expr",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "DoStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Do Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Expr",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Expr",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ExprStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cValue\u003e+ \u003cRValue\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003edelete \u003cExpr\u003e \u003cRefinement\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ExprStmt",
        "fct-type": "data",
        "title": "ExprStmt"
      },
      "index": {
        "description": "Concrete syntax Value RValue or delete Expr Refinement",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:FnBody",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e{ \u003cVarStmt\u003e+ \u003cStmt\u003e+ }\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#FnBody",
        "fct-type": "data",
        "title": "FnBody"
      },
      "index": {
        "description": "Concrete syntax VarStmt Stmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "FnBody",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Fn Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:FnLit",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003efunction \u003cName\u003e? \u003cFnBody\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#FnLit",
        "fct-type": "data",
        "title": "FnLit"
      },
      "index": {
        "description": "Concrete syntax function Name FnBody",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "FnLit",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Fn Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ForStmt",
      "description": {
        "fct-descr": "\u003cp\u003eTwo style of for-statements -- C-style and In-style.\n\u003c/p\u003e\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n for (\u003cExprStmt\u003e? ; \u003cExpr\u003e? ; \u003cExprStmt\u003e? ) {\n   \u003cStmt\u003e*\n }\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n for ( \u003cName\u003e in \u003cExpr\u003e ) {\n   \u003cStmt\u003e*\n }\n\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003efor ( ; ; ) { }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efor ( ; x \u003c 10 ;) { x += 1; }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n for (i = 0; i \u003c 10; i += 1) {\n   x += i;\n }\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003efor ( i in indices ) { a[i] = 66; }\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ForStmt",
        "fct-type": "data",
        "title": "ForStmt"
      },
      "index": {
        "description": "Two style of for-statements C-style and In-style Concrete syntax for ExprStmt Expr ExprStmt Stmt for Name in Expr Stmt e.g for for for for in indices",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ForStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "For Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:IfStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eif ( \u003cExpr\u003e ) { \u003cStmt\u003e* }\u003c/code\u003e                        -- for \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eif ( \u003cExpr\u003e ) { \u003cStmt\u003e* } else { \u003cStmt\u003e* }\u003c/code\u003e -- for 'Just . Left'\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eif ( \u003cExpr\u003e ) { \u003cStmt\u003e* } else \u003cIfStmt\u003e\u003c/code\u003e    -- for 'Just . Right'\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003eif (x \u003e 3) { y = 2; }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eif (x \u003c 2) { y = 1; } else { y = 3; z = 2; }\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eif (x \u003e 0) { y = 20; } else if ( x \u003e 10) { y = 30; } else { y = 10; }\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#IfStmt",
        "fct-type": "data",
        "title": "IfStmt"
      },
      "index": {
        "description": "Concrete syntax if Expr Stmt for Nothing or if Expr Stmt else Stmt for Just Left or if Expr Stmt else IfStmt for Just Right e.g if if else if else if else",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "IfStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "If Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:InfixOperator",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "data",
        "title": "InfixOperator"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "InfixOperator",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Infix Operator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Invocation",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cExpr\u003e*\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e()\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(1)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(x,z,y)\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Invocation",
        "fct-type": "data",
        "title": "Invocation"
      },
      "index": {
        "description": "Concrete syntax Expr e.g",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Invocation",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Invocation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:JSString",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#JSString",
        "fct-type": "data",
        "title": "JSString"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "JSString",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "JSString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:LValue",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e\u003cName\u003e (\u003cInvocation\u003e* \u003cRefinement\u003e)*\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ex\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex.field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efun().field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efun(1)(2)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efun(1)(2).field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex.fun_field_1(x+2).fun_field_2(y+3).field_3\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#LValue",
        "fct-type": "data",
        "title": "LValue"
      },
      "index": {
        "description": "Concrete syntax Name Invocation Refinement e.g x.field fun field fun fun field x.fun field fun field field",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LValue",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "LValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Lit",
      "description": {
        "fct-descr": "\u003cp\u003eInterestingly, the syntax diagrams presented in the book don't include\n   boolean literals. I can only assume this is an oversight as they\n   are used throughout the book.\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "data",
        "title": "Lit"
      },
      "index": {
        "description": "Interestingly the syntax diagrams presented in the book don include boolean literals can only assume this is an oversight as they are used throughout the book",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Lit",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Name",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Name",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Number",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "newtype",
        "fct-source": "src/Language-JavaScript-AST.html#Number",
        "fct-type": "newtype",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Number",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ObjectField",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003cName\u003e: \u003cExpr\u003e        \u003c/code\u003e -- for Left\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003cString\u003e: \u003cExpr\u003e      \u003c/code\u003e -- for Right\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ex: y + 3\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\"value\": 3 - z\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ObjectField",
        "fct-type": "data",
        "title": "ObjectField"
      },
      "index": {
        "description": "Concrete syntax Name Expr for Left or String Expr for Right e.g value",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ObjectField",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Object Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ObjectLit",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e{}\u003c/code\u003e                                               -- no  fields\n\u003c/p\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e{\u003cObjectField\u003e (, \u003cObjectField\u003e )*}\u003c/code\u003e    -- one or more fields\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ObjectLit",
        "fct-type": "data",
        "title": "ObjectLit"
      },
      "index": {
        "description": "Concrete syntax no fields or ObjectField ObjectField one or more fields",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ObjectLit",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Object Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:PrefixOperator",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#PrefixOperator",
        "fct-type": "data",
        "title": "PrefixOperator"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "PrefixOperator",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Prefix Operator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003ePrograms. All variable statements come first.\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Program",
        "fct-type": "data",
        "title": "Program"
      },
      "index": {
        "description": "Programs All variable statements come first",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Program",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:RValue",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e=  \u003cExpr\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e+= \u003cExpr\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e-= \u003cExpr\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e\u003cInvocation\u003e+\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e= 2\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e+= 3\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e-= (4 + y)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e()\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(1)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e(x,y,z)\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#RValue",
        "fct-type": "data",
        "title": "RValue"
      },
      "index": {
        "description": "Concrete syntax Expr or Expr or Expr or Invocation e.g",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "RValue",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "RValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Refinement",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003e.\u003cName\u003e\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e[\u003cExpr\u003e]\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e.field_1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e[i+1]\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Refinement",
        "fct-type": "data",
        "title": "Refinement"
      },
      "index": {
        "description": "Concrete syntax Name or Expr e.g field",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Refinement",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Refinement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ReturnStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ereturn \u003cExpr\u003e?;\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ereturn;\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ereturn 2 + x;\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ReturnStmt",
        "fct-type": "data",
        "title": "ReturnStmt"
      },
      "index": {
        "description": "Concrete syntax return Expr e.g return return",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ReturnStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Return Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:Stmt",
      "description": {
        "fct-descr": "\u003cp\u003eThe many different kinds of statements\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "data",
        "title": "Stmt"
      },
      "index": {
        "description": "The many different kinds of statements",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Stmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:SwitchStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003eswitch ( \u003cExpr\u003e ) { \u003cCaseClause\u003e }\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e\n switch ( \u003cExpr\u003e ) {\n  \u003cCaseAndDisruptive\u003e+\n  default : \u003cStmt\u003e*\n }\n\u003c/pre\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n switch ( x ) {\n   case 1:\n     y = 2;\n   }\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e\n switch ( x ) {\n   case 1:\n     y = 2;\n     break;\n   case 2:\n     y = 3;\n     break;\n   default:\n     y = 4;\n }\n\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#SwitchStmt",
        "fct-type": "data",
        "title": "SwitchStmt"
      },
      "index": {
        "description": "Concrete syntax switch Expr CaseClause or switch Expr CaseAndDisruptive default Stmt e.g switch case switch case break case break default",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "SwitchStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Switch Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:ThrowStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ethrow \u003cExpr\u003e;\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#ThrowStmt",
        "fct-type": "data",
        "title": "ThrowStmt"
      },
      "index": {
        "description": "Concrete syntax throw Expr",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ThrowStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Throw Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:TryStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003etry { \u003cStmt\u003e* } catch ( \u003cName\u003e ) { \u003cStmt\u003e* }\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#TryStmt",
        "fct-type": "data",
        "title": "TryStmt"
      },
      "index": {
        "description": "Concrete syntax try Stmt catch Name Stmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "TryStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Try Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:VarDecl",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003e\u003cName\u003e (= \u003cExpr\u003e)?\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003ex\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex = 2 + y\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#VarDecl",
        "fct-type": "data",
        "title": "VarDecl"
      },
      "index": {
        "description": "Concrete syntax Name Expr e.g",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "VarDecl",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Var Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:VarStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003evar \u003cVarDecl\u003e [, \u003cVarDecl\u003e]* ;\u003c/pre\u003e\u003cp\u003ee.g. \u003ccode\u003evar x = 1, y;\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#VarStmt",
        "fct-type": "data",
        "title": "VarStmt"
      },
      "index": {
        "description": "Concrete syntax var VarDecl VarDecl e.g var",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "VarStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Var Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#t:WhileStmt",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax:\n\u003c/p\u003e\u003cpre\u003ewhile ( \u003cExpr\u003e) { \u003cStmt\u003e* }\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-AST.html#WhileStmt",
        "fct-type": "data",
        "title": "WhileStmt"
      },
      "index": {
        "description": "Concrete syntax while Expr Stmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "WhileStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "While Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Add",
      "description": {
        "fct-descr": "\u003cpre\u003e+\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Add",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Add"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Add",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:And",
      "description": {
        "fct-descr": "\u003cpre\u003e&&\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "And",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "And",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ArrayLit",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ArrayLit [Expr]",
        "fct-source": "src/Language-JavaScript-AST.html#ArrayLit",
        "fct-type": "function",
        "title": "ArrayLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ArrayLit",
        "normalized": "ArrayLit[Expr]",
        "package": "js-good-parts",
        "partial": "Array Lit",
        "signature": "ArrayLit[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:BreakStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "BreakStmt (Maybe Name)",
        "fct-source": "src/Language-JavaScript-AST.html#BreakStmt",
        "fct-type": "function",
        "title": "BreakStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "BreakStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Break Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:CaseAndDisruptive",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "CaseAndDisruptive CaseClause DisruptiveStmt",
        "fct-source": "src/Language-JavaScript-AST.html#CaseAndDisruptive",
        "fct-type": "function",
        "title": "CaseAndDisruptive"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "CaseAndDisruptive",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Case And Disruptive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:CaseClause",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "CaseClause Expr [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#CaseClause",
        "fct-type": "function",
        "title": "CaseClause"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "CaseClause",
        "normalized": "CaseClause Expr[Stmt]",
        "package": "js-good-parts",
        "partial": "Case Clause",
        "signature": "CaseClause Expr[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DSBreak",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cBreakStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "DSBreak BreakStmt",
        "fct-source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
        "fct-type": "function",
        "title": "DSBreak"
      },
      "index": {
        "description": "BreakStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "DSBreak",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "DSBreak",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DSReturn",
      "description": {
        "fct-descr": "\u003cpre\u003esyntax: \u003cReturnStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "DSReturn ReturnStmt",
        "fct-source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
        "fct-type": "function",
        "title": "DSReturn"
      },
      "index": {
        "description": "syntax ReturnStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "DSReturn",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "DSReturn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DSThrow",
      "description": {
        "fct-descr": "\u003cpre\u003esyntax: \u003cThrowStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "DSThrow ThrowStmt",
        "fct-source": "src/Language-JavaScript-AST.html#DisruptiveStmt",
        "fct-type": "function",
        "title": "DSThrow"
      },
      "index": {
        "description": "syntax ThrowStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "DSThrow",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "DSThrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Div",
      "description": {
        "fct-descr": "\u003cpre\u003e/\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Div",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Div"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Div",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:DoStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "DoStmt [Stmt] Expr",
        "fct-source": "src/Language-JavaScript-AST.html#DoStmt",
        "fct-type": "function",
        "title": "DoStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "DoStmt",
        "normalized": "DoStmt[Stmt]Expr",
        "package": "js-good-parts",
        "partial": "Do Stmt",
        "signature": "DoStmt[Stmt]Expr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ESApply",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ESApply (NonEmptyList LValue) RValue",
        "fct-source": "src/Language-JavaScript-AST.html#ExprStmt",
        "fct-type": "function",
        "title": "ESApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ESApply",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "ESApply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ESDelete",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ESDelete Expr Refinement",
        "fct-source": "src/Language-JavaScript-AST.html#ExprStmt",
        "fct-type": "function",
        "title": "ESDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ESDelete",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "ESDelete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Eq",
      "description": {
        "fct-descr": "\u003cpre\u003e===\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Eq",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Eq",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprDelete",
      "description": {
        "fct-descr": "\u003cp\u003edelete \u003ccode\u003e\u003cExpr\u003e\u003cRefinement\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprDelete Expr Refinement",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprDelete"
      },
      "index": {
        "description": "delete Expr Refinement",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprDelete",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprInfix",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cExpr\u003e \u003cInfixOperator\u003e \u003cExpr\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprInfix InfixOperator Expr Expr",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprInfix"
      },
      "index": {
        "description": "Expr InfixOperator Expr",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprInfix",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Infix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprInvocation",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cExpr\u003e\u003cInvocation\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprInvocation Expr Invocation",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprInvocation"
      },
      "index": {
        "description": "Expr Invocation",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprInvocation",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Invocation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprLit",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cLit\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprLit Lit",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprLit"
      },
      "index": {
        "description": "Lit",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprLit",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprName",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cName\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprName Name",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprName"
      },
      "index": {
        "description": "Name",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprName",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprNew",
      "description": {
        "fct-descr": "\u003cp\u003enew \u003ccode\u003e\u003cExpr\u003e\u003cInvocation\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprNew Expr Invocation",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprNew"
      },
      "index": {
        "description": "new Expr Invocation",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprNew",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprPrefix",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cPrefixOperator\u003e \u003cExpr\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprPrefix PrefixOperator Expr",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprPrefix"
      },
      "index": {
        "description": "PrefixOperator Expr",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprPrefix",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprRefinement",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cExpr\u003e\u003cRefinement\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprRefinement Expr Refinement",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprRefinement"
      },
      "index": {
        "description": "Expr Refinement",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprRefinement",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Refinement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ExprTernary",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cExpr\u003e ? \u003cExpr\u003e : \u003cExpr\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ExprTernary Expr Expr Expr",
        "fct-source": "src/Language-JavaScript-AST.html#Expr",
        "fct-type": "function",
        "title": "ExprTernary"
      },
      "index": {
        "description": "Expr Expr Expr",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ExprTernary",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Expr Ternary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:FnBody",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "FnBody [VarStmt] [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#FnBody",
        "fct-type": "function",
        "title": "FnBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "FnBody",
        "normalized": "FnBody[VarStmt][Stmt]",
        "package": "js-good-parts",
        "partial": "Fn Body",
        "signature": "FnBody[VarStmt][Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:FnLit",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "FnLit (Maybe Name) [Name] FnBody",
        "fct-source": "src/Language-JavaScript-AST.html#FnLit",
        "fct-type": "function",
        "title": "FnLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "FnLit",
        "normalized": "FnLit(Maybe Name)[Name]FnBody",
        "package": "js-good-parts",
        "partial": "Fn Lit",
        "signature": "FnLit(Maybe Name)[Name]FnBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ForStmtCStyle",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ForStmtCStyle (Maybe ExprStmt) (Maybe Expr) (Maybe ExprStmt) [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#ForStmt",
        "fct-type": "function",
        "title": "ForStmtCStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ForStmtCStyle",
        "normalized": "ForStmtCStyle(Maybe ExprStmt)(Maybe Expr)(Maybe ExprStmt)[Stmt]",
        "package": "js-good-parts",
        "partial": "For Stmt CStyle",
        "signature": "ForStmtCStyle(Maybe ExprStmt)(Maybe Expr)(Maybe ExprStmt)[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ForStmtInStyle",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ForStmtInStyle Name Expr [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#ForStmt",
        "fct-type": "function",
        "title": "ForStmtInStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ForStmtInStyle",
        "normalized": "ForStmtInStyle Name Expr[Stmt]",
        "package": "js-good-parts",
        "partial": "For Stmt In Style",
        "signature": "ForStmtInStyle Name Expr[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:GT",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "GT",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "GT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "GT",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "GT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:GTE",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e=\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "GTE",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "GTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "GTE",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "GTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:IfStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "IfStmt Expr [Stmt] (Maybe (Either [Stmt] IfStmt))",
        "fct-source": "src/Language-JavaScript-AST.html#IfStmt",
        "fct-type": "function",
        "title": "IfStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "IfStmt",
        "normalized": "IfStmt Expr[Stmt](Maybe(Either[Stmt]IfStmt))",
        "package": "js-good-parts",
        "partial": "If Stmt",
        "signature": "IfStmt Expr[Stmt](Maybe(Either[Stmt]IfStmt))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Invocation",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Invocation [Expr]",
        "fct-source": "src/Language-JavaScript-AST.html#Invocation",
        "fct-type": "function",
        "title": "Invocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Invocation",
        "normalized": "Invocation[Expr]",
        "package": "js-good-parts",
        "partial": "Invocation",
        "signature": "Invocation[Expr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LT",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003c\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LT",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "LT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LT",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "LT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LTE",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003c=\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LTE",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "LTE"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LTE",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "LTE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LValue",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LValue Name [([Invocation], Refinement)]",
        "fct-source": "src/Language-JavaScript-AST.html#LValue",
        "fct-type": "function",
        "title": "LValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LValue",
        "normalized": "LValue Name[([Invocation],Refinement)]",
        "package": "js-good-parts",
        "partial": "LValue",
        "signature": "LValue Name[([Invocation],Refinement)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitArray",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cArrayLit\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LitArray ArrayLit",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "function",
        "title": "LitArray"
      },
      "index": {
        "description": "ArrayLit",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LitArray",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitBool",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ctrue | false\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LitBool Bool",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "function",
        "title": "LitBool"
      },
      "index": {
        "description": "true false",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LitBool",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitFn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003cFnLit\u003e\u003c/code\u003e\n  | LitRegexp   RegexpLit -- TODO: Add regexps\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LitFn FnLit",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "function",
        "title": "LitFn"
      },
      "index": {
        "description": "FnLit LitRegexp RegexpLit TODO Add regexps",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LitFn",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit Fn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitNumber",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cNumber\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LitNumber Number",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "function",
        "title": "LitNumber"
      },
      "index": {
        "description": "Number",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LitNumber",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitObject",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cObjectLit\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LitObject ObjectLit",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "function",
        "title": "LitObject"
      },
      "index": {
        "description": "ObjectLit",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LitObject",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:LitString",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cString\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "LitString JSString",
        "fct-source": "src/Language-JavaScript-AST.html#Lit",
        "fct-type": "function",
        "title": "LitString"
      },
      "index": {
        "description": "String",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "LitString",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Lit String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Mod",
      "description": {
        "fct-descr": "\u003cpre\u003e%\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Mod",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Mod",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Mul",
      "description": {
        "fct-descr": "\u003cpre\u003e*\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Mul",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Mul"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Mul",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Negate",
      "description": {
        "fct-descr": "\u003cpre\u003e-\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Negate",
        "fct-source": "src/Language-JavaScript-AST.html#PrefixOperator",
        "fct-type": "function",
        "title": "Negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Negate",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Negate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Not",
      "description": {
        "fct-descr": "\u003cpre\u003e!\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Not",
        "fct-source": "src/Language-JavaScript-AST.html#PrefixOperator",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Not",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:NotEq",
      "description": {
        "fct-descr": "\u003cpre\u003e!==\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "NotEq",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "NotEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "NotEq",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Not Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Number",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Number Double",
        "fct-source": "src/Language-JavaScript-AST.html#Number",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Number",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ObjectField",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ObjectField (Either Name String) Expr",
        "fct-source": "src/Language-JavaScript-AST.html#ObjectField",
        "fct-type": "function",
        "title": "ObjectField"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ObjectField",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Object Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ObjectLit",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ObjectLit [ObjectField]",
        "fct-source": "src/Language-JavaScript-AST.html#ObjectLit",
        "fct-type": "function",
        "title": "ObjectLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ObjectLit",
        "normalized": "ObjectLit[ObjectField]",
        "package": "js-good-parts",
        "partial": "Object Lit",
        "signature": "ObjectLit[ObjectField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Or",
      "description": {
        "fct-descr": "\u003cpre\u003e||\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Or",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Or",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Program",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Program [VarStmt] [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#Program",
        "fct-type": "function",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Program",
        "normalized": "Program[VarStmt][Stmt]",
        "package": "js-good-parts",
        "partial": "Program",
        "signature": "Program[VarStmt][Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Property",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Property Name",
        "fct-source": "src/Language-JavaScript-AST.html#Refinement",
        "fct-type": "function",
        "title": "Property"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Property",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVAddAssign",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "RVAddAssign Expr",
        "fct-source": "src/Language-JavaScript-AST.html#RValue",
        "fct-type": "function",
        "title": "RVAddAssign"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "RVAddAssign",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "RVAdd Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVAssign",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "RVAssign Expr",
        "fct-source": "src/Language-JavaScript-AST.html#RValue",
        "fct-type": "function",
        "title": "RVAssign"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "RVAssign",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "RVAssign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVInvoke",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "RVInvoke (NonEmptyList Invocation)",
        "fct-source": "src/Language-JavaScript-AST.html#RValue",
        "fct-type": "function",
        "title": "RVInvoke"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "RVInvoke",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "RVInvoke",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:RVSubAssign",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "RVSubAssign Expr",
        "fct-source": "src/Language-JavaScript-AST.html#RValue",
        "fct-type": "function",
        "title": "RVSubAssign"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "RVSubAssign",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "RVSub Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ReturnStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ReturnStmt (Maybe Expr)",
        "fct-source": "src/Language-JavaScript-AST.html#ReturnStmt",
        "fct-type": "function",
        "title": "ReturnStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ReturnStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Return Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtDisruptive",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cDisruptiveStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtDisruptive DisruptiveStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtDisruptive"
      },
      "index": {
        "description": "DisruptiveStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtDisruptive",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt Disruptive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtDo",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003cName\u003e : ) \u003cDoStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtDo (Maybe Name) DoStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtDo"
      },
      "index": {
        "description": "Name DoStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtDo",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt Do",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtExpr",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cExprStmt\u003e;\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtExpr ExprStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtExpr"
      },
      "index": {
        "description": "ExprStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtExpr",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtFor",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003cName\u003e : ) \u003cForStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtFor (Maybe Name) ForStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtFor"
      },
      "index": {
        "description": "Name ForStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtFor",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtIf",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cIfStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtIf IfStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtIf"
      },
      "index": {
        "description": "IfStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtIf",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtSwitch",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003cName\u003e : ) \u003cSwitchStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtSwitch (Maybe Name) SwitchStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtSwitch"
      },
      "index": {
        "description": "Name SwitchStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtSwitch",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtTry",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003cTryStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtTry TryStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtTry"
      },
      "index": {
        "description": "TryStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtTry",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt Try",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:StmtWhile",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003cName\u003e : ) \u003cWhileStmt\u003e\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "StmtWhile (Maybe Name) WhileStmt",
        "fct-source": "src/Language-JavaScript-AST.html#Stmt",
        "fct-type": "function",
        "title": "StmtWhile"
      },
      "index": {
        "description": "Name WhileStmt",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "StmtWhile",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Stmt While",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Sub",
      "description": {
        "fct-descr": "\u003cpre\u003e-\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Sub",
        "fct-source": "src/Language-JavaScript-AST.html#InfixOperator",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Sub",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:Subscript",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Subscript Expr",
        "fct-source": "src/Language-JavaScript-AST.html#Refinement",
        "fct-type": "function",
        "title": "Subscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "Subscript",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Subscript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:SwitchStmt",
      "description": {
        "fct-descr": "\u003cp\u003edefault clause statements\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "SwitchStmt Expr (NonEmptyList CaseAndDisruptive) [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#SwitchStmt",
        "fct-type": "function",
        "title": "SwitchStmt"
      },
      "index": {
        "description": "default clause statements",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "SwitchStmt",
        "normalized": "SwitchStmt Expr(NonEmptyList CaseAndDisruptive)[Stmt]",
        "package": "js-good-parts",
        "partial": "Switch Stmt",
        "signature": "SwitchStmt Expr(NonEmptyList CaseAndDisruptive)[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:SwitchStmtSingleCase",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "SwitchStmtSingleCase Expr CaseClause",
        "fct-source": "src/Language-JavaScript-AST.html#SwitchStmt",
        "fct-type": "function",
        "title": "SwitchStmtSingleCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "SwitchStmtSingleCase",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Switch Stmt Single Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ThrowStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ThrowStmt Expr",
        "fct-source": "src/Language-JavaScript-AST.html#ThrowStmt",
        "fct-type": "function",
        "title": "ThrowStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ThrowStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Throw Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:ToNumber",
      "description": {
        "fct-descr": "\u003cpre\u003e+\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "ToNumber",
        "fct-source": "src/Language-JavaScript-AST.html#PrefixOperator",
        "fct-type": "function",
        "title": "ToNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "ToNumber",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "To Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:TryStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "TryStmt [Stmt] Name [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#TryStmt",
        "fct-type": "function",
        "title": "TryStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "TryStmt",
        "normalized": "TryStmt[Stmt]Name[Stmt]",
        "package": "js-good-parts",
        "partial": "Try Stmt",
        "signature": "TryStmt[Stmt]Name[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:TypeOf",
      "description": {
        "fct-descr": "\u003cpre\u003etypeof\u003c/pre\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "TypeOf",
        "fct-source": "src/Language-JavaScript-AST.html#PrefixOperator",
        "fct-type": "function",
        "title": "TypeOf"
      },
      "index": {
        "description": "typeof",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "TypeOf",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Type Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:VarDecl",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "VarDecl Name (Maybe Expr)",
        "fct-source": "src/Language-JavaScript-AST.html#VarDecl",
        "fct-type": "function",
        "title": "VarDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "VarDecl",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Var Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:VarStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "VarStmt (NonEmptyList VarDecl)",
        "fct-source": "src/Language-JavaScript-AST.html#VarStmt",
        "fct-type": "function",
        "title": "VarStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "VarStmt",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Var Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:WhileStmt",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "WhileStmt Expr [Stmt]",
        "fct-source": "src/Language-JavaScript-AST.html#WhileStmt",
        "fct-type": "function",
        "title": "WhileStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "WhileStmt",
        "normalized": "WhileStmt Expr[Stmt]",
        "package": "js-good-parts",
        "partial": "While Stmt",
        "signature": "WhileStmt Expr[Stmt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:jsString",
      "description": {
        "fct-descr": "\u003cp\u003eThe only way you can create a Javascript string.\n   This function needs to correctly encode all special characters.\n   See p9 of \"JavaScript: The Good Parts\"\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "String -\u003e Either String JSString",
        "fct-source": "src/Language-JavaScript-AST.html#jsString",
        "fct-type": "function",
        "title": "jsString"
      },
      "index": {
        "description": "The only way you can create Javascript string This function needs to correctly encode all special characters See p9 of JavaScript The Good Parts",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "jsString",
        "normalized": "String-\u003eEither String JSString",
        "package": "js-good-parts",
        "partial": "String",
        "signature": "String-\u003eEither String JSString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ejsName\u003c/code\u003e is the only way you can create a Name\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "String -\u003e Either String Name",
        "fct-source": "src/Language-JavaScript-AST.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "jsName is the only way you can create Name",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "name",
        "normalized": "String-\u003eEither String Name",
        "package": "js-good-parts",
        "partial": "",
        "signature": "String-\u003eEither String Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:unName",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "Name -\u003e String",
        "fct-source": "src/Language-JavaScript-AST.html#unName",
        "fct-type": "function",
        "title": "unName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "unName",
        "normalized": "Name-\u003eString",
        "package": "js-good-parts",
        "partial": "Name",
        "signature": "Name-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-AST.html#v:unString",
      "description": {
        "fct-module": "Language.JavaScript.AST",
        "fct-package": "js-good-parts",
        "fct-signature": "JSString -\u003e String",
        "fct-source": "src/Language-JavaScript-AST.html#unString",
        "fct-type": "function",
        "title": "unString"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript AST",
        "module": "Language.JavaScript.AST",
        "name": "unString",
        "normalized": "JSString-\u003eString",
        "package": "js-good-parts",
        "partial": "String",
        "signature": "JSString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#",
      "description": {
        "fct-module": "Language.JavaScript.NonEmptyList",
        "fct-package": "js-good-parts",
        "fct-signature": "module",
        "fct-source": "src/Language-JavaScript-NonEmptyList.html",
        "fct-type": "module",
        "title": "NonEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript NonEmptyList",
        "module": "Language.JavaScript.NonEmptyList",
        "name": "NonEmptyList",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Non Empty List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#t:NonEmptyList",
      "description": {
        "fct-module": "Language.JavaScript.NonEmptyList",
        "fct-package": "js-good-parts",
        "fct-signature": "data",
        "fct-source": "src/Language-JavaScript-NonEmptyList.html#NonEmptyList",
        "fct-type": "data",
        "title": "NonEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript NonEmptyList",
        "module": "Language.JavaScript.NonEmptyList",
        "name": "NonEmptyList",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Non Empty List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#v:-60-:-62-",
      "description": {
        "fct-module": "Language.JavaScript.NonEmptyList",
        "fct-package": "js-good-parts",
        "fct-signature": "a -\u003e NonEmptyList a -\u003e NonEmptyList a",
        "fct-source": "src/Language-JavaScript-NonEmptyList.html#%3C%3A%3E",
        "fct-type": "function",
        "title": "(\u003c:\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript NonEmptyList",
        "module": "Language.JavaScript.NonEmptyList",
        "name": "(\u003c:\u003e) \u003c:\u003e",
        "normalized": "a-\u003eNonEmptyList a-\u003eNonEmptyList a",
        "package": "js-good-parts",
        "partial": "",
        "signature": "a-\u003eNonEmptyList a-\u003eNonEmptyList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#v:singleton",
      "description": {
        "fct-module": "Language.JavaScript.NonEmptyList",
        "fct-package": "js-good-parts",
        "fct-signature": "a -\u003e NonEmptyList a",
        "fct-source": "src/Language-JavaScript-NonEmptyList.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript NonEmptyList",
        "module": "Language.JavaScript.NonEmptyList",
        "name": "singleton",
        "normalized": "a-\u003eNonEmptyList a",
        "package": "js-good-parts",
        "partial": "",
        "signature": "a-\u003eNonEmptyList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-NonEmptyList.html#v:toList",
      "description": {
        "fct-module": "Language.JavaScript.NonEmptyList",
        "fct-package": "js-good-parts",
        "fct-signature": "NonEmptyList a -\u003e [a]",
        "fct-source": "src/Language-JavaScript-NonEmptyList.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript NonEmptyList",
        "module": "Language.JavaScript.NonEmptyList",
        "name": "toList",
        "normalized": "NonEmptyList a-\u003e[a]",
        "package": "js-good-parts",
        "partial": "List",
        "signature": "NonEmptyList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#",
      "description": {
        "fct-module": "Language.JavaScript.Pretty",
        "fct-package": "js-good-parts",
        "fct-signature": "module",
        "fct-source": "src/Language-JavaScript-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript Pretty",
        "module": "Language.JavaScript.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eThe member \u003ccode\u003eprettyList\u003c/code\u003e is only used to define the \u003ccode\u003einstance Pretty\n a =\u003e Pretty [a]\u003c/code\u003e. In normal circumstances only the \u003ccode\u003epretty\u003c/code\u003e function\n is used.\n\u003c/p\u003e",
        "fct-module": "Language.JavaScript.Pretty",
        "fct-package": "js-good-parts",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "The member prettyList is only used to define the instance Pretty Pretty In normal circumstances only the pretty function is used",
        "hierarchy": "Language JavaScript Pretty",
        "module": "Language.JavaScript.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "js-good-parts",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#v:pretty",
      "description": {
        "fct-module": "Language.JavaScript.Pretty",
        "fct-package": "js-good-parts",
        "fct-signature": "a -\u003e Doc",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript Pretty",
        "module": "Language.JavaScript.Pretty",
        "name": "pretty",
        "normalized": "a-\u003eDoc",
        "package": "js-good-parts",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/js-good-parts/docs/Language-JavaScript-Pretty.html#v:prettyList",
      "description": {
        "fct-module": "Language.JavaScript.Pretty",
        "fct-package": "js-good-parts",
        "fct-signature": "[a] -\u003e Doc",
        "fct-type": "method",
        "title": "prettyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language JavaScript Pretty",
        "module": "Language.JavaScript.Pretty",
        "name": "prettyList",
        "normalized": "[a]-\u003eDoc",
        "package": "js-good-parts",
        "partial": "List",
        "signature": "[a]-\u003eDoc"
      }
    }
  }
]